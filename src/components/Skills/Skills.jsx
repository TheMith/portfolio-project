import React, { useState } from 'react';
import { useJsonData } from '../../services/hook.js';

export function Skills() {
    const [isFrontEndExpanded, setFrontEndExpanded] = useState(false);
    const [isBackEndExpanded, setBackEndExpanded] = useState(false);
    const [isToolsExpanded, setToolsExpanded] = useState(false);
    const [buttonClicked, setButtonClicked] = useState('');

    const toggleFrontEnd = () => {
        setFrontEndExpanded(!isFrontEndExpanded);
        setButtonClicked('front-end');

        setTimeout(() => {
            setButtonClicked('');
        }, 300);
    };

    const toggleBackEnd = () => {
        setBackEndExpanded(!isBackEndExpanded);
        setButtonClicked('back-end');

        setTimeout(() => {
            setButtonClicked('');
        }, 300);
    };

    const toggleTools = () => {
        setToolsExpanded(!isToolsExpanded);
        setButtonClicked('tools');

        setTimeout(() => {
            setButtonClicked('');
        }, 300);
    };

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }

    return (
        <section id='skills' className='skills'>
            <div className='skill-category'>
                <h2 className='category-title'>
                    <button className={`text-button ${buttonClicked === 'front-end' ? 'clicked' : ''}`} onClick={toggleFrontEnd}>
                        {isFrontEndExpanded ? '-' : '+'} Front-End
                    </button>
                </h2>
                <ul className={`skill-list ${isFrontEndExpanded ? 'visible' : ''}`}>
                    {jsonData.skills.frontEnd.list.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='skill-category'>
                <h2 className='category-title'>
                    <button className={`text-button ${buttonClicked === 'back-end' ? 'clicked' : ''}`} onClick={toggleBackEnd}>
                        {isBackEndExpanded ? '-' : '+'} Back-End
                    </button>
                </h2>
                <ul className={`skill-list ${isBackEndExpanded ? 'visible' : ''}`}>
                    {jsonData.skills.backEnd.list.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='skill-category'>
                <h2 className='category-title'>
                    <button className={`text-button ${buttonClicked === 'tools' ? 'clicked' : ''}`} onClick={toggleTools}>
                        {isToolsExpanded ? '-' : '+'} Tools
                    </button>
                </h2>
                <ul className={`skill-list ${isToolsExpanded ? 'visible' : ''}`}>
                    {jsonData.skills.tools.list.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
