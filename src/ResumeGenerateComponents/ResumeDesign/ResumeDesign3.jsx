import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PrintButton from "../PrintButton";

const ResumeDesign3 = ({
  formData,
  setFormData,
  disabled,
  setDisable,
  posdisable,
  setPosDisable,
  selected,
  setSelected, interest, setInterest
}) => {

  const componentRef = useRef();
  return (
    <div className=" bg-white m-8 p-4">
      <div className="flex justify-end mb-4">
        <PrintButton contentRef={componentRef} label="Print Resume" />
      </div>
      <div ref={componentRef} className="resume-content p-4">
      <div className="bg-[#132e22] p-2 ">
        <div className="flex justify-center text-3xl  font-bold small-caps text-white ">
          {formData.name}
        </div>
        <div className="flex justify-center p-auto text-medium  mb-4 text-white">
          <div className="px-2 text-[12px]">{formData.phone}</div>
          <div className="px-2 text-[12px]">{formData.email}</div>
          <Link
            className="px-2 text-[12px] hover:text-blue-900"
            to={formData.linkedin}
          >
            Portfolio
          </Link>
          <Link
            className="px-2 text-[12px] hover:text-blue-900"
            to={formData.github}
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="columns-2 gap-8">
        {/* Experience Section */}
        <div>
          <div className="mt-2 font-bold  text-[#27635d]">WORK EXPERIENCE</div>
          <hr className="mb-2 border-t-2 border-[#123632]" />
          {formData.experience.length ? (
            formData.experience.map((exp, ind) => (
              <div key={ind} className="">
                <div className="flex justify-between text-md">
                  <div className="text-[14px]">{exp.company}</div>
                  <div className="text-[12px]">{exp.duration}</div>
                </div>
                <div className="flex justify-between italic text-[11px] text-gray-800">
                  <div>{exp.role}</div>
                  <div>{exp.location}</div>
                </div>
                <pre className=" text-[13px]">{exp.description}</pre>
              </div>
            ))
          ) : (
            <div className="w-full ">
              <div className="flex justify-between text-md">
                <div className="text-[14px]">BharatTech-Techecosystem</div>
                <div className="text-[12px]">Jul 2023 - Oct 2023</div>
              </div>
              <div className="flex justify-between italic text-[11px]">
                <div className="text-gray-800">Back-end Developer Intern</div>
                <div className="text-gray-800">Kanpur</div>
              </div>
              <ul className="text-[13px]">
                <li>
                  Created 8+ APIs with CRUD operations using NodeJs, ExpressJs,
                  and MongoDB and sanity for the College cue of BharatTech.
                </li>
                <li>
                  Applied authentication and authorization system for the Bcode
                  project using JSON web token, SMTP and Google OAuth having
                  login/signup, forget and reset password system and worked on
                  sanity.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div>
          <div className="mt-2 font-bold  text-[#27635d]">
            PERSONAL PROJECTS
          </div>
          <hr className="mb-2 border-t-2 border-[#123632]" />
          {formData.projects.length ? (
            formData.projects.map((project, ind) => (
              <div key={ind}>
                <div className="flex">
                  <div className="pr-2 text-[14px]">{project.projectName}</div>
                  <div className="text-blue-900 text-[13px]">
                    {project.deployedLink?.length ? (
                      <Link
                        to={project.deployedLink}
                        className="text-blue-900 text-[13px]"
                      >
                        | Deployed Link
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text-blue-900 text-[12px]">
                    {project.githubLink?.length ? (
                      <Link
                        to={project.githubLink}
                        className="text-blue-900 text-[12px]"
                      >
                        | GitHub Link
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="pr-2">{project.projectTechnologies}</div>
                <ul className="list-disc pl-5 text-[13px]">
                  {project.projectDescription.split("\n").map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div>
              <div className="flex ">
                <div className="pr-2 text-[14px]">
                  Real-Time Chat App-Vchatify
                </div>
                <div className="pr-2 text-blue-900 text-[12px]">
                  | Deployed Link
                </div>
                <div className="pr-2 text-blue-900 text-[12px]">
                  | GitHub Link
                </div>
              </div>
              <div className="pr-2  italic text-[11px] text-gray-800">
                React.JS, NodeJS, ExpressJS, MongoDB, CSS
              </div>
              <div>
                <div className="flex">
                  <div className="pr-2 text-[14px]">
                    Real-Time Chat App-Vchatify
                  </div>
                  <div className="pr-2 text-blue-900 text-[12px]">
                    | Deployed Link
                  </div>
                  <div className="pr-2 text-blue-900 text-[12px]">
                    | GitHub Link
                  </div>
                </div>
                <div className="pr-2 italic text-[11px] text-gray-800">
                  React.JS, NodeJS, ExpressJS, MongoDB, CSS
                </div>
                <ul className="list-disc pl-5 text-[13px]">
                  <li>
                    Constructed and tested 10+ APIs for user interactions
                    including one-on-one and group chat.
                  </li>
                  <li>
                    Implemented Socket.io technology to facilitate instant
                    messaging and updates, creating a responsive and dynamic
                    user experience. Ensured secure access with JWT
                    authentication and authorization, enhancing data protection
                    and user privacy.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Technical Skills Section */}
        <div>
          <h3 className="mt-2 font-bold  text-[#27635d]">SKILLS</h3>
          <hr className="mb-2 border-t-2 border-[#123632]" />
          <div className="p-4">
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
                {" "}
                <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                  C++
                </div>{" "}
                <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                  Javascript
                </div>{" "}
                <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                  React.js
                </div>{" "}
                <div className="inline-block px-2 py-1 m-1 bg-[#27635d] rounded  text-white">
                  MongoDB
                </div>{" "}
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

        {/* Education Section */}
        <div>
          <div className="mt-2 font-bold  text-[#27635d]">EDUCATION</div>
          <hr className="mb-2 border-t-2 border-[#123632]" />
          {formData.education.length ? (
            formData.education.map((edu, ind) => (
              <div key={ind} className="w-full">
                <div className="flex justify-between ">
                  <div className=" text-[14px]">{edu.institution}</div>
                  <div className="text-[12px]">
                    {edu.startYear}-{edu.endYear}
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className=" italic text-[11px] text-gray-800">
                    {edu.degree}, {edu.gpa}
                  </div>
                  <div className=" italic text-[11px] text-gray-800">
                    {edu.location}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full">
              <div className="flex justify-between">
                <div className=" text-[14px]">
                  Rajkiya Engineering College, Banda
                </div>
                <div className=" text-[12px]">2020-2024</div>
              </div>
              <div className="flex justify-between">
                <div className=" italic text-[11px] text-gray-800">
                  B.Tech in Information Technology, 8.0 GPA
                </div>
                <div className=" italic text-[11px] text-gray-800">Banda</div>
              </div>
            </div>
          )}
        </div>
        {/* Achievements Section */}
        <div>
          {disabled ? (
            <div></div>
          ) : (
            <div>
              <h3 className="mt-2 font-bold  text-[#27635d]">
                ACHIEVEMENTS/CERTIFICATES
              </h3>
              <hr className="mb-2 border-t-2 border-[#123632]" />{" "}
              {formData.achievements.length !== 0 ? (
                <ul className="list-disc pl-5 text-[13px]">
                  {formData.achievements.map((item, index) => (
                    <li key={index}>{item.desc}</li>
                  ))}
                </ul>
              ) : (
                <div className=" text-[13px]">
                  {" "}
                  <ul className="list-disc pl-5 text-[13px]">
                    <li>
                      Secured 1st position among 31 teams in Hacktech’22, held
                      in our college (REC Banda.)
                    </li>
                    <li>
                      Cleared 1st Round and secured Global Rank: 2935 out of
                      more than 6000 contestants in final round CodeKaze -
                      Sep’23
                    </li>
                  </ul>
                </div>
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
              <h3 className="mt-2 font-bold  text-[#27635d]">
                POSITION OF RESPONSIBILITY
              </h3>
              <hr className="mb-2 border-t-2 border-[#123632]" />

              {formData.responsibilities.length ? (
                formData.responsibilities.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between ">
                      <div className="font-semibold">{item.positionName}</div>
                      <div>{item.duration}</div>
                    </div>
                    <div>{item.description}</div>
                  </div>
                ))
              ) : (
                <div>
                  <div>
                    <div className="flex justify-between  text-[14px]">
                      <div className="font-semibold">
                        Coordinator in Student Developer Club at Rajkiya
                        Engineering College, Banda
                      </div>
                      <div className="text-[12px]">July 2021 - Continue</div>
                    </div>
                  </div>
                  <div className="text-[13px] ">
                    This club, tailored for programmers and developers, fosters
                    accelerated skills enhancement through knowledge sharing.
                    With guidance from mentors and a collaborative team of 30+
                    members.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <h3 className="font-bold  text-[#27635d]">INTERESTS</h3>
        <hr className="mb-2 border-t-2 border-[#123632] " />
        <div className="p-4">
          {interest.length > 1 ? (
            interest.map((item, index) => (
              <div
                key={index}
                className="inline-block px-2 py-1 m-1 border-gray-800 border-2 text-[#27635d] rounded font-bold"
              >
                {item}
              </div>
            ))
          ) : (
            <div>
              {" "}
              <div className="inline-block px-2 py-1 m-1 border-gray-800 border-2 text-[#27635d] rounded font-bold">
                Basketball
              </div>{" "}
              <div className="inline-block px-2 py-1 m-1 border-gray-800 border-2 text-[#27635d] rounded font-bold">
                Reading
              </div>{" "}
              <div className="inline-block px-2 py-1 m-1 border-gray-800 border-2 text-[#27635d] rounded font-bold">
                Thought Writing
              </div>{" "}
              <div className="inline-block px-2 py-1 m-1 border-gray-800 border-2 text-[#27635d] rounded font-bold">
                Dancing
              </div>{" "}
              <div className="inline-block px-2 py-1 m-1 border-gray-800 border-2 text-[#27635d] rounded font-bold">
                Singing
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ResumeDesign3;
