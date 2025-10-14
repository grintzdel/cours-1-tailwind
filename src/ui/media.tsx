import React, {JSX} from "react";
import Image from "next/image";

type MediaProps = {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    aspectRatio?: string;
}

type MediaSkeletonProps = {
    width: number;
    height: number;
}

type MediaGalleryProps = {
    children: React.ReactNode;
    flexDirection?: 'col' | 'row';
}

type MediaBentoProps = {
    children: React.ReactNode;
}

export const Media = ({src, alt, width = 'w-full', height, aspectRatio}: MediaProps): JSX.Element => {
    const divStyle: React.CSSProperties = {};

    if (aspectRatio && !height) {
        divStyle.aspectRatio = aspectRatio;
    }

    const heightClass = height || '';
    const classList = `rounded-md overflow-hidden relative ${width} ${heightClass}`.trim();

    return (
        <div className={classList} style={divStyle}>
            <Image className="object-cover" src={src} alt={alt} fill />
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
    const mobileClass = flexDirection === 'row' ? 'flex-col' : 'flex-col';
    const desktopClass = flexDirection === 'row' ? 'lg:flex-row' : 'lg:flex-col';

    return (
        <div className={`flex ${mobileClass} gap-2 ${desktopClass}`}>
            {children}
        </div>
    )
}

export const MediaBento = ({children}: MediaBentoProps): JSX.Element => {
    return (
        <div className="flex flex-col gap-3 md:gap-5">
            {children}
        </div>
    )
}