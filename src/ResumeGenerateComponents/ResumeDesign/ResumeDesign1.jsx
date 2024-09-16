
// import React from "react";
// import { Link } from "react-router-dom";
// import '../Resume.css'; // Import the CSS file

// const ResumeDesign1 = ({
//   formData,
//   setFormData,
//   disabled,
//   setDisable,
//   posdisable,
//   setPosDisable,
// }) => {
//   return (
//     <div className="resume-container">
//       <div className="resume-content">
//         <div className="flex justify-center text-3xl font-serif font-bold small-caps">
//           {formData.name}
//         </div>
//         <div className="flex justify-center p-auto text-medium font-serif">
//           <div className="px-2 text-12px">{formData.phone}</div>
//           <div className="px-2 text-12px">{formData.email}</div>
//           <Link className="px-2 text-12px text-blue-900" to={formData.linkedin}>
//             LinkedIn
//           </Link>
//           <Link className="px-2 text-12px text-blue-900" to={formData.github}>
//             GitHub
//           </Link>
//         </div>
//         {/* Education Section */}
//         <div className="mt-2 font-bold font-serif">EDUCATION</div>
//         <hr className="mb-2 border-t-2 border-gray-500" />
//         <div>
//           {formData.education.length ? (
//             formData.education.map((edu, ind) => (
//               <div className="education-item" key={ind}>
//                 <div className="flex justify-between">
//                   <div className="font-serif">{edu.institution}</div>
//                   <div>{edu.startYear}-{edu.endYear}</div>
//                 </div>
//                 <div className="flex justify-between">
//                   <div className="font-serif italic text-12px text-gray-800">
//                     {edu.degree}, {edu.gpa}
//                   </div>
//                   <div className="font-serif italic text-12px text-gray-800">
//                     {edu.location}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="education-item">
//               <div className="flex justify-between">
//                 <div className="font-serif">Rajkiya Engineering College, Banda</div>
//                 <div className="font-serif">2020-2024</div>
//               </div>
//               <div className="flex justify-between">
//                 <div className="font-serif italic text-12px text-gray-800">
//                   B.Tech in Information Technology, 8.0 GPA
//                 </div>
//                 <div className="font-serif italic text-12px text-gray-800">
//                   Banda
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//         {/* Experience Section */}
//         <div className="mt-2 font-bold font-serif">EXPERIENCE</div>
//         <hr className="mb-2 border-t-2 border-gray-500" />
//         {formData.experience.length ? (
//           formData.experience.map((exp, ind) => (
//             <div className="experience-item" key={ind}>
//               <div className="flex justify-between text-md">
//                 <div>{exp.company}</div>
//                 <div>{exp.duration}</div>
//               </div>
//               <div className="flex justify-between italic text-12px text-gray-800">
//                 <div>{exp.role}</div>
//                 <div>{exp.location}</div>
//               </div>
//               <pre className="font-serif text-13px whitespace-pre-wrap overflow-x-auto">{exp.description}</pre>
//               </div>
//           ))
//         ) : (
//           <div className="experience-item">
//             <div className="flex justify-between text-md">
//               <div>BharatTech-Techecosystem</div>
//               <div>Jul 2023 - Oct 2023</div>
//             </div>
//             <div className="flex justify-between italic text-12px text-gray-800">
//               <div className="text-gray-800">Back-end Developer Intern</div>
//               <div className="text-gray-800">Kanpur</div>
//             </div>
//             <ul className="text-13px">
//               <li>
//                 Created 8+ APIs with CRUD operations using NodeJs, ExpressJs, and
//                 MongoDB for the College cue of BharatTech.
//               </li>
//               <li>
//                 Applied authentication and authorization system for the Bcode
//                 project using JSON Web Token, SMTP, and Google OAuth, including
//                 login/signup, forgot and reset password systems, and worked on
//                 sanity.
//               </li>
//             </ul>
//           </div>
//         )}
//         {/* Projects Section */}
//         <div className="mt-2 font-bold font-serif">PROJECTS</div>
//         <hr className="mb-2 border-t-2 border-gray-500" />
//         <div>
//           {formData.projects.length ? (
//             formData.projects.map((project, ind) => (
//               <div className="project-item" key={ind}>
//                 <div className="flex">
//                   <div className="pr-2">{project.projectName}</div>
//                   <div className="text-blue-900">
//                     {project.deployedLink?.length ? (
//                       <Link to={project.deployedLink} className="text-blue-900">
//                         | Deployed Link
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                   <div className="text-blue-900">
//                     {project.githubLink?.length ? (
//                       <Link to={project.githubLink} className="text-blue-900">
//                         | GitHub Link
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 <div className="pr-2">{project.projectTechnologies}</div>
//                 <pre>{project.projectDescription}</pre>
//               </div>
//             ))
//           ) : (
//             <div className="project-item">
//               <div className="flex font-serif">
//                 <div className="pr-2">Real-Time Chat App-Vchatify</div>
//                 <div className="pr-2 text-blue-900">| Deployed Link</div>
//                 <div className="pr-2 text-blue-900">| GitHub Link</div>
//               </div>
//               <div className="pr-2 font-serif italic text-12px text-gray-800">
//                 React.JS, NodeJS, ExpressJS, MongoDB, CSS
//               </div>
//               <ul className="font-serif text-13px">
//                 <li>
//                   Constructed and tested 10+ APIs for user interactions including
//                   one-on-one and group chat.
//                 </li>
//                 <li>
//                   Implemented Socket.io technology to facilitate instant messaging
//                   and updates, creating a responsive and dynamic user experience.
//                   Ensured secure access with JWT authentication and authorization,
//                   enhancing data protection and user privacy.
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//         {/* Technical Skills Section */}
//         <div>
//           <h3 className="mt-2 font-bold font-serif">TECHNICAL SKILLS</h3>
//           <hr className="mb-2 border-t-2 border-gray-500" />
//           {formData.technicalSkills.languages ? (
//             <div className="flex">
//               <div>Languages:</div>
//               <div>{formData.technicalSkills.languages}</div>
//             </div>
//           ) : (
//             ""
//           )}
//           {formData.technicalSkills.frameworks ? (
//             <div className="flex">
//               <div>Frameworks/Libraries/Database:</div>
//               <div>{formData.technicalSkills.frameworks}</div>
//             </div>
//           ) : (
//             ""
//           )}
//           {formData.technicalSkills.tools ? (
//             <div className="flex">
//               <div>Tools:</div>
//               <div>{formData.technicalSkills.tools}</div>
//             </div>
//           ) : (
//             ""
//           )}
//           {!formData.technicalSkills.languages &&
//             !formData.technicalSkills.frameworks &&
//             !formData.technicalSkills.tools && (
//               <div>
//                 <div className="flex font-serif text-13px">
//                   <div className="font-bold">Languages:</div>
//                   <div>&nbsp; C, C++, JavaScript, C-sharp (Familiar)</div>
//                 </div>
//                 <div className="flex font-serif text-13px">
//                   <div className="font-bold">Frameworks/Libraries/Database:</div>
//                   <div>
//                     &nbsp; NodeJS, ExpressJS, ReactJS, EJS, Bootstrap, CSS,
//                     Tailwind CSS, SQL, MongoDB
//                   </div>
//                 </div>
//                 <div className="flex font-serif text-13px">
//                   <div className="font-bold">Tools:</div>
//                   <div>
//                     &nbsp; VS Code, Adobe Photoshop, Adobe Illustrator, GitHub,
//                     GIT, Postman, OOPs, DSA
//                   </div>
//                 </div>
//               </div>
//             )}
//         </div>
//         {/* Achievements Section */}
//         <div>
//           {disabled ? (
//             <div></div>
//           ) : (
//             <div>
//               <h3 className="mt-2 font-bold font-serif">ACHIEVEMENTS/CERTIFICATIONS</h3>
//               <hr className="mb-2 border-t-2 border-gray-500" />
//               {formData.achievements.length !== 0 ? (
//                 formData.achievements.map((item, index) => (
//                   <div key={index}>{item.desc}</div>
//                 ))
//               ) : (
//                 <div className="font-serif text-13px">
//                   <div>
//                     Secured 1st position among 31 teams in Hacktech’22, held in
//                     our college (REC Banda).
//                   </div>
//                   <div>
//                     Cleared 1st Round and secured Global Rank: 2935 out of more
//                     than 6000 contestants in final round CodeKaze - Sep’23
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         {/* Position of Responsibility Section */}
//         <div>
//           {posdisable ? (
//             <div></div>
//           ) : (
//             <div>
//               <h3 className="mt-2 font-bold font-serif">POSITION OF RESPONSIBILITY</h3>
//               <hr className="mb-2 border-t-2 border-gray-500" />
//               {formData.responsibilities.length ? (
//                 formData.responsibilities.map((item, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between font-serif">
//                       <div>{item.positionName}</div>
//                       <div>{item.duration}</div>
//                     </div>
//                     <div>{item.description}</div>
//                   </div>
//                 ))
//               ) : (
//                 <div>
//                   <div>
//                     <div className="flex justify-between font-serif text-14px">
//                       <div>
//                         Coordinator in Student Developer Club at Rajkiya
//                         Engineering College, Banda
//                       </div>
//                       <div>July 2021 - Continue</div>
//                     </div>
//                   </div>
//                   <div className="text-13px font-serif">
//                     This club, tailored for programmers and developers, fosters
//                     accelerated skills enhancement through knowledge sharing. With
//                     guidance from mentors and a collaborative team of 30+ members.
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         {/* Coding Profiles Section */}
//         <h3 className="font-bold font-serif">CODING PROFILES</h3>
//         <hr className="mb-2 border-t-2 border-gray-500 font-serif" />
//         {formData.codingProfiles.length ? (
//           formData.codingProfiles.map((item, index) => (
//             <Link to={item.link} key={index} className="font-serif text-13px text-blue-900">
//               {item.profile}
//             </Link>
//           ))
//         ) : (
//           <div className="flex justify-between mx-32 font-serif text-13px text-blue-900">
//             <div>LeetCode</div>
//             <div>HackerRank</div>
//             <div>Gfg</div>
//             <div>Coding Ninja</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeDesign1;


