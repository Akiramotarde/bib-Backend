const uuid = require("uuid")

let MUSIQUES = [
  {
    id: "1",
    auteur: "Daft punk",
    annee: "2013",
    titre: "Get lucky",
    imageUrl: "https://th.bing.com/th/id/R.0faecc96872263efacf06e6ab260b7e4?rik=Tx57Zr0wJ%2fPxKQ&riu=http%3a%2f%2fi.ytimg.com%2fvi%2fh5EofwRzit0%2fmaxresdefault.jpg&ehk=WeB%2bNbTEl2%2fG3nZDMRzG4mf3XSHZ3yyCRpvmHJE424g%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: "2",
    auteur: "David Guetta",
    annee: "2011",
    titre: "Titanium",
    imageUrl: "https://www.music-bazaar.com/album-images/vol9/481/481663/2312182-big/Titanium-Remixes-cover.jpg"
  },
  {
    id: "3",
    auteur: "Coldplay",
    annee: "2002",
    titre: "In My Place",
    imageUrl: "https://i.ytimg.com/vi/5iE4Z9jRZ_c/hqdefault.jpg"
  },
  {
    id: "4",
    auteur: "Linkin Park",
    annee: "2003",
    titre: "In the end",
    imageUrl: "https://img.discogs.com/7BfGFZjH28pWLGzu7wo2smgJMAc=/fit-in/531x469/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-765168-1393303133-3490.jpeg.jpg"
  }

]

const getMusiques = (req, res) => {
  res.json({ MUSIQUES })
}

const getMusiqueById = (req, res) => {
  console.log('GetMusiqueById')
  const mId = req.params.musiqueid;
  console.log({ mId });
  const musique = MUSIQUES.find((m) => {
    return m.id === mId;
  });
  if (!musique) {
    return res
      .status(404)
      .json({ Musique: "Musique non trouvée pour cet Id" })
  }
  //res.send('Liste des musiques')
  res.json({ message: { musique } });
}

const createMusique = (req, res) => {
  const { id, auteur, annee, titre, imageUrl } = req.body
  const createdMusique = {
    id: uuid.v4(),
    auteur,
    annee,
    titre,
    imageUrl
  }
  MUSIQUES.push(createdMusique);
  res.status(201).json({ createdMusique });
}
const updateMusique = (req, res) => {
  const { auteur, annee, titre, imageUrl } = req.body;
  const musiqueId = req.params.musiqueid;

  const updatedMusique = MUSIQUES.find(m => {
    return (m.id === musiqueId);
  });
  const musiqueIndex = MUSIQUES.findIndex(m => m.id === musiqueId)
  updatedMusique.auteur = auteur;
  updatedMusique.annee = annee;
  updatedMusique.titre = titre;
  updatedMusique.imageUrl = imageUrl;

  MUSIQUES[musiqueIndex] = updatedMusique;

  res.status(200).json({ musique: updatedMusique })
};

const deleteMusique = (req, res) => {
  const musiqueId = req.params.musiqueid;

  MUSIQUES = MUSIQUES.filter((m) => m.id !== musiqueId);
  res.status(200).json({ message : "Musique supprimée !"});
}

exports.getMusiques = getMusiques;
exports.getMusiqueById = getMusiqueById;
exports.createMusique = createMusique;
exports.updateMusique = updateMusique;
exports.deleteMusique = deleteMusique;