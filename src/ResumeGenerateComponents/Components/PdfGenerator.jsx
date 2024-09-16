

// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import React, { lazy, Suspense, useRef } from "react";
// import { useLocation } from "react-router-dom";

// const componentMap = {
//   ResumeDesign1: lazy(() => import("../ResumeDesign/ResumeDesign1")),
//   ResumeDesign2: lazy(() => import("../ResumeDesign/ResumeDesign2")),
//   ResumeDesign3: lazy(() => import("../ResumeDesign/ResumeDesign3")),
//   ResumeDesign4: lazy(() => import("../ResumeDesign/ResumeDesign4")),
//   CoverLetterDesign: lazy(() =>
//     import("../CoverLetterDesign/CoverLetterDesign1")
//   ),
// };

// const PdfGenerator = () => {
//   const location = useLocation();
//   const { formData, selected, interest, position, objective, design } =
//     location.state;
//   const divRef = useRef();
//   const DesignComponent = componentMap[design];

//   const handleDownloadPdf = () => {
//     const input = divRef.current;
//     html2canvas(input, {
//       scale: 2, // Increase the scale to improve the resolution
//       useCORS: true,
//       backgroundColor: null, // Ensures no background color
//     }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "in", [8.5, 11]); // US Letter size in inches
//       const pdfWidth = 8.5;
//       const pdfHeight = 11;

//       const imgProps = pdf.getImageProperties(imgData);
//       const imgWidth = imgProps.width / 96; // Convert pixels to inches (assuming 96 DPI)
//       const imgHeight = imgProps.height / 96;
//       const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

//       const width = imgWidth * ratio;
//       const height = imgHeight * ratio;

//       pdf.addImage(imgData, "PNG", 0, 0, width, height);
//       pdf.save("resume.pdf");
//     });
//   };

//   return (
//     <div>
//       <div
//         ref={divRef}
//         style={{ padding: 0, margin: 0, backgroundColor: "white" }}
//       >
//         <Suspense fallback={<div>Loading...</div>}>
//           <DesignComponent
//             formData={formData}
//             selected={selected}
//             interest={interest}
//             position={position}
//             objective={objective}
//           />
//         </Suspense>
//       </div>
//       <button onClick={handleDownloadPdf}>Download as PDF</button>
//     </div>
//   );
// };

// export default PdfGenerator;







// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import React, { lazy, Suspense, useRef } from "react";
// import { useLocation } from "react-router-dom";

// const componentMap = {
//   ResumeDesign1: lazy(() => import("../ResumeDesign/ResumeDesign1")),
//   ResumeDesign2: lazy(() => import("../ResumeDesign/ResumeDesign2")),
//   ResumeDesign3: lazy(() => import("../ResumeDesign/ResumeDesign3")),
//   ResumeDesign4: lazy(() => import("../ResumeDesign/ResumeDesign4")),
//   CoverLetterDesign: lazy(() =>
//     import("../../CoverGeneratorComponents/CoverLetterDesign/CoverLetterDesign1")
//   ),
// };

// const PdfGenerator = () => {
//   const location = useLocation();
//   const {
//     formData = {}, // Default empty object if undefined
//     selected = '',
//     interest = '',
//     position = '',
//     objective = '',
//     design = 'ResumeDesign1' // Default design if undefined
//   } = location.state || {}; // Ensure location.state is not undefined

//   const divRef = useRef();
//   const DesignComponent = componentMap[design] || componentMap['ResumeDesign1']; // Default to ResumeDesign1 if design is invalid

//   const handleDownloadPdf = () => {
//     const input = divRef.current;
//     html2canvas(input, {
//       scale: 2, // Increase the scale to improve the resolution
//       useCORS: true,
//       backgroundColor: null, // Ensures no background color
//     }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "in", [8.5, 11]); // US Letter size in inches
//       const pdfWidth = 8.5;
//       const pdfHeight = 11;

//       const imgProps = pdf.getImageProperties(imgData);
//       const imgWidth = imgProps.width / 96; // Convert pixels to inches (assuming 96 DPI)
//       const imgHeight = imgProps.height / 96;
//       const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

//       const width = imgWidth * ratio;
//       const height = imgHeight * ratio;

//       pdf.addImage(imgData, "PNG", 0, 0, width, height);
//       pdf.save("resume.pdf");
//     });
//   };

//   return (
//     <div>
//       <div
//         ref={divRef}
//         style={{ padding: 0, margin: 0, backgroundColor: "white" }}
//       >
//         <Suspense fallback={<div>Loading...</div>}>
//           <DesignComponent
//             formData={formData}
//             selected={selected}
//             interest={interest}
//             position={position}
//             objective={objective}
//           />
//         </Suspense>
//       </div>
//       <button
//         onClick={handleDownloadPdf}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
//       >
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default PdfGenerator;

