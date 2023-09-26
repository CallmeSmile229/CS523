const search_box = document.querySelector(".search-box"),
searchInput = search_box.querySelector("input");
var response;

function data(result,word){
    if(result.title){
        response = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
    }
    else{
        console.log(result);
        search_box.classList.add("active")
    }
}

searchInput.addEventListener("keyup",e =>{
    if(e.key === "Enter" && e.target.value){
        fetchAPI(e.target.value);
    };
});

function fetchAPI(word){
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(res => res.json()).then(result => data(result,word));
};

