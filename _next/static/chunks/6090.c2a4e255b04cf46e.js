"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6090], {
        46090: function(t, e, i) {
            i.d(e, {
                g: function() {
                    return er
                }
            });
            var s = i(1425),
                o = i(26756),
                r = i(23107),
                n = i(83670),
                a = i(98668),
                l = i(5721),
                h = i(56040),
                u = i(67264);
            let d = (t, e) => Math.abs(t - e);
            var c = i(69222),
                m = i(46494);
            class p {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = g(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    let i = d(t.x, e.x),
                                        s = d(t.y, e.y);
                                    return Math.sqrt(i ** 2 + s ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: s
                            } = t, {
                                timestamp: o
                            } = c.w;
                            this.history.push({ ...s,
                                timestamp: o
                            });
                            let {
                                onStart: r,
                                onMove: n
                            } = this.handlers;
                            e || (r && r(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), n && n(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = y(e, this.transformPagePoint), a.Z_.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: s
                            } = this.handlers, o = g("pointercancel" === t.type ? this.lastMoveEventInfo : y(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, o), s && s(t, o)
                        }, !(0, m.D)(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    let s = (0, n.Q)(t),
                        o = y(s, this.transformPagePoint),
                        {
                            point: r
                        } = o,
                        {
                            timestamp: l
                        } = c.w;
                    this.history = [{ ...r,
                        timestamp: l
                    }];
                    let {
                        onSessionStart: p
                    } = e;
                    p && p(t, g(o, this.history)), this.removeListeners = (0, u.z)((0, h.a)(window, "pointermove", this.handlePointerMove), (0, h.a)(window, "pointerup", this.handlePointerUp), (0, h.a)(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), a.qY.update(this.updatePoint)
                }
            }

            function y(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function f(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function g({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: f(t, v(e)),
                    offset: f(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            s = null,
                            o = v(t);
                        for (; i >= 0 && (s = t[i], !(o.timestamp - s.timestamp > (0, l.w)(.1)));) i--;
                        if (!s) return {
                            x: 0,
                            y: 0
                        };
                        let r = (0, l.X)(o.timestamp - s.timestamp);
                        if (0 === r) return {
                            x: 0,
                            y: 0
                        };
                        let n = {
                            x: (o.x - s.x) / r,
                            y: (o.y - s.y) / r
                        };
                        return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n
                    }(e, 0)
                }
            }

            function v(t) {
                return t[t.length - 1]
            }
            var x = i(70911),
                P = i(16655),
                T = i(68544),
                D = i(5134);

            function E(t) {
                return t.max - t.min
            }

            function L(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function R(t, e, i, s = .5) {
                t.origin = s, t.originPoint = (0, D.C)(e.min, e.max, t.origin), t.scale = E(i) / E(e), (L(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, D.C)(i.min, i.max, t.origin) - t.originPoint, (L(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function S(t, e, i, s) {
                R(t.x, e.x, i.x, s ? s.originX : void 0), R(t.y, e.y, i.y, s ? s.originY : void 0)
            }

            function A(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + E(e)
            }

            function j(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + E(e)
            }

            function C(t, e, i) {
                j(t.x, e.x, i.x), j(t.y, e.y, i.y)
            }
            var B = i(16970);

            function V(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function b(t, e) {
                let i = e.min - t.min,
                    s = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function w(t, e, i) {
                return {
                    min: M(t, e),
                    max: M(t, i)
                }
            }

            function M(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            var k = i(12211);

            function U(t) {
                return [t("x"), t("y")]
            }
            var F = i(81749),
                O = i(91305),
                I = i(65918),
                N = i(75217),
                G = i(34020);
            let Z = new WeakMap;
            class _ {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, k.dO)(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let s = t => {
                            this.stopAnimation(), e && this.snapToCursor((0, n.Q)(t, "page").point)
                        },
                        o = (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: s,
                                onDragStart: o
                            } = this.getProps();
                            if (i && !s && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, x.fJ)(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), U(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (N.aQ.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let s = i.layout.layoutBox[t];
                                        if (s) {
                                            let t = E(s);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), o && a.Z_.update(() => o(t, e));
                            let {
                                animationState: r
                            } = this.visualElement;
                            r && r.setActive("whileDrag", !0)
                        },
                        r = (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: s,
                                onDirectionLock: o,
                                onDrag: r
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: n
                            } = e;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(n), null !== this.currentDirection && o && o(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, n), this.updateAxis("y", e.point, n), this.visualElement.render(), r && r(t, e)
                        },
                        l = (t, e) => this.stop(t, e);
                    this.panSession = new p(t, {
                        onSessionStart: s,
                        onStart: o,
                        onMove: r,
                        onSessionEnd: l
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: s
                    } = e;
                    this.startAnimation(s);
                    let {
                        onDragEnd: o
                    } = this.getProps();
                    o && a.Z_.update(() => o(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: s
                    } = this.getProps();
                    if (!i || !Y(t, s, this.currentDirection)) return;
                    let o = this.getAxisMotionValue(t),
                        r = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (r = function(t, {
                        min: e,
                        max: i
                    }, s) {
                        return void 0 !== e && t < e ? t = s ? (0, D.C)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, D.C)(i, t, s.max) : Math.min(t, i)), t
                    }(r, this.constraints[t], this.elastic[t])), o.set(r)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, s = this.constraints;
                    t && (0, P.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: s,
                        right: o
                    }) {
                        return {
                            x: V(t.x, i, o),
                            y: V(t.y, e, s)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: w(t, "left", "right"),
                            y: w(t, "top", "bottom")
                        }
                    }(e), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && U(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !(0, P.I)(e)) return !1;
                    let s = e.current;
                    (0, r.k)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: o
                    } = this.visualElement;
                    if (!o || !o.layout) return !1;
                    let n = (0, F.z)(s, o.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: b((t = o.layout.layoutBox).x, n.x),
                            y: b(t.y, n.y)
                        };
                    if (i) {
                        let t = i((0, O.z2)(a));
                        this.hasMutatedConstraints = !!t, t && (a = (0, O.i8)(t))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: s,
                        dragTransition: o,
                        dragSnapToOrigin: r,
                        onDragTransitionEnd: n
                    } = this.getProps(), a = this.constraints || {}, l = U(n => {
                        if (!Y(n, e, this.currentDirection)) return;
                        let l = a && a[n] || {};
                        r && (l = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: i ? t[n] : 0,
                            bounceStiffness: s ? 200 : 1e6,
                            bounceDamping: s ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...o,
                            ...l
                        };
                        return this.startAxisValueAnimation(n, h)
                    });
                    return Promise.all(l).then(n)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start((0, G.v)(t, i, 0, e))
                }
                stopAnimation() {
                    U(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        s = i[e];
                    return s || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    U(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!Y(e, i, this.currentDirection)) return;
                        let {
                            projection: s
                        } = this.visualElement, o = this.getAxisMotionValue(e);
                        if (s && s.layout) {
                            let {
                                min: i,
                                max: r
                            } = s.layout.layoutBox[e];
                            o.set(t[e] - (0, D.C)(i, r, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!(0, P.I)(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let s = {
                        x: 0,
                        y: 0
                    };
                    U(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            s[t] = function(t, e) {
                                let i = .5,
                                    s = E(t),
                                    o = E(e);
                                return o > s ? i = (0, T.Y)(e.min, e.max - s, t.min) : s > o && (i = (0, T.Y)(t.min, t.max - o, e.min)), (0, B.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), U(e => {
                        if (!Y(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: o,
                                max: r
                            } = this.constraints[e];
                        i.set((0, D.C)(o, r, s[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    Z.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = (0, h.a)(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            (0, P.I)(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: s
                        } = this.visualElement,
                        o = s.addEventListener("measure", i);
                    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), i();
                    let r = (0, I.E)(window, "resize", () => this.scalePositionWithinConstraints()),
                        n = s.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (U(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), e(), o(), n && n()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: s = !1,
                            dragConstraints: o = !1,
                            dragElastic: r = .35,
                            dragMomentum: n = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: s,
                        dragConstraints: o,
                        dragElastic: r,
                        dragMomentum: n
                    }
                }
            }

            function Y(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class $ extends s.L {
                constructor(t) {
                    super(t), this.removeGroupControls = o.Z, this.removeListeners = o.Z, this.controls = new _(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || o.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let z = t => (e, i) => {
                t && a.Z_.update(() => t(e, i))
            };
            class H extends s.L {
                constructor() {
                    super(...arguments), this.removePointerDownListener = o.Z
                }
                onPointerDown(t) {
                    this.session = new p(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint()
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: s
                    } = this.node.getProps();
                    return {
                        onSessionStart: z(t),
                        onStart: z(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, s && a.Z_.update(() => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = (0, h.a)(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var W = i(52983),
                q = i(98654),
                X = i(36354),
                Q = i(13768),
                J = i(51717);

            function K(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let tt = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!N.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = K(t, e.target.x),
                        s = K(t, e.target.y);
                    return `${i}% ${s}%`
                }
            };
            var te = i(41305),
                ti = i(40400);
            let ts = "_$css",
                to = {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let s = t,
                            o = t.includes("var("),
                            r = [];
                        o && (t = t.replace(te.Xp, t => (r.push(t), ts)));
                        let n = ti.P.parse(t);
                        if (n.length > 5) return s;
                        let a = ti.P.createTransformer(t),
                            l = "number" != typeof n[0] ? 1 : 0,
                            h = i.x.scale * e.x,
                            u = i.y.scale * e.y;
                        n[0 + l] /= h, n[1 + l] /= u;
                        let d = (0, D.C)(h, u, .5);
                        "number" == typeof n[2 + l] && (n[2 + l] /= d), "number" == typeof n[3 + l] && (n[3 + l] /= d);
                        let c = a(n);
                        if (o) {
                            let t = 0;
                            c = c.replace(ts, () => {
                                let e = r[t];
                                return t++, e
                            })
                        }
                        return c
                    }
                };
            var tr = i(80302);
            class tn extends W.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: s
                    } = this.props, {
                        projection: o
                    } = t;
                    (0, tr.B)(tl), o && (e.group && e.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), o.setOptions({ ...o.options,
                        onExitComplete: () => this.safeToRemove()
                    })), J.V.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: s,
                        isPresent: o
                    } = this.props, r = i.projection;
                    return r && (r.isPresent = o, s || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(), t.isPresent === o || (o ? r.promote() : r.relegate() || a.Z_.postRender(() => {
                        let t = r.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: s
                    } = t;
                    s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function ta(t) {
                let [e, i] = function() {
                    let t = (0, W.useContext)(q.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: s
                    } = t, o = (0, W.useId)();
                    (0, W.useEffect)(() => s(o), []);
                    let r = () => i && i(o);
                    return !e && i ? [!1, r] : [!0]
                }(), s = (0, W.useContext)(X.p);
                return W.createElement(tn, { ...t,
                    layoutGroup: s,
                    switchLayoutGroup: (0, W.useContext)(Q.g),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let tl = {
                borderRadius: { ...tt,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: tt,
                borderTopRightRadius: tt,
                borderBottomLeftRadius: tt,
                borderBottomRightRadius: tt,
                boxShadow: to
            };
            var th = i(82856),
                tu = i(10301);
            let td = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tc = td.length,
                tm = t => "string" == typeof t ? parseFloat(t) : t,
                tp = t => "number" == typeof t || N.px.test(t);

            function ty(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let tf = tv(0, .5, tu.Bn),
                tg = tv(.5, .95, o.Z);

            function tv(t, e, i) {
                return s => s < t ? 0 : s > e ? 1 : i((0, T.Y)(t, e, s))
            }

            function tx(t, e) {
                t.min = e.min, t.max = e.max
            }

            function tP(t, e) {
                tx(t.x, e.x), tx(t.y, e.y)
            }
            var tT = i(72897);

            function tD(t, e, i, s, o) {
                return t -= e, t = (0, tT.q2)(t, 1 / i, s), void 0 !== o && (t = (0, tT.q2)(t, 1 / o, s)), t
            }

            function tE(t, e, [i, s, o], r, n) {
                ! function(t, e = 0, i = 1, s = .5, o, r = t, n = t) {
                    if (N.aQ.test(e)) {
                        e = parseFloat(e);
                        let t = (0, D.C)(n.min, n.max, e / 100);
                        e = t - n.min
                    }
                    if ("number" != typeof e) return;
                    let a = (0, D.C)(r.min, r.max, s);
                    t === r && (a -= e), t.min = tD(t.min, e, i, a, o), t.max = tD(t.max, e, i, a, o)
                }(t, e[i], e[s], e[o], e.scale, r, n)
            }
            let tL = ["x", "scaleX", "originX"],
                tR = ["y", "scaleY", "originY"];

            function tS(t, e, i, s) {
                tE(t.x, e, tL, i ? i.x : void 0, s ? s.x : void 0), tE(t.y, e, tR, i ? i.y : void 0, s ? s.y : void 0)
            }
            var tA = i(73914);

            function tj(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function tC(t) {
                return tj(t.x) && tj(t.y)
            }

            function tB(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }

            function tV(t) {
                return E(t.x) / E(t.y)
            }
            var tb = i(24614);
            class tw {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, tb.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, tb.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: s
                        } = t.options;
                        !1 === s && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function tM(t, e, i) {
                let s = "",
                    o = t.x.translate / e.x,
                    r = t.y.translate / e.y;
                if ((o || r) && (s = `translate3d(${o}px, ${r}px, 0) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: o
                    } = i;
                    t && (s += `rotate(${t}deg) `), e && (s += `rotateX(${e}deg) `), o && (s += `rotateY(${o}deg) `)
                }
                let n = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== n || 1 !== a) && (s += `scale(${n}, ${a})`), s || "none"
            }
            var tk = i(75837);
            let tU = (t, e) => t.depth - e.depth;
            class tF {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, tb.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, tb.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(tU), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var tO = i(21053),
                tI = i(82722),
                tN = i(66077),
                tG = i(55330);
            let tZ = ["", "X", "Y", "Z"],
                t_ = 0,
                tY = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function t$({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: s,
                resetTransform: o
            }) {
                return class {
                    constructor(t, i = {}, s = null == e ? void 0 : e()) {
                        this.id = t_++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            tY.totalNodes = tY.resolvedTargetDeltas = tY.recalculatedProjection = 0, this.nodes.forEach(tW), this.nodes.forEach(t0), this.nodes.forEach(t1), this.nodes.forEach(tq), (0, tI.I)(tY)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new tF)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new th.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    registerPotentialNode(t, e) {
                        this.potentialNodes.set(t, e)
                    }
                    mount(e, i = !1) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: s,
                            layout: o,
                            visualElement: r
                        } = this.options;
                        if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), i && (o || s) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let s = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = performance.now(),
                                        s = ({
                                            timestamp: o
                                        }) => {
                                            let r = o - i;
                                            r >= e && (a.qY.read(s), t(r - e))
                                        };
                                    return a.Z_.read(s, !0), () => a.qY.read(s)
                                }(s, 250), J.V.hasAnimatedSinceResize && (J.V.hasAnimatedSinceResize = !1, this.nodes.forEach(tK))
                            })
                        }
                        s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && r && (s || o) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: s
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let o = this.options.transition || r.getDefaultTransition() || t7,
                                {
                                    onLayoutAnimationStart: n,
                                    onLayoutAnimationComplete: a
                                } = r.getProps(),
                                l = !this.targetLayout || !tB(this.targetLayout, s) || i,
                                h = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, h);
                                let e = { ...(0, tA.ev)(o, "layout"),
                                    onPlay: n,
                                    onComplete: a
                                };
                                (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || 0 !== this.animationProgress || tK(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = s
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, a.qY.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(t2), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let s = this.getTransformTemplate();
                        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(tQ);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(t8), this.potentialNodes.clear()), this.nodes.forEach(tJ), this.nodes.forEach(tz), this.nodes.forEach(tH), this.clearAllSnapshots(), a.iW.update(), a.iW.preRender(), a.iW.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(tX), this.sharedNodes.forEach(t5)
                    }
                    scheduleUpdateProjection() {
                        a.Z_.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        a.Z_.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, k.dO)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: s(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!o) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !tC(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            r = s !== this.prevTransformTemplateValue;
                        t && (e || (0, tk.ud)(this.latestValues) || r) && (o(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            s = this.removeElementScroll(i);
                        return t && (s = this.removeTransform(s)), t9((e = s).x), t9(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: s,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return (0, k.dO)();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && ((0, tT.am)(e.x, i.offset.x), (0, tT.am)(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = (0, k.dO)();
                        tP(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let s = this.path[i],
                                {
                                    scroll: o,
                                    options: r
                                } = s;
                            if (s !== this.root && o && r.layoutScroll) {
                                if (o.isRoot) {
                                    tP(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && ((0, tT.am)(e.x, -i.offset.x), (0, tT.am)(e.y, -i.offset.y))
                                }(0, tT.am)(e.x, o.offset.x), (0, tT.am)(e.y, o.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = (0, k.dO)();
                        tP(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, tT.D2)(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), (0, tk.ud)(s.latestValues) && (0, tT.D2)(i, s.latestValues)
                        }
                        return (0, tk.ud)(this.latestValues) && (0, tT.D2)(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = (0, k.dO)();
                        tP(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !(0, tk.ud)(i.latestValues)) continue;
                            (0, tk.Lj)(i.latestValues) && i.updateSnapshot();
                            let s = (0, k.dO)(),
                                o = i.measurePageBox();
                            tP(s, o), tS(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                        }
                        return (0, tk.ud)(this.latestValues) && tS(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, s, o;
                        let r = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
                        let n = !!this.resumingFrom || this !== r,
                            a = !(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let {
                            layout: l,
                            layoutId: h
                        } = this.options;
                        if (this.layout && (l || h)) {
                            if (this.resolvedRelativeTargetAt = c.w.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, k.dO)(), this.relativeTargetOrigin = (0, k.dO)(), C(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), tP(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = (0, k.dO)(), this.targetWithTransforms = (0, k.dO)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.relativeParent.resolvedRelativeTargetAt !== c.w.timestamp && this.relativeParent.resolveTargetDelta(!0), i = this.target, s = this.relativeTarget, o = this.relativeParent.target, A(i.x, s.x, o.x), A(i.y, s.y, o.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tP(this.target, this.layout.layoutBox), (0, tT.o2)(this.target, this.targetDelta)) : tP(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, k.dO)(), this.relativeTargetOrigin = (0, k.dO)(), C(this.relativeTargetOrigin, this.target, t.target), tP(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                tY.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || (0, tk.Lj)(this.parent.latestValues) || (0, tk.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            s = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === c.w.timestamp && (s = !1), s) return;
                        let {
                            layout: o,
                            layoutId: r
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || r)) return;
                        tP(this.layoutCorrected, this.layout.layoutBox), (0, tT.YY)(this.layoutCorrected, this.treeScale, this.path, i);
                        let {
                            target: n
                        } = e;
                        if (!n) return;
                        this.projectionDelta || (this.projectionDelta = (0, k.wc)(), this.projectionDeltaWithTransform = (0, k.wc)());
                        let a = this.treeScale.x,
                            l = this.treeScale.y,
                            h = this.projectionTransform;
                        S(this.projectionDelta, this.layoutCorrected, n, this.latestValues), this.projectionTransform = tM(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== a || this.treeScale.y !== l) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", n)), tY.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let s = this.snapshot,
                            o = s ? s.latestValues : {},
                            r = { ...this.latestValues
                            },
                            n = (0, k.wc)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = (0, k.dO)(),
                            l = s ? s.source : void 0,
                            h = this.layout ? this.layout.source : void 0,
                            u = l !== h,
                            d = this.getStack(),
                            c = !d || d.members.length <= 1,
                            m = !!(u && !c && !0 === this.options.crossfade && !this.path.some(t4));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            var s, l;
                            let h = e / 1e3;
                            t3(n.x, t.x, h), t3(n.y, t.y, h), this.setTargetDelta(n), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (C(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), s = this.relativeTarget, l = this.relativeTargetOrigin, t6(s.x, l.x, a.x, h), t6(s.y, l.y, a.y, h), i && tB(this.relativeTarget, i) && (this.isProjectionDirty = !1), i || (i = (0, k.dO)()), tP(i, this.relativeTarget)), u && (this.animationValues = r, function(t, e, i, s, o, r) {
                                o ? (t.opacity = (0, D.C)(0, void 0 !== i.opacity ? i.opacity : 1, tf(s)), t.opacityExit = (0, D.C)(void 0 !== e.opacity ? e.opacity : 1, 0, tg(s))) : r && (t.opacity = (0, D.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
                                for (let o = 0; o < tc; o++) {
                                    let r = `border${td[o]}Radius`,
                                        n = ty(e, r),
                                        a = ty(i, r);
                                    if (void 0 === n && void 0 === a) continue;
                                    n || (n = 0), a || (a = 0);
                                    let l = 0 === n || 0 === a || tp(n) === tp(a);
                                    l ? (t[r] = Math.max((0, D.C)(tm(n), tm(a), s), 0), (N.aQ.test(a) || N.aQ.test(n)) && (t[r] += "%")) : t[r] = a
                                }(e.rotate || i.rotate) && (t.rotate = (0, D.C)(e.rotate || 0, i.rotate || 0, s))
                            }(r, o, this.latestValues, h, m, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = h
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (a.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = a.Z_.update(() => {
                            J.V.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let s = (0, tG.i)(t) ? t : (0, tN.B)(t);
                                return s.start((0, G.v)("", s, 1e3, i)), s.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: s,
                                latestValues: o
                            } = t;
                        if (e && i && s) {
                            if (this !== t && this.layout && s && et(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                                i = this.target || (0, k.dO)();
                                let e = E(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let s = E(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + s
                            }
                            tP(e, i), (0, tT.D2)(e, o), S(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new tw);
                        let i = this.sharedNodes.get(t);
                        i.add(e);
                        let s = e.options.initialPromotionConfig;
                        e.promote({
                            transition: s ? s.transition : void 0,
                            preserveFollowOpacity: s && s.shouldPreserveFollowOpacity ? s.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let s = this.getStack();
                        s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let s = {};
                        for (let e = 0; e < tZ.length; e++) {
                            let o = "rotate" + tZ[e];
                            i[o] && (s[o] = i[o], t.setStaticValue(o, 0))
                        }
                        for (let e in t.render(), s) t.setStaticValue(e, s[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        let s = {};
                        if (!this.instance || this.isSVG) return s;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        s.visibility = "";
                        let o = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = (0, tO.b)(t.pointerEvents) || "", s.transform = o ? o(this.latestValues, "") : "none", s;
                        let r = this.getLead();
                        if (!this.projectionDelta || !this.layout || !r.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, tO.b)(t.pointerEvents) || ""), this.hasProjected && !(0, tk.ud)(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
                        }
                        let n = r.animationValues || r.latestValues;
                        this.applyTransformsToTarget(), s.transform = tM(this.projectionDeltaWithTransform, this.treeScale, n), o && (s.transform = o(n, s.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in s.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, r.animationValues ? s.opacity = r === this ? null !== (i = null !== (e = n.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : s.opacity = r === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, tr.P) {
                            if (void 0 === n[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = tr.P[t], o = "none" === s.transform ? n[t] : e(n[t], r);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) s[i[e]] = o
                            } else s[t] = o
                        }
                        return this.options.layoutId && (s.pointerEvents = r === this ? (0, tO.b)(t.pointerEvents) || "" : "none"), s
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(tQ), this.root.sharedNodes.clear()
                    }
                }
            }

            function tz(t) {
                t.updateLayout()
            }

            function tH(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: s
                    } = t.layout, {
                        animationType: o
                    } = t.options, r = i.source !== t.layout.source;
                    "size" === o ? U(t => {
                        let s = r ? i.measuredBox[t] : i.layoutBox[t],
                            o = E(s);
                        s.min = e[t].min, s.max = s.min + o
                    }) : et(o, i.layoutBox, e) && U(s => {
                        let o = r ? i.measuredBox[s] : i.layoutBox[s],
                            n = E(e[s]);
                        o.max = o.min + n, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + n)
                    });
                    let n = (0, k.wc)();
                    S(n, e, i.layoutBox);
                    let a = (0, k.wc)();
                    r ? S(a, t.applyTransform(s, !0), i.measuredBox) : S(a, e, i.layoutBox);
                    let l = !tC(n),
                        h = !1;
                    if (!t.resumeFrom) {
                        let s = t.getClosestProjectingParent();
                        if (s && !s.resumeFrom) {
                            let {
                                snapshot: o,
                                layout: r
                            } = s;
                            if (o && r) {
                                let n = (0, k.dO)();
                                C(n, i.layoutBox, o.layoutBox);
                                let a = (0, k.dO)();
                                C(a, e, r.layoutBox), tB(n, a) || (h = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = n, t.relativeParent = s)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: n,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: h
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function tW(t) {
                tY.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function tq(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function tX(t) {
                t.clearSnapshot()
            }

            function tQ(t) {
                t.clearMeasurements()
            }

            function tJ(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function tK(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function t0(t) {
                t.resolveTargetDelta()
            }

            function t1(t) {
                t.calcProjection()
            }

            function t2(t) {
                t.resetRotation()
            }

            function t5(t) {
                t.removeLeadSnapshot()
            }

            function t3(t, e, i) {
                t.translate = (0, D.C)(e.translate, 0, i), t.scale = (0, D.C)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function t6(t, e, i, s) {
                t.min = (0, D.C)(e.min, i.min, s), t.max = (0, D.C)(e.max, i.max, s)
            }

            function t4(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let t7 = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function t8(t, e) {
                let i = t.root;
                for (let e = t.path.length - 1; e >= 0; e--)
                    if (t.path[e].instance) {
                        i = t.path[e];
                        break
                    }
                let s = i && i !== t.root ? i.instance : document,
                    o = s.querySelector(`[data-projection-id="${e}"]`);
                o && t.mount(o, !0)
            }

            function t9(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function et(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !L(tV(e), tV(i), .2)
            }
            let ee = t$({
                    attachResizeListener: (t, e) => (0, I.E)(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ei = {
                    current: void 0
                },
                es = t$({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ei.current) {
                            let t = new ee(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ei.current = t
                        }
                        return ei.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });
            var eo = i(86562);
            let er = { ...eo.H,
                pan: {
                    Feature: H
                },
                drag: {
                    Feature: $,
                    ProjectionNode: es,
                    MeasureLayout: ta
                },
                layout: {
                    ProjectionNode: es,
                    MeasureLayout: ta
                }
            }
        }
    }
]);
//# sourceMappingURL=6090.c2a4e255b04cf46e.js.map