// functions used to help parse and manipulate array data

var helper = {};

helper.makeId = function(array,id){
  var oldId = 0
  for (i=0;i<array.length;i++){
    if (array[i].id > oldId) {
      oldId = array[i].id
    }
  }
  return oldId + 1
}

  var id = parseInt(req.params.id)
  for (i=0;i<todos.length;i++){
  // todos.forEach(function(a){
   if (todos[i]._id === id) {
     console.log("Deleting",todos[i]._id,todos[i].task);
     todos.splice(i,1)
     res.json(todos[i]);
   }
  }

module.exports = helper;