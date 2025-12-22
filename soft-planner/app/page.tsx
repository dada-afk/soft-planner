'use client';
import { Button } from "@/ui/Button/Button";
import { Card } from "@/ui/Card/Card";
import { FeelingsCard } from "@/ui/FeelingsCard/FeelingsCard";
import { Checkbox } from "@/ui/Inputs/Checkbox";
import { Textarea } from "@/ui/Inputs/Textarea";
import { Modal } from "@/ui/Modal/Modal";
import { Scale } from "@/ui/Scale/Scale";
import { Typography } from "@/ui/Typography/Typography";
import { FontSize, FontWeight, TextareaRows, UIButtonVariant, UIMoodType, UIFeelingVariant } from "@/ui/ui-system/ui-system";
import { useState } from "react";
import styles from '../styles/page.module.scss';

export default function Home() {
    const username = 'Dada';
    const [journalValue, setJournalValue] = useState('');
    
    const [inputValue, setInputValue] = useState({ 1: '', 2: '', 3: '' });
    const [checkboxValue, setCheckboxValue] = useState({ 1: false, 2: false, 3: false });

    const [openEnergy, setOpenEnergy] = useState(false);
    const [energy, setEnergy] = useState(50);
    const [isEnergySet, setIsEnergySet] = useState(false);
    
    const [mood, setMood] = useState(50);
    const [isMoodSet, setIsMoodSet] = useState(false);
    const [openMood, setOpenMood] = useState(false);

    const [dailyMood, setDailyMood] = useState(50);
    const [isDailyMoodSet, setIsDailyMoodSet] = useState(false);
    const [openDailyMood, setOpenDailyMood] = useState(false);

    const addEnergy = () => {
        console.log(energy);
        setIsEnergySet(true);
        setOpenEnergy(false);
    };
    
    const addMood = () => {
        console.log(mood);
        setIsMoodSet(true);
        setOpenMood(false);
    };

    const addDailyMood = () => {
        console.log(dailyMood);
        setIsDailyMoodSet(true);
        setOpenDailyMood(false);
    };

    return (
        <>
            <Card>
                <Typography text={`Welcome back, ${username}! 👋`} fontSize={FontSize.lg} fontWeight={FontWeight[600]} />
            </Card>

            {/* Journal entry */}
            <Card>
                <Textarea id={'journal'} value={journalValue} onChange={setJournalValue} placeholder={'Placeholder text...'} rows={TextareaRows[6]} label={"What's on your mind?"} />
                <Button onClick={() => console.log(journalValue)} text={'Add entry'} />
            </Card>

            {/* Input energy and mood */}
            <div className={styles['mood-inputs']}>
                <FeelingsCard
                    value={energy} 
                    text={'Energy'} 
                    onClick={() => setOpenEnergy(true)} 
                    isFeelingSet={isEnergySet} 
                />

                <FeelingsCard
                    value={mood} 
                    text={'Current mood'}
                    onClick={() => setOpenMood(true)} 
                    isFeelingSet={isMoodSet}
                />

                <FeelingsCard
                    value={dailyMood} 
                    text={'Daily mood'}
                    onClick={() => setOpenDailyMood(true)} 
                    isFeelingSet={isDailyMoodSet}
                />
            </div>

            <Card>
                <Checkbox id={'checkbox-1'} checked={checkboxValue[1]} onChange={() => setCheckboxValue(prev => ({...prev, 1: !prev[1]}))} hasText textValue={inputValue[1]} setTextValue={(e) => setInputValue(prev => ({...prev, 1: e}))} label={'Today I want to...'} />
                <Checkbox id={'checkbox-2'} checked={checkboxValue[2]} onChange={() => setCheckboxValue(prev => ({...prev, 2: !prev[2]}))} hasText textValue={inputValue[2]} setTextValue={(e) => setInputValue(prev => ({...prev, 2: e}))} />
                <Checkbox id={'checkbox-3'} checked={checkboxValue[3]} onChange={() => setCheckboxValue(prev => ({...prev, 3: !prev[3]}))} hasText textValue={inputValue[3]} setTextValue={(e) => setInputValue(prev => ({...prev, 3: e}))} />
            </Card>

            {/* Energy modal */}
            <Modal
                isOpen={openEnergy}
                onClose={() => setOpenEnergy(false)}
                footer={
                    <Button variant={UIButtonVariant.Primary} onClick={addEnergy} text={'Add energy'} />
                }
            >

                <Scale id={'energy-modal'} value={energy} setValue={setEnergy} variant={UIFeelingVariant.Energy} />
            </Modal>
            
            {/* Mood modal */}
            <Modal
                isOpen={openMood}
                onClose={() => setOpenMood(false)}
                footer={
                    <Button variant={UIButtonVariant.Primary} onClick={addMood} text={'Add mood'} />
                }
            >
                <Scale id={'current-mood-modal'} value={mood} setValue={setMood} variant={UIFeelingVariant.Mood} moodType={UIMoodType.Current} />
            </Modal>

            <Modal
                isOpen={openDailyMood}
                onClose={() => setOpenDailyMood(false)}
                footer={
                    <Button variant={UIButtonVariant.Primary} onClick={addDailyMood} text={'Add mood'} />
                }
            >
                <Scale id={'daily-mood-modal'} value={dailyMood} setValue={setDailyMood} variant={UIFeelingVariant.Mood} moodType={UIMoodType.Daily} />
            </Modal>
        </>
    );
}