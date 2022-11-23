
async function getmovie() {

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=(APIKEY)&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&`
  const result = await fetch(`${URL}`)
  const data = await result.json() 
  console.table(data)
}

getmovie()
