// #01
const text =  document.getElementById("text1").innerHTML = "Hello World";
console.log(text);

// #02
const name = document.getElementsByTagName("h1");
console.log(name[1].innerText);

// #03
const fine = document.getElementsByClassName("box");
console.log(fine[0].innerText);

//#04
const okay = document.getElementById("ok");
okay.innerText="Hello World";

// #06
const attribute = document.getElementById("heading").style.color="Red"

// #07
function myFunction() {
    document.getElementById("flex-property").style.flexDirection = "column-reverse";
}

//#09

function timer(){
    const time = new Date();
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    console.log(hr, min, sec);
    document.getElementById("clock").innerText = hr + " : " + min + " : " + sec;
}
setInterval(timer, 1000);

const selectValue = () => {
    document.getElementById("temp").innerText = 
    document.getElementById("choose").Value;
};
