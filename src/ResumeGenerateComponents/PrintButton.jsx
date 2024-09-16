import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

// Define the PrintButton component
const PrintButton = ({ contentRef, label }) => {
  // Set up the printing functionality
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Resume', // Optional: Set the document title
    onBeforeGetContent: () => console.log('Preparing to print...'), // Optional: Actions before printing
    onAfterPrint: () => console.log('Print complete!') // Optional: Actions after printing
  });

  return (
    <button
      onClick={handlePrint}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};

export default PrintButton;
