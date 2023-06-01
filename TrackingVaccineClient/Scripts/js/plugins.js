/* Template Name: COV-19 - Coronavirus (COVID-19) Social Awareness and Medical Prevention Template
   Author: Acavo
   Version: 1.0.0
   Created: Aug 2020
   File Description: Plugins js file of the template
*/


/*============================================*/
//
//         01 -- Slick        
//         02 -- scrollspy      
//         03 -- Scrollup        
//         04 -- Jquery easing
//         05 -- Magnific popup
//         06 -- datepicker          
//         07 -- Elevatezoom         
//         08 -- Datatable        
//           
/*===========================================*/

/*============================================

                 01 -- Slick

==============================================*/
(function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    e = function () {
        function e(e, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(e),
                appendDots: i(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
        var t = 0;
        return e
    }(), e.prototype.activateADA = function () {
        var i = this;
        i.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this,
            o = t.getNavTarget();
        null !== o && "object" == typeof o && o.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this,
            t = {};
        e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t, o = this;
        if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var s in e) {
                if (i < e[s]) {
                    i = t;
                    break
                }
                t = e[s]
            }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        var e = this;
        e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (t) {
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function (t) {
            i(this);
            e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay())
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        var i = this;
        return i.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (i.options.infinite === !0)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (i.options.centerMode === !0) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        var e = this;
        return e.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o, s, n = this;
        return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
            var r, l, d;
            if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1
        }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        var t = this;
        t.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            if (i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), s !== -1) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({
                    "aria-describedby": n
                })
            }
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
            tabindex: "0"
        }) : e.$slides.eq(s).removeAttr("tabindex");
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    n = document.createElement("img");
                n.onload = function () {
                    e.animate({
                        opacity: 0
                    }, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, n.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, n.src = t
            })
        }
        var t, o, s, n, r = this;
        if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad)
            for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
        e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        var i = this;
        i.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
            var o = i(t.$slides.get(t.currentSlide));
            o.attr("tabindex", 0).focus()
        }
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        var i = this;
        i.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                } s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i
                })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this,
            s = {};
        o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                } l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this,
            e = document.body.style;
        i.positionProp = i.options.vertical === !0 ? "top" : "left",
            "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
            var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
            a.postSlide(s)
        })) : a.postSlide(s), void a.animateHeight()) : void (t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function () {
            a.postSlide(s)
        }) : a.postSlide(s)))
    }, e.prototype.startLoad = function () {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void (t.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i, e = this;
        i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
        return o
    }
});


/*============================================

                02 -- scrollspy  

==============================================*/
! function ($, window, document, undefined) {
    $.fn.extend({
        scrollspy: function (options) {
            var defaults = {
                namespace: "scrollspy",
                activeClass: "active",
                animate: !1,
                duration: 1e3,
                offset: 0,
                container: window,
                replaceState: !1
            };
            options = $.extend({}, defaults, options);
            var add = function (ex1, ex2) {
                return parseInt(ex1, 10) + parseInt(ex2, 10)
            },
                findElements = function (links) {
                    for (var elements = [], i = 0; i < links.length; i++) {
                        var link = links[i],
                            hash = $(link).attr("href"),
                            element = $(hash);
                        if (element.length > 0) {
                            var top = Math.floor(element.offset().top),
                                bottom = top + Math.floor(element.outerHeight());
                            elements.push({
                                element: element,
                                hash: hash,
                                top: top,
                                bottom: bottom
                            })
                        }
                    }
                    return elements
                },
                findLink = function (links, hash) {
                    for (var i = 0; i < links.length; i++) {
                        var link = $(links[i]);
                        if (link.attr("href") === hash) return link
                    }
                },
                resetClasses = function (links) {
                    for (var i = 0; i < links.length; i++) $(links[i]).parent().removeClass(options.activeClass)
                },
                scrollArea = "";
            return this.each(function () {
                for (var element = this, container = $(options.container), links = $(element).find("a"), i = 0; i < links.length; i++) {
                    var link = links[i];
                    $(link).on("click", function (e) {
                        var target = $(this).attr("href"),
                            $target = $(target);
                        if ($target.length > 0) {
                            var top = add($target.offset().top, options.offset);
                            options.animate ? $("html, body").animate({
                                scrollTop: top
                            }, options.duration) : window.scrollTo(0, top), e.preventDefault()
                        }
                    })
                }
                resetClasses(links);
                var elements = findElements(links),
                    trackChanged = function () {
                        for (var link, position = {
                            top: add($(this).scrollTop(), Math.abs(options.offset)),
                            left: $(this).scrollLeft()
                        }, i = 0; i < elements.length; i++) {
                            var current = elements[i];
                            if (position.top >= current.top && position.top < current.bottom) {
                                var hash = current.hash;
                                if (link = findLink(links, hash)) {
                                    options.onChange && scrollArea !== hash && (options.onChange(current.element, $(element), position), scrollArea = hash), options.replaceState && history.replaceState({}, "", "/" + hash), resetClasses(links), link.parent().addClass(options.activeClass);
                                    break
                                }
                            }
                        } !link && "exit" !== scrollArea && options.onExit && (options.onExit($(element), position), resetClasses(links), scrollArea = "exit", options.replaceState && history.replaceState({}, "", "/"))
                    };
                container.bind("scroll." + options.namespace, function () {
                    trackChanged()
                }), $(document).ready(function (e) {
                    trackChanged()
                })
            })
        }
    })
}(jQuery, window, document);

/*============================================

                03 -- Scrollup

==============================================*/

/*
 * 
 * scrollup 
 * Url: http://markgoodyear.com/labs/scrollup/
 * v2.4.1
 * 
 */
! function (l, o, e) {
    "use strict";
    l.fn.scrollUp = function (o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function (r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
            f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {
            id: p.scrollName + "-active"
        }).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case "fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case "slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
            o.preventDefault(), l("html, body").animate({
                scrollTop: a
            }, p.scrollSpeed, p.easingType)
        })
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, l.fn.scrollUp.destroy = function (r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);



/*============================================

                04 -- Jquery easing

==============================================*/
! function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return n(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
}(function (n) {
    function e(n) {
        var e = 7.5625,
            t = 2.75;
        return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
    }
    void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
    var t = Math.pow,
        u = Math.sqrt,
        r = Math.sin,
        i = Math.cos,
        a = Math.PI,
        c = 1.70158,
        o = 1.525 * c,
        s = 2 * a / 3,
        f = 2 * a / 4.5;
    n.extend(n.easing, {
        def: "easeOutQuad",
        swing: function (e) {
            return n.easing[n.easing.def](e)
        },
        easeInQuad: function (n) {
            return n * n
        },
        easeOutQuad: function (n) {
            return 1 - (1 - n) * (1 - n)
        },
        easeInOutQuad: function (n) {
            return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2
        },
        easeInCubic: function (n) {
            return n * n * n
        },
        easeOutCubic: function (n) {
            return 1 - t(1 - n, 3)
        },
        easeInOutCubic: function (n) {
            return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2
        },
        easeInQuart: function (n) {
            return n * n * n * n
        },
        easeOutQuart: function (n) {
            return 1 - t(1 - n, 4)
        },
        easeInOutQuart: function (n) {
            return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2
        },
        easeInQuint: function (n) {
            return n * n * n * n * n
        },
        easeOutQuint: function (n) {
            return 1 - t(1 - n, 5)
        },
        easeInOutQuint: function (n) {
            return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2
        },
        easeInSine: function (n) {
            return 1 - i(n * a / 2)
        },
        easeOutSine: function (n) {
            return r(n * a / 2)
        },
        easeInOutSine: function (n) {
            return -(i(a * n) - 1) / 2
        },
        easeInExpo: function (n) {
            return 0 === n ? 0 : t(2, 10 * n - 10)
        },
        easeOutExpo: function (n) {
            return 1 === n ? 1 : 1 - t(2, -10 * n)
        },
        easeInOutExpo: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2
        },
        easeInCirc: function (n) {
            return 1 - u(1 - t(n, 2))
        },
        easeOutCirc: function (n) {
            return u(1 - t(n - 1, 2))
        },
        easeInOutCirc: function (n) {
            return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2
        },
        easeInElastic: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
        },
        easeOutElastic: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1
        },
        easeInOutElastic: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
        },
        easeInBack: function (n) {
            return (c + 1) * n * n * n - c * n * n
        },
        easeOutBack: function (n) {
            return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2)
        },
        easeInOutBack: function (n) {
            return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
        },
        easeInBounce: function (n) {
            return 1 - e(1 - n)
        },
        easeOutBounce: e,
        easeInOutBounce: function (n) {
            return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
        }
    })
});

/*============================================

               05 -- Magnific popup

==============================================*/

/*! Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
    var t, n, i, o, r, a, s, l = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        u = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        m = "Change",
        g = "mfp",
        h = "." + g,
        v = "mfp-ready",
        C = "mfp-removing",
        y = "mfp-prevent-close",
        w = function () { },
        b = !!window.jQuery,
        I = e(window),
        x = function (e, n) {
            t.ev.on(g + e + h, n)
        },
        k = function (t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function (n, i) {
            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function (n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        _ = function () {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        S = function () {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function () {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function (n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function () {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + h, function (e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + h, function () {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = I.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
        },
        close: function () {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function (e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                el: e(o)
            } : (i = o.type, o = {
                data: o,
                src: o.src
            }), o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function (e, n) {
            var i = function (i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function (n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (a > I.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function (n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function (t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function (n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var P, O, z, M = "inline",
        B = function () {
            z && (O.after(z.addClass(P)).detach(), z = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(M), x(l + "." + M, function () {
                    B()
                })
            },
            getInline: function (n, i) {
                if (B(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var F, H = "ajax",
        L = function () {
            F && i.removeClass(F)
        },
        A = function () {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
            },
            getAjax: function (n) {
                F && i.addClass(F), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function (i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function () {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var j, N = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), x(f + n, function () {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), x(l + n, function () {
                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var n = 0,
                    i = e.img[0],
                    o = function (r) {
                        j && clearInterval(j), j = setInterval(function () {
                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
                        }, r)
                    };
                o(1)
            },
            getImage: function (n, i) {
                var o = 0,
                    r = function () {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function () {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var W, R = function () {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        s = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function () {
                            t.content.css("visibility", "visible")
                        };
                    x("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                                r.css(t._getOffset(!0)), o = setTimeout(function () {
                                    d(), setTimeout(function () {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function () {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function (n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        D = function (e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push(Z), x("BeforeChange", function (e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }), x(l + "." + Z, function () {
                    D()
                })
            },
            getIframe: function (n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    },
        Y = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + i, function (e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }), x(p + i, function (e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }), x("BuildControls" + i, function () {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function () {
                            t.prev()
                        }), a[s](function () {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), x(m + i, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + i, function () {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function () {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1;
                    (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                    (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function (n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        i.hasSize = !0
                    }).on("error.mfploader", function () {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), x("ElementParse." + U, function (t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
        function () {
            var t = 1e3,
                n = "ontouchstart" in window,
                i = function () {
                    I.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function (o) {
                return e(this).each(function () {
                    var a, s = e(this);
                    if (n) {
                        var l, c, d, u, p, f;
                        s.on("touchstart" + r, function (e) {
                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
                            }).on("touchend" + r, function (e) {
                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + r, function () {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function () {
                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
            }
        }(), _()
})(window.jQuery || window.Zepto);

//Cta Video
$('.video-play-icon').magnificPopup({
    disableOn: 375,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
});
/*============================================

              06 -- datepicker   

==============================================*/


