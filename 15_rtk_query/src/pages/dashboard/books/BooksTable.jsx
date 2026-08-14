import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import bookDefaulImg from "./../../../assets/defaultBook.png";
import { useGetBooksQuery } from "../../../store/services/bookApi";
import Spiner from "../../../components/spiner/Spiner";
import { useState } from "react";

function BooksTable() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    const { data, isLoading, isSuccess, isError } = useGetBooksQuery({ page: page, page_size: pageSize });

    function coverError(event) {
        const img = event.target;
        img.src = bookDefaulImg;
    }

    if (isLoading) {
        return <Spiner />;
    }

    if (isError) {
        return <h2>Не вдалося завантажити список книг</h2>;
    }

    return (
        <div>
            {isSuccess && (
                <Paper sx={{mb: 1}}>
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
                                {data.payload.items.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
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
                                            {row.author
                                                ? row.author.name
                                                : "Невідомий"}
                                        </TableCell>
                                        <TableCell>{row.rating}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20]}
                        rowsPerPage={data.payload.page_size}
                        component="div"
                        count={data.payload.total_items}
                        page={data.payload.page - 1}
                        onPageChange={(event, newPage) => setPage(newPage + 1)}
                        onRowsPerPageChange={(event) => setPageSize(parseInt(event.target.value, 10))}
                    />
                </Paper>
            )}
        </div>
    );
}

export default BooksTable;
