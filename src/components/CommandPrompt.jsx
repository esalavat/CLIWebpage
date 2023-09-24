import React from "react";
import CommandInput from "components/CommandInput";
import User from "components/User";
import PWD from "components/PWD";

const CommandPrompt = () => {
    return (
        <div className="text-lg font-semibold font-mono">
            <User />:<PWD />$ <CommandInput />
        </div>
    );
};

export default CommandPrompt;