// import React from "react";
// import { Link } from "react-router-dom";
// import '../Resume.css'; // Import the CSS file
 

// const ResumeDesign1 = ({
//   formData,
//   setFormData,
//   disabled,
//   setDisable,
//   posdisable,
//   setPosDisable,
// }) => {
//   return (
//     <div className="resume-container px-8 py-4">
//       <div className="resume-content">
       
//         {/* Header */}
//         <div className="flex justify-center text-3xl font-serif font-bold small-caps mb-4">
//           {formData.name}
//         </div>
//         <div className="flex justify-center mb-4 text-medium font-serif">
//           <div className="px-2 text-xs">{formData.phone}</div>
//           <div className="px-2 text-xs">{formData.email}</div>
//           <Link className="px-2 text-xs text-blue-900" to={formData.linkedin}>
//           linkedIn
//           </Link>
//           <Link className="px-2 text-xs text-blue-900" to={formData.github}>
//            Github
//           </Link>
//         </div>

//         {/* Education Section */}
//         <div className="mt-4 font-bold font-serif text-xl">EDUCATION</div>
//         <hr className="mb-4 border-t-2 border-gray-500" />
//         <div>
//           {formData.education.length ? (
//             formData.education.map((edu, ind) => (
//               <div className="education-item mb-4" key={ind}>
//                 <div className="flex justify-between">
//                   <div className="font-serif text-md">{edu.institution}</div>
//                   <div className="text-md">{edu.startYear}-{edu.endYear}</div>
//                 </div>
//                 <div className="flex justify-between">
//                   <div className="font-serif italic text-sm text-gray-800">
//                     {edu.degree}, {edu.gpa}
//                   </div>
//                   <div className="font-serif italic text-sm text-gray-800">
//                     {edu.location}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="education-item mb-4">
//               <div className="flex justify-between">
//                 <div className="font-serif text-md">Rajkiya Engineering College, Banda</div>
//                 <div className="font-serif text-md">2020-2024</div>
//               </div>
//               <div className="flex justify-between">
//                 <div className="font-serif italic text-sm text-gray-800">
//                   B.Tech in Information Technology, 8.1 GPA
//                 </div>
//                 <div className="font-serif italic text-sm text-gray-800">
//                   Banda
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Experience Section */}
//         <div className="mt-4 font-bold font-serif text-xl">EXPERIENCE</div>
//         <hr className="mb-4 border-t-2 border-gray-500" />
//         {formData.experience.length ? (
//           formData.experience.map((exp, ind) => (
//             <div className="experience-item mb-4" key={ind}>
//               <div className="flex justify-between text-md">
//                 <div>{exp.company}</div>
//                 <div>{exp.duration}</div>
//               </div>
//               <div className="flex justify-between italic text-sm text-gray-800">
//                 <div>{exp.role}</div>
//                 <div>{exp.location}</div>
//               </div>
//               <pre className="font-serif text-sm whitespace-pre-wrap overflow-x-auto mt-2">{exp.description}</pre>
//             </div>
//           ))
//         ) : (
//           <div className="experience-item mb-4">
//             <div className="flex justify-between text-md">
//               <div>BharatTech-Techecosystem</div>
//               <div>Jul 2023 - Oct 2023</div>
//             </div>
//             <div className="flex justify-between italic text-sm text-gray-800">
//               <div className="text-gray-800">Back-end Developer Intern</div>
//               <div className="text-gray-800">Kanpur</div>
//             </div>
//             <ul className="text-sm font-serif mt-2">
//               <li>
//                 Created 8+ APIs with CRUD operations using NodeJs, ExpressJs, and
//                 MongoDB for the College cue of BharatTech.
//               </li>
//               <li>
//                 Applied authentication and authorization system for the Bcode
//                 project using JSON Web Token, SMTP, and Google OAuth, including
//                 login/signup, forgot and reset password systems, and worked on
//                 sanity.
//               </li>
//             </ul>
//           </div>
//         )}

