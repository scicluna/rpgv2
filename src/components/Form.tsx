import { CharState } from "../App";
import React, { useEffect, useRef, useState } from "react";
import { Race, dragonborn, dwarf, elf, gnome, halfelf, halforc, halfling, human, tiefling } from '../assets/libraries/races.js'
import { DNDClass, barbarian } from "../assets/libraries/classes";
import { Background, acolyte, charlatan, criminal, entertainer, folkhero, gladiator, guildartisan, hermit, knight, noble, outlander, pirate, sage, sailor, soldier, urchin } from "../assets/libraries/backgrounds";


type form = {
    number: number
    name: string
    type: string
    fill?: string[]
    options?: string[]
}

interface Formprop {
    form: form
    setChar: React.Dispatch<React.SetStateAction<CharState>>;
    setPosition: React.Dispatch<React.SetStateAction<number>>
    key: string
    char: CharState
    position: number
}

export default function Form({ form, setChar, setPosition, char, position }: Formprop) {

    const formBG = useRef<HTMLDivElement>(null)

    function changeChar(key: string, value: string | number) {
        setChar({ ...char, [key]: value })
    }

    function changePosition(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        e.currentTarget.classList.contains('onwardsbtn') ? setPosition(position + 1) : setPosition(position - 1)
    }

    useEffect(() => {
        if (!formBG.current) return
        if (position == form.number) {
            formBG.current.style.opacity = '0'
        } else formBG.current.style.opacity = '1'

        formBG.current.style.backgroundImage = `url(./src/assets/backgrounds/form${form.number}.webp)`
    }, [position])

    return (
        <form data-form={form.number} id={`form${form.number}`}>
            <div className="backwards">
                <button className={`backwardsbtn ${form.number == 0 ? 'invisible' : ''}`} type="submit" onClick={(e) => changePosition(e)}>
                    <i className="fas fa-share fa-5x"></i>
                </button>
            </div>
            <div className={`inputs ${form.name}`}>
                <div className="form-background" ref={formBG}></div>
                {form.type == 'fill' ? fillSubform(form, changeChar) : form.type == 'stats' ? statSubForm(form, char, changeChar) : selectSubForm(form)}
            </div>
            <div className="onwards">
                <button className='onwardsbtn' type="submit" onClick={(e) => changePosition(e)}>
                    <i className="fas fa-share fa-5x"></i>
                </button>
            </div>

        </form >
    )
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////SUBCOMPONENTS///////////////////////////////SUBCOMPONENTS///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fillSubform(form: form, changeChar: (key: string, value: string | number) => void) {
    return (

        <>
            {form.fill?.map(fill =>
                <React.Fragment key={fill}>
                    <label htmlFor={`${fill}input`}>{fill.toUpperCase()}</label>
                    <input className="input"
                        id={`${fill}input`}
                        type="text" placeholder={fill}
                        onChange={(e) => changeChar(fill, e.target.value)} />
                </React.Fragment>
            )}
        </>
    )
}

function statSubForm(form: form, char: CharState, changeChar: (key: string, value: string | number) => void) {
    const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha']
    const [pointsRemaining, setPoints] = useState(27)

    function handleStat(stat: string, change: number) {
        if (pointsRemaining == 0 && change == 1) return //if we have no more points, we can't increase stats
        if (pointsRemaining == 27 && change == -1) return //if we have 27 points, we can't decrease stats
        if ((char[stat] + change) < 8 || (char[stat] + change) > 15) return //if we try to increase a stat over 15, or decrease a stat  under 8 return
        let pointsChange = 0
        if ((change > 0 && char[stat] >= 13) || (change < 0 && char[stat] >= 14)) {
            pointsChange = change * -2
        } else pointsChange = change * -1//if your stat is already 13 or greater, points change at double the rate.

        //if our remaining points < points change (like 0 points remaining and try to take away 2, it returns)
        //if our remaining points + our points change go above 27, return
        if (pointsRemaining < -pointsChange) return


        setPoints(pointsRemaining + pointsChange)
        changeChar(stat, char[stat] + change)
    }

    return (
        <>
            <div className="row">
                <h4>Points Remaining:
                    <span id="statpoints">{pointsRemaining}</span>
                </h4>
            </div>
            {stats.map(stat =>
                <div className="row" key={stat}>
                    <label htmlFor={`${stat}input`}>{stat.toUpperCase()}</label>
                    <input id={`${stat}input`} type="text" readOnly value={char[stat] || 8}></input>
                    <div className="statbtns">
                        <button className="statup" type="button" onClick={() => { handleStat(stat, 1) }}>up</button>
                        <button className="statdown" type="button" onClick={() => { handleStat(stat, -1) }}>down</button>
                    </div>
                    <p className="modifier" id={`${stat}modifier`}>{(Math.floor((parseInt(char[stat]) - 10) / 2)) || -1}</p>
                </div>
            )}
        </>
    )
}

function selectSubForm(form: form) {
    let values;
    if (form.name == 'race') values = [dragonborn, dwarf, elf, gnome, halfelf, halforc, halfling, human, tiefling]
    else if (form.name == 'class') values = [barbarian]
    else if (form.name == 'background') values = [acolyte, charlatan, criminal, entertainer, folkhero, gladiator, guildartisan, hermit, knight, noble, outlander, pirate, sage, sailor, soldier, urchin]

    if (!values) return

    const [currentValue, setCurrentValue] = useState<number>(0)
    const realValue = values[currentValue - 1]

    function raceDescription(race: Race) {
        return (
            <>
                <h1>ITS A RACE</h1>
            </>
        )
    }

    function classDescription(dndClass: DNDClass) {
        return (
            <>
                <h1>ITS A CLASS</h1>
            </>
        )
    }

    function backgroundDescription(background: Background) {
        console.log('background')
        return (
            <>
                <h1>ITS A BACKGROUND</h1>
            </>
        )
    }

    const renderDescription = () => {
        if (!realValue) return
        if ('speed' in realValue) {
            return raceDescription(realValue)
        } else if ('hit_die' in realValue) {
            return classDescription(realValue)
        } else if (form.name == 'background') {
            return backgroundDescription(realValue)
        } else console.log('error')
    }

    return (
        <>
            <div className={`${form.name}area`}>
                <label htmlFor={`${form.name}input`}>{form.name.toUpperCase()}</label>
                <select id={`${form.name}input`} onChange={(e) => setCurrentValue(e.currentTarget.selectedIndex)}>
                    <option value="">Choose Wisely</option>
                    {values.map((value, i) =>
                        <option value={value.name} key={i}>{value.name}</option>
                    )}
                </select>
                <div className={`${form.name}information`}>
                    {renderDescription()}
                </div>
            </div>
        </>
    )
}
