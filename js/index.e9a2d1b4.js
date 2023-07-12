var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  e = {},
  i = {},
  r = t.parcelRequiree7cc;
null == r &&
  (((r = function (t) {
    if (t in e) return e[t].exports;
    if (t in i) {
      var r = i[t];
      delete i[t];
      var n = { id: t, exports: {} };
      return (e[t] = n), r.call(n.exports, n, n.exports), n.exports;
    }
    var s = new Error("Cannot find module '" + t + "'");
    throw ((s.code = "MODULE_NOT_FOUND"), s);
  }).register = function (t, e) {
    i[t] = e;
  }),
  (t.parcelRequiree7cc = r)),
  r.register("4hJWI", function (t, e) {
    !(function (e, i) {
      "function" == typeof define && define.amd
        ? define(i)
        : t.exports
        ? (t.exports = i())
        : (e.EvEmitter = i());
    })("undefined" != typeof window ? window : t.exports, function () {
      function t() {}
      var e = t.prototype;
      return (
        (e.on = function (t, e) {
          if (t && e) {
            var i = (this._events = this._events || {}),
              r = (i[t] = i[t] || []);
            return -1 == r.indexOf(e) && r.push(e), this;
          }
        }),
        (e.once = function (t, e) {
          if (t && e) {
            this.on(t, e);
            var i = (this._onceEvents = this._onceEvents || {});
            return ((i[t] = i[t] || {})[e] = !0), this;
          }
        }),
        (e.off = function (t, e) {
          var i = this._events && this._events[t];
          if (i && i.length) {
            var r = i.indexOf(e);
            return -1 != r && i.splice(r, 1), this;
          }
        }),
        (e.emitEvent = function (t, e) {
          var i = this._events && this._events[t];
          if (i && i.length) {
            (i = i.slice(0)), (e = e || []);
            for (
              var r = this._onceEvents && this._onceEvents[t], n = 0;
              n < i.length;
              n++
            ) {
              var s = i[n];
              r && r[s] && (this.off(t, s), delete r[s]), s.apply(this, e);
            }
            return this;
          }
        }),
        (e.allOff = function () {
          delete this._events, delete this._onceEvents;
        }),
        t
      );
    });
  });
