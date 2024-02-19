import React from "react";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const CarouselComponent = ({ items }) => {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints here
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Box key={index} sx={{ padding: 2 }}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Paper
              elevation={3}
              sx={{ textAlign: "center", color: theme.palette.text.secondary }}
            >
              {/* Image and Description */}
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: "block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
                  objectFit: "cover",
                  // objectPosition: "left center",
                }}
                src={item.image}
                alt={`Slide ${index}`}
              />
              <Box
                sx={{
                  padding: theme.spacing(2),
                  backgroundColor: "#000",
                  color: "#FFF",
                  border: "1px solid #FFF",
                  boxShadow: "2px 4px 8px #333",
                }}
              >
                <p>{item.description}</p>
              </Box>
            </Paper>
          </a>
        </Box>
      ))}
    </Slider>
  );
};

export default CarouselComponent;
