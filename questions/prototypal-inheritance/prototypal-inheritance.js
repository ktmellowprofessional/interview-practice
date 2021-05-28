// Convert the following es6 class constructor to the protypal syntax:
class Parent(name){
  constructor(name) {
    this.name=name
  }

  getName(){return this.name}
}

class Children extends Parent {
  constructor(props){
    super(props)
  }
}

// Solution:
// properties on this are per instance
// methods or properties on the prototype all point to a shared value (save memory)
function Parent(name) {
  this.name = name
}
Parent.prototype.getName = function () {
  return this.name
}

// Define Children class and inherit all things from Parent function 'this'
// Want to use call or apply because it invokes the function
//    bind does NOT invoke a function, only reassigns scope of this
function Children(name) {
  Parent.call(this, name)
}
// Set prototype to Parent and inherit all prototypal methods
Children.prototype = new Parent()
