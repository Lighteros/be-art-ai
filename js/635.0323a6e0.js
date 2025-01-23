"use strict";
(self["webpackChunkBeArtRWA"] = self["webpackChunkBeArtRWA"] || []).push([
  [635],
  {
    28699: function (e, t, l) {
      l.d(t, {
        CX: function () {
          return p;
        },
        DF: function () {
          return n;
        },
        E1: function () {
          return s;
        },
        GZ: function () {
          return r;
        },
        P6: function () {
          return o;
        },
        P7: function () {
          return f;
        },
        PR: function () {
          return v;
        },
        iR: function () {
          return u;
        },
        is: function () {
          return c;
        },
        o8: function () {
          return d;
        },
        u3: function () {
          return i;
        },
        wP: function () {
          return m;
        },
      });
      var a = l(36513);
      const n = (e) =>
          new a.A(`/public/point/${e}/rank`).Get({
            mockedUrl: `/dev/public/point/${e}/rank`,
          }),
        o = (e) =>
          new a.A(`/public/point/${e}/total`).Get({
            mockedUrl: `/dev/public/point/${e}/total`,
          }),
        i = (e) =>
          new a.A(`/public/point/${e}/task`).Get({
            mockedUrl: `/dev/public/point/${e}/task`,
          }),
        u = (e, t) =>
          new a.A(`/public/point/${e}/task/${t}/url-click`).Post({
            mockedUrl: `/dev/public/point/${e}/task/${t}/url-click`,
          }),
        c = (e, t) =>
          new a.A(`/public/point/${e}/task/${t}/check-in`).Post({
            mockedUrl: `/dev/public/point/${e}/task/${t}/check-in`,
          }),
        s = (e, t, l) =>
          new a.A(`/public/point/${e}/task/${t}/check-in`).Get({
            data: l,
            mockedUrl: `/dev/public/point/${e}/task/${t}/check-in`,
          }),
        r = (e) =>
          new a.A(`/public/point/${e}/user/total`).Get({
            mockedUrl: `/dev/public/point/${e}/user/total`,
          }),
        d = () =>
          new a.A("/public/referral/user/current").Get({
            mockedUrl: "/dev/public/referral/user/current",
          }),
        p = (e) =>
          new a.A("/public/referral/user/current/record").Get({
            mockedUrl: "/dev/public/referral/user/current/record",
            params: e,
          }),
        m = (e) =>
          new a.A(`/public/whitelist/${e}/info`).Get({
            showMessage: !1,
            mockedUrl: `/dev/public/whitelist/${e}/info`,
          }),
        f = (e) =>
          new a.A(`/public/whitelist/${e}/exchange`).Post({
            mockedUrl: `/dev/public/whitelist/${e}/exchange`,
          }),
        v = (e, t, l) =>
          new a.A(`/public/point/${e}/task/${t}/progress`).Get({
            data: l,
            mockedUrl: `/dev/public/point/${e}/task/${t}/progress`,
          });
    },
    16138: function (e, t, l) {
      l.d(t, {
        A: function () {
          return m;
        },
      });
      var a = l(56768),
        n = l(24232),
        o = l(90144),
        i = l(57477),
        u = (l(24598), l(87383));
      const c = { key: 0, class: "mask" },
        s = { class: "dialog_title" };
      var r = {
          __name: "AnimateDialog",
          props: {
            modelValue: { type: Boolean },
            width: { type: Number, default: 599 },
            min: { type: Boolean, default: !1 },
            title: { type: String, default: "" },
            widthMin: { type: Number },
            size: { type: Number, default: 1700 },
            black: { type: Boolean, default: !1 },
          },
          emits: ["update:modelValue"],
          setup(e, { expose: t, emit: l }) {
            const r = e,
              { width: d } = (0, u.lWr)(),
              p = (0, a.EW)(() =>
                r.widthMin && d.value < r.size ? r.widthMin : r.width
              ),
              m = (0, o.KR)(!1);
            (0, a.wB)(
              () => r.modelValue,
              () => {
                m.value = r.modelValue;
              }
            );
            const f = l,
              v = () => {
                (m.value = !1),
                  setTimeout(() => {
                    f("update:modelValue");
                  }, 300);
              };
            return (
              t({ close: v }),
              (t, l) => {
                const u = (0, a.g2)("el-icon");
                return (
                  (0, a.uX)(),
                  (0, a.Wv)(a.Im, { to: "body" }, [
                    e.modelValue
                      ? ((0, a.uX)(),
                        (0, a.CE)("div", c, [
                          (0, a.Lk)(
                            "div",
                            {
                              class: (0, n.C4)([
                                "dialog animate__animated animate__faster",
                                {
                                  min: e.min,
                                  animate__zoomIn: m.value,
                                  animate__zoomOut: !m.value,
                                  black: e.black,
                                },
                              ]),
                              style: (0, n.Tr)({ width: p.value + "px" }),
                            },
                            [
                              (0, a.Lk)("div", s, [
                                (0, a.Lk)("div", null, [
                                  (0, a.RG)(t.$slots, "title", {}, () => [
                                    (0, a.eW)((0, n.v_)(e.title), 1),
                                  ]),
                                ]),
                                (0, a.bF)(
                                  u,
                                  { class: "title_close", onClick: v },
                                  {
                                    default: (0, a.k6)(() => [
                                      (0, a.bF)((0, o.R1)(i.bm)),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              (0, a.RG)(t.$slots, "default"),
                            ],
                            6
                          ),
                        ]))
                      : (0, a.Q3)("", !0),
                  ])
                );
              }
            );
          },
        },
        d = l(71241);
      const p = (0, d.A)(r, [["__scopeId", "data-v-408c6300"]]);
      var m = p;
    },
    75703: function (e, t, l) {
      l.d(t, {
        A: function () {
          return s;
        },
      });
      var a = l(56768),
        n = l(24232),
        o = l(90144),
        i = {
          __name: "CopySuccess",
          props: {
            modelValue: Boolean,
            mode: { type: String, default: "bottom" },
          },
          emits: ["update:modelValue"],
          setup(e, { emit: t }) {
            const l = e,
              i = {
                bottom: () => ({
                  animate__fadeInDown: u.value,
                  animate__fadeOutUp: !u.value,
                }),
                top: () => ({
                  animate__fadeInUp: u.value,
                  animate__fadeOutDown: !u.value,
                }),
                left: () => ({
                  animate__fadeInLeft: u.value,
                  animate__fadeOutLeft: !u.value,
                }),
              },
              u = (0, o.KR)(!1);
            (0, a.wB)(
              () => l.modelValue,
              () => {
                l.modelValue && ((u.value = l.modelValue), s());
              }
            );
            const c = t,
              s = () => {
                setTimeout(() => {
                  (u.value = !1),
                    setTimeout(() => {
                      c("update:modelValue", !1);
                    }, 500);
                }, 3e3);
              };
            return (
              (0, a.hi)(() => {
                (u.value = !1), c("update:modelValue", !1);
              }),
              (t, l) =>
                e.modelValue
                  ? ((0, a.uX)(),
                    (0, a.CE)(
                      "div",
                      {
                        key: 0,
                        class: (0, n.C4)([
                          "copyTip animate__animated animate__faster",
                          i[e.mode](),
                        ]),
                      },
                      " Copy successful ",
                      2
                    ))
                  : (0, a.Q3)("", !0)
            );
          },
        },
        u = l(71241);
      const c = (0, u.A)(i, [["__scopeId", "data-v-700f9c3b"]]);
      var s = c;
    },
    8677: function (e, t, l) {
      l.d(t, {
        A: function () {
          return m;
        },
      });
      var a = l(56768),
        n = l(24232),
        o = l(16138),
        i = l(99497),
        u = l(90144);
      const c = { class: "info" },
        s = { class: "footer" };
      var r = {
          __name: "MessageDialog",
          props: {
            cancelText: { type: String, default: "Cancel" },
            cancelShow: { type: Boolean, default: !1 },
            confirmText: { type: String, default: "ok" },
            title: { type: String, default: "Checking" },
            info: {
              type: String,
              default:
                "You do not have enough points (1000 Points required) to redeem the Whitelist.",
            },
          },
          emits: ["confirm", "closeCb"],
          setup(e, { expose: t, emit: l }) {
            const r = e,
              d = (0, u.KR)(!1),
              p = () => {
                d.value = !0;
              },
              m = (0, u.KR)(),
              f = () => {
                m.value.close(), v("closeCb");
              },
              v = l,
              k = () => {
                r.cancelShow ? v("confirm") : f();
              };
            return (
              t({ open: p, cancel: f }),
              (t, l) => (
                (0, a.uX)(),
                (0, a.Wv)(
                  o.A,
                  {
                    title: e.title,
                    width: 599,
                    "width-min": 500,
                    modelValue: d.value,
                    "onUpdate:modelValue":
                      l[0] || (l[0] = (e) => (d.value = e)),
                    ref_key: "animateDialogRef",
                    ref: m,
                  },
                  {
                    default: (0, a.k6)(() => [
                      (0, a.RG)(t.$slots, "default"),
                      (0, a.Lk)("div", c, (0, n.v_)(e.info), 1),
                      (0, a.Lk)("div", s, [
                        e.cancelShow
                          ? ((0, a.uX)(),
                            (0, a.Wv)(
                              i.A,
                              {
                                key: 0,
                                cancel: "",
                                class: "footer_button",
                                onClick: f,
                              },
                              {
                                default: (0, a.k6)(() => [
                                  (0, a.eW)((0, n.v_)(e.cancelText), 1),
                                ]),
                                _: 1,
                              }
                            ))
                          : (0, a.Q3)("", !0),
                        (0, a.bF)(
                          i.A,
                          {
                            class: (0, n.C4)([
                              "footer_button",
                              { only_confirm: !e.cancelShow },
                            ]),
                            onClick: k,
                          },
                          {
                            default: (0, a.k6)(() => [
                              (0, a.eW)((0, n.v_)(e.confirmText), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class"]
                        ),
                      ]),
                    ]),
                    _: 3,
                  },
                  8,
                  ["title", "modelValue"]
                )
              )
            );
          },
        },
        d = l(71241);
      const p = (0, d.A)(r, [["__scopeId", "data-v-7dd0235c"]]);
      var m = p;
    },
    88702: function (e, t, l) {
      l.d(t, {
        A: function () {
          return A;
        },
      });
      var a = l(56768),
        n = l(90144),
        o = l(24232),
        i = l(99497),
        u = l(16138),
        c = l(8677),
        s = l(2636),
        r = l(74311),
        d = l(60782);
      const p = (e) => (
          (0, a.Qi)("data-v-4e4e38ce"), (e = e()), (0, a.jt)(), e
        ),
        m = { class: "dialog_body" },
        f = p(() =>
          (0, a.Lk)(
            "div",
            { class: "dialog_title" },
            "1. Connect your wallet",
            -1
          )
        ),
        v = p(() =>
          (0, a.Lk)(
            "div",
            { class: "dialog_info" },
            " You'll access Truffle with this wallet. We currently do notsupport Ledger or other hardware wallets. ",
            -1
          )
        ),
        k = { class: "wallet" },
        _ = { class: "wallet_text" },
        b = p(() =>
          (0, a.Lk)("div", { class: "dialog_title" }, "2. Enter your email", -1)
        ),
        w = p(() => (0, a.Lk)("div", { class: "success" }, null, -1));
      var h = {
          __name: "LinkEmailDialog",
          props: { wallet: Object, publicKeyTrimmed: String },
          emits: ["linked"],
          setup(e, { expose: t, emit: l }) {
            const p = (0, d.Pj)(),
              h = (0, n.KR)(!1),
              g = (0, n.KR)(""),
              y =
                /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
              A = () => {
                h.value = !0;
              },
              $ = () => {
                g.value = "";
              },
              C = l,
              V = async () => {
                try {
                  await (0, s.KZ)({ email: g.value });
                  const { data: e } = await (0, s.ug)();
                  p.commit("setUserInfo", e),
                    (h.value = !1),
                    setTimeout(() => {
                      C("linked");
                    }, 500),
                    U();
                } catch (e) {
                  console.log("error", e);
                }
              },
              R = (0, a.EW)(() => !y.test(g.value)),
              L = (0, n.KR)(),
              U = () => {
                L.value?.open();
              };
            return (
              t({ open: A }),
              (t, l) => {
                const s = (0, a.g2)("el-input");
                return (
                  (0, a.uX)(),
                  (0, a.CE)(
                    a.FK,
                    null,
                    [
                      (0, a.bF)(
                        u.A,
                        {
                          title: "Link email address",
                          "width-min": 500,
                          modelValue: h.value,
                          "onUpdate:modelValue":
                            l[1] || (l[1] = (e) => (h.value = e)),
                          size: 1930,
                        },
                        {
                          default: (0, a.k6)(() => [
                            (0, a.Lk)("div", m, [
                              f,
                              v,
                              (0, a.Lk)("div", k, [
                                (0, a.bF)(
                                  (0, n.R1)(r.lc),
                                  { wallet: e.wallet },
                                  null,
                                  8,
                                  ["wallet"]
                                ),
                                (0, a.Lk)(
                                  "div",
                                  _,
                                  (0, o.v_)(e.publicKeyTrimmed),
                                  1
                                ),
                              ]),
                              b,
                              (0, a.bF)(
                                s,
                                {
                                  class: "email_input",
                                  modelValue: g.value,
                                  "onUpdate:modelValue":
                                    l[0] || (l[0] = (e) => (g.value = e)),
                                  type: "email",
                                  placeholder: "Email address",
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                              (0, a.bF)(
                                i.A,
                                {
                                  class: "footer_confirm",
                                  disabled: R.value,
                                  onClick: V,
                                },
                                {
                                  default: (0, a.k6)(() => [
                                    (0, a.eW)(" Confirm "),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["disabled"]
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                      (0, a.bF)(
                        c.A,
                        {
                          ref_key: "successMessageRef",
                          ref: L,
                          title: "Link successful",
                          info: "congratulations! You have successfully linked your email",
                          confirmText: "complete",
                          onCloseCb: $,
                        },
                        { default: (0, a.k6)(() => [w]), _: 1 },
                        512
                      ),
                    ],
                    64
                  )
                );
              }
            );
          },
        },
        g = l(71241);
      const y = (0, g.A)(h, [["__scopeId", "data-v-4e4e38ce"]]);
      var A = y;
    },
    25990: function (e, t, l) {
      l.d(t, {
        A: function () {
          return p;
        },
      });
      var a = l(56768),
        n = l(24232),
        o = l(90144),
        i = l(69871),
        u = l(24598);
      const c = ["src"];
      var s = {
          __name: "ScaleAvatar",
          props: {
            width: { type: String, default: "46px" },
            height: { type: String, default: "46px" },
            toRem: { type: Boolean, default: !0 },
          },
          setup(e) {
            const t = e,
              l = (0, a.EW)(() => {
                const { width: e, toRem: l, height: a } = t;
                return l
                  ? { width: (0, u.PI)(e), height: (0, u.PI)(a) }
                  : { width: e, height: a };
              });
            return (e, t) => (
              (0, a.uX)(),
              (0, a.CE)(
                "div",
                { class: "scale", style: (0, n.Tr)(l.value) },
                [
                  (0, a.Lk)(
                    "img",
                    { class: "img", src: (0, o.R1)(i.my), alt: "" },
                    null,
                    8,
                    c
                  ),
                ],
                4
              )
            );
          },
        },
        r = l(71241);
      const d = (0, r.A)(s, [["__scopeId", "data-v-1426e76c"]]);
      var p = d;
    },
  },
]);
