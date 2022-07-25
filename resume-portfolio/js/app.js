$(document).ready(function () {
  $("#profile_ripple").ripples({
    resolution: 512,
    dropRadius: 10,
  });

  const bars = document.querySelectorAll(".progress_bar");
  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  //counter
  const counters = document.querySelectorAll("counter");
  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let target = +counter.dataset.count;
      let countIt = function () {
        let displayedCount = +counter.innerText;
        if (displayedCount < target) {
          counter.innerText = displayedCount + 1;
          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      };
      countIt();
    });
  }
  runCounter();

  //img filter
  var $wrapper = $(".portfolio_wrapper");

  //Initialize Isotope
  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  //get
  let links = document.querySelectorAll(".tabs a");
  links.forEach((link) => {
    let selector = link.dataset.filter;
    link.addEventListener("click", function (e) {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });

      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.targrt.classList.add("active");
    });
  });

  //magnify popup
  $(".magnify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enable: true,
    },
  });

  //slider
  // $(".slider").slick({
  //   arrows: false,
  //   autoplay: true,
  // });
});
