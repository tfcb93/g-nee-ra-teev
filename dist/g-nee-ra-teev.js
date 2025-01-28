function rr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function er(i) {
  if (i.__esModule) return i;
  var a = i.default;
  if (typeof a == "function") {
    var u = function f() {
      return this instanceof f ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments);
    };
    u.prototype = a.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(i).forEach(function(f) {
    var x = Object.getOwnPropertyDescriptor(i, f);
    Object.defineProperty(u, f, x.get ? x : {
      enumerable: !0,
      get: function() {
        return i[f];
      }
    });
  }), u;
}
var A = { exports: {} }, nr = A.exports, L;
function tr() {
  return L || (L = 1, function(i) {
    (function(a, u, f) {
      function x(r) {
        var n = this, o = s();
        n.next = function() {
          var e = 2091639 * n.s0 + n.c * 23283064365386963e-26;
          return n.s0 = n.s1, n.s1 = n.s2, n.s2 = e - (n.c = e | 0);
        }, n.c = 1, n.s0 = o(" "), n.s1 = o(" "), n.s2 = o(" "), n.s0 -= o(r), n.s0 < 0 && (n.s0 += 1), n.s1 -= o(r), n.s1 < 0 && (n.s1 += 1), n.s2 -= o(r), n.s2 < 0 && (n.s2 += 1), o = null;
      }
      function l(r, n) {
        return n.c = r.c, n.s0 = r.s0, n.s1 = r.s1, n.s2 = r.s2, n;
      }
      function v(r, n) {
        var o = new x(r), e = n && n.state, t = o.next;
        return t.int32 = function() {
          return o.next() * 4294967296 | 0;
        }, t.double = function() {
          return t() + (t() * 2097152 | 0) * 11102230246251565e-32;
        }, t.quick = t, e && (typeof e == "object" && l(e, o), t.state = function() {
          return l(o, {});
        }), t;
      }
      function s() {
        var r = 4022871197, n = function(o) {
          o = String(o);
          for (var e = 0; e < o.length; e++) {
            r += o.charCodeAt(e);
            var t = 0.02519603282416938 * r;
            r = t >>> 0, t -= r, t *= r, r = t >>> 0, t -= r, r += t * 4294967296;
          }
          return (r >>> 0) * 23283064365386963e-26;
        };
        return n;
      }
      u && u.exports ? u.exports = v : this.alea = v;
    })(
      nr,
      i
    );
  }(A)), A.exports;
}
var S = { exports: {} }, ir = S.exports, N;
function or() {
  return N || (N = 1, function(i) {
    (function(a, u, f) {
      function x(s) {
        var r = this, n = "";
        r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.next = function() {
          var e = r.x ^ r.x << 11;
          return r.x = r.y, r.y = r.z, r.z = r.w, r.w ^= r.w >>> 19 ^ e ^ e >>> 8;
        }, s === (s | 0) ? r.x = s : n += s;
        for (var o = 0; o < n.length + 64; o++)
          r.x ^= n.charCodeAt(o) | 0, r.next();
      }
      function l(s, r) {
        return r.x = s.x, r.y = s.y, r.z = s.z, r.w = s.w, r;
      }
      function v(s, r) {
        var n = new x(s), o = r && r.state, e = function() {
          return (n.next() >>> 0) / 4294967296;
        };
        return e.double = function() {
          do
            var t = n.next() >>> 11, c = (n.next() >>> 0) / 4294967296, h = (t + c) / (1 << 21);
          while (h === 0);
          return h;
        }, e.int32 = n.next, e.quick = e, o && (typeof o == "object" && l(o, n), e.state = function() {
          return l(n, {});
        }), e;
      }
      u && u.exports ? u.exports = v : this.xor128 = v;
    })(
      ir,
      i
    );
  }(S)), S.exports;
}
var D = { exports: {} }, ur = D.exports, I;
function cr() {
  return I || (I = 1, function(i) {
    (function(a, u, f) {
      function x(s) {
        var r = this, n = "";
        r.next = function() {
          var e = r.x ^ r.x >>> 2;
          return r.x = r.y, r.y = r.z, r.z = r.w, r.w = r.v, (r.d = r.d + 362437 | 0) + (r.v = r.v ^ r.v << 4 ^ (e ^ e << 1)) | 0;
        }, r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.v = 0, s === (s | 0) ? r.x = s : n += s;
        for (var o = 0; o < n.length + 64; o++)
          r.x ^= n.charCodeAt(o) | 0, o == n.length && (r.d = r.x << 10 ^ r.x >>> 4), r.next();
      }
      function l(s, r) {
        return r.x = s.x, r.y = s.y, r.z = s.z, r.w = s.w, r.v = s.v, r.d = s.d, r;
      }
      function v(s, r) {
        var n = new x(s), o = r && r.state, e = function() {
          return (n.next() >>> 0) / 4294967296;
        };
        return e.double = function() {
          do
            var t = n.next() >>> 11, c = (n.next() >>> 0) / 4294967296, h = (t + c) / (1 << 21);
          while (h === 0);
          return h;
        }, e.int32 = n.next, e.quick = e, o && (typeof o == "object" && l(o, n), e.state = function() {
          return l(n, {});
        }), e;
      }
      u && u.exports ? u.exports = v : this.xorwow = v;
    })(
      ur,
      i
    );
  }(D)), D.exports;
}
var H = { exports: {} }, sr = H.exports, U;
function ar() {
  return U || (U = 1, function(i) {
    (function(a, u, f) {
      function x(s) {
        var r = this;
        r.next = function() {
          var o = r.x, e = r.i, t, c;
          return t = o[e], t ^= t >>> 7, c = t ^ t << 24, t = o[e + 1 & 7], c ^= t ^ t >>> 10, t = o[e + 3 & 7], c ^= t ^ t >>> 3, t = o[e + 4 & 7], c ^= t ^ t << 7, t = o[e + 7 & 7], t = t ^ t << 13, c ^= t ^ t << 9, o[e] = c, r.i = e + 1 & 7, c;
        };
        function n(o, e) {
          var t, c = [];
          if (e === (e | 0))
            c[0] = e;
          else
            for (e = "" + e, t = 0; t < e.length; ++t)
              c[t & 7] = c[t & 7] << 15 ^ e.charCodeAt(t) + c[t + 1 & 7] << 13;
          for (; c.length < 8; ) c.push(0);
          for (t = 0; t < 8 && c[t] === 0; ++t) ;
          for (t == 8 ? c[7] = -1 : c[t], o.x = c, o.i = 0, t = 256; t > 0; --t)
            o.next();
        }
        n(r, s);
      }
      function l(s, r) {
        return r.x = s.x.slice(), r.i = s.i, r;
      }
      function v(s, r) {
        s == null && (s = +/* @__PURE__ */ new Date());
        var n = new x(s), o = r && r.state, e = function() {
          return (n.next() >>> 0) / 4294967296;
        };
        return e.double = function() {
          do
            var t = n.next() >>> 11, c = (n.next() >>> 0) / 4294967296, h = (t + c) / (1 << 21);
          while (h === 0);
          return h;
        }, e.int32 = n.next, e.quick = e, o && (o.x && l(o, n), e.state = function() {
          return l(n, {});
        }), e;
      }
      u && u.exports ? u.exports = v : this.xorshift7 = v;
    })(
      sr,
      i
    );
  }(H)), H.exports;
}
var Y = { exports: {} }, fr = Y.exports, W;
function xr() {
  return W || (W = 1, function(i) {
    (function(a, u, f) {
      function x(s) {
        var r = this;
        r.next = function() {
          var o = r.w, e = r.X, t = r.i, c, h;
          return r.w = o = o + 1640531527 | 0, h = e[t + 34 & 127], c = e[t = t + 1 & 127], h ^= h << 13, c ^= c << 17, h ^= h >>> 15, c ^= c >>> 12, h = e[t] = h ^ c, r.i = t, h + (o ^ o >>> 16) | 0;
        };
        function n(o, e) {
          var t, c, h, g, $, j = [], R = 128;
          for (e === (e | 0) ? (c = e, e = null) : (e = e + "\0", c = 0, R = Math.max(R, e.length)), h = 0, g = -32; g < R; ++g)
            e && (c ^= e.charCodeAt((g + 32) % e.length)), g === 0 && ($ = c), c ^= c << 10, c ^= c >>> 15, c ^= c << 4, c ^= c >>> 13, g >= 0 && ($ = $ + 1640531527 | 0, t = j[g & 127] ^= c + $, h = t == 0 ? h + 1 : 0);
          for (h >= 128 && (j[(e && e.length || 0) & 127] = -1), h = 127, g = 4 * 128; g > 0; --g)
            c = j[h + 34 & 127], t = j[h = h + 1 & 127], c ^= c << 13, t ^= t << 17, c ^= c >>> 15, t ^= t >>> 12, j[h] = c ^ t;
          o.w = $, o.X = j, o.i = h;
        }
        n(r, s);
      }
      function l(s, r) {
        return r.i = s.i, r.w = s.w, r.X = s.X.slice(), r;
      }
      function v(s, r) {
        s == null && (s = +/* @__PURE__ */ new Date());
        var n = new x(s), o = r && r.state, e = function() {
          return (n.next() >>> 0) / 4294967296;
        };
        return e.double = function() {
          do
            var t = n.next() >>> 11, c = (n.next() >>> 0) / 4294967296, h = (t + c) / (1 << 21);
          while (h === 0);
          return h;
        }, e.int32 = n.next, e.quick = e, o && (o.X && l(o, n), e.state = function() {
          return l(n, {});
        }), e;
      }
      u && u.exports ? u.exports = v : this.xor4096 = v;
    })(
      fr,
      // window object or global
      i
    );
  }(Y)), Y.exports;
}
var G = { exports: {} }, lr = G.exports, J;
function hr() {
  return J || (J = 1, function(i) {
    (function(a, u, f) {
      function x(s) {
        var r = this, n = "";
        r.next = function() {
          var e = r.b, t = r.c, c = r.d, h = r.a;
          return e = e << 25 ^ e >>> 7 ^ t, t = t - c | 0, c = c << 24 ^ c >>> 8 ^ h, h = h - e | 0, r.b = e = e << 20 ^ e >>> 12 ^ t, r.c = t = t - c | 0, r.d = c << 16 ^ t >>> 16 ^ h, r.a = h - e | 0;
        }, r.a = 0, r.b = 0, r.c = -1640531527, r.d = 1367130551, s === Math.floor(s) ? (r.a = s / 4294967296 | 0, r.b = s | 0) : n += s;
        for (var o = 0; o < n.length + 20; o++)
          r.b ^= n.charCodeAt(o) | 0, r.next();
      }
      function l(s, r) {
        return r.a = s.a, r.b = s.b, r.c = s.c, r.d = s.d, r;
      }
      function v(s, r) {
        var n = new x(s), o = r && r.state, e = function() {
          return (n.next() >>> 0) / 4294967296;
        };
        return e.double = function() {
          do
            var t = n.next() >>> 11, c = (n.next() >>> 0) / 4294967296, h = (t + c) / (1 << 21);
          while (h === 0);
          return h;
        }, e.int32 = n.next, e.quick = e, o && (typeof o == "object" && l(o, n), e.state = function() {
          return l(n, {});
        }), e;
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
}, Symbol.toStringTag, { value: "Module" })), wr = /* @__PURE__ */ er(yr);
var pr = E.exports, K;
function dr() {
  return K || (K = 1, function(i) {
    (function(a, u, f) {
      var x = 256, l = 6, v = 52, s = "random", r = f.pow(x, l), n = f.pow(2, v), o = n * 2, e = x - 1, t;
      function c(y, w, m) {
        var d = [];
        w = w == !0 ? { entropy: !0 } : w || {};
        var p = j($(
          w.entropy ? [y, T(u)] : y ?? R(),
          3
        ), d), X = new h(d), q = function() {
          for (var P = X.g(l), O = r, M = 0; P < n; )
            P = (P + M) * x, O *= x, M = X.g(1);
          for (; P >= o; )
            P /= 2, O /= 2, M >>>= 1;
          return (P + M) / O;
        };
        return q.int32 = function() {
          return X.g(4) | 0;
        }, q.quick = function() {
          return X.g(4) / 4294967296;
        }, q.double = q, j(T(X.S), u), (w.pass || m || function(P, O, M, B) {
          return B && (B.S && g(B, X), P.state = function() {
            return g(X, {});
          }), M ? (f[s] = P, O) : P;
        })(
          q,
          p,
          "global" in w ? w.global : this == f,
          w.state
        );
      }
      function h(y) {
        var w, m = y.length, d = this, p = 0, X = d.i = d.j = 0, q = d.S = [];
        for (m || (y = [m++]); p < x; )
          q[p] = p++;
        for (p = 0; p < x; p++)
          q[p] = q[X = e & X + y[p % m] + (w = q[p])], q[X] = w;
        (d.g = function(P) {
          for (var O, M = 0, B = d.i, z = d.j, _ = d.S; P--; )
            O = _[B = e & B + 1], M = M * x + _[e & (_[B] = _[z = e & z + O]) + (_[z] = O)];
          return d.i = B, d.j = z, M;
        })(x);
      }
      function g(y, w) {
        return w.i = y.i, w.j = y.j, w.S = y.S.slice(), w;
      }
      function $(y, w) {
        var m = [], d = typeof y, p;
        if (w && d == "object")
          for (p in y)
            try {
              m.push($(y[p], w - 1));
            } catch {
            }
        return m.length ? m : d == "string" ? y : y + "\0";
      }
      function j(y, w) {
        for (var m = y + "", d, p = 0; p < m.length; )
          w[e & p] = e & (d ^= w[e & p] * 19) + m.charCodeAt(p++);
        return T(w);
      }
      function R() {
        try {
          var y;
          return t && (y = t.randomBytes) ? y = y(x) : (y = new Uint8Array(x), (a.crypto || a.msCrypto).getRandomValues(y)), T(y);
        } catch {
          var w = a.navigator, m = w && w.plugins;
          return [+/* @__PURE__ */ new Date(), a, m, a.screen, T(u)];
        }
      }
      function T(y) {
        return String.fromCharCode.apply(0, y);
      }
      if (j(f.random(), u), i.exports) {
        i.exports = c;
        try {
          t = wr;
        } catch {
        }
      } else
        f["seed" + s] = c;
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
  var i = tr(), a = or(), u = cr(), f = ar(), x = xr(), l = hr(), v = dr();
  return v.alea = i, v.xor128 = a, v.xorwow = u, v.xorshift7 = f, v.xor4096 = x, v.tychei = l, V = v, V;
}
var mr = gr();
const br = /* @__PURE__ */ rr(mr);
function C(i, a, u) {
  return Math.trunc(u() * (a - i) + i);
}
var b = /* @__PURE__ */ ((i) => (i[i.X = 0] = "X", i[i.Y = 1] = "Y", i[i.BOTH = 2] = "BOTH", i))(b || {});
function k(i, a, u, f) {
  switch (f) {
    case b.X:
      return { x: i.x + Math.sin(a) * u, y: i.y };
    case b.Y:
      return { x: i.x, y: i.y + Math.sin(a) * u };
    case b.BOTH:
      return { x: i.x + Math.sin(a) * u, y: i.y + Math.sin(a) * u };
  }
}
function F(i, a, u, f) {
  switch (f) {
    case b.X:
      return { x: i.x + Math.cos(a) * u, y: i.y };
    case b.Y:
      return { x: i.x, y: i.y + Math.cos(a) * u };
    case b.BOTH:
      return { x: i.x + Math.cos(a) * u, y: i.y + Math.cos(a) * u };
  }
}
function Z(i, a, u) {
  return { x: C(i.x, a.x, u), y: C(i.y, a.y, u) };
}
function Xr(i, a) {
  return { x: (i.x + a.x) / 2, y: (i.y + a.y) / 2 };
}
function Pr(i, a, u, f) {
  let x = [];
  for (let l = 0; l < f; l = l + 1)
    x = [...x, Z(i, a, u)];
  return x;
}
function qr(i, a, u) {
  const f = i.x * (C(a * -1, a, u) / 100), x = i.y * (C(a * -1, a, u) / 100);
  return { x: i.x + f, y: i.y + x };
}
function jr(i, a, u) {
  const f = a.x - i.x, x = a.y - i.y;
  let l = [];
  for (let v = 1; v <= u; v = v + 1)
    l = [...l, { x: i.x + f / u * v, y: i.y + x / u * v }];
  return l;
}
function Mr(i, a, u, f) {
  const x = f(), l = f();
  return x < 0.5 ? l < 0.3 ? k(i, a, u, b.X) : l >= 0.3 && l < 0.6 ? k(i, a, u, b.Y) : k(i, a, u, b.BOTH) : l < 0.3 ? F(i, a, u, b.X) : l >= 0.3 && l < 0.6 ? F(i, a, u, b.Y) : F(i, a, u, b.BOTH);
}
function Or(i, a, u, f, x, l) {
  i.save(), i.beginPath(), i.strokeStyle = l, i.rect(a - f / 2, u - x / 2, f, x), i.stroke(), i.restore();
}
function Br(i = 640, a = 480, u = !0, f) {
  const x = document.createElement("canvas"), l = x.getContext("2d");
  x.width = i, x.height = a;
  const v = br();
  let s = { previousTime: Date.now(), delta: 0 };
  const r = () => {
    const n = Date.now(), o = (n - s.previousTime) / 1e3;
    s.previousTime = n, s.delta = s.delta + o;
  };
  if (l) {
    const n = $r(x, l, v, f);
    if (u) {
      const o = () => {
        r(), n(s.delta), requestAnimationFrame(o);
      };
      o();
    } else
      n(0);
  }
  return { canvas: x, context: l };
}
function $r(i, a, u, f) {
  const x = f && f.screenArea ? f.screenArea : { min: { x: 0, y: 0 }, max: { x: i.width, y: i.height } }, l = f && f.intervalLimits ? f.intervalLimits : { min: 10, max: 20 }, v = f && f.initialPoint ? f.initialPoint : Z(x.min, x.max, u);
  let r = (f && f.endPoints ? f.endPoints : Pr(x.min, x.max, u, C(1, 20, u))).map((n) => jr(v, n, C(l.min, l.max, u)).map((o, e, t) => qr(Xr(e == 0 ? v : t[e - 1], o), 10, u)));
  return (n) => {
    a.clearRect(0, 0, i.width, i.height), r = r.map((o) => {
      const e = 1 / o.length, t = u();
      return o.map((c, h) => {
        const g = 1 - e * h;
        return Or(a, c.x, c.y, 40, 40, `rgba(0,0,0,${g})`), Mr(c, n, t, u);
      });
    });
  };
}
export {
  Br as default
};
