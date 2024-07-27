const CheckList = require("../models/CheckListModel.js");

const getAllCheckLists = (req, res, next) => {
  console.log("Hello Hello");
  try {
    CheckList.getAllCheckLists(req.params.cardId, (err, data) => {
      console.log(req.params.cardId);
      if (err) {
        throw new Error(
          err.message || "Some error occured while retrieving checklists"
        );
        // res.status(500).send ({
        //   message: err.message || "Some error occured while retrieving checklists"
        // })
      } else res.send(data);
    });
    console.log(res);
  } catch (error) {
    next(error);
  }
};

const createChecklist = (req, res, next) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Create a Checklist
    const checklist = new CheckList({
      name: req.body.Name,
      cardId: req.params.cardId,
    });

    console.log(req.params.cardId);

    CheckList.createCheckList(checklist, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the checklist.",
        });
      } else res.send(data);
    });
  } catch (error) {
    next(error);
  }
};

const deleteCheckList = (req, res, next) => {
  try {
    CheckList.deleteCheckList(req.params.checklistID, (err, data) => {
      if (err) {
        throw new Error(
          err.message || "Some error occurred while deleting the checklist."
        );
        // res.status(500).send({
        //     message: err.message || "Some error occurred while deleting the checklist."
        // });
      } else res.send(data);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCheckLists,
  createChecklist,
  deleteCheckList,
};
