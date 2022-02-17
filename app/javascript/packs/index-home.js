// click on desktop and touch on mobile on the button
// if page home is hidden make it visible
// and the page open as well

export function home() {

// selectionner tous les elements necessaires
  const elements = document.querySelectorAll(".elements");
  const button = document.getElementById("button");
  const homePage = document.querySelector(".voyages-des-sens");
  const hidePage = document.querySelector(".page-one");

// open triangle left and right
  function moveOne () {
    elements.forEach(element => {
      element.classList.toggle('open')
    })
  };

// make page one hidden gradually
  function moveTwoDelay () {
    function moveTwo () {
     // if (hidePage.classList.contains('hidden')) {
     //   hidePage.classList.remove('hidden');
     //   setTimeout(function () {
      //    hidePage.classList.remove('visuallyhidden');
    //    }, 10);
    //  } else {
        hidePage.classList.add('visuallyhidden');
        hidePage.addEventListener('transitioned', function (e){
          hidePage.classList.add('hidden');
        }, 20);
   //   }
    };
    setTimeout(moveTwo, 2000);
  };

//move page-one in html down to voyages-des-sens page
  function moveDownDelay () {
    function moveDownDiv () {
     const here = document.querySelector('.here');
    // here.innerHTML = "";
     const pageOne = here.children;
     const there = document.createElement("div");
      there.className = "there";
      there.innerHTML = pageOne;
    //  document.body.appendChild(there);
    };
    setTimeout(moveDownDiv, 1100);
  };

//make voyages-des-sens show up gradually
  function moveThreeDelay() {
    function moveThree() {
      if (homePage.classList.contains('show')) {
        homePage.classList.remove('show');
        setTimeout(function () {
          homePage.classList.remove('visuallyshow');
        });
      } else {
        homePage.classList.add('visuallyshow');
        homePage.addEventListener('transitioned', function (e) {
          homePage.classList.add('show');
        }, 10);
      }
    };
    setTimeout(moveThree, 1000);
  };

//get all the moves and connect it to the button
 const ready = function allMoves () {
                moveOne();
                moveTwoDelay();
                moveDownDelay();
                moveThreeDelay();
}

  button.addEventListener("click", ready, false );
}
