import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassComp from "./classComp";
import Concepts from "./ListofBasics";
import Fncomp from "./FnComponent";
import Hooks from "./Hooks";
import Jsx from "./Jsx";
import MainPage from "./DemoUsingFunction/Demo1";
import MultiComp from "./MultiComp";
import DemoByClass from "./DemoUsingClass/Demo2";
import Component1 from "./UseContext";
import ClickCounter from "./HOC/ClickCount";
import ReduxMainPage from "./Redux/App";
import Quizz from "./QuestionBank";
import UseReducer from "./UseReducer";
import CallBack from "./UseCallBack";
import UseMemo from "./UseMemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Concepts />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/fncomp" element={<Fncomp />} />
          <Route path="/classcomp" element={<ClassComp />} />
          <Route path="/multicomp" element={<MultiComp />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/jsx" element={<Jsx />} />
          <Route path="/usecontext" element={<Component1 />} />
          <Route path="/redux" element={<ReduxMainPage />} />
          <Route path="/clickcounter" element={<ClickCounter />} />
          <Route path="/demo1" element={<MainPage />} />
          <Route path="/demo2" element={<DemoByClass />} />
          <Route path="/quiz" element={<Quizz />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/usecallback" element={<CallBack />} />
          <Route path="/usememo" element={<UseMemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
