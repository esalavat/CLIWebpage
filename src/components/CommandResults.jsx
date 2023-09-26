import React from "react";
import CommandPrompt from "components/CommandPrompt";
import ResultString from "components/ResultString";

const CommandResults = ({ command, results, pwd, files }) => {
    return (
        <>
            <CommandPrompt text={command} pwd={pwd} files={files} />
            <div className="text-lg font-semibold font-mono w-full">
                <ResultString results={results} />
            </div>
        </>
    );
}

export default CommandResults;