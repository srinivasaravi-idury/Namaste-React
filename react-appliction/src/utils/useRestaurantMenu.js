import {useEffect,useState} from "react"
import { RESTAURANT_INFO_URL } from "../utils/contants";
const useRestaurantMenu = (resId)=>{
const [resInfo,setResInfo] = useState(null)
useEffect(()=>{
    fetchMenu();
},[])

const fetchMenu =async()=>{
    try{
    const info = await fetch(RESTAURANT_INFO_URL + resId);
    const data = await info.json();
    setResInfo(data)
    }
    catch(err){
        console.log(err)
    }
}
return resInfo
}

export default useRestaurantMenu