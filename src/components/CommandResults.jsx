import React from "react";
import { getResultString } from "../lib/processCommand.js";
import CommandPrompt from "components/CommandPrompt";

const CommandResults = ({ command }) => {
    
    const resultString = getResultString(command);

    return (
        <>
            <CommandPrompt text={command} />
            <div className="text-lg font-semibold font-mono w-full">
                {resultString.split('\n').map(str => <p>{str}</p>)}
            </div>
        </>
    );
}

export default CommandResults;