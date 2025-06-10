import React, {link} from "react";

const GithubLink = ({link}) => {
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src="./github-mark.png" alt="Icon Description" style={{ width: '40px', height: '40px', cursor: 'pointer' }}/>
            </a>
        </div>
    )
}

export default GithubLink