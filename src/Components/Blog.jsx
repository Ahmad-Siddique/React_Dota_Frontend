import React from 'react';
import Blog_structure from './blog_structure';
import './Blog.css';
import Blog_array from './blog_array';


const Blog= () => {
    return (
    <>
    <hr className="seperator"/>
    <h1 id="blog" className="h1">BLOG</h1>
    <hr className="line"/>
    
    {Blog_array.map(function(currentvalue){
     return (<Blog_structure
     key={currentvalue.id} 
     mainheading={currentvalue.mainheading} 
      
      paragraph={currentvalue.paragraph}
      />
      );
  
})
};

</>
    );
};
       
     
   
   
export default Blog;


