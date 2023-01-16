var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
}

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 7) {
    counter = 1;
  }
}, 10000);
