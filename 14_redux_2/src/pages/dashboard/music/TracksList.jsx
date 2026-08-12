import Spiner from "../../../components/spiner/Spiner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PauseIcon from "@mui/icons-material/Pause";
import AudioPlayer from "react-h5-audio-player";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "react-router";

function TracksList() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlayed, setIsPlayed] = useState(false);
    const dispatch = useDispatch();
    const audioPlayer = useRef(null);

    const { tracks, isLoaded, isSuccess, isError, isLoading } = useSelector(
        (state) => state.playlist,
    );

    function playHandler(track) {
        if (!currentTrack) {
            setCurrentTrack(track);
            setIsPlayed(true);
        } else {
            if (currentTrack.id == track.id) {
                audioPlayer.current.togglePlay({ stopPropagation: () => {} });
            } else {
                setCurrentTrack(track);
            }
            setIsPlayed(true);
        }
    }

    function pauseHandler() {
        audioPlayer.current.togglePlay({ stopPropagation: () => {} });
        setIsPlayed(false);
    }

    function nextHandler() {
        if (currentTrack) {
            const index = tracks.findIndex((t) => t.id == currentTrack.id);
            if (index >= 0) {
                const lastIndex = tracks.length - 1;
                if (index < lastIndex) {
                    setCurrentTrack(tracks[index + 1]);
                } else {
                    setCurrentTrack(tracks[0]);
                }
                setIsPlayed(true);
            }
        }
    }

    function prevHandler() {
        if (currentTrack) {
            const index = tracks.findIndex((t) => t.id == currentTrack.id);
            if (index >= 0) {
                const lastIndex = tracks.length - 1;
                if (index > 0) {
                    setCurrentTrack(tracks[index - 1]);
                } else {
                    setCurrentTrack(tracks[lastIndex]);
                }
                setIsPlayed(true);
            }
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

    async function deleteHandler(id) {
        const url = `https://frontend53.somee.com/api/track/${id}`;

        try {
            await axios.delete(url);
            dispatch({ type: "deleteTrack" });
        } catch (error) {}
    }

    useEffect(() => {
        if (!isLoaded) {
            fetchTracks();
        }
    }, [isLoaded]);

    if (isLoading) {
        return <Spiner />;
    }

    if (isError) {
        return <h2>Не вдалося завантажити треки. Спробуйте пізніше</h2>;
    }

    return (
        <div>
            {isSuccess && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">Назва</TableCell>
                                <TableCell align="center">Виконавець</TableCell>
                                <TableCell align="center">Альбом</TableCell>
                                <TableCell align="center">
                                    <Link to="create">
                                        <IconButton color="secondary">
                                            <AddBoxIcon />
                                        </IconButton>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tracks.map((track) => (
                                <TableRow key={track.id}>
                                    <TableCell align="center">
                                        {track.id}
                                    </TableCell>
                                    <TableCell align="center">
                                        {track.title}
                                    </TableCell>
                                    <TableCell align="center">
                                        {track.author}
                                    </TableCell>
                                    <TableCell align="center">
                                        {track.album}
                                    </TableCell>
                                    <TableCell align="center">
                                        {currentTrack &&
                                        currentTrack.id == track.id &&
                                        isPlayed ? (
                                            <IconButton onClick={pauseHandler}>
                                                <PauseIcon />
                                            </IconButton>
                                        ) : (
                                            <IconButton
                                                onClick={() =>
                                                    playHandler(track)
                                                }
                                            >
                                                <PlayArrowIcon />
                                            </IconButton>
                                        )}

                                        <Link to={`edit/${track.id}`}>
                                            <IconButton color="success">
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                        <IconButton
                                            color="error"
                                            onClick={() =>
                                                deleteHandler(track.id)
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
            )}
            {/* player */}
            {currentTrack && (
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
                        ref={audioPlayer}
                        autoPlay
                        onPlay={() => setIsPlayed(true)}
                        onPause={() => setIsPlayed(false)}
                        style={{ backgroundColor: "#1f2028bd", width: "40%" }}
                        volume={0.1}
                        showSkipControls
                        onClickNext={nextHandler}
                        onClickPrevious={prevHandler}
                        autoPlayAfterSrcChange
                        showFilledVolume
                        src={currentTrack.url}
                    />
                </div>
            )}
        </div>
    );
}

export default TracksList;
