import { FC, useState } from "react";
import "./Scale.scss";
import { FormField } from "../Inputs/FormField";
import { Typography } from "../Typography/Typography";
import { UIIcons } from "../Icons/Icons";
import { Icon } from "../Icons/Icon";
import { FontSize, UIMoodType, UIScaleVariant } from "../ui-system/ui-system";

type Props = {
  id: string;
  variant: UIScaleVariant;
  moodType?: UIMoodType;
};

const LEVELS = [
  { max: 20, energyLabel: 'Exhausted', moodLabel: 'Awful', color: 'red', emoji: UIIcons.emojiWorst },
  { max: 40, energyLabel: 'Low', moodLabel: 'Meh', color: 'pink', emoji: UIIcons.emojiBad },
  { max: 60, energyLabel: 'Okay', moodLabel: 'Okay', color: 'purple', emoji: UIIcons.emojiNeutral  },
  { max: 80, energyLabel: 'Good', moodLabel: 'Good', color: 'blue', emoji: UIIcons.emojiGood },
  { max: 100, energyLabel: 'Buzzing', moodLabel: 'Amazing', color: 'teal', emoji: UIIcons.emojiBest },
];

export const Scale: FC<Props> = ({ id, variant, moodType }) => {
    const [value, setValue] = useState(50);
    const energyMode = variant === UIScaleVariant.Energy;
    const moodMode = variant === UIScaleVariant.Mood;

    const isMoodTypeCurrent = moodType === UIMoodType.Current;

    const getEnergyMeta = (value: number) => {
        return LEVELS.find(level => value <= level.max)!;
    }

    const { energyLabel, moodLabel, color, emoji } = getEnergyMeta(value);

    const scaleElement = <div className={`ui-scale scale--${color}`}>
        <Typography text={energyMode ? energyLabel : moodLabel} className={'label'} fontSize={FontSize["4xl"]} />
        <Icon icon={emoji} size={80} />
        <input
            id={id}
            type={'range'}
            min={0}
            max={100}
            step={1}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className={'slider'}
        />
    </div>;

    return (
        <>
           {energyMode && <FormField
                id={'energy'}
                label={'Energy level'}
                helperText={'How energized do you feel right now?'}
            >
                {scaleElement}
            </FormField>}

            {moodMode && <FormField
                id={'mood'}
                label={isMoodTypeCurrent ? 'Current mood' : 'Daily mood'}
                helperText={isMoodTypeCurrent ? 'How do you feel right now?' : 'How did you feel overall today?'}
            >
                {scaleElement}
            </FormField>}
        </>
    );
};
