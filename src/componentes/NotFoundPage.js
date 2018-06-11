import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
        {/* <a href="/">Go Home</a> */}
    </div>
);

export default NotFoundPage;