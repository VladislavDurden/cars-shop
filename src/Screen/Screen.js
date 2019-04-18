import React, {Component} from 'react';
import './Screen.css';
import {Route, NavLink} from 'react-router-dom';
import CarWrapper from '../CarWrapper/CarWrapper'
import Counter from '../Counter/Counter';
import Video from './Video/Video';


class Screen extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {

            pageTitle: 'Cars shop',
            showMenu: false,
            close: null,
        }
        
    }
    
    closeApp = () => {
        
        this.setState({
            close: "display: 'none'"
        });
        
    }
    
    toggleMenu = () => { 
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    
    //    жизненный цикл компонента
    
    
//    следующие два метода вызываются когда компонент обновляется, но были заменены методом getDerivedStateFromProps
    
    componentWillReceiveProps(nextProps) {
        
    }

    componentWillUpdate(nextProps, nextState) {
        
    }
    
//    этот метод сообщает реакту нужно ли рендерить по новой компонент после обновления
    
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    
//    этот метод вызывается перед рендером и возвращает объект нового state или null если обновления не было
    
//    static getDerivedStateFromProps(nextProps, prevState) {
//
//    }
    
//    метод вызывается сразу после обновления, не вызывается после первого рендера
    
    componentDidUpdate() {
        
    }
    
//    метод вызывается перед последним рендером и нужен для того, чтобы запомнить какую-нибудь информацию перед рендером, например позицию скролла
    
//    getSnapshotBeforeUpdate() {
//
//    }
    
//    вызывается, когда компонент был удален
    
    componentWillUnmount() {

    }
    
    render() {

        const shownMenuStyles = {
            height: '100%'
        };
        
        const hideMenuStyles = {
            height: '0'
        };
        
        const close = this.state.close;
        
        const menuBtnClasses = [
            'menu-btn',
            'fa'
        ]
        
        if(!this.state.showMenu) {
            
            menuBtnClasses.push('fa-bars')
            
        } else {
            
            menuBtnClasses.push('fa-times')
            
        }
        
        

        return (
            <div className="Screen" style={close}>
                <i className="close-btn fa fa-times" onClick={this.closeApp}/>
                <i className={menuBtnClasses.join(' ')} onClick={this.toggleMenu}/>
                
                <div className='menu' style={this.state.showMenu ? shownMenuStyles : hideMenuStyles}>
                    <ul>
                        <li><NavLink 
                                to="/" 
                                exact 
                                onClick={this.toggleMenu}
                            >Home</NavLink></li>
                            
                        <li><NavLink 
                                to="/shop" 
                                exact 
                                onClick={this.toggleMenu}
                            >Shop</NavLink></li>
                            
                        <li><NavLink 
                                to="/counter" 
                                onClick={this.toggleMenu}
                            >Counter</NavLink></li>
                            
                        <li><NavLink 
                                to="/video" 
                                onClick={this.toggleMenu}
                            >Video</NavLink></li>
                    </ul>
                </div>

                <Route path="/" exact render={() => <h1>Home page</h1>} />
                
                <Route path="/shop" exact render={() => 
                    <CarWrapper 
                        pageTitle={this.state.pageTitle}
                        likedCar={this.state.likedCar} 
                        cars = {this.state.cars}
                    />} />
                
                <Route path="/counter" exact component={Counter} />
                
                <Route path="/video" exact component={Video} />
                
            </div> 
        )
        
    }
     
}

export default Screen;