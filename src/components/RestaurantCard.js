import { CDN_URL } from "../utils/constants";
import DiscountTag from "./DiscountTag";

const RestaurantCard = (props) => {
    const { resData } = props;

    // API se offers/aggregatedDiscountInfoV3 extract karo
    const offers = resData?.info?.aggregatedDiscountInfoV3
        ? [resData.info.aggregatedDiscountInfoV3]
        : [];

    return (
        <div className="m-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 relative overflow-hidden">
            {/* Discount Tag - Image ke upar */}
            <DiscountTag offers={offers} />

            {/* Restaurant Image */}
            <img
                className="rounded-t-lg w-full h-[180px] object-cover"
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt="res-logo"
            />

            {/* Restaurant Details */}
            <div className="p-4">
                <h3 className="font-bold text-xl truncate">{resData.info.name}</h3>
                <h4 className="text-gray-600 text-sm truncate">{resData.info.cuisines.join(', ')}</h4>
                <div className="flex items-center justify-between mt-2">
                    <h4 className="text-green-600 font-semibold">⭐ {resData.info.avgRating}</h4>
                    <h4 className="text-gray-700 text-sm">{resData.info.sla.deliveryTime} mins</h4>
                </div>
                <h4 className="text-gray-800 font-medium mt-1">{resData.info.costForTwo}</h4>
            </div>
        </div>
    )
};

export default RestaurantCard;