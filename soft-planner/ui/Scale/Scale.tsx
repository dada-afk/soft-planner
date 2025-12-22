import { Dispatch, FC, SetStateAction, useState } from "react";
import "./Scale.scss";
import { FormField } from "../Inputs/FormField";
import { LEVELS, UIMoodType, UIFeelingVariant } from "../ui-system/ui-system";
import { Emoji } from "../Emoji/Emoji";
import { getMeta } from "@/lib/utils/getMeta";

type Props = {
    id: string;
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
    variant: UIFeelingVariant;
    moodType?: UIMoodType;
};

export const Scale: FC<Props> = ({ id, value, setValue, variant, moodType }) => {
    const energyMode = variant === UIFeelingVariant.Energy;
    const moodMode = variant === UIFeelingVariant.Mood;

    const isMoodTypeCurrent = moodType === UIMoodType.Current;

    const { energyLabel, moodLabel, color, emoji } = getMeta(value);

    const scaleElement = <input
        id={id}
        type={'range'}
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={'slider'}
    />;

    return (
        <>
           {energyMode && <FormField
                id={'energy'}
                label={'Energy level'}
                helperText={'How energized do you feel right now?'}
            >   
                <div className={`ui-scale scale--${color}`}>
                    {<Emoji label={energyLabel} emoji={emoji} size={'80px'} />}
                    {scaleElement}
                </div>
            </FormField>}

            {moodMode && <FormField
                id={'mood'}
                label={isMoodTypeCurrent ? 'Current mood' : 'Daily mood'}
                helperText={isMoodTypeCurrent ? 'How do you feel right now?' : 'How did you feel overall today?'}
            >   
                <div className={`ui-scale scale--${color}`}>
                    {<Emoji label={moodLabel} emoji={emoji} size={'80px'} />}
                    {scaleElement}
                </div>
            </FormField>}
        </>
    );
};
