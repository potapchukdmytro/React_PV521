import BookCard from "../../components/bookCard/BookCard";
import books from "./../../booksData.json";

function Books() {
    // Якщо умова виконується то повертає h2
    // if (books && books.length > 0) {
    //     return <h2>Книги успішно завантажені</h2>
    // }

    return (
        <>
            <h1>Список книг</h1>
            {/* h2 намалюється якщо обидві умови true */}
            {/* {books && books.length > 0 && (
                <>
                    <h2>Книги успішно завантажені</h2>
                    <p>Тут будуть книги</p>
                </>
            )} */}

            {/* Варіант з тернарним оператором. Те саме що if else */}
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
