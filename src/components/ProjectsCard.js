import React from 'react'

const ProjectsCard = ({name, swipeDirection}) => {
    const arrow = swipeDirection === 'right' ? '>' : '<';

    return (
        <div className="flexWrapper">
            {swipeDirection === 'left' && (
                <div className={`${swipeDirection} arrows`}>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                </div>
            )}
            <div className="projectCard">
                {name}
            </div>
            {swipeDirection === 'right' && (
                <div className={`${swipeDirection} arrows`}>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                    <span>{arrow}</span>
                </div>
            )}
        </div>
    );
}

export default ProjectsCard;
