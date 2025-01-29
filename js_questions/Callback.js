const Sum = (num1, num2,callback) => {
  setTimeout(()=>{
    results=num1+num2
    console.log(results)
    callback();
  }, 2000);
};

const Message = () =>console.log('Your operation has been completed successfully');

Sum(5,5,Message);

