const sql = require('./db.js')

const CheckList = function(checklist){
    this.checklistName=checklist.name;
    this.cardID= checklist.cardId;
}

CheckList.getAllCheckLists=(card_id,callback)=>{

    sql.query(`select * from checklists where cardID=${card_id}`,(err,response)=>{
        if(err){
            console.log('error',err);
            callback(err,null);
            return;
        }
        callback(null, response);
    })
    
}

CheckList.createCheckList = (newChecklist, callback) => {  

    sql.query("INSERT INTO checklists SET ?", newChecklist,(err,res)=>{
        if(err){
            console.log("error:", err);
            callback(err, null); 
            return;
        }
        console.log("created checklist:", {checkListID:res.insertId, ...newChecklist}); //The res object is the response from the SQL query execution. res.insertId is a property in the response object that contains the ID of the newly inserted row assuming id is primary key and auto increment.
        callback(null, {checklistID:res.insertId, ...newChecklist})
    });

}

CheckList.deleteCheckList=(checklist_id, callback)=>{
    sql.query(`DELETE from checklists where checklistID=${checklist_id}`,(err,response)=>{
        if(err){
            console.log("error:",err);
            callback(err,null);
            return;
        }        
        callback(null,response);
    })

}

module.exports=CheckList;