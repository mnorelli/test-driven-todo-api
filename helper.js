// functions used to help parse and manipulate array data

var helper = {};

// given an array and an ID key, make a unique ID
helper.makeId = function(array,id){
  var oldId = 0
  for (i=0;i<array.length;i++){
    if (array[i].id > oldId) {
      oldId = array[i].id
    }
  }
  return oldId + 1
}

// given an array, and ID key, and a value to find, 
// return the array element ID whose ID equals value
helper.findOne = function(array,id,value){
  for (i=0;i<array.length;i++){
    if (array[i][id] === value) {
      return i;
    }
  }
}

module.exports = helper;