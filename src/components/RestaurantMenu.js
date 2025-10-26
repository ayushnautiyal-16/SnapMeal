import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const dummy = 'Dummy Data';

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

if (resInfo === null) return <Shimmer/>;

const info = resInfo?.cards?.[2]?.card?.card?.info;
if (!info) return <div>Menu info not available</div>;
const {
    name = '',
    cuisines = [],
    costForTwoMessage = '',
    cloudinaryImageId,
    avgRating,
    deliveryTime,
} = info;

const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [])

const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
            c.card?.card?.['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    ) || [];

return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
            {cuisines.join(', ')} - {costForTwoMessage}
        </p>
        {/* categories accordions */}
        {categories.length === 0 ? (
            <div>No categories found</div>
        ) : (
            categories.map((category, index) => (
                // Controlled Component
                <RestaurantCategory
                    key={category?.card?.card?.title || index}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))
        )}
    </div>
);
}

export default RestaurantMenu;
