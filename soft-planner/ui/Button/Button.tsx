'use client';
import { FC, MouseEventHandler } from "react";
import './Button.scss';
import { UIIconsType } from "../Icons/Icons";
import { FontSize, FontWeight, UIButtonColor, UIButtonVariant, UIIconPositions } from "../ui-system/ui-system";
import { getClassNames } from "@/lib/utils/getClassNames";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icons/Icon";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    icon?: UIIconsType;
    iconPosition?: UIIconPositions;
    variant?: UIButtonVariant;
    color?: UIButtonColor;
};

export const Button: FC<Props> = ({ 
    onClick, 
    text, 
    icon, 
    iconPosition = UIIconPositions.Start, 
    variant = UIButtonVariant.Primary, 
    color = UIButtonColor.Purple,
}) => {
    const classNames = getClassNames(
        'ui-button',
        iconPosition === UIIconPositions.Start && 'icon-start',
        iconPosition === UIIconPositions.End && 'icon-end',
        variant,
        color,
    );

    return(
        <button className={classNames} onClick={onClick}>
            {icon && <Icon icon={icon} />}
            {text && <Typography className={'button-text'} text={text} fontSize={FontSize.sm} />}
        </button>
    )
};