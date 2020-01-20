const menuMobile = document.getElementById("mobileMenu");

const navbarTopo = document.getElementById("navbar_topo");
const navbar = document.getElementById("navbar");
const navbarLogo = document.getElementById("navbar_logo");

const navbarLinksTexto = document.querySelectorAll(".desktop .texto");
const navbarLinks = document.querySelectorAll(".desktop .link");
const dropdownBox = document.querySelectorAll(".dropdown_box");

const banner = document.querySelector(".banner");
const bannerParallax = document.querySelector(".parallax");

let posicaoInicial = $(window).scrollTop();

$(window).scroll(() => {
  let menuMobileOpen = false;
  menuMobile.classList.contains("menuMobile_open")
    ? (menuMobileOpen = true)
    : null;

  let posicaoAtual = $(window).scrollTop();
  let larguraTela = $(window).width();

  if (!menuMobileOpen) {
    if (posicaoInicial < posicaoAtual) {
      navbar.style.transform = "translateY(-44.44px)";
      navbarLogo.style.width = "10rem";

      navbarLinks.forEach(link => {
        link.style.height = "4rem";
      });
      navbarLinksTexto.forEach(texto => {
        texto.style.height = "4rem";
      });

      dropdownBox.forEach(dropdown => {
        dropdown.style.height = "4rem";
      });
    } else {
      navbar.style.transform = "translateY(0%)";

      if (larguraTela < 600) {
        navbarLogo.style.width = "12rem";
      } else if (larguraTela < 1200) {
        navbarLogo.style.width = "15rem";
      } else if (larguraTela > 1200) {
        navbarLogo.style.width = "17rem";
      }

      navbarLinks.forEach(link => {
        link.style.height = "7rem";
      });
      navbarLinksTexto.forEach(texto => {
        texto.style.height = "7rem";
      });
      dropdownBox.forEach(dropdown => {
        dropdown.style.height = "7rem";
      });
    }
  }

  posicaoInicial = posicaoAtual;
});

const menuBtn = document.getElementById("btn_mobileMenu");

menuBtn.addEventListener("click", () => {
  if (menuMobile.classList.contains("menuMobile_open")) {
    navbar.style.transform = "translateY(0%)";

    if (larguraTela < 600) {
      navbarLogo.style.width = "12rem";
    } else if (larguraTela < 1200) {
      navbarLogo.style.width = "15rem";
    } else if (larguraTela > 1200) {
      navbarLogo.style.width = "17rem";
    }

    navbarLinks.forEach(link => {
      link.style.height = "7rem";
    });
    navbarLinksTexto.forEach(texto => {
      texto.style.height = "7rem";
    });
    dropdownBox.forEach(dropdown => {
      dropdown.style.height = "7rem";
    });
  }
});
