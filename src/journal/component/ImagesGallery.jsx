import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ImagesGallery = ({ images }) => {
  return (
    <Box sx={{ width: "100%", height: 500, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=248&fit=crop&auto=format`}
              alt={image}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
