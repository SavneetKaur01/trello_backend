const CheckItem=require('../models/CheckItemModel.js')

const getAllCheckItems=(req,res)=>{
    CheckItem.getAllCheckItems(req.params.checklistId ,(err,data)=>{
        console.log(req.params.checklistID);
        if(err){
          res.status(500).send ({
            message: err.message || "Some error occured while retrieving checklists"
          }) 
        }
        else res.send(data);
    })
    console.log(res);
}


const createCheckItem = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return; 
    }
    // Create a Checkitem
    const checkitem = new CheckItem({
      name:req.body.Name,
      checklistId: req.params.checklistId
    });

    

    console.log(req.params.checklistId);
  
    CheckItem.createCheckItem(checkitem, (err, data) => {
      if (err){
        res.status(500).send({
          message: err.message || "Some error occurred while creating the checkItem."
        });
    }
      else res.send(data);
    });
  };
  

const deleteCheckItem=(req,res)=>{
    CheckItem.deleteCheckItem(req.params.checkitemId,(err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the checkitem."
            });
        }
        else res.send(data)
    })
}

const updateCheckItem=(req,res)=>{
  console.log(req.params.checkitemId);
  console.log(req.params.state);
    CheckItem.updateCheckItem(req.params.checkitemId, req.params.state, (err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while updating the checkitems."
            })
        }
        else res.send(data);
    })
}

module.exports= {
    getAllCheckItems,
    createCheckItem,
    deleteCheckItem,
    updateCheckItem
};