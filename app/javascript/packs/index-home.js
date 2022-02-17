// click on desktop and touch on mobile on the button
// if page home is hidden make it visible
// and the page open as well

export function home() {

// selectionner tous les elements necessaires
  const elements = document.querySelectorAll(".elements");
  const button = document.getElementById("button");
  const homePage = document.getElementById("voyages-des-sens");
  const hidePage = document.querySelector(".page-one");
  const play = document.querySelector(".play");


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
      hidePage.addEventListener('transitioned', function (e) {
        hidePage.classList.add('hidden');
      }, 5);
    };
    setTimeout(moveTwo, 1000);
  };

//make voyages-des-sens show up gradually
  function moveThreeDelay() {
    function moveThree() {
      if (hidePage.classList.contains('visuallyhidden')) {
        hidePage.remove();
        homePage.classList.add('visuallyshow');
        homePage.classList.remove('play');
        // homePage.addEventListener('transitioned', function (e) {
        //  homePage.classList.add('slow-process')
        // }, 20);
      };
    }
    setTimeout(moveThree, 2000);
  };

    //get all the moves and connect it to the button
  const ready = function allMoves () {
                  moveOne();
                  moveTwoDelay();
              //    moveDownDelay();
                  moveThreeDelay();
                }

  button.addEventListener("click", ready, false );

  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  function getValue(t, dir) {

    if (dir > 0) {
      return 0.5 * t; /* Y = mx + c  */
    } else {
      return 1 - (0.5 * t);
    }
    /*
      Here the slope of line m = 0.5.
      t is the time interval.
    */
  }


  function animator(divID) {
    if (!(this instanceof animator)) return new animator(divID); /* Ignore this */
    var Node = document.getElementById(divID),
      start = new Date.getTime(), // The initiation.
      now = 0,
      dir = 1,
      visible = true;
    function step() {
      now = new Date.getTime();
      var val = getValue(now - start, dir)
      Node.style.opacity = val;
      if (dir > 0 && val > 1 || dir < 0 && val < 0) {
        visible = !(visible * 1);
        // Optionally here u can call the block & none
        if (dir < 0) { /* Hiding  and hidden*/
          Node.style.display = 'none'; // So if were repositioning using position:relative; it will         support after hide
        }
        /* Our animation is finished lets end the continous calls */
        return;
      }
      setTimeout(step, 100); // Each step is executated in 100seconds
    }
    this.animate = function () {
      Node.style.display = 'block';
      dir *= -1;
      start = new Date.getTime();
      setTimeout(step, 100);
    }
  }
}
