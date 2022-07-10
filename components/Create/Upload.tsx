import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import tw from "twin.macro";

interface Props {
    onUpload?: (images: ImageListType) => void;
}

const DropArea = styled.div(
    tw`border-2 h-[5rem] flex justify-center items-center rounded-xl border-dashed cursor-pointer`
);

const Upload: React.FC<Props> = ({ onUpload }) => {
    const [images, setImages] = React.useState<ImageListType>([]);
    const maxNumber = 5;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };

    useMemo(() => {
        onUpload && onUpload(images);
    }, [images]);
    return (
        <>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className={css(tw`w-full flex flex-col gap-3`)}>
                        <DropArea
                            onClick={onImageUpload}
                            {...dragProps}
                            className={`${isDragging ? "border-red-400" : ""}`}
                        >
                            Click or Drop here
                        </DropArea>
                        <div className="flex gap-2 flex-wrap">
                            {imageList.map((image, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute z-10 top-0 right-0 translate-x-[10px] translate-y-[-10px] flex gap-1">
                                        <div
                                            onClick={() => onImageRemove(index)}
                                            className="badge badge-lg badge-primary cursor-pointer"
                                        >
                                            x
                                        </div>
                                        <div
                                            onClick={() => onImageUpdate(index)}
                                            className="badge badge-lg badge-primary cursor-pointer"
                                        >
                                            <FontAwesomeIcon
                                                className="w-2"
                                                icon={faPencil}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <img
                                            src={image.dataURL}
                                            className="object-cover h-[6rem] w-[6rem] "
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </>
    );
};

export default Upload;
