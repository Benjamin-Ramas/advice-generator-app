const adviceNum = document.getElementById("adviceNum");
const adviceText = document.getElementById("adviceText");

function fetchAdvice(){
    fetch(`/.netlify/functions/fetch-advice`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.message);
        adviceNum.textContent = `ADVICE #${data.id}`;
        adviceText.textContent = data.message;
    });
}

fetchAdvice();