import React from "react";

export default function Card(props) {
    return (
        <div className="card-container">
          
            <img 
                src={props.item.imageUrl} 
                alt="travel destination" 
                className="travel-image" 
            />
            
            <div className="card-right">
                <div className="card-location">
                    <h4 className="card-location-name"><img src="/images/location.png" alt="location" className="location-img" />   {props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="google-maps">View on Google Maps</a>
                </div>
                <h4 className="card-title">{props.item.title}</h4>
                <h5 className="card-date">{props.item.startDate} - {props.item.endDate}</h5>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    );
}
