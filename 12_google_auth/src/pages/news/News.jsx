import { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import NewsCard from "../../components/newsCard/NewsCard";
import { Margin, Padding } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { env } from "../../env";

function News() {
    const [articles, setArticles] = useState(null);

    // axios - пакет для React щоб відправляти запити
    // Написаний на базі fetch і є його крутішим варіантом
    async function fetchNews(q = "It") {
        const apiKey = env.newsKey;
        const lang = "uk";

        const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}&language=${lang}`;

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

    async function searchHandler() {
        const searchInput = document.getElementById("searchInput");
        const searchValue = searchInput.value;

        await fetchNews(searchValue);
    }

    if (!articles) {
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

    if (articles.length == 0) {
        return <h2>Новини не знайдено</h2>;
    }

    return (
        <div>
            <h1>Новини</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Paper
                    component="form"
                    sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search News"
                        inputProps={{ "aria-label": "search news" }}
                        id="searchInput"
                    />
                    <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                        onClick={searchHandler}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>

            <div style={{ flexGrow: 1, padding: "8px" }}>
                <Grid container spacing={2} style={{ padding: "16px" }}>
                    {articles.map((article, index) => (
                        <Grid key={index}>
                            <NewsCard article={article} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default News;
