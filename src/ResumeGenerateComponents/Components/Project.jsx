import React, { useState } from "react";

let i = 1;

function Project({ formData, setFormData }) {
  const [project, setProject] = useState({
    projectName: "",
    projectTechnologies: "",
    projectDescription: "",
    deployedLink: "",
    githubLink: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleAdd = async () => {
    if (Object.values(project).some(value => value.trim() === "")) {
      // Show an alert if any field is empty
      window.alert("All project fields must be filled out.");
      return;
    }

    await setFormData({
      ...formData,
      projects: [...formData.projects, { ...project, id: i++ }],
    });
    setProject({
      projectName: "",
      projectTechnologies: "",
      projectDescription: "",
      deployedLink: "",
      githubLink: "",
    });
  };

  const handleRemove = async (id) => {
    await setFormData({
      ...formData,
      projects: formData.projects.filter((item) => item.id !== id),
    });
  };

  return (
    <div className="my-4">
      <h3 className="font-semibold text-lg mb-4">PROJECTS</h3>
      {formData.projects.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-4 bg-gray-200 rounded-lg shadow-md"
        >
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Topic:</label>
            <p className="bg-gray-100 rounded-md p-2 w-full">{item.projectName}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Technologies:</label>
            <p className="bg-gray-100 rounded-md p-2 w-full">{item.projectTechnologies}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Description:</label>
            <p className="bg-gray-100 rounded-md p-2 w-full">{item.projectDescription}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Deployed Link:</label>
            <p className="bg-gray-100 rounded-md p-2 w-full">{item.deployedLink}</p>
          </div>
          <div className="flex mb-2">
            <label className="w-1/3 font-semibold text-gray-700">Github Link:</label>
            <p className="bg-gray-100 rounded-md p-2 w-full">{item.githubLink}</p>
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

      <div className="py-4 border-2 border-gray-300 bg-gray-100 rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Topic:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="projectName"
              value={project.projectName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Technologies Used:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="projectTechnologies"
              value={project.projectTechnologies}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2 text-gray-700">Description:</label>
            <textarea
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none h-24 resize-none"
              name="projectDescription"
              value={project.projectDescription}
              onChange={handleChange}
              placeholder="Enter project description..."
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Deployed Link:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="deployedLink"
              value={project.deployedLink}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Github Link:</label>
            <input
              className="text-gray-700 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              type="text"
              name="githubLink"
              value={project.githubLink}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Add Project
        </button>
      </div>
    </div>
  );
}

export default Project;
