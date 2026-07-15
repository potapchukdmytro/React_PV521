import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

function NewsCard({ article }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: "#3b3b3b",
                color: "white",
                height: "100%",
            }}
        >
            <Typography sx={{ fontWeight: "bold" }}>{article.title}</Typography>
            <Typography color="warning" variant="caption">
                {article.publishedAt}
            </Typography>
            <CardMedia
                component="img"
                height="194"
                image={article.urlToImage}
                alt={article.title}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "white" }}>
                    {article.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <a href={article.url} target="_blank">
                    <IconButton aria-label="share" sx={{ color: "white" }}>
                        <ShareIcon />
                    </IconButton>
                </a>
            </CardActions>
        </Card>
    );
}

export default NewsCard;
