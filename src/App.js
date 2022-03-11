import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import ListaPersona from "./components/Persona/ListaPersona";
import FormPersona from "./components/Persona/FormPersona";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
      <Routes>
      <Route path="/" element={<ListaPersona/>}/>
      <Route path="/formPersona" element={<FormPersona/>}/>
      <Route path="/actualizar/:id" element={<FormPersona/>}/>
      </Routes>
        </div>
    </Router>
  );
}

export default App;
