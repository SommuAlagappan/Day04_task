const object1 = {
    name: 'alagappan',
    address: 'carstreet'
  };
      
  const object2 = {
    address : 'carstreet',
    name: 'alagappan'
  };
      
  console.log(object1 === object2)       //false
  console.log(JSON.stringify(object1) === JSON.stringify(object2))  //false

  console.log(_.isEqual(object1, object2))    //bringing error as Uncaught ReferenceError: _ is not defined
  


   