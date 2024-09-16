import React, { useState } from "react";

let i = 1;

function PositionOfResponsibility({ formData, setFormData, posdisable, setPosDisable }) {
  const [position, setPosition] = useState({
    positionName: "",
    duration: "",
    description: "",
  });

  // Toggle the state of the section
  const togglePosDisable = () => {
    setPosDisable(!posdisable);
  };

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPosition({
      ...position,
      [name]: value,
    });
  };

  // Add a new position
  const handleAdd = () => {
    if (Object.values(position).some(value => value.trim() === "")) {
      alert("All fields must be filled out.");
      return;
    }

    setFormData({
      ...formData,
      responsibilities: [...formData.responsibilities, { ...position, id: i++ }],
    });
    setPosition({
      positionName: "",
      duration: "",
      description: "",
    });
  };

  // Remove a position
  const handleRemove = (id) => {
    setFormData({
      ...formData,
      responsibilities: formData.responsibilities.filter((item) => item.id !== id),
    });
  };

  return (
    <div className="my-4">
      <h3 className="font-semibold text-lg mb-4">Position of Responsibility</h3>
      <div
        onClick={togglePosDisable}
        className="cursor-pointer text-blue-600 hover:underline mb-4"
      >
        {posdisable ? "Enable Position of Responsibility" : "Disable Position of Responsibility"}
      </div>
      {!posdisable && (
        <>
          {formData.responsibilities.map((item) => (
            <div key={item.id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex mb-2">
                <label className="w-1/3 font-semibold text-gray-700">Position Name:</label>
                <p className="bg-gray-200 rounded-md p-2 w-full">{item.positionName}</p>
              </div>
              <div className="flex mb-2">
                <label className="w-1/3 font-semibold text-gray-700">Duration:</label>
                <p className="bg-gray-200 rounded-md p-2 w-full">{item.duration}</p>
              </div>
              <div className="flex mb-2">
                <label className="w-1/3 font-semibold text-gray-700">Description:</label>
                <p className="bg-gray-200 rounded-md p-2 w-full">{item.description}</p>
              </div>
              <button
                className="py-1 px-2 mt-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                type="button"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="py-4 border-2 border-gray-300 bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="font-semibold mb-2 text-gray-700">Position Name:</label>
                <input
                  className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  type="text"
                  name="positionName"
                  value={position.positionName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-2 text-gray-700">Duration:</label>
                <input
                  className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  type="text"
                  name="duration"
                  value={position.duration}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-semibold mb-2 text-gray-700">Description:</label>
                <textarea
                  className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none h-24 resize-none"
                  name="description"
                  value={position.description}
                  onChange={handleChange}
                  placeholder="Enter description..."
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
        </>
      )}
    </div>
  );
}

export default PositionOfResponsibility;
