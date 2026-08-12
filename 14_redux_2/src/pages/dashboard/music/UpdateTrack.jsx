import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function UpdateTrack() {
    const [track, setTrack] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {tracks, isLoaded} = useSelector(state => state.playlist);

    const { id } = useParams();

    async function submitHandler(values) {
        const url = `https://frontend53.somee.com/api/track`;

        const data = new FormData();
        data.append("id", id.toString());
        data.append("title", values.title);
        data.append("author", values.author);
        data.append("album", values.album);
        if(track) {
            data.append("file", track);
        }

        try {
            await axios.put(url, data);
            dispatch({type: "updateTrack"});
            navigate("/dashboard/tracks");
        } catch (error) {
            
        }
        
    }

    async function fetchTracks() {
        const url = "https://frontend53.somee.com/api/track";

        dispatch({ type: "startLoad" });

        try {
            const response = await axios.get(url);
            const { data } = response;
            const payload = data.payload;
            dispatch({ type: "loadSuccess", payload: payload });
        } catch (error) {
            dispatch({ type: "loadError" });
        }
    }

    useEffect(() => {
        if(!isLoaded) {
            fetchTracks();
        } else {
            const current = tracks.find(t => t.id == id);
            if(current) {
                formik.setValues(current);
            } else {
                navigate("/dashboard/tracks")
            }
        }
    }, [isLoaded])

    const initValues = {
        title: "",
        author: "",
        album: "",
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler,
        enableReinitialize: true
    });

    function trackChangeHandler(event) {
        const files = event.target.files;

        if (files && files.length > 0) {
            setTrack(files[0]);
        }
    }

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
                    <h1 style={{ margin: "0px 0px 32px 0px" }}>Редагування треку</h1>
                    <div style={inputGroupStyle}>
                        <label htmlFor="title">Назва</label>
                        <input
                            name="title"
                            id="title"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="Назва пісні"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="author">Автор</label>
                        <input
                            name="author"
                            id="author"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="Автор"
                            value={formik.values.author}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="album">Альбом</label>
                        <input
                            name="album"
                            id="album"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="Альбом"
                            value={formik.values.album}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={{ display: "flex", marginTop: "16px" }}>
                        <label
                            style={{
                                display: "inline-block",
                                backgroundColor: "lightseagreen",
                                borderRadius: "5px",
                                padding: "6px 12px",
                                width: "100%",
                                color: "white",
                                fontSize: "21px",
                            }}
                            htmlFor="trackInput"
                        >
                            Завантажити трек
                        </label>
                        <input
                            onChange={trackChangeHandler}
                            accept="audio/*"
                            type="file"
                            id="trackInput"
                            hidden
                        />
                    </div>

                    {track && <div>{track.name}</div>}

                    <div style={{marginTop: "16px"}}>
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

export default UpdateTrack;
