(function($) {
  'use strict';

  if ($(".select2-single").length) {
    $(".select2-single").select2({
      placeholder: 'Placeholder',
    });
  }
  if ($(".select2-multiple").length) {
    $(".select2-multiple").select2();
  }
})(jQuery);