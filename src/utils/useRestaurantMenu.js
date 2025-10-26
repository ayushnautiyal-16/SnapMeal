import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            console.log('API response text:', text);
            if (!text) {
                throw new Error('Empty response body');
            }
            let json;
            try {
                json = JSON.parse(text);
            } catch (err) {
                console.error('Failed to parse JSON:', err, 'Response text:', text);
                throw err;
            }
            setResInfo(json.data);
        } catch (error) {
            console.error('Failed to fetch menu:', error);
            setResInfo(null);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;