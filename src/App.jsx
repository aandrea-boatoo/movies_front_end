import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import DetailMovie from "./pages/DetailMovie";
import HeroPage from "./pages/HeroPage";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HERO PAGE */}
        <Route path="/" Component={HeroPage} />

        <Route path="/home" Component={DefaultLayout}>
          <Route index Component={Home}></Route>
          <Route path="about" Component={About}></Route>
          <Route path=":id" Component={DetailMovie}></Route>
        </Route>
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  )


    ;
}

export default App
