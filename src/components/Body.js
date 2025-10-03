import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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


    return listOfRestaurant.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        const filteredRestaurant = allRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfrestaurant(filteredRestaurant);
                    }}>
                        Search </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = allRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setListOfrestaurant(filteredList);
                    }}>
                    top rated restaurant
                </button>
            </div>
            <div className="res-Container">
                {listOfRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id}
                    to={"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;