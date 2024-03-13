
let raw
let digits, searchBox;
let indexP;


function preload(){
  raw = loadStrings("1 million pi.txt");
  
  
}


  
  function indexOf (txt, search){
    let start = search.charAt(0);
    let foundIndex = -1;
    for ( let i = 0; i < txt.length; i++){
      if (txt.charAt(i) === start){
        let found = true;
        for ( let j = 1; j < search.length; j++){
         if (txt.charAt (i+j) !== search.charAt(j)){
           found = false;
           break;
         }
       }
        if (found){
          return i;
      }  
    }
  }
      return -1;
}
      
 
function searchItUp(){
  let search = searchBox.value()
  console.log(search);
  
  // let index = digits.indexOf(search, 2);
  
  let index = indexOf(digits, search);
  
  if(index > 0){
    indexP.html(index - 1);
    
  }else{
  indexP.html ('not found in the first 1 million digits of pi');
  }
}
    

function setup() {
  noCanvas();


 digits = raw[0];
  
 searchBox = createInput('');
 searchBox.input(searchItUp);
 indexP = createP ('searching');

}