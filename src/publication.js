import { useState } from "react";

import "./publication.css";
import publicationData from "./publication_data";

const Projectbutton = (project_page) => {
    if (project_page !== "None") {
        return (
            <div className="publication_button">
                <a href={project_page} target="_blank" rel="noopener noreferrer" className="publication_link">
                    Project page
                </a>
                <div className="publication_button_divider">
                    /
                </div>
            </div>
        )
    }
}

const Paperbutton = (paper) => {
    if (paper !== "None") {
        return (
            <div className="publication_button">
                <a href={paper} target="_blank" rel="noopener noreferrer" className="publication_link">
                    paper
                </a>
                <div className="publication_button_separator">
                    /
                </div>
            </div>
        )
    }
}

const Codebutton = (code) => {
    if (code !== "None") {
        return (
            <div className="publication_button">
                <a href={code} target="_blank" rel="noopener noreferrer" className="publication_link">
                    code
                </a>
            </div>
        )
    }
}

const Publicationitem = (publication) => {
    const [state, setState] = useState(false);
    const HoverHandler = () => {
        setState(!state);
        console.log(state);
    }
    return (
        <div className="publication_item">
            <img className="publication_img" src={state ? publication.img_link_onclick : publication.img_link} onMouseOver={HoverHandler} onMouseOut={HoverHandler} />
            <div className="publication_info">
                <div className="publication_title">
                    {publication.title}
                </div>
                <div className="authors">
                    {publication.authors}
                </div>
                <div className="publication_journal">
                    {publication.journal}
                </div>
                <div className="publication_description">
                    {publication.description}
                </div>
                <div className="publication_button_wrapper">
                    <div className="publication_buttons">
                        {Paperbutton(publication.paper_link)}
                        {Codebutton(publication.code)}
                    </div>
                </div>
            </div>
        </div>
    )

}

const Publication = () => {
    return (
        <div className="publication_container">
            {publicationData.map((publication) => {
                return (
                    Publicationitem(publication)
                )
            })}
        </div>
    )
}

export default Publication;