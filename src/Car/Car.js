import React from 'react';
import './Car.css';

class Car extends React.Component {
    
    render() {
        
//        if (Math.random() > 0.7) {throw new Error('Car random failed')}
    
        return (
            <div className="Car">
                <div className="car-descr">
                    <p>Car name: <strong>{this.props.name}</strong></p>
                    <p>Year: <strong>{this.props.year}</strong></p>
                    <button onClick={this.props.onCarChose}>I like!</button>
                    <button className='delete-btn' onClick={this.props.onCarDelete}>Delete this</button>
                </div>
                <img className='car-picture' src={this.props.imageSrc} alt=''/>

                {this.props.children}
            </div> 
        )
        
    }
}

export default Car;