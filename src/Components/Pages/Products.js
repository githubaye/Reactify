import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../Layout/Navbar";

const Products = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="h4" color="black " pl={3}>
              Departments
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Shoes"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Watches"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Laptops"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Accesories"
              />
            </FormGroup>
            <Typography variant="h4" color="black " pl={3}>
              Prices
            </Typography>
            <RadioGroup>
              <FormControlLabel
                value="4"
                control={<Radio defaultChecked />}
                label="All"
              />
              <FormControlLabel
                value="3"
                control={<Radio defaultChecked />}
                label="upto 1000"
              />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="1000-10000"
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="10000-100000"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Above 100000"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={8}>
            Products
            <Grid container spacing={3}>
              <Grid item xs={4}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
