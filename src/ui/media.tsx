import React, {JSX} from "react";
import Image from "next/image";

type MediaProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
}

type MediaSkeletonProps = {
    width: number;
    height: number;
}

type MediaGalleryProps = {
    children: React.ReactNode;
    flexDirection?: 'col' | 'row';
}

export const Media = ({src, alt, width, height}: MediaProps): JSX.Element => {
    return (
        <div className="rounded-md overflow-hidden flex-shrink-0" style={{width: `${width}px`, height: `${height}px`}}>
            <Image className="w-full h-full object-cover" src={src} alt={alt} width={width} height={height} />
        </div>
    )
}

export const MediaSkeleton = ({width, height}: MediaSkeletonProps): JSX.Element => {
    return (
        <div
            className="rounded-md border-2 border-gray-300 flex-shrink-0"
            style={{width: `${width}px`, height: `${height}px`, minHeight: `${height}px`}}
        />
    )
}

export const MediaGallery = ({children, flexDirection = 'row'}: MediaGalleryProps): JSX.Element => {
    const mobileClass = flexDirection === 'row' ? 'flex-col' : 'flex-row';
    const desktopClass = flexDirection === 'row' ? 'lg:flex-row' : 'lg:flex-col';

    return (
        <div className={`flex ${mobileClass} gap-2 ${desktopClass}`}>
            {children}
        </div>
    )
}