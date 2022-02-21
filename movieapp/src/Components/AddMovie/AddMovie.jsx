import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddMovie = ({ handleZid }) => {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({
    id: Math.random(),
    name: "",
    image: "",
    date: "",
    rating: 0,
    type: "",
    description: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.id]: e.target.value });
  };
  const handleMovie = (e) => {
    e.preventDefault();

    handleZid(movie);

    setMovie({
      id: Math.random(),
      name: "",
      image: "",
      date: "",
      rating: 0,
      type: "",
      description: "",
    });

    handleClose();
  };
  return (
    <div className="modal">
        <div className="open"> <Button style={{
       color: "white",
      
        
      }} onClick={handleOpen}><b>Add Movie</b></Button></div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className="fazza" onSubmit={(e) => handleMovie(e)}>
              <ul>
                <li>
                  <label>Enter Movie Name:</label>
                  <input
                    required
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={movie.name}
                  />
                </li>
                <li>
                  <label>date movie:</label>
                  <input type="date" id="date" onChange={handleChange} />
                </li>
                <li>
                  <label>type movie:</label>
                  <input type="text" id="type" onChange={handleChange} />
                </li>
                <li>
                  <label>rating :</label>
                  <input type="number" id="rating" onChange={handleChange} />
                </li>
                <li>
                  <label>image:</label>
                  <input type="text" id="image" onChange={handleChange}></input>
                </li>
                <li>
                  <label>description:</label>
                  <input type="text" id="description" onChange={handleChange} />
                </li>
              </ul>
              <input className="submit" type="submit" onClick={handleMovie} />
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default AddMovie;