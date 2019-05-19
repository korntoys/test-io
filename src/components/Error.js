import React from 'react';

const Error = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="alert alert-danger">
                        {props.message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
