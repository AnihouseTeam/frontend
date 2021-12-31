import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createMetaManager } from 'vue-meta'
createApp(App).use(router).use(createMetaManager()).mount('#app')
import jQuery from "jquery";
import $ from "jquery";

/* eslint no-useless-escape: "off", curly: "error" */
!function () {
  var e, n;
  jQuery.uaMatch = function (e) {
    e = e.toLowerCase();
    e = /(chrome)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
    return {browser: e[1] || "", version: e[2] || "0"}
  }, n = {}, (e = jQuery.uaMatch(navigator.userAgent)).browser && (n[e.browser] = !0, n.version = e.version), n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0), jQuery.browser = n, jQuery.sub = function () {
    function r(e, n) {
      return new r.fn.init(e, n)
    }

    jQuery.extend(!0, r, this), r.superclass = this, r.fn = r.prototype = this(), (r.fn.constructor = r).sub = this.sub, r.fn.init = function (e, n) {
      return n && n instanceof jQuery && !(n instanceof r) && (n = r(n)), jQuery.fn.init.call(this, e, n, t)
    }, r.fn.init.prototype = r.fn;
    var t = r(document);
    return r
  }
}(), $(document).ready(function () {
  $.each($.browser, function (e) {
    return $("body").addClass("browser-" + e), !1
  });
  var e = navigator.appVersion.toLowerCase().match(new RegExp(["iphone", "ipad", "windows", "mac", "linux"].join("|")));
  e && $("body").addClass("os-" +e[0])
});

function headerMenuMobile() {
  var $headerMenu = $('.header-menu-md-wrapper');
  var $header = $('.header-container');

  $('.header-menu-opener').on('click', function(ev) {
    var $target = $(ev.currentTarget);
    $target.toggleClass('open');
    $header.toggleClass('header-filled');
    $headerMenu.toggleClass('active');
  });

  function closeMenu () {
    $('.header-menu-opener').removeClass('open');
    $headerMenu.removeClass('active');
    $header.removeClass('header-filled');
  }

  $(document).on('click', function (ev) {
    var $clickedEl = $(ev.target);

    var isHamburger = $clickedEl.hasClass('header-menu-opener');
    var isHamburgerParent = $clickedEl.closest('.header-menu-opener').length;

    if(!(isHamburger || isHamburgerParent)){closeMenu()}
  });

  $(window).on('resize', closeMenu);
}

headerMenuMobile();

function searchOpener() {

  $('.header-right-wrap').on('click', '.header-search-opener', function(ev) {
    var $target = $(ev.currentTarget);
    $target.toggleClass('open');
    $('.app-search').toggleClass('active');
    $('html, body').css('overflowY', 'hidden');
  });

  function closeSearch () {
    $('.header-search-opener').removeClass('open');
    $('.app-search').removeClass('active');
    $('html, body').css('overflowY', 'auto');
  }

  $('.app-header').on('click', ' .search-close, .search-overlay', function() {
    closeSearch()
  });
}

searchOpener();

console.log("%c" + "AniHouse", "color: #ffffff; font-size: 72px; font-weight: 800; font-family: Golos;");