//         {/* Projects Section */}
//         <div className="mt-4 font-bold font-serif text-xl">PROJECTS</div>
//         <hr className="mb-4 border-t-2 border-gray-500" />
//         <div>
//           {formData.projects.length ? (
//             formData.projects.map((project, ind) => (
//               <div className="project-item mb-4" key={ind}>
//                 <div className="flex">
//                   <div className="pr-2 text-md font-serif">{project.projectName}</div>
//                   <div className="text-blue-900">
//                     {project.deployedLink?.length ? (
//                       <Link to={project.deployedLink} className="text-blue-900">
//                         | Deployed Link
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                   <div className="text-blue-900">
//                     {project.githubLink?.length ? (
//                       <Link to={project.githubLink} className="text-blue-900">
//                         | GitHub Link
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 <div className="pr-2 font-serif italic text-sm text-gray-800">{project.projectTechnologies}</div>
//                 <pre className="font-serif text-sm mt-2">{project.projectDescription}</pre>
//               </div>
//             ))
//           ) : (
//             <div className="project-item mb-4">
//               <div className="flex font-serif text-md">
//                 <div className="pr-2">Real-Time Chat App-Vchatify</div>
//                 <div className="pr-2 text-blue-900">| Deployed Link</div>
//                 <div className="pr-2 text-blue-900">| GitHub Link</div>
//               </div>
//               <div className="pr-2 font-serif italic text-sm text-gray-800">
//                 React.JS, NodeJS, ExpressJS, MongoDB, CSS
//               </div>
//               <ul className="font-serif text-sm mt-2">
//                 <li>
//                   Constructed and tested 10+ APIs for user interactions including
//                   one-on-one and group chat.
//                 </li>
//                 <li>
//                   Implemented Socket.io technology to facilitate instant messaging
//                   and updates, creating a responsive and dynamic user experience.
//                   Ensured secure access with JWT authentication and authorization,
//                   enhancing data protection and user privacy.
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Technical Skills Section */}
//         <div className="mt-4">
//           <h3 className="font-bold font-serif text-xl">TECHNICAL SKILLS</h3>
//           <hr className="mb-4 border-t-2 border-gray-500" />
//           {formData.technicalSkills.languages ? (
//             <div className="flex mb-2 text-sm">
//               <div className="font-serif font-bold">Languages:</div>
//               <div className="ml-2 font-serif">{formData.technicalSkills.languages}</div>
//             </div>
//           ) : (
//             ""
//           )}
//           {formData.technicalSkills.frameworks ? (
//             <div className="flex mb-2 text-sm">
//               <div className="font-serif font-bold">Frameworks/Libraries/Database:</div>
//               <div className="ml-2 font-serif">{formData.technicalSkills.frameworks}</div>
//             </div>
//           ) : (
//             ""
//           )}
//           {formData.technicalSkills.tools ? (
//             <div className="flex mb-2 text-sm">
//               <div className="font-serif font-bold">Tools:</div>
//               <div className="ml-2 font-serif">{formData.technicalSkills.tools}</div>
//             </div>
//           ) : (
//             ""
//           )}
//           {!formData.technicalSkills.languages &&
//             !formData.technicalSkills.frameworks &&
//             !formData.technicalSkills.tools && (
//               <div>
//                 <div className="flex mb-2 font-serif text-sm">
//                   <div className="font-bold">Languages:</div>
//                   <div className="ml-2 font-serif">C, C++, JavaScript, C-sharp (Familiar)</div>
//                 </div>
//                 <div className="flex mb-2 font-serif text-sm">
//                   <div className="font-bold">Frameworks/Libraries/Database:</div>
//                   <div className="ml-2 font-serif">
//                     NodeJS, ExpressJS, ReactJS, EJS, Bootstrap, CSS, Tailwind CSS, SQL, MongoDB
//                   </div>
//                 </div>
//                 <div className="flex mb-2 font-serif text-sm">
//                   <div className="font-bold">Tools:</div>
//                   <div className="ml-2 font-serif">
//                     VS Code, Adobe Photoshop, Adobe Illustrator, GitHub, GIT, Postman, OOPs, DSA
//                   </div>
//                 </div>
//               </div>
//             )}
//         </div>

