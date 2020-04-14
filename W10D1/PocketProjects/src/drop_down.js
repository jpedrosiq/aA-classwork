
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {

  let result = [];
  let dogNames = Object.keys(dogs);
  // console.log(dogNames);
  for(let i = 0; i < dogNames.length; i++){
    // debugger
    let dogName = dogNames[i];
    let list = document.createElement("li");
    let link = document.createElement("a");
    link.innerHTML = dogName;
    link.href = dogs[dogName];
    list.classList.add("dog-link");
    list.appendChild(link);
    result.push(list);
  } 
  // console.log(result);
  return result;
};
  function attachDogLinks(){
    let dogLinks = dogLinkCreator(dogs);
    const dogUl = document.querySelector(".drop-down-dog-list");
    // console.log(dogUl)
    // for(let i = 0; i < dogLinks.length; i++){
    //   debugger
    //   let link = dogLinks[i];
    //   dogUl.append(link);
    // }
    dogLinks.forEach(dog =>{
      // debugger
      // console.log(dog);
      dogUl.append(dog);
    });
}
attachDogLinks();

function handleEnter() {
  const dogUl = document.querySelectorAll(".dog-link");
  dogUl.forEach(el => {
    el.classList.add('dog-enter');
  })
}

function handleLeave(){
  const dogUl = document.querySelectorAll(".dog-link");
  dogUl.forEach(el => {
    el.classList.remove('dog-enter');
  })
}
let nav = document.querySelector(".drop-down-dog-nav");
nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handleLeave);
// element.addEventListener("mouseenter", myFunction);