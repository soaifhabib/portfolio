import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One, highlighting its features and technologies used.',
        link: 'https://github.com/username/project-one',
        demo: 'https://username.github.io/project-one'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two, highlighting its features and technologies used.',
        link: 'https://github.com/username/project-two',
        demo: 'https://username.github.io/project-two'
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three, highlighting its features and technologies used.',
        link: 'https://github.com/username/project-three',
        demo: 'https://username.github.io/project-three'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;