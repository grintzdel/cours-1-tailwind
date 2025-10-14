import React, {JSX} from "react";

type ArrowSvgIconProps = {
    className?: React.ComponentProps<'div'>['className'];
}

type CircleArrowProps = {
    className?: React.ComponentProps<'div'>['className'];
}

export const Arrow = ({className}: ArrowSvgIconProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className={`max-w-[20px] w-5 ${className || ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
        </svg>
    );
}

export const CircleArrow = ({className}: CircleArrowProps): JSX.Element => {
    return (
        <div className={`w-12 h-12 rounded-full border-2 border-black flex items-center justify-center ${className || ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                 className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
            </svg>
        </div>
    );
}