import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PrintButton from "../PrintButton";

const ResumeDesign2 = ({
  formData,
  setFormData,
  disabled,
  setDisable,
  posdisable,
  setPosDisable,
  fontSize,
  setFontSize,
}) => {
  const componentRef = useRef();
  return (
    <div className="bg-white px-8 m-8 p-4">
       <div className="flex justify-end mb-4">
        <PrintButton contentRef={componentRef} label="Print Resume" />
      </div>
      <div  ref={componentRef}className="resume-content p-4" >
      <div className="flex justify-center text-4xl font-serif font-bold small-caps ">
        {formData.name}
      </div>
      <div className="flex justify-center p-auto text-medium font-serif mt-4 mb-8">
        <div className="px-2 text-[14px]">{formData.phone}</div>
        <div className="px-2 text-[14px]">{formData.email}</div>
        <Link className="px-2 text-[14px] text-blue-900" to={formData.linkedin}>
          LinkedIn
        </Link>
        <Link className="px-2 text-[14px] text-blue-900" to={formData.github}>
          GitHub
        </Link>
      </div>

      <div className="columns-2 gap-8">
        {/* Education Section */}
        <div>
          <div className="mt-2 font-bold font-serif text-2xl">EDUCATION</div>
          <hr className="mb-2 border-t-2 border-gray-500" />
          {formData.education.length ? (
            formData.education.map((edu, ind) => (
              <div key={ind} className="w-full">
                <div className="flex justify-between ">
                  <div className="font-serif text-[14px]">
                    {edu.institution}
                  </div>
                  <div className="text-[12px]">
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
              <div className="flex justify-between">
                <div className="font-serif text-[14px]">
                  Rajkiya Engineering College, Banda
                </div>
                <div className="font-serif text-[12px]">2020-2024</div>
              </div>
              <div className="flex justify-between">
                <div className="font-serif italic text-[11px] text-gray-800">
                  B.Tech in Information Technology, 8.0 GPA
                </div>
                <div className="font-serif italic text-[11px] text-gray-800">
                  Banda
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Experience Section */}
        <div>
          <div className="mt-2 font-bold font-serif text-2xl">EXPERIENCE</div>
          <hr className="mb-2 border-t-2 border-gray-500" />
          {formData.experience.length ? (
            formData.experience.map((exp, ind) => (
              <div key={ind} className="font-serif">
                <div className="flex justify-between text-md">
                  <div className="text-[14px]">{exp.company}</div>
                  <div className="text-[12px]">{exp.duration}</div>
                </div>
                <div className="flex justify-between italic text-[11px] text-gray-800">
                  <div>{exp.role}</div>
                  <div>{exp.location}</div>
                </div>
                <pre className="font-serif text-[13px]">{exp.description}</pre>
              </div>
            ))
          ) : (
            <div className="w-full font-serif">
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
          <div className="mt-2 font-bold font-serif text-2xl">PROJECTS</div>
          <hr className="mb-2 border-t-2 border-gray-500" />
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
                        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Live
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
                        | GitHub
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="pr-2">{project.projectTechnologies}</div>
                <pre>{project.projectDescription}</pre>
              </div>
            ))
          ) : (
            <div>
              <div className="flex font-serif">
                <div className="pr-2 text-[14px]">
                  Real-Time Chat App-Vchatify
                </div>
                <div className="pr-2 text-blue-900 text-[12px]">
                  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Live
                </div>
                <div className="pr-2 text-blue-900 text-[12px]">
                  | GitHub
                </div>
              </div>
              <div className="pr-2 font-serif italic text-[11px] text-gray-800">
                React.JS, NodeJS, ExpressJS, MongoDB, CSS
              </div>
              <ul className="font-serif text-[13px]">
                <li>
                  Constructed and tested 10+ APIs for user interactions
                  including one-on-one and group chat.
                </li>
                <li>
                  Implemented Socket.io technology to facilitate instant
                  messaging and updates, creating a responsive and dynamic user
                  experience. Ensured secure access with JWT authentication and
                  authorization, enhancing data protection and user privacy.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Technical Skills Section */}
        <div>
          <h3 className="mt-2 font-bold font-serif text-2xl">
            TECHNICAL SKILLS
          </h3>
          <hr className="mb-2 border-t-2 border-gray-500" />
          {formData.technicalSkills.languages ? (
            <div className="flex">
              <div>Languages:</div>
              <div>{formData.technicalSkills.languages}</div>
            </div>
          ) : (
            ""
          )}
          {formData.technicalSkills.frameworks ? (
            <div>
              <div>Frameworks/Libraries/Database:</div>
              <div>{formData.technicalSkills.frameworks}</div>
            </div>
          ) : (
            ""
          )}
          {formData.technicalSkills.tools ? (
            <div className="flex">
              <div>Tools:</div>
              <div>{formData.technicalSkills.tools}</div>
            </div>
          ) : (
            ""
          )}
          {!formData.technicalSkills.languages &&
            !formData.technicalSkills.frameworks &&
            !formData.technicalSkills.tools && (
              <div>
                <div className="flex font-serif text-[13px]">
                  <div className="font-bold">Languages:</div>
                  <div>&nbsp; C, C++, JavaScript, C-sharp (Familiar)</div>
                </div>
                <div className="font-serif text-[13px]">
                  <div className="font-bold">
                    Frameworks/Libraries/Database:
                  </div>
                  <div className="mb-2">
                    &nbsp; NodeJS, ExpressJS, ReactJS, EJS, Bootstrap, CSS,
                    Tailwind CSS, SQL, MongoDB
                  </div>
                </div>
                <div className="flex font-serif text-[13px]">
                  <div className="font-bold">Tools:</div>
                  <div>
                    &nbsp; VS Code, Adobe Photoshop, Adobe Illustrator, GitHub,
                    GIT, Postman, OOPs, DSA, OS, DBMS, CN
                  </div>
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
              <h3 className={`mt-2 font-bold font-serif ${fontSize} `}>
                ACHIEVEMENTS
              </h3>
              <hr className="mb-2 border-t-2 border-gray-500" />{" "}
              {formData.achievements.length !== 0 ? (
                formData.achievements.map((item) => <div>{item.desc}</div>)
              ) : (
                <div className="font-serif text-[13px]">
                  <div>
                    Secured 1st position among 31 teams in Hacktech’22, held in
                    our college (REC Banda.)
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
        <div>
          {posdisable ? (
            <div></div>
          ) : (
            <div>
              <h3 className="mt-2 font-bold font-serif">
                POSITION OF RESPONSIBILITY
              </h3>
              <hr className="mb-2 border-t-2 border-gray-500" />

              {formData.responsibilities.length ? (
                formData.responsibilities.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between font-serif">
                      <div className="font-semibold">{item.positionName}</div>
                      <div>{item.duration}</div>
                    </div>
                    <div>{item.description}</div>
                  </div>
                ))
              ) : (
                <div>
                  <div>
                    <div className="flex justify-between font-serif text-[14px]">
                      <div className="font-semibold">
                        Coordinator in Student Developer Club at Rajkiya
                        Engineering College, Banda
                      </div>
                      <div className="text-[12px]">July 2021 - Continue</div>
                    </div>
                  </div>
                  <div className="text-[13px] font-serif">
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

        <h3 className=" mt-1 font-bold font-serif">CODING PROFILES </h3>
        <hr className="mb-2 border-t-2 border-gray-500 font-serif" />
        {formData.codingProfiles.length ? (
          formData.codingProfiles.map((item) => (
            <Link
              to={item.link}
              className="font-serif text-[11px] text-blue-900 mr-1"
            >
              {item.profile}
            </Link>
          ))
        ) : (
          <div className="flex justify-between  font-serif text-[11px] text-blue-900">
            <div>LeetCode</div>
            <div>HackerRank</div>
            <div>Gfg</div>
            <div>Coding Ninja</div>
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default ResumeDesign2;
