import star from "./assets/star.svg";
import defaultImage from "./assets/default.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useState } from "react";

function BookCard({ book }) {
    const [favoriteHover, setFavoriteHover] = useState(false);
    const [cardHover, setCardHover] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    function imgErrorHandler(event) {
        const img = event.target;
        img.src = defaultImage;
    }

    return (
        <div
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
            style={{
                textAlign: "start",
                border: "1px solid gray",
                padding: "20px",
                width: "210px",
                transform: cardHover
                    ? "translate(0px, -10px)"
                    : "translate(0px, 0px)",
                transition: "transform 100ms linear",
            }}
        >
            <div style={{ padding: "16px" }}>
                <img
                    style={{
                        width: "100%",
                        objectFit: "contain",
                    }}
                    alt={book.title}
                    src={book.image ? book.image : defaultImage}
                    onError={imgErrorHandler}
                />
            </div>
            <div style={{ position: "relative" }}>
                <img src={star} alt="starIcon" />
                <span style={{ marginLeft: "8px", fontSize: "0.8em" }}>
                    {book.rating}
                </span>
                <div style={{ position: "absolute", right: 12, bottom: -5 }}>
                    {isFavorite ? (
                        <FavoriteIcon
                            onClick={() => setIsFavorite(false)}
                            onMouseEnter={() => setFavoriteHover(true)}
                            onMouseLeave={() => setFavoriteHover(false)}
                            style={{
                                color: "pink",
                                opacity: favoriteHover ? "0.7" : "1",
                                cursor: favoriteHover ? "pointer" : "default",
                            }}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            onClick={() => setIsFavorite(true)}
                            onMouseEnter={() => setFavoriteHover(true)}
                            onMouseLeave={() => setFavoriteHover(false)}
                            style={{
                                color: "pink",
                                opacity: favoriteHover ? "0.7" : "1",
                                cursor: favoriteHover ? "pointer" : "default",
                            }}
                        />
                    )}
                </div>
            </div>
            <div
                style={{ marginTop: "4px", fontWeight: "600", color: "white" }}
            >
                {book.title}
            </div>
            <div
                style={{
                    marginTop: "4px",
                    fontWeight: "400",
                    fontSize: "0.9em",
                }}
            >
                {book.author ? book.author.name : "Невідомий"}
            </div>
            <div
                style={{
                    marginTop: "12px",
                    color: "#FF00C5",
                    fontWeight: "bold",
                    fontSize: "1.3em",
                }}
            >
                {book.price} грн.
            </div>
        </div>
    );
}

export default BookCard;
