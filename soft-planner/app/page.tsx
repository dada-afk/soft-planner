'use client';
import { Button } from "@/ui/Button/Button";
import { Card } from "@/ui/Card/Card";
import { UIIcons } from "@/ui/Icons/Icons";
import { Checkbox } from "@/ui/Inputs/Checkbox";
import { Text } from "@/ui/Inputs/Text";
import { Textarea } from "@/ui/Inputs/Textarea";
import { Scale } from "@/ui/Scale/Scale";
import { Typography } from "@/ui/Typography/Typography";
import { FontSize, FontWeight, TextareaRows, UIButtonVariant, UIIconPositions, UIMoodType, UIScaleVariant } from "@/ui/ui-system/ui-system";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <>
        <Card>
            <Typography text={'This is the main page'} fontSize={FontSize.md} fontWeight={FontWeight[500]} />
            <Text id={'1'} value={inputValue} onChange={setInputValue} label={'Label'} error={'Something went wrong.'} placeholder={'Placeholder text'}>
                <Button onClick={() => console.log('hi')} icon={UIIcons.add} text="Add" iconPosition={UIIconPositions.End} variant={UIButtonVariant.Secondary} />
            </Text>
            <Textarea id={'2'} value={inputValue} onChange={setInputValue} placeholder={'Placeholder text...'} rows={TextareaRows[6]} label={'How are you feeling today?'} />
            <Checkbox id={'3'} checked={checkboxValue} onChange={() => setCheckboxValue(prev => !prev)} hasText textValue={inputValue} setTextValue={setInputValue} label={'Today I want to...'} />
            <Checkbox id={'3'} checked={checkboxValue} onChange={() => setCheckboxValue(prev => !prev)} hasText textValue={inputValue} setTextValue={setInputValue} />
        </Card>
        <Card>
            <Scale id={'4'} variant={UIScaleVariant.Energy} />
        </Card>
        <Card>
            <Scale id={'4'} variant={UIScaleVariant.Mood} moodType={UIMoodType.Current} />
        </Card>
        <Card>
            <Scale id={'4'} variant={UIScaleVariant.Mood} moodType={UIMoodType.Daily} />
        </Card>
    </>
    );
}