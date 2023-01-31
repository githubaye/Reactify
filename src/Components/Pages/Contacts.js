import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../Layout/Navbar";

const Contacts = () => {
  
  return (
    <>
      <Navbar />
      <Box className="container bg-light p-3  m-auto mt-1">
        <Box className="top" display="flex">
          <Box className="address" width={"50%"} p={5} backgroundColor={"pink"}>
            <Typography variant="h4" sx={{ textDecoration: "underline" }}>
              Address
            </Typography>
            <Typography variant="h5">Our Store</Typography>
            <Typography variant="h6">Kathmandu</Typography>
            <Typography variant="body1">Phone :012213021</Typography>
            <Typography variant="body2">Email:test@test.com</Typography>
            <Typography variant="body3">Website:www.test.com</Typography>
          </Box>
          <Box
            className="form-contact"
            width={"50%"}
            p={5}
            backgroundColor={"lightsteelblue"}
            borderLeft={3}
            borderColor="cyan"
          >
            <Typography variant="h4" sx={{ textDecoration: "underline" }}>
              Contact Form
            </Typography>
            <form>
              <TextField
                label="Email"
                variant="filled"
                placeholder="Enter your Email"
                fullWidth
                autoComplete="off"
                helperText="Required"
                multiline
                required
              />
              <TextField
                label="Subject"
                variant="filled"
                placeholder="Enter your Email"
                fullWidth
                autoComplete="off"
                // helperText="Required"
                multiline
                required
              />
              <TextField
                label="Body"
                variant="filled"
                placeholder="Enter your Email"
                fullWidth
                autoComplete="off"
                // helperText="Required"
                multiline
                required
                minRows={5}
              />
              <Button variant="outlined">Submit</Button>
            </form>
          </Box>
        </Box>
        <Box
          className="m-3"
          borderRadius={3}
          backgroundColor="cyan"
          boxShadow={3}
          p={5}
        >
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60291.807498445836!2d85.33922025569314!3d27.743368142270576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1675056719197!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
      
    </>
  );
};

export default Contacts;
