import React, { useState } from "react";

let i = 1;

function Education({ formData, setFormData }) {
  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    gpa: "",
    startYear: "",
    endYear: "",
    location: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleAdd = async () => {
    if (Object.values(education).some(value => value.trim() === "")) {
      // Show an alert if any field is empty
      window.alert("All fields must be filled out.");
      return;
    }

    await setFormData({
      ...formData,
      education: [...formData.education, { ...education, id: i++ }],
    });
    setEducation({
      institution: "",
      degree: "",
      gpa: "",
      startYear: "",
      endYear: "",
      location: "",
    });
  };

  const handleRemove = async (id) => {
    await setFormData({
      ...formData,
      education: formData.education.filter((item) => item.id !== id),
    });
  };

  return (
    <div className="my-4">
      <h3 className="font-semibold text-lg mb-4">EDUCATION</h3>

      {formData.education.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md"
        >
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Institution:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.institution}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Degree:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.degree}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">GPA:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.gpa}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Start Year:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.startYear}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">End Year:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.endYear}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Location:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.location}</p>
          </div>

          <button
            className="py-1 px-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
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
            <label className="font-semibold mb-2 text-gray-700">Institution:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="institution"
              value={education.institution}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Degree:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="degree"
              value={education.degree}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">GPA:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="gpa"
              value={education.gpa}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Start Year:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="startYear"
              value={education.startYear}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">End Year:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="endYear"
              value={education.endYear}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2 text-gray-700">Location:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="location"
              value={education.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Add Education
        </button>
      </div>
    </div>
  );
}

export default Education;
