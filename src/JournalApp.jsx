import { BrowserRouter } from "react-router"
import { AppRouter } from "./router/AppRouter"

export const JournalApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
