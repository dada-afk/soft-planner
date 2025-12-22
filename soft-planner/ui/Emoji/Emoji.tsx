import { FC } from "react"
import { Icon } from "../Icons/Icon"
import { UIIconsType } from "../Icons/Icons"
import { Typography } from "../Typography/Typography"
import { FontSize, UIFontSize } from "../ui-system/ui-system"
import './Emoji.scss';

type Props = {
    emoji: UIIconsType;
    label?: string;
    size?: UIFontSize | string;
}

export const Emoji: FC<Props> = ({ emoji, label, size = FontSize["2xl"] }) => {
    return(
        <div className={'emoji'}>
            {label && <Typography text={label} className={'label'} fontSize={FontSize["4xl"]} />}
            <Icon icon={emoji} size={size} />
        </div>
    )
}