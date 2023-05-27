"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5206], {
        74953: function(e, t, n) {
            var r = n(97458),
                u = n(57917),
                i = n(3782),
                l = n(17286),
                s = n(52983),
                o = n(62385),
                a = n(27144),
                d = n(28500),
                c = n(30372),
                v = n(9797),
                f = n(44987);
            let m = (0, a.ZP)(i.Z).withConfig({
                componentId: "sc-3d7ab5bb-0"
            })
            `
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
  border-radius: 50%;
`, h = e => {
                var t;
                let {
                    currency: n,
                    size: i = "24px",
                    style: a,
                    ...h
                } = e, L = (0, c.ai)(n instanceof o.DT ? n.logoURI : void 0), p = (0, s.useMemo)(() => {
                    if (null == n ? void 0 : n.isNative) return [];
                    if (null == n ? void 0 : n.isToken) {
                        let e = (0, f.Z)(n);
                        return n instanceof o.DT ? e ? [...L, e] : [...L] : e ? [e] : []
                    }
                    return []
                }, [n, L]);
                return (null == n ? void 0 : n.isNative) ? n.chainId === u.a_.BSC ? (0, r.jsx)(l.Z, {
                    width: i,
                    style: a
                }) : (0, r.jsx)(m, { ...h,
                    size: i,
                    srcs: [`${d.EW}/web/chains/${n.chainId}.png`],
                    width: i,
                    style: a
                }) : n.isToken && (n.address === v.A$ || n.address === v.HK) ? (0, r.jsx)(m, { ...h,
                    size: i,
                    srcs: ["/assets/up-logo.png"],
                    width: i,
                    style: a
                }) : (0, r.jsx)(m, { ...h,
                    size: i,
                    srcs: p,
                    alt: `${null!==(t=null==n?void 0:n.symbol)&&void 0!==t?t:"token"} logo`,
                    style: a
                })
            };
            t.Z = h
        },
        50982: function(e, t, n) {
            n.d(t, {
                kD: function() {
                    return h
                },
                lI: function() {
                    return L
                },
                z4: function() {
                    return m
                }
            });
            var r = n(52983),
                u = n(25424),
                i = n(89789);
            n(8587), n(1428);
            var l = n(8104),
                s = n(52103),
                o = n(28506),
                a = n(37784),
                d = n(9797),
                c = n(12196),
                v = n(7291),
                f = n(7165);
            let m = () => (0, u.v9)(e => e.stake);

            function h() {
                let {
                    chainId: e
                } = (0, l.g)(), t = (0, i.TL)(), n = (0, s.Z)(), {
                    query: u,
                    isReady: c
                } = (0, o.useRouter)(), [v, m] = (0, r.useState)();
                return (0, r.useEffect)(() => {
                    var r, i, l;
                    if (!e || !n || !c) return;
                    let s = function(e, t, n) {
                        var r, u;
                        let i = d.A$,
                            l = d.A$;
                        return {
                            [f.gN.STAKING]: {
                                currencyId: i
                            },
                            [f.gN.RECEIVE]: {
                                currencyId: l
                            },
                            typedCurrencyValue: "string" != typeof(r = e.exactAmount) || Number.isNaN(parseFloat(r)) ? "" : r,
                            typedDurationValue: "365",
                            durationType: f.qj.DAYS,
                            independentField: "string" == typeof(u = e.exactField) && "output" === u.toLowerCase() ? f.gN.RECEIVE : f.gN.STAKING
                        }
                    }(u, n.symbol, null !== (l = null === (r = a.E9[e]) || void 0 === r ? void 0 : r.address) && void 0 !== l || null === (i = a.AA[e]) || void 0 === i || i.address);
                    t((0, f.H9)({
                        typedValue: s.typedCurrencyValue,
                        field: s.independentField,
                        inputCurrencyId: s[f.gN.STAKING].currencyId,
                        outputCurrencyId: s[f.gN.RECEIVE].currencyId
                    })), m({
                        inputCurrencyId: s[f.gN.STAKING].currencyId,
                        outputCurrencyId: s[f.gN.RECEIVE].currencyId
                    })
                }, [t, e, u, n, c]), v
            }
            let L = () => {
                let e = (0, v.WL)(),
                    [t, n] = (0, r.useState)(Array),
                    {
                        account: u
                    } = (0, c.G)(),
                    i = (0, r.useCallback)(async () => {
                        try {
                            if (!u || !e) return;
                            let t = await e.totalStaked(u),
                                r = t.toNumber(),
                                i = await Promise.all(Array.from(Array(r).keys()).map(t => e.stakes(u, t)));
                            i.length > 0 && n(i)
                        } catch (e) {}
                    }, [u, e]);
                return (0, r.useEffect)(() => {
                    i()
                }, []), t
            }
        },
        8587: function(e, t, n) {
            n.d(t, {
                K5: function() {
                    return p
                },
                Z: function() {
                    return h
                },
                _h: function() {
                    return g
                },
                mM: function() {
                    return L
                },
                uD: function() {
                    return y
                },
                v2: function() {
                    return m
                }
            });
            var r = n(57917),
                u = n(52983),
                i = n(17437),
                l = n(50256),
                s = n(77211),
                o = n(7291),
                a = n(25956),
                d = n(40916),
                c = n.n(d),
                v = n(52103),
                f = n(31163);

            function m(e, t) {
                var n;
                let i = (0, u.useMemo)(() => null !== (n = null == t ? void 0 : t.filter(e => !1 !== (0, a.UJ)(null == e ? void 0 : e.address))) && void 0 !== n ? n : [], [t]),
                    s = (0, u.useMemo)(() => i.map(e => e.address), [i]),
                    o = (0, f._Y)(s, l.ZP, "balanceOf", (0, u.useMemo)(() => [e], [e])),
                    d = (0, u.useMemo)(() => o.some(e => e.loading), [o]);
                return [(0, u.useMemo)(() => e && i.length > 0 ? i.reduce((e, t, n) => {
                    var u, i;
                    let l = null == o ? void 0 : null === (u = o[n]) || void 0 === u ? void 0 : null === (i = u.result) || void 0 === i ? void 0 : i[0],
                        s = l ? BigInt(l.toString()) : void 0;
                    return void 0 !== s && (e[t.address] = r.ih.fromRawAmount(t, s)), e
                }, {}) : {}, [e, i, o]), d]
            }

            function h(e, t) {
                return m(e, t)[0]
            }

            function L(e, t) {
                let n = h(e, (0, u.useMemo)(() => [t], [t]));
                if (t) return n[t.address]
            }

            function p(e, t) {
                var n, i, l;
                let s = (0, u.useMemo)(() => null !== (n = null == t ? void 0 : t.filter(e => null == e ? void 0 : e.isToken)) && void 0 !== n ? n : [], [...t]),
                    d = h(e, s),
                    m = (0, u.useMemo)(() => null !== (i = null == t ? void 0 : t.some(e => null == e ? void 0 : e.isNative)) && void 0 !== i && i, [...t]),
                    L = (0, u.useMemo)(() => m ? [e] : [], [m, e]),
                    p = function(e) {
                        let t = (0, v.Z)(),
                            n = (0, o.gq)(),
                            i = (0, u.useMemo)(() => e ? c()(e.map(a.UJ).filter(e => !1 !== e)) : [], [e]),
                            l = (0, f.es)(n, "getEthBalance", (0, u.useMemo)(() => i.map(e => [e]), [i]));
                        return (0, u.useMemo)(() => i.reduce((e, n, u) => {
                            var i, s;
                            let o = null == l ? void 0 : null === (i = l[u]) || void 0 === i ? void 0 : null === (s = i.result) || void 0 === s ? void 0 : s[0];
                            return o && (e[n] = r.ih.fromRawAmount(t, BigInt(o.toString()))), e
                        }, {}), [i, l, t])
                    }(L);
                return (0, u.useMemo)(() => null !== (l = null == t ? void 0 : t.map(t => {
                    if (e && t) {
                        if (null == t ? void 0 : t.isToken) return d[t.address];
                        if (null == t ? void 0 : t.isNative) return p[e]
                    }
                })) && void 0 !== l ? l : [], [e, ...t, p, d])
            }

            function g(e, t) {
                return p(e, (0, u.useMemo)(() => [t], [t]))[0]
            }

            function y() {
                let {
                    address: e
                } = (0, i.mA)(), t = (0, s.e_)(), n = (0, u.useMemo)(() => Object.values(null != t ? t : {}), [t]), r = h(null != e ? e : void 0, n);
                return null != r ? r : {}
            }
        },
        44987: function(e, t, n) {
            var r = n(34130),
                u = n(67997),
                i = n.n(u),
                l = n(57917);
            let s = {
                    [l.a_.BSC]: "smartchain",
                    [l.a_.ETHEREUM]: "ethereum",
                    [l.a_.BSC_TESTNET]: "smartchain testnet"
                },
                o = i()(e => e && s[e.chainId] ? `https://assets-cdn.trustwallet.com/blockchains/${s[e.chainId]}/assets/${(0,r.getAddress)(e.address)}/logo.png` : null, e => `${e.chainId}#${e.address}`);
            i()((e, t) => e && t && s[t] ? `https://assets-cdn.trustwallet.com/blockchains/${s[t]}/assets/${(0,r.getAddress)(e)}/logo.png` : null, (e, t) => `${t}#${e}`), t.Z = o
        },
        17286: function(e, t, n) {
            var r = n(97458);
            n(52983);
            var u = n(98030);
            let i = e => (0, r.jsxs)(u.Z, {
                viewBox: "0 0 96 96",
                ...e,
                children: [(0, r.jsx)("circle", {
                    cx: "48",
                    cy: "48",
                    r: "48",
                    fill: "#F0B90B"
                }), (0, r.jsx)("path", {
                    d: "M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z",
                    fill: "white"
                })]
            });
            t.Z = i
        },
        71351: function(e, t, n) {
            var r = n(97458);
            n(52983);
            var u = n(98030);
            let i = e => (0, r.jsxs)(u.Z, {
                viewBox: "0 0 24 24",
                ...e,
                children: [(0, r.jsx)("g", {
                    clipPath: "url(#clip0_2587_118570)",
                    children: (0, r.jsx)("path", {
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5a3.997 3.997 0 011.17-2.83l1.24-1.26c.46-.44.68-1.1.55-1.8a1.99 1.99 0 00-1.39-1.53c-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88a4.008 4.008 0 013.23-2.83c1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"
                    })
                }), (0, r.jsx)("defs", {
                    children: (0, r.jsx)("clipPath", {
                        id: "clip0_2587_118570",
                        children: (0, r.jsx)("path", {
                            fill: "#fff",
                            d: "M0 0H24V24H0z"
                        })
                    })
                })]
            });
            t.Z = i
        },
        3782: function(e, t, n) {
            var r = n(97458),
                u = n(52983),
                i = n(71351),
                l = n(9086);
            let s = {},
                o = e => {
                    let {
                        srcs: t,
                        useFilledIcon: n,
                        alt: o,
                        ...a
                    } = e, [, d] = (0, u.useState)(0), c = t.find(e => !s[e]);
                    return c ? (0, r.jsx)("img", { ...a,
                        alt: o,
                        src: c,
                        onError: () => {
                            c && (s[c] = !0), d(e => e + 1)
                        }
                    }) : n ? (0, r.jsx)(i.Z, {
                        color: "textSubtle",
                        ...a
                    }) : (0, r.jsx)(l.Z, { ...a
                    })
                };
            t.Z = o
        },
        1428: function(e, t, n) {
            var r = n(34130),
                u = n(92163);
            t.Z = function(e, t) {
                if (e && t) try {
                    let n = (0, r.parseUnits)(e, t.decimals).toString();
                    if ("0" !== n) return u.ih.fromRawAmount(t, BigInt(n))
                } catch (t) {
                    console.debug(`Failed to parse input amount: "${e}"`, t)
                }
            }
        }
    }
]);
//# sourceMappingURL=5206-1fd4e4bbd0b1726f.js.map