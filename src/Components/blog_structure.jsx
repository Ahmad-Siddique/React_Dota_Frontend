import React from 'react';

const Blog_structure = (prop) => {
    return (
        <>
            
            <div className="blog">
            <h1 className="main_heading">{prop.mainheading}</h1>
            <p className="para">{prop.paragraph}</p>
            <hr className="blog_seperator" />
            
        </div>

        </>
    );
};

export default Blog_structure;