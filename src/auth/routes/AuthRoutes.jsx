import { Route, Routes } from "react-router"
import { Login, Register } from "../views"
import { Navigate } from "react-router"

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
