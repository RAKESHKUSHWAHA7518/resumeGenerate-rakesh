import React, { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

// import Navbar from "./Components2/Navbar";
import { useState } from "react";

const componentMap = {
  ResumeForm1: lazy(() => import("./ResumeForms/ResumeForm1")),
  ResumeForm2: lazy(() => import("./ResumeForms/ResumeForm2")),
  ResumeForm3: lazy(() => import("./ResumeForms/ResumeForm3")),
  ResumeForm4: lazy(() => import("./ResumeForms/ResumeForm4")),
  ResumeDesign1: lazy(() => import("./ResumeDesign/ResumeDesign1")),
  ResumeDesign2: lazy(() => import("./ResumeDesign/ResumeDesign2")),
  ResumeDesign3: lazy(() => import("./ResumeDesign/ResumeDesign3")),
  ResumeDesign4: lazy(() => import("./ResumeDesign/ResumeDesign4")),
};

function Edit({
  formData,
  setFormData,
  disabled,
  setDisable,
  posdisable,
  setPosDisable,
  selected,
  setSelected,
  interest,
  setInterest,
  form4Data,
  setForm4Data,
  position,
  setPosition,
  objective,
  setObjective,
}) {
  const location = useLocation();
  const { form = "ResumeForm1", design = "ResumeDesign1" } =
    location.state || {};

  const FormComponent = componentMap[form];
  const DesignComponent = componentMap[design];

  const [fontSize, setFontSize] = useState("text-xl");
  return (
   
    <div className="min-h-screen pt-2">
      <div className="h-screen md:flex">
        <div className="w-full md:w-1/3 overflow-y-auto bg-white p-4 border-2 border-gray-200 hide-scrollbar mr-4">
          <Suspense fallback={<div>Loading...</div>}>
            <FormComponent
              formData={formData}
              setFormData={setFormData}
              disabled={disabled}
              setDisable={setDisable}
              posdisable={posdisable}
              setPosDisable={setPosDisable}
              selected={selected}
              setSelected={setSelected}
              interest={interest}
              setInterest={setInterest}
              form4Data={form4Data}
              setForm4Data={setForm4Data}
              objective={objective}
              setObjective={setObjective}
              position={position}
              setPosition={setPosition}
              fontSize={fontSize}
              setFontSize={setFontSize}
            />
          </Suspense>
        </div>
        <div className=" w-full md:w-2/3 overflow-y-auto max-h-screen border-2  pt-4 hide-scrollbar">
          <Suspense fallback={<div>Loading...</div>}>
            <DesignComponent
              formData={formData}
              setFormData={setFormData}
              disabled={disabled}
              setDisable={setDisable}
              posdisable={posdisable}
              setPosDisable={setPosDisable}
              selected={selected}
              setSelected={setSelected}
              interest={interest}
              setInterest={setInterest}
              form4Data={form4Data}
              setForm4Data={setForm4Data}
              objective={objective}
              setObjective={setObjective}
              position={position}
              setPosition={setPosition}
              fontSize={fontSize}
              setFontSize={setFontSize}
            />
          </Suspense>
        </div>
      </div>
      </div>
  );
}

export default Edit;


// import React, { lazy, Suspense, useState } from "react";
// import { useLocation } from "react-router-dom";

// // Import your components
// import Navbar from "../LandingPageComponents/Navbar";
// import ResponsiveNavbar from "../LandingPageComponents/ResponsiveNavbar";
// // import "../../App.css";

// const componentMap = {
//   ResumeForm1: lazy(() => import("./ResumeForms/ResumeForm1")),
//   ResumeForm2: lazy(() => import("./ResumeForms/ResumeForm2")),
//   ResumeForm3: lazy(() => import("./ResumeForms/ResumeForm3")),
//   ResumeForm4: lazy(() => import("./ResumeForms/ResumeForm4")),
//   ResumeDesign1: lazy(() => import("./ResumeDesign/ResumeDesign1")),
//   ResumeDesign2: lazy(() => import("./ResumeDesign/ResumeDesign2")),
//   ResumeDesign3: lazy(() => import("./ResumeDesign/ResumeDesign3")),
//   ResumeDesign4: lazy(() => import("./ResumeDesign/ResumeDesign4")),
// };

// function Edit({
//   formData,
//   setFormData,
//   disabled,
//   setDisable,
//   posdisable,
//   setPosDisable,
//   selected,
//   setSelected,
//   interest,
//   setInterest,
//   form4Data,
//   setForm4Data,
//   position,
//   setPosition,
//   objective,
//   setObjective,
// }) {
//   const location = useLocation();
//   const { form = "ResumeForm1", design = "ResumeDesign1" } = location.state || {};

//   const FormComponent = componentMap[form];
//   const DesignComponent = componentMap[design];

//   const [fontSize, setFontSize] = useState("text-xl");

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Uncomment and style Navbar and ResponsiveNavbar if needed */}
//       {/* <Navbar />
//       <ResponsiveNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setMagnetActive={setMagnetActive}/> */}
//       <div className="h-screen flex flex-col md:flex-row">
//         {/* Form Section */}
//         <div className="w-full md:w-1/3 overflow-y-auto bg-white p-4 border-2 border-gray-200 hide-scrollbar mr-4">
//           <Suspense fallback={
//             <div className="flex items-center justify-center h-full text-gray-500">
//               <span className="text-xl">Loading Form...</span>
//             </div>
//           }>
//             <FormComponent
//               formData={formData}
//               setFormData={setFormData}
//               disabled={disabled}
//               setDisable={setDisable}
//               posdisable={posdisable}
//               setPosDisable={setPosDisable}
//               selected={selected}
//               setSelected={setSelected}
//               interest={interest}
//               setInterest={setInterest}
//               form4Data={form4Data}
//               setForm4Data={setForm4Data}
//               objective={objective}
//               setObjective={setObjective}
//               position={position}
//               setPosition={setPosition}
//               fontSize={fontSize}
//               setFontSize={setFontSize}
//             />
//           </Suspense>
//         </div>
//         {/* Design Section */}
//         <div className="w-full md:w-2/3 overflow-hidden bg-white border-2 p-4 hide-scrollbar">
//           <Suspense fallback={
//             <div className="flex items-center justify-center h-full text-gray-500">
//               <span className="text-xl">Loading Design...</span>
//             </div>
//           }>
//             <DesignComponent
//               formData={formData}
//               setFormData={setFormData}
//               disabled={disabled}
//               setDisable={setDisable}
//               posdisable={posdisable}
//               setPosDisable={setPosDisable}
//               selected={selected}
//               setSelected={setSelected}
//               interest={interest}
//               setInterest={setInterest}
//               form4Data={form4Data}
//               setForm4Data={setForm4Data}
//               objective={objective}
//               setObjective={setObjective}
//               position={position}
//               setPosition={setPosition}
//               fontSize={fontSize}
//               setFontSize={setFontSize}
//             />
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Edit;

