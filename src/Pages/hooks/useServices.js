import axios from "axios";
import { useEffect, useState } from "react"

const useServices =() =>{
    const [services, setServices] = useState([]);
    useEffect(()=>{
        axios.get('service.json')
        .then(data=> setServices(data.data))
    },[]);

    return services;
}

export default useServices;