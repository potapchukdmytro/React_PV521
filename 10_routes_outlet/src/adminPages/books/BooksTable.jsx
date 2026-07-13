import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import bookDefaulImg from "./../../assets/defaultBook.png";

function BooksTable() {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const response = await axios.get(
            "https://frontend53.somee.com/api/books?page_size=50",
        );
        const booksData = response.data.payload.items;
        setBooks(booksData);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    function coverError(event) {
        const img = event.target;
        img.src = bookDefaulImg;
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Обкладинка</TableCell>
                            <TableCell>Назва</TableCell>
                            <TableCell>Автор</TableCell>
                            <TableCell>Рейтинг</TableCell>
                            <TableCell>Ціна</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>
                                    <img
                                        onError={coverError}
                                        style={{ objectFit: "contain" }}
                                        height={75}
                                        width={50}
                                        src={row.image}
                                    />
                                </TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>
                                    {row.author ? row.author.name : "Невідомий"}
                                </TableCell>
                                <TableCell>{row.rating}</TableCell>
                                <TableCell>{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default BooksTable;
