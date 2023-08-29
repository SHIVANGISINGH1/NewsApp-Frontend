import Card from "../Components/Card";
import { useState, useEffect } from "react";
import news from "./news.webp";
// const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=P6qsGaYGrXmKAth3E1CHmRs2BspCLmaT`;

function Home() {
    const [val, setVal] = useState([]);

    async function getData() {
        const res = await fetch(API_URL, {
            method: 'GET',
            mode: 'cors',

        })
        let ans = await res.json();
        console.log(ans.results);
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
                        var image = e.media;
                        if (image && image.length > 0) {
                            image = image[0]["media-metadata"];
                            if (image && image.length >= 3) {
                                image = image[2].url;
                            }
                            else {
                                image = news;
                            }
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

export default Home;