//CORRORECT CODE TILL NOW

// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import React, { lazy, Suspense, useRef } from "react";
// import { useLocation } from "react-router-dom";

// const componentMap = {
//   ResumeDesign1: lazy(() => import("../ResumeDesign/ResumeDesign1")),
//   ResumeDesign2: lazy(() => import("../ResumeDesign/ResumeDesign2")),
//   ResumeDesign3: lazy(() => import("../ResumeDesign/ResumeDesign3")),
//   ResumeDesign4: lazy(() => import("../ResumeDesign/ResumeDesign4")),
//   CoverLetterDesign: lazy(() =>
//     import("../../CoverGeneratorComponents/CoverLetterDesign/CoverLetterDesign1")
//   ),
// };

// const PdfGenerator = () => {
//   const location = useLocation();
//   const {
//     formData = {},
//     selected = '',
//     interest = '',
//     position = '',
//     objective = '',
//     design = 'ResumeDesign1'
//   } = location.state || {};

//   const divRef = useRef();
//   const DesignComponent = componentMap[design] || componentMap['ResumeDesign1'];

//   const handleDownloadPdf = () => {
//     const input = divRef.current;

//     html2canvas(input, {
//       scale: 2, // Increase scale for better detail
//       useCORS: true,
//       backgroundColor: "white",
//     }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png", 0.5); // Reduce quality to 50%
//       const pdf = new jsPDF("p", "in", "a4"); // A4 size in inches
//       const pdfWidth = 8.27; // A4 width in inches
//       const pdfHeight = 11.69; // A4 height in inches

//       const imgProps = pdf.getImageProperties(imgData);
//       const imgWidth = imgProps.width / 96; // Convert pixels to inches
//       const imgHeight = imgProps.height / 96;
//       const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

//       const width = imgWidth * ratio;
//       const height = imgHeight * ratio;

//       const x = (pdfWidth - width) / 2; // Center the image horizontally
//       const y = (pdfHeight - height) / 2; // Center the image vertically

//       pdf.addImage(imgData, "PNG", x, y, width, height);
//       pdf.save("resume.pdf");
//     });
//   };

//   return (
//     <div>
//       <div
//         ref={divRef}
//         style={{
//           padding: 20, 
//           margin: "auto",
//           backgroundColor: "white",
//           width: "100%",
//           maxWidth: "8.27in", 
//           boxSizing: "border-box",
//           position: "relative", 
//         }}
//       >
//         <Suspense fallback={<div>Loading...</div>}>
//           <DesignComponent
//             formData={formData}
//             selected={selected}
//             interest={interest}
//             position={position}
//             objective={objective}
//           />
//         </Suspense>
//       </div>
//       <button
//         onClick={handleDownloadPdf}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
//       >
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default PdfGenerator;



//IMPLEMENTING THE puppeteer
import React, { lazy, Suspense, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const componentMap = {
  ResumeDesign1: lazy(() => import("../ResumeDesign/ResumeDesign1")),
  ResumeDesign2: lazy(() => import("../ResumeDesign/ResumeDesign2")),
  ResumeDesign3: lazy(() => import("../ResumeDesign/ResumeDesign3")),
  ResumeDesign4: lazy(() => import("../ResumeDesign/ResumeDesign4")),

};

const PdfGenerator = () => {
  const location = useLocation();
  const {
    formData = {},
    selected = '',
    interest = '',
    position = '',
    objective = '',
    design = 'ResumeDesign1'
  } = location.state || {};

  const divRef = useRef();
  const DesignComponent = componentMap[design] || componentMap['ResumeDesign1'];

  const handleDownloadPdf = async () => {
    const input = divRef.current;
    const htmlContent = input.outerHTML;

    try {
      const response = await axios.post('http://localhost:9000/generate-pdf', 
        { htmlContent }, 
        { responseType: 'blob' } // Expect a Blob response for the PDF
      );

      console.log('Response received:', response);


      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        console.log("URL",url)
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf'); // Ensure the file is named correctly
      
        document.body.appendChild(link);
        link.click();
      
        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Free up memory by revoking the object URL
      } else {
        console.error('Failed to generate PDF');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{
          padding: 20,
          margin: "auto",
          backgroundColor: "white",
          width: "100%",
          maxWidth: "8.27in",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <DesignComponent
            formData={formData}
            selected={selected}
            interest={interest}
            position={position}
            objective={objective}
          />
        </Suspense>
      </div>
      <button
        onClick={handleDownloadPdf}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default PdfGenerator;




