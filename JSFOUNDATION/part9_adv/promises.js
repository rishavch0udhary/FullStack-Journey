function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched successfully")
            }else{
                reject("Error fetching data");
            }
        }, 4000);
    });
}

fetchData()
     .then((data) => {})
     .catch((error) => {})
