import { Navigate, Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useCheckFirebaseAuth } from "../hooks"
import { Backdrop, CircularProgress } from "@mui/material"

export const AppRouter = () => {
    const { status } = useCheckFirebaseAuth();

    if (status === 'checking') return (
        <Backdrop 
            sx={(theme) => ({ backgroundColor: 'primary.main', zIndex: theme.zIndex.drawer + 1 })}
            open
        >
            <CircularProgress color="secondary" />
        </Backdrop>
    )

    return (
        <Routes>
            {
                status === 'authenticated'
                    ? <Route path="/*" element={<JournalRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
