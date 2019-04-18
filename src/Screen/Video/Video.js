import React from 'react';
import './Video.css'

const Video = (props) => {
    return(
        <div className="videoWrapper">
            <div className = "videoContainer">
                <h1>NodeJS server lesson</h1>
                <iframe title="NodeJS server lesson" width="470" height="310" className="video" src="https://www.youtube.com/embed/F50MJXa5Y9k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr/>
            <div className = "videoContainer">
                <h1>React podcast</h1>
                <iframe title="React podcast" width="470" height="310" className="video" src="https://www.youtube.com/embed/X6j7Y7tp3_c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr/>
            <div className = "videoContainer">
                <h1>Business English lesson</h1>
                <iframe title="Business English lesson" width="470" height="310" className="video" src="https://www.youtube.com/embed/0O6-2kYhUMg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr/>
            <div className = "videoContainer">
                <h1>Snake-game on JS</h1>
                <iframe title="Snake-game on JS" width="470" height="310" className="video" src="https://www.youtube.com/embed/YNZjcDk98rs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr/>
            <div className = "videoContainer">
                <h1>How to block AdBlock on your website</h1>
                <iframe title="How to block AdBlock on your website" width="470" height="310" className="video" src="https://www.youtube.com/embed/uFglml-Wwbk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
        
        
    )
}

export default Video;