import React from 'react';

const Coin = ({ coinID, active }) => {
    const x = "-"
    if (active) {
        x = "#"
    }

    return (
        <div className="col-1 rounded-circle" style={{
            color: 'black',
            margin: 5,
            background: "#76ff03",
            boxShadow: "0 0 50px #76ff03",
            width: 20
        }}>{x}
        </div>
    );
}

export default Coin;