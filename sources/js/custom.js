function openMenu() {
    document.getElementById("menu").style.width = "300px";
    nav.classList.add("nav-active");
    setTimeout(function(){document.querySelector(".mobile-nav-items").classList.remove("disappear");}, 400);
    document.querySelector(".menu-icon").setAttribute("onclick", "closeMenu()");
    document.querySelector("body").style.overflow = "hidden";
}

function closeMenu() {
    setTimeout(function(){document.getElementById("menu").style.width = "0";}, 100);
    // document.getElementById("menu").style.width = "0";
    document.querySelector(".mobile-nav-items").classList.add("disappear");
    nav.classList.remove("nav-active");
    document.querySelector(".menu-icon").setAttribute("onclick", "openMenu()");
    document.querySelector("body").style.overflow = "scroll";
}

dashboard = document.getElementById("dash-menu")

function openDashMenu() {
  dashboard.classList.add("show-dash");
  dashboard.style.opacity = 1
  dashboard.style.transition = "opacity 0.3s ease"
  // document.getElementById("dash-menu").classList.remove("remove-dash");
} 

function closeDashMenu() {
  dashboard.style.opacity = "unset"
  setTimeout(() => dashboard.classList.remove("show-dash"), 200);
  // document.getElementById("dash-menu").classList.add("remove-dash");
}

const swiper = new Swiper('.news-swiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 'auto',
    initialSlide: 0,
    rewind: true,
    navigation: {
      prevEl: '.prev-news',
      nextEl: '.next-news',
    }
    // effect: 'fade'
});

  
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}