// Карусель
export function carousel() {

  function _createForOfIteratorHelper(o, allowArrayLike) {
    let it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        let i = 0;
        let F = function F() {};
        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    let normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function s() {
        it = o[Symbol.iterator]();
      },
      n: function n() {
        let step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null) it["return"]();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }



  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      let descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  const servicesCarousel = () => {
    const SliderCarousel = function () {
      function SliderCarousel(_ref) {
        const main = _ref.main,
          wrap = _ref.wrap,
          next = _ref.next,
          prev = _ref.prev,
          _ref$position = _ref.position,
          position = _ref$position === void 0 ? 0 : _ref$position,
          _ref$slidesToShow = _ref.slidesToShow,
          slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow;

        _classCallCheck(this, SliderCarousel);

        if (!main || !wrap) {
          console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!');
        }

        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
          position: position,
          widthSlide: Math.floor(100 / this.slidesToShow),
          maxPosition: this.slides.length - this.slidesToShow
        };
      }

      _createClass(SliderCarousel, [{
        key: "init",
        value: function init() {
          this.addClass();
          this.addStyle();

          if (this.prev && this.next) {
            this.controlSlider();
          } else {
            this.addArrow();
            this.controlSlider();
          }
        }
      }, {
        key: "addClass",
        value: function addClass() {
          this.main.classList.add('slider');
          this.wrap.classList.add('slider__wrap');

          let _iterator = _createForOfIteratorHelper(this.slides),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              const item = _step.value;
              item.classList.add('slider__item');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "addStyle",
        value: function addStyle() {
          let style = document.createElement('style');
          style.id = 'sliderCarousel-style';
          style.textContent = "\n        .slider{\n          overflow: hidden !important;\n        }\n        .slider__wrap{\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .slider__item{\n          display: flex !important;\n          align-items: center;\n          justify-content: center;\n          flex: 0 0 ".concat(this.options.widthSlide, "% !important;\n          margin: auto 0 !important;\n        }\n      ");
          document.head.appendChild(style);
        }
      }, {
        key: "controlSlider",
        value: function controlSlider() {
          this.prev.addEventListener('click', this.prevSlider.bind(this));
          this.next.addEventListener('click', this.nextSlider.bind(this));
        }
      }, {
        key: "prevSlider",
        value: function prevSlider() {
          if (this.options.infinity || this.options.position > 0) {
            --this.options.position;

            if (this.options.position < 0) {
              this.options.position = this.options.maxPosition;
            }

            this.wrap.style.transform = "translateX(-".concat(this.options.position * this.options.widthSlide, "%)");
          }
        }
      }, {
        key: "nextSlider",
        value: function nextSlider() {
          if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;

            if (this.options.position > this.options.maxPosition) {
              this.options.position = 0;
            }

            this.wrap.style.transform = "translateX(-".concat(this.options.position * this.options.widthSlide, "%)");
          }
        }
      }, {
        key: "addArrow",
        value: function addArrow() {
          this.prev = document.querySelector('.arrow-left');
          this.next = document.querySelector('.arrow-right');
        }
      }]);

      return SliderCarousel;
    }();

    const carousel = new SliderCarousel({
      main: '.services-elements',
      wrap: '.services-carousel',
      prev: '#test-left',
      next: '.arrow-right',
      slidesToShow: 3
    });
    carousel.init();
    const element = document.querySelectorAll('.element');
    let array = [element[0], element[1], element[2], element[3], element[4], element[5]]

    array.forEach((item) => {
      item.addEventListener('click', () => {
        const callback = document.querySelector('.modal-callback')
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalClose = document.querySelector('.modal-close>img');

        callback.style.display = 'block';
        modalOverlay.style.display = 'block';

        modalClose.addEventListener('click', () => {
          callback.style.display = 'none';
          modalOverlay.style.display = 'none';

          document.querySelectorAll('input').forEach(item => {
            if (item.type === 'text' || item.type === 'tel') {
              item.value = '';
            }
          });
        });

        modalOverlay.addEventListener('click', () => {
          callback.style.display = 'none';
          modalOverlay.style.display = 'none';
        });
      })
    });
  };

  servicesCarousel()
}
// carousel();