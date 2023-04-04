// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeClick = document.querySelector(".like-glyph").addEventListener("click", renderHeart)

function renderHeart(){
  mimicServerCall()
  .then(()=>{
    const heartButton = document.querySelector(".like-glyph")
    if(heartButton.textContent === EMPTY_HEART){
      heartButton.textContent = FULL_HEART
      heartButton.classList.add('activated-heart');
    } else if (heartButton.textContent === FULL_HEART){
      heartButton.textContent = EMPTY_HEART
      heartButton.classList.remove('activated-heart');
    }
    const modal = document.getElementById("modal");
    setTimeout(function(){
      modal.style.display = 'none';
    }, 3000)
  })
  .catch(error => {
    const modal = document.getElementById("modal");
    modal.textContent = error;
    modal.style.display = '';
    setTimeout(function(){
      modal.style.display = 'none';
    }, 3000)
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}