let string ="";
let buttons =document.querySelectorAll('.button');


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            string=eval(string)
        }
        
        else if (e.target.innerHTML == 'C') {
            string=location.reload(true)
        }
        
        console.log(e.target)
        string=string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})
const fun=()=>{
    const myElement = document.getElementById(".name");
    myElement = document.write("Md Mohsin haider");
}
fun();



