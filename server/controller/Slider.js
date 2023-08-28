const connection = require("../config/connection");

//GET BOTTOM SLIDER DATA
const getSlider = (req, res) => {
  const sql = "SELECT * FROM bot_slider";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Top Slider Table in server.js" + error);
    }
    return res.json(result);
  });
};

//ADD BOTTOM SLIDER DATA
const addSlider = (req, res) => {
  try {
    const imagePath = req.file.filename;
    const sql = "INSERT INTO bot_slider (image) VALUES (?)";
    const data = [imagePath];

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Adding bottom slider Data in server.js: ", error);
        return res.status(500).send("Error adding bottom slider data");
      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

//DELETE BOTTOM SLIDER DATA
const deleteSlider = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM bot_slider WHERE id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.log("Error Delete top slider Data in server.js" + error);
    }
    res.sendStatus(200);
  });
};

//EDIT BOTTOM SLIDER DATA
const getEditSlider = (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM bot_slider WHERE id=${id}`;
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
const editSlider = (req, res) => {
  try {
    const id = req.params.id;
    let imagePath = "";
    if (req.file) {
      imagePath = req.file.filename;
      const sql = "UPDATE bot_slider SET image=? WHERE id=?";
      const data = [imagePath, id];

      connection.query(sql, data, (error) => {
        if (error) {
          console.log(
            "Error updating bottom slider data in server.js: ",
            error
          );
          return res.status(500).send("Error updating bottom slider data");
        } else {
          return res.sendStatus(200);
        }
      });
    }
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  getSlider,
  addSlider,
  deleteSlider,
  getEditSlider,
  editSlider,
};
