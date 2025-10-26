const DiscountTagSwiggy = ({ offers }) => {
    if (!offers || offers.length === 0) return null;

    const primaryOffer = offers[0];

    return (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-t-lg">
            <div className="flex items-center gap-1.5">
                <span className="text-yellow-400 text-xl">⚡</span>
                <div className="text-white">
                    <p className="font-bold text-lg leading-tight">
                        {primaryOffer.header}
                    </p>
                    {primaryOffer.subHeader && (
                        <p className="text-xs opacity-90">
                            {primaryOffer.subHeader}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiscountTagSwiggy;
