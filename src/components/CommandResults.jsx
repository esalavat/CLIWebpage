import React from "react";
import CommandPrompt from "components/CommandPrompt";
import ResultString from "components/ResultString";

const CommandResults = ({ command, pwd, files, changePwd }) => {
    return (
        <>
            <CommandPrompt text={command} pwd={pwd} files={files} />
            <div className="text-lg font-semibold font-mono w-full">
                <ResultString command={command} pwd={pwd} files={files} changePwd={changePwd} />
            </div>
        </>
    );
}

export default CommandResults;