import React from "react";
import CommandPrompt from "components/CommandPrompt";
import ResultString from "components/ResultString";

const CommandResults = ({ command, results, pwd }) => {
    return (
        <>
            <CommandPrompt text={command} pwd={pwd} />
            <div className="text-lg font-semibold font-mono w-full">
                <ResultString results={results} />
            </div>
        </>
    );
}

export default CommandResults;