import { Helmet } from "react-helmet-async";
import BookCard from "../../components/bookCard/BookCard";
import books from "./../../booksData.json";

function Books() {
    return (
        <>
            <Helmet>
                <title>Список книг</title>
            </Helmet>
            <h1>Список книг</h1>
            {books && books.length > 0 ? (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        padding: "26px",
                    }}
                >
                    {books.map((b) => (
                        <BookCard key={b.id} book={b} />
                    ))}
                </div>
            ) : (
                <h2>Зачекайте, книги завантажуються...</h2>
            )}
        </>
    );
}

export default Books;
