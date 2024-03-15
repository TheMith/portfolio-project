import React, { useState } from 'react';

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

    return (
        <section id='skills' className='skills'>
            <div className='skill-category'>
                <h2 className='category-title'>
                    <button className={`text-button ${buttonClicked === 'front-end' ? 'clicked' : ''}`} onClick={toggleFrontEnd}>
                        {isFrontEndExpanded ? '-' : '+'} Front-End
                    </button>
                </h2>
                <ul className={`skill-list ${isFrontEndExpanded ? 'visible' : ''}`}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className='skill-category'>
                <h2 className='category-title'>
                    <button className={`text-button ${buttonClicked === 'back-end' ? 'clicked' : ''}`} onClick={toggleBackEnd}>
                        {isBackEndExpanded ? '-' : '+'} Back-End
                    </button>
                </h2>
                <ul className={`skill-list ${isBackEndExpanded ? 'visible' : ''}`}>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>MySQL</li>
                </ul>
            </div>
            <div className='skill-category'>
                <h2 className='category-title'>
                    <button className={`text-button ${buttonClicked === 'tools' ? 'clicked' : ''}`} onClick={toggleTools}>
                        {isToolsExpanded ? '-' : '+'} Tools
                    </button>
                </h2>
                <ul className={`skill-list ${isToolsExpanded ? 'visible' : ''}`}>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>VSCode</li>
                </ul>
            </div>
        </section>
    );
}
