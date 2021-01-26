import React from 'react';

const Card_structure = (prop) => {
    return (
        <>
            
            <div className="card">
            <img src={prop.imagesrc}  alt="pic" style={{width:"100%",height:"300px"}} />
            <div className="container">
            <h1>{prop.heroheading}</h1>
            <h4>{prop.heading}<b></b></h4>
            <p style={{color:"black"}}>{prop.para}</p>
            <a href={prop.imagesrc}><button>Watch Now</button></a>
        </div>
</div>
        </>
    );
};

export default Card_structure;