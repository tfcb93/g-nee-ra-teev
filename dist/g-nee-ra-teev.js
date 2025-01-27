function rr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function nr(i) {
  if (i.__esModule) return i;
  var a = i.default;
  if (typeof a == "function") {
    var u = function h() {
      return this instanceof h ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments);
    };
    u.prototype = a.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(i).forEach(function(h) {
    var f = Object.getOwnPropertyDescriptor(i, h);
    Object.defineProperty(u, h, f.get ? f : {
      enumerable: !0,
      get: function() {
        return i[h];
      }
    });
  }), u;
}
var z = { exports: {} }, er = z.exports, N;
function tr() {
  return N || (N = 1, function(i) {
    (function(a, u, h) {
      function f(r) {
        var e = this, o = c();
        e.next = function() {
          var n = 2091639 * e.s0 + e.c * 23283064365386963e-26;
          return e.s0 = e.s1, e.s1 = e.s2, e.s2 = n - (e.c = n | 0);
        }, e.c = 1, e.s0 = o(" "), e.s1 = o(" "), e.s2 = o(" "), e.s0 -= o(r), e.s0 < 0 && (e.s0 += 1), e.s1 -= o(r), e.s1 < 0 && (e.s1 += 1), e.s2 -= o(r), e.s2 < 0 && (e.s2 += 1), o = null;
      }
      function x(r, e) {
        return e.c = r.c, e.s0 = r.s0, e.s1 = r.s1, e.s2 = r.s2, e;
      }
      function v(r, e) {
        var o = new f(r), n = e && e.state, t = o.next;
        return t.int32 = function() {
          return o.next() * 4294967296 | 0;
        }, t.double = function() {
          return t() + (t() * 2097152 | 0) * 11102230246251565e-32;
        }, t.quick = t, n && (typeof n == "object" && x(n, o), t.state = function() {
          return x(o, {});
        }), t;
      }
      function c() {
        var r = 4022871197, e = function(o) {
          o = String(o);
          for (var n = 0; n < o.length; n++) {
            r += o.charCodeAt(n);
            var t = 0.02519603282416938 * r;
            r = t >>> 0, t -= r, t *= r, r = t >>> 0, t -= r, r += t * 4294967296;
          }
          return (r >>> 0) * 23283064365386963e-26;
        };
        return e;
      }
      u && u.exports ? u.exports = v : this.alea = v;
    })(
      er,
      i
    );
  }(z)), z.exports;
}
var A = { exports: {} }, ir = A.exports, I;
function or() {
  return I || (I = 1, function(i) {
    (function(a, u, h) {
      function f(c) {
        var r = this, e = "";
        r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.next = function() {
          var n = r.x ^ r.x << 11;
          return r.x = r.y, r.y = r.z, r.z = r.w, r.w ^= r.w >>> 19 ^ n ^ n >>> 8;
        }, c === (c | 0) ? r.x = c : e += c;
        for (var o = 0; o < e.length + 64; o++)
          r.x ^= e.charCodeAt(o) | 0, r.next();
      }
      function x(c, r) {
        return r.x = c.x, r.y = c.y, r.z = c.z, r.w = c.w, r;
      }
      function v(c, r) {
        var e = new f(c), o = r && r.state, n = function() {
          return (e.next() >>> 0) / 4294967296;
        };
        return n.double = function() {
          do
            var t = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, l = (t + s) / (1 << 21);
          while (l === 0);
          return l;
        }, n.int32 = e.next, n.quick = n, o && (typeof o == "object" && x(o, e), n.state = function() {
          return x(e, {});
        }), n;
      }
      u && u.exports ? u.exports = v : this.xor128 = v;
    })(
      ir,
      i
    );
  }(A)), A.exports;
}
var D = { exports: {} }, ur = D.exports, U;
function cr() {
  return U || (U = 1, function(i) {
    (function(a, u, h) {
      function f(c) {
        var r = this, e = "";
        r.next = function() {
          var n = r.x ^ r.x >>> 2;
          return r.x = r.y, r.y = r.z, r.z = r.w, r.w = r.v, (r.d = r.d + 362437 | 0) + (r.v = r.v ^ r.v << 4 ^ (n ^ n << 1)) | 0;
        }, r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.v = 0, c === (c | 0) ? r.x = c : e += c;
        for (var o = 0; o < e.length + 64; o++)
          r.x ^= e.charCodeAt(o) | 0, o == e.length && (r.d = r.x << 10 ^ r.x >>> 4), r.next();
      }
      function x(c, r) {
        return r.x = c.x, r.y = c.y, r.z = c.z, r.w = c.w, r.v = c.v, r.d = c.d, r;
      }
      function v(c, r) {
        var e = new f(c), o = r && r.state, n = function() {
          return (e.next() >>> 0) / 4294967296;
        };
        return n.double = function() {
          do
            var t = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, l = (t + s) / (1 << 21);
          while (l === 0);
          return l;
        }, n.int32 = e.next, n.quick = n, o && (typeof o == "object" && x(o, e), n.state = function() {
          return x(e, {});
        }), n;
      }
      u && u.exports ? u.exports = v : this.xorwow = v;
    })(
      ur,
      i
    );
  }(D)), D.exports;
}
var H = { exports: {} }, sr = H.exports, W;
function ar() {
  return W || (W = 1, function(i) {
    (function(a, u, h) {
      function f(c) {
        var r = this;
        r.next = function() {
          var o = r.x, n = r.i, t, s;
          return t = o[n], t ^= t >>> 7, s = t ^ t << 24, t = o[n + 1 & 7], s ^= t ^ t >>> 10, t = o[n + 3 & 7], s ^= t ^ t >>> 3, t = o[n + 4 & 7], s ^= t ^ t << 7, t = o[n + 7 & 7], t = t ^ t << 13, s ^= t ^ t << 9, o[n] = s, r.i = n + 1 & 7, s;
        };
        function e(o, n) {
          var t, s = [];
          if (n === (n | 0))
            s[0] = n;
          else
            for (n = "" + n, t = 0; t < n.length; ++t)
              s[t & 7] = s[t & 7] << 15 ^ n.charCodeAt(t) + s[t + 1 & 7] << 13;
          for (; s.length < 8; ) s.push(0);
          for (t = 0; t < 8 && s[t] === 0; ++t) ;
          for (t == 8 ? s[7] = -1 : s[t], o.x = s, o.i = 0, t = 256; t > 0; --t)
            o.next();
        }
        e(r, c);
      }
      function x(c, r) {
        return r.x = c.x.slice(), r.i = c.i, r;
      }
      function v(c, r) {
        c == null && (c = +/* @__PURE__ */ new Date());
        var e = new f(c), o = r && r.state, n = function() {
          return (e.next() >>> 0) / 4294967296;
        };
        return n.double = function() {
          do
            var t = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, l = (t + s) / (1 << 21);
          while (l === 0);
          return l;
        }, n.int32 = e.next, n.quick = n, o && (o.x && x(o, e), n.state = function() {
          return x(e, {});
        }), n;
      }
      u && u.exports ? u.exports = v : this.xorshift7 = v;
    })(
      sr,
      i
    );
  }(H)), H.exports;
}
var Y = { exports: {} }, fr = Y.exports, J;
function xr() {
  return J || (J = 1, function(i) {
    (function(a, u, h) {
      function f(c) {
        var r = this;
        r.next = function() {
          var o = r.w, n = r.X, t = r.i, s, l;
          return r.w = o = o + 1640531527 | 0, l = n[t + 34 & 127], s = n[t = t + 1 & 127], l ^= l << 13, s ^= s << 17, l ^= l >>> 15, s ^= s >>> 12, l = n[t] = l ^ s, r.i = t, l + (o ^ o >>> 16) | 0;
        };
        function e(o, n) {
          var t, s, l, m, _, j = [], C = 128;
          for (n === (n | 0) ? (s = n, n = null) : (n = n + "\0", s = 0, C = Math.max(C, n.length)), l = 0, m = -32; m < C; ++m)
            n && (s ^= n.charCodeAt((m + 32) % n.length)), m === 0 && (_ = s), s ^= s << 10, s ^= s >>> 15, s ^= s << 4, s ^= s >>> 13, m >= 0 && (_ = _ + 1640531527 | 0, t = j[m & 127] ^= s + _, l = t == 0 ? l + 1 : 0);
          for (l >= 128 && (j[(n && n.length || 0) & 127] = -1), l = 127, m = 4 * 128; m > 0; --m)
            s = j[l + 34 & 127], t = j[l = l + 1 & 127], s ^= s << 13, t ^= t << 17, s ^= s >>> 15, t ^= t >>> 12, j[l] = s ^ t;
          o.w = _, o.X = j, o.i = l;
        }
        e(r, c);
      }
      function x(c, r) {
        return r.i = c.i, r.w = c.w, r.X = c.X.slice(), r;
      }
      function v(c, r) {
        c == null && (c = +/* @__PURE__ */ new Date());
        var e = new f(c), o = r && r.state, n = function() {
          return (e.next() >>> 0) / 4294967296;
        };
        return n.double = function() {
          do
            var t = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, l = (t + s) / (1 << 21);
          while (l === 0);
          return l;
        }, n.int32 = e.next, n.quick = n, o && (o.X && x(o, e), n.state = function() {
          return x(e, {});
        }), n;
      }
      u && u.exports ? u.exports = v : this.xor4096 = v;
    })(
      fr,
      // window object or global
      i
    );
  }(Y)), Y.exports;
}
var G = { exports: {} }, lr = G.exports, K;
function hr() {
  return K || (K = 1, function(i) {
    (function(a, u, h) {
      function f(c) {
        var r = this, e = "";
        r.next = function() {
          var n = r.b, t = r.c, s = r.d, l = r.a;
          return n = n << 25 ^ n >>> 7 ^ t, t = t - s | 0, s = s << 24 ^ s >>> 8 ^ l, l = l - n | 0, r.b = n = n << 20 ^ n >>> 12 ^ t, r.c = t = t - s | 0, r.d = s << 16 ^ t >>> 16 ^ l, r.a = l - n | 0;
        }, r.a = 0, r.b = 0, r.c = -1640531527, r.d = 1367130551, c === Math.floor(c) ? (r.a = c / 4294967296 | 0, r.b = c | 0) : e += c;
        for (var o = 0; o < e.length + 20; o++)
          r.b ^= e.charCodeAt(o) | 0, r.next();
      }
      function x(c, r) {
        return r.a = c.a, r.b = c.b, r.c = c.c, r.d = c.d, r;
      }
      function v(c, r) {
        var e = new f(c), o = r && r.state, n = function() {
          return (e.next() >>> 0) / 4294967296;
        };
        return n.double = function() {
          do
            var t = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, l = (t + s) / (1 << 21);
          while (l === 0);
          return l;
        }, n.int32 = e.next, n.quick = n, o && (typeof o == "object" && x(o, e), n.state = function() {
          return x(e, {});
        }), n;
      }
      u && u.exports ? u.exports = v : this.tychei = v;
    })(
      lr,
      i
    );
  }(G)), G.exports;
}
var E = { exports: {} };
const vr = {}, yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vr
}, Symbol.toStringTag, { value: "Module" })), wr = /* @__PURE__ */ nr(yr);
var pr = E.exports, L;
function dr() {
  return L || (L = 1, function(i) {
    (function(a, u, h) {
      var f = 256, x = 6, v = 52, c = "random", r = h.pow(f, x), e = h.pow(2, v), o = e * 2, n = f - 1, t;
      function s(y, w, g) {
        var d = [];
        w = w == !0 ? { entropy: !0 } : w || {};
        var p = j(_(
          w.entropy ? [y, R(u)] : y ?? C(),
          3
        ), d), X = new l(d), P = function() {
          for (var q = X.g(x), O = r, M = 0; q < e; )
            q = (q + M) * f, O *= f, M = X.g(1);
          for (; q >= o; )
            q /= 2, O /= 2, M >>>= 1;
          return (q + M) / O;
        };
        return P.int32 = function() {
          return X.g(4) | 0;
        }, P.quick = function() {
          return X.g(4) / 4294967296;
        }, P.double = P, j(R(X.S), u), (w.pass || g || function(q, O, M, $) {
          return $ && ($.S && m($, X), q.state = function() {
            return m(X, {});
          }), M ? (h[c] = q, O) : q;
        })(
          P,
          p,
          "global" in w ? w.global : this == h,
          w.state
        );
      }
      function l(y) {
        var w, g = y.length, d = this, p = 0, X = d.i = d.j = 0, P = d.S = [];
        for (g || (y = [g++]); p < f; )
          P[p] = p++;
        for (p = 0; p < f; p++)
          P[p] = P[X = n & X + y[p % g] + (w = P[p])], P[X] = w;
        (d.g = function(q) {
          for (var O, M = 0, $ = d.i, T = d.j, S = d.S; q--; )
            O = S[$ = n & $ + 1], M = M * f + S[n & (S[$] = S[T = n & T + O]) + (S[T] = O)];
          return d.i = $, d.j = T, M;
        })(f);
      }
      function m(y, w) {
        return w.i = y.i, w.j = y.j, w.S = y.S.slice(), w;
      }
      function _(y, w) {
        var g = [], d = typeof y, p;
        if (w && d == "object")
          for (p in y)
            try {
              g.push(_(y[p], w - 1));
            } catch {
            }
        return g.length ? g : d == "string" ? y : y + "\0";
      }
      function j(y, w) {
        for (var g = y + "", d, p = 0; p < g.length; )
          w[n & p] = n & (d ^= w[n & p] * 19) + g.charCodeAt(p++);
        return R(w);
      }
      function C() {
        try {
          var y;
          return t && (y = t.randomBytes) ? y = y(f) : (y = new Uint8Array(f), (a.crypto || a.msCrypto).getRandomValues(y)), R(y);
        } catch {
          var w = a.navigator, g = w && w.plugins;
          return [+/* @__PURE__ */ new Date(), a, g, a.screen, R(u)];
        }
      }
      function R(y) {
        return String.fromCharCode.apply(0, y);
      }
      if (j(h.random(), u), i.exports) {
        i.exports = s;
        try {
          t = wr;
        } catch {
        }
      } else
        h["seed" + c] = s;
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self < "u" ? self : pr,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }(E)), E.exports;
}
var V, Q;
function gr() {
  if (Q) return V;
  Q = 1;
  var i = tr(), a = or(), u = cr(), h = ar(), f = xr(), x = hr(), v = dr();
  return v.alea = i, v.xor128 = a, v.xorwow = u, v.xorshift7 = h, v.xor4096 = f, v.tychei = x, V = v, V;
}
var mr = gr();
const br = /* @__PURE__ */ rr(mr);
function B(i, a, u) {
  return Math.trunc(u() * (a - i) + i);
}
var b = /* @__PURE__ */ ((i) => (i[i.X = 0] = "X", i[i.Y = 1] = "Y", i[i.BOTH = 2] = "BOTH", i))(b || {});
function k(i, a, u, h) {
  switch (h) {
    case b.X:
      return { x: i.x + Math.sin(a) * u, y: i.y };
    case b.Y:
      return { x: i.x, y: i.y + Math.sin(a) * u };
    case b.BOTH:
      return { x: i.x + Math.sin(a) * u, y: i.y + Math.sin(a) * u };
  }
}
function F(i, a, u, h) {
  switch (h) {
    case b.X:
      return { x: i.x + Math.cos(a) * u, y: i.y };
    case b.Y:
      return { x: i.x, y: i.y + Math.cos(a) * u };
    case b.BOTH:
      return { x: i.x + Math.cos(a) * u, y: i.y + Math.cos(a) * u };
  }
}
function Z(i, a, u) {
  return { x: B(i.x, a.x, u), y: B(i.y, a.y, u) };
}
function Xr(i, a) {
  return { x: (i.x + a.x) / 2, y: (i.y + a.y) / 2 };
}
function qr(i, a, u, h) {
  let f = [];
  for (let x = 0; x < h; x = x + 1)
    f = [...f, Z(i, a, u)];
  return f;
}
function Pr(i, a, u) {
  const h = i.x * (B(a * -1, a, u) / 100), f = i.y * (B(a * -1, a, u) / 100);
  return { x: i.x + h, y: i.y + f };
}
function jr(i, a, u) {
  const h = a.x - i.x, f = a.y - i.y;
  let x = [];
  for (let v = 1; v <= u; v = v + 1)
    x = [...x, { x: i.x + h / u * v, y: i.y + f / u * v }];
  return x;
}
function Mr(i, a, u, h) {
  const f = h(), x = h();
  return f < 0.5 ? x < 0.3 ? k(i, a, u, b.X) : x >= 0.3 && x < 0.6 ? k(i, a, u, b.Y) : k(i, a, u, b.BOTH) : x < 0.3 ? F(i, a, u, b.X) : x >= 0.3 && x < 0.6 ? F(i, a, u, b.Y) : F(i, a, u, b.BOTH);
}
function Or(i, a, u, h, f, x) {
  i.save(), i.beginPath(), i.strokeStyle = x, i.rect(a - h / 2, u - f / 2, h, f), i.stroke(), i.restore();
}
const _r = {
  min: {
    x: 0,
    y: 0
  },
  max: {
    x: 640,
    y: 480
  }
};
function Br(i = 640, a = 480, u = _r, h = !0) {
  const f = document.createElement("canvas"), x = f.getContext("2d");
  f.width = i, f.height = a;
  const v = br();
  let c = { previousTime: Date.now(), delta: 0 };
  const r = () => {
    const e = Date.now(), o = (e - c.previousTime) / 1e3;
    c.previousTime = e, c.delta = c.delta + o;
  };
  if (x) {
    const e = $r(x, v, u, { min: 10, max: 20 });
    if (h) {
      const o = () => {
        r(), e(c.delta), requestAnimationFrame(o);
      };
      o();
    }
  }
  return { canvas: f, context: x };
}
function $r(i, a, u, h) {
  const f = Z(u.min, u.max, a);
  let v = qr(u.min, u.max, a, B(h.min, h.max, a)).map((c) => jr(f, c, B(10, 30, a)).map((r, e, o) => Pr(Xr(e == 0 ? f : o[e - 1], r), 10, a)));
  return (c) => {
    i.clearRect(0, 0, u.max.x, u.max.y), v = v.map((r) => {
      const e = 1 / r.length, o = a();
      return r.map((n, t) => {
        const s = 1 - e * t;
        return Or(i, n.x, n.y, 40, 40, `rgba(0,0,0,${s})`), Mr(n, c, o, a);
      });
    });
  };
}
export {
  Br as default
};
