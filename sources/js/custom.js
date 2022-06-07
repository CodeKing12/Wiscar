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
  // dashboard.style.opacity = 0;
  dashboard.style.transition = "opacity 0.3s ease";
  dashboard.style.opacity = 1;
  // document.getElementById("dash-menu").classList.remove("remove-dash");
} 

function closeDashMenu() {
  dashboard.style.opacity = "0";
  // setTimeout(() => dashboard.style.opacity = "unset", 200);
  // dashboard.style.opacity = "unset"
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

const moreNewsSwiper = new Swiper('.more-news-swiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 'auto',
  initialSlide: 0,
  // navigation: {
  //   prevEl: '.prev-news',
  //   nextEl: '.next-news',
  // }
  // effect: 'fade'
});

const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

if (tabs !== null) {
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
}


function getMinimum(elClass) {
  const date = new Date();
  let currentMonth;
  let minimum;
  if (elClass == 'year') {
    minimum = 2022;
  } else if (elClass == 'month') {
    currentMonth = date.getMonth() + 1
    minimum = currentMonth;
  }
  return minimum
}

function increment(elClass) {
  minimum = getMinimum(elClass)
  element = document.querySelector(`.${elClass}`);
  value = parseInt(element.value);
  if (isNaN(value) || value < minimum) {
    value = minimum;
  } else {
    value += 1;
  }
  element.value = value;
}

function decrement(elClass) {
  minimum = getMinimum(elClass)
  element = document.querySelector(`.${elClass}`);
  value = parseInt(element.value);
  if (isNaN(value) || value <= minimum) {
    value = minimum;
  } else {
    value -= 1;
  }
  element.value = value;
}

 function cc_format(value) {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  var matches = v.match(/\d{4,20}/g);
  var match = matches && matches[0] || ''
  var parts = []
  for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
  }
  if (parts.length) {
      return parts.join('  -  ')
  } else {
      return value
  }
}

onload = function() {
  document.getElementById('cardNumber').oninput = function() {
      this.value = cc_format(this.value)
  }
}

function toggleButton(className, element) {
  let all_btns = document.getElementsByClassName(className);
  for (let i=0; i < all_btns.length; i++) {
    all_btns[i].classList.remove(className);
  }
  element.classList.add(className)
}

function openFiles(fileID) {
  input = document.getElementById(fileID);
  input.click();
}

window.addEventListener('resize', function(event) {
  if (screen.width >= 1200) {
    console.log("Hey")
    document.querySelector(".main-page").style.maxWidth = screen.width - 250 + "px";
  } else {
    document.querySelector(".main-page").style.maxWidth = "100%";
  }
});