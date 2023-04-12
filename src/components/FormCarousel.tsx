import { useEffect, useState, useRef } from 'react';
import { CharState } from '../App'
import Form from './Form';


interface CCprop {
    setChar: React.Dispatch<React.SetStateAction<CharState>>;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
    char: CharState;
    formPosition: number;
};

export default function FormCarousel({ setChar, setPosition, char, formPosition }: CCprop) {
    const forms = [
        { number: 0, name: 'nameinputs', type: 'fill', fill: ['name', 'age', 'gender'] },
        { number: 1, name: 'statinputs', type: 'stats' },
        { number: 2, name: 'race', type: 'select', options: ['dragonborn', 'dwarf', 'elf', 'gnome', 'halfelf', 'halforc', 'halfling', 'human', 'tiefling'] },
        { number: 3, name: 'class', type: 'select', options: ['artificer', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'] },
        { number: 4, name: 'background', type: 'select', options: ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folkhero', 'gladiator', 'guildartisan', 'hemrit', 'knight', 'noble', 'outlander', 'pirate', 'sage', 'sailor', 'soldier', 'urchin'] },
    ]

    const carouselWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!carouselWrapperRef.current) return;
        const newTransform = (formPosition * -20) - 10;
        carouselWrapperRef.current.style.transform = `translate(${newTransform}%,-50%)`;
    }, [formPosition]);

    return (
        <section className='carouselwrapper' data-wrapper={formPosition} ref={carouselWrapperRef}>
            {forms.map(form => <Form form={form} char={char} setChar={setChar} setPosition={setPosition} position={formPosition} key={form.name} />)}
        </section>
    )
}