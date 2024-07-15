import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Layout from "./layouts/layout.tsx";
import IssuePage from "./components/IssuePage.tsx";
import GetInTouch from "./GetInTouch.tsx";

function App() {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Layout><Contact/></Layout>}/>
          <Route path="/issues" element={<Layout><IssuePage /></Layout>} />
          <Route path='/' element={<Layout><GetInTouch/></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <a
  href="https://www.google.com/maps/place/To-Let+Globe/@26.8465566,80.9797793,15z/data=!4m6!3m5!1s0x399bfd77577ba78f:0xd2d6f22d1b246815!8m2!3d26.8465566!4d80.9797793!16s%2Fg%2F11vhrqqb45?entry=ttu"
  class="googlemaplink"
>
  <div class="imagediv2">
    <p class="imagediv2h1"></p>
  </div>
</a>; */}

