import { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch('/api/menu');
                if (!response.ok) {
                    throw new Error('Failed to fetch menu items');
                }
                const data = await response.json();
                setMenuItems(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <MenuContext.Provider value={{ menuItems, loading, error }}>
            {children}
        </MenuContext.Provider>
    );
};
