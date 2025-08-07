import { useContext } from "react";
import About from "./components/About";
import DotGrid from "./components/DotGrid";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className=" w-full h-screen relative">
      <Navbar />
      <DotGrid
        dotSize={4}
        gap={15}
        baseColor={`${theme === "dark" ? "#0A0A0A" : "#fff"}`}
        activeColor={`${theme === "dark" ? "#A476FF" : "#313131"}`}
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={70}
        returnDuration={1}
      />
      <About />
    
    </main>
  );
};

export default App;
