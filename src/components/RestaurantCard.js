import React from "react";
import CDN_URL from "../../utils/constant"

const RestaurantCard = (props) =>{

    const { resData } = props;
    const {name,area,avgRating,costForTwo,cuisines} = resData;
    const styleCard = {
        backgroundColor: '#f0f0f0',
      }
    return (
      <div className='res-card' style={styleCard}>
   { <img src= {CDN_URL + "2b4f62d606d1b2bfba9ba9e5386fabb7"} className="card-img" />  }
        <h3>{name }</h3>
        <h4>{area}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(",")}</h4>
  
      </div>
    )
  }

  export default RestaurantCard;