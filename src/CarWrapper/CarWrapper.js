import React, {useState, useEffect} from 'react';
import Car from '../Car/Car.js';

const CarWrapper = (props) => {
    
    const carsDatebase = [
                {
                    name:'Mercedes-Benz', 
                    year: 1996,
                    imageSrc: 'https://assets.catawiki.nl/assets/2017/11/15/2/3/1/231f493f-daf5-457e-ac29-f6f54bc7512d.jpg'
                },
                {
                    name:'BMW', 
                    year: 1982,
                    imageSrc: 'https://cdn.bringatrailer.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-26-at-4.49.20-PM-940x712.png'
                },
                {
                    name:'Audi', 
                    year: 2001,
                    imageSrc: 'https://cdn.bringatrailer.com/wp-content/uploads/2017/08/59938fe6590bb_DSC_0304-940x548.jpg'
                },
                {
                    name:'Mercedes-Benz', 
                    year: 1996,
                    imageSrc: 'https://assets.catawiki.nl/assets/2017/11/15/2/3/1/231f493f-daf5-457e-ac29-f6f54bc7512d.jpg'
                },
                {
                    name:'BMW', 
                    year: 1982,
                    imageSrc: 'https://cdn.bringatrailer.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-26-at-4.49.20-PM-940x712.png'
                },
                {
                    name:'Audi', 
                    year: 2001,
                    imageSrc: 'https://cdn.bringatrailer.com/wp-content/uploads/2017/08/59938fe6590bb_DSC_0304-940x548.jpg'
                }
            ]
    
    const[showCars, setShowCars] = useState(false);
    const[newCar, setNewCar] = useState('car');
    const[cars, setCars] = useState(carsDatebase);
    
    
    const deleteCar = (index) => {///////////////////////////////////////////////////////////////////////////////////////////////////
        
        const cars = carsDatebase.concat();
        cars.splice(index, 1);
        
        return cars;
    };
    
    const inputClasses = ['input'];
        
        if(newCar !== 'car' && newCar !== '') {
            
            inputClasses.push('green');
            
        } else {
            
            inputClasses.push('red');
            
        }
    
    const headerStyles = {
            fontWeight: 'bold',
            fontFamily: 'italic',
            color: '#51688c',
            fontSize: '25px',
            marginBottom: '30px'
        }
    
    return(
        <React.Fragment>
            <header style={headerStyles}>{props.pageTitle}</header>
        
            <h2>I wanna buy {newCar}</h2>
            
            <button onClick={() => setShowCars(!showCars)}>Shop</button>
                
            <div className='cars-wrapper' style={{
                borderRadius: '15px',
                marginTop: '10px'
            }}>            
                { showCars 

                    ?

                    carsDatebase.map((car, index) => {

                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                imageSrc={car.imageSrc}
                                onCarChose={() => setNewCar(car.name)}
                                onCarDelete={() => setCars(deleteCar(index))}
                            />

                        )    

                    })

                    : null 

                }
            </div>
                
                
            <h2>If you don't find needed car, write here what you want</h2>
                
            <input type="text" onChange={(e) => setNewCar(e.target.value)} className={inputClasses.join(' ')} />
        </React.Fragment>
        
    )
    
}



export default CarWrapper;