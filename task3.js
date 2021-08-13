let obj1 = {};

obj1.nested = {};

obj1.nested.a = null;
let nestedProp = "b";

obj1.nested[nestedProp] = true;

console.log(obj1);

obj1.sing = () => {
  console.log("lala");
};

obj1.sing();
