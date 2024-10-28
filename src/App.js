import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./App.css";
import NavBar from "./components/NavBar";
import MyMoves from "./components/MyMoves";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div>
        <NavBar />
        <MyMoves />
      </div>
    </ThemeProvider>
  );
}

export default App;
