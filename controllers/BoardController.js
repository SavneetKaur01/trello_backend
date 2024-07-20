const Board = require("../models/BoardModel.js");

// Create and Save a new Board
const create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return; // Add return to stop further execution
  }

  // Create a Board
  const board = new Board({
    name:req.body.boardName
  });

  Board.createBoard(board, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Board."
      });
    else res.send(data);
  });
};

// Retrieve all Boards from the database .
const getAll = (req, res) => {
  Board.getAllBoards((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving boards."
      });
    else res.send(data);
  });
};


module.exports = {
  create,
  getAll
};
