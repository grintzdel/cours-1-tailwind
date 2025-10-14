import React, {JSX} from "react";
import Image from "next/image";

type MediaProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
}

type MediaGalleryProps = {
    children: React.ReactNode;
}

export const Media = ({src, alt, width, height}: MediaProps): JSX.Element => {
    return (
        <Image className="rounded-md" src={src} alt={alt} width={width} height={height} />
    )
}

export const MediaGallery = ({children}: MediaGalleryProps): JSX.Element => {
    return (
        <div className="flex flex-wrap gap-4">
            {children}
        </div>
    )
}