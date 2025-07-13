function MenuShow() {
  const responsiveDiv = document.getElementById("responsive_div");

  if (responsiveDiv.classList.contains("hidden")) {
    responsiveDiv.classList.remove("hidden");
  } else {
    responsiveDiv.classList.add("hidden");
  }
}
