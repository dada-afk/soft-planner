import { FC } from "react";
import { UIIconsType } from "./Icons"

type Props = {
    icon: UIIconsType;
    size?: string;
    className?: string;
}

export const Icon: FC<Props> = ({ icon: Icon, size, className }) => {
    return(
        <Icon className={className} style={{ fontSize: size, margin: 0 }} />
    )
}