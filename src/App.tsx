import { useEffect, useRef, useState } from "react"
import FormCarousel from "./components/FormCarousel"
import CharSheet from "./components/CharSheet"
import { Race } from "./assets/libraries/races";
import { DNDClass } from "./assets/libraries/classes";
import { Background } from "./assets/libraries/backgrounds";

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
  }, [])


  useEffect(() => {
    if (!stage.current) return;
    stage.current.style.backgroundImage = `url(./src/assets/backgrounds/form${formPosition}.webp)`
  }, [formPosition]);

  function isCompleted(char: CharState) {
    setChar({ ...char, complete: true })
  }

  return (
    <main className="mainstage" ref={stage}>
      {!char.complete ? <FormCarousel char={char} setChar={setChar} formPosition={formPosition} setPosition={setPosition} /> : <CharSheet char={char} setChar={setChar} setPosition={setPosition} />}
      {char.name && char.age && char.gender && char.str && char.dex && char.con && char.int && char.wis && char.cha && char.race && char.class && char.background
        && <button className="completebtn" onClick={() => isCompleted(char)}>Complete</button>}
    </main>

  )
}

export default App