//         {/* Achievements Section */}
//         <div className="mt-4">
//           {!disabled && (
//             <div>
//               <h3 className="font-bold font-serif text-xl">ACHIEVEMENTS/CERTIFICATIONS</h3>
//               <hr className="mb-4 border-t-2 border-gray-500" />
//               {formData.achievements.length !== 0 ? (
//                 formData.achievements.map((item, index) => (
//                   <div key={index} className="text-sm font-serif mb-2">{item.desc}</div>
//                 ))
//               ) : (
//                 <div className="font-serif text-sm">
//                   <div className="mb-2 font-serif">
//                     Secured 1st position among 31 teams in Hacktech’22, held in
//                     our college (REC Banda).
//                   </div>
//                   <div>
//                     Cleared 1st Round and secured Global Rank: 2935 out of more
//                     than 6000 contestants in final round CodeKaze - Sep’23
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Position of Responsibility Section */}
//         <div className="mt-4">
//           {!posdisable && (
//             <div>
//               <h3 className="font-bold font-serif text-xl">POSITION OF RESPONSIBILITY</h3>
//               <hr className="mb-4 border-t-2 border-gray-500" />
//               {formData.responsibilities.length ? (
//                 formData.responsibilities.map((item, index) => (
//                   <div key={index} className="mb-4">
//                     <div className="flex justify-between font-serif text-md">
//                       <div className="font-bold">{item.positionName}</div>
//                       <div>{item.duration}</div>
//                     </div>
//                     <div className="text-sm font-serif">{item.description}</div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="mb-4">
//                   <div className="flex justify-between font-serif text-md">
//                     <div>Coordinator in Student Developer Club at Rajkiya Engineering College, Banda</div>
//                     <div>July 2021 - Continue</div>
//                   </div>
//                   <div className="text-sm font-serif mt-2">
//                     This club, tailored for programmers and developers, fosters
//                     accelerated skills enhancement through knowledge sharing. With
//                     guidance from mentors and a collaborative team of 30+ members.
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Coding Profiles Section */}
//         <div className="mt-4">
//           <h3 className="font-bold font-serif text-xl">CODING PROFILES</h3>
//           <hr className="mb-4 border-t-2 border-gray-500" />
//           {formData.codingProfiles.length ? (
//             formData.codingProfiles.map((item, index) => (
//               <Link to={item.link} key={index} className="block text-sm text-blue-900 mb-2">
//                 {item.profile}
//               </Link>
//             ))
//           ) : (
//             <div className="flex justify-between mx-32 font-serif text-sm text-blue-900">
//               <div>LeetCode</div>
//               <div>HackerRank</div>
//               <div>Gfg</div>
//               <div>Coding Ninja</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeDesign1;






 




