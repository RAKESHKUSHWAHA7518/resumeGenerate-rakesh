import { useNavigate } from "react-router-dom";
import Achievements from "../Components/Achievements";
import CodingProfiles from "../Components/CodingProfiles";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import PositionOfResponsibility from "../Components/PositionOfResponsibility";
import Project from "../Components/Project";


const ResumeForm1 = ({
  formData,
  setFormData,
  disabled,
  setDisable,
  posdisable,
  setPosDisable,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      technicalSkills: { ...formData.technicalSkills, [name]: value },
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/studentDashboard/pdf", { state: { formData, design: "ResumeDesign1" } });
  };



  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Resume Form</h2>

      <form id="resume-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">LinkedIn:</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="Paste the LinkedIn profile link"
              className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">GitHub:</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Paste the GitHub profile link"
              className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <Education formData={formData} setFormData={setFormData} />
        <Experience formData={formData} setFormData={setFormData} />
        <Project formData={formData} setFormData={setFormData} />

        <div className="py-4 mb-6">
          <h3 className="font-semibold text-lg mb-4">TECHNICAL SKILLS</h3>
          <div className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
            <div className="flex-1 min-w-[300px]">
              <label className="font-semibold mb-2 block text-gray-700">
                Languages:
              </label>
              <textarea
                name="languages"
                value={formData.technicalSkills.languages}
                onChange={handleChange2}
                className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full h-24 resize-none"
                placeholder="Enter programming languages..."
              />
            </div>
            <div className="flex-1 min-w-[300px]">
              <label className="font-semibold mb-2 block text-gray-700">
                Frameworks/Libraries/Database:
              </label>
              <textarea
                name="frameworks"
                value={formData.technicalSkills.frameworks}
                onChange={handleChange2}
                className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full h-24 resize-none"
                placeholder="Enter frameworks, libraries, and databases..."
              />
            </div>
            <div className="flex-1 min-w-[300px]">
              <label className="font-semibold mb-2 block text-gray-700">
                Developer Tools / Course Works:
              </label>
              <textarea
                name="tools"
                value={formData.technicalSkills.tools}
                onChange={handleChange2}
                className="text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full h-24 resize-none"
                placeholder="Enter developer tools and course works..."
              />
            </div>
          </div>
        </div>

        <Achievements
          formData={formData}
          setFormData={setFormData}
          disabled={disabled}
          setDisable={setDisable}
        />
        <PositionOfResponsibility
          formData={formData}
          setFormData={setFormData}
          posdisable={posdisable}
          setPosDisable={setPosDisable}
        />
        <CodingProfiles formData={formData} setFormData={setFormData} />

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm1;


 