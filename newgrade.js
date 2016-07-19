const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function gradeEven(inptgrade) {
    return (grades%2)==0;
    }
function gradeOdd(inptgrade) { 
    return !gradeEven(grades); 
    }

rl.question('\nPlease enter your grade: ', (inptgrade) => {
    
  if(inptgrade < 75 && inptgrade %2 == 0)
  console.log('Your new grade is: '+ (inptgrade - 2));
  else {
      console.log('Your new grade is: '+ (inptgrade - 3));
      
  }
  rl.close();
});
