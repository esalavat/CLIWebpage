import React from "react";
import CommandInput from "components/CommandInput";
import CommandDisplay from "components/CommandDisplay";
import User from "components/User";
import PWD from "components/PWD";

const CommandPrompt = ({ submitCommand, text, pwd, files }) => {

    const displayMode = text ? true : false;

    return (
        <div className="text-lg font-semibold font-mono w-full">
            <User />:<PWD pwd={pwd} files={files} />$ {displayMode ? <CommandDisplay command={text} /> : <CommandInput submitCommand={submitCommand} />}
        </div>
    );
};

export default CommandPrompt;