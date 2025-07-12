 function MenuShow() {
        const responsiveDiv = document.getElementById("responsive_div");
        const expertise = document.getElementById("expertise");
        const nav = document.getElementById("nav");

        if (responsiveDiv.classList.contains("hidden")) {
          responsiveDiv.classList.remove("hidden");
          expertise.classList.remove("hidden");
          responsiveDiv.appendChild(expertise); // optional: show in menu
        } else {
          responsiveDiv.classList.add("hidden");
          expertise.classList.add("hidden");
          nav.appendChild(expertise); // return to nav
        }
      }