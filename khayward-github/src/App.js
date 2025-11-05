import HomePage from "./pages/home/index";
import About  from "./pages/about-page";
import Support from "./pages/support-page";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-page" element={<About />} />
      <Route path="/support-page" element={<Support />} />
      </Routes>    
    
    </>
  )
}

export default App;
