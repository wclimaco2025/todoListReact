import { Suspense } from "react"
import { Footer, Header, Tarea } from "./components"
import { Tareas } from "./components/Tareas/Tareas"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"
function App() {

    return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tarea />
        <Suspense fallback={<LoadingSpinner />}>
          <Tareas />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App
