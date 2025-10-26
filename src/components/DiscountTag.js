const DiscountTag = ({ offers }) => {
    // Agar offers array empty hai ya undefined hai to kuch mat dikhao
    if (!offers || offers.length === 0) return null;

    // Pehla offer dikhayenge (sabse important offer)
    const primaryOffer = offers[0];

    return (
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg z-10">
            <div className="flex items-center gap-2">
                {/* Discount Icon */}
                <span className="text-orange-500 font-bold text-lg">🏷️</span>

                {/* Discount Text */}
                <div className="flex flex-col">
                    <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">
                        {primaryOffer.header}
                    </span>
                    {primaryOffer.subHeader && (
                        <span className="text-gray-600 text-xs font-medium">
                            {primaryOffer.subHeader}
                        </span>
                    )}
                </div>
            </div>

            {/* Multiple Offers Indicator */}
            {offers.length > 1 && (
                <div className="mt-1 text-xs text-gray-500 font-medium">
                    +{offers.length - 1} more {offers.length - 1 === 1 ? 'offer' : 'offers'}
                </div>
            )}
        </div>
    );
};

export default DiscountTag;
