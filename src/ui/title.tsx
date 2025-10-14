import React, {JSX} from "react";

type TitleProps = {
    text: string;
    textColor?: string;
}

type TitlesListProps = {
    children: React.ReactNode;
}

export const Title = ({text, textColor}: TitleProps): JSX.Element => {
    return (
        <li className={`text-6xl ${textColor || ''}`}>{text}</li>
    )
}

export const TitlesList = ({children}: TitlesListProps): JSX.Element => {
    return (
        <ul className="flex flex-col">
            {children}
        </ul>
    )
}