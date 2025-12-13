'use client';
import { Button } from "@/ui/Button/Button";
import { UIIcons } from "@/ui/Icons/Icons";
import { UIIconPositions } from "@/ui/UIEnums/UIEnums";

export default function Home() {
  const test = () => {
    console.log('test');
  }

  return (
    <>
      <h1>This is the main page</h1>
      <Button onClick={test} text={'Add'} icon={UIIcons.Add} iconPosition={UIIconPositions.End} />
    </>
  );
}
