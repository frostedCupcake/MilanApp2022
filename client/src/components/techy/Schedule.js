import React, { useEffect, useState } from "react";
import Axios from "axios";
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

function Schedule() {
  const darkTheme = createTheme({
    typography: {
      fontSize: "1rem",
    },
    palette: {
      mode: "dark",
    },
  });
  const [scores, setscores] = useState([]);

  // const scores = [
  //   {
  //     "25/02": [
  //       {
  //         Time: "6pm",
  //         Event: "Batminton",
  //         Venue: "Ground",
  //         Results: "Ramanuja",
  //       },
  //       {
  //         Time: "6pm",
  //         Event: "Batminton",
  //         Venue: "Ground",
  //         Results: "Ramanuja",
  //       },
  //     ],
  //   },
  //   {
  //     "08/09": [
  //       {
  //         Time: "7pm",
  //         Event: "Tennis",
  //         Venue: "Ground",
  //         Results: "Vyasa",
  //       },
  //     ],
  //   },
  // ];
  console.log(scores);
  const d = new Date();
  let month = (d.getMonth() + 1).toString();
  let date = d.getDate().toString();
  let today =
    month === "2" ? date + "/" + 0 + month : 0 + date + "/" + 0 + month;

  const tableHeaders = ["Event", "Venue", "Results"].map((el) =>
    el.toUpperCase()
  );
  const Dates = [
    "25/02",
    "08/09",
    "27/02",
    "28/02",
    "01/03",
    "02/03",
    "03/03",
    "04/03",
    "05/03",
    "07/09",
  ];
  let itemRows = [];

  for (var event in scores) {
    let scheduleDate = Dates[event];
    const rows = scores[scheduleDate];
    const item = (
      <Accordion defaultExpanded={scheduleDate === today}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "gold",
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
            {scheduleDate}
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
                      fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    }}
                  >
                    TIME
                  </TableCell>
                  {tableHeaders.map((el) => (
                    <TableCell
                      sx={{
                        color: "gold",
                        p: { xs: 0, sm: "1rem" },
                        textAlign: { xs: "center", sm: "right" },
                        fontSize: { xs: "1.2rem", sm: "1.5rem" },
                      }}
                      align="right"
                    >
                      {el}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      fontSize: { xs: "1.1rem", sm: "1.5rem" },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Time}
                    </TableCell>
                    <TableCell align="right">{row.Event}</TableCell>
                    <TableCell align="right">{row.Venue}</TableCell>
                    <TableCell align="right">{row.Results}</TableCell>
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
  //    useEffect(()=>{
  //     Axios.get('https://gymkhana.iith.ac.in/milanbackend/schedule/techy').then((response)=>{
  //         setscores(response.data);
  //     })
  //        setInterval(()=>{
  //         Axios.get('https://gymkhana.iith.ac.in/milanbackend/schedule/techy').then((response)=>{
  //             setscores(response.data);
  //         })
  //        },5000)

  // },[])

  return (
    <Box
      sx={{
        width: { xs: "90%", md: "50%" },
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

export default Schedule;
