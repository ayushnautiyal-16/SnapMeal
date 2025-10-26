const RestaurantCategory = ({ data }) => {
    console.log(data);
    return (
        <div>
            <span>{data?.title}
                <span>⬇️</span>
            </span>
        </div>
    );
};

export default RestaurantCategory;