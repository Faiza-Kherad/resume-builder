import $ from 'jquery';
import 'jquery.repeater';

$(document).ready(function() {
  $('.repeater').repeater({
    initEmpty: false,
    defaultValues: {
      'text-input': ''
    },
    show: function(this: HTMLElement) {
      $(this).slideDown();
    },
    hide: function(this: HTMLElement, deleteElement: () => void) {
      $(this).slideUp(deleteElement);
      setTimeout(() => {
        generateCV();
      }, 500);
    },
    isFirstItemUndeletable: true
  });
});

// Assuming generateCV is a function defined elsewhere in your codebase.
declare function generateCV(): void;