var n = {};
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ !(function (t, e) {
  "function" == typeof define && define.amd
    ? define(["ev-emitter/ev-emitter"], function (i) {
        return e(t, i);
      })
    : n
    ? (n = e(t, r("4hJWI")))
    : (t.imagesLoaded = e(t, t.EvEmitter));
})("undefined" != typeof window ? window : n, function (t, e) {
  var i = t.jQuery,
    r = t.console;
  function n(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }
  var s = Array.prototype.slice;
  function a(t, e, o) {
    if (!(this instanceof a)) return new a(t, e, o);
    var u,
      h = t;
    ("string" == typeof t && (h = document.querySelectorAll(t)), h)
      ? ((this.elements =
          ((u = h),
          Array.isArray(u)
            ? u
            : "object" == typeof u && "number" == typeof u.length
            ? s.call(u)
            : [u])),
        (this.options = n({}, this.options)),
        "function" == typeof e ? (o = e) : n(this.options, e),
        o && this.on("always", o),
        this.getImages(),
        i && (this.jqDeferred = new i.Deferred()),
        setTimeout(this.check.bind(this)))
      : r.error("Bad element for imagesLoaded " + (h || t));
  }
  (a.prototype = Object.create(e.prototype)),
    (a.prototype.options = {}),
    (a.prototype.getImages = function () {
      (this.images = []), this.elements.forEach(this.addElementImages, this);
    }),
    (a.prototype.addElementImages = function (t) {
      "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
      var e = t.nodeType;
      if (e && o[e]) {
        for (var i = t.querySelectorAll("img"), r = 0; r < i.length; r++) {
          var n = i[r];
          this.addImage(n);
        }
        if ("string" == typeof this.options.background) {
          var s = t.querySelectorAll(this.options.background);
          for (r = 0; r < s.length; r++) {
            var a = s[r];
            this.addElementBackgroundImages(a);
          }
        }
      }
    });
  var o = { 1: !0, 9: !0, 11: !0 };
  function u(t) {
    this.img = t;
  }
  function h(t, e) {
    (this.url = t), (this.element = e), (this.img = new Image());
  }
  return (
    (a.prototype.addElementBackgroundImages = function (t) {
      var e = getComputedStyle(t);
      if (e)
        for (
          var i = /url\((['"])?(.*?)\1\)/gi, r = i.exec(e.backgroundImage);
          null !== r;

        ) {
          var n = r && r[2];
          n && this.addBackground(n, t), (r = i.exec(e.backgroundImage));
        }
    }),
    (a.prototype.addImage = function (t) {
      var e = new u(t);
      this.images.push(e);
    }),
    (a.prototype.addBackground = function (t, e) {
      var i = new h(t, e);
      this.images.push(i);
    }),
    (a.prototype.check = function () {
      var t = this;
      function e(e, i, r) {
        setTimeout(function () {
          t.progress(e, i, r);
        });
      }
      (this.progressedCount = 0),
        (this.hasAnyBroken = !1),
        this.images.length
          ? this.images.forEach(function (t) {
              t.once("progress", e), t.check();
            })
          : this.complete();
    }),
    (a.prototype.progress = function (t, e, i) {
      this.progressedCount++,
        (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred &&
          this.jqDeferred.notify &&
          this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && r && r.log("progress: " + i, t, e);
    }),
    (a.prototype.complete = function () {
      var t = this.hasAnyBroken ? "fail" : "done";
      if (
        ((this.isComplete = !0),
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred)
      ) {
        var e = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[e](this);
      }
    }),
    (u.prototype = Object.create(e.prototype)),
    (u.prototype.check = function () {
      this.getIsImageComplete()
        ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
        : ((this.proxyImage = new Image()),
          this.proxyImage.addEventListener("load", this),
          this.proxyImage.addEventListener("error", this),
          this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.proxyImage.src = this.img.src));
    }),
    (u.prototype.getIsImageComplete = function () {
      return this.img.complete && this.img.naturalWidth;
    }),
    (u.prototype.confirm = function (t, e) {
      (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
    }),
    (u.prototype.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t);
    }),
    (u.prototype.onload = function () {
      this.confirm(!0, "onload"), this.unbindEvents();
    }),
    (u.prototype.onerror = function () {
      this.confirm(!1, "onerror"), this.unbindEvents();
    }),
    (u.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
    }),
    (h.prototype = Object.create(u.prototype)),
    (h.prototype.check = function () {
      this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        (this.img.src = this.url),
        this.getIsImageComplete() &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
    }),
    (h.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
    }),
    (h.prototype.confirm = function (t, e) {
      (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
    }),
    (a.makeJQueryPlugin = function (e) {
      (e = e || t.jQuery) &&
        ((i = e).fn.imagesLoaded = function (t, e) {
          return new a(this, t, e).jqDeferred.promise(i(this));
        });
    }),
    a.makeJQueryPlugin(),
    a
  );
});
function s(t, e, i) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
function a(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function o(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var u,
  h,
  l,
  f,
  c,
  p,
  d,
  _,
  m,
  g,
  v,
  y,
  b,
  x,
  T,
  w,
  O,
  M,
  k,
  E,
  D,
  A,
  C,
  S,
  I,
  P,
  F,
  R,
  z = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  L = { duration: 0.5, overwrite: !1, delay: 0 },
  B = 2 * Math.PI,
  q = B / 4,
  j = 0,
  N = Math.sqrt,
  U = Math.cos,
  Y = Math.sin,
  X = function (t) {
    return "string" == typeof t;
  },
  V = function (t) {
    return "function" == typeof t;
  },
  W = function (t) {
    return "number" == typeof t;
  },
  Q = function (t) {
    return void 0 === t;
  },
  G = function (t) {
    return "object" == typeof t;
  },
  H = function (t) {
    return !1 !== t;
  },
  J = function () {
    return "undefined" != typeof window;
  },
  Z = function (t) {
    return V(t) || X(t);
  },
  $ =
    ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
  K = Array.isArray,
  tt = /(?:-?\.?\d|\.)+/gi,
  et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  nt = /[+-]=-?[.\d]+/,
  st = /[^,'"\[\]\s]+/gi,
  at = /[\d.+\-=]+(?:e[-+]\d*)*/i,
  ot = {},
  ut = {},
  ht = function (t) {
    return (ut = Ft(t, ot)) && xi;
  },
  lt = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ft = function (t, e) {
    return !e && console.warn(t);
  },
  ct = function (t, e) {
    return (t && (ot[t] = e) && ut && (ut[t] = e)) || ot;
  },
  pt = function () {
    return 0;
  },
  dt = {},
  _t = [],
  mt = {},
  gt = {},
  vt = {},
  yt = 30,
  bt = [],
  xt = "",
  Tt = function (t) {
    var e,
      i,
      r = t[0];
    if ((G(r) || V(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
      for (i = bt.length; i-- && !bt[i].targetTest(r); );
      e = bt[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new Ve(t[i], e)))) ||
        t.splice(i, 1);
    return t;
  },
  wt = function (t) {
    return t._gsap || Tt(fe(t))[0]._gsap;
  },
  Ot = function (t, e, i) {
    return (i = t[e]) && V(i)
      ? t[e]()
      : (Q(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  Mt = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  kt = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
  Et = function (t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  },
  Dt = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  At = function () {
    var t,
      e,
      i = _t.length,
      r = _t.slice(0);
    for (mt = {}, _t.length = 0, t = 0; t < i; t++)
      (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  },
  Ct = function (t, e, i, r) {
    _t.length && At(), t.render(e, i, r), _t.length && At();
  },
  St = function (t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(st).length < 2
      ? e
      : X(t)
      ? t.trim()
      : t;
  },
  It = function (t) {
    return t;
  },
  Pt = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  Ft = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Rt = function t(e, i) {
    for (var r in i)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (e[r] = G(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
    return e;
  },
  zt = function (t, e) {
    var i,
      r = {};
    for (i in t) i in e || (r[i] = t[i]);
    return r;
  },
  Lt = function (t) {
    var e,
      i = t.parent || h,
      r = t.keyframes
        ? ((e = K(t.keyframes)),
          function (t, i) {
            for (var r in i)
              r in t ||
                ("duration" === r && e) ||
                "ease" === r ||
                (t[r] = i[r]);
          })
        : Pt;
    if (H(t.inherit))
      for (; i; ) r(t, i.vars.defaults), (i = i.parent || i._dp);
    return t;
  },
  Bt = function (t, e, i, r) {
    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = n) : t[r] === e && (t[r] = n),
      (e._next = e._prev = e.parent = null);
  },
  qt = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
      (t._act = 0);
  },
  jt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  Nt = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  Ut = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Yt = function (t) {
    return t._repeat ? Xt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Xt = function (t, e) {
    var i = Math.floor((t /= e));
    return t && i === t ? i - 1 : i;
  },
  Vt = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Wt = function (t) {
    return (t._end = Et(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
    ));
  },
  Qt = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = Et(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Wt(t),
        i._dirty || jt(i, t)),
      t
    );
  },
  Gt = function (t, e) {
    var i;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((i = Vt(t.rawTime(), e)),
        (!e._dur || ae(0, e.totalDuration(), i) - e._tTime > 1e-8) &&
          e.render(i, !0)),
      jt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -1e-8;
    }
  },
  Ht = function (t, e, i, r) {
    return (
      e.parent && qt(e),
      (e._start = Et(
        (W(i) ? i : i || t !== h ? re(t, i, e) : t._time) + e._delay
      )),
      (e._end = Et(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function (t, e, i, r, n) {
        void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
        var s,
          a = t[r];
        if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
        a
          ? ((e._next = a._next), (a._next = e))
          : ((e._next = t[i]), (t[i] = e)),
          e._next ? (e._next._prev = e) : (t[r] = e),
          (e._prev = a),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      Kt(e) || (t._recent = e),
      r || Gt(t, e),
      t
    );
  },
  Jt = function (t, e) {
    return (
      (ot.ScrollTrigger || lt("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  },
  Zt = function (t, e, i, r) {
    return (
      $e(t, e),
      t._initted
        ? !i &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== Ie.frame
          ? (_t.push(t), (t._lazy = [e, r]), 1)
          : void 0
        : 1
    );
  },
  $t = function t(e) {
    var i = e.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
  },
  Kt = function (t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
  te = function (t, e, i, r) {
    var n = t._repeat,
      s = Et(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : Et(s * (n + 1) + t._rDelay * n)) : s),
      a > 0 && !r ? Qt(t, (t._tTime = t._tDur * a)) : t.parent && Wt(t),
      i || jt(t.parent, t),
      t
    );
  },
  ee = function (t) {
    return t instanceof Qe ? jt(t) : te(t, t._dur);
  },
  ie = { _start: 0, endTime: pt, totalDuration: pt },
  re = function t(e, i, r) {
    var n,
      s,
      a,
      o = e.labels,
      u = e._recent || ie,
      h = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
    return X(i) && (isNaN(i) || i in o)
      ? ((s = i.charAt(0)),
        (a = "%" === i.substr(-1)),
        (n = i.indexOf("=")),
        "<" === s || ">" === s
          ? (n >= 0 && (i = i.replace(/=/, "")),
            ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (a ? (n < 0 ? u : r).totalDuration() / 100 : 1))
          : n < 0
          ? (i in o || (o[i] = h), o[i])
          : ((s = parseFloat(i.charAt(n - 1) + i.substr(n + 1))),
            a && r && (s = (s / 100) * (K(r) ? r[0] : r).totalDuration()),
            n > 1 ? t(e, i.substr(0, n - 1), r) + s : h + s))
      : null == i
      ? h
      : +i;
  },
  ne = function (t, e, i) {
    var r,
      n,
      s = W(e[1]),
      a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
      o = e[a];
    if ((s && (o.duration = e[1]), (o.parent = i), t)) {
      for (r = o, n = i; n && !("immediateRender" in r); )
        (r = n.vars.defaults || {}), (n = H(n.vars.inherit) && n.parent);
      (o.immediateRender = H(r.immediateRender)),
        t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
    }
    return new ri(e[0], o, e[a + 1]);
  },
  se = function (t, e) {
    return t || 0 === t ? e(t) : e;
  },
  ae = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  oe = function (t, e) {
    return X(t) && (e = at.exec(t)) ? t.substr(e.index + e[0].length) : "";
  },
  ue = [].slice,
  he = function (t, e) {
    return (
      t &&
      G(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && G(t[0]))) &&
      !t.nodeType &&
      t !== l
    );
  },
  le = function (t, e, i) {
    return (
      void 0 === i && (i = []),
      t.forEach(function (t) {
        var r;
        return (X(t) && !e) || he(t, 1)
          ? (r = i).push.apply(r, fe(t))
          : i.push(t);
      }) || i
    );
  },
  fe = function (t, e, i) {
    return !X(t) || i || (!f && Pe())
      ? K(t)
        ? le(t, i)
        : he(t)
        ? ue.call(t, 0)
        : t
        ? [t]
        : []
      : ue.call((e || c).querySelectorAll(t), 0);
  },
  ce = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  pe = function (t) {
    if (V(t)) return t;
    var e = G(t) ? t : { each: t },
      i = je(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      a = r > 0 && r < 1,
      o = isNaN(r) || a,
      u = e.axis,
      h = r,
      l = r;
    return (
      X(r)
        ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && o && ((h = r[0]), (l = r[1])),
      function (t, a, f) {
        var c,
          p,
          d,
          _,
          m,
          g,
          v,
          y,
          b,
          x = (f || e).length,
          T = s[x];
        if (!T) {
          if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
            for (
              v = -1e8;
              v < (v = f[b++].getBoundingClientRect().left) && b < x;

            );
            b--;
          }
          for (
            T = s[x] = [],
              c = o ? Math.min(b, x) * h - 0.5 : r % b,
              p = 1e8 === b ? 0 : o ? (x * l) / b - 0.5 : (r / b) | 0,
              v = 0,
              y = 1e8,
              g = 0;
            g < x;
            g++
          )
            (d = (g % b) - c),
              (_ = p - ((g / b) | 0)),
              (T[g] = m = u ? Math.abs("y" === u ? _ : d) : N(d * d + _ * _)),
              m > v && (v = m),
              m < y && (y = m);
          "random" === r && ce(T),
            (T.max = v - y),
            (T.min = y),
            (T.v = x =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (b > x
                    ? x - 1
                    : u
                    ? "y" === u
                      ? x / b
                      : b
                    : Math.max(b, x / b)) ||
                0) * ("edges" === r ? -1 : 1)),
            (T.b = x < 0 ? n - x : n),
            (T.u = oe(e.amount || e.each) || 0),
            (i = i && x < 0 ? Be(i) : i);
        }
        return (
          (x = (T[t] - T.min) / T.max || 0),
          Et(T.b + (i ? i(x) : x) * T.v) + T.u
        );
      }
    );
  },
  de = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = Math.round(parseFloat(i) / t) * t * e;
      return (r - (r % 1)) / e + (W(i) ? 0 : oe(i));
    };
  },
  _e = function (t, e) {
    var i,
      r,
      n = K(t);
    return (
      !n &&
        G(t) &&
        ((i = n = t.radius || 1e8),
        t.values
          ? ((t = fe(t.values)), (r = !W(t[0])) && (i *= i))
          : (t = de(t.increment))),
      se(
        e,
        n
          ? V(t)
            ? function (e) {
                return (r = t(e)), Math.abs(r - e) <= i ? r : e;
              }
            : function (e) {
                for (
                  var n,
                    s,
                    a = parseFloat(r ? e.x : e),
                    o = parseFloat(r ? e.y : 0),
                    u = 1e8,
                    h = 0,
                    l = t.length;
                  l--;

                )
                  (n = r
                    ? (n = t[l].x - a) * n + (s = t[l].y - o) * s
                    : Math.abs(t[l] - a)) < u && ((u = n), (h = l));
                return (
                  (h = !i || u <= i ? t[h] : e),
                  r || h === e || W(e) ? h : h + oe(e)
                );
              }
          : de(t)
      )
    );
  },
  me = function (t, e, i, r) {
    return se(K(t) ? !e : !0 === i ? ((i = 0), !1) : !r, function () {
      return K(t)
        ? t[~~(Math.random() * t.length)]
        : (r = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) *
                i *
                r
            ) / r;
    });
  },
  ge = function (t, e, i) {
    return se(i, function (i) {
      return t[~~e(i)];
    });
  },
  ve = function (t) {
    for (var e, i, r, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
      (r = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (i = t.substr(e + 7, r - e - 7).match(n ? st : tt)),
        (a +=
          t.substr(s, e - s) + me(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
        (s = r + 1);
    return a + t.substr(s, t.length - s);
  },
  ye = function (t, e, i, r, n) {
    var s = e - t,
      a = r - i;
    return se(n, function (e) {
      return i + (((e - t) / s) * a || 0);
    });
  },
  be = function (t, e, i) {
    var r,
      n,
      s,
      a = t.labels,
      o = 1e8;
    for (r in a)
      (n = a[r] - e) < 0 == !!i &&
        n &&
        o > (n = Math.abs(n)) &&
        ((s = r), (o = n));
    return s;
  },
  xe = function (t, e, i) {
    var r,
      n,
      s = t.vars,
      a = s[e];
    if (a)
      return (
        (r = s[e + "Params"]),
        (n = s.callbackScope || t),
        i && _t.length && At(),
        r ? a.apply(n, r) : a.call(n)
      );
  },
  Te = function (t) {
    return (
      qt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!1),
      t.progress() < 1 && xe(t, "onInterrupt"),
      t
    );
  },
  we = function (t) {
    var e = (t = (!t.name && t.default) || t).name,
      i = V(t),
      r =
        e && !i && t.init
          ? function () {
              this._props = [];
            }
          : t,
      n = { init: pt, render: ci, add: Je, kill: di, modifier: pi, rawVars: 0 },
      s = { targetTest: 0, get: 0, getSetter: ui, aliases: {}, register: 0 };
    if ((Pe(), t !== r)) {
      if (gt[e]) return;
      Pt(r, Pt(zt(t, n), s)),
        Ft(r.prototype, Ft(n, zt(t, s))),
        (gt[(r.prop = e)] = r),
        t.targetTest && (bt.push(r), (dt[e] = 1)),
        (e =
          ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
          "Plugin");
    }
    ct(e, r), t.register && t.register(xi, r, gi);
  },
  Oe = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0],
  },
  Me = function (t, e, i) {
    return (
      (255 *
        (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) +
        0.5) |
      0
    );
  },
  ke = function (t, e, i) {
    var r,
      n,
      s,
      a,
      o,
      u,
      h,
      l,
      f,
      c,
      p = t ? (W(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : Oe.black;
    if (!p) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Oe[t]))
        p = Oe[t];
      else if ("#" === t.charAt(0)) {
        if (
          (t.length < 6 &&
            ((r = t.charAt(1)),
            (n = t.charAt(2)),
            (s = t.charAt(3)),
            (t =
              "#" +
              r +
              r +
              n +
              n +
              s +
              s +
              (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
          9 === t.length)
        )
          return [
            (p = parseInt(t.substr(1, 6), 16)) >> 16,
            (p >> 8) & 255,
            255 & p,
            parseInt(t.substr(7), 16) / 255,
          ];
        p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t];
      } else if ("hsl" === t.substr(0, 3))
        if (((p = c = t.match(tt)), e)) {
          if (~t.indexOf("="))
            return (p = t.match(et)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (a = (+p[0] % 360) / 360),
            (o = +p[1] / 100),
            (r =
              2 * (u = +p[2] / 100) -
              (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
            p.length > 3 && (p[3] *= 1),
            (p[0] = Me(a + 1 / 3, r, n)),
            (p[1] = Me(a, r, n)),
            (p[2] = Me(a - 1 / 3, r, n));
      else p = t.match(tt) || Oe.transparent;
      p = p.map(Number);
    }
    return (
      e &&
        !c &&
        ((r = p[0] / 255),
        (n = p[1] / 255),
        (s = p[2] / 255),
        (u = ((h = Math.max(r, n, s)) + (l = Math.min(r, n, s))) / 2),
        h === l
          ? (a = o = 0)
          : ((f = h - l),
            (o = u > 0.5 ? f / (2 - h - l) : f / (h + l)),
            (a =
              h === r
                ? (n - s) / f + (n < s ? 6 : 0)
                : h === n
                ? (s - r) / f + 2
                : (r - n) / f + 4),
            (a *= 60)),
        (p[0] = ~~(a + 0.5)),
        (p[1] = ~~(100 * o + 0.5)),
        (p[2] = ~~(100 * u + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  },
  Ee = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(Ae).forEach(function (t) {
        var n = t.match(it) || [];
        e.push.apply(e, n), i.push((r += n.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  De = function (t, e, i) {
    var r,
      n,
      s,
      a,
      o = "",
      u = (t + o).match(Ae),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = ke(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      i && ((s = Ee(t)), (r = i.c).join(o) !== s.c.join(o)))
    )
      for (a = (n = t.replace(Ae, "1").split(it)).length - 1; l < a; l++)
        o +=
          n[l] +
          (~r.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (s.length ? s : u.length ? u : i).shift());
    if (!n) for (a = (n = t.split(Ae)).length - 1; l < a; l++) o += n[l] + u[l];
    return o + n[a];
  },
  Ae = (function () {
    var t,
      e =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t in Oe) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi");
  })(),
  Ce = /hsl[a]?\(/,
  Se = function (t) {
    var e,
      i = t.join(" ");
    if (((Ae.lastIndex = 0), Ae.test(i)))
      return (
        (e = Ce.test(i)),
        (t[1] = De(t[1], e)),
        (t[0] = De(t[0], e, Ee(t[1]))),
        !0
      );
  },
  Ie =
    ((w = Date.now),
    (O = 500),
    (M = 33),
    (k = w()),
    (E = k),
    (A = D = 1e3 / 240),
    (S = function t(e) {
      var i,
        r,
        n,
        s,
        a = w() - E,
        o = !0 === e;
      if (
        (a > O && (k += a - M),
        ((i = (n = (E += a) - k) - A) > 0 || o) &&
          ((s = ++b.frame),
          (x = n - 1e3 * b.time),
          (b.time = n /= 1e3),
          (A += i + (i >= D ? 4 : D - i)),
          (r = 1)),
        o || (g = v(t)),
        r)
      )
        for (T = 0; T < C.length; T++) C[T](n, x, s, e);
    }),
    (b = {
      time: 0,
      frame: 0,
      tick: function () {
        S(!0);
      },
      deltaRatio: function (t) {
        return x / (1e3 / (t || 60));
      },
      wake: function () {
        p &&
          (!f &&
            J() &&
            ((l = f = window),
            (c = l.document || {}),
            (ot.gsap = xi),
            (l.gsapVersions || (l.gsapVersions = [])).push(xi.version),
            ht(ut || l.GreenSockGlobals || (!l.gsap && l) || {}),
            (y = l.requestAnimationFrame)),
          g && b.sleep(),
          (v =
            y ||
            function (t) {
              return setTimeout(t, (A - 1e3 * b.time + 1) | 0);
            }),
          (m = 1),
          S(2));
      },
      sleep: function () {
        (y ? l.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = pt);
      },
      lagSmoothing: function (t, e) {
        (O = t || 1 / 1e-8), (M = Math.min(e, O, 0));
      },
      fps: function (t) {
        (D = 1e3 / (t || 240)), (A = 1e3 * b.time + D);
      },
      add: function (t) {
        C.indexOf(t) < 0 && C.push(t), Pe();
      },
      remove: function (t, e) {
        ~(e = C.indexOf(t)) && C.splice(e, 1) && T >= e && T--;
      },
      _listeners: (C = []),
    })),
  Pe = function () {
    return !m && Ie.wake();
  },
  Fe = {},
  Re = /^[\d.\-M][\d.\-,\s]/,
  ze = /["']/g,
  Le = function (t) {
    for (
      var e,
        i,
        r,
        n = {},
        s = t.substr(1, t.length - 3).split(":"),
        a = s[0],
        o = 1,
        u = s.length;
      o < u;
      o++
    )
      (i = s[o]),
        (e = o !== u - 1 ? i.lastIndexOf(",") : i.length),
        (r = i.substr(0, e)),
        (n[a] = isNaN(r) ? r.replace(ze, "").trim() : +r),
        (a = i.substr(e + 1).trim());
    return n;
  },
  Be = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  qe = function t(e, i) {
    for (var r, n = e._first; n; )
      n instanceof Qe
        ? t(n, i)
        : !n.vars.yoyoEase ||
          (n._yoyo && n._repeat) ||
          n._yoyo === i ||
          (n.timeline
            ? t(n.timeline, i)
            : ((r = n._ease),
              (n._ease = n._yEase),
              (n._yEase = r),
              (n._yoyo = i))),
        (n = n._next);
  },
  je = function (t, e) {
    return (
      (t &&
        (V(t)
          ? t
          : Fe[t] ||
            (function (t) {
              var e,
                i,
                r,
                n,
                s = (t + "").split("("),
                a = Fe[s[0]];
              return a && s.length > 1 && a.config
                ? a.config.apply(
                    null,
                    ~t.indexOf("{")
                      ? [Le(s[1])]
                      : ((e = t),
                        (i = e.indexOf("(") + 1),
                        (r = e.indexOf(")")),
                        (n = e.indexOf("(", i)),
                        e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r))
                          .split(",")
                          .map(St)
                  )
                : Fe._CE && Re.test(t)
                ? Fe._CE("", t)
                : a;
            })(t))) ||
      e
    );
  },
  Ne = function (t, e, i, r) {
    void 0 === i &&
      (i = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === r &&
        (r = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      s = { easeIn: e, easeOut: i, easeInOut: r };
    return (
      Mt(t, function (t) {
        for (var e in ((Fe[t] = ot[t] = s), (Fe[(n = t.toLowerCase())] = i), s))
          Fe[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Fe[t + "." + e] = s[e];
      }),
      s
    );
  },
  Ue = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  },
  Ye = function t(e, i, r) {
    var n = i >= 1 ? i : 1,
      s = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      a = (s / B) * (Math.asin(1 / n) || 0),
      o = function (t) {
        return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Y((t - a) * s) + 1;
      },
      u =
        "out" === e
          ? o
          : "in" === e
          ? function (t) {
              return 1 - o(1 - t);
            }
          : Ue(o);
    return (
      (s = B / s),
      (u.config = function (i, r) {
        return t(e, i, r);
      }),
      u
    );
  },
  Xe = function t(e, i) {
    void 0 === i && (i = 1.70158);
    var r = function (t) {
        return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
      },
      n =
        "out" === e
          ? r
          : "in" === e
          ? function (t) {
              return 1 - r(1 - t);
            }
          : Ue(r);
    return (
      (n.config = function (i) {
        return t(e, i);
      }),
      n
    );
  };
Mt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var i = e < 5 ? e + 1 : e;
  Ne(
    t + ",Power" + (i - 1),
    e
      ? function (t) {
          return Math.pow(t, i);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, i);
    },
    function (t) {
      return t < 0.5
        ? Math.pow(2 * t, i) / 2
        : 1 - Math.pow(2 * (1 - t), i) / 2;
    }
  );
}),
  (Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn),
  Ne("Elastic", Ye("in"), Ye("out"), Ye()),
  (I = 7.5625),
  (F = 1 / (P = 2.75)),
  Ne(
    "Bounce",
    function (t) {
      return 1 - R(1 - t);
    },
    (R = function (t) {
      return t < F
        ? I * t * t
        : t < 0.7272727272727273
        ? I * Math.pow(t - 1.5 / P, 2) + 0.75
        : t < 0.9090909090909092
        ? I * (t -= 2.25 / P) * t + 0.9375
        : I * Math.pow(t - 2.625 / P, 2) + 0.984375;
    })
  ),
  Ne("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }),
  Ne("Circ", function (t) {
    return -(N(1 - t * t) - 1);
  }),
  Ne("Sine", function (t) {
    return 1 === t ? 1 : 1 - U(t * q);
  }),
  Ne("Back", Xe("in"), Xe("out"), Xe()),
  (Fe.SteppedEase =
    Fe.steps =
    ot.SteppedEase =
      {
        config: function (t, e) {
          void 0 === t && (t = 1);
          var i = 1 / t,
            r = t + (e ? 0 : 1),
            n = e ? 1 : 0;
          return function (t) {
            return (((r * ae(0, 0.99999999, t)) | 0) + n) * i;
          };
        },
      }),
  (L.ease = Fe["quad.out"]),
  Mt(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (t) {
      return (xt += t + "," + t + "Params,");
    }
  );
var Ve = function (t, e) {
    (this.id = j++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : Ot),
      (this.set = e ? e.getSetter : ui);
  },
  We = (function () {
    function t(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        te(this, +t.duration, 1, 1),
        (this.data = t.data),
        m || Ie.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            te(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, e) {
        if ((Pe(), !arguments.length)) return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
          for (Qt(this, t), !i._dp || i.parent || Gt(i, this); i && i.parent; )
            i.parent._time !==
              i._start +
                (i._ts >= 0
                  ? i._tTime / i._ts
                  : (i.totalDuration() - i._tTime) / -i._ts) &&
              i.totalTime(i._tTime, !0),
              (i = i.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            Ht(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && 1e-8 === Math.abs(this._zTime)) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), Ct(this, t, e)),
          this
        );
      }),
      (e.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Yt(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (e.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                Yt(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (t, e) {
        var i = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * i, e)
          : this._repeat
          ? Xt(this._tTime, i) + 1
          : 1;
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? Vt(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
          Nt(this.totalTime(ae(-this._delay, this._tDur, e), !0)),
          Wt(this),
          this
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pe(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      1e-8 !== Math.abs(this._zTime) &&
                      (this._tTime -= 1e-8)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            e && (e._sort || !this.parent) && Ht(e, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (H(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Vt(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.globalTime = function (t) {
        for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
          (i = e._start + i / (e._ts || 1)), (e = e._dp);
        return i;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), ee(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), ee(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, e) {
        return this.totalTime(re(this, t), H(e));
      }),
      (e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, H(e));
      }),
      (e.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (e.isActive = function () {
        var t,
          e = this.parent || this._dp,
          i = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < this.endTime(!0) - 1e-8
          )
        );
      }),
      (e.eventCallback = function (t, e, i) {
        var r = this.vars;
        return arguments.length > 1
          ? (e
              ? ((r[t] = e),
                i && (r[t + "Params"] = i),
                "onUpdate" === t && (this._onUpdate = e))
              : delete r[t],
            this)
          : r[t];
      }),
      (e.then = function (t) {
        var e = this;
        return new Promise(function (i) {
          var r = V(t) ? t : It,
            n = function () {
              var t = e.then;
              (e.then = null),
                V(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                i(r),
                (e.then = t);
            };
          (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
          (!e._tTime && e._ts < 0)
            ? n()
            : (e._prom = n);
        });
      }),
      (e.kill = function () {
        Te(this);
      }),
      t
    );
  })();
Pt(We.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Qe = (function (t) {
  function e(e, i) {
    var r;
    return (
      void 0 === e && (e = {}),
      ((r = t.call(this, e) || this).labels = {}),
      (r.smoothChildTiming = !!e.smoothChildTiming),
      (r.autoRemoveChildren = !!e.autoRemoveChildren),
      (r._sort = H(e.sortChildren)),
      h && Ht(e.parent || h, a(r), i),
      e.reversed && r.reverse(),
      e.paused && r.paused(!0),
      e.scrollTrigger && Jt(a(r), e.scrollTrigger),
      r
    );
  }
  o(e, t);
  var i = e.prototype;
  return (
    (i.to = function (t, e, i) {
      return ne(0, arguments, this), this;
    }),
    (i.from = function (t, e, i) {
      return ne(1, arguments, this), this;
    }),
    (i.fromTo = function (t, e, i, r) {
      return ne(2, arguments, this), this;
    }),
    (i.set = function (t, e, i) {
      return (
        (e.duration = 0),
        (e.parent = this),
        Lt(e).repeatDelay || (e.repeat = 0),
        (e.immediateRender = !!e.immediateRender),
        new ri(t, e, re(this, i), 1),
        this
      );
    }),
    (i.call = function (t, e, i) {
      return Ht(this, ri.delayedCall(0, t, e), i);
    }),
    (i.staggerTo = function (t, e, i, r, n, s, a) {
      return (
        (i.duration = e),
        (i.stagger = i.stagger || r),
        (i.onComplete = s),
        (i.onCompleteParams = a),
        (i.parent = this),
        new ri(t, i, re(this, n)),
        this
      );
    }),
    (i.staggerFrom = function (t, e, i, r, n, s, a) {
      return (
        (i.runBackwards = 1),
        (Lt(i).immediateRender = H(i.immediateRender)),
        this.staggerTo(t, e, i, r, n, s, a)
      );
    }),
    (i.staggerFromTo = function (t, e, i, r, n, s, a, o) {
      return (
        (r.startAt = i),
        (Lt(r).immediateRender = H(r.immediateRender)),
        this.staggerTo(t, e, r, n, s, a, o)
      );
    }),
    (i.render = function (t, e, i) {
      var r,
        n,
        s,
        a,
        o,
        u,
        l,
        f,
        c,
        p,
        d,
        _,
        m = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        v = this._dur,
        y = t <= 0 ? 0 : Et(t),
        b = this._zTime < 0 != t < 0 && (this._initted || !v);
      if (
        (this !== h && y > g && t >= 0 && (y = g), y !== this._tTime || i || b)
      ) {
        if (
          (m !== this._time &&
            v &&
            ((y += this._time - m), (t += this._time - m)),
          (r = y),
          (c = this._start),
          (u = !(f = this._ts)),
          b && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
          this._repeat)
        ) {
          if (
            ((d = this._yoyo),
            (o = v + this._rDelay),
            this._repeat < -1 && t < 0)
          )
            return this.totalTime(100 * o + t, e, i);
          if (
            ((r = Et(y % o)),
            y === g
              ? ((a = this._repeat), (r = v))
              : ((a = ~~(y / o)) && a === y / o && ((r = v), a--),
                r > v && (r = v)),
            (p = Xt(this._tTime, o)),
            !m && this._tTime && p !== a && (p = a),
            d && 1 & a && ((r = v - r), (_ = 1)),
            a !== p && !this._lock)
          ) {
            var x = d && 1 & p,
              T = x === (d && 1 & a);
            if (
              (a < p && (x = !x),
              (m = x ? 0 : v),
              (this._lock = 1),
              (this.render(m || (_ ? 0 : Et(a * o)), e, !v)._lock = 0),
              (this._tTime = y),
              !e && this.parent && xe(this, "onRepeat"),
              this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
              (m && m !== this._time) ||
                u !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((v = this._dur),
              (g = this._tDur),
              T &&
                ((this._lock = 2),
                (m = x ? v : -1e-4),
                this.render(m, !0),
                this.vars.repeatRefresh && !_ && this.invalidate()),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
            qe(this, _);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((l = (function (t, e, i) {
              var r;
              if (i > e)
                for (r = t._first; r && r._start <= i; ) {
                  if ("isPause" === r.data && r._start > e) return r;
                  r = r._next;
                }
              else
                for (r = t._last; r && r._start >= i; ) {
                  if ("isPause" === r.data && r._start < e) return r;
                  r = r._prev;
                }
            })(this, Et(m), Et(r))),
            l && (y -= r - (r = l._start))),
          (this._tTime = y),
          (this._time = r),
          (this._act = !f),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = t),
            (m = 0)),
          !m && r && !e && (xe(this, "onStart"), this._tTime !== y))
        )
          return this;
        if (r >= m && t >= 0)
          for (n = this._first; n; ) {
            if (
              ((s = n._next), (n._act || r >= n._start) && n._ts && l !== n)
            ) {
              if (n.parent !== this) return this.render(t, e, i);
              if (
                (n.render(
                  n._ts > 0
                    ? (r - n._start) * n._ts
                    : (n._dirty ? n.totalDuration() : n._tDur) +
                        (r - n._start) * n._ts,
                  e,
                  i
                ),
                r !== this._time || (!this._ts && !u))
              ) {
                (l = 0), s && (y += this._zTime = -1e-8);
                break;
              }
            }
            n = s;
          }
        else {
          n = this._last;
          for (var w = t < 0 ? t : r; n; ) {
            if (((s = n._prev), (n._act || w <= n._end) && n._ts && l !== n)) {
              if (n.parent !== this) return this.render(t, e, i);
              if (
                (n.render(
                  n._ts > 0
                    ? (w - n._start) * n._ts
                    : (n._dirty ? n.totalDuration() : n._tDur) +
                        (w - n._start) * n._ts,
                  e,
                  i
                ),
                r !== this._time || (!this._ts && !u))
              ) {
                (l = 0), s && (y += this._zTime = w ? -1e-8 : 1e-8);
                break;
              }
            }
            n = s;
          }
        }
        if (
          l &&
          !e &&
          (this.pause(),
          (l.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
          this._ts)
        )
          return (this._start = c), Wt(this), this.render(t, e, i);
        this._onUpdate && !e && xe(this, "onUpdate", !0),
          ((y === g && g >= this.totalDuration()) || (!y && m)) &&
            ((c !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
              this._lock ||
              ((t || !v) &&
                ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                qt(this, 1),
              e ||
                (t < 0 && !m) ||
                (!y && !m && g) ||
                (xe(
                  this,
                  y === g && t >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(y < g && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (i.add = function (t, e) {
      var i = this;
      if ((W(e) || (e = re(this, e, t)), !(t instanceof We))) {
        if (K(t))
          return (
            t.forEach(function (t) {
              return i.add(t, e);
            }),
            this
          );
        if (X(t)) return this.addLabel(t, e);
        if (!V(t)) return this;
        t = ri.delayedCall(0, t);
      }
      return this !== t ? Ht(this, t, e) : this;
    }),
    (i.getChildren = function (t, e, i, r) {
      void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === i && (i = !0),
        void 0 === r && (r = -1e8);
      for (var n = [], s = this._first; s; )
        s._start >= r &&
          (s instanceof ri
            ? e && n.push(s)
            : (i && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, i)))),
          (s = s._next);
      return n;
    }),
    (i.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
        if (e[i].vars.id === t) return e[i];
    }),
    (i.remove = function (t) {
      return X(t)
        ? this.removeLabel(t)
        : V(t)
        ? this.killTweensOf(t)
        : (Bt(this, t),
          t === this._recent && (this._recent = this._last),
          jt(this));
    }),
    (i.totalTime = function (e, i) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Et(
              Ie.time -
                (this._ts > 0
                  ? e / this._ts
                  : (this.totalDuration() - e) / -this._ts)
            )),
          t.prototype.totalTime.call(this, e, i),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (t, e) {
      return (this.labels[t] = re(this, e)), this;
    }),
    (i.removeLabel = function (t) {
      return delete this.labels[t], this;
    }),
    (i.addPause = function (t, e, i) {
      var r = ri.delayedCall(0, e || pt, i);
      return (
        (r.data = "isPause"), (this._hasPause = 1), Ht(this, r, re(this, t))
      );
    }),
    (i.removePause = function (t) {
      var e = this._first;
      for (t = re(this, t); e; )
        e._start === t && "isPause" === e.data && qt(e), (e = e._next);
    }),
    (i.killTweensOf = function (t, e, i) {
      for (var r = this.getTweensOf(t, i), n = r.length; n--; )
        Ge !== r[n] && r[n].kill(t, e);
      return this;
    }),
    (i.getTweensOf = function (t, e) {
      for (var i, r = [], n = fe(t), s = this._first, a = W(e); s; )
        s instanceof ri
          ? Dt(s._targets, n) &&
            (a
              ? (!Ge || (s._initted && s._ts)) &&
                s.globalTime(0) <= e &&
                s.globalTime(s.totalDuration()) > e
              : !e || s.isActive()) &&
            r.push(s)
          : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i),
          (s = s._next);
      return r;
    }),
    (i.tweenTo = function (t, e) {
      e = e || {};
      var i,
        r = this,
        n = re(r, t),
        s = e,
        a = s.startAt,
        o = s.onStart,
        u = s.onStartParams,
        h = s.immediateRender,
        l = ri.to(
          r,
          Pt(
            {
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (n - (a && "time" in a ? a.time : r._time)) / r.timeScale()
                ) ||
                1e-8,
              onStart: function () {
                if ((r.pause(), !i)) {
                  var t =
                    e.duration ||
                    Math.abs(
                      (n - (a && "time" in a ? a.time : r._time)) /
                        r.timeScale()
                    );
                  l._dur !== t && te(l, t, 0, 1).render(l._time, !0, !0),
                    (i = 1);
                }
                o && o.apply(l, u || []);
              },
            },
            e
          )
        );
      return h ? l.render(0) : l;
    }),
    (i.tweenFromTo = function (t, e, i) {
      return this.tweenTo(e, Pt({ startAt: { time: re(this, t) } }, i));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (t) {
      return void 0 === t && (t = this._time), be(this, re(this, t));
    }),
    (i.previousLabel = function (t) {
      return void 0 === t && (t = this._time), be(this, re(this, t), 1);
    }),
    (i.currentLabel = function (t) {
      return arguments.length
        ? this.seek(t, !0)
        : this.previousLabel(this._time + 1e-8);
    }),
    (i.shiftChildren = function (t, e, i) {
      void 0 === i && (i = 0);
      for (var r, n = this._first, s = this.labels; n; )
        n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
      if (e) for (r in s) s[r] >= i && (s[r] += t);
      return jt(this);
    }),
    (i.invalidate = function () {
      var e = this._first;
      for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
      return t.prototype.invalidate.call(this);
    }),
    (i.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, i = this._first; i; ) (e = i._next), this.remove(i), (i = e);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        jt(this)
      );
    }),
    (i.totalDuration = function (t) {
      var e,
        i,
        r,
        n = 0,
        s = this,
        a = s._last,
        o = 1e8;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -t : t)
        );
      if (s._dirty) {
        for (r = s.parent; a; )
          (e = a._prev),
            a._dirty && a.totalDuration(),
            (i = a._start) > o && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (Ht(s, a, i - a._delay, 1)._lock = 0))
              : (o = i),
            i < 0 &&
              a._ts &&
              ((n -= i),
              ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
              s.shiftChildren(-i, !1, -1 / 0),
              (o = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = e);
        te(s, s === h && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (t) {
      if ((h._ts && (Ct(h, Vt(t, h)), (d = Ie.frame)), Ie.frame >= yt)) {
        yt += z.autoSleep || 120;
        var e = h._first;
        if ((!e || !e._ts) && z.autoSleep && Ie._listeners.length < 2) {
          for (; e && !e._ts; ) e = e._next;
          e || Ie.sleep();
        }
      }
    }),
    e
  );
})(We);
Pt(Qe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Ge,
  He = function (t, e, i, r, n, s, a) {
    var o,
      u,
      h,
      l,
      f,
      c,
      p,
      d,
      _ = new gi(this._pt, t, e, 0, 1, fi, null, n),
      m = 0,
      g = 0;
    for (
      _.b = i,
        _.e = r,
        i += "",
        (p = ~(r += "").indexOf("random(")) && (r = ve(r)),
        s && (s((d = [i, r]), t, e), (i = d[0]), (r = d[1])),
        u = i.match(rt) || [];
      (o = rt.exec(r));

    )
      (l = o[0]),
        (f = r.substring(m, o.index)),
        h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
        l !== u[g++] &&
          ((c = parseFloat(u[g - 1]) || 0),
          (_._pt = {
            _next: _._pt,
            p: f || 1 === g ? f : ",",
            s: c,
            c:
              "=" === l.charAt(1)
                ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1)
                : parseFloat(l) - c,
            m: h && h < 4 ? Math.round : 0,
          }),
          (m = rt.lastIndex));
    return (
      (_.c = m < r.length ? r.substring(m, r.length) : ""),
      (_.fp = a),
      (nt.test(r) || p) && (_.e = 0),
      (this._pt = _),
      _
    );
  },
  Je = function (t, e, i, r, n, s, a, o, u) {
    V(r) && (r = r(n || 0, t, s));
    var h,
      l = t[e],
      f =
        "get" !== i
          ? i
          : V(l)
          ? u
            ? t[
                e.indexOf("set") || !V(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](u)
            : t[e]()
          : l,
      c = V(l) ? (u ? ai : si) : ni;
    if (
      (X(r) &&
        (~r.indexOf("random(") && (r = ve(r)),
        "=" === r.charAt(1) &&
          ((h =
            parseFloat(f) +
            parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
            (oe(f) || 0)) ||
            0 === h) &&
          (r = h)),
      f !== r)
    )
      return isNaN(f * r) || "" === r
        ? (!l && !(e in t) && lt(e, r),
          He.call(this, t, e, f, r, c, o || z.stringFilter, u))
        : ((h = new gi(
            this._pt,
            t,
            e,
            +f || 0,
            r - (f || 0),
            "boolean" == typeof l ? li : hi,
            0,
            c
          )),
          u && (h.fp = u),
          a && h.modifier(a, this, t),
          (this._pt = h));
  },
  Ze = function (t, e, i, r, n, s) {
    var a, o, u, h;
    if (
      gt[t] &&
      !1 !==
        (a = new gt[t]()).init(
          n,
          a.rawVars
            ? e[t]
            : (function (t, e, i, r, n) {
                if (
                  (V(t) && (t = ti(t, n, e, i, r)),
                  !G(t) || (t.style && t.nodeType) || K(t) || $(t))
                )
                  return X(t) ? ti(t, n, e, i, r) : t;
                var s,
                  a = {};
                for (s in t) a[s] = ti(t[s], n, e, i, r);
                return a;
              })(e[t], r, n, s, i),
          i,
          r,
          s
        ) &&
      ((i._pt = o = new gi(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      i !== _)
    )
      for (u = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
        u[a._props[h]] = o;
    return a;
  },
  $e = function t(e, i) {
    var r,
      n,
      s,
      a,
      o,
      l,
      f,
      c,
      p,
      d,
      _,
      m,
      g,
      v = e.vars,
      y = v.ease,
      b = v.startAt,
      x = v.immediateRender,
      T = v.lazy,
      w = v.onUpdate,
      O = v.onUpdateParams,
      M = v.callbackScope,
      k = v.runBackwards,
      E = v.yoyoEase,
      D = v.keyframes,
      A = v.autoRevert,
      C = e._dur,
      S = e._startAt,
      I = e._targets,
      P = e.parent,
      F = P && "nested" === P.data ? P.parent._targets : I,
      R = "auto" === e._overwrite && !u,
      z = e.timeline;
    if (
      (z && (!D || !y) && (y = "none"),
      (e._ease = je(y, L.ease)),
      (e._yEase = E ? Be(je(!0 === E ? y : E, L.ease)) : 0),
      E &&
        e._yoyo &&
        !e._repeat &&
        ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
      (e._from = !z && !!v.runBackwards),
      !z || (D && !v.stagger))
    ) {
      if (
        ((m = (c = I[0] ? wt(I[0]).harness : 0) && v[c.prop]),
        (r = zt(v, dt)),
        S && qt(S.render(-1, !0)),
        b)
      )
        if (
          (qt(
            (e._startAt = ri.set(
              I,
              Pt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: P,
                  immediateRender: !0,
                  lazy: H(T),
                  startAt: null,
                  delay: 0,
                  onUpdate: w,
                  onUpdateParams: O,
                  callbackScope: M,
                  stagger: 0,
                },
                b
              )
            ))
          ),
          i < 0 && !x && !A && e._startAt.render(-1, !0),
          x)
        ) {
          if ((i > 0 && !A && (e._startAt = 0), C && i <= 0))
            return void (i && (e._zTime = i));
        } else !1 === A && (e._startAt = 0);
      else if (k && C)
        if (S) !A && (e._startAt = 0);
        else if (
          (i && (x = !1),
          (s = Pt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: x && H(T),
              immediateRender: x,
              stagger: 0,
              parent: P,
            },
            r
          )),
          m && (s[c.prop] = m),
          qt((e._startAt = ri.set(I, s))),
          i < 0 && e._startAt.render(-1, !0),
          (e._zTime = i),
          x)
        ) {
          if (!i) return;
        } else t(e._startAt, 1e-8);
      for (e._pt = 0, T = (C && H(T)) || (T && !C), n = 0; n < I.length; n++) {
        if (
          ((f = (o = I[n])._gsap || Tt(I)[n]._gsap),
          (e._ptLookup[n] = d = {}),
          mt[f.id] && _t.length && At(),
          (_ = F === I ? n : F.indexOf(o)),
          c &&
            !1 !== (p = new c()).init(o, m || r, e, _, F) &&
            ((e._pt = a =
              new gi(e._pt, o, p.name, 0, 1, p.render, p, 0, p.priority)),
            p._props.forEach(function (t) {
              d[t] = a;
            }),
            p.priority && (l = 1)),
          !c || m)
        )
          for (s in r)
            gt[s] && (p = Ze(s, r, e, _, o, F))
              ? p.priority && (l = 1)
              : (d[s] = a =
                  Je.call(e, o, s, "get", r[s], _, F, 0, v.stringFilter));
        e._op && e._op[n] && e.kill(o, e._op[n]),
          R &&
            e._pt &&
            ((Ge = e),
            h.killTweensOf(o, d, e.globalTime(i)),
            (g = !e.parent),
            (Ge = 0)),
          e._pt && T && (mt[f.id] = 1);
      }
      l && mi(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = w),
      (e._initted = (!e._op || e._pt) && !g),
      D && i <= 0 && z.render(1e8, !0, !0);
  },
  Ke = function (t, e, i, r) {
    var n,
      s,
      a = e.ease || r || "power1.inOut";
    if (K(e))
      (s = i[t] || (i[t] = [])),
        e.forEach(function (t, i) {
          return s.push({ t: (i / (e.length - 1)) * 100, v: t, e: a });
        });
    else
      for (n in e)
        (s = i[n] || (i[n] = [])),
          "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: a });
  },
  ti = function (t, e, i, r, n) {
    return V(t)
      ? t.call(e, i, r, n)
      : X(t) && ~t.indexOf("random(")
      ? ve(t)
      : t;
  },
  ei = xt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
  ii = {};
Mt(ei + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (ii[t] = 1);
});
var ri = (function (t) {
  function e(e, i, r, n) {
    var s;
    "number" == typeof i && ((r.duration = i), (i = r), (r = null));
    var o,
      l,
      f,
      c,
      p,
      d,
      _,
      m,
      g = (s = t.call(this, n ? i : Lt(i)) || this).vars,
      v = g.duration,
      y = g.delay,
      b = g.immediateRender,
      x = g.stagger,
      T = g.overwrite,
      w = g.keyframes,
      O = g.defaults,
      M = g.scrollTrigger,
      k = g.yoyoEase,
      E = i.parent || h,
      D = (K(e) || $(e) ? W(e[0]) : "length" in i) ? [e] : fe(e);
    if (
      ((s._targets = D.length
        ? Tt(D)
        : ft(
            "GSAP target " + e + " not found. https://greensock.com",
            !z.nullTargetWarn
          ) || []),
      (s._ptLookup = []),
      (s._overwrite = T),
      w || x || Z(v) || Z(y))
    ) {
      if (
        ((i = s.vars),
        (o = s.timeline = new Qe({ data: "nested", defaults: O || {} })).kill(),
        (o.parent = o._dp = a(s)),
        (o._start = 0),
        x || Z(v) || Z(y))
      ) {
        if (((c = D.length), (_ = x && pe(x)), G(x)))
          for (p in x) ~ei.indexOf(p) && (m || (m = {}), (m[p] = x[p]));
        for (l = 0; l < c; l++)
          ((f = zt(i, ii)).stagger = 0),
            k && (f.yoyoEase = k),
            m && Ft(f, m),
            (d = D[l]),
            (f.duration = +ti(v, a(s), l, d, D)),
            (f.delay = (+ti(y, a(s), l, d, D) || 0) - s._delay),
            !x &&
              1 === c &&
              f.delay &&
              ((s._delay = y = f.delay), (s._start += y), (f.delay = 0)),
            o.to(d, f, _ ? _(l, d, D) : 0),
            (o._ease = Fe.none);
        o.duration() ? (v = y = 0) : (s.timeline = 0);
      } else if (w) {
        Lt(Pt(o.vars.defaults, { ease: "none" })),
          (o._ease = je(w.ease || i.ease || "none"));
        var A,
          C,
          S,
          I = 0;
        if (K(w))
          w.forEach(function (t) {
            return o.to(D, t, ">");
          });
        else {
          for (p in ((f = {}), w))
            "ease" === p || "easeEach" === p || Ke(p, w[p], f, w.easeEach);
          for (p in f)
            for (
              A = f[p].sort(function (t, e) {
                return t.t - e.t;
              }),
                I = 0,
                l = 0;
              l < A.length;
              l++
            )
              ((S = {
                ease: (C = A[l]).e,
                duration: ((C.t - (l ? A[l - 1].t : 0)) / 100) * v,
              })[p] = C.v),
                o.to(D, S, I),
                (I += S.duration);
          o.duration() < v && o.to({}, { duration: v - o.duration() });
        }
      }
      v || s.duration((v = o.duration()));
    } else s.timeline = 0;
    return (
      !0 !== T || u || ((Ge = a(s)), h.killTweensOf(D), (Ge = 0)),
      Ht(E, a(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      (b ||
        (!v &&
          !w &&
          s._start === Et(E._time) &&
          H(b) &&
          Ut(a(s)) &&
          "nested" !== E.data)) &&
        ((s._tTime = -1e-8), s.render(Math.max(0, -y))),
      M && Jt(a(s), M),
      s
    );
  }
  o(e, t);
  var i = e.prototype;
  return (
    (i.render = function (t, e, i) {
      var r,
        n,
        s,
        a,
        o,
        u,
        h,
        l,
        f,
        c = this._time,
        p = this._tDur,
        d = this._dur,
        _ = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
      if (d) {
        if (
          _ !== this._tTime ||
          !t ||
          i ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 != t < 0)
        ) {
          if (((r = _), (l = this.timeline), this._repeat)) {
            if (((a = d + this._rDelay), this._repeat < -1 && t < 0))
              return this.totalTime(100 * a + t, e, i);
            if (
              ((r = Et(_ % a)),
              _ === p
                ? ((s = this._repeat), (r = d))
                : ((s = ~~(_ / a)) && s === _ / a && ((r = d), s--),
                  r > d && (r = d)),
              (u = this._yoyo && 1 & s) && ((f = this._yEase), (r = d - r)),
              (o = Xt(this._tTime, a)),
              r === c && !i && this._initted)
            )
              return this;
            s !== o &&
              (l && this._yEase && qe(l, u),
              !this.vars.repeatRefresh ||
                u ||
                this._lock ||
                ((this._lock = i = 1),
                (this.render(Et(a * s), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Zt(this, t < 0 ? t : r, i, e)) return (this._tTime = 0), this;
            if (d !== this._dur) return this.render(t, e, i);
          }
          if (
            ((this._tTime = _),
            (this._time = r),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = h = (f || this._ease)(r / d)),
            this._from && (this.ratio = h = 1 - h),
            r && !c && !e && (xe(this, "onStart"), this._tTime !== _))
          )
            return this;
          for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
          (l &&
            l.render(
              t < 0 ? t : !r && u ? -1e-8 : l._dur * l._ease(r / this._dur),
              e,
              i
            )) ||
            (this._startAt && (this._zTime = t)),
            this._onUpdate &&
              !e &&
              (t < 0 && this._startAt && this._startAt.render(t, !0, i),
              xe(this, "onUpdate")),
            this._repeat &&
              s !== o &&
              this.vars.onRepeat &&
              !e &&
              this.parent &&
              xe(this, "onRepeat"),
            (_ !== this._tDur && _) ||
              this._tTime !== _ ||
              (t < 0 &&
                this._startAt &&
                !this._onUpdate &&
                this._startAt.render(t, !0, !0),
              (t || !d) &&
                ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
                qt(this, 1),
              e ||
                (t < 0 && !c) ||
                (!_ && !c) ||
                (xe(this, _ === p ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(_ < p && this.timeScale() > 0) &&
                  this._prom()));
        }
      } else
        !(function (t, e, i, r) {
          var n,
            s,
            a,
            o = t.ratio,
            u =
              e < 0 ||
              (!e &&
                ((!t._start && $t(t) && (t._initted || !Kt(t))) ||
                  ((t._ts < 0 || t._dp._ts < 0) && !Kt(t))))
                ? 0
                : 1,
            h = t._rDelay,
            l = 0;
          if (
            (h &&
              t._repeat &&
              ((l = ae(0, t._tDur, e)),
              (s = Xt(l, h)),
              t._yoyo && 1 & s && (u = 1 - u),
              s !== Xt(t._tTime, h) &&
                ((o = 1 - u),
                t.vars.repeatRefresh && t._initted && t.invalidate())),
            u !== o || r || 1e-8 === t._zTime || (!e && t._zTime))
          ) {
            if (!t._initted && Zt(t, e, r, i)) return;
            for (
              a = t._zTime,
                t._zTime = e || (i ? 1e-8 : 0),
                i || (i = e && !a),
                t.ratio = u,
                t._from && (u = 1 - u),
                t._time = 0,
                t._tTime = l,
                n = t._pt;
              n;

            )
              n.r(u, n.d), (n = n._next);
            t._startAt && e < 0 && t._startAt.render(e, !0, !0),
              t._onUpdate && !i && xe(t, "onUpdate"),
              l && t._repeat && !i && t.parent && xe(t, "onRepeat"),
              (e >= t._tDur || e < 0) &&
                t.ratio === u &&
                (u && qt(t, 1),
                i ||
                  (xe(t, u ? "onComplete" : "onReverseComplete", !0),
                  t._prom && t._prom()));
          } else t._zTime || (t._zTime = e);
        })(this, t, e, i);
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function () {
      return (
        (this._pt =
          this._op =
          this._startAt =
          this._onUpdate =
          this._lazy =
          this.ratio =
            0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(),
        t.prototype.invalidate.call(this)
      );
    }),
    (i.kill = function (t, e) {
      if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
        return (this._lazy = this._pt = 0), this.parent ? Te(this) : this;
      if (this.timeline) {
        var i = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(t, e, Ge && !0 !== Ge.vars.overwrite)
            ._first || Te(this),
          this.parent &&
            i !== this.timeline.totalDuration() &&
            te(this, (this._dur * this.timeline._tDur) / i, 0, 1),
          this
        );
      }
      var r,
        n,
        s,
        a,
        o,
        u,
        h,
        l = this._targets,
        f = t ? fe(t) : l,
        c = this._ptLookup,
        p = this._pt;
      if (
        (!e || "all" === e) &&
        (function (t, e) {
          for (
            var i = t.length, r = i === e.length;
            r && i-- && t[i] === e[i];

          );
          return i < 0;
        })(l, f)
      )
        return "all" === e && (this._pt = 0), Te(this);
      for (
        r = this._op = this._op || [],
          "all" !== e &&
            (X(e) &&
              ((o = {}),
              Mt(e, function (t) {
                return (o[t] = 1);
              }),
              (e = o)),
            (e = (function (t, e) {
              var i,
                r,
                n,
                s,
                a = t[0] ? wt(t[0]).harness : 0,
                o = a && a.aliases;
              if (!o) return e;
              for (r in ((i = Ft({}, e)), o))
                if ((r in i))
                  for (n = (s = o[r].split(",")).length; n--; ) i[s[n]] = i[r];
              return i;
            })(l, e))),
          h = l.length;
        h--;

      )
        if (~f.indexOf(l[h]))
          for (o in ((n = c[h]),
          "all" === e
            ? ((r[h] = e), (a = n), (s = {}))
            : ((s = r[h] = r[h] || {}), (a = e)),
          a))
            (u = n && n[o]) &&
              (("kill" in u.d && !0 !== u.d.kill(o)) || Bt(this, u, "_pt"),
              delete n[o]),
              "all" !== s && (s[o] = 1);
      return this._initted && !this._pt && p && Te(this), this;
    }),
    (e.to = function (t, i) {
      return new e(t, i, arguments[2]);
    }),
    (e.from = function (t, e) {
      return ne(1, arguments);
    }),
    (e.delayedCall = function (t, i, r, n) {
      return new e(i, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: i,
        onReverseComplete: i,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: n,
      });
    }),
    (e.fromTo = function (t, e, i) {
      return ne(2, arguments);
    }),
    (e.set = function (t, i) {
      return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
    }),
    (e.killTweensOf = function (t, e, i) {
      return h.killTweensOf(t, e, i);
    }),
    e
  );
})(We);
Pt(ri.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Mt("staggerTo,staggerFrom,staggerFromTo", function (t) {
    ri[t] = function () {
      var e = new Qe(),
        i = ue.call(arguments, 0);
      return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
    };
  });
var ni = function (t, e, i) {
    return (t[e] = i);
  },
  si = function (t, e, i) {
    return t[e](i);
  },
  ai = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  oi = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  ui = function (t, e) {
    return V(t[e]) ? si : Q(t[e]) && t.setAttribute ? oi : ni;
  },
  hi = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
  li = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  fi = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (1 === t && e.e) r = e.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
          r),
          (i = i._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  ci = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  pi = function (t, e, i, r) {
    for (var n, s = this._pt; s; )
      (n = s._next), s.p === r && s.modifier(t, e, i), (s = n);
  },
  di = function (t) {
    for (var e, i, r = this._pt; r; )
      (i = r._next),
        (r.p === t && !r.op) || r.op === t
          ? Bt(this, r, "_pt")
          : r.dep || (e = 1),
        (r = i);
    return !e;
  },
  _i = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  mi = function (t) {
    for (var e, i, r, n, s = t._pt; s; ) {
      for (e = s._next, i = r; i && i.pr > s.pr; ) i = i._next;
      (s._prev = i ? i._prev : n) ? (s._prev._next = s) : (r = s),
        (s._next = i) ? (i._prev = s) : (n = s),
        (s = e);
    }
    t._pt = r;
  },
  gi = (function () {
    function t(t, e, i, r, n, s, a, o, u) {
      (this.t = e),
        (this.s = r),
        (this.c = n),
        (this.p = i),
        (this.r = s || hi),
        (this.d = a || this),
        (this.set = o || ni),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    return (
      (t.prototype.modifier = function (t, e, i) {
        (this.mSet = this.mSet || this.set),
          (this.set = _i),
          (this.m = t),
          (this.mt = i),
          (this.tween = e);
      }),
      t
    );
  })();
Mt(
  xt +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (dt[t] = 1);
  }
),
  (ot.TweenMax = ot.TweenLite = ri),
  (ot.TimelineLite = ot.TimelineMax = Qe),
  (h = new Qe({
    sortChildren: !1,
    defaults: L,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  })),
  (z.stringFilter = Se);
var vi = {
  registerPlugin: function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function (t) {
      return we(t);
    });
  },
  timeline: function (t) {
    return new Qe(t);
  },
  getTweensOf: function (t, e) {
    return h.getTweensOf(t, e);
  },
  getProperty: function (t, e, i, r) {
    X(t) && (t = fe(t)[0]);
    var n = wt(t || {}).get,
      s = i ? It : St;
    return (
      "native" === i && (i = ""),
      t
        ? e
          ? s(((gt[e] && gt[e].get) || n)(t, e, i, r))
          : function (e, i, r) {
              return s(((gt[e] && gt[e].get) || n)(t, e, i, r));
            }
        : t
    );
  },
  quickSetter: function (t, e, i) {
    if ((t = fe(t)).length > 1) {
      var r = t.map(function (t) {
          return xi.quickSetter(t, e, i);
        }),
        n = r.length;
      return function (t) {
        for (var e = n; e--; ) r[e](t);
      };
    }
    t = t[0] || {};
    var s = gt[e],
      a = wt(t),
      o = (a.harness && (a.harness.aliases || {})[e]) || e,
      u = s
        ? function (e) {
            var r = new s();
            (_._pt = 0),
              r.init(t, i ? e + i : e, _, 0, [t]),
              r.render(1, r),
              _._pt && ci(1, _);
          }
        : a.set(t, o);
    return s
      ? u
      : function (e) {
          return u(t, o, i ? e + i : e, a, 1);
        };
  },
  isTweening: function (t) {
    return h.getTweensOf(t, !0).length > 0;
  },
  defaults: function (t) {
    return t && t.ease && (t.ease = je(t.ease, L.ease)), Rt(L, t || {});
  },
  config: function (t) {
    return Rt(z, t || {});
  },
  registerEffect: function (t) {
    var e = t.name,
      i = t.effect,
      r = t.plugins,
      n = t.defaults,
      s = t.extendTimeline;
    (r || "").split(",").forEach(function (t) {
      return (
        t && !gt[t] && !ot[t] && ft(e + " effect requires " + t + " plugin.")
      );
    }),
      (vt[e] = function (t, e, r) {
        return i(fe(t), Pt(e || {}, n), r);
      }),
      s &&
        (Qe.prototype[e] = function (t, i, r) {
          return this.add(vt[e](t, G(i) ? i : (r = i) && {}, this), r);
        });
  },
  registerEase: function (t, e) {
    Fe[t] = je(e);
  },
  parseEase: function (t, e) {
    return arguments.length ? je(t, e) : Fe;
  },
  getById: function (t) {
    return h.getById(t);
  },
  exportRoot: function (t, e) {
    void 0 === t && (t = {});
    var i,
      r,
      n = new Qe(t);
    for (
      n.smoothChildTiming = H(t.smoothChildTiming),
        h.remove(n),
        n._dp = 0,
        n._time = n._tTime = h._time,
        i = h._first;
      i;

    )
      (r = i._next),
        (!e &&
          !i._dur &&
          i instanceof ri &&
          i.vars.onComplete === i._targets[0]) ||
          Ht(n, i, i._start - i._delay),
        (i = r);
    return Ht(h, n, 0), n;
  },
  utils: {
    wrap: function t(e, i, r) {
      var n = i - e;
      return K(e)
        ? ge(e, t(0, e.length), i)
        : se(r, function (t) {
            return ((n + ((t - e) % n)) % n) + e;
          });
    },
    wrapYoyo: function t(e, i, r) {
      var n = i - e,
        s = 2 * n;
      return K(e)
        ? ge(e, t(0, e.length - 1), i)
        : se(r, function (t) {
            return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
          });
    },
    distribute: pe,
    random: me,
    snap: _e,
    normalize: function (t, e, i) {
      return ye(t, e, 0, 1, i);
    },
    getUnit: oe,
    clamp: function (t, e, i) {
      return se(i, function (i) {
        return ae(t, e, i);
      });
    },
    splitColor: ke,
    toArray: fe,
    selector: function (t) {
      return (
        (t = fe(t)[0] || ft("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return fe(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? ft("Invalid scope") || c.createElement("div")
              : t
          );
        }
      );
    },
    mapRange: ye,
    pipe: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return function (t) {
        return e.reduce(function (t, e) {
          return e(t);
        }, t);
      };
    },
    unitize: function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || oe(i));
      };
    },
    interpolate: function t(e, i, r, n) {
      var s = isNaN(e + i)
        ? 0
        : function (t) {
            return (1 - t) * e + t * i;
          };
      if (!s) {
        var a,
          o,
          u,
          h,
          l,
          f = X(e),
          c = {};
        if ((!0 === r && (n = 1) && (r = null), f))
          (e = { p: e }), (i = { p: i });
        else if (K(e) && !K(i)) {
          for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
            u.push(t(e[o - 1], e[o]));
          h--,
            (s = function (t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }),
            (r = i);
        } else n || (e = Ft(K(e) ? [] : {}, e));
        if (!u) {
          for (a in i) Je.call(c, e, a, "get", i[a]);
          s = function (t) {
            return ci(t, c) || (f ? e.p : e);
          };
        }
      }
      return se(r, s);
    },
    shuffle: ce,
  },
  install: ht,
  effects: vt,
  ticker: Ie,
  updateRoot: Qe.updateRoot,
  plugins: gt,
  globalTimeline: h,
  core: {
    PropTween: gi,
    globals: ct,
    Tween: ri,
    Timeline: Qe,
    Animation: We,
    getCache: wt,
    _removeLinkedListItem: Bt,
    suppressOverwrites: function (t) {
      return (u = t);
    },
  },
};
Mt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (vi[t] = ri[t]);
}),
  Ie.add(Qe.updateRoot),
  (_ = vi.to({}, { duration: 0 }));
var yi = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  bi = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, i, r) {
        r._onInit = function (t) {
          var r, n;
          if (
            (X(i) &&
              ((r = {}),
              Mt(i, function (t) {
                return (r[t] = 1);
              }),
              (i = r)),
            e)
          ) {
            for (n in ((r = {}), i)) r[n] = e(i[n]);
            i = r;
          }
          !(function (t, e) {
            var i,
              r,
              n,
              s = t._targets;
            for (i in e)
              for (r = s.length; r--; )
                (n = t._ptLookup[r][i]) &&
                  (n = n.d) &&
                  (n._pt && (n = yi(n, i)),
                  n && n.modifier && n.modifier(e[i], t, s[r], i));
          })(t, i);
        };
      },
    };
  },
  xi =
    vi.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, a;
          for (s in e)
            (a = this.add(
              t,
              "setAttribute",
              (t.getAttribute(s) || 0) + "",
              e[s],
              r,
              n,
              0,
              0,
              s
            )) && (a.op = s),
              this._props.push(s);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
        },
      },
      bi("roundProps", de),
      bi("modifiers"),
      bi("snap", _e)
    ) || vi;
(ri.version = Qe.version = xi.version = "3.9.1"), (p = 1), J() && Pe();
Fe.Power0,
  Fe.Power1,
  Fe.Power2,
  Fe.Power3,
  Fe.Power4,
  Fe.Linear,
  Fe.Quad,
  Fe.Cubic,
  Fe.Quart,
  Fe.Quint,
  Fe.Strong,
  Fe.Elastic,
  Fe.Back,
  Fe.SteppedEase,
  Fe.Bounce,
  Fe.Sine,
  Fe.Expo,
  Fe.Circ;
var Ti,
  wi,
  Oi,
  Mi,
  ki,
  Ei,
  Di,
  Ai = {},
  Ci = 180 / Math.PI,
  Si = Math.PI / 180,
  Ii = Math.atan2,
  Pi = /([A-Z])/g,
  Fi = /(?:left|right|width|margin|padding|x)/i,
  Ri = /[\s,\(]\S/,
  zi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Li = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
  Bi = function (t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  },
  qi = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  },
  ji = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Ni = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  Ui = function (t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  },
  Yi = function (t, e, i) {
    return (t.style[e] = i);
  },
  Xi = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  Vi = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  Wi = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Qi = function (t, e, i, r, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
  },
  Gi = function (t, e, i, r, n) {
    var s = t._gsap;
    (s[e] = i), s.renderTransform(n, s);
  },
  Hi = "transform",
  Ji = Hi + "Origin",
  Zi = function (t, e) {
    var i = wi.createElementNS
      ? wi.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : wi.createElement(t);
    return i.style ? i : wi.createElement(t);
  },
  $i = function t(e, i, r) {
    var n = getComputedStyle(e);
    return (
      n[i] ||
      n.getPropertyValue(i.replace(Pi, "-$1").toLowerCase()) ||
      n.getPropertyValue(i) ||
      (!r && t(e, tr(i) || i, 1)) ||
      ""
    );
  },
  Ki = "O,Moz,ms,Ms,Webkit".split(","),
  tr = function (t, e, i) {
    var r = (e || ki).style,
      n = 5;
    if (t in r && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      n-- && !(Ki[n] + t in r);

    );
    return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Ki[n] : "") + t;
  },
  er = function () {
    "undefined" != typeof window &&
      window.document &&
      ((Ti = window),
      (wi = Ti.document),
      (Oi = wi.documentElement),
      (ki = Zi("div") || { style: {} }),
      Zi("div"),
      (Hi = tr(Hi)),
      (Ji = Hi + "Origin"),
      (ki.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Di = !!tr("perspective")),
      (Mi = 1));
  },
  ir = function t(e) {
    var i,
      r = Zi(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      s = this.nextSibling,
      a = this.style.cssText;
    if (
      (Oi.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (i = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch (t) {}
    else this._gsapBBox && (i = this._gsapBBox());
    return (
      n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
      Oi.removeChild(r),
      (this.style.cssText = a),
      i
    );
  },
  rr = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  nr = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch (i) {
      e = ir.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === ir || (e = ir.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
            x: +rr(t, ["x", "cx", "x1"]) || 0,
            y: +rr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  },
  sr = function (t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !nr(t));
  },
  ar = function (t, e) {
    if (e) {
      var i = t.style;
      e in Ai && e !== Ji && (e = Hi),
        i.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            i.removeProperty(e.replace(Pi, "-$1").toLowerCase()))
          : i.removeAttribute(e);
    }
  },
  or = function (t, e, i, r, n, s) {
    var a = new gi(t._pt, e, i, 0, 1, s ? Ui : Ni);
    return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
  },
  ur = { deg: 1, rad: 1, turn: 1 },
  hr = function t(e, i, r, n) {
    var s,
      a,
      o,
      u,
      h = parseFloat(r) || 0,
      l = (r + "").trim().substr((h + "").length) || "px",
      f = ki.style,
      c = Fi.test(i),
      p = "svg" === e.tagName.toLowerCase(),
      d = (p ? "client" : "offset") + (c ? "Width" : "Height"),
      _ = 100,
      m = "px" === n,
      g = "%" === n;
    return n === l || !h || ur[n] || ur[l]
      ? h
      : ("px" !== l && !m && (h = t(e, i, r, "px")),
        (u = e.getCTM && sr(e)),
        (!g && "%" !== l) || (!Ai[i] && !~i.indexOf("adius"))
          ? ((f[c ? "width" : "height"] = _ + (m ? l : n)),
            (a =
              ~i.indexOf("adius") || ("em" === n && e.appendChild && !p)
                ? e
                : e.parentNode),
            u && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== wi && a.appendChild) || (a = wi.body),
            (o = a._gsap) && g && o.width && c && o.time === Ie.time
              ? kt((h / o.width) * _)
              : ((g || "%" === l) && (f.position = $i(e, "position")),
                a === e && (f.position = "static"),
                a.appendChild(ki),
                (s = ki[d]),
                a.removeChild(ki),
                (f.position = "absolute"),
                c && g && (((o = wt(a)).time = Ie.time), (o.width = a[d])),
                kt(m ? (s * h) / _ : s && h ? (_ / s) * h : 0)))
          : ((s = u ? e.getBBox()[c ? "width" : "height"] : e[d]),
            kt(g ? (h / s) * _ : (h / 100) * s)));
  },
  lr = function (t, e, i, r) {
    var n;
    return (
      Mi || er(),
      e in zi &&
        "transform" !== e &&
        ~(e = zi[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      Ai[e] && "transform" !== e
        ? ((n = xr(t, r)),
          (n =
            "transformOrigin" !== e
              ? n[e]
              : n.svg
              ? n.origin
              : Tr($i(t, Ji)) + " " + n.zOrigin + "px"))
        : (!(n = t.style[e]) ||
            "auto" === n ||
            r ||
            ~(n + "").indexOf("calc(")) &&
          (n =
            (dr[e] && dr[e](t, e, i)) ||
            $i(t, e) ||
            Ot(t, e) ||
            ("opacity" === e ? 1 : 0)),
      i && !~(n + "").trim().indexOf(" ") ? hr(t, e, n, i) + i : n
    );
  },
  fr = function (t, e, i, r) {
    if (!i || "none" === i) {
      var n = tr(e, t, 1),
        s = n && $i(t, n, 1);
      s && s !== i
        ? ((e = n), (i = s))
        : "borderColor" === e && (i = $i(t, "borderTopColor"));
    }
    var a,
      o,
      u,
      h,
      l,
      f,
      c,
      p,
      d,
      _,
      m,
      g,
      v = new gi(this._pt, t.style, e, 0, 1, fi),
      y = 0,
      b = 0;
    if (
      ((v.b = i),
      (v.e = r),
      (i += ""),
      "auto" === (r += "") &&
        ((t.style[e] = r), (r = $i(t, e) || r), (t.style[e] = i)),
      Se((a = [i, r])),
      (r = a[1]),
      (u = (i = a[0]).match(it) || []),
      (r.match(it) || []).length)
    ) {
      for (; (o = it.exec(r)); )
        (c = o[0]),
          (d = r.substring(y, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) || (l = 1),
          c !== (f = u[b++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            (g = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) &&
              (c = c.substr(2)),
            (p = parseFloat(c)),
            (_ = c.substr((p + "").length)),
            (y = it.lastIndex - _.length),
            _ ||
              ((_ = _ || z.units[e] || m),
              y === r.length && ((r += _), (v.e += _))),
            m !== _ && (h = hr(t, e, f, _) || 0),
            (v._pt = {
              _next: v._pt,
              p: d || 1 === b ? d : ",",
              s: h,
              c: g ? g * p : p - h,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
            }));
      v.c = y < r.length ? r.substring(y, r.length) : "";
    } else v.r = "display" === e && "none" === r ? Ui : Ni;
    return nt.test(r) && (v.e = 0), (this._pt = v), v;
  },
  cr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  pr = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i,
        r,
        n,
        s = e.t,
        a = s.style,
        o = e.u,
        u = s._gsap;
      if ("all" === o || !0 === o) (a.cssText = ""), (r = 1);
      else
        for (n = (o = o.split(",")).length; --n > -1; )
          (i = o[n]),
            Ai[i] && ((r = 1), (i = "transformOrigin" === i ? Ji : Hi)),
            ar(s, i);
      r &&
        (ar(s, Hi),
        u &&
          (u.svg && s.removeAttribute("transform"), xr(s, 1), (u.uncache = 1)));
    }
  },
  dr = {
    clearProps: function (t, e, i, r, n) {
      if ("isFromStart" !== n.data) {
        var s = (t._pt = new gi(t._pt, e, i, 0, 0, pr));
        return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
      }
    },
  },
  _r = [1, 0, 0, 1, 0, 0],
  mr = {},
  gr = function (t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  },
  vr = function (t) {
    var e = $i(t, Hi);
    return gr(e) ? _r : e.substr(7).match(et).map(kt);
  },
  yr = function (t, e) {
    var i,
      r,
      n,
      s,
      a = t._gsap || wt(t),
      o = t.style,
      u = vr(t);
    return a.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? _r
        : u
      : (u !== _r ||
          t.offsetParent ||
          t === Oi ||
          a.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((i = t.parentNode) && t.offsetParent) ||
            ((s = 1), (r = t.nextSibling), Oi.appendChild(t)),
          (u = vr(t)),
          n ? (o.display = n) : ar(t, "display"),
          s &&
            (r
              ? i.insertBefore(t, r)
              : i
              ? i.appendChild(t)
              : Oi.removeChild(t))),
        e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  },
  br = function (t, e, i, r, n, s) {
    var a,
      o,
      u,
      h = t._gsap,
      l = n || yr(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      p = h.xOffset || 0,
      d = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      b = l[5],
      x = e.split(" "),
      T = parseFloat(x[0]) || 0,
      w = parseFloat(x[1]) || 0;
    i
      ? l !== _r &&
        (o = _ * v - m * g) &&
        ((u = T * (-m / o) + w * (_ / o) - (_ * b - m * y) / o),
        (T = T * (v / o) + w * (-g / o) + (g * b - v * y) / o),
        (w = u))
      : ((T = (a = nr(t)).x + (~x[0].indexOf("%") ? (T / 100) * a.width : T)),
        (w = a.y + (~(x[1] || x[0]).indexOf("%") ? (w / 100) * a.height : w))),
      r || (!1 !== r && h.smooth)
        ? ((y = T - f),
          (b = w - c),
          (h.xOffset = p + (y * _ + b * g) - y),
          (h.yOffset = d + (y * m + b * v) - b))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = T),
      (h.yOrigin = w),
      (h.smooth = !!r),
      (h.origin = e),
      (h.originIsAbsolute = !!i),
      (t.style[Ji] = "0px 0px"),
      s &&
        (or(s, h, "xOrigin", f, T),
        or(s, h, "yOrigin", c, w),
        or(s, h, "xOffset", p, h.xOffset),
        or(s, h, "yOffset", d, h.yOffset)),
      t.setAttribute("data-svg-origin", T + " " + w);
  },
  xr = function (t, e) {
    var i = t._gsap || new Ve(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r,
      n,
      s,
      a,
      o,
      u,
      h,
      l,
      f,
      c,
      p,
      d,
      _,
      m,
      g,
      v,
      y,
      b,
      x,
      T,
      w,
      O,
      M,
      k,
      E,
      D,
      A,
      C,
      S,
      I,
      P,
      F,
      R = t.style,
      L = i.scaleX < 0,
      B = "px",
      q = "deg",
      j = $i(t, Ji) || "0";
    return (
      (r = n = s = u = h = l = f = c = p = 0),
      (a = o = 1),
      (i.svg = !(!t.getCTM || !sr(t))),
      (m = yr(t, i.svg)),
      i.svg &&
        ((k =
          (!i.uncache || "0px 0px" === j) &&
          !e &&
          t.getAttribute("data-svg-origin")),
        br(t, k || j, !!k || i.originIsAbsolute, !1 !== i.smooth, m)),
      (d = i.xOrigin || 0),
      (_ = i.yOrigin || 0),
      m !== _r &&
        ((b = m[0]),
        (x = m[1]),
        (T = m[2]),
        (w = m[3]),
        (r = O = m[4]),
        (n = M = m[5]),
        6 === m.length
          ? ((a = Math.sqrt(b * b + x * x)),
            (o = Math.sqrt(w * w + T * T)),
            (u = b || x ? Ii(x, b) * Ci : 0),
            (f = T || w ? Ii(T, w) * Ci + u : 0) &&
              (o *= Math.abs(Math.cos(f * Si))),
            i.svg && ((r -= d - (d * b + _ * T)), (n -= _ - (d * x + _ * w))))
          : ((F = m[6]),
            (I = m[7]),
            (A = m[8]),
            (C = m[9]),
            (S = m[10]),
            (P = m[11]),
            (r = m[12]),
            (n = m[13]),
            (s = m[14]),
            (h = (g = Ii(F, S)) * Ci),
            g &&
              ((k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
              (E = M * v + C * y),
              (D = F * v + S * y),
              (A = O * -y + A * v),
              (C = M * -y + C * v),
              (S = F * -y + S * v),
              (P = I * -y + P * v),
              (O = k),
              (M = E),
              (F = D)),
            (l = (g = Ii(-T, S)) * Ci),
            g &&
              ((v = Math.cos(-g)),
              (P = w * (y = Math.sin(-g)) + P * v),
              (b = k = b * v - A * y),
              (x = E = x * v - C * y),
              (T = D = T * v - S * y)),
            (u = (g = Ii(x, b)) * Ci),
            g &&
              ((k = b * (v = Math.cos(g)) + x * (y = Math.sin(g))),
              (E = O * v + M * y),
              (x = x * v - b * y),
              (M = M * v - O * y),
              (b = k),
              (O = E)),
            h &&
              Math.abs(h) + Math.abs(u) > 359.9 &&
              ((h = u = 0), (l = 180 - l)),
            (a = kt(Math.sqrt(b * b + x * x + T * T))),
            (o = kt(Math.sqrt(M * M + F * F))),
            (g = Ii(O, M)),
            (f = Math.abs(g) > 2e-4 ? g * Ci : 0),
            (p = P ? 1 / (P < 0 ? -P : P) : 0)),
        i.svg &&
          ((k = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !gr($i(t, Hi))),
          k && t.setAttribute("transform", k))),
      Math.abs(f) > 90 &&
        Math.abs(f) < 270 &&
        (L
          ? ((a *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
          : ((o *= -1), (f += f <= 0 ? 180 : -180))),
      (i.x =
        r -
        ((i.xPercent =
          r &&
          (i.xPercent ||
            (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        B),
      (i.y =
        n -
        ((i.yPercent =
          n &&
          (i.yPercent ||
            (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        B),
      (i.z = s + B),
      (i.scaleX = kt(a)),
      (i.scaleY = kt(o)),
      (i.rotation = kt(u) + q),
      (i.rotationX = kt(h) + q),
      (i.rotationY = kt(l) + q),
      (i.skewX = f + q),
      (i.skewY = c + q),
      (i.transformPerspective = p + B),
      (i.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (R[Ji] = Tr(j)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = z.force3D),
      (i.renderTransform = i.svg ? kr : Di ? Mr : Or),
      (i.uncache = 0),
      i
    );
  },
  Tr = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  wr = function (t, e, i) {
    var r = oe(e);
    return kt(parseFloat(e) + parseFloat(hr(t, "x", i + "px", r))) + r;
  },
  Or = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      Mr(t, e);
  },
  Mr = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      o = i.z,
      u = i.rotation,
      h = i.rotationY,
      l = i.rotationX,
      f = i.skewX,
      c = i.skewY,
      p = i.scaleX,
      d = i.scaleY,
      _ = i.transformPerspective,
      m = i.force3D,
      g = i.target,
      v = i.zOrigin,
      y = "",
      b = ("auto" === m && t && 1 !== t) || !0 === m;
    if (v && ("0deg" !== l || "0deg" !== h)) {
      var x,
        T = parseFloat(h) * Si,
        w = Math.sin(T),
        O = Math.cos(T);
      (T = parseFloat(l) * Si),
        (x = Math.cos(T)),
        (s = wr(g, s, w * x * -v)),
        (a = wr(g, a, -Math.sin(T) * -v)),
        (o = wr(g, o, O * x * -v + v));
    }
    "0px" !== _ && (y += "perspective(" + _ + ") "),
      (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
      (b || "0px" !== s || "0px" !== a || "0px" !== o) &&
        (y +=
          "0px" !== o || b
            ? "translate3d(" + s + ", " + a + ", " + o + ") "
            : "translate(" + s + ", " + a + ") "),
      "0deg" !== u && (y += "rotate(" + u + ") "),
      "0deg" !== h && (y += "rotateY(" + h + ") "),
      "0deg" !== l && (y += "rotateX(" + l + ") "),
      ("0deg" === f && "0deg" === c) || (y += "skew(" + f + ", " + c + ") "),
      (1 === p && 1 === d) || (y += "scale(" + p + ", " + d + ") "),
      (g.style[Hi] = y || "translate(0, 0)");
  },
  kr = function (t, e) {
    var i,
      r,
      n,
      s,
      a,
      o = e || this,
      u = o.xPercent,
      h = o.yPercent,
      l = o.x,
      f = o.y,
      c = o.rotation,
      p = o.skewX,
      d = o.skewY,
      _ = o.scaleX,
      m = o.scaleY,
      g = o.target,
      v = o.xOrigin,
      y = o.yOrigin,
      b = o.xOffset,
      x = o.yOffset,
      T = o.forceCSS,
      w = parseFloat(l),
      O = parseFloat(f);
    (c = parseFloat(c)),
      (p = parseFloat(p)),
      (d = parseFloat(d)) && ((p += d = parseFloat(d)), (c += d)),
      c || p
        ? ((c *= Si),
          (p *= Si),
          (i = Math.cos(c) * _),
          (r = Math.sin(c) * _),
          (n = Math.sin(c - p) * -m),
          (s = Math.cos(c - p) * m),
          p &&
            ((d *= Si),
            (a = Math.tan(p - d)),
            (n *= a = Math.sqrt(1 + a * a)),
            (s *= a),
            d &&
              ((a = Math.tan(d)), (i *= a = Math.sqrt(1 + a * a)), (r *= a))),
          (i = kt(i)),
          (r = kt(r)),
          (n = kt(n)),
          (s = kt(s)))
        : ((i = _), (s = m), (r = n = 0)),
      ((w && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
        ((w = hr(g, "x", l, "px")), (O = hr(g, "y", f, "px"))),
      (v || y || b || x) &&
        ((w = kt(w + v - (v * i + y * n) + b)),
        (O = kt(O + y - (v * r + y * s) + x))),
      (u || h) &&
        ((a = g.getBBox()),
        (w = kt(w + (u / 100) * a.width)),
        (O = kt(O + (h / 100) * a.height))),
      (a =
        "matrix(" + i + "," + r + "," + n + "," + s + "," + w + "," + O + ")"),
      g.setAttribute("transform", a),
      T && (g.style[Hi] = a);
  },
  Er = function (t, e, i, r, n, s) {
    var a,
      o,
      u = 360,
      h = X(n),
      l = parseFloat(n) * (h && ~n.indexOf("rad") ? Ci : 1),
      f = s ? l * s : l - r,
      c = r + f + "deg";
    return (
      h &&
        ("short" === (a = n.split("_")[1]) &&
          (f %= u) !== f % 180 &&
          (f += f < 0 ? u : -360),
        "cw" === a && f < 0
          ? (f = ((f + 36e9) % u) - ~~(f / u) * u)
          : "ccw" === a && f > 0 && (f = ((f - 36e9) % u) - ~~(f / u) * u)),
      (t._pt = o = new gi(t._pt, e, i, r, f, Bi)),
      (o.e = c),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  },
  Dr = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Ar = function (t, e, i) {
    var r,
      n,
      s,
      a,
      o,
      u,
      h,
      l = Dr({}, i._gsap),
      f = i.style;
    for (n in (l.svg
      ? ((s = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (f[Hi] = e),
        (r = xr(i, 1)),
        ar(i, Hi),
        i.setAttribute("transform", s))
      : ((s = getComputedStyle(i)[Hi]),
        (f[Hi] = e),
        (r = xr(i, 1)),
        (f[Hi] = s)),
    Ai))
      (s = l[n]) !== (a = r[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = oe(s) !== (h = oe(a)) ? hr(i, n, s, h) : parseFloat(s)),
        (u = parseFloat(a)),
        (t._pt = new gi(t._pt, r, n, o, u - o, Li)),
        (t._pt.u = h || 0),
        t._props.push(n));
    Dr(r, l);
  };
Mt("padding,margin,Width,Radius", function (t, e) {
  var i = "Top",
    r = "Right",
    n = "Bottom",
    s = "Left",
    a = (e < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function (i) {
      return e < 2 ? t + i : "border" + i + t;
    });
  dr[e > 1 ? "border" + t : t] = function (t, e, i, r, n) {
    var s, o;
    if (arguments.length < 4)
      return (
        (s = a.map(function (e) {
          return lr(t, e, i);
        })),
        5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
      );
    (s = (r + "").split(" ")),
      (o = {}),
      a.forEach(function (t, e) {
        return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
      }),
      t.init(e, o, n);
  };
});
var Cr,
  Sr,
  Ir,
  Pr = {
    name: "css",
    register: er,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, i, r, n) {
      var s,
        a,
        o,
        u,
        h,
        l,
        f,
        c,
        p,
        d,
        _,
        m,
        g,
        v,
        y,
        b,
        x,
        T,
        w,
        O = this._props,
        M = t.style,
        k = i.vars.startAt;
      for (f in (Mi || er(), e))
        if ("autoRound" !== f && ((a = e[f]), !gt[f] || !Ze(f, e, i, r, t, n)))
          if (
            ((h = typeof a),
            (l = dr[f]),
            "function" === h && (h = typeof (a = a.call(i, r, t, n))),
            "string" === h && ~a.indexOf("random(") && (a = ve(a)),
            l)
          )
            l(this, t, f, a, i) && (y = 1);
          else if ("--" === f.substr(0, 2))
            (s = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
              (a += ""),
              (Ae.lastIndex = 0),
              Ae.test(s) || ((c = oe(s)), (p = oe(a))),
              p ? c !== p && (s = hr(t, f, s, p) + p) : c && (a += c),
              this.add(M, "setProperty", s, a, r, n, 0, 0, f),
              O.push(f);
          else if ("undefined" !== h) {
            if (
              (k && f in k
                ? ((s =
                    "function" == typeof k[f] ? k[f].call(i, r, t, n) : k[f]),
                  X(s) && ~s.indexOf("random(") && (s = ve(s)),
                  oe(s + "") || (s += z.units[f] || oe(lr(t, f)) || ""),
                  "=" === (s + "").charAt(1) && (s = lr(t, f)))
                : (s = lr(t, f)),
              (u = parseFloat(s)),
              (d =
                "string" === h && "=" === a.charAt(1)
                  ? +(a.charAt(0) + "1")
                  : 0) && (a = a.substr(2)),
              (o = parseFloat(a)),
              f in zi &&
                ("autoAlpha" === f &&
                  (1 === u && "hidden" === lr(t, "visibility") && o && (u = 0),
                  or(
                    this,
                    M,
                    "visibility",
                    u ? "inherit" : "hidden",
                    o ? "inherit" : "hidden",
                    !o
                  )),
                "scale" !== f &&
                  "transform" !== f &&
                  ~(f = zi[f]).indexOf(",") &&
                  (f = f.split(",")[0])),
              (_ = f in Ai))
            )
              if (
                (m ||
                  (((g = t._gsap).renderTransform && !e.parseTransform) ||
                    xr(t, e.parseTransform),
                  (v = !1 !== e.smoothOrigin && g.smooth),
                  ((m = this._pt =
                    new gi(
                      this._pt,
                      M,
                      Hi,
                      0,
                      1,
                      g.renderTransform,
                      g,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === f)
              )
                (this._pt = new gi(
                  this._pt,
                  g,
                  "scaleY",
                  g.scaleY,
                  (d ? d * o : o - g.scaleY) || 0
                )),
                  O.push("scaleY", f),
                  (f += "X");
              else {
                if ("transformOrigin" === f) {
                  (x = void 0),
                    (T = void 0),
                    (w = void 0),
                    (x = (b = a).split(" ")),
                    (T = x[0]),
                    (w = x[1] || "50%"),
                    ("top" !== T &&
                      "bottom" !== T &&
                      "left" !== w &&
                      "right" !== w) ||
                      ((b = T), (T = w), (w = b)),
                    (x[0] = cr[T] || T),
                    (x[1] = cr[w] || w),
                    (a = x.join(" ")),
                    g.svg
                      ? br(t, a, 0, v, 0, this)
                      : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin &&
                          or(this, g, "zOrigin", g.zOrigin, p),
                        or(this, M, f, Tr(s), Tr(a)));
                  continue;
                }
                if ("svgOrigin" === f) {
                  br(t, a, 1, v, 0, this);
                  continue;
                }
                if (f in mr) {
                  Er(this, g, f, u, a, d);
                  continue;
                }
                if ("smoothOrigin" === f) {
                  or(this, g, "smooth", g.smooth, a);
                  continue;
                }
                if ("force3D" === f) {
                  g[f] = a;
                  continue;
                }
                if ("transform" === f) {
                  Ar(this, a, t);
                  continue;
                }
              }
            else f in M || (f = tr(f) || f);
            if (
              _ ||
              ((o || 0 === o) && (u || 0 === u) && !Ri.test(a) && f in M)
            )
              o || (o = 0),
                (c = (s + "").substr((u + "").length)) !==
                  (p = oe(a) || (f in z.units ? z.units[f] : c)) &&
                  (u = hr(t, f, s, p)),
                (this._pt = new gi(
                  this._pt,
                  _ ? g : M,
                  f,
                  u,
                  d ? d * o : o - u,
                  _ || ("px" !== p && "zIndex" !== f) || !1 === e.autoRound
                    ? Li
                    : ji
                )),
                (this._pt.u = p || 0),
                c !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = qi));
            else if (f in M) fr.call(this, t, f, s, a);
            else {
              if (!(f in t)) {
                lt(f, a);
                continue;
              }
              this.add(t, f, s || t[f], a, r, n);
            }
            O.push(f);
          }
      y && mi(this);
    },
    get: lr,
    aliases: zi,
    getSetter: function (t, e, i) {
      var r = zi[e];
      return (
        r && r.indexOf(",") < 0 && (e = r),
        e in Ai && e !== Ji && (t._gsap.x || lr(t, "x"))
          ? i && Ei === i
            ? "scale" === e
              ? Wi
              : Vi
            : ((Ei = i || {}), "scale" === e ? Qi : Gi)
          : t.style && !Q(t.style[e])
          ? Yi
          : ~e.indexOf("-")
          ? Xi
          : ui(t, e)
      );
    },
    core: { _removeProperty: ar, _getMatrix: yr },
  };
(xi.utils.checkPrefix = tr),
  (Ir = Mt(
    (Cr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
      "," +
      (Sr = "rotation,rotationX,rotationY,skewX,skewY") +
      ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    function (t) {
      Ai[t] = 1;
    }
  )),
  Mt(Sr, function (t) {
    (z.units[t] = "deg"), (mr[t] = 1);
  }),
  (zi[Ir[13]] = Cr + "," + Sr),
  Mt(
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    function (t) {
      var e = t.split(":");
      zi[e[1]] = Ir[e[0]];
    }
  ),
  Mt(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (t) {
      z.units[t] = "px";
    }
  ),
  xi.registerPlugin(Pr);
var Fr = xi.registerPlugin(Pr) || xi;
Fr.core.Tween;
class Rr {
  createHoverTimeline() {
    const t = this.DOM.el.dataset.repetitionAnimate || "scale";
    let e = {
        duration: this.DOM.el.dataset.repetitionDuration || 0.8,
        ease: this.DOM.el.dataset.repetitionEase || "power2.inOut",
        stagger: this.DOM.el.dataset.repetitionStagger || -0.1,
      },
      i = {};
    (e[t] = (t) => +!t),
      (i[t] = this.DOM.el.dataset.repetitionInitialScale || 2),
      (this.hoverTimeline = Fr.timeline({ paused: !0 })
        .set(this.DOM.innerElems[0], i)
        .to([this.DOM.innerElems], e, 0));
  }
  initEvents() {
    (this.onMouseEnterFn = () => this.mouseEnter()),
      (this.onMouseLeaveFn = () => this.mouseLeave()),
      this.DOM.el.addEventListener("mouseenter", this.onMouseEnterFn),
      this.DOM.el.addEventListener("mouseleave", this.onMouseLeaveFn);
  }
  mouseEnter() {
    this.hoverTimeline.play();
  }
  mouseLeave() {
    this.hoverTimeline.reverse();
  }
  constructor(t) {
    s(this, "DOM", { el: null, innerElems: null }),
      s(this, "bgImage", void 0),
      s(this, "totalInnerElems", void 0),
      s(this, "hoverTimeline", void 0),
      (this.DOM = { el: t }),
      (this.bgImage = /(?:\(['"]?)(.*?)(?:['"]?\))/.exec(
        this.DOM.el.style.backgroundImage
      )[1]),
      Fr.set(this.DOM.el, { backgroundImage: "none" }),
      (this.totalInnerElems = +this.DOM.el.dataset.repetitionElems || 4),
      (this.totalInnerElems =
        this.totalInnerElems <= 1 ? 2 : this.totalInnerElems);
    let e = "";
    for (let t = 0, i = this.totalInnerElems || 1; t <= i - 1; ++t)
      e +=
        0 === t
          ? `<div class="image__wrap"><div class="image__element" style="background-image:url(${this.bgImage})"></div></div>`
          : `<div class="image__element" style="background-image:url(${this.bgImage})"></div>`;
    (this.DOM.el.innerHTML = e),
      (this.DOM.innerElems = this.DOM.el.querySelectorAll(".image__element")),
      Fr.set([this.DOM.el, this.DOM.innerElems[0]], {
        transformOrigin: this.DOM.el.dataset.repetitionOrigin || "50% 50%",
      }),
      this.createHoverTimeline(),
      this.initEvents();
  }
}
((t = "img") =>
  new Promise((e) => {
    n(document.querySelectorAll(t), { background: !0 }, e);
  }))("[data-repetition]").then(() => {
  document.body.classList.remove("loading"),
    [...document.querySelectorAll(".image")].forEach((t) => new Rr(t));
});
