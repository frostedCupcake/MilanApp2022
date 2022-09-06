import { TextField, Typography, styled, Button, Box } from "@mui/material";
import * as React from "react";

const Cricket = () => {
  const Heading = styled(Typography)({
    margin: "1rem 0",
  });
  const [teamScore, setTeamScore] = React.useState(0);
  const [teamOvers, setTeamOvers] = React.useState(0);
  const [teamWickets, setTeamWickets] = React.useState(0);
  const updateOnSubmit = (a, b, c) => {
    setTeamScore((prev) => prev + Number(a));
    setTeamOvers((prev) => prev + Number(b));
    setTeamWickets((prev) => prev + Number(c));
  };
  const defaultValues = {
    score: "",
    overs: "",
    wickets: "",
  };

  const [cricketValues, setCricketValues] = React.useState(defaultValues);

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setCricketValues({
      ...cricketValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateOnSubmit(
      cricketValues.score,
      cricketValues.overs,
      cricketValues.wickets
    );
    cricketValues.score = "";
    cricketValues.overs = "";
    cricketValues.wickets = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box>
          <Heading>Score</Heading>
          <Heading
            variant="h5"
            sx={{
              width: "8rem",
              margin: "0 auto",
            }}
          >
            {teamScore}
          </Heading>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            name="score"
            InputLabelProps={{
              shrink: true,
            }}
            value={cricketValues.score}
            onChange={handleInputChange}
          />
          <Heading>Overs</Heading>
          <Heading
            variant="h5"
            sx={{
              width: "8rem",
              margin: "0 auto",
            }}
          >
            {teamOvers}
          </Heading>

          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            name="overs"
            InputLabelProps={{
              shrink: true,
            }}
            value={cricketValues.overs}
            onChange={handleInputChange}
          />
          <Heading>wickets</Heading>
          <Heading
            variant="h5"
            sx={{
              width: "8rem",
              margin: "0 auto",
            }}
          >
            {teamWickets}
          </Heading>

          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            name="wickets"
            InputLabelProps={{
              shrink: true,
            }}
            value={cricketValues.wickets}
            onChange={handleInputChange}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "10rem",
            fontSize: "1.2rem",
            margin: "1rem 0",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Cricket;
