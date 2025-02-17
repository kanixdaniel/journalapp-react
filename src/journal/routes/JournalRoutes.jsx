import { Navigate, Route, Routes } from "react-router"
import { Journal } from "../pages/Journal"

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Journal />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
