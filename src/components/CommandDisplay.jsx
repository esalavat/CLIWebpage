import React from "react";

const CommandDisplay = ({ command }) => {
    return (
        <span className="whitespace-nowrap p-0 absolute">{command}</span>
    );
};

export default CommandDisplay;