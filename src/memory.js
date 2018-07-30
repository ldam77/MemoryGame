export function Card (image, id){
  this.img = image;
  this.location = id;
}

export function memoryGame(id, face) {
  // debugger;
  var location = id + "pic";
  var card = "card" + id;
  document.getElementById(location).src = face;
}
