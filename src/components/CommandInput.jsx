import React, { useState, useRef, useEffect } from "react";
import { autoComplete } from "../lib/filesRepo";

const CommandInput = ({ submitCommand, pwd, files }) => {
    
    const [command, setCommand] = useState("");

    const inputBoxRef = useRef(null);

    useEffect(() => {
        setInterval(() => inputBoxRef.current.focus(), 100);
    },[]);

    function handleChange(e) {
        e.preventDefault();
        setCommand (e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitCommand(command);
        setCommand("");
    }

    function handleKeydown(e) {
        if (e.keyCode === 9) {
            e.preventDefault();
            
            let autoCompleteString = autoComplete(command, pwd, files);
            
            if(autoCompleteString) {
                setCommand(autoCompleteString); 
            }
        }
    }

    return (
        <div className="inline ml-1 w-full relative" onKeyDown={handleKeydown}>
            <form className="inline" onSubmit={handleSubmit}>
                <input type="text" 
                    className="bg-black focus:ring-0 outline-none text-white block-caret top-0 absolute w-full"
                    style={{left: "-10000px"}}
                    onChange={handleChange}
                    value={command}
                    ref={inputBoxRef}
                    autoFocus="true"
                />
                <span className="whitespace-nowrap p-0 -left-2 caret caret-block relative">{command}<span>&nbsp;</span></span>
            </form>
        </div>
    );
};

export default CommandInput;