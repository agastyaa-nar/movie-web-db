$(".search-btn").on("click", function(e){
    e.preventDefault();

    let keyword = $(".input-keyword").val()
    if(!keyword){
        alert("Masukkan judul film!")   
    }

    $.ajax({
        url: "http://www.omdbapi.com/?apikey=37a4b1ea&s=" + keyword,
        success: movies => {
            if (movies.Response === "False") {
                alert(movies.Error); 
                return;
            }

            const movieList = movies.Search;
            
            let cards = ""
            movieList.forEach(m => {
                cards += showMovie(m);
            });
    
            $(".movie-container").html(cards)
    
            $(".modal-detail-btn").on("click", function(){
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=37a4b1ea&i=" + $(this).data("imdbid"),
                    success: detail => {
                        const movieDetail = showDetail(detail)
    
                        $(".detail-container").html(movieDetail)
                    },
                    error: e => {
                        console.log(e.responseText);
                        alert("Film Not Found")
                    }
                })
            })
        },
        error: e => {
            console.log(e.responseText);
        }
    });

})



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