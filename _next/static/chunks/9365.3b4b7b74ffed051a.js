(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9365], {
        45869: function(e, t, n) {
            "use strict";
            n.d(t, {
                A7: function() {
                    return M
                },
                DS: function() {
                    return h
                },
                Gj: function() {
                    return I
                },
                H3: function() {
                    return v
                },
                KT: function() {
                    return j
                },
                Kb: function() {
                    return B
                },
                L_: function() {
                    return J
                },
                OG: function() {
                    return R
                },
                Pt: function() {
                    return d
                },
                QM: function() {
                    return f
                },
                VQ: function() {
                    return _
                },
                ZV: function() {
                    return E
                },
                Zr: function() {
                    return b
                },
                _W: function() {
                    return u
                },
                bZ: function() {
                    return U
                },
                eC: function() {
                    return x
                },
                eP: function() {
                    return L
                },
                ek: function() {
                    return p
                },
                eu: function() {
                    return w
                },
                fU: function() {
                    return A
                },
                gy: function() {
                    return k
                },
                ii: function() {
                    return m
                },
                kh: function() {
                    return l
                },
                ly: function() {
                    return y
                },
                oL: function() {
                    return P
                },
                oO: function() {
                    return g
                },
                pF: function() {
                    return S
                },
                w3: function() {
                    return q
                },
                wL: function() {
                    return F
                },
                xb: function() {
                    return W
                },
                y$: function() {
                    return C
                },
                zH: function() {
                    return T
                }
            });
            var r = n(48186),
                o = n.n(r),
                i = n(10186),
                s = n.n(i),
                a = n(15313).Buffer;
            let c = "utf8";

            function u(e) {
                return new Uint8Array(e)
            }

            function l(e, t = !1) {
                let n = e.toString("hex");
                return t ? J(n) : n
            }

            function d(e) {
                return e.toString(c)
            }

            function h(e) {
                return e.readUIntBE(0, e.length)
            }

            function f(e) {
                return s()(e)
            }

            function p(e, t = !1) {
                return l(f(e), t)
            }

            function g(e) {
                return d(f(e))
            }

            function _(e) {
                return h(f(e))
            }

            function m(e) {
                return a.from(j(e), "hex")
            }

            function w(e) {
                return u(m(e))
            }

            function v(e) {
                return d(m(e))
            }

            function y(e) {
                return _(w(e))
            }

            function b(e) {
                return a.from(e, c)
            }

            function E(e) {
                return u(b(e))
            }

            function R(e, t = !1) {
                return l(b(e), t)
            }

            function S(e) {
                let t = parseInt(e, 10);
                return function(e, t) {
                    if (!e) throw Error(t)
                }(void 0 !== t, "Number can only safely store up to 53 bits"), t
            }

            function C(e) {
                return f(N(O(e)))
            }

            function I(e) {
                return N(O(e))
            }

            function x(e, t) {
                return p(N(O(e)), t)
            }

            function k(e) {
                return `${e}`
            }

            function O(e) {
                let t = (e >>> 0).toString(2);
                return D(t)
            }

            function N(e) {
                return new Uint8Array((function(e, t = 8) {
                    let n = D(e).match(RegExp(`.{${t}}`, "gi"));
                    return Array.from(n || [])
                })(e).map(e => parseInt(e, 2)))
            }

            function M(e, t) {
                return "string" == typeof e && !!e.match(/^0x[0-9A-Fa-f]*$/) && (!t || e.length === 2 + 2 * t)
            }

            function T(e) {
                return a.isBuffer(e)
            }

            function A(e) {
                return o().strict(e) && !T(e)
            }

            function L(e) {
                return !A(e) && !T(e) && void 0 !== e.byteLength
            }

            function P(e) {
                return T(e) ? "buffer" : A(e) ? "typed-array" : L(e) ? "array-buffer" : Array.isArray(e) ? "array" : typeof e
            }

            function U(e) {
                return "string" == typeof e && new RegExp(/^[01]+$/).test(e) && e.length % 8 == 0 ? "binary" : M(e) ? "hex" : c
            }

            function B(...e) {
                let t = a.concat(e);
                return t
            }

            function q(...e) {
                let t = [];
                return e.forEach(e => t = t.concat(Array.from(e))), new Uint8Array([...t])
            }

            function D(e, t = 8, n = "0") {
                return function(e, t, n = "0") {
                    return function(e, t, n, r = "0") {
                        let o = t - e.length,
                            i = e;
                        if (o > 0) {
                            let t = r.repeat(o);
                            i = n ? t + e : e + t
                        }
                        return i
                    }(e, t, !0, n)
                }(e, function(e, t = 8) {
                    let n = e % t;
                    return n ? (e - n) / t * t + t : e
                }(e.length, t), n)
            }

            function j(e) {
                return e.replace(/^0x/, "")
            }

            function J(e) {
                return e.startsWith("0x") ? e : `0x${e}`
            }

            function W(e) {
                return (e = D(e = j(e), 2)) && (e = J(e)), e
            }

            function F(e) {
                let t = e.startsWith("0x");
                return e = (e = j(e)).startsWith("0") ? e.substring(1) : e, t ? J(e) : e
            }
        },
        16305: function(e, t, n) {
            "use strict";

            function r() {
                return (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) || (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) || {}
            }

            function o() {
                let e = r();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = r, t.getSubtleCrypto = o, t.isBrowserCryptoAvailable = function() {
                return !!r() && !!o()
            }
        },
        96451: function(e, t, n) {
            "use strict";
            var r = n(73656);

            function o() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function i() {
                return void 0 !== r && void 0 !== r.versions && void 0 !== r.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = o, t.isNode = i, t.isBrowser = function() {
                return !o() && !i()
            }
        },
        92389: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let r = n(33569);
            r.__exportStar(n(16305), t), r.__exportStar(n(96451), t)
        },
        57233: function(e, t, n) {
            "use strict";
            n.d(t, {
                IJsonRpcProvider: function() {
                    return o.x0
                }
            });
            var r = n(20222);
            n.o(r, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            }), n.o(r, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            });
            var o = n(83676),
                i = n(49368);
            n.o(i, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return i.isHttpUrl
                }
            }), n.o(i, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return i.isJsonRpcError
                }
            }), n.o(i, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return i.isJsonRpcResponse
                }
            })
        },
        20222: function() {},
        83676: function(e, t, n) {
            "use strict";
            n.d(t, {
                XR: function() {
                    return o
                },
                x0: function() {
                    return s
                }
            });
            class r {}
            class o extends r {
                constructor(e) {
                    super()
                }
            }
            class i extends r {
                constructor() {
                    super()
                }
            }
            class s extends i {
                constructor(e) {
                    super()
                }
            }
        },
        49368: function() {},
        22372: function(e, t, n) {
            "use strict";
            n.d(t, {
                CA: function() {
                    return o
                },
                JV: function() {
                    return a
                },
                O4: function() {
                    return r
                },
                dQ: function() {
                    return i
                },
                xK: function() {
                    return s
                }
            });
            let r = "INTERNAL_ERROR",
                o = "SERVER_ERROR",
                i = [-32700, -32600, -32601, -32602, -32603],
                s = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [r]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [o]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                a = o
        },
        34031: function(e, t, n) {
            "use strict";
            var r = n(92389);
            n.o(r, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            }), n.o(r, "formatJsonRpcError") && n.d(t, {
                formatJsonRpcError: function() {
                    return r.formatJsonRpcError
                }
            }), n.o(r, "formatJsonRpcRequest") && n.d(t, {
                formatJsonRpcRequest: function() {
                    return r.formatJsonRpcRequest
                }
            }), n.o(r, "getBigIntRpcId") && n.d(t, {
                getBigIntRpcId: function() {
                    return r.getBigIntRpcId
                }
            }), n.o(r, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            }), n.o(r, "payloadId") && n.d(t, {
                payloadId: function() {
                    return r.payloadId
                }
            })
        },
        18429: function(e, t, n) {
            "use strict";
            n.d(t, {
                CX: function() {
                    return a
                },
                L2: function() {
                    return s
                },
                by: function() {
                    return i
                },
                i5: function() {
                    return o
                }
            });
            var r = n(22372);

            function o(e) {
                return r.dQ.includes(e)
            }

            function i(e) {
                return Object.keys(r.xK).includes(e) ? r.xK[e] : r.xK[r.JV]
            }

            function s(e) {
                let t = Object.values(r.xK).find(t => t.code === e);
                return t || r.xK[r.JV]
            }

            function a(e, t, n) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${n} RPC url at ${t}`) : e
            }
        },
        919: function(e, t, n) {
            "use strict";
            n.d(t, {
                CS: function() {
                    return s
                },
                RI: function() {
                    return c
                },
                o0: function() {
                    return i
                },
                sT: function() {
                    return a
                }
            });
            var r = n(18429),
                o = n(22372);

            function i(e = 3) {
                let t = Date.now() * Math.pow(10, e);
                return t + Math.floor(Math.random() * Math.pow(10, e))
            }

            function s(e = 6) {
                return BigInt(i(e))
            }

            function a(e, t, n) {
                return {
                    id: n || i(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function c(e, t, n) {
                var i;
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: void 0 === (i = t) ? (0, r.by)(o.O4) : ("string" == typeof i && (i = Object.assign(Object.assign({}, (0, r.by)(o.CA)), {
                        message: i
                    })), void 0 !== n && (i.data = n), (0, r.i5)(i.code) && (i = (0, r.L2)(i.code)), i)
                }
            }
        },
        77609: function(e, t, n) {
            "use strict";
            n.d(t, {
                formatJsonRpcError: function() {
                    return i.RI
                },
                formatJsonRpcRequest: function() {
                    return i.sT
                },
                getBigIntRpcId: function() {
                    return i.CS
                },
                isHttpUrl: function() {
                    return a.jK
                },
                isJsonRpcError: function() {
                    return c.jg
                },
                isJsonRpcResponse: function() {
                    return c.u
                },
                parseConnectionError: function() {
                    return r.CX
                },
                payloadId: function() {
                    return i.o0
                }
            }), n(22372);
            var r = n(18429),
                o = n(34031);
            n.o(o, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return o.IJsonRpcProvider
                }
            }), n.o(o, "formatJsonRpcError") && n.d(t, {
                formatJsonRpcError: function() {
                    return o.formatJsonRpcError
                }
            }), n.o(o, "formatJsonRpcRequest") && n.d(t, {
                formatJsonRpcRequest: function() {
                    return o.formatJsonRpcRequest
                }
            }), n.o(o, "getBigIntRpcId") && n.d(t, {
                getBigIntRpcId: function() {
                    return o.getBigIntRpcId
                }
            }), n.o(o, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return o.isHttpUrl
                }
            }), n.o(o, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return o.isJsonRpcError
                }
            }), n.o(o, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return o.isJsonRpcResponse
                }
            }), n.o(o, "payloadId") && n.d(t, {
                payloadId: function() {
                    return o.payloadId
                }
            });
            var i = n(919),
                s = n(82271);
            n.o(s, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return s.IJsonRpcProvider
                }
            }), n.o(s, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return s.isHttpUrl
                }
            }), n.o(s, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return s.isJsonRpcError
                }
            }), n.o(s, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return s.isJsonRpcResponse
                }
            });
            var a = n(10899),
                c = n(22678)
        },
        82271: function(e, t, n) {
            "use strict";
            n.d(t, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            });
            var r = n(57233);
            n.o(r, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            })
        },
        10899: function(e, t, n) {
            "use strict";

            function r(e) {
                return function(e, t) {
                    let n = function(e) {
                        let t = e.match(RegExp(/^\w+:/, "gi"));
                        if (t && t.length) return t[0]
                    }(e);
                    return void 0 !== n && new RegExp(t).test(n)
                }(e, "^https?:")
            }
            n.d(t, {
                jK: function() {
                    return r
                }
            })
        },
        22678: function(e, t, n) {
            "use strict";

            function r(e) {
                return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc && ("result" in e || o(e))
            }

            function o(e) {
                return "error" in e
            }
            n.d(t, {
                jg: function() {
                    return o
                },
                u: function() {
                    return r
                }
            })
        },
        86213: function(e, t, n) {
            var r = n(73656);

            function o(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            var i = n(18384),
                s = o(n(24763)),
                a = o(n(86724)),
                c = n(83510);
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var u = "walletconnect-wrapper",
                l = "walletconnect-style-sheet",
                d = "walletconnect-qrcode-modal",
                h = "walletconnect-qrcode-text";

            function f(e) {
                return c.createElement("div", {
                    className: "walletconnect-modal__header"
                }, c.createElement("img", {
                    src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
                    className: "walletconnect-modal__headerLogo"
                }), c.createElement("p", null, "WalletConnect"), c.createElement("div", {
                    className: "walletconnect-modal__close__wrapper",
                    onClick: e.onClose
                }, c.createElement("div", {
                    id: "walletconnect-qrcode-close",
                    className: "walletconnect-modal__close__icon"
                }, c.createElement("div", {
                    className: "walletconnect-modal__close__line1"
                }), c.createElement("div", {
                    className: "walletconnect-modal__close__line2"
                }))))
            }

            function p(e) {
                return c.createElement("a", {
                    className: "walletconnect-connect__button",
                    href: e.href,
                    id: "walletconnect-connect-button-" + e.name,
                    onClick: e.onClick,
                    rel: "noopener noreferrer",
                    style: {
                        backgroundColor: e.color
                    },
                    target: "_blank"
                }, e.name)
            }

            function g(e) {
                var t = e.color,
                    n = e.href,
                    r = e.name,
                    o = e.logo,
                    i = e.onClick;
                return c.createElement("a", {
                    className: "walletconnect-modal__base__row",
                    href: n,
                    onClick: i,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, c.createElement("h3", {
                    className: "walletconnect-modal__base__row__h3"
                }, r), c.createElement("div", {
                    className: "walletconnect-modal__base__row__right"
                }, c.createElement("div", {
                    className: "walletconnect-modal__base__row__right__app-icon",
                    style: {
                        background: "url('" + o + "') " + t,
                        backgroundSize: "100%"
                    }
                }), c.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
                    className: "walletconnect-modal__base__row__right__caret"
                })))
            }

            function _(e) {
                var t = e.color,
                    n = e.href,
                    r = e.name,
                    o = e.logo,
                    i = e.onClick,
                    s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
                return c.createElement("a", {
                    className: "walletconnect-connect__button__icon_anchor",
                    href: n,
                    onClick: i,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, c.createElement("div", {
                    className: "walletconnect-connect__button__icon",
                    style: {
                        background: "url('" + o + "') " + t,
                        backgroundSize: "100%"
                    }
                }), c.createElement("div", {
                    style: {
                        fontSize: s
                    },
                    className: "walletconnect-connect__button__text"
                }, r))
            }

            function m(e) {
                var t = i.isAndroid(),
                    n = c.useState(""),
                    r = n[0],
                    o = n[1],
                    s = c.useState(""),
                    a = s[0],
                    u = s[1],
                    l = c.useState(1),
                    d = l[0],
                    f = l[1],
                    m = a ? e.links.filter(function(e) {
                        return e.name.toLowerCase().includes(a.toLowerCase())
                    }) : e.links,
                    w = e.errorMessage,
                    v = a || m.length > 5,
                    y = Math.ceil(m.length / 12),
                    b = [(d - 1) * 12 + 1, 12 * d],
                    E = m.length ? m.filter(function(e, t) {
                        return t + 1 >= b[0] && t + 1 <= b[1]
                    }) : [],
                    R = void 0;
                return c.createElement("div", null, c.createElement("p", {
                    id: h,
                    className: "walletconnect-qrcode__text"
                }, t ? e.text.connect_mobile_wallet : e.text.choose_preferred_wallet), !t && c.createElement("input", {
                    className: "walletconnect-search__input",
                    placeholder: "Search",
                    value: r,
                    onChange: function(e) {
                        o(e.target.value), clearTimeout(R), e.target.value ? R = setTimeout(function() {
                            u(e.target.value), f(1)
                        }, 1e3) : (o(""), u(""), f(1))
                    }
                }), c.createElement("div", {
                    className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : v && m.length ? "__wrap" : "")
                }, t ? c.createElement(p, {
                    name: e.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: e.uri,
                    onClick: c.useCallback(function() {
                        i.saveMobileLinkInfo({
                            name: "Unknown",
                            href: e.uri
                        })
                    }, [])
                }) : E.length ? E.map(function(t) {
                    var n = t.color,
                        r = t.name,
                        o = t.shortName,
                        s = t.logo,
                        a = i.formatIOSMobile(e.uri, t),
                        u = c.useCallback(function() {
                            i.saveMobileLinkInfo({
                                name: r,
                                href: a
                            })
                        }, [E]);
                    return v ? c.createElement(_, {
                        color: n,
                        href: a,
                        name: o || r,
                        logo: s,
                        onClick: u
                    }) : c.createElement(g, {
                        color: n,
                        href: a,
                        name: r,
                        logo: s,
                        onClick: u
                    })
                }) : c.createElement(c.Fragment, null, c.createElement("p", null, w.length ? e.errorMessage : e.links.length && !m.length ? e.text.no_wallets_found : e.text.loading))), !!(!t && y > 1) && c.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, Array(y).fill(0).map(function(e, t) {
                    var n = t + 1;
                    return c.createElement("a", {
                        style: {
                            margin: "auto 10px",
                            fontWeight: d === n ? "bold" : "normal"
                        },
                        onClick: function() {
                            return f(n)
                        }
                    }, n)
                })))
            }

            function w(e) {
                var t = !!e.message.trim();
                return c.createElement("div", {
                    className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
                }, e.message)
            }
            var v = function(e) {
                try {
                    var t = "";
                    return Promise.resolve(s.toString(e, {
                        margin: 0,
                        type: "svg"
                    })).then(function(e) {
                        return "string" == typeof e && (t = e.replace("<svg", '<svg class="walletconnect-qrcode__image"')), t
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
            };

            function y(e) {
                var t = c.useState(""),
                    n = t[0],
                    r = t[1],
                    o = c.useState(""),
                    i = o[0],
                    s = o[1];
                return c.useEffect(function() {
                    try {
                        return Promise.resolve(v(e.uri)).then(function(e) {
                            s(e)
                        })
                    } catch (e) {
                        Promise.reject(e)
                    }
                }, []), c.createElement("div", null, c.createElement("p", {
                    id: h,
                    className: "walletconnect-qrcode__text"
                }, e.text.scan_qrcode_with_wallet), c.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }), c.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, c.createElement("a", {
                    onClick: function() {
                        a(e.uri) ? (r(e.text.copied_to_clipboard), setInterval(function() {
                            return r("")
                        }, 1200)) : (r("Error"), setInterval(function() {
                            return r("")
                        }, 1200))
                    }
                }, e.text.copy_to_clipboard)), c.createElement(w, {
                    message: n
                }))
            }

            function b(e) {
                var t = i.isAndroid(),
                    n = i.isMobile(),
                    r = n ? e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0 : e.qrcodeModalOptions && e.qrcodeModalOptions.desktopLinks ? e.qrcodeModalOptions.desktopLinks : void 0,
                    o = c.useState(!1),
                    s = o[0],
                    a = o[1],
                    u = c.useState(!1),
                    l = u[0],
                    h = u[1],
                    p = c.useState(!n),
                    g = p[0],
                    _ = p[1],
                    w = {
                        mobile: n,
                        text: e.text,
                        uri: e.uri,
                        qrcodeModalOptions: e.qrcodeModalOptions
                    },
                    v = c.useState(""),
                    b = v[0],
                    E = v[1],
                    R = c.useState(!1),
                    S = R[0],
                    C = R[1],
                    I = c.useState([]),
                    x = I[0],
                    k = I[1],
                    O = c.useState(""),
                    N = O[0],
                    M = O[1],
                    T = function() {
                        l || s || r && !r.length || x.length > 0 || c.useEffect(function() {
                            ! function() {
                                try {
                                    if (t) return Promise.resolve();
                                    a(!0);
                                    var o = function(e, t) {
                                        try {
                                            var n = e()
                                        } catch (e) {
                                            return t(e)
                                        }
                                        return n && n.then ? n.then(void 0, t) : n
                                    }(function() {
                                        var t = e.qrcodeModalOptions && e.qrcodeModalOptions.registryUrl ? e.qrcodeModalOptions.registryUrl : i.getWalletRegistryUrl();
                                        return Promise.resolve(fetch(t)).then(function(t) {
                                            return Promise.resolve(t.json()).then(function(t) {
                                                var o = t.listings,
                                                    s = i.getMobileLinkRegistry(i.formatMobileRegistry(o, n ? "mobile" : "desktop"), r);
                                                a(!1), h(!0), M(s.length ? "" : e.text.no_supported_wallets), k(s);
                                                var c = 1 === s.length;
                                                c && (E(i.formatIOSMobile(e.uri, s[0])), _(!0)), C(c)
                                            })
                                        })
                                    }, function(t) {
                                        a(!1), h(!0), M(e.text.something_went_wrong), console.error(t)
                                    });
                                    Promise.resolve(o && o.then ? o.then(function() {}) : void 0)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                            }()
                        })
                    };
                return T(), c.createElement("div", {
                    id: d,
                    className: "walletconnect-qrcode__base animated fadeIn"
                }, c.createElement("div", {
                    className: "walletconnect-modal__base"
                }, c.createElement(f, {
                    onClose: e.onClose
                }), S && g ? c.createElement("div", {
                    className: "walletconnect-modal__single_wallet"
                }, c.createElement("a", {
                    onClick: function() {
                        return i.saveMobileLinkInfo({
                            name: x[0].name,
                            href: b
                        })
                    },
                    href: b,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, e.text.connect_with + " " + (S ? x[0].name : "") + " ›")) : t || s || !s && x.length ? c.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle" + ((n ? g : !g) ? " right__selected" : "")
                }, c.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector"
                }), n ? c.createElement(c.Fragment, null, c.createElement("a", {
                    onClick: function() {
                        return _(!1), T()
                    }
                }, e.text.mobile), c.createElement("a", {
                    onClick: function() {
                        return _(!0)
                    }
                }, e.text.qrcode)) : c.createElement(c.Fragment, null, c.createElement("a", {
                    onClick: function() {
                        return _(!0)
                    }
                }, e.text.qrcode), c.createElement("a", {
                    onClick: function() {
                        return _(!1), T()
                    }
                }, e.text.desktop))) : null, c.createElement("div", null, !g && (t || s || x.length) ? c.createElement(m, Object.assign({}, w, {
                    links: x,
                    errorMessage: N
                })) : c.createElement(y, Object.assign({}, w)))))
            }
            var E = {
                de: {
                    choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
                    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                    connect: "Verbinden",
                    qrcode: "QR-Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "In die Zwischenablage kopieren",
                    copied_to_clipboard: "In die Zwischenablage kopiert!",
                    connect_with: "Verbinden mit Hilfe von",
                    loading: "Laden...",
                    something_went_wrong: "Etwas ist schief gelaufen",
                    no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
                    no_wallets_found: "keine Wallet gefunden"
                },
                en: {
                    choose_preferred_wallet: "Choose your preferred wallet",
                    connect_mobile_wallet: "Connect to Mobile Wallet",
                    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                    connect: "Connect",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copy to clipboard",
                    copied_to_clipboard: "Copied to clipboard!",
                    connect_with: "Connect with",
                    loading: "Loading...",
                    something_went_wrong: "Something went wrong",
                    no_supported_wallets: "There are no supported wallets yet",
                    no_wallets_found: "No wallets found"
                },
                es: {
                    choose_preferred_wallet: "Elige tu billetera preferida",
                    connect_mobile_wallet: "Conectar a billetera m\xf3vil",
                    scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vil",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Conectar mediante",
                    loading: "Cargando...",
                    something_went_wrong: "Algo sali\xf3 mal",
                    no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
                    no_wallets_found: "No se encontraron billeteras"
                },
                fr: {
                    choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
                    connect_mobile_wallet: "Se connecter au portefeuille mobile",
                    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                    connect: "Se connecter",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copier",
                    copied_to_clipboard: "Copi\xe9!",
                    connect_with: "Connectez-vous \xe0 l'aide de",
                    loading: "Chargement...",
                    something_went_wrong: "Quelque chose a mal tourn\xe9",
                    no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
                    no_wallets_found: "Aucun portefeuille trouv\xe9"
                },
                ko: {
                    choose_preferred_wallet: "원하는 지갑을 선택하세요",
                    connect_mobile_wallet: "모바일 지갑과 연결",
                    scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
                    connect: "연결",
                    qrcode: "QR 코드",
                    mobile: "모바일",
                    desktop: "데스크탑",
                    copy_to_clipboard: "클립보드에 복사",
                    copied_to_clipboard: "클립보드에 복사되었습니다!",
                    connect_with: "와 연결하다",
                    loading: "로드 중...",
                    something_went_wrong: "문제가 발생했습니다.",
                    no_supported_wallets: "아직 지원되는 지갑이 없습니다",
                    no_wallets_found: "지갑을 찾을 수 없습니다"
                },
                pt: {
                    choose_preferred_wallet: "Escolha sua carteira preferida",
                    connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
                    scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vel",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Ligar por meio de",
                    loading: "Carregamento...",
                    something_went_wrong: "Algo correu mal",
                    no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
                    no_wallets_found: "Nenhuma carteira encontrada"
                },
                zh: {
                    choose_preferred_wallet: "选择你的钱包",
                    connect_mobile_wallet: "连接至移动端钱包",
                    scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
                    connect: "连接",
                    qrcode: "二维码",
                    mobile: "移动",
                    desktop: "桌面",
                    copy_to_clipboard: "复制到剪贴板",
                    copied_to_clipboard: "复制到剪贴板成功！",
                    connect_with: "通过以下方式连接",
                    loading: "正在加载...",
                    something_went_wrong: "出了问题",
                    no_supported_wallets: "目前还没有支持的钱包",
                    no_wallets_found: "没有找到钱包"
                },
                fa: {
                    choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
                    connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
                    scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
                    connect: "اتصال",
                    qrcode: "کد QR",
                    mobile: "سیار",
                    desktop: "دسکتاپ",
                    copy_to_clipboard: "کپی به کلیپ بورد",
                    copied_to_clipboard: "در کلیپ بورد کپی شد!",
                    connect_with: "ارتباط با",
                    loading: "...بارگذاری",
                    something_went_wrong: "مشکلی پیش آمد",
                    no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
                    no_wallets_found: "هیچ کیف پولی پیدا نشد"
                }
            };

            function R() {
                var e = i.getDocumentOrThrow(),
                    t = e.getElementById(d);
                t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
                    var t = e.getElementById(u);
                    t && e.body.removeChild(t)
                }, 300))
            }
            var S = function() {
                return void 0 !== r && void 0 !== r.versions && void 0 !== r.versions.node
            };
            e.exports = {
                open: function(e, t, n) {
                    if (console.log(e), S()) ! function(e) {
                        s.toString(e, {
                            type: "terminal"
                        }).then(console.log)
                    }(e);
                    else {
                        var r, o, a, d, h;
                        (o = (r = i.getDocumentOrThrow()).getElementById(l)) && r.head.removeChild(o), (a = r.createElement("style")).setAttribute("id", l), a.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n', r.head.appendChild(a), (h = (d = i.getDocumentOrThrow()).createElement("div")).setAttribute("id", u), d.body.appendChild(h), c.render(c.createElement(b, {
                            text: E[i.getNavigatorOrThrow().language.split("-")[0] || "en"] || E.en,
                            uri: e,
                            onClose: function() {
                                R(), t && t()
                            },
                            qrcodeModalOptions: n
                        }), h)
                    }
                },
                close: function() {
                    S() || R()
                }
            }
        },
        79365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                decrypt: function() {
                    return L
                },
                encrypt: function() {
                    return A
                },
                generateKey: function() {
                    return M
                },
                verifyHmac: function() {
                    return T
                }
            });
            var o = n(47324),
                i = n.n(o),
                s = n(77609);
            class a extends s.IJsonRpcProvider {
                constructor(e) {
                    super(e), this.events = new o.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict((0, s.formatJsonRpcRequest)(e.method, e.params || [], (0, s.getBigIntRpcId)().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (n, r) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            r(e)
                        }
                        this.events.on(`${e.id}`, e => {
                            (0, s.isJsonRpcError)(e) ? r(e.error): n(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            r(e)
                        }
                    })
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), (0, s.isJsonRpcResponse)(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            var c = n(67230),
                u = n.n(c),
                l = n(21646);
            let d = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class h {
                constructor(e) {
                    if (this.url = e, this.events = new o.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, s.isHttpUrl)(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        let t = (0, l.u)(e),
                            n = await u()(this.url, Object.assign(Object.assign({}, d), {
                                body: t
                            })),
                            r = await n.json();
                        this.onPayload({
                            data: r
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register(e = this.url) {
                    if (!(0, s.isHttpUrl)(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        let t = (0, l.u)({
                            id: 1,
                            jsonrpc: "2.0",
                            method: "test",
                            params: []
                        });
                        await u()(e, Object.assign(Object.assign({}, d), {
                            body: t
                        })), this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? (0, l.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let n = this.parseError(t),
                        r = n.message || n.toString(),
                        o = (0, s.formatJsonRpcError)(e, r);
                    this.events.emit("payload", o)
                }
                parseError(e, t = this.url) {
                    return (0, s.parseConnectionError)(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            var f = n(47352),
                p = n(18384),
                g = class {
                    constructor() {
                        this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")))
                    }
                    on(e, t) {
                        this._eventEmitters.push({
                            event: e,
                            callback: t
                        })
                    }
                    trigger(e) {
                        let t = [];
                        e && (t = this._eventEmitters.filter(t => t.event === e)), t.forEach(e => {
                            e.callback()
                        })
                    }
                };
            let _ = void 0 !== n.g.WebSocket ? n.g.WebSocket : n(74054);
            var m = class {
                    constructor(e) {
                        if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new g, !e.url || "string" != typeof e.url) throw Error("Missing or invalid WebSocket url");
                        this._url = e.url, this._netMonitor.on("online", () => this._socketCreate())
                    }
                    set readyState(e) {}
                    get readyState() {
                        return this._socket ? this._socket.readyState : -1
                    }
                    set connecting(e) {}
                    get connecting() {
                        return 0 === this.readyState
                    }
                    set connected(e) {}
                    get connected() {
                        return 1 === this.readyState
                    }
                    set closing(e) {}
                    get closing() {
                        return 2 === this.readyState
                    }
                    set closed(e) {}
                    get closed() {
                        return 3 === this.readyState
                    }
                    open() {
                        this._socketCreate()
                    }
                    close() {
                        this._socketClose()
                    }
                    send(e, t, n) {
                        if (!t || "string" != typeof t) throw Error("Missing or invalid topic field");
                        this._socketSend({
                            topic: t,
                            type: "pub",
                            payload: e,
                            silent: !!n
                        })
                    }
                    subscribe(e) {
                        this._socketSend({
                            topic: e,
                            type: "sub",
                            payload: "",
                            silent: !0
                        })
                    }
                    on(e, t) {
                        this._events.push({
                            event: e,
                            callback: t
                        })
                    }
                    _socketCreate() {
                        if (this._nextSocket) return;
                        let e = function(e, t, n) {
                            var r, o;
                            let i = e.startsWith("https") ? e.replace("https", "wss") : e.startsWith("http") ? e.replace("http", "ws") : e,
                                s = i.split("?"),
                                a = (0, p.isBrowser)() ? {
                                    protocol: t,
                                    version: n,
                                    env: "browser",
                                    host: (null === (r = (0, p.getLocation)()) || void 0 === r ? void 0 : r.host) || ""
                                } : {
                                    protocol: t,
                                    version: n,
                                    env: (null === (o = (0, p.detectEnv)()) || void 0 === o ? void 0 : o.name) || ""
                                },
                                c = (0, p.appendToQueryString)((0, p.getQueryString)(s[1] || ""), a);
                            return s[0] + "?" + c
                        }(this._url, this._protocol, this._version);
                        if (this._nextSocket = new _(e), !this._nextSocket) throw Error("Failed to create socket");
                        this._nextSocket.onmessage = e => this._socketReceive(e), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = e => this._socketError(e), this._nextSocket.onclose = () => {
                            setTimeout(() => {
                                this._nextSocket = null, this._socketCreate()
                            }, 1e3)
                        }
                    }
                    _socketOpen() {
                        this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                    }
                    _socketClose() {
                        this._socket && (this._socket.onclose = () => {}, this._socket.close())
                    }
                    _socketSend(e) {
                        let t = JSON.stringify(e);
                        this._socket && 1 === this._socket.readyState ? this._socket.send(t) : (this._setToQueue(e), this._socketCreate())
                    }
                    async _socketReceive(e) {
                        let t;
                        try {
                            t = JSON.parse(e.data)
                        } catch (e) {
                            return
                        }
                        if (this._socketSend({
                                topic: t.topic,
                                type: "ack",
                                payload: "",
                                silent: !0
                            }), this._socket && 1 === this._socket.readyState) {
                            let e = this._events.filter(e => "message" === e.event);
                            e && e.length && e.forEach(e => e.callback(t))
                        }
                    }
                    _socketError(e) {
                        let t = this._events.filter(e => "error" === e.event);
                        t && t.length && t.forEach(t => t.callback(e))
                    }
                    _queueSubscriptions() {
                        let e = this._subscriptions;
                        e.forEach(e => this._queue.push({
                            topic: e,
                            type: "sub",
                            payload: "",
                            silent: !0
                        })), this._subscriptions = this.opts.subscriptions || []
                    }
                    _setToQueue(e) {
                        this._queue.push(e)
                    }
                    _pushQueue() {
                        let e = this._queue;
                        e.forEach(e => this._socketSend(e)), this._queue = []
                    }
                },
                w = class {
                    constructor() {
                        this._eventEmitters = []
                    }
                    subscribe(e) {
                        this._eventEmitters.push(e)
                    }
                    unsubscribe(e) {
                        this._eventEmitters = this._eventEmitters.filter(t => t.event !== e)
                    }
                    trigger(e) {
                        let t, n = [];
                        (t = (0, p.isJsonRpcRequest)(e) ? e.method : (0, p.isJsonRpcResponseSuccess)(e) || (0, p.isJsonRpcResponseError)(e) ? `response:${e.id}` : (0, p.isInternalEvent)(e) ? e.event : "") && (n = this._eventEmitters.filter(e => e.event === t)), n && n.length || (0, p.isReservedEvent)(t) || (0, p.isInternalEvent)(t) || (n = this._eventEmitters.filter(e => "call_request" === e.event)), n.forEach(t => {
                            if ((0, p.isJsonRpcResponseError)(e)) {
                                let n = Error(e.error.message);
                                t.callback(n, null)
                            } else t.callback(null, e)
                        })
                    }
                },
                v = class {
                    constructor(e = "walletconnect") {
                        this.storageId = e
                    }
                    getSession() {
                        let e = null,
                            t = (0, p.getLocal)(this.storageId);
                        return t && (0, p.isWalletConnectSession)(t) && (e = t), e
                    }
                    setSession(e) {
                        return (0, p.setLocal)(this.storageId, e), e
                    }
                    removeSession() {
                        (0, p.removeLocal)(this.storageId)
                    }
                };
            let y = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(e => `https://${e}.bridge.walletconnect.org`);
            var b = class {
                    constructor(e) {
                        if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new w, this._clientMeta = (0, p.getClientMeta)() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new v(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...f.SIGNING_METHODS, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session) throw Error(f.ERROR_MISSING_REQUIRED);
                        if (e.connectorOpts.bridge) {
                            var t, n;
                            this.bridge = "walletconnect.org" !== (0, (0, ((n = t = e.connectorOpts.bridge).indexOf("//") > -1 ? n.split("/")[2] : n.split("/")[0]).split(":")[0]).split("?")[0]).split(".").slice(-2).join(".") ? t : y[Math.floor(Math.random() * y.length)]
                        }
                        e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
                        let r = e.connectorOpts.session || this._getStorageSession();
                        r && (this.session = r), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new m({
                            protocol: this.protocol,
                            version: this.version,
                            url: this.bridge,
                            subscriptions: [this.clientId]
                        }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts)
                    }
                    set bridge(e) {
                        e && (this._bridge = e)
                    }
                    get bridge() {
                        return this._bridge
                    }
                    set key(e) {
                        if (!e) return;
                        let t = (0, p.convertHexToArrayBuffer)(e);
                        this._key = t
                    }
                    get key() {
                        if (this._key) {
                            let e = (0, p.convertArrayBufferToHex)(this._key, !0);
                            return e
                        }
                        return ""
                    }
                    set clientId(e) {
                        e && (this._clientId = e)
                    }
                    get clientId() {
                        let e = this._clientId;
                        return e || (e = this._clientId = (0, p.uuid)()), this._clientId
                    }
                    set peerId(e) {
                        e && (this._peerId = e)
                    }
                    get peerId() {
                        return this._peerId
                    }
                    set clientMeta(e) {}
                    get clientMeta() {
                        let e = this._clientMeta;
                        return e || (e = this._clientMeta = (0, p.getClientMeta)()), e
                    }
                    set peerMeta(e) {
                        this._peerMeta = e
                    }
                    get peerMeta() {
                        let e = this._peerMeta;
                        return e
                    }
                    set handshakeTopic(e) {
                        e && (this._handshakeTopic = e)
                    }
                    get handshakeTopic() {
                        return this._handshakeTopic
                    }
                    set handshakeId(e) {
                        e && (this._handshakeId = e)
                    }
                    get handshakeId() {
                        return this._handshakeId
                    }
                    get uri() {
                        let e = this._formatUri();
                        return e
                    }
                    set uri(e) {
                        if (!e) return;
                        let {
                            handshakeTopic: t,
                            bridge: n,
                            key: r
                        } = this._parseUri(e);
                        this.handshakeTopic = t, this.bridge = n, this.key = r
                    }
                    set chainId(e) {
                        this._chainId = e
                    }
                    get chainId() {
                        let e = this._chainId;
                        return e
                    }
                    set networkId(e) {
                        this._networkId = e
                    }
                    get networkId() {
                        let e = this._networkId;
                        return e
                    }
                    set accounts(e) {
                        this._accounts = e
                    }
                    get accounts() {
                        let e = this._accounts;
                        return e
                    }
                    set rpcUrl(e) {
                        this._rpcUrl = e
                    }
                    get rpcUrl() {
                        let e = this._rpcUrl;
                        return e
                    }
                    set connected(e) {}
                    get connected() {
                        return this._connected
                    }
                    set pending(e) {}
                    get pending() {
                        return !!this._handshakeTopic
                    }
                    get session() {
                        return {
                            connected: this.connected,
                            accounts: this.accounts,
                            chainId: this.chainId,
                            bridge: this.bridge,
                            key: this.key,
                            clientId: this.clientId,
                            clientMeta: this.clientMeta,
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            handshakeId: this.handshakeId,
                            handshakeTopic: this.handshakeTopic
                        }
                    }
                    set session(e) {
                        e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic)
                    }
                    on(e, t) {
                        this._eventManager.subscribe({
                            event: e,
                            callback: t
                        })
                    }
                    off(e) {
                        this._eventManager.unsubscribe(e)
                    }
                    async createInstantRequest(e) {
                        this._key = await this._generateKey();
                        let t = this._formatRequest({
                            method: "wc_instantRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                request: this._formatRequest(e)
                            }]
                        });
                        this.handshakeId = t.id, this.handshakeTopic = (0, p.uuid)(), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        }), this.on("modal_closed", () => {
                            throw Error(f.ERROR_QRCODE_MODAL_USER_CLOSED)
                        });
                        let n = () => {
                            this.killSession()
                        };
                        try {
                            let e = await this._sendCallRequest(t);
                            return e && n(), e
                        } catch (e) {
                            throw n(), e
                        }
                    }
                    async connect(e) {
                        if (!this._qrcodeModal) throw Error(f.ERROR_QRCODE_MODAL_NOT_PROVIDED);
                        return this.connected ? {
                            chainId: this.chainId,
                            accounts: this.accounts
                        } : (await this.createSession(e), new Promise(async (e, t) => {
                            this.on("modal_closed", () => t(Error(f.ERROR_QRCODE_MODAL_USER_CLOSED))), this.on("connect", (n, r) => {
                                if (n) return t(n);
                                e(r.params[0])
                            })
                        }))
                    }
                    async createSession(e) {
                        if (this._connected) throw Error(f.ERROR_SESSION_CONNECTED);
                        if (this.pending) return;
                        this._key = await this._generateKey();
                        let t = this._formatRequest({
                            method: "wc_sessionRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                chainId: e && e.chainId ? e.chainId : null
                            }]
                        });
                        this.handshakeId = t.id, this.handshakeTopic = (0, p.uuid)(), this._sendSessionRequest(t, "Session update rejected", {
                            topic: this.handshakeTopic
                        }), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        })
                    }
                    approveSession(e) {
                        if (this._connected) throw Error(f.ERROR_SESSION_CONNECTED);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                        let t = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl,
                                peerId: this.clientId,
                                peerMeta: this.clientMeta
                            },
                            n = {
                                id: this.handshakeId,
                                jsonrpc: "2.0",
                                result: t
                            };
                        this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })
                    }
                    rejectSession(e) {
                        if (this._connected) throw Error(f.ERROR_SESSION_CONNECTED);
                        let t = e && e.message ? e.message : f.ERROR_SESSION_REJECTED,
                            n = this._formatResponse({
                                id: this.handshakeId,
                                error: {
                                    message: t
                                }
                            });
                        this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: t
                            }]
                        }), this._removeStorageSession()
                    }
                    updateSession(e) {
                        if (!this._connected) throw Error(f.ERROR_SESSION_DISCONNECTED);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                        let t = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl
                            },
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [t]
                            });
                        this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        }), this._manageStorageSession()
                    }
                    async killSession(e) {
                        let t = e ? e.message : "Session Disconnected",
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [{
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null
                                }]
                            });
                        await this._sendRequest(n), this._handleSessionDisconnect(t)
                    }
                    async sendTransaction(e) {
                        if (!this._connected) throw Error(f.ERROR_SESSION_DISCONNECTED);
                        let t = this._formatRequest({
                                method: "eth_sendTransaction",
                                params: [e]
                            }),
                            n = await this._sendCallRequest(t);
                        return n
                    }
                    async signTransaction(e) {
                        if (!this._connected) throw Error(f.ERROR_SESSION_DISCONNECTED);
                        let t = this._formatRequest({
                                method: "eth_signTransaction",
                                params: [e]
                            }),
                            n = await this._sendCallRequest(t);
                        return n
                    }
                    async signMessage(e) {
                        if (!this._connected) throw Error(f.ERROR_SESSION_DISCONNECTED);
                        let t = this._formatRequest({
                                method: "eth_sign",
                                params: e
                            }),
                            n = await this._sendCallRequest(t);
                        return n
                    }
                    async signPersonalMessage(e) {
                        if (!this._connected) throw Error(f.ERROR_SESSION_DISCONNECTED);
                        let t = this._formatRequest({
                                method: "personal_sign",
                                params: e
                            }),
                            n = await this._sendCallRequest(t);
                        return n
                    }
                    async signTypedData(e) {
                        if (!this._connected) throw Error(f.ERROR_SESSION_DISCONNECTED);
                        let t = this._formatRequest({
                                method: "eth_signTypedData",
                                params: e
                            }),
                            n = await this._sendCallRequest(t);
                        return n
                    }
                    async updateChain(e) {
                        if (!this._connected) throw Error("Session currently disconnected");
                        let t = this._formatRequest({
                                method: "wallet_updateChain",
                                params: [e]
                            }),
                            n = await this._sendCallRequest(t);
                        return n
                    }
                    unsafeSend(e, t) {
                        return this._sendRequest(e, t), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: e,
                                options: t
                            }]
                        }), new Promise((t, n) => {
                            this._subscribeToResponse(e.id, (e, r) => {
                                if (e) {
                                    n(e);
                                    return
                                }
                                if (!r) throw Error(f.ERROR_MISSING_JSON_RPC);
                                t(r)
                            })
                        })
                    }
                    async sendCustomRequest(e, t) {
                        if (!this._connected) throw Error(f.ERROR_SESSION_DISCONNECTED);
                        switch (e.method) {
                            case "eth_accounts":
                                return this.accounts;
                            case "eth_chainId":
                                return (0, p.convertNumberToHex)(this.chainId);
                            case "eth_sendTransaction":
                            case "eth_signTransaction":
                            case "personal_sign":
                                e.params
                        }
                        let n = this._formatRequest(e),
                            r = await this._sendCallRequest(n, t);
                        return r
                    }
                    approveRequest(e) {
                        if ((0, p.isJsonRpcResponseSuccess)(e)) {
                            let t = this._formatResponse(e);
                            this._sendResponse(t)
                        } else throw Error(f.ERROR_MISSING_RESULT)
                    }
                    rejectRequest(e) {
                        if ((0, p.isJsonRpcResponseError)(e)) {
                            let t = this._formatResponse(e);
                            this._sendResponse(t)
                        } else throw Error(f.ERROR_MISSING_ERROR)
                    }
                    transportClose() {
                        this._transport.close()
                    }
                    async _sendRequest(e, t) {
                        let n = this._formatRequest(e),
                            r = await this._encrypt(n),
                            o = void 0 !== (null == t ? void 0 : t.topic) ? t.topic : this.peerId,
                            i = JSON.stringify(r),
                            s = void 0 !== (null == t ? void 0 : t.forcePushNotification) ? !t.forcePushNotification : (0, p.isSilentPayload)(n);
                        this._transport.send(i, o, s)
                    }
                    async _sendResponse(e) {
                        let t = await this._encrypt(e),
                            n = this.peerId,
                            r = JSON.stringify(t);
                        this._transport.send(r, n, !0)
                    }
                    async _sendSessionRequest(e, t, n) {
                        this._sendRequest(e, n), this._subscribeToSessionResponse(e.id, t)
                    }
                    _sendCallRequest(e, t) {
                        return this._sendRequest(e, t), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: e,
                                options: t
                            }]
                        }), this._subscribeToCallResponse(e.id)
                    }
                    _formatRequest(e) {
                        if (void 0 === e.method) throw Error(f.ERROR_MISSING_METHOD);
                        let t = {
                            id: void 0 === e.id ? (0, p.payloadId)() : e.id,
                            jsonrpc: "2.0",
                            method: e.method,
                            params: void 0 === e.params ? [] : e.params
                        };
                        return t
                    }
                    _formatResponse(e) {
                        if (void 0 === e.id) throw Error(f.ERROR_MISSING_ID);
                        let t = {
                            id: e.id,
                            jsonrpc: "2.0"
                        };
                        if ((0, p.isJsonRpcResponseError)(e)) {
                            let n = (0, p.formatRpcError)(e.error),
                                r = Object.assign(Object.assign(Object.assign({}, t), e), {
                                    error: n
                                });
                            return r
                        }
                        if ((0, p.isJsonRpcResponseSuccess)(e)) {
                            let n = Object.assign(Object.assign({}, t), e);
                            return n
                        }
                        throw Error(f.ERROR_INVALID_RESPONSE)
                    }
                    _handleSessionDisconnect(e) {
                        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), (0, p.removeLocal)(f.MOBILE_LINK_CHOICE_KEY)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: e || "Session Disconnected"
                            }]
                        }), this._removeStorageSession(), this.transportClose()
                    }
                    _handleSessionResponse(e, t) {
                        t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })), this._manageStorageSession()) : this._handleSessionDisconnect(e)
                    }
                    async _handleIncomingMessages(e) {
                        let t;
                        let n = [this.clientId, this.handshakeTopic];
                        if (!n.includes(e.topic)) return;
                        try {
                            t = JSON.parse(e.payload)
                        } catch (e) {
                            return
                        }
                        let r = await this._decrypt(t);
                        r && this._eventManager.trigger(r)
                    }
                    _subscribeToSessionRequest() {
                        this._transport.subscribe(this.handshakeTopic)
                    }
                    _subscribeToResponse(e, t) {
                        this.on(`response:${e}`, t)
                    }
                    _subscribeToSessionResponse(e, t) {
                        this._subscribeToResponse(e, (e, n) => {
                            if (e) {
                                this._handleSessionResponse(e.message);
                                return
                            }(0, p.isJsonRpcResponseSuccess)(n) ? this._handleSessionResponse(t, n.result): n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(t)
                        })
                    }
                    _subscribeToCallResponse(e) {
                        return new Promise((t, n) => {
                            this._subscribeToResponse(e, (e, r) => {
                                if (e) {
                                    n(e);
                                    return
                                }(0, p.isJsonRpcResponseSuccess)(r) ? t(r.result): r.error && r.error.message ? n(r.error) : n(Error(f.ERROR_INVALID_RESPONSE))
                            })
                        })
                    }
                    _subscribeToInternalEvents() {
                        this.on("display_uri", () => {
                            this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
                                this._eventManager.trigger({
                                    event: "modal_closed",
                                    params: []
                                })
                            }, this._qrcodeModalOptions)
                        }), this.on("connect", () => {
                            this._qrcodeModal && this._qrcodeModal.close()
                        }), this.on("call_request_sent", (e, t) => {
                            let {
                                request: n
                            } = t.params[0];
                            if ((0, p.isMobile)() && this._signingMethods.includes(n.method)) {
                                let e = (0, p.getLocal)(f.MOBILE_LINK_CHOICE_KEY);
                                e && (window.location.href = e.href)
                            }
                        }), this.on("wc_sessionRequest", (e, t) => {
                            e && this._eventManager.trigger({
                                event: "error",
                                params: [{
                                    code: "SESSION_REQUEST_ERROR",
                                    message: e.toString()
                                }]
                            }), this.handshakeId = t.id, this.peerId = t.params[0].peerId, this.peerMeta = t.params[0].peerMeta;
                            let n = Object.assign(Object.assign({}, t), {
                                method: "session_request"
                            });
                            this._eventManager.trigger(n)
                        }), this.on("wc_sessionUpdate", (e, t) => {
                            e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", t.params[0])
                        })
                    }
                    _initTransport() {
                        this._transport.on("message", e => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({
                            event: "transport_open",
                            params: []
                        })), this._transport.on("close", () => this._eventManager.trigger({
                            event: "transport_close",
                            params: []
                        })), this._transport.on("error", () => this._eventManager.trigger({
                            event: "transport_error",
                            params: ["Websocket connection failed"]
                        })), this._transport.open()
                    }
                    _formatUri() {
                        let e = this.protocol,
                            t = this.handshakeTopic,
                            n = this.version,
                            r = encodeURIComponent(this.bridge),
                            o = this.key,
                            i = `${e}:${t}@${n}?bridge=${r}&key=${o}`;
                        return i
                    }
                    _parseUri(e) {
                        let t = (0, p.parseWalletConnectUri)(e);
                        if (t.protocol === this.protocol) {
                            if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                            let e = t.handshakeTopic;
                            if (!t.bridge) throw Error("Invalid or missing bridge url parameter value");
                            let n = decodeURIComponent(t.bridge);
                            if (!t.key) throw Error("Invalid or missing key parameter value");
                            let r = t.key;
                            return {
                                handshakeTopic: e,
                                bridge: n,
                                key: r
                            }
                        }
                        throw Error(f.ERROR_INVALID_URI)
                    }
                    async _generateKey() {
                        if (this._cryptoLib) {
                            let e = await this._cryptoLib.generateKey();
                            return e
                        }
                        return null
                    }
                    async _encrypt(e) {
                        let t = this._key;
                        if (this._cryptoLib && t) {
                            let n = await this._cryptoLib.encrypt(e, t);
                            return n
                        }
                        return null
                    }
                    async _decrypt(e) {
                        let t = this._key;
                        if (this._cryptoLib && t) {
                            let n = await this._cryptoLib.decrypt(e, t);
                            return n
                        }
                        return null
                    }
                    _getStorageSession() {
                        let e = null;
                        return this._sessionStorage && (e = this._sessionStorage.getSession()), e
                    }
                    _setStorageSession() {
                        this._sessionStorage && this._sessionStorage.setSession(this.session)
                    }
                    _removeStorageSession() {
                        this._sessionStorage && this._sessionStorage.removeSession()
                    }
                    _manageStorageSession() {
                        this._connected ? this._setStorageSession() : this._removeStorageSession()
                    }
                    _registerPushServer(e) {
                        if (!e.url || "string" != typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                        if (!e.type || "string" != typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                        if (!e.token || "string" != typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                        let t = {
                            bridge: this.bridge,
                            topic: this.clientId,
                            type: e.type,
                            token: e.token,
                            peerName: "",
                            language: e.language || ""
                        };
                        this.on("connect", async (n, r) => {
                            if (n) throw n;
                            if (e.peerMeta) {
                                let e = r.params[0].peerMeta.name;
                                t.peerName = e
                            }
                            try {
                                let n = await fetch(`${e.url}/new`, {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(t)
                                    }),
                                    r = await n.json();
                                if (!r.success) throw Error("Failed to register in Push Server")
                            } catch (e) {
                                throw Error("Failed to register in Push Server")
                            }
                        })
                    }
                },
                E = n(92389);
            let R = "AES-CBC",
                S = "HMAC";
            async function C(e, t = R) {
                return E.getSubtleCrypto().importKey("raw", e, t === R ? {
                    length: 256,
                    name: R
                } : {
                    hash: {
                        name: "SHA-256"
                    },
                    name: S
                }, !0, t === R ? ["encrypt", "decrypt"] : ["sign", "verify"])
            }
            async function I(e, t, n) {
                let r = E.getSubtleCrypto(),
                    o = await C(t, R),
                    i = await r.encrypt({
                        iv: e,
                        name: R
                    }, o, n);
                return new Uint8Array(i)
            }
            async function x(e, t, n) {
                let r = E.getSubtleCrypto(),
                    o = await C(t, R),
                    i = await r.decrypt({
                        iv: e,
                        name: R
                    }, o, n);
                return new Uint8Array(i)
            }
            async function k(e, t) {
                let n = E.getSubtleCrypto(),
                    r = await C(e, S),
                    o = await n.sign({
                        length: 256,
                        name: S
                    }, r, t);
                return new Uint8Array(o)
            }
            async function O(e, t) {
                let n = await k(e, t);
                return n
            }
            var N = n(45869);
            async function M(e) {
                let t = function(e) {
                        let t = E.getBrowerCrypto();
                        return t.getRandomValues(new Uint8Array(e))
                    }((e || 256) / 8),
                    n = (0, p.convertBufferToArrayBuffer)(N.QM(t));
                return n
            }
            async function T(e, t) {
                let n = N.eu(e.data),
                    r = N.eu(e.iv),
                    o = N.eu(e.hmac),
                    i = N.ek(o, !1),
                    s = N.w3(n, r),
                    a = await O(t, s),
                    c = N.ek(a, !1);
                return N.KT(i) === N.KT(c)
            }
            async function A(e, t, n) {
                let r = N._W((0, p.convertArrayBufferToBuffer)(t)),
                    o = n || await M(128),
                    i = N._W((0, p.convertArrayBufferToBuffer)(o)),
                    s = N.ek(i, !1),
                    a = JSON.stringify(e),
                    c = N.ZV(a),
                    u = await I(i, r, c),
                    l = N.ek(u, !1),
                    d = N.w3(u, i),
                    h = await O(r, d),
                    f = N.ek(h, !1);
                return {
                    data: l,
                    hmac: f,
                    iv: s
                }
            }
            async function L(e, t) {
                let n;
                let r = N._W((0, p.convertArrayBufferToBuffer)(t));
                if (!r) throw Error("Missing key: required for decryption");
                let o = await T(e, r);
                if (!o) return null;
                let i = N.eu(e.data),
                    s = N.eu(e.iv),
                    a = await x(s, r, i),
                    c = N.oO(a);
                try {
                    n = JSON.parse(c)
                } catch (e) {
                    return null
                }
                return n
            }
            var P = class extends b {
                    constructor(e, t) {
                        super({
                            cryptoLib: r,
                            connectorOpts: e,
                            pushServerOpts: t
                        })
                    }
                },
                U = n(86213),
                B = n.n(U),
                q = n(83676);
            class D extends q.XR {
                constructor(e) {
                    super(), this.events = new(i()), this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = e, this.chainId = (null == e ? void 0 : e.chainId) || this.chainId, this.wc = this.register(e)
                }
                get connected() {
                    return void 0 !== this.wc && this.wc.connected
                }
                get connecting() {
                    return this.pending
                }
                get connector() {
                    return this.wc = this.register(this.opts), this.wc
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e) {
                    if (this.connected) {
                        this.onOpen();
                        return
                    }
                    return new Promise((t, n) => {
                        this.on("error", e => {
                            n(e)
                        }), this.on("open", () => {
                            t()
                        }), this.create(e)
                    })
                }
                async close() {
                    void 0 !== this.wc && (this.wc.connected && this.wc.killSession(), this.onClose())
                }
                async send(e) {
                    this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(e).then(e => this.events.emit("payload", e)).catch(t => this.events.emit("payload", (0, s.formatJsonRpcError)(e.id, t.message)))
                }
                register(e) {
                    if (this.wc) return this.wc;
                    this.opts = e || this.opts, this.bridge = (null == e ? void 0 : e.connector) ? e.connector.bridge : (null == e ? void 0 : e.bridge) || "https://bridge.walletconnect.org", this.qrcode = void 0 === (null == e ? void 0 : e.qrcode) || !1 !== e.qrcode, this.chainId = void 0 !== (null == e ? void 0 : e.chainId) ? e.chainId : this.chainId, this.qrcodeModalOptions = null == e ? void 0 : e.qrcodeModalOptions;
                    let t = {
                        bridge: this.bridge,
                        qrcodeModal: this.qrcode ? B() : void 0,
                        qrcodeModalOptions: this.qrcodeModalOptions,
                        storageId: null == e ? void 0 : e.storageId,
                        signingMethods: null == e ? void 0 : e.signingMethods,
                        clientMeta: null == e ? void 0 : e.clientMeta
                    };
                    if (this.wc = void 0 !== (null == e ? void 0 : e.connector) ? e.connector : new P(t), void 0 === this.wc) throw Error("Failed to register WalletConnect connector");
                    return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc
                }
                onOpen(e) {
                    this.pending = !1, e && (this.wc = e), this.events.emit("open")
                }
                onClose() {
                    this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close")
                }
                onError(e, t = "Failed or Rejected Request", n = -32e3) {
                    let r = {
                        id: e.id,
                        jsonrpc: e.jsonrpc,
                        error: {
                            code: n,
                            message: t
                        }
                    };
                    return this.events.emit("payload", r), r
                }
                create(e) {
                    this.wc = this.register(this.opts), this.chainId = e || this.chainId, this.connected || this.pending || (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
                        chainId: this.chainId
                    }).then(() => this.events.emit("created")).catch(e => this.events.emit("error", e)))
                }
                registerConnectorEvents() {
                    this.wc = this.register(this.opts), this.wc.on("connect", e => {
                        var t, n;
                        if (e) {
                            this.events.emit("error", e);
                            return
                        }
                        this.accounts = (null === (t = this.wc) || void 0 === t ? void 0 : t.accounts) || [], this.chainId = (null === (n = this.wc) || void 0 === n ? void 0 : n.chainId) || this.chainId, this.onOpen()
                    }), this.wc.on("disconnect", e => {
                        if (e) {
                            this.events.emit("error", e);
                            return
                        }
                        this.onClose()
                    }), this.wc.on("modal_closed", () => {
                        this.events.emit("error", Error("User closed modal"))
                    }), this.wc.on("session_update", (e, t) => {
                        let {
                            accounts: n,
                            chainId: r
                        } = t.params[0];
                        (!this.accounts || n && this.accounts !== n) && (this.accounts = n, this.events.emit("accountsChanged", n)), (!this.chainId || r && this.chainId !== r) && (this.chainId = r, this.events.emit("chainChanged", r))
                    })
                }
                async sendPayload(e) {
                    this.wc = this.register(this.opts);
                    try {
                        let t = await this.wc.unsafeSend(e);
                        return this.sanitizeResponse(t)
                    } catch (t) {
                        return this.onError(e, t.message)
                    }
                }
                sanitizeResponse(e) {
                    return void 0 !== e.error && void 0 === e.error.code ? (0, s.formatJsonRpcError)(e.id, e.error.message, e.error.data) : e
                }
            }
            var j = class {
                constructor(e) {
                    this.events = new(i()), this.rpc = {
                        infuraId: null == e ? void 0 : e.infuraId,
                        custom: null == e ? void 0 : e.rpc
                    }, this.signer = new a(new D(e));
                    let t = this.signer.connection.chainId || (null == e ? void 0 : e.chainId) || 1;
                    this.http = this.setHttpProvider(t), this.registerEventListeners()
                }
                get connected() {
                    return this.signer.connection.connected
                }
                get connector() {
                    return this.signer.connection.connector
                }
                get accounts() {
                    return this.signer.connection.accounts
                }
                get chainId() {
                    return this.signer.connection.chainId
                }
                get rpcUrl() {
                    var e;
                    return (null === (e = this.http) || void 0 === e ? void 0 : e.connection).url || ""
                }
                async request(e) {
                    switch (e.method) {
                        case "eth_requestAccounts":
                            return await this.connect(), this.signer.connection.accounts;
                        case "eth_accounts":
                            return this.signer.connection.accounts;
                        case "eth_chainId":
                            return this.signer.connection.chainId
                    }
                    if (f.SIGNING_METHODS.includes(e.method)) return this.signer.request(e);
                    if (void 0 === this.http) throw Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);
                    return this.http.request(e)
                }
                sendAsync(e, t) {
                    this.request(e).then(e => t(null, e)).catch(e => t(e, void 0))
                }
                async enable() {
                    let e = await this.request({
                        method: "eth_requestAccounts"
                    });
                    return e
                }
                async connect() {
                    this.signer.connection.connected || await this.signer.connect()
                }
                async disconnect() {
                    this.signer.connection.connected && await this.signer.disconnect()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                registerEventListeners() {
                    this.signer.connection.on("accountsChanged", e => {
                        this.events.emit("accountsChanged", e)
                    }), this.signer.connection.on("chainChanged", e => {
                        this.http = this.setHttpProvider(e), this.events.emit("chainChanged", e)
                    }), this.signer.on("disconnect", () => {
                        this.events.emit("disconnect")
                    })
                }
                setHttpProvider(e) {
                    let t = (0, p.getRpcUrl)(e, this.rpc);
                    if (void 0 === t) return;
                    let n = new a(new h(t));
                    return n
                }
            }
        },
        56103: function() {},
        47352: function(e, t, n) {
            "use strict";
            n.d(t, {
                ERROR_INVALID_RESPONSE: function() {
                    return h
                },
                ERROR_INVALID_URI: function() {
                    return f
                },
                ERROR_MISSING_ERROR: function() {
                    return c
                },
                ERROR_MISSING_ID: function() {
                    return l
                },
                ERROR_MISSING_JSON_RPC: function() {
                    return s
                },
                ERROR_MISSING_METHOD: function() {
                    return u
                },
                ERROR_MISSING_REQUIRED: function() {
                    return d
                },
                ERROR_MISSING_RESULT: function() {
                    return a
                },
                ERROR_QRCODE_MODAL_NOT_PROVIDED: function() {
                    return p
                },
                ERROR_QRCODE_MODAL_USER_CLOSED: function() {
                    return g
                },
                ERROR_SESSION_CONNECTED: function() {
                    return r
                },
                ERROR_SESSION_DISCONNECTED: function() {
                    return o
                },
                ERROR_SESSION_REJECTED: function() {
                    return i
                },
                INFURA_NETWORKS: function() {
                    return v
                },
                MOBILE_LINK_CHOICE_KEY: function() {
                    return w
                },
                RESERVED_EVENTS: function() {
                    return _
                },
                SIGNING_METHODS: function() {
                    return m
                }
            }), n(56103);
            let r = "Session currently connected",
                o = "Session currently disconnected",
                i = "Session Rejected",
                s = "Missing JSON RPC response",
                a = 'JSON-RPC success response must include "result" field',
                c = 'JSON-RPC error response must include "error" field',
                u = 'JSON RPC request must have valid "method" value',
                l = 'JSON RPC request must have valid "id" value',
                d = "Missing one of the required parameters: bridge / uri / session",
                h = "JSON RPC response format is invalid",
                f = "URI format is invalid",
                p = "QRCode Modal not provided",
                g = "User close QRCode Modal",
                _ = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
                m = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                w = "WALLETCONNECT_DEEPLINK_CHOICE",
                v = {
                    1: "mainnet",
                    3: "ropsten",
                    4: "rinkeby",
                    5: "goerli",
                    42: "kovan"
                }
        },
        18384: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addHexPrefix: function() {
                    return ep
                },
                appendToQueryString: function() {
                    return eP
                },
                concatArrayBuffers: function() {
                    return c
                },
                concatBuffers: function() {
                    return f
                },
                convertArrayBufferToBuffer: function() {
                    return o
                },
                convertArrayBufferToHex: function() {
                    return s
                },
                convertArrayBufferToNumber: function() {
                    return a
                },
                convertArrayBufferToUtf8: function() {
                    return i
                },
                convertBufferToArrayBuffer: function() {
                    return u
                },
                convertBufferToHex: function() {
                    return d
                },
                convertBufferToNumber: function() {
                    return h
                },
                convertBufferToUtf8: function() {
                    return l
                },
                convertHexToArrayBuffer: function() {
                    return v
                },
                convertHexToBuffer: function() {
                    return w
                },
                convertHexToNumber: function() {
                    return b
                },
                convertHexToUtf8: function() {
                    return y
                },
                convertNumberToArrayBuffer: function() {
                    return R
                },
                convertNumberToBuffer: function() {
                    return E
                },
                convertNumberToHex: function() {
                    return C
                },
                convertNumberToUtf8: function() {
                    return S
                },
                convertUtf8ToArrayBuffer: function() {
                    return p
                },
                convertUtf8ToBuffer: function() {
                    return g
                },
                convertUtf8ToHex: function() {
                    return _
                },
                convertUtf8ToNumber: function() {
                    return m
                },
                detectEnv: function() {
                    return Y
                },
                detectOS: function() {
                    return G
                },
                formatIOSMobile: function() {
                    return eE
                },
                formatMobileRegistry: function() {
                    return eT
                },
                formatMobileRegistryEntry: function() {
                    return eM
                },
                formatQueryString: function() {
                    return eB
                },
                formatRpcError: function() {
                    return ex
                },
                getClientMeta: function() {
                    return el
                },
                getCrypto: function() {
                    return K
                },
                getCryptoOrThrow: function() {
                    return $
                },
                getDappRegistryUrl: function() {
                    return eN
                },
                getDocument: function() {
                    return J
                },
                getDocumentOrThrow: function() {
                    return j
                },
                getEncoding: function() {
                    return e$
                },
                getFromWindow: function() {
                    return q
                },
                getFromWindowOrThrow: function() {
                    return D
                },
                getInfuraRpcUrl: function() {
                    return ey
                },
                getLocal: function() {
                    return ea
                },
                getLocalStorage: function() {
                    return Q
                },
                getLocalStorageOrThrow: function() {
                    return V
                },
                getLocation: function() {
                    return z
                },
                getLocationOrThrow: function() {
                    return H
                },
                getMobileLinkRegistry: function() {
                    return eC
                },
                getMobileRegistryEntry: function() {
                    return eS
                },
                getNavigator: function() {
                    return F
                },
                getNavigatorOrThrow: function() {
                    return W
                },
                getQueryString: function() {
                    return eL
                },
                getRpcUrl: function() {
                    return eb
                },
                getType: function() {
                    return ez
                },
                getWalletRegistryUrl: function() {
                    return eO
                },
                isAndroid: function() {
                    return Z
                },
                isArrayBuffer: function() {
                    return eH
                },
                isBrowser: function() {
                    return en
                },
                isBuffer: function() {
                    return eW
                },
                isEmptyArray: function() {
                    return eJ
                },
                isEmptyString: function() {
                    return ej
                },
                isHexString: function() {
                    return eK
                },
                isIOS: function() {
                    return X
                },
                isInternalEvent: function() {
                    return eZ
                },
                isJsonRpcRequest: function() {
                    return eQ
                },
                isJsonRpcResponseError: function() {
                    return eG
                },
                isJsonRpcResponseSuccess: function() {
                    return eY
                },
                isJsonRpcSubscription: function() {
                    return eV
                },
                isMobile: function() {
                    return ee
                },
                isNode: function() {
                    return et
                },
                isReservedEvent: function() {
                    return eX
                },
                isSilentPayload: function() {
                    return e0
                },
                isTypedArray: function() {
                    return eF
                },
                isWalletConnectSession: function() {
                    return eq
                },
                logDeprecationWarning: function() {
                    return ev
                },
                parseQueryString: function() {
                    return eU
                },
                parseWalletConnectUri: function() {
                    return eD
                },
                payloadId: function() {
                    return em
                },
                promisify: function() {
                    return eI
                },
                removeHexLeadingZeros: function() {
                    return e_
                },
                removeHexPrefix: function() {
                    return eg
                },
                removeLocal: function() {
                    return ec
                },
                safeJsonParse: function() {
                    return eo
                },
                safeJsonStringify: function() {
                    return ei
                },
                sanitizeHex: function() {
                    return ef
                },
                saveMobileLinkInfo: function() {
                    return eR
                },
                setLocal: function() {
                    return es
                },
                uuid: function() {
                    return ew
                }
            });
            var r = n(45869);

            function o(e) {
                return r.QM(new Uint8Array(e))
            }

            function i(e) {
                return r.oO(new Uint8Array(e))
            }

            function s(e, t) {
                return r.ek(new Uint8Array(e), !t)
            }

            function a(e) {
                return r.VQ(new Uint8Array(e))
            }

            function c(...e) {
                return r.eu(e.map(e => r.ek(new Uint8Array(e))).join("")).buffer
            }

            function u(e) {
                return r._W(e).buffer
            }

            function l(e) {
                return r.Pt(e)
            }

            function d(e, t) {
                return r.kh(e, !t)
            }

            function h(e) {
                return r.DS(e)
            }

            function f(...e) {
                return r.Kb(...e)
            }

            function p(e) {
                return r.ZV(e).buffer
            }

            function g(e) {
                return r.Zr(e)
            }

            function _(e, t) {
                return r.OG(e, !t)
            }

            function m(e) {
                return r.pF(e)
            }

            function w(e) {
                return r.ii(e)
            }

            function v(e) {
                return r.eu(e).buffer
            }

            function y(e) {
                return r.H3(e)
            }

            function b(e) {
                return r.ly(e)
            }

            function E(e) {
                return r.y$(e)
            }

            function R(e) {
                return r.Gj(e).buffer
            }

            function S(e) {
                return r.gy(e)
            }

            function C(e, t) {
                return r.eC(Number(e), !t)
            }
            var I = n(73656),
                x = function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                k = function(e, t, n) {
                    this.name = e, this.version = t, this.os = n, this.type = "browser"
                },
                O = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = I.platform
                },
                N = function(e, t, n, r) {
                    this.name = e, this.version = t, this.os = n, this.bot = r, this.type = "bot-device"
                },
                M = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                T = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                A = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                L = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                P = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function U(e) {
                var t = "" !== e && L.reduce(function(t, n) {
                    var r = n[0],
                        o = n[1];
                    if (t) return t;
                    var i = o.exec(e);
                    return !!i && [r, i]
                }, !1);
                if (!t) return null;
                var n = t[0],
                    r = t[1];
                if ("searchbot" === n) return new M;
                var o = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
                o ? o.length < 3 && (o = x(x([], o, !0), function(e) {
                    for (var t = [], n = 0; n < e; n++) t.push("0");
                    return t
                }(3 - o.length), !0)) : o = [];
                var i = o.join("."),
                    s = function(e) {
                        for (var t = 0, n = P.length; t < n; t++) {
                            var r = P[t],
                                o = r[0];
                            if (r[1].exec(e)) return o
                        }
                        return null
                    }(e),
                    a = A.exec(e);
                return a && a[1] ? new N(n, i, s, a[1]) : new k(n, i, s)
            }
            var B = n(21846);
            let q = B.getFromWindow,
                D = B.getFromWindowOrThrow,
                j = B.getDocumentOrThrow,
                J = B.getDocument,
                W = B.getNavigatorOrThrow,
                F = B.getNavigator,
                H = B.getLocationOrThrow,
                z = B.getLocation,
                $ = B.getCryptoOrThrow,
                K = B.getCrypto,
                V = B.getLocalStorageOrThrow,
                Q = B.getLocalStorage;

            function Y(e) {
                return e ? U(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new T : "undefined" != typeof navigator ? U(navigator.userAgent) : void 0 !== I && I.version ? new O(I.version.slice(1)) : null
            }

            function G() {
                let e = Y();
                return e && e.os ? e.os : void 0
            }

            function Z() {
                let e = G();
                return !!e && e.toLowerCase().includes("android")
            }

            function X() {
                let e = G();
                return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
            }

            function ee() {
                let e = G();
                return !!e && (Z() || X())
            }

            function et() {
                let e = Y(),
                    t = !!e && !!e.name && "node" === e.name.toLowerCase();
                return t
            }

            function en() {
                let e = !et() && !!F();
                return e
            }
            var er = n(21646);
            let eo = er.D,
                ei = er.u;

            function es(e, t) {
                let n = ei(t),
                    r = Q();
                r && r.setItem(e, n)
            }

            function ea(e) {
                let t = null,
                    n = Q();
                return n && (t = n.getItem(e)), t ? eo(t) : t
            }

            function ec(e) {
                let t = Q();
                t && t.removeItem(e)
            }
            var eu = n(64390);

            function el() {
                return eu.D()
            }
            var ed = n(77609),
                eh = n(47352);

            function ef(e) {
                return r.xb(e)
            }

            function ep(e) {
                return r.L_(e)
            }

            function eg(e) {
                return r.KT(e)
            }

            function e_(e) {
                return r.wL(r.L_(e))
            }
            let em = ed.payloadId;

            function ew() {
                let e = ((e, t) => {
                    for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
                    return t
                })();
                return e
            }

            function ev() {
                console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")
            }

            function ey(e, t) {
                let n;
                let r = eh.INFURA_NETWORKS[e];
                return r && (n = `https://${r}.infura.io/v3/${t}`), n
            }

            function eb(e, t) {
                let n;
                let r = ey(e, t.infuraId);
                return t.custom && t.custom[e] ? n = t.custom[e] : r && (n = r), n
            }

            function eE(e, t) {
                let n = encodeURIComponent(e);
                return t.universalLink ? `${t.universalLink}/wc?uri=${n}` : t.deepLink ? `${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}` : ""
            }

            function eR(e) {
                let t = e.href.split("?")[0];
                es(eh.MOBILE_LINK_CHOICE_KEY, Object.assign(Object.assign({}, e), {
                    href: t
                }))
            }

            function eS(e, t) {
                return e.filter(e => e.name.toLowerCase().includes(t.toLowerCase()))[0]
            }

            function eC(e, t) {
                let n = e;
                return t && (n = t.map(t => eS(e, t)).filter(Boolean)), n
            }

            function eI(e, t) {
                let n = async (...n) => new Promise((r, o) => {
                    let i = (e, t) => {
                        null == e && o(e), r(t)
                    };
                    e.apply(t, [...n, i])
                });
                return n
            }

            function ex(e) {
                let t = e.message || "Failed or Rejected Request",
                    n = -32e3;
                if (e && !e.code) switch (t) {
                    case "Parse error":
                        n = -32700;
                        break;
                    case "Invalid request":
                        n = -32600;
                        break;
                    case "Method not found":
                        n = -32601;
                        break;
                    case "Invalid params":
                        n = -32602;
                        break;
                    case "Internal error":
                        n = -32603;
                        break;
                    default:
                        n = -32e3
                }
                let r = {
                    code: n,
                    message: t
                };
                return e.data && (r.data = e.data), r
            }
            let ek = "https://registry.walletconnect.com";

            function eO() {
                return ek + "/api/v2/wallets"
            }

            function eN() {
                return ek + "/api/v2/dapps"
            }

            function eM(e, t = "mobile") {
                var n;
                return {
                    name: e.name || "",
                    shortName: e.metadata.shortName || "",
                    color: e.metadata.colors.primary || "",
                    logo: null !== (n = e.image_url.sm) && void 0 !== n ? n : "",
                    universalLink: e[t].universal || "",
                    deepLink: e[t].native || ""
                }
            }

            function eT(e, t = "mobile") {
                return Object.values(e).filter(e => !!e[t].universal || !!e[t].native).map(e => eM(e, t))
            }
            var eA = n(81105);

            function eL(e) {
                let t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    n = void 0 !== t ? e.substr(t) : "";
                return n
            }

            function eP(e, t) {
                let n = eU(e);
                return e = eB(n = Object.assign(Object.assign({}, n), t))
            }

            function eU(e) {
                return eA.parse(e)
            }

            function eB(e) {
                return eA.stringify(e)
            }

            function eq(e) {
                return void 0 !== e.bridge
            }

            function eD(e) {
                let t = e.indexOf(":"),
                    n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    r = e.substring(0, t),
                    o = e.substring(t + 1, n),
                    i = function(e) {
                        let t = e.split("@"),
                            n = {
                                handshakeTopic: t[0],
                                version: parseInt(t[1], 10)
                            };
                        return n
                    }(o),
                    s = void 0 !== n ? e.substr(n) : "",
                    a = function(e) {
                        let t = eU(e),
                            n = {
                                key: t.key || "",
                                bridge: t.bridge || ""
                            };
                        return n
                    }(s),
                    c = Object.assign(Object.assign({
                        protocol: r
                    }, i), a);
                return c
            }

            function ej(e) {
                return "" === e || "string" == typeof e && "" === e.trim()
            }

            function eJ(e) {
                return !(e && e.length)
            }

            function eW(e) {
                return r.zH(e)
            }

            function eF(e) {
                return r.fU(e)
            }

            function eH(e) {
                return r.eP(e)
            }

            function ez(e) {
                return r.oL(e)
            }

            function e$(e) {
                return r.bZ(e)
            }

            function eK(e, t) {
                return r.A7(e, t)
            }

            function eV(e) {
                return "object" == typeof e.params
            }

            function eQ(e) {
                return void 0 !== e.method
            }

            function eY(e) {
                return void 0 !== e.result
            }

            function eG(e) {
                return void 0 !== e.error
            }

            function eZ(e) {
                return void 0 !== e.event
            }

            function eX(e) {
                return eh.RESERVED_EVENTS.includes(e) || e.startsWith("wc_")
            }

            function e0(e) {
                return !!e.method.startsWith("wc_") || !eh.SIGNING_METHODS.includes(e.method)
            }
        },
        21646: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return i
                },
                u: function() {
                    return s
                }
            });
            let r = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                o = e => {
                    let t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, (e, t) => {
                        let n = "string" == typeof t && t.match(/^\d+n$/);
                        return n ? BigInt(t.substring(0, t.length - 1)) : t
                    })
                };

            function i(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return o(e)
                } catch (t) {
                    return e
                }
            }

            function s(e) {
                return "string" == typeof e ? e : r(e) || ""
            }
        },
        21846: function(e, t) {
            "use strict";

            function n(e) {
                let t;
                return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
            }

            function r(e) {
                let t = n(e);
                if (!t) throw Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = n, t.getFromWindowOrThrow = r, t.getDocumentOrThrow = function() {
                return r("document")
            }, t.getDocument = function() {
                return n("document")
            }, t.getNavigatorOrThrow = function() {
                return r("navigator")
            }, t.getNavigator = function() {
                return n("navigator")
            }, t.getLocationOrThrow = function() {
                return r("location")
            }, t.getLocation = function() {
                return n("location")
            }, t.getCryptoOrThrow = function() {
                return r("crypto")
            }, t.getCrypto = function() {
                return n("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return r("localStorage")
            }, t.getLocalStorage = function() {
                return n("localStorage")
            }
        },
        64390: function(e, t, n) {
            "use strict";
            t.D = void 0;
            let r = n(21846);
            t.D = function() {
                let e, t, n;
                try {
                    e = r.getDocumentOrThrow(), t = r.getLocationOrThrow()
                } catch (e) {
                    return null
                }

                function o(...t) {
                    let n = e.getElementsByTagName("meta");
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e],
                            o = ["itemprop", "property", "name"].map(e => r.getAttribute(e)).filter(e => !!e && t.includes(e));
                        if (o.length && o) {
                            let e = r.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                let i = ((n = o("name", "og:site_name", "og:title", "twitter:title")) || (n = e.title), n),
                    s = function() {
                        let e = o("description", "og:description", "twitter:description", "keywords");
                        return e
                    }(),
                    a = t.origin,
                    c = function() {
                        let n = e.getElementsByTagName("link"),
                            r = [];
                        for (let e = 0; e < n.length; e++) {
                            let o = n[e],
                                i = o.getAttribute("rel");
                            if (i && i.toLowerCase().indexOf("icon") > -1) {
                                let e = o.getAttribute("href");
                                if (e) {
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let n = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) n += e;
                                        else {
                                            let r = t.pathname.split("/");
                                            r.pop();
                                            let o = r.join("/");
                                            n += o + "/" + e
                                        }
                                        r.push(n)
                                    } else if (0 === e.indexOf("//")) {
                                        let n = t.protocol + e;
                                        r.push(n)
                                    } else r.push(e)
                                }
                            }
                        }
                        return r
                    }();
                return {
                    description: s,
                    url: a,
                    icons: c,
                    name: i
                }
            }
        },
        86724: function(e, t, n) {
            "use strict";
            var r = n(80480),
                o = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, i, s, a, c, u, l, d, h = !1;
                t || (t = {}), s = t.debug || !1;
                try {
                    if (c = r(), u = document.createRange(), l = document.getSelection(), (d = document.createElement("span")).textContent = e, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function(n) {
                            if (n.stopPropagation(), t.format) {
                                if (n.preventDefault(), void 0 === n.clipboardData) {
                                    s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var r = o[t.format] || o.default;
                                    window.clipboardData.setData(r, e)
                                } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e)
                            }
                            t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                        }), document.body.appendChild(d), u.selectNodeContents(d), l.addRange(u), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    h = !0
                } catch (r) {
                    s && console.error("unable to copy using execCommand: ", r), s && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), h = !0
                    } catch (r) {
                        s && console.error("unable to copy using clipboardData: ", r), s && console.error("falling back to prompt"), n = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", a = n.replace(/#{\s*key\s*}/g, i), window.prompt(a, e)
                    }
                } finally {
                    l && ("function" == typeof l.removeRange ? l.removeRange(u) : l.removeAllRanges()), d && document.body.removeChild(d), c()
                }
                return h
            }
        },
        65140: function(e) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                n = RegExp("(" + t + ")|([^%]+?)", "gi"),
                r = RegExp("(" + t + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, o = r.exec(e); o;) {
                            try {
                                t[o[0]] = decodeURIComponent(o[0])
                            } catch (e) {
                                var i = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (o) {
                                        for (var t = e.match(n) || [], r = 1; r < t.length; r++) t = (e = (function e(t, n) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            n = n || 1;
                                            var r = t.slice(0, n),
                                                o = t.slice(n);
                                            return Array.prototype.concat.call([], e(r), e(o))
                                        })(t, r).join("")).match(n) || [];
                                        return e
                                    }
                                }(o[0]);
                                i !== o[0] && (t[o[0]] = i)
                            }
                            o = r.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var s = Object.keys(t), a = 0; a < s.length; a++) {
                            var c = s[a];
                            e = e.replace(RegExp(c, "g"), t[c])
                        }
                        return e
                    }(e)
                }
            }
        },
        49189: function(e) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, n, r) {
                    var o, i, s, a, c, u, l, d = {},
                        h = {};
                    h[n] = 0;
                    var f = t.PriorityQueue.make();
                    for (f.push(n, 0); !f.empty();)
                        for (s in i = (o = f.pop()).value, a = o.cost, c = e[i] || {}) c.hasOwnProperty(s) && (u = a + c[s], l = h[s], (void 0 === h[s] || l > u) && (h[s] = u, f.push(s, u), d[s] = i));
                    if (void 0 !== r && void 0 === h[r]) throw Error(["Could not find a path from ", n, " to ", r, "."].join(""));
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(e, t) {
                    for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
                    return n.reverse(), n
                },
                find_path: function(e, n, r) {
                    var o = t.single_source_shortest_paths(e, n, r);
                    return t.extract_shortest_path_from_predecessor_list(o, r)
                },
                PriorityQueue: {
                    make: function(e) {
                        var n, r = t.PriorityQueue,
                            o = {};
                        for (n in e = e || {}, r) r.hasOwnProperty(n) && (o[n] = r[n]);
                        return o.queue = [], o.sorter = e.sorter || r.default_sorter, o
                    },
                    default_sorter: function(e, t) {
                        return e.cost - t.cost
                    },
                    push: function(e, t) {
                        this.queue.push({
                            value: e,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        73668: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = [], n = e.length, r = 0; r < n; r++) {
                    var o = e.charCodeAt(r);
                    if (o >= 55296 && o <= 56319 && n > r + 1) {
                        var i = e.charCodeAt(r + 1);
                        i >= 56320 && i <= 57343 && (o = (o - 55296) * 1024 + i - 56320 + 65536, r += 1)
                    }
                    if (o < 128) {
                        t.push(o);
                        continue
                    }
                    if (o < 2048) {
                        t.push(o >> 6 | 192), t.push(63 & o | 128);
                        continue
                    }
                    if (o < 55296 || o >= 57344 && o < 65536) {
                        t.push(o >> 12 | 224), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128);
                        continue
                    }
                    if (o >= 65536 && o <= 1114111) {
                        t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128);
                        continue
                    }
                    t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        22475: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var n = {}, r = Object.keys(e), o = Array.isArray(t), i = 0; i < r.length; i++) {
                    var s = r[i],
                        a = e[s];
                    (o ? -1 !== t.indexOf(s) : t(s, a, e)) && (n[s] = a)
                }
                return n
            }
        },
        48186: function(e) {
            e.exports = r, r.strict = o, r.loose = i;
            var t = Object.prototype.toString,
                n = {
                    "[object Int8Array]": !0,
                    "[object Int16Array]": !0,
                    "[object Int32Array]": !0,
                    "[object Uint8Array]": !0,
                    "[object Uint8ClampedArray]": !0,
                    "[object Uint16Array]": !0,
                    "[object Uint32Array]": !0,
                    "[object Float32Array]": !0,
                    "[object Float64Array]": !0
                };

            function r(e) {
                return o(e) || i(e)
            }

            function o(e) {
                return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
            }

            function i(e) {
                return n[t.call(e)]
            }
        },
        83510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Children: function() {
                    return p
                },
                Component: function() {
                    return r.Component
                },
                Fragment: function() {
                    return r.Fragment
                },
                PureComponent: function() {
                    return c
                },
                StrictMode: function() {
                    return Y
                },
                Suspense: function() {
                    return m
                },
                SuspenseList: function() {
                    return y
                },
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: function() {
                    return J
                },
                cloneElement: function() {
                    return z
                },
                createContext: function() {
                    return r.createContext
                },
                createElement: function() {
                    return r.createElement
                },
                createFactory: function() {
                    return F
                },
                createPortal: function() {
                    return S
                },
                createRef: function() {
                    return r.createRef
                },
                default: function() {
                    return en
                },
                findDOMNode: function() {
                    return K
                },
                flushSync: function() {
                    return Q
                },
                forwardRef: function() {
                    return h
                },
                hydrate: function() {
                    return M
                },
                isValidElement: function() {
                    return H
                },
                lazy: function() {
                    return v
                },
                memo: function() {
                    return u
                },
                render: function() {
                    return N
                },
                startTransition: function() {
                    return G
                },
                unmountComponentAtNode: function() {
                    return $
                },
                unstable_batchedUpdates: function() {
                    return V
                },
                useCallback: function() {
                    return o.useCallback
                },
                useContext: function() {
                    return o.useContext
                },
                useDebugValue: function() {
                    return o.useDebugValue
                },
                useDeferredValue: function() {
                    return Z
                },
                useEffect: function() {
                    return o.useEffect
                },
                useErrorBoundary: function() {
                    return o.useErrorBoundary
                },
                useId: function() {
                    return o.useId
                },
                useImperativeHandle: function() {
                    return o.useImperativeHandle
                },
                useInsertionEffect: function() {
                    return ee
                },
                useLayoutEffect: function() {
                    return o.useLayoutEffect
                },
                useMemo: function() {
                    return o.useMemo
                },
                useReducer: function() {
                    return o.useReducer
                },
                useRef: function() {
                    return o.useRef
                },
                useState: function() {
                    return o.useState
                },
                useSyncExternalStore: function() {
                    return et
                },
                useTransition: function() {
                    return X
                },
                version: function() {
                    return W
                }
            });
            var r = n(63285),
                o = n(93767);

            function i(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function s(e, t) {
                for (var n in e)
                    if ("__source" !== n && !(n in t)) return !0;
                for (var r in t)
                    if ("__source" !== r && e[r] !== t[r]) return !0;
                return !1
            }

            function a(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }

            function c(e) {
                this.props = e
            }

            function u(e, t) {
                function n(e) {
                    var n = this.props.ref,
                        r = n == e.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : s(this.props, e)
                }

                function o(t) {
                    return this.shouldComponentUpdate = n, (0, r.createElement)(e, t)
                }
                return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o
            }(c.prototype = new r.Component).isPureReactComponent = !0, c.prototype.shouldComponentUpdate = function(e, t) {
                return s(this.props, e) || s(this.state, t)
            };
            var l = r.options.__b;
            r.options.__b = function(e) {
                e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), l && l(e)
            };
            var d = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

            function h(e) {
                function t(t) {
                    var n = i({}, t);
                    return delete n.ref, e(n, t.ref || null)
                }
                return t.$$typeof = d, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
            }
            var f = function(e, t) {
                    return null == e ? null : (0, r.toChildArray)((0, r.toChildArray)(e).map(t))
                },
                p = {
                    map: f,
                    forEach: f,
                    count: function(e) {
                        return e ? (0, r.toChildArray)(e).length : 0
                    },
                    only: function(e) {
                        var t = (0, r.toChildArray)(e);
                        if (1 !== t.length) throw "Children.only";
                        return t[0]
                    },
                    toArray: r.toChildArray
                },
                g = r.options.__e;
            r.options.__e = function(e, t, n, r) {
                if (e.then) {
                    for (var o, i = t; i = i.__;)
                        if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t)
                }
                g(e, t, n, r)
            };
            var _ = r.options.unmount;

            function m() {
                this.__u = 0, this.t = null, this.__b = null
            }

            function w(e) {
                var t = e.__.__c;
                return t && t.__a && t.__a(e)
            }

            function v(e) {
                var t, n, o;

                function i(i) {
                    if (t || (t = e()).then(function(e) {
                            n = e.default || e
                        }, function(e) {
                            o = e
                        }), o) throw o;
                    if (!n) throw t;
                    return (0, r.createElement)(n, i)
                }
                return i.displayName = "Lazy", i.__f = !0, i
            }

            function y() {
                this.u = null, this.o = null
            }
            r.options.unmount = function(e) {
                var t = e.__c;
                t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), _ && _(e)
            }, (m.prototype = new r.Component).__c = function(e, t) {
                var n = t.__c,
                    r = this;
                null == r.t && (r.t = []), r.t.push(n);
                var o = w(r.__v),
                    i = !1,
                    s = function() {
                        i || (i = !0, n.__R = null, o ? o(a) : a())
                    };
                n.__R = s;
                var a = function() {
                        if (!--r.__u) {
                            if (r.state.__a) {
                                var e, t = r.state.__a;
                                r.__v.__k[0] = function e(t, n, r) {
                                    return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(t) {
                                        return e(t, n, r)
                                    }), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                                }(t, t.__c.__P, t.__c.__O)
                            }
                            for (r.setState({
                                    __a: r.__b = null
                                }); e = r.t.pop();) e.forceUpdate()
                        }
                    },
                    c = !0 === t.__h;
                r.__u++ || c || r.setState({
                    __a: r.__b = r.__v.__k[0]
                }), e.then(s, s)
            }, m.prototype.componentWillUnmount = function() {
                this.t = []
            }, m.prototype.render = function(e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            o = this.__v.__k[0].__c;
                        this.__v.__k[0] = function e(t, n, r) {
                            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(e) {
                                "function" == typeof e.__c && e.__c()
                            }), t.__c.__H = null), null != (t = i({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map(function(t) {
                                return e(t, n, r)
                            })), t
                        }(this.__b, n, o.__O = o.__P)
                    }
                    this.__b = null
                }
                var s = t.__a && (0, r.createElement)(r.Fragment, null, e.fallback);
                return s && (s.__h = null), [(0, r.createElement)(r.Fragment, null, t.__a ? null : e.children), s]
            };
            var b = function(e, t, n) {
                if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                    for (n = e.u; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        e.u = n = n[2]
                    }
            };

            function E(e) {
                return this.getChildContext = function() {
                    return e.context
                }, e.children
            }

            function R(e) {
                var t = this,
                    n = e.i;
                t.componentWillUnmount = function() {
                    (0, r.render)(null, t.l), t.l = null, t.i = null
                }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    appendChild: function(e) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    insertBefore: function(e, n) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    removeChild: function(e) {
                        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
                    }
                }), (0, r.render)((0, r.createElement)(E, {
                    context: t.context
                }, e.__v), t.l)) : t.l && t.componentWillUnmount()
            }

            function S(e, t) {
                var n = (0, r.createElement)(R, {
                    __v: e,
                    i: t
                });
                return n.containerInfo = t, n
            }(y.prototype = new r.Component).__a = function(e) {
                var t = this,
                    n = w(t.__v),
                    r = t.o.get(e);
                return r[0]++,
                    function(o) {
                        var i = function() {
                            t.props.revealOrder ? (r.push(o), b(t, e, r)) : o()
                        };
                        n ? n(i) : i()
                    }
            }, y.prototype.render = function(e) {
                this.u = null, this.o = new Map;
                var t = (0, r.toChildArray)(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
                return e.children
            }, y.prototype.componentDidUpdate = y.prototype.componentDidMount = function() {
                var e = this;
                this.o.forEach(function(t, n) {
                    b(e, n, t)
                })
            };
            var C = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                I = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                x = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
                k = /[A-Z0-9]/g,
                O = "undefined" != typeof document;

            function N(e, t, n) {
                return null == t.__k && (t.textContent = ""), (0, r.render)(e, t), "function" == typeof n && n(), e ? e.__c : null
            }

            function M(e, t, n) {
                return (0, r.hydrate)(e, t), "function" == typeof n && n(), e ? e.__c : null
            }
            r.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
                Object.defineProperty(r.Component.prototype, e, {
                    configurable: !0,
                    get: function() {
                        return this["UNSAFE_" + e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            });
            var T = r.options.event;

            function A() {}

            function L() {
                return this.cancelBubble
            }

            function P() {
                return this.defaultPrevented
            }
            r.options.event = function(e) {
                return T && (e = T(e)), e.persist = A, e.isPropagationStopped = L, e.isDefaultPrevented = P, e.nativeEvent = e
            };
            var U, B = {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                q = r.options.vnode;
            r.options.vnode = function(e) {
                "string" == typeof e.type && function(e) {
                    var t = e.props,
                        n = e.type,
                        o = {};
                    for (var i in t) {
                        var s = t[i];
                        if (!("value" === i && "defaultValue" in t && null == s || O && "children" === i && "noscript" === n || "class" === i || "className" === i)) {
                            var a, c = i.toLowerCase();
                            "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === s ? s = "" : "ondoubleclick" === c ? i = "ondblclick" : "onchange" !== c || "input" !== n && "textarea" !== n || (a = t.type, ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(a)) ? "onfocus" === c ? i = "onfocusin" : "onblur" === c ? i = "onfocusout" : x.test(i) ? i = c : -1 === n.indexOf("-") && I.test(i) ? i = i.replace(k, "-$&").toLowerCase() : null === s && (s = void 0) : c = i = "oninput", "oninput" === c && o[i = c] && (i = "oninputCapture"), o[i] = s
                        }
                    }
                    "select" == n && o.multiple && Array.isArray(o.value) && (o.value = (0, r.toChildArray)(t.children).forEach(function(e) {
                        e.props.selected = -1 != o.value.indexOf(e.props.value)
                    })), "select" == n && null != o.defaultValue && (o.value = (0, r.toChildArray)(t.children).forEach(function(e) {
                        e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value
                    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", B)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), e.props = o
                }(e), e.$$typeof = C, q && q(e)
            };
            var D = r.options.__r;
            r.options.__r = function(e) {
                D && D(e), U = e.__c
            };
            var j = r.options.diffed;
            r.options.diffed = function(e) {
                j && j(e);
                var t = e.props,
                    n = e.__e;
                null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value), U = null
            };
            var J = {
                    ReactCurrentDispatcher: {
                        current: {
                            readContext: function(e) {
                                return U.__n[e.__c].props.value
                            }
                        }
                    }
                },
                W = "17.0.2";

            function F(e) {
                return r.createElement.bind(null, e)
            }

            function H(e) {
                return !!e && e.$$typeof === C
            }

            function z(e) {
                return H(e) ? r.cloneElement.apply(null, arguments) : e
            }

            function $(e) {
                return !!e.__k && ((0, r.render)(null, e), !0)
            }

            function K(e) {
                return e && (e.base || 1 === e.nodeType && e) || null
            }
            var V = function(e, t) {
                    return e(t)
                },
                Q = function(e, t) {
                    return e(t)
                },
                Y = r.Fragment;

            function G(e) {
                e()
            }

            function Z(e) {
                return e
            }

            function X() {
                return [!1, G]
            }
            var ee = o.useLayoutEffect;

            function et(e, t) {
                var n = t(),
                    r = (0, o.useState)({
                        h: {
                            __: n,
                            v: t
                        }
                    }),
                    i = r[0].h,
                    s = r[1];
                return (0, o.useLayoutEffect)(function() {
                    i.__ = n, i.v = t, a(i.__, t()) || s({
                        h: i
                    })
                }, [e, n, t]), (0, o.useEffect)(function() {
                    return a(i.__, i.v()) || s({
                        h: i
                    }), e(function() {
                        a(i.__, i.v()) || s({
                            h: i
                        })
                    })
                }, [e]), n
            }
            var en = {
                useState: o.useState,
                useId: o.useId,
                useReducer: o.useReducer,
                useEffect: o.useEffect,
                useLayoutEffect: o.useLayoutEffect,
                useInsertionEffect: ee,
                useTransition: X,
                useDeferredValue: Z,
                useSyncExternalStore: et,
                startTransition: G,
                useRef: o.useRef,
                useImperativeHandle: o.useImperativeHandle,
                useMemo: o.useMemo,
                useCallback: o.useCallback,
                useContext: o.useContext,
                useDebugValue: o.useDebugValue,
                version: "17.0.2",
                Children: p,
                render: N,
                hydrate: M,
                unmountComponentAtNode: $,
                createPortal: S,
                createElement: r.createElement,
                createContext: r.createContext,
                createFactory: F,
                cloneElement: z,
                createRef: r.createRef,
                Fragment: r.Fragment,
                isValidElement: H,
                findDOMNode: K,
                Component: r.Component,
                PureComponent: c,
                memo: u,
                forwardRef: h,
                flushSync: Q,
                unstable_batchedUpdates: V,
                StrictMode: Y,
                Suspense: m,
                SuspenseList: y,
                lazy: v,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: J
            }
        },
        24763: function(e, t, n) {
            let r = n(77274),
                o = n(87934),
                i = n(30206),
                s = n(53736);

            function a(e, t, n, i, s) {
                let a = [].slice.call(arguments, 1),
                    c = a.length,
                    u = "function" == typeof a[c - 1];
                if (!u && !r()) throw Error("Callback required as last argument");
                if (u) {
                    if (c < 2) throw Error("Too few arguments provided");
                    2 === c ? (s = n, n = t, t = i = void 0) : 3 === c && (t.getContext && void 0 === s ? (s = i, i = void 0) : (s = i, i = n, n = t, t = void 0))
                } else {
                    if (c < 1) throw Error("Too few arguments provided");
                    return 1 === c ? (n = t, t = i = void 0) : 2 !== c || t.getContext || (i = n, n = t, t = void 0), new Promise(function(r, s) {
                        try {
                            let s = o.create(n, i);
                            r(e(s, t, i))
                        } catch (e) {
                            s(e)
                        }
                    })
                }
                try {
                    let r = o.create(n, i);
                    s(null, e(r, t, i))
                } catch (e) {
                    s(e)
                }
            }
            t.create = o.create, t.toCanvas = a.bind(null, i.render), t.toDataURL = a.bind(null, i.renderToDataURL), t.toString = a.bind(null, function(e, t, n) {
                return s.render(e, n)
            })
        },
        77274: function(e) {
            e.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        25339: function(e, t, n) {
            let r = n(5244).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                let t = Math.floor(e / 7) + 2,
                    n = r(e),
                    o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
                    i = [n - 7];
                for (let e = 1; e < t - 1; e++) i[e] = i[e - 1] - o;
                return i.push(6), i.reverse()
            }, t.getPositions = function(e) {
                let n = [],
                    r = t.getRowColCoords(e),
                    o = r.length;
                for (let e = 0; e < o; e++)
                    for (let t = 0; t < o; t++)(0 !== e || 0 !== t) && (0 !== e || t !== o - 1) && (e !== o - 1 || 0 !== t) && n.push([r[e], r[t]]);
                return n
            }
        },
        2767: function(e, t, n) {
            let r = n(99542),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function i(e) {
                this.mode = r.ALPHANUMERIC, this.data = e
            }
            i.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + 6 * (e % 2)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let n = 45 * o.indexOf(this.data[t]);
                    n += o.indexOf(this.data[t + 1]), e.put(n, 11)
                }
                this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
            }, e.exports = i
        },
        74263: function(e) {
            function t() {
                this.buffer = [], this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    let t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        61325: function(e) {
            function t(e) {
                if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            t.prototype.set = function(e, t, n, r) {
                let o = e * this.size + t;
                this.data[o] = n, r && (this.reservedBit[o] = !0)
            }, t.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, t.prototype.xor = function(e, t, n) {
                this.data[e * this.size + t] ^= n
            }, t.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = t
        },
        76252: function(e, t, n) {
            let r = n(73668),
                o = n(99542);

            function i(e) {
                this.mode = o.BYTE, "string" == typeof e && (e = r(e)), this.data = new Uint8Array(e)
            }
            i.getBitsLength = function(e) {
                return 8 * e
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
            }, e.exports = i
        },
        92989: function(e, t, n) {
            let r = n(69838),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return o[(e - 1) * 4 + 0];
                    case r.M:
                        return o[(e - 1) * 4 + 1];
                    case r.Q:
                        return o[(e - 1) * 4 + 2];
                    case r.H:
                        return o[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return i[(e - 1) * 4 + 0];
                    case r.M:
                        return i[(e - 1) * 4 + 1];
                    case r.Q:
                        return i[(e - 1) * 4 + 2];
                    case r.H:
                        return i[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        69838: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        20391: function(e, t, n) {
            let r = n(5244).getSymbolSize;
            t.getPositions = function(e) {
                let t = r(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        85879: function(e, t, n) {
            let r = n(5244),
                o = r.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                let n = e.bit << 3 | t,
                    i = n << 10;
                for (; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
                return (n << 10 | i) ^ 21522
            }
        },
        44513: function(e, t) {
            let n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) n[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
                for (let e = 255; e < 512; e++) n[e] = n[e - 255]
            }(), t.log = function(e) {
                if (e < 1) throw Error("log(" + e + ")");
                return r[e]
            }, t.exp = function(e) {
                return n[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : n[r[e] + r[t]]
            }
        },
        31070: function(e, t, n) {
            let r = n(99542),
                o = n(5244);

            function i(e) {
                this.mode = r.KANJI, this.data = e
            }
            i.getBitsLength = function(e) {
                return 13 * e
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let n = o.toSJIS(this.data[t]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), e.put(n, 13)
                }
            }, e.exports = i
        },
        9761: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                let t = e.size,
                    r = 0,
                    o = 0,
                    i = 0,
                    s = null,
                    a = null;
                for (let c = 0; c < t; c++) {
                    o = i = 0, s = a = null;
                    for (let u = 0; u < t; u++) {
                        let t = e.get(c, u);
                        t === s ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), s = t, o = 1), (t = e.get(u, c)) === a ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), a = t, i = 1)
                    }
                    o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5))
                }
                return r
            }, t.getPenaltyN2 = function(e) {
                let t = e.size,
                    r = 0;
                for (let n = 0; n < t - 1; n++)
                    for (let o = 0; o < t - 1; o++) {
                        let t = e.get(n, o) + e.get(n, o + 1) + e.get(n + 1, o) + e.get(n + 1, o + 1);
                        (4 === t || 0 === t) && r++
                    }
                return r * n.N2
            }, t.getPenaltyN3 = function(e) {
                let t = e.size,
                    r = 0,
                    o = 0,
                    i = 0;
                for (let n = 0; n < t; n++) {
                    o = i = 0;
                    for (let s = 0; s < t; s++) o = o << 1 & 2047 | e.get(n, s), s >= 10 && (1488 === o || 93 === o) && r++, i = i << 1 & 2047 | e.get(s, n), s >= 10 && (1488 === i || 93 === i) && r++
                }
                return r * n.N3
            }, t.getPenaltyN4 = function(e) {
                let t = 0,
                    r = e.data.length;
                for (let n = 0; n < r; n++) t += e.data[n];
                let o = Math.abs(Math.ceil(100 * t / r / 5) - 10);
                return o * n.N4
            }, t.applyMask = function(e, n) {
                let r = n.size;
                for (let o = 0; o < r; o++)
                    for (let i = 0; i < r; i++) n.isReserved(i, o) || n.xor(i, o, function(e, n, r) {
                        switch (e) {
                            case t.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case t.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case t.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case t.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case t.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case t.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case t.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case t.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    }(e, i, o))
            }, t.getBestMask = function(e, n) {
                let r = Object.keys(t.Patterns).length,
                    o = 0,
                    i = 1 / 0;
                for (let s = 0; s < r; s++) {
                    n(s), t.applyMask(s, e);
                    let r = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(s, e), r < i && (i = r, o = s)
                }
                return o
            }
        },
        99542: function(e, t, n) {
            let r = n(49955),
                o = n(65037);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw Error("Invalid mode: " + e);
                if (!r.isValid(t)) throw Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        62437: function(e, t, n) {
            let r = n(99542);

            function o(e) {
                this.mode = r.NUMERIC, this.data = e.toString()
            }
            o.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t, n;
                for (t = 0; t + 3 <= this.data.length; t += 3) n = parseInt(this.data.substr(t, 3), 10), e.put(n, 10);
                let r = this.data.length - t;
                r > 0 && (n = parseInt(this.data.substr(t), 10), e.put(n, 3 * r + 1))
            }, e.exports = o
        },
        3832: function(e, t, n) {
            let r = n(44513);
            t.mul = function(e, t) {
                let n = new Uint8Array(e.length + t.length - 1);
                for (let o = 0; o < e.length; o++)
                    for (let i = 0; i < t.length; i++) n[o + i] ^= r.mul(e[o], t[i]);
                return n
            }, t.mod = function(e, t) {
                let n = new Uint8Array(e);
                for (; n.length - t.length >= 0;) {
                    let e = n[0];
                    for (let o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], e);
                    let o = 0;
                    for (; o < n.length && 0 === n[o];) o++;
                    n = n.slice(o)
                }
                return n
            }, t.generateECPolynomial = function(e) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < e; o++) n = t.mul(n, new Uint8Array([1, r.exp(o)]));
                return n
            }
        },
        87934: function(e, t, n) {
            let r = n(5244),
                o = n(69838),
                i = n(74263),
                s = n(61325),
                a = n(25339),
                c = n(20391),
                u = n(9761),
                l = n(92989),
                d = n(42860),
                h = n(42226),
                f = n(85879),
                p = n(99542),
                g = n(85750);

            function _(e, t, n) {
                let r, o;
                let i = e.size,
                    s = f.getEncodedBits(t, n);
                for (r = 0; r < 15; r++) o = (s >> r & 1) == 1, r < 6 ? e.set(r, 8, o, !0) : r < 8 ? e.set(r + 1, 8, o, !0) : e.set(i - 15 + r, 8, o, !0), r < 8 ? e.set(8, i - r - 1, o, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, o, !0) : e.set(8, 15 - r - 1, o, !0);
                e.set(i - 8, 8, 1, !0)
            }
            t.create = function(e, t) {
                let n, f;
                if (void 0 === e || "" === e) throw Error("No input text");
                let m = o.M;
                return void 0 !== t && (m = o.from(t.errorCorrectionLevel, o.M), n = h.from(t.version), f = u.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
                    function(e, t, n, o) {
                        let f;
                        if (Array.isArray(e)) f = g.fromArray(e);
                        else if ("string" == typeof e) {
                            let r = t;
                            if (!r) {
                                let t = g.rawSplit(e);
                                r = h.getBestVersionForData(t, n)
                            }
                            f = g.fromString(e, r || 40)
                        } else throw Error("Invalid data");
                        let m = h.getBestVersionForData(f, n);
                        if (!m) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (t) {
                            if (t < m) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
                        } else t = m;
                        let w = function(e, t, n) {
                                let o = new i;
                                n.forEach(function(t) {
                                    o.put(t.mode.bit, 4), o.put(t.getLength(), p.getCharCountIndicator(t.mode, e)), t.write(o)
                                });
                                let s = r.getSymbolTotalCodewords(e),
                                    a = l.getTotalCodewordsCount(e, t),
                                    c = (s - a) * 8;
                                for (o.getLengthInBits() + 4 <= c && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let u = (c - o.getLengthInBits()) / 8;
                                for (let e = 0; e < u; e++) o.put(e % 2 ? 17 : 236, 8);
                                return function(e, t, n) {
                                    let o, i;
                                    let s = r.getSymbolTotalCodewords(t),
                                        a = l.getTotalCodewordsCount(t, n),
                                        c = l.getBlocksCount(t, n),
                                        u = c - s % c,
                                        h = Math.floor((s - a) / c),
                                        f = h + 1,
                                        p = Math.floor(s / c) - h,
                                        g = new d(p),
                                        _ = 0,
                                        m = Array(c),
                                        w = Array(c),
                                        v = 0,
                                        y = new Uint8Array(e.buffer);
                                    for (let e = 0; e < c; e++) {
                                        let t = e < u ? h : f;
                                        m[e] = y.slice(_, _ + t), w[e] = g.encode(m[e]), _ += t, v = Math.max(v, t)
                                    }
                                    let b = new Uint8Array(s),
                                        E = 0;
                                    for (o = 0; o < v; o++)
                                        for (i = 0; i < c; i++) o < m[i].length && (b[E++] = m[i][o]);
                                    for (o = 0; o < p; o++)
                                        for (i = 0; i < c; i++) b[E++] = w[i][o];
                                    return b
                                }(o, e, t)
                            }(t, n, f),
                            v = r.getSymbolSize(t),
                            y = new s(v);
                        return function(e, t) {
                                let n = e.size,
                                    r = c.getPositions(t);
                                for (let t = 0; t < r.length; t++) {
                                    let o = r[t][0],
                                        i = r[t][1];
                                    for (let t = -1; t <= 7; t++)
                                        if (!(o + t <= -1) && !(n <= o + t))
                                            for (let r = -1; r <= 7; r++) i + r <= -1 || n <= i + r || (t >= 0 && t <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(o + t, i + r, !0, !0) : e.set(o + t, i + r, !1, !0))
                                }
                            }(y, t),
                            function(e) {
                                let t = e.size;
                                for (let n = 8; n < t - 8; n++) {
                                    let t = n % 2 == 0;
                                    e.set(n, 6, t, !0), e.set(6, n, t, !0)
                                }
                            }(y),
                            function(e, t) {
                                let n = a.getPositions(t);
                                for (let t = 0; t < n.length; t++) {
                                    let r = n[t][0],
                                        o = n[t][1];
                                    for (let t = -2; t <= 2; t++)
                                        for (let n = -2; n <= 2; n++) - 2 === t || 2 === t || -2 === n || 2 === n || 0 === t && 0 === n ? e.set(r + t, o + n, !0, !0) : e.set(r + t, o + n, !1, !0)
                                }
                            }(y, t), _(y, n, 0), t >= 7 && function(e, t) {
                                let n, r, o;
                                let i = e.size,
                                    s = h.getEncodedBits(t);
                                for (let t = 0; t < 18; t++) n = Math.floor(t / 3), r = t % 3 + i - 8 - 3, o = (s >> t & 1) == 1, e.set(n, r, o, !0), e.set(r, n, o, !0)
                            }(y, t),
                            function(e, t) {
                                let n = e.size,
                                    r = -1,
                                    o = n - 1,
                                    i = 7,
                                    s = 0;
                                for (let a = n - 1; a > 0; a -= 2)
                                    for (6 === a && a--;;) {
                                        for (let n = 0; n < 2; n++)
                                            if (!e.isReserved(o, a - n)) {
                                                let r = !1;
                                                s < t.length && (r = (t[s] >>> i & 1) == 1), e.set(o, a - n, r), -1 == --i && (s++, i = 7)
                                            }
                                        if ((o += r) < 0 || n <= o) {
                                            o -= r, r = -r;
                                            break
                                        }
                                    }
                            }(y, w), isNaN(o) && (o = u.getBestMask(y, _.bind(null, y, n))), u.applyMask(o, y), _(y, n, o), {
                                modules: y,
                                version: t,
                                errorCorrectionLevel: n,
                                maskPattern: o,
                                segments: f
                            }
                    }(e, n, m, f)
            }
        },
        42860: function(e, t, n) {
            let r = n(3832);

            function o(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            o.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
            }, o.prototype.encode = function(e) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let t = new Uint8Array(e.length + this.degree);
                t.set(e);
                let n = r.mod(t, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    let e = new Uint8Array(this.degree);
                    return e.set(n, o), e
                }
                return n
            }, e.exports = o
        },
        65037: function(e, t) {
            let n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            t.KANJI = RegExp(r, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(o, "g"), t.NUMERIC = RegExp(n, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let i = RegExp("^" + r + "$"),
                s = RegExp("^" + n + "$"),
                a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return i.test(e)
            }, t.testNumeric = function(e) {
                return s.test(e)
            }, t.testAlphanumeric = function(e) {
                return a.test(e)
            }
        },
        85750: function(e, t, n) {
            let r = n(99542),
                o = n(62437),
                i = n(2767),
                s = n(76252),
                a = n(31070),
                c = n(65037),
                u = n(5244),
                l = n(49189);

            function d(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function h(e, t, n) {
                let r;
                let o = [];
                for (; null !== (r = e.exec(n));) o.push({
                    data: r[0],
                    index: r.index,
                    mode: t,
                    length: r[0].length
                });
                return o
            }

            function f(e) {
                let t, n;
                let o = h(c.NUMERIC, r.NUMERIC, e),
                    i = h(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
                u.isKanjiModeEnabled() ? (t = h(c.BYTE, r.BYTE, e), n = h(c.KANJI, r.KANJI, e)) : (t = h(c.BYTE_KANJI, r.BYTE, e), n = []);
                let s = o.concat(i, t, n);
                return s.sort(function(e, t) {
                    return e.index - t.index
                }).map(function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                })
            }

            function p(e, t) {
                switch (t) {
                    case r.NUMERIC:
                        return o.getBitsLength(e);
                    case r.ALPHANUMERIC:
                        return i.getBitsLength(e);
                    case r.KANJI:
                        return a.getBitsLength(e);
                    case r.BYTE:
                        return s.getBitsLength(e)
                }
            }

            function g(e, t) {
                let n;
                let c = r.getBestModeForData(e);
                if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
                switch (n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new o(e);
                    case r.ALPHANUMERIC:
                        return new i(e);
                    case r.KANJI:
                        return new a(e);
                    case r.BYTE:
                        return new s(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce(function(e, t) {
                    return "string" == typeof t ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e
                }, [])
            }, t.fromString = function(e, n) {
                let o = f(e, u.isKanjiModeEnabled()),
                    i = function(e) {
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let o = e[n];
                            switch (o.mode) {
                                case r.NUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: d(o.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    t.push([{
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: d(o.data)
                                    }])
                            }
                        }
                        return t
                    }(o),
                    s = function(e, t) {
                        let n = {},
                            o = {
                                start: {}
                            },
                            i = ["start"];
                        for (let s = 0; s < e.length; s++) {
                            let a = e[s],
                                c = [];
                            for (let e = 0; e < a.length; e++) {
                                let u = a[e],
                                    l = "" + s + e;
                                c.push(l), n[l] = {
                                    node: u,
                                    lastCount: 0
                                }, o[l] = {};
                                for (let e = 0; e < i.length; e++) {
                                    let s = i[e];
                                    n[s] && n[s].node.mode === u.mode ? (o[s][l] = p(n[s].lastCount + u.length, u.mode) - p(n[s].lastCount, u.mode), n[s].lastCount += u.length) : (n[s] && (n[s].lastCount = u.length), o[s][l] = p(u.length, u.mode) + 4 + r.getCharCountIndicator(u.mode, t))
                                }
                            }
                            i = c
                        }
                        for (let e = 0; e < i.length; e++) o[i[e]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }(i, n),
                    a = l.find_path(s.map, "start", "end"),
                    c = [];
                for (let e = 1; e < a.length - 1; e++) c.push(s.table[a[e]].node);
                return t.fromArray(c.reduce(function(e, t) {
                    let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
                }, []))
            }, t.rawSplit = function(e) {
                return t.fromArray(f(e, u.isKanjiModeEnabled()))
            }
        },
        5244: function(e, t) {
            let n;
            let r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return r[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
                n = e
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, t.toSJIS = function(e) {
                return n(e)
            }
        },
        49955: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        42226: function(e, t, n) {
            let r = n(5244),
                o = n(92989),
                i = n(69838),
                s = n(99542),
                a = n(49955),
                c = r.getBCHDigit(7973);

            function u(e, t) {
                return s.getCharCountIndicator(e, t) + 4
            }
            t.from = function(e, t) {
                return a.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, n) {
                if (!a.isValid(e)) throw Error("Invalid QR Code version");
                void 0 === n && (n = s.BYTE);
                let i = r.getSymbolTotalCodewords(e),
                    c = o.getTotalCodewordsCount(e, t),
                    l = (i - c) * 8;
                if (n === s.MIXED) return l;
                let d = l - u(n, e);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(d / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(d / 11 * 2);
                    case s.KANJI:
                        return Math.floor(d / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(d / 8)
                }
            }, t.getBestVersionForData = function(e, n) {
                let r;
                let o = i.from(n, i.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, n) {
                        for (let r = 1; r <= 40; r++) {
                            let o = function(e, t) {
                                let n = 0;
                                return e.forEach(function(e) {
                                    let r = u(e.mode, t);
                                    n += r + e.getBitsLength()
                                }), n
                            }(e, r);
                            if (o <= t.getCapacity(r, n, s.MIXED)) return r
                        }
                    }(e, o);
                    if (0 === e.length) return 1;
                    r = e[0]
                } else r = e;
                return function(e, n, r) {
                    for (let o = 1; o <= 40; o++)
                        if (n <= t.getCapacity(o, r, e)) return o
                }(r.mode, r.getLength(), o)
            }, t.getEncodedBits = function(e) {
                if (!a.isValid(e) || e < 7) throw Error("Invalid QR Code version");
                let t = e << 12;
                for (; r.getBCHDigit(t) - c >= 0;) t ^= 7973 << r.getBCHDigit(t) - c;
                return e << 12 | t
            }
        },
        30206: function(e, t, n) {
            let r = n(89009);
            t.render = function(e, t, n) {
                var o;
                let i = n,
                    s = t;
                void 0 !== i || t && t.getContext || (i = t, t = void 0), t || (s = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), i = r.getOptions(i);
                let a = r.getImageWidth(e.modules.size, i),
                    c = s.getContext("2d"),
                    u = c.createImageData(a, a);
                return r.qrToImageData(u.data, e, i), o = s, c.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = a, o.width = a, o.style.height = a + "px", o.style.width = a + "px", c.putImageData(u, 0, 0), s
            }, t.renderToDataURL = function(e, n, r) {
                let o = r;
                void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
                let i = t.render(e, n, o),
                    s = o.type || "image/png",
                    a = o.rendererOpts || {};
                return i.toDataURL(s, a.quality)
            }
        },
        53736: function(e, t, n) {
            let r = n(89009);

            function o(e, t) {
                let n = e.a / 255,
                    r = t + '="' + e.hex + '"';
                return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function i(e, t, n) {
                let r = e + t;
                return void 0 !== n && (r += " " + n), r
            }
            t.render = function(e, t, n) {
                let s = r.getOptions(t),
                    a = e.modules.size,
                    c = e.modules.data,
                    u = a + 2 * s.margin,
                    l = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                    d = "<path " + o(s.color.dark, "stroke") + ' d="' + function(e, t, n) {
                        let r = "",
                            o = 0,
                            s = !1,
                            a = 0;
                        for (let c = 0; c < e.length; c++) {
                            let u = Math.floor(c % t),
                                l = Math.floor(c / t);
                            u || s || (s = !0), e[c] ? (a++, c > 0 && u > 0 && e[c - 1] || (r += s ? i("M", u + n, .5 + l + n) : i("m", o, 0), o = 0, s = !1), u + 1 < t && e[c + 1] || (r += i("h", a), a = 0)) : o++
                        }
                        return r
                    }(c, a, s.margin) + '"/>',
                    h = s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "",
                    f = '<svg xmlns="http://www.w3.org/2000/svg" ' + h + ('viewBox="0 0 ' + u) + " " + u + '" shape-rendering="crispEdges">' + l + d + "</svg>\n";
                return "function" == typeof n && n(null, f), f
            }
        },
        89009: function(e, t) {
            function n(e) {
                if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
                (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                    return [e, e]
                }))), 6 === t.length && t.push("F", "F");
                let n = parseInt(t.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    r = e.width && e.width >= 21 ? e.width : void 0,
                    o = e.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : o,
                    margin: t,
                    color: {
                        dark: n(e.color.dark || "#000000ff"),
                        light: n(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, n) {
                let r = t.getScale(e, n);
                return Math.floor((e + 2 * n.margin) * r)
            }, t.qrToImageData = function(e, n, r) {
                let o = n.modules.size,
                    i = n.modules.data,
                    s = t.getScale(o, r),
                    a = Math.floor((o + 2 * r.margin) * s),
                    c = r.margin * s,
                    u = [r.color.light, r.color.dark];
                for (let t = 0; t < a; t++)
                    for (let n = 0; n < a; n++) {
                        let l = (t * a + n) * 4,
                            d = r.color.light;
                        if (t >= c && n >= c && t < a - c && n < a - c) {
                            let e = Math.floor((t - c) / s),
                                r = Math.floor((n - c) / s);
                            d = u[i[e * o + r] ? 1 : 0]
                        }
                        e[l++] = d.r, e[l++] = d.g, e[l++] = d.b, e[l] = d.a
                    }
            }
        },
        81105: function(e, t, n) {
            "use strict";
            let r = n(54178),
                o = n(65140),
                i = n(36897),
                s = n(22475),
                a = e => null == e;

            function c(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }

            function l(e, t) {
                return t.decode ? o(e) : e
            }

            function d(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function h(e) {
                e = d(e);
                let t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function f(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function p(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let n = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, n, r) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        r[e] = n;
                                        return
                                    }
                                    void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n
                                };
                            case "bracket":
                                return (e, n, r) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        r[e] = n;
                                        return
                                    }
                                    if (void 0 === r[e]) {
                                        r[e] = [n];
                                        return
                                    }
                                    r[e] = [].concat(r[e], n)
                                };
                            case "comma":
                            case "separator":
                                return (t, n, r) => {
                                    let o = "string" == typeof n && n.includes(e.arrayFormatSeparator),
                                        i = "string" == typeof n && !o && l(n, e).includes(e.arrayFormatSeparator);
                                    n = i ? l(n, e) : n;
                                    let s = o || i ? n.split(e.arrayFormatSeparator).map(t => l(t, e)) : null === n ? n : l(n, e);
                                    r[t] = s
                                };
                            default:
                                return (e, t, n) => {
                                    if (void 0 === n[e]) {
                                        n[e] = t;
                                        return
                                    }
                                    n[e] = [].concat(n[e], t)
                                }
                        }
                    }(t),
                    r = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return r;
                for (let o of e.split("&")) {
                    if ("" === o) continue;
                    let [e, s] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
                    s = void 0 === s ? null : ["comma", "separator"].includes(t.arrayFormat) ? s : l(s, t), n(l(e, t), s, r)
                }
                for (let e of Object.keys(r)) {
                    let n = r[e];
                    if ("object" == typeof n && null !== n)
                        for (let e of Object.keys(n)) n[e] = f(n[e], t);
                    else r[e] = f(n, t)
                }
                return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
                    let n = r[t];
                    return n && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(n) : e[t] = n, e
                }, Object.create(null))
            }
            t.extract = h, t.parse = p, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let n = n => t.skipNull && a(e[n]) || t.skipEmptyString && "" === e[n],
                    r = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (n, r) => {
                                    let o = n.length;
                                    return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [u(t, e), "[", o, "]"].join("")] : [...n, [u(t, e), "[", u(o, e), "]=", u(r, e)].join("")]
                                };
                            case "bracket":
                                return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [u(t, e), "[]"].join("")] : [...n, [u(t, e), "[]=", u(r, e)].join("")];
                            case "comma":
                            case "separator":
                                return t => (n, r) => null == r || 0 === r.length ? n : 0 === n.length ? [
                                    [u(t, e), "=", u(r, e)].join("")
                                ] : [
                                    [n, u(r, e)].join(e.arrayFormatSeparator)
                                ];
                            default:
                                return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, u(t, e)] : [...n, [u(t, e), "=", u(r, e)].join("")]
                        }
                    }(t),
                    o = {};
                for (let t of Object.keys(e)) n(t) || (o[t] = e[t]);
                let i = Object.keys(o);
                return !1 !== t.sort && i.sort(t.sort), i.map(n => {
                    let o = e[n];
                    return void 0 === o ? "" : null === o ? u(n, t) : Array.isArray(o) ? o.reduce(r(n), []).join("&") : u(n, t) + "=" + u(o, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [n, r] = i(e, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: p(h(e), t)
                }, t && t.parseFragmentIdentifier && r ? {
                    fragmentIdentifier: l(r, t)
                } : {})
            }, t.stringifyUrl = (e, n) => {
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                let r = d(e.url).split("?")[0] || "",
                    o = t.extract(e.url),
                    i = t.parse(o, {
                        sort: !1
                    }),
                    s = Object.assign(i, e.query),
                    a = t.stringify(s, n);
                a && (a = `?${a}`);
                let c = function(e) {
                    let t = "",
                        n = e.indexOf("#");
                    return -1 !== n && (t = e.slice(n)), t
                }(e.url);
                return e.fragmentIdentifier && (c = `#${u(e.fragmentIdentifier,n)}`), `${r}${a}${c}`
            }, t.pick = (e, n, r) => {
                r = Object.assign({
                    parseFragmentIdentifier: !0
                }, r);
                let {
                    url: o,
                    query: i,
                    fragmentIdentifier: a
                } = t.parseUrl(e, r);
                return t.stringifyUrl({
                    url: o,
                    query: s(i, n),
                    fragmentIdentifier: a
                }, r)
            }, t.exclude = (e, n, r) => {
                let o = Array.isArray(n) ? e => !n.includes(e) : (e, t) => !n(e, t);
                return t.pick(e, o, r)
            }
        },
        36897: function(e) {
            "use strict";
            e.exports = (e, t) => {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                let n = e.indexOf(t);
                return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
            }
        },
        54178: function(e) {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        80480: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
                            e.addRange(t)
                        }), t && t.focus()
                    }
            }
        },
        10186: function(e, t, n) {
            var r = n(15313).Buffer,
                o = n(48186).strict;
            e.exports = function(e) {
                if (!o(e)) return r.from(e);
                var t = r.from(e.buffer);
                return e.byteLength !== e.buffer.byteLength && (t = t.slice(e.byteOffset, e.byteOffset + e.byteLength)), t
            }
        },
        74054: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        }
    }
]);
//# sourceMappingURL=9365.3b4b7b74ffed051a.js.map