import React, {Component} from 'react';
import './Screen.css';
import Car from '../Car/Car.js'

class Screen extends Component {
    
    state = {
        cars: [
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
        ],
        pageTitle: 'Cars shop',
        likedCar: 'car',
        showCars: false,
        close: null
    }
    
//    нажатие на кнопку say thanks
    sayThanks = () => {
        
        let pageTitle = this.state.pageTitle;
        
        let thanks = 'Thanks, ' + pageTitle;
        
        this.setState({
            pageTitle: thanks
        })
    }
    
//    нажатие на кнопку i like
    chooseCar = (carName) => {
        
        this.setState({
            likedCar: carName
        })
    }
    
//    берем данные из инпута
    findNewCar = (e) => {
        
        let newCarName = e.target.value;
        
        this.setState({
            likedCar: newCarName
        })
    }
    
    showCars = () => {
        
        this.setState({
            showCars: !this.state.showCars
        })
        
    }
    
    deleteCar = (index) => {
        
        const cars = this.state.cars.concat();
        
        cars.splice(index, 1);
        
        this.setState({cars});
    }
    
    closeApp = () => {
        
        this.setState({
            close: "display: 'none'"
        });
        
    }
    
    render() {
        
        const inputClasses = ['input'];
        
        if(this.state.likedCar !== 'car') {
            
            inputClasses.push('green');
            
        } else {
            
            inputClasses.push('red');
            
        }
        
    
        
//        способ задавать инлайновые стили через переменные

        const headerStyles = {
            fontWeight: 'bold',
            fontFamily: 'italic',
            color: '#51688c',
            fontSize: '25px',
            marginBottom: '30px'
        }
        
        const close = this.state.close;

        return (
            <div className="Screen" style={close}>
                <div className="close-btn" onMouseUp={this.closeApp}>X</div>

                <header style={headerStyles}>{this.state.pageTitle}</header>
                <h2>I wanna buy {this.state.likedCar}</h2>
            
                <button onClick={this.showCars}>GO TO THE SHOP</button>
                
                <div className='cars-wrapper' style={{
                    background: '#e8e8e8',
                    borderRadius: '15px',
                    marginTop: '10px'
                }}>
                    
                    { this.state.showCars 
//            замена оператора if для JSX - ?
                    ?
            
                    this.state.cars.map((car, index) => {

                        return (
                            <Car
                                key = {index}
                                name={car.name}
                                year={car.year}
                                imageSrc={car.imageSrc}
                                onCarChose={() => this.chooseCar(car.name)}
                                onCarDelete={() => this.deleteCar(index)}
                            />
                        )    

                    })
//                замена оператора else для JSX - :
                    : null 
                    
                }
                </div>
                
                
                <h2>If you don't find needed car, write here what you want</h2>
                
                <input 
                    type="text" 
                    onChange={this.findNewCar}
                    className={inputClasses.join(' ')}
                />
            
                <button onClick={this.sayThanks}>Say thanks</button>
            </div> 
        )
        
    }
     
}

export default Screen;