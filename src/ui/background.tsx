import React from "react";

type BackgroundProps = {
    isGradient?: boolean;
    isFull?: 'bg-[#010009]' | 'bg-white';
    children: React.ReactNode;
}

export const Background = ({isGradient = false, isFull = 'bg-white', children}: BackgroundProps) => {
    const gradientStyle = isGradient
        ? { background: 'linear-gradient(180deg, rgba(2, 0, 14, 1) 0%, rgba(58, 42, 152, 1) 50%, rgba(236, 234, 250, 1) 100%)' }
        : {};

    const bgClass = isGradient ? '' : isFull;

    return (
        <div className={bgClass} style={gradientStyle}>
            {children}
        </div>
    )
}