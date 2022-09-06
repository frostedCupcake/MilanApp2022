import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import Cricket from "./Cricket";
import Form from "./Form";
import Esports from "./Esports";

const Selection = (props) => {
  const [sport, setSport] = React.useState("");

  const handleChange = (event) => {
    setSport(event.target.value);
  };
  const LawnTennis = () => <Form />;
  const Hockey = () => <Form />;
  const TableTennis = () => <Form />;
  const Volleyball = () => <Form />;
  const Badminton = () => <Form />;
  const Football = () => <Form />;
  const Basketball = () => <Form />;
  const Dodgeball = () => <Form />;
  const Carrom = () => <Form />;
  const Chess = () => <Form />;
  const Athletics = () => <Form />;
  const Aquatics = () => <Form />;
  const Weightlifting = () => <Form />;
  const Squash = () => <Form />;

  return (
    <Box
      sx={{
        textAlign: "center",
        textTransform: "uppercase",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        // border: "solid #000 2px",
        padding: "3rem",
      }}
    >
      <Typography
        sx={{
          letterSpacing: "2px",
          fontSize: { xs: "1.2rem", sm: "3rem" },
          fontWeight: "300",
          marginBottom: "1rem",
          color: "#808080",
        }}
      >
        Score Board
      </Typography>
      <FormControl
        sx={{
          width: { xs: "10rem", sm: "12rem" },
          textTransform: "uppercase",
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "#808080",
          }}
        >
          SPORT
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sport}
          label="Sport"
          onChange={handleChange}
        >
          {props.sportsList.map((el) => (
            <MenuItem
              value={el}
              sx={{
                textTransform: "uppercase",
              }}
            >
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {sport === "esports" ? <Esports /> : ""}
      {sport === "lawn tennis" ? <LawnTennis /> : ""}
      {sport === "cricket" ? <Cricket /> : ""}
      {sport === "hockey" ? <Hockey /> : ""}
      {sport === "table tennis" ? <TableTennis /> : ""}
      {sport === "volleyball" ? <Volleyball /> : ""}
      {sport === "badminton" ? <Badminton /> : ""}
      {sport === "football" ? <Football /> : ""}
      {sport === "basketball" ? <Basketball /> : ""}
      {sport === "dodgeball" ? <Dodgeball /> : ""}
      {sport === "carrom" ? <Carrom /> : ""}
      {sport === "chess" ? <Chess /> : ""}
      {sport === "athletics" ? <Athletics /> : ""}
      {sport === "aquatics" ? <Aquatics /> : ""}
      {sport === "weightlifting" ? <Weightlifting /> : ""}
      {sport === "squash" ? <Squash /> : ""}
    </Box>
  );
};

export default Selection;
