const regUser = document.getElementById('regUser')
const regEmail = document.getElementById('regEmail')
const regPassword = document.getElementById('regPassword')

const register = document.getElementById('register')
const login = document.getElementById('login')
const formMsg = document.getElementById('formMsg')
const h1 = document.querySelector('h1')

register.addEventListener('click', async (event) => {
  event.preventDefault()
  
  const result = await fetch('http://localhost:5001/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: regUser.value,
      email: regEmail.value,
      password: regPassword.value
    })
  })
  
  if(result.ok){
    //user is logged in 
    h1.innerHTML = 'Login'
    document.getElementById('regForm').style.display = "none"
    document.getElementById('logForm').style.display = "block"

  }else{
    const msg = await result.json()
    formMsg.innerHTML = await msg.error
    console.log(msg)
  }

})

const logUser = document.getElementById('logUser')
const logPassword = document.getElementById('logPassword')

login.addEventListener('click', async (event) => {
  event.preventDefault()

  const result = await fetch('http://localhost:5001/login/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: logUser.value,
      password: logPassword.value
    })
  })

  if(result.ok){
    //user is logged in 
    document.getElementById('logForm').style.display = "none"
    h1.innerHTML = `Welcome ${logUser.value}`
    displayMovies()

  }else{
    const logMsg = document.getElementById('logMsg')
    const msg = await result.json()
    logMsg.innerHTML = await msg.error
    console.log(msg)
  }
})


const main = document.querySelector('.main')

async function displayMovies() {
  const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=087965799b6c66369c7e9d6d121aac45&language=en-US')
  const data = await result.json() 
  const movies = data.results

  for(const movie of movies){
    const {title, poster_path, vote_average} = movie

    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')
    
    const movieImage = document.createElement('div')
    movieImage.classList.add('movie-image')
    movieImage.style.backgroundImage =  `url('https://image.tmdb.org/t/p/w500/${poster_path}')`
    movieImage.style.backgroundSize = "cover"
    
    const movieContainer = document.createElement('div')
    movieContainer.classList.add('movie-container')
    // main.appendChild(movieContainer)
    
    const movieTitle = document.createElement('h2')
    movieTitle.classList.add('movie-title')
    movieTitle.append(title)
    movieContainer.appendChild(movieTitle)

    const movieRating = document.createElement('p')
    movieRating.classList.add('rating')
    movieRating.append(vote_average)
    movieContainer.appendChild(movieRating)

    movieCard.appendChild(movieImage)
    movieCard.appendChild(movieContainer)
    main.appendChild(movieCard)
  }
}

