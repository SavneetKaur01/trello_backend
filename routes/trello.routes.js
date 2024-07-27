const validate = require("../middleware/validate");
const { createBoardSchema, createListSchema, createCardSchema } = require("../schemas/trelloSchemas");

module.exports = app => {
    const board = require("../controllers/BoardController.js");
    const list = require("../controllers/ListsController.js");
    const card = require("../controllers/CardController.js");
    const checklist = require("../controllers/CheckListController.js");
    const checkitem = require("../controllers/CheckItemController.js");

    var router = require("express").Router();
  
    // Create a new Board
    // router.post("/", board.create);
    router.post("/", validate(createBoardSchema), board.create);
  
    // Display Boards
    router.get("/", board.getAll);

    //Display Lists
    router.get("/lists/:boardId/:boardName",list.getAllLists);

    //Create a new list
    // router.post("/lists/:boardId",list.createList);
    router.post("/lists/:boardId", validate(createListSchema), list.createList);


    //Delete a list
    router.delete("/lists/:listId",list.deleteList);

    //Get all cards
    router.get("/card/:listId", card.getAllCards);

    //Create a new card
    // router.post("/card/:listId",card.createCard);
    router.post("/card/:listId", validate(createCardSchema), card.createCard);


    //Delete a card
    router.delete("/card/:cardId",card.deleteCard);

    //Get all checklists
    router.get("/checklist/:cardId", checklist.getAllCheckLists);

    //Create a new checklist
    router.post("/checklist/:cardId",checklist.createChecklist);

    //Delete a checklist
    router.delete("/checklist/:checklistID",checklist.deleteCheckList);

    //Get all checkitems
    router.get("/checkitem/:checklistId", checkitem.getAllCheckItems);

    //Create a new checkitem
    router.post("/checkitem/:checklistId",checkitem.createCheckItem);

    //Delete a checkitem
    router.delete("/checkitem/:checkitemId",checkitem.deleteCheckItem);

    //Update a checkitem
    router.put("/checkitem/:checkitemId/:state", checkitem.updateCheckItem);
  
    app.use('/api/trello', router);
  };

  //This file is exporting a function that takes an app parameter. 
  //When you require this file and immediately invoke it with (app), you're essentially running all the code 
  //inside that function.


