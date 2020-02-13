export const setStorage = (newMovie, storageMovie) => {
    if( Array.isArray(newMovie) ){
        newMovie = JSON.stringify(newMovie);
    }
    localStorage.setItem(storageMovie, newMovie);
}

export const getStorage = (storageMovie) => {
    let items = localStorage.getItem(storageMovie);
    if(items){
        if(isNaN(items)){
            items = JSON.parse(items);
            return items;
        }else{
            return items*1;
        }
    }
    return false;
}