"use strict";
(self["webpackChunkBeArtRWA"] = self["webpackChunkBeArtRWA"] || []).push([
  [675],
  {
    45675: function (e, n, t) {
      t.d(n, {
        UD: function () {
          return c.A;
        },
        T9: function () {
          return l;
        },
        Mq: function () {
          return u;
        },
      });
      var a = t(90144),
        u = () => {
          const e = (0, a.KR)(!1);
          let n = 0;
          const t = (t) => {
            t.scrollTop > n && !e.value && (e.value = !0),
              t.scrollTop < n && e.value && (e.value = !1),
              (n = t.scrollTop);
          };
          return { scrollFunc: t, isDone: e };
        },
        r = t(87383);
      const { copy: o, isSupported: i } = (0, r.iDZ)();
      var l = () => {
          const e = (0, a.KR)(!1),
            n = async (n) => {
              if (!e.value) {
                if (!i.value) return alert("您的浏览器不支持复制功能!");
                await o(n), (e.value = !0);
              }
            };
          return { copyLick: n, isShow: e };
        },
        c = t(10693);
    },
    10693: function (e, n, t) {
      var a = t(74311),
        u = t(56768);
      n.A = () => {
        const { publicKey: e, wallet: n } = (0, a.vT)(),
          t = (0, u.EW)(() => e.value?.toBase58()),
          r = (0, u.EW)(() =>
            n.value && t.value
              ? t.value.slice(0, 6) + ".." + t.value.slice(-4)
              : null
          );
        return { publicKeyBase58: t, publicKeyTrimmed: r };
      };
    },
    87383: function (e, n, t) {
      t.d(n, {
        iDZ: function () {
          return m;
        },
        pnh: function () {
          return I;
        },
        lWr: function () {
          return B;
        },
      });
      t(44114),
        t(37467),
        t(44732),
        t(79577),
        t(26280),
        t(27913),
        t(47801),
        t(64979),
        t(14603),
        t(47566),
        t(98721);
      var a = t(20153),
        u = t(56768),
        r = t(90144),
        o = !1;
      function i(e) {
        var n;
        const t = (0, a.BA)(e);
        return null != (n = null == t ? void 0 : t.$el) ? n : t;
      }
      const l = a.oc ? window : void 0,
        c = (a.oc && window.document, a.oc ? window.navigator : void 0);
      a.oc && window.location;
      function s(...e) {
        let n, t, r, o;
        if (
          ("string" === typeof e[0] || Array.isArray(e[0])
            ? (([t, r, o] = e), (n = l))
            : ([n, t, r, o] = e),
          !n)
        )
          return a.lQ;
        Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
        const c = [],
          s = () => {
            c.forEach((e) => e()), (c.length = 0);
          },
          d = (e, n, t, a) => (
            e.addEventListener(n, t, a), () => e.removeEventListener(n, t, a)
          ),
          v = (0, u.wB)(
            () => [i(n), (0, a.BA)(o)],
            ([e, n]) => {
              if ((s(), !e)) return;
              const u = (0, a.Gv)(n) ? { ...n } : n;
              c.push(...t.flatMap((n) => r.map((t) => d(e, n, t, u))));
            },
            { immediate: !0, flush: "post" }
          ),
          f = () => {
            v(), s();
          };
        return (0, a.Uo)(f), f;
      }
      function d() {
        const e = (0, r.KR)(!1),
          n = (0, u.nI)();
        return (
          n &&
            (0, u.sV)(
              () => {
                e.value = !0;
              },
              o ? void 0 : n
            ),
          e
        );
      }
      function v(e) {
        const n = d();
        return (0, u.EW)(() => (n.value, Boolean(e())));
      }
      function f(e, n = {}) {
        const { window: t = l } = n,
          o = v(
            () => t && "matchMedia" in t && "function" === typeof t.matchMedia
          );
        let i;
        const c = (0, r.KR)(!1),
          s = (e) => {
            c.value = e.matches;
          },
          d = () => {
            i &&
              ("removeEventListener" in i
                ? i.removeEventListener("change", s)
                : i.removeListener(s));
          },
          f = (0, u.nT)(() => {
            o.value &&
              (d(),
              (i = t.matchMedia((0, a.BA)(e))),
              "addEventListener" in i
                ? i.addEventListener("change", s)
                : i.addListener(s),
              (c.value = i.matches));
          });
        return (
          (0, a.Uo)(() => {
            f(), d(), (i = void 0);
          }),
          c
        );
      }
      function p(e, n = {}) {
        const { controls: t = !1, navigator: u = c } = n,
          o = v(() => u && "permissions" in u);
        let i;
        const l = "string" === typeof e ? { name: e } : e,
          d = (0, r.KR)(),
          f = () => {
            i && (d.value = i.state);
          },
          p = (0, a.Jv)(async () => {
            if (o.value) {
              if (!i)
                try {
                  (i = await u.permissions.query(l)), s(i, "change", f), f();
                } catch (e) {
                  d.value = "prompt";
                }
              return i;
            }
          });
        return p(), t ? { state: d, isSupported: o, query: p } : d;
      }
      function m(e = {}) {
        const {
            navigator: n = c,
            read: t = !1,
            source: o,
            copiedDuring: i = 1500,
            legacy: l = !1,
          } = e,
          d = v(() => n && "clipboard" in n),
          f = p("clipboard-read"),
          m = p("clipboard-write"),
          y = (0, u.EW)(() => d.value || l),
          w = (0, r.KR)(""),
          h = (0, r.KR)(!1),
          A = (0, a.TO)(() => (h.value = !1), i);
        function b() {
          d.value && E(f.value)
            ? n.clipboard.readText().then((e) => {
                w.value = e;
              })
            : (w.value = g());
        }
        async function I(e = (0, a.BA)(o)) {
          y.value &&
            null != e &&
            (d.value && E(m.value) ? await n.clipboard.writeText(e) : B(e),
            (w.value = e),
            (h.value = !0),
            A.start());
        }
        function B(e) {
          const n = document.createElement("textarea");
          (n.value = null != e ? e : ""),
            (n.style.position = "absolute"),
            (n.style.opacity = "0"),
            document.body.appendChild(n),
            n.select(),
            document.execCommand("copy"),
            n.remove();
        }
        function g() {
          var e, n, t;
          return null !=
            (t =
              null ==
              (n =
                null == (e = null == document ? void 0 : document.getSelection)
                  ? void 0
                  : e.call(document))
                ? void 0
                : n.toString())
            ? t
            : "";
        }
        function E(e) {
          return "granted" === e || "prompt" === e;
        }
        return (
          y.value && t && s(["copy", "cut"], b),
          { isSupported: y, text: w, copied: h, copy: I }
        );
      }
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof global
        ? global
        : "undefined" !== typeof self && self;
      Number.POSITIVE_INFINITY;
      const y = {
        easeInSine: [0.12, 0, 0.39, 0],
        easeOutSine: [0.61, 1, 0.88, 1],
        easeInOutSine: [0.37, 0, 0.63, 1],
        easeInQuad: [0.11, 0, 0.5, 0],
        easeOutQuad: [0.5, 1, 0.89, 1],
        easeInOutQuad: [0.45, 0, 0.55, 1],
        easeInCubic: [0.32, 0, 0.67, 0],
        easeOutCubic: [0.33, 1, 0.68, 1],
        easeInOutCubic: [0.65, 0, 0.35, 1],
        easeInQuart: [0.5, 0, 0.75, 0],
        easeOutQuart: [0.25, 1, 0.5, 1],
        easeInOutQuart: [0.76, 0, 0.24, 1],
        easeInQuint: [0.64, 0, 0.78, 0],
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1],
        easeInExpo: [0.7, 0, 0.84, 0],
        easeOutExpo: [0.16, 1, 0.3, 1],
        easeInOutExpo: [0.87, 0, 0.13, 1],
        easeInCirc: [0.55, 0, 1, 0.45],
        easeOutCirc: [0, 0.55, 0.45, 1],
        easeInOutCirc: [0.85, 0, 0.15, 1],
        easeInBack: [0.36, 0, 0.66, -0.56],
        easeOutBack: [0.34, 1.56, 0.64, 1],
        easeInOutBack: [0.68, -0.6, 0.32, 1.6],
      };
      a.D_;
      function w([e, n, t, a]) {
        const u = (e, n) => 1 - 3 * n + 3 * e,
          r = (e, n) => 3 * n - 6 * e,
          o = (e) => 3 * e,
          i = (e, n, t) => ((u(n, t) * e + r(n, t)) * e + o(n)) * e,
          l = (e, n, t) => 3 * u(n, t) * e * e + 2 * r(n, t) * e + o(n),
          c = (n) => {
            let a = n;
            for (let u = 0; u < 4; ++u) {
              const u = l(a, e, t);
              if (0 === u) return a;
              const r = i(a, e, t) - n;
              a -= r / u;
            }
            return a;
          };
        return (u) => (e === n && t === a ? u : i(c(u), n, a));
      }
      function h(e, n, t) {
        return e + t * (n - e);
      }
      function A(e) {
        return ("number" === typeof e ? [e] : e) || [];
      }
      function b(e, n, t, u = {}) {
        var r, o;
        const i = (0, a.BA)(n),
          l = (0, a.BA)(t),
          c = A(i),
          s = A(l),
          d = null != (r = (0, a.BA)(u.duration)) ? r : 1e3,
          v = Date.now(),
          f = Date.now() + d,
          p =
            "function" === typeof u.transition
              ? u.transition
              : null != (o = (0, a.BA)(u.transition))
              ? o
              : a.D_,
          m = "function" === typeof p ? p : w(p);
        return new Promise((n) => {
          e.value = i;
          const t = () => {
            var a;
            if (null == (a = u.abort) ? void 0 : a.call(u)) return void n();
            const r = Date.now(),
              o = m((r - v) / d),
              i = A(e.value).map((e, n) => h(c[n], s[n], o));
            Array.isArray(e.value)
              ? (e.value = i.map((e, n) => {
                  var t, a;
                  return h(
                    null != (t = c[n]) ? t : 0,
                    null != (a = s[n]) ? a : 0,
                    o
                  );
                }))
              : "number" === typeof e.value && (e.value = i[0]),
              r < f ? requestAnimationFrame(t) : ((e.value = l), n());
          };
          t();
        });
      }
      function I(e, n = {}) {
        let t = 0;
        const o = () => {
            const n = (0, a.BA)(e);
            return "number" === typeof n ? n : n.map(a.BA);
          },
          i = (0, r.KR)(o());
        return (
          (0, u.wB)(
            o,
            async (e) => {
              var u, r;
              if ((0, a.BA)(n.disabled)) return;
              const o = ++t;
              if ((n.delay && (await (0, a.he)((0, a.BA)(n.delay))), o !== t))
                return;
              const l = Array.isArray(e) ? e.map(a.BA) : (0, a.BA)(e);
              null == (u = n.onStarted) || u.call(n),
                await b(i, i.value, l, {
                  ...n,
                  abort: () => {
                    var e;
                    return (
                      o !== t || (null == (e = n.abort) ? void 0 : e.call(n))
                    );
                  },
                }),
                null == (r = n.onFinished) || r.call(n);
            },
            { deep: !0 }
          ),
          (0, u.wB)(
            () => (0, a.BA)(n.disabled),
            (e) => {
              e && (t++, (i.value = o()));
            }
          ),
          (0, a.Uo)(() => {
            t++;
          }),
          (0, u.EW)(() => ((0, a.BA)(n.disabled) ? o() : i.value))
        );
      }
      function B(e = {}) {
        const {
            window: n = l,
            initialWidth: t = Number.POSITIVE_INFINITY,
            initialHeight: o = Number.POSITIVE_INFINITY,
            listenOrientation: i = !0,
            includeScrollbar: c = !0,
          } = e,
          d = (0, r.KR)(t),
          v = (0, r.KR)(o),
          p = () => {
            n &&
              (c
                ? ((d.value = n.innerWidth), (v.value = n.innerHeight))
                : ((d.value = n.document.documentElement.clientWidth),
                  (v.value = n.document.documentElement.clientHeight)));
          };
        if ((p(), (0, a.rd)(p), s("resize", p, { passive: !0 }), i)) {
          const e = f("(orientation: portrait)");
          (0, u.wB)(e, () => p());
        }
        return { width: d, height: v };
      }
    },
  },
]);
