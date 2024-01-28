import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addMovie } from "../../api-helpers/api-helpers";
import {useNavigate} from 'react-router-dom'
const labelProps = {
  mt: 1,
  mb: 1,
};
const AddMovie = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    releaseDate: "",
    featured: false,
  });
  const navigate = useNavigate()
  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState("");
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, actors);
    addMovie({ ...inputs, actors })
      .then((res) => navigate('/'))
      .catch((err) => console.log(err));
  };
  return (
    <div /*style={{backgroundColor:"black"}}*/>
      <form onSubmit={handleSubmit} style={{color:"white"}}>
        <Box
          width={"50%"}
          padding={10}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"10px 10px 20px #ccc"}
        >
          <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"} style={{color:"white"}}>
            Add New Movie
          </Typography>
          <FormLabel sx={labelProps} style={{color:"white"}}>Title</FormLabel>
          <TextField
            sx={{color:"white"}}
            value={inputs.title}
            onChange={handleChange}
            name="title"
            variant="standard"
            margin="normal"
            style={{
              backgroundColor:"white",
              border:"none",
              borderBottom:"1px solid white",
              //outline:"none"
              borderRadius:"8px"
            }}
          />
          <FormLabel sx={labelProps} style={{color:"white"}}>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            name="description"
            variant="standard"
            margin="normal"
            style={{
              backgroundColor:"white",
              border:"none",
              borderBottom:"1px solid white",
              //outline:"none"
              borderRadius:"8px"
            }}
          />
          <FormLabel sx={labelProps} style={{color:"white"}}>Poster URL</FormLabel>
          <TextField
            style={{
              backgroundColor:"white",
              color:"yellow",
              border:"none",
              borderBottom:"1px solid red",
              //outline:"none"
              borderRadius:"8px"
            }}
            value={inputs.posterUrl}
            onChange={handleChange}
            name="posterUrl"
            variant="standard"
            margin="normal"
            
          />
          <FormLabel sx={labelProps} style={{color:"white"}}>Release Date</FormLabel>
          <TextField
            type={"date"}
            value={inputs.releaseDate}
            onChange={handleChange}
            name="releaseDate"
            variant="standard"
            margin="normal"
            style={{
              backgroundColor:"white",
              border:"none",
              borderBottom:"1px solid white",
              borderRadius:"8px",
              //outline:"none"
            }}
          />
          <FormLabel sx={labelProps} style={{color:"white"}}>Actor</FormLabel>
          <Box display={"flex"}>
            <TextField
              value={actor}
              name="actor"
              onChange={(e) => setActor(e.target.value)}
              variant="standard"
              margin="normal"
              style={{
                border:"none",
                borderBottom:"1px solid white",
                outline:"none"
              }}
            />
            <Button
              onClick={() => {
                setActors([...actors, actor]);
                setActor("");
              }}
            >
              Add
            </Button>
          </Box>
          <FormLabel sx={labelProps} style={{color:"white"}}>Featured</FormLabel>
          <Checkbox
            name="fetaured"
            style={{background:"white"}}
            checked={inputs.featured}
            onClick={(e) =>
              setInputs((prevSate) => ({
                ...prevSate,
                featured: e.target.checked,
              }))
            }
            sx={{ mr: "auto" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius:"10px",
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2d42",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovie;
