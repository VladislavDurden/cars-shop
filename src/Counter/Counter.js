import React, {Component} from 'react';
import Auxiliary from '../hoc/Auxiliary';
import './Counter.css';

export default class Counter extends Component {
    
    state={
        counter: 0
    }
    
    counterIncrease = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    
    counterDecrease = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }
    
    render(){
        
        const loadingStyles = {
            width: '100%'
        }
        
//        способ возвращать элементы без корневого div номер 1
       return(
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.counterIncrease}>+</button>
                <button onClick={this.counterDecrease}>-</button>
                <hr/>
                <div className='loading'><div className='loadingFill' style={this.state.counter > 0 ? loadingStyles : null}></div></div>
            </Auxiliary>
       ) 
        
        
        
//        способ возвращать элементы без корневого div номер 2
        
//        return[
//            <h2 key={'1'}>Counter {this.state.counter}</h2>,
//            <button key={'2'} onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>,
//            <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
//        ]        
    }
}