import { HelmetProvider } from "react-helmet-async";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/styles.css"

function App() {

  return (
    <HelmetProvider>
      <RoutesMain />
    </HelmetProvider>
  )
}

export default App