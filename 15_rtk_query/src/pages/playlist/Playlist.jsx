import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Playlist() {
    const [current, setCurrent] = useState(null);
    const dispatch = useDispatch();

    const { tracks, isLoaded } = useSelector((state) => state.playlist);

    async function fetchTracks() {
        try {
            const response = await axios.get(
                "https://frontend53.somee.com/api/track",
            );
            const { data } = response;
            dispatch({ type: "loadTracks", payload: data.payload });
        } catch (error) {
            console.log(error);
        }
    }

    function changeTrack(id) {
        const track = tracks.find((t) => t.id == id);
        if (track) {
            setCurrent(track);
        }
    }

    useEffect(() => {
        if(!isLoaded) {
            fetchTracks();
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return <h2>Плейлист завантажується</h2>;
    }

    return (
        <div
            style={{
                padding: "16px 0px",
                position: "relative",
                height: "100vh",
            }}
        >
            <h1>Плейлист</h1>
            <div style={{ margin: "16px" }}>
                {tracks.map((t) => (
                    <div onClick={() => changeTrack(t.id)} key={t.id}>
                        {t.title}
                    </div>
                ))}
            </div>
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <AudioPlayer
                    style={{ backgroundColor: "#1f2028bd", width: "40%" }}
                    volume={0.1}
                    src={current ? current.url : ""}
                    autoPlayAfterSrcChange
                />
            </div>
        </div>
    );
}

export default Playlist;
