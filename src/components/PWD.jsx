import React from "react";
import { getPwdString } from "../lib/filesRepo";

const PWD = ({ pwd, files }) => {

    const pwdString = getPwdString(pwd, files);

    return (
        <span style={{color:"#08458F"}}>{pwdString}</span>
    );
};

export default PWD;