! function (t, e, i) {
    ! function () {
        var s, a, n, h = "2.2.3",
            o = "datepicker",
            r = ".datepicker-here",
            c = !1,
            d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
            l = {
                classes: "",
                inline: !1,
                language: "ru",
                startDate: new Date,
                firstDay: "",
                weekends: [6, 0],
                dateFormat: "",
                altField: "",
                altFieldDateFormat: "@",
                toggleSelected: !0,
                keyboardNav: !0,
                position: "bottom left",
                offset: 12,
                view: "days",
                minView: "days",
                showOtherMonths: !0,
                selectOtherMonths: !0,
                moveToOtherMonthsOnSelect: !0,
                showOtherYears: !0,
                selectOtherYears: !0,
                moveToOtherYearsOnSelect: !0,
                minDate: "",
                maxDate: "",
                disableNavWhenOutOfRange: !0,
                multipleDates: !1,
                multipleDatesSeparator: ",",
                range: !1,
                todayButton: !1,
                clearButton: !1,
                showEvent: "focus",
                autoClose: !1,
                monthsField: "monthsShort",
                prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                navTitles: {
                    days: "MM, <i>yyyy</i>",
                    months: "yyyy",
                    years: "yyyy1 - yyyy2"
                },
                timepicker: !1,
                onlyTimepicker: !1,
                dateTimeSeparator: " ",
                timeFormat: "",
                minHours: 0,
                maxHours: 24,
                minMinutes: 0,
                maxMinutes: 59,
                hoursStep: 1,
                minutesStep: 1,
                onSelect: "",
                onShow: "",
                onHide: "",
                onChangeMonth: "",
                onChangeYear: "",
                onChangeDecade: "",
                onChangeView: "",
                onRenderCell: ""
            },
            u = {
                ctrlRight: [17, 39],
                ctrlUp: [17, 38],
                ctrlLeft: [17, 37],
                ctrlDown: [17, 40],
                shiftRight: [16, 39],
                shiftUp: [16, 38],
                shiftLeft: [16, 37],
                shiftDown: [16, 40],
                altUp: [18, 38],
                altRight: [18, 39],
                altLeft: [18, 37],
                altDown: [18, 40],
                ctrlShiftUp: [16, 17, 38]
            },
            m = function (t, a) {
                this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init()
            };
        n = m, n.prototype = {
            VERSION: h,
            viewIndexes: ["days", "months", "years"],
            init: function () {
                c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0
            },
            _createShortCuts: function () {
                this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5)
            },
            _bindEvents: function () {
                this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this))
            },
            _bindKeyboardEvents: function () {
                this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this))
            },
            _bindTimepickerEvents: function () {
                this.$el.on("timeChange.adp", this._onTimeChange.bind(this))
            },
            isWeekend: function (t) {
                return -1 !== this.opts.weekends.indexOf(t)
            },
            _defineLocale: function (t) {
                "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
                var i = this._getWordBoundaryRegExp;
                (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0)
            },
            _buildDatepickersContainer: function () {
                c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container")
            },
            _buildBaseHtml: function () {
                var t, i = e('<div class="datepicker-inline">');
                t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker)
            },
            _triggerOnChange: function () {
                if (!this.selectedDates.length) {
                    if ("" === this._prevOnSelectValue) return;
                    return this._prevOnSelectValue = "", this.opts.onSelect("", "", this)
                }
                var t, e = this.selectedDates,
                    i = n.getParsedDate(e[0]),
                    s = this,
                    a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
                t = e.map(function (t) {
                    return s.formatDate(s.loc.dateFormat, t)
                }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function (t) {
                    var e = n.getParsedDate(t);
                    return new Date(e.year, e.month, e.date, e.hours, e.minutes)
                })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this)
            },
            next: function () {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            prev: function () {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            formatDate: function (t, e) {
                e = e || this.date;
                var i, s = t,
                    a = this._getWordBoundaryRegExp,
                    h = this.loc,
                    o = n.getLeadingZeroNum,
                    r = n.getDecade(e),
                    c = n.getParsedDate(e),
                    d = c.fullHours,
                    l = c.hours,
                    u = t.match(a("aa")) || t.match(a("AA")),
                    m = "am",
                    p = this._replacer;
                switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
                    case /@/.test(s):
                        s = s.replace(/@/, e.getTime());
                    case /aa/.test(s):
                        s = p(s, a("aa"), m);
                    case /AA/.test(s):
                        s = p(s, a("AA"), m.toUpperCase());
                    case /dd/.test(s):
                        s = p(s, a("dd"), c.fullDate);
                    case /d/.test(s):
                        s = p(s, a("d"), c.date);
                    case /DD/.test(s):
                        s = p(s, a("DD"), h.days[c.day]);
                    case /D/.test(s):
                        s = p(s, a("D"), h.daysShort[c.day]);
                    case /mm/.test(s):
                        s = p(s, a("mm"), c.fullMonth);
                    case /m/.test(s):
                        s = p(s, a("m"), c.month + 1);
                    case /MM/.test(s):
                        s = p(s, a("MM"), this.loc.months[c.month]);
                    case /M/.test(s):
                        s = p(s, a("M"), h.monthsShort[c.month]);
                    case /ii/.test(s):
                        s = p(s, a("ii"), c.fullMinutes);
                    case /i/.test(s):
                        s = p(s, a("i"), c.minutes);
                    case /hh/.test(s):
                        s = p(s, a("hh"), d);
                    case /h/.test(s):
                        s = p(s, a("h"), l);
                    case /yyyy/.test(s):
                        s = p(s, a("yyyy"), c.year);
                    case /yyyy1/.test(s):
                        s = p(s, a("yyyy1"), r[0]);
                    case /yyyy2/.test(s):
                        s = p(s, a("yyyy2"), r[1]);
                    case /yy/.test(s):
                        s = p(s, a("yy"), c.year.toString().slice(-2))
                }
                return s
            },
            _replacer: function (t, e, i) {
                return t.replace(e, function (t, e, s, a) {
                    return e + i + a
                })
            },
            _getWordBoundaryRegExp: function (t) {
                var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g")
            },
            selectDate: function (t) {
                var e = this,
                    i = e.opts,
                    s = e.parsedDate,
                    a = e.selectedDates,
                    h = a.length,
                    o = "";
                if (Array.isArray(t)) return void t.forEach(function (t) {
                    e.selectDate(t)
                });
                if (t instanceof Date) {
                    if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
                        if (h === i.multipleDates) return;
                        e._isSelected(t) || e.selectedDates.push(t)
                    } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];
                    e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render()
                }
            },
            removeDate: function (t) {
                var e = this.selectedDates,
                    i = this;
                if (t instanceof Date) return e.some(function (s, a) {
                    return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0
                })
            },
            today: function () {
                this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton)
            },
            clear: function () {
                this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange()
            },
            update: function (t, i) {
                var s = arguments.length,
                    a = this.lastSelectedDate;
                return 2 == s ? this.opts[t] = i : 1 == s && "object" == typeof t && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
            },
            _syncWithMinMaxDates: function () {
                var t = this.date.getTime();
                this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1
            },
            _isSelected: function (t, e) {
                var i = !1;
                return this.selectedDates.some(function (s) {
                    return n.isSame(s, t, e) ? (i = s, !0) : void 0
                }), i
            },
            _setInputValue: function () {
                var t, e = this,
                    i = e.opts,
                    s = e.loc.dateFormat,
                    a = i.altFieldDateFormat,
                    n = e.selectedDates.map(function (t) {
                        return e.formatDate(s, t)
                    });
                i.altField && e.$altField.length && (t = this.selectedDates.map(function (t) {
                    return e.formatDate(a, t)
                }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n)
            },
            _isInRange: function (t, e) {
                var i = t.getTime(),
                    s = n.getParsedDate(t),
                    a = n.getParsedDate(this.minDate),
                    h = n.getParsedDate(this.maxDate),
                    o = new Date(s.year, s.month, a.date).getTime(),
                    r = new Date(s.year, s.month, h.date).getTime(),
                    c = {
                        day: i >= this.minTime && i <= this.maxTime,
                        month: o >= this.minTime && r <= this.maxTime,
                        year: s.year >= a.year && s.year <= h.year
                    };
                return e ? c[e] : c.day
            },
            _getDimensions: function (t) {
                var e = t.offset();
                return {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    left: e.left,
                    top: e.top
                }
            },
            _getDateFromCell: function (t) {
                var e = this.parsedDate,
                    s = t.data("year") || e.year,
                    a = t.data("month") == i ? e.month : t.data("month"),
                    n = t.data("date") || 1;
                return new Date(s, a, n)
            },
            _setPositionClasses: function (t) {
                t = t.split(" ");
                var e = t[0],
                    i = t[1],
                    s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
                this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s)
            },
            setPosition: function (t) {
                t = t || this.opts.position;
                var e, i, s = this._getDimensions(this.$el),
                    a = this._getDimensions(this.$datepicker),
                    n = t.split(" "),
                    h = this.opts.offset,
                    o = n[0],
                    r = n[1];
                switch (o) {
                    case "top":
                        e = s.top - a.height - h;
                        break;
                    case "right":
                        i = s.left + s.width + h;
                        break;
                    case "bottom":
                        e = s.top + s.height + h;
                        break;
                    case "left":
                        i = s.left - a.width - h
                }
                switch (r) {
                    case "top":
                        e = s.top;
                        break;
                    case "right":
                        i = s.left + s.width - a.width;
                        break;
                    case "bottom":
                        e = s.top + s.height - a.height;
                        break;
                    case "left":
                        i = s.left;
                        break;
                    case "center":
                        /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2
                }
                this.$datepicker.css({
                    left: i,
                    top: e
                })
            },
            show: function () {
                var t = this.opts.onShow;
                this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t)
            },
            hide: function () {
                var t = this.opts.onHide;
                this.$datepicker.removeClass("active").css({
                    left: "-100000px"
                }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t)
            },
            down: function (t) {
                this._changeView(t, "down")
            },
            up: function (t) {
                this._changeView(t, "up")
            },
            _bindVisionEvents: function (t) {
                this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0))
            },
            _changeView: function (t, e) {
                t = t || this.focused || this.date;
                var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
                i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i]
            },
            _handleHotKey: function (t) {
                var e, i, s, a = n.getParsedDate(this._getFocusedDate()),
                    h = this.opts,
                    o = !1,
                    r = !1,
                    c = !1,
                    d = a.year,
                    l = a.month,
                    u = a.date;
                switch (t) {
                    case "ctrlRight":
                    case "ctrlUp":
                        l += 1, o = !0;
                        break;
                    case "ctrlLeft":
                    case "ctrlDown":
                        l -= 1, o = !0;
                        break;
                    case "shiftRight":
                    case "shiftUp":
                        r = !0, d += 1;
                        break;
                    case "shiftLeft":
                    case "shiftDown":
                        r = !0, d -= 1;
                        break;
                    case "altRight":
                    case "altUp":
                        c = !0, d += 10;
                        break;
                    case "altLeft":
                    case "altDown":
                        c = !0, d -= 10;
                        break;
                    case "ctrlShiftUp":
                        this.up()
                }
                s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade)
            },
            _registerKey: function (t) {
                var e = this.keys.some(function (e) {
                    return e == t
                });
                e || this.keys.push(t)
            },
            _unRegisterKey: function (t) {
                var e = this.keys.indexOf(t);
                this.keys.splice(e, 1)
            },
            _isHotKeyPressed: function () {
                var t, e = !1,
                    i = this,
                    s = this.keys.sort();
                for (var a in u) t = u[a], s.length == t.length && t.every(function (t, e) {
                    return t == s[e]
                }) && (i._trigger("hotKey", a), e = !0);
                return e
            },
            _trigger: function (t, e) {
                this.$el.trigger(t, e)
            },
            _focusNextCell: function (t, e) {
                e = e || this.cellType;
                var i = n.getParsedDate(this._getFocusedDate()),
                    s = i.year,
                    a = i.month,
                    h = i.date;
                if (!this._isHotKeyPressed()) {
                    switch (t) {
                        case 37:
                            "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
                            break;
                        case 38:
                            "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
                            break;
                        case 39:
                            "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
                            break;
                        case 40:
                            "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : ""
                    }
                    var o = new Date(s, a, h);
                    o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o
                }
            },
            _getFocusedDate: function () {
                var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
                    e = this.parsedDate;
                if (!t) switch (this.view) {
                    case "days":
                        t = new Date(e.year, e.month, (new Date).getDate());
                        break;
                    case "months":
                        t = new Date(e.year, e.month, 1);
                        break;
                    case "years":
                        t = new Date(e.year, 0, 1)
                }
                return t
            },
            _getCell: function (t, i) {
                i = i || this.cellType;
                var s, a = n.getParsedDate(t),
                    h = '.datepicker--cell[data-year="' + a.year + '"]';
                switch (i) {
                    case "month":
                        h = '[data-month="' + a.month + '"]';
                        break;
                    case "day":
                        h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]'
                }
                return s = this.views[this.currentView].$el.find(h), s.length ? s : e("")
            },
            destroy: function () {
                var t = this;
                t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove()
            },
            _handleAlreadySelectedDates: function (t, e) {
                this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()))
            },
            _onShowEvent: function (t) {
                this.visible || this.show()
            },
            _onBlur: function () {
                !this.inFocus && this.visible && this.hide()
            },
            _onMouseDownDatepicker: function (t) {
                this.inFocus = !0
            },
            _onMouseUpDatepicker: function (t) {
                this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus()
            },
            _onKeyUpGeneral: function (t) {
                var e = this.$el.val();
                e || this.clear()
            },
            _onResize: function () {
                this.visible && this.setPosition()
            },
            _onMouseUpBody: function (t) {
                t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide()
            },
            _onMouseUpEl: function (t) {
                t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4)
            },
            _onKeyDown: function (t) {
                var e = t.which;
                if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
                    if (this._getCell(this.focused).hasClass("-disabled-")) return;
                    if (this.view != this.opts.minView) this.down();
                    else {
                        var i = this._isSelected(this.focused, this.cellType);
                        if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                        this._handleAlreadySelectedDates(i, this.focused)
                    }
                }
                27 == e && this.hide()
            },
            _onKeyUp: function (t) {
                var e = t.which;
                this._unRegisterKey(e)
            },
            _onHotKey: function (t, e) {
                this._handleHotKey(e)
            },
            _onMouseEnterCell: function (t) {
                var i = e(t.target).closest(".datepicker--cell"),
                    s = this._getDateFromCell(i);
                this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
            },
            _onMouseLeaveCell: function (t) {
                var i = e(t.target).closest(".datepicker--cell");
                i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
            },
            _onTimeChange: function (t, e, i) {
                var s = new Date,
                    a = this.selectedDates,
                    n = !1;
                a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s)
            },
            _onClickCell: function (t, e) {
                this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e)
            },
            set focused(t) {
                if (!t && this.focused) {
                    var e = this._getCell(this.focused);
                    e.length && e.removeClass("-focus-")
                }
                this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t)
            },
            get focused() {
                return this._focused
            },
            get parsedDate() {
                return n.getParsedDate(this.date)
            },
            set date(t) {
                return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0
            },
            get date() {
                return this.currentDate
            },
            set view(t) {
                return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t)
            },
            get view() {
                return this.currentView
            },
            get cellType() {
                return this.view.substring(0, this.view.length - 1)
            },
            get minTime() {
                var t = n.getParsedDate(this.minDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get maxTime() {
                var t = n.getParsedDate(this.maxDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get curDecade() {
                return n.getDecade(this.date)
            }
        }, n.getDaysCount = function (t) {
            return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()
        }, n.getParsedDate = function (t) {
            return {
                year: t.getFullYear(),
                month: t.getMonth(),
                fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
                date: t.getDate(),
                fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                day: t.getDay(),
                hours: t.getHours(),
                fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                minutes: t.getMinutes(),
                fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
            }
        }, n.getDecade = function (t) {
            var e = 10 * Math.floor(t.getFullYear() / 10);
            return [e, e + 9]
        }, n.template = function (t, e) {
            return t.replace(/#\{([\w]+)\}/g, function (t, i) {
                return e[i] || 0 === e[i] ? e[i] : void 0
            })
        }, n.isSame = function (t, e, i) {
            if (!t || !e) return !1;
            var s = n.getParsedDate(t),
                a = n.getParsedDate(e),
                h = i ? i : "day",
                o = {
                    day: s.date == a.date && s.month == a.month && s.year == a.year,
                    month: s.month == a.month && s.year == a.year,
                    year: s.year == a.year
                };
            return o[h]
        }, n.less = function (t, e, i) {
            return t && e ? e.getTime() < t.getTime() : !1
        }, n.bigger = function (t, e, i) {
            return t && e ? e.getTime() > t.getTime() : !1
        }, n.getLeadingZeroNum = function (t) {
            return parseInt(t) < 10 ? "0" + t : t
        }, n.resetTime = function (t) {
            return "object" == typeof t ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0
        }, e.fn.datepicker = function (t) {
            return this.each(function () {
                if (e.data(this, o)) {
                    var i = e.data(this, o);
                    i.opts = e.extend(!0, i.opts, t), i.update()
                } else e.data(this, o, new m(this, t))
            })
        }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
            ru: {
                days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                today: "Сегодня",
                clear: "Очистить",
                dateFormat: "dd.mm.yyyy",
                timeFormat: "hh:ii",
                firstDay: 1
            }
        }, e(function () {
            e(r).datepicker()
        })
    }(),
        function () {
            var t = {
                days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
                months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
                years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
            },
                s = e.fn.datepicker,
                a = s.Constructor;
            s.Body = function (t, i, s) {
                this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init()
            }, s.Body.prototype = {
                init: function () {
                    this._buildBaseHtml(), this._render(), this._bindEvents()
                },
                _bindEvents: function () {
                    this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this))
                },
                _buildBaseHtml: function () {
                    this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el)
                },
                _getDayNamesHtml: function (t, e, s, a) {
                    return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a))
                },
                _getCellContents: function (t, e) {
                    var i = "datepicker--cell datepicker--cell-" + e,
                        s = new Date,
                        n = this.d,
                        h = a.resetTime(n.minRange),
                        o = a.resetTime(n.maxRange),
                        r = n.opts,
                        c = a.getParsedDate(t),
                        d = {},
                        l = c.date;
                    switch (e) {
                        case "day":
                            n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
                            break;
                        case "month":
                            l = n.loc[n.opts.monthsField][c.month];
                            break;
                        case "year":
                            var u = n.curDecade;
                            l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""))
                    }
                    return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
                        html: l,
                        classes: i
                    }
                },
                _getDaysHtml: function (t) {
                    var e = a.getDaysCount(t),
                        i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
                        s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
                        n = i - this.d.loc.firstDay,
                        h = 6 - s + this.d.loc.firstDay;
                    n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;
                    for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
                    return d
                },
                _getDayHtml: function (t) {
                    var e = this._getCellContents(t, "day");
                    return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
                },
                _getMonthsHtml: function (t) {
                    for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) e += this._getMonthHtml(new Date(i.year, s)), s++;
                    return e
                },
                _getMonthHtml: function (t) {
                    var e = this._getCellContents(t, "month");
                    return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>"
                },
                _getYearsHtml: function (t) {
                    var e = (a.getParsedDate(t), a.getDecade(t)),
                        i = e[0] - 1,
                        s = "",
                        n = i;
                    for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
                    return s
                },
                _getYearHtml: function (t) {
                    var e = this._getCellContents(t, "year");
                    return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
                },
                _renderTypes: {
                    days: function () {
                        var t = this._getDayNamesHtml(this.d.loc.firstDay),
                            e = this._getDaysHtml(this.d.currentDate);
                        this.$cells.html(e), this.$names.html(t)
                    },
                    months: function () {
                        var t = this._getMonthsHtml(this.d.currentDate);
                        this.$cells.html(t)
                    },
                    years: function () {
                        var t = this._getYearsHtml(this.d.currentDate);
                        this.$cells.html(t)
                    }
                },
                _render: function () {
                    this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)()
                },
                _update: function () {
                    var t, i, s, a = e(".datepicker--cell", this.$cells),
                        n = this;
                    a.each(function (a, h) {
                        i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes)
                    })
                },
                show: function () {
                    this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0)
                },
                hide: function () {
                    this.$el.removeClass("active"), this.active = !1
                },
                _handleClick: function (t) {
                    var e = t.data("date") || 1,
                        i = t.data("month") || 0,
                        s = t.data("year") || this.d.parsedDate.year,
                        a = this.d;
                    if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));
                    var n = new Date(s, i, e),
                        h = this.d._isSelected(n, this.d.cellType);
                    return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n)
                },
                _onClickCell: function (t) {
                    var i = e(t.target).closest(".datepicker--cell");
                    i.hasClass("-disabled-") || this._handleClick.bind(this)(i)
                }
            }
        }(),
        function () {
            var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
                i = '<div class="datepicker--buttons"></div>',
                s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
                a = e.fn.datepicker,
                n = a.Constructor;
            a.Navigation = function (t, e) {
                this.d = t, this.opts = e, this.$buttonsContainer = "", this.init()
            }, a.Navigation.prototype = {
                init: function () {
                    this._buildBaseHtml(), this._bindEvents()
                },
                _bindEvents: function () {
                    this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this))
                },
                _buildBaseHtml: function () {
                    this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed()
                },
                _addButtonsIfNeed: function () {
                    this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear")
                },
                _render: function () {
                    var i = this._getTitle(this.d.currentDate),
                        s = n.template(t, e.extend({
                            title: i
                        }, this.opts));
                    this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
                },
                _getTitle: function (t) {
                    return this.d.formatDate(this.opts.navTitles[this.d.view], t)
                },
                _addButton: function (t) {
                    this.$buttonsContainer.length || this._addButtonsContainer();
                    var i = {
                        action: t,
                        label: this.d.loc[t]
                    },
                        a = n.template(s, i);
                    e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a)
                },
                _addButtonsContainer: function () {
                    this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker)
                },
                setNavStatus: function () {
                    if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                        var t = this.d.parsedDate,
                            e = t.month,
                            i = t.year,
                            s = t.date;
                        switch (this.d.view) {
                            case "days":
                                this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
                                break;
                            case "months":
                                this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
                                break;
                            case "years":
                                var a = n.getDecade(this.d.date);
                                this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next")
                        }
                    }
                },
                _disableNav: function (t) {
                    e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-")
                },
                _activateNav: function (t) {
                    e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-")
                },
                _onClickNavButton: function (t) {
                    var i = e(t.target).closest("[data-action]"),
                        s = i.data("action");
                    this.d[s]()
                },
                _onClickNavTitle: function (t) {
                    return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void (this.d.view = "years")
                }
            }
        }(),
        function () {
            var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
                i = e.fn.datepicker,
                s = i.Constructor;
            i.Timepicker = function (t, e) {
                this.d = t, this.opts = e, this.init()
            }, i.Timepicker.prototype = {
                init: function () {
                    var t = "input";
                    this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
                },
                _setTime: function (t) {
                    var e = s.getParsedDate(t);
                    this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes
                },
                _setMinTimeFromDate: function (t) {
                    this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes)
                },
                _setMaxTimeFromDate: function (t) {
                    this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes)
                },
                _setDefaultMinMaxTime: function () {
                    var t = 23,
                        e = 59,
                        i = this.opts;
                    this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes
                },
                _validateHoursMinutes: function (t) {
                    this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes)
                },
                _buildHTML: function () {
                    var i = s.getLeadingZeroNum,
                        a = {
                            hourMin: this.minHours,
                            hourMax: i(this.maxHours),
                            hourStep: this.opts.hoursStep,
                            hourValue: this.hours,
                            hourVisible: i(this.displayHours),
                            minMin: this.minMinutes,
                            minMax: i(this.maxMinutes),
                            minStep: this.opts.minutesStep,
                            minValue: i(this.minutes)
                        },
                        n = s.template(t, a);
                    this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
                },
                _updateCurrentTime: function () {
                    var t = s.getLeadingZeroNum(this.displayHours),
                        e = s.getLeadingZeroNum(this.minutes);
                    this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod)
                },
                _updateRanges: function () {
                    this.$hours.attr({
                        min: this.minHours,
                        max: this.maxHours
                    }).val(this.hours), this.$minutes.attr({
                        min: this.minMinutes,
                        max: this.maxMinutes
                    }).val(this.minutes)
                },
                _handleDate: function (t) {
                    this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t)
                },
                update: function () {
                    this._updateRanges(), this._updateCurrentTime()
                },
                _getValidHoursFromDate: function (t, e) {
                    var i = t,
                        a = t;
                    t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
                    var n = e || this.d.ampm,
                        h = "am";
                    if (n) switch (!0) {
                        case 0 == a:
                            a = 12;
                            break;
                        case 12 == a:
                            h = "pm";
                            break;
                        case a > 11:
                            a -= 12, h = "pm"
                    }
                    return {
                        hours: a,
                        dayPeriod: h
                    }
                },
                set hours(t) {
                    this._hours = t;
                    var e = this._getValidHoursFromDate(t);
                    this.displayHours = e.hours, this.dayPeriod = e.dayPeriod
                },
                get hours() {
                    return this._hours
                },
                _onChangeRange: function (t) {
                    var i = e(t.target),
                        s = i.attr("name");
                    this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
                },
                _onSelectDate: function (t, e) {
                    this._handleDate(e), this.update()
                },
                _onMouseEnterRange: function (t) {
                    var i = e(t.target).attr("name");
                    e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-")
                },
                _onMouseOutRange: function (t) {
                    var i = e(t.target).attr("name");
                    this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-")
                },
                _onMouseUpRange: function (t) {
                    this.d.timepickerIsActive = !1
                }
            }
        }()
}(window, jQuery);
//-- Eng --
(function ($) {
    $.fn.datepicker.language['en'] = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'mm/dd/yyyy',
        timeFormat: 'hh:ii aa',
        firstDay: 0
    };
})(jQuery);
/*============================================

               07 -- Elevatezoom 

==============================================*/


