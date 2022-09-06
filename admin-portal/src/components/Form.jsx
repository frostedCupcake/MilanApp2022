import { Typography, Box, TextField, Button } from "@mui/material";
import * as React from "react";

const Form = () => {
  const [teamScoreA, setTeamscoreA] = React.useState(0);
  const [teamScoreB, setTeamscoreB] = React.useState(0);
  const updateOnSubmit = (a, b) => {
    setTeamscoreA((prev) => prev + Number(a));
    setTeamscoreB((prev) => prev + Number(b));
  };

  const defaultValues = {
    scoreA: "",
    scoreB: "",
  };

  const [formValues, setFormValues] = React.useState(defaultValues);

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateOnSubmit(formValues.scoreA, formValues.scoreB);
    formValues.scoreA = "";
    formValues.scoreB = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            color: "#808080",
            margin: "2rem 0",
          }}
        >
          <Box
            sx={{
              gap: "1rem",
              border: "solid 2px black",
              borderRadius: "5px",
              padding: "1rem",
            }}
          >
            <Typography variant="h5">Team A</Typography>
            <Typography
              variant="h5"
              sx={{
                width: "8rem",
                margin: ".2rem 0",
              }}
            >
              {teamScoreA}
            </Typography>
            <TextField
              sx={{
                width: "8rem",
              }}
              id="outlined-number"
              label="Number"
              type="number"
              name="scoreA"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.scoreA}
              onChange={handleInputChange}
            />
          </Box>
          <Box
            sx={{
              gap: "1rem",
              border: "solid 2px black",
              borderRadius: "5px",
              padding: "1rem",
            }}
          >
            <Typography variant="h5">Team B</Typography>
            <Typography
              variant="h5"
              sx={{
                width: "8rem",
                margin: ".2rem 0",
              }}
            >
              {teamScoreB}
            </Typography>
            <TextField
              sx={{
                width: "8rem",
              }}
              id="outlined-number"
              label="Number"
              type="number"
              name="scoreB"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.scoreB}
              onChange={handleInputChange}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "10rem",
            fontSize: "1.2rem",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
