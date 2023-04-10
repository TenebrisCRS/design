$(function () {
  $('.reviews__list').slick({
    arrows: true,
    adaptiveHeight: true,
    fade: true,
    infinite: true,
    dots: true,
  })

  $('.questions__answer').hide();
  $('.questions__question').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  })  


  var input = document.querySelector("#popup-window__input-tel");
  window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
      fetch("https://ipapi.co/json")
        .then(function(res) { return res.json(); })
        .then(function(data) { callback(data.country_code); })
        .catch(function() { callback("us"); });
    },
    separateDialCode: true,
  });

  Fancybox.show([{ src: "#popup-window", type: "inline" }]);
})