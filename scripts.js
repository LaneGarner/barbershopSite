const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

function displayMenu() {
  const veggieBurgerMenu = document.getElementById("nav-menu");
  console.log('click');
  console.log(veggieBurgerMenu.style.display);
  
  if (veggieBurgerMenu.style.display == "none" || veggieBurgerMenu.style.display == undefined) {
  veggieBurgerMenu.style.display = "flex";
  } else {
    veggieBurgerMenu.style.display = "none";
  }
}