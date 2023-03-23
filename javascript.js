const RESUME = () => {
    const [resumeData, setResumeData] = React.useState(null);

    React.useEffect(async () => {
        await getData();
    }, []);

    const getData = async () => {
        const res = await fetch('./data.json');
        const data = await res.json();
        setResumeData(data);
    }

    return resumeData ? <>
        <header>
            <h1 className="name">{resumeData.name}</h1>
            <h2 className="position">{resumeData.position}</h2>
            <div className="infoLinksContainer">
                {
                    resumeData.information_links.map((links) => {
                        return <div className="infoLinks"><i className={links.icon}></i><span style={{ margin: "0 0 0 6px"}}>{links.link}</span></div>
                    })
                }
            </div>
        </header>
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
        </section>
    </>: null;
}


ReactDOM.render(<RESUME />, document.getElementById('react-app'));


