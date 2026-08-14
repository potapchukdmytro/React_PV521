import { useFormik } from "formik";
import { useGetAuthorsQuery } from "../../../store/services/authorApi";
import {
    useCreateBookMutation,
    useGetBookQuery,
    useUpdateBookMutation,
} from "../../../store/services/bookApi";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function EditBook() {
    const { id } = useParams();
    const { data: authorsData, isSuccess: authorsSuccess } = useGetAuthorsQuery();
    const { data: bookData, isSuccess: bookSuccess } = useGetBookQuery(id);
    const [ updateBook ] = useUpdateBookMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if(bookSuccess) {
            const book = bookData.payload;
            formik.setValues({
                title: book.title,
                description: book.description,
                image: book.image,
                rating: book.rating,
                price: book.price,
                numberOfPages: book.number_of_pages,
                publishDate: book.publish_date,
                authorId: book.author ? book.author.id : 0
            });
        }
    }, [bookData])

    async function submitHandle(values) {
        try {
            const res = await updateBook({...values, id: id}).unwrap();
            if (res.success) {
                toast.success("Книгу змінено");
                navigate("/dashboard/books");
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("Не вдалося оновити книгу");
        }
    }

    const initValues = {
        title: "",
        description: "",
        image: "",
        rating: 0,
        price: 0,
        numberOfPages: 0,
        publishDate: 1900,
        authorId: 0,
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandle,
        enableReinitialize: true,
    });

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                }}
            >
                <form
                    onSubmit={formik.handleSubmit}
                    style={{
                        padding: "32px 32px",
                        border: "1px solid gray",
                        borderRadius: "12px",
                        width: "35%",
                    }}
                >
                    <h1 style={{ margin: "0px 0px 32px 0px" }}>Редагування</h1>
                    <div style={inputGroupStyle}>
                        <label htmlFor="title">Назва</label>
                        <input
                            name="title"
                            id="title"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="Назва книги"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="description">Опис</label>
                        <input
                            name="description"
                            id="description"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="Опис книги"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="image">Обкладинка</label>
                        <input
                            name="image"
                            id="image"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="Посилання на фото"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="rating">Рейтинг</label>
                        <input
                            name="rating"
                            id="rating"
                            style={{ fontSize: "1em" }}
                            type="number"
                            max={5}
                            placeholder="Рейтинг"
                            value={formik.values.rating}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="price">Ціна</label>
                        <input
                            name="price"
                            id="price"
                            style={{ fontSize: "1em" }}
                            type="number"
                            placeholder="500 грн."
                            value={formik.values.price}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="numberOfPages">К-сть сторінок</label>
                        <input
                            name="numberOfPages"
                            id="numberOfPages"
                            style={{ fontSize: "1em" }}
                            type="number"
                            placeholder="100"
                            value={formik.values.numberOfPages}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="publishDate">Рік публікації</label>
                        <input
                            name="publishDate"
                            id="publishDate"
                            style={{ fontSize: "1em" }}
                            type="number"
                            placeholder="1995"
                            value={formik.values.publishDate}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="authorId">Автор</label>
                        <select
                            name="authorId"
                            id="authorId"
                            style={{ fontSize: "1em" }}
                            value={formik.values.authorId}
                            onChange={formik.handleChange}
                        >
                            <option value={0}>Невідомий</option>
                            {authorsSuccess &&
                                authorsData.payload.items.map((author) => (
                                    <option key={author.id} value={author.id}>
                                        {author.name}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div style={{ marginTop: "16px" }}>
                        <input
                            type="submit"
                            value="Зберегти"
                            style={{
                                backgroundColor: "purple",
                                borderRadius: "5px",
                                padding: "6px 12px",
                                width: "100%",
                                color: "white",
                                fontSize: "21px",
                                border: "none",
                            }}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditBook;
