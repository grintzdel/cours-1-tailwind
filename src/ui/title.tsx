import React, {JSX} from "react";

type TitleProps = {
    text: string;
    textColor?: string;
    asListItem?: boolean;
    size?: string;
}

type TitlesListProps = {
    children: React.ReactNode;
}

export const Title = ({text, textColor, asListItem = false, size = 'text-6xl'}: TitleProps): JSX.Element => {
    const heading = <h1 className={`${size} ${textColor || ''}`}>{text}</h1>;

    if (asListItem) {
        return <li>{heading}</li>;
    }

    return heading;
}

export const TitlesList = ({children}: TitlesListProps): JSX.Element => {
    return (
        <ul className="flex flex-col">
            {children}
        </ul>
    )
}