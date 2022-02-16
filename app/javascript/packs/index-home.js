// click on desktop and touch on mobile on the button
// connecter le button a la page-one et le container
// when click the triangle left and right open
// when clicking if page-one is visble make in hidden
// if page home is hidden make it visible
// and the page open as well


export function home() {

  const elements = document.querySelectorAll(".elements");
  const button = document.getElementById("button");
  const homePage = document.querySelector(".voyages-des-sens");
  const hidePage = document.querySelector(".page-one");

  function moveOne () {
    elements.forEach(element => {
      element.classList.toggle('open')
    })
  };

  function moveTwoDelay () {
    function moveTwo () {
      if (hidePage.classList.contains('hidden')) {
        hidePage.classList.remove('hidden');
        setTimeout(function () {
          hidePage.classList.remove('visuallyhidden');
        }, 20);
      } else {
        hidePage.classList.add('visuallyhidden');
        hidePage.addEventListener('transitioned', function (e){
          hidePage.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
    setTimeout(moveTwo, 1000);
  };

 const ready = function allMoves () {
                moveOne();
                moveTwoDelay();
}

  button.addEventListener("click", ready, false );
}
