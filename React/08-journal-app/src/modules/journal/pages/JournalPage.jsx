import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, autem tempora. Consequuntur temporibus harum cumque architecto! Rerum aut perferendis tempore explicabo ex et, excepturi tempora consequuntur officia. Ut, perspiciatis iusto.
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'primaryDark.main',
          backgroundColor: 'secondary.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          bottom: 50,
          right: 50
        }}>
          <AddOutlined sx={{fontSize: 30}} />
      </IconButton>
    </JournalLayout>
  )
}
