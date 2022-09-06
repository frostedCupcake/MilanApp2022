import { Button, styled, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Esports = () => {
  const Heading = styled(Typography)({
    margin: "1rem 0",
  });
  const [teamValorant, setTeamValorant] = React.useState("");
  const [teamCsgo, setTeamCsgo] = React.useState("");
  const [teamBgmi, setTeamBgmi] = React.useState("");
  const [teamrocketLeague, setTeamRocketLeague] = React.useState("");
  const updateOnSubmit = (a, b, c, d) => {
    setTeamValorant(a);
    setTeamCsgo(b);
    setTeamBgmi(c);
    setTeamRocketLeague(d);
  };
  const defaultValues = {
    valorant: "",
    csgo: "",
    bmgi: "",
    rocketLeague: "",
  };
  const [gameValues, setGameValues] = React.useState(defaultValues);
  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setGameValues({
      ...gameValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateOnSubmit(
      gameValues.valorant,
      gameValues.csgo,
      gameValues.bgmi,
      gameValues.rocketLeague
    );
    gameValues.valorant = "";
    gameValues.csgo = "";
    gameValues.bgmi = "";
    gameValues.rocketLeague = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Heading>Valorant</Heading>
        <Heading
          variant="p"
          sx={{
            width: "8rem",
            margin: "0 auto",

            display: "block",
          }}
        >
          {teamValorant}
        </Heading>
        <TextField
          id="outlined-number"
          label="Text"
          type="text"
          name="valorant"
          InputLabelProps={{
            shrink: true,
          }}
          value={gameValues.valorant}
          onChange={handleInputChange}
        />
        <Heading>Csgo</Heading>
        <Heading
          variant="p"
          sx={{
            width: "8rem",
            margin: "0 auto",

            display: "block",
          }}
        >
          {teamCsgo}
        </Heading>
        <TextField
          id="outlined-number"
          label="Text"
          type="text"
          name="csgo"
          InputLabelProps={{
            shrink: true,
          }}
          value={gameValues.csgo}
          onChange={handleInputChange}
        />
        <Heading>bgmi</Heading>
        <Heading
          variant="p"
          sx={{
            width: "8rem",
            margin: "0 auto",

            display: "block",
          }}
        >
          {teamBgmi}
        </Heading>
        <TextField
          id="outlined-number"
          label="Text"
          type="text"
          name="bgmi"
          InputLabelProps={{
            shrink: true,
          }}
          value={gameValues.bgmi}
          onChange={handleInputChange}
        />
        <Heading>rocket League</Heading>
        <Heading
          variant="p"
          sx={{
            width: "8rem",
            margin: "0 auto",

            display: "block",
          }}
        >
          {teamrocketLeague}
        </Heading>
        <TextField
          id="outlined-number"
          label="Text"
          type="text"
          name="rocketLeague"
          InputLabelProps={{
            shrink: true,
          }}
          value={gameValues.rocketLeague}
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
  );
};

export default Esports;
