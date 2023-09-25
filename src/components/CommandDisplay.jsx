import React from "react";

const CommandDisplay = ({ command }) => {
    return (
        <span className="ml-1 whitespace-nowrap -left-2 p-0 relative">{command}</span>
    );
};

export default CommandDisplay;