import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import '../Resume.css'; // Import the CSS file
import PrintButton from "../PrintButton";

const ResumeDesign1 = ({
  formData,
  setFormData,
  disabled,
  setDisable,
  posdisable,
  setPosDisable,
}) => {
  // Ref to target the printable area
  const componentRef = useRef();

  // Function to handle printing using react-to-print
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  return (
    <div className="resume-container px-8 py-4">
      {/* Print Button */}
      {/* <div className="flex justify-end mb-4">
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Print Resume
        </button>
      </div> */}
      <div className="flex justify-end mb-4">
        <PrintButton contentRef={componentRef} label="Print Resume" />
      </div>

      {/* The section to be printed */}
      <div ref={componentRef} className="resume-content">
        {/* Header */}
        <div className="resume-container px-8 py-4">
       <div className="resume-content">
       
         {/* Header */}
         <div className="flex justify-center text-3xl font-serif font-bold small-caps mb-4">
           {formData.name}
         </div>
         <div className="flex justify-center mb-4 text-medium font-serif">
           <div className="px-2 text-xs">{formData.phone}</div>
           <div className="px-2 text-xs">{formData.email}</div>
           <Link className="px-2 text-xs text-blue-900" to={formData.linkedin}>
           linkedIn
           </Link>
           <Link className="px-2 text-xs text-blue-900" to={formData.github}>
            Github
           </Link>
         </div>

         {/* Education Section */}
         <div className="mt-4 font-bold font-serif text-xl">EDUCATION</div>
         <hr className="mb-4 border-t-2 border-gray-500" />
         <div>
           {formData.education.length ? (
            formData.education.map((edu, ind) => (
              <div className="education-item mb-4" key={ind}>
                <div className="flex justify-between">
                  <div className="font-serif text-md">{edu.institution}</div>
                  <div className="text-md">{edu.startYear}-{edu.endYear}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-serif italic text-sm text-gray-800">
                    {edu.degree}, {edu.gpa}
                  </div>
                  <div className="font-serif italic text-sm text-gray-800">
                    {edu.location}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="education-item mb-4">
              <div className="flex justify-between">
                <div className="font-serif text-md">Rajkiya Engineering College, Banda</div>
                <div className="font-serif text-md">2020-2024</div>
              </div>
              <div className="flex justify-between">
                <div className="font-serif italic text-sm text-gray-800">
                  B.Tech in Information Technology, 8.1 GPA
                </div>
                <div className="font-serif italic text-sm text-gray-800">
                  Banda
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Experience Section */}
        <div className="mt-4 font-bold font-serif text-xl">EXPERIENCE</div>
        <hr className="mb-4 border-t-2 border-gray-500" />
        {formData.experience.length ? (
          formData.experience.map((exp, ind) => (
            <div className="experience-item mb-4" key={ind}>
              <div className="flex justify-between text-md">
                <div>{exp.company}</div>
                <div>{exp.duration}</div>
              </div>
              <div className="flex justify-between italic text-sm text-gray-800">
                <div>{exp.role}</div>
                <div>{exp.location}</div>
              </div>
              <pre className="font-serif text-sm whitespace-pre-wrap overflow-x-auto mt-2">{exp.description}</pre>
            </div>
          ))
        ) : (
          <div className="experience-item mb-4">
            <div className="flex justify-between text-md">
              <div>BharatTech-Techecosystem</div>
              <div>Jul 2023 - Oct 2023</div>
            </div>
            <div className="flex justify-between italic text-sm text-gray-800">
              <div className="text-gray-800">Back-end Developer Intern</div>
              <div className="text-gray-800">Kanpur</div>
            </div>
            <ul className="text-sm font-serif mt-2">
              <li>
                Created 8+ APIs with CRUD operations using NodeJs, ExpressJs, and
                MongoDB for the College cue of BharatTech.
              </li>
              <li>
                Applied authentication and authorization system for the Bcode
                project using JSON Web Token, SMTP, and Google OAuth, including
                login/signup, forgot and reset password systems, and worked on
                sanity.
              </li>
            </ul>
          </div>
        )}

        {/* Projects Section */}
        <div className="mt-4 font-bold font-serif text-xl">PROJECTS</div>
        <hr className="mb-4 border-t-2 border-gray-500" />
        <div>
          {formData.projects.length ? (
            formData.projects.map((project, ind) => (
              <div className="project-item mb-4" key={ind}>
                <div className="flex">
                  <div className="pr-2 text-md font-serif">{project.projectName}</div>
                  <div className="text-blue-900">
                    {project.deployedLink?.length ? (
                      <Link to={project.deployedLink} className="text-blue-900">
                        | Deployed Link
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text-blue-900">
                    {project.githubLink?.length ? (
                      <Link to={project.githubLink} className="text-blue-900">
                        | GitHub Link
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="pr-2 font-serif italic text-sm text-gray-800">{project.projectTechnologies}</div>
                <pre className="font-serif text-sm mt-2">{project.projectDescription}</pre>
              </div>
            ))
          ) : (
            <div className="project-item mb-4">
              <div className="flex font-serif text-md">
                <div className="pr-2">Real-Time Chat App-Vchatify</div>
                <div className="pr-2 text-blue-900">| Deployed Link</div>
                <div className="pr-2 text-blue-900">| GitHub Link</div>
              </div>
              <div className="pr-2 font-serif italic text-sm text-gray-800">
                React.JS, NodeJS, ExpressJS, MongoDB, CSS
              </div>
              <ul className="font-serif text-sm mt-2">
                <li>
                  Constructed and tested 10+ APIs for user interactions including
                  one-on-one and group chat.
                </li>
                <li>
                  Implemented Socket.io technology to facilitate instant messaging
                  and updates, creating a responsive and dynamic user experience.
                  Ensured secure access with JWT authentication and authorization,
                  enhancing data protection and user privacy.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Technical Skills Section */}
        <div className="mt-4">
          <h3 className="font-bold font-serif text-xl">TECHNICAL SKILLS</h3>
          <hr className="mb-4 border-t-2 border-gray-500" />
          {formData.technicalSkills.languages ? (
            <div className="flex mb-2 text-sm">
              <div className="font-serif font-bold">Languages:</div>
              <div className="ml-2 font-serif">{formData.technicalSkills.languages}</div>
            </div>
          ) : (
            ""
          )}
          {formData.technicalSkills.frameworks ? (
            <div className="flex mb-2 text-sm">
              <div className="font-serif font-bold">Frameworks/Libraries/Database:</div>
              <div className="ml-2 font-serif">{formData.technicalSkills.frameworks}</div>
            </div>
          ) : (
            ""
          )}
          {formData.technicalSkills.tools ? (
            <div className="flex mb-2 text-sm">
              <div className="font-serif font-bold">Tools:</div>
              <div className="ml-2 font-serif">{formData.technicalSkills.tools}</div>
            </div>
          ) : (
            ""
          )}
          {!formData.technicalSkills.languages &&
            !formData.technicalSkills.frameworks &&
            !formData.technicalSkills.tools && (
              <div>
                <div className="flex mb-2 font-serif text-sm">
                  <div className="font-bold">Languages:</div>
                  <div className="ml-2 font-serif">C, C++, JavaScript, C-sharp (Familiar)</div>
                </div>
                <div className="flex mb-2 font-serif text-sm">
                  <div className="font-bold">Frameworks/Libraries/Database:</div>
                  <div className="ml-2 font-serif">
                    NodeJS, ExpressJS, ReactJS, EJS, Bootstrap, CSS, Tailwind CSS, SQL, MongoDB
                  </div>
                </div>
                <div className="flex mb-2 font-serif text-sm">
                  <div className="font-bold">Tools:</div>
                  <div className="ml-2 font-serif">
                    VS Code, Adobe Photoshop, Adobe Illustrator, GitHub, GIT, Postman, OOPs, DSA
                  </div>
                </div>
              </div>
            )}
        </div>

        {/* Achievements Section */}
        <div className="mt-4">
          {!disabled && (
            <div>
              <h3 className="font-bold font-serif text-xl">ACHIEVEMENTS/CERTIFICATIONS</h3>
              <hr className="mb-4 border-t-2 border-gray-500" />
              {formData.achievements.length !== 0 ? (
                formData.achievements.map((item, index) => (
                  <div key={index} className="text-sm font-serif mb-2">{item.desc}</div>
                ))
              ) : (
                <div className="font-serif text-sm">
                  <div className="mb-2 font-serif">
                    Secured 1st position among 31 teams in Hacktech’22, held in
                    our college (REC Banda).
                  </div>
                  <div>
                    Cleared 1st Round and secured Global Rank: 2935 out of more
                    than 6000 contestants in final round CodeKaze - Sep’23
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Position of Responsibility Section */}
        <div className="mt-4">
          {!posdisable && (
            <div>
              <h3 className="font-bold font-serif text-xl">POSITION OF RESPONSIBILITY</h3>
              <hr className="mb-4 border-t-2 border-gray-500" />
              {formData.responsibilities.length ? (
                formData.responsibilities.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between font-serif text-md">
                      <div className="font-bold">{item.positionName}</div>
                      <div>{item.duration}</div>
                    </div>
                    <div className="text-sm font-serif">{item.description}</div>
                  </div>
                ))
              ) : (
                <div className="mb-4">
                  <div className="flex justify-between font-serif text-md">
                    <div>Coordinator in Student Developer Club at Rajkiya Engineering College, Banda</div>
                    <div>July 2021 - Continue</div>
                  </div>
                  <div className="text-sm font-serif mt-2">
                    This club, tailored for programmers and developers, fosters
                    accelerated skills enhancement through knowledge sharing. With
                    guidance from mentors and a collaborative team of 30+ members.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Coding Profiles Section */}
        <div className="mt-4">
          <h3 className="font-bold font-serif text-xl">CODING PROFILES</h3>
          <hr className="mb-4 border-t-2 border-gray-500" />
          {formData.codingProfiles.length ? (
            formData.codingProfiles.map((item, index) => (
              <Link to={item.link} key={index} className="block text-sm text-blue-900 mb-2">
                {item.profile}
              </Link>
            ))
          ) : (
            <div className="flex justify-between mx-32 font-serif text-sm text-blue-900">
              <div>LeetCode</div>
              <div>HackerRank</div>
              <div>Gfg</div>
              <div>Coding Ninja</div>
            </div>
          )}
        </div>
      </div>
    </div>
         

         

        

         
         
      </div>
    </div>
  );
};

export default ResumeDesign1;





 

 

