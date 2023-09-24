import React from "react";
import { getResultString } from "../lib/processCommand.js";
import CommandPrompt from "components/CommandPrompt";

const CommandResults = ({ command }) => {
    
    const resultString = getResultString(command);

    return (
        <>
            <CommandPrompt text={command} />
            <div>
                {resultString}
            </div>
        </>
    );
}

export default CommandResults;