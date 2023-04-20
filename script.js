/*jQuery(document).ready(function ($) {
  
  var $form_modal = $('.user-modal'),
    $form_login = $form_modal.find('#login'),
    $form_signup = $form_modal.find('#signup'),
    $form_forgot_password = $form_modal.find('#reset-password'),
    $form_modal_tab = $('.switcher'),
    $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
    $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
    $forgot_password_link = $form_login.find('.form-bottom-message a'),
    $back_to_login_link = $form_forgot_password.find('.form-bottom-message a'),
    $main_nav = $('.main-nav');

  //open modal
  $main_nav.on('click', function (event) {

    if ($(event.target).is($main_nav)) {
      // on mobile open the submenu
      $(this).children('ul').toggleClass('is-visible');
    } else {
      // on mobile close submenu
      $main_nav.children('ul').removeClass('is-visible');
      //show modal layer
      $form_modal.addClass('is-visible');
      //show the selected form
      ($(event.target).is('.signup')) ? signup_selected() : login_selected();
    }

  });

  //close modal
  $('.user-modal').on('click', function (event) {
    if ($(event.target).is($form_modal) || $(event.target).is('.close-form')) {
      $form_modal.removeClass('is-visible');
    }
  });
  //close modal when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $form_modal.removeClass('is-visible');
    }
  });

  //switch from a tab to another
  $form_modal_tab.on('click', function (event) {
    event.preventDefault();
    ($(event.target).is($tab_login)) ? login_selected() : signup_selected();
  });

  //hide or show password
  $('.hide-password').on('click', function () {
    var $this = $(this),
      $password_field = $this.prev('input');

    ('password' == $password_field.attr('type')) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    ('Show' == $this.text()) ? $this.text('Hide') : $this.text('Show');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

  //show forgot-password form 
  $forgot_password_link.on('click', function (event) {
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on('click', function (event) {
    event.preventDefault();
    login_selected();
  });

  function login_selected() {
    $form_login.addClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.addClass('selected');
    $tab_signup.removeClass('selected');
  }

  function signup_selected() {
    $form_login.removeClass('is-selected');
    $form_signup.addClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.removeClass('selected');
    $tab_signup.addClass('selected');
  }

  function forgot_password_selected() {
    $form_login.removeClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.addClass('is-selected');
  }



  //IE9 placeholder fallback
  //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
  if (!Modernizr.input.placeholder) {
    $('[placeholder]').focus(function () {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    }).blur(function () {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function () {
      $(this).find('[placeholder]').each(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });
  }

});

*/
window.addEventListener('DOMContentLoaded', function() {

  var form_modal = document.querySelector('.user-modal'),
    form_login = form_modal.querySelector('#login'),
    form_signup = form_modal.querySelector('#signup'),
    form_forgot_password = form_modal.querySelector('#reset-password'),
    form_modal_tab = document.querySelector('.switcher'),
    tab_login = form_modal_tab.children[0].querySelector('a'),
    tab_signup = form_modal_tab.children[1].querySelector('a'),
    forgot_password_link = form_login.querySelector('.form-bottom-message a'),
    back_to_login_link = form_forgot_password.querySelector('.form-bottom-message a'),
    main_nav = document.querySelector('.main-nav');

  //open modal
  main_nav.addEventListener('click', function (event) {

    if (event.target === main_nav) {
      // on mobile open the submenu
      this.children[0].classList.toggle('is-visible');
    } else {
      // on mobile close submenu
      main_nav.children[0].classList.remove('is-visible');
      //show modal layer
      form_modal.classList.add('is-visible');
      //show the selected form
      (event.target.classList.contains('signup')) ? signup_selected() : login_selected();
    }

  });

  //close modal
  document.querySelector('.user-modal').addEventListener('click', function (event) {
    if (event.target === form_modal || event.target.classList.contains('close-form')) {
      form_modal.classList.remove('is-visible');
    }
  });
  
  //close modal when clicking the esc keyboard button
  document.addEventListener('keyup', function (event) {
    if (event.which === 27) {
      form_modal.classList.remove('is-visible');
    }
  });

  //switch from a tab to another
  form_modal_tab.addEventListener('click', function (event) {
    event.preventDefault();
    (event.target === tab_login) ? login_selected() : signup_selected();
  });

  //hide or show password
  document.querySelector('.hide-password').addEventListener('click', function () {
    var password_field = this.previousElementSibling;

    if (password_field.type === 'password') {
      password_field.type = 'text';
    } else {
      password_field.type = 'password';
    }

    (this.textContent === 'Show') ? this.textContent = 'Hide' : this.textContent = 'Show';
    //focus and move cursor to the end of input field
    password_field.selectionStart = password_field.selectionEnd = password_field.value.length;
    password_field.focus();
  });

  //show forgot-password form 
  forgot_password_link.addEventListener('click', function (event) {
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  back_to_login_link.addEventListener('click', function (event) {
    event.preventDefault();
    login_selected();
  });

  function login_selected() {
    form_login.classList.add('is-selected');
    form_signup.classList.remove('is-selected');
    form_forgot_password.classList.remove('is-selected');
    tab_login.classList.add('selected');
    tab_signup.classList.remove('selected');
  }

  function signup_selected() {
    form_login.classList.remove('is-selected');
    form_signup.classList.add('is-selected');
    form_forgot_password.classList.remove('is-selected');
    tab_login.classList.remove('selected');
    tab_signup.classList.add('selected');
  }

  function forgot_password_selected() {
    form_login.classList.remove('is-selected');
    form_signup.classList.remove('is-selected');
    form_forgot_password.classList.add('is-selected');
  }
})
