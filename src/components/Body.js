import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resData from "../../utils/mockData";

// We have to create state variable --> Super Powerfull Variable

let data = [
    {
        type: "restaurant",
        data: {
          type: "F",
          id: "73011",
          name: "KFC",
          uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
          city: "22",
          area: "Anand Vihar Colony",
          totalRatingsString: "5000+ ratings",
          cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
          cuisines: ["American", "Snacks", "Biryani"],
          tags: [],
          costForTwo: 30000,
          costForTwoString: "₹300 FOR TWO",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          slaString: "31 MINS",
          avgRating: "3.8"
        }      
    } ,
    {
        type: "restaurant",
        data: {
          type: "F",
          id: "73012",
          name: "Dominoz",
          uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
          city: "22",
          area: "Anand Vihar Colony",
          totalRatingsString: "5000+ ratings",
          cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
          cuisines: ["American", "Snacks", "Biryani"],
          tags: [],
          costForTwo: 30000,
          costForTwoString: "₹300 FOR TWO",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          slaString: "31 MINS",
          avgRating: "4.2"
        }      
    }
]


const Body = () =>{
    let [listOfRestaurants,setListofRestaurants] = useState(resData);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = data.json();
        console.log('api data', json);
    }
    const onFilterClick =()=>{
        const filteredList = listOfRestaurants.filter((x)=> x.data.avgRating>4);
        setListofRestaurants(filteredList);
        console.log(filteredList);
    }
    return (
    <div className='body'>
      <button className='filter-btn' onClick={onFilterClick}>Filter Restaurant</button>
      <div className='res-container'>
      {
        listOfRestaurants.map(res=>{
          return <RestaurantCard key={res.data.id} resData={res.data}/>
        })
      }
      </div>
    </div>
  )
  }

  export default Body;