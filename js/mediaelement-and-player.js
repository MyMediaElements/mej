function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c || a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {}, {}],
    2: [function(a, b, c) {
        (function(c) {
            var d = void 0 !== c ? c : "undefined" != typeof window ? window : {},
                e = a(1);
            if ("undefined" != typeof document) b.exports = document;
            else {
                var f = d["__GLOBAL_DOCUMENT_CACHE@4"];
                f || (f = d["__GLOBAL_DOCUMENT_CACHE@4"] = e), b.exports = f
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        1: 1
    }],
    3: [function(a, b, c) {
        (function(a) {
            "undefined" != typeof window ? b.exports = window : void 0 !== a ? b.exports = a : "undefined" != typeof self ? b.exports = self : b.exports = {}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            f = a(6),
            g = d(f),
            h = a(14),
            i = a(25),
            j = {
                lang: "en",
                en: h.EN
            };
        j.language = function() {
            for (var a = arguments.length, b = Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            if (null !== b && void 0 !== b && b.length) {
                if ("string" != typeof b[0]) throw new TypeError("Language code must be a string value");
                if (!b[0].match(/^[a-z]{2}(\-[a-z]{2})?$/i)) throw new TypeError("Language code must have format `xx` or `xx-xx`");
                j.lang = b[0], void 0 === j[b[0]] ? (b[1] = null !== b[1] && void 0 !== b[1] && "object" === e(b[1]) ? b[1] : {}, j[b[0]] = i.isObjectEmpty(b[1]) ? h.EN : b[1]) : null !== b[1] && void 0 !== b[1] && "object" === e(b[1]) && (j[b[0]] = b[1])
            }
            return j.lang
        }, j.t = function(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if ("string" == typeof a && a.length) {
                var c = void 0,
                    d = void 0,
                    f = j.language(),
                    g = function(a, b, c) {
                        return "object" !== (void 0 === a ? "undefined" : e(a)) || "number" != typeof b || "number" != typeof c ? a : function() {
                            return [function() {
                                return arguments.length <= 1 ? void 0 : arguments[1]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) > 6 && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 11 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function() {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function() {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }]
                        }()[c].apply(null, [b].concat(a))
                    };
                return void 0 !== j[f] && (c = j[f][a], null !== b && "number" == typeof b && (d = j[f]["mejs.plural-form"], c = g.apply(null, [c, b, d]))), !c && j.en && (c = j.en[a], null !== b && "number" == typeof b && (d = j.en["mejs.plural-form"], c = g.apply(null, [c, b, d]))), c = c || a, null !== b && "number" == typeof b && (c = c.replace("%1", b)), i.escapeHTML(c)
            }
            return a
        }, g.default.i18n = j, "undefined" != typeof mejsL10n && g.default.i18n.language(mejsL10n.language, mejsL10n.strings), c.default = j
    }, {
        14: 14,
        25: 25,
        6: 6
    }],
    5: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var f = a(3),
            g = d(f),
            h = a(2),
            i = d(h),
            j = a(6),
            k = d(j),
            l = a(25),
            m = a(26),
            n = a(7),
            o = function a(b, c) {
                var d = this;
                e(this, a);
                var f = this;
                f.defaults = {
                    renderers: [],
                    fakeNodeName: "mediaelementwrapper",
                    pluginPath: "build/",
                    shimScriptAccess: "sameDomain",
                    customError: ""
                }, c = Object.assign(f.defaults, c), f.mediaElement = i.default.createElement(c.fakeNodeName), f.mediaElement.options = c;
                var g = b,
                    h = !1;
                if ("string" == typeof b ? f.mediaElement.originalNode = i.default.getElementById(b) : (f.mediaElement.originalNode = b, g = b.id), g = g || "mejs_" + Math.random().toString().slice(2), void 0 !== f.mediaElement.originalNode && null !== f.mediaElement.originalNode && f.mediaElement.appendChild) {
                    f.mediaElement.originalNode.setAttribute("id", g + "_from_mejs");
                    ["video", "audio"].includes(f.mediaElement.originalNode.tagName.toLowerCase()) && !f.mediaElement.originalNode.getAttribute("preload") && f.mediaElement.originalNode.setAttribute("preload", "none"), f.mediaElement.originalNode.parentNode.insertBefore(f.mediaElement, f.mediaElement.originalNode), f.mediaElement.appendChild(f.mediaElement.originalNode)
                }
                f.mediaElement.id = g, f.mediaElement.renderers = {}, f.mediaElement.renderer = null, f.mediaElement.rendererName = null, f.mediaElement.changeRenderer = function(a, b) {
                    var c = d;
                    if (void 0 !== c.mediaElement.renderer && null !== c.mediaElement.renderer && c.mediaElement.renderer.name === a) return c.mediaElement.renderer.pause(), c.mediaElement.renderer.stop && c.mediaElement.renderer.stop(), c.mediaElement.renderer.show(), c.mediaElement.renderer.setSrc(b[0].src), !0;
                    void 0 !== c.mediaElement.renderer && null !== c.mediaElement.renderer && (c.mediaElement.renderer.pause(), c.mediaElement.renderer.stop && c.mediaElement.renderer.stop(), c.mediaElement.renderer.hide());
                    var e = c.mediaElement.renderers[a],
                        f = null;
                    if (void 0 !== e && null !== e) return e.show(), e.setSrc(b[0].src), c.mediaElement.renderer = e, c.mediaElement.rendererName = a, !0;
                    for (var g = c.mediaElement.options.renderers.length ? c.mediaElement.options.renderers : n.renderer.order, h = 0, i = g.length; i > h; h++) {
                        var j = g[h];
                        if (j === a) {
                            f = n.renderer.renderers[j];
                            var l = Object.assign(f.options, c.mediaElement.options);
                            return e = f.create(c.mediaElement, l, b), e.name = a, c.mediaElement.renderers[f.name] = e, c.mediaElement.renderer = e, c.mediaElement.rendererName = a, e.show(), !0
                        }
                    }
                    return !1
                }, f.mediaElement.setSize = function(a, b) {
                    void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer.setSize(a, b)
                }, f.mediaElement.createErrorMessage = function(a) {
                    a = Array.isArray(a) ? a : [];
                    var b = i.default.createElement("div");
                    b.className = "me_cannotplay", b.style.width = "100%", b.style.height = "100%";
                    var c = f.mediaElement.options.customError;
                    if (!c) {
                        var d = f.mediaElement.originalNode.getAttribute("poster");
                        d && (c += '<img src="' + d + '" width="100%" height="100%" alt="' + k.default.i18n.t("mejs.download-file") + '">');
                        for (var e = 0, g = a.length; g > e; e++) {
                            var j = a[e];
                            c += '<a href="' + j.src + '" data-type="' + j.type + '"><span>' + k.default.i18n.t("mejs.download-file") + ": " + j.src + "</span></a>"
                        }
                    }
                    b.innerHTML = c, f.mediaElement.originalNode.parentNode.insertBefore(b, f.mediaElement.originalNode), f.mediaElement.originalNode.style.display = "none", h = !0
                };
                var o = k.default.html5media.properties,
                    p = k.default.html5media.methods,
                    q = function(a, b, c, d) {
                        var e = a[b],
                            f = function() {
                                return c.apply(a, [e])
                            },
                            g = function(b) {
                                return e = d.apply(a, [b])
                            };
                        Object.defineProperty(a, b, {
                            get: f,
                            set: g
                        })
                    },
                    r = function(a) {
                        "src" !== a && function() {
                            var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1),
                                c = function() {
                                    return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer["get" + b]() : null
                                },
                                d = function(a) {
                                    void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer["set" + b](a)
                                };
                            q(f.mediaElement, a, c, d), f.mediaElement["get" + b] = c, f.mediaElement["set" + b] = d
                        }()
                    },
                    s = function() {
                        return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer.getSrc() : null
                    },
                    t = function(a) {
                        var b = [];
                        if ("string" == typeof a) b.push({
                            src: a,
                            type: a ? m.getTypeFromFile(a) : ""
                        });
                        else
                            for (var c = 0, d = a.length; d > c; c++) {
                                var e = m.absolutizeUrl(a[c].src),
                                    g = a[c].type;
                                b.push({
                                    src: e,
                                    type: "" !== g && null !== g && void 0 !== g || !e ? g : m.getTypeFromFile(e)
                                })
                            }
                        var h = n.renderer.select(b, f.mediaElement.options.renderers.length ? f.mediaElement.options.renderers : []),
                            i = void 0;
                        return f.mediaElement.paused || (f.mediaElement.pause(), i = l.createEvent("pause", f.mediaElement), f.mediaElement.dispatchEvent(i)), f.mediaElement.originalNode.setAttribute("src", b[0].src || ""), f.mediaElement.querySelector(".me_cannotplay") && f.mediaElement.querySelector(".me_cannotplay").remove(), null === h ? (f.mediaElement.createErrorMessage(b), i = l.createEvent("error", f.mediaElement), i.message = "No renderer found", void f.mediaElement.dispatchEvent(i)) : (f.mediaElement.changeRenderer(h.rendererName, b), void 0 === f.mediaElement.renderer || null === f.mediaElement.renderer ? (i = l.createEvent("error", f.mediaElement), i.message = "Error creating renderer", f.mediaElement.dispatchEvent(i), void f.mediaElement.createErrorMessage(b)) : void 0)
                    },
                    u = function(a) {
                        f.mediaElement[a] = function() {
                            for (var b = arguments.length, c = Array(b), d = 0; b > d; d++) c[d] = arguments[d];
                            if (void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer[a]) try {
                                f.mediaElement.renderer[a](c)
                            } catch (a) {
                                f.mediaElement.createErrorMessage()
                            }
                            return null
                        }
                    };
                q(f.mediaElement, "src", s, t), f.mediaElement.getSrc = s, f.mediaElement.setSrc = t;
                for (var v = 0, w = o.length; w > v; v++) r(o[v]);
                for (var x = 0, y = p.length; y > x; x++) u(p[x]);
                if (f.mediaElement.events = {}, f.mediaElement.addEventListener = function(a, b) {
                        f.mediaElement.events[a] = f.mediaElement.events[a] || [], f.mediaElement.events[a].push(b)
                    }, f.mediaElement.removeEventListener = function(a, b) {
                        if (!a) return f.mediaElement.events = {}, !0;
                        var c = f.mediaElement.events[a];
                        if (!c) return !0;
                        if (!b) return f.mediaElement.events[a] = [], !0;
                        for (var d = 0; d < c.length; d++)
                            if (c[d] === b) return f.mediaElement.events[a].splice(d, 1), !0;
                        return !1
                    }, f.mediaElement.dispatchEvent = function(a) {
                        var b = f.mediaElement.events[a.type];
                        if (b)
                            for (var c = 0; c < b.length; c++) b[c].apply(null, [a])
                    }, null !== f.mediaElement.originalNode) {
                    var z = [];
                    switch (f.mediaElement.originalNode.nodeName.toLowerCase()) {
                        case "iframe":
                            z.push({
                                type: "",
                                src: f.mediaElement.originalNode.getAttribute("src")
                            });
                            break;
                        case "audio":
                        case "video":
                            var A = void 0,
                                B = void 0,
                                C = void 0,
                                D = f.mediaElement.originalNode.childNodes.length,
                                E = f.mediaElement.originalNode.getAttribute("src");
                            if (E) {
                                var F = f.mediaElement.originalNode;
                                z.push({
                                    type: m.formatType(E, F.getAttribute("type")),
                                    src: E
                                })
                            }
                            for (var G = 0; D > G; G++) A = f.mediaElement.originalNode.childNodes[G], A.nodeType === Node.ELEMENT_NODE && "source" === A.tagName.toLowerCase() && (B = A.getAttribute("src"), C = m.formatType(B, A.getAttribute("type")), z.push({
                                type: C,
                                src: B
                            }))
                    }
                    z.length > 0 && (f.mediaElement.src = z)
                }
                return f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode), h && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode), f.mediaElement
            };
        g.default.MediaElement = o, c.default = o
    }, {
        2: 2,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    6: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = a(3),
            f = d(e),
            g = {};
        g.version = "4.0.3", g.html5media = {
            properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
            readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
            methods: ["load", "play", "pause", "canPlayType"],
            events: ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"],
            mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg"]
        }, f.default.mejs = g, c.default = g
    }, {
        3: 3
    }],
    7: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.renderer = void 0;
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            g = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            h = a(6),
            i = d(h),
            j = function() {
                function a() {
                    e(this, a), this.renderers = {}, this.order = []
                }
                return g(a, [{
                    key: "add",
                    value: function(a) {
                        if (void 0 === a.name) throw new TypeError("renderer must contain at least `name` property");
                        this.renderers[a.name] = a, this.order.push(a.name)
                    }
                }, {
                    key: "select",
                    value: function(a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            c = b.length;
                        b = b.length ? b : this.order, c || function() {
                            var a = [/^(html5|native)/, /^flash/, /iframe$/],
                                c = function(b) {
                                    for (var c = 0, d = a.length; d > c; c++)
                                        if (null !== b.match(a[c])) return c;
                                    return a.length
                                };
                            b.sort(function(a, b) {
                                return c(a) - c(b)
                            })
                        }();
                        for (var d = 0, e = b.length; e > d; d++) {
                            var f = b[d],
                                g = this.renderers[f];
                            if (null !== g && void 0 !== g)
                                for (var h = 0, i = a.length; i > h; h++)
                                    if ("function" == typeof g.canPlayType && "string" == typeof a[h].type && g.canPlayType(a[h].type)) return {
                                        rendererName: g.name,
                                        src: a[h].src
                                    }
                        }
                        return null
                    }
                }, {
                    key: "order",
                    set: function(a) {
                        if (!Array.isArray(a)) throw new TypeError("order must be an array of strings.");
                        this._order = a
                    },
                    get: function() {
                        return this._order
                    }
                }, {
                    key: "renderers",
                    set: function(a) {
                        if (null !== a && "object" !== (void 0 === a ? "undefined" : f(a))) throw new TypeError("renderers must be an array of objects.");
                        this._renderers = a
                    },
                    get: function() {
                        return this._renderers
                    }
                }]), a
            }(),
            k = c.renderer = new j;
        i.default.Renderers = k
    }, {
        6: 6
    }],
    8: [function(a, b, c) {
        "use strict";

        function d(a) {
            if (a && a.__esModule) return a;
            var b = {};
            if (null != a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a, b
        }

        function e(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var f = a(3),
            g = e(f),
            h = a(2),
            i = e(h),
            j = a(4),
            k = e(j),
            l = a(16),
            m = e(l),
            n = a(23),
            o = d(n),
            p = a(25),
            q = a(24);
        Object.assign(l.config, {
            usePluginFullScreen: !0,
            fullscreenText: null
        }), Object.assign(m.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function(a, b, c, d) {
                if (a.isVideo) {
                    a.isInIframe = g.default.location !== g.default.parent.location, d.addEventListener("loadstart", function() {
                        a.detectFullscreenMode()
                    });
                    var e = this,
                        f = p.isString(e.options.fullscreenText) ? e.options.fullscreenText : k.default.t("mejs.fullscreen"),
                        h = i.default.createElement("div");
                    if (h.className = e.options.classPrefix + "button " + e.options.classPrefix + "fullscreen-button", h.innerHTML = '<button type="button" aria-controls="' + e.id + '" title="' + f + '" aria-label="' + f + '" tabindex="0"></button>', e.addControlElement(h, "fullscreen"), h.addEventListener("click", function() {
                            o.HAS_TRUE_NATIVE_FULLSCREEN && o.IS_FULLSCREEN || a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                        }), a.fullscreenBtn = h, e.globalBind("keydown", function(b) {
                            27 === (b.which || b.keyCode || 0) && (o.HAS_TRUE_NATIVE_FULLSCREEN && o.IS_FULLSCREEN || e.isFullScreen) && a.exitFullScreen()
                        }), e.normalHeight = 0, e.normalWidth = 0, o.HAS_TRUE_NATIVE_FULLSCREEN) {
                        var j = function() {
                            a.isFullScreen && (o.isFullScreen() ? (a.isNativeFullScreen = !0, a.setControlsSize()) : (a.isNativeFullScreen = !1, a.exitFullScreen()))
                        };
                        a.globalBind(o.FULLSCREEN_EVENT_NAME, j)
                    }
                }
            },
            detectFullscreenMode: function() {
                var a = this,
                    b = null !== a.media.rendererName && null !== a.media.rendererName.match(/(native|html5)/),
                    c = "";
                return c = o.HAS_TRUE_NATIVE_FULLSCREEN && b ? "native-native" : o.HAS_TRUE_NATIVE_FULLSCREEN && !b ? "plugin-native" : a.usePluginFullScreen && o.SUPPORT_POINTER_EVENTS ? "plugin-click" : "fullwindow", a.fullscreenMode = c, c
            },
            cleanfullscreen: function(a) {
                a.exitFullScreen()
            },
            enterFullScreen: function() {
                var a = this,
                    b = null !== a.media.rendererName && null !== a.media.rendererName.match(/(html5|native)/),
                    c = getComputedStyle(a.container);
                if (o.IS_IOS && o.HAS_IOS_FULLSCREEN && "function" == typeof a.media.webkitEnterFullscreen) return void a.media.webkitEnterFullscreen();
                if (q.addClass(i.default.documentElement, a.options.classPrefix + "fullscreen"), q.addClass(a.container, a.options.classPrefix + "container-fullscreen"), a.normalHeight = parseFloat(c.height), a.normalWidth = parseFloat(c.width), "native-native" === a.fullscreenMode || "plugin-native" === a.fullscreenMode ? (o.requestFullScreen(a.container), a.isInIframe && setTimeout(function b() {
                        if (a.isNativeFullScreen) {
                            var d = g.default.innerWidth || i.default.documentElement.clientWidth || i.default.body.clientWidth,
                                e = screen.width;
                            Math.abs(e - d) > e * .002 ? a.exitFullScreen() : setTimeout(b, 500)
                        }
                    }, 1e3)) : a.fullscreeMode, a.container.style.width = "100%", a.container.style.height = "100%", a.containerSizeTimeout = setTimeout(function() {
                        a.container.style.width = "100%", a.container.style.height = "100%", a.setControlsSize()
                    }, 500), b) a.node.style.width = "100%", a.node.style.height = "100%";
                else
                    for (var d = a.container.querySelectorAll("iframe, embed, object, video"), e = d.length, f = 0; e > f; f++) d[f].style.width = "100%", d[f].style.height = "100%";
                a.options.setDimensions && "function" == typeof a.media.setSize && a.media.setSize(screen.width, screen.height);
                for (var h = a.layers.childNodes, j = h.length, k = 0; j > k; k++) h[k].style.width = "100%", h[k].style.height = "100%";
                a.fullscreenBtn && (q.removeClass(a.fullscreenBtn, a.options.classPrefix + "fullscreen"), q.addClass(a.fullscreenBtn, a.options.classPrefix + "unfullscreen")), a.setControlsSize(), a.isFullScreen = !0;
                var l = Math.min(screen.width / a.width, screen.height / a.height),
                    m = a.container.querySelector("." + a.options.classPrefix + "captions-text");
                m && (m.style.fontSize = 100 * l + "%", m.style.lineHeight = "normal", a.container.querySelector("." + a.options.classPrefix + "captions-position").style.bottom = "45px");
                var n = p.createEvent("enteredfullscreen", a.container);
                a.container.dispatchEvent(n)
            },
            exitFullScreen: function() {
                var a = this,
                    b = null !== a.media.rendererName && null !== a.media.rendererName.match(/(native|html5)/);
                if (clearTimeout(a.containerSizeTimeout), o.HAS_TRUE_NATIVE_FULLSCREEN && (o.IS_FULLSCREEN || a.isFullScreen) && o.cancelFullScreen(), q.removeClass(i.default.documentElement, a.options.classPrefix + "fullscreen"), q.removeClass(a.container, a.options.classPrefix + "container-fullscreen"), a.options.setDimensions) {
                    if (a.container.style.width = a.normalWidth + "px", a.container.style.height = a.normalHeight + "px", b) a.node.style.width = a.normalWidth + "px", a.node.style.height = a.normalHeight + "px";
                    else
                        for (var c = a.container.querySelectorAll("iframe, embed, object, video"), d = c.length, e = 0; d > e; e++) c[e].style.width = a.normalWidth + "px", c[e].style.height = a.normalHeight + "px";
                    "function" == typeof a.media.setSize && a.media.setSize(a.normalWidth, a.normalHeight);
                    for (var f = a.layers.childNodes, g = f.length, h = 0; g > h; h++) f[h].style.width = a.normalWidth + "px", f[h].style.height = a.normalHeight + "px"
                }
                q.removeClass(a.fullscreenBtn, a.options.classPrefix + "unfullscreen"), q.addClass(a.fullscreenBtn, a.options.classPrefix + "fullscreen"), a.setControlsSize(), a.isFullScreen = !1;
                var j = a.container.querySelector("." + a.options.classPrefix + "captions-text");
                j && (j.style.fontSize = "", j.style.lineHeight = "", a.container.querySelector("." + a.options.classPrefix + "captions-position").style.bottom = "");
                var k = p.createEvent("exitedfullscreen", a.container);
                a.container.dispatchEvent(k)
            }
        })
    }, {
        16: 16,
        2: 2,
        23: 23,
        24: 24,
        25: 25,
        3: 3,
        4: 4
    }],
    9: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(2),
            f = d(e),
            g = a(16),
            h = d(g),
            i = a(4),
            j = d(i),
            k = a(25),
            l = a(24);
        Object.assign(g.config, {
            playText: null,
            pauseText: null
        }), Object.assign(h.default.prototype, {
            buildplaypause: function(a, b, c, d) {
                function e(a) {
                    "play" === a ? (l.removeClass(n, g.options.classPrefix + "play"), l.removeClass(n, g.options.classPrefix + "replay"), l.addClass(n, g.options.classPrefix + "pause"), o.setAttribute("title", m), o.setAttribute("aria-label", m)) : (l.removeClass(n, g.options.classPrefix + "pause"), l.removeClass(n, g.options.classPrefix + "replay"), l.addClass(n, g.options.classPrefix + "play"), o.setAttribute("title", i), o.setAttribute("aria-label", i))
                }
                var g = this,
                    h = g.options,
                    i = k.isString(h.playText) ? h.playText : j.default.t("mejs.play"),
                    m = k.isString(h.pauseText) ? h.pauseText : j.default.t("mejs.pause"),
                    n = f.default.createElement("div");
                n.className = g.options.classPrefix + "button " + g.options.classPrefix + "playpause-button " + g.options.classPrefix + "play", n.innerHTML = '<button type="button" aria-controls="' + g.id + '" title="' + i + '" aria-label="' + m + '" tabindex="0"></button>', n.addEventListener("click", function() {
                    d.paused ? d.play() : d.pause()
                });
                var o = n.querySelector("button");
                g.addControlElement(n, "playpause"), e("pse"), d.addEventListener("loadedmetadata", function() {
                    e("pse")
                }), d.addEventListener("play", function() {
                    e("play")
                }), d.addEventListener("playing", function() {
                    e("play")
                }), d.addEventListener("pause", function() {
                    e("pse")
                }), d.addEventListener("paused", function() {
                    e("pse")
                }), d.addEventListener("ended", function() {
                    a.options.loop || (l.removeClass(n, g.options.classPrefix + "pause"), l.removeClass(n, g.options.classPrefix + "play"), l.addClass(n, g.options.classPrefix + "replay"), o.setAttribute("title", i), o.setAttribute("aria-label", i))
                })
            }
        })
    }, {
        16: 16,
        2: 2,
        24: 24,
        25: 25,
        4: 4
    }],
    10: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(2),
            f = d(e),
            g = a(16),
            h = d(g),
            i = a(4),
            j = d(i),
            k = a(23),
            l = a(28),
            m = a(24);
        Object.assign(g.config, {
            enableProgressTooltip: !0
        }), Object.assign(h.default.prototype, {
            buildprogress: function(a, b, c, d) {
                var e = 0,
                    g = !1,
                    h = !1,
                    i = this,
                    n = a.options.autoRewind,
                    o = a.options.enableProgressTooltip ? '<span class="' + i.options.classPrefix + 'time-float"><span class="' + i.options.classPrefix + 'time-float-current">00:00</span><span class="' + i.options.classPrefix + 'time-float-corner"></span></span>' : "",
                    p = f.default.createElement("div");
                p.className = i.options.classPrefix + "time-rail", p.innerHTML = '<span class="' + i.options.classPrefix + "time-total " + i.options.classPrefix + 'time-slider"><span class="' + i.options.classPrefix + 'time-buffering"></span><span class="' + i.options.classPrefix + 'time-loaded"></span><span class="' + i.options.classPrefix + 'time-current"></span><span class="' + i.options.classPrefix + 'time-handle"></span>' + o + "</span>", i.addControlElement(p, "progress"), b.querySelector("." + i.options.classPrefix + "time-buffering").style.display = "none", i.rail = b.querySelector("." + i.options.classPrefix + "time-rail"), i.total = b.querySelector("." + i.options.classPrefix + "time-total"), i.loaded = b.querySelector("." + i.options.classPrefix + "time-loaded"), i.current = b.querySelector("." + i.options.classPrefix + "time-current"), i.handle = b.querySelector("." + i.options.classPrefix + "time-handle"), i.timefloat = b.querySelector("." + i.options.classPrefix + "time-float"), i.timefloatcurrent = b.querySelector("." + i.options.classPrefix + "time-float-current"), i.slider = b.querySelector("." + i.options.classPrefix + "time-slider"), i.newTime = 0, i.forcedHandlePause = !1;
                var q = function(b) {
                        var c = getComputedStyle(i.total),
                            e = m.offset(i.total),
                            f = parseFloat(c.width),
                            h = 0,
                            j = 0,
                            n = void 0;
                        n = b.originalEvent && b.originalEvent.changedTouches ? b.originalEvent.changedTouches[0].pageX : b.changedTouches ? b.changedTouches[0].pageX : b.pageX, d.duration && (n < e.left ? n = e.left : n > f + e.left && (n = f + e.left), j = n - e.left, h = j / f, i.newTime = .02 >= h ? 0 : h * d.duration, g && null !== d.currentTime && i.newTime.toFixed(4) !== d.currentTime.toFixed(4) && (i.setCurrentRailHandle(i.newTime), i.updateCurrent(i.newTime)), k.IS_IOS || k.IS_ANDROID || !i.timefloat || (i.timefloat.style.left = j + "px", i.timefloatcurrent.innerHTML = l.secondsToTimeCode(i.newTime, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond, a.options.secondsDecimalLength), i.timefloat.style.display = "block"))
                    },
                    r = function() {
                        var b = d.currentTime,
                            c = j.default.t("mejs.time-slider"),
                            e = l.secondsToTimeCode(b, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond, a.options.secondsDecimalLength),
                            f = d.duration;
                        i.slider.setAttribute("role", "slider"), i.slider.tabIndex = 0, d.paused ? (i.slider.setAttribute("aria-label", c), i.slider.setAttribute("aria-valuemin", 0), i.slider.setAttribute("aria-valuemax", f), i.slider.setAttribute("aria-valuenow", b), i.slider.setAttribute("aria-valuetext", e)) : (i.slider.removeAttribute("aria-label"), i.slider.removeAttribute("aria-valuemin"), i.slider.removeAttribute("aria-valuemax"), i.slider.removeAttribute("aria-valuenow"), i.slider.removeAttribute("aria-valuetext"))
                    },
                    s = function() {
                        new Date - e >= 1e3 && d.play()
                    },
                    t = function() {
                        g && null !== d.currentTime && i.newTime.toFixed(4) !== d.currentTime.toFixed(4) && (d.setCurrentTime(i.newTime), a.setCurrentRail(), i.updateCurrent(i.newTime)), i.forcedHandlePause && i.media.play(), i.forcedHandlePause = !1
                    };
                i.slider.addEventListener("focus", function() {
                    a.options.autoRewind = !1
                }), i.slider.addEventListener("blur", function() {
                    a.options.autoRewind = n
                }), i.slider.addEventListener("keydown", function(b) {
                    if (new Date - e >= 1e3 && (h = d.paused), i.options.keyActions.length) {
                        var c = b.which || b.keyCode || 0,
                            f = d.duration,
                            g = a.options.defaultSeekForwardInterval(d),
                            j = a.options.defaultSeekBackwardInterval(d),
                            l = d.currentTime;
                        switch (c) {
                            case 37:
                            case 40:
                                d.duration !== 1 / 0 && (l -= j);
                                break;
                            case 39:
                            case 38:
                                d.duration !== 1 / 0 && (l += g);
                                break;
                            case 36:
                                l = 0;
                                break;
                            case 35:
                                l = f;
                                break;
                            case 32:
                                return void(k.IS_FIREFOX || (d.paused ? d.play() : d.pause()));
                            case 13:
                                return void(d.paused ? d.play() : d.pause());
                            default:
                                return
                        }
                        l = 0 > l ? 0 : l >= f ? f : Math.floor(l), e = new Date, h || d.pause(), l < d.duration && !h && setTimeout(s, 1100), d.setCurrentTime(l), b.preventDefault(), b.stopPropagation()
                    }
                });
                var u = ["mousedown", "touchstart"];
                i.slider.addEventListener("dragstart", function() {
                    return !1
                });
                for (var v = 0, w = u.length; w > v; v++) i.slider.addEventListener(u[v], function(a) {
                    i.forcedHandlePause = !1, d.duration !== 1 / 0 && (1 === a.which || 0 === a.which) && (d.paused || (i.media.pause(), i.forcedHandlePause = !0), g = !0, q(a), i.globalBind("mousemove.dur touchmove.dur", function(a) {
                        var b = a.target;
                        (b === i.slider || b.closest("." + i.options.classPrefix + "time-slider")) && q(a)
                    }), i.globalBind("mouseup.dur touchend.dur", function() {
                        t(), g = !1, i.timefloat && (i.timefloat.style.display = "none"), i.globalUnbind("mousemove.dur touchmove.dur mouseup.dur touchend.dur")
                    }))
                });
                i.slider.addEventListener("mouseenter", function(a) {
                    a.target === i.slider && d.duration !== 1 / 0 && (i.globalBind("mousemove.dur", function(a) {
                        var b = a.target;
                        (b === i.slider || b.closest("." + i.options.classPrefix + "time-slider")) && q(a)
                    }), !i.timefloat || k.IS_IOS || k.IS_ANDROID || (i.timefloat.style.display = "block"))
                }), i.slider.addEventListener("mouseleave", function() {
                    d.duration !== 1 / 0 && (g || (i.globalUnbind("mousemove.dur"), i.timefloat && (i.timefloat.style.display = "none")))
                }), d.addEventListener("progress", function(c) {
                    var e = b.querySelector("." + i.options.classPrefix + "broadcast");
                    if (d.duration !== 1 / 0) e && (i.slider.style.display = "", e.remove()), a.setProgressRail(c), i.forcedHandlePause || a.setCurrentRail(c);
                    else if (!e) {
                        var g = f.default.createElement("span");
                        g.className = i.options.classPrefix + "broadcast", g.innerText = j.default.t("mejs.live-broadcast"), i.slider.style.display = "none"
                    }
                }), d.addEventListener("timeupdate", function(c) {
                    var e = b.querySelector("." + i.options.classPrefix + "broadcast");
                    if (d.duration !== 1 / 0) e && (i.slider.style.display = "", e.remove()), a.setProgressRail(c), i.forcedHandlePause || a.setCurrentRail(c), r(c);
                    else if (!e) {
                        var g = f.default.createElement("span");
                        g.className = i.options.classPrefix + "broadcast", g.innerText = j.default.t("mejs.live-broadcast"), b.querySelector("." + i.options.classPrefix + "time-rail").appendChild(g), i.slider.style.display = "none"
                    }
                }), i.container.addEventListener("controlsresize", function(b) {
                    d.duration !== 1 / 0 && (a.setProgressRail(b), i.forcedHandlePause || a.setCurrentRail(b))
                })
            },
            setProgressRail: function(a) {
                var b = null,
                    c = this,
                    d = void 0 !== a ? a.target : c.media;
                d && d.buffered && d.buffered.length > 0 && d.buffered.end && d.duration ? b = d.buffered.end(d.buffered.length - 1) / d.duration : d && void 0 !== d.bytesTotal && d.bytesTotal > 0 && void 0 !== d.bufferedBytes ? b = d.bufferedBytes / d.bytesTotal : a && a.lengthComputable && 0 !== a.total && (b = a.loaded / a.total), null !== b && (b = Math.min(1, Math.max(0, b)), c.loaded && c.total && (c.loaded.style.width = 100 * b + "%"))
            },
            setCurrentRailHandle: function(a) {
                var b = this;
                b.setCurrentRailMain(b, a)
            },
            setCurrentRail: function() {
                var a = this;
                a.setCurrentRailMain(a)
            },
            setCurrentRailMain: function(a, b) {
                if (void 0 !== a.media.currentTime && a.media.duration) {
                    var c = void 0 === b ? a.media.currentTime : b;
                    if (a.total && a.handle) {
                        var d = Math.round(parseFloat(getComputedStyle(a.total).width) * c / a.media.duration),
                            e = d - Math.round(a.handle.offsetWidth / 2);
                        d = c / a.media.duration * 100, a.current.style.width = d + "%", a.handle.style.left = e + "px"
                    }
                }
            }
        })
    }, {
        16: 16,
        2: 2,
        23: 23,
        24: 24,
        28: 28,
        4: 4
    }],
    11: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(2),
            f = d(e),
            g = a(16),
            h = d(g),
            i = a(28),
            j = a(24);
        Object.assign(g.config, {
            duration: 0,
            timeAndDurationSeparator: "<span> | </span>"
        }), Object.assign(h.default.prototype, {
            buildcurrent: function(a, b, c, d) {
                var e = this,
                    g = f.default.createElement("div");
                g.className = e.options.classPrefix + "time", g.setAttribute("role", "timer"), g.setAttribute("aria-live", "off"), g.innerHTML = '<span class="' + e.options.classPrefix + 'currenttime">' + i.secondsToTimeCode(0, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond, a.options.secondsDecimalLength) + "</span>", e.addControlElement(g, "current"), d.addEventListener("timeupdate", function() {
                    e.controlsAreVisible && a.updateCurrent()
                })
            },
            buildduration: function(a, b, c, d) {
                var e = this;
                if (b.lastChild.querySelector("." + e.options.classPrefix + "currenttime")) b.querySelector("." + e.options.classPrefix + "time").innerHTML += e.options.timeAndDurationSeparator + '<span class="' + e.options.classPrefix + 'duration">' + i.secondsToTimeCode(e.options.duration, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength) + "</span>";
                else {
                    b.querySelector("." + e.options.classPrefix + "currenttime") && j.addClass(b.querySelector("." + e.options.classPrefix + "currenttime").parentNode, e.options.classPrefix + "currenttime-container");
                    var h = f.default.createElement("div");
                    h.className = e.options.classPrefix + "time " + e.options.classPrefix + "duration-container", h.innerHTML = '<span class="' + e.options.classPrefix + 'duration">' + i.secondsToTimeCode(e.options.duration, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength) + "</span>", e.addControlElement(h, "duration")
                }
                d.addEventListener("timeupdate", function() {
                    e.controlsAreVisible && a.updateDuration()
                })
            },
            updateCurrent: function() {
                var a = this,
                    b = a.media.currentTime;
                isNaN(b) && (b = 0), a.controls.querySelector("." + a.options.classPrefix + "currenttime") && (a.controls.querySelector("." + a.options.classPrefix + "currenttime").innerText = i.secondsToTimeCode(b, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond, a.options.secondsDecimalLength))
            },
            updateDuration: function() {
                var a = this,
                    b = a.media.duration;
                (isNaN(b) || b === 1 / 0 || 0 > b) && (a.media.duration = a.options.duration = b = 0), a.options.duration > 0 && (b = a.options.duration);
                var c = i.secondsToTimeCode(b, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond, a.options.secondsDecimalLength);
                c.length > 5 && j.toggleClass(a.container, a.options.classPrefix + "long-video"), a.controls.querySelector("." + a.options.classPrefix + "duration") && b > 0 && (a.controls.querySelector("." + a.options.classPrefix + "duration").innerHTML = c)
            }
        })
    }, {
        16: 16,
        2: 2,
        24: 24,
        28: 28
    }],
    12: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(2),
            f = d(e),
            g = a(6),
            h = d(g),
            i = a(4),
            j = d(i),
            k = a(16),
            l = d(k),
            m = a(28),
            n = a(25),
            o = a(24);
        Object.assign(k.config, {
            startLanguage: "",
            tracksText: null,
            chaptersText: null,
            tracksAriaLive: !1,
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), Object.assign(l.default.prototype, {
            hasChapters: !1,
            buildtracks: function(a, b, c, d) {
                if (0 !== a.tracks.length) {
                    var e = this,
                        g = e.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
                        h = n.isString(e.options.tracksText) ? e.options.tracksText : j.default.t("mejs.captions-subtitles"),
                        i = n.isString(e.options.chaptersText) ? e.options.chaptersText : j.default.t("mejs.captions-chapters"),
                        k = a.tracks.length;
                    if (e.domNode.textTracks)
                        for (var l = e.domNode.textTracks.length - 1; l >= 0; l--) e.domNode.textTracks[l].mode = "hidden";
                    e.cleartracks(a), a.captions = f.default.createElement("div"), a.captions.className = e.options.classPrefix + "captions-layer " + e.options.classPrefix + "layer", a.captions.innerHTML = '<div class="' + e.options.classPrefix + "captions-position " + e.options.classPrefix + 'captions-position-hover"' + g + '><span class="' + e.options.classPrefix + 'captions-text"></span></div>', a.captions.style.display = "none", c.insertBefore(a.captions, c.firstChild), a.captionsText = a.captions.querySelector("." + e.options.classPrefix + "captions-text"), a.captionsButton = f.default.createElement("div"), a.captionsButton.className = e.options.classPrefix + "button " + e.options.classPrefix + "captions-button", a.captionsButton.innerHTML = '<button type="button" aria-controls="' + e.id + '" title="' + h + '" aria-label="' + h + '" tabindex="0"></button><div class="' + e.options.classPrefix + "captions-selector " + e.options.classPrefix + 'offscreen"><ul class="' + e.options.classPrefix + 'captions-selector-list"><li class="' + e.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + e.options.classPrefix + 'captions-selector-input" name="' + a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked disabled><label class="' + e.options.classPrefix + "captions-selector-label " + e.options.classPrefix + 'captions-selected" for="' + a.id + '_captions_none">' + j.default.t("mejs.none") + "</label></li></ul></div>", e.addControlElement(a.captionsButton, "tracks"), a.captionsButton.querySelector("." + e.options.classPrefix + "captions-selector-list-item").disabled = !1, a.chaptersButton = f.default.createElement("div"), a.chaptersButton.className = e.options.classPrefix + "button " + e.options.classPrefix + "chapters-button", a.chaptersButton.innerHTML = '<button type="button" aria-controls="' + e.id + '" title="' + i + '" aria-label="' + i + '" tabindex="0"></button><div class="' + e.options.classPrefix + "chapters-selector " + e.options.classPrefix + 'offscreen"><ul class="' + e.options.classPrefix + 'chapters-selector-list"></ul></div>';
                    for (var m = 0, p = 0; k > p; p++) {
                        var q = a.tracks[p].kind;
                        "subtitles" === q || "captions" === q ? m++ : "chapters" !== q || b.querySelector("." + e.options.classPrefix + "chapter-selector") || a.captionsButton.parentNode.insertBefore(a.chaptersButton, a.captionsButton)
                    }
                    a.trackToLoad = -1, a.selectedTrack = null, a.isLoadingTrack = !1;
                    for (var r = 0; k > r; r++) {
                        var s = a.tracks[r].kind;
                        ("subtitles" === s || "captions" === s) && a.addTrackButton(a.tracks[r].trackId, a.tracks[r].srclang, a.tracks[r].label)
                    }
                    a.loadNextTrack();
                    var t = ["mouseenter", "focusin"],
                        u = ["mouseleave", "focusout"];
                    if (e.options.toggleCaptionsButtonWhenOnlyOne && 1 === m) a.captionsButton.addEventListener("click", function() {
                        var b = "none";
                        null === a.selectedTrack && (b = a.tracks[0].trackId), a.setTrack(b)
                    });
                    else {
                        for (var v = a.captionsButton.querySelectorAll("." + e.options.classPrefix + "captions-selector-label"), w = a.captionsButton.querySelectorAll("input[type=radio]"), x = 0, y = t.length; y > x; x++) a.captionsButton.addEventListener(t[x], function() {
                            o.removeClass(this.querySelector("." + e.options.classPrefix + "captions-selector"), e.options.classPrefix + "offscreen")
                        });
                        for (var z = 0, A = u.length; A > z; z++) a.captionsButton.addEventListener(u[z], function() {
                            o.addClass(this.querySelector("." + e.options.classPrefix + "captions-selector"), e.options.classPrefix + "offscreen")
                        });
                        for (var B = 0, C = w.length; C > B; B++) w[B].addEventListener("click", function() {
                            a.setTrack(this.value)
                        });
                        for (var D = 0, E = v.length; E > D; D++) v[D].addEventListener("click", function() {
                            var a = o.siblings(this, function(a) {
                                    return "INPUT" === a.tagName
                                })[0],
                                b = n.createEvent("click", a);
                            a.dispatchEvent(b)
                        });
                        a.captionsButton.addEventListener("keydown", function(a) {
                            a.stopPropagation()
                        })
                    }
                    for (var F = 0, G = t.length; G > F; F++) a.chaptersButton.addEventListener(t[F], function() {
                        this.querySelector("." + e.options.classPrefix + "chapters-selector-list").childNodes.length && o.removeClass(this.querySelector("." + e.options.classPrefix + "chapters-selector"), e.options.classPrefix + "offscreen")
                    });
                    for (var H = 0, I = u.length; I > H; H++) a.chaptersButton.addEventListener(u[H], function() {
                        o.addClass(this.querySelector("." + e.options.classPrefix + "chapters-selector"), e.options.classPrefix + "offscreen")
                    });
                    a.chaptersButton.addEventListener("keydown", function(a) {
                        a.stopPropagation()
                    }), a.options.alwaysShowControls ? o.addClass(a.container.querySelector("." + e.options.classPrefix + "captions-position"), e.options.classPrefix + "captions-position-hover") : (a.container.addEventListener("controlsshown", function() {
                        o.addClass(a.container.querySelector("." + e.options.classPrefix + "captions-position"), e.options.classPrefix + "captions-position-hover")
                    }), a.container.addEventListener("controlshidden", function() {
                        d.paused || o.removeClass(a.container.querySelector("." + e.options.classPrefix + "captions-position"), e.options.classPrefix + "captions-position-hover")
                    })), d.addEventListener("timeupdate", function() {
                        a.displayCaptions()
                    }), "" !== a.options.slidesSelector && (a.slidesContainer = f.default.querySelectorAll(a.options.slidesSelector), d.addEventListener("timeupdate", function() {
                        a.displaySlides()
                    }))
                }
            },
            cleartracks: function(a) {
                a && (a.captions && a.captions.remove(), a.chapters && a.chapters.remove(), a.captionsText && a.captionsText.remove(), a.captionsButton && a.captionsButton.remove(), a.chaptersButton && a.chaptersButton.remove())
            },
            rebuildtracks: function() {
                var a = this;
                a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media)
            },
            findTracks: function() {
                var a = this,
                    b = a.node.querySelectorAll("track"),
                    c = b.length;
                a.tracks = [];
                for (var d = 0; c > d; d++) {
                    var e = b[d],
                        f = e.getAttribute("srclang").toLowerCase() || "",
                        g = a.id + "_track_" + d + "_" + e.getAttribute("kind") + "_" + f;
                    a.tracks.push({
                        trackId: g,
                        srclang: f,
                        src: e.getAttribute("src"),
                        kind: e.getAttribute("kind"),
                        label: e.getAttribute("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                }
            },
            setTrack: function(a) {
                for (var b = this, c = b.captionsButton.querySelectorAll('input[type="radio"]'), d = b.captionsButton.querySelectorAll("." + b.options.classPrefix + "captions-selected"), e = b.captionsButton.querySelector('input[value="' + a + '"]'), f = 0, g = c.length; g > f; f++) c[f].checked = !1;
                for (var h = 0, i = d.length; i > h; h++) o.removeClass(d[h], b.options.classPrefix + "captions-selected");
                e.checked = !0;
                for (var j = o.siblings(e, function(a) {
                        return o.hasClass(a, b.options.classPrefix + "captions-selector-label")
                    }), k = 0, l = j.length; l > k; k++) o.addClass(j[k], b.options.classPrefix + "captions-selected");
                if ("none" === a) b.selectedTrack = null, o.removeClass(b.captionsButton, b.options.classPrefix + "captions-enabled");
                else
                    for (var m = 0, p = b.tracks.length; p > m; m++) {
                        var q = b.tracks[m];
                        if (q.trackId === a) {
                            null === b.selectedTrack && o.addClass(b.captionsButton, b.options.classPrefix + "captions-enabled"), b.selectedTrack = q, b.captions.setAttribute("lang", b.selectedTrack.srclang), b.displayCaptions();
                            break
                        }
                    }
                var r = n.createEvent("captionschange", b.media);
                r.detail.caption = b.selectedTrack, b.media.dispatchEvent(r)
            },
            loadNextTrack: function() {
                var a = this;
                a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack = !0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack = !1, a.checkForTracks())
            },
            loadTrack: function(a) {
                var b = this,
                    c = b.tracks[a];
                void 0 === c || void 0 === c.src && "" === c.src || o.ajax(c.src, "text", function(a) {
                    c.entries = "string" == typeof a && /<tt\s+xml/gi.exec(a) ? h.default.TrackFormatParser.dfxp.parse(a) : h.default.TrackFormatParser.webvtt.parse(a), c.isLoaded = !0, b.enableTrackButton(c), b.loadNextTrack(), "slides" === c.kind ? b.setupSlides(c) : "chapters" !== c.kind || b.hasChapters || (b.drawChapters(c), b.hasChapters = !0)
                }, function() {
                    b.removeTrackButton(c.trackId), b.loadNextTrack()
                })
            },
            enableTrackButton: function(a) {
                var b = this,
                    c = a.srclang,
                    d = f.default.getElementById("" + a.trackId);
                if (d) {
                    var e = a.label;
                    "" === e && (e = j.default.t(h.default.language.codes[c]) || c), d.disabled = !1;
                    for (var g = o.siblings(d, function(a) {
                            return o.hasClass(a, b.options.classPrefix + "captions-selector-label")
                        }), i = 0, k = g.length; k > i; i++) g[i].innerHTML = e;
                    if (b.options.startLanguage === c) {
                        d.checked = !0;
                        var l = n.createEvent("click", d);
                        d.dispatchEvent(l)
                    }
                }
            },
            removeTrackButton: function(a) {
                var b = f.default.getElementById("" + a);
                if (b) {
                    var c = b.closest("li");
                    c && c.remove()
                }
            },
            addTrackButton: function(a, b, c) {
                var d = this;
                "" === c && (c = j.default.t(h.default.language.codes[b]) || b), d.captionsButton.querySelector("ul").innerHTML += '<li class="' + d.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + d.options.classPrefix + 'captions-selector-input" name="' + d.id + '_captions" id="' + a + '" value="' + a + '" disabled><label class="' + d.options.classPrefix + 'captions-selector-label">' + c + " (loading)</label></li>"
            },
            checkForTracks: function() {
                var a = this,
                    b = !1;
                if (a.options.hideCaptionsButtonWhenEmpty) {
                    for (var c = 0, d = a.tracks.length; d > c; c++) {
                        var e = a.tracks[c].kind;
                        if (("subtitles" === e || "captions" === e) && a.tracks[c].isLoaded) {
                            b = !0;
                            break
                        }
                    }
                    a.captionsButton.style.display = b ? "" : "none", a.setControlsSize()
                }
            },
            displayCaptions: function() {
                if (void 0 !== this.tracks) {
                    var a = this,
                        b = a.selectedTrack,
                        c = function(a) {
                            var b = f.default.createElement("div");
                            b.innerHTML = a;
                            for (var c = b.getElementsByTagName("script"), d = c.length; d--;) c[d].remove();
                            for (var e = b.getElementsByTagName("*"), g = 0, h = e.length; h > g; g++)
                                for (var i = e[g].attributes, j = Array.prototype.slice.call(i), k = 0, l = j.length; l > k; k++) j[k].name.startsWith("on") || j[k].value.startsWith("javascript") ? e[g].remove() : "style" === j[k].name && e[g].removeAttribute(j[k].name);
                            return b.innerHTML
                        };
                    if (null !== b && b.isLoaded) {
                        var d = a.searchTrackPosition(b.entries, a.media.currentTime);
                        if (d > -1) return a.captionsText.innerHTML = c(b.entries[d].text), a.captionsText.className = a.options.classPrefix + "captions-text " + (b.entries[d].identifier || ""), a.captions.style.display = "", void(a.captions.style.height = "0px");
                        a.captions.style.display = "none"
                    } else a.captions.style.display = "none"
                }
            },
            setupSlides: function(a) {
                var b = this;
                b.slides = a, b.slides.entries.imgs = [b.slides.entries.length], b.showSlide(0)
            },
            showSlide: function(a) {
                var b = this,
                    c = this;
                if (void 0 !== c.tracks && void 0 !== c.slidesContainer) {
                    var d = c.slides.entries[a].text,
                        e = c.slides.entries[a].imgs;
                    void 0 === e || void 0 === e.fadeIn ? function() {
                        var g = f.default.createElement("img");
                        g.src = d, g.addEventListener("load", function() {
                            var a = b,
                                d = o.siblings(a, function(a) {
                                    return d(a)
                                });
                            a.style.display = "none", c.slidesContainer.innerHTML += a.innerHTML, o.fadeIn(c.slidesContainer.querySelector(g));
                            for (var e = 0, f = d.length; f > e; e++) o.fadeOut(d[e], 400)
                        }), c.slides.entries[a].imgs = e = g
                    }() : o.visible(e) || function() {
                        var a = o.siblings(self, function(b) {
                            return a(b)
                        });
                        o.fadeIn(c.slidesContainer.querySelector(e));
                        for (var b = 0, d = a.length; d > b; b++) o.fadeOut(a[b])
                    }()
                }
            },
            displaySlides: function() {
                var a = this;
                if (void 0 !== this.slides) {
                    var b = a.slides,
                        c = a.searchTrackPosition(b.entries, a.media.currentTime);
                    return c > -1 ? void a.showSlide(c) : void 0
                }
            },
            drawChapters: function(a) {
                var b = this,
                    c = a.entries.length;
                if (c) {
                    b.chaptersButton.querySelector("ul").innerHTML = "";
                    for (var d = 0; c > d; d++) b.chaptersButton.querySelector("ul").innerHTML += '<li class="' + b.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + b.options.classPrefix + 'captions-selector-input" name="' + b.id + '_chapters" value="' + a.entries[d].start + '" disabled><label class="' + b.options.classPrefix + 'chapters-selector-label">' + a.entries[d].text + "</label></li>";
                    for (var e = b.chaptersButton.querySelectorAll('input[type="radio"]'), f = b.chaptersButton.querySelectorAll("." + b.options.classPrefix + "chapters-selector-label"), g = 0, h = e.length; h > g; g++) e[g].disabled = !1, e[g].checked = !1, e[g].addEventListener("click", function() {
                        var a = this,
                            c = b.chaptersButton.querySelectorAll("li"),
                            d = o.siblings(a, function(a) {
                                return o.hasClass(a, b.options.classPrefix + "chapters-selector-label")
                            })[0];
                        a.checked = !0, a.parentNode.setAttribute("aria-checked", !0), o.addClass(d, b.options.classPrefix + "chapters-selected"), o.removeClass(b.chaptersButton.querySelector("." + b.options.classPrefix + "chapters-selected"), b.options.classPrefix + "chapters-selected");
                        for (var e = 0, f = c.length; f > e; e++) c[e].setAttribute("aria-checked", !1);
                        b.media.setCurrentTime(parseFloat(a.value)), b.media.paused && b.media.play()
                    });
                    for (var i = 0, j = f.length; j > i; i++) f[i].addEventListener("click", function() {
                        var a = o.siblings(this, function(a) {
                                return "INPUT" === a.tagName
                            })[0],
                            b = n.createEvent("click", a);
                        a.dispatchEvent(b)
                    })
                }
            },
            searchTrackPosition: function(a, b) {
                for (var c = 0, d = a.length - 1, e = void 0, f = void 0, g = void 0; d >= c;) {
                    if (e = c + d >> 1, f = a[e].start, g = a[e].stop, b >= f && g > b) return e;
                    b > f ? c = e + 1 : f > b && (d = e - 1)
                }
                return -1
            }
        }), h.default.language = {
            codes: {
                af: "mejs.afrikaans",
                sq: "mejs.albanian",
                ar: "mejs.arabic",
                be: "mejs.belarusian",
                bg: "mejs.bulgarian",
                ca: "mejs.catalan",
                zh: "mejs.chinese",
                "zh-cn": "mejs.chinese-simplified",
                "zh-tw": "mejs.chines-traditional",
                hr: "mejs.croatian",
                cs: "mejs.czech",
                da: "mejs.danish",
                nl: "mejs.dutch",
                en: "mejs.english",
                et: "mejs.estonian",
                fl: "mejs.filipino",
                fi: "mejs.finnish",
                fr: "mejs.french",
                gl: "mejs.galician",
                de: "mejs.german",
                el: "mejs.greek",
                ht: "mejs.haitian-creole",
                iw: "mejs.hebrew",
                hi: "mejs.hindi",
                hu: "mejs.hungarian",
                is: "mejs.icelandic",
                id: "mejs.indonesian",
                ga: "mejs.irish",
                it: "mejs.italian",
                ja: "mejs.japanese",
                ko: "mejs.korean",
                lv: "mejs.latvian",
                lt: "mejs.lithuanian",
                mk: "mejs.macedonian",
                ms: "mejs.malay",
                mt: "mejs.maltese",
                no: "mejs.norwegian",
                fa: "mejs.persian",
                pl: "mejs.polish",
                pt: "mejs.portuguese",
                ro: "mejs.romanian",
                ru: "mejs.russian",
                sr: "mejs.serbian",
                sk: "mejs.slovak",
                sl: "mejs.slovenian",
                es: "mejs.spanish",
                sw: "mejs.swahili",
                sv: "mejs.swedish",
                tl: "mejs.tagalog",
                th: "mejs.thai",
                tr: "mejs.turkish",
                uk: "mejs.ukrainian",
                vi: "mejs.vietnamese",
                cy: "mejs.welsh",
                yi: "mejs.yiddish"
            }
        }, h.default.TrackFormatParser = {
            webvtt: {
                pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(a) {
                    for (var b = a.split(/\r?\n/), c = [], d = void 0, e = void 0, f = void 0, g = 0, h = b.length; h > g; g++) {
                        if ((d = this.pattern.exec(b[g])) && g < b.length) {
                            for (g - 1 >= 0 && "" !== b[g - 1] && (f = b[g - 1]), g++, e = b[g], g++;
                                "" !== b[g] && g < b.length;) e = e + "\n" + b[g], g++;
                            e = e.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), c.push({
                                identifier: f,
                                start: 0 === m.convertSMPTEtoSeconds(d[1]) ? .2 : m.convertSMPTEtoSeconds(d[1]),
                                stop: m.convertSMPTEtoSeconds(d[3]),
                                text: e,
                                settings: d[5]
                            })
                        }
                        f = ""
                    }
                    return c
                }
            },
            dfxp: {
                parse: function(a) {
                    a = $(a).filter("tt");
                    var b = a.firstChild,
                        c = b.querySelectorAll("p"),
                        d = a.getElementById("" + b.attr("style")),
                        e = [],
                        f = void 0;
                    if (d.length) {
                        d.removeAttribute("id");
                        var g = d.attributes;
                        if (g.length) {
                            f = {};
                            for (var h = 0, i = g.length; i > h; h++) f[g[h].name.split(":")[1]] = g[h].value
                        }
                    }
                    for (var j = 0, k = c.length; k > j; j++) {
                        var l = void 0,
                            n = {
                                start: null,
                                stop: null,
                                style: null,
                                text: null
                            };
                        if (c.eq(j).attr("begin") && (n.start = m.convertSMPTEtoSeconds(c.eq(j).attr("begin"))), !n.start && c.eq(j - 1).attr("end") && (n.start = m.convertSMPTEtoSeconds(c.eq(j - 1).attr("end"))), c.eq(j).attr("end") && (n.stop = m.convertSMPTEtoSeconds(c.eq(j).attr("end"))), !n.stop && c.eq(j + 1).attr("begin") && (n.stop = m.convertSMPTEtoSeconds(c.eq(j + 1).attr("begin"))), f) {
                            l = "";
                            for (var o in f) l += o + ":" + f[o] + ";"
                        }
                        l && (n.style = l), 0 === n.start && (n.start = .2), n.text = c.eq(j).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), e.push(n)
                    }
                    return e
                }
            }
        }
    }, {
        16: 16,
        2: 2,
        24: 24,
        25: 25,
        28: 28,
        4: 4,
        6: 6
    }],
    13: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(2),
            f = d(e),
            g = a(16),
            h = d(g),
            i = a(4),
            j = d(i),
            k = a(23),
            l = a(25),
            m = a(24);
        Object.assign(g.config, {
            muteText: null,
            unmuteText: null,
            allyVolumeControlText: null,
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), Object.assign(h.default.prototype, {
            buildvolume: function(a, b, c, d) {
                if (!k.IS_ANDROID && !k.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
                    var e = this,
                        g = e.isVideo ? e.options.videoVolume : e.options.audioVolume,
                        h = l.isString(e.options.muteText) ? e.options.muteText : j.default.t("mejs.mute"),
                        i = l.isString(e.options.unmuteText) ? e.options.unmuteText : j.default.t("mejs.unmute"),
                        n = l.isString(e.options.allyVolumeControlText) ? e.options.allyVolumeControlText : j.default.t("mejs.volume-help-text"),
                        o = f.default.createElement("div");
                    if (o.className = e.options.classPrefix + "button " + e.options.classPrefix + "volume-button " + e.options.classPrefix + "mute", o.innerHTML = "horizontal" === g ? '<button type="button" aria-controls="' + e.id + '" title="' + h + '" aria-label="' + h + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + e.id + '" title="' + h + '" aria-label="' + h + '" tabindex="0"></button><a href="javascript:void(0);" class="' + e.options.classPrefix + 'volume-slider"><span class="' + e.options.classPrefix + 'offscreen">' + n + '</span><div class="' + e.options.classPrefix + 'volume-total"><div class="' + e.options.classPrefix + 'volume-current"></div><div class="' + e.options.classPrefix + 'volume-handle"></div></div></a>', e.addControlElement(o, "volume"), "horizontal" === g) {
                        var p = f.default.createElement("a");
                        p.className = e.options.classPrefix + "horizontal-volume-slider", p.href = "javascript:void(0);", p.innerHTML += '<span class="' + e.options.classPrefix + 'offscreen">' + n + '</span><div class="' + e.options.classPrefix + 'horizontal-volume-total"><div class="' + e.options.classPrefix + 'horizontal-volume-current"></div><div class="' + e.options.classPrefix + 'horizontal-volume-handle"></div></div>', o.parentNode.insertBefore(p, o.nextSibling)
                    }
                    var q = "vertical" === g ? e.container.querySelector("." + e.options.classPrefix + "volume-slider") : e.container.querySelector("." + e.options.classPrefix + "horizontal-volume-slider"),
                        r = "vertical" === g ? e.container.querySelector("." + e.options.classPrefix + "volume-total") : e.container.querySelector("." + e.options.classPrefix + "horizontal-volume-total"),
                        s = "vertical" === g ? e.container.querySelector("." + e.options.classPrefix + "volume-current") : e.container.querySelector("." + e.options.classPrefix + "horizontal-volume-current"),
                        t = "vertical" === g ? e.container.querySelector("." + e.options.classPrefix + "volume-handle") : e.container.querySelector("." + e.options.classPrefix + "horizontal-volume-handle"),
                        u = o.firstElementChild,
                        v = function(a) {
                            if (a = Math.max(0, a), 0 === (a = Math.min(a, 1))) {
                                m.removeClass(o, e.options.classPrefix + "mute"), m.addClass(o, e.options.classPrefix + "unmute");
                                var b = o.firstElementChild;
                                b.setAttribute("title", i), b.setAttribute("aria-label", i)
                            } else {
                                m.removeClass(o, e.options.classPrefix + "unmute"), m.addClass(o, e.options.classPrefix + "mute");
                                var c = o.firstElementChild;
                                c.setAttribute("title", h), c.setAttribute("aria-label", h)
                            }
                            var d = 100 * a + "%",
                                f = getComputedStyle(t);
                            "vertical" === g ? (s.style.bottom = 0, s.style.height = d, t.style.bottom = d, t.style.marginBottom = -parseFloat(f.height) / 2 + "px") : (s.style.left = 0, s.style.width = d, t.style.left = d, t.style.marginLeft = -parseFloat(f.width) / 2 + "px")
                        },
                        w = function(a) {
                            var b = m.offset(r),
                                c = getComputedStyle(r),
                                e = null;
                            if ("vertical" === g) {
                                var f = parseFloat(c.height);
                                if (e = (f - (a.pageY - b.top)) / f, 0 === b.top || 0 === b.left) return
                            } else {
                                var i = parseFloat(c.width);
                                e = (a.pageX - b.left) / i
                            }
                            e = Math.max(0, e), e = Math.min(e, 1), v(e), 0 === e ? d.setMuted(!0) : d.setMuted(!1), d.setVolume(e), a.preventDefault(), a.stopPropagation()
                        };
                    o.addEventListener("mouseenter", function(a) {
                        a.target === o && (q.style.display = "block", y = !0, a.preventDefault(), a.stopPropagation())
                    }), o.addEventListener("focusin", function() {
                        q.style.display = "block", y = !0
                    }), o.addEventListener("mouseleave", function() {
                        y = !1, x || "vertical" !== g || (q.style.display = "none")
                    }), o.addEventListener("focusout", function() {
                        y = !1, x || "vertical" !== g || (q.style.display = "none")
                    }), o.addEventListener("keydown", function(a) {
                        if (e.options.keyActions.length) {
                            var b = a.which || a.keyCode || 0,
                                c = d.volume;
                            switch (b) {
                                case 38:
                                    c = Math.min(c + .1, 1);
                                    break;
                                case 40:
                                    c = Math.max(0, c - .1);
                                    break;
                                default:
                                    return !0
                            }
                            x = !1, v(c), d.setVolume(c), a.preventDefault(), a.stopPropagation()
                        }
                    });
                    var x = !1,
                        y = !1,
                        z = function() {
                            var a = Math.floor(100 * d.volume);
                            q.setAttribute("aria-label", j.default.t("mejs.volume-slider")), q.setAttribute("aria-valuemin", 0), q.setAttribute("aria-valuemax", 100), q.setAttribute("aria-valuenow", a), q.setAttribute("aria-valuetext", a + "%"), q.setAttribute("role", "slider"), q.tabIndex = -1
                        };
                    q.addEventListener("dragstart", function() {
                        return !1
                    }), q.addEventListener("mouseover", function() {
                        y = !0
                    }), q.addEventListener("mousedown", function(a) {
                        w(a), e.globalBind("mousemove.vol", function(a) {
                            var b = a.target;
                            x && (b === q || b.closest("vertical" === g ? "." + e.options.classPrefix + "volume-slider" : "." + e.options.classPrefix + "horizontal-volume-slider")) && w(a)
                        }), e.globalBind("mouseup.vol", function() {
                            x = !1, e.globalUnbind("mousemove.vol mouseup.vol"), y || "vertical" !== g || (q.style.display = "none")
                        }), x = !0, a.preventDefault(), a.stopPropagation()
                    }), u.addEventListener("click", function() {
                        d.setMuted(!d.muted);
                        var a = l.createEvent("volumechange", d);
                        d.dispatchEvent(a)
                    }), u.addEventListener("focus", function() {
                        "vertical" === g && (q.style.display = "block")
                    }), u.addEventListener("blur", function() {
                        "vertical" === g && (q.style.display = "none")
                    }), d.addEventListener("volumechange", function(a) {
                        x || (d.muted ? (v(0), m.removeClass(o, e.options.classPrefix + "mute"), m.addClass(o, e.options.classPrefix + "unmute")) : (v(d.volume), m.removeClass(o, e.options.classPrefix + "unmute"), m.addClass(o, e.options.classPrefix + "mute"))), z(a)
                    }), 0 === a.options.startVolume && d.setMuted(!0);
                    null !== e.media.rendererName && null !== e.media.rendererName.match(/(native|html5)/) && d.setVolume(a.options.startVolume), e.container.addEventListener("controlsresize", function() {
                        d.muted ? (v(0), m.removeClass(o, e.options.classPrefix + "mute"), m.addClass(o, e.options.classPrefix + "unmute")) : (v(d.volume), m.removeClass(o, e.options.classPrefix + "unmute"), m.addClass(o, e.options.classPrefix + "mute"))
                    })
                }
            }
        })
    }, {
        16: 16,
        2: 2,
        23: 23,
        24: 24,
        25: 25,
        4: 4
    }],
    14: [function(a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.EN = {
            "mejs.plural-form": 1,
            "mejs.download-file": "Download File",
            "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
            "mejs.fullscreen": "Fullscreen",
            "mejs.play": "Play",
            "mejs.pause": "Pause",
            "mejs.time-slider": "Time Slider",
            "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
            "mejs.live-broadcast": "Live Broadcast",
            "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
            "mejs.unmute": "Unmute",
            "mejs.mute": "Mute",
            "mejs.volume-slider": "Volume Slider",
            "mejs.video-player": "Video Player",
            "mejs.audio-player": "Audio Player",
            "mejs.captions-subtitles": "Captions/Subtitles",
            "mejs.captions-chapters": "Chapters",
            "mejs.none": "None",
            "mejs.afrikaans": "Afrikaans",
            "mejs.albanian": "Albanian",
            "mejs.arabic": "Arabic",
            "mejs.belarusian": "Belarusian",
            "mejs.bulgarian": "Bulgarian",
            "mejs.catalan": "Catalan",
            "mejs.chinese": "Chinese",
            "mejs.chinese-simplified": "Chinese (Simplified)",
            "mejs.chinese-traditional": "Chinese (Traditional)",
            "mejs.croatian": "Croatian",
            "mejs.czech": "Czech",
            "mejs.danish": "Danish",
            "mejs.dutch": "Dutch",
            "mejs.english": "English",
            "mejs.estonian": "Estonian",
            "mejs.filipino": "Filipino",
            "mejs.finnish": "Finnish",
            "mejs.french": "French",
            "mejs.galician": "Galician",
            "mejs.german": "German",
            "mejs.greek": "Greek",
            "mejs.haitian-creole": "Haitian Creole",
            "mejs.hebrew": "Hebrew",
            "mejs.hindi": "Hindi",
            "mejs.hungarian": "Hungarian",
            "mejs.icelandic": "Icelandic",
            "mejs.indonesian": "Indonesian",
            "mejs.irish": "Irish",
            "mejs.italian": "Italian",
            "mejs.japanese": "Japanese",
            "mejs.korean": "Korean",
            "mejs.latvian": "Latvian",
            "mejs.lithuanian": "Lithuanian",
            "mejs.macedonian": "Macedonian",
            "mejs.malay": "Malay",
            "mejs.maltese": "Maltese",
            "mejs.norwegian": "Norwegian",
            "mejs.persian": "Persian",
            "mejs.polish": "Polish",
            "mejs.portuguese": "Portuguese",
            "mejs.romanian": "Romanian",
            "mejs.russian": "Russian",
            "mejs.serbian": "Serbian",
            "mejs.slovak": "Slovak",
            "mejs.slovenian": "Slovenian",
            "mejs.spanish": "Spanish",
            "mejs.swahili": "Swahili",
            "mejs.swedish": "Swedish",
            "mejs.tagalog": "Tagalog",
            "mejs.thai": "Thai",
            "mejs.turkish": "Turkish",
            "mejs.ukrainian": "Ukrainian",
            "mejs.vietnamese": "Vietnamese",
            "mejs.welsh": "Welsh",
            "mejs.yiddish": "Yiddish"
        }
    }, {}],
    15: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(3),
            f = d(e),
            g = a(6),
            h = d(g);
        "undefined" != typeof jQuery ? h.default.$ = f.default.jQuery = f.default.$ = jQuery : "undefined" != typeof Zepto ? h.default.$ = f.default.Zepto = f.default.$ = Zepto : "undefined" != typeof ender && (h.default.$ = f.default.ender = f.default.$ = ender)
    }, {
        3: 3,
        6: 6
    }],
    16: [function(a, b, c) {
        "use strict";

        function d(a) {
            if (a && a.__esModule) return a;
            var b = {};
            if (null != a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a, b
        }

        function e(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function f(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.config = void 0;
        var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a(3),
            j = e(i),
            k = a(2),
            l = e(k),
            m = a(6),
            n = e(m),
            o = a(5),
            p = e(o),
            q = a(4),
            r = e(q),
            s = a(23),
            t = a(25),
            u = a(28),
            v = a(26),
            w = a(24),
            x = d(w);
        n.default.mepIndex = 0, n.default.players = {};
        var y = c.config = {
            poster: "",
            showPosterWhenEnded: !1,
            showPosterWhenPaused: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 40,
            defaultSeekBackwardInterval: function(a) {
                return .05 * a.duration
            },
            defaultSeekForwardInterval: function(a) {
                return .05 * a.duration
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            startVolume: .8,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            timeFormat: "",
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            hideVideoControlsOnPause: !1,
            clickToPlayPause: !0,
            controlsTimeoutDefault: 1500,
            controlsTimeoutMouseEnter: 2500,
            controlsTimeoutMouseLeave: 1e3,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            isVideo: !0,
            stretching: "auto",
            classPrefix: "mejs__",
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            secondsDecimalLength: 0,
            keyActions: [{
                keys: [32, 179],
                action: function(a, b) {
                    s.IS_FIREFOX || (b.paused || b.ended ? b.play() : b.pause())
                }
            }, {
                keys: [38],
                action: function(a, b) {
                    (a.container.querySelector("." + y.classPrefix + "volume-button>button").matches(":focus") || a.container.querySelector("." + y.classPrefix + "volume-slider").matches(":focus")) && (a.container.querySelector("." + y.classPrefix + "volume-slider").style.display = ""), a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.min(b.volume + .1, 1);
                    b.setVolume(c), c > 0 && b.setMuted(!1)
                }
            }, {
                keys: [40],
                action: function(a, b) {
                    (a.container.querySelector("." + y.classPrefix + "volume-button>button").matches(":focus") || a.container.querySelector("." + y.classPrefix + "volume-slider").matches(":focus")) && (a.container.querySelector("." + y.classPrefix + "volume-slider").style.display = ""), a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.max(b.volume - .1, 0);
                    b.setVolume(c), .1 >= c && b.setMuted(!0)
                }
            }, {
                keys: [37, 227],
                action: function(a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [39, 228],
                action: function(a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [70],
                action: function(a, b, c, d) {
                    d.ctrlKey || void 0 !== a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
                }
            }, {
                keys: [77],
                action: function(a) {
                    a.container.querySelector("." + y.classPrefix + "volume-slider").style.display = "", a.isVideo && (a.showControls(), a.startControlsTimer()), a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
                }
            }]
        };
        n.default.MepDefaults = y;
        var z = function() {
            function a(b, c) {
                f(this, a);
                var d = this,
                    e = "string" == typeof b ? l.default.getElementById(b) : b;
                if (d.hasFocus = !1, d.controlsAreVisible = !0, d.controlsEnabled = !0, d.controlsTimer = null, !(d instanceof a)) return new a(e, c);
                if (d.node = d.media = e, d.node) {
                    if (void 0 !== d.media.player) return d.media.player;
                    void 0 === c && (c = d.node.getAttribute("data-mejsoptions")), d.options = Object.assign({}, y, c), d.options.timeFormat || (d.options.timeFormat = "mm:ss", d.options.alwaysShowHours && (d.options.timeFormat = "hh:mm:ss"), d.options.showTimecodeFrameCount && (d.options.timeFormat += ":ff")), u.calculateTimeFormat(0, d.options, d.options.framesPerSecond || 25), d.id = "mep_" + n.default.mepIndex++, n.default.players[d.id] = d;
                    var g = Object.assign({}, d.options, {
                            success: function(a, b) {
                                d._meReady(a, b)
                            },
                            error: function(a) {
                                d._handleError(a)
                            }
                        }),
                        h = d.node.tagName.toLowerCase();
                    if (d.isDynamic = "audio" !== h && "video" !== h, d.isVideo = d.isDynamic ? d.options.isVideo : "audio" !== h && d.options.isVideo, s.IS_IPAD && d.options.iPadUseNativeControls || s.IS_IPHONE && d.options.iPhoneUseNativeControls) d.node.setAttribute("controls", !0), s.IS_IPAD && d.node.getAttribute("autoplay") && d.play();
                    else if (!(d.isVideo || !d.isVideo && d.options.features.length) || s.IS_ANDROID && d.options.AndroidUseNativeControls) d.isVideo || d.options.features.length || (d.node.style.display = "none");
                    else {
                        d.node.removeAttribute("controls");
                        var i = d.isVideo ? r.default.t("mejs.video-player") : r.default.t("mejs.audio-player"),
                            j = l.default.createElement("span");
                        if (j.className = d.options.classPrefix + "offscreen", j.innerText = i, d.media.parentNode.insertBefore(j, d.media), d.container = l.default.createElement("div"), d.container.id = d.id, d.container.className = d.options.classPrefix + "container " + d.options.classPrefix + "container-keyboard-inactive " + d.media.className, d.container.tabIndex = 0, d.container.setAttribute("role", "application"), d.container.setAttribute("aria-label", i), d.container.innerHTML = '<div class="' + d.options.classPrefix + 'inner"><div class="' + d.options.classPrefix + 'layers"></div><div class="' + d.options.classPrefix + 'controls"></div><div class="' + d.options.classPrefix + 'mediaelement"></div><div class="' + d.options.classPrefix + 'clear"></div></div>', d.container.addEventListener("focus", function(a) {
                                if (!d.controlsAreVisible && !d.hasFocus && d.controlsEnabled && (d.showControls(!0), !s.HAS_MS_NATIVE_FULLSCREEN)) {
                                    var b = t.isNodeAfter(a.relatedTarget, d.container) ? "." + d.options.classPrefix + "controls ." + d.options.classPrefix + "button:last-child > button" : "." + d.options.classPrefix + "playpause-button > button";
                                    d.container.querySelector(b).focus()
                                }
                            }), d.node.parentNode.insertBefore(d.container, d.node), d.options.features.length || (d.container.style.background = "transparent", d.container.querySelector("." + d.options.classPrefix + "controls").style.display = "none"), d.isVideo && "fill" === d.options.stretching && !x.hasClass(d.container.parentNode, d.options.classPrefix + "fill-container")) {
                            d.outerContainer = d.media.parentNode;
                            var k = l.default.createElement("div");
                            k.className = d.options.classPrefix + "fill-container", d.container.parentNode.insertBefore(k, d.container), k.appendChild(d.container)
                        }
                        s.IS_ANDROID && x.addClass(d.container, d.options.classPrefix + "android"), s.IS_IOS && x.addClass(d.container, d.options.classPrefix + "ios"), s.IS_IPAD && x.addClass(d.container, d.options.classPrefix + "ipad"), s.IS_IPHONE && x.addClass(d.container, d.options.classPrefix + "iphone"), x.addClass(d.container, d.isVideo ? d.options.classPrefix + "video" : d.options.classPrefix + "audio"), d.container.querySelector("." + d.options.classPrefix + "mediaelement").appendChild(d.node), d.media.player = d, d.controls = d.container.querySelector("." + d.options.classPrefix + "controls"), d.layers = d.container.querySelector("." + d.options.classPrefix + "layers");
                        var m = d.isVideo ? "video" : "audio",
                            o = m.substring(0, 1).toUpperCase() + m.substring(1);
                        d.options[m + "Width"] > 0 || d.options[m + "Width"].toString().indexOf("%") > -1 ? d.width = d.options[m + "Width"] : "" !== d.node.style.width && null !== d.node.style.width ? d.width = d.node.style.width : d.node.getAttribute("width") ? d.width = d.node.getAttribute("width") : d.width = d.options["default" + o + "Width"], d.options[m + "Height"] > 0 || d.options[m + "Height"].toString().indexOf("%") > -1 ? d.height = d.options[m + "Height"] : "" !== d.node.style.height && null !== d.node.style.height ? d.height = d.node.style.height : d.node.getAttribute("height") ? d.height = d.node.getAttribute("height") : d.height = d.options["default" + o + "Height"], d.initialAspectRatio = d.height >= d.width ? d.width / d.height : d.height / d.width, d.setPlayerSize(d.width, d.height), g.pluginWidth = d.width, g.pluginHeight = d.height
                    }
                    if (new p.default(d.media, g), void 0 !== d.container && d.options.features.length && d.controlsAreVisible && !d.options.hideVideoControlsOnLoad) {
                        var q = t.createEvent("controlsshown", d.container);
                        d.container.dispatchEvent(q)
                    }
                    return d
                }
            }
            return h(a, [{
                key: "showControls",
                value: function(a) {
                    var b = this;
                    if (a = void 0 === a || a, !b.controlsAreVisible) {
                        if (a) ! function() {
                            x.removeClass(b.controls, b.options.classPrefix + "offscreen"), x.fadeIn(b.controls, 200, function() {
                                var a = t.createEvent("controlsshown", b.container);
                                b.container.dispatchEvent(a)
                            });
                            for (var a = b.container.querySelectorAll("." + b.options.classPrefix + "control"), c = function(c, d) {
                                    x.fadeIn(a[c], 200, function() {
                                        x.removeClass(a[c], b.options.classPrefix + "offscreen")
                                    })
                                }, d = 0, e = a.length; e > d; d++) c(d, e)
                        }();
                        else {
                            x.removeClass(b.controls, b.options.classPrefix + "offscreen"), b.controls.style.display = "";
                            for (var c = b.container.querySelectorAll("." + b.options.classPrefix + "control"), d = 0, e = c.length; e > d; d++) x.removeClass(c[d], b.options.classPrefix + "offscreen"), c[d].style.display = "";
                            var f = t.createEvent("controlsshown", b.container);
                            b.container.dispatchEvent(f)
                        }
                        b.controlsAreVisible = !0, b.setControlsSize()
                    }
                }
            }, {
                key: "hideControls",
                value: function(a, b) {
                    var c = this;
                    if (a = void 0 === a || a, !0 === b || !(!c.controlsAreVisible || c.options.alwaysShowControls || c.keyboardAction || c.media.paused && 4 === c.media.readyState && (!c.options.hideVideoControlsOnLoad && c.media.currentTime <= 0 || !c.options.hideVideoControlsOnPause && c.media.currentTime > 0) || c.isVideo && !c.options.hideVideoControlsOnLoad && !c.media.readyState || c.media.ended)) {
                        if (a) ! function() {
                            x.fadeOut(c.controls, 200, function() {
                                x.addClass(c.controls, c.options.classPrefix + "offscreen"), c.controls.style.display = "";
                                var a = t.createEvent("controlshidden", c.container);
                                c.container.dispatchEvent(a)
                            });
                            for (var a = c.container.querySelectorAll("." + c.options.classPrefix + "control"), b = function(b, d) {
                                    x.fadeOut(a[b], 200, function() {
                                        x.addClass(a[b], c.options.classPrefix + "offscreen"), a[b].style.display = ""
                                    })
                                }, d = 0, e = a.length; e > d; d++) b(d, e)
                        }();
                        else {
                            x.addClass(c.controls, c.options.classPrefix + "offscreen"), c.controls.style.display = "";
                            for (var d = c.container.querySelectorAll("." + c.options.classPrefix + "control"), e = 0, f = d.length; f > e; e++) x.addClass(d[e], c.options.classPrefix + "offscreen"), d[e].style.display = "";
                            var g = t.createEvent("controlshidden", c.container);
                            c.container.dispatchEvent(g)
                        }
                        c.controlsAreVisible = !1
                    }
                }
            }, {
                key: "startControlsTimer",
                value: function(a) {
                    var b = this;
                    a = void 0 !== a ? a : b.options.controlsTimeoutDefault, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function() {
                        b.hideControls(), b.killControlsTimer("hide")
                    }, a)
                }
            }, {
                key: "killControlsTimer",
                value: function() {
                    var a = this;
                    null !== a.controlsTimer && (clearTimeout(a.controlsTimer), delete a.controlsTimer, a.controlsTimer = null)
                }
            }, {
                key: "disableControls",
                value: function() {
                    var a = this;
                    a.killControlsTimer(), a.controlsEnabled = !0, a.hideControls(!1, !0)
                }
            }, {
                key: "enableControls",
                value: function() {
                    var a = this;
                    a.controlsEnabled = !0, a.showControls(!1)
                }
            }, {
                key: "_meReady",
                value: function(a, b) {
                    var c = this,
                        d = b.getAttribute("autoplay"),
                        e = !(void 0 === d || null === d || "false" === d),
                        f = null !== a.rendererName && null !== a.rendererName.match(/(native|html5)/);
                    if (c.controls && c.enableControls(), c.container.querySelector("." + c.options.classPrefix + "overlay-play") && (c.container.querySelector("." + c.options.classPrefix + "overlay-play").style.display = ""), !c.created) {
                        if (c.created = !0, c.media = a, c.domNode = b, !(s.IS_ANDROID && c.options.AndroidUseNativeControls || s.IS_IPAD && c.options.iPadUseNativeControls || s.IS_IPHONE && c.options.iPhoneUseNativeControls)) {
                            var h = function() {
                                if (!c.isVideo && !c.options.features.length) return e && f && c.play(), c.options.success && ("string" == typeof c.options.success ? j.default[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)), {
                                    v: void 0
                                };
                                c.buildposter(c, c.controls, c.layers, c.media), c.buildkeyboard(c, c.controls, c.layers, c.media), c.buildoverlays(c, c.controls, c.layers, c.media), c.findTracks(), c.featurePosition = {};
                                for (var a = 0, b = c.options.features.length; b > a; a++) {
                                    var d = c.options.features[a];
                                    if (c["build" + d]) try {
                                        c["build" + d](c, c.controls, c.layers, c.media)
                                    } catch (a) {
                                        console.error("error building " + d, a)
                                    }
                                }
                                var g = t.createEvent("controlsready", c.container);
                                c.container.dispatchEvent(g), c.setPlayerSize(c.width, c.height), c.setControlsSize(), c.isVideo && (c.clickToPlayPauseCallback = function() {
                                    if (c.options.clickToPlayPause) {
                                        var a = c.container.querySelector("." + c.options.classPrefix + "overlay-button"),
                                            b = a.getAttribute("aria-pressed");
                                        c.media.paused && b ? c.pause() : c.media.paused ? c.play() : c.pause(), a.setAttribute("aria-pressed", !b)
                                    }
                                }, c.createIframeLayer(), c.media.addEventListener("click", c.clickToPlayPauseCallback), !s.IS_ANDROID && !s.IS_IOS || c.options.alwaysShowControls ? (c.container.addEventListener("mouseenter", function() {
                                    c.controlsEnabled && (c.options.alwaysShowControls || (c.killControlsTimer("enter"), c.showControls(), c.startControlsTimer(c.options.controlsTimeoutMouseEnter)))
                                }), c.container.addEventListener("mousemove", function() {
                                    c.controlsEnabled && (c.controlsAreVisible || c.showControls(), c.options.alwaysShowControls || c.startControlsTimer(c.options.controlsTimeoutMouseEnter))
                                }), c.container.addEventListener("mouseleave", function() {
                                    c.controlsEnabled && (c.media.paused || c.options.alwaysShowControls || c.startControlsTimer(c.options.controlsTimeoutMouseLeave))
                                })) : c.node.addEventListener("touchstart", function() {
                                    c.controlsAreVisible ? c.hideControls(!1) : c.controlsEnabled && c.showControls(!1)
                                }), c.options.hideVideoControlsOnLoad && c.hideControls(!1), e && !c.options.alwaysShowControls && c.hideControls(), c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function(a) {
                                    c.options.videoHeight <= 0 && !c.domNode.getAttribute("height") && null !== a.target && !isNaN(a.target.videoHeight) && (c.setPlayerSize(a.target.videoWidth, a.target.videoHeight), c.setControlsSize(), c.media.setSize(a.target.videoWidth, a.target.videoHeight))
                                })), c.media.addEventListener("play", function() {
                                    c.hasFocus = !0;
                                    for (var a in n.default.players)
                                        if (n.default.players.hasOwnProperty(a)) {
                                            var b = n.default.players[a];
                                            b.id === c.id || !c.options.pauseOtherPlayers || b.paused || b.ended || (b.pause(), b.hasFocus = !1)
                                        }
                                }), c.media.addEventListener("ended", function() {
                                    if (c.options.autoRewind) try {
                                        c.media.setCurrentTime(0), setTimeout(function() {
                                            c.container.querySelector("." + c.options.classPrefix + "overlay-loading").parentNode.style.display = "none"
                                        }, 20)
                                    } catch (a) {}
                                    "function" == typeof c.media.stop ? c.media.stop() : c.media.pause(), c.setProgressRail && c.setProgressRail(), c.setCurrentRail && c.setCurrentRail(), c.options.loop ? c.play() : !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                                }), c.media.addEventListener("loadedmetadata", function() {
                                    u.calculateTimeFormat(c.duration, c.options, c.options.framesPerSecond || 25), c.updateDuration && c.updateDuration(), c.updateCurrent && c.updateCurrent(), c.isFullScreen || (c.setPlayerSize(c.width, c.height), c.setControlsSize())
                                });
                                var h = null;
                                c.media.addEventListener("timeupdate", function() {
                                    h !== c.media.duration && (h = c.media.duration, u.calculateTimeFormat(h, c.options, c.options.framesPerSecond || 25), c.updateDuration && c.updateDuration(), c.updateCurrent && c.updateCurrent(), c.setControlsSize())
                                }), c.container.addEventListener("focusout", function(a) {
                                    setTimeout(function() {
                                        a.relatedTarget && c.keyboardAction && !a.relatedTarget.closest(".mejs-container") && (c.keyboardAction = !1, c.isVideo && !c.options.alwaysShowControls && c.hideControls(!0))
                                    }, 0)
                                }), setTimeout(function() {
                                    c.setPlayerSize(c.width, c.height), c.setControlsSize()
                                }, 0), c.globalBind("resize", function() {
                                    c.isFullScreen || s.HAS_TRUE_NATIVE_FULLSCREEN && l.default.webkitIsFullScreen || c.setPlayerSize(c.width, c.height), c.setControlsSize()
                                }), c.globalBind("click", function(a) {
                                    a.target.matches("." + c.options.classPrefix + "container") ? x.addClass(a.target, c.options.classPrefix + "container-keyboard-inactive") : a.target.closest("." + c.options.classPrefix + "container") && x.addClass(a.target.closest("." + c.options.classPrefix + "container"), c.options.classPrefix + "container-keyboard-inactive")
                                }), c.globalBind("keydown", function(a) {
                                    a.target.matches("." + c.options.classPrefix + "container") ? x.removeClass(a.target, c.options.classPrefix + "container-keyboard-inactive") : a.target.closest("." + c.options.classPrefix + "container") && x.removeClass(g.target.closest("." + c.options.classPrefix + "container"), c.options.classPrefix + "container-keyboard-inactive")
                                })
                            }();
                            if ("object" === (void 0 === h ? "undefined" : g(h))) return h.v
                        }
                        e && f && c.play(), c.options.success && ("string" == typeof c.options.success ? j.default[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c))
                    }
                }
            }, {
                key: "_handleError",
                value: function(a) {
                    var b = this;
                    b.controls && b.disableControls();
                    var c = b.layers.querySelector("." + b.options.classPrefix + "overlay-play");
                    c && (c.style.display = "none"), b.options.error && b.options.error(a)
                }
            }, {
                key: "setPlayerSize",
                value: function(a, b) {
                    var c = this;
                    if (!c.options.setDimensions) return !1;
                    if (void 0 !== a && (c.width = a), void 0 !== b && (c.height = b), "undefined" != typeof FB && c.isVideo) {
                        FB.Event.subscribe("xfbml.ready", function() {
                            var a = c.media.firstChild;
                            return c.width = parseFloat(a.offsetWidth), c.height = parseFloat(a.offsetHeight), c.setDimensions(c.width, c.height), !1
                        });
                        var d = c.media.firstChild;
                        d.length && (c.width = d.offsetWidth, c.height = d.offsetHeight)
                    }
                    switch (c.options.stretching) {
                        case "fill":
                            c.isVideo ? c.setFillMode() : c.setDimensions(c.width, c.height);
                            break;
                        case "responsive":
                            c.setResponsiveMode();
                            break;
                        case "none":
                            c.setDimensions(c.width, c.height);
                            break;
                        default:
                            !0 === c.hasFluidMode() ? c.setResponsiveMode() : c.setDimensions(c.width, c.height)
                    }
                }
            }, {
                key: "hasFluidMode",
                value: function() {
                    var a = this;
                    return a.height.toString().includes("%") || a.node.style.maxWidth && "none" !== a.node.style.maxWidth && a.node.style.maxWidth !== a.width || a.node.currentStyle && "100%" === a.node.currentStyle.maxWidth
                }
            }, {
                key: "setResponsiveMode",
                value: function() {
                    var a = this,
                        b = function() {
                            for (var b = void 0, c = a.container; c;) {
                                if ((b = c.parentElement) && x.visible(b)) return b;
                                c = b
                            }
                            return null
                        }(),
                        c = getComputedStyle(b, null),
                        d = function() {
                            return a.isVideo ? a.media.videoWidth && a.media.videoWidth > 0 ? a.media.videoWidth : a.node.getAttribute("width") ? a.node.getAttribute("width") : a.options.defaultVideoWidth : a.options.defaultAudioWidth
                        }(),
                        e = function() {
                            return a.isVideo ? a.media.videoHeight && a.media.videoHeight > 0 ? a.media.videoHeight : a.node.getAttribute("height") ? a.node.getAttribute("height") : a.options.defaultVideoHeight : a.options.defaultAudioHeight
                        }(),
                        f = function() {
                            var b = 1;
                            return a.isVideo ? (b = a.media.videoWidth && a.media.videoWidth > 0 && a.media.videoHeight && a.media.videoHeight > 0 ? a.height >= a.width ? a.media.videoWidth / a.media.videoHeight : a.media.videoHeight / a.media.videoWidth : a.initialAspectRatio, (isNaN(b) || .01 > b || b > 100) && (b = 1), b) : b
                        }(),
                        g = parseFloat(c.height),
                        h = void 0,
                        i = parseFloat(c.width);
                    if (h = a.isVideo ? "100%" === a.height ? parseInt(i * e / d, 10) : a.height >= a.width ? parseInt(i / f, 10) : parseInt(i * f, 10) : e, isNaN(h) && (h = g), a.container.parentNode.length > 0 && "body" === a.container.parentNode.tagName.toLowerCase() && (i = j.default.innerWidth || l.default.documentElement.clientWidth || l.default.body.clientWidth, h = j.default.innerHeight || l.default.documentElement.clientHeight || l.default.body.clientHeight), h && i) {
                        a.container.style.width = i + "px", a.container.style.height = h + "px", a.node.style.width = "100%", a.node.style.height = "100%", a.isVideo && a.media.setSize && a.media.setSize(i, h);
                        for (var k = a.layers.childNodes, m = 0, n = k.length; n > m; m++) k[m].style.width = "100%", k[m].style.height = "100%"
                    }
                }
            }, {
                key: "setFillMode",
                value: function() {
                    var a = this,
                        b = a.outerContainer,
                        c = getComputedStyle(b);
                    "none" !== a.node.style.height && a.node.style.height !== a.height && (a.node.style.height = "auto"), "none" !== a.node.style.maxWidth && a.node.style.maxWidth !== a.width && (a.node.style.maxWidth = "none"), "none" !== a.node.style.maxHeight && a.node.style.maxHeight !== a.height && (a.node.style.maxHeight = "none"), a.node.currentStyle && ("100%" === a.node.currentStyle.height && (a.node.currentStyle.height = "auto"), "100%" === a.node.currentStyle.maxWidth && (a.node.currentStyle.maxWidth = "none"), "100%" === a.node.currentStyle.maxHeight && (a.node.currentStyle.maxHeight = "none")), parseFloat(c.width) || (b.style.width = a.media.offsetWidth + "px"), parseFloat(c.height) || (b.style.height = a.media.offsetHeight + "px"), c = getComputedStyle(b);
                    var d = parseFloat(c.width),
                        e = parseFloat(c.height);
                    a.setDimensions("100%", "100%");
                    var f = a.container.querySelector(a.options.classPrefix + "poster img");
                    f && (f.style.display = "");
                    for (var g = a.container.querySelectorAll("object, embed, iframe, video"), h = a.height, i = a.width, j = d, k = h * d / i, l = i * e / h, m = e, n = l > d == 0, o = n ? Math.floor(j) : Math.floor(l), p = n ? Math.floor(k) : Math.floor(m), q = n ? d + "px" : o + "px", r = n ? p + "px" : e + "px", s = 0, t = g.length; t > s; s++) g[s].style.height = r, g[s].style.width = q, a.media.setSize && a.media.setSize(q, r), g[s].style.marginLeft = Math.floor((d - o) / 2) + "px", g[s].style.marginTop = 0
                }
            }, {
                key: "setDimensions",
                value: function(a, b) {
                    var c = this;
                    a = t.isString(a) && a.includes("%") ? a : parseFloat(a) + "px", b = t.isString(b) && b.includes("%") ? b : parseFloat(b) + "px", c.container.style.width = a, c.container.style.height = b;
                    for (var d = c.layers.childNodes, e = 0, f = d.length; f > e; e++) d[e].style.width = a, d[e].style.height = b
                }
            }, {
                key: "setControlsSize",
                value: function() {
                    var a = this;
                    if (x.visible(a.container) && a.rail && x.visible(a.rail)) {
                        for (var b = getComputedStyle(a.rail), c = getComputedStyle(a.total), d = parseFloat(b.marginLeft) + parseFloat(b.marginRight), e = parseFloat(c.marginLeft) + parseFloat(c.marginRight) || 0, f = 0, g = x.siblings(a.rail, function(b) {
                                return b !== a.rail
                            }), h = g.length, i = 0; h > i; i++) f += g[i].offsetWidth;
                        f += e + (0 === e ? 2 * d : d) + 1;
                        var j = parseFloat(a.controls.offsetWidth);
                        a.rail.style.width = (f > j ? 0 : j - f) + "px";
                        var k = t.createEvent("controlsresize", a.container);
                        a.container.dispatchEvent(k)
                    }
                }
            }, {
                key: "addControlElement",
                value: function(a, b) {
                    var c = this;
                    if (void 0 !== c.featurePosition[b]) {
                        var d = c.controls.childNodes[c.featurePosition[b] - 1];
                        d.parentNode.insertBefore(a, d.nextSibling)
                    } else {
                        c.controls.appendChild(a);
                        for (var e = c.controls.childNodes, f = 0, g = e.length; g > f; f++)
                            if (a == e[f]) {
                                c.featurePosition[b] = f;
                                break
                            }
                    }
                }
            }, {
                key: "createIframeLayer",
                value: function() {
                    var a = this;
                    if (a.isVideo && null !== a.media.rendererName && null !== a.media.rendererName.match(/iframe/i) && !l.default.getElementById(a.media.id + "-iframe-overlay")) {
                        var b = l.default.createElement("div"),
                            c = l.default.getElementById(a.media.id + "_" + a.media.rendererName);
                        b.id = a.media.id + "-iframe-overlay", b.className = a.options.classPrefix + "iframe-overlay", b.addEventListener("click", function(b) {
                            a.options.clickToPlayPause && (a.media.paused ? a.media.play() : a.media.pause(), b.preventDefault(), b.stopPropagation())
                        }), c.parentNode.insertBefore(b, c)
                    }
                }
            }, {
                key: "resetSize",
                value: function() {
                    var a = this;
                    setTimeout(function() {
                        a.setPlayerSize(a.width, a.height), a.setControlsSize()
                    }, 50)
                }
            }, {
                key: "setPoster",
                value: function(a) {
                    var b = this,
                        c = b.container.querySelector("." + b.options.classPrefix + "poster"),
                        d = c.querySelector("img");
                    d || (d = l.default.createElement("img"), d.className = b.options.classPrefix + "poster-img", d.width = "100%", d.height = "100%", c.appendChild(d)), d.setAttribute("src", a), c.style.backgroundImage = 'url("' + a + '")'
                }
            }, {
                key: "changeSkin",
                value: function(a) {
                    var b = this;
                    b.container.className = b.options.classPrefix + "container " + a, b.setPlayerSize(b.width, b.height), b.setControlsSize()
                }
            }, {
                key: "globalBind",
                value: function(a, b) {
                    var c = this,
                        d = c.node ? c.node.ownerDocument : l.default;
                    if (a = t.splitEvents(a, c.id), a.d)
                        for (var e = a.d.split(" "), f = 0, g = e.length; g > f; f++) e[f].split(".").reduce(function(a, c) {
                            return d.addEventListener(c, b, !1), c
                        }, "");
                    if (a.w)
                        for (var h = a.w.split(" "), i = 0, k = h.length; k > i; i++) h[i].split(".").reduce(function(a, c) {
                            return j.default.addEventListener(c, b, !1), c
                        }, "")
                }
            }, {
                key: "globalUnbind",
                value: function(a, b) {
                    var c = this,
                        d = c.node ? c.node.ownerDocument : l.default;
                    if (a = t.splitEvents(a, c.id), a.d)
                        for (var e = a.d.split(" "), f = 0, g = e.length; g > f; f++) e[f].split(".").reduce(function(a, c) {
                            return d.removeEventListener(c, b, !1), c
                        }, "");
                    if (a.w)
                        for (var h = a.d.split(" "), i = 0, k = h.length; k > i; i++) h[i].split(".").reduce(function(a, c) {
                            return j.default.removeEventListener(c, b, !1), c
                        }, "")
                }
            }, {
                key: "buildposter",
                value: function(a, b, c, d) {
                    var e = this,
                        f = l.default.createElement("div");
                    f.className = e.options.classPrefix + "poster " + e.options.classPrefix + "layer", c.appendChild(f);
                    var g = a.media.getAttribute("poster");
                    "" !== a.options.poster && (g = a.options.poster), g ? e.setPoster(g) : f.style.display = "none", d.addEventListener("play", function() {
                        f.style.display = "none"
                    }), d.addEventListener("playing", function() {
                        f.style.display = "none"
                    }), a.options.showPosterWhenEnded && a.options.autoRewind && d.addEventListener("ended", function() {
                        f.style.display = ""
                    }), d.addEventListener("error", function() {
                        f.style.display = "none"
                    }), a.options.showPosterWhenPaused && d.addEventListener("pause", function() {
                        d.ended || (f.style.display = "")
                    })
                }
            }, {
                key: "buildoverlays",
                value: function(a, b, c, d) {
                    if (a.isVideo) {
                        var e = this,
                            f = l.default.createElement("div"),
                            g = l.default.createElement("div"),
                            h = l.default.createElement("div"),
                            i = b.querySelector("." + e.options.classPrefix + "time-buffering");
                        f.style.display = "none", f.className = e.options.classPrefix + "overlay " + e.options.classPrefix + "layer", f.innerHTML = '<div class="' + e.options.classPrefix + 'overlay-loading"><span class="' + e.options.classPrefix + 'overlay-loading-bg-img"></span></div>', c.appendChild(f), g.style.display = "none", g.className = e.options.classPrefix + "overlay " + e.options.classPrefix + "layer", g.innerHTML = '<div class="' + e.options.classPrefix + 'overlay-error"></div>', c.appendChild(g), h.className = e.options.classPrefix + "overlay " + e.options.classPrefix + "layer " + e.options.classPrefix + "overlay-play", h.innerHTML = '<div class="' + e.options.classPrefix + 'overlay-button" role="button" tabindex="0"aria-label="' + r.default.t("mejs.play") + '" aria-pressed="false"></div>', h.addEventListener("click", function() {
                            if (e.options.clickToPlayPause) {
                                var a = e.container.querySelector("." + e.options.classPrefix + "overlay-button"),
                                    b = a.getAttribute("aria-pressed");
                                d.paused ? d.play() : d.pause(), a.setAttribute("aria-pressed", !!b)
                            }
                        }), c.appendChild(h), null !== e.media.rendererName && (e.media.rendererName.match(/(youtube|facebook)/) && !a.media.originalNode.getAttribute("poster") && !a.options.poster || s.IS_STOCK_ANDROID) && (h.style.display = "none"), d.addEventListener("play", function() {
                            h.style.display = "none", f.style.display = "none", i && (i.style.display = "none"), g.style.display = "none"
                        }), d.addEventListener("playing", function() {
                            h.style.display = "none", f.style.display = "none", i && (i.style.display = "none"), g.style.display = "none"
                        }), d.addEventListener("seeking", function() {
                            h.style.display = "none", f.style.display = "", i && (i.style.display = "")
                        }), d.addEventListener("seeked", function() {
                            h.style.display = "", f.style.display = "none", i && (i.style.display = "")
                        }), d.addEventListener("pause", function() {
                            f.style.display = "none", s.IS_STOCK_ANDROID || (h.style.display = ""), i && (i.style.display = "none")
                        }), d.addEventListener("waiting", function() {
                            f.style.display = "", i && (i.style.display = "")
                        }), d.addEventListener("loadeddata", function() {
                            f.style.display = "", i && (i.style.display = ""), s.IS_ANDROID && (d.canplayTimeout = setTimeout(function() {
                                if (l.default.createEvent) {
                                    var a = l.default.createEvent("HTMLEvents");
                                    return a.initEvent("canplay", !0, !0), d.dispatchEvent(a)
                                }
                            }, 300))
                        }), d.addEventListener("canplay", function() {
                            f.style.display = "none", i && (i.style.display = "none"), clearTimeout(d.canplayTimeout)
                        }), d.addEventListener("error", function(a) {
                            e._handleError(a), f.style.display = "none", h.style.display = "none", i && (i.style.display = "none"), a.message && (g.style.display = "block", g.querySelector("." + e.options.classPrefix + "overlay-error").innerHTML = a.message)
                        }), d.addEventListener("keydown", function(b) {
                            e.onkeydown(a, d, b)
                        })
                    }
                }
            }, {
                key: "buildkeyboard",
                value: function(a, b, c, d) {
                    var e = this;
                    e.container.addEventListener("keydown", function() {
                        e.keyboardAction = !0
                    }), e.globalBind("keydown", function(b) {
                        var c = l.default.activeElement.closest("." + e.options.classPrefix + "container"),
                            f = e.media.closest("." + e.options.classPrefix + "container");
                        return e.hasFocus = !(!c || !f || c.id !== f.id), e.onkeydown(a, d, b)
                    }), e.globalBind("click", function(a) {
                        e.hasFocus = !!a.target.closest("." + e.options.classPrefix + "container")
                    })
                }
            }, {
                key: "onkeydown",
                value: function(a, b, c) {
                    if (a.hasFocus && a.options.enableKeyboard)
                        for (var d = 0, e = a.options.keyActions.length; e > d; d++)
                            for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++) c.keyCode === f.keys[g] && (f.action(a, b, c.keyCode, c), c.preventDefault(), c.stopPropagation());
                    return !0
                }
            }, {
                key: "play",
                value: function() {
                    var a = this;
                    a.media.getCurrentTime() <= 0 && a.load(), a.media.play()
                }
            }, {
                key: "pause",
                value: function() {
                    try {
                        this.media.pause()
                    } catch (a) {}
                }
            }, {
                key: "load",
                value: function() {
                    var a = this;
                    a.isLoaded || a.media.load(), a.isLoaded = !0
                }
            }, {
                key: "setMuted",
                value: function(a) {
                    this.media.setMuted(a)
                }
            }, {
                key: "setCurrentTime",
                value: function(a) {
                    this.media.setCurrentTime(a)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.media.currentTime
                }
            }, {
                key: "setVolume",
                value: function(a) {
                    this.media.setVolume(a)
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.media.volume
                }
            }, {
                key: "setSrc",
                value: function(a) {
                    var b = this,
                        c = l.default.getElementById(b.media.id + "-iframe-overlay");
                    c && c.remove(), b.media.setSrc(a), b.createIframeLayer()
                }
            }, {
                key: "remove",
                value: function() {
                    var a = this,
                        b = a.media.rendererName;
                    a.media.paused || a.media.pause();
                    var c = a.media.originalNode.getAttribute("src");
                    a.media.setSrc("");
                    for (var d in a.options.features) {
                        var e = a.options.features[d];
                        if (a["clean" + e]) try {
                            a["clean" + e](a)
                        } catch (a) {
                            console.error("error cleaning " + e, a)
                        }
                    }
                    var f = a.node.getAttribute("width"),
                        h = a.node.getAttribute("height");
                    if (f ? null === f.match("%") && (f += "px") : f = "auto", h ? null === h.match("%") && (h += "px") : h = "auto", a.node.style.width = f, a.node.style.height = h, a.isDynamic) a.container.parentNode.insertBefore(a.node, a.container);
                    else {
                        if (a.node.setAttribute("controls", !0), a.node.setAttribute("id", a.node.getAttribute("id").replace("_" + b, "").replace("_from_mejs", "")), delete a.node.autoplay, a.media.canPlayType(v.getTypeFromFile(c)) && a.node.setAttribute("src", c), null !== b.match(/iframe/i)) {
                            l.default.getElementById(a.media.id + "-iframe-overlay").remove()
                        }
                        var j = a.node.cloneNode(!0);
                        a.container.parentNode.insertBefore(j, a.container), a.node.remove(), delete a.node
                    }
                    if ("function" == typeof a.media.destroy && a.media.destroy(), delete n.default.players[a.id], "object" === g(a.container)) {
                        a.container.parentNode.querySelector("." + a.options.classPrefix + "offscreen").remove(), a.container.remove()
                    }
                    a.globalUnbind(), delete a.media.player
                }
            }]), a
        }();
        j.default.MediaElementPlayer = z, c.default = z,
            function(a) {
                void 0 !== a && (a.fn.mediaelementplayer = function(b) {
                    return !1 === b ? this.each(function() {
                        var b = a(this).data("mediaelementplayer");
                        b && b.remove(), a(this).removeData("mediaelementplayer")
                    }) : this.each(function() {
                        a(this).data("mediaelementplayer", new z(this, b))
                    }), this
                }, a(l.default).ready(function() {
                    a("." + y.classPrefix + "player").mediaelementplayer()
                }))
            }(n.default.$)
    }, {
        2: 2,
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        28: 28,
        3: 3,
        4: 4,
        5: 5,
        6: 6
    }],
    17: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(3),
            f = d(e),
            g = a(2),
            h = d(g),
            i = a(6),
            j = d(i),
            k = a(7),
            l = a(25),
            m = a(26),
            n = a(23),
            o = {
                isMediaLoaded: !1,
                creationQueue: [],
                prepareSettings: function(a) {
                    o.isLoaded ? o.createInstance(a) : (o.loadScript(a), o.creationQueue.push(a))
                },
                loadScript: function(a) {
                    "undefined" != typeof dashjs ? o.createInstance(a) : o.isScriptLoaded || function() {
                        a.options.path = "string" == typeof a.options.path ? a.options.path : "//cdn.dashjs.org/latest/dash.mediaplayer.min.js";
                        var b = h.default.createElement("script"),
                            c = h.default.getElementsByTagName("script")[0],
                            d = !1;
                        b.src = a.options.path, b.onload = b.onreadystatechange = function() {
                            d || this.readyState && void 0 !== this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, o.mediaReady(), b.onload = b.onreadystatechange = null)
                        }, c.parentNode.insertBefore(b, c), o.isScriptLoaded = !0
                    }()
                },
                mediaReady: function() {
                    for (o.isLoaded = !0, o.isScriptLoaded = !0; o.creationQueue.length > 0;) {
                        var a = o.creationQueue.pop();
                        o.createInstance(a)
                    }
                },
                createInstance: function(a) {
                    var b = dashjs.MediaPlayer().create();
                    f.default["__ready__" + a.id](b)
                }
            },
            p = {
                name: "native_dash",
                options: {
                    prefix: "native_dash",
                    dash: {
                        path: "//cdn.dashjs.org/latest/dash.mediaplayer.min.js",
                        debug: !1
                    }
                },
                canPlayType: function(a) {
                    return n.HAS_MSE && ["application/dash+xml"].includes(a)
                },
                create: function(a, b, c) {
                    var d = a.originalNode,
                        e = a.id + "_" + b.prefix,
                        g = d.getAttribute("preload"),
                        h = d.autoplay,
                        i = null,
                        m = null;
                    i = d.cloneNode(!0), b = Object.assign(b, a.options);
                    for (var n = j.default.html5media.properties, p = function(a) {
                            var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                            i["get" + b] = function() {
                                return null !== m ? i[a] : null
                            }, i["set" + b] = function(b) {
                                j.default.html5media.readOnlyProperties.includes(a) || null !== m && ("src" === a && (m.attachSource(b), h && i.play()), i[a] = b)
                            }
                        }, q = 0, r = n.length; r > q; q++) p(n[q]);
                    if (f.default["__ready__" + e] = function(c) {
                            a.dashPlayer = m = c, m.getDebug().setLogToBrowserConsole(b.dash.debug), m.setAutoPlay(g && "auto" === g || h), m.setScheduleWhilePaused(g && "auto" === g || h);
                            for (var d = j.default.html5media.events.concat(["click", "mouseover", "mouseout"]), e = dashjs.MediaPlayer.events, f = function(b) {
                                    "loadedmetadata" === b && m.initialize(i, i.src, !1), i.addEventListener(b, function(b) {
                                        var c = l.createEvent(b.type, a);
                                        a.dispatchEvent(c)
                                    })
                                }, k = 0, n = d.length; n > k; k++) f(d[k]);
                            var o = function(b) {
                                var c = l.createEvent(b.type, i);
                                c.data = b, a.dispatchEvent(c), "error" === b.type.toLowerCase() && console.error(b)
                            };
                            for (var p in e) e.hasOwnProperty(p) && m.on(e[p], o)
                        }, c && c.length > 0)
                        for (var s = 0, t = c.length; t > s; s++)
                            if (k.renderer.renderers[b.prefix].canPlayType(c[s].type)) {
                                i.setAttribute("src", c[s].src);
                                break
                            }
                    i.setAttribute("id", e), d.parentNode.insertBefore(i, d), d.autoplay = !1, d.style.display = "none", o.prepareSettings({
                        options: b.dash,
                        id: e
                    }), i.setSize = function(a, b) {
                        return i.style.width = a + "px", i.style.height = b + "px", i
                    }, i.hide = function() {
                        return i.pause(), i.style.display = "none", i
                    }, i.show = function() {
                        return i.style.display = "", i
                    };
                    var u = l.createEvent("rendererready", i);
                    return a.dispatchEvent(u), i
                }
            };
        m.typeChecks.push(function(a) {
            return a = a.toLowerCase(), a.includes(".mpd") ? "application/dash+xml" : null
        }), k.renderer.add(p)
    }, {
        2: 2,
        23: 23,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    18: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.PluginDetector = void 0;
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            f = a(3),
            g = d(f),
            h = a(2),
            i = d(h),
            j = a(6),
            k = d(j),
            l = a(4),
            m = d(l),
            n = a(7),
            o = a(25),
            p = a(23),
            q = a(26),
            r = c.PluginDetector = {
                plugins: [],
                hasPluginVersion: function(a, b) {
                    var c = r.plugins[a];
                    return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] === b[0] && c[1] > b[1] || c[0] === b[0] && c[1] === b[1] && c[2] >= b[2]
                },
                addPlugin: function(a, b, c, d, e) {
                    r.plugins[a] = r.detectPlugin(b, c, d, e)
                },
                detectPlugin: function(a, b, c, d) {
                    var f = [0, 0, 0],
                        h = void 0,
                        i = void 0;
                    if (null !== p.NAV.plugins && void 0 !== p.NAV.plugins && "object" === e(p.NAV.plugins[a])) {
                        if ((h = p.NAV.plugins[a].description) && (void 0 === p.NAV.mimeTypes || !p.NAV.mimeTypes[b] || p.NAV.mimeTypes[b].enabledPlugin)) {
                            f = h.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                            for (var j = 0, k = f.length; k > j; j++) f[j] = parseInt(f[j].match(/\d+/), 10)
                        }
                    } else if (void 0 !== g.default.ActiveXObject) try {
                        (i = new ActiveXObject(c)) && (f = d(i))
                    } catch (a) {}
                    return f
                }
            };
        r.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
            var b = [],
                c = a.GetVariable("$version");
            return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
        });
        var s = {
            create: function(a, b, c) {
                var d = {};
                d.options = b, d.id = a.id + "_" + d.options.prefix, d.mediaElement = a, d.flashState = {}, d.flashApi = null, d.flashApiStack = [];
                for (var f = k.default.html5media.properties, h = function(a) {
                        d.flashState[a] = null;
                        var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                        d["get" + b] = function() {
                            if (null === d.flashApi) return null;
                            if (void 0 === d.flashApi["get_" + a]) return null;
                            var b = function() {
                                var b = d.flashApi["get_" + a]();
                                return "buffered" === a ? {
                                    v: {
                                        start: function() {
                                            return 0
                                        },
                                        end: function() {
                                            return b
                                        },
                                        length: 1
                                    }
                                } : {
                                    v: b
                                }
                            }();
                            return "object" === (void 0 === b ? "undefined" : e(b)) ? b.v : void 0
                        }, d["set" + b] = function(b) {
                            "src" === a && (b = q.absolutizeUrl(b)), null !== d.flashApi && void 0 !== d.flashApi["set_" + a] ? d.flashApi["set_" + a](b) : d.flashApiStack.push({
                                type: "set",
                                propName: a,
                                value: b
                            })
                        }
                    }, j = 0, l = f.length; l > j; j++) h(f[j]);
                var r = k.default.html5media.methods,
                    s = function(a) {
                        d[a] = function() {
                            if (null !== d.flashApi) {
                                if (d.flashApi["fire_" + a]) try {
                                    d.flashApi["fire_" + a]()
                                } catch (a) {}
                            } else d.flashApiStack.push({
                                type: "call",
                                methodName: a
                            })
                        }
                    };
                r.push("stop");
                for (var t = 0, u = r.length; u > t; t++) s(r[t]);
                for (var v = ["rendererready", "loadeddata", "loadedmetadata", "canplay", "error"], w = 0, x = v.length; x > w; w++) {
                    var y = o.createEvent(v[w], d);
                    a.dispatchEvent(y)
                }
                g.default["__ready__" + d.id] = function() {
                    if (d.flashReady = !0, d.flashApi = i.default.getElementById("__" + d.id), d.flashApiStack.length)
                        for (var a = 0, b = d.flashApiStack.length; b > a; a++) {
                            var c = d.flashApiStack[a];
                            if ("set" === c.type) {
                                var e = c.propName,
                                    f = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                                d["set" + f](c.value)
                            } else "call" === c.type && d[c.methodName]()
                        }
                }, g.default["__event__" + d.id] = function(a, b) {
                    var c = o.createEvent(a, d);
                    c.message = b || "", d.mediaElement.dispatchEvent(c)
                }, d.flashWrapper = i.default.createElement("div"), ["always", "sameDomain"].includes(d.options.shimScriptAccess) || (d.options.shimScriptAccess = "sameDomain");
                var z = a.originalNode.autoplay,
                    A = ["uid=" + d.id, "autoplay=" + z, "allowScriptAccess=" + d.options.shimScriptAccess],
                    B = null !== a.originalNode && "video" === a.originalNode.tagName.toLowerCase(),
                    C = B ? a.originalNode.height : 1,
                    D = B ? a.originalNode.width : 1;
                a.originalNode.getAttribute("src") && A.push("src=" + a.originalNode.getAttribute("src")), !0 === d.options.enablePseudoStreaming && (A.push("pseudostreamstart=" + d.options.pseudoStreamingStartQueryParam), A.push("pseudostreamtype=" + d.options.pseudoStreamingType)), a.appendChild(d.flashWrapper), null !== a.originalNode && (a.originalNode.style.display = "none");
                var E = [];
                if (p.IS_IE) {
                    var F = i.default.createElement("div");
                    d.flashWrapper.appendChild(F), E = ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + d.id + '"', 'width="' + D + '"', 'height="' + C + '"'], B || E.push('style="clip: rect(0 0 0 0); position: absolute;"'), F.outerHTML = "<object " + E.join(" ") + '><param name="movie" value="' + d.options.pluginPath + d.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + A.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + d.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + m.default.t("mejs.install-flash") + "</div></object>"
                } else E = ['id="__' + d.id + '"', 'name="__' + d.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + d.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + d.options.pluginPath + d.options.filename + '"', 'flashvars="' + A.join("&") + '"', 'width="' + D + '"', 'height="' + C + '"'], B || E.push('style="clip: rect(0 0 0 0); position: absolute;"'), d.flashWrapper.innerHTML = "<embed " + E.join(" ") + ">";
                if (d.flashNode = d.flashWrapper.lastChild, d.hide = function() {
                        if (B) {
                            d.flashNode.style.position = "absolute", d.flashNode.style.width = "1px", d.flashNode.style.height = "1px";
                            try {
                                d.flashNode.style.clip = "rect(0 0 0 0);"
                            } catch (a) {}
                        }
                    }, d.show = function() {
                        if (B) {
                            d.flashNode.style.position = "", d.flashNode.style.width = "", d.flashNode.style.height = "";
                            try {
                                d.flashNode.style.clip = ""
                            } catch (a) {}
                        }
                    }, d.setSize = function(a, b) {
                        d.flashNode.style.width = a + "px", d.flashNode.style.height = b + "px", null !== d.flashApi && "function" == typeof d.flashApi.fire_setSize && d.flashApi.fire_setSize(a, b)
                    }, d.destroy = function() {
                        d.flashNode.remove()
                    }, c && c.length > 0)
                    for (var G = 0, H = c.length; H > G; G++)
                        if (n.renderer.renderers[b.prefix].canPlayType(c[G].type)) {
                            d.setSrc(c[G].src);
                            break
                        }
                return d
            }
        };
        if (r.hasPluginVersion("flash", [10, 0, 0])) {
            q.typeChecks.push(function(a) {
                return a = a.toLowerCase(), a.startsWith("rtmp") ? a.includes(".mp3") ? "audio/rtmp" : "video/rtmp" : a.includes(".oga") || a.includes(".ogg") ? "audio/ogg" : a.includes(".m3u8") ? "application/x-mpegURL" : a.includes(".mpd") ? "application/dash+xml" : a.includes(".flv") ? "video/flv" : null
            });
            var u = {
                name: "flash_video",
                options: {
                    prefix: "flash_video",
                    filename: "mediaelement-flash-video.swf",
                    enablePseudoStreaming: !1,
                    pseudoStreamingStartQueryParam: "start",
                    pseudoStreamingType: "byte"
                },
                canPlayType: function(a) {
                    return ["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].includes(a.toLowerCase())
                },
                create: s.create
            };
            n.renderer.add(u);
            var v = {
                name: "flash_hls",
                options: {
                    prefix: "flash_hls",
                    filename: "mediaelement-flash-video-hls.swf"
                },
                canPlayType: function(a) {
                    return ["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].includes(a.toLowerCase())
                },
                create: s.create
            };
            n.renderer.add(v);
            var w = {
                name: "flash_dash",
                options: {
                    prefix: "flash_dash",
                    filename: "mediaelement-flash-video-mdash.swf"
                },
                canPlayType: function(a) {
                    return ["application/dash+xml"].includes(a.toLowerCase())
                },
                create: s.create
            };
            n.renderer.add(w);
            var x = {
                name: "flash_audio",
                options: {
                    prefix: "flash_audio",
                    filename: "mediaelement-flash-audio.swf"
                },
                canPlayType: function(a) {
                    return ["audio/mp3"].includes(a.toLowerCase())
                },
                create: s.create
            };
            n.renderer.add(x);
            var y = {
                name: "flash_audio_ogg",
                options: {
                    prefix: "flash_audio_ogg",
                    filename: "mediaelement-flash-audio-ogg.swf"
                },
                canPlayType: function(a) {
                    return ["audio/ogg", "audio/oga", "audio/ogv"].includes(a.toLowerCase())
                },
                create: s.create
            };
            n.renderer.add(y)
        }
    }, {
        2: 2,
        23: 23,
        25: 25,
        26: 26,
        3: 3,
        4: 4,
        6: 6,
        7: 7
    }],
    19: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(3),
            f = d(e),
            g = a(2),
            h = d(g),
            i = a(6),
            j = d(i),
            k = a(7),
            l = a(25),
            m = a(23),
            n = a(26),
            o = {
                isMediaStarted: !1,
                isMediaLoaded: !1,
                creationQueue: [],
                prepareSettings: function(a) {
                    o.isLoaded ? o.createInstance(a) : (o.loadScript(a), o.creationQueue.push(a))
                },
                loadScript: function(a) {
                    "undefined" != typeof flvjs ? o.createInstance(a) : o.isMediaStarted || function() {
                        a.options.path = "string" == typeof a.options.path ? a.options.path : "//cdnjs.cloudflare.com/ajax/libs/flv.js/1.1.0/flv.min.js";
                        var b = h.default.createElement("script"),
                            c = h.default.getElementsByTagName("script")[0],
                            d = !1;
                        b.src = a.options.path, b.onload = b.onreadystatechange = function() {
                            d || this.readyState && void 0 !== this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, o.mediaReady(), b.onload = b.onreadystatechange = null)
                        }, c.parentNode.insertBefore(b, c), o.isMediaStarted = !0
                    }()
                },
                mediaReady: function() {
                    for (o.isLoaded = !0, o.isMediaLoaded = !0; o.creationQueue.length > 0;) {
                        var a = o.creationQueue.pop();
                        o.createInstance(a)
                    }
                },
                createInstance: function(a) {
                    var b = flvjs.createPlayer(a.options);
                    f.default["__ready__" + a.id](b)
                }
            },
            p = {
                name: "native_flv",
                options: {
                    prefix: "native_flv",
                    flv: {
                        path: "//cdnjs.cloudflare.com/ajax/libs/flv.js/1.1.0/flv.min.js",
                        cors: !0
                    }
                },
                canPlayType: function(a) {
                    return m.HAS_MSE && ["video/x-flv", "video/flv"].includes(a)
                },
                create: function(a, b, c) {
                    var d = a.originalNode,
                        e = a.id + "_" + b.prefix,
                        g = null,
                        h = null;
                    g = d.cloneNode(!0), b = Object.assign(b, a.options);
                    for (var i = j.default.html5media.properties, m = function(a) {
                            var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                            g["get" + b] = function() {
                                return null !== h ? g[a] : null
                            }, g["set" + b] = function(b) {
                                j.default.html5media.readOnlyProperties.includes(a) || null !== h && (g[a] = b, "src" === a && (h.unload(), h.detachMediaElement(), h.attachMediaElement(g), h.load()))
                            }
                        }, n = 0, p = i.length; p > n; n++) m(i[n]);
                    if (f.default["__ready__" + e] = function(b) {
                            a.flvPlayer = h = b;
                            for (var c = j.default.html5media.events.concat(["click", "mouseover", "mouseout"]), d = function(b) {
                                    "loadedmetadata" === b && (h.unload(), h.detachMediaElement(), h.attachMediaElement(g), h.load()), g.addEventListener(b, function(b) {
                                        var c = l.createEvent(b.type, a);
                                        a.dispatchEvent(c)
                                    })
                                }, e = 0, f = c.length; f > e; e++) d(c[e])
                        }, c && c.length > 0)
                        for (var q = 0, r = c.length; r > q; q++)
                            if (k.renderer.renderers[b.prefix].canPlayType(c[q].type)) {
                                g.setAttribute("src", c[q].src);
                                break
                            }
                    g.setAttribute("id", e), d.parentNode.insertBefore(g, d), d.autoplay = !1, d.style.display = "none", b.flv.type = "flv", b.flv.url = g.getAttribute("src"), o.prepareSettings({
                        options: b.flv,
                        id: e
                    }), g.setSize = function(a, b) {
                        return g.style.width = a + "px", g.style.height = b + "px", g
                    }, g.hide = function() {
                        return null !== h && h.pause(), g.style.display = "none", g
                    }, g.show = function() {
                        return g.style.display = "", g
                    }, g.destroy = function() {
                        null !== h && h.destroy()
                    };
                    var s = l.createEvent("rendererready", g);
                    return a.dispatchEvent(s), g
                }
            };
        n.typeChecks.push(function(a) {
            return a = a.toLowerCase(), a.includes(".flv") ? "video/flv" : null
        }), k.renderer.add(p)
    }, {
        2: 2,
        23: 23,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    20: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(3),
            f = d(e),
            g = a(2),
            h = d(g),
            i = a(6),
            j = d(i),
            k = a(7),
            l = a(25),
            m = a(23),
            n = a(26),
            o = {
                isMediaStarted: !1,
                isMediaLoaded: !1,
                creationQueue: [],
                prepareSettings: function(a) {
                    o.isLoaded ? o.createInstance(a) : (o.loadScript(a), o.creationQueue.push(a))
                },
                loadScript: function(a) {
                    "undefined" != typeof Hls ? o.createInstance(a) : o.isMediaStarted || function() {
                        a.options.path = "string" == typeof a.options.path ? a.options.path : "//cdn.jsdelivr.net/hls.js/latest/hls.min.js";
                        var b = h.default.createElement("script"),
                            c = h.default.getElementsByTagName("script")[0],
                            d = !1;
                        b.src = a.options.path, b.onload = b.onreadystatechange = function() {
                            d || this.readyState && void 0 !== this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, o.mediaReady(), b.onload = b.onreadystatechange = null)
                        }, c.parentNode.insertBefore(b, c), o.isMediaStarted = !0
                    }()
                },
                mediaReady: function() {
                    for (o.isLoaded = !0, o.isMediaLoaded = !0; o.creationQueue.length > 0;) {
                        var a = o.creationQueue.pop();
                        o.createInstance(a)
                    }
                },
                createInstance: function(a) {
                    var b = new Hls(a.options);
                    return f.default["__ready__" + a.id](b), b
                }
            },
            p = {
                name: "native_hls",
                options: {
                    prefix: "native_hls",
                    hls: {
                        path: "//cdn.jsdelivr.net/hls.js/latest/hls.min.js",
                        autoStartLoad: !1,
                        debug: !1
                    }
                },
                canPlayType: function(a) {
                    return m.HAS_MSE && ["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].includes(a.toLowerCase())
                },
                create: function(a, b, c) {
                    var d = a.originalNode,
                        e = a.id + "_" + b.prefix,
                        g = d.getAttribute("preload"),
                        h = d.autoplay,
                        i = null,
                        m = null;
                    m = d.cloneNode(!0), b = Object.assign(b, a.options), b.hls.autoStartLoad = g && "none" !== g || h;
                    for (var n = j.default.html5media.properties, p = function(a) {
                            var c = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                            m["get" + c] = function() {
                                return null !== i ? m[a] : null
                            }, m["set" + c] = function(c) {
                                j.default.html5media.readOnlyProperties.includes(a) || null !== i && (m[a] = c, "src" === a && (i.destroy(), i = o.createInstance({
                                    options: b.hls,
                                    id: e
                                }), i.loadSource(c), i.attachMedia(m)))
                            }
                        }, q = 0, r = n.length; r > q; q++) p(n[q]);
                    if (f.default["__ready__" + e] = function(b) {
                            a.hlsPlayer = i = b;
                            for (var c = j.default.html5media.events.concat(["click", "mouseover", "mouseout"]), d = Hls.Events, e = function(b) {
                                    if ("loadedmetadata" === b) {
                                        var c = a.originalNode.src;
                                        i.detachMedia(), i.loadSource(c), i.attachMedia(m)
                                    }
                                    m.addEventListener(b, function(b) {
                                        var c = l.createEvent(b.type, a);
                                        a.dispatchEvent(c)
                                    })
                                }, f = 0, g = c.length; g > f; f++) e(c[f]);
                            var h = void 0,
                                k = void 0,
                                n = function(b, c) {
                                    var d = l.createEvent(b, m);
                                    if (d.data = c, a.dispatchEvent(d), "hlsError" === b && (console.warn(b, c), c.fatal)) switch (c.type) {
                                        case "mediaError":
                                            var e = (new Date).getTime();
                                            !h || e - h > 3e3 ? (h = (new Date).getTime(), i.recoverMediaError()) : !k || e - k > 3e3 ? (k = (new Date).getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), i.swapAudioCodec(), i.recoverMediaError()) : console.error("Cannot recover, last media error recovery failed");
                                            break;
                                        case "networkError":
                                            console.error("Network error");
                                            break;
                                        default:
                                            i.destroy()
                                    }
                                };
                            for (var o in d) d.hasOwnProperty(o) && i.on(d[o], n)
                        }, c && c.length > 0)
                        for (var s = 0, t = c.length; t > s; s++)
                            if (k.renderer.renderers[b.prefix].canPlayType(c[s].type)) {
                                m.setAttribute("src", c[s].src);
                                break
                            }
                            "auto" === g || h || (m.addEventListener("play", function() {
                        null !== i && i.startLoad()
                    }), m.addEventListener("pause", function() {
                        null !== i && i.stopLoad()
                    })), m.setAttribute("id", e), d.parentNode.insertBefore(m, d), d.autoplay = !1, d.style.display = "none", o.prepareSettings({
                        options: b.hls,
                        id: e
                    }), m.setSize = function(a, b) {
                        return m.style.width = a + "px", m.style.height = b + "px", m
                    }, m.hide = function() {
                        return m.pause(), m.style.display = "none", m
                    }, m.show = function() {
                        return m.style.display = "", m
                    }, m.destroy = function() {
                        null !== i && i.destroy()
                    }, m.stop = function() {
                        null !== i && i.stopLoad()
                    };
                    var u = l.createEvent("rendererready", m);
                    return a.dispatchEvent(u), m
                }
            };
        n.typeChecks.push(function(a) {
            return a = a.toLowerCase(), a.includes(".m3u8") ? "application/x-mpegURL" : null
        }), k.renderer.add(p)
    }, {
        2: 2,
        23: 23,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    21: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(3),
            f = d(e),
            g = a(2),
            h = d(g),
            i = a(6),
            j = d(i),
            k = a(7),
            l = a(25),
            m = a(23),
            n = {
                name: "html5",
                options: {
                    prefix: "html5"
                },
                canPlayType: function(a) {
                    var b = h.default.createElement("video");
                    return m.IS_ANDROID && null !== a.match(/\/mp(3|4)$/gi) || ["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].includes(a.toLowerCase()) && m.SUPPORTS_NATIVE_HLS ? "yes" : b.canPlayType ? b.canPlayType(a).replace(/no/, "") : ""
                },
                create: function(a, b, c) {
                    var d = a.id + "_" + b.prefix,
                        e = null;
                    void 0 === a.originalNode || null === a.originalNode ? (e = h.default.createElement("audio"), a.appendChild(e)) : e = a.originalNode, e.setAttribute("id", d);
                    for (var f = j.default.html5media.properties, g = function(a) {
                            var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                            e["get" + b] = function() {
                                return e[a]
                            }, e["set" + b] = function(b) {
                                j.default.html5media.readOnlyProperties.includes(a) || (e[a] = b)
                            }
                        }, i = 0, m = f.length; m > i; i++) g(f[i]);
                    for (var n = j.default.html5media.events.concat(["click", "mouseover", "mouseout"]), o = function(b) {
                            e.addEventListener(b, function(b) {
                                var c = l.createEvent(b.type, a);
                                a.dispatchEvent(c)
                            })
                        }, p = 0, q = n.length; q > p; p++) o(n[p]);
                    if (e.setSize = function(a, b) {
                            return e.style.width = a + "px", e.style.height = b + "px", e
                        }, e.hide = function() {
                            return e.style.display = "none", e
                        }, e.show = function() {
                            return e.style.display = "", e
                        }, c && c.length > 0)
                        for (var r = 0, s = c.length; s > r; r++)
                            if (k.renderer.renderers[b.prefix].canPlayType(c[r].type)) {
                                e.setAttribute("src", c[r].src);
                                break
                            }
                    var t = l.createEvent("rendererready", e);
                    return a.dispatchEvent(t), e
                }
            };
        f.default.HtmlMediaElement = j.default.HtmlMediaElement = n, k.renderer.add(n)
    }, {
        2: 2,
        23: 23,
        25: 25,
        3: 3,
        6: 6,
        7: 7
    }],
    22: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            f = a(3),
            g = d(f),
            h = a(2),
            i = d(h),
            j = a(6),
            k = d(j),
            l = a(7),
            m = a(25),
            n = a(26),
            o = {
                isIframeStarted: !1,
                isIframeLoaded: !1,
                iframeQueue: [],
                enqueueIframe: function(a) {
                    o.isLoaded = "undefined" != typeof YT && YT.loaded, o.isLoaded ? o.createIframe(a) : (o.loadIframeApi(), o.iframeQueue.push(a))
                },
                loadIframeApi: function() {
                    if (!o.isIframeStarted) {
                        var a = i.default.createElement("script");
                        a.src = "//www.youtube.com/player_api";
                        var b = i.default.getElementsByTagName("script")[0];
                        b.parentNode.insertBefore(a, b), o.isIframeStarted = !0
                    }
                },
                iFrameReady: function() {
                    for (o.isLoaded = !0, o.isIframeLoaded = !0; o.iframeQueue.length > 0;) {
                        var a = o.iframeQueue.pop();
                        o.createIframe(a)
                    }
                },
                createIframe: function(a) {
                    return new YT.Player(a.containerId, a)
                },
                getYouTubeId: function(a) {
                    var b = "";
                    return a.indexOf("?") > 0 ? "" === (b = o.getYouTubeIdFromParam(a)) && (b = o.getYouTubeIdFromUrl(a)) : b = o.getYouTubeIdFromUrl(a), b
                },
                getYouTubeIdFromParam: function(a) {
                    if (void 0 === a || null === a || !a.trim().length) return null;
                    for (var b = a.split("?"), c = b[1].split("&"), d = "", e = 0, f = c.length; f > e; e++) {
                        var g = c[e].split("=");
                        if ("v" === g[0]) {
                            d = g[1];
                            break
                        }
                    }
                    return d
                },
                getYouTubeIdFromUrl: function(a) {
                    return void 0 !== a && null !== a && a.trim().length ? (a = a.split("?")[0], a.substring(a.lastIndexOf("/") + 1)) : null
                },
                getYouTubeNoCookieUrl: function(a) {
                    if (void 0 === a || null === a || !a.trim().length || !a.includes("//www.youtube")) return a;
                    var b = a.split("/");
                    return b[2] = b[2].replace(".com", "-nocookie.com"), b.join("/")
                }
            },
            p = {
                name: "youtube_iframe",
                options: {
                    prefix: "youtube_iframe",
                    youtube: {
                        autoplay: 0,
                        controls: 0,
                        disablekb: 1,
                        end: 0,
                        loop: 0,
                        modestbranding: 0,
                        playsinline: 0,
                        rel: 0,
                        showinfo: 0,
                        start: 0,
                        iv_load_policy: 3,
                        nocookie: !1
                    }
                },
                canPlayType: function(a) {
                    return ["video/youtube", "video/x-youtube"].includes(a)
                },
                create: function(a, b, c) {
                    var d = {},
                        f = [],
                        h = 4,
                        j = null,
                        l = !0,
                        n = !1,
                        p = null,
                        q = 1;
                    d.options = b, d.id = a.id + "_" + b.prefix, d.mediaElement = a;
                    for (var r = k.default.html5media.properties, s = function(b) {
                            var c = "" + b.substring(0, 1).toUpperCase() + b.substring(1);
                            d["get" + c] = function() {
                                if (null !== j) {
                                    var c = function() {
                                        switch (b) {
                                            case "currentTime":
                                                return {
                                                    v: j.getCurrentTime()
                                                };
                                            case "duration":
                                                return {
                                                    v: j.getDuration()
                                                };
                                            case "volume":
                                                return q = j.getVolume() / 100, {
                                                    v: q
                                                };
                                            case "paused":
                                                return {
                                                    v: l
                                                };
                                            case "ended":
                                                return {
                                                    v: n
                                                };
                                            case "muted":
                                                return {
                                                    v: j.isMuted()
                                                };
                                            case "buffered":
                                                var a = j.getVideoLoadedFraction(),
                                                    c = j.getDuration();
                                                return {
                                                    v: {
                                                        start: function() {
                                                            return 0
                                                        },
                                                        end: function() {
                                                            return a * c
                                                        },
                                                        length: 1
                                                    }
                                                };
                                            case "src":
                                                return {
                                                    v: j.getVideoUrl()
                                                };
                                            case "readyState":
                                                return {
                                                    v: h
                                                }
                                        }
                                    }();
                                    return "object" === (void 0 === c ? "undefined" : e(c)) ? c.v : null
                                }
                                return null
                            }, d["set" + c] = function(c) {
                                if (null !== j) switch (b) {
                                    case "src":
                                        var e = "string" == typeof c ? c : c[0].src,
                                            g = o.getYouTubeId(e);
                                        a.originalNode.autoplay ? j.loadVideoById(g) : j.cueVideoById(g);
                                        break;
                                    case "currentTime":
                                        j.seekTo(c);
                                        break;
                                    case "muted":
                                        c ? j.mute() : j.unMute(), setTimeout(function() {
                                            var b = m.createEvent("volumechange", d);
                                            a.dispatchEvent(b)
                                        }, 50);
                                        break;
                                    case "volume":
                                        q = c, j.setVolume(100 * c), setTimeout(function() {
                                            var b = m.createEvent("volumechange", d);
                                            a.dispatchEvent(b)
                                        }, 50);
                                        break;
                                    case "readyState":
                                        var h = m.createEvent("canplay", d);
                                        a.dispatchEvent(h)
                                } else f.push({
                                    type: "set",
                                    propName: b,
                                    value: c
                                })
                            }
                        }, t = 0, u = r.length; u > t; t++) s(r[t]);
                    for (var v = k.default.html5media.methods, w = function(a) {
                            d[a] = function() {
                                if (null !== j) switch (a) {
                                    case "play":
                                        return l = !1, j.playVideo();
                                    case "pause":
                                        return l = !0, j.pauseVideo();
                                    case "load":
                                        return null
                                } else f.push({
                                    type: "call",
                                    methodName: a
                                })
                            }
                        }, x = 0, y = v.length; y > x; x++) w(v[x]);
                    var z = i.default.createElement("div");
                    z.id = d.id, d.options.youtube.nocookie && a.originalNode.setAttribute("src", o.getYouTubeNoCookieUrl(c[0].src)), a.originalNode.parentNode.insertBefore(z, a.originalNode), a.originalNode.style.display = "none";
                    var A = "audio" === a.originalNode.tagName.toLowerCase(),
                        B = A ? "0" : a.originalNode.height,
                        C = A ? "0" : a.originalNode.width,
                        D = o.getYouTubeId(c[0].src),
                        E = {
                            id: d.id,
                            containerId: z.id,
                            videoId: D,
                            height: B,
                            width: C,
                            playerVars: Object.assign({
                                controls: 0,
                                rel: 0,
                                disablekb: 1,
                                showinfo: 0,
                                modestbranding: 0,
                                html5: 1,
                                playsinline: 0,
                                start: 0,
                                end: 0,
                                iv_load_policy: 3
                            }, d.options.youtube),
                            origin: g.default.location.host,
                            events: {
                                onReady: function(b) {
                                    if (a.youTubeApi = j = b.target, a.youTubeState = {
                                            paused: !0,
                                            ended: !1
                                        }, f.length)
                                        for (var c = 0, e = f.length; e > c; c++) {
                                            var g = f[c];
                                            if ("set" === g.type) {
                                                var h = g.propName,
                                                    i = "" + h.substring(0, 1).toUpperCase() + h.substring(1);
                                                d["set" + i](g.value)
                                            } else "call" === g.type && d[g.methodName]()
                                        }
                                    p = j.getIframe();
                                    for (var k = ["mouseover", "mouseout"], l = function(b) {
                                            var c = m.createEvent(b.type, d);
                                            a.dispatchEvent(c)
                                        }, n = 0, o = k.length; o > n; n++) p.addEventListener(k[n], l, !1);
                                    for (var q = ["rendererready", "loadeddata", "loadedmetadata", "canplay"], r = 0, s = q.length; s > r; r++) {
                                        var t = m.createEvent(q[r], d);
                                        a.dispatchEvent(t)
                                    }
                                },
                                onStateChange: function(b) {
                                    var c = [];
                                    switch (b.data) {
                                        case -1:
                                            c = ["loadedmetadata"], l = !0, n = !1;
                                            break;
                                        case 0:
                                            c = ["ended"], l = !1, n = !0, d.stopInterval();
                                            break;
                                        case 1:
                                            c = ["play", "playing"], l = !1, n = !1, d.startInterval();
                                            break;
                                        case 2:
                                            c = ["pause"], l = !0, n = !1, d.stopInterval();
                                            break;
                                        case 3:
                                            c = ["progress"], n = !1;
                                            break;
                                        case 5:
                                            c = ["loadeddata", "loadedmetadata", "canplay"], l = !0, n = !1
                                    }
                                    for (var e = 0, f = c.length; f > e; e++) {
                                        var g = m.createEvent(c[e], d);
                                        a.dispatchEvent(g)
                                    }
                                },
                                onError: function(b) {
                                    var c = m.createEvent("error", d);
                                    c.data = b.data, a.dispatchEvent(c)
                                }
                            }
                        };
                    return A && (E.playerVars.playsinline = 1), o.enqueueIframe(E), d.onEvent = function(b, c, d) {
                        null !== d && void 0 !== d && (a.youTubeState = d)
                    }, d.setSize = function(a, b) {
                        null !== j && j.setSize(a, b)
                    }, d.hide = function() {
                        d.stopInterval(), d.pause(), p && (p.style.display = "none")
                    }, d.show = function() {
                        p && (p.style.display = "")
                    }, d.destroy = function() {
                        j.destroy()
                    }, d.interval = null, d.startInterval = function() {
                        d.interval = setInterval(function() {
                            var b = m.createEvent("timeupdate", d);
                            a.dispatchEvent(b)
                        }, 250)
                    }, d.stopInterval = function() {
                        d.interval && clearInterval(d.interval)
                    }, d
                }
            };
        g.default.postMessage && e(g.default.addEventListener) && (g.default.onYouTubePlayerAPIReady = function() {
            o.iFrameReady()
        }, n.typeChecks.push(function(a) {
            return a = a.toLowerCase(), a.includes("//www.youtube") || a.includes("//youtu.be") ? "video/x-youtube" : null
        }), l.renderer.add(p))
    }, {
        2: 2,
        25: 25,
        26: 26,
        3: 3,
        6: 6,
        7: 7
    }],
    23: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.cancelFullScreen = c.requestFullScreen = c.isFullScreen = c.FULLSCREEN_EVENT_NAME = c.HAS_NATIVE_FULLSCREEN_ENABLED = c.HAS_TRUE_NATIVE_FULLSCREEN = c.HAS_IOS_FULLSCREEN = c.HAS_MS_NATIVE_FULLSCREEN = c.HAS_MOZ_NATIVE_FULLSCREEN = c.HAS_WEBKIT_NATIVE_FULLSCREEN = c.HAS_NATIVE_FULLSCREEN = c.SUPPORTS_NATIVE_HLS = c.SUPPORT_POINTER_EVENTS = c.HAS_MSE = c.IS_STOCK_ANDROID = c.IS_SAFARI = c.IS_FIREFOX = c.IS_CHROME = c.IS_EDGE = c.IS_IE = c.IS_ANDROID = c.IS_IOS = c.IS_IPHONE = c.IS_IPAD = c.UA = c.NAV = void 0;
        for (var e = a(3), f = d(e), g = a(2), h = d(g), i = a(6), j = d(i), k = c.NAV = f.default.navigator, l = c.UA = k.userAgent.toLowerCase(), m = c.IS_IPAD = null !== l.match(/ipad/i), n = c.IS_IPHONE = null !== l.match(/iphone/i), o = (c.IS_IOS = n || m, c.IS_ANDROID = null !== l.match(/android/i)), p = c.IS_IE = k.appName.toLowerCase().includes("microsoft") || null !== k.appName.toLowerCase().match(/trident/gi), q = (c.IS_EDGE = "msLaunchUri" in k && !("documentMode" in h.default)), r = c.IS_CHROME = null !== l.match(/chrome/gi), s = c.IS_FIREFOX = null !== l.match(/firefox/gi), t = c.IS_SAFARI = null !== l.match(/safari/gi) && !r, u = c.IS_STOCK_ANDROID = null !== l.match(/^mozilla\/\d+\.\d+\s\(linux;\su;/gi), v = (c.HAS_MSE = "MediaSource" in f.default), w = (c.SUPPORT_POINTER_EVENTS = function() {
                var a = h.default.createElement("x"),
                    b = h.default.documentElement,
                    c = f.default.getComputedStyle;
                if (!("pointerEvents" in a.style)) return !1;
                a.style.pointerEvents = "auto", a.style.pointerEvents = "x", b.appendChild(a);
                var d = c && "auto" === c(a, "").pointerEvents;
                return a.remove(), !!d
            }()), x = ["source", "track", "audio", "video"], y = void 0, z = 0, A = x.length; A > z; z++) y = h.default.createElement(x[z]);
        var B = c.SUPPORTS_NATIVE_HLS = t || o && (r || u) || p && null !== l.match(/edge/gi),
            C = void 0 !== y.webkitEnterFullscreen,
            D = void 0 !== y.requestFullscreen;
        C && l.match(/mac os x 10_5/i) && (D = !1, C = !1);
        var E = void 0 !== y.webkitRequestFullScreen,
            F = void 0 !== y.mozRequestFullScreen,
            G = void 0 !== y.msRequestFullscreen,
            H = E || F || G,
            I = H,
            J = "",
            K = void 0,
            L = void 0,
            M = void 0;
        F ? I = h.default.mozFullScreenEnabled : G && (I = h.default.msFullscreenEnabled), r && (C = !1), H && (E ? J = "webkitfullscreenchange" : F ? J = "mozfullscreenchange" : G && (J = "MSFullscreenChange"), c.isFullScreen = K = function() {
            return F ? h.default.mozFullScreen : E ? h.default.webkitIsFullScreen : G ? null !== h.default.msFullscreenElement : void 0
        }, c.requestFullScreen = L = function(a) {
            E ? a.webkitRequestFullScreen() : F ? a.mozRequestFullScreen() : G && a.msRequestFullscreen()
        }, c.cancelFullScreen = M = function() {
            E ? h.default.webkitCancelFullScreen() : F ? h.default.mozCancelFullScreen() : G && h.default.msExitFullscreen()
        });
        var N = c.HAS_NATIVE_FULLSCREEN = D,
            O = c.HAS_WEBKIT_NATIVE_FULLSCREEN = E,
            P = c.HAS_MOZ_NATIVE_FULLSCREEN = F,
            Q = c.HAS_MS_NATIVE_FULLSCREEN = G,
            R = c.HAS_IOS_FULLSCREEN = C,
            S = c.HAS_TRUE_NATIVE_FULLSCREEN = H,
            T = c.HAS_NATIVE_FULLSCREEN_ENABLED = I,
            U = c.FULLSCREEN_EVENT_NAME = J;
        c.isFullScreen = K, c.requestFullScreen = L, c.cancelFullScreen = M, j.default.Features = j.default.Features || {}, j.default.Features.isiPad = m, j.default.Features.isiPhone = n, j.default.Features.isiOS = j.default.Features.isiPhone || j.default.Features.isiPad, j.default.Features.isAndroid = o, j.default.Features.isIE = p, j.default.Features.isEdge = q, j.default.Features.isChrome = r, j.default.Features.isFirefox = s, j.default.Features.isSafari = t, j.default.Features.isStockAndroid = u, j.default.Features.hasMSE = v, j.default.Features.supportsNativeHLS = B, j.default.Features.supportsPointerEvents = w, j.default.Features.hasiOSFullScreen = R, j.default.Features.hasNativeFullscreen = N, j.default.Features.hasWebkitNativeFullScreen = O, j.default.Features.hasMozNativeFullScreen = P, j.default.Features.hasMsNativeFullScreen = Q, j.default.Features.hasTrueNativeFullScreen = S, j.default.Features.nativeFullScreenEnabled = T, j.default.Features.fullScreenEventName = U, j.default.Features.isFullScreen = K, j.default.Features.requestFullScreen = L, j.default.Features.cancelFullScreen = M
    }, {
        2: 2,
        3: 3,
        6: 6
    }],
    24: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e(a) {
            var b = a.getBoundingClientRect(),
                c = m.default.pageXOffset || o.default.documentElement.scrollLeft,
                d = m.default.pageYOffset || o.default.documentElement.scrollTop;
            return {
                top: b.top + d,
                left: b.left + c
            }
        }

        function f(a, b) {
            u(a, b) ? w(a, b) : v(a, b)
        }

        function g(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
                c = arguments[2];
            a.style.opacity || (a.style.opacity = 1);
            var d = null;
            m.default.requestAnimationFrame(function e(f) {
                d = d || f;
                var g = f - d;
                a.style.opacity = parseFloat(1 - g / b, 2), g > b ? c && "function" == typeof c && c() : m.default.requestAnimationFrame(e)
            })
        }

        function h(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
                c = arguments[2];
            a.style.opacity || (a.style.opacity = 0);
            var d = null;
            m.default.requestAnimationFrame(function e(f) {
                d = d || f;
                var g = f - d;
                a.style.opacity = parseFloat(g / b, 2), g > b ? c && "function" == typeof c && c() : m.default.requestAnimationFrame(e)
            })
        }

        function i(a, b) {
            var c = [];
            a = a.parentNode.firstChild;
            do {
                (!b || b(a)) && c.push(a)
            } while (a = a.nextSibling);
            return c
        }

        function j(a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }

        function k(a, b, c, d) {
            var e = m.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                f = "application/x-www-form-urlencoded; charset=UTF-8",
                g = !1,
                h = "*/".concat("*");
            switch (b) {
                case "text":
                    f = "text/plain";
                    break;
                case "json":
                    f = "application/json, text/javascript";
                    break;
                case "html":
                    f = "text/html";
                    break;
                case "xml":
                    f = "application/xml, text/xml"
            }
            f.includes("application/x-www-form-urlencoded") || (h = f + ", */*; q=0.01"), e && (e.open("GET", a, !0), e.setRequestHeader("Accept", h), e.onreadystatechange = function() {
                if (!g && 4 === e.readyState)
                    if (200 === e.status) {
                        g = !0;
                        var a = void 0;
                        switch (b) {
                            case "json":
                                a = JSON.parse(e.responseText);
                                break;
                            case "xml":
                                a = e.responseXML;
                                break;
                            default:
                                a = e.responseText
                        }
                        c(a)
                    } else "function" == typeof d && d(e.status)
            }, e.send())
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.removeClass = c.addClass = c.hasClass = void 0, c.offset = e, c.toggleClass = f, c.fadeOut = g, c.fadeIn = h, c.siblings = i, c.visible = j, c.ajax = k;
        var l = a(3),
            m = d(l),
            n = a(2),
            o = d(n),
            p = a(6),
            q = d(p),
            r = void 0,
            s = void 0,
            t = void 0;
        "classList" in o.default.documentElement ? (r = function(a, b) {
            return void 0 !== a.classList && a.classList.contains(b)
        }, s = function(a, b) {
            return a.classList.add(b)
        }, t = function(a, b) {
            return a.classList.remove(b)
        }) : (r = function(a, b) {
            return new RegExp("\\b" + b + "\\b").test(a.className)
        }, s = function(a, b) {
            u(a, b) || (a.className += " " + b)
        }, t = function(a, b) {
            a.className = a.className.replace(new RegExp("\\b" + b + "\\b", "g"), "")
        });
        var u = c.hasClass = r,
            v = c.addClass = s,
            w = c.removeClass = t;
        q.default.Utils = q.default.Utils || {}, q.default.Utils.offset = e, q.default.Utils.hasClass = u, q.default.Utils.addClass = v, q.default.Utils.removeClass = w, q.default.Utils.toggleClass = f, q.default.Utils.fadeIn = h, q.default.Utils.fadeOut = g, q.default.Utils.siblings = i, q.default.Utils.visible = j, q.default.Utils.ajax = k
    }, {
        2: 2,
        3: 3,
        6: 6
    }],
    25: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e(a) {
            if ("string" != typeof a) throw new Error("Argument passed must be a string");
            var b = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return a.replace(/[&<>"]/g, function(a) {
                return b[a]
            })
        }

        function f(a, b) {
            var c = this,
                d = arguments,
                e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("function" != typeof a) throw new Error("First argument must be a function");
            if ("number" != typeof b) throw new Error("Second argument must be a numeric value");
            var f = void 0;
            return function() {
                var g = c,
                    h = d,
                    i = function() {
                        f = null, e || a.apply(g, h)
                    },
                    j = e && !f;
                clearTimeout(f), f = setTimeout(i, b), j && a.apply(g, h)
            }
        }

        function g(a) {
            return Object.getOwnPropertyNames(a).length <= 0
        }

        function h(a, b) {
            var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
                d = {
                    d: [],
                    w: []
                };
            return (a || "").split(" ").forEach(function(a) {
                var e = a + (b ? "." + b : "");
                e.startsWith(".") ? (d.d.push(e), d.w.push(e)) : d[c.test(a) ? "w" : "d"].push(e)
            }), d.d = d.d.join(" "), d.w = d.w.join(" "), d
        }

        function i(a, b) {
            if ("string" != typeof a) throw new Error("Event name must be a string");
            var c = a.match(/[a-z]+\.([a-z]+)/),
                d = {
                    target: b
                };
            return null !== c && (a = c[0], d.namespace = c[1]), new window.CustomEvent(a, {
                detail: d
            })
        }

        function j(a, b) {
            return !!(a && b && 2 & a.compareDocumentPosition(b))
        }

        function k(a) {
            return "string" == typeof a
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.escapeHTML = e, c.debounce = f, c.isObjectEmpty = g, c.splitEvents = h, c.createEvent = i, c.isNodeAfter = j, c.isString = k;
        var l = a(6),
            m = d(l);
        m.default.Utils = m.default.Utils || {}, m.default.Utils.escapeHTML = e, m.default.Utils.debounce = f, m.default.Utils.isObjectEmpty = g, m.default.Utils.splitEvents = h, m.default.Utils.createEvent = i, m.default.Utils.isNodeAfter = j, m.default.Utils.isString = k
    }, {
        6: 6
    }],
    26: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e(a) {
            if ("string" != typeof a) throw new Error("`url` argument must be a string");
            var b = document.createElement("div");
            return b.innerHTML = '<a href="' + m.escapeHTML(a) + '">x</a>', b.firstChild.href
        }

        function f(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return a && !b ? h(a) : g(b)
        }

        function g(a) {
            if ("string" != typeof a) throw new Error("`type` argument must be a string");
            return a && ~a.indexOf(";") ? a.substr(0, a.indexOf(";")) : a
        }

        function h(a) {
            if ("string" != typeof a) throw new Error("`url` argument must be a string");
            for (var b = 0, c = n.length; c > b; b++) {
                var d = n[b](a);
                if (d) return d
            }
            var e = i(a),
                f = j(e),
                g = "video/mp4";
            return f && (["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].includes(f) ? g = "video/" + f : ["mp3", "oga", "wav", "mid", "midi"].includes(f) && (g = "audio/" + f)), g
        }

        function i(a) {
            if ("string" != typeof a) throw new Error("`url` argument must be a string");
            var b = a.split("?")[0],
                c = b.split("\\").pop().split("/").pop();
            return c.indexOf(".") > -1 ? c.substring(c.lastIndexOf(".") + 1) : ""
        }

        function j(a) {
            if ("string" != typeof a) throw new Error("`extension` argument must be a string");
            switch (a) {
                case "mp4":
                case "m4v":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.typeChecks = void 0, c.absolutizeUrl = e, c.formatType = f, c.getMimeFromType = g, c.getTypeFromFile = h, c.getExtension = i, c.normalizeExtension = j;
        var k = a(6),
            l = d(k),
            m = a(25),
            n = c.typeChecks = [];
        l.default.Utils = l.default.Utils || {}, l.default.Utils.typeChecks = n, l.default.Utils.absolutizeUrl = e, l.default.Utils.formatType = f, l.default.Utils.getMimeFromType = g, l.default.Utils.getTypeFromFile = h, l.default.Utils.getExtension = i, l.default.Utils.normalizeExtension = j
    }, {
        25: 25,
        6: 6
    }],
    27: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var e = a(2),
            f = d(e);
        ! function(a) {
            a.forEach(function(a) {
                a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        this.parentNode.removeChild(this)
                    }
                })
            })
        }([Element.prototype, CharacterData.prototype, DocumentType.prototype]),
        function() {
            function a(a, b) {
                b = b || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var c = f.default.createEvent("CustomEvent");
                return c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail), c
            }
            "function" != typeof window.CustomEvent && (a.prototype = window.Event.prototype, window.CustomEvent = a)
        }(), "function" != typeof Object.assign && (Object.assign = function(a) {
                if (null === a || void 0 === a) throw new TypeError("Cannot convert undefined or null to object");
                for (var b = Object(a), c = 1, d = arguments.length; d > c; c++) {
                    var e = arguments[c];
                    if (null !== e)
                        for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = e[f])
                }
                return b
            }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function(a, b) {
                    if (null === this || void 0 === this) throw new TypeError('"this" is null or not defined');
                    var c = Object(this),
                        d = c.length >>> 0;
                    if (0 === d) return !1;
                    for (var e = 0 | b, f = Math.max(e >= 0 ? e : d - Math.abs(e), 0); d > f;) {
                        if (c[f] === a) return !0;
                        f++
                    }
                    return !1
                }
            }), String.prototype.includes || (String.prototype.includes = function(a, b) {
                return "number" != typeof b && (b = 0), !(b + a.length > this.length) && -1 !== this.indexOf(a, b)
            }), String.prototype.startsWith || (String.prototype.startsWith = function(a, b) {
                return b = b || 0, this.substr(b, a.length) === a
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(a) {
                for (var b = (this.document || this.ownerDocument).querySelectorAll(a), c = b.length - 1; --c >= 0 && b.item(c) !== this;);
                return c > -1
            }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function(a) {
                var b = (this.document || this.ownerDocument).querySelectorAll(a),
                    c = void 0,
                    d = this;
                do {
                    for (c = b.length; --c >= 0 && b.item(c) !== d;);
                } while (0 > c && (d = d.parentElement));
                return d
            }),
            function() {
                for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
                    var c = (new Date).getTime(),
                        d = Math.max(0, 16 - (c - a)),
                        e = window.setTimeout(function() {
                            b(c + d)
                        }, d);
                    return a = c + d, e
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
                    clearTimeout(a)
                })
            }()
    }, {
        2: 2
    }],
    28: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e() {
            return !((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
        }

        function f(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25,
                f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            a = !a || "number" != typeof a || 0 > a ? 0 : a;
            var g = Math.round(.066666 * d),
                h = Math.round(d),
                i = 24 * Math.round(3600 * d),
                j = Math.round(600 * d),
                k = e(d) ? ";" : ":",
                l = void 0,
                m = void 0,
                n = void 0,
                o = void 0,
                p = Math.round(a * d);
            if (e(d)) {
                0 > p && (p = i + p), p %= i;
                var q = Math.floor(p / j),
                    r = p % j;
                p += 9 * g * q, r > g && (p += g * Math.floor((r - g) / Math.round(60 * h - g)));
                var s = Math.floor(p / h);
                l = Math.floor(Math.floor(s / 60) / 60), m = Math.floor(s / 60) % 60, n = c ? s % 60 : (p / h % 60).toFixed(f)
            } else l = Math.floor(a / 3600) % 24, m = Math.floor(a / 60) % 60, n = c ? Math.floor(a % 60) : (a % 60).toFixed(f);
            l = 0 >= l ? 0 : l, m = 0 >= m ? 0 : m, n = 0 >= n ? 0 : n;
            var t = b || l > 0 ? (10 > l ? "0" + l : l) + ":" : "";
            return t += (10 > m ? "0" + m : m) + ":", t += "" + (10 > n ? "0" + n : n), c && (o = (p % h).toFixed(0), o = 0 >= o ? 0 : o, t += 10 > o ? k + "0" + o : "" + k + o), t
        }

        function g(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
            if ("string" != typeof a) throw new TypeError("Time must be a string");
            if (a.indexOf(";") > 0 && (a = a.replace(";", ":")), !a.match(/\d{2}(\:\d{2}){0,3}/)) throw new TypeError("Time code must have the format `00:00:00`");
            var c = a.split(":"),
                d = void 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0,
                j = 0,
                k = Math.round(.066666 * b),
                l = Math.round(b),
                m = 3600 * l,
                n = 60 * l;
            switch (c.length) {
                default:
                    case 1:
                    h = parseInt(c[0], 10);
                break;
                case 2:
                        g = parseInt(c[0], 10),
                    h = parseInt(c[1], 10);
                    break;
                case 3:
                        f = parseInt(c[0], 10),
                    g = parseInt(c[1], 10),
                    h = parseInt(c[2], 10);
                    break;
                case 4:
                        f = parseInt(c[0], 10),
                    g = parseInt(c[1], 10),
                    h = parseInt(c[2], 10),
                    i = parseInt(c[3], 10)
            }
            return e(b) ? (j = 60 * f + g, d = m * f + n * g + l * h + i - k * (j - Math.floor(j / 10))) : d = (m * f + n * g + b * h + i) / b, parseFloat(d.toFixed(3))
        }

        function h(a, b) {
            var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
            a = !a || "number" != typeof a || 0 > a ? 0 : a;
            for (var d = Math.floor(a / 3600) % 24, e = Math.floor(a / 60) % 60, f = Math.floor(a % 60), g = Math.floor((a % 1 * c).toFixed(3)), h = [
                    [g, "f"],
                    [f, "s"],
                    [e, "m"],
                    [d, "h"]
                ], i = b.timeFormat, j = i[1] === i[0], k = j ? 2 : 1, l = i.length < k ? i[k] : ":", m = i[0], n = !1, o = 0, p = h.length; p > o; o++)
                if (i.indexOf(h[o][1]) > -1) n = !0;
                else if (n) {
                for (var q = !1, r = o; p > r; r++)
                    if (h[r][0] > 0) {
                        q = !0;
                        break
                    }
                if (!q) break;
                j || (i = m + i), i = h[o][1] + l + i, j && (i = h[o][1] + i), m = h[o][1]
            }
            b.currentTimeFormat = i
        }

        function i(a) {
            if ("string" != typeof a) throw new TypeError("Argument must be a string value");
            a = a.replace(",", ".");
            var b = a.indexOf(".") > -1 ? a.split(".")[1].length : 0,
                c = 0,
                d = 1;
            a = a.split(":").reverse();
            for (var e = 0, f = a.length; f > e; e++) d = 1, e > 0 && (d = Math.pow(60, e)), c += Number(a[e]) * d;
            return Number(c.toFixed(b))
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.isDropFrame = e, c.secondsToTimeCode = f, c.timeCodeToSeconds = g, c.calculateTimeFormat = h, c.convertSMPTEtoSeconds = i;
        var j = a(6),
            k = d(j);
        k.default.Utils = k.default.Utils || {}, k.default.Utils.secondsToTimeCode = f, k.default.Utils.timeCodeToSeconds = g, k.default.Utils.calculateTimeFormat = h, k.default.Utils.convertSMPTEtoSeconds = i
    }, {
        6: 6
    }]
}, {}, [27, 5, 4, 14, 21, 18, 17, 19, 20, 22, 15, 16, 8, 9, 10, 11, 12, 13]), $(function() {
    $("audio").mediaelementplayer({
        success: function(a, b, c) {
            $(".play-buttons").on("click", function() {
                var b = $(this);
                if (b.hasClass("active")) return void a.pause();
                $(".play-buttons").removeClass("active");
                var c = b.attr("data-url");
                a.setSrc(c), b.addClass("active"), a.play()
            }), $("#audioPlayer_html5").bind("pause", function() {
                $(".play-buttons").removeClass("active")
            }), $("#audioPlayer_html5").bind("play", function() {
                var a = $(this).attr("src");
                $('a[data-url="' + a + '"]').addClass("active")
            })
        }
    }), $(".widget-header").on("click", function() {
        var a = $(this),
            b = a.find(".nav-toggle-bars"),
            c = a.parent(".widget").find(".widget-body");
        b.is(":visible") && (c.is(":visible") ? c.hide(300) : ($(".widget-body").hide(300), c.show(300)))
    }), $(window).on("click", function(a) {
        var b = $("#search-toggle");
        b.is(":visible") && $(".primary-search").is(":visible") && ($(a.target).closest(".primary-header").length || b.click())
    }), $("#search-toggle").on("click", function() {
        $(".primary-search").toggle(10, function() {
            $(this).find("input").focus()
        })
    }), $(".window-share").on("click", function() {
        var a = $(this).attr("data-url");
        return newwindow = window.open(a, "name", "height=400,width=800"), window.focus && newwindow.focus(), !1
    }), $("#search_submit").on("click", function(a) {
        a.preventDefault();
        var b = $("#search_form"),
            c = b.find("input");
        if (!c.val()) return void c.attr("placeholder", "Search term required*");
        b.submit()
    })
});
