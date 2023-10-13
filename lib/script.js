var characters = [
  
  
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

















let characterz = document.querySelectorAll(".more-info");
let charName = document.querySelectorAll('h3');
let characterDivs = document.querySelectorAll('.character')


for (let i = 0; i < charName.length; i++) {
  characterz[i].addEventListener("click", clickButtonEvent);

  function clickButtonEvent(e) {
    // Access the specific character name using the index i
    let clickedCharacterName = charName[i].outerText;
    
    // Loop through the characters array to find the clicked character
    for (let j = 0; j < characters.length; j++) {
      if (clickedCharacterName === characters[j].name) {
        let bio = characters[j].bio

        let p = document.createElement('p')
        p.innerText = bio

        e.target.parentElement.appendChild(p)


        console.log(characters[j].bio);
        console.log(characters[j].status);
        break; // Exit the loop once the character is found
      }
    }
  }
}


let submitButton = document.getElementById('submit')
// let charElems = document.querySelectorAll('.character')
submitButton.addEventListener('click', sumbitClick)

function sumbitClick(){
  // for(let i = 0;i < charName.length;i++){
    
  //   let inputChar = charName[i].outerText

  //   if(inputChar === charName[i]){
  //     console.log(charName[i], inputChar)
  //   }
  // }

  for (let i = 0; i < characterDivs.length; i++) {
    characterDivs[i].style.display = 'none'
    let current = document.querySelector('#characterName').value
    if (characterDivs[i].children[0].innerText.toLowerCase().includes(current.toLowerCase())) {
      characterDivs[i].style.display = 'block'
    }
  }
  

}








