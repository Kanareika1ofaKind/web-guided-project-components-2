import axios from "axios";
// 👉 TASK 1- Test out the following endpoints:


//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector(".entry");
// console.log(entryPoint);


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  /**
   *  Destructed Shorthand
   * const imageURL = obj.imageURL;
   * const breed = obj.breed;
   */
  // instantiating the elements
  /*
    <div class="dog-card">
      <img class="dog-image">
      <h3>
    </div>
  */

  const dogCard = document.createElement("div");
  const image = document.createElement("img");
  const heading = document.createElement("h3");

  // set class names, attributes and text
  heading.textContent = `Breed: ${breed}`;
  image.src = imageURL;
  image.classList.add("dog-image");
  dogCard.classList.add("dog-card");
  // console.log(dogCard);

  // create the hierarchy
  dogCard.appendChild(image);
  dogCard.appendChild(heading);
  // console.log(dogCard);

  // add some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle("selected");
  })

  // never forget to return!
  return dogCard;
}

// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file
  


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console

function getDogs(breed, count) {
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
    .then(res => {
  //  console.log(res);
  // console.log(res.data);
  // console.log(res.data.message);
  res.data.message.forEach(imageURL => { 
    const dogCard = dogCardMaker({ imageURL: imageURL, breed: breed })
    entryPoint.appendChild(dogCard);
    })
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => console.log("OMG Done!"))
}
document.querySelector("button").addEventListener('click', () => {
  getDogs("mastiff", 4);
  getDogs("appenzeller", 4);
})
// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration
