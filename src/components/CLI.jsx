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

    function submitCommand(command) {
        
        const newCommandHistoryItem = {
            command: command,
            results: getResultString(command, pwd, files, setPwd, clear)
        };
        
        setCommandHistory((prev) => {
            let newCommandHistory = [...prev, newCommandHistoryItem];
            return newCommandHistory;
        });
    }
    
    return (
        <div className="px-4 py-2 w-full h-full overflow-scroll">
            {commandHistory.map((commandHistory, index) => {
                return (
                    <CommandResults command={commandHistory.command} results={commandHistory.results} key={index} />
                );
            })}
            <CommandPrompt submitCommand={submitCommand} pwd={pwd} files={files} innerRef={promptRef} />
        </div>
    );
}

export default CLI;