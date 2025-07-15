import { useState, useEffect } from "react"
import { Footer, Header } from "./components"
import { Tareas } from "./components/Tareas/Tareas"
import supabase from "./utils/supabase"
import type {Todo} from './types/todo.type'
function App() {

 const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos !== null) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])


  return (
    <>
    <Header/>
    <Tareas/>
    <Footer/>
    </>
  )
}

export default App
