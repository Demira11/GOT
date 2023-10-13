const characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive"
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead"
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive"
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive"
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive"
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive"
  }
];

// characterz.forEach(element => {
//   console.log(element)
// element.addEventListener("click", clickButtonEvent)
// function clickButtonEvent(e){
//   console.log(charName)
// }
// })


let characterz = document.querySelectorAll(".more-info");

for (let i = 0; i < characterz.length; i++) {
  characterz[i].addEventListener("click", clickButtonEvent)
}


/*function clickButtonEvent(e){
  // console.log(charName[i])- part of the first exercise!
  const parentDiv = e.target.parentElement

  if (parentDiv.children[3]) { // remove bio if already there
    parentDiv.removeChild(parentDiv.lastChild);
  }

  const name = parentDiv.children[0].innerText // Grab innerText of h2 tag to retrieve name

  for (let i = 0; i < characters.length; i++){
    if(characters[i].name === name){
      parentDiv.insertAdjacentHTML("beforeend", `<p>${characters[i].bio}</p>`)
    }
  }
}

//When button is clicked(eventlist), the characters bio(in characters array in object) appears beneets their image(img tag)!!!!!!!!!!!!!!







