window.onload = () => {

  const title = document.getElementById("title");
  const mainText = document.getElementById("main-text");

  title.style.opacity = "0";
  title.style.transform = "translateY(-20px)";

  mainText.style.opacity = "0";

  setTimeout(() => {
    title.style.transition = "all 1s ease";
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
  }, 300);

  setTimeout(() => {
    mainText.style.transition = "opacity 1.5s ease";
    mainText.style.opacity = "1";
  }, 800);

};

function showSurprise() {

  const surprise = document.getElementById("surprise");

  surprise.classList.remove("hidden");

  surprise.style.opacity = "0";
  surprise.style.transform = "translateY(15px)";
  surprise.style.transition = "all 1s ease";

  setTimeout(() => {
    surprise.style.opacity = "1";
    surprise.style.transform = "translateY(0)";
  }, 100);
}
