import React from 'react';

const Coin = ({ coinID, active }) => {
    const x = "O"
    if (active) {
        x = "X"
    }


    return (
        <div className="col-1 rounded-circle" style={{ color: 'black', margin: 5, backgroundColor: "yellow" }}>{x}
        </div>
    );
}

export default Coin;