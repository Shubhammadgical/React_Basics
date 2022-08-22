import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassComp from "./classComp";
import Concepts from "./ListofBasics";
import Fncomp from "./FnComponent";
import Hooks from "./Hooks";
import Jsx from "./Jsx";
import Login from "./LoginPage";
import MainPage from "./Demo1";
import MultiComp from "./MultiComp";
import DemoByClass from "./Demo2";
import HomePage from "./WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/fncomp" element={<Fncomp />} />
          <Route path="/classcomp" element={<ClassComp />} />
          <Route path="/multicomp" element={<MultiComp />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/jsx" element={<Jsx />} />
          <Route path="/demo2" element={<DemoByClass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
