import React from 'react';
import "./SongCard.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
function SongCard() {
    return (
        <div className="songCard">
            <div className="songCard_img_container">
                <img src="./images/album-art.JPG"/>
                <PlayCircleFilledIcon className="songCard_playbutton" style={{color:"#1db954" ,fontSize:"50px"}}/>
            </div>

            <div className="songCard_songdetails">
                <h4>song name </h4>
                <p>artistart  </p>     
            </div>
        </div>
    )
}

export default SongCard
