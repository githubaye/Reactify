import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "../Layout/Navbar";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: "silver", padding: "25px" }}
      >
        <Box
          padding={1.5}
          border={2}
          borderColor={"gray"}
          borderRadius={4}
          boxShadow={20}
        >
          <Typography variant="h3" marginBottom={4}>
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline", marginBottom: "25px" }}
          >
            Question:
          </Typography>
          <Typography variant="h5" color="secondary" marginBottom={"15px"}>
            Answer:
          </Typography>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline", marginBottom: "25px" }}
            color="primary"
          >
            Question:
          </Typography>
          <Typography variant="h5" color="secondary" marginBottom={"15px"}>
            Answer:
          </Typography>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline", marginBottom: "25px" }}
            color="primary"
          >
            Question:
          </Typography>
          <Typography variant="h5" color="secondary" marginBottom={"15px"}>
            Answer:
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default FAQ;
