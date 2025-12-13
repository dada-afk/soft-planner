'use client';
import { FC, MouseEventHandler } from "react";
import './Button.scss';
import { UIIconsType } from "../Icons/Icons";
import { UIButtonColor, UIButtonVariant, UIIconPositions } from "../UIEnums/UIEnums";
import { getClassNames } from "@/lib/utils/getClassNames";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    icon?: UIIconsType;
    iconPosition?: UIIconPositions;
    variant?: UIButtonVariant;
    color?: UIButtonColor;
};

export const Button: FC<Props> = ({ onClick, text, icon: Icon, iconPosition = UIIconPositions.Start, variant = UIButtonVariant.Primary, color = UIButtonColor.Pink }) => {
    const colorClass = color !== undefined ? UIButtonColor[color].toLowerCase() : '';

    const classNames = getClassNames(
        'ui-button',
        iconPosition === UIIconPositions.Start && 'icon-start',
        iconPosition === UIIconPositions.End && 'icon-end',
        variant === UIButtonVariant.Primary && 'primary',
        variant === UIButtonVariant.Secondary && 'secondary',
        colorClass,
    );


    return(
        <button className={classNames} onClick={onClick}>
            {Icon && <Icon />}
            {text}
        </button>
    )
};