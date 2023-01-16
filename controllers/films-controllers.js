let FILMS = [
    {
      id :"1",
      auteur : "Alain Berbérian",
      annee : "1994",
      titre : "La cité de la peur",
      imageUrl : "https://retourverslecinema.com/wp-content/uploads/2013/12/la-cit%C3%A9-de-la-peur.jpg"
    },
    {
      id :"2",
      auteur : " Charles Nemes",
      annee : "2001",
      titre : "La tour Montparnasse infernale",
      imageUrl : "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGX0J65P7/image?locale=fr-fr&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"
    },
    {
      id :"3",
      auteur : "Frank Darabont",
      annee : "",
      titre : "La ligne verte",
      imageUrl : "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg"
    },
    {
      id :"4",
      auteur : " ",
      annee : " ",
      titre : " ",
      imageUrl : " "
    }
  ]
  const getFilms = (req,res) => {
    res.json({FILMS})
}
const getFilmById = (req,res) => {
    console.log('GetFilmById')
    const fId =req.params.filmid;
    console.log({fId});
    const film = FILMS.find ((f) => {
        return f.id === fId;
    });
    if(!film){
        return res
        .status(404)
        .json({Film : "Film non trouvée pour cet Id"})
    }
    
    res.json({message: {film}});
}
const createFilm = (req, res) => {
    const {auteur, annee, titre, imageUrl} = req.body
    const createdFilm = {
      auteur,
      annee,
      titre,
      imageUrl,
    } 
  }

exports.getFilms = getFilms;
exports.getFilmById = getFilmById;