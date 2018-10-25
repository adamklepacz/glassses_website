/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

(function () {
  'use strict';

  const prevButton = $('#cta__prev');
  const nextButton = $('#cta__next');
  const peopleSection = $('#people');
  const glassesSection = $('#glasses');

  nextButton.on('click', function () {
    peopleSection.fadeOut('slow').addClass('d-none').removeClass('d-flex');
    glassesSection.fadeIn('slow').removeClass('d-none').addClass('d-flex');
    nextButton.addClass('d-none');
    prevButton.removeClass('d-none');
  });

  prevButton.on('click', function () {
    glassesSection.fadeOut('slow').addClass('d-none').removeClass('d-flex');
    peopleSection.fadeIn('slow').removeClass('d-none').addClass('d-flex');
    nextButton.removeClass('d-none');
    prevButton.addClass('d-none');
  });
}());
