import React from "react";

const ProjectCard = ({title, imgSrc, bioText, link}) => {
    return (
        <div className="project card">
            <div>
                <img src={imgSrc} className="project pic"/>
            </div>
            <div className="card description">
                <h2 style={{textDecoration: 'underline'}}>{title}</h2>
                <h3>{bioText}</h3>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Visit my GitHub
            </a>
        </div>
    )
}

export default ProjectCard