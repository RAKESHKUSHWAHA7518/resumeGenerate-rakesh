// import { useNavigate } from "react-router-dom";
// import { TagsInput } from "react-tag-input-component";
// import Achievements from "../Components/Achievements";
// import Education from "../Components/Education";
// import Experience from "../Components/Experience";
// import PositionOfResponsibility from "../Components/PositionOfResponsibility";
// import Project from "../Components/Project";
// const ResumeForm3 = ({
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
// }) => {
//   // const [selected, setSelected] = useState([""]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleChange2 = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       technicalSkills: { ...formData.technicalSkills, [name]: value },
//     });
//   };

//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/studentDashboard/pdf", {
//       state: { formData, selected, interest, design: "ResumeDesign3" },
//     });
//   };

//   return (
//     <div className="p-2">
//       <div className="flex my-1 justify-between">
//         <label className="font-semibold mr-2">Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="text-gray-600 rounded-md p-1 font-semibold w-4/5 border-gray-700 border-2"
//         />
//       </div>
//       <div className="flex my-1 justify-between">
//         <label className="font-semibold mr-2">Phone:</label>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="text-gray-600 rounded-md p-1 font-semibold w-4/5 border-gray-700 border-2"
//         />
//       </div>
//       <div className="flex my-1 justify-between">
//         <label className="font-semibold mr-2">Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="text-gray-600 rounded-md p-1 font-semibold w-4/5 border-gray-700 border-2"
//         />
//       </div>
//       <div className="flex my-1 justify-between">
//         <label className="font-semibold mr-2">Linkedin:</label>
//         <input
//           type="text"
//           name="linkedin"
//           value={formData.linkedin}
//           onChange={handleChange}
//           placeholder="Paste the Linkedin profile link"
//           className="text-gray-600 rounded-md p-1 font-semibold w-4/5 border-gray-700 border-2"
//         />
//       </div>
//       <div className="flex my-1 justify-between">
//         <label className="font-semibold mr-2">GitHub:</label>
//         <input
//           type="text"
//           name="github"
//           value={formData.github}
//           onChange={handleChange}
//           placeholder="Paste the github profile link"
//           className="text-gray-600 rounded-md p-1 font-semibold w-4/5 border-gray-700 border-2"
//         />
//       </div>

//       {/* Education Section */}
//       <div>
//         <Education formData={formData} setFormData={setFormData} />
//       </div>

//       {/* Experience Section */}
//       <Experience formData={formData} setFormData={setFormData} />

//       {/* Projects Section */}
//       <div>
//         <Project formData={formData} setFormData={setFormData} />
//       </div>

//       {/* Technical Skills Section */}
//       <div className="py-2  bg-gray-400 rounded-lg p-2 my-1">
//         <h3 className="font-semibold text-lg ">TECHNICAL SKILLS</h3>{" "}
//         <div>
//           <h1>Add Your skills</h1>
//           <pre>{JSON.stringify(selected)}</pre>
//           <TagsInput
//             value={selected}
//             onChange={setSelected}
//             name="fruits"
//             placeHolder="enter skills"
//           />{" "}
//           {console.log(selected)}
//           <em>press enter or comma to add new tag</em>
//         </div>
//       </div>

//       {/* Achievements Section */}
//       <div>
//         <Achievements
//           formData={formData}
//           setFormData={setFormData}
//           disabled={disabled}
//           setDisable={setDisable}
//         />
//       </div>

//       {/* Position of Responsibility Section */}
//       <div>
//         <PositionOfResponsibility
//           formData={formData}
//           setFormData={setFormData}
//           posdisable={posdisable}
//           setPosDisable={setPosDisable}
//         />
//       </div>

//       {/* Interests Section */}
//       <div className="py-2  bg-gray-400 rounded-lg p-2 my-1">
//         <h3 className="font-semibold text-lg ">INTERESTS</h3>{" "}
//         <div>
//           <h1>Add Your skills</h1>
//           <pre>{JSON.stringify(interest)}</pre>
//           <TagsInput
//             value={interest}
//             onChange={setInterest}
//             name="fruits"
//             placeHolder="enter your interests"
//           />{" "}
//           {console.log(interest)}
//           <em>press enter or comma to add new tag</em>
//         </div>
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="bg-slate-800 hover:bg-slate-950 w-full text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default ResumeForm3;



import { useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import Achievements from "../Components/Achievements";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import PositionOfResponsibility from "../Components/PositionOfResponsibility";
import Project from "../Components/Project";

const ResumeForm3 = ({
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
    navigate("/studentDashboard/pdf", {
      state: { formData, selected, interest, design: "ResumeDesign3" },
    });
  };

  return (
    <div className="p-2 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col my-2 space-y-2">
        <div className="flex items-center">
          <label className="font-semibold w-1/4">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label className="font-semibold w-1/4">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label className="font-semibold w-1/4">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label className="font-semibold w-1/4">Linkedin:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="Paste the Linkedin profile link"
            className="flex-1 text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label className="font-semibold w-1/4">GitHub:</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="Paste the github profile link"
            className="flex-1 text-gray-600 rounded-md p-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="my-4">
        <Education formData={formData} setFormData={setFormData} />
      </div>

      <div className="my-4">
        <Experience formData={formData} setFormData={setFormData} />
      </div>

      <div className="my-4">
        <Project formData={formData} setFormData={setFormData} />
      </div>

      <div className="py-4 bg-gray-300 rounded-lg my-4 p-4">
        <h3 className="font-semibold text-lg">TECHNICAL SKILLS</h3>
        <div className="mt-2">
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="skills"
            placeHolder="Enter skills"
            className="w-full"
          />
          <em className="text-gray-600">Press enter or comma to add new tag</em>
        </div>
      </div>

      <div className="my-4">
        <Achievements
          formData={formData}
          setFormData={setFormData}
          disabled={disabled}
          setDisable={setDisable}
        />
      </div>

      <div className="my-4">
        <PositionOfResponsibility
          formData={formData}
          setFormData={setFormData}
          posdisable={posdisable}
          setPosDisable={setPosDisable}
        />
      </div>

      <div className="py-4 bg-gray-300 rounded-lg my-4 p-4">
        <h3 className="font-semibold text-lg">INTERESTS</h3>
        <div className="mt-2">
          <TagsInput
            value={interest}
            onChange={setInterest}
            name="interests"
            placeHolder="Enter your interests"
            className="w-full"
          />
          <em className="text-gray-600">Press enter or comma to add new tag</em>
        </div>
      </div>

      <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
          >
            Submit
          </button>
        </div>
    </div>
  );
};

export default ResumeForm3;
