// click on desktop and touch on mobile on the button
// if page home is hidden make it visible
// and the page open as well

export function home() {

// selectionner tous les elements necessaires
  const elements = document.querySelectorAll(".elements");
  const button = document.getElementById("button");
  const homePage = document.getElementById("voyages-des-sens");
  const hidePage = document.querySelector(".page-one");


// open triangle left and right
  function moveOne () {
    elements.forEach(element => {
      element.classList.toggle('open')
    })
  };

// make page one hidden gradually
  function moveTwoDelay() {
    function moveTwo() {
      hidePage.classList.add('visuallyhidden');
      hidePage.addEventListener('transitionend', function (e) {
        hidePage.classList.add('hidden');
      });
    };
    setTimeout(moveTwo, 1000);
  };

//make voyages-des-sens show up gradually
  function moveThreeDelay() {
    function moveThree() {
      if (hidePage.classList.contains('visuallyhidden')) {
        homePage.classList.add('visuallyshow');
      };
    }
    setTimeout(moveThree, 1300);
  };

    //get all the moves and connect it to the button
  const ready = function allMoves () {
                  moveOne();
                  moveTwoDelay();
                  moveThreeDelay();
                }

  button.addEventListener("click", ready, false );

}
