import React, {useState, useContext, useEffect} from "react";
import { useCallback } from "react";
import comicsApi from 'comicbooks-api';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [searched, setSerched] = useState(false)
    let index = 0;

    const comicsApi = require('comicbooks-api');

    const fetchComics = useCallback(async() => {
        setLoading(true);

        try {
            const tmpComics = await comicsApi.getComicsThroughSearch(`${searchTerm}`, 1)   

            if(tmpComics){
                const newComics = tmpComics.slice(0, 20).map((comicSingle) => {
                    const {id, title, description, coverPage} = comicSingle;
                    index++;

                    return {
                        id: index,
                        title: title,
                        description: description,
                        coverPage: coverPage
                    }
                });
                index = 0;

                setComics(newComics);

                if(!searched){
                    setResultTitle("Proposed Comics for You");
                    setSerched(true)
                }
                if(searched && newComics.length > 1){
                    setResultTitle("Your Search Result");
                } else if(searched) {
                    setResultTitle("No Search Result Found!")
                }
                setLoading(false)
            }
        } catch (error) {
            setComics([]);
            setResultTitle("No Search Result Found!")
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchComics();
    }, [searchTerm, fetchComics])


    return (
        <AppContext.Provider value={{
            loading, comics, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};