import React from 'react'

export default class ErrorBoundary extends React.Component {
    
    state = {hasError: false };
    
    componentDidCatch (error, info) {
        console.log('componentDidCatch')
        this.setState({hasError: true});
    }
    
    render() {
        
        const errorDivStyles = {
            background: 'red',
            height: '150px',
            width: '400px',
            display: 'block',
            margin: '30px auto',
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: '10px',
            borderRadius: '30px',
            border: '10px solid black',
            textTransform: 'uppercase'
            
        }
        
        if(this.state.hasError) {
            
            return <div style={errorDivStyles}><h1>Something went wrong!</h1></div>
            
        }
        
        return this.props.children
        
    }
        
}