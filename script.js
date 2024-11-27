//your JS code here. If required.

const circles=document.querySelectorAll('.circle');
const nextbtn=document.getElementById('next');
const prevbtn=document.getElementById('prev');

let activecircle=1;

UI();

nextbtn.addEventListener('click',()=>{
    activecircle++;
if(activecircle>circles.length){
    activecircle=circles.length;
}
UI();
})

prevbtn.addEventListener('click',()=>{
    activecircle--;
    if(activecircle<1){
        activecircle=1;
    }
    UI();
})

function UI(){
   circles.forEach((circle,index)=>{
if(index<activecircle){
    circle.classList.add('active');
}
else{
 circle.classList.remove('active');    
}
   }) 

   prevbtn.disabled=activecircle===1;
   nextbtn.disabled=activecircle===circles.length; 

}