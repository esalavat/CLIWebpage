import React, { useState, useEffect } from "react";

export default function useFiles(jsonUrl) {
    const [files, setFiles] = useState({});
    
    useEffect(() => {
        // load ajax file
        fetch(jsonUrl)
            .then(res => res.json())
            .then(json => setFiles(Object.values(json)))
    }, []);
 
    return files;
}