import React from "react";
import { getPwdString } from "../lib/filesRepo";

const PWD = ({ pwd }) => {

    const pwdString = getPwdString(pwd);

    return (
        <span className="text-blue-400">{pwdString}</span>
    );
};

export default PWD;