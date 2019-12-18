$(document).ready(function () {

  $('.organic-wrapper .tab, .naturix-tab .tabs').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.organic-tab__content, .naturix-tab__content').find('.tab-item, .tab-items').removeClass('active-tab').hide();
    $('.organic-wrapper .organic-tabs, .naturix-tab .naturix-tabs').find('.tab, .tabs').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // Выравнивание блоков по высоте
  function heightBlock(class_block) {
    var max_col_height = 0;
    $(class_block).each(function () {
      $(this).removeAttr('style');
      if ($(this).height() > max_col_height) {
        max_col_height = $(this).height();
      }
    });
    $(class_block).height(max_col_height);
  };
  //Выравнивание по высоте блока отзыва
  $(window).on("load", function () {

    heightBlock('.organic-box .organic-box__img'); //какой блок выравниваем
    heightBlock('.naturix-box .naturix-box__img');
    heightBlock('.fresh-box__cards .fresh-box__img'); //какой блок выравниваем

    if (document.documentElement.clientWidth > 991) { // до какого розшырения
      //Выравнивание по высоте блока на странице оплат
      heightBlock('.organic-box .organic-box__img');
    }
  });

  //organic slider
  $('.tab-item').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
    ]
  });


  //timer
  var timer;
  var compareDate = new Date();
  compareDate.setDate(compareDate.getDate() + 8); //just for this demo today + 7 days

  timer = setInterval(function () {
    timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      // Timer done
      clearInterval(timer);

    } else {

      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      $(".days").text(days);
      $(".hours").text(hours);
      $(".minutes").text(minutes);
      $(".seconds").text(seconds);
    }
  }

  //sale-fruit
  $('.sale-fruit__wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 522,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, ]
  });


  // shop-block__slider
  $('.shopAct-block__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<div class="prev">→</div>',
    nextArrow: '<div class="next">←</div>',
  });

});