import React from "react";
import "./style.css";


export default function SlideTemplate(props) {
    const {slide, index} = props;

    return (
        <div className={"slide-template " + (slide.className || "") + ` slide-${index} ` + (slide.theme || "")}>
            <div className="media-box">
                {
                    slide.image ?
                        <img className="image" alt={slide.title || ""} src={slide.image}/>
                        :
                        null
                }
                {
                    slide.video ?
                        <video className="video" playsInline frameborder="0" autoPlay loop muted>
                            <source src={slide.video}/>
                        </video>
                        :
                        null
                }
            </div>
            <div className="text-box">
                <h2 className="title">{slide.title}</h2>
                <p className="alt">{slide.alt}</p>
                <p className="description">{slide.description}</p>
            </div>
        </div>
    )
}
