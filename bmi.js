let height = document.getElementById('height');
let inch = document.getElementById('inch');
let input = document.getElementById('input');
let bm = document.getElementById('bm');
let protien = document.getElementById('protien');
let show = document.getElementById('show');
let gander= document.getElementById('gander');
let message = document.getElementById('message');
let cal = document.getElementById('cal').addEventListener("click", gancheck);
show.style.display='none';
message.style.display='none';
let bmi = 0;
let h = 0;
let pro = 0;
let inc = 0
let total =0;
// console.log(total)
let m= 0;
// console.log(m);
let weight =0;
// console.log(weight);
let pound = Math.round(weight* 2.20462262);
// console.log(pound);
function gancheck(e){

  if(gander.value.toLowerCase()==="male"){
    if(((height.value)> 0)&&((inch.value)>=0)){
      h= parseInt(height.value); // assigne height value to h
      // console.log(`height is feet ${h}`);
      inc= parseInt(inch.value); // assign inch value to inc
      // console.log(`height is inch ${inc}`);
      weight = h* 10+(inc*2.3); // calculate weight for male
      // console.log(`weight is ${weight}`);
      calculate();
    }
    else{
      warning();
      clear();
    }
    
   }
   else if(gander.value.toLowerCase()==="female"){
    if(((height.value)> 0)&&((inch.value)>=0)){
      h= parseInt(height.value); // assigne height value to h
      // console.log(`height is feet ${h}`);
      inc= parseInt(inch.value); // assign inch value to inc
      // console.log(`height is inch ${inc}`);
      weight = h* 9.1+(inc*2.3); // calculate weight for female
      // console.log(`weight is ${weight}`);
      calculate();
      }
      else{
        warning();
        clear();
      }   }
   else{
     console.log("Please Enter Correct info");
     warning();
     clear();
   }
   e.preventDefault();

}
function calculate(){
     message.style.display='none'; //display message none
    show.style.display= '' // disply show id box if result show
    //  console.log(`total is ${total}`);
     // BMI calculate
    //  console.log("I'm working");
     total = h + '.' + inc;
     m = (total * 0.3048).toFixed(1); //  feet convert to meter
    //  console.log(`M is ${total}`);
    //  console.log(`total is ${m}`);
     bmi = weight/( m * m);
     bmi =  (bmi);
    //  console.log(`youor BMI is ${bmi}`);
     bm.value= Math.round(bmi);
     //protien need every day
     //0.8g * weught in kg
     pro = Math.round(0.8 * weight);
     protien.value = pro;
    //  console.log(`Yourprotien need is ${pro}`);
    //weight kg convert to pound
      weight = Math.round(weight* 2.20462262);
    //  console.log(`Your good weight is ${weight}`);
     input.value = weight;
     // clear input
      clear();
    setTimeout(clearResult, 8000);
}
function warning(){

message.style.display ='';
show.style.display='none';
setTimeout(clearResult, 8000);
}
function clear(){
   height.value= '';
   inch.value = '';
   gander.value='';
}
function clearResult(){

  show.style.display='none';
  message.style.display ='none';
}
