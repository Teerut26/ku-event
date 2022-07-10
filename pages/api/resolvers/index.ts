import storage from "config/storage";
import { Event } from "interface/database.interface";
import { ResolversParam } from "interface/resolvers-param.interface";
import { v4 as uuidv4 } from "uuid";
import stream from "stream";
import db from "config/firestore";

export const resolvers = {
    Query: {
        getEvents: async () => {
            // try {
            //     const users = await axios.get("https://api.github.com/users");
            //     return users.data.map(({ id, login, avatar_url }: any) => ({
            //         id,
            //         login,
            //         avatar_url,
            //     }));
            // } catch (error) {
            //     throw error;
            // }
        },
        // getUser: async (_: any, args: any, { req, token }: ResolversParam) => {
        //     try {
        //         CheckToken(token);
        //         const user = await axios.get(
        //             `https://api.github.com/users/${args.name}`
        //         );
        //         return {
        //             id: user.data.id,
        //             login: user.data.login,
        //             avatar_url: user.data.avatar_url,
        //         };
        //     } catch (error) {
        //         throw error;
        //     }
        // },
    },
    Mutation: {
        createEvent: async (
            _: any,
            { input }: { input: Event },
            { req, token }: ResolversParam
        ) => {
            let eventColection = db.collection("event");
            let eventRef = await eventColection.add({
                ...input,
            });

            // bucket.upload("local-img.png",)
            // console.log(input.image)
        },
    },
};
