"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9374], {
        77211: function(e, n, r) {
            r.d(n, {
                EH: function() {
                    return S
                },
                U8: function() {
                    return M
                },
                ZN: function() {
                    return L
                },
                dQ: function() {
                    return F
                },
                e_: function() {
                    return h
                },
                l6: function() {
                    return p
                },
                uq: function() {
                    return g
                },
                zd: function() {
                    return y
                }
            });
            var t = r(34130),
                u = r(57917),
                i = r(19624),
                l = r(53223),
                o = r(52983),
                a = r(7058),
                s = r(25652),
                c = r(80856),
                d = r(25956),
                f = r(52103),
                v = r(8104),
                k = r(61504),
                m = r(93324),
                C = r(50256),
                b = r(51533);
            let T = (e, n) => Object.keys(e[n] || {}).reduce((r, t) => {
                let u = (0, d.UJ)(t);
                return u && !r[u] && (r[u] = e[n][t].token), r
            }, {});

            function h() {
                let {
                    chainId: e
                } = (0, v.g)(), n = (0, l.Dv)(s.i), r = (0, c.Z)();
                return (0, o.useMemo)(() => r.reduce((e, n) => {
                    let r = (0, d.UJ)(n.address);
                    return r && (e[r] = n), e
                }, T(n, e)), [r, n, e])
            }

            function g() {
                let {
                    chainId: e
                } = (0, v.g)(), n = (0, l.Dv)(s.HW), r = (0, c.Z)();
                return (0, o.useMemo)(() => r.reduce((e, n) => {
                    let r = (0, d.UJ)(n.address);
                    return r && (e[r] = n), e
                }, T(n, e)), [r, n, e])
            }

            function p() {
                let {
                    chainId: e
                } = (0, v.g)(), n = (0, s.Rx)();
                return (0, o.useMemo)(() => T(n, e), [n, e])
            }

            function y() {
                let e = (0, s.c6)(),
                    {
                        chainId: n
                    } = (0, v.g)();
                return (0, o.useMemo)(() => T(e, n), [e, n])
            }

            function L(e) {
                let n = h();
                if (!n || !e) return !1;
                let r = (0, d.UJ)(e.address);
                return r && !!n[r]
            }

            function S(e) {
                let n = (0, c.Z)();
                return !!e && !!n.find(n => null == e ? void 0 : e.equals(n))
            }
            let P = /^0x[a-fA-F0-9]{64}$/;

            function w(e, n, r) {
                return e && e.length > 0 ? e : n && P.test(n) && 0 === (0, t.arrayify)(n)[31] ? (0, t.parseBytes32String)(n) : r
            }

            function F(e) {
                var n, r, t, i, l;
                let {
                    chainId: s
                } = (0, v.g)(), c = h(), f = (0, d.UJ)(e), T = f ? c[f] : void 0, {
                    data: g,
                    status: p
                } = (0, a.Z)(!T && s && f && ["fetchTokenInfo", s, f], async () => {
                    let e = ["name", "symbol", "decimals"].map(e => ({
                        address: f.toString(),
                        name: e
                    }));
                    return (0, k.ZP)(m, e, s)
                }), y = null == g ? void 0 : null === (n = g[0]) || void 0 === n ? void 0 : n[0], L = null == g ? void 0 : null === (r = g[1]) || void 0 === r ? void 0 : r[0], S = null == g ? void 0 : null === (t = g[2]) || void 0 === t ? void 0 : t[0], {
                    data: P,
                    status: F
                } = (0, a.Z)(!T && s && f && (p === b.iF.Fetched || p === b.iF.Failed) && (!y || !L) && ["fetchTokenInfo32", s, f], async () => {
                    let e = ["name", "symbol"].map(e => ({
                        address: f.toString(),
                        name: e
                    }));
                    return (0, k.ZP)(C.Jz, e, s)
                }), M = null == P ? void 0 : null === (i = P[0]) || void 0 === i ? void 0 : i[0], U = null == P ? void 0 : null === (l = P[1]) || void 0 === l ? void 0 : l[0];
                return (0, o.useMemo)(() => {
                    if (T) return T;
                    if (s && f) {
                        if (p !== b.iF.Fetched && F !== b.iF.Fetched) return null;
                        if (Number.isInteger(S)) return new u.Z$(s, f, S, w(L, U, "UNKNOWN"), w(y, M, "Unknown Token"))
                    }
                }, [f, s, p, F, S, L, U, T, y, M])
            }

            function M(e) {
                var n;
                let r = (0, f.Z)(),
                    t = (null == e ? void 0 : e.toUpperCase()) === (null === (n = r.symbol) || void 0 === n ? void 0 : n.toUpperCase()) || (null == e ? void 0 : e.toLowerCase()) === i.ag,
                    u = F(t ? void 0 : e);
                return t ? r : u
            }
        },
        52103: function(e, n, r) {
            r.d(n, {
                Z: function() {
                    return l
                }
            });
            var t = r(57917),
                u = r(52983),
                i = r(8104);

            function l() {
                let {
                    chainId: e
                } = (0, i.g)();
                return (0, u.useMemo)(() => {
                    try {
                        return t._r.onChain(e)
                    } catch (e) {
                        return t._r.onChain(t.a_.BSC)
                    }
                }, [e])
            }
        },
        69374: function(e, n, r) {
            r.d(n, {
                $c: function() {
                    return M
                },
                A6: function() {
                    return D
                },
                B3: function() {
                    return B
                },
                Ce: function() {
                    return J
                },
                Fh: function() {
                    return N
                },
                Hx: function() {
                    return j
                },
                Pn: function() {
                    return _
                },
                QG: function() {
                    return E
                },
                TL: function() {
                    return U
                },
                VM: function() {
                    return G
                },
                XD: function() {
                    return L
                },
                YF: function() {
                    return y
                },
                Yi: function() {
                    return P
                },
                _E: function() {
                    return O
                },
                nF: function() {
                    return R
                },
                oI: function() {
                    return F
                },
                sg: function() {
                    return Z
                },
                tw: function() {
                    return S
                },
                uB: function() {
                    return z
                },
                vD: function() {
                    return p
                },
                y9: function() {
                    return w
                },
                z6: function() {
                    return I
                }
            });
            var t = r(57917),
                u = r(62385),
                i = r(79875),
                l = r.n(i),
                o = r(33355),
                a = r(52983),
                s = r(25424),
                c = r(9797),
                d = r(42202),
                f = r(7058),
                v = r(77211),
                k = r(96638),
                m = r(8104),
                C = r(25956),
                b = r(17437),
                T = r(89789),
                h = r(20218),
                g = r(33552);

            function p(e) {
                let n = (0, T.TL)(),
                    r = (0, s.v9)(e => e.user.isExchangeChartDisplayed),
                    t = (0, a.useCallback)(e => {
                        n((0, h.hN)(e))
                    }, [n]);
                return [!e && r, t]
            }

            function y() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.isSubgraphHealthIndicatorDisplayed),
                    r = (0, a.useCallback)(n => {
                        e((0, h.Hr)(n))
                    }, [e]);
                return [n, r]
            }

            function L(e) {
                let n = (0, T.TL)(),
                    r = (0, s.v9)(e => e.user.userFarmStakedOnly),
                    t = (0, a.useCallback)(e => {
                        let r = e ? h.GR.TRUE : h.GR.FALSE;
                        n((0, h.Gs)({
                            userFarmStakedOnly: r
                        }))
                    }, [n]);
                return [r === h.GR.ON_FINISHED ? !e : r === h.GR.TRUE, t]
            }

            function S() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userPoolStakedOnly),
                    r = (0, a.useCallback)(n => {
                        e((0, h.mm)({
                            userPoolStakedOnly: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function P() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userPoolsViewMode),
                    r = (0, a.useCallback)(n => {
                        e((0, h.d4)({
                            userPoolsViewMode: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function w() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userFarmsViewMode),
                    r = (0, a.useCallback)(n => {
                        e((0, h.gk)({
                            userFarmsViewMode: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function F() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userPredictionAcceptedRisk),
                    r = (0, a.useCallback)(n => {
                        e((0, h.RC)({
                            userAcceptedRisk: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function M() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userLimitOrderAcceptedWarning),
                    r = (0, a.useCallback)(n => {
                        e((0, h.X)({
                            userAcceptedRisk: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function U() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userPredictionChartDisclaimerShow),
                    r = (0, a.useCallback)(n => {
                        e((0, h.c4)({
                            userShowDisclaimer: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function Z() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userPredictionChainlinkChartDisclaimerShow),
                    r = (0, a.useCallback)(n => {
                        e((0, h.YA)({
                            userShowDisclaimer: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function _() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userUsernameVisibility),
                    r = (0, a.useCallback)(n => {
                        e((0, h.zk)({
                            userUsernameVisibility: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function D() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.userDeadline),
                    r = (0, a.useCallback)(n => {
                        e((0, h.gw)({
                            userDeadline: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function O() {
                let e = (0, T.TL)();
                return (0, a.useCallback)(n => {
                    e((0, h.eg)({
                        serializedToken: n.serialize
                    }))
                }, [e])
            }

            function E() {
                let e = (0, T.TL)();
                return (0, a.useCallback)((n, r) => {
                    e((0, h.zQ)({
                        chainId: n,
                        address: r
                    }))
                }, [e])
            }

            function G(e) {
                var n;
                let {
                    chainId: r
                } = (0, d.Z)(), u = null != e ? e : r, i = N(u), {
                    data: l
                } = (0, b.LK)({
                    chainId: u,
                    enabled: u !== t.a_.BSC && u !== t.a_.BSC_TESTNET,
                    watch: !0
                });
                return i ? {
                    gasPrice: i
                } : null !== (n = null == l ? void 0 : l.formatted) && void 0 !== n ? n : {
                    gasPrice: void 0
                }
            }

            function N(e) {
                let {
                    chainId: n
                } = (0, d.Z)(), r = null != e ? e : n, {
                    data: u
                } = (0, b.mx)({
                    chainId: r
                }), i = (0, s.v9)(e => e.user.gasPrice), {
                    data: l = g.j4.default
                } = (0, k.ZP)(u && r === t.a_.BSC && i === g.j4.rpcDefault && ["bscProviderGasPrice", u], async () => {
                    let e = await u.getGasPrice();
                    return e.toString()
                }, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1
                });
                return r === t.a_.BSC ? i === g.j4.rpcDefault ? l : i : r === t.a_.BSC_TESTNET ? g.j4.testnet : void 0
            }

            function R() {
                let e = (0, T.TL)(),
                    n = (0, s.v9)(e => e.user.gasPrice),
                    r = (0, a.useCallback)(n => {
                        e((0, h.dy)({
                            gasPrice: n
                        }))
                    }, [e]);
                return [n, r]
            }

            function z() {
                let e = (0, T.TL)();
                return (0, a.useCallback)(n => {
                    e((0, h.f9)({
                        serializedPair: {
                            token0: n.token0.serialize,
                            token1: n.token1.serialize
                        }
                    }))
                }, [e])
            }

            function J(e) {
                let [n, r] = e;
                return new t.Z$(n.chainId, t.sO.getAddress(n, r), 18, "Cake-LP", "Pancake LPs")
            }

            function B() {
                var e;
                let {
                    chainId: n
                } = (0, m.g)(), r = (0, v.uq)(), t = (0, a.useMemo)(() => n && null !== (e = c.Q8[n]) && void 0 !== e ? e : [], [n]), {
                    data: i = []
                } = (0, f.Z)(n && ["track-farms-pairs", n], async () => {
                    let e = await (0, o.getFarmConfig)(n),
                        r = e.filter(e => 0 !== e.pid).map(e => [(0, u.iG)(e.token), (0, u.iG)(e.quoteToken)]);
                    return r
                }), d = (0, a.useMemo)(() => n ? l()(Object.keys(r), e => {
                    var t;
                    let u = r[e];
                    return (null !== (t = c.xu[n]) && void 0 !== t ? t : []).map(n => {
                        let r = (0, C.UJ)(n.address);
                        return r && r === e ? null : [n, u]
                    }).filter(e => null !== e)
                }) : [], [r, n]), k = (0, s.v9)(e => {
                    let {
                        user: {
                            pairs: n
                        }
                    } = e;
                    return n
                }), b = (0, a.useMemo)(() => {
                    if (!n || !k) return [];
                    let e = k[n];
                    return e ? Object.keys(e).map(n => [(0, u.iG)(e[n].token0), (0, u.iG)(e[n].token1)]) : []
                }, [k, n]), T = (0, a.useMemo)(() => b.concat(d).concat(t).concat(i), [d, t, b, i]);
                return (0, a.useMemo)(() => {
                    let e = T.reduce((e, n) => {
                        let [r, t] = n, u = r.sortsBefore(t), i = u ? `${(0,C.UJ)(r.address)}:${(0,C.UJ)(t.address)}` : `${(0,C.UJ)(t.address)}:${(0,C.UJ)(r.address)}`;
                        return e[i] || (e[i] = u ? [r, t] : [t, r]), e
                    }, {});
                    return Object.keys(e).map(n => e[n])
                }, [T])
            }
            let I = () => {
                    let e = (0, T.TL)(),
                        n = (0, s.v9)(e => e.user.watchlistTokens),
                        r = (0, a.useCallback)(n => {
                            e((0, h.zS)({
                                address: n
                            }))
                        }, [e]),
                        t = (0, a.useMemo)(() => null != n ? n : [], [n]);
                    return [t, r]
                },
                j = () => {
                    let e = (0, T.TL)(),
                        n = (0, s.v9)(e => e.user.watchlistPools),
                        r = (0, a.useCallback)(n => {
                            e((0, h.Dn)({
                                address: n
                            }))
                        }, [e]),
                        t = (0, a.useMemo)(() => null != n ? n : [], [n]);
                    return [t, r]
                }
        },
        80856: function(e, n, r) {
            r.d(n, {
                Z: function() {
                    return d
                }
            });
            var t, u = r(52983),
                i = r(45493),
                l = r(62385),
                o = r(25424),
                a = r(8104);
            let s = e => {
                    let {
                        user: {
                            tokens: n
                        }
                    } = e;
                    return n
                },
                c = e => (0, i.P1)(s, n => Object.values(null !== (t = null == n ? void 0 : n[e]) && void 0 !== t ? t : {}).map(l.iG));

            function d() {
                let {
                    chainId: e
                } = (0, a.g)();
                return (0, o.v9)((0, u.useMemo)(() => c(e), [e]))
            }
        }
    }
]);
//# sourceMappingURL=9374-700186ab9f54b682.js.map