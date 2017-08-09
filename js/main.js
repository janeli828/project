const achives = document.querySelector(".quotes--grid");
    achives.onclick = function () {
       if (this.className == "quotes--grid")
         this.className = "quotes--singular";
       else
         this.className = "quotes--grid";
    }