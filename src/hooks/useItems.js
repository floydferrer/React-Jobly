import { useState, useEffect } from 'react'
import JoblyApi from "../api/api";

const useItems = (item) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getItems(item) {
          const itemList = await JoblyApi.getItems(item);
          setItems(itemList);
          setIsLoading(false);
        }

        getItems(`${item}`)
      }, []);

    return [items, setItems, isLoading, setIsLoading]
}

export default useItems
