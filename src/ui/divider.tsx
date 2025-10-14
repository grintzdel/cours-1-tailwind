import {JSX} from "react";

type DividerProps = {
    axis?: 'vertical' | 'horizontal';
    color?: 'bg-gray-300' | 'bg-black' | 'bg-white';
    width?: 'full' | 'regular' | 'small';
}

export const Divider = ({axis = 'horizontal', color = 'bg-white', width = 'regular'}: DividerProps): JSX.Element => {
    const isVertical = axis === 'vertical';

    const widthMap = {
        'full': isVertical ? 'h-full' : 'w-full',
        'regular': isVertical ? 'h-16' : 'w-16',
        'small': isVertical ? 'h-8' : 'w-8'
    };

    const thicknessClass = isVertical ? 'w-px' : 'h-px';
    const widthClass = widthMap[width];

    return (
        <div className={`${thicknessClass} ${widthClass} ${color}`} />
    )
}