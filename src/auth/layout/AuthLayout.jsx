import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 5 }}
        >
            <Grid2
                size={{ xs: 11, sm: 6, md: 4, lg: 3 }}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
                className="box-shadow animate__animated animate__rotateInUpLeft"
            >
                <Typography align="center" color="primary" variant="h4" sx={{ mb: 2 }}>{title}</Typography>
                {children}
            </Grid2>
        </Grid2>
    )
}
