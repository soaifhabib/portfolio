import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Job Title 1',
            company: 'Company Name 1',
            duration: 'Month Year - Month Year',
            responsibilities: [
                'Responsibility 1',
                'Responsibility 2',
                'Responsibility 3',
            ],
        },
        {
            title: 'Job Title 2',
            company: 'Company Name 2',
            duration: 'Month Year - Month Year',
            responsibilities: [
                'Responsibility 1',
                'Responsibility 2',
                'Responsibility 3',
            ],
        },
        // Add more experiences as needed
    ];

    return (
        <section>
            <h2>Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.title}</h3>
                        <p>{exp.company} | {exp.duration}</p>
                        <ul>
                            {exp.responsibilities.map((resp, idx) => (
                                <li key={idx}>{resp}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;