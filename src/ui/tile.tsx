import React, {JSX} from "react";
import {Title} from "@/ui/title";
import {Media} from "@/ui/media";

type TileProps = {
    title: string;
    titleSize?: string;
    titleColor?: string;
    imageSrc: string;
    imageAlt: string;
    imageAxis?: 'horizontal' | 'vertical';
    imageWidth?: string;
    imageHeight?: string;
    description: string;
}

export const Tile = ({
    title,
    titleSize = 'text-2xl',
    titleColor,
    imageSrc,
    imageAlt,
    imageAxis = 'horizontal',
    imageWidth,
    imageHeight,
    description
}: TileProps): JSX.Element => {
    return (
        <div className="rounded-lg hover:bg-gray-100 transition-colors duration-200 p-8">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-[50%_auto_1fr] md:items-center">
                <div className="flex justify-start max-w-[160px]">
                    <Title
                        text={title}
                        size={titleSize}
                        textColor={titleColor}
                    />
                </div>
                <div className="flex gap-4 md:contents">
                    <div className="w-auto">
                        <Media
                            src={imageSrc}
                            alt={imageAlt}
                            axis={imageAxis}
                            width={imageWidth}
                            height={imageHeight}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-gray-700 max-w-[260px] text-left">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}