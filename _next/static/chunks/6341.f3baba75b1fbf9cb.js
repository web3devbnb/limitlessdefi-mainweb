"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6341], {
        86341: function(e, r, n) {
            n.r(r), n.d(r, {
                default: function() {
                    return w
                }
            });
            var t = n(97458),
                o = n(52983),
                u = n(45129),
                l = n(12193),
                a = n.n(l);
            let i = a()(() => Promise.all([n.e(6723), n.e(6641), n.e(9119), n.e(8782), n.e(3306), n.e(8786), n.e(3816), n.e(2637), n.e(5434), n.e(167), n.e(9723), n.e(7521), n.e(4493), n.e(2101), n.e(7568), n.e(5899), n.e(2132), n.e(3658), n.e(8762), n.e(6919), n.e(4130), n.e(9071), n.e(4199), n.e(7276), n.e(7928), n.e(7691)]).then(n.bind(n, 75099)).then(e => e.FallingBunnies), {
                    loadableGenerated: {
                        webpack: () => [75099]
                    },
                    ssr: !1
                }),
                s = e => {
                    let [r, n] = (0, o.useState)(!1), l = (0, o.useCallback)(() => n(!0), [n]);
                    return ((0, u.Z)(l), r) ? (0, t.jsx)("div", {
                        onAnimationEnd: () => n(!1),
                        children: (0, t.jsx)(i, { ...e
                        })
                    }) : null
                };
            var w = (0, o.memo)(s)
        },
        45129: function(e, r, n) {
            var t = n(52983);
            let o = e => {
                (0, t.useEffect)(() => {
                    let r = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"],
                        n = 0,
                        t = t => {
                            let {
                                key: o
                            } = t;
                            if (o !== r[n]) {
                                n = 0;
                                return
                            }
                            n += 1, r.length === n && (n = 0, e())
                        };
                    return document.addEventListener("keyup", t), () => document.removeEventListener("keyup", t)
                }, [e])
            };
            r.Z = o
        }
    }
]);
//# sourceMappingURL=6341.f3baba75b1fbf9cb.js.map