const menuMobileBtn = document.getElementById("btn_mobileMenu");
const menuMobileBox = document.getElementById("mobileMenu");
const menuMobileBg = document.getElementById("bg_mobileMenu");

menuMobileBtn.addEventListener("click", () => {
  menuMobileBox.style.transform = "translateX(0%)";
  menuMobileBox.style.opacity = "1";

  menuMobileBg.style.transform = "translateX(0%)";
  setTimeout(() => {
    menuMobileBg.style.opacity = "1";
  }, 200);
});

menuMobileBg.addEventListener("click", () => {
  menuMobileBg.style.opacity = "0";
  setTimeout(() => {
    menuMobileBg.style.transform = "translateX(-100%)";
  }, 300);

  menuMobileBox.style.transform = "translateX(-100%)";
  menuMobileBox.style.opacity = "0";
});
