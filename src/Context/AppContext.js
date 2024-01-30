import { createContext,useState} from "react";
import {baseUrl} from '../baseUrl';

export const AppContext = createContext();

function AppContextProvider({children}){
//These states will be available for all the children of <App> to use. 
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
//value is an object in which all the data is present for the children to use. 
    const value = {
        loading, setLoading,
        posts, setPosts,
        page, setPage,
        totalPages, setTotalPages,
        fetchData,
        handlePageChange
    }

    async function fetchData(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("An error has occured in fetchData");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);   
    }

    function handlePageChange(page){
        setPage(page);
        fetchData(page);
    }

 
//We have provided the values inside the value object that are present in AppContext to children 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}    

export {AppContextProvider};






// import React from 'react';
// export default function AppContext(){
//     return(
//         <div>      
//         </div>
//     );
// }
// useEffect( () => {
//     fetchData();
// },[] )