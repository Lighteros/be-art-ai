(function () {
  var e = {
      2636: function (e, t, n) {
        "use strict";
        n.d(t, {
          KZ: function () {
            return o;
          },
          MX: function () {
            return s;
          },
          aZ: function () {
            return c;
          },
          iD: function () {
            return r;
          },
          m9: function () {
            return a;
          },
          ne: function () {
            return u;
          },
          ug: function () {
            return l;
          },
        });
        var i = n(36513);
        const r = (e) =>
            new i.A("/auth/mock-login").Post({
              data: { address: e },
              mockedUrl: "/dev/auth/mock-login",
            }),
          a = (e) =>
            new i.A("/auth/nonce").Get({ mockedUrl: "/dev/auth/nonce" }),
          s = (e) =>
            new i.A("/auth/verify:siws").Post({
              data: e,
              mockedUrl: "/dev/auth/verify:siws",
            }),
          o = (e) =>
            new i.A("/public/user/current/email").Put({
              data: e,
              mockedUrl: "/dev/public/user/current/email",
            }),
          l = (e) =>
            new i.A("/public/user/current").Get({
              mockedUrl: "/dev/public/user/current",
            }),
          u = (e) =>
            new i.A(`/public/referral/bind?parentCode=${e}`).Post({
              mockedUrl: "/dev/public/referral/bind",
            }),
          c = () =>
            new i.A("/public/point/activity/default").Get({
              mockedUrl: "/dev/public/point/activity/default",
            });
      },
      36513: function (e, t, n) {
        "use strict";
        n.d(t, {
          A: function () {
            return y;
          },
        });
        var i = n(69871),
          r = n(24598),
          a = n(18305),
          s = n(93831),
          o = n(39632),
          l = n(51219),
          u = n(74311),
          c = n(95700);
        let d = !1;
        const p = JSON.parse("false"),
          m = async (e) => {
            let {
                url: t,
                method: n,
                headers: m = {},
                data: f = {},
                mocked: h = p,
                mockedUrl: y = "",
                showMessage: g = !0,
                suffix: b = "/api",
              } = e,
              v = i.pc;
            if (
              ("/data" === b && (v = "https://beart.one"),
              (t = h ? y : v + b + t),
              (n = n ? n.toUpperCase() : void 0),
              t.includes("/send_message_to_lark"))
            ) {
              if (d) return;
            } else d = !1;
            "GET" === n && ((t = (0, r.Np)(t, f)), (f = void 0)),
              (m["Content-Type"] = "application/json");
            try {
              const e = await (0, a.Ay)(t, {
                method: n,
                headers: m,
                body: JSON.stringify(f),
              });
              switch (e.status) {
                case 200: {
                  let t = await e.body;
                  return Promise.resolve(t);
                }
                default: {
                  let t = {
                    code: e.status,
                    message: "接口请求失败",
                    date: new Date(),
                    path: window.location.href,
                    requestApi: e.url,
                  };
                  return (0, s.eP)({ text: (0, r.lK)(t) }), Promise.reject(e);
                }
              }
            } catch (T) { }
          };
        var f = m;
        class h {
          constructor(e) {
            this.url = e;
          }
          Get(e) {
            return f({ ...e, url: this.url, method: "get" });
          }
          Post(e) {
            return f({ ...e, url: this.url, method: "post" });
          }
          Put(e) {
            return f({ ...e, url: this.url, method: "Put" });
          }
          Delete(e) {
            return f({ ...e, url: this.url, method: "Delete" });
          }
        }
        var y = h;
      },
      93831: function (e, t, n) {
        "use strict";
        n.d(t, {
          BJ: function () {
            return s;
          },
          He: function () {
            return a;
          },
          eP: function () {
            return r;
          },
        });
        var i = n(36513);
        const r = (e) => {
            if (!e.text.includes("/send_message_to_lark"))
              return new i.A("/send_message_to_lark").Post({
                data: e,
                suffix: "/data",
                mockedUrl: "/test/data/send_message_to_lark",
              });
          },
          a = (e) =>
            new i.A("/userreferral").Get({
              data: e,
              mockedUrl: "/dev/userreferral",
            }),
          s = (e) =>
            new i.A("/userreferral/newuser").Post({
              mockedUrl: "/dev/userreferral/newuser",
              data: e,
            });
      },
      36793: function (e, t, n) {
        "use strict";
        n(44114);
        var i = n(45130),
          r = n(56768);
        function a(e, t, n, i, a, s) {
          const o = (0, r.g2)("CursorFollower"),
            l = (0, r.g2)("router-view");
          return (
            (0, r.uX)(), (0, r.CE)(r.FK, null, [(0, r.bF)(o), (0, r.bF)(l)], 64)
          );
        }
        var s = n(24598),
          o = n(20720),
          l = n(24232);
        function u(e, t, n, i, a, s) {
          return (
            (0, r.uX)(),
            (0, r.CE)(
              "div",
              {
                class: (0, l.C4)({ pointer_container: !0, on_nav: a.bigger }),
                id: "cursor_pointer",
                ref: "pointer",
              },
              null,
              2
            )
          );
        }
        var c = {
            name: "CursorFollower",
            data() {
              return { bigger: !1, biggertimeout: null, radius: 5 };
            },
            mounted() {
              document.addEventListener("mousemove", this.handleMouseMove);
            },
            methods: {
              handleMouseMove(e) {
                const t = e.clientX,
                  n = e.clientY;
                this.$refs?.pointer?.style.setProperty(
                  "transform",
                  `translate(${t}px, ${n}px)`
                );
                let i = this;
                const r = [
                  ...document.getElementsByClassName("nav"),
                  ...document.getElementsByClassName("cursor_bigger"),
                ];
                for (var a = 0; a < r.length; a++)
                  r[a].addEventListener("mouseover", function (e) {
                    (i.bigger = !0), (i.radius = 15);
                  }),
                    r[a].addEventListener("mouseout", function (e) {
                      (i.bigger = !1), (i.radius = 5);
                    });
              },
              cursorFollowerBiggerSeconds(e) {
                this.biggertimeout && clearTimeout(this.biggertimeout),
                  (this.bigger = !0),
                  (this.biggertimeout = setTimeout(() => {
                    this.bigger = !1;
                  }, 1e3 * e));
              },
            },
          },
          d = n(71241);
        const p = (0, d.A)(c, [
          ["render", u],
          ["__scopeId", "data-v-ce7702e6"],
        ]);
        var m = p,
          f = {
            components: { CursorFollower: m },
            data() {
              return { isLoading: !0 };
            },
            mounted() {
              if (
                ((0, s.wQ)(),
                (0, s._l)(),
                "true" === localStorage.getItem("walletconnect"))
              ) {
                let e = window.walletConnection;
                e.setConfig(), e.watchers(), (0, o.M)(e.config);
              }
              setTimeout(() => {
                this.isLoading = !1;
              }, 2e3);
            },
            watch: {
              "$store.state": {
                deep: !0,
                handler: function (e) {
                  (0, s.xA)("store", e);
                },
              },
            },
          };
        const h = (0, d.A)(f, [["render", a]]);
        var y = h;
        const g = (e) => (
            (0, r.Qi)("data-v-f489a6c4"), (e = e()), (0, r.jt)(), e
          ),
          b = { class: "page_container" },
          v = g(() => (0, r.Lk)("div", { class: "header" }, null, -1)),
          T = { class: "mid_pic" },
          A = ["src"],
          w = g(() =>
            (0, r.Lk)(
              "div",
              { class: "text" },
              "To provide you with a better experience, please move to your computer and open this website",
              -1
            )
          ),
          C = g(() =>
            (0, r.Lk)(
              "div",
              { class: "text" },
              [
                (0, r.eW)(
                  " Meanwhile, if you have any questions that you would like to provide feedback on, "
                ),
                (0, r.Lk)(
                  "span",
                  { class: "blue" },
                  "you can enter our Discord"
                ),
                (0, r.eW)(" and we are always online "),
              ],
              -1
            )
          );
        function B(e, t, i, a, s, o) {
          return (
            (0, r.uX)(),
            (0, r.CE)("div", b, [
              v,
              (0, r.Lk)("div", T, [
                (0, r.Lk)("img", { src: n(52941), alt: "" }, null, 8, A),
              ]),
              w,
              C,
            ])
          );
        }
        var k = { name: "MobileIndex" };
        const R = (0, d.A)(k, [
          ["render", B],
          ["__scopeId", "data-v-f489a6c4"],
        ]);
        var N = R,
          E = n(81387),
          F = n(95700);
        const S = [
            {
              path: "/",
              name: "layout",
              redirect: "/Home",
              component: () =>
                Promise.all([
                  n.e(81),
                  n.e(675),
                  n.e(635),
                  n.e(683),
                  n.e(526),
                ]).then(n.bind(n, 16141)),
              meta: { title: "BeArt | Welcome" },
              children: [
                {
                  path: "/Home",
                  name: "Home",
                  component: () =>
                    Promise.all([n.e(81), n.e(864), n.e(73)]).then(
                      n.bind(n, 60323)
                    ),
                  meta: { title: "BeArt | Welcome" },
                },
                {
                  path: "/Purchase",
                  name: "Purchase",
                  component: () =>
                    Promise.all([n.e(864), n.e(436)]).then(n.bind(n, 68266)),
                  meta: { title: "BeArt | Purchase" },
                },
                {
                  path: "/AssetsToken",
                  name: "AssetsToken",
                  component: () =>
                    Promise.all([n.e(81), n.e(675), n.e(162), n.e(655)]).then(
                      n.bind(n, 23402)
                    ),
                  meta: { title: "BeArt | Purchase", parent: "Purchase" },
                },
                {
                  path: "/Disposal",
                  name: "Disposal",
                  component: () =>
                    Promise.all([n.e(81), n.e(675), n.e(162), n.e(992)]).then(
                      n.bind(n, 20120)
                    ),
                  meta: { title: "BeArt | Purchase", parent: "Purchase" },
                },
                {
                  path: "/Gallery",
                  name: "Gallery",
                  component: () => n.e(497).then(n.bind(n, 57497)),
                  meta: { title: "BeArt | Gallery", parent: "More" },
                },
                {
                  path: "/glory",
                  name: "glory",
                  component: () => n.e(693).then(n.bind(n, 90693)),
                  meta: { title: "BeArt | Our Glory", parent: "More" },
                },
              ],
            },
            {
              path: "/Pdf",
              name: "Pdf",
              component: () => n.e(777).then(n.bind(n, 93777)),
              meta: { title: "BeArt | pdf" },
            },
            {
              path: "/Leaderboard",
              name: "Leaderboard",
              component: () =>
                Promise.all([
                  n.e(81),
                  n.e(675),
                  n.e(635),
                  n.e(683),
                  n.e(368),
                ]).then(n.bind(n, 66787)),
              meta: { title: "BeArt | Leaderboard" },
              children: [
                {
                  path: "",
                  name: "InvitedUser",
                  component: () =>
                    Promise.all([n.e(81), n.e(675), n.e(722)]).then(
                      n.bind(n, 89149)
                    ),
                },
                {
                  path: "taskCenter",
                  name: "taskCenter",
                  component: () =>
                    Promise.all([n.e(81), n.e(675), n.e(635), n.e(508)]).then(
                      n.bind(n, 47431)
                    ),
                  meta: { parent: "Leaderboard" },
                },
              ],
            },
          ],
          M = (0, E.aE)({ history: (0, E.LA)("/"), routes: S });
        M.beforeEach(async (e, t, n) => {
          const i = localStorage.getItem("authToken");
          e.matched.some((e) => e.meta.requiresAuth) &&
            !i &&
            n({ name: "home" }),
            (document.title = e.meta.title || "BeArt Web3"),
            e.path.startsWith("/referral/") && e.params.code
              ? (await F.A.dispatch("handleReferral", e.params.code),
                n({ path: "/promotion" }))
              : (F.A.commit("SET_LOADING", !0), n());
        }),
          M.afterEach((e) => {
            window.scrollTo(0, 0),
              F.A.commit("changRouterPath", e.fullPath),
              setTimeout(() => {
                F.A.commit("SET_LOADING", !1);
              }, 2e3),
              "function" === typeof gtag &&
                gtag("config", "G-D8CMKW9MJE", {
                  page_path: e.fullPath,
                  page_title: e.meta.title || document.title,
                });
          });
        var L = M;
        const P = ["href", "target"];
        function x(e, t, n, i, a, s) {
          return (
            (0, r.uX)(),
            (0, r.CE)(
              "a",
              { href: n.href, target: n.target },
              [(0, r.RG)(e.$slots, "default")],
              8,
              P
            )
          );
        }
        var I = {
          name: "OuterLink",
          props: {
            href: { type: String, required: !0 },
            target: { type: String, default: "_blank" },
          },
        };
        const W = (0, d.A)(I, [["render", x]]);
        var z = W;
        const D = {
            viewBox: "0 0 64 64",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: "loader",
          },
          O = (0, r.Fv)(
            '<path pathLength="360" d="M 56.3752 2 H 7.6248 C 7.2797 2 6.9999 2.268 6.9999 2.5985 V 61.4015 C 6.9999 61.7321 7.2797 62 7.6248 62 H 56.3752 C 56.7203 62 57.0001 61.7321 57.0001 61.4015 V 2.5985 C 57.0001 2.268 56.7203 2 56.3752 2 Z"></path><path pathLength="360" d="M 55.7503 60.803 H 8.2497 V 3.1971 H 55.7503 V 60.803 Z"></path><path pathLength="360" d="M 29.7638 47.6092 C 29.4971 47.3997 29.1031 47.4368 28.8844 47.6925 C 28.6656 47.9481 28.7046 48.3253 28.9715 48.5348 L 32.8768 51.6023 C 32.9931 51.6936 33.1333 51.738 33.2727 51.738 C 33.4533 51.738 33.6328 51.6634 33.7562 51.519 C 33.975 51.2634 33.936 50.8862 33.6692 50.6767 L 29.7638 47.6092 Z"></path><path pathLength="360" d="M 42.3557 34.9046 C 38.4615 34.7664 36.9617 37.6749 36.7179 39.2213 L 35.8587 44.2341 C 35.8029 44.5604 36.0335 44.8681 36.374 44.9218 C 36.4084 44.9272 36.4424 44.9299 36.476 44.9299 C 36.7766 44.9299 37.0415 44.7214 37.0918 44.4281 L 37.9523 39.4076 C 37.9744 39.2673 38.544 35.9737 42.311 36.1007 C 42.6526 36.1124 42.9454 35.8544 42.9577 35.524 C 42.9702 35.1937 42.7006 34.9164 42.3557 34.9046 Z"></path><path pathLength="360" d="M 13.1528 55.5663 C 13.1528 55.8968 13.4326 56.1648 13.7777 56.1648 H 50.2223 C 50.5674 56.1648 50.8472 55.8968 50.8472 55.5663 V 8.4339 C 50.8472 8.1034 50.5674 7.8354 50.2223 7.8354 H 13.7777 C 13.4326 7.8354 13.1528 8.1034 13.1528 8.4339 V 55.5663 Z"></path><path pathLength="360" d="M 25.3121 26.5567 C 24.9717 27.4941 25.0042 28.8167 25.0634 29.5927 C 23.6244 29.8484 20.3838 31.0913 18.9478 37.0352 C 18.5089 37.5603 17.8746 38.1205 17.2053 38.7114 C 16.2598 39.546 15.2351 40.4515 14.4027 41.5332 V 20.5393 H 23.7222 C 23.7178 22.6817 24.1666 25.4398 25.3121 26.5567 Z"></path><path pathLength="360" d="M 49.5975 43.4819 C 48.3838 39.1715 46.3138 33.6788 43.4709 29.7736 C 42.6161 28.5995 40.7095 27.0268 39.6852 26.1818 L 39.6352 26.1405 C 39.4176 24.783 39.1158 22.5803 38.8461 20.5394 H 49.5976 V 43.4819 Z"></path><path pathLength="360" d="M 29.8161 45.151 C 29.0569 44.7516 28.3216 44.4344 27.6455 44.185 C 27.6488 44.0431 27.6397 43.8917 27.6478 43.7715 C 27.9248 39.7036 30.4491 36.2472 35.1502 33.4979 C 38.7221 31.4091 42.2682 30.5427 42.3036 30.5341 C 42.3563 30.5213 42.416 30.5119 42.4781 30.5037 C 42.6695 30.7681 42.8577 31.0407 43.0425 31.3217 C 42.1523 31.4917 39.6591 32.0721 37.0495 33.6188 C 34.2273 35.2912 30.7775 38.4334 29.9445 44.0105 C 29.9025 44.2924 29.8211 45.0524 29.8161 45.151 Z"></path><path pathLength="360" d="M 32.2021 33.6346 C 29.1519 33.8959 26.6218 32.5634 25.6481 31.4461 C 25.9518 30.3095 28.4436 28.4847 30.2282 27.4911 C 30.436 27.3755 30.5563 27.1556 30.5372 26.9261 L 30.4311 25.6487 C 30.5264 25.6565 30.622 25.6621 30.7181 25.6642 L 30.8857 25.6672 C 32.0645 25.6912 33.2094 25.302 34.1059 24.5658 L 34.112 24.5607 L 34.4024 32.5344 C 33.8302 32.8724 33.2863 33.2227 32.7728 33.5852 C 32.5227 33.6032 32.3068 33.6258 32.2021 33.6346 Z"></path><path pathLength="360" d="M 27.8056 17.9207 C 27.8041 17.9207 27.8025 17.9207 27.8012 17.9207 L 27.0155 17.9259 L 26.8123 15.4718 C 26.8174 15.4609 26.8238 15.4501 26.8282 15.4389 C 27.2218 15.0856 28.158 14.3463 29.1923 14.252 C 31.0985 14.0778 33.442 14.3386 33.8213 16.5565 L 34.0564 23.0299 L 33.2927 23.6566 C 32.6306 24.2004 31.7888 24.4889 30.9118 24.4703 L 30.7437 24.4673 C 29.7977 24.4473 28.8841 24.0555 28.2376 23.3933 C 27.9671 23.1152 27.748 22.7967 27.5871 22.4474 C 27.426 22.0961 27.3292 21.7272 27.2989 21.3494 L 27.1145 19.1223 L 27.8097 19.1178 C 28.1548 19.1154 28.4327 18.8457 28.4303 18.5152 C 28.4278 18.186 28.1487 17.9207 27.8056 17.9207 Z"></path><path pathLength="360" d="M 38.4358 26.5433 C 38.4589 26.6829 38.5326 26.8101 38.6443 26.9026 L 38.8697 27.0889 C 39.5266 27.6307 40.6931 28.5938 41.5811 29.4829 C 40.6409 29.7428 38.2545 30.4762 35.6283 31.8516 L 35.3161 23.281 C 35.316 23.2777 35.3158 23.2743 35.3157 23.271 L 35.0692 16.4785 C 35.0682 16.455 35.0659 16.4316 35.0621 16.4082 C 34.6703 13.9692 32.4875 12.7498 29.0741 13.0603 C 28.5659 13.1067 28.0885 13.255 27.6614 13.4468 C 28.321 12.6324 29.4568 11.8605 31.3984 11.8605 C 32.892 11.8605 34.2086 12.4323 35.3118 13.5599 C 36.3478 14.6187 36.9981 15.9821 37.1923 17.5023 C 37.5097 19.987 38.0932 24.4655 38.4358 26.5433 Z"></path><path pathLength="360" d="M 25.6994 17.1716 L 26.053 21.4425 C 26.094 21.9536 26.225 22.4539 26.4434 22.93 C 26.6613 23.403 26.9574 23.8335 27.3242 24.2106 C 27.833 24.7317 28.4641 25.128 29.1549 25.3746 L 29.2609 26.6526 C 28.8063 26.9219 27.959 27.4459 27.0978 28.0926 C 26.7982 28.3177 26.5261 28.5365 26.2766 28.7503 C 26.2677 27.9385 26.3477 27.0941 26.6128 26.699 C 26.7087 26.5561 26.7368 26.3807 26.6898 26.2168 C 26.6428 26.0528 26.5253 25.9159 26.3667 25.8398 C 25.2812 25.3198 24.639 20.7943 25.134 18.7283 C 25.2757 18.1366 25.4822 17.6126 25.6994 17.1716 Z"></path><path pathLength="360" d="M 14.4025 54.9677 V 43.9616 C 15.1297 42.1745 16.6798 40.8031 18.052 39.5917 C 18.5756 39.1296 19.0771 38.6852 19.5054 38.243 C 20.1455 38.2763 21.8243 38.4721 22.2856 39.611 C 22.526 40.696 22.9861 41.6387 23.6573 42.3985 C 23.7809 42.5383 23.9573 42.6104 24.1347 42.6104 C 24.2773 42.6104 24.4206 42.5639 24.5381 42.4688 C 24.8014 42.2553 24.8343 41.8776 24.6115 41.6252 C 22.2978 39.0062 23.8504 34.5445 23.8663 34.4997 C 23.9782 34.1872 23.8046 33.8471 23.4785 33.7397 C 23.1507 33.6321 22.7964 33.7986 22.6843 34.1111 C 22.6657 34.1631 22.2262 35.4024 22.1149 37.0253 C 22.0992 37.2529 22.0927 37.476 22.0916 37.6958 C 21.4663 37.3478 20.7678 37.1827 20.215 37.1057 C 21.266 32.9598 23.2109 31.5061 24.4867 30.9973 C 24.4164 31.2001 24.3769 31.3974 24.3692 31.5894 C 24.3639 31.7208 24.404 31.8501 24.4831 31.9575 C 25.0708 32.7551 26.1363 33.5207 27.4065 34.0584 C 28.2686 34.4232 29.5576 34.8194 31.1457 34.861 C 28.2499 37.3877 26.6257 40.39 26.4009 43.6936 C 26.3992 43.7195 26.3962 43.7461 26.3928 43.7729 C 25.1023 43.399 24.2167 43.2969 24.1252 43.2873 C 23.9888 43.2728 23.8487 43.3023 23.7304 43.3716 C 23.0495 43.7702 22.591 44.3922 22.4046 45.1703 C 22.2331 45.8868 22.3106 46.6885 22.6019 47.3807 C 22.0046 47.6438 21.3269 47.7784 20.7914 47.848 C 19.4939 45.6912 20.8219 44.6351 20.989 44.5146 C 21.2655 44.3207 21.3274 43.9492 21.1268 43.6822 C 20.9253 43.4139 20.5346 43.3533 20.2546 43.5462 C 19.4539 44.0983 18.406 45.6195 19.3656 47.7888 C 18.685 47.5329 17.6255 46.8145 17.8055 44.832 C 17.8836 43.9718 18.1884 43.3352 18.7117 42.9403 C 19.5815 42.2834 20.8198 42.451 20.8366 42.4537 C 21.1748 42.503 21.4952 42.2819 21.5494 41.9563 C 21.6037 41.6297 21.3713 41.3231 21.0306 41.2712 C 20.9582 41.2599 19.2558 41.0142 17.9494 41.9917 C 17.1375 42.5992 16.6703 43.5199 16.5605 44.7282 C 16.1991 48.7092 19.7376 49.1126 19.7732 49.116 C 19.7951 49.1182 22.2326 49.1079 23.7782 48.1211 C 23.8053 48.1039 24.4158 47.7528 24.4158 47.7528 C 24.5214 47.8841 24.6624 48.0532 24.8294 48.2438 L 22.3598 49.4874 C 22.1544 49.5908 22.0257 49.7949 22.0257 50.0171 V 51.8127 C 22.0257 52.1432 22.3054 52.4112 22.6505 52.4112 S 23.2754 52.1432 23.2754 51.8127 V 50.3786 L 25.6987 49.1582 C 26.021 49.4709 26.3894 49.7985 26.7963 50.1188 L 24.6627 50.7144 C 24.4768 50.7663 24.3269 50.8977 24.2559 51.0702 L 23.3968 53.1651 C 23.2704 53.4729 23.4286 53.8202 23.7498 53.9409 C 23.8248 53.9694 23.9023 53.9825 23.9782 53.9825 C 24.2277 53.9825 24.4632 53.8384 24.5599 53.6028 L 25.307 51.7814 L 28.0879 51.0053 C 28.5412 51.2713 29.0239 51.51 29.5341 51.6979 C 29.6079 51.7252 29.6836 51.738 29.7582 51.738 C 30.0092 51.738 30.246 51.592 30.3415 51.3542 C 30.4653 51.0457 30.3048 50.6994 29.9825 50.5808 C 27.1642 49.5423 25.2952 46.9394 25.2771 46.9138 C 25.1245 46.6979 24.8439 46.6013 24.5831 46.6746 L 23.7537 46.9082 C 23.5672 46.4465 23.5125 45.8992 23.623 45.4377 C 23.7168 45.046 23.9138 44.7341 24.21 44.508 C 25.267 44.6734 29.863 45.5842 33.2732 49.2905 C 33.3967 49.4247 33.569 49.4932 33.7423 49.4932 C 33.889 49.4932 34.0364 49.444 34.1551 49.3437 C 34.414 49.1251 34.439 48.747 34.2108 48.4989 C 33.9947 48.2641 33.7738 48.0421 33.5507 47.8278 L 38.211 47.0175 C 38.3595 47.0014 40.1672 46.8356 41.295 48.2161 C 41.4182 48.3671 41.6019 48.4458 41.7875 48.4458 C 41.9222 48.4458 42.0578 48.4043 42.1721 48.3186 C 42.4439 48.1148 42.4919 47.7386 42.2791 47.4784 C 40.6703 45.5094 38.1379 45.8184 38.0305 45.8327 C 38.0218 45.8339 38.0132 45.8353 38.0043 45.8368 L 32.3855 46.8136 C 31.945 46.4667 31.4998 46.1528 31.0557 45.8697 C 31.0618 45.5534 31.0651 45.1775 31.0836 44.9842 C 31.1138 44.6713 31.1524 44.3635 31.1997 44.0606 C 31.8329 40.0032 34.0061 36.8432 37.6695 34.6587 C 40.6334 32.8915 43.5195 32.4536 43.5682 32.4464 C 43.604 32.4413 43.663 32.4341 43.7302 32.4251 C 47.2229 38.3378 49.3982 46.7588 49.5976 49.5158 V 54.9673 H 14.4025 Z"></path><path pathLength="360" d="M 49.5975 9.0325 V 19.3422 H 38.689 C 38.5937 18.6105 38.5061 17.9301 38.4329 17.3569 C 38.2063 15.5828 37.4422 13.9868 36.2237 12.7413 C 34.8748 11.3624 33.2514 10.6633 31.3984 10.6633 C 27.3688 10.6633 25.8233 13.5309 25.556 15.0901 C 25.1526 15.5932 24.3175 16.7856 23.916 18.46 C 23.8568 18.7069 23.8106 19.0066 23.7778 19.3421 H 14.4025 V 9.0323 H 49.5975 Z"></path><path pathLength="360" d="M 30.2223 21.2875 C 30.5674 21.2875 30.8471 21.0195 30.8471 20.6889 V 18.92 L 31.9916 18.9675 C 32.3376 18.9833 32.628 18.7259 32.643 18.3956 C 32.658 18.0654 32.3907 17.786 32.0459 17.7717 L 30.2495 17.6969 C 30.077 17.6889 29.9133 17.7497 29.7902 17.8624 C 29.6671 17.9753 29.5976 18.1315 29.5976 18.2948 V 20.6889 C 29.5974 21.0195 29.8772 21.2875 30.2223 21.2875 Z"></path>',
            15
          ),
          G = [O];
        function V(e, t, n, i, a, s) {
          return (0, r.uX)(), (0, r.CE)("svg", D, G);
        }
        var J = { name: "LoadingData", props: ["isLoading"] };
        const K = (0, d.A)(J, [["render", V]]);
        var U = K,
          q = n(78225),
          j = n(85384);
        const _ = {
            en: {
              homeP: n(38799),
              navP: n(42622),
              gloryP: n(73459),
              gnftP: n(78131),
              promotionP: n(52319),
              worldviewP: n(54459),
              mineP: n(63471),
              MintNFT: n(7830),
            },
            de: {
              homeP: n(14375),
              navP: n(10294),
              gloryP: n(25435),
              gnftP: n(37163),
              promotionP: n(22455),
              worldviewP: n(72931),
              mineP: n(43527),
              MintNFT: n(17806),
            },
            fr: {
              homeP: n(51170),
              navP: n(3311),
              gloryP: n(89888),
              gnftP: n(62934),
              promotionP: n(7344),
              worldviewP: n(64380),
              mineP: n(23654),
              MintNFT: n(74013),
            },
            ja: {
              homeP: n(42661),
              navP: n(16788),
              gloryP: n(15573),
              gnftP: n(61433),
              promotionP: n(46553),
              worldviewP: n(62717),
              mineP: n(7181),
              MintNFT: n(96984),
            },
            zh: {
              homeP: n(62924),
              navP: n(9465),
              gloryP: n(82270),
              gnftP: n(80984),
              promotionP: n(67190),
              worldviewP: n(43226),
              mineP: n(55512),
              MintNFT: n(77579),
            },
          },
          Y = (0, j.hU)({
            legacy: !1,
            locale: "en",
            fallbackLocale: "en",
            messages: _,
          });
        var H = Y,
          Z = n(93831),
          Q = n(2636),
          $ = async () => {
            const { data: e } = await (0, Q.aZ)();
            F.A.commit("setActivityKey", e);
          },
          X = n(8092);
        n(4188);
        const ee = 60,
          te = 600,
          ne = new WeakMap(),
          ie = new IntersectionObserver((e) => {
            for (const t of e)
              if (t.isIntersecting) {
                const { animation: e, isDone: n } = ne.get(t.target);
                e && n() && e.play();
              }
          });
        var re = {
            mounted(e, t) {
              if (!t.value.start) return;
              const n = e.animate(
                [
                  { transform: `translateY(${ee}px)`, opacity: 0.5 },
                  { transform: "translateY(0)", opacity: 1 },
                ],
                { duration: te, ease: "ease-out", fill: "forwards" }
              );
              n.pause(),
                ne.set(e, { animation: n, isDone: t.value.isDone }),
                ie.observe(e);
            },
            unmounted(e) {
              ie.unobserve(e);
            },
          },
          ae = n(74311),
          se = n(52404),
          oe = n(57386),
          le = n(47693),
          ue = n(66886);
        const ce = { wallets: [new se.c(), new oe.d()], autoConnect: !0 };
        function de() {
          dataLayer.push(arguments);
        }
        (0, s._9)(),
          $(),
          (window.dataLayer = window.dataLayer || []),
          de("js", new Date()),
          de("config", "G-D8CMKW9MJE");
        const pe = (0, i.Ef)((0, s.Fr)() ? N : y);
        pe.use(H),
          pe.component("VueMasonry", q.Masonry),
          pe.use(X.A),
          pe.component("VueMasonryItem", q.MasonryItem),
          pe.use(F.A),
          pe.use(L),
          pe.use(le.A),
          pe.use(ue.A),
          pe.component("outer-link", z),
          pe.component("LoadingData", U),
          pe.use(ae.Ay, ce),
          pe.directive("slideIn", re),
          window.location.href.includes("localhost") ||
            (pe.config.errorHandler = function (e, t, n) {
              let i = {
                name: "捕获js异常",
                errObj: e.toString(),
                date: new Date(),
                path: window.location.href,
                info: n,
              };
              (0, Z.eP)({ text: (0, s.lK)(i) }).catch(() => {});
            }),
          pe.mount("#app");
      },
      95700: function (e, t, n) {
        "use strict";
        n.d(t, {
          A: function () {
            return T;
          },
        });
        var i = n(60782),
          r = n(48337),
          a = n.n(r),
          s = n(24598);
        const o = () => ({
            mask: !1,
            detailShareDialog: !1,
            bvcNFTdetailDialog: !1,
            activityIntroDialog: !1,
            depositeDialog: !1,
          }),
          l = {
            openDialog({ commit: e }, t) {
              e("openDialog", { dialogName: t });
            },
            closeDialog({ commit: e }) {
              e("closeDialog");
            },
          },
          u = {
            openDialog(e, { dialogName: t }) {
              (e.mask = !0), (e[t] = !0);
            },
            closeDialog(e) {
              for (let t in e) e[t] = !1;
            },
          };
        var c = { namespace: !0, actions: l, mutations: u, state: o };
        const d = () => ({ routerPath: window.location.pathname }),
          p = {
            changRouterPath({ commit: e }, t) {
              e("changRouterPath", t);
            },
          },
          m = {
            changRouterPath(e, t) {
              e.routerPath = t;
            },
          };
        var f = { namespace: !0, actions: p, mutations: m, state: d };
        const h = localStorage.getItem("address"),
          y = localStorage.getItem("balance"),
          g = localStorage.getItem("token"),
          b = localStorage.getItem("userInfo"),
          v = localStorage.getItem("parentCode");
        var T = (0, i.y$)({
          modules: { dialog: c, baseInfo: f },
          state: {
            web3: null,
            address: h ? JSON.parse(h) : null,
            balance: y ? JSON.parse(y) : null,
            token: g || null,
            userInfo: b ? JSON.parse(b) : null,
            isConnected: !1,
            isLoading: !1,
            referredBy: null,
            invitedUsersCount: 0,
            audioFiles: [n(87281), n(11091), n(16522)],
            currentSongIndex: 0,
            isPlaying: !1,
            activityKey: "",
            parentCode: v || "",
          },
          mutations: {
            setParentCode(e, t) {
              (e.parentCode = t), localStorage.setItem("parentCode", t);
            },
            removeParentCode(e) {
              (e.parentCode = ""), localStorage.removeItem("parentCode");
            },
            setActivityKey(e, t) {
              e.activityKey = t;
            },
            setAddress(e, t) {
              (e.address = t),
                localStorage.setItem("address", JSON.stringify(t));
            },
            setBalance(e, t) {
              (e.balance = t), localStorage.setItem("balance", (0, s.lK)(t));
            },
            clearAddress(e) {
              (e.address = null), localStorage.removeItem("address");
            },
            clearBalance(e) {
              (e.balance = null), localStorage.removeItem("balance");
            },
            setToken(e, t) {
              (e.token = t), localStorage.setItem("token", t);
            },
            removeToken(e) {
              (e.token = null), localStorage.removeItem("token");
            },
            setUserInfo(e, t) {
              (e.userInfo = t),
                localStorage.setItem("userInfo", JSON.stringify(t));
            },
            removeUserInfo(e) {
              (e.userInfo = null), localStorage.removeItem("userInfo");
            },
            setWeb3(e, t) {
              e.web3 = t;
            },
            setConnected(e, t) {
              e.isConnected = t;
            },
            setPlayingState(e, t) {
              e.isPlaying = t;
            },
            setCurrentSongIndex(e, t) {
              e.currentSongIndex = t;
            },
            SET_LOADING(e, t) {
              e.isLoading = t;
            },
            updateUserInfo(e, t) {
              e.userInfo = t;
            },
            setUsername(e, t) {
              e.userInfo.username = t;
            },
            setEmailA(e, t) {
              e.userInfo.EmailA = t;
            },
            setMyWords(e, t) {
              e.userInfo.mywords = t;
            },
            setAvatar(e, t) {
              e.userInfo.avatar = t;
            },
            SET_REFERRED_BY(e, t) {
              console.log("Setting referral code in mutations:", t),
                (e.referredBy = t);
            },
            updateInvitedUsersCount(e, t) {
              e.invitedUsersCount = t;
            },
          },
          actions: {
            async connectWallet({ commit: e }) {
              if ("undefined" !== typeof window.ethereum) {
                const n = window.ethereum,
                  i = new (a())(n);
                e("setWeb3", i);
                try {
                  const t = await n.request({ method: "eth_requestAccounts" });
                  e("setAddress", t[0]), e("setConnected", !0);
                  const r = await i.eth.getBalance(t[0]);
                  e("setBalance", r);
                } catch (t) {
                  0;
                }
              } else
                console.log(
                  "No web3 provider detected. Please install MetaMask."
                );
            },
            async getBalance({ state: e }) {
              if (!e.isConnected || !e.address) return null;
              try {
                const t = e.web3,
                  n = await t.eth.getBalance(e.address);
                return n;
              } catch (t) {
                return null;
              }
            },
            async loadBalanceFromLocalStorage({ commit: e }) {
              const t = localStorage.getItem("balance");
              t && e("setBalance", JSON.parse(t));
            },
            handleReferral({ commit: e }, t) {
              console.log("Handling referral code:", t),
                e("SET_REFERRED_BY", t);
            },
          },
        });
      },
      24598: function (e, t, n) {
        "use strict";
        n.d(t, {
          Np: function () {
            return H;
          },
          HI: function () {
            return Q;
          },
          xA: function () {
            return q;
          },
          mS: function () {
            return le;
          },
          Uf: function () {
            return ue;
          },
          $T: function () {
            return ce;
          },
          CJ: function () {
            return de;
          },
          Fr: function () {
            return ee;
          },
          F8: function () {
            return oe;
          },
          DA: function () {
            return ae;
          },
          eJ: function () {
            return re;
          },
          h_: function () {
            return se;
          },
          EG: function () {
            return ie;
          },
          iG: function () {
            return ne;
          },
          PI: function () {
            return Z;
          },
          wZ: function () {
            return X;
          },
          lK: function () {
            return j;
          },
          _9: function () {
            return te;
          },
          wQ: function () {
            return Y;
          },
          _l: function () {
            return _;
          },
          BU: function () {
            return $;
          },
        });
        n(44114);
        var i = n(51219),
          r = n(91114),
          a = n(48337),
          s = n.n(a);
        const o = [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                { internalType: "address", name: "", type: "address" },
                { internalType: "address", name: "", type: "address" },
              ],
              name: "allowance",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "approve",
              outputs: [
                { internalType: "bool", name: "success", type: "bool" },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [{ internalType: "address", name: "", type: "address" }],
              name: "balanceOf",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "transfer",
              outputs: [
                { internalType: "bool", name: "success", type: "bool" },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [
                { internalType: "bool", name: "success", type: "bool" },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          l = [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_usdtToken",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                { internalType: "address", name: "target", type: "address" },
              ],
              name: "AddressEmptyCode",
              type: "error",
            },
            {
              inputs: [
                { internalType: "address", name: "account", type: "address" },
              ],
              name: "AddressInsufficientBalance",
              type: "error",
            },
            {
              inputs: [
                { internalType: "uint256", name: "amount", type: "uint256" },
              ],
              name: "deposit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            { inputs: [], name: "FailedInnerCall", type: "error" },
            {
              inputs: [
                { internalType: "address", name: "token", type: "address" },
              ],
              name: "SafeERC20FailedOperation",
              type: "error",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "allowance",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LogAllowance",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "pause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "Paused",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Refund",
              type: "event",
            },
            {
              inputs: [
                { internalType: "address", name: "user", type: "address" },
              ],
              name: "refundUser",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "newOwner", type: "address" },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unpause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "Unpaused",
              type: "event",
            },
            {
              inputs: [
                { internalType: "address", name: "recipient", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Withdraw",
              type: "event",
            },
            {
              inputs: [
                { internalType: "address", name: "user", type: "address" },
              ],
              name: "getDeposit",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "paused",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "usdtToken",
              outputs: [
                { internalType: "contract IERC20", name: "", type: "address" },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [{ internalType: "address", name: "", type: "address" }],
              name: "userDeposits",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
          ];
        class u {
          constructor() {
            (0, r.A)(this, "checkDeposit", async (e) => {
              try {
                const t = await this.depositContract.methods
                  .getDeposit(e)
                  .call();
                return t;
              } catch (t) {
                return Promise.reject(t);
              }
            }),
              (0, r.A)(this, "recharge", async (e, t) => {
                (this.depositContract = new this.web3.eth.Contract(
                  this.depositAbi,
                  this.depositContractAddress
                )),
                  (this.usdtContract = new this.web3.eth.Contract(
                    this.usdtAbi,
                    this.usdtTokenAddress
                  ));
                const n = e * 10 ** 6;
                return (
                  await this.usdtContract.methods
                    .approve(this.depositContractAddress, n)
                    .send({ from: t }),
                  await this.depositContract.methods
                    .deposit(n)
                    .send({ from: t }),
                  await this.checkDeposit(t)
                );
              }),
              (this.depositContractAddress =
                "0x2014eAF6C040fcEa42aff6784F5AFD2546b01b2F"),
              (this.usdtTokenAddress =
                "0x0C95fD9Df7ad2cCf586A04315266b8Db3C345eE9"),
              (this.depositAbi = l),
              (this.usdtAbi = o),
              (this.web3 = new (s())(window.ethereum));
          }
        }
        var c = u,
          d = n(58437),
          p = n(37997),
          m = n(19250),
          f = n(95046),
          h = n(20720),
          y = n(71419),
          g = n(31831),
          b = n(62436),
          v = n(92479),
          T = n(1043),
          A = n(72422);
        const w = "3a234c18909fd976641bcc6f18c13d14",
          C = {
            name: "BeArt Web3",
            description:
              "BeArt, originating from the fields of archaeology and cultural heritage restoration, is a global leader in the Web3 domain, specializing in blockchain certification and multidimensional exhibition and sales services for physical art collections. We encompass a wide range of art types, including paintings, sculptures, decorative and applied arts, digital arts, and mixed media arts, focusing on works with significant collectible and aesthetic value. Innovatively, BeArt has established a genetic-level certification standard for art collections (GNFT) and developed advanced blockchain technology for original artwork verification, ensuring each piece uniqueness and orderly heritage",
            url: "https://beart.one",
            icons: [
              "https://be-art.myfilebase.com/ipfs/QmeVvBD3wG83pyJuGVKW1U3UYBaPtxj8x71nmkJf3wq18y",
            ],
          },
          B = "0x8ddc46b9847F22927679f965e8dC5Fc473Ac37aB",
          k =
            ((0, d.Z)({
              chains: [T.r, A.G],
              transports: { [T.r.id]: (0, p.L)(), [A.G.id]: (0, p.L)() },
            }),
            [
              {
                inputs: [],
                stateMutability: "nonpayable",
                type: "constructor",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "approved",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                  },
                ],
                name: "Approval",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                  {
                    indexed: !1,
                    internalType: "bool",
                    name: "approved",
                    type: "bool",
                  },
                ],
                name: "ApprovalForAll",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                  },
                ],
                name: "OwnershipTransferred",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                  },
                ],
                name: "Transfer",
                type: "event",
              },
              {
                inputs: [],
                name: "COMMISSION_PERCENTAGE",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "MAX_MINTS_PER_ADDRESS",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "MAX_SUPPLY",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "MAX_USER_SUPPLY",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "MINT_PRICE",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address[]",
                    name: "accounts",
                    type: "address[]",
                  },
                ],
                name: "addToWhitelistBatch",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "to", type: "address" },
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                ],
                name: "approve",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "owner", type: "address" },
                ],
                name: "balanceOf",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "baseExtension",
                outputs: [{ internalType: "string", name: "", type: "string" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "contractURI",
                outputs: [{ internalType: "string", name: "", type: "string" }],
                stateMutability: "pure",
                type: "function",
              },
              {
                inputs: [],
                name: "disableMinting",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [],
                name: "enableMinting",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                ],
                name: "getApproved",
                outputs: [
                  { internalType: "address", name: "", type: "address" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "addr", type: "address" },
                ],
                name: "getMintsPerAddress",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "owner", type: "address" },
                  {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                ],
                name: "isApprovedForAll",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "account", type: "address" },
                ],
                name: "isWhitelisted",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "mintEnabled",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "name",
                outputs: [{ internalType: "string", name: "", type: "string" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "owner",
                outputs: [
                  { internalType: "address", name: "", type: "address" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                ],
                name: "ownerOf",
                outputs: [
                  { internalType: "address", name: "", type: "address" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "account", type: "address" },
                ],
                name: "removeFromWhitelist",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "salePrice",
                    type: "uint256",
                  },
                ],
                name: "royaltyInfo",
                outputs: [
                  { internalType: "address", name: "", type: "address" },
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "to", type: "address" },
                ],
                name: "safeMint",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "to", type: "address" },
                  {
                    internalType: "uint256",
                    name: "numTokens",
                    type: "uint256",
                  },
                ],
                name: "safeMintCreator",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "from", type: "address" },
                  { internalType: "address", name: "to", type: "address" },
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                ],
                name: "safeTransferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "from", type: "address" },
                  { internalType: "address", name: "to", type: "address" },
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                  { internalType: "bytes", name: "data", type: "bytes" },
                ],
                name: "safeTransferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                  { internalType: "bool", name: "approved", type: "bool" },
                ],
                name: "setApprovalForAll",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "string",
                    name: "_newBaseExtension",
                    type: "string",
                  },
                ],
                name: "setBaseExtension",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                  {
                    internalType: "string",
                    name: "metadataURI",
                    type: "string",
                  },
                ],
                name: "setTokenMetadataURI",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "string",
                    name: "newbaseURI",
                    type: "string",
                  },
                ],
                name: "setbaseURI",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4",
                  },
                ],
                name: "supportsInterface",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "symbol",
                outputs: [{ internalType: "string", name: "", type: "string" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "index", type: "uint256" },
                ],
                name: "tokenByIndex",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "owner", type: "address" },
                  { internalType: "uint256", name: "index", type: "uint256" },
                ],
                name: "tokenOfOwnerByIndex",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                ],
                name: "tokenURI",
                outputs: [{ internalType: "string", name: "", type: "string" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "totalSupply",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "from", type: "address" },
                  { internalType: "address", name: "to", type: "address" },
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                ],
                name: "transferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                  },
                ],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [],
                name: "withdraw",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
            ]);
        var R = n(55623),
          N = n(60057),
          E = n(47509);
        const F = async (e, t) =>
            await (0, R.J)(e, {
              abi: k,
              address: B,
              args: [t],
              functionName: "isWhitelisted",
              account: t,
            }),
          S = async (e, t) => {
            let n = await (0, N.E)(e, {
              abi: k,
              address: B,
              args: [t],
              functionName: "safeMint",
              value: (0, E.g)("0.18312"),
            });
            return n;
          };
        var M = n(27101),
          L = n(95700),
          P = n(2636),
          x = n(93831),
          I = n(27691);
        class W {
          constructor() {
            (this.config = null),
              (this.modal = null),
              (this.account = ""),
              (this.balance = {}),
              (this.isConnected = !1);
          }
          async setConfig() {
            this.config = (0, d.Z)({
              chains: [T.r, A.G],
              connectors: [
                (0, M.u)({
                  projectId: w,
                  metadata: C,
                  methods: ["personal_sign"],
                }),
              ],
              transports: { [T.r.id]: (0, p.L)(), [A.G.id]: (0, p.L)() },
            });
          }
          async updateStateAfterSetconfig() {
            (this.account = (0, m.s)(this.config)),
              (this.balance = await (0, f.r)(this.config, {
                address: this.account.address,
              }));
          }
          storageAfterSetconfig() {
            L.A.commit("setAddress", this.account.address),
              L.A.commit("setBalance", this.balance);
          }
          clearStorage() {
            L.A.commit("clearAddress"), L.A.commit("clearBalance");
          }
          async connectWallet() {
            this.setConfig(), this.watchers(), (0, h.M)(this.config);
            let e = await (0, I.Pg)({
              wagmiConfig: this.config,
              projectId: w,
              enableAnalytics: !0,
            });
            await e.open();
          }
          disconnectWallet() {
            (0, y.Z)(this.config);
          }
          async watchers() {
            let e = this;
            console.log("-1111"),
              (0, g.F)(this.config, {
                async onChange(t) {
                  if ((console.log("data.address", t.address), t.address)) {
                    if (
                      ((0, x.He)({ address: t.address }).then(async (n) => {
                        n.data.InviteCode
                          ? (console.log("邀请码存在"),
                            (e.isConnected = !0),
                            localStorage.setItem("walletconnect", "true"),
                            await e.updateStateAfterSetconfig(),
                            e.storageAfterSetconfig())
                          : ("User not found." === n.data.message ||
                              console.log("邀请码不存在"),
                            (0, x.BJ)({ Address: t.address, InviteCode: X(6) })
                              .then(async () => {
                                (e.isConnected = !0),
                                  localStorage.setItem("walletconnect", "true"),
                                  await e.updateStateAfterSetconfig(),
                                  e.storageAfterSetconfig();
                              })
                              .catch((e) => {
                                console.log(e);
                              }));
                      }),
                      console.log("-1112"),
                      !L.A.state.token)
                    )
                      try {
                        const e = await (0, P.iD)(t.address);
                        L.A.commit("setToken", e.data.token);
                      } catch (n) {
                        console.log("error", n);
                      }
                  } else
                    (e.isConnected = !1),
                      localStorage.setItem("walletconnect", "false"),
                      e.clearStorage(),
                      L.A.commit("removeToken");
                },
              }),
              (0, b.b)(this.config, {
                onChange(e) {
                  console.log("Connections changed!", e);
                },
              });
          }
          async transaction() {
            return await (0, v.v)(this.config, {
              to: "0xcAc143305eF50d8b2a51E9854077b4D888767404",
              value: (0, E.g)("0.18312"),
            });
          }
        }
        (W.prototype.isInWhitelist = async function () {
          return await F(this.config, this.account.address);
        }),
          (W.prototype.safeMint = function () {
            return S(this.config, this.account.address);
          });
        var z = W,
          D = n(69871),
          O = n(1576),
          G = n.n(O),
          V = n(9048),
          J = n.n(V),
          K = n(36121),
          U = n.n(K);
        G().extend(U()), G().extend(J()), G().tz.guess();
        const q = (e, t) => {
            globalThis.__debug || (globalThis.__debug = {}),
              (globalThis.__debug[e] = t);
          },
          j = (e) => {
            const t = (e, t) => ("bigint" === typeof t ? t.toString() : t);
            return JSON.stringify(e, t);
          },
          _ = () => {
            globalThis.walletConnection ||
              (globalThis.walletConnection = new z());
          },
          Y = () => {
            globalThis.wallet || (globalThis.Wallet = new c());
          },
          H = (e, t) => {
            let n = [];
            return (
              Object.keys(t).forEach((e) => {
                if (t[e]) return n.push(e + "=" + t[e]);
              }),
              (e = 0 === n.length ? e : (e += "?" + n.join("&"))),
              e
            );
          },
          Z = (e) => parseFloat(e) / D.$L + "rem",
          Q = (e) => {
            navigator.clipboard
              ? (navigator.clipboard.writeText(e),
                (0, i.nk)({
                  message: "copy successfully",
                  type: "success",
                  customClass: "messageIndex",
                  duration: 2e3,
                }))
              : alert("浏览器版本过低，不能复制");
          },
          $ = (e, t = 0, n = 0) => {
            if (!e) return "--";
            const i = e.substring(0, t),
              r = e.substring(e.length - n);
            return `${i}...${r}`;
          },
          X = (e) => {
            var t = [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
            ];
            let n = "";
            for (var i = 0; i < e; i++) n += t[Math.floor(36 * Math.random())];
            return n;
          },
          ee = () =>
            navigator.userAgent.match(
              /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            ),
          te = (e = D.nb) => {
            const t = D.$L;
            function n() {
              const n =
                document.documentElement.clientWidth / (ee() ? D.Qu : e);
              document.documentElement.style.fontSize =
                t * Math.min(n, 2) + "px";
            }
            n(),
              (window.onresize = function () {
                n();
              });
          },
          ne = () => {
            window.open("https://twitter.com/BeArtAI_ETH");
          },
          ie = () => {
            window.open("https://t.me/BeArtAI_ETH");
          },
          re = () => {
            window.open("https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000");
          },
          ae = () => {
            window.open("https://discord.gg/tuY4dt6HwF");
          },
          se = () => {
            window.open("https://dexscreener.com/ethereum/0x0123456789");
          };
        function oe(e, t) {
          return e * Math.pow(10, t);
        }
        function le(e, t, n = !1) {
          const i = e / Math.pow(10, t);
          return n ? i : ue(i);
        }
        const ue = (e) =>
          new Intl.NumberFormat("en-US", { maximumFractionDigits: 10 }).format(
            e
          );
        function ce(e, t = 4, n = ",") {
          let i = "",
            r = e.toString().split("."),
            a = r[0],
            s = r[1] ? "." + r[1] : "";
          while (a.length > t)
            (i = n + a.slice(-t) + i), (a = a.slice(0, a.length - t));
          return a && (i = a + i), i + s;
        }
        function de(e) {
          return G()(e).format("DD/MM/YY hh:mm:ss");
        }
      },
      69871: function (e, t, n) {
        "use strict";
        n.d(t, {
          $L: function () {
            return a;
          },
          Qu: function () {
            return o;
          },
          my: function () {
            return u;
          },
          nb: function () {
            return s;
          },
          pc: function () {
            return r;
          },
        });
        const i = JSON.parse("false"),
          r = i
            ? "https://sinaearts.vip"
            : location.origin || "https://beart.one",
          a = 37.5,
          s = 1920,
          o = 375,
          l = Math.floor(6 * Math.random()),
          u = n(94581)(`./avatar${l}.svg`);
      },
      39632: function (e, t, n) {
        "use strict";
        n(44114);
        let i,
          r = [];
        t.A = () => {
          const e = (e) => {
              i = e;
            },
            t = () => i?.(),
            n = (e) => {
              r.push(e);
            },
            a = () => {
              r.length &&
                setTimeout(() => {
                  location.reload(), (r = []);
                }, 500);
            };
          return { setWallet: e, open: t, setRetry: n, handleRetry: a };
        };
      },
      94581: function (e, t, n) {
        var i = {
          "./avatar0.svg": 69701,
          "./avatar1.svg": 72452,
          "./avatar2.svg": 43255,
          "./avatar3.svg": 37926,
          "./avatar4.svg": 7337,
          "./avatar5.svg": 98328,
        };
        function r(e) {
          var t = a(e);
          return n(t);
        }
        function a(e) {
          if (!n.o(i, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return i[e];
        }
        (r.keys = function () {
          return Object.keys(i);
        }),
          (r.resolve = a),
          (e.exports = r),
          (r.id = 94581);
      },
      52941: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/mobile_pic.358dd776.svg";
      },
      69701: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/avatar0.a37f124b.svg";
      },
      72452: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/avatar1.b92fdbf8.svg";
      },
      43255: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/avatar2.5063ed7d.svg";
      },
      37926: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/avatar3.0b2aec50.svg";
      },
      7337: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/avatar4.43b074f3.svg";
      },
      98328: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/avatar5.45e28f39.svg";
      },
      16522: function (e, t, n) {
        "use strict";
        e.exports = n.p + "media/A Long Walk.ad291efb.mp3";
      },
      87281: function (e, t, n) {
        "use strict";
        e.exports = n.p + "media/Ancestral Spirits.2d942c5f.mp3";
      },
      11091: function (e, t, n) {
        "use strict";
        e.exports = n.p + "media/Jahzza-TheLake.4a2f497e.mp3";
      },
      47790: function () {},
      37163: function (e) {
        "use strict";
        e.exports = {};
      },
      25435: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"pageTitle":"BEART | Mine","welcomeMessage":"Nach fünf Jahren unermüdlichen Einsatzes hat BEART endlich sein offizielles Debüt gefeiert. \\n\\nIn diesem entscheidenden Moment möchten wir jedem danken, der uns geholfen und unterstützt hat und auch in Zukunft mit uns gehen wird. \\n\\nJede Person, die zu diesem Projekt beigetragen hat, wird für immer auf unserer Ruhmeswand verewigt, die Seite an Seite mit BEART Bestand haben wird. \\n\\nWir freuen uns darauf, mehr Namen an dieser Wand zu sehen, besonders auf Ihren.","clickableMessage":"Gespannt auf die Zukunft!"}'
        );
      },
      14375: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"essenceOfHumanity":"Globale Handelsplattform für die Ausgabe und den Handel von RWA- & NFT-Vermögenswerten hochwertiger Kunstwerke","beArtWeb3":"BeArt RWA","unlockPowerOfNFT":"Verbindung der realen und kryptografischen Welten","beArtInfo1":"BeArt bringt mehrere technologische Innovationen. Mit dem CATALOGUE-System und den ERC721g-Standards prägt BeArt RWA-Kollektionen und ist damit das erste globale Projekt, das eine 1:1-Zuordnung von physischen Vermögenswerten zu Blockchain-Vermögenswerten erreicht.","beArtInfo2":"Wir laden Sie ein, BeArt als Ausgabe- und Handelsplattform für RWA-Kunstsammlerstücke in Betracht zu ziehen, sich in verschiedenen Szenarien auf der Plattform zu engagieren, um außergewöhnlich hohe Renditen zu erzielen.","beArtInfo3":"Zusätzlich erhalten Inhaber des Genesis NFT (BVC) kontinuierlich Gewinnbeteiligungen und Token-Belohnungen aus verschiedenen Vermögensausgaben auf der BeArt-Plattform.","uniqueBVC":"dem BeArt Visionary Club beizutreten?","gnftSignificance":"BeArt RWA-Kollektion","preservingCivilization":"Revolutionäre Kunstkollektion","preservingCivilizationDesc":"Entdecken Sie BeArt RWA, eine bahnbrechende Technologie basierend auf dem ERC721g-Standard, die Ihr Kunstinvestitionserlebnis neu definiert. Jedes Stück ist eine einzigartige Präsenz auf der Blockchain, präzise abgebildet durch modernste Technologie, die die Einzigartigkeit und Unersetzlichkeit jedes Kunstwerks garantiert.","combiningScienceArt":"Der zukünftige Standard der Kunstauthentifizierung","combiningScienceArtDesc":"Mit dem Tianlu-Zertifizierungssystem und der Genetic NFT-Technologie bietet BeArt soliden Schutz für jede Investition. Von 3D-digitalen optischen Zwillingen bis zu zerstörungsfreien Materialtests verwenden wir fortschrittliche Technologie, um die Echtheit und Qualität der Kunstwerke zu gewährleisten und Kunstsammlern ein vertrauensvolles Investieren zu ermöglichen.","decentralizingTrust":"Öffnung des Marktes für hochwertige Kunst","decentralizingTrustDesc":"Nicht länger begrenzt durch die hohen Barrieren des traditionellen Kunstmarktes, macht BeArt RWA es jedem möglich, in hochwertige Kunstwerke zu investieren. Mit vereinfachten Prozessen und transparenten Daten machen wir den Kauf und Handel von Kunstwerken zugänglicher und einfacher als je zuvor.","experiencingJoy":"Hochattraktive Investitionsrenditen","experiencingJoyDesc":"Ergreifen Sie die Gelegenheit, in die Kunstmeisterwerke der Zukunft zu investieren. ART RWA bietet nicht nur ein innovatives Kunstsammelerlebnis, sondern zeigt auch potenzielle jährliche Renditen von 50% bis 100% auf. Da sich die Kunst- und Kryptomärkte vereinen, stehen ART RWA-Investoren an der Spitze eines aufstrebenden Marktes.","partTitleLine1":"Treten Sie dem Visionary Club bei","partTitleLine2":"BeArts exklusive Genesis NFT-Serie","part4Desc":"Entdecken Sie die limitierte Auflage von 9.999 NFTs, die gemeinsam von BeArt und Spitzenkünstlern geschaffen wurden. Jedes NFT ist nicht nur das Wesen der Kunst, sondern auch eine Brücke zur Investition.","part4lis1":"Governance und Gewinnbeteiligung: ","part4lisdesc1":"Ihr NFT steht für Governance- und Gewinnbeteiligungsrechte auf der BeArt-Plattform.","part4lis2":"Kontinuierliche Dividenden:  ","part4lisdesc2":"Besitzen Sie ein NFT, um dauerhafte Dividenden der Plattform zu genießen.","part4lis3":"Priorität und VIP-Behandlung: ","part4lisdesc3":"Zugang zu neuen RWA & NFT Airdrops, Prioritätskaufrechten und Transaktionsrabatten.","part4lis4":"Royalty Sharing: ","part4lisdesc4":"Teilen Sie die Einnahmen aus den Royalties aller neuen NFT-Serien.","activeButton":"Act Now","uniqueNftCatalogue":"9.999 EINZIGARTIGE NFT-SAMMLEROBJEKTE: KATALOG","purchaseAndRewards":"Kauf und Gewinne erzielen","roadmap":"Fahrplan","year2019":"Jahr 2019 ","year2019Content":"Projekt start ","year2021":"Jahr 2021 ","year2021Content":"KATALOGSYSTEM-REVOLUTION: Eine dreijährige Reise gipfelt in der erfolgreichen technischen Demonstration aus unserem GNFT-Labor.","year2022":"Jahr 2022 ","year2022Content":"BEART begibt sich auf den kommerziellen Weg von Version 1.0 zu 2.0 und umfasst die funktionale Entwicklung von Web- und App-Plattformen sowie die Fertigstellung des Konzeptnachweises und der Demo für Genetic NFT (GNFT). ","year2023":"Jahr 2023 ","year2023Content":"BEART Version 3.0 wird eingeführt und restrukturiert die vorherigen Versionenpläne vollständig. In der technologischen F&E erfolgt die Zusammenarbeit mit weltweit führenden Laboren und Tech-Teams, die Standardisierungsprozesse für GNFT etablieren und mehrere Patente sowie unveröffentlichte Papiere sichern. Die offizielle Veröffentlichung der GNFT-Kunstwerke markiert einen bedeutenden Meilenstein in der Verschmelzung von globaler Technologie und Kunst. Die Vorbereitungen für das Upgrade der BEART-Website auf 4.0 sind abgeschlossen und bereiten den Weg für agile Entwicklung.","year20241":"Jahr 2024.1 ","year20241Content":"BEART 4.0 wird als umfassende Plattform für die Präsentation und den Handel von GNFT-Kunstwerken vorgestellt, die physische Kunst vollständig mit der virtuellen Welt integriert. Exklusive BEART NFTs werden als einziges Ausweisdokument für die Plattformidentität herausgegeben und bieten prestigeträchtige Statussymbole und umfangreiche Vorteile. Auch die Funktionen Auction und Art.Space werden gestartet und bieten umfassende Anzeige- und weltweite Transaktionsservices für GNFT-Kunstwerke.","year20246":"Jahr 2024.6 ","year20246Content":"Die BEART App wird gestartet und ermöglicht jederzeit und überall Kunstgenuss, das Teilen, Kaufen und Verwalten von Kunstwerken. Zusätzliche Offline-Labore werden eingerichtet, um mehr Synergien mit Künstlern, Sammlern und Enthusiasten zu schaffen. Der BEART NFT Club wird offiziell gegründet und ist exklusiv für NFT-Inhaber, die dauerhafte Plattformdividenden belohnen.","year20251":"Jahr 2025.1 ","year20251Content":"Die Apple Vision Pro-Anwendung wird eingeführt, um globale Kunst- und Kulturerfahrungen nach Hause zu bringen. Die Plattform listet über 20.000 hochwertige Kunstsammlerstücke auf und veranstaltet Online- und Offline-Kunstauktionen sowie exklusive NFT Club Kunstsalons für Mitglieder.","timePasses":"Die Zeit vergeht, der Raum verschiebt sich. Zivilisationen werden weiterhin entdeckt.","updates":"Aktualisierungen","cooperation":"Kooperation"}'
        );
      },
      43527: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"profileDetails":"Profildetails","uploadButton":"Hochladen","socialConnectionsTitle":"Soziale Verbindungen","linkSocialAccounts":"Verknüpfen Sie soziale Konten, um Ihre Sammlung Freunden zu zeigen","connectButton":"Bald","twitterLabel":"Twitter","instagramLabel":"Instagram","walletAddress":"Wallet-Adresse","username":"Benutzername","emailAddress":"E-Mail-Adresse","wordsToOthers":"Worte an andere","saveButton":"Speichern","cancleButton":"Abbrechen","kycVerification":"KYC-Überprüfung","lastNameLabel":"Nachname:","firstNameLabel":"Vorname:","countryLabel":"Land:","selectCountry":"Ein Land auswählen","contactAddress":"Kontaktadresse:","uploadID":"Laden Sie Ihren Ausweis/Reisepass/Aufenthaltstitel hoch:","chooseFileButton":"Datei wählen","selfieWithID":"Laden Sie ein Foto von sich hoch, auf dem Sie Ihren Ausweis/Reisepass/Aufenthaltstitel halten:","termsAndConditions":"Geschäftsbedingungen.","consentLabel":"Ich stimme zu, BEART für die KYC- und Risikokontrolle zu autorisieren.","checkAndSubmitButton":"Überprüfen und absenden","cancelButton":"Abbrechen"}'
        );
      },
      17806: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"welcomeInfo":"Willkommen im BEART Visionary Club!","comingSoon":"Wir werden in Kürze eintreffen.","keyRules":"Die Schlüsselregeln: <br><br>1. Die Gesamtanzahl der NFTs ist auf 9999 begrenzt. <br><br>2. Nur Adressen, die in der Whitelist enthalten sind, haben das Recht zum Prägen, wobei jede Adresse auf das Prägen von 4 NFTs beschränkt ist. <br><br>3. Die Prägekosten sind auf 0.18312 ETH festgelegt. <br><br>4. Jedes NFT besitzt einen \\"Art Energy\\"-Wert, der seinen Anteil an Belohnungen bestimmt. <br><br>5. Bitte überprüfen Sie den unten stehenden Abschnitt, um festzustellen, ob Ihre Wallet-Adresse in der Whitelist enthalten ist.","whitelistCheck":"Whitelist-Überprüfung","inputPlaceholder":"Bitte fügen Sie Ihre Wallet-Adresse hier ein","checkButtonText":"ÜBERPRÜFEN","checkingMessage":"Überprüfung...","whitelistSuccess":"Ihre Adresse ist auf der Whitelist!","whitelistError":"Ihre Adresse ist nicht auf der Whitelist. Bitte erledigen Sie die Whitelist-Aufgaben in der Community.","mintButton":"NFT PRÄGEN","mintMessage":"{{ message }}","daysLabel":"T","hoursLabel":"S","minutesLabel":"M","secondsLabel":"S"}'
        );
      },
      10294: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"geneticNFT":"Genetische.NFT","worldview":"Weltanschauung","promotion":"Empfehle","glory":"Ruhm","MintNFT":"NFT Mint","connect":"Verbinden","mine":"Profil","mobileApp":"Mobile App","cookiePolicy":"Cookie-Richtlinie","AffiliaterLogin":"Affiliate-Anmeldung","termsOfUse":"Nutzungsbedingungen","transactionRules":"Transaktionsregeln","paymentPolicy":"Empfehle","footerText":"© BEART Web3. 2019-2024. Wir lieben unsere Nutzer","scanWithApp":"Mit BeArt App scannen","connectBy":"Verbinden mit","beartLogin":"Bitget Wallet","metamask":"Metamask","walletConnect":"Wallet Connect","gnftInnovation":"GNFT steht für eine bahnbrechende Innovation, die unsere scharfe Beobachtung der physischen Welt und tiefgründige Betrachtung der virtuellen Welt widerspiegelt.","quoteAuthor":"——BEART","showcaseMessage":"Wir freuen uns darauf, es Ihnen bei unserem nächsten Wiedersehen zu präsentieren."}'
        );
      },
      22455: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"referYourFriendsTitle":"Empfehle deine Freunde, teile die Kunst, erhalte Belohnungen.","referYourFriends":"Empfehle deine Freunde","shareYourReferral":"Teile deinen Empfehlungslink oder QR-Code mit Freunden und Kontakten in sozialen Medien. Lade sie ein, sich unserer Kunst-Reise anzuschließen und verdiene zusätzliche Belohnungen für deine Bemühungen.","gainTheRewards":"Belohnungen erhalten","earnCommission":"Verdiene bis zu 15% der Handelsgebühren deiner Freunde als Provision, jedes Mal, wenn sie eine Transaktion über deine Empfehlung durchführen.","getYourReferralLink":"HOL DIR DEINEN EMPFEHLUNGSLINK","viewReferralRules":"Empfehlungsregeln ansehen >","lucrativeCommissions":"Lukrative Provisionen","generateIncome":"Generiere bedeutende Einnahmen durch Kunstförderung und Verkäufe, mit einer Provisionsstruktur, die deine aktive Teilnahme und Erfolg auf dem Kunstmarkt belohnt.","exclusiveInsights":"Exklusive Einblicke und Zugang","stayAhead":"Bleibe in der Kunstwelt voraus mit frühen Einblicken in aufkommende Trends und exklusivem Zugang zu einzigartigen Kunstwerken, was deine Fähigkeit, informierte Verkaufsstrategien zu entwickeln, verbessert.","brandBuilding":"Markenaufbau und Netzwerk","expandNetwork":"Hebe dein berufliches Profil hervor und erweitere dein Netzwerk, indem du dich global mit Künstlern, Sammlern und Kunstbegeisterten verbindest und die Plattform von BEART nutzt, um eine starke Präsenz in der Kunstgemeinschaft zu etablieren.","auctionCommission":"1. Bis zu 80% Auktionsprovision, genieße eine 30%-Provisionsrate nach Genehmigung. Erfahre sofort mehr Details.","quickApplication":"2. Schnelle Bewerbung in drei Schritten: ","whyChoose":"3. Warum BEART Global Affiliate wählen? Weil...","rebateDetails":"4. Details zur Rückerstattung: Allgemeine Geschäftsbedingungen.","applyNow":"JETZT BEWERBEN","rewardsHub":"Belohnungszentrum","completeTasks":"Aufgaben erfüllen & Bonus gewinnen","welcomeRewards":"Willkommensbelohnungen","rewardClaimed":"Belohnung beansprucht!","okButton":"OK","getTheRewards":"Belohnungen erhalten","claim":"Prämie beanspruchen","done":"Erledigt","learnMore":"Mehr erfahren","applyFillSubmit":"Bewerben, Formular ausfüllen, Einreichen","because":"Weil...","termsAndConditions":"Geschäftsbedingungen","ReferralWelcome1":"Willkommen bei BEART! ","ConnecttheWallet":"Bitte verbinden Sie zuerst Ihre Wallet","ReferralWelcome2":" um Ihnen ein personalisiertes Erlebnis und Service zu bieten. "}'
        );
      },
      72931: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"artverseTitle":"Artverse: Zeitraum-Inseln.","activityCenter":"Aktivitätszentrum","userGuide":"Benutzerhandbuch","worldview":"Weltanschauung","artworksGNFT":"Kunstwerke (GNFT)","menuButton":"Menü","viewMore":"Mehr anzeigen"}'
        );
      },
      78131: function (e) {
        "use strict";
        e.exports = {};
      },
      73459: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"pageTitle":"BEART | Mine","welcomeMessage":"After five years of relentless effort, BEART has finally made its official debut. \\n\\nAt this pivotal moment, we want to express our profound gratitude to each and every one who has helped us, supported us, and will continue to walk with us in the future. \\n\\nEvery individual who has contributed to this project will forever be etched into our Glory Wall, standing the test of time alongside BEART. \\n\\nWe look forward to seeing more names on this wall, especially looking forward to seeing yours.","clickableMessage":"Excited for the future!"}'
        );
      },
      38799: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"essenceOfHumanity":"Global High-Value Artworks RWA Issuance and Trading Platform","beArtWeb3":"BeArt RWA","unlockPowerOfNFT":"Connecting the Real and Crypto Worlds","beArtInfo1":"BeArt brings multiple technological innovations. Utilizing the CATALOGUE system and ERC721g standards, BeArt casts RWA collections, making it the first global project to achieve a 1:1 mapping of physical assets to blockchain assets. ","beArtInfo2":"We invite you to consider BeArt as the issuance and trading platform for RWA art collectibles, engaging in various scenarios on the platform to achieve exceptionally high returns. ","beArtInfo3":"Additionally, holders of the Genesis NFT (BVC) will continuously receive profit-sharing returns and Token rewards from various asset issuances on the BeArt platform.","uniqueBVC":"Ready to Join BeArt Visionary Club?","gnftSignificance":"BeArt RWA Collection","preservingCivilization":"Revolutionary Art Collection","preservingCivilizationDesc":"Explore BeArt RWA, pioneering technology based on the ERC721g standard that redefines your art investment experience. Each piece is a unique presence on the blockchain, precisely mapped through cutting-edge technology, ensuring the uniqueness and irreplaceability of each artwork.","combiningScienceArt":"The Future Standard of Art Authentication","combiningScienceArtDesc":"Utilizing Tianlu certification system and Genetic NFT technology, BeArt provides solid security for every investment. From 3D digital optical twins to non-destructive material testing, we use advanced technology to ensure the authenticity and quality of artworks, allowing art collectors to invest with confidence.","decentralizingTrust":"Opening Up the High-Value Art Market","decentralizingTrustDesc":"No longer limited by the high barriers of the traditional art market, BeArt RWA makes it possible for everyone to participate in investing in high-value artworks. With simplified processes and transparent data, we make buying and trading artworks more accessible and easier than ever.","experiencingJoy":"Highly Attractive Investment Returns","experiencingJoyDesc":"Seize the opportunity to invest in the art masterpieces of the future. ART RWA not only offers an innovative art collection experience but also indicates potential annual returns of 50%-100%. As the art and crypto markets merge, ART RWA investors are at the forefront of an emerging market.","part4TitleLine1":"Join the Visionary Club","part4TitleLine2":"BeArt\'s Exclusive Genesis NFT Series","part4Desc":"Explore the limited edition of 9,999 NFTs co-created by BeArt and top artists. Each NFT is not only the essence of art but also a bridge to investment.","part4lis1":"Governance and Profit Sharing: ","part4lisdesc1":"Your NFT represents governance and profit-sharing rights on the BeArt platform.","part4lis2":"Continuous Dividends: ","part4lisdesc2":"Hold any NFT to enjoy perpetual dividends from the platform.","part4lis3":"Priority and VIP Treatment: ","part4lisdesc3":"Access to new RWA & NFT airdrops, priority purchasing rights, and transaction discounts.","part4lis4":"Royalty Sharing: ","part4lisdesc4":"Share in royalty income from all new NFT series.","activeButton":"Act Now","uniqueNftCatalogue":"9,999 UNIQUE NFT COLLECTIBLES: CATALOGUE","purchaseAndRewards":"Purchase and Gain Rewards","roadmap":"Roadmap","year2019":"Year 2019 ","year2019Content":"Project Start-up ","year2021":"Year 2021 ","year2021Content":"CATALOGUE SYSTEM REVOLUTION: A three-year journey culminates in the successful technical demonstration from our GNFT laboratory.","year2022":"Year 2022 ","year2022Content":"BEART ventures on a commercial path from version 1.0 to 2.0, encompassing functional development of web and app platforms while also finalizing the Genetic NFT (GNFT) concept proof and demo.","year2023":"Year 2023 ","year2023Content":"BEART version 3.0 launches, entirely restructuring previous version plans. In technological R&D, collaboration with top-tier global labs and tech teams has standardized GNFT sampling processes, securing multiple patents and unpublished papers. The official release of GNFT artworks marks a significant milestone in the fusion of global technology and art. Preparation for the BEART website\'s 4.0 upgrade is complete, setting the stage for agile development.","year20241":"Year 2024.1 ","year20241Content":"BEART 4.0 debuts as a comprehensive platform for showcasing and trading GNFT artworks, fully integrating physical art with the virtual world. Exclusive BEART NFTs are released as the sole credential for platform identity, offering prestigious status symbols and extensive benefits. Auction and Art.Space features are also launched, providing comprehensive display and global transaction services for GNFT artworks. ","year20246":"Year 2024.6 ","year20246Content":"The BEART App goes live, enabling art enjoyment, sharing, purchasing, and management anytime, anywhere. Additional offline labs are established, creating more synergies with artists, collectors, and enthusiasts. The BEART NFT Club is officially formed, exclusively for NFT holders, offering perpetual platform dividend rewards.","year20251":"Year 2025.1 ","year20251Content":"The Apple Vision Pro application is introduced, bringing global art and cultural experiences into homes. The platform lists over 20,000 high-value art collectibles, hosting online and offline art auctions, and exclusive NFT Club art salons for members.","timePasses":"Time Passes, space shifts. Civilization  continue to be discovered.","updates":"Updates","cooperation":"Cooperation"}'
        );
      },
      63471: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"profileDetails":"Profile details","uploadButton":"Upload","socialConnectionsTitle":"Social Connections","linkSocialAccounts":"Link social accounts to show your collection to friends","connectButton":"Soon","twitterLabel":"Twitter","instagramLabel":"Instagram","walletAddress":"Wallet Address","username":"Username","emailAddress":"Email Address","wordsToOthers":"Words to others","saveButton":"Save","cancleButton":"Cancel","kycVerification":"KYC Verification","lastNameLabel":"Last Name:","firstNameLabel":"First Name:","countryLabel":"Country:","selectCountry":"Select a country","contactAddress":"Contact Address:","uploadID":"Upload Your ID Card/Passport/Residence Permit:","chooseFileButton":"Choose File","selfieWithID":"Upload a photo of yourself holding your ID/Passport/Residence Permit:","termsAndConditions":"Terms and Conditions.","consentLabel":"I agree to authorize BEART for KYC and risk control review.","checkAndSubmitButton":"Check and Submit","cancelButton":"Cancel"}'
        );
      },
      7830: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"welcomeInfo":"Welcome to BEART Visionary Club!","comingSoon":"We will be arriving shortly.","keyRules":"The key rules: <br><br>1. The total supply of NFTs is capped at 9999. <br><br>2. Only addresses included in the whitelist have minting privileges, with each address limited to minting 4 NFTs. <br><br>3. The cost to mint is set at 0.18312 ETH. <br><br>4. Each NFT possesses an \\"Art Energy\\" value, which determines its share of rewards. <br><br>5. Please refer to the section below to verify if your wallet address is included in the whitelist.","whitelistCheck":"Whitelist check","inputPlaceholder":"Please paste your wallet address here","checkButtonText":"CHECK","checkingMessage":"Checking...","whitelistSuccess":"Your address is whitelisted!","whitelistError":"Your address is not whitelisted. Please complete the whitelist tasks in the community.","mintButton":"MINT NFT","mintMessage":"{{ message }}","daysLabel":"D","hoursLabel":"H","minutesLabel":"M","secondsLabel":"S"}'
        );
      },
      42622: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"geneticNFT":"Genetic.NFT","worldview":"Worldview","promotion":"Referral","glory":"Glory","connect":"Connect","MintNFT":"NFT Mint","mine":"Profile","mobileApp":"Mobile App","cookiePolicy":"Cookie Policy","AffiliaterLogin":"Affiliater Login","termsOfUse":"Terms of Use","transactionRules":"Transaction Rules","paymentPolicy":"Referral","footerText":"© BEART Web3. 2019-2024. We love our users","scanWithApp":"Scan with BeArt App","connectBy":"Connect by","beartLogin":"Bitget Wallet","metamask":"Metamask","walletConnect":"Wallet Connect","gnftInnovation":"GNFT represents a groundbreaking innovation, reflecting our keen observation of the physical world and profound contemplation of the virtual world.","quoteAuthor":"——BEART","showcaseMessage":"We look forward to showcasing it to you when we meet again."}'
        );
      },
      52319: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"referYourFriendsTitle":"Refer Your Friends, Share the Art, Gain the Rewards.","referYourFriends":"Refer Your Friends","shareYourReferral":"Share your referral link or QR code with friends and contacts on social media. Invite them to join our journey of art and earn additional rewards for your efforts.","gainTheRewards":"Gain the Rewards","earnCommission":"Earn up to 15% of your friend\'s trading fees as a commission every time they make a transaction through your referral.","getYourReferralLink":"GET YOUR REFERRAL LINK","viewReferralRules":"View the Referral Rules >","lucrativeCommissions":"Lucrative Commissions","generateIncome":"Generate significant income through art promotion and sales, with a commission structure that rewards your active participation and success in the art market.","exclusiveInsights":"Exclusive Insights and Access","stayAhead":"Stay ahead in the art world with early insights into emerging trends and exclusive access to unique artworks, enhancing your ability to make informed sales strategies.","brandBuilding":"Brand Building and Network","expandNetwork":"Elevate your professional profile and expand your network by connecting with artists, collectors, and enthusiasts globally, leveraging BEART\'s platform to establish a strong presence in the art community.","auctionCommission":"1. Up to 80% auction commission, enjoy a 30% commission rate upon approval. Learn more details immediately.","quickApplication":"2. Quick application in three steps: ","whyChoose":"3. Why choose BEART Global Affiliate? Because...","rebateDetails":"4. Details on rebate: Terms and Conditions.","applyNow":"APPLY NOW","rewardsHub":"Rewards Hub","completeTasks":"Complete tasks & win bonus","welcomeRewards":"Welcome Rewards","rewardClaimed":"Reward claimed!","okButton":"OK","getTheRewards":"Get the Rewards","claim":"Claim","done":"Done","learnMore":"Learn More","applyFillSubmit":"Apply, Fill Form, Submit","because":"Because...","termsAndConditions":"Terms and Conditions","ReferralWelcome1":"Welcome to BEART! ","ConnecttheWallet":"Please connect your wallet","ReferralWelcome2":"first to provide you with a personalized experience and service. "}'
        );
      },
      54459: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"artverseTitle":"Artverse: Time Space Islands.","activityCenter":"Activity Center","userGuide":"User Guide","worldview":"Worldview","artworksGNFT":"Artworks(GNFT)","menuButton":"Menu","viewMore":"View More"}'
        );
      },
      62934: function (e) {
        "use strict";
        e.exports = {};
      },
      89888: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"pageTitle":"BEART | Mine","welcomeMessage":"Après cinq ans d\'efforts acharnés, BEART a enfin fait ses débuts officiels. \\n\\nEn ce moment crucial, nous voulons exprimer notre profonde gratitude à chaque personne qui nous a aidés, soutenus et qui continuera à marcher avec nous à l\'avenir. \\n\\nChaque individu ayant contribué à ce projet sera à jamais gravé sur notre Mur de la Gloire, résistant à l\'épreuve du temps aux côtés de BEART. \\n\\nNous attendons avec impatience de voir plus de noms sur ce mur, en particulier le vôtre.","clickableMessage":"Excité pour l\'avenir!"}'
        );
      },
      51170: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"essenceOfHumanity":"Plateforme mondiale d\'émission et de négociation d\'actifs RWA & NFT pour les œuvres d\'art de haute valeur","beArtWeb3":"BeArt RWA","unlockPowerOfNFT":"Liaison entre le monde réel et le monde cryptographique","beArtInfo1":"BeArt apporte plusieurs innovations technologiques. Utilisant le système CATALOGUE et les normes ERC721g, BeArt frappe des collections RWA, ce qui en fait le premier projet mondial à réaliser une correspondance 1:1 entre les actifs physiques et les actifs blockchain.","beArtInfo2":"Nous vous invitons à considérer BeArt comme la plateforme d\'émission et de trading pour les objets de collection d\'art RWA, en vous engageant dans divers scénarios sur la plateforme pour obtenir des rendements exceptionnellement élevés.","beArtInfo3":"De plus, les détenteurs du NFT Genesis (BVC) recevront continuellement des retours sur partage des profits et des récompenses en Token provenant de diverses émissions d\'actifs sur la plateforme BeArt.","uniqueBVC":"Prêt à rejoindre le BeArt Visionary Club ?","gnftSignificance":"Collection BeArt RWA","preservingCivilization":"Collection d\'art révolutionnaire","preservingCivilizationDesc":"Découvrez BeArt RWA, une technologie de pointe basée sur la norme ERC721g qui redéfinit votre expérience d\'investissement artistique. Chaque pièce est une présence unique sur la blockchain, mappée avec précision grâce à une technologie de pointe, garantissant l\'unicité et l\'irremplaçabilité de chaque œuvre d\'art.","combiningScienceArt":"Le futur standard d\'authentification de l\'art","combiningScienceArtDesc":"Utilisant le système de certification Tianlu et la technologie Genetic NFT, BeArt offre une sécurité solide pour chaque investissement. Des jumeaux optiques numériques 3D aux tests de matériaux non destructifs, nous utilisons une technologie avancée pour assurer l\'authenticité et la qualité des œuvres d\'art, permettant aux collectionneurs d\'art d\'investir en toute confiance.","decentralizingTrust":"Ouvrir le marché de l\'art de haute valeur","decentralizingTrustDesc":"N\'étant plus limité par les hautes barrières du marché de l\'art traditionnel, BeArt RWA rend possible pour chacun de participer à l\'investissement dans des œuvres d\'art de grande valeur. Avec des processus simplifiés et des données transparentes, nous rendons l\'achat et la commercialisation des œuvres d\'art plus accessibles et plus faciles que jamais.","experiencingJoy":"Rendements d\'investissement hautement attractifs","experiencingJoyDesc":"Saisissez l\'opportunité d\'investir dans les chefs-d\'œuvre artistiques de demain. ART RWA offre non seulement une expérience de collection d\'art innovante mais indique également des rendements annuels potentiels de 50 % à 100 %. Avec la fusion des marchés de l\'art et de la crypto, les investisseurs ART RWA sont à l\'avant-garde d\'un marché émergent.","part4TitleLine1":"Rejoignez le Visionary Club","part4TitleLine2":"La série exclusive de NFT Genesis de BeArt","part4Desc":"Découvrez l\'édition limitée de 9,999 NFT créés conjointement par BeArt et les meilleurs artistes. Chaque NFT n\'est pas seulement l\'essence de l\'art mais aussi un pont vers l\'investissement.","part4lis1":"Gouvernance et partage des profits: ","part4lisdesc1":"Votre NFT représente des droits de gouvernance et de partage des profits sur la plateforme BeArt.","part4lis2":"Dividendes continus: ","part4lisdesc2":"Détenez n\'importe quel NFT pour profiter des dividendes perpétuels de la plateforme.","part4lis3":"Priorité et traitement VIP: ","part4lisdesc3":"Accès aux nouveaux airdrops RWA & NFT, droits d\'achat prioritaires et réductions sur les transactions.","part4lis4":"Partage des royalties: ","part4lisdesc4":"Partagez les revenus des royalties de toutes les nouvelles séries de NFT.","activeButton":"Act Now","uniqueNftCatalogue":"9 999 OBJETS DE COLLECTION NFT UNIQUES : CATALOGUE","purchaseAndRewards":"Acheter et gagner des récompenses","roadmap":"Feuille de route","year2019":"Année 2019","year2019Content":"Démarrage du projet","year2021":"Année 2021","year2021Content":"RÉVOLUTION DU SYSTÈME DE CATALOGUE : Un voyage de trois ans aboutit à une démonstration technique réussie de notre laboratoire GNFT.","year2022":"Année 2022","year2022Content":"BEART explore un chemin commercial de la version 1.0 à la version 2.0, englobant le développement fonctionnel des plateformes web et app tout en finalisant la preuve de concept et la démo pour le Genetic NFT (GNFT).","year2023":"Année 2023","year2023Content":"Le lancement de la version 3.0 de BEART restructure entièrement les plans des versions précédentes. En R&D technologique, la collaboration avec des laboratoires et équipes techniques de premier plan a standardisé les processus d\'échantillonnage GNFT, sécurisant de multiples brevets et articles inédits. La sortie officielle des œuvres d\'art GNFT marque un jalon important dans la fusion de la technologie et de l\'art à l\'échelle mondiale. La préparation de la mise à niveau 4.0 du site web BEART est terminée, préparant le terrain pour un développement agile.","year20241":"Janvier 2024","year20241Content":"BEART 4.0 est lancé en tant que plateforme complète pour la présentation et le commerce d\'œuvres d\'art GNFT, intégrant pleinement l\'art physique au monde virtuel. Les NFT exclusifs de BEART sont lancés comme seul justificatif d\'identité pour la plateforme, offrant des symboles de statut prestigieux et de vastes avantages. Les fonctionnalités Auction et Art.Space sont également lancées, offrant des services d\'exposition et de transactions mondiales complets pour les œuvres d\'art GNFT.","year20246":"Juin 2024","year20246Content":"L\'application BEART est lancée, permettant de profiter, partager, acheter et gérer l\'art à tout moment et en tout lieu. Des laboratoires hors ligne supplémentaires sont établis, créant plus de synergies avec les artistes, les collectionneurs et les passionnés. Le Club NFT de BEART est officiellement formé, exclusivement pour les détenteurs de NFT, offrant des récompenses de dividendes de plateforme perpétuelles.","year20251":"Janvier 2025","year20251Content":"L\'application Apple Vision Pro est lancée, apportant des expériences d\'art et de culture mondiales dans les foyers. La plateforme répertorie plus de 20 000 objets d\'art de grande valeur, organise des enchères d\'art en ligne et hors ligne, et des salons d\'art exclusifs pour les membres du Club NFT.","timePasses":"Le temps passe, l\'espace se déplace. La civilisation continue d\'être découverte.","updates":"Mises à jour","cooperation":"Coopération"}'
        );
      },
      23654: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"profileDetails":"Détails du profil","uploadButton":"Télécharger","socialConnectionsTitle":"Connexions sociales","linkSocialAccounts":"Liez vos comptes sociaux pour montrer votre collection à vos amis","connectButton":"Bientôt","twitterLabel":"Twitter","instagramLabel":"Instagram","walletAddress":"Adresse du portefeuille","username":"Nom d\'utilisateur","emailAddress":"Adresse email","wordsToOthers":"Mots aux autres","saveButton":"Enregistrer","cancleButton":"Annuler","kycVerification":"Vérification KYC","lastNameLabel":"Nom de famille :","firstNameLabel":"Prénom :","countryLabel":"Pays :","selectCountry":"Sélectionnez un pays","contactAddress":"Adresse de contact :","uploadID":"Téléchargez votre carte d\'identité/passeport/permis de séjour :","chooseFileButton":"Choisir un fichier","selfieWithID":"Téléchargez une photo de vous tenant votre carte d\'identité/passeport/permis de séjour :","termsAndConditions":"Termes et conditions.","consentLabel":"J\'accepte d\'autoriser BEART pour la vérification KYC et le contrôle des risques.","checkAndSubmitButton":"Vérifier et soumettre","cancelButton":"Annuler"}'
        );
      },
      74013: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"welcomeInfo":"Bienvenue au BEART Visionary Club!","comingSoon":"Nous arriverons bientôt.","keyRules":"Les règles clés : <br><br>1. Le nombre total de NFTs est limité à 9999. <br><br>2. Seules les adresses incluses dans la liste blanche ont le privilège de frapper, chaque adresse étant limitée à frapper 4 NFTs. <br><br>3. Le coût de frappe est fixé à 0.18312 ETH. <br><br>4. Chaque NFT possède une valeur \\"Énergie Artistique\\", qui détermine sa part de récompenses. <br><br>5. Veuillez vous référer à la section ci-dessous pour vérifier si votre adresse de portefeuille est incluse dans la liste blanche.","whitelistCheck":"Vérification de la liste blanche","inputPlaceholder":"Veuillez coller votre adresse de portefeuille ici","checkButtonText":"VÉRIFIER","checkingMessage":"Vérification...","whitelistSuccess":"Votre adresse est sur la liste blanche !","whitelistError":"Votre adresse n\'est pas sur la liste blanche. Veuillez compléter les tâches de la liste blanche dans la communauté.","mintButton":"FRAPPER NFT","mintMessage":"{{ message }}","daysLabel":"J","hoursLabel":"H","minutesLabel":"M","secondsLabel":"S"}'
        );
      },
      3311: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"geneticNFT":"Génétique.NFT","worldview":"Vision du monde","promotion":"Référez","glory":"Gloire","MintNFT":"NFT Mint","connect":"Connecter","mine":"Profil","mobileApp":"Application Mobile","cookiePolicy":"Politique de Cookie","AffiliaterLogin":"Connexion Affilié","termsOfUse":"Conditions d\'Utilisation","transactionRules":"Règles de Transaction","paymentPolicy":"Référez","footerText":"© BEART Web3. 2019-2024. Nous aimons nos utilisateurs","scanWithApp":"Scannez avec l\'application BeArt","connectBy":"Connectez par","beartLogin":"Bitget Wallet","metamask":"Metamask","walletConnect":"Wallet Connect","gnftInnovation":"GNFT représente une innovation révolutionnaire, reflétant notre observation attentive du monde physique et une profonde réflexion sur le monde virtuel.","quoteAuthor":"——BEART","showcaseMessage":"Nous avons hâte de vous le présenter lors de nos prochaines retrouvailles."}'
        );
      },
      7344: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"referYourFriendsTitle":"Référez vos amis, partagez l\'art, gagnez des récompenses.","referYourFriends":"Référez vos amis","shareYourReferral":"Partagez votre lien de parrainage ou code QR avec vos amis et contacts sur les réseaux sociaux. Invitez-les à rejoindre notre voyage artistique et gagnez des récompenses supplémentaires pour vos efforts.","gainTheRewards":"Gagnez des récompenses","earnCommission":"Gagnez jusqu\'à 15 % des frais de transaction de vos amis en commission chaque fois qu\'ils effectuent une transaction via votre parrainage.","getYourReferralLink":"OBTENEZ VOTRE LIEN DE PARRAINAGE","viewReferralRules":"Voir les règles de parrainage >","lucrativeCommissions":"Commissions lucratives","generateIncome":"Générez des revenus significatifs grâce à la promotion et la vente d\'art, avec une structure de commission qui récompense votre participation active et votre succès sur le marché de l\'art.","exclusiveInsights":"Aperçus exclusifs et accès","stayAhead":"Restez en avance dans le monde de l\'art avec des aperçus précoces sur les tendances émergentes et un accès exclusif à des œuvres d\'art uniques, améliorant votre capacité à élaborer des stratégies de vente éclairées.","brandBuilding":"Construction de marque et réseau","expandNetwork":"Élevez votre profil professionnel et élargissez votre réseau en vous connectant avec des artistes, des collectionneurs et des passionnés du monde entier, en tirant parti de la plateforme BEART pour établir une présence forte dans la communauté artistique.","auctionCommission":"1. Jusqu\'à 80 % de commission sur les enchères, bénéficiez d\'un taux de commission de 30 % après approbation. Apprenez immédiatement plus de détails.","quickApplication":"2. Candidature rapide en trois étapes : ","whyChoose":"3. Pourquoi choisir l\'affiliation mondiale BEART ? Parce que...","rebateDetails":"4. Détails sur le rabais : Termes et conditions.","applyNow":"POSTULEZ DÈS MAINTENANT","rewardsHub":"Centre de récompenses","completeTasks":"Complétez des tâches et gagnez des bonus","welcomeRewards":"Récompenses de bienvenue","rewardClaimed":"Récompense réclamée !","okButton":"OK","getTheRewards":"Obtenez les récompenses","claim":"Réclamer la récompense","done":"Terminé","learnMore":"En savoir plus","applyFillSubmit":"Postuler, Remplir le formulaire, Soumettre","because":"Parce que...","termsAndConditions":"Termes et conditions","ReferralWelcome1":"Bienvenue sur BEART! ","ConnecttheWallet":"Veuillez d\'abord connecter votre","ReferralWelcome2":"portefeuille afin que nous puissions vous offrir une expérience et un service personnalisés."}'
        );
      },
      64380: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"artverseTitle":"Artverse : Îles de l\'Espace-Temps.","activityCenter":"Centre d\'Activité","userGuide":"Guide de l\'Utilisateur","worldview":"Vision du Monde","artworksGNFT":"Œuvres d\'Art (GNFT)","menuButton":"Menu","viewMore":"Voir plus"}'
        );
      },
      61433: function (e) {
        "use strict";
        e.exports = {};
      },
      15573: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"pageTitle":"BEART | Mine","welcomeMessage":"5年間の努力の末、BEARTはついに正式にデビューしました。\\n\\nこの重要な瞬間に、私たちを助け、支え、将来も共に歩んでくれるすべての人に感謝の意を表したいと思います。\\n\\nこのプロジェクトに貢献したすべての人は、BEARTと共に時を超えて私たちの栄光の壁に永遠に刻まれます。\\n\\nこの壁にさらに多くの名前が刻まれるのを楽しみにしています。特にあなたの名前を。","clickableMessage":"未来にわくわくしています!"}'
        );
      },
      42661: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"essenceOfHumanity":"グローバル高価値アート作品 RWA&NFT資産発行取引プラットフォーム","beArtWeb3":"BeArt RWA","unlockPowerOfNFT":"現実世界と暗号世界の接続","beArtInfo1":"BeArtは複数の技術革新をもたらします。CATALOGUEシステムとERC721g規格を利用して、BeArtはRWAコレクションを鋳造し、物理資産とブロックチェーン資産の1:1マッピングを実現した世界初のグローバルプロジェクトです。","beArtInfo2":"我々は、BeArtをRWAアートコレクティブルの発行および取引プラットフォームとして検討し、プラットフォーム上のさまざまなシナリオに参加して、非常に高いリターンを達成することをお勧めします。","beArtInfo3":"さらに、ジェネシスNFT（BVC）の保持者は、BeArtプラットフォーム上でのさまざまな資産発行から継続的に利益分配リターンとトークン報酬を受け取ります。","uniqueBVC":"BeArt Visionary Clubに参加する準備はできていますか？","gnftSignificance":"BeArt RWA コレクション","preservingCivilization":"革命的なアートコレクション","preservingCivilizationDesc":"BeArt RWAを探求し、ERC721g基準に基づいた先進技術であなたのアート投資体験を再定義します。各作品はブロックチェーン上で独自の存在として正確にマッピングされ、各アート作品のユニークさと代替不可能性を保証します。","combiningScienceArt":"アート認証の未来のスタンダード","combiningScienceArtDesc":"天禄認証システムとGenetic NFT技術を使用し、BeArtはあなたの投資を確固たるセキュリティで保護します。3Dデジタル光学ツインから非破壊材料テストまで、先進的な技術を用いてアート作品の真実性と品質を保証し、アートコレクターが自信を持って投資できるようにします。","decentralizingTrust":"高価値アート市場の開放","decentralizingTrustDesc":"従来のアート市場の高い壁を超えて、BeArt RWAは誰もが高価値アート作品への投資に参加できるようにします。プロセスを簡素化し、データを透明化することで、アート作品の購入や取引をこれまで以上にアクセスしやすく、簡単にします。","experiencingJoy":"魅力的な投資リターン","experiencingJoyDesc":"未来のアートマスターピースに投資するチャンスをつかみましょう。ART RWAは革新的なアートコレクション体験を提供するだけでなく、50％から100％の潜在的な年間リターンを示しています。アートとクリプト市場が融合する中、ART RWAの投資者は新興市場の最前線に立っています。","part4TitleLine1":"Visionary Clubに参加しよう","part4TitleLine2":"BeArtの独占Genesis NFTシリーズ","part4Desc":"BeArtとトップアーティストが共同で創造した9,999個の限定NFTを探索しましょう。各NFTは芸術の本質であり、投資への橋渡しでもあります。","part4lis1":"ガバナンスと利益分配：","part4lisdesc1":"あなたのNFTはBeArtプラットフォームにおけるガバナンス権と利益分配権を表します。","part4lis2":"継続的な配当：","part4lisdesc2":"任意のNFTを保有することで、プラットフォームからの永続的な配当を享受できます。","part4lis3":"優先権とVIP待遇：","part4lisdesc3":"新しいRWA＆NFTのエアドロップ、優先購入権、取引割引を利用できます。","part4lis4":"ロイヤルティ分配： ","part4lisdesc4":"新しいNFTシリーズのロイヤルティ収入を分配します。","activeButton":"Act Now","uniqueNftCatalogue":"9,999個のユニークなNFTコレクタブル: カタログ","purchaseAndRewards":"購入して報酬を得る","roadmap":"ロードマップ","year2019":"2019年","year2019Content":"プロジェクトの開始","year2021":"2021年","year2021Content":"カタログシステム革命: 3年間の旅がGNFT研究所からの成功した技術デモで終了。","year2022":"2022年","year2022Content":"BEARTは、バージョン1.0から2.0への商業的な道を歩み、Webプラットフォームとアプリの機能開発を含みながら、Genetic NFT（GNFT）のコンセプトプルーフとデモを最終化しました。","year2023":"2023年","year2023Content":"BEART バージョン3.0を全面的にリリースし、以前のバージョン計画を完全に再構築します。技術R&Dでは、世界トップクラスのラボと技術チームとのコラボレーションにより、GNFTの標準化されたサンプリングプロセスを確立し、複数の特許と未発表の論文を確保しました。公式のGNFTアートワークのリリースは、グローバルな技術とアートの融合において重要なマイルストーンを印します。BEARTウェブサイトの4.0アップグレードの準備が整い、アジャイル開発のステージが設定されました。","year20241":"2024年1月","year20241Content":"BEART 4.0を、物理的なアートと仮想世界を完全に統合する、GNFTアートワークの包括的な展示と取引プラットフォームとしてデビューさせます。プラットフォームの唯一の身分証明として、BEART NFTを発売し、権威あるステータスシンボルと広範な利点を提供します。オークションとArt.Spaceの機能も開始され、GNFTアートワークの包括的な展示と世界的な取引サービスを提供します。","year20246":"2024年6月","year20246Content":"BEARTアプリが新たにリリースされ、いつでもどこでもアートを楽しむ、共有する、購入し、管理することができます。追加のオフラインラボが設立され、アーティスト、コレクター、愛好家との更なるシナジーを創造します。BEART NFTクラブが正式に設立され、NFTホルダーのみを対象に、永続的なプラットフォーム配当報酬を提供します。","year20251":"2025年1月","year20251Content":"Apple Vision Proアプリケーションが導入され、世界中のアートと文化体験を自宅にもたらします。プラットフォームには2万点以上の価値あるアートコレクタブルがリストアップされ、オンラインとオフラインでのアートオークションが開催され、NFTクラブ会員専用の高級アートサロンが行われます。","timePasses":"時は流れ、宇宙は移動する。文明は発見され続ける。","updates":"アップデート","cooperation":"協力"}'
        );
      },
      7181: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"profileDetails":"プロファイル詳細","uploadButton":"アップロード","socialConnectionsTitle":"ソーシャル接続","linkSocialAccounts":"ソーシャルアカウントをリンクして、友達にコレクションを表示","connectButton":"まもなく","twitterLabel":"ツイッター","instagramLabel":"インスタグラム","walletAddress":"ウォレットアドレス","username":"ユーザー名","emailAddress":"メールアドレス","wordsToOthers":"他の人への言葉","saveButton":"保存","cancleButton":"キャンセル","kycVerification":"KYC認証","lastNameLabel":"姓:","firstNameLabel":"名:","countryLabel":"国:","selectCountry":"国を選択","contactAddress":"連絡先住所:","uploadID":"IDカード/パスポート/居住許可証をアップロード:","chooseFileButton":"ファイルを選択","selfieWithID":"ID/パスポート/居住許可証を持っている自分の写真をアップロード:","termsAndConditions":"利用規約。","consentLabel":"KYCおよびリスク管理レビューのためにBEARTを認証することに同意します。","checkAndSubmitButton":"チェックして送信","cancelButton":"キャンセル"}'
        );
      },
      96984: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"welcomeInfo":"BEART Visionary クラブへようこそ!","comingSoon":"まもなく到着します。","keyRules":"重要なルール： <br><br>1. NFTの総供給量は9999個に限定されています。 <br><br>2. ホワイトリストに含まれているアドレスのみがミントの特権を持ち、各アドレスは4個のNFTをミントすることができます。 <br><br>3. ミントの費用は0.18312 ETHに設定されています。 <br><br>4. 各NFTは「アートエネルギー」の値を持ち、それによって報酬のシェアが決まります。<br><br>5. あなたのウォレットアドレスがホワイトリストに含まれているかどうかを確認するには、以下のセクションを参照してください。","whitelistCheck":"ホワイトリスト確認","inputPlaceholder":"ここにウォレットアドレスを貼り付けてください","checkButtonText":"チェック","checkingMessage":"確認中...","whitelistSuccess":"あなたのアドレスはホワイトリストに含まれています！","whitelistError":"あなたのアドレスはホワイトリストに含まれていません。コミュニティでホワイトリストのタスクを完了してください。","mintButton":"NFTをミント","mintMessage":"{{ message }}","daysLabel":"日","hoursLabel":"時","minutesLabel":"分","secondsLabel":"秒"}'
        );
      },
      16788: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"geneticNFT":"遺伝的な.NFT","worldview":"世界観","promotion":"プロモーション","glory":"栄光","MintNFT":"NFT Mint","connect":"接続する","mine":"Profile","mobileApp":"モバイルアプリ","cookiePolicy":"クッキーポリシー","AffiliaterLogin":"アフィリエイターログイン","termsOfUse":"利用規約","transactionRules":"取引規則","paymentPolicy":"プロモーション","footerText":"© BEART Web3. 2019-2024. 我々は私たちのユーザーを愛しています","scanWithApp":"BeArt アプリでスキャン","connectBy":"接続方法","beartLogin":"Bitget Wallet","metamask":"Metamask","walletConnect":"Wallet Connect","gnftInnovation":"GNFTは、物理的世界に対する鋭い観察と仮想世界に対する深い思索を反映した、画期的な革新を表しています。","quoteAuthor":"——BEART","showcaseMessage":"次にお会いするときに、皆さんにご紹介できることを楽しみにしています。"}'
        );
      },
      46553: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"referYourFriendsTitle":"友人を紹介し、アートを共有し、報酬を獲得。","referYourFriends":"友人を紹介する","shareYourReferral":"あなたの紹介リンクまたはQRコードをソーシャルメディアの友人や連絡先と共有してください。彼らをアートの旅に招待し、あなたの努力に対する追加の報酬を獲得しましょう。","gainTheRewards":"報酬を獲得","earnCommission":"紹介を通じて取引を行うたびに、友人の取引手数料の最大15%をコミッションとして獲得します。","getYourReferralLink":"紹介リンクを取得","viewReferralRules":"紹介ルールを見る >","lucrativeCommissions":"魅力的なコミッション","generateIncome":"アートのプロモーションと販売を通じて、あなたの積極的な参加とアート市場での成功に対して報酬を提供するコミッション構造を通じて、重要な収入を生み出します。","exclusiveInsights":"独占的な洞察とアクセス","stayAhead":"新しいトレンドの初期の洞察とユニークなアート作品への独占的なアクセスを通じて、アート界で一歩先を行き、情報に基づいた販売戦略を構築する能力を高めます。","brandBuilding":"ブランド構築とネットワーク","expandNetwork":"世界中のアーティスト、コレクター、アート愛好家とのつながりを通じて、あなたの専門的なプロファイルを向上させ、BEARTのプラットフォームを活用してアートコミュニティ内で強固な存在感を確立します。","auctionCommission":"1. 最大80%のオークションコミッション、承認後は30%のコミッション率をお楽しみください。詳細をすぐに学びましょう。","quickApplication":"2. 3ステップでの迅速な申請：","whyChoose":"3. BEARTグローバルアフィリエイトを選ぶ理由は？それは...","rebateDetails":"4. リベートの詳細：利用規約。","applyNow":"今すぐ申し込む","rewardsHub":"報酬ハブ","completeTasks":"タスクを完了し、ボーナスを獲得","welcomeRewards":"ウェルカムリワード","rewardClaimed":"報酬を請求しました！","okButton":"OK","getTheRewards":"報酬を得る","claim":"報酬を請求する","learnMore":"もっと詳しく","applyFillSubmit":"申し込み、フォーム記入、提出","because":"なぜなら...","termsAndConditions":"利用規約","done":"完了","ReferralWelcome1":"BEART へようこそ！","ConnecttheWallet":"ウォレットを接続してください","ReferralWelcome2":"それにより、より良い体験を得ることができます。"}'
        );
      },
      62717: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"artverseTitle":"アートバース：時間空間の島々。","activityCenter":"アクティビティセンター","userGuide":"ユーザーガイド","worldview":"ワールドビュー","artworksGNFT":"アートワーク(GNFT)","menuButton":"メニュー","viewMore":"もっと見る"}'
        );
      },
      80984: function (e) {
        "use strict";
        e.exports = {};
      },
      82270: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"pageTitle":"BEART | Mine","welcomeMessage":"經過五年的不懈努力，BEART終於正式亮相。\\n\\n在這關鍵時刻，我們要向每一位幫助、支持我們並將在未來與我們同行的人表達深深的感謝。\\n\\n為這個項目做出貢獻的每個人都將永遠銘刻在我們的榮耀牆上，與BEART共同經受時間的考驗。\\n\\n我們期待在這面牆上看到更多的名字，特別期待看到您的。","clickableMessage":"對未來充滿期待！"}'
        );
      },
      62924: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"essenceOfHumanity":"全球高價值藝術品 RWA&NFT資產發行交易平台","beArtWeb3":"BeArt RWA","unlockPowerOfNFT":"連接真實與加密世界","beArtInfo1":"BeArt帶來多項技術創新。透過使用天禄系統和ERC721g標準，BeArt鑄造了RWA收藏品，成為全球首個實現實體資產與區塊鏈資產1:1對應的項目。","beArtInfo2":"我們邀請您考慮將BeArt作為RWA藝術收藏品的發行與交易平台，參與平台上的各種場景，以實現異常高的回報。","beArtInfo3":"此外，創世NFT（BVC）持有者將不斷從BeArt平台上各種資產的發行中獲得分紅收益和代幣獎勵。","uniqueBVC":"準備好加入BeArt Visionary Club了嗎？","gnftSignificance":"BeArt RWA 收藏品","preservingCivilization":"革命性的藝術收藏","preservingCivilizationDesc":"探索基於ERC721g標準的BeArt RWA，重新定義您的藝術投資體驗。每件作品都在區塊鏈上精確映射，確保每件藝術品的獨特性和不可替代性，展現前沿技術的獨到之處。","combiningScienceArt":"藝術認證的未來標準","combiningScienceArtDesc":"BeArt運用天祿認證系統與Genetic NFT技術標準，為您的投資提供堅實的安全保障。從3D數字光學孿生到無損材料檢測，我們利用先進科技保證藝術品的真實性和品質，讓藝術收藏家能夠放心投資。","decentralizingTrust":"開放高價值藝術市場","decentralizingTrustDesc":"BeArt RWA突破傳統藝術市場的高門檻，讓每個人都有機會參與到高價值藝術品的投資中。通過簡化的流程和透明的數據，我們讓購買和交易藝術品變得前所未有的容易和可接近。","experiencingJoy":"投資回報極具吸引力","experiencingJoyDesc":"抓住機會，投資未來的藝術巨作。ART RWA不僅提供創新的藝術收藏體驗，還預示著高達50%-100%的潜在年化回报。隨著藝術和加密市場的融合，ART RWA投資者站在了新興市場的最前線。","part4TitleLine1":"加入Visionary Club","part4TitleLine2":"BeArt獨家Genesis NFT系列","part4Desc":"探索由BeArt與頂尖藝術家共創的9,999件限量NFT。每一件NFT不僅是藝術的精華，也是投資的橋樑。","part4lis1":"治理與分紅：","part4lisdesc1":"您的NFT代表在BeArt平台中的治理權和分紅權。","part4lis2":"持續分紅：","part4lisdesc2":"持有任一NFT，即享平台永久分紅。","part4lis3":"優先權與VIP待遇：","part4lisdesc3":"獲得新RWA&NFT空投、優先購買權及交易折扣。","part4lis4":"版稅分享：","part4lisdesc4":"分享所有新NFT系列的版稅收入。","activeButton":"立即行動","uniqueNftCatalogue":"9,999個獨一無二的BEART NFT收藏品：天祿","purchaseAndRewards":"購買並獲得獎勵","roadmap":"路線圖","year2019":"2019年","year2019Content":"項目啟動","year2021":"2021年","year2021Content":"目錄系統革命：三年的旅程在我們的GNFT實驗室成功技術演示中達到高潮。","year2022":"2022年","year2022Content":"BEART探索商業化之路，從1.0版本邁向2.0版本，包含網頁與應用程式的功能性開發，同時也完成了Genetic NFT（GNFT）的概念證明與演示。","year2023":"2023年","year2023Content":"全面推出BEART 3.0版本，徹底重構先前版本規劃。在技術研發上，與全球頂尖實驗室及技術團隊合作，建立GNFT技術的標準化採樣流程，擁有多項技術專利及學術論文。正式發布GNFT藝術品，將在全球科技與藝術的融合創新中標記重要里程碑。BEART官網4.0版本升級準備工作也已完成，為敏捷開發鋪平道路。","year20241":"2024年1月","year20241Content":"推出BEART 4.0——一個集GNFT藝術品展示與交易於一體的平台，全面整合實體藝術品與虛擬世界。發售獨一無二的BEART NFT，作為平台的唯一身份認證，用戶將享受尊貴的身份象徵和多項福利。同時，開啟Auction與Art.Space功能，提供全面的GNFT藝術品展示和全球交易服務。","year20246":"2024年6月","year20246Content":"BEART應用程式全新上線，隨時隨地沉浸藝術體驗，方便藝術的分享、購買和管理。增設線下實驗室，與藝術家、藏家、愛好者建構更多聯動。BEART NFT Club正式成立，專屬於NFT持有者，提供永久平台分紅獎勵。","year20251":"2025年1月","year20251Content":"Apple Vision Pro應用程式全新上線，使您能在家中體驗全球藝術與文化的震撼。平台將收錄超過20000件高價值藝術藏品，舉辦線上與線下藝術品拍賣，及NFT Club會員專享的高端藝術品私享會。","timePasses":"時間流逝，空間轉移。文明繼續被發現。","updates":"更新","cooperation":"合作"}'
        );
      },
      55512: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"profileDetails":"個人資料詳情","uploadButton":"上傳","socialConnectionsTitle":"社交連結","linkSocialAccounts":"鏈接社交賬號，向朋友展示您的藏品","connectButton":"即将","twitterLabel":"推特","instagramLabel":"Instagram","walletAddress":"錢包地址","username":"用戶名","emailAddress":"電子郵件地址","wordsToOthers":"對他人的話","saveButton":"保存","cancleButton":"取消","kycVerification":"KYC驗證","lastNameLabel":"姓氏：","firstNameLabel":"名字：","countryLabel":"國家：","selectCountry":"選擇國家","contactAddress":"聯絡地址：","uploadID":"上傳您的身份證/護照/居留許可證：","chooseFileButton":"選擇文件","selfieWithID":"上傳您持有身份證/護照/居留許可證的照片：","termsAndConditions":"條款和條件。","consentLabel":"我同意授權BEART進行KYC和風險控制審查。","checkAndSubmitButton":"檢查並提交","cancelButton":"取消"}'
        );
      },
      77579: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"welcomeInfo":"歡迎來到 BEART Visionary Club!","comingSoon":"我們即將到達。","keyRules":"關鍵規則： <br><br>1. NFT的總供應量限定為9999個，永远不会有任何形式的新增。 <br><br>2. 只有白名單中的地址有鑄造特權，每個地址限制鑄造4枚NFT。 <br><br>3. 鑄造費用設定為0.18312 ETH。 <br><br>4. 每個NFT擁有独特的“藝術能量值”，决定其永久分红的份额多少，但每一位 NFT 持有人还能够获得诸多永续福利。 <br><br>5. 請參閱下方部分，以驗證您的錢包地址是否包含在白名單中。","whitelistCheck":"白名單檢查","inputPlaceholder":"請在此處粘貼您的錢包地址","checkButtonText":"檢查","checkingMessage":"檢查中...","whitelistSuccess":"您的地址在白名單上！","whitelistError":"您的地址不在白名單上。請在社區完成白名單任務。","mintButton":"鑄造 NFT","mintMessage":"{{ message }}","daysLabel":"日","hoursLabel":"小時","minutesLabel":"分鐘","secondsLabel":"秒"}'
        );
      },
      9465: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"geneticNFT":"基因.NFT","worldview":"世界觀","promotion":"引薦","glory":"榮耀","MintNFT":"NFT Mint","connect":"連接","mine":"我的","mobileApp":"移動應用","cookiePolicy":"Cookie 政策","AffiliaterLogin":"合作夥伴登入","termsOfUse":"使用條款","transactionRules":"交易規則","paymentPolicy":"引薦","footerText":"© BEART Web3. 2019-2024. 我們熱愛我們的用戶","scanWithApp":"使用 BeArt 應用掃描","connectBy":"連接方式","beartLogin":"Bitget Wallet","metamask":"Metamask","walletConnect":"Wallet Connect","gnftInnovation":"GNFT代表了一項開創性的創新，反映了我們對物理世界的敏銳觀察和對虛擬世界的深刻思考。","quoteAuthor":"——BEART","showcaseMessage":"我們期待在下次見面時向您展示。"}'
        );
      },
      67190: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"referYourFriendsTitle":"推薦您的朋友，分享藝術，獲取獎勵。","referYourFriends":"推薦您的朋友","shareYourReferral":"與社交媒體上的朋友和聯繫人共享您的推薦鏈接或二維碼。邀請他們加入我們的藝術之旅，並為您的努力獲得額外獎勵。","gainTheRewards":"獲得獎勵","earnCommission":"每次通過您的推薦完成交易，您可以賺取朋友交易費用的最高30%作為佣金。","getYourReferralLink":"獲取您的推薦鏈接","viewReferralRules":"查看推薦規則 >","lucrativeCommissions":"豐厚的佣金","generateIncome":"通過藝術推廣和銷售產生重要收入，並通過獎勵您在藝術市場上的積極參與和成功的佣金結構。","exclusiveInsights":"獨家洞察和訪問權限","stayAhead":"通過對新興趨勢的早期洞察和獨特藝術作品的獨家訪問權限，在藝術界保持領先，增強您制定明智銷售策略的能力。","brandBuilding":"品牌建設和網絡","expandNetwork":"通過與全球藝術家、收藏家和愛好者的連接，提升您的專業形象並擴大您的網絡，利用BEART平台在藝術社區建立強大的存在感。","auctionCommission":"1. 高達100%的拍賣傭金，獲得批准後享受30%的傭金率。立即了解更多詳情。","quickApplication":"2. 快速申請三步驟：","whyChoose":"3. 為什麼選擇BEART全球聯盟？因為...","rebateDetails":"4. 返利詳情：條款和條件。","applyNow":"立即申請","rewardsHub":"獎勵中心","completeTasks":"完成任務 & 贏得獎金","welcomeRewards":"歡迎獎勵","rewardClaimed":"獎勵已領取！","okButton":"確定","getTheRewards":"獲取獎勵","claim":"領取獎勵","done":"已完成","learnMore":"了解更多","applyFillSubmit":"申請，填寫表格，提交","because":"因為...","termsAndConditions":"條款和條件","ReferralWelcome1":"歡迎來到 BEART!","ConnecttheWallet":"請先連接您的錢包","ReferralWelcome2":"，以便我們為您提供個性化的體驗和服務。"}'
        );
      },
      43226: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"artverseTitle":"藝術宇宙：時空島嶼。","activityCenter":"活動中心","userGuide":"用戶指南","worldview":"世界觀","artworksGNFT":"藝術作品(GNFT)","menuButton":"菜單","viewMore":"更多"}'
        );
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var a = (t[i] = { id: i, loaded: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports;
  }
  (n.m = e),
    (function () {
      n.amdO = {};
    })(),
    (function () {
      var e = [];
      n.O = function (t, i, r, a) {
        if (!i) {
          var s = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (i = e[c][0]), (r = e[c][1]), (a = e[c][2]);
            for (var o = !0, l = 0; l < i.length; l++)
              (!1 & a || s >= a) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](i[l]);
              })
                ? i.splice(l--, 1)
                : ((o = !1), a < s && (s = a));
            if (o) {
              e.splice(c--, 1);
              var u = r();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
        e[c] = [i, r, a];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var i in t)
          n.o(t, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, i) {
              return n.f[i](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "js/" +
          e +
          "." +
          {
            73: "6911801a",
            81: "96a1da58",
            127: "3d7f47ac",
            162: "67982396",
            191: "ff40c83c",
            368: "54edeaac",
            411: "9b5c5061",
            436: "52fc8e37",
            449: "4b3cbee3",
            497: "c86a0970",
            508: "98f9a75b",
            526: "16984a9f",
            558: "3c2d842a",
            611: "5a251fa7",
            635: "0323a6e0",
            655: "86154668",
            675: "c1d3a21b",
            683: "8d7fccfa",
            693: "27a16e95",
            722: "de0391c9",
            777: "ffa08c57",
            864: "00957239",
            890: "7f541cdb",
            992: "adb1ff9c",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return (
          "css/" +
          e +
          "." +
          {
            73: "8288c4e6",
            368: "73bafa03",
            436: "c4ec9b73",
            497: "f0392b20",
            508: "9fd45279",
            526: "26d7614b",
            655: "572b7f2d",
            693: "46ff13e1",
            722: "48a02831",
            777: "cf01b8fc",
            992: "da7cff57",
          }[e] +
          ".css"
        );
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "BeArtRWA:";
      n.l = function (i, r, a, s) {
        if (e[i]) e[i].push(r);
        else {
          var o, l;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == i ||
                d.getAttribute("data-webpack") == t + a
              ) {
                o = d;
                break;
              }
            }
          o ||
            ((l = !0),
            (o = document.createElement("script")),
            (o.charset = "utf-8"),
            (o.timeout = 120),
            n.nc && o.setAttribute("nonce", n.nc),
            o.setAttribute("data-webpack", t + a),
            (o.src = i)),
            (e[i] = [r]);
          var p = function (t, n) {
              (o.onerror = o.onload = null), clearTimeout(m);
              var r = e[i];
              if (
                (delete e[i],
                o.parentNode && o.parentNode.removeChild(o),
                r &&
                  r.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            m = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = p.bind(null, o.onerror)),
            (o.onload = p.bind(null, o.onload)),
            l && document.head.appendChild(o);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.nmd = function (e) {
        return (e.paths = []), e.children || (e.children = []), e;
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var e = function (e, t, i, r, a) {
            var s = document.createElement("link");
            (s.rel = "stylesheet"),
              (s.type = "text/css"),
              n.nc && (s.nonce = n.nc);
            var o = function (n) {
              if (((s.onerror = s.onload = null), "load" === n.type)) r();
              else {
                var i = n && n.type,
                  o = (n && n.target && n.target.href) || t,
                  l = new Error(
                    "Loading CSS chunk " +
                      e +
                      " failed.\n(" +
                      i +
                      ": " +
                      o +
                      ")"
                  );
                (l.name = "ChunkLoadError"),
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                  (l.type = i),
                  (l.request = o),
                  s.parentNode && s.parentNode.removeChild(s),
                  a(l);
              }
            };
            return (
              (s.onerror = s.onload = o),
              (s.href = t),
              i
                ? i.parentNode.insertBefore(s, i.nextSibling)
                : document.head.appendChild(s),
              s
            );
          },
          t = function (e, t) {
            for (
              var n = document.getElementsByTagName("link"), i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i],
                a = r.getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (a === e || a === t)) return r;
            }
            var s = document.getElementsByTagName("style");
            for (i = 0; i < s.length; i++) {
              (r = s[i]), (a = r.getAttribute("data-href"));
              if (a === e || a === t) return r;
            }
          },
          i = function (i) {
            return new Promise(function (r, a) {
              var s = n.miniCssF(i),
                o = n.p + s;
              if (t(s, o)) return r();
              e(i, o, null, r, a);
            });
          },
          r = { 524: 0 };
        n.f.miniCss = function (e, t) {
          var n = {
            73: 1,
            368: 1,
            436: 1,
            497: 1,
            508: 1,
            526: 1,
            655: 1,
            693: 1,
            722: 1,
            777: 1,
            992: 1,
          };
          r[e]
            ? t.push(r[e])
            : 0 !== r[e] &&
              n[e] &&
              t.push(
                (r[e] = i(e).then(
                  function () {
                    r[e] = 0;
                  },
                  function (t) {
                    throw (delete r[e], t);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var e = { 524: 0 };
      (n.f.j = function (t, i) {
        var r = n.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) i.push(r[2]);
          else {
            var a = new Promise(function (n, i) {
              r = e[t] = [n, i];
            });
            i.push((r[2] = a));
            var s = n.p + n.u(t),
              o = new Error(),
              l = function (i) {
                if (n.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var a = i && ("load" === i.type ? "missing" : i.type),
                    s = i && i.target && i.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = a),
                    (o.request = s),
                    r[1](o);
                }
              };
            n.l(s, l, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, i) {
          var r,
            a,
            s = i[0],
            o = i[1],
            l = i[2],
            u = 0;
          if (
            s.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in o) n.o(o, r) && (n.m[r] = o[r]);
            if (l) var c = l(n);
          }
          for (t && t(i); u < s.length; u++)
            (a = s[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(c);
        },
        i = (self["webpackChunkBeArtRWA"] = self["webpackChunkBeArtRWA"] || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })();
  var i = n.O(void 0, [504], function () {
    return n(36793);
  });
  i = n.O(i);
})();
