// Create polyfill for bind

// Solution with only 'this' reassignment
Function.prototype.myOwnBind = function(newThis) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  var boundTargetFunction = this;
  return function boundFunction() {
    return boundTargetFunction.apply(newThis);
  };
};

// Solution with args
if (!Function.prototype.bind) {
  Function.prototype.bind = function(...arg){
    const func = this
    const context = arg[0]
    const params = arg.slice(1)
    return function(...innerParam) {
      func.apply(context, [...params, ...innerParam])
    }
  }
}
