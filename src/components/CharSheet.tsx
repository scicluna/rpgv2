import { CharState } from '../App'
import { useState, useEffect } from 'react'

interface CharSheetProps {
    char: CharState
    setChar: React.Dispatch<React.SetStateAction<CharState>>;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
}

export interface SaveState {
    char: CharState
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    edit?: boolean
    equipment: string
    features: string
    flaws: string
    ideals: string
    level: number
    bonds: string
    otherProfs: string
    personality: string
    proficiency: number
    saveProfs: boolean[]
    skillProf: boolean[]
}

export default function CharSheet({ char, setChar, setPosition }: CharSheetProps) {

    const [saveState, setSaveState] = useState<SaveState>(JSON.parse(localStorage.getItem('state') ?? '{}') as SaveState || undefined)

    //TS logic gap
    if (!char.class) return null
    if (!char.race) return null
    if (!char.background) return null

    //Race Stat Bonus Application
    let strBonus = 0
    let dexBonus = 0
    let conBonus = 0
    let intBonus = 0
    let wisBonus = 0
    let chaBonus = 0
    char.race.ability_bonuses.forEach(bonus => {
        switch (bonus.ability_score.name) {
            case 'STR': strBonus = bonus.bonus
                break;
            case 'DEX': dexBonus = bonus.bonus
                break;
            case 'CON': conBonus = bonus.bonus
                break;
            case 'INT': intBonus = bonus.bonus
                break;
            case 'WIS': wisBonus = bonus.bonus
                break;
            case 'CHA': chaBonus = bonus.bonus
                break;
            default: console.log('stat error')
        }
    })

    useEffect(() => {
        if (saveState.edit) return

        const initialText = `${char.background?.tools} 
${char.class?.proficiencies
                .map((prof) => prof.name)
                .join(' ')}
            
Skills: ${char.background?.proficiencies.map((prof) => prof)}

Pick: ${char.class?.proficiency_choices[0].desc}`;
        setOtherProfs(initialText);

        const initialEquipment = `${char.background?.equipment} 
                                    Choose an equipment kit from https://www.5esrd.com/`
        setEquipment(initialEquipment);

        const initialFeatures =
            `${char.background?.ability} ${char.class?.abilities.map(ability => `
                        ${ability}`)}`
        setFeatures(initialFeatures)

        const initialSaves = [...saveProfs]
        char.class?.saving_throws.forEach(save => {
            switch (save.name) {
                case "STR": initialSaves[0] = true
                    break;
                case "DEX": initialSaves[1] = true
                    break;
                case "CON": initialSaves[2] = true
                    break;
                case "INT": initialSaves[3] = true
                    break;
                case "WIS": initialSaves[4] = true
                    break;
                case "CHA": initialSaves[5] = true
                    break;
                default: console.log('initial saves error')
            }
        })
        setSaveProfs(initialSaves)
    }, []);

    //Stat states
    //Stat area component?
    const [strength, setStrength] = useState(char.str + strBonus);
    const [dexterity, setDexterity] = useState(char.dex + dexBonus);
    const [constitution, setConstitution] = useState(char.con + conBonus);
    const [intelligence, setIntelligence] = useState(char.int + intBonus);
    const [wisdom, setWisdom] = useState(char.wis + wisBonus);
    const [charisma, setCharisma] = useState(char.cha + chaBonus);
    const [stats, setStats] = useState([8, 8, 8, 8, 8, 8])

    //Other states
    const [proficiency, setProficiency] = useState(saveState?.proficiency || 2)
    const [level, setLevel] = useState(saveState?.level || 1)
    const [skillProf, setSkillProf] = useState(saveState?.skillProf || Array(18).fill(false))
    const [saveProfs, setSaveProfs] = useState(saveState?.saveProfs || Array(6).fill(false))

    //set states for text areas
    const [otherProfs, setOtherProfs] = useState(() => saveState?.otherProfs || '');
    const [equipment, setEquipment] = useState(() => saveState?.equipment || '');
    const [features, setFeatures] = useState(() => saveState?.features || '');
    const [personality, setPersonality] = useState(() => saveState?.personality || '');
    const [ideals, setIdeals] = useState(() => saveState?.ideals || '');
    const [bonds, setBonds] = useState(() => saveState?.bonds || '');
    const [flaws, setFlaws] = useState(() => saveState?.flaws || '');

    const currentState = {
        strength, dexterity, constitution, intelligence, wisdom, charisma, proficiency, level,
        skillProf, saveProfs, otherProfs, equipment, features, personality, ideals, bonds, flaws, char
    }


    //Handle our stat changes
    const handleStatChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        switch (name) {
            case 'str': setStrength(parseInt(e.target.value));
                break;
            case 'dex': setDexterity(parseInt(e.target.value));
                break;
            case 'con': setConstitution(parseInt(e.target.value));
                break;
            case 'int': setIntelligence(parseInt(e.target.value));
                break;
            case 'wis': setWisdom(parseInt(e.target.value));
                break;
            case 'cha': setCharisma(parseInt(e.target.value));
                break;
            default: console.log('handle stat error')
        }
    };

    //Handle our skill "array"
    const handleSkillProf = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
        const newProfs = [...skillProf]
        newProfs[position] == false ? newProfs[position] = true : newProfs[position] = false
        setSkillProf(newProfs)
    }

    const handleSaveProf = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
        const newProfs = [...saveProfs]
        newProfs[position] == false ? newProfs[position] = true : newProfs[position] = false
        setSaveProfs(newProfs)
    }

    //Calc mods up front so we can use them all over
    const strMod = Math.floor((strength - 10) / 2)
    const dexMod = Math.floor((dexterity - 10) / 2)
    const conMod = Math.floor((constitution - 10) / 2)
    const intMod = Math.floor((intelligence - 10) / 2)
    const wisMod = Math.floor((wisdom - 10) / 2)
    const chaMod = Math.floor((charisma - 10) / 2)

    useEffect(() => {
        const prof = Math.floor(2 + (1 / 4 * (level - 1)))
        setProficiency(prof)
    }, [level])

    useEffect(() => {
        const newState = { ...currentState, edit: true }
        setSaveState(newState)
        localStorage.setItem("state", JSON.stringify(newState))
    }, [strength, dexterity, constitution, intelligence, wisdom, charisma, proficiency, level,
        skillProf, saveProfs, otherProfs, equipment, features, personality, ideals, bonds, flaws, char])

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, target: string) => {
        if (target == 'otherProf') setOtherProfs(e.target.value)
        if (target == 'equipment') setEquipment(e.target.value)
        if (target == 'features') setFeatures(e.target.value)
    }



    return (
        <form className="charsheet">
            <header>
                <section className="charname">
                    <label htmlFor="charname">Character Name</label><input name="charname" placeholder="Thoradin Fireforge" readOnly value={char.name} />
                </section>
                <section className="misc">
                    <ul>
                        <li>
                            <label htmlFor="classlevel">className & Level</label><input name="classlevel" placeholder="Paladin 2" readOnly value={`${char.class.name} ${level}`} />
                        </li>
                        <li>
                            <label htmlFor="background">Background</label><input name="background" placeholder="Acolyte" readOnly value={char.background.name} />
                        </li>
                        <li>
                            <label htmlFor="playername">Player Name</label><input name="playername" placeholder="Player McPlayerface" />
                        </li>
                        <li>
                            <label htmlFor="race">Race</label><input name="race" placeholder="Half-elf" readOnly value={char.race.name} />
                        </li>
                        <li>
                            <label htmlFor="alignment">Alignment</label><input name="alignment" placeholder="Lawful Good" />
                        </li>
                        <li>
                            <label htmlFor="experiencepoints">Experience Points</label><input name="experiencepoints" placeholder="3240" />
                        </li>
                    </ul>
                </section>
            </header>
            <main>
                <section>
                    <section className="attributes">
                        <div className="scores">
                            <ul>
                                <li>
                                    <div className="score">
                                        <label htmlFor="Strengthscore">Strength</label><input id="str" name="Strengthscore" onChange={(e) => handleStatChange(e, 'str')} placeholder="10" value={strength}
                                            className="stat" />
                                    </div>
                                    <div className="modifier">
                                        <input name="Strengthmod" placeholder="+0" className="statmod" readOnly
                                            value={strMod} />
                                    </div>
                                </li>
                                <li>
                                    <div className="score">
                                        <label htmlFor="Dexterityscore">Dexterity</label><input name="Dexterityscore" onChange={(e) => handleStatChange(e, 'dex')} placeholder="10" value={dexterity}
                                            className="stat" />
                                    </div>
                                    <div className="modifier">
                                        <input name="Dexteritymod" placeholder="+0" className="statmod" readOnly value={dexMod} />
                                    </div>
                                </li>
                                <li>
                                    <div className="score">
                                        <label htmlFor="Constitutionscore">Constitution</label><input name="Constitutionscore" onChange={(e) => handleStatChange(e, 'con')} placeholder="10" value={constitution}
                                            className="stat" />
                                    </div>
                                    <div className="modifier">
                                        <input name="Constitutionmod" placeholder="+0" className="statmod" readOnly value={conMod} />
                                    </div>
                                </li>
                                <li>
                                    <div className="score">
                                        <label htmlFor="Intelligencescore">Intelligence</label><input name="Intelligencescore" onChange={(e) => handleStatChange(e, 'int')} placeholder="10" value={intelligence}
                                            className="stat" />
                                    </div>
                                    <div className="modifier">
                                        <input name="Intelligencemod" placeholder="+0" className="statmod" readOnly value={intMod} />
                                    </div>
                                </li>
                                <li>
                                    <div className="score">
                                        <label htmlFor="Wisdomscore">Wisdom</label><input name="Wisdomscore" className="stat" onChange={(e) => handleStatChange(e, 'wis')} placeholder="10" value={wisdom} />
                                    </div>
                                    <div className="modifier">
                                        <input name="Wisdommod" placeholder="+0" readOnly value={wisMod} />
                                    </div>
                                </li>

                                <li>
                                    <div className="score">
                                        <label htmlFor="Charismascore">Charisma</label><input name="Charismascore" onChange={(e) => handleStatChange(e, 'cha')} placeholder="10" value={charisma}
                                            className="stat" />
                                    </div>
                                    <div className="modifier">
                                        <input name="Charismamod" placeholder="+0" className="statmod" readOnly value={chaMod} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="attr-applications">
                            <div className="inspiration box">
                                <div className="label-container">
                                    <label htmlFor="inspiration">Inspiration</label>
                                </div>
                                <input name="inspiration" type="checkbox" />
                            </div>
                            <div className="proficiencybonus box">
                                <div className="label-container">
                                    <label htmlFor="proficiencybonus">Proficiency Bonus</label>
                                </div>
                                <input name="proficiencybonus" placeholder="+2" readOnly value={proficiency} />
                            </div>
                            <div className="saves list-section box">
                                <ul>
                                    <li>
                                        <label htmlFor="Strength-save">Strength</label><input name="Strength-save" readOnly placeholder="+0" value={saveProfs[0] ? strMod + proficiency : strMod}
                                            type="text" /><input name="Strength-save-prof" type="checkbox" checked={saveProfs[0]} onChange={(e) => handleSaveProf(e, 0)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Dexterity-save">Dexterity</label><input name="Dexterity-save" readOnly placeholder="+0" value={saveProfs[1] ? dexMod + proficiency : dexMod}
                                            type="text" /><input name="Dexterity-save-prof" type="checkbox" checked={saveProfs[1]} onChange={(e) => handleSaveProf(e, 1)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Constitution-save">Constitution</label><input name="Constitution-save" readOnly placeholder="+0" value={saveProfs[2] ? conMod + proficiency : conMod}
                                            type="text" /><input name="Constitution-save-prof" type="checkbox" checked={saveProfs[2]} onChange={(e) => handleSaveProf(e, 2)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Wisdom-save">Wisdom</label><input name="Wisdom-save" readOnly placeholder="+0" type="text" value={saveProfs[3] ? wisMod + proficiency : wisMod} /><input
                                            name="Wisdom-save-prof" type="checkbox" checked={saveProfs[3]} onChange={(e) => handleSaveProf(e, 3)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Intelligence-save">Intelligence</label><input name="Intelligence-save" readOnly placeholder="+0" value={saveProfs[4] ? intMod + proficiency : intMod}
                                            type="text" /><input name="Intelligence-save-prof" type="checkbox" checked={saveProfs[4]} onChange={(e) => handleSaveProf(e, 4)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Charisma-save">Charisma</label><input name="Charisma-save" readOnly placeholder="+0" value={saveProfs[5] ? chaMod + proficiency : chaMod}
                                            type="text" /><input name="Charisma-save-prof" type="checkbox" checked={saveProfs[5]} onChange={(e) => handleSaveProf(e, 5)} />
                                    </li>
                                </ul>
                                <div className="label">
                                    Saving Throws
                                </div>
                            </div>
                            <div className="skills list-section box">
                                <ul>
                                    <li>
                                        <label htmlFor="Acrobatics">Acrobatics <span className="skill">(Dex)</span></label><input name="Acrobatics"
                                            placeholder="+0" type="text" readOnly value={skillProf[0] ? dexMod + proficiency : dexMod} /><input name="Acrobatics-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 0)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Animal Handling">Animal Handling <span className="skill">(Wis)</span></label><input
                                            name="Animal Handling" placeholder="+0" type="text" readOnly value={skillProf[1] ? wisMod + proficiency : wisMod} /><input name="Animal Handling-prof"
                                                type="checkbox" onChange={(e) => handleSkillProf(e, 1)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Arcana">Arcana <span className="skill">(Int)</span></label><input name="Arcana"
                                            placeholder="+0" type="text" readOnly value={skillProf[2] ? intMod + proficiency : intMod} /><input name="Arcana-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 2)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Athletics">Athletics <span className="skill">(Str)</span></label><input name="Athletics"
                                            placeholder="+0" type="text" readOnly value={skillProf[3] ? strMod + proficiency : strMod} /><input name="Athletics-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 3)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Deception">Deception <span className="skill">(Cha)</span></label><input name="Deception"
                                            placeholder="+0" type="text" readOnly value={skillProf[4] ? chaMod + proficiency : chaMod} /><input name="Deception-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 4)} />
                                    </li>
                                    <li>
                                        <label htmlFor="History">History <span className="skill">(Int)</span></label><input name="History"
                                            placeholder="+0" type="text" readOnly value={skillProf[5] ? intMod + proficiency : intMod} /><input name="History-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 5)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Insight">Insight <span className="skill">(Wis)</span></label><input name="Insight"
                                            placeholder="+0" type="text" readOnly value={skillProf[6] ? wisMod + proficiency : wisMod} /><input name="Insight-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 6)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Intimidation">Intimidation <span className="skill">(Cha)</span></label><input
                                            name="Intimidation" placeholder="+0" type="text" readOnly value={skillProf[7] ? chaMod + proficiency : chaMod} /><input name="Intimidation-prof"
                                                type="checkbox" onChange={(e) => handleSkillProf(e, 7)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Investigation">Investigation <span className="skill">(Int)</span></label><input
                                            name="Investigation" placeholder="+0" type="text" readOnly value={skillProf[8] ? intMod + proficiency : intMod} /><input name="Investigation-prof"
                                                type="checkbox" onChange={(e) => handleSkillProf(e, 8)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Medicine">Medicine <span className="skill">(Wis)</span></label><input name="Medicine"
                                            placeholder="+0" type="text" readOnly value={skillProf[9] ? wisMod + proficiency : wisMod} /><input name="Medicine-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 9)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Nature">Nature <span className="skill">(Int)</span></label><input name="Nature"
                                            placeholder="+0" type="text" readOnly value={skillProf[10] ? intMod + proficiency : intMod} /><input name="Nature-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 10)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Perception">Perception <span className="skill">(Wis)</span></label><input name="Perception"
                                            placeholder="+0" type="text" readOnly value={skillProf[11] ? wisMod + proficiency : wisMod} /><input name="Perception-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 11)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Performance">Performance <span className="skill">(Cha)</span></label><input name="Performance"
                                            placeholder="+0" type="text" readOnly value={skillProf[12] ? chaMod + proficiency : chaMod} /><input name="Performance-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 12)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Persuasion">Persuasion <span className="skill">(Cha)</span></label><input name="Persuasion"
                                            placeholder="+0" type="text" readOnly value={skillProf[13] ? chaMod + proficiency : chaMod} /><input name="Persuasion-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 13)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Religion">Religion <span className="skill">(Int)</span></label><input name="Religion"
                                            placeholder="+0" type="text" readOnly value={skillProf[14] ? intMod + proficiency : intMod} /><input name="Religion-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 14)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Sleight of Hand">Sleight of Hand <span className="skill">(Dex)</span></label><input
                                            name="Sleight of Hand" placeholder="+0" type="text" readOnly value={skillProf[15] ? dexMod + proficiency : dexMod} /><input name="Sleight of Hand-prof"
                                                type="checkbox" onChange={(e) => handleSkillProf(e, 15)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Stealth">Stealth <span className="skill">(Dex)</span></label><input name="Stealth"
                                            placeholder="+0" type="text" readOnly value={skillProf[16] ? dexMod + proficiency : dexMod} /><input name="Stealth-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 16)} />
                                    </li>
                                    <li>
                                        <label htmlFor="Survival">Survival <span className="skill">(Wis)</span></label><input name="Survival"
                                            placeholder="+0" type="text" readOnly value={skillProf[17] ? wisMod + proficiency : wisMod} /><input name="Survival-prof" type="checkbox" onChange={(e) => handleSkillProf(e, 17)} />
                                    </li>
                                </ul>
                                <div className="label">
                                    Skills
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="passive-perception box">
                        <div className="label-container">
                            <label htmlFor="passiveperception">Passive Wisdom (Perception)</label>
                        </div>
                        <input name="passiveperception" placeholder="10" readOnly value={skillProf[11] ? wisMod + proficiency + 10 : wisMod + 10} />
                    </div>
                    <div className="otherprofs box textblock">
                        <label htmlFor="otherprofs">Other Proficiencies and Languages</label><textarea name="otherprofs" value={otherProfs} onChange={(e) => handleTextAreaChange(e, 'otherProf')}></textarea>
                    </div>
                </section>
                <section>
                    <section className="combat">
                        <div className="armorclass">
                            <div>
                                <label htmlFor="ac">Armor Class</label><input name="ac" placeholder="10" type="text" />
                            </div>
                        </div>
                        <div className="initiative">
                            <div>
                                <label htmlFor="initiative">Initiative</label><input name="initiative" placeholder="+0" type="text" readOnly value={dexMod} />
                            </div>
                        </div>
                        <div className="speed">
                            <div>
                                <label htmlFor="speed">Speed</label><input name="speed" placeholder="30" type="text" readOnly value={char.race.speed} />
                            </div>
                        </div>
                        <div className="hp">
                            <div className="regular">
                                <div className="max">
                                    <label htmlFor="maxhp">Hit Point Maximum</label><input name="maxhp" placeholder="10" type="text" />
                                </div>
                                <div className="current">
                                    <label htmlFor="currenthp">Current Hit Points</label><input name="currenthp" type="text" />
                                </div>
                            </div>
                            <div className="temporary">
                                <label htmlFor="temphp">Temporary Hit Points</label><input name="temphp" type="text" />
                            </div>
                        </div>
                        <div className="hitdice">
                            <div>
                                <div className="total">
                                    <label htmlFor="totalhd">Total</label><input name="totalhd" placeholder="2d10" readOnly value={`${level}d${char.class.hit_die}`}
                                        type="text" />
                                </div>
                                <div className="remaining">
                                    <label htmlFor="remaininghd">Hit Dice</label><input name="remaininghd" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="deathsaves">
                            <div>
                                <div className="label">
                                    <label>Death Saves</label>
                                </div>
                                <div className="marks">
                                    <div className="deathsuccesses">
                                        <label>Successes</label>
                                        <div className="bubbles">
                                            <input name="deathsuccess1" type="checkbox" />
                                            <input name="deathsuccess2" type="checkbox" />
                                            <input name="deathsuccess3" type="checkbox" />
                                        </div>
                                    </div>
                                    <div className="deathfails">
                                        <label>Failures</label>
                                        <div className="bubbles">
                                            <input name="deathfail1" type="checkbox" />
                                            <input name="deathfail2" type="checkbox" />
                                            <input name="deathfail3" type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="attacksandspellcasting">
                        <div>
                            <label>Attacks & Spellcasting</label>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Atk Bonus
                                        </th>
                                        <th>
                                            Damage/Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input name="atkname1" type="text" />
                                        </td>
                                        <td>
                                            <input name="atkbonus1" type="text" />
                                        </td>
                                        <td>
                                            <input name="atkdamage1" type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input name="atkname2" type="text" />
                                        </td>
                                        <td>
                                            <input name="atkbonus2" type="text" />
                                        </td>
                                        <td>
                                            <input name="atkdamage2" type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input name="atkname3" type="text" />
                                        </td>
                                        <td>
                                            <input name="atkbonus3" type="text" />
                                        </td>
                                        <td>
                                            <input name="atkdamage3" type="text" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <textarea></textarea>
                        </div>
                    </section>
                    <section className="equipment">
                        <div>
                            <label>Equipment</label>
                            <div className="money">
                                <ul>
                                    <li>
                                        <label htmlFor="cp">cp</label><input name="cp" />
                                    </li>
                                    <li>
                                        <label htmlFor="sp">sp</label><input name="sp" />
                                    </li>
                                    <li>
                                        <label htmlFor="ep">ep</label><input name="ep" />
                                    </li>
                                    <li>
                                        <label htmlFor="gp">gp</label><input name="gp" />
                                    </li>
                                    <li>
                                        <label htmlFor="pp">pp</label><input name="pp" />
                                    </li>
                                </ul>
                            </div>
                            <textarea placeholder="Equipment list here" value={equipment} onChange={(e) => handleTextAreaChange(e, "equipment")}></textarea>
                        </div>
                    </section>
                </section>
                <section>
                    <section className="flavor">
                        <div className="personality">
                            <label htmlFor="personality">Personality</label><textarea name="personality" value={personality} onChange={(e) => setPersonality(e.target.value)}></textarea>
                        </div>
                        <div className="ideals">
                            <label htmlFor="ideals">Ideals</label><textarea name="ideals" value={ideals} onChange={(e) => setIdeals(e.target.value)}></textarea>
                        </div>
                        <div className="bonds">
                            <label htmlFor="bonds">Bonds</label><textarea name="bonds" value={bonds} onChange={(e) => setBonds(e.target.value)}></textarea>
                        </div>
                        <div className="flaws">
                            <label htmlFor="flaws">Flaws</label><textarea name="flaws" value={flaws} onChange={(e) => setFlaws(e.target.value)}></textarea>
                        </div>
                    </section>
                    <section className="features">
                        <div>
                            <label htmlFor="features">Features & Traits</label><textarea name="features" value={features} onChange={(e) => handleTextAreaChange(e, 'features')}></textarea>
                        </div>
                    </section>
                </section>
            </main>
            <button className="levelbutton" onClick={(e) => {
                e.preventDefault()
                setLevel(level + 1)
            }
            }>LEVEL UP</button>
            <button className='newcharacterbutton' onClick={(e) => {
                e.preventDefault()
                localStorage.removeItem('state')
                setChar({ complete: false, name: '', age: '', gender: '', str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 })
                setPosition(0)
            }}> RESTART
            </button>
        </form>
    )
}