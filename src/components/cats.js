import React from 'react';
function Cats(props){
    const styles={
        color:'orange',
        backgroundColor:'black'
    }
    return(
        
        <div>
            <img className="cats" src={props.source}/>
            <h1 style={styles}>Catty Name: {props.name}</h1>
        </div>
    )
}
export default Cats;