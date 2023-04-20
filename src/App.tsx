import { useEffect, useRef, useState } from "react"
import FormCarousel from "./components/FormCarousel"
import CharSheet from "./components/CharSheet"
import { Race } from "./assets/libraries/races";
import { DNDClass } from "./assets/libraries/classes";
import { Background } from "./assets/libraries/backgrounds";
import { formBackgrounds } from "./assets/libraries/formbackgrounds";

export interface CharState {
  complete: boolean;
  name: string;
  age: string;
  gender: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  race?: Race;
  class?: DNDClass;
  background?: Background;
  [key: string]: any
}

function App() {
  const [char, setChar] = useState<CharState>({ complete: false, name: '', age: '', gender: '', str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 })
  const [formPosition, setPosition] = useState(0);
  const stage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem('state') ?? '{}')
    if (state?.char?.complete) setChar(state.char)
    handleText(formPosition)
  }, [])


  useEffect(() => {
    if (!stage.current) return;
    stage.current.style.backgroundImage = `url(${formBackgrounds[formPosition]})`
    handleText(formPosition)
  }, [formPosition]);

  function isCompleted(e: React.MouseEvent<HTMLButtonElement>, char: CharState) {
    setChar({ ...char, complete: true })
    e.currentTarget.classList.add('hide')
  }

  function slowText(str: string, target: string) {
    let letterWrapper;
    target == 'top' ? letterWrapper = document.querySelector<HTMLDivElement>('.letterwrappertop')
      : letterWrapper = document.querySelector<HTMLDivElement>('.letterwrapperbottom')

    for (const letter of str) {
      const newLetter = document.createElement('div')
      newLetter.innerText = letter
      newLetter.classList.add('faded')
      newLetter.classList.add('newletter')
      letterWrapper?.append(newLetter)
    }

    const newLetters = document.querySelectorAll<HTMLDivElement>('.newletter')
    newLetters.forEach((letter, i) => {
      fadeInLetter(letter, i)
    })
  }

  function fadeInLetter(letter: HTMLElement, index: number) {
    setTimeout(() => {
      letter.classList.remove('faded')
    }, index * 250)
  }

  function handleText(formIndex: number) {
    const letterWrappers = document.querySelectorAll('.letterwrapper')
    letterWrappers.forEach(wrapper => {
      wrapper.innerHTML = ''
    })
    switch (formIndex) {
      case 0: slowText('Who might you be?', 'top')
        break;
      case 1: slowText('What are your Strengths and Weaknesses?', 'bottom')
        break;
      case 2: slowText('Which lineage do you belong to?', 'top')
        break;
      case 3: slowText('What path do you walk?', 'bottom')
        break;
      case 4: slowText('Before you adventured, what did you do?', 'top')
        break;
    }
  }

  //dont start ternery with !
  //pass down functions that have set in them
  //context avoids drilling
  return (
    <main ref={stage} className={`mainstage ${char.complete ? 'charsheet' : ''}`}>
      {!char.complete ? <FormCarousel char={char} setChar={setChar} formPosition={formPosition} setPosition={setPosition} /> : <CharSheet char={char} setChar={setChar} setPosition={setPosition} />}
      {char.name && char.age && char.gender && char.str && char.dex && char.con && char.int && char.wis && char.cha && char.race && char.class && char.background
        && <button className={`${!char.complete ? 'completebtn' : 'hide'}`} onClick={(e) => isCompleted(e, char)}>Complete</button>}
    </main>

  )
}

export default App
