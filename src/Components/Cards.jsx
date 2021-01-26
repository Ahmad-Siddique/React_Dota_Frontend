import React from 'react';
import Card_structure from './Cards_structure';
import './Cards.css';
import Cards_array from './Cards_array';


const Card= () => {
    return (
    <>
    <h1 id="heroes" className="h1">Best Midlane Heroes</h1>
    <hr />
    
    {Cards_array.map(function(currentvalue){
     return (<Card_structure
     key={currentvalue.id} 
     heroheading={currentvalue.heroheading} 
      imagesrc={currentvalue.imagesrc}
      title={currentvalue.heading}
      para={currentvalue.para}
      />
      );
  
})
};

</>
    );
};
       
     
   
   
export default Card;


