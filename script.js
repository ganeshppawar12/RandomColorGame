const Btn = document.getElementById('btn');
// console.log(Btn);
const ColorCode = document.getElementById('colorCode');
// console.log(ColorCode);
const ColorCC = document.getElementById('CC');



const getColor=()=>{
    let randomNumber = Math.floor(Math.random() *16777215);
    let colorChange = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor = colorChange;
    ColorCode.innerText = colorChange;
    ColorCode.style.color = colorChange;
    // ColorCC.style.color = colorChange;
    
    // console.log(randomNumber,colorChange);


}
Btn.addEventListener('click',getColor)
getColor();