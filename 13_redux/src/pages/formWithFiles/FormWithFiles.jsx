import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch } from "react-redux";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function FormWithFiles() {
    const [cover, setCover] = useState(null);
    const [track, setTrack] = useState(null);
    const [trackIndex, setTrackIndex] = useState(0);
    const dispatch = useDispatch();

    async function submitHandler(values) {
        if (track) {
            try {
                const formData = new FormData();
                formData.append("title", values.title);
                formData.append("author", values.author);
                formData.append("album", values.album);
                formData.append("file", track);

                await axios.post(
                    "https://frontend53.somee.com/api/track",
                    formData,
                );

                dispatch({ type: "addTrack" });
            } catch (error) {
                console.log(error.response);
                
            }
        }
    }

    const initValues = {
        title: "",
        author: "",
        album: "",
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler,
    });

    function coverChangeHandler(event) {
        const { files } = event.target;

        if (files && files.length > 0) {
            setCover(files[0]);
        }
    }

    function trackChangeHandler(event) {
        const { files } = event.target;

        if (files && files.length > 0) {
            setTrack(files[0]);
        }
    }

    function nextHandler() {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex((prev) => prev + 1);
        }
    }

    function prevHandler() {
        if (trackIndex > 0) {
            setTrackIndex((prev) => prev - 1);
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
                    <h1 style={{ margin: "0px 0px 32px 0px" }}>Плейлист</h1>
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

                    {/* audio player */}
                    {/* {tracks && tracks.length > 0 && (
                        <div>
                            <span>{tracks[trackIndex].name}</span>
                            <AudioPlayer
                                preload="metadata"
                                autoPlayAfterSrcChange={false}
                                src={URL.createObjectURL(tracks[trackIndex])}
                                showSkipControls
                                showJumpControls={false}
                                onClickNext={nextHandler}
                                onClickPrevious={prevHandler}
                            />
                        </div>
                    )} */}

                    {/* track input */}
                    <div style={{ display: "flex", margin: "16px 0px" }}>
                        <label
                            style={{
                                display: "inline-block",
                                background:
                                    "radial-gradient(circle,rgba(117, 117, 117, 1) 0%, rgba(105, 54, 95, 1) 50%, rgba(38, 32, 32, 1) 100%)",
                                borderRadius: "5px",
                                padding: "6px 12px",
                                width: "100%",
                                color: "white",
                                fontSize: "21px",
                            }}
                            htmlFor="track"
                        >
                            Трек
                        </label>
                        <input
                            hidden
                            multiple
                            onChange={trackChangeHandler}
                            id="track"
                            type="file"
                            accept="audio/*"
                        />
                    </div>

                    {/* cover input */}
                    <div style={{ display: "flex", margin: "16px 0px" }}>
                        <label
                            style={{
                                display: "inline-block",
                                backgroundColor: "darkorchid",
                                borderRadius: "5px",
                                padding: "6px 12px",
                                width: "100%",
                                color: "white",
                                fontSize: "21px",
                            }}
                            htmlFor="cover"
                        >
                            Обкладинка
                        </label>
                        <input
                            hidden
                            onChange={coverChangeHandler}
                            id="cover"
                            type="file"
                            accept="image/*"
                        />
                    </div>

                    {/* cover image */}
                    {cover && (
                        <div>
                            <img
                                width="100%"
                                height="300px"
                                style={{ objectFit: "contain" }}
                                src={URL.createObjectURL(cover)}
                                alt="cover"
                            />
                        </div>
                    )}

                    <div style={{ display: "flex", margin: "16px 0px" }}>
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
                    <div>
                        <input
                            type="submit"
                            style={{
                                backgroundColor: "lightgreen",
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

export default FormWithFiles;
