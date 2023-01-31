import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../Layout/Navbar";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

function createData(name, price, image) {
  return { name, price, image };
}

const rows = [
  createData(
    "Nike Jordan Sneakers",
    2245455,
    "https://cdn.flightclub.com/TEMPLATE/274477/2.jpg"
  ),
  createData(
    "Laptops",
    11237,
    "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13-space-m1-2020_GEO_JP?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621769000"
  ),
  createData(
    "Watches",
    26002,
    "https://m.media-amazon.com/images/I/81ZZmj16UaL._AC_UF1000,1000_QL80_.jpg"
  ),
];

export default function BasicTable() {
  return (
    <>
      <Navbar />
      <Typography
        variant="h3"
        align="center"
        marginTop={3}
        sx={{ textDecoration: "underline" }}
        color="success.dark"
      >
        Cart Items
      </Typography>
      <Container className="m-auto" maxWidth="md">
        <TableContainer component={Paper} sx={{ boxShadow: "3" }} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell align="center">Product Image</TableCell>

                <TableCell align="center">Product Information</TableCell>

                <TableCell align="center"> Price</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{i + 1}</TableCell>
                  <TableCell align="center">
                    <img
                      src={row.image}
                      style={{ height: "100px" }}
                      alt="afa"
                    />
                  </TableCell>

                  <TableCell align="center">{row.name}</TableCell>

                  <TableCell align="center">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
