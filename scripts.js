const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})


function displayMenu() {
  document.querySelector("#nav-menu").classList.toggle("hide");
  document.querySelector("#nav-menu").classList.toggle("show");
}

// function displayMenu() {
//   const veggieBurgerMenu = document.getElementById("nav-menu");
//   console.log('click');
//   console.log(veggieBurgerMenu.style.display);

//   if (veggieBurgerMenu.style.display = "none") {
//     veggieBurgerMenu.style.display = "flex";
//   } if (veggieBurgerMenu.style.display = "flex") {
//     console.log("hide");
//     veggieBurgerMenu.style.display = "none";
//   } 
// }

// function displayMenu() {
//   const veggieBurgerMenu = document.getElementById("nav-menu");
//   console.log('click');
//   // veggieBurgerMenu.style.display = "initial";
//   console.log(veggieBurgerMenu.style.display);
//   if (veggieBurgerMenu.style.display = "none") {
//     veggieBurgerMenu.style.display = "flex";
//   } else {
//     console.log('hide');
//     veggieBurgerMenu.removeAttribute("style");
//     veggieBurgerMenu.style.display = "none";
//   } 
// }

//   if (veggieBurgerMenu.style.display = "none") {
//     veggieBurgerMenu.removeAttribute("style");
//     veggieBurgerMenu.style.display = "none";
//   } else {
//     console.log('hide');
//     veggieBurgerMenu.style.display = "flex";
//   } 
// }

// function displayMenu() {
//   const veggieBurgerMenu = document.getElementById("nav-menu");
//   console.log('click');

//   veggieBurgerMenu.style.display = "flex";
    
// }