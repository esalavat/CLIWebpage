import React, { useState } from "react";
import CommandPrompt from "components/CommandPrompt";
import CommandResults from "components/CommandResults";
import useFiles from "../hooks/useFiles";

const CLI = () => {

    const [commandHistory, setCommandHistory] = useState([{command: "help", pwd: 0}]);
    const [pwd, setPwd] = useState(0);
    const [files, filesLoading] = useFiles("./files.json");

    function submitCommand(command) {
        
        const commandHistory = {
            command: command,
            pwd: pwd
        };
        
        setCommandHistory((prev) => {
            let newCommands = [...prev, commandHistory];
            return newCommands;
        });
    }
    
    return (
        <div className="px-4 py-2 w-full h-full overflow-scroll">
            {commandHistory.map((commandHistory, index) => {
                return (
                    <CommandResults command={commandHistory.command} pwd={commandHistory.pwd} files={files} changePwd={setPwd} key={index} />
                );
            })}
            <CommandPrompt submitCommand={submitCommand} pwd={pwd} files={files} />
        </div>
    );
}

export default CLI;