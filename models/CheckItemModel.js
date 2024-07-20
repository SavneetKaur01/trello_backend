const sql = require('./db.js')

const CheckItem = function(checkitem){
    this.checkitemName=checkitem.name;
    this.checklistId= checkitem.checklistId;
}

CheckItem.getAllCheckItems=(checklist_id,callback)=>{

    sql.query(`select * from checkitems where checklistId=${checklist_id}`,(err,response)=>{
        if(err){
            console.log('error',err);
            callback(err,null);
            return;
        }
        callback(null, response);
    })
    
}

CheckItem.createCheckItem = (newCheckitem, callback) => {  

    sql.query("INSERT INTO checkitems SET ?", newCheckitem,(err,res)=>{
        if(err){
            console.log("error:", err);
            callback(err, null); 
            return;
        }
        console.log("created checkitem:", {checkitemId:res.insertId, ...newCheckitem}); //The res object is the response from the SQL query execution. res.insertId is a property in the response object that contains the ID of the newly inserted row assuming id is primary key and auto increment.
        callback(null, {checkitemId:res.insertId, ...newCheckitem})
    });

}

CheckItem.deleteCheckItem=(checkitem_id, callback)=>{
    sql.query(`DELETE from checkitems where checkitemId=${checkitem_id}`,(err,response)=>{
        if(err){
            console.log("error:",err);
            callback(err,null);
            return;
        }        
        callback(null,response);
    })
}

CheckItem.updateCheckItem=(checkitem_id, state, callback)=>{
    sql.query(`UPDATE checkitems SET state="${state}" where checkitemId=${checkitem_id}`,(err,response)=>{
        if(err){
            console.log("error",err);
            callback(err,null);
            return;
        }
        callback(null,response);
    })
}

module.exports=CheckItem;