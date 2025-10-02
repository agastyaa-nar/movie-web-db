// Without external library JQuery ajax
// Use fetch + Error handling

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", async function(e){
    e.preventDefault()
    try{
        const inputKeyword = document.querySelector(".input-keyword").value
        const movies = await getMovie(inputKeyword);
        updateCards(movies);
    }catch(error) {
        alert(error);
    }
});

function getMovie(input){
    return fetch("https://www.omdbapi.com/?apikey=37a4b1ea&s=" + input)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            if(data.Response === "False"){
                throw new Error(data.Error)
            }
            return data.Search
        })
}

function updateCards(movies){
    let cards = ""
    movies.forEach(m => {
        cards += showMovie(m)
    });
    
    const movieContainer = document.querySelector(".movie-container");
    movieContainer.innerHTML = cards
}

// Event binding (Show Detail Button)
document.addEventListener("click", async function(e){
    try{
        if (e.target.classList.contains("modal-detail-btn")){
            const imdbid = e.target.dataset.imdbid
            const movieDetail = await getMovieDetail(imdbid)
            updateModalBox(movieDetail)
        }
    } catch (err) {
        alert(err)
    }
});

function getMovieDetail(imdbid){
    return fetch("https://www.omdbapi.com/?apikey=37a4b1ea&i=" + imdbid)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            if(data.Response === "False"){
                throw new Error("Data not found")
            }
            return data
        })
}

function updateModalBox(data){
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = showDetail(data)
}

function showMovie(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid=${m.imdbID}>Show Details</a>
                    </div>
                </div>
            </div>`
}


function showDetail(detail){
    return `<div class="row">
                        <div class="col md-5">
                            <img class="img-fluid"src="${detail.Poster}">
                        </div>

                        <div class="col">
                            <ul class="list-group">
                                <li class="list-group-item"><strong><h4>${detail.Title} (${detail.Year})</h4></strong></li>
                                <li class="list-group-item"><strong>Genre :</strong> ${detail.Genre}</li>
                                <li class="list-group-item"><strong>Director :</strong> ${detail.Director}</li>
                                <li class="list-group-item"><strong>Production :</strong> ${detail.Production}</li>
                                <li class="list-group-item"><strong>Actors :</strong> ${detail.Actors}</li>
                                <li class="list-group-item"><strong>Content Rated :</strong> ${detail.Rated}</li>
                                <li class="list-group-item"><strong>Language :</strong> ${detail.Language}</li>
                                <li class="list-group-item"><strong>Plot :</strong> ${detail.Plot}</li>
                              </ul>
                        </div>
                    </div>`
}
