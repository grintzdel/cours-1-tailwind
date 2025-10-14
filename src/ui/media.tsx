import React, {JSX} from "react";
import Image from "next/image";

type MediaProps = {
    src: string;
    alt: string;
    width: number | 'full';
    height: number | 'full';
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

export const Media = ({src, alt, width, height, aspectRatio = '16/9'}: MediaProps): JSX.Element => {
    const widthStyle = width === 'full' ? '100%' : `${width}px`;
    const heightStyle = height === 'full' ? '100%' : `${height}px`;
    const useFill = width === 'full' || height === 'full';

    const divStyle: React.CSSProperties = {
        width: widthStyle,
        height: heightStyle,
        ...(useFill && width === 'full' && height === 'full' ? { aspectRatio } : {})
    };

    return (
        <div className="rounded-md overflow-hidden flex-shrink-0 relative" style={divStyle}>
            {useFill ? (
                <Image className="object-cover" src={src} alt={alt} fill />
            ) : (
                <Image className="w-full h-full object-cover" src={src} alt={alt} width={width as number} height={height as number} />
            )}
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