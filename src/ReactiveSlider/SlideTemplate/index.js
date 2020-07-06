import React from "react";
import "./style.css";


export default function SlideTemplate(props) {
    const {slide, index} = props;

    const contentTypeClass = !slide.image && !slide.video ? " text-only " : ""
    return (
        <div className={"slide-template " + (slide.className || "") + ` slide-${index} ` + contentTypeClass + (slide.theme || "")} style={{...(slide.style || {})}}>
            <div className="media-box">
                {
                    slide.image ?
                        <img className="image" alt={slide.title || ""} src={slide.image} style={{...(slide.styleImage || {})}}/>
                        :
                        null
                }
                {
                    slide.video ?
                        <video className="video" playsInline frameborder="0" autoPlay loop muted style={{...(slide.styleVideo || {})}}>
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
