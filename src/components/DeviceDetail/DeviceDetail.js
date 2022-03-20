import React from 'react';

const DeviceDetail = (props) => {
    console.log(props)
    return (
        <div>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default DeviceDetail;