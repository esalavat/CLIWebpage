import React, { useState, useRef } from "react";

const CommandInput = ({ submitCommand }) => {
    
    const [command, setCommand] = useState("");

    const inputBoxRef = useRef(null);

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
                    onBlur={(e) => {console.log("blur:",e);e.preventDefault(); setTimeout(() => e.target.focus(),0);return false;}}
                    value={command}
                    ref={inputBoxRef}
                    autoFocus="true"
                />
                <span className="whitespace-nowrap p-0 -left-2 caret caret-block relative" onClick={(e)=>{e.preventDefault();inputBoxRef.current.focus()}}>{command}<span>&nbsp;</span></span>
            </form>
        </div>
    );
};

export default CommandInput;