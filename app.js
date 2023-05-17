// (function a(){
//     let screen=document.querySelector(".screen")
//     let buttons=document.querySelectorAll(".btn")
//     let equal=document.querySelector(".btn-equal")
//     let clear=document.querySelector(".btn-clear")

//     buttons.forEach(function(button){
//         button.addEventListner('click',function(e){
//             let screenval=e.target.dataset.num;
//             screen.value=screen.value+screenval;
//         })
//     })
    
// })();
let screen=document.querySelector('.screen')
let buttons=document.querySelector('.buttons')
buttons.forEach('click',function(e){
    screen.value=2;
})
function aa(){
    screen.value=9;
}
function cc(){
    screen.value="";
}