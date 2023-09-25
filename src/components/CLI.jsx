import React, {useState} from "react";
import CommandPrompt from "components/CommandPrompt";
import CommandResults from "components/CommandResults";

const CLI = () => {

    const [commandHistory, setCommandHistory] = useState([]);
    const [pwd, setPwd] = useState(0);

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
        <div className="px-4 py-2 w-full">
            {commandHistory.map((commandHistory, index) => {
                return (
                    <CommandResults command={commandHistory.command} pwd={commandHistory.pwd} changePwd={setPwd} key={index} />
                );
            })}
            <CommandPrompt submitCommand={submitCommand} />
        </div>
    );
}

export default CLI;