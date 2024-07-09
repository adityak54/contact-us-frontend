import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
function App() {
    return (
        <div className="w-full h-screen">
            <BrowserRouter>
                <Routes>
                    <Route
                        element={<Contact />}
                        path="/"
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
