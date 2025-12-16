import { FC } from "react";
import './Typography.scss';
import { UIFontSize, FontSize, UIFontWeight, FontWeight } from "../ui-system/ui-system";
import { getClassNames } from "@/lib/utils/getClassNames";

type Props = {
    text: string;
    fontSize?: UIFontSize;
    fontWeight?: UIFontWeight;
    isItalic?: boolean;
    className?: string;
}

export const Typography: FC<Props> = ({
    text,
    fontSize = FontSize.md,
    fontWeight = FontWeight[500],
    isItalic = false,
    className,
}) => {
    const classNames = getClassNames(
        'ui-typography',
        isItalic && 'italic',
        className,
    );

    return(
        <p  
            className={classNames}
            style={{
                fontSize: fontSize, 
                fontWeight: String(fontWeight),
            }}
        >{text}</p>
    )
};