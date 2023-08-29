import Card from "../Components/Card";
import news from "./news.webp";

import { useState, useEffect } from "react";
const API_URL = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=P6qsGaYGrXmKAth3E1CHmRs2BspCLmaT`;

function Sports() {
    const [val, setVal] = useState([]);

    async function getData() {
        const res = await fetch(API_URL, {
            method: 'GET',
            mode: 'cors',

        })
        let ans = await res.json();
        setVal(ans.results);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className="allNews">
                {
                    val?.map((e) => {
                        var image = e.multimedia;
                        if (image && image.length > 0) {
                            image = image[0].url;
                        }
                        else {
                            image = news;
                        }
                        return (
                            <Card
                                title={e.title}
                                description={e.abstract}
                                source={e.source}
                                date={e.published_date}
                                url={e.uri}
                                image={image}
                                key={e.uri}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default Sports;