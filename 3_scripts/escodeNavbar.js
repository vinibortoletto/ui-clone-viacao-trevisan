// TODO: esconder navbarTOP onscrolldown
// TODO: dominuir tamanho navbarMenu/logo onscrolldown

const navbarTopo = document.getElementById("navbar_topo");
const navbarMenu = document.getElementById("navbar_menu");
const navbar = document.getElementById("navbar");
const navbarLogo = document.getElementById("navbar_logo");

const navbarLinksTexto = document.querySelectorAll(".desktop li");
const navbarLinks = document.querySelectorAll(".desktop .link");

const banner = document.querySelector(".banner");
const bannerParallax = document.querySelector(".parallax");

let posicaoInicial = $(window).scrollTop();

$(window).scroll(() => {
  let posicaoAtual = $(window).scrollTop();
  let larguraTela = $(window).width();

  if (posicaoInicial < posicaoAtual) {
    navbar.style.transform = "translateY(-44.44px)";
    navbarLogo.style.width = "10rem";

    navbarLinks.forEach(link => {
      link.style.height = "4rem";
    });
    navbarLinksTexto.forEach(texto => {
      texto.style.height = "4rem";
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
  }
  posicaoInicial = posicaoAtual;
});

// window.addEventListener("scroll", function() {
//   let posicaoAtual = window.pageYOffset;

//   if (posicaoInicial > posicaoAtual) {
//     document.getElementById("navbar").style.display = "flex";
//     document.getElementById("navbar").style.opacity = "1";
//   } else {
//     navbarTopo.style.opacity = "0";
//     document.getElementById("navbar").style.opacity = "0";

//   }
//   prevScrollpos = currentScrollPos;
// });

// toggleNavbar = () => {
//   let prevScrollpos = window.pageYOffset;

//   window.addEventListener("scroll", function() {
//     let currentScrollPos = window.pageYOffset;

//     if (menuActive === true) {
//       return;
//     }

//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("navbar").style.display = "flex";
//       document.getElementById("navbar").style.opacity = "1";
//     } else {
//       document.getElementById("navbar").style.opacity = "0";

//       setTimeout(() => {
//         document.getElementById("navbar").style.display = "none";
//       }, 500);
//     }
//     prevScrollpos = currentScrollPos;
//   });
// };
