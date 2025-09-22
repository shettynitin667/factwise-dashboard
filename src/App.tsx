import GridData from "./pages/Dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/globals.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <GridData />
      </div>
    </ThemeProvider>
  );
}

export default App;
