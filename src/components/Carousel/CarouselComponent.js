import React from "react";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const CarouselComponent = ({ items }) => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
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
              elevation={6}
              sx={{ 
                textAlign: "center", 
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: "block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={item.image}
                alt={`Slide ${index}`}
              />
              <Box
                sx={{
                  padding: theme.spacing(3),
                  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                  color: "#e4e4e4",
                  borderTop: "3px solid #00adb5",
                }}
              >
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: "1rem" }}>{item.description}</p>
              </Box>
            </Paper>
          </a>
        </Box>
      ))}
    </Slider>
  );
};

export default CarouselComponent;
