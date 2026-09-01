/* =========================
   YESCART URL CONFIGURATION
========================= */

const YESCART_ROUTES = {
  home: "/",
  buy: "/buy",
  sell: "/sell",
  oldItems: "/old-items",
  delivery: "/delivery",
  jobs: "/jobs",
  about: "/about",
  contact: "/contact",
  login: "/login",
  register: "/register",
  invest: "/invest"
};


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
  const menu = document.getElementById("navMenu");

  if (menu) {
    menu.classList.toggle("active");
  }
}


/* Close mobile menu after clicking a link */

document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("navMenu");

  if (!menu) return;

  const links = menu.querySelectorAll("a");

  links.forEach(function (link) {

    link.addEventListener("click", function () {
      menu.classList.remove("active");
    });

  });

});


/* =========================
   CENTRAL URL SYSTEM
========================= */

function applyRoutes() {

  const routeMap = {

    "/": YESCART_ROUTES.home,

    "/buy": YESCART_ROUTES.buy,

    "/sell": YESCART_ROUTES.sell,

    "/old-items": YESCART_ROUTES.oldItems,

    "/delivery": YESCART_ROUTES.delivery,

    "/jobs": YESCART_ROUTES.jobs,

    "/about": YESCART_ROUTES.about,

    "/contact": YESCART_ROUTES.contact,

    "/login": YESCART_ROUTES.login,

    "/register": YESCART_ROUTES.register,

    "/invest": YESCART_ROUTES.invest

  };

  document.querySelectorAll("[data-route]").forEach(function (element) {

    const route = element.getAttribute("data-route");

    if (routeMap[route]) {
      element.href = routeMap[route];
    }

  });

}


/* Initialize */

document.addEventListener("DOMContentLoaded", applyRoutes);
