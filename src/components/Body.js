import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfrestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2726843&lng=78.0218567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);
        const restaurant = (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(restaurant);
        setListOfrestaurant(restaurant);
    };

    const onlineStatus =useOnlineStatus();
    if(onlineStatus==false)
        return(
        <h1>looks like you are offline please check your internet connection</h1>
    );
    return listOfRestaurant.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        const filteredRestaurant = allRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfrestaurant(filteredRestaurant);
                    }}>
                        Search </button>
                </div>
                <div className="search m-4 p-4 flex items-center ">
                    <button
                    className="px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={() => {
                        const filteredList = allRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setListOfrestaurant(filteredList);
                    }}>
                    Top rated restaurant
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {listOfRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id}
                    to={"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;