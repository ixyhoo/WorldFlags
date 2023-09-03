import React from 'react';
import log from '../components/log';
import navigation from '../components/navigation';

const blog = () => {
    return (
        <div className="blog-container">
            <log />
            <navigation />
            <h1>Blog</h1>
        </div>
    );
};

export default blog;
