import { FC } from "react"
import { Button } from "../Button/Button"
import { Card } from "../Card/Card"
import { Emoji } from "../Emoji/Emoji"
import { Typography } from "../Typography/Typography"
import { FontSize, FontWeight, UIButtonColor, UIButtonVariant, UIFeelingVariant } from "../ui-system/ui-system"
import { getMeta } from "@/lib/utils/getMeta"
import './FeelingsCard.scss'
import { UIIcons } from "../Icons/Icons"

type Props = {
    value: number;
    text: string;
    isFeelingSet: boolean;
    onClick: () => void;
}

export const FeelingsCard: FC<Props> = ({ value, text, isFeelingSet, onClick }) => {
    const { emoji } = getMeta(value);

    return(
        <Card>
            <div className={'ui-feelings-container'}>
                <Typography text={text} fontWeight={FontWeight[600]} fontSize={FontSize.xs} />
                <Emoji emoji={isFeelingSet ? emoji : UIIcons.addEmotion} />
                <Button onClick={onClick} icon={isFeelingSet ? UIIcons.update : UIIcons.add} color={UIButtonColor.Teal} variant={UIButtonVariant.Tertiary} />
            </div>
        </Card>
    )
}