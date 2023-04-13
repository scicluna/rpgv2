import { useEffect, useRef, useState } from "react"
import FormCarousel from "./components/FormCarousel"
import CharSheet from "./components/CharSheet"

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
  [key: string]: any
}

function App() {
  const [char, setChar] = useState<CharState>({ complete: false, name: 'unknown', age: 'unknown', gender: 'unknown', str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 })
  const [formPosition, setPosition] = useState(0);
  const stage = useRef<HTMLDivElement>(null)

  console.log(char)

  useEffect(() => {
    if (!stage.current) return;
    stage.current.style.backgroundImage = `url(./src/assets/backgrounds/form${formPosition}.webp)`
  }, [formPosition]);

  return (
    <main className="mainstage" ref={stage}>
      {!char.complete ? <FormCarousel char={char} setChar={setChar} formPosition={formPosition} setPosition={setPosition} /> : <CharSheet char={char} />}
    </main>

  )
}

export default App
