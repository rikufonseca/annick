
export function home() {
  const button = document.querySelector("#button");
  const triangle = document.querySelectorAll(".contain");
  const page = document.querySelector("#page-one");

  console.log(button);
  console.log(triangle);
  console.log(page);
  console.log("coucocu")

  button.addEventListener('click', (open) => {
    open.currentTarget.classList.toggle(triangle).contains('.open')
    open.currentTarget.classList.toggle(page).contains('.open')
    open.preventDefault()
  });
}
