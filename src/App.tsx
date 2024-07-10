import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Layout from "./layouts/layout.tsx";
import IssuePage from "./components/IssuePage.tsx";

function App() {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout>
                <Contact />
              </Layout>
            }
            path="/"
          />
          <Route path="/issues" element={<IssuePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
