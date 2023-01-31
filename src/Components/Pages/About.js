import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../Layout/Navbar";
import { ExpandMore } from "@mui/icons-material";

const About = () => {
  return (
    <>
      <Navbar />
      <Box backgroundColor="skyblue" p={3}>
        <Typography
          variant="h3"
          sx={{ textDecoration: "underline" }}
          color="grey"
        >
          About
        </Typography>
        <Box
          display={"flex"}
          flexWrap="wrap"
          justifyContent={"space-evenly"}
          alignContent="space-evenly"
        >
          <Card sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://thumbs.dreamstime.com/z/green-iguana-profile-detail-lizard-s-head-close-up-view-small-wild-animal-looks-like-dragon-green-iguana-profile-detail-lizard-s-124677448.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Share <ShareIcon />
              </Button>
              <Button size="small">
                Learn More <ExpandMore />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://thumbs.dreamstime.com/z/green-iguana-profile-detail-lizard-s-head-close-up-view-small-wild-animal-looks-like-dragon-green-iguana-profile-detail-lizard-s-124677448.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Share <ShareIcon />
              </Button>
              <Button size="small">
                Learn More <ExpandMore />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://thumbs.dreamstime.com/z/green-iguana-profile-detail-lizard-s-head-close-up-view-small-wild-animal-looks-like-dragon-green-iguana-profile-detail-lizard-s-124677448.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Share <ShareIcon />
              </Button>
              <Button size="small">
                Learn More <ExpandMore />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://thumbs.dreamstime.com/z/green-iguana-profile-detail-lizard-s-head-close-up-view-small-wild-animal-looks-like-dragon-green-iguana-profile-detail-lizard-s-124677448.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Share <ShareIcon />
              </Button>
              <Button size="small">
                Learn More <ExpandMore />
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default About;
