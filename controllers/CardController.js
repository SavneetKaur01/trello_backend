const Card=require('../models/CardModel.js')

const getAllCards=(req,res)=>{
    console.log("Hello Hello");
    Card.getAllCards(req.params.listId ,(err,data)=>{
        console.log(req.params.listId);
        if(err){
          res.status(500).send ({
            message: err.message || "Some error occured while retrieving cards"
          }) 
        }
        else res.send(data);
    })
    console.log(res);
}


const createCard = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return; 
    }


    // Create a Card
    const card = new Card({
      name:req.body.cardName,
      listId: req.params.listId
    });

    console.log(req.params.listId);
  
    Card.createCard(card, (err, data) => {
      if (err){
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Card."
        });
    }
      else res.send(data);
    });
  };
  

const deleteCard=(req,res)=>{
    Card.deleteCard(req.params.cardId,(err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the Card."
            });
        }
        else res.send(data)
    })
}

module.exports= {
    getAllCards,
    createCard,
    deleteCard
};