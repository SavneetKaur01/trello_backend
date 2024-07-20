const sql = require('./db.js')

const Card = function(card){
    this.cardName=card.name;
    this.listId= card.listId;
}

Card.getAllCards=(list_id,callback)=>{

    sql.query(`select * from cards where listId=${list_id}`,(err,response)=>{
        if(err){
            console.log('error',err);
            callback(err,null);
            return;
        }
        callback(null, response);
    })
    
}

Card.createCard = (newCard, callback) => {  
    sql.query("INSERT INTO cards SET ?", newCard,(err,res)=>{
        if(err){
            console.log("error:", err);
            callback(err, null); 
            return;
        }
        console.log("created card:", {cardId:res.insertId, ...newCard}); //The res object is the response from the SQL query execution. res.insertId is a property in the response object that contains the ID of the newly inserted row assuming id is primary key and auto increment.
        callback(null, {cardId:res.insertId, ...newCard})
    });

}

Card.deleteCard=(card_id, callback)=>{
    sql.query(`DELETE from cards where cardID=${card_id}`,(err,response)=>{
        if(err){
            console.log("error:",err);
            callback(err,null);
            return;
        }        
        callback(null,response);
    })

}

module.exports=Card;