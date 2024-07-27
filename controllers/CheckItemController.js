const CheckItem = require("../models/CheckItemModel.js");

const getAllCheckItems = (req, res, next) => {
  try {
    CheckItem.getAllCheckItems(req.params.checklistId, (err, data) => {
      console.log(req.params.checklistID);
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

const createCheckItem = (req, res, next) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Create a Checkitem
    const checkitem = new CheckItem({
      name: req.body.Name,
      checklistId: req.params.checklistId,
    });

    console.log(req.params.checklistId);

    CheckItem.createCheckItem(checkitem, (err, data) => {
      if (err) {
        throw new Error(
          err.message || "Some error occurred while creating the checkItem."
        );

        // res.status(500).send({
        //   message: err.message || "Some error occurred while creating the checkItem."
        // });
      } else res.send(data);
    });
  } catch (error) {
    next(error);
  }
};

const deleteCheckItem = (req, res, next) => {
  try {
    CheckItem.deleteCheckItem(req.params.checkitemId, (err, data) => {
      if (err) {
        throw new Error(
          err.message || "Some error occurred while deleting the checkitem."
        );
        // res.status(500).send({
        //     message: err.message || "Some error occurred while deleting the checkitem."
        // });
      } else res.send(data);
    });
  } catch (error) {
    next(error);
  }
};

const updateCheckItem = (req, res, next) => {
  console.log(req.params.checkitemId);
  console.log(req.params.state);
  try {
    CheckItem.updateCheckItem(
      req.params.checkitemId,
      req.params.state,
      (err, data) => {
        if (err) {
          throw new Error(
            err.message || "Some error occured while updating the checkitems."
          );
          // res.status(500).send({
          //     message: err.message || "Some error occured while updating the checkitems."
          // })
        } else res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCheckItems,
  createCheckItem,
  deleteCheckItem,
  updateCheckItem,
};
