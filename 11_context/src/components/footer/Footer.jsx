import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  GitHub,
  Facebook,
  Instagram,
  Telegram,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { title: "Головна", path: "/" },
    { title: "Книги", path: "/books" },
    { title: "Категорії", path: "/categories" },
    { title: "Контакти", path: "/contacts" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} py={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
            >
              📚 BookStore
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ maxWidth: 420 }}
            >
              Знайдіть свою наступну улюблену книгу серед тисяч
              доступних видань. Читайте, відкривайте нові історії та
              насолоджуйтеся світом літератури.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              gutterBottom
            >
              Навігація
            </Typography>

            <Stack spacing={1}>
              {links.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  underline="hover"
                  color="text.secondary"
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              gutterBottom
            >
              Ми у соцмережах
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                color="primary"
                href="https://github.com"
                target="_blank"
              >
                <GitHub />
              </IconButton>

              <IconButton
                color="primary"
                href="https://facebook.com"
                target="_blank"
              >
                <Facebook />
              </IconButton>

              <IconButton
                color="primary"
                href="https://instagram.com"
                target="_blank"
              >
                <Instagram />
              </IconButton>

              <IconButton
                color="primary"
                href="https://t.me"
                target="_blank"
              >
                <Telegram />
              </IconButton>
            </Stack>

            <Typography
              mt={2}
              color="text.secondary"
              variant="body2"
            >
              support@bookstore.com
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: 1,
            borderColor: "divider",
            py: 3,
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
          >
            © {year} BookStore. Всі права захищені.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Створено з ❤️ на React + Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}