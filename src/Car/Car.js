import React from 'react';
import Radium from 'radium';
import './Car.css';

const Car = (props) => {
    
    const style = {
        border: '2px solid #51688c',
        background: '#ddebff',
        display: 'inline-block',
        margin: '10px auto',
        padding: '5px',
        textAlign: 'left',
        width: '95%',
        transition: 'box-shadow .3s',
        ':hover': {
            boxShadow: '0 0 30px rgba(96,134,196,0.9)'
        }
    }
    
    return (
        <div className="Car" style={style}>
            <div className="car-descr">
                <p>Car name: <strong>{props.name}</strong></p>
                <p>Year: <strong>{props.year}</strong></p>
                <button onClick={props.onCarChose}>I like!</button>
                <button className='delete-btn' onClick={props.onCarDelete}>Delete this</button>
            </div>
            <img className='car-picture' src={props.imageSrc} alt=''/>
            
            {props.children}
        </div> 
    )
    
}

export default Radium(Car);