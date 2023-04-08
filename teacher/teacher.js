const English = document.getElementById("English");
const Chemsitry = document.getElementById("Chemsitry");
const Arabic = document.getElementById("Arabic");
function hideAll() {
  Arabic.style = "display:none;";
  English.style = "display:none;";
  Chemsitry.style = "display:none;";
}
function showAll() {
  Arabic.style = "";
  English.style = "";
  Chemsitry.style = "";
}
function filterObject(c) {
  switch (c) {
    case "all":
      showAll();

      break;
    case "English":
      hideAll();
      English.style = "";

      break;
    case "Arabic":
      hideAll();
      Arabic.style = "";

      break;
    case "Chemsitry":
      hideAll();
      Chemsitry.style = "";

      break;
    default:
      showAll();

      break;
  }
}
