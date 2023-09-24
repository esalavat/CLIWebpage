import React, {useEffect, useState} from "react";

const CommandInput = () => {
    
    const [value, setValue] = useState();

    function handleChange(e) {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <div className="inline relative ml-1">
            <input type="text" 
                className="bg-black focus:ring-0 outline-none text-white block-caret top-0 left-0 absolute"
                onChange={handleChange}
                value={value}
                autoFocus
            />
            <span className="p-0 caret caret-block absolute">{value}<span>&nbsp;</span></span>
        </div>
    );
};

export default CommandInput;