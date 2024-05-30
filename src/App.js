import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPost from "./components/Readpost/ReadPost";
import Updateuser from "./components/updateUser/Updateuser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CreatePost />} />
          <Route exact path="/read" element={<ReadPost />} />
          <Route exact path="/update/:id" element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
