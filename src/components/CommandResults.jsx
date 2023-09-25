import React from "react";
import CommandPrompt from "components/CommandPrompt";
import ResultString from "components/ResultString";

const CommandResults = ({ command, pwd, changePwd }) => {
    return (
        <>
            <CommandPrompt text={command} pwd={pwd} />
            <div className="text-lg font-semibold font-mono w-full">
                <ResultString command={command} pwd={pwd} changePwd={changePwd} />
            </div>
        </>
    );
}

export default CommandResults;