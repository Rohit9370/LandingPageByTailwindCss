function MenuShow() {
  let nav = document.getElementById("nav");
  let reponsive_div = document.getElementById("responsive_div");
  let electron = document.getElementById("expertise");

  if (reponsive_div.classList.contains("hidden")) {
    console.log("now responsive div is activated");
    reponsive_div.append(electron);
    reponsive_div.classList.remove("hidden");
    electron.classList.remove("hidden")
  } else {
    console.log("now responsive div is deactivated");
    reponsive_div.classList.add("hidden");
    electron.classList.add("hidden");
    nav.appendChild(electron)
  }
}
