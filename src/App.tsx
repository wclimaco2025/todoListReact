import { Suspense } from "react"
import { Footer, Header } from "./components"
import { Tareas } from "./components/Tareas/Tareas"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"
function App() {

    return (
    <>
    <Header/>
    <Suspense fallback={<LoadingSpinner/>}>
      <Tareas/>
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
