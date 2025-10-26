const DiscountBadge = ({ offers }) => {
    if (!offers || offers.length === 0) return null;

    const primaryOffer = offers[0];

    return (
        <div className="absolute top-3 left-3 z-10">
            {/* Main Discount Badge */}
            <div className="bg-orange-500 text-white px-3 py-2 rounded-lg shadow-xl">
                <p className="font-extrabold text-sm uppercase tracking-wide">
                    {primaryOffer.header}
                </p>
                {primaryOffer.subHeader && (
                    <p className="text-xs font-medium mt-0.5 opacity-90">
                        {primaryOffer.subHeader}
                    </p>
                )}
            </div>

            {/* Multiple Offers Pill */}
            {offers.length > 1 && (
                <div className="mt-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-md inline-block">
                    <span className="text-orange-600 text-xs font-bold">
                        +{offers.length - 1} more
                    </span>
                </div>
            )}
        </div>
    );
};

export default DiscountBadge;
