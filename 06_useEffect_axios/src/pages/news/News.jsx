import { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import NewsCard from "../../components/newsCard/NewsCard";
import { Margin, Padding } from "@mui/icons-material";

function News() {
    const [articles, setArticles] = useState([]);

    const apiKey = "eef038525fa7401d8dfe7cf1a9006b10";
    const q = "Що сьогодні зробити";
    const lang = "uk";

    const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}&language=${lang}`;

    // axios - пакет для React щоб відправляти запити
    // Написаний на базі fetch і є його крутішим варіантом
    async function fetchNews() {
        try {
            const response = await axios.get(url);
            const data = response.data;
            setArticles(data.articles);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect - хук який виконує код в середені тільки при першому рендері компоненту
    useEffect(() => {
        fetchNews();
    }, []);

    if (!articles || articles.length == 0) {
        return (
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress color="secondary" aria-label="Loading…" />
            </div>
        );
    }

    return (
        <div>
            <h1>Новини</h1>

            <div style={{ flexGrow: 1, padding: "8px" }}>
                <Grid container spacing={2} style={{ padding: "16px" }}>
                    <Grid>
                        <NewsCard />
                    </Grid>
                    <Grid>
                        <NewsCard />
                    </Grid>
                    <Grid>
                        <NewsCard />
                    </Grid>
                    <Grid>
                        <NewsCard />
                    </Grid>
                    <Grid>
                        <NewsCard />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default News;
