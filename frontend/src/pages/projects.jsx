import React from "react";

import ProjectCard from '../assets/components/projectCard'


const Projects = () => {

    const projectsArray = [
        {
            "title": "PROJECT ONE",
            "img":"./kafka bug.jpg",
            "bioText": "dklsajffkljhklashjdfklhjklfahsdkl fklash fklhfaklsdhflkha kls klahsdfklhlkashdfdkl k fhsklhaklsdfh lkhalkfhklashdflk hflaksdhflk hakldshflkhaskldf k ashdfklhaklshfdklhasdklfhlkashdflkhalskdhflk hasdfh lkasdflk sdlfkhlkasdhf klhkhfsdaklhaklsf hklh",
            "link": "https://github.com/CoffeyAa?tab=repositories"
        },
        {
            "title": "PROJECT TWO",
            "img":"./kafka bug.jpg",
            "bioText": "Two",
            "link": "https://github.com/CoffeyAa?tab=repositories"
        },
        {
            "title": "PROJECT THREE",
            "img":"./kafka bug.jpg",
            "bioText": "Three",
            "link": "https://github.com/CoffeyAa?tab=repositories"
        },
    ]

    return (
        <div className="page">
            {projectsArray.map(item => <ProjectCard title={item.title} imgSrc={item.img} bioText={item.bioText} link={item.link}/>)}
        </div>
    );
};

export default Projects