import type { NextApiResponse } from "next";
import nc from "next-connect";
import fileUpload from "express-fileupload";
import { v4 as uuidv4 } from "uuid";
import {
    FileBody,
    FileUploadRequest,
} from "interface/file-upload-request.interface";
import storage from "config/storage";


const upload = (fileOB: FileBody, bucketName: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        const bucket = storage.bucket();
        const fileName = uuidv4();
        const fileUpload = bucket.file(`${bucketName}/${fileName}`);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: fileOB.mimetype,
            },
        });
        blobStream.on("error", (err) => {
            reject(err);
        });
        blobStream.on("finish", () => {
            resolve(fileName);
        });
        blobStream.end(fileOB.data);
    });
};

const handler = nc<FileUploadRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
    .use(fileUpload())
    .post(async (req, res) => {
        let id = await upload(req.files.file, "event-image");
        res.send(id)
    });

export default handler;

export const config = {
    api: {
        bodyParser: false,
    },
};
