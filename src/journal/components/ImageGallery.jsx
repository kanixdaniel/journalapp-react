import { Box, ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
    return (
        <Box sx={{ overflowY: 'hidden' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {images.map((image) => (
                    <ImageListItem key={image}>
                        <img
                            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=248&fit=crop&auto=format`}
                            alt='Imagen de la nota'
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}
