import React, { useState } from "react";

let i = 1;

function CodingProfiles({ formData, setFormData }) {
  const [profileList, setProfileList] = useState({
    profile: "",
    link: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileList({
      ...profileList,
      [name]: value,
    });
  };

  // Add a new profile
  const handleAdd = () => {
    if (profileList.profile.trim() === "" || profileList.link.trim() === "") {
      alert("Both fields must be filled out.");
      return;
    }

    setFormData({
      ...formData,
      codingProfiles: [...formData.codingProfiles, { ...profileList, id: i++ }],
    });
    setProfileList({
      profile: "",
      link: "",
    });
  };

  // Remove a profile
  const handleRemove = (id) => {
    setFormData({
      ...formData,
      codingProfiles: formData.codingProfiles.filter((item) => item.id !== id),
    });
  };

  return (
    <div className="my-4">
      <h3 className="font-semibold text-lg mb-4">Coding Profiles</h3>
      {formData.codingProfiles.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md"
        >
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Profile Name:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.profile}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Link:</label>
            <p className="bg-gray-200 rounded-md p-2 w-full">{item.link}</p>
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
            <label className="font-semibold mb-2 text-gray-700">Profile:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="profile"
              value={profileList.profile}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Link:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="link"
              value={profileList.link}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Add Profile
        </button>
      </div>
    </div>
  );
}

export default CodingProfiles;
