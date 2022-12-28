import React from 'react'
import { useState, useEffect } from 'react'   
import {Link} from 'react-router-dom'
import axios from "axios"

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    useEffect(()=>{
        const fetchAllRestaurants = async () =>{
            try{
                 const res = await axios.get("http://localhost:5000/apis/restaurants") 
                 setRestaurants(res.data)
            }catch (error){
                console.log(error);
            }
        }
        fetchAllRestaurants();
    },[])
  return (
    <div className='container'>
        <h1>Grab Restaurant</h1>
        <div className='row'>
            <div className='restaurants'>
                {
                    restaurants.map((restaurant) => {
                        return(
                            <div className='card' key={restaurant.id}>
                                <img src={restaurant.imageurl} className="card-image-top" alt=""/>
                                <div className='card-body'>
                                    <h5 className='title'>{restaurant.name}</h5> 
                                    <p className='card-text'>{restaurant.type}</p>
                                    <Link to="{}" className='btn btn-danger px-2'>Delete</Link>
                                    <Link to={"/update/" + restaurant.id} className='btn btn-warning px-2'>
                                    Edit
                                    </Link>
                                 </div>   
                             </div>   
                        )                        
                    }
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Restaurants