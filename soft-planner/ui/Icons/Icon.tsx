import { FC } from "react";
import { UIIconsType } from "./Icons"
import { UIFontSize } from "../ui-system/ui-system";

type Props = {
    icon: UIIconsType;
    size?: UIFontSize;
    className?: string;
}

export const Icon: FC<Props> = ({ icon: Icon, size, className }) => {
    return(
        <Icon className={className} style={{ fontSize: size }} />
    )
}