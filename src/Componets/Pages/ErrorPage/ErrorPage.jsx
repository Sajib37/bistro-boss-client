import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Error Page</title>
            </Helmet>
            <h1>This is error page</h1>
        </div>
    );
};

export default ErrorPage;