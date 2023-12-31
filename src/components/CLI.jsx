import React, { useEffect, useState, useRef } from "react";
import CommandPrompt from "components/CommandPrompt";
import CommandResults from "components/CommandResults";
import useFiles from "../hooks/useFiles";
import { getResultString } from "../lib/filesRepo.js";

const CLI = () => {

    const [commandHistory, setCommandHistory] = useState([]);
    const [pwd, setPwd] = useState(0);
    const files = useFiles("./files.json");

    const promptRef = useRef(null);

    useEffect(() => {
        submitCommand("help");
    },[]);
    
    useEffect(() => {
        if(promptRef) {
            promptRef.current.scrollIntoView();
        }
    },[commandHistory]);

    function clear() {
        setCommandHistory([]);
    }

    function preventTab(event) {
        if (event.keyCode === 9) {
            event.preventDefault();
        }
    }

    function submitCommand(command) {
        
        const newCommandHistoryItem = {
            command: command,
            pwd: pwd,
            results: getResultString(command, pwd, files, setPwd, clear)
        };
        
        setCommandHistory((prev) => {
            let newCommandHistory = [...prev, newCommandHistoryItem];
            return newCommandHistory;
        });
    }
    
    return (
        <div className="px-4 py-2 w-full h-full overflow-scroll" onKeyDown={preventTab}>
            {commandHistory.map((commandHistory, index) => {
                return (
                    <CommandResults command={commandHistory.command} results={commandHistory.results} pwd={commandHistory.pwd} files={files} key={index} />
                );
            })}
            <CommandPrompt submitCommand={submitCommand} pwd={pwd} files={files} innerRef={promptRef} />
        </div>
    );
}

export default CLI;