'use strict';

(function () {
  var $$ = function $$(id) {
    return document.getElementById(id);
  };

  function load() {
    var reg = /^[\u4E00-\u9FFF]+|[a-zA-A]+$/;
    var demo = $$('demo');

    //reg = /[0-9]/;
    reg = /^([a-zA-Z]*[0-9]+){6,18}|[0-9]{6,18}$/;

    $('body li').on({
      click: change,
      change: change,
      keydown: change,
      keyup: change

    }, 'input');

    function change() {
      var msg = '';
      var length = 0;
      var val = $(this).val();
      var $next = $(this).next();
      var style = '';
      var reg = $(this).data('reg');
      reg = new RegExp(reg, 'ig');
      $next.html('');
      if (!this.value) {
        return;
      }
      length = val.length;
      if (reg.test(this.value)) {
        msg = '通过';
        style = 'success';
      } else {
        msg = '不通过';
        style = 'error';
      }
      $next.removeClass('success error').addClass(style);
      $next.html(msg + '   ' + length);
    }

    function getReg() {
      console.clear();
      var reg = new RegExp($(this).val(), 'g');
      var sStatus = true;
      var eStatus = false;
      var arrSuccess = ['a111111', '1a111111', '111111', '25544642145'];
      var arrError = ['1', 'a', '1a', 'aaaaa', 'aaaaaa', 'asdfasdfasdfadfsafadfs'];
      $.each(arrSuccess, function (index, item) {

        console.log(reg, item, reg.test(item));
        if (!reg.test(item)) {
          sStatus = false;
        }
      });
      console.warn('------------');
      $.each(arrError, function (index, item) {

        console.log(reg, item, reg.test(item));
        if (reg.test(item)) {
          sStatus = true;
        }
      });
      console.log(sStatus, eStatus);
      if (sStatus && !eStatus) {
        alert(1);
      }
    }
    $('#reg').on({
      change: getReg,
      keyup: getReg
    });
  }
  window.onload = load;
})(window);