import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./pages/Header";
import ProductPage from "./pages/ProductPage";
import { createContext } from "react";

export const AppContext = createContext<IValues | null>(null);

function App() {
  interface IValues {
    language: string;
    framework: string;
    projects: number;
  }

  const contextValue: IValues = {
    language: "JavaScript",
    framework: "ReactJS",
    projects: 10,
  };

  return (
    <>
      <div className="App">
        <AppContext.Provider value={contextValue}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productPage" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
