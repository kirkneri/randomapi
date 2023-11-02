fetch("https://kirkneri.github.io/randomapi/anime.json")
.then(response => response.json())
.then(data => {
    const animeData = data.data;
    const body = document.querySelector("body");
    const div = document.createElement("div");
    body.appendChild(div);
    body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp12849262.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover"
    body.style.backgroundAttachment = "fixed";
    function displayAnime (){
        animeData.forEach(char =>{
            const para = document.createElement("p");
            para.innerHTML = `<b>Anime: ${char.anime}</p></b><b>${char.character}</b>: <i>"${char.quote}"</i>`;
            div.appendChild(para);
            para.style.border = "1px solid black";
            para.style.padding = "10px";
            para.style.borderRadius = "20px";
            para.style.textAlign = "center";
            para.style.backgroundImage = "linear-gradient(to right, grey, white)";
        }
    )}
    displayAnime();
})
.catch(error => console.error("No data has been fetched.", error))

