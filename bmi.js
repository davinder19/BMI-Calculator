let gander= document.getElementById('gander');
let height = document.getElementById('height');
let inch = document.getElementById('inch');
let input = document.getElementById('input');
let bm = document.getElementById('bm');
let protien = document.getElementById('protien');
let show = document.getElementById('show');
let message = document.getElementById('message');
let cal = document.getElementById('cal').addEventListener("click", gencheck);
let test , h, inc, bmi, pro, total, m, weight, pound;
d =10;
t=0;
// p=0;
cont=0;
show.style.display='none';
message.style.display='none';
gander.addEventListener('change', ()=>{
    test = gander.options[gander.selectedIndex].value;
    console.log(`i'm ${test}`);
    });
function gencheck (e){
    h =parseInt(height.value);
    inc =parseInt(inch.value);


    if (test==="male") {
             if (h>0 && inc>0){
                 console.log(`i'm ${test}`);
                 console.log(`i'm ${h}`);
           
                 
                 weight = h* 10+(inc*2.3); // calculate weight for male
                // weight=(cont+h)*(t-60);
              
                  console.log(`weight is ${weight}`);
                  calculate();
   
               }
           else{
            console.log("Try agian");
            warning();
            clear();
           }
    }
    else if (test==="female"){
                     if (h>0 && inc>0){
                       console.log(`i'm ${test}`);
                       console.log(`i'm ${h}`);
                       weight = h* 9.1+(inc*2.3);
                       calculate();
        
                     }
                     else{
                        console.log("Try agian");
                        warning();
                         clear();
                     }
                    }
    else{
        console.log("TRY AGAIN");
        warning();
        clear();
        }
        e.preventDefault();
    }

                // calculate function
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
               //warning function
               function warning(){

                message.style.display ='';
                show.style.display='none';
                setTimeout(clearResult, 3000);
                }
                //clear function
                function clear(){
                   height.value= '';
                   inch.value = '';
    
                }
                // clearResult function
                function clearResult(){
                
                  show.style.display='none';
                  message.style.display ='none';
                }
                