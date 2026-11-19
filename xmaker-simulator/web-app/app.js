(function () {
  "use strict";

  var frame = document.getElementById("xmaker-frame");
  var status = document.getElementById("load-status");
  var reload = document.getElementById("reload");

  if (frame && status) {
    frame.addEventListener("load", function () {
      status.textContent = "Pagina originale caricata · host PXT non collegato";
      status.classList.add("loaded");
    });
    frame.addEventListener("error", function () {
      status.textContent = "Errore nel caricamento · controlla il percorso ../simulator.html";
    });
  }

  if (reload && frame) {
    reload.addEventListener("click", function () {
      status.textContent = "Ricaricamento…";
      status.classList.remove("loaded");
      frame.src = "../simulator.html?reload=" + Date.now();
    });
  }
}());
