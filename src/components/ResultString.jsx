import React from "react";
import { getResultString } from "../lib/filesRepo.js";

const ResultString = ({ command, pwd, files, changePwd }) => {

    const resultString = getResultString(command, pwd, files, changePwd);

    return (
        <>
            {resultString.split('\n').map(str => <p>{str}</p>)}
        </>
    );
};

export default ResultString;