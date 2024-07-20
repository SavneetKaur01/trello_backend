const sql = require('./db.js')

const List = function(list){
    this.listName=list.name;
    this.boardId= list.boardId;
}

List.getAllLists=(board_id,callback)=>{

    sql.query(`select * from lists where boardId=${board_id}`,(err,response)=>{
        if(err){
            console.log('error',err);
            callback(err,null);
            return;
        }
        callback(null, response);
    })
    
}

List.createList = (newList, callback) => {  
    sql.query("INSERT INTO lists SET ?", newList,(err,res)=>{
        if(err){
            console.log("error:", err);
            callback(err, null); 
            return;
        }

        console.log("created list:", {listID:res.insertId, ...newList}); //The res object is the response from the SQL query execution. res.insertId is a property in the response object that contains the ID of the newly inserted row assuming id is primary key and auto increment.
        callback(null, {listID:res.insertId, ...newList})
    });

}

List.deleteList=(list_id, callback)=>{
    sql.query(`DELETE from lists where listID=${list_id}`,(err,response)=>{
        if(err){
            console.log("error:",err);
            callback(err,null);
            return;
        }        
        callback(null,response);
    })

}

module.exports=List;