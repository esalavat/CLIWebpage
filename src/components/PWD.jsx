import React from "react";
import { getPwdString } from "../lib/filesRepo";

const PWD = ({ pwd }) => {

    const pwdString = getPwdString(pwd);

    return (
        <span style={{color:"#08458F"}}>{pwdString}</span>
    );
};

export default PWD;