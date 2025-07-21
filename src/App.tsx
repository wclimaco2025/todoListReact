import { useState } from "react";
import { Footer, Header, Tarea, Tareas } from "./components"
function App() {
// Estado que indica cambio
  const [refreshKey, setRefreshKey] = useState(0);

  // Función que cualquier hijo puede invocar(Tarea, Tareas)
  const triggerRefresh = () => setRefreshKey((k) => k + 1);

  return (
    <>
      <Header />
      {/* Le pasamos la callback */}
      <Tarea onTaskAdded={triggerRefresh} />
      {/* Le pasamos la key para forzar re-fetch */}
      <Tareas refreshKey={refreshKey} />
      <Footer />
    </>
  );
}

export default App
