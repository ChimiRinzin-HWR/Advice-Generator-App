const APILINK = 'https://api.adviceslip.com/advice';
const advicestring = document.querySelector(".advice");
const adviceid = document.querySelector(".adviceid");
const next = document.querySelector(".next");
returnMovies(APILINK)
function returnMovies(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        advicestring.textContent = data.slip.advice;
        
        adviceid.textContent = data.slip.id;
    });
}

next.addEventListener("click", function(){
    advicestring.classList.add("fadeout");
    setTimeout(() =>{
        returnMovies(APILINK);
        advicestring.classList.remove("fadeout");
        advicestring.classList.add("fadein");
    }, 500)
    advicestring.classList.remove("fadein");
})