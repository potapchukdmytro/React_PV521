import { Box, Button, Container, Typography } from "@mui/material";
import { HomeRounded, RefreshRounded } from "@mui/icons-material";
import { Link } from "react-router";

function NotFound() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: (theme) =>
                    theme.palette.mode === "dark"
                        ? "linear-gradient(135deg,#0F140A,#16171d,#111807)"
                        : "linear-gradient(135deg,#eff6ff,#dbeafe,#ffffff)",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Background circles */}
            <Box
                sx={{
                    position: "absolute",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(59,130,246,0.12)",
                    top: -120,
                    left: -120,
                    filter: "blur(40px)",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(139,92,246,0.12)",
                    bottom: -80,
                    right: -80,
                    filter: "blur(40px)",
                }}
            />

            <Container maxWidth="sm">
                <Box
                    sx={{
                        textAlign: "center",
                        p: 6,
                        borderRadius: 5,
                        backdropFilter: "blur(12px)",
                        background: (theme) =>
                            theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(255,255,255,0.65)",
                        boxShadow: "0 20px 60px rgba(0,0,0,.15)",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "6rem",
                                md: "9rem",
                            },
                            fontWeight: 900,
                            lineHeight: 1,
                            background:
                                "linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "float 3s ease-in-out infinite",
                        }}
                    >
                        404
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight={700}
                        mt={2}
                        gutterBottom
                    >
                        Сторінку не знайдено
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mb: 4,
                            maxWidth: 450,
                            mx: "auto",
                        }}
                    >
                        Схоже, що сторінка була видалена, переміщена або
                        посилання введено неправильно.
                    </Typography>

                    <Box
                        display="flex"
                        gap={2}
                        sx={{justifyContent: "center", flexWrap: "wrap"}}
                    >
                        <Link to="/">
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<HomeRounded />}
                                sx={{
                                    px: 4,
                                    borderRadius: 3,
                                }}
                            >
                                На головну
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>

            <style>
                {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
            </style>
        </Box>
    );
}

export default NotFound;
