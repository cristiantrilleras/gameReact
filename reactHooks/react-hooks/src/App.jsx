import { useEffect } from "react"
import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { UseEffect } from "./components/04-useefect/UseEffect"
import { Game } from "./game/Game"

function App() {
  
  return (
    <div className='w-full h-96 bg-zinc-700 flex flex-col justify-center items-center'>
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <ToogleState /> */}
      {/* <UseEffect/> */}
      <Game/>
    

      
    </div>
  )
}

export default App
