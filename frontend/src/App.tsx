import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home"; // Nova Importação
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leads from "./components/Leads";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Agora a Home é a primeira página */}
        <Route path="/" element={<Home />} />
        <Route path="/leads" element={<Leads />} />

        {/* Login em rota dedicada */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard protegido (pós-login) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback: se errar a URL, volta pra Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
