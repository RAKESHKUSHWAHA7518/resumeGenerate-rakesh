import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ResumeTemplate from './ResumeGenerateComponents/Components2/ResumeTemplate';
import { Route, Routes } from 'react-router-dom';
import PdfGenerator from "./ResumeGenerateComponents/Components/PdfGenerator"
import Edit from "./ResumeGenerateComponents/Edit";
function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    name: "Vivek Kumar Yadav",
    phone: "+91- 9670-3486-49",
    email: "vivekmgs0321@gmail.com",
    linkedin: "https://www.linkedln.com/vivekyadav",
    github: "https://www.github.com/vivekyadav20364/",
    education: [],
    experience: [],
    projects: [],
    technicalSkills: { languages: "", frameworks: "", tools: "" },
    achievements: [],
    responsibilities: [],
    codingProfiles: [],
  });

  const [position, setPosition] = useState("Software Engineer");
  const [objective, setObjective] = useState(
    "Professional Software Developer with more than four years of experience in the business development of new business opportunities"
  );
  const [selected, setSelected] = useState([""]);
  const [interest, setInterest] = useState([""]);
  const [disabled, setDisable] = useState(false);
  const [posdisable, setPosDisable] = useState(false);


  return (
<>
 <Routes>
  <Route path="/" element={<ResumeTemplate />} />
  <Route
    path="pdf"
    element={
      <PdfGenerator
        formData={formData}
        setFormData={setFormData}
        position={position}
        setPosition={setPosition}
        disabled={disabled}
        setDisable={setDisable}
        posdisable={posdisable}
        setPosDisable={setPosDisable}
        interest={interest}
        setInterest={setInterest}
        objective={objective}
        setObjective={setObjective}
      />
    }
  />

  <Route
    path="/edit-resume"
    element={
      <Edit
        formData={formData}
        setFormData={setFormData}
        position={position}
        setPosition={setPosition}
        disabled={disabled}
        setDisable={setDisable}
        posdisable={posdisable}
        setPosDisable={setPosDisable}
        selected={selected}
        setSelected={setSelected}
        interest={interest}
        setInterest={setInterest}
        objective={objective}
        setObjective={setObjective}
      />

    }
  />
  </Routes>
  </>
  )
}

export default App
