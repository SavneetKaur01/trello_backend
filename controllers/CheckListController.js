const CheckList=require('../models/CheckListModel.js')

const getAllCheckLists=(req,res)=>{
    console.log("Hello Hello");
    CheckList.getAllCheckLists(req.params.cardId ,(err,data)=>{
        console.log(req.params.cardId);
        if(err){
          res.status(500).send ({
            message: err.message || "Some error occured while retrieving checklists"
          }) 
        }
        else res.send(data);
    })
    console.log(res);
}


const createChecklist = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return; 
    }
    // Create a Checklist
    const checklist = new CheckList({
      name:req.body.Name,
      cardId: req.params.cardId
    });



    console.log(req.params.cardId);
  
    CheckList.createCheckList(checklist, (err, data) => {
      if (err){
        res.status(500).send({
          message: err.message || "Some error occurred while creating the checklist."
        });
    }
      else res.send(data);
    });
  };
  

const deleteCheckList=(req,res)=>{
    CheckList.deleteCheckList(req.params.checklistID,(err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the checklist."
            });
        }
        else res.send(data)
    })
}

module.exports= {
    getAllCheckLists,
    createChecklist,
    deleteCheckList
};