"use strict";
var FontScroll = /** @class */ (function () {
    function FontScroll(bigEl, ulEl, cloneEl, time, limitNumer) {
        this.bigEl = document.querySelector(bigEl);
        this.ulEl = document.querySelector(ulEl);
        this.cloneEl = document.querySelector(cloneEl);
        this.time = time;
        this.limitNumer = limitNumer;
        this.init();
        this.move();
    }
    FontScroll.prototype.init = function () {
        if (this.ulEl.offsetHeight >= this.bigEl.offsetHeight) {
            this.cloneEl.innerHTML = this.ulEl.innerHTML;
        }
    };
    FontScroll.prototype.move = function () {
        var _this = this;
        var stopTime = setInterval(function () {
            if (_this.bigEl.scrollTop >= _this.ulEl.offsetHeight) {
                _this.bigEl.scrollTop = 0;
            }
            else {
                _this.bigEl.scrollTop = _this.bigEl.scrollTop + 1;
            }
        }, this.time);
    };
    return FontScroll;
}());
