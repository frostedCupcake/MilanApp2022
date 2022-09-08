import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

import Axios from "axios";
function Scores() {
  const [scores, setscores] = useState({
    1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    13: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    14: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    15: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    16: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    17: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    18: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
  const darkTheme = createTheme({
    typography: {
      fontSize: "1rem",
    },
    palette: {
      mode: "dark",
    },
  });
  // const scores = {
  //   1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   13: [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   14: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   15: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   16: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   17: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   18: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // };

  const gameNames = [
    "Solo Dance",
    "Duo-Trio Dance",
    "Group Dance",
    "Drama",
    "Photography",
    "Low effort Comp",
    "BMC Codenames",
    "Dumb Charadesl",
    "General Quiz",
    "Not so sorry",
    "Bands",
    "Solo Sing",
    "Poetry",
    "Junk Art",
    "Navarasa",
    "Rap",
    "Treasure Hunt",
    "Fashion show",
  ].map((el) => el.toUpperCase());
  const blockNames = [
    "ARYABHATTA",
    "BHASKARA",
    "MAITREYI",
    "GARGI",
    "CHARAKA",
    "SUSURUTA",
    "KAUTILYA",
    "VYASA",
    "BRAHMAGUPTA",
    "VARAHAMIHIRA",
    "RAMANUJA",
    "KAPILA",
  ];
  const tableHeaders = ["Block", "Points"].map((el) => el.toUpperCase());
  let itemRows = [];
  for (var event = 0; event < 18; event++) {
    let game = gameNames[event];
    const rows = scores[event + 1];
    console.log(rows);
    console.log(game);
    const item = (
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "gold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "gold",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            {game}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ xs: { minWidth: 650 } }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "gold",
                      fontSize: { xs: "1.1rem", sm: "1.5rem" },
                    }}
                  >
                    {tableHeaders[0]}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "gold",
                      p: { xs: 0, sm: "1rem" },
                      textAlign: { xs: "center", sm: "right" },
                      fontSize: { xs: "1.1rem", sm: "1.5rem" },
                    }}
                    align="right"
                  >
                    {tableHeaders[1]}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {blockNames[i]}
                    </TableCell>
                    <TableCell align="right">{row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    );
    itemRows.push(item);
  }

  useEffect(() => {
    Axios.get("http://localhost:4000/culty").then((response) => {
      setscores(response.data);
    });
    setInterval(() => {
      Axios.get("http://localhost:4000/culty").then((response) => {
        setscores(response.data);
      });
    }, 5000);
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "80%", md: "50%" },
        margin: "5rem auto",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {itemRows}
      </ThemeProvider>
    </Box>
  );
}

export default Scores;
