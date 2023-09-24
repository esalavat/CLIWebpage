import React from "react";

const CommandDisplay = ({ command }) => {
    return (
        <span className="ml-1 whitespace-nowrap p-0 absolute">{command}</span>
    );
};

export default CommandDisplay;