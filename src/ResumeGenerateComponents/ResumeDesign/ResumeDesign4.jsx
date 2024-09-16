import React, { useRef } from "react";
import {
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaPhone,
  FaProjectDiagram,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PrintButton from "../PrintButton";

const ResumeDesign4 = ({
  formData,
  selected,
  setFormData,
  position,
  setPosition,
  objective,
  setObjective,
  disabled,
  setDisable,
  posdisable,
  setPosDisable,
}) => {
  const componentRef = useRef();
  return (
    <div className="bg-white m-8 px-8 py-4">
       <div className="flex justify-end mb-4">
        <PrintButton contentRef={componentRef} label="Print Resume" />
      </div>
      <div ref={componentRef} className="resume-content p-4">
      <div className="flex justify-between">
        <div className="w-2/5">
          <div className="flex  font-bold text-[#095859]">{formData.name}</div>
          <div className="text-[#396768] font-semibold italic">{position}</div>
          <div className="text-[12px] ">{objective}</div>
        </div>
        <div className="p-auto text-medium font-serif">
          <div className="px-2 text-[12px]">
            <a
              href={`tel:${formData.phone}`}
              aria-label="Phone"
              className="flex "
            >
              <FaPhone size={15} className="mr-1 text-[#095859]" />
              {formData.phone}
            </a>
          </div>
          <div className="px-2 py-1 text-[12px]">
            <a
              href={`mailto:${formData.email}`}
              aria-label="Email"
              className="flex"
            >
              <FaEnvelope size={15} className="mr-1 text-[#095859]" />
              {formData.email}
            </a>
          </div>
          <div>
            <Link
              className="px-2 py-1 text-[12px] text-blue-900 flex"
              to={formData.linkedin}
            >
              <FaLinkedin size={15} className="mr-1 text-[#095859]" />
              linkedIn
            </Link>
          </div>
          <div>
            <Link
              className="px-2 text-[12px] text-blue-900 flex py-1"
              to={formData.github}
            >
              <FaGithub size={15} className="mr-1 text-[#095859]" />
              github
            </Link>
          </div>
        </div>
      </div>{" "}
      <hr className="my-2 border-t-4 border-[#095859]" />{" "}
      {/* Technical Skills Section */}
      <div>
        <h3 className="mt-2 font-bold  text-[#27635d] flex ">
          <FaTools className="mr-2" />
          SKILLS
        </h3>

        <div className="p-2 ">
          {selected.length > 1 ? (
            selected.map((item, index) => (
              <div
                key={index}
                className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white"
              >
                {item}
              </div>
            ))
          ) : (
            <div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                C++
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                SEO
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                Public Speaking
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                Emotional Intelligence
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                Google Analytics
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                Sales & Marketing
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                Javascript
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                React.js
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                MongoDB
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                NodeJS
              </div>
              <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                MySQL
              </div>
            </div>
          )}
        </div>
      </div>
      {/* {Experience SEction} */}
      <div className="mt-2 font-bold font-serif flex text-[#095859]">
        <FaBriefcase className="mr-2" />
        EXPERIENCE
      </div>
      {formData.experience.length ? (
        formData.experience.map((exp, ind) => (
          <div className="font-serif">
            <div className="flex justify-between text-[15px]">
              <div className="">{exp.company}</div>
              <div className="font-serif italic text-[11px] text-gray-800">
                {exp.duration}
              </div>
            </div>
            <div className="flex justify-between italic text-[11px] text-gray-800">
              <div>{exp.role}</div> <div>{exp.location}</div>
            </div>
            <ul className="text-[12px] list-disc pl-1">
              {exp.description.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className="w-full font-serif">
          <div className="flex justify-between text-[15px]">
            <div className="">BharatTech-Techecosystem</div>
            <div className="font-serif italic text-[11px] text-gray-800">
              Jul 2023 - Oct 2023
            </div>
          </div>
          <div className="flex justify-between italic text-[11px]">
            <div className="text-gray-800">Back-end Developer Intern</div>{" "}
            <div className="text-gray-800">Kanpur</div>
          </div>
          <ul className="text-[12px] list-disc pl-1">
            <li>
              Created 8+ APIs with CRUD operation using NodeJs, ExpressJs, and
              MongoDB and sanity for the College cue of BharatTech.
            </li>
            <li>
              Applied authentication and authorization system for the Bcode
              project using JSON web token, SMTP and Google OAuth having
              login/signup, forget and reset password system and worked on
              sanity
            </li>
          </ul>
        </div>
      )}
      {/* Education Section */}
      <div className="mt-2 font-bold font-serif flex text-[#095859]">
        <FaGraduationCap className="mr-2 " />
        EDUCATION
      </div>{" "}
      <div className="flex justify-between ">
        {formData.education.length ? (
          formData.education.map((edu, ind) => (
            <div className="w-full">
              <div className="flex justify-between text-[15px]">
                <div className="font-serif ">{edu.institution}</div>
                <div className="font-serif italic text-[11px] text-gray-800">
                  {edu.startYear}-{edu.endYear}
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="font-serif italic text-[11px] text-gray-800">
                  {edu.degree}, {edu.gpa}
                </div>
                <div className="font-serif italic text-[11px] text-gray-800">
                  {edu.location}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full">
            <div className="flex justify-between text-[15px]">
              <div className="font-serif">
                Rajkiya Engineering College, Banda
              </div>
              <div className="font-serif italic text-[11px] text-gray-800">
                2020-2024
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-serif italic text-[11px] text-gray-800">
                B.Tech in Information Techology, 8.0 GPA
              </div>
              <div className="font-serif italic text-[11px] text-gray-800">
                Banda
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Projects Section */}
      <div className="mt-2 font-bold font-serif flex text-[#095859]">
        <FaProjectDiagram className="mr-2" />
        PROJECTS
      </div>{" "}
      <div>
        {formData.projects.length ? (
          formData.projects.map((project, ind) => (
            <div>
              <div className="flex">
                <div className="pr-2">{project.projectName}</div>
                <div className=" text-blue-900">
                  {project.deployedLink?.length ? (
                    <Link to={project.deployedLink} className="text-blue-900">
                      | deployedLink
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                <div className=" text-blue-900">
                  {project.githubLink?.length ? (
                    <Link to={project.githubLink} className="text-blue-900">
                      | githubLink
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="pr-2">{project.projectTechnologies}</div>{" "}
              <ul className="text-[12px] list-disc pl-5">
                {project.description.split("\n").map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div>
            <div className="flex font-serif">
              <div className="pr-2">Real-Time Chat App-Vchatify</div>
              <div className="pr-2 text-blue-900">| Deployed Link</div>
              <div className="pr-2 text-blue-900"> | Github Link</div>
            </div>
            <div className="pr-2 font-serif italic text-[11px] text-gray-800">
              React.JS, NodeJS, ExpressJS, MongoDB, CSS
            </div>
            <ul className="font-serif  text-[12px] list-disc pl-1">
              <li>
                Constructed and tested 10+ APIs for user interactions including
                one-on-one and group chat
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
      {/* Achievements Section */}
      <div>
        {disabled ? (
          <div></div>
        ) : (
          <div>
            <h3 className="mt-2 font-bold font-serif flex text-[#095859]">
              <FaCertificate className="mr-2" />
              ACHIEVEMENTS/CERTIFICATIONS
            </h3>{" "}
            {formData.achievements.length !== 0 ? (
              formData.achievements.map((item) => (
                <ul className="text-[12px] list-disc pl-5">
                  {item.description.split("\n").map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              ))
            ) : (
              <ul className="font-serif text-[12px] list-disc pl-1 ">
                <li>
                  Secured 1st position among 31 teams in Hacktech’22, held in
                  our college (REC Banda.)
                </li>
                <li>
                  Cleared 1st Round and secured Global Rank: 2935 out of more
                  than 6000 contestants in final round CodeKaze - Sep’23
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      {/* Position of Responsibility Section */}
      <div>
        {posdisable ? (
          <div></div>
        ) : (
          <div>
            <h3 className="mt-2 font-bold font-serif flex text-[#095859]">
              <FaUsers className="mr-2" />
              ORGANIZATIONS
            </h3>

            {formData.responsibilities.length ? (
              formData.responsibilities.map((item, index) => (
                <div key={index} className="inline-block mr-16">
                  <div className="font-serif text-[13px] w-1/2 p-2 ">
                    <div>{item.positionName}</div>
                    <div className="text-[12px] italic">{item.duration}</div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <div className="flex flex-wrap">
                  <div className="font-serif text-[13px] w-1/2 p-2">
                    <div>American Management Associations</div>
                    <div className="text-[12px] italic">2021 - 2024</div>
                  </div>
                  <div className="font-serif text-[13px] w-1/2 p-2">
                    <div>American Management Associations</div>
                    <div className="text-[12px] italic">2021 - 2024</div>
                  </div>
                  <div className="font-serif text-[13px] w-1/2 p-2">
                    <div>American Management Associations</div>
                    <div className="text-[12px] italic">2021 - 2024</div>
                  </div>
                  <div className="font-serif text-[13px] w-1/2 p-2">
                    <div>American Management Associations</div>
                    <div className="text-[12px] italic">2021 - 2024</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ResumeDesign4;
