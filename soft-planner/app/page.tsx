'use client';
import { Button } from "@/ui/Button/Button";
import { UIIcons } from "@/ui/Icons/Icons";
import { Text } from "@/ui/Inputs/Text";
import { Typography } from "@/ui/Typography/Typography";
import { FontSize, FontWeight, UIButtonVariant, UIIconPositions } from "@/ui/ui-system/ui-system";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Typography text={'This is the main page'} fontSize={FontSize.md} fontWeight={FontWeight[500]} />
      <Text id={'1'} value={inputValue} onChange={setInputValue} label={'Label'} error={'Something went wrong.'} placeholder={'Placeholder text'}>
        <Button onClick={() => console.log('hi')} icon={UIIcons.add} iconPosition={UIIconPositions.End} variant={UIButtonVariant.Secondary} />
      </Text>
    </>
  );
}