/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create && (Object.create = function (d) {
    function h() { }
    h.prototype = d;
    return new h
});
(function (d, h, l, m) {
    var k = {
        init: function (b, a) {
            var c = this;
            c.elem = a;
            c.$elem = d(a);
            c.imageSrc = c.$elem.data("zoom-image") ? c.$elem.data("zoom-image") : c.$elem.attr("src");
            c.options = d.extend({}, d.fn.elevateZoom.options, b);
            c.options.tint && (c.options.lensColour = "none", c.options.lensOpacity = "1");
            "inner" == c.options.zoomType && (c.options.showLens = !1);
            c.$elem.parent().removeAttr("title").removeAttr("alt");
            c.zoomImage = c.imageSrc;
            c.refresh(1);
            d("#" + c.options.gallery + " a").click(function (a) {
                c.options.galleryActiveClass &&
                    (d("#" + c.options.gallery + " a").removeClass(c.options.galleryActiveClass), d(this).addClass(c.options.galleryActiveClass));
                a.preventDefault();
                d(this).data("zoom-image") ? c.zoomImagePre = d(this).data("zoom-image") : c.zoomImagePre = d(this).data("image");
                c.swaptheimage(d(this).data("image"), c.zoomImagePre);
                return !1
            })
        },
        refresh: function (b) {
            var a = this;
            setTimeout(function () {
                a.fetch(a.imageSrc)
            }, b || a.options.refresh)
        },
        fetch: function (b) {
            var a = this,
                c = new Image;
            c.onload = function () {
                a.largeWidth = c.width;
                a.largeHeight =
                    c.height;
                a.startZoom();
                a.currentImage = a.imageSrc;
                a.options.onZoomedImageLoaded(a.$elem)
            };
            c.src = b
        },
        startZoom: function () {
            var b = this;
            b.nzWidth = b.$elem.width();
            b.nzHeight = b.$elem.height();
            b.isWindowActive = !1;
            b.isLensActive = !1;
            b.isTintActive = !1;
            b.overWindow = !1;
            b.options.imageCrossfade && (b.zoomWrap = b.$elem.wrap('<div style="height:' + b.nzHeight + "px;width:" + b.nzWidth + 'px;" class="zoomWrapper" />'), b.$elem.css("position", "absolute"));
            b.zoomLock = 1;
            b.scrollingLock = !1;
            b.changeBgSize = !1;
            b.currentZoomLevel = b.options.zoomLevel;
            b.nzOffset = b.$elem.offset();
            b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
            b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
            "window" == b.options.zoomType && (b.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(b.options.zoomWindowBgColour) + ";width: " + String(b.options.zoomWindowWidth) + "px;height: " + String(b.options.zoomWindowHeight) + "px;float: left;background-size: " + b.largeWidth / b.currentZoomLevel + "px " + b.largeHeight / b.currentZoomLevel +
                "px;display: none;z-index:100;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;");
            if ("inner" == b.options.zoomType) {
                var a = b.$elem.css("border-left-width");
                b.zoomWindowStyle = "overflow: hidden;margin-left: " + String(a) + ";margin-top: " + String(a) + ";background-position: 0px 0px;width: " + String(b.nzWidth) + "px;height: " + String(b.nzHeight) + "px;float: left;display: none;cursor:" + b.options.cursor + ";px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
            }
            "window" ==
                b.options.zoomType && (lensHeight = b.nzHeight < b.options.zoomWindowWidth / b.widthRatio ? b.nzHeight : String(b.options.zoomWindowHeight / b.heightRatio), lensWidth = b.largeWidth < b.options.zoomWindowWidth ? b.nzWidth : b.options.zoomWindowWidth / b.widthRatio, b.lensStyle = "background-position: 0px 0px;width: " + String(b.options.zoomWindowWidth / b.widthRatio) + "px;height: " + String(b.options.zoomWindowHeight / b.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
                    b.options.lensOpacity + ";filter: alpha(opacity = " + 100 * b.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + b.options.lensColour + ";cursor:" + b.options.cursor + ";border: " + b.options.lensBorderSize + "px solid " + b.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;");
            b.tintStyle = "display: block;position: absolute;background-color: " + b.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + b.nzWidth + "px;height: " + b.nzHeight + "px;";
            b.lensRound = "";
            "lens" == b.options.zoomType && (b.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";width:" + String(b.options.lensSize) + "px;height:" + String(b.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;");
            "round" == b.options.lensShape && (b.lensRound = "border-top-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-top-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) +
                "px;border-bottom-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-bottom-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;");
            b.zoomContainer = d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + b.nzOffset.left + "px;top:" + b.nzOffset.top + "px;height:" + b.nzHeight + "px;width:" + b.nzWidth + 'px;"></div>');
            d("body").append(b.zoomContainer);
            b.options.containLensZoom && "lens" == b.options.zoomType && b.zoomContainer.css("overflow",
                "hidden");
            "inner" != b.options.zoomType && (b.zoomLens = d("<div class='zoomLens' style='" + b.lensStyle + b.lensRound + "'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
                b.$elem.trigger("click")
            }), b.options.tint && (b.tintContainer = d("<div/>").addClass("tintContainer"), b.zoomTint = d("<div class='zoomTint' style='" + b.tintStyle + "'></div>"), b.zoomLens.wrap(b.tintContainer), b.zoomTintcss = b.zoomLens.after(b.zoomTint), b.zoomTintImage = d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
                b.nzWidth + "px; height: " + b.nzHeight + 'px;" src="' + b.imageSrc + '">').appendTo(b.zoomLens).click(function () {
                    b.$elem.trigger("click")
                })));
            isNaN(b.options.zoomWindowPosition) ? b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
                b.$elem.trigger("click")
            }) : b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle +
                "' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
                    b.$elem.trigger("click")
                });
            b.zoomWindowContainer = d("<div/>").addClass("zoomWindowContainer").css("width", b.options.zoomWindowWidth);
            b.zoomWindow.wrap(b.zoomWindowContainer);
            "lens" == b.options.zoomType && b.zoomLens.css({
                backgroundImage: "url('" + b.imageSrc + "')"
            });
            "window" == b.options.zoomType && b.zoomWindow.css({
                backgroundImage: "url('" + b.imageSrc + "')"
            });
            "inner" == b.options.zoomType && b.zoomWindow.css({
                backgroundImage: "url('" + b.imageSrc +
                    "')"
            });
            b.$elem.bind("touchmove", function (a) {
                a.preventDefault();
                b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
            });
            b.zoomContainer.bind("touchmove", function (a) {
                "inner" == b.options.zoomType && b.showHideWindow("show");
                a.preventDefault();
                b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
            });
            b.zoomContainer.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            });
            b.$elem.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            });
            b.options.showLens && (b.zoomLens.bind("touchmove", function (a) {
                a.preventDefault();
                b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
            }), b.zoomLens.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            }));
            b.$elem.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            b.zoomContainer.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            "inner" != b.options.zoomType && b.zoomLens.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a),
                    b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            b.options.tint && "inner" != b.options.zoomType && b.zoomTint.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            "inner" == b.options.zoomType && b.zoomWindow.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            b.zoomContainer.add(b.$elem).mouseenter(function () {
                !1 == b.overWindow &&
                    b.setElements("show")
            }).mouseleave(function () {
                b.scrollLock || b.setElements("hide")
            });
            "inner" != b.options.zoomType && b.zoomWindow.mouseenter(function () {
                b.overWindow = !0;
                b.setElements("hide")
            }).mouseleave(function () {
                b.overWindow = !1
            });
            b.minZoomLevel = b.options.minZoomLevel ? b.options.minZoomLevel : 2 * b.options.scrollZoomIncrement;
            b.options.scrollZoom && b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (a) {
                b.scrollLock = !0;
                clearTimeout(d.data(this, "timer"));
                d.data(this, "timer",
                    setTimeout(function () {
                        b.scrollLock = !1
                    }, 250));
                var e = a.originalEvent.wheelDelta || -1 * a.originalEvent.detail;
                a.stopImmediatePropagation();
                a.stopPropagation();
                a.preventDefault();
                0 < e / 120 ? b.currentZoomLevel >= b.minZoomLevel && b.changeZoomLevel(b.currentZoomLevel - b.options.scrollZoomIncrement) : b.options.maxZoomLevel ? b.currentZoomLevel <= b.options.maxZoomLevel && b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement) : b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement);
                return !1
            })
        },
        setElements: function (b) {
            if (!this.options.zoomEnabled) return !1;
            "show" == b && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show"));
            "hide" == b && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"),
                this.options.tint && this.showHideTint("hide"))
        },
        setPosition: function (b) {
            if (!this.options.zoomEnabled) return !1;
            this.nzHeight = this.$elem.height();
            this.nzWidth = this.$elem.width();
            this.nzOffset = this.$elem.offset();
            this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({
                top: 0
            }), this.zoomTint.css({
                left: 0
            }));
            this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight /
                this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth /
                    this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({
                        width: String(this.options.lensSize) + "px",
                        height: String(this.options.lensSize) + "px"
                    }));
            this.zoomContainer.css({
                top: this.nzOffset.top
            });
            this.zoomContainer.css({
                left: this.nzOffset.left
            });
            this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
            this.mouseTop =
                parseInt(b.pageY - this.nzOffset.top);
            "window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize);
            "inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight -
                this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize);
            0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0),
                this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)),
                "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((b.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((b.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({
                    backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px"
                }), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({
                    "background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight +
                        "px"
                }), this.zoomWindow.css({
                    "background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"
                })) : ("lens" == this.options.zoomType && this.zoomLens.css({
                    "background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"
                }), this.zoomWindow.css({
                    "background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"
                })), this.changeBgSize = !1), this.setWindowPostition(b)), this.options.tint && "inner" != this.options.zoomType &&
                this.setTintPosition(b), "window" == this.options.zoomType && this.setWindowPostition(b), "inner" == this.options.zoomType && this.setWindowPostition(b), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({
                    left: this.lensLeftPos + "px",
                    top: this.lensTopPos + "px"
                })))
        },
        showHideWindow: function (b) {
            "show" != b || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive = !0);
            "hide" == b && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1)
        },
        showHideLens: function (b) {
            "show" != b || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0);
            "hide" == b && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(),
                this.isLensActive = !1)
        },
        showHideTint: function (b) {
            "show" != b || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({
                opacity: this.options.tintOpacity
            }).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({
                opacity: this.options.tintOpacity
            }).animate(), this.zoomTint.show()), this.isTintActive = !0);
            "hide" == b && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1)
        },
        setLensPostition: function (b) { },
        setWindowPostition: function (b) {
            var a = this;
            if (isNaN(a.options.zoomWindowPosition)) a.externalContainer = d("#" + a.options.zoomWindowPosition), a.externalContainerWidth = a.externalContainer.width(), a.externalContainerHeight = a.externalContainer.height(), a.externalContainerOffset = a.externalContainer.offset(), a.windowOffsetTop = a.externalContainerOffset.top, a.windowOffsetLeft = a.externalContainerOffset.left;
            else switch (a.options.zoomWindowPosition) {
                case 1:
                    a.windowOffsetTop = a.options.zoomWindowOffety;
                    a.windowOffsetLeft = +a.nzWidth;
                    break;
                case 2:
                    a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = a.nzWidth);
                    break;
                case 3:
                    a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
                    a.windowOffsetLeft = a.nzWidth;
                    break;
                case 4:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = a.nzWidth;
                    break;
                case 5:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
                    break;
                case 6:
                    a.options.zoomWindowHeight >
                        a.nzHeight && (a.windowOffsetTop = a.nzHeight, a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));
                    break;
                case 7:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = 0;
                    break;
                case 8:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 9:
                    a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 10:
                    a.options.zoomWindowHeight > a.nzHeight &&
                        (a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize));
                    break;
                case 11:
                    a.windowOffsetTop = a.options.zoomWindowOffety;
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 12:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 13:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft =
                        0;
                    break;
                case 14:
                    a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize), a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));
                    break;
                case 15:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
                    break;
                case 16:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft = a.nzWidth;
                    break;
                default:
                    a.windowOffsetTop =
                        a.options.zoomWindowOffety, a.windowOffsetLeft = a.nzWidth
            }
            a.isWindowSet = !0;
            a.windowOffsetTop += a.options.zoomWindowOffety;
            a.windowOffsetLeft += a.options.zoomWindowOffetx;
            a.zoomWindow.css({
                top: a.windowOffsetTop
            });
            a.zoomWindow.css({
                left: a.windowOffsetLeft
            });
            "inner" == a.options.zoomType && (a.zoomWindow.css({
                top: 0
            }), a.zoomWindow.css({
                left: 0
            }));
            a.windowLeftPos = String(-1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2));
            a.windowTopPos = String(-1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() /
                2));
            a.Etoppos && (a.windowTopPos = 0);
            a.Eloppos && (a.windowLeftPos = 0);
            a.Eboppos && (a.windowTopPos = -1 * (a.largeHeight / a.currentZoomLevel - a.zoomWindow.height()));
            a.Eroppos && (a.windowLeftPos = -1 * (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
            a.fullheight && (a.windowTopPos = 0);
            a.fullwidth && (a.windowLeftPos = 0);
            if ("window" == a.options.zoomType || "inner" == a.options.zoomType) 1 == a.zoomLock && (1 >= a.widthRatio && (a.windowLeftPos = 0), 1 >= a.heightRatio && (a.windowTopPos = 0)), a.largeHeight < a.options.zoomWindowHeight && (a.windowTopPos =
                0), a.largeWidth < a.options.zoomWindowWidth && (a.windowLeftPos = 0), a.options.easing ? (a.xp || (a.xp = 0), a.yp || (a.yp = 0), a.loop || (a.loop = setInterval(function () {
                    a.xp += (a.windowLeftPos - a.xp) / a.options.easingAmount;
                    a.yp += (a.windowTopPos - a.yp) / a.options.easingAmount;
                    a.scrollingLock ? (clearInterval(a.loop), a.xp = a.windowLeftPos, a.yp = a.windowTopPos, a.xp = -1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2), a.yp = -1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() / 2), a.changeBgSize && (a.nzHeight >
                        a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({
                            "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
                        }), a.zoomWindow.css({
                            "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
                        })) : ("lens" != a.options.zoomType && a.zoomLens.css({
                            "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvalueheight + "px"
                        }), a.zoomWindow.css({
                            "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
                        })),
                        a.changeBgSize = !1), a.zoomWindow.css({
                            backgroundPosition: a.windowLeftPos + "px " + a.windowTopPos + "px"
                        }), a.scrollingLock = !1, a.loop = !1) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({
                            "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
                        }), a.zoomWindow.css({
                            "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
                        })) : ("lens" != a.options.zoomType && a.zoomLens.css({
                            "background-size": a.largeWidth / a.newvaluewidth +
                                "px " + a.largeHeight / a.newvaluewidth + "px"
                        }), a.zoomWindow.css({
                            "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
                        })), a.changeBgSize = !1), a.zoomWindow.css({
                            backgroundPosition: a.xp + "px " + a.yp + "px"
                        }))
                }, 16))) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({
                    "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
                }), a.zoomWindow.css({
                    "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight /
                        a.newvalueheight + "px"
                })) : ("lens" == a.options.zoomType && a.zoomLens.css({
                    "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
                }), a.largeHeight / a.newvaluewidth < a.options.zoomWindowHeight ? a.zoomWindow.css({
                    "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
                }) : a.zoomWindow.css({
                    "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
                })), a.changeBgSize = !1), a.zoomWindow.css({
                    backgroundPosition: a.windowLeftPos +
                        "px " + a.windowTopPos + "px"
                }))
        },
        setTintPosition: function (b) {
            this.nzOffset = this.$elem.offset();
            this.tintpos = String(-1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2));
            this.tintposy = String(-1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2));
            this.Etoppos && (this.tintposy = 0);
            this.Eloppos && (this.tintpos = 0);
            this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize));
            this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize));
            this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({
                left: this.tintpos + "px"
            }), this.zoomTintImage.css({
                top: this.tintposy + "px"
            }))
        },
        swaptheimage: function (b, a) {
            var c = this,
                e = new Image;
            c.options.loadingIcon && (c.spinner = d("<div style=\"background: url('" + c.options.loadingIcon + "') no-repeat center;height:" + c.nzHeight + "px;width:" + c.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), c.$elem.after(c.spinner));
            c.options.onImageSwap(c.$elem);
            e.onload = function () {
                c.largeWidth = e.width;
                c.largeHeight = e.height;
                c.zoomImage = a;
                c.zoomWindow.css({
                    "background-size": c.largeWidth + "px " + c.largeHeight + "px"
                });
                c.zoomWindow.css({
                    "background-size": c.largeWidth + "px " + c.largeHeight + "px"
                });
                c.swapAction(b, a)
            };
            e.src = a
        },
        swapAction: function (b, a) {
            var c = this,
                e = new Image;
            e.onload = function () {
                c.nzHeight = e.height;
                c.nzWidth = e.width;
                c.options.onImageSwapComplete(c.$elem);
                c.doneCallback()
            };
            e.src = b;
            c.currentZoomLevel = c.options.zoomLevel;
            c.options.maxZoomLevel = !1;
            "lens" == c.options.zoomType && c.zoomLens.css({
                backgroundImage: "url('" + a + "')"
            });
            "window" == c.options.zoomType && c.zoomWindow.css({
                backgroundImage: "url('" + a + "')"
            });
            "inner" == c.options.zoomType && c.zoomWindow.css({
                backgroundImage: "url('" + a + "')"
            });
            c.currentImage = a;
            if (c.options.imageCrossfade) {
                var f = c.$elem,
                    g = f.clone();
                c.$elem.attr("src", b);
                c.$elem.after(g);
                g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                    d(this).remove()
                });
                c.$elem.width("auto").removeAttr("width");
                c.$elem.height("auto").removeAttr("height");
                f.fadeIn(c.options.imageCrossfade);
                c.options.tint && "inner" != c.options.zoomType && (f = c.zoomTintImage, g = f.clone(), c.zoomTintImage.attr("src", a), c.zoomTintImage.after(g), g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                    d(this).remove()
                }), f.fadeIn(c.options.imageCrossfade), c.zoomTint.css({
                    height: c.$elem.height()
                }), c.zoomTint.css({
                    width: c.$elem.width()
                }));
                c.zoomContainer.css("height", c.$elem.height());
                c.zoomContainer.css("width", c.$elem.width());
                "inner" != c.options.zoomType || c.options.constrainType ||
                    (c.zoomWrap.parent().css("height", c.$elem.height()), c.zoomWrap.parent().css("width", c.$elem.width()), c.zoomWindow.css("height", c.$elem.height()), c.zoomWindow.css("width", c.$elem.width()))
            } else c.$elem.attr("src", b), c.options.tint && (c.zoomTintImage.attr("src", a), c.zoomTintImage.attr("height", c.$elem.height()), c.zoomTintImage.css({
                height: c.$elem.height()
            }), c.zoomTint.css({
                height: c.$elem.height()
            })), c.zoomContainer.css("height", c.$elem.height()), c.zoomContainer.css("width", c.$elem.width());
            c.options.imageCrossfade &&
                (c.zoomWrap.css("height", c.$elem.height()), c.zoomWrap.css("width", c.$elem.width()));
            c.options.constrainType && ("height" == c.options.constrainType && (c.zoomContainer.css("height", c.options.constrainSize), c.zoomContainer.css("width", "auto"), c.options.imageCrossfade ? (c.zoomWrap.css("height", c.options.constrainSize), c.zoomWrap.css("width", "auto"), c.constwidth = c.zoomWrap.width()) : (c.$elem.css("height", c.options.constrainSize), c.$elem.css("width", "auto"), c.constwidth = c.$elem.width()), "inner" == c.options.zoomType &&
                (c.zoomWrap.parent().css("height", c.options.constrainSize), c.zoomWrap.parent().css("width", c.constwidth), c.zoomWindow.css("height", c.options.constrainSize), c.zoomWindow.css("width", c.constwidth)), c.options.tint && (c.tintContainer.css("height", c.options.constrainSize), c.tintContainer.css("width", c.constwidth), c.zoomTint.css("height", c.options.constrainSize), c.zoomTint.css("width", c.constwidth), c.zoomTintImage.css("height", c.options.constrainSize), c.zoomTintImage.css("width", c.constwidth))), "width" ==
                c.options.constrainType && (c.zoomContainer.css("height", "auto"), c.zoomContainer.css("width", c.options.constrainSize), c.options.imageCrossfade ? (c.zoomWrap.css("height", "auto"), c.zoomWrap.css("width", c.options.constrainSize), c.constheight = c.zoomWrap.height()) : (c.$elem.css("height", "auto"), c.$elem.css("width", c.options.constrainSize), c.constheight = c.$elem.height()), "inner" == c.options.zoomType && (c.zoomWrap.parent().css("height", c.constheight), c.zoomWrap.parent().css("width", c.options.constrainSize), c.zoomWindow.css("height",
                    c.constheight), c.zoomWindow.css("width", c.options.constrainSize)), c.options.tint && (c.tintContainer.css("height", c.constheight), c.tintContainer.css("width", c.options.constrainSize), c.zoomTint.css("height", c.constheight), c.zoomTint.css("width", c.options.constrainSize), c.zoomTintImage.css("height", c.constheight), c.zoomTintImage.css("width", c.options.constrainSize))))
        },
        doneCallback: function () {
            this.options.loadingIcon && this.spinner.hide();
            this.nzOffset = this.$elem.offset();
            this.nzWidth = this.$elem.width();
            this.nzHeight = this.$elem.height();
            this.currentZoomLevel = this.options.zoomLevel;
            this.widthRatio = this.largeWidth / this.nzWidth;
            this.heightRatio = this.largeHeight / this.nzHeight;
            "window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width",
                lensWidth), this.zoomLens.css("height", lensHeight)))
        },
        getCurrentImage: function () {
            return this.zoomImage
        },
        getGalleryList: function () {
            var b = this;
            b.gallerylist = [];
            b.options.gallery ? d("#" + b.options.gallery + " a").each(function () {
                var a = "";
                d(this).data("zoom-image") ? a = d(this).data("zoom-image") : d(this).data("image") && (a = d(this).data("image"));
                a == b.zoomImage ? b.gallerylist.unshift({
                    href: "" + a + "",
                    title: d(this).find("img").attr("title")
                }) : b.gallerylist.push({
                    href: "" + a + "",
                    title: d(this).find("img").attr("title")
                })
            }) :
                b.gallerylist.push({
                    href: "" + b.zoomImage + "",
                    title: d(this).find("img").attr("title")
                });
            return b.gallerylist
        },
        changeZoomLevel: function (b) {
            this.scrollingLock = !0;
            this.newvalue = parseFloat(b).toFixed(2);
            newvalue = parseFloat(b).toFixed(2);
            maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight);
            maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth);
            "inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight /
                maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ?
                    (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)));
            "inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight /
                newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth =
                    newvalue, this.fullwidth = !1));
            scrcontinue = !1;
            "inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)));
            "inner" != this.options.zoomType && (scrcontinue = !0);
            scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight &&
                (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({
                    height: String(this.options.zoomWindowHeight / this.heightRatio) + "px"
                })), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType &&
                    "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({
                        width: String(this.options.zoomWindowWidth / this.widthRatio) + "px"
                    })), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth)));
            this.setPosition(this.currentLoc)
        },
        closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide();
            self.zoomLens && self.zoomLens.hide();
            self.zoomTint && self.zoomTint.hide()
        },
        changeState: function (b) {
            "enable" == b && (this.options.zoomEnabled = !0);
            "disable" == b && (this.options.zoomEnabled = !1)
        }
    };
    d.fn.elevateZoom = function (b) {
        return this.each(function () {
            var a = Object.create(k);
            a.init(b, this);
            d.data(this, "elevateZoom", a)
        })
    };
    d.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: 0.1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: 0.4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: 0.4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: d.noop,
        onZoomedImageLoaded: function () { },
        onImageSwap: d.noop,
        onImageSwapComplete: d.noop
    }
})(jQuery, window, document);
/*============================================

               08 -- Datatable 

==============================================*/
/*!
   Copyright 2008-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.20
 ©2008-2019 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (f, z, y) {
    f instanceof String && (f = String(f));
    for (var p = f.length, H = 0; H < p; H++) {
        var L = f[H];
        if (z.call(y, L, H, f)) return {
            i: H,
            v: L
        };
    }
    return {
        i: -1,
        v: void 0
    };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ?
        Object.defineProperty :
        function (f, z, y) {
            f != Array.prototype && f != Object.prototype && (f[z] = y.value);
        };
$jscomp.getGlobal = function (f) {
    return "undefined" != typeof window && window === f ?
        f :
        "undefined" != typeof global && null != global ?
            global :
            f;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (f, z, y, p) {
    if (z) {
        y = $jscomp.global;
        f = f.split(".");
        for (p = 0; p < f.length - 1; p++) {
            var H = f[p];
            H in y || (y[H] = {});
            y = y[H];
        }
        f = f[f.length - 1];
        p = y[f];
        z = z(p);
        z != p &&
            null != z &&
            $jscomp.defineProperty(y, f, {
                configurable: !0,
                writable: !0,
                value: z,
            });
    }
};
$jscomp.polyfill(
    "Array.prototype.find",
    function (f) {
        return f ?
            f :
            function (f, y) {
                return $jscomp.findInternal(this, f, y).v;
            };
    },
    "es6",
    "es3"
);
(function (f) {
    "function" === typeof define && define.amd ?
        define(["jquery"], function (z) {
            return f(z, window, document);
        }) :
        "object" === typeof exports ?
            (module.exports = function (z, y) {
                z || (z = window);
                y ||
                    (y =
                        "undefined" !== typeof window ?
                            require("jquery") :
                            require("jquery")(z));
                return f(y, z, z.document);
            }) :
            f(jQuery, window, document);
})(function (f, z, y, p) {
    function H(a) {
        var b,
            c,
            d = {};
        f.each(a, function (e, h) {
            (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
                -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") &&
                ((c = e.replace(b[0], b[2].toLowerCase())),
                    (d[c] = e),
                    "o" === b[1] && H(a[e]));
        });
        a._hungarianMap = d;
    }

    function L(a, b, c) {
        a._hungarianMap || H(a);
        var d;
        f.each(b, function (e, h) {
            d = a._hungarianMap[e];
            d === p ||
                (!c && b[d] !== p) ||
                ("o" === d.charAt(0) ?
                    (b[d] || (b[d] = {}), f.extend(!0, b[d], b[e]), L(a[d], b[d], c)) :
                    (b[d] = b[e]));
        });
    }

    function Ga(a) {
        var b = q.defaults.oLanguage,
            c = b.sDecimal;
        c && Ha(c);
        if (a) {
            var d = a.sZeroRecords;
            !a.sEmptyTable &&
                d &&
                "No data available in table" === b.sEmptyTable &&
                M(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords &&
                d &&
                "Loading..." === b.sLoadingRecords &&
                M(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && c !== a && Ha(a);
        }
    }

    function jb(a) {
        F(a, "ordering", "bSort");
        F(a, "orderMulti", "bSortMulti");
        F(a, "orderClasses", "bSortClasses");
        F(a, "orderCellsTop", "bSortCellsTop");
        F(a, "order", "aaSorting");
        F(a, "orderFixed", "aaSortingFixed");
        F(a, "paging", "bPaginate");
        F(a, "pagingType", "sPaginationType");
        F(a, "pageLength", "iDisplayLength");
        F(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
        if ((a = a.aoSearchCols))
            for (var b = 0, c = a.length; b < c; b++)
                a[b] && L(q.models.oSearch, a[b]);
    }

    function kb(a) {
        F(a, "orderable", "bSortable");
        F(a, "orderData", "aDataSort");
        F(a, "orderSequence", "asSorting");
        F(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" !== typeof b || f.isArray(b) || (a.aDataSort = [b]);
    }

    function lb(a) {
        if (!q.__browser) {
            var b = {};
            q.__browser = b;
            var c = f("<div/>")
                .css({
                    position: "fixed",
                    top: 0,
                    left: -1 * f(z).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden",
                })
                .append(
                    f("<div/>")
                        .css({
                            position: "absolute",
                            top: 1,
                            left: 1,
                            width: 100,
                            overflow: "scroll",
                        })
                        .append(f("<div/>").css({
                            width: "100%",
                            height: 10
                        }))
                )
                .appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove();
        }
        f.extend(a.oBrowser, q.__browser);
        a.oScroll.iBarWidth = q.__browser.barWidth;
    }

    function mb(a, b, c, d, e, h) {
        var g = !1;
        if (c !== p) {
            var k = c;
            g = !0;
        }
        for (; d !== e;)
            a.hasOwnProperty(d) &&
                ((k = g ? b(k, a[d], d, a) : a[d]), (g = !0), (d += h));
        return k;
    }

    function Ia(a, b) {
        var c = q.defaults.column,
            d = a.aoColumns.length;
        c = f.extend({}, q.models.oColumn, c, {
            nTh: b ? b : y.createElement("th"),
            sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
            aDataSort: c.aDataSort ? c.aDataSort : [d],
            mData: c.mData ? c.mData : d,
            idx: d,
        });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = f.extend({}, q.models.oSearch, c[d]);
        ma(a, d, f(b).data());
    }

    function ma(a, b, c) {
        b = a.aoColumns[b];
        var d = a.oClasses,
            e = f(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            h && (b.sWidthOrig = h[1]);
        }
        c !== p &&
            null !== c &&
            (kb(c),
                L(q.defaults.column, c, !0),
                c.mDataProp === p || c.mData || (c.mData = c.mDataProp),
                c.sType && (b._sManualType = c.sType),
                c.className && !c.sClass && (c.sClass = c.className),
                c.sClass && e.addClass(c.sClass),
                f.extend(b, c),
                M(b, c, "sWidth", "sWidthOrig"),
                c.iDataSort !== p && (b.aDataSort = [c.iDataSort]),
                M(b, c, "aDataSort"));
        var g = b.mData,
            k = U(g),
            l = b.mRender ? U(b.mRender) : null;
        c = function (a) {
            return "string" === typeof a && -1 !== a.indexOf("@");
        };
        b._bAttrSrc = f.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function (a, b, c) {
            var d = k(a, b, p, c);
            return l && b ? l(d, b, a, c) : d;
        };
        b.fnSetData = function (a, b, c) {
            return Q(g)(a, b, c);
        };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
        a = -1 !== f.inArray("asc", b.asSorting);
        c = -1 !== f.inArray("desc", b.asSorting);
        b.bSortable && (a || c) ?
            a && !c ?
                ((b.sSortingClass = d.sSortableAsc),
                    (b.sSortingClassJUI = d.sSortJUIAscAllowed)) :
                !a && c ?
                    ((b.sSortingClass = d.sSortableDesc),
                        (b.sSortingClassJUI = d.sSortJUIDescAllowed)) :
                    ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI)) :
            ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""));
    }

    function aa(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ja(a);
            for (var c = 0, d = b.length; c < d; c++)
                b[c].nTh.style.width = b[c].sWidth;
        }
        b = a.oScroll;
        ("" === b.sY && "" === b.sX) || na(a);
        A(a, null, "column-sizing", [a]);
    }

    function ba(a, b) {
        a = oa(a, "bVisible");
        return "number" === typeof a[b] ? a[b] : null;
    }

    function ca(a, b) {
        a = oa(a, "bVisible");
        b = f.inArray(b, a);
        return -1 !== b ? b : null;
    }

    function W(a) {
        var b = 0;
        f.each(a.aoColumns, function (a, d) {
            d.bVisible && "none" !== f(d.nTh).css("display") && b++;
        });
        return b;
    }

    function oa(a, b) {
        var c = [];
        f.map(a.aoColumns, function (a, e) {
            a[b] && c.push(e);
        });
        return c;
    }

    function Ka(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = q.ext.type.detect,
            e,
            h,
            g;
        var k = 0;
        for (e = b.length; k < e; k++) {
            var f = b[k];
            var n = [];
            if (!f.sType && f._sManualType) f.sType = f._sManualType;
            else if (!f.sType) {
                var m = 0;
                for (h = d.length; m < h; m++) {
                    var w = 0;
                    for (g = c.length; w < g; w++) {
                        n[w] === p && (n[w] = I(a, w, k, "type"));
                        var u = d[m](n[w], a);
                        if (!u && m !== d.length - 1) break;
                        if ("html" === u) break;
                    }
                    if (u) {
                        f.sType = u;
                        break;
                    }
                }
                f.sType || (f.sType = "string");
            }
        }
    }

    function nb(a, b, c, d) {
        var e,
            h,
            g,
            k = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                var l = b[e];
                var n = l.targets !== p ? l.targets : l.aTargets;
                f.isArray(n) || (n = [n]);
                var m = 0;
                for (h = n.length; m < h; m++)
                    if ("number" === typeof n[m] && 0 <= n[m]) {
                        for (; k.length <= n[m];) Ia(a);
                        d(n[m], l);
                    } else if ("number" === typeof n[m] && 0 > n[m])
                        d(k.length + n[m], l);
                    else if ("string" === typeof n[m]) {
                        var w = 0;
                        for (g = k.length; w < g; w++)
                            ("_all" == n[m] || f(k[w].nTh).hasClass(n[m])) && d(w, l);
                    }
            }
        if (c)
            for (e = 0, a = c.length; e < a; e++) d(e, c[e]);
    }

    function R(a, b, c, d) {
        var e = a.aoData.length,
            h = f.extend(!0, {}, q.models.oRow, {
                src: c ? "dom" : "data",
                idx: e
            });
        h._aData = b;
        a.aoData.push(h);
        for (var g = a.aoColumns, k = 0, l = g.length; k < l; k++)
            g[k].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== p && (a.aIds[b] = h);
        (!c && a.oFeatures.bDeferRender) || La(a, e, c, d);
        return e;
    }

    function pa(a, b) {
        var c;
        b instanceof f || (b = f(b));
        return b.map(function (b, e) {
            c = Ma(a, e);
            return R(a, c.data, e, c.cells);
        });
    }

    function I(a, b, c, d) {
        var e = a.iDraw,
            h = a.aoColumns[c],
            g = a.aoData[b]._aData,
            k = h.sDefaultContent,
            f = h.fnGetData(g, d, {
                settings: a,
                row: b,
                col: c
            });
        if (f === p)
            return (
                a.iDrawError != e &&
                null === k &&
                (O(
                    a,
                    0,
                    "Requested unknown parameter " +
                    ("function" == typeof h.mData ?
                        "{function}" :
                        "'" + h.mData + "'") +
                    " for row " +
                    b +
                    ", column " +
                    c,
                    4
                ),
                    (a.iDrawError = e)),
                k
            );
        if ((f === g || null === f) && null !== k && d !== p) f = k;
        else if ("function" === typeof f) return f.call(g);
        return null === f && "display" == d ? "" : f;
    }

    function ob(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
            settings: a,
            row: b,
            col: c,
        });
    }

    function Na(a) {
        return f.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
            return a.replace(/\\\./g, ".");
        });
    }

    function U(a) {
        if (f.isPlainObject(a)) {
            var b = {};
            f.each(a, function (a, c) {
                c && (b[a] = U(c));
            });
            return function (a, c, h, g) {
                var d = b[c] || b._;
                return d !== p ? d(a, c, h, g) : a;
            };
        }
        if (null === a)
            return function (a) {
                return a;
            };
        if ("function" === typeof a)
            return function (b, c, h, g) {
                return a(b, c, h, g);
            };
        if (
            "string" !== typeof a ||
            (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
        )
            return function (b, c) {
                return b[a];
            };
        var c = function (a, b, h) {
            if ("" !== h) {
                var d = Na(h);
                for (var e = 0, l = d.length; e < l; e++) {
                    h = d[e].match(da);
                    var n = d[e].match(X);
                    if (h) {
                        d[e] = d[e].replace(da, "");
                        "" !== d[e] && (a = a[d[e]]);
                        n = [];
                        d.splice(0, e + 1);
                        d = d.join(".");
                        if (f.isArray(a))
                            for (e = 0, l = a.length; e < l; e++) n.push(c(a[e], b, d));
                        a = h[0].substring(1, h[0].length - 1);
                        a = "" === a ? n : n.join(a);
                        break;
                    } else if (n) {
                        d[e] = d[e].replace(X, "");
                        a = a[d[e]]();
                        continue;
                    }
                    if (null === a || a[d[e]] === p) return p;
                    a = a[d[e]];
                }
            }
            return a;
        };
        return function (b, e) {
            return c(b, e, a);
        };
    }

    function Q(a) {
        if (f.isPlainObject(a)) return Q(a._);
        if (null === a) return function () { };
        if ("function" === typeof a)
            return function (b, d, e) {
                a(b, "set", d, e);
            };
        if (
            "string" !== typeof a ||
            (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
        )
            return function (b, d) {
                b[a] = d;
            };
        var b = function (a, d, e) {
            e = Na(e);
            var c = e[e.length - 1];
            for (var g, k, l = 0, n = e.length - 1; l < n; l++) {
                g = e[l].match(da);
                k = e[l].match(X);
                if (g) {
                    e[l] = e[l].replace(da, "");
                    a[e[l]] = [];
                    c = e.slice();
                    c.splice(0, l + 1);
                    g = c.join(".");
                    if (f.isArray(d))
                        for (k = 0, n = d.length; k < n; k++)
                            (c = {}), b(c, d[k], g), a[e[l]].push(c);
                    else a[e[l]] = d;
                    return;
                }
                k && ((e[l] = e[l].replace(X, "")), (a = a[e[l]](d)));
                if (null === a[e[l]] || a[e[l]] === p) a[e[l]] = {};
                a = a[e[l]];
            }
            if (c.match(X)) a[c.replace(X, "")](d);
            else a[c.replace(da, "")] = d;
        };
        return function (c, d) {
            return b(c, d, a);
        };
    }

    function Oa(a) {
        return J(a.aoData, "_aData");
    }

    function qa(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {};
    }

    function ra(a, b, c) {
        for (var d = -1, e = 0, h = a.length; e < h; e++)
            a[e] == b ? (d = e) : a[e] > b && a[e]--; -
                1 != d && c === p && a.splice(d, 1);
    }

    function ea(a, b, c, d) {
        var e = a.aoData[b],
            h,
            g = function (c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = I(a, b, d, "display");
            };
        if ("dom" !== c && ((c && "auto" !== c) || "dom" !== e.src)) {
            var k = e.anCells;
            if (k)
                if (d !== p) g(k[d], d);
                else
                    for (c = 0, h = k.length; c < h; c++) g(k[c], c);
        } else e._aData = Ma(a, e, d, d === p ? p : e._aData).data;
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== p) g[d].sType = null;
        else {
            c = 0;
            for (h = g.length; c < h; c++) g[c].sType = null;
            Pa(a, e);
        }
    }

    function Ma(a, b, c, d) {
        var e = [],
            h = b.firstChild,
            g,
            k = 0,
            l,
            n = a.aoColumns,
            m = a._rowReadObject;
        d = d !== p ? d : m ? {} : [];
        var w = function (a, b) {
            if ("string" === typeof a) {
                var c = a.indexOf("@"); -
                    1 !== c && ((c = a.substring(c + 1)), Q(a)(d, b.getAttribute(c)));
            }
        },
            u = function (a) {
                if (c === p || c === k)
                    (g = n[k]),
                        (l = f.trim(a.innerHTML)),
                        g && g._bAttrSrc ?
                            (Q(g.mData._)(d, l),
                                w(g.mData.sort, a),
                                w(g.mData.type, a),
                                w(g.mData.filter, a)) :
                            m ?
                                (g._setter || (g._setter = Q(g.mData)), g._setter(d, l)) :
                                (d[k] = l);
                k++;
            };
        if (h)
            for (; h;) {
                var q = h.nodeName.toUpperCase();
                if ("TD" == q || "TH" == q) u(h), e.push(h);
                h = h.nextSibling;
            }
        else
            for (e = b.anCells, h = 0, q = e.length; h < q; h++) u(e[h]);
        (b = b.firstChild ? b : b.nTr) &&
            (b = b.getAttribute("id")) &&
            Q(a.rowId)(d, b);
        return {
            data: d,
            cells: e
        };
    }

    function La(a, b, c, d) {
        var e = a.aoData[b],
            h = e._aData,
            g = [],
            k,
            l;
        if (null === e.nTr) {
            var n = c || y.createElement("tr");
            e.nTr = n;
            e.anCells = g;
            n._DT_RowIndex = b;
            Pa(a, e);
            var m = 0;
            for (k = a.aoColumns.length; m < k; m++) {
                var w = a.aoColumns[m];
                var p = (l = c ? !1 : !0) ? y.createElement(w.sCellType) : d[m];
                p._DT_CellIndex = {
                    row: b,
                    column: m
                };
                g.push(p);
                if (
                    l ||
                    !(
                        (c && !w.mRender && w.mData === m) ||
                        (f.isPlainObject(w.mData) && w.mData._ === m + ".display")
                    )
                )
                    p.innerHTML = I(a, b, m, "display");
                w.sClass && (p.className += " " + w.sClass);
                w.bVisible && !c ?
                    n.appendChild(p) :
                    !w.bVisible && c && p.parentNode.removeChild(p);
                w.fnCreatedCell &&
                    w.fnCreatedCell.call(a.oInstance, p, I(a, b, m), h, b, m);
            }
            A(a, "aoRowCreatedCallback", null, [n, h, b, g]);
        }
        e.nTr.setAttribute("role", "row");
    }

    function Pa(a, b) {
        var c = b.nTr,
            d = b._aData;
        if (c) {
            if ((a = a.rowIdFn(d))) c.id = a;
            d.DT_RowClass &&
                ((a = d.DT_RowClass.split(" ")),
                    (b.__rowc = b.__rowc ? ta(b.__rowc.concat(a)) : a),
                    f(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && f(c).attr(d.DT_RowAttr);
            d.DT_RowData && f(c).data(d.DT_RowData);
        }
    }

    function pb(a) {
        var b,
            c,
            d = a.nTHead,
            e = a.nTFoot,
            h = 0 === f("th, td", d).length,
            g = a.oClasses,
            k = a.aoColumns;
        h && (c = f("<tr/>").appendTo(d));
        var l = 0;
        for (b = k.length; l < b; l++) {
            var n = k[l];
            var m = f(n.nTh).addClass(n.sClass);
            h && m.appendTo(c);
            a.oFeatures.bSort &&
                (m.addClass(n.sSortingClass),
                    !1 !== n.bSortable &&
                    (m.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId),
                        Qa(a, n.nTh, l)));
            n.sTitle != m[0].innerHTML && m.html(n.sTitle);
            Ra(a, "header")(a, m, n, g);
        }
        h && fa(a.aoHeader, d);
        f(d).find(">tr").attr("role", "row");
        f(d).find(">tr>th, >tr>td").addClass(g.sHeaderTH);
        f(e).find(">tr>th, >tr>td").addClass(g.sFooterTH);
        if (null !== e)
            for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++)
                (n = k[l]),
                    (n.nTf = a[l].cell),
                    n.sClass && f(n.nTf).addClass(n.sClass);
    }

    function ha(a, b, c) {
        var d,
            e,
            h = [],
            g = [],
            k = a.aoColumns.length;
        if (b) {
            c === p && (c = !1);
            var l = 0;
            for (d = b.length; l < d; l++) {
                h[l] = b[l].slice();
                h[l].nTr = b[l].nTr;
                for (e = k - 1; 0 <= e; e--)
                    a.aoColumns[e].bVisible || c || h[l].splice(e, 1);
                g.push([]);
            }
            l = 0;
            for (d = h.length; l < d; l++) {
                if ((a = h[l].nTr))
                    for (;
                        (e = a.firstChild);) a.removeChild(e);
                e = 0;
                for (b = h[l].length; e < b; e++) {
                    var n = (k = 1);
                    if (g[l][e] === p) {
                        a.appendChild(h[l][e].cell);
                        for (
                            g[l][e] = 1; h[l + k] !== p && h[l][e].cell == h[l + k][e].cell;

                        )
                            (g[l + k][e] = 1), k++;
                        for (; h[l][e + n] !== p && h[l][e].cell == h[l][e + n].cell;) {
                            for (c = 0; c < k; c++) g[l + c][e + n] = 1;
                            n++;
                        }
                        f(h[l][e].cell).attr("rowspan", k).attr("colspan", n);
                    }
                }
            }
        }
    }

    function S(a) {
        var b = A(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== f.inArray(!1, b)) K(a, !1);
        else {
            b = [];
            var c = 0,
                d = a.asStripeClasses,
                e = d.length,
                h = a.oLanguage,
                g = a.iInitDisplayStart,
                k = "ssp" == D(a),
                l = a.aiDisplay;
            a.bDrawing = !0;
            g !== p &&
                -1 !== g &&
                ((a._iDisplayStart = k ? g : g >= a.fnRecordsDisplay() ? 0 : g),
                    (a.iInitDisplayStart = -1));
            g = a._iDisplayStart;
            var n = a.fnDisplayEnd();
            if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, K(a, !1);
            else if (!k) a.iDraw++;
            else if (!a.bDestroying && !qb(a)) return;
            if (0 !== l.length)
                for (h = k ? a.aoData.length : n, k = k ? 0 : g; k < h; k++) {
                    var m = l[k],
                        w = a.aoData[m];
                    null === w.nTr && La(a, m);
                    var u = w.nTr;
                    if (0 !== e) {
                        var q = d[c % e];
                        w._sRowStripe != q &&
                            (f(u).removeClass(w._sRowStripe).addClass(q),
                                (w._sRowStripe = q));
                    }
                    A(a, "aoRowCallback", null, [u, w._aData, c, k, m]);
                    b.push(u);
                    c++;
                }
            else
                (c = h.sZeroRecords),
                    1 == a.iDraw && "ajax" == D(a) ?
                        (c = h.sLoadingRecords) :
                        h.sEmptyTable && 0 === a.fnRecordsTotal() && (c = h.sEmptyTable),
                    (b[0] = f("<tr/>", {
                        class: e ? d[0] : ""
                    }).append(
                        f("<td />", {
                            valign: "top",
                            colSpan: W(a),
                            class: a.oClasses.sRowEmpty,
                        }).html(c)
                    )[0]);
            A(a, "aoHeaderCallback", "header", [
                f(a.nTHead).children("tr")[0],
                Oa(a),
                g,
                n,
                l,
            ]);
            A(a, "aoFooterCallback", "footer", [
                f(a.nTFoot).children("tr")[0],
                Oa(a),
                g,
                n,
                l,
            ]);
            d = f(a.nTBody);
            d.children().detach();
            d.append(f(b));
            A(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1;
        }
    }

    function V(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && rb(a);
        d ? ia(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        S(a);
        a._drawHold = !1;
    }

    function sb(a) {
        var b = a.oClasses,
            c = f(a.nTable);
        c = f("<div/>").insertBefore(c);
        var d = a.oFeatures,
            e = f("<div/>", {
                id: a.sTableId + "_wrapper",
                class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter),
            });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var h = a.sDom.split(""), g, k, l, n, m, p, u = 0; u < h.length; u++) {
            g = null;
            k = h[u];
            if ("<" == k) {
                l = f("<div/>")[0];
                n = h[u + 1];
                if ("'" == n || '"' == n) {
                    m = "";
                    for (p = 2; h[u + p] != n;)(m += h[u + p]), p++;
                    "H" == m ? (m = b.sJUIHeader) : "F" == m && (m = b.sJUIFooter); -
                        1 != m.indexOf(".") ?
                        ((n = m.split(".")),
                            (l.id = n[0].substr(1, n[0].length - 1)),
                            (l.className = n[1])) :
                        "#" == m.charAt(0) ?
                            (l.id = m.substr(1, m.length - 1)) :
                            (l.className = m);
                    u += p;
                }
                e.append(l);
                e = f(l);
            } else if (">" == k) e = e.parent();
            else if ("l" == k && d.bPaginate && d.bLengthChange) g = tb(a);
            else if ("f" == k && d.bFilter) g = ub(a);
            else if ("r" == k && d.bProcessing) g = vb(a);
            else if ("t" == k) g = wb(a);
            else if ("i" == k && d.bInfo) g = xb(a);
            else if ("p" == k && d.bPaginate) g = yb(a);
            else if (0 !== q.ext.feature.length)
                for (l = q.ext.feature, p = 0, n = l.length; p < n; p++)
                    if (k == l[p].cFeature) {
                        g = l[p].fnInit(a);
                        break;
                    }
            g &&
                ((l = a.aanFeatures), l[k] || (l[k] = []), l[k].push(g), e.append(g));
        }
        c.replaceWith(e);
        a.nHolding = null;
    }

    function fa(a, b) {
        b = f(b).children("tr");
        var c, d, e;
        a.splice(0, a.length);
        var h = 0;
        for (e = b.length; h < e; h++) a.push([]);
        h = 0;
        for (e = b.length; h < e; h++) {
            var g = b[h];
            for (c = g.firstChild; c;) {
                if (
                    "TD" == c.nodeName.toUpperCase() ||
                    "TH" == c.nodeName.toUpperCase()
                ) {
                    var k = 1 * c.getAttribute("colspan");
                    var l = 1 * c.getAttribute("rowspan");
                    k = k && 0 !== k && 1 !== k ? k : 1;
                    l = l && 0 !== l && 1 !== l ? l : 1;
                    var n = 0;
                    for (d = a[h]; d[n];) n++;
                    var m = n;
                    var p = 1 === k ? !0 : !1;
                    for (d = 0; d < k; d++)
                        for (n = 0; n < l; n++)
                            (a[h + n][m + d] = {
                                cell: c,
                                unique: p
                            }), (a[h + n].nTr = g);
                }
                c = c.nextSibling;
            }
        }
    }

    function ua(a, b, c) {
        var d = [];
        c || ((c = a.aoHeader), b && ((c = []), fa(c, b)));
        b = 0;
        for (var e = c.length; b < e; b++)
            for (var h = 0, g = c[b].length; h < g; h++)
                !c[b][h].unique || (d[h] && a.bSortCellsTop) || (d[h] = c[b][h].cell);
        return d;
    }

    function va(a, b, c) {
        A(a, "aoServerParams", "serverParams", [b]);
        if (b && f.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            f.each(b, function (a, b) {
                (a = b.name.match(e)) ?
                    ((a = a[0]), d[a] || (d[a] = []), d[a].push(b.value)) :
                    (d[b.name] = b.value);
            });
            b = d;
        }
        var h = a.ajax,
            g = a.oInstance,
            k = function (b) {
                A(a, null, "xhr", [a, b, a.jqXHR]);
                c(b);
            };
        if (f.isPlainObject(h) && h.data) {
            var l = h.data;
            var n = "function" === typeof l ? l(b, a) : l;
            b = "function" === typeof l && n ? n : f.extend(!0, b, n);
            delete h.data;
        }
        n = {
            data: b,
            success: function (b) {
                var c = b.error || b.sError;
                c && O(a, 0, c);
                a.json = b;
                k(b);
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function (b, c, d) {
                d = A(a, null, "xhr", [a, null, a.jqXHR]); -
                    1 === f.inArray(!0, d) &&
                    ("parsererror" == c ?
                        O(a, 0, "Invalid JSON response", 1) :
                        4 === b.readyState && O(a, 0, "Ajax error", 7));
                K(a, !1);
            },
        };
        a.oAjaxData = b;
        A(a, null, "preXhr", [a, b]);
        a.fnServerData ?
            a.fnServerData.call(
                g,
                a.sAjaxSource,
                f.map(b, function (a, b) {
                    return {
                        name: b,
                        value: a
                    };
                }),
                k,
                a
            ) :
            a.sAjaxSource || "string" === typeof h ?
                (a.jqXHR = f.ajax(f.extend(n, {
                    url: h || a.sAjaxSource
                }))) :
                "function" === typeof h ?
                    (a.jqXHR = h.call(g, b, k, a)) :
                    ((a.jqXHR = f.ajax(f.extend(n, h))), (h.data = l));
    }

    function qb(a) {
        return a.bAjaxDataGet ?
            (a.iDraw++,
                K(a, !0),
                va(a, zb(a), function (b) {
                    Ab(a, b);
                }),
                !1) :
            !0;
    }

    function zb(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            h = a.aoPreSearchCols,
            g = [],
            k = Y(a);
        var l = a._iDisplayStart;
        var n = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var m = function (a, b) {
            g.push({
                name: a,
                value: b
            });
        };
        m("sEcho", a.iDraw);
        m("iColumns", c);
        m("sColumns", J(b, "sName").join(","));
        m("iDisplayStart", l);
        m("iDisplayLength", n);
        var p = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: l,
            length: n,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            },
        };
        for (l = 0; l < c; l++) {
            var u = b[l];
            var sa = h[l];
            n = "function" == typeof u.mData ? "function" : u.mData;
            p.columns.push({
                data: n,
                name: u.sName,
                searchable: u.bSearchable,
                orderable: u.bSortable,
                search: {
                    value: sa.sSearch,
                    regex: sa.bRegex
                },
            });
            m("mDataProp_" + l, n);
            d.bFilter &&
                (m("sSearch_" + l, sa.sSearch),
                    m("bRegex_" + l, sa.bRegex),
                    m("bSearchable_" + l, u.bSearchable));
            d.bSort && m("bSortable_" + l, u.bSortable);
        }
        d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
        d.bSort &&
            (f.each(k, function (a, b) {
                p.order.push({
                    column: b.col,
                    dir: b.dir
                });
                m("iSortCol_" + a, b.col);
                m("sSortDir_" + a, b.dir);
            }),
                m("iSortingCols", k.length));
        b = q.ext.legacy.ajax;
        return null === b ? (a.sAjaxSource ? g : p) : b ? g : p;
    }

    function Ab(a, b) {
        var c = function (a, c) {
            return b[a] !== p ? b[a] : b[c];
        },
            d = wa(a, b),
            e = c("sEcho", "draw"),
            h = c("iTotalRecords", "recordsTotal");
        c = c("iTotalDisplayRecords", "recordsFiltered");
        if (e) {
            if (1 * e < a.iDraw) return;
            a.iDraw = 1 * e;
        }
        qa(a);
        a._iRecordsTotal = parseInt(h, 10);
        a._iRecordsDisplay = parseInt(c, 10);
        e = 0;
        for (h = d.length; e < h; e++) R(a, d[e]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        S(a);
        a._bInitComplete || xa(a, b);
        a.bAjaxDataGet = !0;
        K(a, !1);
    }

    function wa(a, b) {
        a =
            f.isPlainObject(a.ajax) && a.ajax.dataSrc !== p ?
                a.ajax.dataSrc :
                a.sAjaxDataProp;
        return "data" === a ? b.aaData || b[a] : "" !== a ? U(a)(b) : b;
    }

    function ub(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            h = a.aanFeatures,
            g = '<input type="search" class="' + b.sFilterInput + '"/>',
            k = d.sSearch;
        k = k.match(/_INPUT_/) ? k.replace("_INPUT_", g) : k + g;
        b = f("<div/>", {
            id: h.f ? null : c + "_filter",
            class: b.sFilter,
        }).append(f("<label/>").append(k));
        h = function () {
            var b = this.value ? this.value : "";
            b != e.sSearch &&
                (ia(a, {
                    sSearch: b,
                    bRegex: e.bRegex,
                    bSmart: e.bSmart,
                    bCaseInsensitive: e.bCaseInsensitive,
                }),
                    (a._iDisplayStart = 0),
                    S(a));
        };
        g = null !== a.searchDelay ? a.searchDelay : "ssp" === D(a) ? 400 : 0;
        var l = f("input", b)
            .val(e.sSearch)
            .attr("placeholder", d.sSearchPlaceholder)
            .on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Sa(h, g) : h)
            .on("keypress.DT", function (a) {
                if (13 == a.keyCode) return !1;
            })
            .attr("aria-controls", c);
        f(a.nTable).on("search.dt.DT", function (b, c) {
            if (a === c)
                try {
                    l[0] !== y.activeElement && l.val(e.sSearch);
                } catch (w) { }
        });
        return b[0];
    }

    function ia(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            h = function (a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive;
            },
            g = function (a) {
                return a.bEscapeRegex !== p ? !a.bEscapeRegex : a.bRegex;
            };
        Ka(a);
        if ("ssp" != D(a)) {
            Bb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
            h(b);
            for (b = 0; b < e.length; b++)
                Cb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
            Db(a);
        } else h(b);
        a.bFiltered = !0;
        A(a, null, "search", [a]);
    }

    function Db(a) {
        for (
            var b = q.ext.search, c = a.aiDisplay, d, e, h = 0, g = b.length; h < g; h++
        ) {
            for (var k = [], l = 0, n = c.length; l < n; l++)
                (e = c[l]),
                    (d = a.aoData[e]),
                    b[h](a, d._aFilterData, e, d._aData, l) && k.push(e);
            c.length = 0;
            f.merge(c, k);
        }
    }

    function Cb(a, b, c, d, e, h) {
        if ("" !== b) {
            var g = [],
                k = a.aiDisplay;
            d = Ta(b, d, e, h);
            for (e = 0; e < k.length; e++)
                (b = a.aoData[k[e]]._aFilterData[c]), d.test(b) && g.push(k[e]);
            a.aiDisplay = g;
        }
    }

    function Bb(a, b, c, d, e, h) {
        e = Ta(b, d, e, h);
        var g = a.oPreviousSearch.sSearch,
            k = a.aiDisplayMaster;
        h = [];
        0 !== q.ext.search.length && (c = !0);
        var f = Eb(a);
        if (0 >= b.length) a.aiDisplay = k.slice();
        else {
            if (f || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted)
                a.aiDisplay = k.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++)
                e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
            a.aiDisplay = h;
        }
    }

    function Ta(a, b, c, d) {
        a = b ? a : Ua(a);
        c &&
            (a =
                "^(?=.*?" +
                f
                    .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
                        if ('"' === a.charAt(0)) {
                            var b = a.match(/^"(.*)"$/);
                            a = b ? b[1] : a;
                        }
                        return a.replace('"', "");
                    })
                    .join(")(?=.*?") +
                ").*$");
        return new RegExp(a, d ? "i" : "");
    }

    function Eb(a) {
        var b = a.aoColumns,
            c,
            d,
            e = q.ext.type.search;
        var h = !1;
        var g = 0;
        for (c = a.aoData.length; g < c; g++) {
            var k = a.aoData[g];
            if (!k._aFilterData) {
                var f = [];
                var n = 0;
                for (d = b.length; n < d; n++) {
                    h = b[n];
                    if (h.bSearchable) {
                        var m = I(a, g, n, "filter");
                        e[h.sType] && (m = e[h.sType](m));
                        null === m && (m = "");
                        "string" !== typeof m && m.toString && (m = m.toString());
                    } else m = "";
                    m.indexOf &&
                        -1 !== m.indexOf("&") &&
                        ((ya.innerHTML = m), (m = $b ? ya.textContent : ya.innerText));
                    m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
                    f.push(m);
                }
                k._aFilterData = f;
                k._sFilterRow = f.join("  ");
                h = !0;
            }
        }
        return h;
    }

    function Fb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive,
        };
    }

    function Gb(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive,
        };
    }

    function xb(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = f("<div/>", {
                class: a.oClasses.sInfo,
                id: c ? null : b + "_info"
            });
        c ||
            (a.aoDrawCallback.push({
                fn: Hb,
                sName: "information"
            }),
                d.attr("role", "status").attr("aria-live", "polite"),
                f(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0];
    }

    function Hb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                h = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                k = g ? c.sInfo : c.sInfoEmpty;
            g !== h && (k += " " + c.sInfoFiltered);
            k += c.sInfoPostFix;
            k = Ib(a, k);
            c = c.fnInfoCallback;
            null !== c && (k = c.call(a.oInstance, a, d, e, h, g, k));
            f(b).html(k);
        }
    }

    function Ib(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay(),
            g = -1 === e;
        return b
            .replace(/_START_/g, c.call(a, d))
            .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
            .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
            .replace(/_TOTAL_/g, c.call(a, h))
            .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
            .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(h / e)));
    }

    function ja(a) {
        var b = a.iInitDisplayStart,
            c = a.aoColumns;
        var d = a.oFeatures;
        var e = a.bDeferLoading;
        if (a.bInitialised) {
            sb(a);
            pb(a);
            ha(a, a.aoHeader);
            ha(a, a.aoFooter);
            K(a, !0);
            d.bAutoWidth && Ja(a);
            var h = 0;
            for (d = c.length; h < d; h++) {
                var g = c[h];
                g.sWidth && (g.nTh.style.width = B(g.sWidth));
            }
            A(a, null, "preInit", [a]);
            V(a);
            c = D(a);
            if ("ssp" != c || e)
                "ajax" == c ?
                    va(
                        a,
                        [],
                        function (c) {
                            var d = wa(a, c);
                            for (h = 0; h < d.length; h++) R(a, d[h]);
                            a.iInitDisplayStart = b;
                            V(a);
                            K(a, !1);
                            xa(a, c);
                        },
                        a
                    ) :
                    (K(a, !1), xa(a));
        } else
            setTimeout(function () {
                ja(a);
            }, 200);
    }

    function xa(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && aa(a);
        A(a, null, "plugin-init", [a, b]);
        A(a, "aoInitComplete", "init", [a, b]);
    }

    function Va(a, b) {
        b = parseInt(b, 10);
        a._iDisplayLength = b;
        Wa(a);
        A(a, null, "length", [a, b]);
    }

    function tb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.aLengthMenu,
            e = f.isArray(d[0]),
            h = e ? d[0] : d;
        d = e ? d[1] : d;
        e = f("<select/>", {
            name: c + "_length",
            "aria-controls": c,
            class: b.sLengthSelect,
        });
        for (var g = 0, k = h.length; g < k; g++)
            e[0][g] = new Option(
                "number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g],
                h[g]
            );
        var l = f("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (l[0].id = c + "_length");
        l.children().append(
            a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)
        );
        f("select", l)
            .val(a._iDisplayLength)
            .on("change.DT", function (b) {
                Va(a, f(this).val());
                S(a);
            });
        f(a.nTable).on("length.dt.DT", function (b, c, d) {
            a === c && f("select", l).val(d);
        });
        return l[0];
    }

    function yb(a) {
        var b = a.sPaginationType,
            c = q.ext.pager[b],
            d = "function" === typeof c,
            e = function (a) {
                S(a);
            };
        b = f("<div/>").addClass(a.oClasses.sPaging + b)[0];
        var h = a.aanFeatures;
        d || c.fnInit(a, b, e);
        h.p ||
            ((b.id = a.sTableId + "_paginate"),
                a.aoDrawCallback.push({
                    fn: function (a) {
                        if (d) {
                            var b = a._iDisplayStart,
                                g = a._iDisplayLength,
                                f = a.fnRecordsDisplay(),
                                m = -1 === g;
                            b = m ? 0 : Math.ceil(b / g);
                            g = m ? 1 : Math.ceil(f / g);
                            f = c(b, g);
                            var p;
                            m = 0;
                            for (p = h.p.length; m < p; m++)
                                Ra(a, "pageButton")(a, h.p[m], m, f, b, g);
                        } else c.fnUpdate(a, e);
                    },
                    sName: "pagination",
                }));
        return b;
    }

    function Xa(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay();
        0 === h || -1 === e ?
            (d = 0) :
            "number" === typeof b ?
                ((d = b * e), d > h && (d = 0)) :
                "first" == b ?
                    (d = 0) :
                    "previous" == b ?
                        ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0)) :
                        "next" == b ?
                            d + e < h && (d += e) :
                            "last" == b ?
                                (d = Math.floor((h - 1) / e) * e) :
                                O(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (A(a, null, "page", [a]), c && S(a));
        return b;
    }

    function vb(a) {
        return f("<div/>", {
            id: a.aanFeatures.r ? null : a.sTableId + "_processing",
            class: a.oClasses.sProcessing,
        })
            .html(a.oLanguage.sProcessing)
            .insertBefore(a.nTable)[0];
    }

    function K(a, b) {
        a.oFeatures.bProcessing &&
            f(a.aanFeatures.r).css("display", b ? "block" : "none");
        A(a, null, "processing", [a, b]);
    }

    function wb(a) {
        var b = f(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            h = a.oClasses,
            g = b.children("caption"),
            k = g.length ? g[0]._captionSide : null,
            l = f(b[0].cloneNode(!1)),
            n = f(b[0].cloneNode(!1)),
            m = b.children("tfoot");
        m.length || (m = null);
        l = f("<div/>", {
            class: h.sScrollWrapper
        })
            .append(
                f("<div/>", {
                    class: h.sScrollHead
                })
                    .css({
                        overflow: "hidden",
                        position: "relative",
                        border: 0,
                        width: d ? (d ? B(d) : null) : "100%",
                    })
                    .append(
                        f("<div/>", {
                            class: h.sScrollHeadInner
                        })
                            .css({
                                "box-sizing": "content-box",
                                width: c.sXInner || "100%"
                            })
                            .append(
                                l
                                    .removeAttr("id")
                                    .css("margin-left", 0)
                                    .append("top" === k ? g : null)
                                    .append(b.children("thead"))
                            )
                    )
            )
            .append(
                f("<div/>", {
                    class: h.sScrollBody
                })
                    .css({
                        position: "relative",
                        overflow: "auto",
                        width: d ? B(d) : null,
                    })
                    .append(b)
            );
        m &&
            l.append(
                f("<div/>", {
                    class: h.sScrollFoot
                })
                    .css({
                        overflow: "hidden",
                        border: 0,
                        width: d ? (d ? B(d) : null) : "100%",
                    })
                    .append(
                        f("<div/>", {
                            class: h.sScrollFootInner
                        }).append(
                            n
                                .removeAttr("id")
                                .css("margin-left", 0)
                                .append("bottom" === k ? g : null)
                                .append(b.children("tfoot"))
                        )
                    )
            );
        b = l.children();
        var p = b[0];
        h = b[1];
        var u = m ? b[2] : null;
        if (d)
            f(h).on("scroll.DT", function (a) {
                a = this.scrollLeft;
                p.scrollLeft = a;
                m && (u.scrollLeft = a);
            });
        f(h).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = p;
        a.nScrollBody = h;
        a.nScrollFoot = u;
        a.aoDrawCallback.push({
            fn: na,
            sName: "scrolling"
        });
        return l[0];
    }

    function na(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY;
        b = b.iBarWidth;
        var h = f(a.nScrollHead),
            g = h[0].style,
            k = h.children("div"),
            l = k[0].style,
            n = k.children("table");
        k = a.nScrollBody;
        var m = f(k),
            w = k.style,
            u = f(a.nScrollFoot).children("div"),
            q = u.children("table"),
            t = f(a.nTHead),
            r = f(a.nTable),
            v = r[0],
            za = v.style,
            T = a.nTFoot ? f(a.nTFoot) : null,
            A = a.oBrowser,
            x = A.bScrollOversize,
            ac = J(a.aoColumns, "nTh"),
            Ya = [],
            y = [],
            z = [],
            C = [],
            G,
            H = function (a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0;
            };
        var D = k.scrollHeight > k.clientHeight;
        if (a.scrollBarVis !== D && a.scrollBarVis !== p)
            (a.scrollBarVis = D), aa(a);
        else {
            a.scrollBarVis = D;
            r.children("thead, tfoot").remove();
            if (T) {
                var E = T.clone().prependTo(r);
                var F = T.find("tr");
                E = E.find("tr");
            }
            var I = t.clone().prependTo(r);
            t = t.find("tr");
            D = I.find("tr");
            I.find("th, td").removeAttr("tabindex");
            c || ((w.width = "100%"), (h[0].style.width = "100%"));
            f.each(ua(a, I), function (b, c) {
                G = ba(a, b);
                c.style.width = a.aoColumns[G].sWidth;
            });
            T &&
                N(function (a) {
                    a.style.width = "";
                }, E);
            h = r.outerWidth();
            "" === c
                ?
                ((za.width = "100%"),
                    x &&
                    (r.find("tbody").height() > k.offsetHeight ||
                        "scroll" == m.css("overflow-y")) &&
                    (za.width = B(r.outerWidth() - b)),
                    (h = r.outerWidth())) :
                "" !== d && ((za.width = B(d)), (h = r.outerWidth()));
            N(H, D);
            N(function (a) {
                z.push(a.innerHTML);
                Ya.push(B(f(a).css("width")));
            }, D);
            N(function (a, b) {
                -1 !== f.inArray(a, ac) && (a.style.width = Ya[b]);
            }, t);
            f(D).height(0);
            T &&
                (N(H, E),
                    N(function (a) {
                        C.push(a.innerHTML);
                        y.push(B(f(a).css("width")));
                    }, E),
                    N(function (a, b) {
                        a.style.width = y[b];
                    }, F),
                    f(E).height(0));
            N(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "hidden";
                a.style.width = Ya[b];
            }, D);
            T &&
                N(function (a, b) {
                    a.innerHTML = '<div class="dataTables_sizing">' + C[b] + "</div>";
                    a.childNodes[0].style.height = "0";
                    a.childNodes[0].style.overflow = "hidden";
                    a.style.width = y[b];
                }, E);
            r.outerWidth() < h ?
                ((F =
                    k.scrollHeight > k.offsetHeight || "scroll" == m.css("overflow-y") ?
                        h + b :
                        h),
                    x &&
                    (k.scrollHeight > k.offsetHeight ||
                        "scroll" == m.css("overflow-y")) &&
                    (za.width = B(F - b)),
                    ("" !== c && "" === d) || O(a, 1, "Possible column misalignment", 6)) :
                (F = "100%");
            w.width = B(F);
            g.width = B(F);
            T && (a.nScrollFoot.style.width = B(F));
            !e && x && (w.height = B(v.offsetHeight + b));
            c = r.outerWidth();
            n[0].style.width = B(c);
            l.width = B(c);
            d = r.height() > k.clientHeight || "scroll" == m.css("overflow-y");
            e = "padding" + (A.bScrollbarLeft ? "Left" : "Right");
            l[e] = d ? b + "px" : "0px";
            T &&
                ((q[0].style.width = B(c)),
                    (u[0].style.width = B(c)),
                    (u[0].style[e] = d ? b + "px" : "0px"));
            r.children("colgroup").insertBefore(r.children("thead"));
            m.trigger("scroll");
            (!a.bSorted && !a.bFiltered) || a._drawHold || (k.scrollTop = 0);
        }
    }

    function N(a, b, c) {
        for (var d = 0, e = 0, h = b.length, g, k; e < h;) {
            g = b[e].firstChild;
            for (k = c ? c[e].firstChild : null; g;)
                1 === g.nodeType && (c ? a(g, k, d) : a(g, d), d++),
                    (g = g.nextSibling),
                    (k = c ? k.nextSibling : null);
            e++;
        }
    }

    function Ja(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            h = d.sX,
            g = d.sXInner,
            k = c.length,
            l = oa(a, "bVisible"),
            n = f("th", a.nTHead),
            m = b.getAttribute("width"),
            p = b.parentNode,
            u = !1,
            q,
            t = a.oBrowser;
        d = t.bScrollOversize;
        (q = b.style.width) && -1 !== q.indexOf("%") && (m = q);
        for (q = 0; q < l.length; q++) {
            var r = c[l[q]];
            null !== r.sWidth && ((r.sWidth = Jb(r.sWidthOrig, p)), (u = !0));
        }
        if (d || (!u && !h && !e && k == W(a) && k == n.length))
            for (q = 0; q < k; q++)
                (l = ba(a, q)), null !== l && (c[l].sWidth = B(n.eq(q).width()));
        else {
            k = f(b).clone().css("visibility", "hidden").removeAttr("id");
            k.find("tbody tr").remove();
            var v = f("<tr/>").appendTo(k.find("tbody"));
            k.find("thead, tfoot").remove();
            k.append(f(a.nTHead).clone()).append(f(a.nTFoot).clone());
            k.find("tfoot th, tfoot td").css("width", "");
            n = ua(a, k.find("thead")[0]);
            for (q = 0; q < l.length; q++)
                (r = c[l[q]]),
                    (n[q].style.width =
                        null !== r.sWidthOrig && "" !== r.sWidthOrig ?
                            B(r.sWidthOrig) :
                            ""),
                    r.sWidthOrig &&
                    h &&
                    f(n[q]).append(
                        f("<div/>").css({
                            width: r.sWidthOrig,
                            margin: 0,
                            padding: 0,
                            border: 0,
                            height: 1,
                        })
                    );
            if (a.aoData.length)
                for (q = 0; q < l.length; q++)
                    (u = l[q]),
                        (r = c[u]),
                        f(Kb(a, u)).clone(!1).append(r.sContentPadding).appendTo(v);
            f("[name]", k).removeAttr("name");
            r = f("<div/>")
                .css(
                    h || e ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 1,
                        right: 0,
                        overflow: "hidden",
                    } : {}
                )
                .append(k)
                .appendTo(p);
            h && g ?
                k.width(g) :
                h ?
                    (k.css("width", "auto"),
                        k.removeAttr("width"),
                        k.width() < p.clientWidth && m && k.width(p.clientWidth)) :
                    e ?
                        k.width(p.clientWidth) :
                        m && k.width(m);
            for (q = e = 0; q < l.length; q++)
                (p = f(n[q])),
                    (g = p.outerWidth() - p.width()),
                    (p = t.bBounding ?
                        Math.ceil(n[q].getBoundingClientRect().width) :
                        p.outerWidth()),
                    (e += p),
                    (c[l[q]].sWidth = B(p - g));
            b.style.width = B(e);
            r.remove();
        }
        m && (b.style.width = B(m));
        (!m && !h) ||
            a._reszEvt ||
            ((b = function () {
                f(z).on(
                    "resize.DT-" + a.sInstance,
                    Sa(function () {
                        aa(a);
                    })
                );
            }),
                d ? setTimeout(b, 1e3) : b(),
                (a._reszEvt = !0));
    }

    function Jb(a, b) {
        if (!a) return 0;
        a = f("<div/>")
            .css("width", B(a))
            .appendTo(b || y.body);
        b = a[0].offsetWidth;
        a.remove();
        return b;
    }

    function Kb(a, b) {
        var c = Lb(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return d.nTr ? d.anCells[b] : f("<td/>").html(I(a, c, b, "display"))[0];
    }

    function Lb(a, b) {
        for (var c, d = -1, e = -1, h = 0, g = a.aoData.length; h < g; h++)
            (c = I(a, h, b, "display") + ""),
                (c = c.replace(bc, "")),
                (c = c.replace(/&nbsp;/g, " ")),
                c.length > d && ((d = c.length), (e = h));
        return e;
    }

    function B(a) {
        return null === a ?
            "0px" :
            "number" == typeof a ?
                0 > a ?
                    "0px" :
                    a + "px" :
                a.match(/\d$/) ?
                    a + "px" :
                    a;
    }

    function Y(a) {
        var b = [],
            c = a.aoColumns;
        var d = a.aaSortingFixed;
        var e = f.isPlainObject(d);
        var h = [];
        var g = function (a) {
            a.length && !f.isArray(a[0]) ? h.push(a) : f.merge(h, a);
        };
        f.isArray(d) && g(d);
        e && d.pre && g(d.pre);
        g(a.aaSorting);
        e && d.post && g(d.post);
        for (a = 0; a < h.length; a++) {
            var k = h[a][0];
            g = c[k].aDataSort;
            d = 0;
            for (e = g.length; d < e; d++) {
                var l = g[d];
                var n = c[l].sType || "string";
                h[a]._idx === p && (h[a]._idx = f.inArray(h[a][1], c[l].asSorting));
                b.push({
                    src: k,
                    col: l,
                    dir: h[a][1],
                    index: h[a]._idx,
                    type: n,
                    formatter: q.ext.type.order[n + "-pre"],
                });
            }
        }
        return b;
    }

    function rb(a) {
        var b,
            c = [],
            d = q.ext.type.order,
            e = a.aoData,
            h = 0,
            g = a.aiDisplayMaster;
        Ka(a);
        var k = Y(a);
        var f = 0;
        for (b = k.length; f < b; f++) {
            var n = k[f];
            n.formatter && h++;
            Mb(a, n.col);
        }
        if ("ssp" != D(a) && 0 !== k.length) {
            f = 0;
            for (b = g.length; f < b; f++) c[g[f]] = f;
            h === k.length ?
                g.sort(function (a, b) {
                    var d,
                        h = k.length,
                        g = e[a]._aSortData,
                        f = e[b]._aSortData;
                    for (d = 0; d < h; d++) {
                        var l = k[d];
                        var m = g[l.col];
                        var n = f[l.col];
                        m = m < n ? -1 : m > n ? 1 : 0;
                        if (0 !== m) return "asc" === l.dir ? m : -m;
                    }
                    m = c[a];
                    n = c[b];
                    return m < n ? -1 : m > n ? 1 : 0;
                }) :
                g.sort(function (a, b) {
                    var h,
                        g = k.length,
                        f = e[a]._aSortData,
                        l = e[b]._aSortData;
                    for (h = 0; h < g; h++) {
                        var m = k[h];
                        var n = f[m.col];
                        var p = l[m.col];
                        m = d[m.type + "-" + m.dir] || d["string-" + m.dir];
                        n = m(n, p);
                        if (0 !== n) return n;
                    }
                    n = c[a];
                    p = c[b];
                    return n < p ? -1 : n > p ? 1 : 0;
                });
        }
        a.bSorted = !0;
    }

    function Nb(a) {
        var b = a.aoColumns,
            c = Y(a);
        a = a.oLanguage.oAria;
        for (var d = 0, e = b.length; d < e; d++) {
            var h = b[d];
            var g = h.asSorting;
            var k = h.sTitle.replace(/<.*?>/g, "");
            var f = h.nTh;
            f.removeAttribute("aria-sort");
            h.bSortable &&
                (0 < c.length && c[0].col == d ?
                    (f.setAttribute(
                        "aria-sort",
                        "asc" == c[0].dir ? "ascending" : "descending"
                    ),
                        (h = g[c[0].index + 1] || g[0])) :
                    (h = g[0]),
                    (k += "asc" === h ? a.sSortAscending : a.sSortDescending));
            f.setAttribute("aria-label", k);
        }
    }

    function Za(a, b, c, d) {
        var e = a.aaSorting,
            h = a.aoColumns[b].asSorting,
            g = function (a, b) {
                var c = a._idx;
                c === p && (c = f.inArray(a[1], h));
                return c + 1 < h.length ? c + 1 : b ? null : 0;
            };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ?
            ((c = f.inArray(b, J(e, "0"))),
                -1 !== c ?
                    ((b = g(e[c], !0)),
                        null === b && 1 === e.length && (b = 0),
                        null === b ? e.splice(c, 1) : ((e[c][1] = h[b]), (e[c]._idx = b))) :
                    (e.push([b, h[0], 0]), (e[e.length - 1]._idx = 0))) :
            e.length && e[0][0] == b ?
                ((b = g(e[0])), (e.length = 1), (e[0][1] = h[b]), (e[0]._idx = b)) :
                ((e.length = 0), e.push([b, h[0]]), (e[0]._idx = 0));
        V(a);
        "function" == typeof d && d(a);
    }

    function Qa(a, b, c, d) {
        var e = a.aoColumns[c];
        $a(b, {}, function (b) {
            !1 !== e.bSortable &&
                (a.oFeatures.bProcessing ?
                    (K(a, !0),
                        setTimeout(function () {
                            Za(a, c, b.shiftKey, d);
                            "ssp" !== D(a) && K(a, !1);
                        }, 0)) :
                    Za(a, c, b.shiftKey, d));
        });
    }

    function Aa(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = Y(a),
            e = a.oFeatures,
            h;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (h = b.length; e < h; e++) {
                var g = b[e].src;
                f(J(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            }
            e = 0;
            for (h = d.length; e < h; e++)
                (g = d[e].src),
                    f(J(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
        }
        a.aLastSort = d;
    }

    function Mb(a, b) {
        var c = a.aoColumns[b],
            d = q.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, ca(a, b)));
        for (
            var h, g = q.ext.type.order[c.sType + "-pre"], k = 0, f = a.aoData.length; k < f; k++
        )
            if (
                ((c = a.aoData[k]),
                    c._aSortData || (c._aSortData = []),
                    !c._aSortData[b] || d)
            )
                (h = d ? e[k] : I(a, k, b, "sort")), (c._aSortData[b] = g ? g(h) : h);
    }

    function Ba(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date(),
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: f.extend(!0, [], a.aaSorting),
                search: Fb(a.oPreviousSearch),
                columns: f.map(a.aoColumns, function (b, d) {
                    return {
                        visible: b.bVisible,
                        search: Fb(a.aoPreSearchCols[d])
                    };
                }),
            };
            A(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a, b);
        }
    }

    function Ob(a, b, c) {
        var d,
            e,
            h = a.aoColumns;
        b = function (b) {
            if (b && b.time) {
                var g = A(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
                if (
                    -1 === f.inArray(!1, g) &&
                    ((g = a.iStateDuration),
                        !(
                            (0 < g && b.time < +new Date() - 1e3 * g) ||
                            (b.columns && h.length !== b.columns.length)
                        ))
                ) {
                    a.oLoadedState = f.extend(!0, {}, b);
                    b.start !== p &&
                        ((a._iDisplayStart = b.start), (a.iInitDisplayStart = b.start));
                    b.length !== p && (a._iDisplayLength = b.length);
                    b.order !== p &&
                        ((a.aaSorting = []),
                            f.each(b.order, function (b, c) {
                                a.aaSorting.push(c[0] >= h.length ? [0, c[1]] : c);
                            }));
                    b.search !== p && f.extend(a.oPreviousSearch, Gb(b.search));
                    if (b.columns)
                        for (d = 0, e = b.columns.length; d < e; d++)
                            (g = b.columns[d]),
                                g.visible !== p && (h[d].bVisible = g.visible),
                                g.search !== p && f.extend(a.aoPreSearchCols[d], Gb(g.search));
                    A(a, "aoStateLoaded", "stateLoaded", [a, b]);
                }
            }
            c();
        };
        if (a.oFeatures.bStateSave) {
            var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
            g !== p && b(g);
        } else c();
    }

    function Ca(a) {
        var b = q.settings;
        a = f.inArray(a, J(b, "nTable"));
        return -1 !== a ? b[a] : null;
    }

    function O(a, b, c, d) {
        c =
            "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d &&
            (c +=
                ". For more information about this error, please see http://datatables.net/tn/" +
                d);
        if (b) z.console && console.log && console.log(c);
        else if (
            ((b = q.ext),
                (b = b.sErrMode || b.errMode),
                a && A(a, null, "error", [a, d, c]),
                "alert" == b)
        )
            alert(c);
        else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c);
        }
    }

    function M(a, b, c, d) {
        f.isArray(c) ?
            f.each(c, function (c, d) {
                f.isArray(d) ? M(a, b, d[0], d[1]) : M(a, b, d);
            }) :
            (d === p && (d = c), b[c] !== p && (a[d] = b[c]));
    }

    function ab(a, b, c) {
        var d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                f.isPlainObject(e) ?
                    (f.isPlainObject(a[d]) || (a[d] = {}), f.extend(!0, a[d], e)) :
                    c && "data" !== d && "aaData" !== d && f.isArray(e) ?
                        (a[d] = e.slice()) :
                        (a[d] = e);
            }
        return a;
    }

    function $a(a, b, c) {
        f(a)
            .on("click.DT", b, function (b) {
                f(a).blur();
                c(b);
            })
            .on("keypress.DT", b, function (a) {
                13 === a.which && (a.preventDefault(), c(a));
            })
            .on("selectstart.DT", function () {
                return !1;
            });
    }

    function E(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        });
    }

    function A(a, b, c, d) {
        var e = [];
        b &&
            (e = f.map(a[b].slice().reverse(), function (b, c) {
                return b.fn.apply(a.oInstance, d);
            }));
        null !== c &&
            ((b = f.Event(c + ".dt")), f(a.nTable).trigger(b, d), e.push(b.result));
        return e;
    }

    function Wa(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b;
    }

    function Ra(a, b) {
        a = a.renderer;
        var c = q.ext.renderer[b];
        return f.isPlainObject(a) && a[b] ?
            c[a[b]] || c._ :
            "string" === typeof a ?
                c[a] || c._ :
                c._;
    }

    function D(a) {
        return a.oFeatures.bServerSide ?
            "ssp" :
            a.ajax || a.sAjaxSource ?
                "ajax" :
                "dom";
    }

    function ka(a, b) {
        var c = Pb.numbers_length,
            d = Math.floor(c / 2);
        b <= c ?
            (a = Z(0, b)) :
            a <= d ?
                ((a = Z(0, c - 2)), a.push("ellipsis"), a.push(b - 1)) :
                (a >= b - 1 - d ?
                    (a = Z(b - (c - 2), b)) :
                    ((a = Z(a - d + 2, a + d - 1)), a.push("ellipsis"), a.push(b - 1)),
                    a.splice(0, 0, "ellipsis"),
                    a.splice(0, 0, 0));
        a.DT_el = "span";
        return a;
    }

    function Ha(a) {
        f.each({
            num: function (b) {
                return Da(b, a);
            },
            "num-fmt": function (b) {
                return Da(b, a, bb);
            },
            "html-num": function (b) {
                return Da(b, a, Ea);
            },
            "html-num-fmt": function (b) {
                return Da(b, a, Ea, bb);
            },
        },
            function (b, c) {
                C.type.order[b + a + "-pre"] = c;
                b.match(/^html\-/) && (C.type.search[b + a] = C.type.search.html);
            }
        );
    }

    function Qb(a) {
        return function () {
            var b = [Ca(this[q.ext.iApiIndex])].concat(
                Array.prototype.slice.call(arguments)
            );
            return q.ext.internal[a].apply(this, b);
        };
    }
    var q = function (a) {
        this.$ = function (a, b) {
            return this.api(!0).$(a, b);
        };
        this._ = function (a, b) {
            return this.api(!0).rows(a, b).data();
        };
        this.api = function (a) {
            return a ? new v(Ca(this[C.iApiIndex])) : new v(this);
        };
        this.fnAddData = function (a, b) {
            var c = this.api(!0);
            a =
                f.isArray(a) && (f.isArray(a[0]) || f.isPlainObject(a[0])) ?
                    c.rows.add(a) :
                    c.row.add(a);
            (b === p || b) && c.draw();
            return a.flatten().toArray();
        };
        this.fnAdjustColumnSizing = function (a) {
            var b = this.api(!0).columns.adjust(),
                c = b.settings()[0],
                d = c.oScroll;
            a === p || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && na(c);
        };
        this.fnClearTable = function (a) {
            var b = this.api(!0).clear();
            (a === p || a) && b.draw();
        };
        this.fnClose = function (a) {
            this.api(!0).row(a).child.hide();
        };
        this.fnDeleteRow = function (a, b, c) {
            var d = this.api(!0);
            a = d.rows(a);
            var e = a.settings()[0],
                h = e.aoData[a[0][0]];
            a.remove();
            b && b.call(this, e, h);
            (c === p || c) && d.draw();
            return h;
        };
        this.fnDestroy = function (a) {
            this.api(!0).destroy(a);
        };
        this.fnDraw = function (a) {
            this.api(!0).draw(a);
        };
        this.fnFilter = function (a, b, c, d, e, f) {
            e = this.api(!0);
            null === b || b === p ?
                e.search(a, c, d, f) :
                e.column(b).search(a, c, d, f);
            e.draw();
        };
        this.fnGetData = function (a, b) {
            var c = this.api(!0);
            if (a !== p) {
                var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                return b !== p || "td" == d || "th" == d ?
                    c.cell(a, b).data() :
                    c.row(a).data() || null;
            }
            return c.data().toArray();
        };
        this.fnGetNodes = function (a) {
            var b = this.api(!0);
            return a !== p ? b.row(a).node() : b.rows().nodes().flatten().toArray();
        };
        this.fnGetPosition = function (a) {
            var b = this.api(!0),
                c = a.nodeName.toUpperCase();
            return "TR" == c ?
                b.row(a).index() :
                "TD" == c || "TH" == c ?
                    ((a = b.cell(a).index()), [a.row, a.columnVisible, a.column]) :
                    null;
        };
        this.fnIsOpen = function (a) {
            return this.api(!0).row(a).child.isShown();
        };
        this.fnOpen = function (a, b, c) {
            return this.api(!0).row(a).child(b, c).show().child()[0];
        };
        this.fnPageChange = function (a, b) {
            a = this.api(!0).page(a);
            (b === p || b) && a.draw(!1);
        };
        this.fnSetColumnVis = function (a, b, c) {
            a = this.api(!0).column(a).visible(b);
            (c === p || c) && a.columns.adjust().draw();
        };
        this.fnSettings = function () {
            return Ca(this[C.iApiIndex]);
        };
        this.fnSort = function (a) {
            this.api(!0).order(a).draw();
        };
        this.fnSortListener = function (a, b, c) {
            this.api(!0).order.listener(a, b, c);
        };
        this.fnUpdate = function (a, b, c, d, e) {
            var h = this.api(!0);
            c === p || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
            (e === p || e) && h.columns.adjust();
            (d === p || d) && h.draw();
            return 0;
        };
        this.fnVersionCheck = C.fnVersionCheck;
        var b = this,
            c = a === p,
            d = this.length;
        c && (a = {});
        this.oApi = this.internal = C.internal;
        for (var e in q.ext.internal) e && (this[e] = Qb(e));
        this.each(function () {
            var e = {},
                g = 1 < d ? ab(e, a, !0) : a,
                k = 0,
                l;
            e = this.getAttribute("id");
            var n = !1,
                m = q.defaults,
                w = f(this);
            if ("table" != this.nodeName.toLowerCase())
                O(
                    null,
                    0,
                    "Non-table node initialisation (" + this.nodeName + ")",
                    2
                );
            else {
                jb(m);
                kb(m.column);
                L(m, m, !0);
                L(m.column, m.column, !0);
                L(m, f.extend(g, w.data()), !0);
                var u = q.settings;
                k = 0;
                for (l = u.length; k < l; k++) {
                    var t = u[k];
                    if (
                        t.nTable == this ||
                        (t.nTHead && t.nTHead.parentNode == this) ||
                        (t.nTFoot && t.nTFoot.parentNode == this)
                    ) {
                        var v = g.bRetrieve !== p ? g.bRetrieve : m.bRetrieve;
                        if (c || v) return t.oInstance;
                        if (g.bDestroy !== p ? g.bDestroy : m.bDestroy) {
                            t.oInstance.fnDestroy();
                            break;
                        } else {
                            O(t, 0, "Cannot reinitialise DataTable", 3);
                            return;
                        }
                    }
                    if (t.sTableId == this.id) {
                        u.splice(k, 1);
                        break;
                    }
                }
                if (null === e || "" === e)
                    this.id = e = "DataTables_Table_" + q.ext._unique++;
                var r = f.extend(!0, {}, q.models.oSettings, {
                    sDestroyWidth: w[0].style.width,
                    sInstance: e,
                    sTableId: e,
                });
                r.nTable = this;
                r.oApi = b.internal;
                r.oInit = g;
                u.push(r);
                r.oInstance = 1 === b.length ? b : w.dataTable();
                jb(g);
                Ga(g.oLanguage);
                g.aLengthMenu &&
                    !g.iDisplayLength &&
                    (g.iDisplayLength = f.isArray(g.aLengthMenu[0]) ?
                        g.aLengthMenu[0][0] :
                        g.aLengthMenu[0]);
                g = ab(f.extend(!0, {}, m), g);
                M(
                    r.oFeatures,
                    g,
                    "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
                        " "
                    )
                );
                M(r, g, [
                    "asStripeClasses",
                    "ajax",
                    "fnServerData",
                    "fnFormatNumber",
                    "sServerMethod",
                    "aaSorting",
                    "aaSortingFixed",
                    "aLengthMenu",
                    "sPaginationType",
                    "sAjaxSource",
                    "sAjaxDataProp",
                    "iStateDuration",
                    "sDom",
                    "bSortCellsTop",
                    "iTabIndex",
                    "fnStateLoadCallback",
                    "fnStateSaveCallback",
                    "renderer",
                    "searchDelay",
                    "rowId",
                    ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols", "aoPreSearchCols"],
                    ["iDisplayLength", "_iDisplayLength"],
                ]);
                M(r.oScroll, g, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"],
                ]);
                M(r.oLanguage, g, "fnInfoCallback");
                E(r, "aoDrawCallback", g.fnDrawCallback, "user");
                E(r, "aoServerParams", g.fnServerParams, "user");
                E(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
                E(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
                E(r, "aoStateLoaded", g.fnStateLoaded, "user");
                E(r, "aoRowCallback", g.fnRowCallback, "user");
                E(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                E(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
                E(r, "aoFooterCallback", g.fnFooterCallback, "user");
                E(r, "aoInitComplete", g.fnInitComplete, "user");
                E(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                r.rowIdFn = U(g.rowId);
                lb(r);
                var x = r.oClasses;
                f.extend(x, q.ext.classes, g.oClasses);
                w.addClass(x.sTable);
                r.iInitDisplayStart === p &&
                    ((r.iInitDisplayStart = g.iDisplayStart),
                        (r._iDisplayStart = g.iDisplayStart));
                null !== g.iDeferLoading &&
                    ((r.bDeferLoading = !0),
                        (e = f.isArray(g.iDeferLoading)),
                        (r._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading),
                        (r._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading));
                var y = r.oLanguage;
                f.extend(!0, y, g.oLanguage);
                y.sUrl &&
                    (f.ajax({
                        dataType: "json",
                        url: y.sUrl,
                        success: function (a) {
                            Ga(a);
                            L(m.oLanguage, a);
                            f.extend(!0, y, a);
                            ja(r);
                        },
                        error: function () {
                            ja(r);
                        },
                    }),
                        (n = !0));
                null === g.asStripeClasses &&
                    (r.asStripeClasses = [x.sStripeOdd, x.sStripeEven]);
                e = r.asStripeClasses;
                var z = w.children("tbody").find("tr").eq(0); -
                    1 !==
                    f.inArray(
                        !0,
                        f.map(e, function (a, b) {
                            return z.hasClass(a);
                        })
                    ) &&
                    (f("tbody tr", this).removeClass(e.join(" ")),
                        (r.asDestroyStripes = e.slice()));
                e = [];
                u = this.getElementsByTagName("thead");
                0 !== u.length && (fa(r.aoHeader, u[0]), (e = ua(r)));
                if (null === g.aoColumns)
                    for (u = [], k = 0, l = e.length; k < l; k++) u.push(null);
                else u = g.aoColumns;
                k = 0;
                for (l = u.length; k < l; k++) Ia(r, e ? e[k] : null);
                nb(r, g.aoColumnDefs, u, function (a, b) {
                    ma(r, a, b);
                });
                if (z.length) {
                    var B = function (a, b) {
                        return null !== a.getAttribute("data-" + b) ? b : null;
                    };
                    f(z[0])
                        .children("th, td")
                        .each(function (a, b) {
                            var c = r.aoColumns[a];
                            if (c.mData === a) {
                                var d = B(b, "sort") || B(b, "order");
                                b = B(b, "filter") || B(b, "search");
                                if (null !== d || null !== b)
                                    (c.mData = {
                                        _: a + ".display",
                                        sort: null !== d ? a + ".@data-" + d : p,
                                        type: null !== d ? a + ".@data-" + d : p,
                                        filter: null !== b ? a + ".@data-" + b : p,
                                    }),
                                        ma(r, a);
                            }
                        });
                }
                var C = r.oFeatures;
                e = function () {
                    if (g.aaSorting === p) {
                        var a = r.aaSorting;
                        k = 0;
                        for (l = a.length; k < l; k++)
                            a[k][1] = r.aoColumns[k].asSorting[0];
                    }
                    Aa(r);
                    C.bSort &&
                        E(r, "aoDrawCallback", function () {
                            if (r.bSorted) {
                                var a = Y(r),
                                    b = {};
                                f.each(a, function (a, c) {
                                    b[c.src] = c.dir;
                                });
                                A(r, null, "order", [r, a, b]);
                                Nb(r);
                            }
                        });
                    E(
                        r,
                        "aoDrawCallback",
                        function () {
                            (r.bSorted || "ssp" === D(r) || C.bDeferRender) && Aa(r);
                        },
                        "sc"
                    );
                    a = w.children("caption").each(function () {
                        this._captionSide = f(this).css("caption-side");
                    });
                    var b = w.children("thead");
                    0 === b.length && (b = f("<thead/>").appendTo(w));
                    r.nTHead = b[0];
                    b = w.children("tbody");
                    0 === b.length && (b = f("<tbody/>").appendTo(w));
                    r.nTBody = b[0];
                    b = w.children("tfoot");
                    0 === b.length &&
                        0 < a.length &&
                        ("" !== r.oScroll.sX || "" !== r.oScroll.sY) &&
                        (b = f("<tfoot/>").appendTo(w));
                    0 === b.length || 0 === b.children().length ?
                        w.addClass(x.sNoFooter) :
                        0 < b.length && ((r.nTFoot = b[0]), fa(r.aoFooter, r.nTFoot));
                    if (g.aaData)
                        for (k = 0; k < g.aaData.length; k++) R(r, g.aaData[k]);
                    else
                        (r.bDeferLoading || "dom" == D(r)) &&
                            pa(r, f(r.nTBody).children("tr"));
                    r.aiDisplay = r.aiDisplayMaster.slice();
                    r.bInitialised = !0;
                    !1 === n && ja(r);
                };
                g.bStateSave ?
                    ((C.bStateSave = !0),
                        E(r, "aoDrawCallback", Ba, "state_save"),
                        Ob(r, g, e)) :
                    e();
            }
        });
        b = null;
        return this;
    },
        C,
        t,
        x,
        cb = {},
        Rb = /[\r\n\u2028]/g,
        Ea = /<.*?>/g,
        cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        dc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
        bb = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        P = function (a) {
            return a && !0 !== a && "-" !== a ? !1 : !0;
        },
        Sb = function (a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && isFinite(a) ? b : null;
        },
        Tb = function (a, b) {
            cb[b] || (cb[b] = new RegExp(Ua(b), "g"));
            return "string" === typeof a && "." !== b ?
                a.replace(/\./g, "").replace(cb[b], ".") :
                a;
        },
        db = function (a, b, c) {
            var d = "string" === typeof a;
            if (P(a)) return !0;
            b && d && (a = Tb(a, b));
            c && d && (a = a.replace(bb, ""));
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        Ub = function (a, b, c) {
            return P(a) ?
                !0 :
                P(a) || "string" === typeof a ?
                    db(a.replace(Ea, ""), b, c) ?
                        !0 :
                        null :
                    null;
        },
        J = function (a, b, c) {
            var d = [],
                e = 0,
                h = a.length;
            if (c !== p)
                for (; e < h; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e < h; e++) a[e] && d.push(a[e][b]);
            return d;
        },
        la = function (a, b, c, d) {
            var e = [],
                h = 0,
                g = b.length;
            if (d !== p)
                for (; h < g; h++) a[b[h]][c] && e.push(a[b[h]][c][d]);
            else
                for (; h < g; h++) e.push(a[b[h]][c]);
            return e;
        },
        Z = function (a, b) {
            var c = [];
            if (b === p) {
                b = 0;
                var d = a;
            } else (d = b), (b = a);
            for (a = b; a < d; a++) c.push(a);
            return c;
        },
        Vb = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b;
        },
        ta = function (a) {
            a: {
                if (!(2 > a.length)) {
                    var b = a.slice().sort();
                    for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                        if (b[d] === c) {
                            b = !1;
                            break a;
                        }
                        c = b[d];
                    }
                }
                b = !0;
            }
            if (b) return a.slice();
            b = [];
            e = a.length;
            var h,
                g = 0;
            d = 0;
            a: for (; d < e; d++) {
                c = a[d];
                for (h = 0; h < g; h++)
                    if (b[h] === c) continue a;
                b.push(c);
                g++;
            }
            return b;
        };
    q.util = {
        throttle: function (a, b) {
            var c = b !== p ? b : 200,
                d,
                e;
            return function () {
                var b = this,
                    g = +new Date(),
                    f = arguments;
                d && g < d + c ?
                    (clearTimeout(e),
                        (e = setTimeout(function () {
                            d = p;
                            a.apply(b, f);
                        }, c))) :
                    ((d = g), a.apply(b, f));
            };
        },
        escapeRegex: function (a) {
            return a.replace(dc, "\\$1");
        },
    };
    var F = function (a, b, c) {
        a[b] !== p && (a[c] = a[b]);
    },
        da = /\[.*?\]$/,
        X = /\(\)$/,
        Ua = q.util.escapeRegex,
        ya = f("<div>")[0],
        $b = ya.textContent !== p,
        bc = /<.*?>/g,
        Sa = q.util.throttle,
        Wb = [],
        G = Array.prototype,
        ec = function (a) {
            var b,
                c = q.settings,
                d = f.map(c, function (a, b) {
                    return a.nTable;
                });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                    var e = f.inArray(a, d);
                    return -1 !== e ? [c[e]] : null;
                }
                if (a && "function" === typeof a.settings)
                    return a.settings().toArray();
                "string" === typeof a ? (b = f(a)) : a instanceof f && (b = a);
            } else return [];
            if (b)
                return b
                    .map(function (a) {
                        e = f.inArray(this, d);
                        return -1 !== e ? c[e] : null;
                    })
                    .toArray();
        };
    var v = function (a, b) {
        if (!(this instanceof v)) return new v(a, b);
        var c = [],
            d = function (a) {
                (a = ec(a)) && c.push.apply(c, a);
            };
        if (f.isArray(a))
            for (var e = 0, h = a.length; e < h; e++) d(a[e]);
        else d(a);
        this.context = ta(c);
        b && f.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        v.extend(this, this, Wb);
    };
    q.Api = v;
    f.extend(v.prototype, {
        any: function () {
            return 0 !== this.count();
        },
        concat: G.concat,
        context: [],
        count: function () {
            return this.flatten().length;
        },
        each: function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                a.call(this, this[b], b, this);
            return this;
        },
        eq: function (a) {
            var b = this.context;
            return b.length > a ? new v(b[a], this[a]) : null;
        },
        filter: function (a) {
            var b = [];
            if (G.filter) b = G.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++)
                    a.call(this, this[c], c, this) && b.push(this[c]);
            return new v(this.context, b);
        },
        flatten: function () {
            var a = [];
            return new v(this.context, a.concat.apply(a, this.toArray()));
        },
        join: G.join,
        indexOf: G.indexOf ||
            function (a, b) {
                b = b || 0;
                for (var c = this.length; b < c; b++)
                    if (this[b] === a) return b;
                return -1;
            },
        iterator: function (a, b, c, d) {
            var e = [],
                h,
                g,
                f = this.context,
                l,
                n = this.selector;
            "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
            var m = 0;
            for (h = f.length; m < h; m++) {
                var q = new v(f[m]);
                if ("table" === b) {
                    var u = c.call(q, f[m], m);
                    u !== p && e.push(u);
                } else if ("columns" === b || "rows" === b)
                    (u = c.call(q, f[m], this[m], m)), u !== p && e.push(u);
                else if (
                    "column" === b ||
                    "column-rows" === b ||
                    "row" === b ||
                    "cell" === b
                ) {
                    var t = this[m];
                    "column-rows" === b && (l = Fa(f[m], n.opts));
                    var x = 0;
                    for (g = t.length; x < g; x++)
                        (u = t[x]),
                            (u =
                                "cell" === b ?
                                    c.call(q, f[m], u.row, u.column, m, x) :
                                    c.call(q, f[m], u, m, x, l)),
                            u !== p && e.push(u);
                }
            }
            return e.length || d ?
                ((a = new v(f, a ? e.concat.apply([], e) : e)),
                    (b = a.selector),
                    (b.rows = n.rows),
                    (b.cols = n.cols),
                    (b.opts = n.opts),
                    a) :
                this;
        },
        lastIndexOf: G.lastIndexOf ||
            function (a, b) {
                return this.indexOf.apply(this.toArray.reverse(), arguments);
            },
        length: 0,
        map: function (a) {
            var b = [];
            if (G.map) b = G.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++)
                    b.push(a.call(this, this[c], c));
            return new v(this.context, b);
        },
        pluck: function (a) {
            return this.map(function (b) {
                return b[a];
            });
        },
        pop: G.pop,
        push: G.push,
        reduce: G.reduce ||
            function (a, b) {
                return mb(this, a, b, 0, this.length, 1);
            },
        reduceRight: G.reduceRight ||
            function (a, b) {
                return mb(this, a, b, this.length - 1, -1, -1);
            },
        reverse: G.reverse,
        selector: null,
        shift: G.shift,
        slice: function () {
            return new v(this.context, this);
        },
        sort: G.sort,
        splice: G.splice,
        toArray: function () {
            return G.slice.call(this);
        },
        to$: function () {
            return f(this);
        },
        toJQuery: function () {
            return f(this);
        },
        unique: function () {
            return new v(this.context, ta(this));
        },
        unshift: G.unshift,
    });
    v.extend = function (a, b, c) {
        if (c.length && b && (b instanceof v || b.__dt_wrapper)) {
            var d,
                e = function (a, b, c) {
                    return function () {
                        var d = b.apply(a, arguments);
                        v.extend(d, d, c.methodExt);
                        return d;
                    };
                };
            var h = 0;
            for (d = c.length; h < d; h++) {
                var g = c[h];
                b[g.name] =
                    "function" === g.type ?
                        e(a, g.val, g) :
                        "object" === g.type ? {} :
                            g.val;
                b[g.name].__dt_wrapper = !0;
                v.extend(a, b[g.name], g.propExt);
            }
        }
    };
    v.register = t = function (a, b) {
        if (f.isArray(a))
            for (var c = 0, d = a.length; c < d; c++) v.register(a[c], b);
        else {
            d = a.split(".");
            var e = Wb,
                h;
            a = 0;
            for (c = d.length; a < c; a++) {
                var g = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
                a: {
                    var k = 0;
                    for (var l = e.length; k < l; k++)
                        if (e[k].name === g) {
                            k = e[k];
                            break a;
                        }
                    k = null;
                }
                k ||
                    ((k = {
                        name: g,
                        val: {},
                        methodExt: [],
                        propExt: [],
                        type: "object",
                    }),
                        e.push(k));
                a === c - 1 ?
                    ((k.val = b),
                        (k.type =
                            "function" === typeof b ?
                                "function" :
                                f.isPlainObject(b) ?
                                    "object" :
                                    "other")) :
                    (e = h ? k.methodExt : k.propExt);
            }
        }
    };
    v.registerPlural = x = function (a, b, c) {
        v.register(a, c);
        v.register(b, function () {
            var a = c.apply(this, arguments);
            return a === this ?
                this :
                a instanceof v ?
                    a.length ?
                        f.isArray(a[0]) ?
                            new v(a.context, a[0]) :
                            a[0] :
                        p :
                    a;
        });
    };
    var fc = function (a, b) {
        if ("number" === typeof a) return [b[a]];
        var c = f.map(b, function (a, b) {
            return a.nTable;
        });
        return f(c)
            .filter(a)
            .map(function (a) {
                a = f.inArray(this, c);
                return b[a];
            })
            .toArray();
    };
    t("tables()", function (a) {
        return a ? new v(fc(a, this.context)) : this;
    });
    t("table()", function (a) {
        a = this.tables(a);
        var b = a.context;
        return b.length ? new v(b[0]) : a;
    });
    x("tables().nodes()", "table().node()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTable;
            },
            1
        );
    });
    x("tables().body()", "table().body()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTBody;
            },
            1
        );
    });
    x("tables().header()", "table().header()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTHead;
            },
            1
        );
    });
    x("tables().footer()", "table().footer()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTFoot;
            },
            1
        );
    });
    x("tables().containers()", "table().container()", function () {
        return this.iterator(
            "table",
            function (a) {
                return a.nTableWrapper;
            },
            1
        );
    });
    t("draw()", function (a) {
        return this.iterator("table", function (b) {
            "page" === a
                ?
                S(b) :
                ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
                    V(b, !1 === a));
        });
    });
    t("page()", function (a) {
        return a === p ?
            this.page.info().page :
            this.iterator("table", function (b) {
                Xa(b, a);
            });
    });
    t("page.info()", function (a) {
        if (0 === this.context.length) return p;
        a = this.context[0];
        var b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === D(a),
        };
    });
    t("page.len()", function (a) {
        return a === p ?
            0 !== this.context.length ?
                this.context[0]._iDisplayLength :
                p :
            this.iterator("table", function (b) {
                Va(b, a);
            });
    });
    var Xb = function (a, b, c) {
        if (c) {
            var d = new v(a);
            d.one("draw", function () {
                c(d.ajax.json());
            });
        }
        if ("ssp" == D(a)) V(a, b);
        else {
            K(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            va(a, [], function (c) {
                qa(a);
                c = wa(a, c);
                for (var d = 0, e = c.length; d < e; d++) R(a, c[d]);
                V(a, b);
                K(a, !1);
            });
        }
    };
    t("ajax.json()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].json;
    });
    t("ajax.params()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData;
    });
    t("ajax.reload()", function (a, b) {
        return this.iterator("table", function (c) {
            Xb(c, !1 === b, a);
        });
    });
    t("ajax.url()", function (a) {
        var b = this.context;
        if (a === p) {
            if (0 === b.length) return p;
            b = b[0];
            return b.ajax ?
                f.isPlainObject(b.ajax) ?
                    b.ajax.url :
                    b.ajax :
                b.sAjaxSource;
        }
        return this.iterator("table", function (b) {
            f.isPlainObject(b.ajax) ? (b.ajax.url = a) : (b.ajax = a);
        });
    });
    t("ajax.url().load()", function (a, b) {
        return this.iterator("table", function (c) {
            Xb(c, !1 === b, a);
        });
    });
    var eb = function (a, b, c, d, e) {
        var h = [],
            g,
            k,
            l;
        var n = typeof b;
        (b && "string" !== n && "function" !== n && b.length !== p) || (b = [b]);
        n = 0;
        for (k = b.length; n < k; n++) {
            var m =
                b[n] && b[n].split && !b[n].match(/[\[\(:]/) ?
                    b[n].split(",") : [b[n]];
            var q = 0;
            for (l = m.length; q < l; q++)
                (g = c("string" === typeof m[q] ? f.trim(m[q]) : m[q])) &&
                    g.length &&
                    (h = h.concat(g));
        }
        a = C.selector[a];
        if (a.length)
            for (n = 0, k = a.length; n < k; n++) h = a[n](d, e, h);
        return ta(h);
    },
        fb = function (a) {
            a || (a = {});
            a.filter && a.search === p && (a.search = a.filter);
            return f.extend({
                search: "none",
                order: "current",
                page: "all"
            }, a);
        },
        gb = function (a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length)
                    return (
                        (a[0] = a[b]),
                        (a[0].length = 1),
                        (a.length = 1),
                        (a.context = [a.context[b]]),
                        a
                    );
            a.length = 0;
            return a;
        },
        Fa = function (a, b) {
            var c = [],
                d = a.aiDisplay;
            var e = a.aiDisplayMaster;
            var h = b.search;
            var g = b.order;
            b = b.page;
            if ("ssp" == D(a)) return "removed" === h ? [] : Z(0, e.length);
            if ("current" == b)
                for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++)
                    c.push(d[g]);
            else if ("current" == g || "applied" == g)
                if ("none" == h) c = e.slice();
                else if ("applied" == h) c = d.slice();
                else {
                    if ("removed" == h) {
                        var k = {};
                        g = 0;
                        for (a = d.length; g < a; g++) k[d[g]] = null;
                        c = f.map(e, function (a) {
                            return k.hasOwnProperty(a) ? null : a;
                        });
                    }
                } else if ("index" == g || "original" == g)
                for (g = 0, a = a.aoData.length; g < a; g++)
                    "none" == h ?
                        c.push(g) :
                        ((e = f.inArray(g, d)),
                            ((-1 === e && "removed" == h) || (0 <= e && "applied" == h)) &&
                            c.push(g));
            return c;
        },
        gc = function (a, b, c) {
            var d;
            return eb(
                "row",
                b,
                function (b) {
                    var e = Sb(b),
                        g = a.aoData;
                    if (null !== e && !c) return [e];
                    d || (d = Fa(a, c));
                    if (null !== e && -1 !== f.inArray(e, d)) return [e];
                    if (null === b || b === p || "" === b) return d;
                    if ("function" === typeof b)
                        return f.map(d, function (a) {
                            var c = g[a];
                            return b(a, c._aData, c.nTr) ? a : null;
                        });
                    if (b.nodeName) {
                        e = b._DT_RowIndex;
                        var k = b._DT_CellIndex;
                        if (e !== p) return g[e] && g[e].nTr === b ? [e] : [];
                        if (k)
                            return g[k.row] && g[k.row].nTr === b.parentNode ? [k.row] : [];
                        e = f(b).closest("*[data-dt-row]");
                        return e.length ? [e.data("dt-row")] : [];
                    }
                    if (
                        "string" === typeof b &&
                        "#" === b.charAt(0) &&
                        ((e = a.aIds[b.replace(/^#/, "")]), e !== p)
                    )
                        return [e.idx];
                    e = Vb(la(a.aoData, d, "nTr"));
                    return f(e)
                        .filter(b)
                        .map(function () {
                            return this._DT_RowIndex;
                        })
                        .toArray();
                },
                a,
                c
            );
        };
    t("rows()", function (a, b) {
        a === p ? (a = "") : f.isPlainObject(a) && ((b = a), (a = ""));
        b = fb(b);
        var c = this.iterator(
            "table",
            function (c) {
                return gc(c, a, b);
            },
            1
        );
        c.selector.rows = a;
        c.selector.opts = b;
        return c;
    });
    t("rows().nodes()", function () {
        return this.iterator(
            "row",
            function (a, b) {
                return a.aoData[b].nTr || p;
            },
            1
        );
    });
    t("rows().data()", function () {
        return this.iterator(
            !0,
            "rows",
            function (a, b) {
                return la(a.aoData, b, "_aData");
            },
            1
        );
    });
    x("rows().cache()", "row().cache()", function (a) {
        return this.iterator(
            "row",
            function (b, c) {
                b = b.aoData[c];
                return "search" === a ? b._aFilterData : b._aSortData;
            },
            1
        );
    });
    x("rows().invalidate()", "row().invalidate()", function (a) {
        return this.iterator("row", function (b, c) {
            ea(b, c, a);
        });
    });
    x("rows().indexes()", "row().index()", function () {
        return this.iterator(
            "row",
            function (a, b) {
                return b;
            },
            1
        );
    });
    x("rows().ids()", "row().id()", function (a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var h = 0, g = this[d].length; h < g; h++) {
                var f = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
                b.push((!0 === a ? "#" : "") + f);
            }
        return new v(c, b);
    });
    x("rows().remove()", "row().remove()", function () {
        var a = this;
        this.iterator("row", function (b, c, d) {
            var e = b.aoData,
                h = e[c],
                g,
                f;
            e.splice(c, 1);
            var l = 0;
            for (g = e.length; l < g; l++) {
                var n = e[l];
                var m = n.anCells;
                null !== n.nTr && (n.nTr._DT_RowIndex = l);
                if (null !== m)
                    for (n = 0, f = m.length; n < f; n++) m[n]._DT_CellIndex.row = l;
            }
            ra(b.aiDisplayMaster, c);
            ra(b.aiDisplay, c);
            ra(a[d], c, !1);
            0 < b._iRecordsDisplay && b._iRecordsDisplay--;
            Wa(b);
            c = b.rowIdFn(h._aData);
            c !== p && delete b.aIds[c];
        });
        this.iterator("table", function (a) {
            for (var b = 0, d = a.aoData.length; b < d; b++) a.aoData[b].idx = b;
        });
        return this;
    });
    t("rows.add()", function (a) {
        var b = this.iterator(
            "table",
            function (b) {
                var c,
                    d = [];
                var g = 0;
                for (c = a.length; g < c; g++) {
                    var f = a[g];
                    f.nodeName && "TR" === f.nodeName.toUpperCase() ?
                        d.push(pa(b, f)[0]) :
                        d.push(R(b, f));
                }
                return d;
            },
            1
        ),
            c = this.rows(-1);
        c.pop();
        f.merge(c, b);
        return c;
    });
    t("row()", function (a, b) {
        return gb(this.rows(a, b));
    });
    t("row().data()", function (a) {
        var b = this.context;
        if (a === p)
            return b.length && this.length ? b[0].aoData[this[0]]._aData : p;
        var c = b[0].aoData[this[0]];
        c._aData = a;
        f.isArray(a) && c.nTr.id && Q(b[0].rowId)(a, c.nTr.id);
        ea(b[0], this[0], "data");
        return this;
    });
    t("row().node()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
    });
    t("row.add()", function (a) {
        a instanceof f && a.length && (a = a[0]);
        var b = this.iterator("table", function (b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ?
                pa(b, a)[0] :
                R(b, a);
        });
        return this.row(b[0]);
    });
    var hc = function (a, b, c, d) {
        var e = [],
            h = function (b, c) {
                if (f.isArray(b) || b instanceof f)
                    for (var d = 0, g = b.length; d < g; d++) h(b[d], c);
                else
                    b.nodeName && "tr" === b.nodeName.toLowerCase() ?
                        e.push(b) :
                        ((d = f("<tr><td/></tr>").addClass(c)),
                            (f("td", d).addClass(c).html(b)[0].colSpan = W(a)),
                            e.push(d[0]));
            };
        h(c, d);
        b._details && b._details.detach();
        b._details = f(e);
        b._detailsShow && b._details.insertAfter(b.nTr);
    },
        hb = function (a, b) {
            var c = a.context;
            c.length &&
                (a = c[0].aoData[b !== p ? b : a[0]]) &&
                a._details &&
                (a._details.remove(), (a._detailsShow = p), (a._details = p));
        },
        Yb = function (a, b) {
            var c = a.context;
            c.length &&
                a.length &&
                ((a = c[0].aoData[a[0]]),
                    a._details &&
                    ((a._detailsShow = b) ?
                        a._details.insertAfter(a.nTr) :
                        a._details.detach(),
                        ic(c[0])));
        },
        ic = function (a) {
            var b = new v(a),
                c = a.aoData;
            b.off(
                "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
            );
            0 < J(c, "_details").length &&
                (b.on("draw.dt.DT_details", function (d, e) {
                    a === e &&
                        b
                            .rows({
                                page: "current"
                            })
                            .eq(0)
                            .each(function (a) {
                                a = c[a];
                                a._detailsShow && a._details.insertAfter(a.nTr);
                            });
                }),
                    b.on("column-visibility.dt.DT_details", function (b, e, f, g) {
                        if (a === e)
                            for (e = W(e), f = 0, g = c.length; f < g; f++)
                                (b = c[f]),
                                    b._details &&
                                    b._details.children("td[colspan]").attr("colspan", e);
                    }),
                    b.on("destroy.dt.DT_details", function (d, e) {
                        if (a === e)
                            for (d = 0, e = c.length; d < e; d++) c[d]._details && hb(b, d);
                    }));
        };
    t("row().child()", function (a, b) {
        var c = this.context;
        if (a === p)
            return c.length && this.length ? c[0].aoData[this[0]]._details : p;
        !0 === a ?
            this.child.show() :
            !1 === a ?
                hb(this) :
                c.length && this.length && hc(c[0], c[0].aoData[this[0]], a, b);
        return this;
    });
    t(["row().child.show()", "row().child().show()"], function (a) {
        Yb(this, !0);
        return this;
    });
    t(["row().child.hide()", "row().child().hide()"], function () {
        Yb(this, !1);
        return this;
    });
    t(["row().child.remove()", "row().child().remove()"], function () {
        hb(this);
        return this;
    });
    t("row().child.isShown()", function () {
        var a = this.context;
        return a.length && this.length ?
            a[0].aoData[this[0]]._detailsShow || !1 :
            !1;
    });
    var jc = /^([^:]+):(name|visIdx|visible)$/,
        Zb = function (a, b, c, d, e) {
            c = [];
            d = 0;
            for (var f = e.length; d < f; d++) c.push(I(a, e[d], b));
            return c;
        },
        kc = function (a, b, c) {
            var d = a.aoColumns,
                e = J(d, "sName"),
                h = J(d, "nTh");
            return eb(
                "column",
                b,
                function (b) {
                    var g = Sb(b);
                    if ("" === b) return Z(d.length);
                    if (null !== g) return [0 <= g ? g : d.length + g];
                    if ("function" === typeof b) {
                        var l = Fa(a, c);
                        return f.map(d, function (c, d) {
                            return b(d, Zb(a, d, 0, 0, l), h[d]) ? d : null;
                        });
                    }
                    var n = "string" === typeof b ? b.match(jc) : "";
                    if (n)
                        switch (n[2]) {
                            case "visIdx":
                            case "visible":
                                g = parseInt(n[1], 10);
                                if (0 > g) {
                                    var m = f.map(d, function (a, b) {
                                        return a.bVisible ? b : null;
                                    });
                                    return [m[m.length + g]];
                                }
                                return [ba(a, g)];
                            case "name":
                                return f.map(e, function (a, b) {
                                    return a === n[1] ? b : null;
                                });
                            default:
                                return [];
                        }
                    if (b.nodeName && b._DT_CellIndex) return [b._DT_CellIndex.column];
                    g = f(h)
                        .filter(b)
                        .map(function () {
                            return f.inArray(this, h);
                        })
                        .toArray();
                    if (g.length || !b.nodeName) return g;
                    g = f(b).closest("*[data-dt-column]");
                    return g.length ? [g.data("dt-column")] : [];
                },
                a,
                c
            );
        };
    t("columns()", function (a, b) {
        a === p ? (a = "") : f.isPlainObject(a) && ((b = a), (a = ""));
        b = fb(b);
        var c = this.iterator(
            "table",
            function (c) {
                return kc(c, a, b);
            },
            1
        );
        c.selector.cols = a;
        c.selector.opts = b;
        return c;
    });
    x("columns().header()", "column().header()", function (a, b) {
        return this.iterator(
            "column",
            function (a, b) {
                return a.aoColumns[b].nTh;
            },
            1
        );
    });
    x("columns().footer()", "column().footer()", function (a, b) {
        return this.iterator(
            "column",
            function (a, b) {
                return a.aoColumns[b].nTf;
            },
            1
        );
    });
    x("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", Zb, 1);
    });
    x("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator(
            "column",
            function (a, b) {
                return a.aoColumns[b].mData;
            },
            1
        );
    });
    x("columns().cache()", "column().cache()", function (a) {
        return this.iterator(
            "column-rows",
            function (b, c, d, e, f) {
                return la(
                    b.aoData,
                    f,
                    "search" === a ? "_aFilterData" : "_aSortData",
                    c
                );
            },
            1
        );
    });
    x("columns().nodes()", "column().nodes()", function () {
        return this.iterator(
            "column-rows",
            function (a, b, c, d, e) {
                return la(a.aoData, e, "anCells", b);
            },
            1
        );
    });
    x("columns().visible()", "column().visible()", function (a, b) {
        var c = this,
            d = this.iterator("column", function (b, c) {
                if (a === p) return b.aoColumns[c].bVisible;
                var d = b.aoColumns,
                    e = d[c],
                    h = b.aoData,
                    n;
                if (a !== p && e.bVisible !== a) {
                    if (a) {
                        var m = f.inArray(!0, J(d, "bVisible"), c + 1);
                        d = 0;
                        for (n = h.length; d < n; d++) {
                            var q = h[d].nTr;
                            b = h[d].anCells;
                            q && q.insertBefore(b[c], b[m] || null);
                        }
                    } else f(J(b.aoData, "anCells", c)).detach();
                    e.bVisible = a;
                }
            });
        a !== p &&
            this.iterator("table", function (d) {
                ha(d, d.aoHeader);
                ha(d, d.aoFooter);
                d.aiDisplay.length ||
                    f(d.nTBody).find("td[colspan]").attr("colspan", W(d));
                Ba(d);
                c.iterator("column", function (c, d) {
                    A(c, null, "column-visibility", [c, d, a, b]);
                });
                (b === p || b) && c.columns.adjust();
            });
        return d;
    });
    x("columns().indexes()", "column().index()", function (a) {
        return this.iterator(
            "column",
            function (b, c) {
                return "visible" === a ? ca(b, c) : c;
            },
            1
        );
    });
    t("columns.adjust()", function () {
        return this.iterator(
            "table",
            function (a) {
                aa(a);
            },
            1
        );
    });
    t("column.index()", function (a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a) return ba(c, b);
            if ("fromData" === a || "toVisible" === a) return ca(c, b);
        }
    });
    t("column()", function (a, b) {
        return gb(this.columns(a, b));
    });
    var lc = function (a, b, c) {
        var d = a.aoData,
            e = Fa(a, c),
            h = Vb(la(d, e, "anCells")),
            g = f([].concat.apply([], h)),
            k,
            l = a.aoColumns.length,
            n,
            m,
            q,
            u,
            t,
            v;
        return eb(
            "cell",
            b,
            function (b) {
                var c = "function" === typeof b;
                if (null === b || b === p || c) {
                    n = [];
                    m = 0;
                    for (q = e.length; m < q; m++)
                        for (k = e[m], u = 0; u < l; u++)
                            (t = {
                                row: k,
                                column: u
                            }),
                                c ?
                                    ((v = d[k]),
                                        b(t, I(a, k, u), v.anCells ? v.anCells[u] : null) &&
                                        n.push(t)) :
                                    n.push(t);
                    return n;
                }
                if (f.isPlainObject(b))
                    return b.column !== p && b.row !== p && -1 !== f.inArray(b.row, e) ? [b] : [];
                c = g
                    .filter(b)
                    .map(function (a, b) {
                        return {
                            row: b._DT_CellIndex.row,
                            column: b._DT_CellIndex.column
                        };
                    })
                    .toArray();
                if (c.length || !b.nodeName) return c;
                v = f(b).closest("*[data-dt-row]");
                return v.length ? [{
                    row: v.data("dt-row"),
                    column: v.data("dt-column")
                }] : [];
            },
            a,
            c
        );
    };
    t("cells()", function (a, b, c) {
        f.isPlainObject(a) &&
            (a.row === p ? ((c = a), (a = null)) : ((c = b), (b = null)));
        f.isPlainObject(b) && ((c = b), (b = null));
        if (null === b || b === p)
            return this.iterator("table", function (b) {
                return lc(b, a, fb(c));
            });
        var d = c ? {
            page: c.page,
            order: c.order,
            search: c.search
        } : {},
            e = this.columns(b, d),
            h = this.rows(a, d),
            g,
            k,
            l,
            n;
        d = this.iterator(
            "table",
            function (a, b) {
                a = [];
                g = 0;
                for (k = h[b].length; g < k; g++)
                    for (l = 0, n = e[b].length; l < n; l++)
                        a.push({
                            row: h[b][g],
                            column: e[b][l]
                        });
                return a;
            },
            1
        );
        d = c && c.selected ? this.cells(d, c) : d;
        f.extend(d.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return d;
    });
    x("cells().nodes()", "cell().node()", function () {
        return this.iterator(
            "cell",
            function (a, b, c) {
                return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : p;
            },
            1
        );
    });
    t("cells().data()", function () {
        return this.iterator(
            "cell",
            function (a, b, c) {
                return I(a, b, c);
            },
            1
        );
    });
    x("cells().cache()", "cell().cache()", function (a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator(
            "cell",
            function (b, c, d) {
                return b.aoData[c][a][d];
            },
            1
        );
    });
    x("cells().render()", "cell().render()", function (a) {
        return this.iterator(
            "cell",
            function (b, c, d) {
                return I(b, c, d, a);
            },
            1
        );
    });
    x("cells().indexes()", "cell().index()", function () {
        return this.iterator(
            "cell",
            function (a, b, c) {
                return {
                    row: b,
                    column: c,
                    columnVisible: ca(a, c)
                };
            },
            1
        );
    });
    x("cells().invalidate()", "cell().invalidate()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            ea(b, c, a, d);
        });
    });
    t("cell()", function (a, b, c) {
        return gb(this.cells(a, b, c));
    });
    t("cell().data()", function (a) {
        var b = this.context,
            c = this[0];
        if (a === p)
            return b.length && c.length ? I(b[0], c[0].row, c[0].column) : p;
        ob(b[0], c[0].row, c[0].column, a);
        ea(b[0], c[0].row, "data", c[0].column);
        return this;
    });
    t("order()", function (a, b) {
        var c = this.context;
        if (a === p) return 0 !== c.length ? c[0].aaSorting : p;
        "number" === typeof a
            ?
            (a = [
                [a, b]
            ]) :
            a.length &&
            !f.isArray(a[0]) &&
            (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function (b) {
            b.aaSorting = a.slice();
        });
    });
    t("order.listener()", function (a, b, c) {
        return this.iterator("table", function (d) {
            Qa(d, a, b, c);
        });
    });
    t("order.fixed()", function (a) {
        if (!a) {
            var b = this.context;
            b = b.length ? b[0].aaSortingFixed : p;
            return f.isArray(b) ? {
                pre: b
            } : b;
        }
        return this.iterator("table", function (b) {
            b.aaSortingFixed = f.extend(!0, {}, a);
        });
    });
    t(["columns().order()", "column().order()"], function (a) {
        var b = this;
        return this.iterator("table", function (c, d) {
            var e = [];
            f.each(b[d], function (b, c) {
                e.push([c, a]);
            });
            c.aaSorting = e;
        });
    });
    t("search()", function (a, b, c, d) {
        var e = this.context;
        return a === p ?
            0 !== e.length ?
                e[0].oPreviousSearch.sSearch :
                p :
            this.iterator("table", function (e) {
                e.oFeatures.bFilter &&
                    ia(
                        e,
                        f.extend({}, e.oPreviousSearch, {
                            sSearch: a + "",
                            bRegex: null === b ? !1 : b,
                            bSmart: null === c ? !0 : c,
                            bCaseInsensitive: null === d ? !0 : d,
                        }),
                        1
                    );
            });
    });
    x("columns().search()", "column().search()", function (a, b, c, d) {
        return this.iterator("column", function (e, h) {
            var g = e.aoPreSearchCols;
            if (a === p) return g[h].sSearch;
            e.oFeatures.bFilter &&
                (f.extend(g[h], {
                    sSearch: a + "",
                    bRegex: null === b ? !1 : b,
                    bSmart: null === c ? !0 : c,
                    bCaseInsensitive: null === d ? !0 : d,
                }),
                    ia(e, e.oPreviousSearch, 1));
        });
    });
    t("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null;
    });
    t("state.clear()", function () {
        return this.iterator("table", function (a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {});
        });
    });
    t("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
    });
    t("state.save()", function () {
        return this.iterator("table", function (a) {
            Ba(a);
        });
    });
    q.versionCheck = q.fnVersionCheck = function (a) {
        var b = q.version.split(".");
        a = a.split(".");
        for (var c, d, e = 0, f = a.length; e < f; e++)
            if (
                ((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)
            )
                return c > d;
        return !0;
    };
    q.isDataTable = q.fnIsDataTable = function (a) {
        var b = f(a).get(0),
            c = !1;
        if (a instanceof q.Api) return !0;
        f.each(q.settings, function (a, e) {
            a = e.nScrollHead ? f("table", e.nScrollHead)[0] : null;
            var d = e.nScrollFoot ? f("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || a === b || d === b) c = !0;
        });
        return c;
    };
    q.tables = q.fnTables = function (a) {
        var b = !1;
        f.isPlainObject(a) && ((b = a.api), (a = a.visible));
        var c = f.map(q.settings, function (b) {
            if (!a || (a && f(b.nTable).is(":visible"))) return b.nTable;
        });
        return b ? new v(c) : c;
    };
    q.camelToHungarian = L;
    t("$()", function (a, b) {
        b = this.rows(b).nodes();
        b = f(b);
        return f([].concat(b.filter(a).toArray(), b.find(a).toArray()));
    });
    f.each(["on", "one", "off"], function (a, b) {
        t(b + "()", function () {
            var a = Array.prototype.slice.call(arguments);
            a[0] = f
                .map(a[0].split(/\s/), function (a) {
                    return a.match(/\.dt\b/) ? a : a + ".dt";
                })
                .join(" ");
            var d = f(this.tables().nodes());
            d[b].apply(d, a);
            return this;
        });
    });
    t("clear()", function () {
        return this.iterator("table", function (a) {
            qa(a);
        });
    });
    t("settings()", function () {
        return new v(this.context, this.context);
    });
    t("init()", function () {
        var a = this.context;
        return a.length ? a[0].oInit : null;
    });
    t("data()", function () {
        return this.iterator("table", function (a) {
            return J(a.aoData, "_aData");
        }).flatten();
    });
    t("destroy()", function (a) {
        a = a || !1;
        return this.iterator("table", function (b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                h = b.nTBody,
                g = b.nTHead,
                k = b.nTFoot,
                l = f(e);
            h = f(h);
            var n = f(b.nTableWrapper),
                m = f.map(b.aoData, function (a) {
                    return a.nTr;
                }),
                p;
            b.bDestroying = !0;
            A(b, "aoDestroyCallback", "destroy", [b]);
            a || new v(b).columns().visible(!0);
            n.off(".DT").find(":not(tbody *)").off(".DT");
            f(z).off(".DT-" + b.sInstance);
            e != g.parentNode && (l.children("thead").detach(), l.append(g));
            k && e != k.parentNode && (l.children("tfoot").detach(), l.append(k));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            Aa(b);
            f(m).removeClass(b.asStripeClasses.join(" "));
            f("th, td", g).removeClass(
                d.sSortable +
                " " +
                d.sSortableAsc +
                " " +
                d.sSortableDesc +
                " " +
                d.sSortableNone
            );
            h.children().detach();
            h.append(m);
            g = a ? "remove" : "detach";
            l[g]();
            n[g]();
            !a &&
                c &&
                (c.insertBefore(e, b.nTableReinsertBefore),
                    l.css("width", b.sDestroyWidth).removeClass(d.sTable),
                    (p = b.asDestroyStripes.length) &&
                    h.children().each(function (a) {
                        f(this).addClass(b.asDestroyStripes[a % p]);
                    }));
            c = f.inArray(b, q.settings); -
                1 !== c && q.settings.splice(c, 1);
        });
    });
    f.each(["column", "row", "cell"], function (a, b) {
        t(b + "s().every()", function (a) {
            var c = this.selector.opts,
                e = this;
            return this.iterator(b, function (d, f, k, l, n) {
                a.call(e[b](f, "cell" === b ? k : c, "cell" === b ? c : p), f, k, l, n);
            });
        });
    });
    t("i18n()", function (a, b, c) {
        var d = this.context[0];
        a = U(a)(d.oLanguage);
        a === p && (a = b);
        c !== p && f.isPlainObject(a) && (a = a[c] !== p ? a[c] : a._);
        return a.replace("%d", c);
    });
    q.version = "1.10.20";
    q.settings = [];
    q.models = {};
    q.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0,
    };
    q.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1,
    };
    q.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null,
    };
    q.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (a) {
            return a
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (a) {
            try {
                return JSON.parse(
                    (-1 === a.iStateDuration ? sessionStorage : localStorage).getItem(
                        "DataTables_" + a.sInstance + "_" + location.pathname
                    )
                );
            } catch (b) { }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem(
                    "DataTables_" + a.sInstance + "_" + location.pathname,
                    JSON.stringify(b)
                );
            } catch (c) { }
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending",
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous",
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "",
            sSearchPlaceholder: "Search region...",
            sUrl: "",
            sZeroRecords: "No matching records found",
        },
        oSearch: f.extend({}, q.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId",
    };
    H(q.defaults);
    q.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null,
    };
    H(q.defaults.column);
    q.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null,
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null,
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0,
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: p,
        oAjaxData: p,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
            return "ssp" == D(this) ?
                1 * this._iRecordsTotal :
                this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function () {
            return "ssp" == D(this) ?
                1 * this._iRecordsDisplay :
                this.aiDisplay.length;
        },
        fnDisplayEnd: function () {
            var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
            return e.bServerSide ?
                !1 === f || -1 === a ?
                    b + d :
                    Math.min(b + a, this._iRecordsDisplay) :
                !f || c > d || -1 === a ?
                    d :
                    c;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null,
    };
    q.ext = C = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: q.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: q.version,
    };
    f.extend(C, {
        afnFiltering: C.search,
        aTypes: C.type.detect,
        ofnSearch: C.type.search,
        oSort: C.type.order,
        afnSortData: C.order,
        aoFeatures: C.feature,
        oApi: C.internal,
        oStdClasses: C.classes,
        oPagination: C.pager,
    });
    f.extend(q.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: "",
    });
    var Pb = q.ext.pager;
    f.extend(Pb, {
        simple: function (a, b) {
            return ["previous", "next"];
        },
        full: function (a, b) {
            return ["first", "previous", "next", "last"];
        },
        numbers: function (a, b) {
            return [ka(a, b)];
        },
        simple_numbers: function (a, b) {
            return ["previous", ka(a, b), "next"];
        },
        full_numbers: function (a, b) {
            return ["first", "previous", ka(a, b), "next", "last"];
        },
        first_last_numbers: function (a, b) {
            return ["first", ka(a, b), "last"];
        },
        _numbers: ka,
        numbers_length: 7,
    });
    f.extend(!0, q.ext.renderer, {
        pageButton: {
            _: function (a, b, c, d, e, h) {
                var g = a.oClasses,
                    k = a.oLanguage.oPaginate,
                    l = a.oLanguage.oAria.paginate || {},
                    n,
                    m,
                    q = 0,
                    t = function (b, d) {
                        var p,
                            r = g.sPageButtonDisabled,
                            u = function (b) {
                                Xa(a, b.data.action, !0);
                            };
                        var w = 0;
                        for (p = d.length; w < p; w++) {
                            var v = d[w];
                            if (f.isArray(v)) {
                                var x = f("<" + (v.DT_el || "div") + "/>").appendTo(b);
                                t(x, v);
                            } else {
                                n = null;
                                m = v;
                                x = a.iTabIndex;
                                switch (v) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        n = k.sFirst;
                                        0 === e && ((x = -1), (m += " " + r));
                                        break;
                                    case "previous":
                                        n = k.sPrevious;
                                        0 === e && ((x = -1), (m += " " + r));
                                        break;
                                    case "next":
                                        n = k.sNext;
                                        e === h - 1 && ((x = -1), (m += " " + r));
                                        break;
                                    case "last":
                                        n = k.sLast;
                                        e === h - 1 && ((x = -1), (m += " " + r));
                                        break;
                                    default:
                                        (n = v + 1), (m = e === v ? g.sPageButtonActive : "");
                                }
                                null !== n &&
                                    ((x = f("<a>", {
                                        class: g.sPageButton + " " + m,
                                        "aria-controls": a.sTableId,
                                        "aria-label": l[v],
                                        "data-dt-idx": q,
                                        tabindex: x,
                                        id: 0 === c && "string" === typeof v ?
                                            a.sTableId + "_" + v : null,
                                    })
                                        .html(n)
                                        .appendTo(b)),
                                        $a(x, {
                                            action: v
                                        }, u),
                                        q++);
                            }
                        }
                    };
                try {
                    var v = f(b).find(y.activeElement).data("dt-idx");
                } catch (mc) { }
                t(f(b).empty(), d);
                v !== p &&
                    f(b)
                        .find("[data-dt-idx=" + v + "]")
                        .focus();
            },
        },
    });
    f.extend(q.ext.type.detect, [
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return db(a, b) ? "num" + b : null;
        },
        function (a, b) {
            if (a && !(a instanceof Date) && !cc.test(a)) return null;
            b = Date.parse(a);
            return (null !== b && !isNaN(b)) || P(a) ? "date" : null;
        },
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return db(a, b, !0) ? "num-fmt" + b : null;
        },
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return Ub(a, b) ? "html-num" + b : null;
        },
        function (a, b) {
            b = b.oLanguage.sDecimal;
            return Ub(a, b, !0) ? "html-num-fmt" + b : null;
        },
        function (a, b) {
            return P(a) || ("string" === typeof a && -1 !== a.indexOf("<")) ?
                "html" :
                null;
        },
    ]);
    f.extend(q.ext.type.search, {
        html: function (a) {
            return P(a) ?
                a :
                "string" === typeof a ?
                    a.replace(Rb, " ").replace(Ea, "") :
                    "";
        },
        string: function (a) {
            return P(a) ? a : "string" === typeof a ? a.replace(Rb, " ") : a;
        },
    });
    var Da = function (a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = Tb(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a;
    };
    f.extend(C.type.order, {
        "date-pre": function (a) {
            a = Date.parse(a);
            return isNaN(a) ? -Infinity : a;
        },
        "html-pre": function (a) {
            return P(a) ?
                "" :
                a.replace ?
                    a.replace(/<.*?>/g, "").toLowerCase() :
                    a + "";
        },
        "string-pre": function (a) {
            return P(a) ?
                "" :
                "string" === typeof a ?
                    a.toLowerCase() :
                    a.toString ?
                        a.toString() :
                        "";
        },
        "string-asc": function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        },
        "string-desc": function (a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        },
    });
    Ha("");
    f.extend(!0, q.ext.renderer, {
        header: {
            _: function (a, b, c, d) {
                f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
                    a === f &&
                        ((e = c.idx),
                            b
                                .removeClass(
                                    c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc
                                )
                                .addClass(
                                    "asc" == k[e] ?
                                        d.sSortAsc :
                                        "desc" == k[e] ?
                                            d.sSortDesc :
                                            c.sSortingClass
                                ));
                });
            },
            jqueryui: function (a, b, c, d) {
                f("<div/>")
                    .addClass(d.sSortJUIWrapper)
                    .append(b.contents())
                    .append(f("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
                    .appendTo(b);
                f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
                    a === f &&
                        ((e = c.idx),
                            b
                                .removeClass(d.sSortAsc + " " + d.sSortDesc)
                                .addClass(
                                    "asc" == k[e] ?
                                        d.sSortAsc :
                                        "desc" == k[e] ?
                                            d.sSortDesc :
                                            c.sSortingClass
                                ),
                            b
                                .find("span." + d.sSortIcon)
                                .removeClass(
                                    d.sSortJUIAsc +
                                    " " +
                                    d.sSortJUIDesc +
                                    " " +
                                    d.sSortJUI +
                                    " " +
                                    d.sSortJUIAscAllowed +
                                    " " +
                                    d.sSortJUIDescAllowed
                                )
                                .addClass(
                                    "asc" == k[e] ?
                                        d.sSortJUIAsc :
                                        "desc" == k[e] ?
                                            d.sSortJUIDesc :
                                            c.sSortingClassJUI
                                ));
                });
            },
        },
    });
    var ib = function (a) {
        return "string" === typeof a ?
            a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") :
            a;
    };
    q.render = {
        number: function (a, b, c, d, e) {
            return {
                display: function (f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var g = 0 > f ? "-" : "",
                        h = parseFloat(f);
                    if (isNaN(h)) return ib(f);
                    h = h.toFixed(c);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return (
                        g +
                        (d || "") +
                        h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
                        f +
                        (e || "")
                    );
                },
            };
        },
        text: function () {
            return {
                display: ib,
                filter: ib
            };
        },
    };
    f.extend(q.ext.internal, {
        _fnExternApiFunc: Qb,
        _fnBuildAjax: va,
        _fnAjaxUpdate: qb,
        _fnAjaxParameters: zb,
        _fnAjaxUpdateDraw: Ab,
        _fnAjaxDataSrc: wa,
        _fnAddColumn: Ia,
        _fnColumnOptions: ma,
        _fnAdjustColumnSizing: aa,
        _fnVisibleToColumnIndex: ba,
        _fnColumnIndexToVisible: ca,
        _fnVisbleColumns: W,
        _fnGetColumns: oa,
        _fnColumnTypes: Ka,
        _fnApplyColumnDefs: nb,
        _fnHungarianMap: H,
        _fnCamelToHungarian: L,
        _fnLanguageCompat: Ga,
        _fnBrowserDetect: lb,
        _fnAddData: R,
        _fnAddTr: pa,
        _fnNodeToDataIndex: function (a, b) {
            return b._DT_RowIndex !== p ? b._DT_RowIndex : null;
        },
        _fnNodeToColumnIndex: function (a, b, c) {
            return f.inArray(c, a.aoData[b].anCells);
        },
        _fnGetCellData: I,
        _fnSetCellData: ob,
        _fnSplitObjNotation: Na,
        _fnGetObjectDataFn: U,
        _fnSetObjectDataFn: Q,
        _fnGetDataMaster: Oa,
        _fnClearTable: qa,
        _fnDeleteIndex: ra,
        _fnInvalidate: ea,
        _fnGetRowElements: Ma,
        _fnCreateTr: La,
        _fnBuildHead: pb,
        _fnDrawHead: ha,
        _fnDraw: S,
        _fnReDraw: V,
        _fnAddOptionsHtml: sb,
        _fnDetectHeader: fa,
        _fnGetUniqueThs: ua,
        _fnFeatureHtmlFilter: ub,
        _fnFilterComplete: ia,
        _fnFilterCustom: Db,
        _fnFilterColumn: Cb,
        _fnFilter: Bb,
        _fnFilterCreateSearch: Ta,
        _fnEscapeRegex: Ua,
        _fnFilterData: Eb,
        _fnFeatureHtmlInfo: xb,
        _fnUpdateInfo: Hb,
        _fnInfoMacros: Ib,
        _fnInitialise: ja,
        _fnInitComplete: xa,
        _fnLengthChange: Va,
        _fnFeatureHtmlLength: tb,
        _fnFeatureHtmlPaginate: yb,
        _fnPageChange: Xa,
        _fnFeatureHtmlProcessing: vb,
        _fnProcessingDisplay: K,
        _fnFeatureHtmlTable: wb,
        _fnScrollDraw: na,
        _fnApplyToChildren: N,
        _fnCalculateColumnWidths: Ja,
        _fnThrottle: Sa,
        _fnConvertToWidth: Jb,
        _fnGetWidestNode: Kb,
        _fnGetMaxLenString: Lb,
        _fnStringToCss: B,
        _fnSortFlatten: Y,
        _fnSort: rb,
        _fnSortAria: Nb,
        _fnSortListener: Za,
        _fnSortAttachListener: Qa,
        _fnSortingClasses: Aa,
        _fnSortData: Mb,
        _fnSaveState: Ba,
        _fnLoadState: Ob,
        _fnSettingsFromNode: Ca,
        _fnLog: O,
        _fnMap: M,
        _fnBindAction: $a,
        _fnCallbackReg: E,
        _fnCallbackFire: A,
        _fnLengthOverflow: Wa,
        _fnRenderer: Ra,
        _fnDataSource: D,
        _fnRowAttributes: Pa,
        _fnExtend: ab,
        _fnCalculateEnd: function () { },
    });
    f.fn.dataTable = q;
    q.$ = f;
    f.fn.dataTableSettings = q.settings;
    f.fn.dataTableExt = q.ext;
    f.fn.DataTable = function (a) {
        return f(this).dataTable(a).api();
    };
    f.each(q, function (a, b) {
        f.fn.DataTable[a] = b;
    });
    return f.fn.dataTable;
});

/*===========================================*/