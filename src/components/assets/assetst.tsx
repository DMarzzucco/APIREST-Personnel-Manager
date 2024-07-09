import React from "react";
import { buttonImageProps } from "../../Interfaces/Interfaces";

export const BtnImage: React.FC<buttonImageProps> = ({ children, click, className }) => {
    return (
        <button className={className} onClick={click}
            style={{
                background: "transparent",
                position: "absolute",
                top: "40%",
                fontSize: "1rem",
                cursor: "pointer",
                color: "white"
            }}
        >
            {children}
        </button>
    )
}

