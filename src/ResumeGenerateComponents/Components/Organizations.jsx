// import React, { useState } from "react";
// let i = 1;

// function Organizations({
//   formData,
//   setFormData,
//   posdisable,
//   setPosDisable,
// }) {
//   const [position, setPosition] = useState({
//     positionName: "",
//     duration: "",
   
//   });
//   const PosDisableness = () => {
//     setPosDisable(!posdisable);
//   };
//   const handleChange = (event) => {
//     console.log(event.target.value);

//     setPosition({
//       ...position,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleAdd = async () => {
//     if (!posdisable) {
//       await setFormData({
//         ...formData,
//         responsibilities: [
//           ...formData.responsibilities,
//           { ...position, id: i++ },
//         ],
//       });
//       await setPosition({
//         positionName: "",
//         duration: "",
//         description: "",
//       });
//     }
//   };
//   const handleRemove = async (id) => {
//     await setFormData({
//       ...formData,
//       responsibilities: formData.responsibilities.filter(
//         (item) => item.id !== id
//       ),
//     });
//   };

//   return (
//     <div className="my-3">
//       <h3 className="font-semibold text-lg ">ORGANISATIONS</h3>
//       <div onClick={PosDisableness} className="cursor-pointer">
//         Dont' have joined any Organizations?? click here to
//         disable/enable...
//       </div>
//       {posdisable ? (
//         <div></div>
//       ) : (
//         formData.responsibilities.map((item) => (
//           <div className="p-2 my-1  bg-gray-400 rounded-md ">
//             <div className="flex">
//               <label className="w-1/4">Position Name:</label>
//               <p className="bg-slate-300 rounded-sm px-2 m-1 w-full">
//                 {item.positionName}
//               </p>
//             </div>
//             <div className="flex">
//               <label className="w-1/4">Duration:</label>
//               <p className="bg-slate-300 rounded-sm px-2 m-1 w-full">
//                 {item.duration}
//               </p>
//             </div>
          
//             <button
//               className="py-2 px-3 bg-red-400 text-black font-bold rounded-lg"
//               type="button"
//               onClick={() => handleRemove(item.id)}
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}

//       <div className="py-2 border-2 bg-slate-400 rounded-lg p-2 my-1">
//         <div className="flex my-1 justify-between">
//           <label className="font-semibold mr-2">Organization Name:</label>
//           <input
//             className="text-gray-600 rounded-md p-1 font-semibold w-3/5 border-gray-700 border-2"
//             type="text"
//             name="positionName"
//             value={position.positionName}
//             onChange={(event) => handleChange(event)}
//           />
//         </div>
//         <div className="flex my-1 justify-between">
//           <label className="font-semibold mr-2">Duration:</label>
//           <input
//             className="text-gray-600 rounded-md p-1 font-semibold w-3/5 border-gray-700 border-2"
//             type="text"
//             name="duration"
//             value={position.duration}
//             onChange={(event) => handleChange(event)}
//           />
//         </div>

//         <button
//           type="button"
//           onClick={handleAdd}
//           className="py-2 px-3 bg-green-400 text-black font-bold rounded-lg"
//         >
//           Add Position
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Organizations;



import React, { useState } from "react";

let i = 1;

function Organizations({ formData, setFormData, posdisable, setPosDisable }) {
  const [position, setPosition] = useState({
    positionName: "",
    duration: "",
  });

  const PosDisableness = () => {
    setPosDisable(!posdisable);
  };

  const handleChange = (event) => {
    setPosition({
      ...position,
      [event.target.name]: event.target.value,
    });
  };

  const handleAdd = async () => {
    if (!posdisable) {
      await setFormData({
        ...formData,
        responsibilities: [
          ...formData.responsibilities,
          { ...position, id: i++ },
        ],
      });
      await setPosition({
        positionName: "",
        duration: "",
      });
    }
  };

  const handleRemove = async (id) => {
    await setFormData({
      ...formData,
      responsibilities: formData.responsibilities.filter(
        (item) => item.id !== id
      ),
    });
  };

  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Organizations</h3>
      <div
        onClick={PosDisableness}
        className="cursor-pointer text-blue-600 underline mb-4"
      >
        Don’t have any organizations to add? Click here to disable/enable...
      </div>

      {posdisable ? (
        <div></div>
      ) : (
        formData.responsibilities.map((item) => (
          <div
            key={item.id}
            className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md border border-gray-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Position Name:
                </label>
                <p className="bg-gray-200 rounded-lg p-2">{item.positionName}</p>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Duration:
                </label>
                <p className="bg-gray-200 rounded-lg p-2">{item.duration}</p>
              </div>
            </div>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              type="button"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {!posdisable && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Organization:
              </label>
              <input
                className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                type="text"
                name="positionName"
                value={position.positionName}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Duration:
              </label>
              <input
                className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                type="text"
                name="duration"
                value={position.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Add Position
          </button>
        </div>
      )}
    </div>
  );
}

export default Organizations;

