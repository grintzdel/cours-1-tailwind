import React, {JSX} from "react";

type AvatarProps = {
    background?: 'bg-white' | 'bg-black';
    media: React.ReactNode;
    borderColor?: 'border-white' | 'border-[#86859b]';
}

type AvatarsListProps = {
    children: React.ReactNode;
}

export const Avatar = ({background = 'bg-white', media, borderColor = 'border-[#86859b]'}: AvatarProps): JSX.Element => {
    return (
        <div className={`w-10 h-10 rounded-full p-1 ${background} border-2 ${borderColor} flex items-center justify-center`}>
            {media}
        </div>
    )
}

export const AvatarsList = ({children}: AvatarsListProps): JSX.Element => {
    return (
        <div className="flex flex-row -space-x-4">
            {children}
        </div>
    )
}
