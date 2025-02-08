import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { Note, NothingSelected } from "../views"

export const Journal = () => {
    return (
        <JournalLayout>
            {/* Nothing selected */}
            {/* <NothingSelected /> */}

            {/* Note view */}
            <Note />
        </JournalLayout>
    )
}
