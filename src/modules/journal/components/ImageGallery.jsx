import { Box, ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({images}) => {
  return (
    <Box sx={{ width: '100%', height: 460, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {images?.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=248&fit=crop&auto=format`}
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="Imagen de la nota"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}