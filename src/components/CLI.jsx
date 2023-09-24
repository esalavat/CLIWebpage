import React, {useState} from "react";
import CommandPrompt from "components/CommandPrompt";
import CommandResults from "components/CommandResults";

const CLI = () => {

    const [commands, setCommands] = useState([]);

    function submitCommand(command) {
        console.log(command);
        setCommands((prev) => {
            let newCommands = [...prev, command];
            return newCommands;
        });
    }
    
    return (
        <div className="px-4 py-2 w-full">
            {commands.map((command, index) => {
                return (
                    <CommandResults command={command} key={index} />
                );
            })}
            <CommandPrompt submitCommand={submitCommand} />
        </div>
    );
}

export default CLI;