import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=science&apiKey=${API_KEY}`;

function Science() 
{
    const [val, setVal] = useState([]);

    async function getData() 
    {
        const res = await fetch(API_URL, {
            method: 'GET',
            mode: 'cors',

        })
        console.log(res.json())
        let ans = await res.json();
        setVal(ans.articles);
    }

    useEffect(() => {
        getData();
    },[])


    return (
        <>
            <div className="allNews">
            {
            val?.map((e) => {
                return (
                    <Card 
                    title={e.title} 
                    description={e.description} 
                    source={e.source.name} 
                    date={e.publishedAt}
                    url={e.url}
                    image={e.urlToImage}
                    key={e.url} 
                    />
                );
            })
            }
            </div>
        </>
    );
}

export default Science;