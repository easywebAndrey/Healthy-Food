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

  //popup organic
  // $('.organic-box').magnificPopup({
  //   delegate: 'img',
  //   type: 'image'
  // });

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



});