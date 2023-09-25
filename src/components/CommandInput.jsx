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
        <div className="inline ml-1 w-full relative">
            <form className="inline" onSubmit={handleSubmit}>
                <input type="text" 
                    className="bg-black focus:ring-0 outline-none text-white block-caret top-0 absolute w-full"
                    style={{left: "-10000px"}}
                    onChange={handleChange}
                    onBlur={(e) => {e.target.focus()}}
                    value={command}
                    autoFocus
                />
                <span className="whitespace-nowrap p-0 -left-2 caret caret-block relative">{command}<span>&nbsp;</span></span>
            </form>
        </div>
    );
};

export default CommandInput;