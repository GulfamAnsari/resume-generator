const RESUME = () => {
    const [resumeData, setResumeData] = React.useState(null);
    const [template, setTemplate] = React.useState(localStorage.getItem("template") || "advance");

    React.useEffect(async () => {
        await getData();
    }, []);

    const getData = async () => {
        const res = await fetch('./data.json');
        const data = await res.json();
        setResumeData(data);
    }

    const getHref = (type) => {
        return {
            email: "mailto:",
            phone: "tel:",
            link: ""
        }[type] || ""
    }

    const basicResume = () => {
        return <><div className="resume_header">
            <div className="heading">
                <h1 className="name">{resumeData.name}</h1>
                <h2 className="position">{resumeData.position}</h2>
            </div>
            <div className="infoLinksContainer">
                {
                    resumeData.information_links.map((links) => {
                        return <div className="infoLinks"><a href={getHref(links.type) + links.link} target="_blank"><span>{links.label}<i className={links.icon} style={{ margin: "0 0 0 8px" }}></i></span></a></div>
                    })
                }
            </div>
        </div>
            <section>
                <div className="summary">
                    <h2 className="summaryHeading">SUMMARY</h2>
                    <div className="hr"></div>
                    <p className="summaryText">{resumeData.summary}</p>
                </div>
                <div className="experience">
                    <h2 className="experienceHeading">WORK EXPERIENCE</h2>
                    <div className="hr"></div>
                    <div className="companies">
                        {
                            resumeData.work_experience.map((exp) => {
                                return <div className="company">
                                    <div className="date"><span className="">{exp.start_date}</span> - <span className="">{exp.end_date}</span></div>
                                    <h3 className="role">{exp.role}</h3>
                                    <p className="companyName"><a href={exp.company_link}>{exp.company}</a></p>
                                    <p className="location">{exp.location}</p>

                                    <ul>
                                        {
                                            exp.tasks.map((task) => {
                                                return <li>{task}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>

                </div>
                <div className="educationContainer">
                    <h2 className="educationHeading">EDUCATION</h2>
                    <div className="hr"></div>
                    <div className="school">
                        {
                            resumeData.educations.map((education) => {
                                return <div className="education">
                                    <div className="date">{education.year}</div>
                                    <h3 className="course">{education.course}</h3>
                                    <p className="collage"><a href={education.collage}>{education.collage}</a></p>
                                    <p className="location">{education.location}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="skills">
                    <h2 className="skillsHeading">SKILLS</h2>
                    <div className="hr"></div>
                    <div className="skill">
                        {
                            resumeData.skills.techskills.map((skill) => {
                                return <div className="skillContainer">
                                    {skill.logo && <img src={"./images/" + skill.logo} width="20px" height="20px" style={{ margin: "auto" }} />}
                                    <div className="skillCapsules">
                                        <span className="skillName">{skill.name}</span>
                                        <span className="progress"><i style={{ background: "#437f8b", width: skill.rating * 20 + "%" }}></i></span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="achievements">
                    <h2 className="achievementsHeading">ACHIEVEMENTS</h2>
                    <div className="hr"></div>
                    <div className="achievement">
                        {
                            resumeData.achievements.map((achieve) => {
                                return <div className="achievementsContainer">
                                    <h4 className="achievementName">{achieve.name}</h4>
                                    <p className="achievementsDes">{achieve.description}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="tools-and-library">
                    <h2 className="toolsHeading">TOOLS AND LIBRARIES</h2>
                    <div className="hr"></div>
                    <div className="toolsBox">
                        {
                            resumeData.toole_and_libraries.map((tAndL) => {
                                return <span className="tAndL">{tAndL}</span>
                            })
                        }
                    </div>
                </div>
            </section></>
    }

    const modernResume = () => {
        return <>
            <div className="resume_header">
                <div className="heading">
                    <h1 className="name">{resumeData.name}</h1>
                    <h2 className="position">{resumeData.position}</h2>
                </div>
                <div className="infoLinksContainer">
                    {
                        resumeData.information_links.map((links) => {
                            return <div className="infoLinks"><a href={getHref(links.type) + links.link} target="_blank"><span>{links.label}<i className={links.icon} style={{ margin: "0 0 0 8px" }}></i></span></a></div>
                        })
                    }
                </div>
            </div>

            <section className="__MODERN_section">
                <div className="__MODERN_left_section">
                    <div className="summary">
                        <h2 className="summaryHeading">SUMMARY</h2>
                        <div className="hr"></div>
                        <p className="summaryText">{resumeData.summary}</p>
                    </div>
                    <div className="experience" style={{ margin: "16px 0 0 0" }}>
                        <h2 className="experienceHeading">WORK EXPERIENCE</h2>
                        <div className="hr"></div>
                        <div className="companies">
                            {
                                resumeData.work_experience.map((exp) => {
                                    return <div className="company">
                                        <div className="date"><span className="">{exp.start_date}</span> - <span className="">{exp.end_date}</span></div>
                                        <h3 className="role">{exp.role}</h3>
                                        <p className="companyName"><a href={exp.company_link}>{exp.company}</a></p>
                                        <p className="location">{exp.location}</p>

                                        <ul>
                                            {
                                                exp.tasks.map((task) => {
                                                    return <li>{task}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    <div className="educationContainer">
                        <h2 className="educationHeading">EDUCATION</h2>
                        <div className="hr"></div>
                        <div className="school">
                            {
                                resumeData.educations.map((education) => {
                                    return <div className="education">
                                        <div className="date">{education.year}</div>
                                        <h3 className="course">{education.course}</h3>
                                        <p className="collage" style={{ lineHeight: "1.1rem", margin: 0 }}>{education.collage}</p>
                                        <p className="location">{education.location}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="__MODERN_right_section">
                    <div className="skills" style={{ margin: "0" }}>
                        <h2 className="skillsHeading">SKILLS</h2>
                        <div className="hr"></div>
                        <div className="skill">
                            {
                                resumeData.skills.techskills.map((skill) => {
                                    return <div style={{ width: "100%" }} className="skillContainer">
                                        {skill.logo && <img src={"./images/" + skill.logo} width="20px" height="20px" style={{ margin: "auto" }} />}
                                        <div className="skillCapsules">
                                            <span className="skillName">{skill.name}</span>
                                            <span className="progress"><i style={{ background: "#437f8b", width: skill.rating * 20 + "%" }}></i></span>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="achievements">
                        <h2 className="achievementsHeading">ACHIEVEMENTS</h2>
                        <div className="hr"></div>
                        <div className="achievement">
                            {
                                resumeData.achievements.map((achieve) => {
                                    return <div className="achievementsContainer">
                                        <h4 className="achievementName">{achieve.name}</h4>
                                        <p className="achievementsDes">{achieve.description}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="tools-and-library">
                        <h2 className="toolsHeading">TOOLS AND LIBRARIES</h2>
                        <div className="hr"></div>
                        <div className="toolsBox">
                            {
                                resumeData.toole_and_libraries.map((tAndL) => {
                                    return <span className="tAndL">{tAndL}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section></>
    }

    const advance = () => {
        return <>
            <div className="advance resume_header">
                <div className="heading">
                    <h1 className="name">{resumeData.name}</h1>
                    <h3 className="position">{resumeData.position}</h3>
                </div>
                <div className="infoLinksContainer">
                    {
                        resumeData.information_links.map((links, index) => {
                            return <div className="infoLinks"><a href={getHref(links.type) + links.link} target="_blank"><span><i className={links.icon} style={{ margin: "0 4px 0 0" }}></i>{links.label}</span></a><span style={{ margin: '0 0 0 8px' }}>{index < resumeData.information_links.length - 1 ? '|': null}</span></div>
                        })
                    }
                </div>
            </div>

            <section className="__MODERN_section advance_section">
                <div className="__MODERN_left_section">
                    <div className="summary">
                        <h2 className="summaryHeading">SUMMARY</h2>
                        <div className="hr"></div>
                        <p className="summaryText">{resumeData.summary}</p>
                    </div>
                    <div className="experience">
                        <h2 className="experienceHeading">WORK EXPERIENCE</h2>
                        <div className="hr"></div>
                        <div className="companies">
                            {
                                resumeData.work_experience.map((exp) => {
                                    return <div className="company">
                                        <div className="date"><span className="">{exp.start_date}</span> - <span className="">{exp.end_date}</span></div>
                                        <h3 className="role">{exp.role}</h3>
                                        <p className="companyName"><a href={exp.company_link}>{exp.company}</a></p>
                                        <p className="location">{exp.location}</p>

                                        <ul>
                                            {
                                                exp.tasks.map((task) => {
                                                    return <li>{task}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                   
                </div>
                <div className="__MODERN_right_section">
                    <div className="skills" style={{ margin: "0" }}>
                        <h2 className="skillsHeading">SKILLS</h2>
                        <div className="hr"></div>
                        {
                                resumeData.skills.techskills.map((skill) => {
                                    return <span className="advanceskillContainer">{skill.name}</span>
                                })
                            }
                        {/* <div className="advanceskill">
                            <h4 className="achievementName">Technical skill</h4>
                           
                            <h4 className="achievementName">Soft skills</h4>
                            {
                                resumeData.skills.softskills.map((skill) => {
                                    return <span className="advanceskillContainer">{skill.name}</span>
                                })
                            }
                        </div> */}
                    </div>
                    <div className="achievements">
                        <h2 className="achievementsHeading">PROJECTS</h2>
                        <div className="hr" style={{ margin: 0}}></div>
                        <div className="achievement">
                            {
                                resumeData.projects.map((achieve) => {
                                    return <div className="achievementsContainer">
                                        <h3 style={{ marginBottom: '-4px'}} className="achievementName">{achieve.name}</h3>
                                        <span className="advance_company">{achieve.company}</span>
                                        <p className="achievementsDes">{achieve.description}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="educationContainer">
                        <h2 className="educationHeading">EDUCATION</h2>
                        <div className="hr"></div>
                        <div className="school">
                            {
                                resumeData.educations.map((education) => {
                                    return <div className="education">
                                        <div className="date">{education.year}</div>
                                        <h3 className="course">{education.course}</h3>
                                        <p className="collage" style={{ lineHeight: "1.1rem", margin: 0, fontSize: '12px' }}>{education.collage}</p>
                                        <p className="location">{education.location}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="achievements">
                        <h2 className="achievementsHeading">AWARDS</h2>
                        <div className="hr" style={{ margin: 0}}></div>
                        <div className="achievement">
                            {
                                resumeData.achievements.map((achieve) => {
                                    return <div className="achievementsContainer">
                                        <h4 className="achievementName">{achieve.name}</h4>
                                        <p className="achievementsDes">{achieve.company}</p>
                                        <p className="location">{achieve.date}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="tools-and-library">
                        <h2 className="toolsHeading">TOOLS AND LIBRARIES</h2>
                        <div className="hr"></div>
                        <div className="advancetoolsBox">
                        { resumeData.toole_and_libraries.join(', ') }
                         
                        </div>
                    </div>
                </div>
            </section></>
    }

    const getResume = (type) => {
        return {
            basic: basicResume(),
            modern: modernResume(),
            advance: advance()
        }[type];
    }

    return (
        <>
            {resumeData ? <div className="zima">{getResume(template)}</div> : null}
        </>
    );
}


ReactDOM.render(<RESUME />, document.getElementById('react-app'));


const CreatePDFfromHTML = () => {
    var doc = new jsPDF();
    doc.fromHTML($('.zima').get(0));

    doc.save('Generated.pdf');
}
