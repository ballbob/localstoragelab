var taskList = [];

var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){
  //for each item in the state, invoke addItem
  state.forEach(function(item){
    this.addItem(list,item)
  })
}

var addItem = function(list, item){
  //add an item to the list
var newLi = document.createElement("li");
newLi.innerText = item.value;
}

var handleClick = function(){
  //get the value of the input box
  var input = document.querySelector('#new-item')

  //get the "todo-list" element from the DOM
  var tdl = document.querySelector('#todo-list')
  //invoke addItem
  addItem(tdl,input)
  //invoke save
  save(input)
}

var save = function(item){
  taskList.push( item.value );
  //save the item to localStorage 
  var tasklistJson = JSON.stringify(taskList)
  localStorage.setItem( "tasklist" , tasklistJson );
  //NOTE You'll have to use JSON.stringify

}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
