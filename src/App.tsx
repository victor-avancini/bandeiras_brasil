import { HelmetProvider } from "react-helmet-async";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/styles.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <HelmetProvider>
      <ScrollToTop/>
      <RoutesMain />
    </HelmetProvider>
  )
}

export default App