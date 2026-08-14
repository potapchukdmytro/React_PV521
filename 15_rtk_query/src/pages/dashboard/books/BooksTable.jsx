import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import bookDefaulImg from "./../../../assets/defaultBook.png";
import { useGetBooksQuery } from "../../../store/services/bookApi";
import Spiner from "../../../components/spiner/Spiner";
import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteBookMutation } from "../../../store/services/bookApi";
import { toast } from "react-toastify";

function BooksTable() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [deleteBook] = useDeleteBookMutation();

    const { data, isLoading, isSuccess, isError } = useGetBooksQuery({
        page: page,
        page_size: pageSize,
    });

    async function deleteHandler(id) {
        try {
            const res = await deleteBook(id).unwrap();
            if(res.success) {
                toast.success("Книга видалена");
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                <Paper sx={{ mb: 1 }}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Id</TableCell>
                                    <TableCell align="center">
                                        Обкладинка
                                    </TableCell>
                                    <TableCell align="center">Назва</TableCell>
                                    <TableCell align="center">Автор</TableCell>
                                    <TableCell align="center">
                                        Рейтинг
                                    </TableCell>
                                    <TableCell align="center">Ціна</TableCell>
                                    <TableCell align="center">
                                        <Link to="create">
                                            <IconButton>
                                                <AddBoxIcon />
                                            </IconButton>
                                        </Link>
                                    </TableCell>
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
                                        <TableCell
                                            align="center"
                                            component="th"
                                            scope="row"
                                        >
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="center">
                                            <img
                                                onError={coverError}
                                                style={{ objectFit: "contain" }}
                                                height={75}
                                                width={50}
                                                src={row.image}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.author
                                                ? row.author.name
                                                : "Невідомий"}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.rating}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`edit/${row.id}`}>
                                                <IconButton color="success">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton
                                                color="error"
                                                onClick={() =>
                                                    deleteHandler(row.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
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
                        onRowsPerPageChange={(event) =>
                            setPageSize(parseInt(event.target.value, 10))
                        }
                    />
                </Paper>
            )}
        </div>
    );
}

export default BooksTable;
