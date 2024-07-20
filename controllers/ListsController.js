const List=require('../models/ListModel.js')

const getAllLists=(req,res)=>{
    console.log("Hello Hello");
    List.getAllLists(req.params.boardId ,(err,data)=>{
        console.log(req.params.boardId);
        if(err){
          res.status(500).send ({
            message: err.message || "Some error occured while retrieving lists"
          }) 
        }
        else res.send(data);
    })
    console.log(res);
}


const createList = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return; 
    }

    // Create a List
    const list = new List({
      name:req.body.listName,
      boardId: req.params.boardId
    });
  
    List.createList(list, (err, data) => {
      if (err){
        res.status(500).send({
          message: err.message || "Some error occurred while creating the List."
        });
    }
      else res.send(data);
    });
  };
  

const deleteList=(req,res)=>{
    List.deleteList(req.params.listId,(err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the List."
            });
        }
        else res.send(data)
    })
}

module.exports= {
    getAllLists,
    createList,
    deleteList
};