const List = require("../models/ListModel.js");

const getAllLists = (req, res, next) => {
  console.log("Hello Hello");
  try {
    List.getAllLists(req.params.boardId, (err, data) => {
      console.log(req.params.boardId);
      if (err) {
        throw new Error(
          err.message || "Some error occured while retrieving lists"
        );
        // res.status(500).send ({
        //   message: err.message || "Some error occured while retrieving lists"
        // })
      } else res.send(data);
    });
    console.log(res);
  } catch (error) {
    next(error);
  }
};

// const createList = (req, res) => {
//   try {
//     if (!req.body) {
//       res.status(400).send({
//         message: "Content can not be empty!",
//       });
//       return;
//     }

//     // Create a List
//     const list = new List({
//       name: req.body.listName,
//       boardId: req.params.boardId,
//     });

//     List.createList(list, (err, data) => {
//       if (err) {
//         throw new Error(
//           err.message || "Some error occurred while creating the List."
//         );
//         // res.status(500).send({
//         //   message: err.message || "Some error occurred while creating the List."
//         // });
//       } else res.send(data);
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const createList = (req, res, next) => {
  try {
    const list = new List({
      name: req.body.listName,
      boardId: req.params.boardId,
    });

    List.createList(list, (err, data) => {
      if (err) {
        throw new Error(err.message || "Some error occurred while creating the List.");
      } else res.send(data);
    });
  } catch (error) {
    next(error);
  }
};

const deleteList = (req, res, next) => {
  try {
    List.deleteList(req.params.listId, (err, data) => {
      if (err) {
        throw new Error(
          err.message || "Some error occurred while deleting the List."
        );
        // res.status(500).send({
        //     message: err.message || "Some error occurred while deleting the List."
        // });
      } else res.send(data);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLists,
  createList,
  deleteList,
};
