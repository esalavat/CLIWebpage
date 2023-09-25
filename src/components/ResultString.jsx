import React from "react";
import { getResultString } from "../lib/processCommand.js";

const ResultString = ({ command, pwd, changePwd }) => {

    const resultString = getResultString(command, pwd, changePwd);

    return (
        <>
            {resultString.split('\n').map(str => <p>{str}</p>)}
        </>
    );
};

export default ResultString;