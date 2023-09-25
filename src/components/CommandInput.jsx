import React, {useEffect, useState} from "react";

const CommandInput = ({ submitCommand }) => {
    
    const [command, setCommand] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setCommand (e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitCommand(command);
        setCommand("");
    }

    return (
        <form className="inline relative ml-1 w-full" onSubmit={handleSubmit}>
            <input type="text" 
                className="bg-black focus:ring-0 outline-none text-white block-caret top-0 left-0 absolute w-full"
                onChange={handleChange}
                onBlur={(e) => {e.target.focus()}}
                value={command}
                autoFocus
            />
            <span className="whitespace-nowrap p-0 caret caret-block absolute">{command}<span>&nbsp;</span></span>
        </form>
    );
};

export default CommandInput;