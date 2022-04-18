const storeDataInLocalStorage = (data) =>{
    localStorage.setItem('appoinment-data',JSON.stringify(data));
}

const getDataFromLocalStorage = () =>{
    const localData = localStorage.getItem('appoinment-data');
    return JSON.parse(localData);
}

export {
    storeDataInLocalStorage,
    getDataFromLocalStorage
};