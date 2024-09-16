// import React, { useState } from "react";
// import resume1 from "../Assests/resume1.jpg";
// import { motion } from 'framer-motion';

// import { useLocation, useNavigate } from "react-router-dom";
// import "../../../App.css"
// function ResumeTemplate({ formData, selected, interest, position, objective }) {

//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleEditClick = (form, design) => {
//     navigate("/studentDashboard/edit-resume", { state: { form, design } });
//   };

//   const handlePreviewClick = (design) => {
//     navigate("/studentDashboard/pdf", {
//       state: { formData, selected, interest, position, objective, design },
//     });
//   };



//   return (
//     <div className="min-h-screen">
//       <div className="text-4xl text-gray-700 font-bold mb-8 md:mb-4">
//       Generate Resume
//       </div>

// <motion.div
//       className="text-xl mt-10 md:text-2xl lg:text-3xl font-semibold text-center mb-12"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//     >
//       <div>
//         <span className="block">Build your ATS-friendly resume with EZSync</span>
//         <span className="block">and get ready to impress in your next interview!</span>
//       </div>
//     </motion.div>

//     <div className="text-xl text-gray-700 font-bold mb-8 mt-8 md:mb-4">
//       Available Templates
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//         {[1, 2, 3, 4].map((index) => (
//           <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//             <img
//               src={resume1}
//               alt={`Resume ${index}`}
//               className="w-full h-64 object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//               <div className="text-center">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:shadow-xl mb-2 mx-1"
//                   onClick={() =>
//                     handleEditClick(
//                       `ResumeForm${index}`,
//                       `ResumeDesign${index}`
//                     )
//                   }
//                 >
//                   Edit Your Resume
//                 </button>
//                 <button
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:shadow-xl mx-1"
//                   onClick={() => handlePreviewClick(`ResumeDesign${index}`)}
//                 >
//                   Preview
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ResumeTemplate;



import React from "react";
import resume1 from "../Assests/resume1.jpg";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
// import "./App.css";
import "../../App.css";

function ResumeTemplate({ formData, selected, interest, position, objective }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleEditClick = (form, design) => {
    navigate("/edit-resume", { state: { form, design } });
  };

  const handlePreviewClick = (design) => {
    navigate("/pdf", {
      state: { formData, selected, interest, position, objective, design },
    });
  };

  return (
    <div className="min-h-screen w-full font-poppins">
      <div className="text-4xl text-gray-800 font-bold text-center mb-8 mt-8">
        Generate Resume with EZSync
      </div>

      <motion.div
        className="text-lg md:text-xl lg:text-xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="block">
          <i>Build your ATS-friendly resume with EZSync</i>
        </span>
        <span className="block">
        <i> and get ready to impress in your next interview!</i>
        </span>
      </motion.div>

      <div className="text-xl text-gray-700 font-bold text-center mb-8">
        Available Templates
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={resume1}
              alt={`Resume ${index}`}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <span className="block text-lg font-bold text-gray-800 mb-2">
                Resume Template {index}
              </span>
              <span className="block text-sm text-gray-600 mb-4">
                Category: Professional
              </span>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg"
                  onClick={() =>
                    handleEditClick(
                      `ResumeForm${index}`,
                      `ResumeDesign${index}`
                    )
                  }
                >
                  Edit Your Resume
                </button>
                {/* <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg"
                  onClick={() => handlePreviewClick(`ResumeDesign${index}`)}
                >
                  Preview
                </button> */}
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Suitable for Professionals
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeTemplate;
