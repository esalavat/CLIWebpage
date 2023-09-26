import React from "react";

const ResultString = ({ results }) => {
    return (
        <>
            {results.split('\n').map(str => <p>{str}</p>)}
        </>
    );
};

export default ResultString;