import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./LoginPage";
import MainPage from "./MainPage";
import HomePage from "./WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
