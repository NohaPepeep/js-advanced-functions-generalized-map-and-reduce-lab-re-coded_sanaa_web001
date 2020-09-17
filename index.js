// Add your functions here
function map(sourceArray,fun){
const newarr =sourceArray.map(fun);
return newarr
}


function reduce(sourceArray,fun, startingPoint=0){
<<<<<<< HEAD
  let newarr;
=======
  const newarr;
>>>>>>> 797070d92aa4de60b743910320c5280c0ede60df
  if(startingPoint!==0){
   newarr= sourceArray.reduce(fun,startingPoint);}
  else{
   newarr= sourceArray.reduce(fun);
  }
  return newarr;
}