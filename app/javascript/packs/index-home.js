// click on desktop and touch on mobile on the button
// connecter le button a la page-one et le container
// when click the triangle left and right open
//display voyage des sens div
// and the page open as well

//classList.toggle('open')page.classList.toggle('open')
 // ("click", e => {...}, { capture: true})
export function home() {

  let elements = document.querySelectorAll(".elements");
  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    elements.forEach(element => {
      element.classList.toggle('open')
    })
  });
}
