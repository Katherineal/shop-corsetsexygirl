"use client"
import '../styles/components/icon.css'
import * as React from "react";
import { SlSocialInstagram, 
    SlSocialFacebook, 
    SlSocialYoutube
} from "react-icons/sl";
import { GiCorset } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";

export function Icon({ className, dataTestId, onClick, style, type }) {

    const icons = (type) => {
        switch (type) {
            case "instagram": {
                return <SlSocialInstagram/>;
            }
            case "facebook": {
                return <SlSocialFacebook />;
            }
            case "youtube":{
                return <SlSocialYoutube />
            }
            case "corset":{
                return <GiCorset />
            }
            case "menu":{
                return <IoIosMenu/>
            }
    };

    return (
        <div
            role='presentation'
            aria-hidden='true'
            className={className}
            data-testid={dataTestId}
            onClick={onClick}
            style={style}
            tabIndex={-1}
        >
            {icons(type)}
        </div>
    )
}}
