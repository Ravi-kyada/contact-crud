import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Add";
import Contact from "./Contact";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
