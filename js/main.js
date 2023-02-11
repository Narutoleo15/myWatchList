//Example fetch using pokemonapi.co
// import "dotenv/config.js"
// import './loadEnv'
document.querySelector('button').addEventListener('click', doFetch)

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f8beda43fmsh4a4c89afeefbea3p191afcjsn27b268be0cdb',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

function doFetch() {
  const inputVal = document.querySelector('input').value
  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${inputVal}`

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.d)
      const movieTitles = data.d
      movieTitles.forEach(movie => {
        const movieName = movie.l
        const poster = movie.i.imageUrl
        console.log(movieName)
        console.log(poster)
        const movieSection = document.getElementById('movie-results')
        movieSection.innerHTML += 
        `<div class="movie-card">
        <img src="${poster}">
        <h3>${movieName}<h3/>
        <div/>`  
      })
        .catch(err => console.error(err));
    })
}