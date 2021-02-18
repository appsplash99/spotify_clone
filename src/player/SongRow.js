import React from 'react';
import "./SongRow.css"

function SongRow({audioName,artistName,audioImg,index}) {
    return (
        <div className="songRow">
            <div className="songRow_left">
                <span className="songRow_highlight">{index+1}</span>
                <img className="songRow_img" src={audioImg}/>
                <div>
                    <span className="songRow_highlight">{audioName}</span>
                    <p>{artistName}</p>
                </div>
            </div>


            <div className="songRow_center">
                <p>Album Name</p>
            </div>
            <div className="songRow_right">
                <p>time</p>
            </div>
            
            
         
        </div>
    )
}

export default SongRow
