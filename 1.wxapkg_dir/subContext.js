	define("open/code.js", function (require, module, exports) {
		var Laya = window.Laya = function (t, e) {
			var i = {
				__internals: [],
				__packages: {},
				__classmap: {
					Object: Object,
					Function: Function,
					Array: Array,
					String: String
				},
				__sysClass: {
					object: "Object",
					array: "Array",
					string: "String",
					dictionary: "Dictionary"
				},
				__propun: {
					writable: !0,
					enumerable: !1,
					configurable: !0
				},
				__presubstr: String.prototype.substr,
				__substr: function (t, e) {
					return 1 == arguments.length ? i.__presubstr.call(this, t) : i.__presubstr.call(this, t, e > 0 ? e : this.length + e)
				},
				__init: function (t) {
					t.forEach(function (t) {
						t.__init$ && t.__init$()
					})
				},
				__isClass: function (t) {
					return t && (t.__isclass || t == Object || t == String || t == Array)
				},
				__newvec: function (t, e) {
					var i = [];
					i.length = t;
					for (var s = 0; s < t; s++) i[s] = e;
					return i
				},
				__extend: function (t, e) {
					function s() {
						i.un(this, "constructor", t)
					}
					for (var n in e)
						if (e.hasOwnProperty(n)) {
							var r = Object.getOwnPropertyDescriptor(e, n),
								o = r.get,
								a = r.set;
							o || a ? o && a ? Object.defineProperty(t, n, r) : (o && Object.defineProperty(t, n, o), a && Object.defineProperty(t, n, a)) : t[n] = e[n]
						} s.prototype = e.prototype, t.prototype = new s, i.un(t.prototype, "__imps", i.__copy({}, e.prototype.__imps))
				},
				__copy: function (t, e) {
					if (!e) return null;
					t = t || {};
					for (var i in e) t[i] = e[i];
					return t
				},
				__package: function (e, s) {
					if (!i.__packages[e]) {
						i.__packages[e] = !0;
						var n = t,
							r = e.split(".");
						if (r.length > 1)
							for (var o = 0, a = r.length - 1; o < a; o++) {
								var h = n[r[o]];
								n = h || (n[r[o]] = {})
							}
						n[r[r.length - 1]] || (n[r[r.length - 1]] = s || {})
					}
				},
				__hasOwnProperty: function (t, e) {
					function i(t, e) {
						if (Object.hasOwnProperty.call(e.prototype, t)) return !0;
						var s = e.prototype.__super;
						return null == s ? null : i(t, s)
					}
					return e = e || this, Object.hasOwnProperty.call(e, t) || i(t, e.__class)
				},
				__typeof: function (t, e) {
					if (!t || !e) return !1;
					if (e === String) return "string" == typeof t;
					if (e === Number) return "number" == typeof t;
					if (e.__interface__) e = e.__interface__;
					else if ("string" != typeof e) return t instanceof e;
					return t.__imps && t.__imps[e] || t.__class == e
				},
				__as: function (t, e) {
					return this.__typeof(t, e) ? t : null
				},
				__int: function (t) {
					return t ? parseInt(t) : 0
				},
				interface: function (e, s) {
					i.__package(e, {});
					var n = i.__internals,
						r = n[e] = n[e] || {
							self: e
						};
					if (s) {
						var o = s.split(",");
						r.extend = [];
						for (c = 0; c < o.length; c++) {
							var a = o[c];
							n[a] = n[a] || {
								self: a
							}, r.extend.push(n[a])
						}
					}
					for (var h = t, l = e.split("."), c = 0; c < l.length - 1; c++) h = h[l[c]];
					h[l[l.length - 1]] = {
						__interface__: e
					}
				},
				class: function (e, s, n, r) {
					if (n && i.__extend(e, n), s)
						if (i.__package(s, e), i.__classmap[s] = e, s.indexOf(".") > 0) {
							if (0 == s.indexOf("laya.")) {
								var o = s.split(".");
								r = r || o[o.length - 1], i[r] && console.log("Warning!,this class[" + r + "] already exist:", i[r]), i[r] = e
							}
						} else "Main" == s ? t.Main = e : (i[s] && console.log("Error!,this class[" + s + "] already exist:", i[s]), i[s] = e);
					var a = i.un,
						h = e.prototype;
					a(h, "hasOwnProperty", i.__hasOwnProperty), a(h, "__class", e), a(h, "__super", n), a(h, "__className", s), a(e, "__super", n), a(e, "__className", s), a(e, "__isclass", !0), a(e, "super", function (t) {
						this.__super.call(t)
					})
				},
				imps: function (t, e) {
					function s(t) {
						var e, r;
						if ((e = i.__internals[t]) && (n[t] = !0, r = e.extend))
							for (var o = 0; o < r.length; o++) s(r[o].self)
					}
					if (!e) return null;
					var n = t.__imps || i.un(t, "__imps", {});
					for (var r in e) s(r)
				},
				superSet: function (t, e, i, s) {
					var n = t.prototype["_$set_" + i];
					n && n.call(e, s)
				},
				superGet: function (t, e, i) {
					var s = t.prototype["_$get_" + i];
					return s ? s.call(e) : null
				},
				getset: function (t, e, s, n, r) {
					t ? (n && (e["_$GET_" + s] = n), r && (e["_$SET_" + s] = r)) : (n && i.un(e, "_$get_" + s, n), r && i.un(e, "_$set_" + s, r)), n && r ? Object.defineProperty(e, s, {
						get: n,
						set: r,
						enumerable: !1,
						configurable: !0
					}) : (n && Object.defineProperty(e, s, {
						get: n,
						enumerable: !1,
						configurable: !0
					}), r && Object.defineProperty(e, s, {
						set: r,
						enumerable: !1,
						configurable: !0
					}))
				},
				static: function (t, e) {
					for (var i = 0, s = e.length; i < s; i += 2) "length" == e[i] ? t.length = e[i + 1].call(t) : function () {
						var s = e[i],
							n = e[i + 1];
						Object.defineProperty(t, s, {
							get: function () {
								return delete this[s], this[s] = n.call(this)
							},
							set: function (t) {
								delete this[s], this[s] = t
							},
							enumerable: !0,
							configurable: !0
						})
					}()
				},
				un: function (t, e, s) {
					return s || (s = t[e]), i.__propun.value = s, Object.defineProperty(t, e, i.__propun), s
				},
				uns: function (t, e) {
					e.forEach(function (e) {
						i.un(t, e)
					})
				}
			};
			return t.console = t.console || {
				log: function () {}
			}, t.trace = t.console.log, Error.prototype.throwError = function () {
				throw arguments
			}, Object.defineProperty(Array.prototype, "fixed", {
				enumerable: !1
			}), i
		}(window, document);
		! function (t, e, i) {
			i.un, i.uns;
			var s = i.static,
				n = i.class,
				r = i.getset;
			i.__newvec;
			i.interface("laya.ui.IItem"), i.interface("laya.ui.ISelect"), i.interface("laya.runtime.IMarket"), i.interface("laya.filters.IFilter"), i.interface("laya.display.ILayout"), i.interface("laya.resource.IDispose"), i.interface("laya.runtime.IConchNode"), i.interface("laya.filters.IFilterAction"), i.interface("laya.runtime.ICPlatformClass");
			var o = function () {
					function e() {}
					return n(e, "laya.utils.RunDriver"), e.FILTER_ACTIONS = [], e.pixelRatio = -1, e._charSizeTestDiv = null, e.now = function () {
						return Date.now()
					}, e.getWindow = function () {
						return t
					}, e.getPixelRatio = function () {
						if (e.pixelRatio < 0) {
							var t = H.context,
								i = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
							(e.pixelRatio = (H.window.devicePixelRatio || 1) / i) < 1 && (e.pixelRatio = 1)
						}
						return e.pixelRatio
					}, e.getIncludeStr = function (t) {
						return null
					}, e.createShaderCondition = function (t) {
						var e = "(function() {return " + t + ";})";
						return i._runScript(e)
					}, e.fontMap = [], e.measureText = function (t, i) {
						var s = e.hanzi.test(t);
						if (s && e.fontMap[i]) return e.fontMap[i];
						var n = H.context;
						n.font = i;
						var r = n.measureText(t);
						return s && (e.fontMap[i] = r), r
					}, e.getWebGLContext = function (t) {}, e.beginFlush = function () {}, e.endFinish = function () {}, e.addToAtlas = null, e.flashFlushImage = function (t) {}, e.drawToCanvas = function (t, e, i, s, n, r) {
						var o = Nt.create("2D"),
							a = new F(i, s, o);
						return O.renders[e]._fun(t, a, n, r), o
					}, e.createParticleTemplate2D = null, e.createGLTextur = null, e.createWebGLContext2D = null, e.changeWebGLSize = function (t, e) {}, e.createRenderSprite = function (t, e) {
						return new O(t, e)
					}, e.createFilterAction = function (t) {
						return new C
					}, e.createGraphics = function () {
						return new _
					}, e.clear = function (t) {
						B._context.ctx.clear()
					}, e.cancelLoadByUrl = function (t) {}, e.clearAtlas = function (t) {}, e.isAtlas = function (t) {
						return !1
					}, e.addTextureToAtlas = function (t) {}, e.getTexturePixels = function (t, e, i, s, n) {
						return null
					}, e.skinAniSprite = function () {
						return null
					}, e.update3DLoop = function () {}, s(e, ["hanzi", function () {
						return this.hanzi = new RegExp("^[一-龥]$")
					}]), e
				}(),
				a = (r(1, i, "alertGlobalError", null, function (t) {
					var e = 0;
					H.window.onerror = t ? function (t, i, s, n, r) {
						e++ < 5 && r && alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + r.stack || r)
					} : null
				}), i.init = function (t, e, s) {
					for (var n = [], r = 2, o = arguments.length; r < o; r++) n.push(arguments[r]);
					if (!i._isinit) {
						ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = i._arrayBufferSlice), i._isinit = !0, H.__init__(), N.__init__(), _.__init__(), i.timer = new J, i.scaleTimer = new J, i.loader = new ft, it.__init__();
						for (var r = 0, a = n.length; r < a; r++) n[r].enable && n[r].enable();
						return p.__init__(), f.__init__(), D.__init__(), G.beginCheck(), i._currentStage = i.stage = new Ft, i.stage.conchModel && i.stage.conchModel.setRootNode(), i._getUrlPath(), i.render = new B(0, 0), i.stage.size(t, e), O.__init__(), y.__init__(), x.instance.__init__(i.stage, B.canvas), jt.__init__(), k.autoStopMusic = !0, E.__init__(), B.canvas
					}
				}, i._getUrlPath = function () {
					var t = H.window.location,
						e = t.pathname;
					e = ":" == e.charAt(2) ? e.substring(1) : e, R.rootPath = R.basePath = R.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname)
				}, i._arrayBufferSlice = function (t, e) {
					var i = new Uint8Array(this, t, e - t),
						s = new Uint8Array(i.length);
					return s.set(i), s.buffer
				}, i._runScript = function (t) {
					return H.window[i._evcode](t)
				}, i.stage = null, i.timer = null, i.scaleTimer = null, i.loader = null, i.version = "1.7.20.1beta", i.render = null, i._currentStage = null, i._isinit = !1, i.MiniAdpter = {
					init: function () {
						t.navigator && t.navigator.userAgent && t.navigator.userAgent.indexOf("MiniGame") > -1 && console.error("请先引用小游戏适配库laya.wxmini.js,详细教程：https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0")
					}
				}, s(i, ["conchMarket", function () {
					return this.conchMarket = t.conch ? conchMarket : null
				}, "PlatformClass", function () {
					return this.PlatformClass = t.PlatformClass
				}, "_evcode", function () {
					return this._evcode = "e" + String.fromCharCode(118) + "al"
				}]), function () {
					function t() {
						nt.init(!1, !0), i.init(738, 875), i.stage.scaleMode = "noscale", i.stage.screenMode = "none", i.stage.on("resize", this, this.onResize), this.onInit()
					}
					n(t, "App");
					var e = t.prototype;
					return e.onInit = function () {
						new _t, new xe, _t.I.addEvent("message", this, this.onMessage)
					}, e.onMessage = function () {
						i.stage.frameRate = "slow";
						var e = _t.I.message;
						switch (e.action) {
							case "showRankList":
								xe.I.updatePaiHang(e.data);
								break;
							case "nextPage":
								xe.I.nextPage();
								break;
							case "prePage":
								xe.I.prePage();
								break;
							case "paiHangG":
								xe.I.updatePaiHang("seven");
								break;
							case "sleep":
								i.stage.frameRate = "sleep";
								break;
							case "openid":
								t.openid = e.data;
								break;
							case "scoreMax":
								t.scoreMax = e.data;
								break;
							case "matrix":
								var s = new I;
								s.a = e.data.a, s.d = e.data.d, s.tx = e.data.tx, s.ty = e.data.ty, i.stage._canvasTransform = s
						}
					}, e.onResize = function () {}, t.openid = "", t.scoreMax = -1, t
				}()),
				h = function () {
					function t() {
						this._events = null
					}
					var e;
					n(t, "laya.events.EventDispatcher");
					var i = t.prototype;
					return i.hasListener = function (t) {
						return !!(this._events && this._events[t])
					}, i.event = function (t, e) {
						if (!this._events || !this._events[t]) return !1;
						var i = this._events[t];
						if (i.run) i.once && delete this._events[t], null != e ? i.runWith(e) : i.run();
						else {
							for (var s = 0, n = i.length; s < n; s++) {
								var r = i[s];
								r && (null != e ? r.runWith(e) : r.run()), r && !r.once || (i.splice(s, 1), s--, n--)
							}
							0 === i.length && this._events && delete this._events[t]
						}
						return !0
					}, i.on = function (t, e, i, s) {
						return this._createListener(t, e, i, s, !1)
					}, i.once = function (t, e, i, s) {
						return this._createListener(t, e, i, s, !0)
					}, i._createListener = function (t, i, s, n, r, o) {
						void 0 === o && (o = !0), o && this.off(t, i, s, r);
						var a = e.create(i || this, s, n, r);
						this._events || (this._events = {});
						var h = this._events;
						return h[t] ? h[t].run ? h[t] = [h[t], a] : h[t].push(a) : h[t] = a, this
					}, i.off = function (t, e, i, s) {
						if (void 0 === s && (s = !1), !this._events || !this._events[t]) return this;
						var n = this._events[t];
						if (null != i)
							if (n.run) e && n.caller !== e || n.method !== i || s && !n.once || (delete this._events[t], n.recover());
							else {
								for (var r = 0, o = 0, a = n.length; o < a; o++) {
									var h = n[o];
									h ? !h || e && h.caller !== e || h.method !== i || s && !h.once || (r++, n[o] = null, h.recover()) : r++
								}
								r === a && delete this._events[t]
							} return this
					}, i.offAll = function (t) {
						var e = this._events;
						if (!e) return this;
						if (t) this._recoverHandlers(e[t]), delete e[t];
						else {
							for (var i in e) this._recoverHandlers(e[i]);
							this._events = null
						}
						return this
					}, i._recoverHandlers = function (t) {
						if (t)
							if (t.run) t.recover();
							else
								for (var e = t.length - 1; e > -1; e--) t[e] && (t[e].recover(), t[e] = null)
					}, i.isMouseEvent = function (e) {
						return t.MOUSE_EVENTS[e]
					}, t.MOUSE_EVENTS = {
						rightmousedown: !0,
						rightmouseup: !0,
						rightclick: !0,
						mousedown: !0,
						mouseup: !0,
						mousemove: !0,
						mouseover: !0,
						mouseout: !0,
						click: !0,
						doubleclick: !0
					}, t.__init$ = function () {
						Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
							enumerable: !1,
							writable: !0
						}), e = function (t) {
							function e(t, i, s, n) {
								e.__super.call(this, t, i, s, n)
							}
							n(e, "", l);
							return e.prototype.recover = function () {
								this._id > 0 && (this._id = 0, e._pool.push(this.clear()))
							}, e.create = function (t, i, s, n) {
								return void 0 === n && (n = !0), e._pool.length ? e._pool.pop().setTo(t, i, s, n) : new e(t, i, s, n)
							}, e._pool = [], e
						}()
					}, t
				}(),
				l = function () {
					function t(t, e, i, s) {
						this.once = !1, this._id = 0, void 0 === s && (s = !1), this.setTo(t, e, i, s)
					}
					n(t, "laya.utils.Handler");
					var e = t.prototype;
					return e.setTo = function (e, i, s, n) {
						return this._id = t._gid++, this.caller = e, this.method = i, this.args = s, this.once = n, this
					}, e.run = function () {
						if (null == this.method) return null;
						var t = this._id,
							e = this.method.apply(this.caller, this.args);
						return this._id === t && this.once && this.recover(), e
					}, e.runWith = function (t) {
						if (null == this.method) return null;
						var e = this._id;
						if (null == t) var i = this.method.apply(this.caller, this.args);
						else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
						return this._id === e && this.once && this.recover(), i
					}, e.clear = function () {
						return this.caller = null, this.method = null, this.args = null, this
					}, e.recover = function () {
						this._id > 0 && (this._id = 0, t._pool.push(this.clear()))
					}, t.create = function (e, i, s, n) {
						return void 0 === n && (n = !0), t._pool.length ? t._pool.pop().setTo(e, i, s, n) : new t(e, i, s, n)
					}, t._pool = [], t._gid = 1, t
				}(),
				c = function () {
					function t() {
						this.evts = {}, this.data = null, this.params = null
					}
					n(t, "fly.evt.Evt");
					var e = t.prototype;
					return e.onMD = function (t, e, i) {
						void 0 === i && (i = !1), this.addEvent("mousedown", t, e)
					}, e.addEvent = function (t, e, i, s, n) {
						void 0 === s && (s = !1);
						var r = this.evts[t];
						return null == r && (this.evts[t] = r = {
							name: t,
							calls: []
						}), r.calls.push({
							arg: e,
							fun: i,
							once: s,
							params: n
						}), this
					}, e.removeAllEvents = function () {
						this.evts = {}
					}, e.remove = function (t) {
						this.evts[t] = null
					}, e.removeEvent = function (t, e, i) {
						var s = this.evts[t];
						if (null != s)
							for (var n, r = s.calls.length; r--;)(n = s.calls[r]).arg == e && n.fun == i && s.calls.splice(r, 1)
					}, e.event = function (t, e) {
						var i = this.evts[t];
						if (null != i)
							for (var s, n = i.calls.length; n--;) s = i.calls[n], this.params = s.params, this.data = e, s.fun.call(s.arg, this), s.once && (i.calls.splice(n, 1), 0 == i.calls.length && delete this.evts[t])
					}, t
				}(),
				u = function () {
					function t() {}
					return n(t, "Config"), t.WebGLTextCacheCount = 500, t.atlasEnable = !1, t.showCanvasMark = !1, t.animationInterval = 50, t.isAntialias = !1, t.isAlpha = !1, t.premultipliedAlpha = !0, t.isStencil = !0, t.preserveDrawingBuffer = !1, t
				}(),
				_ = function () {
					function e() {
						if (this._one = null, this._cmds = null, this._render = this._renderEmpty, B.isConchNode) {
							this._nativeObj = new t._conchGraphics, this.id = this._nativeObj.conchID
						}
					}
					n(e, "laya.display.Graphics");
					var s = e.prototype;
					return s.destroy = function () {
						this.clear(), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0), this._sp = null
					}, s.clear = function (t) {
						void 0 === t && (t = !1);
						var i = 0,
							s = 0;
						if (t) {
							var n = this._one;
							if (this._cmds) {
								for (s = this._cmds.length, i = 0; i < s; i++) !(n = this._cmds[i]) || n.callee !== B._context._drawTexture && n.callee !== B._context._drawTextureWithTransform || (n[0] = null, e._cache.push(n));
								this._cmds.length = 0
							} else n && (!n || n.callee !== B._context._drawTexture && n.callee !== B._context._drawTextureWithTransform || (n[0] = null, e._cache.push(n)))
						} else this._cmds = null;
						if (this._one = null, this._render = this._renderEmpty, this._sp && (this._sp._renderType &= -514), this._repaint(), this._vectorgraphArray) {
							for (i = 0, s = this._vectorgraphArray.length; i < s; i++) et.getInstance().deleteShape(this._vectorgraphArray[i]);
							this._vectorgraphArray.length = 0
						}
					}, s._clearBoundsCache = function () {
						this._graphicBounds && this._graphicBounds.reset()
					}, s._initGraphicBounds = function () {
						this._graphicBounds || (this._graphicBounds = new m, this._graphicBounds._graphics = this)
					}, s._repaint = function () {
						this._clearBoundsCache(), this._sp && this._sp.repaint()
					}, s._isOnlyOne = function () {
						return !this._cmds || 0 === this._cmds.length
					}, s.getBounds = function (t) {
						return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBounds(t)
					}, s.getBoundPoints = function (t) {
						return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t)
					}, s._addCmd = function (t) {
						this._cmds = this._cmds || [], t.callee = t.shift(), this._cmds.push(t)
					}, s.setFilters = function (t) {
						this._saveToCmd(B._context._setFilters, t)
					}, s.drawTexture = function (t, i, s, n, r, o, a) {
						if (void 0 === i && (i = 0), void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === a && (a = 1), !t || a < .01) return null;
						n || (n = t.sourceWidth), r || (r = t.sourceHeight), a = a < 0 ? 0 : a > 1 ? 1 : a;
						var h = !B.isWebGL && (H.onFirefox || H.onEdge || H.onIE || H.onSafari) ? .5 : 0,
							l = n / t.sourceWidth,
							c = r / t.sourceHeight;
						if (n = t.width * l, r = t.height * c, t.loaded && (n <= 0 || r <= 0)) return null;
						i += t.offsetX * l, s += t.offsetY * c, this._sp && (this._sp._renderType |= 512);
						var u;
						return i -= h, s -= h, n += 2 * h, r += 2 * h, e._cache.length ? ((u = e._cache.pop())[0] = t, u[1] = i, u[2] = s, u[3] = n, u[4] = r, u[5] = o, u[6] = a) : u = [t, i, s, n, r, o, a], u.callee = o || 1 != a ? B._context._drawTextureWithTransform : B._context._drawTexture, null != this._one || o || 1 != a ? this._saveToCmd(u.callee, u) : (this._one = u, this._render = this._renderOneImg), t.loaded || t.once("loaded", this, this._textureLoaded, [t, u]), this._repaint(), u
					}, s.cleanByTexture = function (t, e, i, s, n) {
						if (void 0 === s && (s = 0), void 0 === n && (n = 0), !t) return this.clear();
						if (this._one && this._render === this._renderOneImg) {
							s || (s = t.sourceWidth), n || (n = t.sourceHeight);
							var r = s / t.sourceWidth,
								o = n / t.sourceHeight;
							s = t.width * r, n = t.height * o, e += t.offsetX * r, i += t.offsetY * o, this._one[0] = t, this._one[1] = e, this._one[2] = i, this._one[3] = s, this._one[4] = n, this._repaint()
						} else this.clear(), t && this.drawTexture(t, e, i, s, n)
					}, s.drawTextures = function (t, e) {
						t && this._saveToCmd(B._context._drawTextures, [t, e])
					}, s.fillTexture = function (t, e, i, s, n, r, o) {
						if (void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === r && (r = "repeat"), t) {
							var a = [t, e, i, s, n, r, o || P.EMPTY, {}];
							t.loaded || t.once("loaded", this, this._textureLoaded, [t, a]), this._saveToCmd(B._context._fillTexture, a)
						}
					}, s._textureLoaded = function (t, e) {
						e[3] = e[3] || t.width, e[4] = e[4] || t.height, this._repaint()
					}, s.fillCircle = function (t, e, i, s, n, r, o) {
						i.bitmap.enableMerageInAtlas = !1;
						var a = new Float32Array(2 * (o + 1)),
							h = new Float32Array(2 * (o + 1)),
							l = new Uint16Array(3 * o),
							c = 2 * Math.PI / o,
							u = 0;
						a[0] = s, a[1] = n, h[0] = s / i.width, h[1] = n / i.height;
						for (var _ = 2, d = 0; d < o; d++) {
							var f = r * Math.cos(u) + s,
								p = r * Math.sin(u) + n;
							a[_] = f, a[_ + 1] = p, h[_] = f / i.width, h[_ + 1] = p / i.height, u += c, _ += 2
						}
						for (_ = 0, d = 0; d < o; d++) l[_++] = 0, l[_++] = d + 1, l[_++] = d + 2 >= o + 1 ? 1 : d + 2;
						this.drawTriangles(i, t, e, a, h, l)
					}, s.drawTriangles = function (t, e, i, s, n, r, o, a, h, l) {
						void 0 === a && (a = 1), this._saveToCmd(B._context.drawTriangles, [t, e, i, s, n, r, o, a, h, l])
					}, s._saveToCmd = function (t, e) {
						return this._sp && (this._sp._renderType |= 512), null == this._one ? (this._one = e, this._render = this._renderOne) : (this._sp && (this._sp._renderType &= -2), this._render = this._renderAll, 0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), e.callee = t, this._repaint(), e
					}, s.clipRect = function (t, e, i, s) {
						this._saveToCmd(B._context._clipRect, [t, e, i, s])
					}, s.fillText = function (t, e, i, s, n, r, o) {
						void 0 === o && (o = 0), this._saveToCmd(B._context._fillText, [t, e, i, s || p.defaultFont, n, r])
					}, s.fillBorderText = function (t, e, i, s, n, r, o, a) {
						this._saveToCmd(B._context._fillBorderText, [t, e, i, s || p.defaultFont, n, r, o, a])
					}, s.strokeText = function (t, e, i, s, n, r, o) {
						this._saveToCmd(B._context._strokeText, [t, e, i, s || p.defaultFont, n, r, o])
					}, s.alpha = function (t) {
						t = t < 0 ? 0 : t > 1 ? 1 : t, this._saveToCmd(B._context._alpha, [t])
					}, s.setAlpha = function (t) {
						t = t < 0 ? 0 : t > 1 ? 1 : t, this._saveToCmd(B._context._setAlpha, [t])
					}, s.transform = function (t, e, i) {
						void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(B._context._transform, [t, e, i])
					}, s.rotate = function (t, e, i) {
						void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(B._context._rotate, [t, e, i])
					}, s.scale = function (t, e, i, s) {
						void 0 === i && (i = 0), void 0 === s && (s = 0), this._saveToCmd(B._context._scale, [t, e, i, s])
					}, s.translate = function (t, e) {
						this._saveToCmd(B._context._translate, [t, e])
					}, s.save = function () {
						this._saveToCmd(B._context._save, [])
					}, s.restore = function () {
						this._saveToCmd(B._context._restore, [])
					}, s.replaceText = function (t) {
						this._repaint();
						var e = this._cmds;
						if (e) {
							for (var i = e.length - 1; i > -1; i--)
								if (this._isTextCmd(e[i].callee)) return e[i][0].toUpperCase ? e[i][0] = t : e[i][0].setText(t), !0
						} else if (this._one && this._isTextCmd(this._one.callee)) return this._one[0].toUpperCase ? this._one[0] = t : this._one[0].setText(t), !0;
						return !1
					}, s._isTextCmd = function (t) {
						return t === B._context._fillText || t === B._context._fillBorderText || t === B._context._strokeText
					}, s.replaceTextColor = function (t) {
						this._repaint();
						var e = this._cmds;
						if (e)
							for (var i = e.length - 1; i > -1; i--) this._isTextCmd(e[i].callee) && (e[i][4] = t, e[i][0].toUpperCase || (e[i][0].changed = !0));
						else this._one && this._isTextCmd(this._one.callee) && (this._one[4] = t, this._one[0].toUpperCase || (this._one[0].changed = !0))
					}, s.loadImage = function (t, e, s, n, r, o) {
						function a(t) {
							t && (h.drawTexture(t, e, s, n, r), null != o && o.call(h._sp, t))
						}
						var h = this;
						void 0 === e && (e = 0), void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === r && (r = 0);
						var c = xt.getRes(t);
						c ? a(c) : i.loader.load(t, l.create(null, a), null, "image")
					}, s._renderEmpty = function (t, e, i, s) {}, s._renderAll = function (t, e, i, s) {
						for (var n, r = this._cmds, o = 0, a = r.length; o < a; o++)(n = r[o]).callee.call(e, i, s, n)
					}, s._renderOne = function (t, e, i, s) {
						this._one.callee.call(e, i, s, this._one)
					}, s._renderOneImg = function (t, e, i, s) {
						this._one.callee.call(e, i, s, this._one), 2305 !== t._renderType && (t._renderType |= 1)
					}, s.drawLine = function (t, e, i, s, n, r) {
						void 0 === r && (r = 1);
						var o = 0;
						B.isWebGL && (o = et.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(o));
						var a = r % 2 == 0 ? 0 : .5,
							h = [t + a, e + a, i + a, s + a, n, r, o];
						this._saveToCmd(B._context._drawLine, h)
					}, s.drawLines = function (t, e, i, s, n) {
						void 0 === n && (n = 1);
						var r = 0;
						if (i && !(i.length < 4)) {
							B.isWebGL && (r = et.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(r));
							var o = n % 2 == 0 ? 0 : .5,
								a = [t + o, e + o, i, s, n, r];
							this._saveToCmd(B._context._drawLines, a)
						}
					}, s.drawCurves = function (t, e, i, s, n) {
						void 0 === n && (n = 1);
						var r = [t, e, i, s, n];
						this._saveToCmd(B._context._drawCurves, r)
					}, s.drawRect = function (t, e, i, s, n, r, o) {
						void 0 === o && (o = 1);
						var a = r ? o / 2 : 0,
							h = r ? o : 0,
							l = [t + a, e + a, i - h, s - h, n, r, o];
						this._saveToCmd(B._context._drawRect, l)
					}, s.drawCircle = function (t, e, i, s, n, r) {
						void 0 === r && (r = 1);
						var o = n ? r / 2 : 0,
							a = 0;
						B.isWebGL && (a = et.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(a));
						var h = [t, e, i - o, s, n, r, a];
						this._saveToCmd(B._context._drawCircle, h)
					}, s.drawPie = function (t, e, i, s, n, r, o, a) {
						void 0 === a && (a = 1);
						var h = o ? a / 2 : 0,
							l = o ? a : 0,
							c = 0;
						B.isWebGL && (c = et.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(c));
						var u = [t + h, e + h, i - l, s, n, r, o, a, c];
						u[3] = tt.toRadian(s), u[4] = tt.toRadian(n), this._saveToCmd(B._context._drawPie, u)
					}, s.drawPoly = function (t, e, i, s, n, r) {
						void 0 === r && (r = 1);
						var o = 0,
							a = !1;
						B.isWebGL && (o = et.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(o), a = !(i.length > 6));
						var h = n ? r % 2 == 0 ? 0 : .5 : 0,
							l = [t + h, e + h, i, s, n, r, o, a];
						this._saveToCmd(B._context._drawPoly, l)
					}, s.drawPath = function (t, e, i, s, n) {
						var r = [t, e, i, s, n];
						this._saveToCmd(B._context._drawPath, r)
					}, r(0, s, "cmds", function () {
						return this._cmds
					}, function (t) {
						this._sp && (this._sp._renderType |= 512), this._cmds = t, this._render = this._renderAll, this._repaint()
					}), e.__init__ = function () {
						if (B.isConchNode) {
							for (var t = laya.display.Graphics.prototype, e = H.window.ConchGraphics.prototype, i = ["clear", "destroy", "alpha", "rotate", "transform", "scale", "translate", "save", "restore", "clipRect", "blendMode", "fillText", "fillBorderText", "_fands", "drawRect", "drawCircle", "drawPie", "drawPoly", "drawPath", "drawImageM", "drawLine", "drawLines", "_drawPs", "drawCurves", "replaceText", "replaceTextColor", "_fillImage", "fillTexture", "setSkinMesh", "drawParticle", "drawImageS"], s = 0, n = i.length; s <= n; s++) {
								var r = i[s];
								t[r] = e[r]
							}
							t._saveToCmd = null, e.drawImageS && (t.drawTextures = function (t, e) {
								if (t && t.loaded && t.bitmap && t.source) {
									var i = t.uv,
										s = t.bitmap.width,
										n = t.bitmap.height;
									this.drawImageS(t.bitmap.source, i[0] * s, i[1] * n, (i[2] - i[0]) * s, (i[5] - i[3]) * n, t.offsetX, t.offsetY, t.width, t.height, e)
								}
							}), t.drawTexture = function (t, e, i, s, n, r, o) {
								if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === o && (o = 1), t)
									if (t.loaded) {
										if (t.loaded && t.bitmap && t.source && (s || (s = t.sourceWidth), n || (n = t.sourceHeight), o = o < 0 ? 0 : o > 1 ? 1 : o, s = s - t.sourceWidth + t.width, n = n - t.sourceHeight + t.height, !(s <= 0 || n <= 0))) {
											e += t.offsetX, i += t.offsetY;
											var a = t.uv,
												h = t.bitmap.width,
												l = t.bitmap.height;
											a[4] < a[0] && a[5] < a[1] ? this.drawImageM(t.bitmap.source, a[4] * h, a[5] * l, (a[0] - a[4]) * h, (a[1] - a[5]) * l, e, i, s, n, r, o) : this.drawImageM(t.bitmap.source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, e, i, s, n, r, o), this._repaint()
										}
									} else t.once("loaded", this, function () {
										this.drawTexture(t, e, i, s, n, r)
									})
							}, t.fillTexture = function (t, e, i, s, n, r, o) {
								if (void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === r && (r = "repeat"), t && t.loaded) {
									var a, h = B._context.ctx,
										l = t.bitmap.width,
										c = t.bitmap.height,
										u = t.uv;
									a = t.uv != wt.DEF_UV ? h.createPattern(t.bitmap.source, r, u[0] * l, u[1] * c, (u[2] - u[0]) * l, (u[5] - u[3]) * c) : h.createPattern(t.bitmap.source, r);
									var _ = 0,
										d = 0;
									o && (e += o.x % t.width, i += o.y % t.height, _ -= o.x % t.width, d -= o.y % t.height), this._fillImage(a, e, i, _, d, s, n)
								}
							}
						}
					}, e._cache = [], e
				}(),
				d = function () {
					function t() {
						this._texture = null, this._fontCharDic = {}, this._fontWidthMap = {}, this._complete = null, this._path = null, this._maxWidth = 0, this._spaceWidth = 10, this._padding = null, this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0
					}
					n(t, "laya.display.BitmapFont");
					var e = t.prototype;
					return e.loadFont = function (t, e) {
						this._path = t, this._complete = e, i.loader.load([{
							url: this._path,
							type: "xml"
						}, {
							url: this._path.replace(".fnt", ".png"),
							type: "image"
						}], l.create(this, this.onLoaded))
					}, e.onLoaded = function () {
						this.parseFont(xt.getRes(this._path), xt.getRes(this._path.replace(".fnt", ".png"))), this._complete && this._complete.runWith(this._texture ? this : null)
					}, e.parseFont = function (t, e) {
						if (null != t && null != e) {
							this._texture = e;
							var i = t.getElementsByTagName("info");
							if (!i[0].getAttributeNode) return this.parseFont2(t, e);
							this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
							var s = i[0].getAttributeNode("padding").nodeValue.split(",");
							this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
							var n;
							n = t.getElementsByTagName("char");
							var r = 0;
							for (r = 0; r < n.length; r++) {
								var o = n[r],
									a = parseInt(o.getAttributeNode("id").nodeValue),
									h = parseInt(o.getAttributeNode("xoffset").nodeValue) / 1,
									l = parseInt(o.getAttributeNode("yoffset").nodeValue) / 1,
									c = parseInt(o.getAttributeNode("xadvance").nodeValue) / 1,
									u = new L;
								u.x = parseInt(o.getAttributeNode("x").nodeValue), u.y = parseInt(o.getAttributeNode("y").nodeValue), u.width = parseInt(o.getAttributeNode("width").nodeValue), u.height = parseInt(o.getAttributeNode("height").nodeValue);
								var _ = wt.create(e, u.x, u.y, u.width, u.height, h, l);
								this._maxWidth = Math.max(this._maxWidth, c + this.letterSpacing), this._fontCharDic[a] = _, this._fontWidthMap[a] = c
							}
						}
					}, e.parseFont2 = function (t, e) {
						if (null != t && null != e) {
							this._texture = e;
							var i = t.getElementsByTagName("info");
							this.fontSize = parseInt(i[0].attributes.size.nodeValue);
							var s = i[0].attributes.padding.nodeValue.split(",");
							this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
							var n = t.getElementsByTagName("char"),
								r = 0;
							for (r = 0; r < n.length; r++) {
								var o = n[r].attributes,
									a = parseInt(o.id.nodeValue),
									h = parseInt(o.xoffset.nodeValue) / 1,
									l = parseInt(o.yoffset.nodeValue) / 1,
									c = parseInt(o.xadvance.nodeValue) / 1,
									u = new L;
								u.x = parseInt(o.x.nodeValue), u.y = parseInt(o.y.nodeValue), u.width = parseInt(o.width.nodeValue), u.height = parseInt(o.height.nodeValue);
								var _ = wt.create(e, u.x, u.y, u.width, u.height, h, l);
								this._maxWidth = Math.max(this._maxWidth, c + this.letterSpacing), this._fontCharDic[a] = _, this._fontWidthMap[a] = c
							}
						}
					}, e.getCharTexture = function (t) {
						return this._fontCharDic[t.charCodeAt(0)]
					}, e.destroy = function () {
						if (this._texture) {
							for (var t in this._fontCharDic) {
								var e = this._fontCharDic[t];
								e && e.destroy()
							}
							this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null
						}
					}, e.setSpaceWidth = function (t) {
						this._spaceWidth = t
					}, e.getCharWidth = function (t) {
						var e = t.charCodeAt(0);
						return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " == t ? this._spaceWidth + this.letterSpacing : 0
					}, e.getTextWidth = function (t) {
						for (var e = 0, i = 0, s = t.length; i < s; i++) e += this.getCharWidth(t.charAt(i));
						return e
					}, e.getMaxWidth = function () {
						return this._maxWidth
					}, e.getMaxHeight = function () {
						return this.fontSize
					}, e.drawText = function (t, e, i, s, n, r) {
						var o, a = this.getTextWidth(t),
							h = 0;
						"center" === n && (h = (r - a) / 2), "right" === n && (h = r - a);
						for (var l = 0, c = 0, u = t.length; c < u; c++)(o = this.getCharTexture(t.charAt(c))) && (e.graphics.drawTexture(o, i + l + h, s), l += this.getCharWidth(t.charAt(c)))
					}, t
				}(),
				f = function () {
					function t() {
						this.alpha = 1, this.visible = !0, this.scrollRect = null, this.blendMode = null, this._type = 0, this._tf = t._TF_EMPTY
					}
					n(t, "laya.display.css.Style");
					var e = t.prototype;
					return e.getTransform = function () {
						return this._tf
					}, e.setTransform = function (e) {
						this._tf = "none" !== e && e ? e : t._TF_EMPTY
					}, e.setTranslateX = function (e) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.translateX = e
					}, e.setTranslateY = function (e) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.translateY = e
					}, e.setScaleX = function (e) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.scaleX = e
					}, e.setScale = function (e, i) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.scaleX = e, this._tf.scaleY = i
					}, e.setScaleY = function (e) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.scaleY = e
					}, e.setRotate = function (e) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.rotate = e
					}, e.setSkewX = function (e) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.skewX = e
					}, e.setSkewY = function (e) {
						this._tf === t._TF_EMPTY && (this._tf = new g), this._tf.skewY = e
					}, e.destroy = function () {
						this.scrollRect = null
					}, e.render = function (t, e, i, s) {}, e.getCSSStyle = function () {
						return Tt.EMPTY
					}, e._enableLayout = function () {
						return !1
					}, r(0, e, "scaleX", function () {
						return this._tf.scaleX
					}, function (t) {
						this.setScaleX(t)
					}), r(0, e, "transform", function () {
						return this.getTransform()
					}, function (t) {
						this.setTransform(t)
					}), r(0, e, "translateX", function () {
						return this._tf.translateX
					}, function (t) {
						this.setTranslateX(t)
					}), r(0, e, "translateY", function () {
						return this._tf.translateY
					}, function (t) {
						this.setTranslateY(t)
					}), r(0, e, "scaleY", function () {
						return this._tf.scaleY
					}, function (t) {
						this.setScaleY(t)
					}), r(0, e, "block", function () {
						return 0 != (1 & this._type)
					}), r(0, e, "skewY", function () {
						return this._tf.skewY
					}, function (t) {
						this.setSkewY(t)
					}), r(0, e, "rotate", function () {
						return this._tf.rotate
					}, function (t) {
						this.setRotate(t)
					}), r(0, e, "skewX", function () {
						return this._tf.skewX
					}, function (t) {
						this.setSkewX(t)
					}), r(0, e, "paddingLeft", function () {
						return 0
					}), r(0, e, "paddingTop", function () {
						return 0
					}), r(0, e, "absolute", function () {
						return !0
					}), t.__init__ = function () {
						t._TF_EMPTY = new g, t.EMPTY = new t
					}, t.EMPTY = null, t._TF_EMPTY = null, t
				}(),
				p = function () {
					function t(e) {
						this._type = 0, this._weight = 0, this._decoration = null, this._text = null, this.indent = 0, this._color = U.create(t.defaultColor), this.family = t.defaultFamily, this.stroke = t._STROKE, this.size = t.defaultSize, e && e !== t.EMPTY && e.copyTo(this)
					}
					n(t, "laya.display.css.Font");
					var e = t.prototype;
					return e.set = function (t) {
						this._text = null;
						for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
							var n = e[i];
							switch (n) {
								case "italic":
									this.italic = !0;
									continue;
								case "bold":
									this.bold = !0;
									continue
							}
							n.indexOf("px") > 0 && (this.size = parseInt(n), this.family = e[i + 1], i++)
						}
					}, e.toString = function () {
						return this._text = "", this.italic && (this._text += "italic "), this.bold && (this._text += "bold "), this._text += this.size + "px " + this.family
					}, e.copyTo = function (e) {
						e._type = this._type, e._text = this._text, e._weight = this._weight, e._color = this._color, e.family = this.family, e.stroke = this.stroke != t._STROKE ? this.stroke.slice() : t._STROKE, e.indent = this.indent, e.size = this.size
					}, r(0, e, "password", function () {
						return 0 != (1024 & this._type)
					}, function (t) {
						t ? this._type |= 1024 : this._type &= -1025
					}), r(0, e, "color", function () {
						return this._color.strColor
					}, function (t) {
						this._color = U.create(t)
					}), r(0, e, "italic", function () {
						return 0 != (512 & this._type)
					}, function (t) {
						t ? this._type |= 512 : this._type &= -513
					}), r(0, e, "bold", function () {
						return 0 != (2048 & this._type)
					}, function (t) {
						t ? this._type |= 2048 : this._type &= -2049
					}), r(0, e, "weight", function () {
						return "" + this._weight
					}, function (t) {
						var e = 0;
						switch (t) {
							case "normal":
								break;
							case "bold":
								this.bold = !0, e = 700;
								break;
							case "bolder":
								e = 800;
								break;
							case "lighter":
								e = 100;
								break;
							default:
								e = parseInt(t)
						}
						this._weight = e, this._text = null
					}), r(0, e, "decoration", function () {
						return this._decoration ? this._decoration.value : null
					}, function (t) {
						var e = t.split(" ");
						switch (this._decoration || (this._decoration = {}), e[0]) {
							case "_":
								this._decoration.type = "underline";
								break;
							case "-":
								this._decoration.type = "line-through";
								break;
							case "overline":
								this._decoration.type = "overline";
								break;
							default:
								this._decoration.type = e[0]
						}
						e[1] && (this._decoration.color = U.create(e)), this._decoration.value = t
					}), t.__init__ = function () {
						t.EMPTY = new t(null)
					}, t.EMPTY = null, t.defaultColor = "#000000", t.defaultSize = 12, t.defaultFamily = "Arial", t.defaultFont = "12px Arial", t._STROKE = [0, "#000000"], t._ITALIC = 512, t._PASSWORD = 1024, t._BOLD = 2048, t
				}(),
				g = function () {
					function t() {
						this.translateX = 0, this.translateY = 0, this.scaleX = 1, this.scaleY = 1, this.rotate = 0, this.skewX = 0, this.skewY = 0
					}
					return n(t, "laya.display.css.TransformInfo"), t
				}(),
				m = function () {
					function t() {
						this._cacheBoundsType = !1
					}
					n(t, "laya.display.GraphicsBounds");
					var e = t.prototype;
					return e.destroy = function () {
						this._graphics = null, this._temp = null, this._rstBoundPoints = null, this._bounds = null
					}, e.reset = function () {
						this._temp && (this._temp.length = 0)
					}, e.getBounds = function (t) {
						return void 0 === t && (t = !1), (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = L._getWrapRec(this.getBoundPoints(t), this._bounds)), this._cacheBoundsType = t, this._bounds
					}, e.getBoundPoints = function (t) {
						return void 0 === t && (t = !1), (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), this._cacheBoundsType = t, this._rstBoundPoints = tt.copyArray(this._rstBoundPoints, this._temp)
					}, e._getCmdPoints = function (e) {
						void 0 === e && (e = !1);
						var i, s = B._context,
							n = this._graphics.cmds;
						if (i = this._temp || (this._temp = []), i.length = 0, n || null == this._graphics._one || (t._tempCmds.length = 0, t._tempCmds.push(this._graphics._one), n = t._tempCmds), !n) return i;
						var r;
						(r = t._tempMatrixArrays).length = 0;
						var o = t._initMatrix;
						o.identity();
						for (var a, h, l = t._tempMatrix, c = NaN, u = NaN, _ = NaN, d = NaN, f = NaN, p = NaN, g = 0, m = n.length; g < m; g++)
							if ((a = n[g]).callee) switch (a.callee) {
								case s._save:
								case 7:
									r.push(o), o = o.clone();
									break;
								case s._restore:
								case 8:
									o = r.pop();
									break;
								case s._scale:
								case 5:
									l.identity(), l.translate(-a[2], -a[3]), l.scale(a[0], a[1]), l.translate(a[2], a[3]), this._switchMatrix(o, l);
									break;
								case s._rotate:
								case 3:
									l.identity(), l.translate(-a[1], -a[2]), l.rotate(a[0]), l.translate(a[1], a[2]), this._switchMatrix(o, l);
									break;
								case s._translate:
								case 6:
									l.identity(), l.translate(a[0], a[1]), this._switchMatrix(o, l);
									break;
								case s._transform:
								case 4:
									l.identity(), l.translate(-a[1], -a[2]), l.concat(a[0]), l.translate(a[1], a[2]), this._switchMatrix(o, l);
									break;
								case 16:
								case 24:
									t._addPointArrToRst(i, L._getBoundPointS(a[0], a[1], a[2], a[3]), o);
									break;
								case 17:
									o.copyTo(l), l.concat(a[4]), t._addPointArrToRst(i, L._getBoundPointS(a[0], a[1], a[2], a[3]), l);
									break;
								case s._drawTexture:
									h = a[0], e ? a[3] && a[4] ? t._addPointArrToRst(i, L._getBoundPointS(a[1], a[2], a[3], a[4]), o) : (h = a[0], t._addPointArrToRst(i, L._getBoundPointS(a[1], a[2], h.width, h.height), o)) : (c = (a[3] || h.sourceWidth) / h.width, u = (a[4] || h.sourceHeight) / h.height, _ = c * h.sourceWidth, d = u * h.sourceHeight, f = h.offsetX > 0 ? h.offsetX : 0, p = h.offsetY > 0 ? h.offsetY : 0, f *= c, p *= u, t._addPointArrToRst(i, L._getBoundPointS(a[1] - f, a[2] - p, _, d), o));
									break;
								case s._fillTexture:
									a[3] && a[4] ? t._addPointArrToRst(i, L._getBoundPointS(a[1], a[2], a[3], a[4]), o) : (h = a[0], t._addPointArrToRst(i, L._getBoundPointS(a[1], a[2], h.width, h.height), o));
									break;
								case s._drawTextureWithTransform:
									var v;
									a[5] ? (o.copyTo(l), l.concat(a[5]), v = l) : v = o, e ? a[3] && a[4] ? t._addPointArrToRst(i, L._getBoundPointS(a[1], a[2], a[3], a[4]), v) : (h = a[0], t._addPointArrToRst(i, L._getBoundPointS(a[1], a[2], h.width, h.height), v)) : (h = a[0], c = (a[3] || h.sourceWidth) / h.width, u = (a[4] || h.sourceHeight) / h.height, _ = c * h.sourceWidth, d = u * h.sourceHeight, f = h.offsetX > 0 ? h.offsetX : 0, p = h.offsetY > 0 ? h.offsetY : 0, f *= c, p *= u, t._addPointArrToRst(i, L._getBoundPointS(a[1] - f, a[2] - p, _, d), v));
									break;
								case s._drawRect:
								case 13:
									t._addPointArrToRst(i, L._getBoundPointS(a[0], a[1], a[2], a[3]), o);
									break;
								case s._drawCircle:
								case s._fillCircle:
								case 14:
									t._addPointArrToRst(i, L._getBoundPointS(a[0] - a[2], a[1] - a[2], a[2] + a[2], a[2] + a[2]), o);
									break;
								case s._drawLine:
								case 20:
									t._tempPoints.length = 0;
									var y = NaN;
									y = .5 * a[5], a[0] == a[2] ? t._tempPoints.push(a[0] + y, a[1], a[2] + y, a[3], a[0] - y, a[1], a[2] - y, a[3]) : a[1] == a[3] ? t._tempPoints.push(a[0], a[1] + y, a[2], a[3] + y, a[0], a[1] - y, a[2], a[3] - y) : t._tempPoints.push(a[0], a[1], a[2], a[3]), t._addPointArrToRst(i, t._tempPoints, o);
									break;
								case s._drawCurves:
								case 22:
									t._addPointArrToRst(i, S.I.getBezierPoints(a[2]), o, a[0], a[1]);
									break;
								case s._drawPoly:
								case s._drawLines:
								case 18:
									t._addPointArrToRst(i, a[2], o, a[0], a[1]);
									break;
								case s._drawPath:
								case 19:
									t._addPointArrToRst(i, this._getPathPoints(a[2]), o, a[0], a[1]);
									break;
								case s._drawPie:
								case 15:
									t._addPointArrToRst(i, this._getPiePoints(a[0], a[1], a[2], a[3], a[4]), o)
							}
						return i.length > 200 ? i = tt.copyArray(i, L._getWrapRec(i)._getBoundPoints()) : i.length > 8 && (i = T.scanPList(i)), i
					}, e._switchMatrix = function (t, e) {
						e.concat(t), e.copyTo(t)
					}, e._getPiePoints = function (e, i, s, n, r) {
						var o = t._tempPoints;
						t._tempPoints.length = 0, o.push(e, i);
						var a = (r - n) % (2 * Math.PI) / 10,
							h = NaN,
							l = n;
						for (h = 0; h <= 10; h++) o.push(e + s * Math.cos(l), i + s * Math.sin(l)), l += a;
						return o
					}, e._getPathPoints = function (e) {
						var i = 0,
							s = 0,
							n = t._tempPoints;
						n.length = 0, s = e.length;
						var r;
						for (i = 0; i < s; i++)(r = e[i]).length > 1 && (n.push(r[1], r[2]), r.length > 3 && n.push(r[3], r[4]));
						return n
					}, t._addPointArrToRst = function (e, i, s, n, r) {
						void 0 === n && (n = 0), void 0 === r && (r = 0);
						var o = 0,
							a = 0;
						for (a = i.length, o = 0; o < a; o += 2) t._addPointToRst(e, i[o] + n, i[o + 1] + r, s)
					}, t._addPointToRst = function (t, e, i, s) {
						var n = P.TEMP;
						n.setTo(e || 0, i || 0), s.transformPoint(n), t.push(n.x, n.y)
					}, t._tempPoints = [], t._tempMatrixArrays = [], t._tempCmds = [], s(t, ["_tempMatrix", function () {
						return this._tempMatrix = new I
					}, "_initMatrix", function () {
						return this._initMatrix = new I
					}]), t
				}(),
				v = function () {
					function t() {}
					n(t, "laya.events.Event");
					var e = t.prototype;
					return e.setTo = function (t, e, i) {
						return this.type = t, this.currentTarget = e, this.target = i, this
					}, e.stopPropagation = function () {
						this._stoped = !0
					}, r(0, e, "stageY", function () {
						return i.stage.mouseY
					}), r(0, e, "charCode", function () {
						return this.nativeEvent.charCode
					}), r(0, e, "touches", function () {
						var t = this.nativeEvent.touches;
						if (t)
							for (var e = i.stage, s = 0, n = t.length; s < n; s++) {
								var r = t[s],
									o = P.TEMP;
								o.setTo(r.clientX, r.clientY), e._canvasTransform.invertTransformPoint(o), e.transform.invertTransformPoint(o), r.stageX = o.x, r.stageY = o.y
							}
						return t
					}), r(0, e, "keyLocation", function () {
						return this.nativeEvent.keyLocation
					}), r(0, e, "ctrlKey", function () {
						return this.nativeEvent.ctrlKey
					}), r(0, e, "altKey", function () {
						return this.nativeEvent.altKey
					}), r(0, e, "shiftKey", function () {
						return this.nativeEvent.shiftKey
					}), r(0, e, "stageX", function () {
						return i.stage.mouseX
					}), t.EMPTY = new t, t.MOUSE_DOWN = "mousedown", t.MOUSE_UP = "mouseup", t.CLICK = "click", t.RIGHT_MOUSE_DOWN = "rightmousedown", t.RIGHT_MOUSE_UP = "rightmouseup", t.RIGHT_CLICK = "rightclick", t.MOUSE_MOVE = "mousemove", t.MOUSE_OVER = "mouseover", t.MOUSE_OUT = "mouseout", t.MOUSE_WHEEL = "mousewheel", t.ROLL_OVER = "mouseover", t.ROLL_OUT = "mouseout", t.DOUBLE_CLICK = "doubleclick", t.CHANGE = "change", t.CHANGED = "changed", t.RESIZE = "resize", t.ADDED = "added", t.REMOVED = "removed", t.DISPLAY = "display", t.UNDISPLAY = "undisplay", t.ERROR = "error", t.COMPLETE = "complete", t.LOADED = "loaded", t.PROGRESS = "progress", t.INPUT = "input", t.RENDER = "render", t.OPEN = "open", t.MESSAGE = "message", t.CLOSE = "close", t.KEY_DOWN = "keydown", t.KEY_PRESS = "keypress", t.KEY_UP = "keyup", t.FRAME = "enterframe", t.DRAG_START = "dragstart", t.DRAG_MOVE = "dragmove", t.DRAG_END = "dragend", t.ENTER = "enter", t.SELECT = "select", t.BLUR = "blur", t.FOCUS = "focus", t.VISIBILITY_CHANGE = "visibilitychange", t.FOCUS_CHANGE = "focuschange", t.PLAYED = "played", t.PAUSED = "paused", t.STOPPED = "stopped", t.START = "start", t.END = "end", t.ENABLE_CHANGED = "enablechanged", t.ACTIVE_IN_HIERARCHY_CHANGED = "activeinhierarchychanged", t.COMPONENT_ADDED = "componentadded", t.COMPONENT_REMOVED = "componentremoved", t.LAYER_CHANGED = "layerchanged", t.HIERARCHY_LOADED = "hierarchyloaded", t.RECOVERED = "recovered", t.RELEASED = "released", t.LINK = "link", t.LABEL = "label", t.FULL_SCREEN_CHANGE = "fullscreenchange", t.DEVICE_LOST = "devicelost", t.MESH_CHANGED = "meshchanged", t.MATERIAL_CHANGED = "materialchanged", t.WORLDMATRIX_NEEDCHANGE = "worldmatrixneedchanged", t.ANIMATION_CHANGED = "animationchanged", t.TRIGGER_ENTER = "triggerenter", t.TRIGGER_STAY = "triggerstay", t.TRIGGER_EXIT = "triggerexit", t.TRAIL_FILTER_CHANGE = "trailfilterchange", t.DOMINO_FILTER_CHANGE = "dominofilterchange", t
				}(),
				y = function () {
					function t() {}
					return n(t, "laya.events.KeyBoardManager"), t.__init__ = function () {
						t._addEvent("keydown"), t._addEvent("keypress"), t._addEvent("keyup")
					}, t._addEvent = function (t) {
						H.document.addEventListener(t, function (e) {
							laya.events.KeyBoardManager._dispatch(e, t)
						}, !0)
					}, t._dispatch = function (e, s) {
						if (t.enabled) {
							t._event._stoped = !1, t._event.nativeEvent = e, t._event.keyCode = e.keyCode || e.which || e.charCode, "keydown" === s ? t._pressKeys[t._event.keyCode] = !0 : "keyup" === s && (t._pressKeys[t._event.keyCode] = null);
							for (var n = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = n; r;) r.event(s, t._event.setTo(s, r, n)), r = r.parent
						}
					}, t.hasKeyDown = function (e) {
						return t._pressKeys[e]
					}, t._pressKeys = {}, t.enabled = !0, s(t, ["_event", function () {
						return this._event = new v
					}]), t
				}(),
				x = function () {
					function t() {
						this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, this.mouseMoveAccuracy = 2, this._stage = null, this._target = null, this._lastMoveTimer = 0, this._isLeftMouse = !1, this._eventList = [], this._touchIDs = {}, this._id = 1, this._tTouchID = 0, this._event = new v, this._matrix = new I, this._point = new P, this._rect = new L, this._prePoint = new P, this._curTouchID = NaN
					}
					n(t, "laya.events.MouseManager");
					var e = t.prototype;
					return e.__init__ = function (e, i) {
						var s = this;
						this._stage = e;
						var n = this,
							r = this._eventList;
						i.oncontextmenu = function (e) {
							if (t.enabled) return !1
						}, i.addEventListener("mousedown", function (e) {
							t.enabled && (H.onIE || e.preventDefault(), r.push(e), n.mouseDownTime = H.now())
						}), i.addEventListener("mouseup", function (e) {
							t.enabled && (e.preventDefault(), r.push(e), n.mouseDownTime = -H.now())
						}, !0), i.addEventListener("mousemove", function (e) {
							if (t.enabled) {
								e.preventDefault();
								var i = H.now();
								if (i - n._lastMoveTimer < 10) return;
								n._lastMoveTimer = i, r.push(e)
							}
						}, !0), i.addEventListener("mouseout", function (e) {
							t.enabled && r.push(e)
						}), i.addEventListener("mouseover", function (e) {
							t.enabled && r.push(e)
						}), i.addEventListener("touchstart", function (e) {
							t.enabled && (r.push(e), t._isFirstTouch || jt.isInputting || e.preventDefault(), n.mouseDownTime = H.now())
						}), i.addEventListener("touchend", function (e) {
							t.enabled ? (t._isFirstTouch || jt.isInputting || e.preventDefault(), t._isFirstTouch = !1, r.push(e), n.mouseDownTime = -H.now()) : s._curTouchID = NaN
						}, !0), i.addEventListener("touchmove", function (e) {
							t.enabled && (e.preventDefault(), r.push(e))
						}, !0), i.addEventListener("touchcancel", function (e) {
							t.enabled ? (e.preventDefault(), r.push(e)) : s._curTouchID = NaN
						}, !0), i.addEventListener("mousewheel", function (e) {
							t.enabled && r.push(e)
						}), i.addEventListener("DOMMouseScroll", function (e) {
							t.enabled && r.push(e)
						})
					}, e.initEvent = function (t, e) {
						this._event._stoped = !1, this._event.nativeEvent = e || t, this._target = null, this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform.invertTransformPoint(this._point), this.mouseX = this._point.x, this.mouseY = this._point.y, this._event.touchId = t.identifier || 0, this._tTouchID = this._event.touchId;
						var i;
						(i = w.I._event)._stoped = !1, i.nativeEvent = this._event.nativeEvent, i.touchId = this._event.touchId
					}, e.checkMouseWheel = function (t) {
						this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
						for (var e = w.I.getLastOvers(), i = 0, s = e.length; i < s; i++) {
							var n = e[i];
							n.event("mousewheel", this._event.setTo("mousewheel", n, this._target))
						}
					}, e.onMouseMove = function (t) {
						w.I.onMouseMove(t, this._tTouchID)
					}, e.onMouseDown = function (t) {
						if (jt.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
							var e = i.stage.focus._tf || i.stage.focus,
								s = t._tf || t;
							s instanceof laya.display.Input && s.multiline == e.multiline ? e._focusOut() : e.focus = !1
						}
						w.I.onMouseDown(t, this._tTouchID, this._isLeftMouse)
					}, e.onMouseUp = function (t) {
						w.I.onMouseUp(t, this._tTouchID, this._isLeftMouse)
					}, e.check = function (t, e, i, s) {
						this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
						var n = t.scrollRect;
						if (n && (this._rect.setTo(n.x, n.y, n.width, n.height), !this._rect.contains(e, i))) return !1;
						if (!this.disableMouseEvent) {
							if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
							for (var r = t._childs.length - 1; r > -1; r--) {
								var o = t._childs[r];
								if (!o.destroyed && o.mouseEnabled && o.visible && this.check(o, e, i, s)) return !0
							}
						}
						var a = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
						return a ? (this._target = t, s.call(this, t)) : s === this.onMouseUp && t === this._stage && (this._target = this._stage, s.call(this, this._target)), a
					}, e.hitTest = function (t, e, i) {
						var s = !1;
						if (t.scrollRect && (e -= t.scrollRect.x, i -= t.scrollRect.y), t.hitArea instanceof laya.utils.HitArea) return t.hitArea.isHit(e, i);
						if (t.width > 0 && t.height > 0 || t.mouseThrough || t.hitArea)
							if (t.mouseThrough) s = t.getGraphicBounds().contains(e, i);
							else {
								var n = this._rect;
								t.hitArea ? n = t.hitArea : n.setTo(0, 0, t.width, t.height), s = n.contains(e, i)
							} return s
					}, e.runEvent = function () {
						var e = this._eventList.length;
						if (e) {
							for (var i, s = 0, n = 0, r = 0; s < e;) {
								var o = this._eventList[s];
								switch ("mousemove" !== o.type && (this._prePoint.x = this._prePoint.y = -1e6), o.type) {
									case "mousedown":
										this._touchIDs[0] = this._id++, t._isTouchRespond ? t._isTouchRespond = !1 : (this._isLeftMouse = 0 === o.button, this.initEvent(o), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseDown));
										break;
									case "mouseup":
										this._isLeftMouse = 0 === o.button, this.initEvent(o), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseUp);
										break;
									case "mousemove":
										Math.abs(this._prePoint.x - o.clientX) + Math.abs(this._prePoint.y - o.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = o.clientX, this._prePoint.y = o.clientY, this.initEvent(o), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseMove));
										break;
									case "touchstart":
										t._isTouchRespond = !0, this._isLeftMouse = !0;
										var a = o.changedTouches;
										for (n = 0, r = a.length; n < r; n++) i = a[n], (t.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = i.identifier, this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[i.identifier] = this._id++, this.initEvent(i, o), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseDown));
										break;
									case "touchend":
									case "touchcancel":
										t._isTouchRespond = !0, this._isLeftMouse = !0;
										var h = o.changedTouches;
										for (n = 0, r = h.length; n < r; n++)
											if (i = h[n], t.multiTouchEnabled || i.identifier == this._curTouchID) {
												this._curTouchID = NaN, this.initEvent(i, o);
												this.check(this._stage, this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null)
											} break;
									case "touchmove":
										var l = o.changedTouches;
										for (n = 0, r = l.length; n < r; n++) i = l[n], (t.multiTouchEnabled || i.identifier == this._curTouchID) && (this.initEvent(i, o), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseMove));
										break;
									case "wheel":
									case "mousewheel":
									case "DOMMouseScroll":
										this.checkMouseWheel(o);
										break;
									case "mouseout":
										w.I.stageMouseOut();
										break;
									case "mouseover":
										this._stage.event("mouseover", this._event.setTo("mouseover", this._stage, this._stage))
								}
								s++
							}
							this._eventList.length = 0
						}
					}, t.enabled = !0, t.multiTouchEnabled = !0, t._isTouchRespond = !1, t._isFirstTouch = !0, s(t, ["instance", function () {
						return this.instance = new t
					}]), t
				}(),
				w = function () {
					function t() {
						this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, this._lastClickTime = 0, this._event = new v
					}
					n(t, "laya.events.TouchManager");
					var e = t.prototype;
					return e._clearTempArrs = function () {
						t._oldArr.length = 0, t._newArr.length = 0, t._tEleArr.length = 0
					}, e.getTouchFromArr = function (t, e) {
						var i = 0,
							s = 0;
						s = e.length;
						var n;
						for (i = 0; i < s; i++)
							if ((n = e[i]).id == t) return n;
						return null
					}, e.removeTouchFromArr = function (t, e) {
						var i = 0;
						for (i = e.length - 1; i >= 0; i--) e[i].id == t && e.splice(i, 1)
					}, e.createTouchO = function (t, e) {
						var i;
						return i = q.getItem("TouchData") || {}, i.id = e, i.tar = t, i
					}, e.onMouseDown = function (e, i, s) {
						if (void 0 === s && (s = !1), this.enable) {
							var n, r, o;
							n = this.getTouchFromArr(i, this.preOvers), o = this.getEles(e, null, t._tEleArr), n ? n.tar = e : (r = this.createTouchO(e, i), this.preOvers.push(r)), H.onMobile && this.sendEvents(o, "mouseover", i);
							var a;
							a = s ? this.preDowns : this.preRightDowns, (n = this.getTouchFromArr(i, a)) ? n.tar = e : (r = this.createTouchO(e, i), a.push(r)), this.sendEvents(o, s ? "mousedown" : "rightmousedown", i), this._clearTempArrs()
						}
					}, e.sendEvents = function (t, e, i) {
						void 0 === i && (i = 0);
						var s = 0,
							n = 0;
						n = t.length, this._event._stoped = !1;
						var r;
						r = t[0];
						var o;
						for (s = 0; s < n; s++) {
							if ((o = t[s]).destroyed) return;
							if (o.event(e, this._event.setTo(e, o, r)), this._event._stoped) break
						}
					}, e.getEles = function (t, e, i) {
						for (i ? i.length = 0 : i = []; t && t != e;) i.push(t), t = t.parent;
						return i
					}, e.checkMouseOutAndOverOfMove = function (e, i, s) {
						if (void 0 === s && (s = 0), i != e) {
							var n, r, o = 0,
								a = 0;
							if (i.contains(e)) r = this.getEles(e, i, t._tEleArr), this.sendEvents(r, "mouseover", s);
							else if (e.contains(i)) r = this.getEles(i, e, t._tEleArr), this.sendEvents(r, "mouseout", s);
							else {
								(r = t._tEleArr).length = 0;
								var h;
								h = this.getEles(i, null, t._oldArr);
								var l;
								l = this.getEles(e, null, t._newArr), a = h.length;
								var c = 0;
								for (o = 0; o < a; o++) {
									if (n = h[o], (c = l.indexOf(n)) >= 0) {
										l.splice(c, l.length - c);
										break
									}
									r.push(n)
								}
								r.length > 0 && this.sendEvents(r, "mouseout", s), l.length > 0 && this.sendEvents(l, "mouseover", s)
							}
						}
					}, e.onMouseMove = function (e, i) {
						if (this.enable) {
							var s, n;
							(s = this.getTouchFromArr(i, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(e, s.tar), s.tar = e, n = this.getEles(e, null, t._tEleArr)) : (n = this.getEles(e, null, t._tEleArr), this.sendEvents(n, "mouseover", i), this.preOvers.push(this.createTouchO(e, i))), this.sendEvents(n, "mousemove", i), this._clearTempArrs()
						}
					}, e.getLastOvers = function () {
						return t._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, t._tEleArr) : (t._tEleArr.push(i.stage), t._tEleArr)
					}, e.stageMouseOut = function () {
						var t;
						t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, "mouseout", 0)
					}, e.onMouseUp = function (e, i, s) {
						if (void 0 === s && (s = !1), this.enable) {
							var n, r, o, a, h, l = 0,
								c = 0,
								u = H.onMobile;
							r = this.getEles(e, null, t._tEleArr), this.sendEvents(r, s ? "mouseup" : "rightmouseup", i);
							var _;
							if (_ = s ? this.preDowns : this.preRightDowns, n = this.getTouchFromArr(i, _)) {
								var d = !1,
									f = H.now();
								if (d = f - this._lastClickTime < 300, this._lastClickTime = f, e == n.tar) h = r;
								else
									for (o = this.getEles(n.tar, null, t._oldArr), (h = t._newArr).length = 0, c = o.length, l = 0; l < c; l++) a = o[l], r.indexOf(a) >= 0 && h.push(a);
								h.length > 0 && this.sendEvents(h, s ? "click" : "rightclick", i), s && d && this.sendEvents(h, "doubleclick", i), this.removeTouchFromArr(i, _), n.tar = null, q.recover("TouchData", n)
							} else;
							(n = this.getTouchFromArr(i, this.preOvers)) && u && ((h = this.getEles(n.tar, null, h)) && h.length > 0 && this.sendEvents(h, "mouseout", i), this.removeTouchFromArr(i, this.preOvers), n.tar = null, q.recover("TouchData", n)), this._clearTempArrs()
						}
					}, t._oldArr = [], t._newArr = [], t._tEleArr = [], s(t, ["I", function () {
						return this.I = new t
					}]), t
				}(),
				b = function () {
					function t() {
						this._action = null
					}
					n(t, "laya.filters.Filter");
					var e = t.prototype;
					return i.imps(e, {
						"laya.filters.IFilter": !0
					}), e.callNative = function (t) {}, r(0, e, "type", function () {
						return -1
					}), r(0, e, "action", function () {
						return this._action
					}), t.BLUR = 16, t.COLOR = 32, t.GLOW = 8, t._filterStart = null, t._filterEnd = null, t._EndTarget = null, t._recycleScope = null, t._filter = null, t._useSrc = null, t._endSrc = null, t._useOut = null, t._endOut = null, t
				}(),
				C = function () {
					function t() {
						this.data = null
					}
					n(t, "laya.filters.ColorFilterAction");
					var e = t.prototype;
					return i.imps(e, {
						"laya.filters.IFilterAction": !0
					}), e.apply = function (t) {
						var e = t.ctx.ctx,
							i = t.ctx.ctx.canvas;
						if (0 == i.width || 0 == i.height) return i;
						for (var s, n = e.getImageData(0, 0, i.width, i.height), r = n.data, o = 0, a = r.length; o < a; o += 4) s = this.getColor(r[o], r[o + 1], r[o + 2], r[o + 3]), 0 != r[o + 3] && (r[o] = s[0], r[o + 1] = s[1], r[o + 2] = s[2], r[o + 3] = s[3]);
						return e.putImageData(n, 0, 0), t
					}, e.getColor = function (t, e, i, s) {
						var n = [];
						if (this.data._mat && this.data._alpha) {
							var r = this.data._mat,
								o = this.data._alpha;
							n[0] = r[0] * t + r[1] * e + r[2] * i + r[3] * s + o[0], n[1] = r[4] * t + r[5] * e + r[6] * i + r[7] * s + o[1], n[2] = r[8] * t + r[9] * e + r[10] * i + r[11] * s + o[2], n[3] = r[12] * t + r[13] * e + r[14] * i + r[15] * s + o[3]
						}
						return n
					}, t
				}(),
				S = function () {
					function t() {
						this._controlPoints = [new P, new P, new P], this._calFun = this.getPoint2
					}
					n(t, "laya.maths.Bezier");
					var e = t.prototype;
					return e._switchPoint = function (t, e) {
						var i = this._controlPoints.shift();
						i.setTo(t, e), this._controlPoints.push(i)
					}, e.getPoint2 = function (t, e) {
						var i = this._controlPoints[0],
							s = this._controlPoints[1],
							n = this._controlPoints[2],
							r = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * s.x + Math.pow(t, 2) * n.x,
							o = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * s.y + Math.pow(t, 2) * n.y;
						e.push(r, o)
					}, e.getPoint3 = function (t, e) {
						var i = this._controlPoints[0],
							s = this._controlPoints[1],
							n = this._controlPoints[2],
							r = this._controlPoints[3],
							o = Math.pow(1 - t, 3) * i.x + 3 * s.x * t * (1 - t) * (1 - t) + 3 * n.x * t * t * (1 - t) + r.x * Math.pow(t, 3),
							a = Math.pow(1 - t, 3) * i.y + 3 * s.y * t * (1 - t) * (1 - t) + 3 * n.y * t * t * (1 - t) + r.y * Math.pow(t, 3);
						e.push(o, a)
					}, e.insertPoints = function (t, e) {
						var i = NaN,
							s = NaN;
						for (s = 1 / (t = t > 0 ? t : 5), i = 0; i <= 1; i += s) this._calFun(i, e)
					}, e.getBezierPoints = function (t, e, i) {
						void 0 === e && (e = 5), void 0 === i && (i = 2);
						var s = 0,
							n = 0;
						if ((n = t.length) < 2 * (i + 1)) return [];
						var r;
						switch (r = [], i) {
							case 2:
								this._calFun = this.getPoint2;
								break;
							case 3:
								this._calFun = this.getPoint3;
								break;
							default:
								return []
						}
						for (; this._controlPoints.length <= i;) this._controlPoints.push(new P);
						for (s = 0; s < 2 * i; s += 2) this._switchPoint(t[s], t[s + 1]);
						for (s = 2 * i; s < n; s += 2) this._switchPoint(t[s], t[s + 1]), s / 2 % i == 0 && this.insertPoints(e, r);
						return r
					}, s(t, ["I", function () {
						return this.I = new t
					}]), t
				}(),
				T = function () {
					function t() {}
					return n(t, "laya.maths.GrahamScan"), t.multiply = function (t, e, i) {
						return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y)
					}, t.dis = function (t, e) {
						return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)
					}, t._getPoints = function (e, i, s) {
						for (void 0 === i && (i = !1), t._mPointList || (t._mPointList = []); t._mPointList.length < e;) t._mPointList.push(new P);
						return s || (s = []), s.length = 0, i ? t.getFrom(s, t._mPointList, e) : t.getFromR(s, t._mPointList, e), s
					}, t.getFrom = function (t, e, i) {
						var s = 0;
						for (s = 0; s < i; s++) t.push(e[s]);
						return t
					}, t.getFromR = function (t, e, i) {
						var s = 0;
						for (s = 0; s < i; s++) t.push(e.pop());
						return t
					}, t.pListToPointList = function (e, i) {
						void 0 === i && (i = !1);
						var s = 0,
							n = e.length / 2,
							r = t._getPoints(n, i, t._tempPointList);
						for (s = 0; s < n; s++) r[s].setTo(e[s + s], e[s + s + 1]);
						return r
					}, t.pointListToPlist = function (e) {
						var i, s = 0,
							n = e.length,
							r = t._temPList;
						for (r.length = 0, s = 0; s < n; s++) i = e[s], r.push(i.x, i.y);
						return r
					}, t.scanPList = function (e) {
						return tt.copyArray(e, t.pointListToPlist(t.scan(t.pListToPointList(e, !0))))
					}, t.scan = function (e) {
						var i, s, n, r = 0,
							o = 0,
							a = 0,
							h = e.length,
							l = {};
						for ((s = t._temArr).length = 0, r = (h = e.length) - 1; r >= 0; r--) n = (i = e[r]).x + "_" + i.y, l.hasOwnProperty(n) || (l[n] = !0, s.push(i));
						for (h = s.length, tt.copyArray(e, s), r = 1; r < h; r++)(e[r].y < e[a].y || e[r].y == e[a].y && e[r].x < e[a].x) && (a = r);
						for (i = e[0], e[0] = e[a], e[a] = i, r = 1; r < h - 1; r++) {
							for (a = r, o = r + 1; o < h; o++)(t.multiply(e[o], e[a], e[0]) > 0 || 0 == t.multiply(e[o], e[a], e[0]) && t.dis(e[0], e[o]) < t.dis(e[0], e[a])) && (a = o);
							i = e[r], e[r] = e[a], e[a] = i
						}
						if (s = t._temArr, s.length = 0, e.length < 3) return tt.copyArray(s, e);
						for (s.push(e[0], e[1], e[2]), r = 3; r < h; r++) {
							for (; s.length >= 2 && t.multiply(e[r], s[s.length - 1], s[s.length - 2]) >= 0;) s.pop();
							e[r] && s.push(e[r])
						}
						return s
					}, t._mPointList = null, t._tempPointList = [], t._temPList = [], t._temArr = [], t
				}(),
				M = function () {
					function t() {}
					return n(t, "laya.maths.MathUtil"), t.subtractVector3 = function (t, e, i) {
						i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2]
					}, t.lerp = function (t, e, i) {
						return t * (1 - i) + e * i
					}, t.scaleVector3 = function (t, e, i) {
						i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e
					}, t.lerpVector3 = function (t, e, i, s) {
						var n = t[0],
							r = t[1],
							o = t[2];
						s[0] = n + i * (e[0] - n), s[1] = r + i * (e[1] - r), s[2] = o + i * (e[2] - o)
					}, t.lerpVector4 = function (t, e, i, s) {
						var n = t[0],
							r = t[1],
							o = t[2],
							a = t[3];
						s[0] = n + i * (e[0] - n), s[1] = r + i * (e[1] - r), s[2] = o + i * (e[2] - o), s[3] = a + i * (e[3] - a)
					}, t.slerpQuaternionArray = function (t, e, i, s, n, r, o) {
						var a, h, l, c, u, _ = t[e + 0],
							d = t[e + 1],
							f = t[e + 2],
							p = t[e + 3],
							g = i[s + 0],
							m = i[s + 1],
							v = i[s + 2],
							y = i[s + 3];
						return (h = _ * g + d * m + f * v + p * y) < 0 && (h = -h, g = -g, m = -m, v = -v, y = -y), 1 - h > 1e-6 ? (a = Math.acos(h), l = Math.sin(a), c = Math.sin((1 - n) * a) / l, u = Math.sin(n * a) / l) : (c = 1 - n, u = n), r[o + 0] = c * _ + u * g, r[o + 1] = c * d + u * m, r[o + 2] = c * f + u * v, r[o + 3] = c * p + u * y, r
					}, t.getRotation = function (t, e, i, s) {
						return Math.atan2(s - e, i - t) / Math.PI * 180
					}, t.sortBigFirst = function (t, e) {
						return t == e ? 0 : e > t ? 1 : -1
					}, t.sortSmallFirst = function (t, e) {
						return t == e ? 0 : e > t ? -1 : 1
					}, t.sortNumBigFirst = function (t, e) {
						return parseFloat(e) - parseFloat(t)
					}, t.sortNumSmallFirst = function (t, e) {
						return parseFloat(t) - parseFloat(e)
					}, t.sortByKey = function (e, i, s) {
						void 0 === i && (i = !1), void 0 === s && (s = !0);
						var n;
						return n = i ? s ? t.sortNumBigFirst : t.sortBigFirst : s ? t.sortNumSmallFirst : t.sortSmallFirst,
							function (t, i) {
								return n(t[e], i[e])
							}
					}, t
				}(),
				I = function () {
					function t(t, e, i, s, n, r) {
						this.inPool = !1, this.bTransform = !1, void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 1), void 0 === n && (n = 0), void 0 === r && (r = 0), this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = r, this._checkTransform()
					}
					n(t, "laya.maths.Matrix");
					var e = t.prototype;
					return e.identity = function () {
						return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this.bTransform = !1, this
					}, e._checkTransform = function () {
						return this.bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d
					}, e.setTranslate = function (t, e) {
						return this.tx = t, this.ty = e, this
					}, e.translate = function (t, e) {
						return this.tx += t, this.ty += e, this
					}, e.scale = function (t, e) {
						this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this.bTransform = !0
					}, e.rotate = function (t) {
						var e = Math.cos(t),
							i = Math.sin(t),
							s = this.a,
							n = this.c,
							r = this.tx;
						this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = r * e - this.ty * i, this.ty = r * i + this.ty * e, this.bTransform = !0
					}, e.skew = function (t, e) {
						var i = Math.tan(t),
							s = Math.tan(e),
							n = this.a,
							r = this.b;
						return this.a += s * this.c, this.b += s * this.d, this.c += i * n, this.d += i * r, this
					}, e.invertTransformPoint = function (t) {
						var e = this.a,
							i = this.b,
							s = this.c,
							n = this.d,
							r = this.tx,
							o = e * n - i * s,
							a = n / o,
							h = -i / o,
							l = -s / o,
							c = e / o,
							u = (s * this.ty - n * r) / o,
							_ = -(e * this.ty - i * r) / o;
						return t.setTo(a * t.x + l * t.y + u, h * t.x + c * t.y + _)
					}, e.transformPoint = function (t) {
						return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty)
					}, e.transformPointN = function (t) {
						return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y)
					}, e.transformPointArray = function (t, e) {
						for (var i = t.length, s = 0; s < i; s += 2) {
							var n = t[s],
								r = t[s + 1];
							e[s] = this.a * n + this.c * r + this.tx, e[s + 1] = this.b * n + this.d * r + this.ty
						}
						return e
					}, e.transformPointArrayScale = function (t, e) {
						for (var i = t.length, s = 0; s < i; s += 2) {
							var n = t[s],
								r = t[s + 1];
							e[s] = this.a * n + this.c * r, e[s + 1] = this.b * n + this.d * r
						}
						return e
					}, e.getScaleX = function () {
						return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b)
					}, e.getScaleY = function () {
						return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d)
					}, e.invert = function () {
						var t = this.a,
							e = this.b,
							i = this.c,
							s = this.d,
							n = this.tx,
							r = t * s - e * i;
						return this.a = s / r, this.b = -e / r, this.c = -i / r, this.d = t / r, this.tx = (i * this.ty - s * n) / r, this.ty = -(t * this.ty - e * n) / r, this
					}, e.setTo = function (t, e, i, s, n, r) {
						return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = r, this
					}, e.concat = function (t) {
						var e = this.a,
							i = this.c,
							s = this.tx;
						return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d, this.tx = s * t.a + this.ty * t.c + t.tx, this.ty = s * t.b + this.ty * t.d + t.ty, this
					}, e.scaleEx = function (t, e) {
						var i = this.a,
							s = this.b,
							n = this.c,
							r = this.d;
						0 !== s || 0 !== n ? (this.a = t * i, this.b = t * s, this.c = e * n, this.d = e * r) : (this.a = t * i, this.b = 0 * r, this.c = 0 * i, this.d = e * r), this.bTransform = !0
					}, e.rotateEx = function (t) {
						var e = Math.cos(t),
							i = Math.sin(t),
							s = this.a,
							n = this.b,
							r = this.c,
							o = this.d;
						0 !== n || 0 !== r ? (this.a = e * s + i * r, this.b = e * n + i * o, this.c = -i * s + e * r, this.d = -i * n + e * o) : (this.a = e * s, this.b = i * o, this.c = -i * s, this.d = e * o), this.bTransform = !0
					}, e.clone = function () {
						var e = t.create();
						return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e.bTransform = this.bTransform, e
					}, e.copyTo = function (t) {
						return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t.bTransform = this.bTransform, t
					}, e.toString = function () {
						return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty
					}, e.destroy = function () {
						if (!this.inPool) {
							var e = t._cache;
							this.inPool = !0, e._length || (e._length = 0), e[e._length++] = this, this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.bTransform = !1
						}
					}, t.mul = function (t, e, i) {
						var s = t.a,
							n = t.b,
							r = t.c,
							o = t.d,
							a = t.tx,
							h = t.ty,
							l = e.a,
							c = e.b,
							u = e.c,
							_ = e.d,
							d = e.tx,
							f = e.ty;
						return 0 !== c || 0 !== u ? (i.a = s * l + n * u, i.b = s * c + n * _, i.c = r * l + o * u, i.d = r * c + o * _, i.tx = l * a + u * h + d, i.ty = c * a + _ * h + f) : (i.a = s * l, i.b = n * _, i.c = r * l, i.d = o * _, i.tx = l * a + d, i.ty = _ * h + f), i
					}, t.mul16 = function (t, e, i) {
						var s = t.a,
							n = t.b,
							r = t.c,
							o = t.d,
							a = t.tx,
							h = t.ty,
							l = e.a,
							c = e.b,
							u = e.c,
							_ = e.d,
							d = e.tx,
							f = e.ty;
						return 0 !== c || 0 !== u ? (i[0] = s * l + n * u, i[1] = s * c + n * _, i[4] = r * l + o * u, i[5] = r * c + o * _, i[12] = l * a + u * h + d, i[13] = c * a + _ * h + f) : (i[0] = s * l, i[1] = n * _, i[4] = r * l, i[5] = o * _, i[12] = l * a + d, i[13] = _ * h + f), i
					}, t.mulPre = function (t, e, i, s, n, r, o, a) {
						var h = t.a,
							l = t.b,
							c = t.c,
							u = t.d,
							_ = t.tx,
							d = t.ty;
						return 0 !== i || 0 !== s ? (a.a = h * e + l * s, a.b = h * i + l * n, a.c = c * e + u * s, a.d = c * i + u * n, a.tx = e * _ + s * d + r, a.ty = i * _ + n * d + o) : (a.a = h * e, a.b = l * n, a.c = c * e, a.d = u * n, a.tx = e * _ + r, a.ty = n * d + o), a
					}, t.mulPos = function (t, e, i, s, n, r, o, a) {
						var h = t.a,
							l = t.b,
							c = t.c,
							u = t.d,
							_ = t.tx,
							d = t.ty;
						return 0 !== l || 0 !== c ? (a.a = e * h + i * c, a.b = e * l + i * u, a.c = s * h + n * c, a.d = s * l + n * u, a.tx = h * r + c * o + _, a.ty = l * r + u * o + d) : (a.a = e * h, a.b = i * u, a.c = s * h, a.d = n * u, a.tx = h * r + _, a.ty = u * o + d), a
					}, t.preMul = function (t, e, i) {
						var s = t.a,
							n = t.b,
							r = t.c,
							o = t.d,
							a = e.a,
							h = e.b,
							l = e.c,
							c = e.d,
							u = e.tx,
							_ = e.ty;
						return i.a = a * s, i.b = i.c = 0, i.d = c * o, i.tx = u * s + t.tx, i.ty = _ * o + t.ty, 0 === h && 0 === l && 0 === n && 0 === r || (i.a += h * r, i.d += l * n, i.b += a * n + h * o, i.c += l * s + c * r, i.tx += _ * r, i.ty += u * n), i
					}, t.preMulXY = function (t, e, i, s) {
						var n = t.a,
							r = t.b,
							o = t.c,
							a = t.d;
						return s.a = n, s.b = r, s.c = o, s.d = a, s.tx = e * n + t.tx + i * o, s.ty = i * a + t.ty + e * r, s
					}, t.create = function () {
						var e = t._cache,
							i = e._length ? e[--e._length] : new t;
						return i.inPool = !1, i
					}, t.EMPTY = new t, t.TEMP = new t, t._cache = [], t
				}(),
				P = function () {
					function t(t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
					}
					n(t, "laya.maths.Point");
					var e = t.prototype;
					return e.setTo = function (t, e) {
						return this.x = t, this.y = e, this
					}, e.distance = function (t, e) {
						return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e))
					}, e.toString = function () {
						return this.x + "," + this.y
					}, e.normalize = function () {
						var t = Math.sqrt(this.x * this.x + this.y * this.y);
						if (t > 0) {
							var e = 1 / t;
							this.x *= e, this.y *= e
						}
					}, t.TEMP = new t, t.EMPTY = new t, t
				}(),
				L = function () {
					function t(t, e, i, s) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), this.x = t, this.y = e, this.width = i, this.height = s
					}
					n(t, "laya.maths.Rectangle");
					var e = t.prototype;
					return e.setTo = function (t, e, i, s) {
						return this.x = t, this.y = e, this.width = i, this.height = s, this
					}, e.copyFrom = function (t) {
						return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
					}, e.contains = function (t, e) {
						return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.right && e >= this.y && e < this.bottom)
					}, e.intersects = function (t) {
						return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y)
					}, e.intersection = function (e, i) {
						return this.intersects(e) ? (i || (i = new t), i.x = Math.max(this.x, e.x), i.y = Math.max(this.y, e.y), i.width = Math.min(this.right, e.right) - i.x, i.height = Math.min(this.bottom, e.bottom) - i.y, i) : null
					}, e.union = function (e, i) {
						return i || (i = new t), this.clone(i), e.width <= 0 || e.height <= 0 ? i : (i.addPoint(e.x, e.y), i.addPoint(e.right, e.bottom), this)
					}, e.clone = function (e) {
						return e || (e = new t), e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e
					}, e.toString = function () {
						return this.x + "," + this.y + "," + this.width + "," + this.height
					}, e.equals = function (t) {
						return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height)
					}, e.addPoint = function (t, e) {
						return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), this
					}, e._getBoundPoints = function () {
						var e = t._temB;
						return e.length = 0, 0 == this.width || 0 == this.height ? e : (e.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), e)
					}, e.isEmpty = function () {
						return this.width <= 0 || this.height <= 0
					}, r(0, e, "right", function () {
						return this.x + this.width
					}), r(0, e, "bottom", function () {
						return this.y + this.height
					}), t._getBoundPointS = function (e, i, s, n) {
						var r = t._temA;
						return r.length = 0, 0 == s || 0 == n ? r : (r.push(e, i, e + s, i, e, i + n, e + s, i + n), r)
					}, t._getWrapRec = function (e, i) {
						if (!e || e.length < 1) return i ? i.setTo(0, 0, 0, 0) : t.TEMP.setTo(0, 0, 0, 0);
						i = i || new t;
						var s, n, r, o, a, h = e.length,
							l = P.TEMP;
						for (r = a = -(n = o = 99999), s = 0; s < h; s += 2) l.x = e[s], l.y = e[s + 1], n = n < l.x ? n : l.x, o = o < l.y ? o : l.y, r = r > l.x ? r : l.x, a = a > l.y ? a : l.y;
						return i.setTo(n, o, r - n, a - o)
					}, t.EMPTY = new t, t.TEMP = new t, t._temB = [], t._temA = [], t
				}(),
				k = function () {
					function t() {}
					return n(t, "laya.media.SoundManager"), r(1, t, "useAudioMusic", function () {
						return t._useAudioMusic
					}, function (e) {
						t._useAudioMusic = e, t._musicClass = e ? pt : null
					}), r(1, t, "autoStopMusic", function () {
						return t._autoStopMusic
					}, function (e) {
						i.stage.off("blur", null, t._stageOnBlur), i.stage.off("focus", null, t._stageOnFocus), i.stage.off("visibilitychange", null, t._visibilityChange), t._autoStopMusic = e, e && (i.stage.on("blur", null, t._stageOnBlur), i.stage.on("focus", null, t._stageOnFocus), i.stage.on("visibilitychange", null, t._visibilityChange))
					}), r(1, t, "muted", function () {
						return t._muted
					}, function (e) {
						e != t._muted && (e && t.stopAllSound(), t.musicMuted = e, t._muted = e)
					}), r(1, t, "musicMuted", function () {
						return t._musicMuted
					}, function (e) {
						e != t._musicMuted && (e ? (t._tMusic && t._musicChannel && !t._musicChannel.isStopped ? t._musicChannel.pause() : t._musicChannel = null, t._musicMuted = e) : (t._musicMuted = e, t._tMusic && t._musicChannel && t._musicChannel.resume()))
					}), r(1, t, "soundMuted", function () {
						return t._soundMuted
					}, function (e) {
						t._soundMuted = e
					}), t.addChannel = function (e) {
						t._channels.indexOf(e) >= 0 || t._channels.push(e)
					}, t.removeChannel = function (e) {
						var i = 0;
						for (i = t._channels.length - 1; i >= 0; i--) t._channels[i] == e && t._channels.splice(i, 1)
					}, t.disposeSoundIfNotUsed = function (e) {
						var i = 0;
						for (i = t._channels.length - 1; i >= 0; i--)
							if (t._channels[i].url == e) return;
						t.destroySound(e)
					}, t._visibilityChange = function () {
						i.stage.isVisibility ? t._stageOnFocus() : t._stageOnBlur()
					}, t._stageOnBlur = function () {
						t._isActive = !1, t._musicChannel && (t._musicChannel.isStopped || (t._blurPaused = !0, t._musicChannel.pause())), t.stopAllSound(), i.stage.once("mousedown", null, t._stageOnFocus)
					}, t._recoverWebAudio = function () {
						vt.ctx && "running" != vt.ctx.state && vt.ctx.resume && vt.ctx.resume()
					}, t._stageOnFocus = function () {
						t._isActive = !0, t._recoverWebAudio(), i.stage.off("mousedown", null, t._stageOnFocus), t._blurPaused && t._musicChannel && t._musicChannel.isStopped && (t._blurPaused = !1, t._musicChannel.resume())
					}, t.playSound = function (e, s, n, r, o) {
						if (void 0 === s && (s = 1), void 0 === o && (o = 0), !t._isActive || !e) return null;
						if (t._muted) return null;
						if (t._recoverWebAudio(), (e = R.formatURL(e)) == t._tMusic) {
							if (t._musicMuted) return null
						} else {
							if (B.isConchApp) {
								var a = tt.getFileExtension(e);
								if ("wav" != a && "ogg" != a) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), null
							}
							if (t._soundMuted) return null
						}
						var h;
						H.onMiniGame || (h = i.loader.getRes(e)), r || (r = t._soundClass), h || ((h = new r).load(e), H.onMiniGame || xt.cacheRes(e, h));
						var l;
						return (l = h.play(o, s)) ? (l.url = e, l.volume = e == t._tMusic ? t.musicVolume : t.soundVolume, l.completeHandler = n, l) : null
					}, t.destroySound = function (t) {
						var e = i.loader.getRes(t);
						e && (xt.clearRes(t), e.dispose())
					}, t.playMusic = function (e, i, s, n) {
						return void 0 === i && (i = 0), void 0 === n && (n = 0), e = R.formatURL(e), t._tMusic = e, t._musicChannel && t._musicChannel.stop(), t._musicChannel = t.playSound(e, i, s, t._musicClass, n)
					}, t.stopSound = function (e) {
						e = R.formatURL(e);
						var i, s = 0;
						for (s = t._channels.length - 1; s >= 0; s--)(i = t._channels[s]).url == e && i.stop()
					}, t.stopAll = function () {
						t._tMusic = null;
						var e = 0;
						for (e = t._channels.length - 1; e >= 0; e--) t._channels[e].stop()
					}, t.stopAllSound = function () {
						var e, i = 0;
						for (i = t._channels.length - 1; i >= 0; i--)(e = t._channels[i]).url != t._tMusic && e.stop()
					}, t.stopMusic = function () {
						t._musicChannel && t._musicChannel.stop(), t._tMusic = null
					}, t.setSoundVolume = function (e, i) {
						if (i) i = R.formatURL(i), t._setVolume(i, e);
						else {
							t.soundVolume = e;
							var s, n = 0;
							for (n = t._channels.length - 1; n >= 0; n--)(s = t._channels[n]).url != t._tMusic && (s.volume = e)
						}
					}, t.setMusicVolume = function (e) {
						t.musicVolume = e, t._setVolume(t._tMusic, e)
					}, t._setVolume = function (e, i) {
						e = R.formatURL(e);
						var s, n = 0;
						for (n = t._channels.length - 1; n >= 0; n--)(s = t._channels[n]).url == e && (s.volume = i)
					}, t.musicVolume = 1, t.soundVolume = 1, t.playbackRate = 1, t._useAudioMusic = !0, t._muted = !1, t._soundMuted = !1, t._musicMuted = !1, t._tMusic = null, t._musicChannel = null, t._channels = [], t._autoStopMusic = !1, t._blurPaused = !1, t._isActive = !0, t._soundClass = null, t._musicClass = null, t.autoReleaseSound = !0, t
				}(),
				E = function () {
					function e() {}
					var i;
					return n(e, "laya.net.LocalStorage"), e.__init__ = function () {
						e._baseClass || (e._baseClass = i, i.init()), e.items = e._baseClass.items, e.support = e._baseClass.support
					}, e.setItem = function (t, i) {
						e._baseClass.setItem(t, i)
					}, e.getItem = function (t) {
						return e._baseClass.getItem(t)
					}, e.setJSON = function (t, i) {
						e._baseClass.setJSON(t, i)
					}, e.getJSON = function (t) {
						return e._baseClass.getJSON(t)
					}, e.removeItem = function (t) {
						e._baseClass.removeItem(t)
					}, e.clear = function () {
						e._baseClass.clear()
					}, e._baseClass = null, e.items = null, e.support = !1, e.__init$ = function () {
						i = function () {
							function e() {}
							return n(e, ""), e.init = function () {
								try {
									e.support = !0, e.items = t.localStorage, e.setItem("laya", "1"), e.removeItem("laya")
								} catch (t) {
									e.support = !1
								}
								e.support || console.log("LocalStorage is not supprot or browser is private mode.")
							}, e.setItem = function (t, i) {
								try {
									e.support && e.items.setItem(t, i)
								} catch (t) {
									console.warn("set localStorage failed", t)
								}
							}, e.getItem = function (t) {
								return e.support ? e.items.getItem(t) : null
							}, e.setJSON = function (t, i) {
								try {
									e.support && e.items.setItem(t, JSON.stringify(i))
								} catch (t) {
									console.warn("set localStorage failed", t)
								}
							}, e.getJSON = function (t) {
								return JSON.parse(e.support ? e.items.getItem(t) : null)
							}, e.removeItem = function (t) {
								e.support && e.items.removeItem(t)
							}, e.clear = function () {
								e.support && e.items.clear()
							}, e.items = null, e.support = !1, e
						}()
					}, e
				}(),
				A = function () {
					function t() {
						this.fontName = null, this.complete = null, this.err = null, this._fontTxt = null, this._url = null, this._div = null, this._txtWidth = NaN, this._http = null
					}
					n(t, "laya.net.TTFLoader");
					var e = t.prototype;
					return e.load = function (t) {
						this._url = t;
						var e = t.split(".ttf")[0].split("/");
						this.fontName = e[e.length - 1], H.window.conch ? this._loadConch() : H.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS()
					}, e._loadConch = function () {
						this._http = new yt, this._http.on("error", this, this._onErr), this._http.on("complete", this, this._onHttpLoaded), this._http.send(this._url, null, "get", "arraybuffer")
					}, e._onHttpLoaded = function (t) {
						H.window.conch.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), this._complete()
					}, e._clearHttp = function () {
						this._http && (this._http.off("error", this, this._onErr), this._http.off("complete", this, this._onHttpLoaded), this._http = null)
					}, e._onErr = function () {
						this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null)
					}, e._complete = function () {
						i.timer.clear(this, this._complete), i.timer.clear(this, this._checkComplete), this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), this._div = null), this.complete && (this.complete.runWith(this), this.complete = null)
					}, e._checkComplete = function () {
						o.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete()
					}, e._loadWithFontFace = function () {
						var t = new H.window.FontFace(this.fontName, "url('" + this._url + "')");
						H.window.document.fonts.add(t);
						var e = this;
						t.loaded.then(function () {
							e._complete()
						}), t.load()
					}, e._createDiv = function () {
						this._div = H.createElement("div"), this._div.innerHTML = "laya";
						var t = this._div.style;
						t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", H.document.body.appendChild(this._div)
					}, e._loadWithCSS = function () {
						var t = this,
							e = H.createElement("style");
						e.type = "text/css", H.document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", this._fontTxt = "40px " + this.fontName, this._txtWidth = o.measureText("LayaTTFFont", this._fontTxt).width;
						var s = this;
						e.onload = function () {
							i.timer.once(1e4, s, t._complete)
						}, i.timer.loop(20, this, this._checkComplete), this._createDiv()
					}, t._testString = "LayaTTFFont", t
				}(),
				R = function () {
					function t(e) {
						this._url = null, this._path = null, this._url = t.formatURL(e), this._path = t.getPath(e)
					}
					n(t, "laya.net.URL");
					var e = t.prototype;
					return r(0, e, "path", function () {
						return this._path
					}), r(0, e, "url", function () {
						return this._url
					}), t.formatURL = function (e, i) {
						if (!e) return "null path";
						if (e.indexOf(":") > 0) return e;
						null != t.customFormat && (e = t.customFormat(e, i));
						var s = e.charAt(0);
						if ("." === s) return t.formatRelativePath((i || t.basePath) + e);
						if ("~" === s) return t.rootPath + e.substring(1);
						if ("d" === s) {
							if (0 === e.indexOf("data:image")) return e
						} else if ("/" === s) return e;
						return (i || t.basePath) + e
					}, t.formatRelativePath = function (t) {
						for (var e = t.split("/"), i = 0, s = e.length; i < s; i++) ".." == e[i] && (e.splice(i - 1, 2), i -= 2);
						return e.join("/")
					}, t.isAbsolute = function (t) {
						return t.indexOf(":") > 0 || "/" == t.charAt(0)
					}, t.getPath = function (t) {
						var e = t.lastIndexOf("/");
						return e > 0 ? t.substr(0, e + 1) : ""
					}, t.getFileName = function (t) {
						var e = t.lastIndexOf("/");
						return e > 0 ? t.substr(e + 1) : t
					}, t.version = {}, t.basePath = "", t.rootPath = "", t.customFormat = function (e) {
						var i = t.version[e];
						return !B.isConchApp && i && (e += "?v=" + i), e
					}, t
				}(),
				B = function () {
					function e(t, s) {
						function n(t) {
							i.stage._loop(), H.window.requestAnimationFrame(n)
						}
						this._timeId = 0;
						var r = e._mainCanvas.source.style;
						r.position = "absolute", r.top = r.left = "0px", r.background = "#000000", e._mainCanvas.source.id = "layaCanvas";
						var o = laya.renders.Render.isWebGL;
						e._mainCanvas.source.width = t, e._mainCanvas.source.height = s, o && e.WebGL.init(e._mainCanvas, t, s), H.container.appendChild(e._mainCanvas.source), (e._context = new F(t, s, o ? null : e._mainCanvas)).ctx.setIsMainContext(), H.window.requestAnimationFrame(n), i.stage.on("visibilitychange", this, this._onVisibilitychange)
					}
					n(e, "laya.renders.Render");
					var s = e.prototype;
					return s._onVisibilitychange = function () {
						i.stage.isVisibility ? 0 != this._timeId && H.window.clearInterval(this._timeId) : this._timeId = H.window.setInterval(this._enterFrame, 1e3)
					}, s._enterFrame = function (t) {
						i.stage._loop()
					}, r(1, e, "context", function () {
						return e._context
					}), r(1, e, "canvas", function () {
						return e._mainCanvas.source
					}), e._context = null, e._mainCanvas = null, e.WebGL = null, e.isConchNode = !1, e.isConchApp = !1, e.isConchWebGL = !1, e.isWebGL = !1, e.is3DMode = !1, e.optimizeTextureMemory = function (t, e) {
						return !0
					}, e.__init$ = function () {
						t.ConchRenderType = t.ConchRenderType || 1, t.ConchRenderType |= t.conch ? 4 : 0, e.isConchNode = 5 == (5 & t.ConchRenderType), e.isConchApp = 4 == (4 & t.ConchRenderType), e.isConchWebGL = 6 == t.ConchRenderType
					}, e
				}(),
				F = function () {
					function t(e, i, s) {
						this.x = 0, this.y = 0, this._drawTexture = function (t, e, i) {
							i[0].loaded && this.ctx.drawTexture(i[0], i[1], i[2], i[3], i[4], t, e)
						}, this._fillTexture = function (t, e, i) {
							i[0].loaded && this.ctx.fillTexture(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7])
						}, this._drawTextureWithTransform = function (t, e, i) {
							i[0].loaded && this.ctx.drawTextureWithTransform(i[0], i[1], i[2], i[3], i[4], i[5], t, e, i[6])
						}, this._fillQuadrangle = function (t, e, i) {
							this.ctx.fillQuadrangle(i[0], i[1], i[2], i[3], i[4])
						}, this._drawRect = function (t, e, i) {
							var s = this.ctx;
							null != i[4] && (s.fillStyle = i[4], s.fillRect(t + i[0], e + i[1], i[2], i[3], null)), null != i[5] && (s.strokeStyle = i[5], s.lineWidth = i[6], s.strokeRect(t + i[0], e + i[1], i[2], i[3], i[6]))
						}, this._drawPie = function (t, e, i) {
							var s = this.ctx;
							B.isWebGL && s.setPathId(i[8]), s.beginPath(), B.isWebGL ? (s.movePath(i[0] + t, i[1] + e), s.moveTo(0, 0)) : s.moveTo(t + i[0], e + i[1]), s.arc(t + i[0], e + i[1], i[2], i[3], i[4]), s.closePath(), this._fillAndStroke(i[5], i[6], i[7], !0)
						}, this._clipRect = function (t, e, i) {
							this.ctx.clipRect(t + i[0], e + i[1], i[2], i[3])
						}, this._fillRect = function (t, e, i) {
							this.ctx.fillRect(t + i[0], e + i[1], i[2], i[3], i[4])
						}, this._drawCircle = function (e, i, s) {
							var n = this.ctx;
							B.isWebGL && n.setPathId(s[6]), Z.drawCall++, n.beginPath(), B.isWebGL && n.movePath(s[0] + e, s[1] + i), n.arc(s[0] + e, s[1] + i, s[2], 0, t.PI2), n.closePath(), this._fillAndStroke(s[3], s[4], s[5], !0)
						}, this._fillCircle = function (e, i, s) {
							Z.drawCall++;
							var n = this.ctx;
							n.beginPath(), n.fillStyle = s[3], n.arc(s[0] + e, s[1] + i, s[2], 0, t.PI2), n.fill()
						}, this._setShader = function (t, e, i) {
							this.ctx.setShader(i[0])
						}, this._drawLine = function (t, e, i) {
							var s = this.ctx;
							B.isWebGL && s.setPathId(i[6]), s.beginPath(), s.strokeStyle = i[4], s.lineWidth = i[5], B.isWebGL ? (s.movePath(t, e), s.moveTo(i[0], i[1]), s.lineTo(i[2], i[3])) : (s.moveTo(t + i[0], e + i[1]), s.lineTo(t + i[2], e + i[3])), s.stroke()
						}, this._drawLines = function (t, e, i) {
							var s = this.ctx;
							B.isWebGL && s.setPathId(i[5]), s.beginPath(), t += i[0], e += i[1], B.isWebGL && s.movePath(t, e), s.strokeStyle = i[3], s.lineWidth = i[4];
							var n = i[2],
								r = 2,
								o = n.length;
							if (B.isWebGL)
								for (s.moveTo(n[0], n[1]); r < o;) s.lineTo(n[r++], n[r++]);
							else
								for (s.moveTo(t + n[0], e + n[1]); r < o;) s.lineTo(t + n[r++], e + n[r++]);
							s.stroke()
						}, this._drawLinesWebGL = function (t, e, i) {
							this.ctx.drawLines(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4])
						}, this._drawCurves = function (t, e, i) {
							this.ctx.drawCurves(t, e, i)
						}, this._draw = function (t, e, i) {
							i[0].call(null, this, t, e)
						}, this._transformByMatrix = function (t, e, i) {
							this.ctx.transformByMatrix(i[0])
						}, this._setTransform = function (t, e, i) {
							this.ctx.setTransform(i[0], i[1], i[2], i[3], i[4], i[5])
						}, this._setTransformByMatrix = function (t, e, i) {
							this.ctx.setTransformByMatrix(i[0])
						}, this._save = function (t, e, i) {
							this.ctx.save()
						}, this._restore = function (t, e, i) {
							this.ctx.restore()
						}, this._translate = function (t, e, i) {
							this.ctx.translate(i[0], i[1])
						}, this._transform = function (t, e, i) {
							this.ctx.translate(i[1] + t, i[2] + e);
							var s = i[0];
							this.ctx.transform(s.a, s.b, s.c, s.d, s.tx, s.ty), this.ctx.translate(-t - i[1], -e - i[2])
						}, this._rotate = function (t, e, i) {
							this.ctx.translate(i[1] + t, i[2] + e), this.ctx.rotate(i[0]), this.ctx.translate(-t - i[1], -e - i[2])
						}, this._scale = function (t, e, i) {
							this.ctx.translate(i[2] + t, i[3] + e), this.ctx.scale(i[0], i[1]), this.ctx.translate(-t - i[2], -e - i[3])
						}, this._alpha = function (t, e, i) {
							this.ctx.globalAlpha *= i[0]
						}, this._setAlpha = function (t, e, i) {
							this.ctx.globalAlpha = i[0]
						}, this._fillText = function (t, e, i) {
							this.ctx.fillText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5])
						}, this._strokeText = function (t, e, i) {
							this.ctx.strokeText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6])
						}, this._fillBorderText = function (t, e, i) {
							this.ctx.fillBorderText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7])
						}, this._blendMode = function (t, e, i) {
							this.ctx.globalCompositeOperation = i[0]
						}, this._beginClip = function (t, e, i) {
							this.ctx.beginClip && this.ctx.beginClip(t + i[0], e + i[1], i[2], i[3])
						}, this._setIBVB = function (t, e, i) {
							this.ctx.setIBVB(i[0] + t, i[1] + e, i[2], i[3], i[4], i[5], i[6], i[7])
						}, this._fillTrangles = function (t, e, i) {
							this.ctx.fillTrangles(i[0], i[1] + t, i[2] + e, i[3], i[4])
						}, this._drawPath = function (t, e, i) {
							var s = this.ctx;
							B.isWebGL && s.setPathId(-1), s.beginPath(), t += i[0], e += i[1], B.isWebGL && s.movePath(t, e);
							for (var n = i[2], r = 0, o = n.length; r < o; r++) {
								var a = n[r];
								switch (a[0]) {
									case "moveTo":
										B.isWebGL ? s.moveTo(a[1], a[2]) : s.moveTo(t + a[1], e + a[2]);
										break;
									case "lineTo":
										B.isWebGL ? s.lineTo(a[1], a[2]) : s.lineTo(t + a[1], e + a[2]);
										break;
									case "arcTo":
										B.isWebGL ? s.arcTo(a[1], a[2], a[3], a[4], a[5]) : s.arcTo(t + a[1], e + a[2], t + a[3], e + a[4], a[5]);
										break;
									case "closePath":
										s.closePath()
								}
							}
							var h = i[3];
							null != h && (s.fillStyle = h.fillStyle, s.fill());
							var l = i[4];
							null != l && (s.strokeStyle = l.strokeStyle, s.lineWidth = l.lineWidth || 1, s.lineJoin = l.lineJoin, s.lineCap = l.lineCap, s.miterLimit = l.miterLimit, s.stroke())
						}, this.drawPoly = function (t, e, i) {
							this.ctx.drawPoly(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4], i[5], i[6])
						}, this._drawPoly = function (t, e, i) {
							var s = this.ctx,
								n = i[2],
								r = 2,
								o = n.length;
							if (B.isWebGL)
								for (s.setPathId(i[6]), s.beginPath(), t += i[0], e += i[1], s.movePath(t, e), s.moveTo(n[0], n[1]); r < o;) s.lineTo(n[r++], n[r++]);
							else
								for (s.beginPath(), t += i[0], e += i[1], s.moveTo(t + n[0], e + n[1]); r < o;) s.lineTo(t + n[r++], e + n[r++]);
							s.closePath(), this._fillAndStroke(i[3], i[4], i[5], i[7])
						}, this._drawSkin = function (t, e, i) {
							var s = i[0];
							if (s) {
								var n = this.ctx;
								s.render(n, t, e)
							}
						}, this._drawParticle = function (t, e, i) {
							this.ctx.drawParticle(t + this.x, e + this.y, i[0])
						}, this._setFilters = function (t, e, i) {
							this.ctx.setFilters(i)
						}, s ? this.ctx = s.getContext("2d") : (s = Nt.create("3D"), this.ctx = o.createWebGLContext2D(s), s._setContext(this.ctx)), s.size(e, i), this.canvas = s
					}
					n(t, "laya.renders.RenderContext");
					var e = t.prototype;
					return e.destroy = function () {
						this.canvas && (this.canvas.destroy(), this.canvas = null, this.ctx = null), this.ctx && (this.ctx.destroy(), this.ctx = null)
					}, e.drawTexture = function (t, e, i, s, n) {
						t.loaded && this.ctx.drawTexture(t, e, i, s, n, this.x, this.y)
					}, e._drawTextures = function (t, e, i) {
						i[0].loaded && this.ctx.drawTextures(i[0], i[1], t + this.x, e + this.y)
					}, e.drawTextureWithTransform = function (t, e, i, s, n, r, o) {
						t.loaded && this.ctx.drawTextureWithTransform(t, e, i, s, n, r, this.x, this.y, o)
					}, e.fillQuadrangle = function (t, e, i, s, n) {
						this.ctx.fillQuadrangle(t, e, i, s, n)
					}, e.drawCanvas = function (t, e, i, s, n) {
						this.ctx.drawCanvas(t, e + this.x, i + this.y, s, n)
					}, e.drawRect = function (t, e, i, s, n, r) {
						void 0 === r && (r = 1);
						var o = this.ctx;
						o.strokeStyle = n, o.lineWidth = r, o.strokeRect(t + this.x, e + this.y, i, s, r)
					}, e._fillAndStroke = function (t, e, i, s) {
						void 0 === s && (s = !1);
						var n = this.ctx;
						null != t && (n.fillStyle = t, B.isWebGL ? n.fill(s) : n.fill()), null != e && i > 0 && (n.strokeStyle = e, n.lineWidth = i, n.stroke())
					}, e.clipRect = function (t, e, i, s) {
						this.ctx.clipRect(t + this.x, e + this.y, i, s)
					}, e.fillRect = function (t, e, i, s, n) {
						this.ctx.fillRect(t + this.x, e + this.y, i, s, n)
					}, e.drawCircle = function (e, i, s, n, r) {
						void 0 === r && (r = 1), Z.drawCall++;
						var o = this.ctx;
						o.beginPath(), o.strokeStyle = n, o.lineWidth = r, o.arc(e + this.x, i + this.y, s, 0, t.PI2), o.stroke()
					}, e.drawTriangles = function (t, e, i) {
						if (B.isWebGL) this.ctx.drawTriangles(i[0], t + i[1], e + i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9]);
						else {
							var s = i[5],
								n = 0,
								r = s.length,
								o = this.ctx;
							for (n = 0; n < r; n += 3) {
								var a = 2 * s[n],
									h = 2 * s[n + 1],
									l = 2 * s[n + 2];
								o.drawTriangle(i[0], i[3], i[4], a, h, l, i[6], !0)
							}
						}
					}, e.fillCircle = function (e, i, s, n) {
						Z.drawCall++;
						var r = this.ctx;
						r.beginPath(), r.fillStyle = n, r.arc(e + this.x, i + this.y, s, 0, t.PI2), r.fill()
					}, e.setShader = function (t) {
						this.ctx.setShader(t)
					}, e.drawLine = function (t, e, i, s, n, r) {
						void 0 === r && (r = 1);
						var o = this.ctx;
						o.beginPath(), o.strokeStyle = n, o.lineWidth = r, o.moveTo(this.x + t, this.y + e), o.lineTo(this.x + i, this.y + s), o.stroke()
					}, e.clear = function () {
						this.ctx.clear()
					}, e.transformByMatrix = function (t) {
						this.ctx.transformByMatrix(t)
					}, e.setTransform = function (t, e, i, s, n, r) {
						this.ctx.setTransform(t, e, i, s, n, r)
					}, e.setTransformByMatrix = function (t) {
						this.ctx.setTransformByMatrix(t)
					}, e.save = function () {
						this.ctx.save()
					}, e.restore = function () {
						this.ctx.restore()
					}, e.translate = function (t, e) {
						this.ctx.translate(t, e)
					}, e.transform = function (t, e, i, s, n, r) {
						this.ctx.transform(t, e, i, s, n, r)
					}, e.rotate = function (t) {
						this.ctx.rotate(t)
					}, e.scale = function (t, e) {
						this.ctx.scale(t, e)
					}, e.alpha = function (t) {
						this.ctx.globalAlpha *= t
					}, e.setAlpha = function (t) {
						this.ctx.globalAlpha = t
					}, e.fillWords = function (t, e, i, s, n, r) {
						void 0 === r && (r = 0), this.ctx.fillWords(t, e, i, s, n, r)
					}, e.fillBorderWords = function (t, e, i, s, n, r, o) {
						this.ctx.fillBorderWords(t, e, i, s, n, r, o)
					}, e.fillText = function (t, e, i, s, n, r) {
						this.ctx.fillText(t, e + this.x, i + this.y, s, n, r)
					}, e.strokeText = function (t, e, i, s, n, r, o) {
						this.ctx.strokeText(t, e + this.x, i + this.y, s, n, r, o)
					}, e.blendMode = function (t) {
						this.ctx.globalCompositeOperation = t
					}, e.flush = function () {
						this.ctx.flush && this.ctx.flush()
					}, e.addRenderObject = function (t) {
						this.ctx.addRenderObject(t)
					}, e.beginClip = function (t, e, i, s) {
						this.ctx.beginClip && this.ctx.beginClip(t, e, i, s)
					}, e.endClip = function () {
						this.ctx.endClip && this.ctx.endClip()
					}, e.fillTrangles = function (t, e, i) {
						this.ctx.fillTrangles(i[0], i[1], i[2], i[3], i.length > 4 ? i[4] : null)
					}, t.PI2 = 2 * Math.PI, t
				}(),
				O = function () {
					function t(e, i) {
						switch (this._next = i || t.NORENDER, e) {
							case 0:
								return void(this._fun = this._no);
							case 1:
								return void(this._fun = this._image);
							case 2:
								return void(this._fun = this._alpha);
							case 4:
								return void(this._fun = this._transform);
							case 8:
								return void(this._fun = this._blend);
							case 16:
								return void(this._fun = this._canvas);
							case 64:
								return void(this._fun = this._mask);
							case 128:
								return void(this._fun = this._clip);
							case 256:
								return void(this._fun = this._style);
							case 512:
								return void(this._fun = this._graphics);
							case 2048:
								return void(this._fun = this._childs);
							case 1024:
								return void(this._fun = this._custom);
							case 513:
							case 517:
								return void(this._fun = this._image2);
							case 32:
								return void(this._fun = b._filter);
							case 69905:
								return void(this._fun = t._initRenderFun)
						}
						this.onCreate(e)
					}
					n(t, "laya.renders.RenderSprite");
					var e = t.prototype;
					return e.onCreate = function (t) {}, e._style = function (t, e, i, s) {
						t._style.render(t, e, i, s);
						var n = this._next;
						n._fun.call(n, t, e, i, s)
					}, e._no = function (t, e, i, s) {}, e._custom = function (t, e, i, s) {
						t.customRender(e, i, s);
						var n = t._style._tf;
						this._next._fun.call(this._next, t, e, i - n.translateX, s - n.translateY)
					}, e._clip = function (e, i, s, n) {
						var r = this._next;
						if (r != t.NORENDER) {
							var o = e._style.scrollRect;
							i.ctx.save(), i.ctx.clipRect(s, n, o.width, o.height), r._fun.call(r, e, i, s - o.x, n - o.y), i.ctx.restore()
						}
					}, e._blend = function (t, e, i, s) {
						var n = t._style;
						n.blendMode && (e.ctx.globalCompositeOperation = n.blendMode);
						var r = this._next;
						r._fun.call(r, t, e, i, s), e.ctx.globalCompositeOperation = "source-over"
					}, e._mask = function (t, e, i, s) {
						var n = this._next;
						n._fun.call(n, t, e, i, s);
						var r = t.mask;
						r && (e.ctx.globalCompositeOperation = "destination-in", (r.numChildren > 0 || !r.graphics._isOnlyOne()) && (r.cacheAsBitmap = !0), r.render(e, i - t.pivotX, s - t.pivotY)), e.ctx.globalCompositeOperation = "source-over"
					}, e._graphics = function (t, e, i, s) {
						var n = t._style._tf;
						t._graphics && t._graphics._render(t, e, i - n.translateX, s - n.translateY);
						var r = this._next;
						r._fun.call(r, t, e, i, s)
					}, e._image = function (t, e, i, s) {
						var n = t._style;
						e.ctx.drawTexture2(i, s, n._tf.translateX, n._tf.translateY, t.transform, n.alpha, n.blendMode, t._graphics._one)
					}, e._image2 = function (t, e, i, s) {
						var n = t._style._tf;
						e.ctx.drawTexture2(i, s, n.translateX, n.translateY, t.transform, 1, null, t._graphics._one)
					}, e._alpha = function (t, e, i, s) {
						var n;
						if ((n = t._style.alpha) > .01 || t._needRepaint()) {
							var r = e.ctx.globalAlpha;
							e.ctx.globalAlpha *= n;
							var o = this._next;
							o._fun.call(o, t, e, i, s), e.ctx.globalAlpha = r
						}
					}, e._transform = function (e, i, s, n) {
						var r = e.transform,
							o = this._next;
						r && o != t.NORENDER ? (i.save(), i.transform(r.a, r.b, r.c, r.d, r.tx + s, r.ty + n), o._fun.call(o, e, i, 0, 0), i.restore()) : o._fun.call(o, e, i, s, n)
					}, e._childs = function (t, e, i, s) {
						var n = t._style,
							r = n._tf;
						if (i = i - r.translateX + n.paddingLeft, s = s - r.translateY + n.paddingTop, n._calculation) {
							var o = t._getWords();
							if (o) {
								var a = n;
								a && (a.stroke ? e.fillBorderWords(o, i, s, a.font, a.color, a.strokeColor, a.stroke) : e.fillWords(o, i, s, a.font, a.color, "none" != a.textDecoration && a.underLine ? 1 : 0))
							}
						}
						var h, l = t._childs,
							c = l.length;
						if (t.viewport || t.optimizeScrollRect && t._style.scrollRect) {
							var u = t.viewport || t._style.scrollRect,
								_ = u.x,
								d = u.y,
								f = u.right,
								p = u.bottom,
								g = NaN,
								m = NaN;
							for (v = 0; v < c; ++v)(h = l[v]).visible && (g = h._x) < f && g + h.width > _ && (m = h._y) < p && m + h.height > d && h.render(e, i, s)
						} else
							for (var v = 0; v < c; ++v)(h = l[v])._style.visible && h.render(e, i, s)
					}, e._canvas = function (t, e, i, s) {
						var n = t._$P.cacheCanvas;
						if (n) {
							"bitmap" === n.type ? Z.canvasBitmap++ : Z.canvasNormal++;
							var r = n.ctx;
							if (t._needRepaint() || !r) this._canvas_repaint(t, e, i, s);
							else {
								var o = n._cacheRec;
								e.drawCanvas(r.canvas, i + o.x, s + o.y, o.width, o.height)
							}
						} else this._next._fun.call(this._next, t, e, i, s)
					}, e._canvas_repaint = function (t, e, s, n) {
						var r = t._$P.cacheCanvas,
							o = this._next;
						if (r) {
							var a, h, l, c, u = r.ctx,
								_ = t._needRepaint() || !u,
								d = r.type;
							if ("bitmap" === d ? Z.canvasBitmap++ : Z.canvasNormal++, _) {
								r._cacheRec || (r._cacheRec = new L);
								var f, p;
								B.isWebGL && "bitmap" !== d ? r._cacheRec.setTo(-t.pivotX, -t.pivotY, 1, 1) : ((c = t.getSelfBounds()).x = c.x - t.pivotX, c.y = c.y - t.pivotY, c.x = c.x - 16, c.y = c.y - 16, c.width = c.width + 32, c.height = c.height + 32, c.x = Math.floor(c.x + s) - s, c.y = Math.floor(c.y + n) - n, c.width = Math.floor(c.width), c.height = Math.floor(c.height), r._cacheRec.copyFrom(c)), c = r._cacheRec;
								var g = B.isWebGL ? 1 : H.pixelRatio * i.stage.clientScaleX,
									m = B.isWebGL ? 1 : H.pixelRatio * i.stage.clientScaleY;
								if (!B.isWebGL) {
									var v, y = 1,
										x = 1;
									for (v = t; v && v != i.stage;) y *= v.scaleX, x *= v.scaleY, v = v.parent;
									B.isWebGL ? (y < 1 && (g *= y), x < 1 && (m *= x)) : (y > 1 && (g *= y), x > 1 && (m *= x))
								}
								if (t.scrollRect) {
									var w = t.scrollRect;
									c.x -= w.x, c.y -= w.y
								}
								if (f = c.width * g, p = c.height * m, h = c.x, l = c.y, B.isWebGL && "bitmap" === d && (f > 2048 || p > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"), r.ctx && (q.recover("RenderContext", r.ctx), r.ctx.canvas.size(0, 0), r.ctx = null), void o._fun.call(o, t, e, s, n);
								u || (u = r.ctx = q.getItem("RenderContext") || new F(f, p, Nt.create("AUTO"))), u.ctx.sprite = t, (a = u.canvas).clear(), (a.width != f || a.height != p) && a.size(f, p), "bitmap" === d ? a.context.asBitmap = !0 : "normal" === d && (a.context.asBitmap = !1);
								var b;
								if (1 != g || 1 != m) {
									var C = u.ctx;
									C.save(), C.scale(g, m), !B.isConchWebGL && B.isConchApp && (b = t._$P.cf) && C.setFilterMatrix && C.setFilterMatrix(b._mat, b._alpha), o._fun.call(o, t, u, -h, -l), C.restore(), B.isConchApp && !B.isConchWebGL || t._applyFilters()
								} else C = u.ctx, !B.isConchWebGL && B.isConchApp && (b = t._$P.cf) && C.setFilterMatrix && C.setFilterMatrix(b._mat, b._alpha), o._fun.call(o, t, u, -h, -l), B.isConchApp && !B.isConchWebGL || t._applyFilters();
								t._$P.staticCache && (r.reCache = !1), Z.canvasReCache++
							} else h = (c = r._cacheRec).x, l = c.y, a = u.canvas;
							e.drawCanvas(a, s + h, n + l, c.width, c.height)
						} else o._fun.call(o, t, u, s, n)
					}, t.__init__ = function () {
						var e, i = 0,
							s = 0;
						for (e = o.createRenderSprite(69905, null), s = t.renders.length = 4096, i = 0; i < s; i++) t.renders[i] = e;
						t.renders[0] = o.createRenderSprite(0, null),
							function (e, i) {
								for (var s = 0, n = 0; n < e.length; n++) s |= e[n], t.renders[s] = i
							}([1, 512, 4, 2], new t(1, null)), t.renders[513] = o.createRenderSprite(513, null), t.renders[517] = new t(517, null)
					}, t._initRenderFun = function (e, i, s, n) {
						var r = e._renderType;
						(t.renders[r] = t._getTypeRender(r))._fun(e, i, s, n)
					}, t._getTypeRender = function (t) {
						for (var e = null, i = 2048; i > 1;) i & t && (e = o.createRenderSprite(i, e)), i >>= 1;
						return e
					}, t.IMAGE = 1, t.ALPHA = 2, t.TRANSFORM = 4, t.BLEND = 8, t.CANVAS = 16, t.FILTERS = 32, t.MASK = 64, t.CLIP = 128, t.STYLE = 256, t.GRAPHICS = 512, t.CUSTOM = 1024, t.CHILDS = 2048, t.INIT = 69905, t.renders = [], t.NORENDER = new t(0, null), t
				}(),
				N = function () {
					function t() {
						this._repaint = !1
					}
					n(t, "laya.resource.Context");
					var e = t.prototype;
					return e.replaceReset = function () {
						var e = 0,
							i = 0;
						i = t.replaceKeys.length;
						var s;
						for (e = 0; e < i; e++) s = t.replaceKeys[e], this[t.newKeys[e]] = this[s]
					}, e.replaceResotre = function () {
						this.__restore(), this.__reset()
					}, e.setIsMainContext = function () {}, e.drawTextures = function (t, e, i, s) {
						Z.drawCall += e.length / 2;
						for (var n = t.width, r = t.height, o = 0, a = e.length; o < a; o += 2) this.drawTexture(t, e[o], e[o + 1], n, r, i, s)
					}, e.drawCanvas = function (t, e, i, s, n) {
						Z.drawCall++, this.drawImage(t.source, e, i, s, n)
					}, e.fillRect = function (t, e, i, s, n) {
						Z.drawCall++, n && (this.fillStyle = n), this.__fillRect(t, e, i, s)
					}, e.fillText = function (t, e, i, s, n, r) {
						Z.drawCall++, arguments.length > 3 && null != s && (this.font = s, this.fillStyle = n, this.textAlign = r, this.textBaseline = "top"), this.__fillText(t, e, i)
					}, e.fillBorderText = function (t, e, i, s, n, r, o, a) {
						Z.drawCall++, this.font = s, this.fillStyle = n, this.textBaseline = "top", this.strokeStyle = r, this.lineWidth = o, this.textAlign = a, this.__strokeText(t, e, i), this.__fillText(t, e, i)
					}, e.strokeText = function (t, e, i, s, n, r, o) {
						Z.drawCall++, arguments.length > 3 && null != s && (this.font = s, this.strokeStyle = n, this.lineWidth = r, this.textAlign = o, this.textBaseline = "top"), this.__strokeText(t, e, i)
					}, e.transformByMatrix = function (t) {
						this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty)
					}, e.setTransformByMatrix = function (t) {
						this.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty)
					}, e.clipRect = function (t, e, i, s) {
						Z.drawCall++, this.beginPath(), this.rect(t, e, i, s), this.clip()
					}, e.drawTexture = function (t, e, i, s, n, r, o) {
						Z.drawCall++;
						var a = t.uv,
							h = t.bitmap.width,
							l = t.bitmap.height;
						this.drawImage(t.source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, e + r, i + o, s, n)
					}, e.drawTextureWithTransform = function (t, e, i, s, n, r, o, a, h) {
						Z.drawCall++;
						var l = t.uv,
							c = t.bitmap.width,
							u = t.bitmap.height;
						this.save(), 1 != h && (this.globalAlpha *= h), r ? (this.transform(r.a, r.b, r.c, r.d, r.tx + o, r.ty + a), this.drawImage(t.source, l[0] * c, l[1] * u, (l[2] - l[0]) * c, (l[5] - l[3]) * u, e, i, s, n)) : this.drawImage(t.source, l[0] * c, l[1] * u, (l[2] - l[0]) * c, (l[5] - l[3]) * u, e + o, i + a, s, n), this.restore()
					}, e.drawTexture2 = function (t, e, i, s, n, r, o, a) {
						var h = a[0];
						if (h.loaded && h.bitmap && h.source) {
							Z.drawCall++;
							var l = 1 !== r;
							if (l) {
								var c = this.globalAlpha;
								this.globalAlpha *= r
							}
							var u = h.uv,
								_ = h.bitmap.width,
								d = h.bitmap.height;
							n ? (this.save(), this.transform(n.a, n.b, n.c, n.d, n.tx + t, n.ty + e), this.drawImage(h.source, u[0] * _, u[1] * d, (u[2] - u[0]) * _, (u[5] - u[3]) * d, a[1] - i, a[2] - s, a[3], a[4]), this.restore()) : this.drawImage(h.source, u[0] * _, u[1] * d, (u[2] - u[0]) * _, (u[5] - u[3]) * d, a[1] - i + t, a[2] - s + e, a[3], a[4]), l && (this.globalAlpha = c)
						}
					}, e.fillTexture = function (t, e, i, s, n, r, o, a) {
						if (!a.pat) {
							if (t.uv != wt.DEF_UV) {
								var h = new Nt("2D");
								h.getContext("2d"), h.size(t.width, t.height), h.context.drawTexture(t, 0, 0, t.width, t.height, 0, 0), t = new wt(h)
							}
							a.pat = this.createPattern(t.bitmap.source, r)
						}
						var l = e,
							c = i,
							u = 0,
							_ = 0;
						o && (l += o.x % t.width, c += o.y % t.height, u -= o.x % t.width, _ -= o.y % t.height), this.translate(l, c), this.fillRect(u, _, s, n, a.pat), this.translate(-l, -c)
					}, e.drawTriangle = function (t, e, i, s, n, r, o, a) {
						var h = t.bitmap,
							l = h.source,
							c = t.width,
							u = t.height,
							_ = h.width,
							d = h.height,
							f = i[s] * _,
							p = i[n] * _,
							g = i[r] * _,
							m = i[s + 1] * d,
							v = i[n + 1] * d,
							y = i[r + 1] * d,
							x = e[s],
							w = e[n],
							b = e[r],
							C = e[s + 1],
							S = e[n + 1],
							T = e[r + 1];
						if (a) {
							var M = (x + w + b) / 3,
								I = (C + S + T) / 3,
								P = x - M,
								L = C - I,
								k = Math.sqrt(P * P + L * L);
							x = M + P / k * (k + 1), C = I + L / k * (k + 1), L = S - I, w = M + (P = w - M) / (k = Math.sqrt(P * P + L * L)) * (k + 1), S = I + L / k * (k + 1), L = T - I, b = M + (P = b - M) / (k = Math.sqrt(P * P + L * L)) * (k + 1), T = I + L / k * (k + 1)
						}
						this.save(), o && this.transform(o.a, o.b, o.c, o.d, o.tx, o.ty), this.beginPath(), this.moveTo(x, C), this.lineTo(w, S), this.lineTo(b, T), this.closePath(), this.clip();
						var E = 1 / (f * v + m * g + p * y - v * g - m * p - f * y),
							A = x * v + m * b + w * y - v * b - m * w - x * y,
							R = f * w + x * g + p * b - w * g - x * p - f * b,
							B = f * v * b + m * w * g + x * p * y - x * v * g - m * p * b - f * w * y,
							F = C * v + m * T + S * y - v * T - m * S - C * y,
							O = f * S + C * g + p * T - S * g - C * p - f * T,
							N = f * v * T + m * S * g + C * p * y - C * v * g - m * p * T - f * S * y;
						this.transform(A * E, F * E, R * E, O * E, B * E, N * E), this.drawImage(l, t.uv[0] * _, t.uv[1] * d, c, u, t.uv[0] * _, t.uv[1] * d, c, u), this.restore()
					}, e.flush = function () {
						return 0
					}, e.fillWords = function (t, e, i, s, n, r) {
						s && (this.font = s), n && (this.fillStyle = n);
						this.textBaseline = "top", this.textAlign = "left";
						for (var o = 0, a = t.length; o < a; o++) {
							var h = t[o];
							if (this.__fillText(h.char, h.x + e, h.y + i), 1 === r) {
								var l = h.height,
									c = .5 * h.style.letterSpacing;
								c || (c = 0), this.beginPath(), this.strokeStyle = n, this.lineWidth = 1, this.moveTo(e + h.x - c + .5, i + h.y + l + .5), this.lineTo(e + h.x + h.width + c + .5, i + h.y + l + .5), this.stroke()
							}
						}
					}, e.fillBorderWords = function (t, e, i, s, n, r, o) {
						s && (this.font = s), n && (this.fillStyle = n), this.textBaseline = "top", this.lineWidth = o, this.textAlign = "left", this.strokeStyle = r;
						for (var a = 0, h = t.length; a < h; a++) {
							var l = t[a];
							this.__strokeText(l.char, l.x + e, l.y + i), this.__fillText(l.char, l.x + e, l.y + i)
						}
					}, e.destroy = function () {
						this.canvas.width = this.canvas.height = 0
					}, e.clear = function () {
						this.clearRect(0, 0, this._canvas.width, this._canvas.height), this._repaint = !1
					}, e.drawCurves = function (t, e, i) {
						this.beginPath(), this.strokeStyle = i[3], this.lineWidth = i[4];
						var s = i[2];
						t += i[0], e += i[1], this.moveTo(t + s[0], e + s[1]);
						for (var n = 2, r = s.length; n < r;) this.quadraticCurveTo(t + s[n++], e + s[n++], t + s[n++], e + s[n++]);
						this.stroke()
					}, t.__init__ = function (t) {
						var e = laya.resource.Context.prototype;
						if (!(t = t || CanvasRenderingContext2D.prototype).inited) {
							t.inited = !0, t.__fillText = t.fillText, t.__fillRect = t.fillRect, t.__strokeText = t.strokeText;
							["drawTextures", "drawTriangle", "fillWords", "fillBorderWords", "setIsMainContext", "fillRect", "strokeText", "fillTexture", "fillText", "transformByMatrix", "setTransformByMatrix", "clipRect", "drawTexture", "drawTexture2", "drawTextureWithTransform", "flush", "clear", "destroy", "drawCanvas", "fillBorderText", "drawCurves"].forEach(function (i) {
								t[i] = e[i]
							})
						}
					}, t.replaceCanvasGetSet = function (t, e) {
						var i = Object.getOwnPropertyDescriptor(t, e);
						if (!i || !i.configurable) return !1;
						var s, n = {};
						for (s in i) "set" != s && (n[s] = i[s]);
						var r = i.set;
						return n.set = function (t) {
							r.call(this, t);
							var e = this.getContext("2d");
							e && "__reset" in e && e.__reset()
						}, Object.defineProperty(t, e, n), !0
					}, t.replaceGetSet = function (e, i) {
						var s = Object.getOwnPropertyDescriptor(e, i);
						if (!s || !s.configurable) return !1;
						var n, r = {};
						for (n in s) "set" != n && (r[n] = s[n]);
						var o = s.set,
							a = "___" + i + "__";
						return t.newKeys.push(a), r.set = function (t) {
							t != this[a] && (this[a] = t, o.call(this, t))
						}, Object.defineProperty(e, i, r), !0
					}, t._default = new t, t.newKeys = [], s(t, ["replaceKeys", function () {
						return this.replaceKeys = ["font", "fillStyle", "textBaseline"]
					}]), t
				}(),
				D = function () {
					function t(e) {
						this._id = 0, this._name = null, this._resources = null, this._memorySize = 0, this._garbageCollectionRate = NaN, this._isOverflow = !1, this.autoRelease = !1, this.autoReleaseMaxSize = 0, this._id = ++t._uniqueIDCounter, this._name = e || "Content Manager", t._isResourceManagersSorted = !1, this._memorySize = 0, this._isOverflow = !1, this.autoRelease = !1, this.autoReleaseMaxSize = 536870912, this._garbageCollectionRate = .2, t._resourceManagers.push(this), this._resources = []
					}
					n(t, "laya.resource.ResourceManager");
					var e = t.prototype;
					return i.imps(e, {
						"laya.resource.IDispose": !0
					}), e.getResourceByIndex = function (t) {
						return this._resources[t]
					}, e.getResourcesLength = function () {
						return this._resources.length
					}, e.addResource = function (t) {
						t.resourceManager && t.resourceManager.removeResource(t);
						return -1 === this._resources.indexOf(t) && (t._resourceManager = this, this._resources.push(t), this.addSize(t.memorySize), !0)
					}, e.removeResource = function (t) {
						var e = this._resources.indexOf(t);
						return -1 !== e && (this._resources.splice(e, 1), t._resourceManager = null, this._memorySize -= t.memorySize, !0)
					}, e.unload = function () {
						for (var t = this._resources.slice(0, this._resources.length), e = 0; e < t.length; e++) {
							t[e].destroy()
						}
						t.length = 0
					}, e.dispose = function () {
						if (this === t._systemResourceManager) throw new Error("systemResourceManager不能被释放！");
						t._resourceManagers.splice(t._resourceManagers.indexOf(this), 1), t._isResourceManagersSorted = !1;
						for (var e = this._resources.slice(0, this._resources.length), i = 0; i < e.length; i++) {
							var s = e[i];
							s.resourceManager.removeResource(s), s.destroy()
						}
						e.length = 0
					}, e.addSize = function (t) {
						t && (this.autoRelease && t > 0 && this._memorySize + t > this.autoReleaseMaxSize && this.garbageCollection((1 - this._garbageCollectionRate) * this.autoReleaseMaxSize), this._memorySize += t)
					}, e.garbageCollection = function (t) {
						var e = this._resources;
						(e = e.slice()).sort(function (t, e) {
							if (!t || !e) throw new Error("a或b不能为空！");
							return t.released && e.released ? 0 : t.released ? 1 : e.released ? -1 : t._lastUseFrameCount - e._lastUseFrameCount
						});
						for (var i = Z.loopCount, s = 0, n = e.length; s < n; s++) {
							var r = e[s];
							if (!(i - r._lastUseFrameCount > 1)) return void(this._memorySize >= t && (this._isOverflow = !0));
							if (r.releaseResource(), this._memorySize < t) return void(this._isOverflow = !1)
						}
					}, r(0, e, "id", function () {
						return this._id
					}), r(0, e, "name", function () {
						return this._name
					}, function (e) {
						!e && "" === e || this._name === e || (this._name = e, t._isResourceManagersSorted = !1)
					}), r(0, e, "memorySize", function () {
						return this._memorySize
					}), r(1, t, "systemResourceManager", function () {
						return t._systemResourceManager
					}), t.__init__ = function () {
						t.currentResourceManager = t.systemResourceManager
					}, t.getLoadedResourceManagerByIndex = function (e) {
						return t._resourceManagers[e]
					}, t.getLoadedResourceManagersCount = function () {
						return t._resourceManagers.length
					}, t.recreateContentManagers = function (e) {
						void 0 === e && (e = !1);
						for (var i = t.currentResourceManager, s = 0; s < t._resourceManagers.length; s++) {
							t.currentResourceManager = t._resourceManagers[s];
							for (var n = 0; n < t.currentResourceManager._resources.length; n++) t.currentResourceManager._resources[n].releaseResource(e), t.currentResourceManager._resources[n].activeResource(e)
						}
						t.currentResourceManager = i
					}, t.releaseContentManagers = function (e) {
						void 0 === e && (e = !1);
						for (var i = t.currentResourceManager, s = 0; s < t._resourceManagers.length; s++) {
							t.currentResourceManager = t._resourceManagers[s];
							for (var n = 0; n < t.currentResourceManager._resources.length; n++) {
								var r = t.currentResourceManager._resources[n];
								!r.released && r.releaseResource(e)
							}
						}
						t.currentResourceManager = i
					}, t._uniqueIDCounter = 0, t._isResourceManagersSorted = !1, t._resourceManagers = [], s(t, ["_systemResourceManager", function () {
						return this._systemResourceManager = new t("System Resource Manager")
					}, "currentResourceManager", function () {
						return this.currentResourceManager = t._systemResourceManager
					}]), t
				}(),
				z = function () {
					function t() {
						this.enable = !1, this.top = NaN, this.bottom = NaN, this.left = NaN, this.right = NaN, this.centerX = NaN, this.centerY = NaN, this.anchorX = NaN, this.anchorY = NaN
					}
					return n(t, "laya.ui.LayoutStyle"), s(t, ["EMPTY", function () {
						return this.EMPTY = new t
					}]), t
				}(),
				W = function () {
					function t() {}
					return n(t, "laya.ui.Styles"), t.labelColor = "#000000", t.buttonStateNum = 3, t.scrollBarMinNum = 15, t.scrollBarDelayTime = 500, s(t, ["defaultSizeGrid", function () {
						return this.defaultSizeGrid = [4, 4, 4, 4, 0]
					}, "labelPadding", function () {
						return this.labelPadding = [2, 2, 2, 2]
					}, "inputLabelPadding", function () {
						return this.inputLabelPadding = [1, 1, 1, 3]
					}, "buttonLabelColors", function () {
						return this.buttonLabelColors = ["#32556b", "#32cc6b", "#ff0000", "#C0C0C0"]
					}, "comboBoxItemColors", function () {
						return this.comboBoxItemColors = ["#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff"]
					}]), t
				}(),
				Y = function () {
					function t() {}
					return n(t, "laya.ui.UIUtils"), t.fillArray = function (t, e, i) {
						var s = t.concat();
						if (e)
							for (var n = e.split(","), r = 0, o = Math.min(s.length, n.length); r < o; r++) {
								var a = n[r];
								s[r] = "true" == a || "false" != a && a, null != i && (s[r] = i(a))
							}
						return s
					}, t.toColor = function (t) {
						return tt.toHexColor(t)
					}, t.gray = function (e, i) {
						void 0 === i && (i = !0), i ? t.addFilter(e, t.grayFilter) : t.clearFilter(e, Mt)
					}, t.addFilter = function (t, e) {
						var i = t.filters || [];
						i.push(e), t.filters = i
					}, t.clearFilter = function (t, e) {
						var s = t.filters;
						if (null != s && s.length > 0) {
							for (var n = s.length - 1; n > -1; n--) {
								var r = s[n];
								i.__typeof(r, e) && s.splice(n, 1)
							}
							t.filters = s
						}
					}, t._getReplaceStr = function (e) {
						return t.escapeSequence[e]
					}, t.adptString = function (e) {
						return e.replace(/\\(\w)/g, t._getReplaceStr)
					}, t.getBindFun = function (e) {
						var s = t._funMap.get(e);
						if (null == s) {
							var n = '"' + e + '"',
								r = "(function(data){if(data==null)return;with(data){try{\nreturn " + (n = n.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
							s = i._runScript(r), t._funMap.set(e, s)
						}
						return s
					}, s(t, ["grayFilter", function () {
						return this.grayFilter = new Mt([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0])
					}, "escapeSequence", function () {
						return this.escapeSequence = {
							"\\n": "\n",
							"\\t": "\t"
						}
					}, "_funMap", function () {
						return this._funMap = new it
					}]), t
				}(),
				H = function () {
					function s() {}
					return n(s, "laya.utils.Browser"), r(1, s, "pixelRatio", function () {
						return s.__init__(), s.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? 2 : o.getPixelRatio()
					}), r(1, s, "height", function () {
						return s.__init__(), (i.stage && i.stage.canvasRotation ? s.clientWidth : s.clientHeight) * s.pixelRatio
					}), r(1, s, "clientWidth", function () {
						return s.__init__(), s.window.innerWidth || s.document.body.clientWidth
					}), r(1, s, "window", function () {
						return s.__init__(), s._window
					}), r(1, s, "clientHeight", function () {
						return s.__init__(), s.window.innerHeight || s.document.body.clientHeight || s.document.documentElement.clientHeight
					}), r(1, s, "width", function () {
						return s.__init__(), (i.stage && i.stage.canvasRotation ? s.clientHeight : s.clientWidth) * s.pixelRatio
					}), r(1, s, "container", function () {
						return s.__init__(), s._container || ((s._container = s.createElement("div")).id = "layaContainer", s.document.body.appendChild(s._container)), s._container
					}, function (t) {
						s._container = t
					}), r(1, s, "document", function () {
						return s.__init__(), s._document
					}), s.__init__ = function () {
						if (!s._window) {
							s._window = o.getWindow(), s._document = s.window.document, s._window.addEventListener("message", function (t) {
								laya.utils.Browser._onMessage(t)
							}, !1), s.document.__createElement = s.document.createElement, t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
								return t.setTimeout(e, 1e3 / 60)
							};
							var i = t.document.body.style;
							i["-webkit-user-select"] = "none", i["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)", s.userAgent = s.window.navigator.userAgent, s.onIOS = !!(s.u = s.userAgent).match(/\(i[^;]+;(U;)? CPU.+Mac OS X/), s.onMobile = s.u.indexOf("Mobile") > -1, s.onIPhone = s.u.indexOf("iPhone") > -1, s.onMac = s.u.indexOf("Mac OS X") > -1, s.onIPad = s.u.indexOf("iPad") > -1, s.onAndroid = s.u.indexOf("Android") > -1 || s.u.indexOf("Adr") > -1, s.onWP = s.u.indexOf("Windows Phone") > -1, s.onQQBrowser = s.u.indexOf("QQBrowser") > -1, s.onMQQBrowser = s.u.indexOf("MQQBrowser") > -1 || s.u.indexOf("Mobile") > -1 && s.u.indexOf("QQ") > -1, s.onIE = !!s.window.ActiveXObject || "ActiveXObject" in s.window, s.onWeiXin = s.u.indexOf("MicroMessenger") > -1, s.onPC = !s.onMobile, s.onSafari = s.u.indexOf("Safari") > -1, s.onFirefox = s.u.indexOf("Firefox") > -1, s.onEdge = s.u.indexOf("Edge") > -1, s.onMiniGame = s.u.indexOf("MiniGame") > -1, s.onLimixiu = s.u.indexOf("limixiu") > -1, s.httpProtocol = "http:" == s.window.location.protocol, s.onMiniGame && null == s.window.focus && console.error("请先初始化小游戏适配库，详细教程https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"), s.webAudioEnabled = !!(s.window.AudioContext || s.window.webkitAudioContext || s.window.mozAudioContext), s.soundType = s.webAudioEnabled ? "WEBAUDIOSOUND" : "AUDIOSOUND", mt = s.webAudioEnabled ? vt : pt, s.webAudioEnabled && vt.initWebAudio(), pt._initMusicAudio(), s.enableTouch = "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch, t.focus(), k._soundClass = mt, k._musicClass = pt, B._mainCanvas = B._mainCanvas || Nt.create("2D"), s.canvas || (s.canvas = Nt.create("2D"), s.context = s.canvas.getContext("2d"))
						}
					}, s._onMessage = function (t) {
						if (t.data && "size" == t.data.name) {
							if (s.window.innerWidth = t.data.width, s.window.innerHeight = t.data.height, s.window.__innerHeight = t.data.clientHeight, !s.document.createEvent) return void console.warn("no document.createEvent");
							var e = s.document.createEvent("HTMLEvents");
							return e.initEvent("resize", !1, !1), void s.window.dispatchEvent(e)
						}
					}, s.createElement = function (t) {
						return s.__init__(), s.document.__createElement(t)
					}, s.getElementById = function (t) {
						return s.__init__(), s.document.getElementById(t)
					}, s.removeElement = function (t) {
						t && t.parentNode && t.parentNode.removeChild(t)
					}, s.now = function () {
						return o.now()
					}, s._window = null, s._document = null, s._container = null, s.userAgent = null, s.u = null, s.onIOS = !1, s.onMac = !1, s.onMobile = !1, s.onIPhone = !1, s.onIPad = !1, s.onAndroid = !1, s.onWP = !1, s.onQQBrowser = !1, s.onMQQBrowser = !1, s.onSafari = !1, s.onFirefox = !1, s.onEdge = !1, s.onIE = !1, s.onWeiXin = !1, s.onMiniGame = !1, s.onLimixiu = !1, s.onPC = !1, s.httpProtocol = !1, s.webAudioEnabled = !1, s.soundType = null, s.enableTouch = !1, s.canvas = null, s.context = null, s.__init$ = function () {}, s
				}(),
				G = function () {
					function t() {}
					return n(t, "laya.utils.CacheManager"), t.regCacheByFunction = function (e, i) {
						t.unRegCacheByFunction(e, i);
						var s;
						s = {
							tryDispose: e,
							getCacheList: i
						}, t._cacheList.push(s)
					}, t.unRegCacheByFunction = function (e, i) {
						var s = 0,
							n = 0;
						for (n = t._cacheList.length, s = 0; s < n; s++)
							if (t._cacheList[s].tryDispose == e && t._cacheList[s].getCacheList == i) return void t._cacheList.splice(s, 1)
					}, t.forceDispose = function () {
						var e = 0,
							i = t._cacheList.length;
						for (e = 0; e < i; e++) t._cacheList[e].tryDispose(!0)
					}, t.beginCheck = function (e) {
						void 0 === e && (e = 15e3), i.timer.loop(e, null, t._checkLoop)
					}, t.stopCheck = function () {
						i.timer.clear(null, t._checkLoop)
					}, t._checkLoop = function () {
						var e = t._cacheList;
						if (!(e.length < 1)) {
							var i = H.now(),
								s = 0,
								n = 0;
							for (n = s = e.length; s > 0 && (t._index++, t._index = t._index % n, e[t._index].tryDispose(!1), !(H.now() - i > t.loopTimeLimit));) s--
						}
					}, t.loopTimeLimit = 2, t._cacheList = [], t._index = 0, t
				}(),
				X = function () {
					function t() {}
					return n(t, "laya.utils.ClassUtils"), t.regClass = function (e, i) {
						t._classMap[e] = i
					}, t.getRegClass = function (e) {
						return t._classMap[e]
					}, t.getInstance = function (e) {
						var i = t.getClass(e);
						return i ? new i : (console.warn("[error] Undefined class:", e), null)
					}, t.createByJson = function (e, i, s, n, r) {
						"string" == typeof e && (e = JSON.parse(e));
						var o = e.props;
						if (!i && !(i = r ? r.runWith(e) : t.getInstance(o.runtime || e.type))) return null;
						var a = e.child;
						if (a)
							for (var h = 0, l = a.length; h < l; h++) {
								var c = a[h];
								if ("render" !== c.props.name && "render" !== c.props.renderType || !i._$set_itemRender)
									if ("Graphic" == c.type) t.addGraphicsToSprite(c, i);
									else if (t.isDrawType(c.type)) t.addGraphicToSprite(c, i, !0);
								else {
									var u = t.createByJson(c, null, s, n, r);
									"Script" == c.type ? u.hasOwnProperty("owner") ? u.owner = i : u.hasOwnProperty("target") && (u.target = i) : "mask" == c.props.renderType ? i.mask = u : i.addChild(u)
								} else i.itemRender = c
							}
						if (o)
							for (var _ in o) {
								var d = o[_];
								"var" === _ && s ? s[d] = i : d instanceof Array && "function" == typeof i[_] ? i[_].apply(i, d) : i[_] = d
							}
						return n && e.customProps && n.runWith([i, e]), i.created && i.created(), i
					}, t.addGraphicsToSprite = function (e, i) {
						var s;
						if ((s = e.child) && !(s.length < 1)) {
							var n;
							n = t._getGraphicsFromSprite(e, i);
							var r = 0,
								o = 0;
							e.props && (r = t._getObjVar(e.props, "x", 0), o = t._getObjVar(e.props, "y", 0)), 0 != r && 0 != o && n.translate(r, o);
							var a = 0,
								h = 0;
							for (h = s.length, a = 0; a < h; a++) t._addGraphicToGraphics(s[a], n);
							0 != r && 0 != o && n.translate(-r, -o)
						}
					}, t.addGraphicToSprite = function (e, i, s) {
						void 0 === s && (s = !1);
						var n;
						n = s ? t._getGraphicsFromSprite(e, i) : i.graphics, t._addGraphicToGraphics(e, n)
					}, t._getGraphicsFromSprite = function (t, e) {
						var i;
						if (!t || !t.props) return e.graphics;
						var s;
						switch (s = t.props.renderType) {
							case "hit":
							case "unHit":
								var n;
								e.hitArea || (e.hitArea = new K), (n = e.hitArea)[s] || (n[s] = new _), i = n[s]
						}
						return i || (i = e.graphics), i
					}, t._getTransformData = function (e) {
						var i;
						(e.hasOwnProperty("pivotX") || e.hasOwnProperty("pivotY")) && (i = i || new I).translate(-t._getObjVar(e, "pivotX", 0), -t._getObjVar(e, "pivotY", 0));
						var s = t._getObjVar(e, "scaleX", 1),
							n = t._getObjVar(e, "scaleY", 1),
							r = t._getObjVar(e, "rotation", 0);
						t._getObjVar(e, "skewX", 0), t._getObjVar(e, "skewY", 0);
						return 1 == s && 1 == n && 0 == r || ((i = i || new I).scale(s, n), i.rotate(.0174532922222222 * r)), i
					}, t._addGraphicToGraphics = function (e, i) {
						var s;
						if (s = e.props) {
							var n;
							if (n = t.DrawTypeDic[e.type]) {
								var r;
								r = i;
								var o, a = t._getParams(s, n[1], n[2], n[3]);
								((o = t._tM) || 1 != t._alpha) && (r.save(), o && r.transform(o), 1 != t._alpha && r.alpha(t._alpha)), r[n[0]].apply(r, a), (o || 1 != t._alpha) && r.restore()
							}
						}
					}, t._adptLineData = function (t) {
						return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), t
					}, t._adptTextureData = function (t) {
						return t[0] = xt.getRes(t[0]), t
					}, t._adptLinesData = function (e) {
						return e[2] = t._getPointListByStr(e[2]), e
					}, t.isDrawType = function (e) {
						return "Image" != e && t.DrawTypeDic.hasOwnProperty(e)
					}, t._getParams = function (e, i, s, n) {
						void 0 === s && (s = 0);
						var r;
						(r = t._temParam).length = i.length;
						var o = 0,
							a = 0;
						for (a = i.length, o = 0; o < a; o++) r[o] = t._getObjVar(e, i[o][0], i[o][1]);
						t._alpha = t._getObjVar(e, "alpha", 1);
						var h;
						return (h = t._getTransformData(e)) ? (s || (s = 0), h.translate(r[s], r[s + 1]), r[s] = r[s + 1] = 0, t._tM = h) : t._tM = null, n && t[n] && (r = t[n](r)), r
					}, t._getPointListByStr = function (t) {
						var e, i = 0,
							s = 0;
						for (s = (e = t.split(",")).length, i = 0; i < s; i++) e[i] = parseFloat(e[i]);
						return e
					}, t._getObjVar = function (t, e, i) {
						return t.hasOwnProperty(e) ? t[e] : i
					}, t._temParam = [], t._classMap = {
						Sprite: "laya.display.Sprite",
						Text: "laya.display.Text",
						Animation: "laya.display.Animation",
						Skeleton: "laya.ani.bone.Skeleton",
						Particle2D: "laya.particle.Particle2D",
						div: "laya.html.dom.HTMLDivElement",
						p: "laya.html.dom.HTMLElement",
						img: "laya.html.dom.HTMLImageElement",
						span: "laya.html.dom.HTMLElement",
						br: "laya.html.dom.HTMLBrElement",
						style: "laya.html.dom.HTMLStyleElement",
						font: "laya.html.dom.HTMLElement",
						a: "laya.html.dom.HTMLElement",
						"#text": "laya.html.dom.HTMLElement"
					}, t.getClass = function (e) {
						var s = t._classMap[e] || e;
						return "string" == typeof s ? i.__classmap[s] : s
					}, t._tM = null, t._alpha = NaN, s(t, ["DrawTypeDic", function () {
						return this.DrawTypeDic = {
							Rect: ["drawRect", [
								["x", 0],
								["y", 0],
								["width", 0],
								["height", 0],
								["fillColor", null],
								["lineColor", null],
								["lineWidth", 1]
							]],
							Circle: ["drawCircle", [
								["x", 0],
								["y", 0],
								["radius", 0],
								["fillColor", null],
								["lineColor", null],
								["lineWidth", 1]
							]],
							Pie: ["drawPie", [
								["x", 0],
								["y", 0],
								["radius", 0],
								["startAngle", 0],
								["endAngle", 0],
								["fillColor", null],
								["lineColor", null],
								["lineWidth", 1]
							]],
							Image: ["drawTexture", [
								["x", 0],
								["y", 0],
								["width", 0],
								["height", 0]
							]],
							Texture: ["drawTexture", [
								["skin", null],
								["x", 0],
								["y", 0],
								["width", 0],
								["height", 0]
							], 1, "_adptTextureData"],
							FillTexture: ["fillTexture", [
								["skin", null],
								["x", 0],
								["y", 0],
								["width", 0],
								["height", 0],
								["repeat", null]
							], 1, "_adptTextureData"],
							FillText: ["fillText", [
								["text", ""],
								["x", 0],
								["y", 0],
								["font", null],
								["color", null],
								["textAlign", null]
							], 1],
							Line: ["drawLine", [
								["x", 0],
								["y", 0],
								["toX", 0],
								["toY", 0],
								["lineColor", null],
								["lineWidth", 0]
							], 0, "_adptLineData"],
							Lines: ["drawLines", [
								["x", 0],
								["y", 0],
								["points", ""],
								["lineColor", null],
								["lineWidth", 0]
							], 0, "_adptLinesData"],
							Curves: ["drawCurves", [
								["x", 0],
								["y", 0],
								["points", ""],
								["lineColor", null],
								["lineWidth", 0]
							], 0, "_adptLinesData"],
							Poly: ["drawPoly", [
								["x", 0],
								["y", 0],
								["points", ""],
								["fillColor", null],
								["lineColor", null],
								["lineWidth", 1]
							], 0, "_adptLinesData"]
						}
					}]), t
				}(),
				U = function () {
					function t(e) {
						if (this._color = [], "string" == typeof e) {
							this.strColor = e, null === e && (e = "#000000"), "#" == e.charAt(0) && (e = e.substr(1));
							var i = e.length;
							if (3 == i || 4 == i) {
								for (var s = "", n = 0; n < i; n++) s += e[n] + e[n];
								e = s
							}
							var r = this.numColor = parseInt(e, 16);
							if (8 == e.length) return void(this._color = [parseInt(e.substr(0, 2), 16) / 255, ((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255])
						} else r = this.numColor = e, this.strColor = tt.toHexColor(r);
						this._color = [((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255, 1], this._color.__id = ++t._COLODID
					}
					return n(t, "laya.utils.Color", null, "Color$1"), t._initDefault = function () {
						t._DEFAULT = {};
						for (var e in t._COLOR_MAP) t._SAVE[e] = t._DEFAULT[e] = new t(t._COLOR_MAP[e]);
						return t._DEFAULT
					}, t._initSaveMap = function () {
						t._SAVE_SIZE = 0, t._SAVE = {};
						for (var e in t._DEFAULT) t._SAVE[e] = t._DEFAULT[e]
					}, t.create = function (e) {
						var i = t._SAVE[e + ""];
						return null != i ? i : (t._SAVE_SIZE < 1e3 || t._initSaveMap(), t._SAVE[e + ""] = new t(e))
					}, t._SAVE = {}, t._SAVE_SIZE = 0, t._COLOR_MAP = {
						white: "#FFFFFF",
						red: "#FF0000",
						green: "#00FF00",
						blue: "#0000FF",
						black: "#000000",
						yellow: "#FFFF00",
						gray: "#AAAAAA"
					}, t._DEFAULT = t._initDefault(), t._COLODID = 1, t
				}(),
				V = function () {
					function t() {
						this._values = [], this._keys = []
					}
					n(t, "laya.utils.Dictionary");
					var e = t.prototype;
					return e.set = function (t, e) {
						var i = this.indexOf(t);
						i >= 0 ? this._values[i] = e : (this._keys.push(t), this._values.push(e))
					}, e.indexOf = function (t) {
						var e = this._keys.indexOf(t);
						return e >= 0 ? e : (t = "string" == typeof t ? Number(t) : "number" == typeof t ? t.toString() : t, this._keys.indexOf(t))
					}, e.get = function (t) {
						var e = this.indexOf(t);
						return e < 0 ? null : this._values[e]
					}, e.remove = function (t) {
						var e = this.indexOf(t);
						return e >= 0 && (this._keys.splice(e, 1), this._values.splice(e, 1), !0)
					}, e.clear = function () {
						this._values.length = 0, this._keys.length = 0
					}, r(0, e, "values", function () {
						return this._values
					}), r(0, e, "keys", function () {
						return this._keys
					}), t
				}(),
				$ = function () {
					function t() {
						this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0
					}
					n(t, "laya.utils.Dragging");
					var e = t.prototype;
					return e.start = function (t, e, s, n, r, o, a, h) {
						void 0 === h && (h = .92), this.clearTimer(), this.target = t, this.area = e, this.hasInertia = s, this.elasticDistance = e ? n : 0, this.elasticBackTime = r, this.data = o, this._disableMouseEvent = a, this.ratio = h, 1 != t.globalScaleX || 1 != t.globalScaleY ? this._parent = t.parent : this._parent = i.stage, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, i.stage.on("mouseup", this, this.onStageMouseUp), i.stage.on("mouseout", this, this.onStageMouseUp), i.timer.frameLoop(1, this, this.loop)
					}, e.clearTimer = function () {
						i.timer.clear(this, this.loop), i.timer.clear(this, this.tweenMove), this._tween && (this._tween.recover(), this._tween = null)
					}, e.stop = function () {
						this._dragging && (x.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), i.stage.off("mouseout", this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), this.clear())
					}, e.loop = function () {
						var t = this._parent.getMousePoint(),
							e = t.x,
							s = t.y,
							n = e - this._lastX,
							r = s - this._lastY;
						if (this._clickOnly) {
							if (!(Math.abs(n * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(r * i.stage._canvasTransform.getScaleY()) > 1)) return;
							this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this.target.event("dragstart", this.data), x.instance.disableMouseEvent = this._disableMouseEvent, this.target._set$P("$_MOUSEDOWN", !1)
						} else this._offsets.push(n, r);
						0 === n && 0 === r || (this._lastX = e, this._lastY = s, this.target.x += n * this._elasticRateX, this.target.y += r * this._elasticRateY, this.area && this.checkArea(), this.target.event("dragmove", this.data))
					}, e.checkArea = function () {
						if (this.elasticDistance <= 0) this.backToArea();
						else {
							if (this.target.x < this.area.x) var t = this.area.x - this.target.x;
							else t = this.target.x > this.area.x + this.area.width ? this.target.x - this.area.x - this.area.width : 0;
							if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target.y < this.area.y) var e = this.area.y - this.target.y;
							else e = this.target.y > this.area.y + this.area.height ? this.target.y - this.area.y - this.area.height : 0;
							this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance)
						}
					}, e.backToArea = function () {
						this.target.x = Math.min(Math.max(this.target.x, this.area.x), this.area.x + this.area.width), this.target.y = Math.min(Math.max(this.target.y, this.area.y), this.area.y + this.area.height)
					}, e.onStageMouseUp = function (t) {
						if (x.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), i.stage.off("mouseout", this, this.onStageMouseUp), i.timer.clear(this, this.loop), !this._clickOnly && this.target)
							if (this.hasInertia) {
								this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), this._offsetX = this._offsetY = 0;
								for (var e = this._offsets.length, s = Math.min(e, 6), n = this._offsets.length - s, r = e - 1; r > n; r--) this._offsetY += this._offsets[r--], this._offsetX += this._offsets[r];
								this._offsetX = this._offsetX / s * 2, this._offsetY = this._offsetY / s * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), i.timer.frameLoop(1, this, this.tweenMove)
							} else this.elasticDistance > 0 ? this.checkElastic() : this.clear()
					}, e.checkElastic = function () {
						var t = NaN,
							e = NaN;
						if (this.target.x < this.area.x ? t = this.area.x : this.target.x > this.area.x + this.area.width && (t = this.area.x + this.area.width), this.target.y < this.area.y ? e = this.area.y : this.target.y > this.area.y + this.area.height && (e = this.area.y + this.area.height), isNaN(t) && isNaN(e)) this.clear();
						else {
							var i = {};
							isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = Q.to(this.target, i, this.elasticBackTime, j.sineOut, l.create(this, this.clear), 0, !1, !1)
						}
					}, e.tweenMove = function () {
						this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), this.target.event("dragmove", this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.timer.clear(this, this.tweenMove), this.elasticDistance > 0 ? this.checkElastic() : this.clear())
					}, e.clear = function () {
						if (this.target) {
							this.clearTimer();
							var t = this.target;
							this.target = null, this._parent = null, t.event("dragend", this.data)
						}
					}, t
				}(),
				j = function () {
					function t() {}
					return n(t, "laya.utils.Ease"), t.linearNone = function (t, e, i, s) {
						return i * t / s + e
					}, t.linearIn = function (t, e, i, s) {
						return i * t / s + e
					}, t.linearInOut = function (t, e, i, s) {
						return i * t / s + e
					}, t.linearOut = function (t, e, i, s) {
						return i * t / s + e
					}, t.bounceIn = function (e, i, s, n) {
						return s - t.bounceOut(n - e, 0, s, n) + i
					}, t.bounceInOut = function (e, i, s, n) {
						return e < .5 * n ? .5 * t.bounceIn(2 * e, 0, s, n) + i : .5 * t.bounceOut(2 * e - n, 0, s, n) + .5 * s + i
					}, t.bounceOut = function (t, e, i, s) {
						return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
					}, t.backIn = function (t, e, i, s, n) {
						return void 0 === n && (n = 1.70158), i * (t /= s) * t * ((n + 1) * t - n) + e
					}, t.backInOut = function (t, e, i, s, n) {
						return void 0 === n && (n = 1.70158), (t /= .5 * s) < 1 ? .5 * i * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : i / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
					}, t.backOut = function (t, e, i, s, n) {
						return void 0 === n && (n = 1.70158), i * ((t = t / s - 1) * t * ((n + 1) * t + n) + 1) + e
					}, t.elasticIn = function (e, i, s, n, r, o) {
						void 0 === r && (r = 0), void 0 === o && (o = 0);
						var a;
						return 0 == e ? i : 1 == (e /= n) ? i + s : (o || (o = .3 * n), !r || s > 0 && r < s || s < 0 && r < -s ? (r = s, a = o / 4) : a = o / t.PI2 * Math.asin(s / r), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - a) * t.PI2 / o) + i)
					}, t.elasticInOut = function (e, i, s, n, r, o) {
						void 0 === r && (r = 0), void 0 === o && (o = 0);
						var a;
						return 0 == e ? i : 2 == (e /= .5 * n) ? i + s : (o || (o = n * (.3 * 1.5)), !r || s > 0 && r < s || s < 0 && r < -s ? (r = s, a = o / 4) : a = o / t.PI2 * Math.asin(s / r), e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - a) * t.PI2 / o) * -.5 + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - a) * t.PI2 / o) * .5 + s + i)
					}, t.elasticOut = function (e, i, s, n, r, o) {
						void 0 === r && (r = 0), void 0 === o && (o = 0);
						var a;
						return 0 == e ? i : 1 == (e /= n) ? i + s : (o || (o = .3 * n), !r || s > 0 && r < s || s < 0 && r < -s ? (r = s, a = o / 4) : a = o / t.PI2 * Math.asin(s / r), r * Math.pow(2, -10 * e) * Math.sin((e * n - a) * t.PI2 / o) + s + i)
					}, t.strongIn = function (t, e, i, s) {
						return i * (t /= s) * t * t * t * t + e
					}, t.strongInOut = function (t, e, i, s) {
						return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
					}, t.strongOut = function (t, e, i, s) {
						return i * ((t = t / s - 1) * t * t * t * t + 1) + e
					}, t.sineInOut = function (t, e, i, s) {
						return .5 * -i * (Math.cos(Math.PI * t / s) - 1) + e
					}, t.sineIn = function (e, i, s, n) {
						return -s * Math.cos(e / n * t.HALF_PI) + s + i
					}, t.sineOut = function (e, i, s, n) {
						return s * Math.sin(e / n * t.HALF_PI) + i
					}, t.quintIn = function (t, e, i, s) {
						return i * (t /= s) * t * t * t * t + e
					}, t.quintInOut = function (t, e, i, s) {
						return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
					}, t.quintOut = function (t, e, i, s) {
						return i * ((t = t / s - 1) * t * t * t * t + 1) + e
					}, t.quartIn = function (t, e, i, s) {
						return i * (t /= s) * t * t * t + e
					}, t.quartInOut = function (t, e, i, s) {
						return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e
					}, t.quartOut = function (t, e, i, s) {
						return -i * ((t = t / s - 1) * t * t * t - 1) + e
					}, t.cubicIn = function (t, e, i, s) {
						return i * (t /= s) * t * t + e
					}, t.cubicInOut = function (t, e, i, s) {
						return (t /= .5 * s) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e
					}, t.cubicOut = function (t, e, i, s) {
						return i * ((t = t / s - 1) * t * t + 1) + e
					}, t.quadIn = function (t, e, i, s) {
						return i * (t /= s) * t + e
					}, t.quadInOut = function (t, e, i, s) {
						return (t /= .5 * s) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e
					}, t.quadOut = function (t, e, i, s) {
						return -i * (t /= s) * (t - 2) + e
					}, t.expoIn = function (t, e, i, s) {
						return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i
					}, t.expoInOut = function (t, e, i, s) {
						return 0 == t ? e : t == s ? e + i : (t /= .5 * s) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e
					}, t.expoOut = function (t, e, i, s) {
						return t == s ? e + i : i * (1 - Math.pow(2, -10 * t / s)) + e
					}, t.circIn = function (t, e, i, s) {
						return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
					}, t.circInOut = function (t, e, i, s) {
						return (t /= .5 * s) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
					}, t.circOut = function (t, e, i, s) {
						return i * Math.sqrt(1 - (t = t / s - 1) * t) + e
					}, t.HALF_PI = .5 * Math.PI, t.PI2 = 2 * Math.PI, t
				}(),
				K = function () {
					function t() {
						this._hit = null, this._unHit = null
					}
					n(t, "laya.utils.HitArea");
					var e = t.prototype;
					return e.isHit = function (e, i) {
						return !!t.isHitGraphic(e, i, this.hit) && !t.isHitGraphic(e, i, this.unHit)
					}, e.contains = function (t, e) {
						return this.isHit(t, e)
					}, r(0, e, "hit", function () {
						return this._hit || (this._hit = new _), this._hit
					}, function (t) {
						this._hit = t
					}), r(0, e, "unHit", function () {
						return this._unHit || (this._unHit = new _), this._unHit
					}, function (t) {
						this._unHit = t
					}), t.isHitGraphic = function (e, i, s) {
						if (!s) return !1;
						var n;
						if (!(n = s.cmds) && s._one && ((n = t._cmds).length = 1, n[0] = s._one), !n) return !1;
						var r = 0,
							o = 0;
						o = n.length;
						var a;
						for (r = 0; r < o; r++)
							if (a = n[r]) {
								var h = B._context;
								switch (a.callee) {
									case h._translate:
									case 6:
										e -= a[0], i -= a[1]
								}
								if (t.isHitCmd(e, i, a)) return !0
							} return !1
					}, t.isHitCmd = function (e, i, s) {
						if (!s) return !1;
						var n = B._context,
							r = !1;
						switch (s.callee) {
							case n._drawRect:
							case 13:
								t._rec.setTo(s[0], s[1], s[2], s[3]), r = t._rec.contains(e, i);
								break;
							case n._drawCircle:
							case n._fillCircle:
							case 14:
								r = (e -= s[0]) * e + (i -= s[1]) * i < s[2] * s[2];
								break;
							case n._drawPoly:
							case 18:
								e -= s[0], i -= s[1], r = t.ptInPolygon(e, i, s[2])
						}
						return r
					}, t.ptInPolygon = function (e, i, s) {
						var n;
						(n = t._ptPoint).setTo(e, i);
						var r = 0,
							o = NaN,
							a = NaN,
							h = NaN,
							l = NaN,
							c = 0;
						c = s.length;
						for (var u = 0; u < c; u += 2)
							if (o = s[u], a = s[u + 1], h = s[(u + 2) % c], l = s[(u + 3) % c], a != l && !(n.y < Math.min(a, l) || n.y >= Math.max(a, l))) {
								(n.y - a) * (h - o) / (l - a) + o > n.x && r++
							} return r % 2 == 1
					}, t._cmds = [], s(t, ["_rec", function () {
						return this._rec = new L
					}, "_ptPoint", function () {
						return this._ptPoint = new P
					}]), t
				}(),
				q = (function () {
					function t(e, i, s, n) {
						this.char = e, this.charNum = e.charCodeAt(0), this._x = this._y = 0, this.width = i, this.height = s, this.style = n, this.isWord = !t._isWordRegExp.test(e)
					}
					n(t, "laya.utils.HTMLChar");
					var e = t.prototype;
					i.imps(e, {
						"laya.display.ILayout": !0
					}), e.setSprite = function (t) {
						this._sprite = t
					}, e.getSprite = function () {
						return this._sprite
					}, e._isChar = function () {
						return !0
					}, e._getCSSStyle = function () {
						return this.style
					}, r(0, e, "width", function () {
						return this._w
					}, function (t) {
						this._w = t
					}), r(0, e, "x", function () {
						return this._x
					}, function (t) {
						this._sprite && (this._sprite.x = t), this._x = t
					}), r(0, e, "y", function () {
						return this._y
					}, function (t) {
						this._sprite && (this._sprite.y = t), this._y = t
					}), r(0, e, "height", function () {
						return this._h
					}, function (t) {
						this._h = t
					}), t._isWordRegExp = new RegExp("[\\w.]", "")
				}(), function () {
					function t() {}
					return n(t, "laya.utils.Pool"), t.getPoolBySign = function (e) {
						return t._poolDic[e] || (t._poolDic[e] = [])
					}, t.clearBySign = function (e) {
						t._poolDic[e] && (t._poolDic[e].length = 0)
					}, t.recover = function (e, i) {
						i.__InPool || (i.__InPool = !0, t.getPoolBySign(e).push(i))
					}, t.getItemByClass = function (e, i) {
						var s = t.getPoolBySign(e),
							n = s.length ? s.pop() : new i;
						return n.__InPool = !1, n
					}, t.getItemByCreateFun = function (e, i, s) {
						var n = t.getPoolBySign(e),
							r = n.length ? n.pop() : i.call(s);
						return r.__InPool = !1, r
					}, t.getItem = function (e) {
						var i = t.getPoolBySign(e),
							s = i.length ? i.pop() : null;
						return s && (s.__InPool = !1), s
					}, t._poolDic = {}, t.InPoolSign = "__InPool", t
				}()),
				Z = function () {
					function t() {}
					return n(t, "laya.utils.Stat"), r(1, t, "onclick", null, function (e) {
						t._sp && t._sp.on("click", t._sp, e), t._canvas && (t._canvas.source.onclick = e, t._canvas.source.style.pointerEvents = "")
					}), t.show = function (e, i) {
						void 0 === e && (e = 0), void 0 === i && (i = 0), !B.isConchApp || B.isConchWebGL ? (B.isConchWebGL || H.onMiniGame || H.onLimixiu || (t._useCanvas = !0), t._show = !0, t._fpsData.length = 60, t._view[0] = {
							title: "FPS(Canvas)",
							value: "_fpsStr",
							color: "yellow",
							units: "int"
						}, t._view[1] = {
							title: "Sprite",
							value: "_spriteStr",
							color: "white",
							units: "int"
						}, t._view[2] = {
							title: "DrawCall",
							value: "drawCall",
							color: "white",
							units: "int"
						}, t._view[3] = {
							title: "CurMem",
							value: "currentMemorySize",
							color: "yellow",
							units: "M"
						}, B.isWebGL ? (t._view[4] = {
							title: "Shader",
							value: "shaderCall",
							color: "white",
							units: "int"
						}, B.is3DMode ? (t._view[0].title = "FPS(3D)", t._view[5] = {
							title: "TriFaces",
							value: "trianglesFaces",
							color: "white",
							units: "int"
						}, t._view[6] = {
							title: "treeNodeColl",
							value: "treeNodeCollision",
							color: "white",
							units: "int"
						}, t._view[7] = {
							title: "treeSpriteColl",
							value: "treeSpriteCollision",
							color: "white",
							units: "int"
						}) : (t._view[0].title = "FPS(WebGL)", t._view[5] = {
							title: "Canvas",
							value: "_canvasStr",
							color: "white",
							units: "int"
						})) : t._view[4] = {
							title: "Canvas",
							value: "_canvasStr",
							color: "white",
							units: "int"
						}, t._useCanvas ? t.createUIPre(e, i) : t.createUI(e, i), t.enable()) : H.window.conch.showFPS && H.window.conch.showFPS(e, i)
					}, t.createUIPre = function (e, i) {
						var s = H.pixelRatio;
						t._width = 130 * s, t._vx = 75 * s, t._height = s * (12 * t._view.length + 3 * s) + 4, t._fontSize = 12 * s;
						for (var n = 0; n < t._view.length; n++) t._view[n].x = 4, t._view[n].y = n * t._fontSize + 2 * s;
						t._canvas || ((t._canvas = new Nt("2D")).size(t._width, t._height), (t._ctx = t._canvas.getContext("2d")).textBaseline = "top", t._ctx.font = t._fontSize + "px Sans-serif", t._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + e + "px;top:" + i + "px;width:" + t._width / s + "px;height:" + t._height / s + "px;"), t._first = !0, t.loop(), t._first = !1, H.container.appendChild(t._canvas.source)
					}, t.createUI = function (e, i) {
						var s = t._sp,
							n = H.pixelRatio;
						s || (s = new It, (t._leftText = new Rt).pos(5, 5), t._leftText.color = "#ffffff", s.addChild(t._leftText), (t._txt = new Rt).pos(80 * n, 5), t._txt.color = "#ffffff", s.addChild(t._txt), t._sp = s), s.pos(e, i);
						for (var r = "", o = 0; o < t._view.length; o++) {
							r += t._view[o].title + "\n"
						}
						t._leftText.text = r;
						var a = 138 * n,
							h = n * (12 * t._view.length + 3 * n) + 4;
						t._txt.fontSize = t._fontSize * n, t._leftText.fontSize = t._fontSize * n, s.size(a, h), s.graphics.clear(), s.graphics.setAlpha(.5), s.graphics.drawRect(0, 0, a, h, "#999999"), s.graphics.setAlpha(1), t.loop()
					}, t.enable = function () {
						i.timer.frameLoop(1, t, t.loop)
					}, t.hide = function () {
						t._show = !1, i.timer.clear(t, t.loop), t._canvas && H.removeElement(t._canvas.source)
					}, t.clear = function () {
						t.trianglesFaces = t.drawCall = t.shaderCall = t.spriteCount = t.spriteRenderUseCacheCount = t.treeNodeCollision = t.treeSpriteCollision = t.canvasNormal = t.canvasBitmap = t.canvasReCache = 0
					}, t.loop = function () {
						t._count++;
						var e = H.now();
						if (!(e - t._timer < 1e3)) {
							var i = t._count;
							if (t.FPS = Math.round(1e3 * i / (e - t._timer)), t._show) {
								t.trianglesFaces = Math.round(t.trianglesFaces / i), t._useCanvas ? (t.drawCall = Math.round(t.drawCall / i) - 2, t.shaderCall = Math.round(t.shaderCall / i), t.spriteCount = Math.round(t.spriteCount / i) - 1) : (t.drawCall = Math.round(t.drawCall / i) - 2, t.shaderCall = Math.round(t.shaderCall / i) - 4, t.spriteCount = Math.round(t.spriteCount / i) - 4), t.spriteRenderUseCacheCount = Math.round(t.spriteRenderUseCacheCount / i), t.canvasNormal = Math.round(t.canvasNormal / i), t.canvasBitmap = Math.round(t.canvasBitmap / i), t.canvasReCache = Math.ceil(t.canvasReCache / i), t.treeNodeCollision = Math.round(t.treeNodeCollision / i), t.treeSpriteCollision = Math.round(t.treeSpriteCollision / i);
								var s = t.FPS > 0 ? Math.floor(1e3 / t.FPS).toString() : " ";
								t._fpsStr = t.FPS + (t.renderSlow ? " slow" : "") + " " + s, t._spriteStr = t.spriteCount + (t.spriteRenderUseCacheCount ? "/" + t.spriteRenderUseCacheCount : ""), t._canvasStr = t.canvasReCache + "/" + t.canvasNormal + "/" + t.canvasBitmap, t.currentMemorySize = D.systemResourceManager.memorySize, t._useCanvas ? t.renderInfoPre() : t.renderInfo(), t.clear()
							}
							t._count = 0, t._timer = e
						}
					}, t.renderInfoPre = function () {
						if (t._canvas) {
							var e = t._ctx;
							e.clearRect(t._first ? 0 : t._vx, 0, t._width, t._height);
							for (var i = 0; i < t._view.length; i++) {
								var s = t._view[i];
								t._first && (e.fillStyle = "white", e.fillText(s.title, s.x, s.y, null, null, null)), e.fillStyle = s.color;
								var n = t[s.value];
								"M" == s.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), e.fillText(n + "", s.x + t._vx, s.y, null, null, null)
							}
						}
					}, t.renderInfo = function () {
						for (var e = "", i = 0; i < t._view.length; i++) {
							var s = t._view[i],
								n = t[s.value];
							"M" == s.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), "K" == s.units && (n = Math.floor(n / 1024 * 100) / 100 + " K"), e += n + "\n"
						}
						t._txt.text = e
					}, t.FPS = 0, t.loopCount = 0, t.shaderCall = 0, t.drawCall = 0, t.trianglesFaces = 0, t.spriteCount = 0, t.spriteRenderUseCacheCount = 0, t.treeNodeCollision = 0, t.treeSpriteCollision = 0, t.canvasNormal = 0, t.canvasBitmap = 0, t.canvasReCache = 0, t.renderSlow = !1, t.currentMemorySize = 0, t._fpsStr = null, t._canvasStr = null, t._spriteStr = null, t._fpsData = [], t._timer = 0, t._count = 0, t._view = [], t._fontSize = 12, t._txt = null, t._leftText = null, t._sp = null, t._show = !1, t._useCanvas = !1, t._canvas = null, t._ctx = null, t._first = !1, t._vx = NaN, t._width = 0, t._height = 100, t
				}(),
				J = function () {
					function t() {
						this._delta = 0, this.scale = 1, this.currFrame = 0, this._mid = 1, this._map = [], this._laters = [], this._handlers = [], this._temp = [], this._count = 0, this.currTimer = this._now(), this._lastTimer = this._now(), this._init()
					}
					var e;
					n(t, "laya.utils.Timer");
					var s = t.prototype;
					return s._init = function () {
						i.timer && i.timer.frameLoop(1, this, this._update)
					}, s._now = function () {
						return Date.now()
					}, s._update = function () {
						if (this.scale <= 0) this._lastTimer = this._now();
						else {
							var t = this.currFrame = this.currFrame + this.scale,
								e = this._now();
							this._delta = (e - this._lastTimer) * this.scale;
							var i = this.currTimer = this.currTimer + this._delta;
							this._lastTimer = e;
							var s = this._handlers;
							for (this._count = 0, o = 0, a = s.length; o < a; o++)
								if (null !== (h = s[o]).method) {
									var n = h.userFrame ? t : i;
									if (n >= h.exeTime)
										if (h.repeat)
											if (h.jumpFrame)
												for (; n >= h.exeTime;) h.exeTime += h.delay, h.run(!1);
											else h.exeTime += h.delay, h.run(!1), n > h.exeTime && (h.exeTime += Math.ceil((n - h.exeTime) / h.delay) * h.delay);
									else h.run(!0)
								} else this._count++;
							(this._count > 30 || t % 200 == 0) && this._clearHandlers();
							for (var r = this._laters, o = 0, a = r.length - 1; o <= a; o++) {
								var h = r[o];
								null !== h.method && (this._map[h.key] = null, h.run(!1)), this._recoverHandler(h), o === a && (a = r.length - 1)
							}
							r.length = 0
						}
					}, s._clearHandlers = function () {
						for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
							var s = t[e];
							null !== s.method ? this._temp.push(s) : this._recoverHandler(s)
						}
						this._handlers = this._temp, this._temp = t, this._temp.length = 0
					}, s._recoverHandler = function (e) {
						this._map[e.key] == e && (this._map[e.key] = null), e.clear(), t._pool.push(e)
					}, s._create = function (i, s, n, r, o, a, h) {
						if (!n) return o.apply(r, a), null;
						if (h) {
							var l = this._getHandler(r, o);
							if (l) return l.repeat = s, l.userFrame = i, l.delay = n, l.caller = r, l.method = o, l.args = a, l.exeTime = n + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer), l
						}
						return l = t._pool.length > 0 ? t._pool.pop() : new e, l.repeat = s, l.userFrame = i, l.delay = n, l.caller = r, l.method = o, l.args = a, l.exeTime = n + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer) + 1, this._indexHandler(l), this._handlers.push(l), l
					}, s._indexHandler = function (t) {
						var e = t.caller,
							i = t.method,
							s = e ? e.$_GID || (e.$_GID = tt.getGID()) : 0,
							n = i.$_TID || (i.$_TID = 1e5 * this._mid++);
						t.key = s + n, this._map[t.key] = t
					}, s.once = function (t, e, i, s, n) {
						void 0 === n && (n = !0), this._create(!1, !1, t, e, i, s, n)
					}, s.loop = function (t, e, i, s, n, r) {
						void 0 === n && (n = !0), void 0 === r && (r = !1);
						var o = this._create(!1, !0, t, e, i, s, n);
						o && (o.jumpFrame = r)
					}, s.frameOnce = function (t, e, i, s, n) {
						void 0 === n && (n = !0), this._create(!0, !1, t, e, i, s, n)
					}, s.frameLoop = function (t, e, i, s, n) {
						void 0 === n && (n = !0), this._create(!0, !0, t, e, i, s, n)
					}, s.toString = function () {
						return "callLater:" + this._laters.length + " handlers:" + this._handlers.length + " pool:" + t._pool.length
					}, s.clear = function (t, e) {
						var i = this._getHandler(t, e);
						i && (this._map[i.key] = null, i.key = 0, i.clear())
					}, s.clearAll = function (t) {
						if (t)
							for (var e = 0, i = this._handlers.length; e < i; e++) {
								var s = this._handlers[e];
								s.caller === t && (this._map[s.key] = null, s.key = 0, s.clear())
							}
					}, s._getHandler = function (t, e) {
						var i = t ? t.$_GID || (t.$_GID = tt.getGID()) : 0,
							s = e.$_TID || (e.$_TID = 1e5 * this._mid++);
						return this._map[i + s]
					}, s.callLater = function (i, s, n) {
						if (null == this._getHandler(i, s)) {
							if (t._pool.length) var r = t._pool.pop();
							else r = new e;
							r.caller = i, r.method = s, r.args = n, this._indexHandler(r), this._laters.push(r)
						}
					}, s.runCallLater = function (t, e) {
						var i = this._getHandler(t, e);
						i && null != i.method && (this._map[i.key] = null, i.run(!0))
					}, s.runTimer = function (t, e) {
						this.runCallLater(t, e)
					}, r(0, s, "delta", function () {
						return this._delta
					}), t._pool = [], t.__init$ = function () {
						e = function () {
							function t() {
								this.key = 0, this.repeat = !1, this.delay = 0, this.userFrame = !1, this.exeTime = 0, this.caller = null, this.method = null, this.args = null, this.jumpFrame = !1
							}
							n(t, "");
							var e = t.prototype;
							return e.clear = function () {
								this.caller = null, this.method = null, this.args = null
							}, e.run = function (t) {
								var e = this.caller;
								if (e && e.destroyed) return this.clear();
								var i = this.method,
									s = this.args;
								t && this.clear(), null != i && (s ? i.apply(e, s) : i.call(e))
							}, t
						}()
					}, t
				}(),
				Q = function () {
					function t() {
						this.gid = 0
					}
					n(t, "laya.utils.Tween");
					var e = t.prototype;
					return e.to = function (t, e, i, s, n, r, o) {
						return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, s, n, r, o, !0, !1, !0)
					}, e.from = function (t, e, i, s, n, r, o) {
						return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, s, n, r, o, !1, !1, !0)
					}, e._create = function (e, s, n, r, o, a, h, l, c, u) {
						if (!e) throw new Error("Tween:target is null");
						this._target = e, this._duration = n, this._ease = r || s.ease || t.easeNone, this._complete = o || s.complete, this._delay = a, this._props = [], this._usedTimer = 0, this._startTimer = H.now(), this._usedPool = c, this._delayParam = null, this.update = s.update;
						var _ = e.$_GID || (e.$_GID = tt.getGID());
						return t.tweenMap[_] ? (h && t.clearTween(e), t.tweenMap[_].push(this)) : t.tweenMap[_] = [this], u ? a <= 0 ? this.firstStart(e, s, l) : (this._delayParam = [e, s, l], i.scaleTimer.once(a, this, this.firstStart, this._delayParam)) : this._initProps(e, s, l), this
					}, e.firstStart = function (t, e, i) {
						this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i), this._beginLoop())
					}, e._initProps = function (t, e, i) {
						for (var s in e)
							if ("number" == typeof t[s]) {
								var n = i ? t[s] : e[s],
									r = i ? e[s] : t[s];
								this._props.push([s, n, r - n]), i || (t[s] = n)
							}
					}, e._beginLoop = function () {
						i.scaleTimer.frameLoop(1, this, this._doEase)
					}, e._doEase = function () {
						this._updateEase(H.now())
					}, e._updateEase = function (e) {
						var i = this._target;
						if (i) {
							if (i.destroyed) return t.clearTween(i);
							var s = this._usedTimer = e - this._startTimer - this._delay;
							if (!(s < 0)) {
								if (s >= this._duration) return this.complete();
								for (var n = s > 0 ? this._ease(s, 0, 1, this._duration) : 0, r = this._props, o = 0, a = r.length; o < a; o++) {
									var h = r[o];
									i[h[0]] = h[1] + n * h[2]
								}
								this.update && this.update.run()
							}
						}
					}, e.complete = function () {
						if (this._target) {
							i.scaleTimer.runTimer(this, this.firstStart);
							for (var t = this._target, e = this._props, s = this._complete, n = 0, r = e.length; n < r; n++) {
								var o = e[n];
								t[o[0]] = o[1] + o[2]
							}
							this.update && this.update.run(), this.clear(), s && s.run()
						}
					}, e.pause = function () {
						i.scaleTimer.clear(this, this._beginLoop), i.scaleTimer.clear(this, this._doEase), i.scaleTimer.clear(this, this.firstStart);
						var t = NaN;
						(t = H.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t)
					}, e.setStartTime = function (t) {
						this._startTimer = t
					}, e.clear = function () {
						this._target && (this._remove(), this._clear())
					}, e._clear = function () {
						this.pause(), i.scaleTimer.clear(this, this.firstStart), this._complete = null, this._target = null, this._ease = null, this._props = null, this._delayParam = null, this._usedPool && (this.update = null, q.recover("tween", this))
					}, e.recover = function () {
						this._usedPool = !0, this._clear()
					}, e._remove = function () {
						var e = t.tweenMap[this._target.$_GID];
						if (e)
							for (var i = 0, s = e.length; i < s; i++)
								if (e[i] === this) {
									e.splice(i, 1);
									break
								}
					}, e.restart = function () {
						if (this.pause(), this._usedTimer = 0, this._startTimer = H.now(), this._delayParam) i.scaleTimer.once(this._delay, this, this.firstStart, this._delayParam);
						else {
							for (var t = this._props, e = 0, s = t.length; e < s; e++) {
								var n = t[e];
								this._target[n[0]] = n[1]
							}
							i.scaleTimer.once(this._delay, this, this._beginLoop)
						}
					}, e.resume = function () {
						this._usedTimer >= this._duration || (this._startTimer = H.now() - this._usedTimer - this._delay, this._delayParam ? this._usedTimer < 0 ? i.scaleTimer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop())
					}, r(0, e, "progress", null, function (t) {
						var e = t * this._duration;
						this._startTimer = H.now() - this._delay - e
					}), t.to = function (e, i, s, n, r, o, a, h) {
						return void 0 === o && (o = 0), void 0 === a && (a = !1), void 0 === h && (h = !0), q.getItemByClass("tween", t)._create(e, i, s, n, r, o, a, !0, h, !0)
					}, t.from = function (e, i, s, n, r, o, a, h) {
						return void 0 === o && (o = 0), void 0 === a && (a = !1), void 0 === h && (h = !0), q.getItemByClass("tween", t)._create(e, i, s, n, r, o, a, !1, h, !0)
					}, t.clearAll = function (e) {
						if (e && e.$_GID) {
							var i = t.tweenMap[e.$_GID];
							if (i) {
								for (var s = 0, n = i.length; s < n; s++) i[s]._clear();
								i.length = 0
							}
						}
					}, t.clear = function (t) {
						t.clear()
					}, t.clearTween = function (e) {
						t.clearAll(e)
					}, t.easeNone = function (t, e, i, s) {
						return i * t / s + e
					}, t.tweenMap = {}, t
				}(),
				tt = function () {
					function t() {}
					return n(t, "laya.utils.Utils"), t.toRadian = function (e) {
						return e * t._pi2
					}, t.toAngle = function (e) {
						return e * t._pi
					}, t.toHexColor = function (t) {
						if (t < 0 || isNaN(t)) return null;
						for (var e = t.toString(16); e.length < 6;) e = "0" + e;
						return "#" + e
					}, t.getGID = function () {
						return t._gid++
					}, t.concatArray = function (t, e) {
						if (!e) return t;
						if (!t) return e;
						var i = 0,
							s = e.length;
						for (i = 0; i < s; i++) t.push(e[i]);
						return t
					}, t.clearArray = function (t) {
						return t ? (t.length = 0, t) : t
					}, t.copyArray = function (t, e) {
						if (t || (t = []), !e) return t;
						t.length = e.length;
						var i = 0,
							s = e.length;
						for (i = 0; i < s; i++) t[i] = e[i];
						return t
					}, t.getGlobalRecByPoints = function (t, e, i, s, n) {
						var r;
						r = new P(e, i), r = t.localToGlobal(r);
						var o;
						return o = new P(s, n), o = t.localToGlobal(o), L._getWrapRec([r.x, r.y, o.x, o.y])
					}, t.getGlobalPosAndScale = function (e) {
						return t.getGlobalRecByPoints(e, 0, 0, 1, 1)
					}, t.bind = function (t, e) {
						return t.bind(e)
					}, t.measureText = function (t, e) {
						return o.measureText(t, e)
					}, t.updateOrder = function (t) {
						if (!t || t.length < 2) return !1;
						for (var e, i = 1, s = 0, n = t.length, r = NaN; i < n;) {
							for (e = t[s = i], r = t[s]._zOrder; --s > -1 && t[s]._zOrder > r;) t[s + 1] = t[s];
							t[s + 1] = e, i++
						}
						var o = e.parent.conchModel;
						if (o)
							if (null != o.updateZOrder) o.updateZOrder();
							else {
								for (i = 0; i < n; i++) o.removeChild(t[i].conchModel);
								for (i = 0; i < n; i++) o.addChildAt(t[i].conchModel, i)
							} return !0
					}, t.transPointList = function (t, e, i) {
						var s = 0,
							n = t.length;
						for (s = 0; s < n; s += 2) t[s] += e, t[s + 1] += i
					}, t.parseInt = function (t, e) {
						void 0 === e && (e = 0);
						var i = H.window.parseInt(t, e);
						return isNaN(i) ? 0 : i
					}, t.getFileExtension = function (e) {
						t._extReg.lastIndex = e.lastIndexOf(".");
						var i = t._extReg.exec(e);
						return i && i.length > 1 ? i[1].toLowerCase() : null
					}, t.getTransformRelativeToWindow = function (t, e, s) {
						var n = i.stage,
							r = laya.utils.Utils.getGlobalPosAndScale(t),
							o = n._canvasTransform.clone(),
							a = o.tx,
							h = o.ty;
						o.rotate(-Math.PI / 180 * i.stage.canvasDegree), o.scale(i.stage.clientScaleX, i.stage.clientScaleY);
						var l = i.stage.canvasDegree % 180 != 0,
							c = NaN,
							u = NaN;
						l ? (c = s + r.y, u = e + r.x, c *= o.d, u *= o.a, 90 == i.stage.canvasDegree ? (c = a - c, u += h) : (c += a, u = h - u)) : (c = e + r.x, u = s + r.y, c *= o.a, u *= o.d, c += a, u += h);
						var _ = NaN,
							d = NaN;
						return l ? (_ = o.d * r.height, d = o.a * r.width) : (_ = o.a * r.width, d = o.d * r.height), {
							x: c,
							y: u,
							scaleX: _,
							scaleY: d
						}
					}, t.fitDOMElementInArea = function (e, s, n, r, o, a) {
						e._fitLayaAirInitialized || (e._fitLayaAirInitialized = !0, e.style.transformOrigin = e.style.webKittransformOrigin = "left top", e.style.position = "absolute");
						var h = t.getTransformRelativeToWindow(s, n, r);
						e.style.transform = e.style.webkitTransform = "scale(" + h.scaleX + "," + h.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", e.style.width = o + "px", e.style.height = a + "px", e.style.left = h.x + "px", e.style.top = h.y + "px"
					}, t.isOkTextureList = function (t) {
						if (!t) return !1;
						var e, i = 0,
							s = t.length;
						for (i = 0; i < s; i++)
							if (!(e = t[i]) || !e.source) return !1;
						return !0
					}, t.isOKCmdList = function (t) {
						if (!t) return !1;
						var e, i, s = 0,
							n = t.length,
							r = B._context;
						for (s = 0; s < n; s++) switch ((e = t[s]).callee) {
							case r._drawTexture:
							case r._fillTexture:
							case r._drawTextureWithTransform:
								if (!(i = e[0]) || !i.source) return !1
						}
						return !0
					}, t._gid = 1, t._pi = 180 / Math.PI, t._pi2 = Math.PI / 180, t._extReg = /\.(\w+)\??/g, t.parseXMLFromString = function (t) {
						var e;
						if (t = t.replace(/>\s+</g, "><"), (e = (new DOMParser).parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
						return e
					}, t
				}(),
				et = function () {
					function t() {
						this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, this._freeIdArray = [], B.isWebGL && G.regCacheByFunction(tt.bind(this.startDispose, this), tt.bind(this.getCacheList, this))
					}
					n(t, "laya.utils.VectorGraphManager");
					var e = t.prototype;
					return e.getId = function () {
						return this._id++
					}, e.addShape = function (t, e) {
						this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0)
					}, e.addLine = function (t, e) {
						this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0)
					}, e.getShape = function (t) {
						this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0)
					}, e.deleteShape = function (t) {
						this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t]
					}, e.getCacheList = function () {
						var t, e = [];
						for (t in this.shapeDic) e.push(this.shapeDic[t]);
						for (t in this.shapeLineDic) e.push(this.shapeLineDic[t]);
						return e
					}, e.startDispose = function (t) {
						var e;
						for (e in this.useDic) this.useDic[e] = !1;
						this._checkKey = !0
					}, e.endDispose = function () {
						if (this._checkKey) {
							var t;
							for (t in this.useDic) this.useDic[t] || this.deleteShape(t);
							this._checkKey = !1
						}
					}, t.getInstance = function () {
						return t.instance = t.instance || new t
					}, t.instance = null, t
				}(),
				it = function () {
					function t() {
						this._obj = null, this._obj = t.supportWeakMap ? new H.window.WeakMap : {}, t.supportWeakMap || t._maps.push(this)
					}
					n(t, "laya.utils.WeakObject");
					var e = t.prototype;
					return e.set = function (e, i) {
						if (null != e)
							if (t.supportWeakMap) {
								var s = e;
								"string" != typeof e && "number" != typeof e || (s = t._keys[e]) || (s = t._keys[e] = {
									k: e
								}), this._obj.set(s, i)
							} else "string" == typeof e || "number" == typeof e ? this._obj[e] = i : (e.$_GID || (e.$_GID = tt.getGID()), this._obj[e.$_GID] = i)
					}, e.get = function (e) {
						if (null == e) return null;
						if (t.supportWeakMap) {
							var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
							return i ? this._obj.get(i) : null
						}
						return "string" == typeof e || "number" == typeof e ? this._obj[e] : this._obj[e.$_GID]
					}, e.del = function (e) {
						if (null != e)
							if (t.supportWeakMap) {
								var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
								if (!i) return;
								this._obj.delete(i)
							} else "string" == typeof e || "number" == typeof e ? delete this._obj[e] : delete this._obj[this._obj.$_GID]
					}, e.has = function (e) {
						if (null == e) return !1;
						if (t.supportWeakMap) {
							var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
							return this._obj.has(i)
						}
						return "string" == typeof e || "number" == typeof e ? null != this._obj[e] : null != this._obj[this._obj.$_GID]
					}, t.__init__ = function () {
						(t.supportWeakMap = null != H.window.WeakMap) || i.timer.loop(t.delInterval, null, t.clearCache)
					}, t.clearCache = function () {
						for (var e = 0, i = t._maps.length; e < i; e++) {
							t._maps[e]._obj = {}
						}
					}, t.supportWeakMap = !1, t.delInterval = 3e5, t._keys = {}, t._maps = [], s(t, ["I", function () {
						return this.I = new t
					}]), t
				}(),
				st = function () {
					function t() {
						this.id = NaN, this.save = [], this.toUpperCase = null, this.changed = !1, this._text = null
					}
					n(t, "laya.utils.WordText");
					var e = t.prototype;
					return e.setText = function (t) {
						this.changed = !0, this._text = t
					}, e.toString = function () {
						return this._text
					}, e.charCodeAt = function (t) {
						return this._text ? this._text.charCodeAt(t) : NaN
					}, e.charAt = function (t) {
						return this._text ? this._text.charAt(t) : null
					}, r(0, e, "length", function () {
						return this._text ? this._text.length : 0
					}), t
				}(),
				nt = function () {
					function e() {}
					return n(e, "laya.wx.mini.MiniAdpter"), e.getJson = function (t) {
						return JSON.parse(t)
					}, e.init = function (s, n) {
						if (void 0 === s && (s = !1), void 0 === n && (n = !1), !(e._inited || (e._inited = !0, (e.window = t).navigator.userAgent.indexOf("MiniGame") < 0))) {
							e.isZiYu = n, e.isPosMsgYu = s, e.EnvConfig = {};
							try {
								laya.webgl.resource.WebGLCanvas.premulAlpha = !0
							} catch (t) {}
							e.isZiYu || (rt.setNativeFileDir("/layaairGame"), rt.existDir(rt.fileNativeDir, l.create(e, e.onMkdirCallBack))), e.systemInfo = wx.getSystemInfoSync(), e.window.focus = function () {}, i._getUrlPath = function () {}, e.window.logtime = function (t) {}, e.window.alertTimeLog = function (t) {}, e.window.resetShareInfo = function () {}, e.window.CanvasRenderingContext2D = function () {}, e.window.CanvasRenderingContext2D.prototype = e.window.wx.createCanvas().getContext("2d").__proto__, e.window.document.body.appendChild = function () {}, e.EnvConfig.pixelRatioInt = 0, o.getPixelRatio = e.pixelRatio, e._preCreateElement = H.createElement, H.createElement = e.createElement, o.createShaderCondition = e.createShaderCondition, tt.parseXMLFromString = e.parseXMLFromString, jt._createInputElement = at._createInputElement, e.EnvConfig.load = xt.prototype.load, xt.prototype.load = Ct.prototype.load, xt.prototype._loadImage = ot.prototype._loadImage, E._baseClass = ht, ht.__init__(), e.onReciveData()
						}
					}, e.onReciveData = function () {
						laya.wx.mini.MiniAdpter.isZiYu && wx.onMessage(function (t) {
							"opendatacontext" == t.isLoad ? t.url && (rt.ziyuFileData[t.url] = t.atlasdata, rt.ziyuFileTextureData[t.imgReadyUrl] = t.imgNativeUrl) : "openJsondatacontext" == t.isLoad && t.url && (rt.ziyuFileData[t.url] = t.atlasdata)
						})
					}, e.measureText = function (t) {
						var i = e._measureText(t);
						return i || (i = {
							width: 16
						}, console.warn("-------微信获取文字宽度失败----等待修复---------")), i
					}, e.getUrlEncode = function (t, e) {
						return -1 != t.indexOf(".fnt") ? "utf8" : "arraybuffer" == e ? "" : "ascii"
					}, e.downLoadFile = function (t, e, i, s) {
						void 0 === e && (e = ""), void 0 === s && (s = "ascii");
						rt.getFileInfo(t) ? null != i && i.runWith([0]) : rt.downLoadFile(t, e, i, s)
					}, e.remove = function (t, e) {
						rt.deleteFile("", t, e, "", 0)
					}, e.removeAll = function () {
						rt.deleteAll()
					}, e.hasNativeFile = function (t) {
						return rt.isLocalNativeFile(t)
					}, e.getFileInfo = function (t) {
						return rt.getFileInfo(t)
					}, e.getFileList = function () {
						return rt.filesListObj
					}, e.exitMiniProgram = function () {
						e.window.wx.exitMiniProgram()
					}, e.onMkdirCallBack = function (t, e) {
						t || (rt.filesListObj = JSON.parse(e.data))
					}, e.pixelRatio = function () {
						if (!e.EnvConfig.pixelRatioInt) try {
							return e.EnvConfig.pixelRatioInt = e.systemInfo.pixelRatio, e.systemInfo.pixelRatio
						} catch (t) {}
						return e.EnvConfig.pixelRatioInt
					}, e.createElement = function (i) {
						if ("canvas" == i) {
							var s;
							return 1 == e.idx ? e.isZiYu ? (s = sharedCanvas).style = {} : s = t.canvas : s = t.wx.createCanvas(), e.idx++, s
						}
						if ("textarea" == i || "input" == i) return e.onCreateInput(i);
						if ("div" == i) {
							var n = e._preCreateElement(i);
							return n.contains = function (t) {
								return null
							}, n.removeChild = function (t) {}, n
						}
						return e._preCreateElement(i)
					}, e.onCreateInput = function (t) {
						var i = e._preCreateElement(t);
						return i.focus = at.wxinputFocus, i.blur = at.wxinputblur, i.style = {}, i.value = 0, i.parentElement = {}, i.placeholder = {}, i.type = {}, i.setColor = function (t) {}, i.setType = function (t) {}, i.setFontFace = function (t) {}, i.addEventListener = function (t) {}, i.contains = function (t) {
							return null
						}, i.removeChild = function (t) {}, i
					}, e.createShaderCondition = function (t) {
						var e = this;
						return function () {
							return e[t.replace("this.", "")]
						}
					}, e.sendAtlasToOpenDataContext = function (t) {
						if (!laya.wx.mini.MiniAdpter.isZiYu) {
							var e = xt.getRes(t);
							if (!e) throw "传递的url没有获取到对应的图集数据信息，请确保图集已经过！";
							var i, s = {
								frames: e.frames,
								meta: e.meta
							};
							i = t.indexOf(".atlas") ? t.replace(".atlas", ".png") : t.replace(".json", ".png");
							var n = rt.getFileInfo(i).md5,
								r = rt.getFileNativePath(n);
							if (!r) throw "获取图集的磁盘url路径不存在！";
							wx.postMessage({
								url: t,
								atlasdata: s,
								imgNativeUrl: r,
								imgReadyUrl: i,
								isLoad: "opendatacontext"
							})
						}
					}, e.sendJsonDataToDataContext = function (t) {
						if (!laya.wx.mini.MiniAdpter.isZiYu) {
							var e = xt.getRes(t);
							if (!e) throw "传递的url没有获取到对应的图集数据信息，请确保图集已经过！";
							wx.postMessage({
								url: t,
								atlasdata: e,
								isLoad: "openJsondatacontext"
							})
						}
					}, e.EnvConfig = null, e.window = null, e._preCreateElement = null, e._inited = !1, e.systemInfo = null, e.isZiYu = !1, e.isPosMsgYu = !1, e.autoCacheFile = !0, e.minClearSize = 5242880, e.AutoCacheDownFile = !1, e._measureText = null, e.parseXMLFromString = function (e) {
						var i;
						e = e.replace(/>\s+</g, "><");
						try {
							i = (new t.Parser.DOMParser).parseFromString(e, "text/xml")
						} catch (t) {
							throw "需要引入xml解析库文件"
						}
						return i
					}, e.idx = 1, s(e, ["nativefiles", function () {
						return this.nativefiles = ["layaNativeDir", "wxlocal"]
					}]), e
				}(),
				rt = function () {
					function e() {}
					return n(e, "laya.wx.mini.MiniFileMgr"), e.isLocalNativeFile = function (t) {
						for (var e = 0, i = nt.nativefiles.length; e < i; e++)
							if (-1 != t.indexOf(nt.nativefiles[e])) return !0;
						return !1
					}, e.getFileInfo = function (t) {
						var i = e.filesListObj[t];
						return null == i ? null : i
					}, e.read = function (t, i, s, n, r, o) {
						void 0 === i && (i = "ascill"), void 0 === n && (n = ""), void 0 === r && (r = !1), void 0 === o && (o = "");
						var a;
						a = "" == n || -1 == n.indexOf("http://") && -1 == n.indexOf("https://") ? t : e.getFileNativePath(t), e.fs.readFile({
							filePath: a,
							encoding: i,
							success: function (t) {
								null != s && s.runWith([0, t])
							},
							fail: function (t) {
								t && "" != n ? e.downFiles(n, i, s, n, r, o) : null != s && s.runWith([1])
							}
						})
					}, e.downFiles = function (t, i, s, n, r, o, a) {
						void 0 === i && (i = "ascii"), void 0 === n && (n = ""), void 0 === r && (r = !1), void 0 === o && (o = ""), void 0 === a && (a = !0);
						e.wxdown({
							url: t,
							success: function (t) {
								200 === t.statusCode ? e.readFile(t.tempFilePath, i, s, n, r, o, a) : null != s && s.runWith([1, t])
							},
							fail: function (t) {
								null != s && s.runWith([1, t])
							}
						}).onProgressUpdate(function (t) {
							null != s && s.runWith([2, t.progress])
						})
					}, e.readFile = function (t, i, s, n, r, o, a) {
						void 0 === i && (i = "ascill"), void 0 === n && (n = ""), void 0 === r && (r = !1), void 0 === o && (o = ""), void 0 === a && (a = !0), e.fs.readFile({
							filePath: t,
							encoding: i,
							success: function (o) {
								-1 != t.indexOf("http://") || -1 != t.indexOf("https://") ? (nt.autoCacheFile || r) && e.copyFile(t, n, s, i, a) : null != s && s.runWith([0, o])
							},
							fail: function (t) {
								t && null != s && s.runWith([1, t])
							}
						})
					}, e.downOtherFiles = function (t, i, s, n, r) {
						void 0 === s && (s = ""), void 0 === n && (n = !1), void 0 === r && (r = !0), e.wxdown({
							url: t,
							success: function (t) {
								200 === t.statusCode && ((nt.autoCacheFile || n) && -1 == s.indexOf("wx.qlogo.cn") && -1 == s.indexOf(".php") ? e.copyFile(t.tempFilePath, s, i, "", r) : null != i && i.runWith([0, t.tempFilePath]))
							},
							fail: function (t) {
								null != i && i.runWith([1, t])
							}
						})
					}, e.downLoadFile = function (s, n, r, o) {
						void 0 === n && (n = ""), void 0 === o && (o = "ascii"), t.navigator.userAgent.indexOf("MiniGame") < 0 ? i.loader.load(s, r) : "image" == n || "sound" == n ? e.downOtherFiles(s, r, s, !0, !1) : e.downFiles(s, o, r, s, !0, n, !1)
					}, e.copyFile = function (t, i, s, n, r) {
						void 0 === n && (n = ""), void 0 === r && (r = !0);
						var o = t.split("/"),
							a = o[o.length - 1],
							h = e.getFileInfo(i),
							l = e.getFileNativePath(a),
							c = e.getCacheUseSize();
						h ? h.readyUrl != i ? e.fs.getFileInfo({
							filePath: t,
							success: function (t) {
								r && c + 4194304 + t.size >= 52428800 && (t.size > nt.minClearSize && (nt.minClearSize = t.size), e.onClearCacheRes()), e.deleteFile(a, i, s, n, t.size)
							},
							fail: function (t) {
								null != s && s.runWith([1, t])
							}
						}) : null != s && s.runWith([0]) : e.fs.getFileInfo({
							filePath: t,
							success: function (o) {
								r && c + 4194304 + o.size >= 52428800 && (o.size > nt.minClearSize && (nt.minClearSize = o.size), e.onClearCacheRes()), e.fs.copyFile({
									srcPath: t,
									destPath: l,
									success: function (t) {
										e.onSaveFile(i, a, !0, n, s, o.size)
									},
									fail: function (t) {
										null != s && s.runWith([1, t])
									}
								})
							},
							fail: function (t) {
								null != s && s.runWith([1, t])
							}
						})
					}, e.onClearCacheRes = function () {
						var t = nt.minClearSize,
							i = [];
						for (var s in e.filesListObj) i.push(e.filesListObj[s]);
						e.sortOn(i, "time", 16);
						for (var n = 0, r = 1, o = i.length; r < o; r++) {
							var a = i[r];
							if (n >= t) break;
							n += a.size, e.deleteFile("", a.readyUrl)
						}
					}, e.sortOn = function (t, e, i) {
						return void 0 === i && (i = 0), 16 == i ? t.sort(function (t, i) {
							return t[e] - i[e]
						}) : 18 == i ? t.sort(function (t, i) {
							return i[e] - t[e]
						}) : t.sort(function (t, i) {
							return t[e] - i[e]
						})
					}, e.getFileNativePath = function (t) {
						return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + t
					}, e.deleteFile = function (t, i, s, n, r) {
						void 0 === i && (i = ""), void 0 === n && (n = ""), void 0 === r && (r = 0);
						var o = e.getFileInfo(i),
							a = e.getFileNativePath(o.md5);
						e.fs.unlink({
							filePath: a,
							success: function (o) {
								var a = "" != t;
								if ("" != t) {
									var h = e.getFileNativePath(t);
									e.fs.copyFile({
										srcPath: t,
										destPath: h,
										success: function (r) {
											e.onSaveFile(i, t, a, n, s, r.size)
										},
										fail: function (t) {
											null != s && s.runWith([1, t])
										}
									})
								} else e.onSaveFile(i, t, a, n, s, r)
							},
							fail: function (t) {}
						})
					}, e.deleteAll = function () {
						var t = [];
						for (var i in e.filesListObj) t.push(e.filesListObj[i]);
						for (var s = 1, n = t.length; s < n; s++) {
							var r = t[s];
							e.deleteFile("", r.readyUrl)
						}
					}, e.onSaveFile = function (t, i, s, n, r, o) {
						void 0 === s && (s = !0), void 0 === n && (n = ""), void 0 === o && (o = 0);
						var a = t;
						if (null == e.filesListObj.fileUsedSize && (e.filesListObj.fileUsedSize = 0), s) {
							e.getFileNativePath(i);
							e.filesListObj[a] = {
								md5: i,
								readyUrl: t,
								size: o,
								times: H.now(),
								encoding: n
							}, e.filesListObj.fileUsedSize = parseInt(e.filesListObj.fileUsedSize) + o, e.writeFilesList(a, JSON.stringify(e.filesListObj), !0), null != r && r.runWith([0])
						} else if (e.filesListObj[a]) {
							var h = parseInt(e.filesListObj[a].size);
							e.filesListObj.fileUsedSize = parseInt(e.filesListObj.fileUsedSize) - h, delete e.filesListObj[a], e.writeFilesList(a, JSON.stringify(e.filesListObj), !1), null != r && r.runWith([0])
						}
					}, e.writeFilesList = function (t, i, s) {
						var n = e.fileNativeDir + "/" + e.fileListName;
						e.fs.writeFile({
							filePath: n,
							encoding: "utf8",
							data: i,
							success: function (t) {},
							fail: function (t) {}
						}), !nt.isZiYu && nt.isPosMsgYu && wx.postMessage({
							url: t,
							data: e.filesListObj[t],
							isLoad: "filenative",
							isAdd: s
						})
					}, e.getCacheUseSize = function () {
						return e.filesListObj && e.filesListObj.fileUsedSize ? e.filesListObj.fileUsedSize : 0
					}, e.existDir = function (t, i) {
						e.fs.mkdir({
							dirPath: t,
							success: function (t) {
								null != i && i.runWith([0, {
									data: JSON.stringify({})
								}])
							},
							fail: function (t) {
								-1 != t.errMsg.indexOf("file already exists") ? e.readSync(e.fileListName, "utf8", i) : null != i && i.runWith([1, t])
							}
						})
					}, e.readSync = function (t, i, s, n) {
						void 0 === i && (i = "ascill"), void 0 === n && (n = "");
						var r, o = e.getFileNativePath(t);
						try {
							r = e.fs.readFileSync(o, i), null != s && s.runWith([0, {
								data: r
							}])
						} catch (t) {
							null != s && s.runWith([1])
						}
					}, e.setNativeFileDir = function (t) {
						e.fileNativeDir = wx.env.USER_DATA_PATH + t
					}, e.filesListObj = {}, e.fileNativeDir = null, e.fileListName = "layaairfiles.txt", e.ziyuFileData = {}, e.ziyuFileTextureData = {}, e.loadPath = "", e.DESCENDING = 2, e.NUMERIC = 16, s(e, ["fs", function () {
						return this.fs = wx.getFileSystemManager()
					}, "wxdown", function () {
						return this.wxdown = wx.downloadFile
					}]), e
				}(),
				ot = function () {
					function t() {}
					n(t, "laya.wx.mini.MiniImage");
					return t.prototype._loadImage = function (e) {
						if (nt.isZiYu) t.onCreateImage(e, this, !0);
						else {
							var i = !1;
							if (rt.isLocalNativeFile(e)) {
								if (-1 != e.indexOf("http://") || -1 != e.indexOf("https://"))
									if ("" != rt.loadPath) e = e.split(rt.loadPath)[1];
									else {
										var s = "" != R.rootPath ? R.rootPath : R.basePath;
										"" != s && (e = e.split(s)[1])
									}
							} else i = !0, e = R.formatURL(e);
							rt.getFileInfo(e) ? t.onCreateImage(e, this, !i) : -1 != e.indexOf("http://") || -1 != e.indexOf("https://") ? nt.isZiYu ? t.onCreateImage(e, this, !0) : rt.downOtherFiles(e, new l(t, t.onDownImgCallBack, [e, this]), e) : t.onCreateImage(e, this, !0)
						}
					}, t.onDownImgCallBack = function (e, i, s, n) {
						void 0 === n && (n = ""), s ? i.onError(null) : t.onCreateImage(e, i, !1, n)
					}, t.onCreateImage = function (t, e, i, s) {
						function n() {
							h.onload = null, h.onerror = null, delete e.imgCache[t]
						}
						void 0 === i && (i = !1), void 0 === s && (s = "");
						var r;
						if (nt.autoCacheFile)
							if (i)
								if (nt.isZiYu) {
									var o = R.formatURL(t);
									r = rt.ziyuFileTextureData[o] ? rt.ziyuFileTextureData[o] : t
								} else r = t;
						else if ("" != s) r = s;
						else {
							var a = rt.getFileInfo(t).md5;
							r = rt.getFileNativePath(a)
						} else r = i ? t : s;
						null == e.imgCache && (e.imgCache = {});
						var h, l = function () {
								n(), e._url = R.formatURL(e._url), e.onLoaded(h)
							},
							c = function () {
								n(), e.event("error", "Load image failed")
							};
						"nativeimage" == e._type ? ((h = new H.window.Image).crossOrigin = "", h.onload = l, h.onerror = c, h.src = r, e.imgCache[t] = h) : new Zt.create(r, {
							onload: l,
							onerror: c,
							onCreate: function (i) {
								h = i, e.imgCache[t] = i
							}
						})
					}, t
				}(),
				at = function () {
					function e() {}
					return n(e, "laya.wx.mini.MiniInput"), e._createInputElement = function () {
						jt._initInput(jt.area = H.createElement("textarea")), jt._initInput(jt.input = H.createElement("input")), jt.inputContainer = H.createElement("div"), jt.inputContainer.style.position = "absolute", jt.inputContainer.style.zIndex = 1e5, H.container.appendChild(jt.inputContainer), jt.inputContainer.setPos = function (t, e) {
							jt.inputContainer.style.left = t + "px", jt.inputContainer.style.top = e + "px"
						}, i.stage.on("resize", null, e._onStageResize), wx.onWindowResize && wx.onWindowResize(function (e) {
							t.dispatchEvent && t.dispatchEvent("resize")
						}), k._soundClass = St, k._musicClass = St;
						var s = nt.systemInfo.model,
							n = nt.systemInfo.system; - 1 != s.indexOf("iPhone") && (H.onIPhone = !0, H.onIOS = !0, H.onIPad = !0, H.onAndroid = !1), -1 == n.indexOf("Android") && -1 == n.indexOf("Adr") || (H.onAndroid = !0, H.onIPhone = !1, H.onIOS = !1, H.onIPad = !1)
					}, e._onStageResize = function () {
						i.stage._canvasTransform.identity().scale(H.width / B.canvas.width / o.getPixelRatio(), H.height / B.canvas.height / o.getPixelRatio())
					}, e.wxinputFocus = function (t) {
						var e = jt.inputElement.target;
						e && !e.editable || (nt.window.wx.offKeyboardConfirm(), nt.window.wx.offKeyboardInput(), nt.window.wx.showKeyboard({
							defaultValue: e.text,
							maxLength: e.maxChars,
							multiple: e.multiline,
							confirmHold: !0,
							confirmType: "done",
							success: function (t) {},
							fail: function (t) {}
						}), nt.window.wx.onKeyboardConfirm(function (t) {
							var i = t ? t.value : "";
							e.text = i, e.event("input"), laya.wx.mini.MiniInput.inputEnter()
						}), nt.window.wx.onKeyboardInput(function (t) {
							var i = t ? t.value : "";
							e.multiline || -1 == i.indexOf("\n") ? (e.text = i, e.event("input")) : laya.wx.mini.MiniInput.inputEnter()
						}))
					}, e.inputEnter = function () {
						jt.inputElement.target.focus = !1
					}, e.wxinputblur = function () {
						e.hideKeyboard()
					}, e.hideKeyboard = function () {
						nt.window.wx.offKeyboardConfirm(), nt.window.wx.offKeyboardInput(), nt.window.wx.hideKeyboard({
							success: function (t) {
								console.log("隐藏键盘")
							},
							fail: function (t) {
								console.log("隐藏键盘出错:" + (t ? t.errMsg : ""))
							}
						})
					}, e
				}(),
				ht = function () {
					function t() {}
					return n(t, "laya.wx.mini.MiniLocalStorage"), t.__init__ = function () {
						t.items = t
					}, t.setItem = function (t, e) {
						try {
							wx.setStorageSync(t, e)
						} catch (i) {
							wx.setStorage({
								key: t,
								data: e
							})
						}
					}, t.getItem = function (t) {
						return wx.getStorageSync(t)
					}, t.setJSON = function (e, i) {
						t.setItem(e, i)
					}, t.getJSON = function (e) {
						return t.getItem(e)
					}, t.removeItem = function (t) {
						wx.removeStorageSync(t)
					}, t.clear = function () {
						wx.clearStorageSync()
					}, t.getStorageInfoSync = function () {
						try {
							var t = wx.getStorageInfoSync();
							return console.log(t.keys), console.log(t.currentSize), console.log(t.limitSize), t
						} catch (t) {}
						return null
					}, t.support = !0, t.items = null, t
				}(),
				lt = function () {
					function t() {}
					return n(t, "UIConfig"), t.touchScrollEnable = !0, t.mouseWheelEnable = !0, t.showButtons = !0, t.popupBgColor = "#000000", t.popupBgAlpha = .5, t.closeDialogOnSide = !0, t
				}(),
				ct = function () {
					function t() {}
					return n(t, "fly.ui.UIHelper"), t.getOjbsByName = function (e) {
						return t.obj = {}, t._getObjByName(e, t.obj), t.obj
					}, t.getObjByClass = function (e, s) {
						for (t.i = 0, t.count = e.numChildren; t.i < t.count; t.i++)
							if (t.obj = e.getChildAt(t.i), i.__typeof(t.obj, s)) return t.obj;
						return null
					}, t.savePos = function (t) {
						t.X = t.x, t.Y = t.y
					}, t.resetPos = function (t) {
						t.x = t.X, t.y = t.Y
					}, t.saveRoat = function (t) {
						t.R = t.rotation
					}, t.resetRoat = function (t) {
						t.rotation = t.R
					}, t.saveScale = function (t) {
						t.SX = t.scaleX, t.SY = t.scaleY
					}, t.saveAlpha = function (t) {
						t.A = t.alpha
					}, t.resetAlpha = function (t) {
						t.alpha = t.A
					}, t.saveVis = function (t) {
						t.V = t.visible
					}, t.resetVis = function (t) {
						t.visible = t.V
					}, t.resetScale = function (t) {
						t.scale(t.SX, t.SY, !0)
					}, t.save = function (e) {
						t.savePos(e), t.saveRoat(e), t.saveScale(e), t.saveAlpha(e), t.saveVis(e)
					}, t.reset = function (e) {
						t.resetPos(e), t.resetRoat(e), t.resetScale(e), t.resetAlpha(e), t.resetVis(e)
					}, t.saveChilds = function (e) {
						for (var i = 0, s = e.numChildren; i < s; i++) t.save(e.getChildAt(i))
					}, t.resetChilds = function (e) {
						for (var i = 0, s = e.numChildren; i < s; i++) t.reset(e.getChildAt(i))
					}, t.reg = function (e) {
						null != e && null != e.parent && t.dic.set(e, e.parent)
					}, t.hide = function (e) {
						if (null != e && e.visible) {
							if (null == e.parent) return;
							null == (t.obj = t.dic.get(e)) && t.dic.set(e, t.obj = e.parent), e.parent == t.obj && t.obj.removeChild(e), e.visible = !1
						}
					}, t.show = function (e, i) {
						void 0 === i && (i = 99999), null != e && (e.visible || ((t.obj = t.dic.get(e)) && t.obj.addChildAt(e, Math.min(t.obj.numChildren, i)), e.visible = !0))
					}, t.showHide = function (e, i, s) {
						void 0 === s && (s = 99999), e ? t.show(i, s) : t.hide(i)
					}, t._getObjByName = function (e, i) {
						for (var s, n = 0, r = e.numChildren; n < r; n++) null != (s = e.getChildAt(n)).name && "" != s.name && (i[s.name] = s, s instanceof laya.ui.Box && t._getObjByName(s, i[s.name]))
					}, t.checkParent = function (e, i) {
						if (e == i) return !0;
						for (t.pp = e.parent; null != t.pp;) {
							if (t.pp == i) return !0;
							t.pp = t.pp.parent
						}
						return !1
					}, t.checkParents = function (e, i) {
						for (var s, n = i.length; n--;) {
							if (s = i[n], e == s) return !0;
							for (t.pp = e.parent; null != t.pp;) {
								if (t.pp == s) return !0;
								t.pp = t.pp.parent
							}
						}
						return !1
					}, t.obj = null, t.i = 0, t.count = 0, t.pp = null, s(t, ["dic", function () {
						return this.dic = new V
					}]), t
				}(),
				ut = function (t) {
					function e() {
						this._bits = 0, this._displayedInStage = !1, this._parent = null, this.conchModel = null, this.name = "", this._destroyed = !1, e.__super.call(this), this._childs = e.ARRAY_EMPTY, this._$P = e.PROP_EMPTY, this.timer = i.scaleTimer, this.conchModel = B.isConchNode ? this.createConchModel() : null
					}
					n(e, "laya.display.Node", h);
					var s = e.prototype;
					return s._setBit = function (t, e) {
						if (1 == t) {
							this._getBit(t) != e && this._updateDisplayedInstage()
						}
						e ? this._bits |= t : this._bits &= ~t
					}, s._getBit = function (t) {
						return 0 != (this._bits & t)
					}, s._setUpNoticeChain = function () {
						this._getBit(1) && this._setUpNoticeType(1)
					}, s._setUpNoticeType = function (t) {
						var e = this;
						for (e._setBit(t, !0), e = e.parent; e;) {
							if (e._getBit(t)) return;
							e._setBit(t, !0), e = e.parent
						}
					}, s.on = function (t, e, i, s) {
						return "display" !== t && "undisplay" !== t || this._getBit(1) || this._setUpNoticeType(1), this._createListener(t, e, i, s, !1)
					}, s.once = function (t, e, i, s) {
						return "display" !== t && "undisplay" !== t || this._getBit(1) || this._setUpNoticeType(1), this._createListener(t, e, i, s, !0)
					}, s.createConchModel = function () {
						return null
					}, s.destroy = function (t) {
						void 0 === t && (t = !0), this._destroyed = !0, this._parent && this._parent.removeChild(this), this._childs && (t ? this.destroyChildren() : this.removeChildren()), this._childs = null, this._$P = null, this.offAll(), this.timer.clearAll(this)
					}, s.destroyChildren = function () {
						if (this._childs)
							for (var t = this._childs.length - 1; t > -1; t--) this._childs[t].destroy(!0)
					}, s.addChild = function (t) {
						if (!t || this.destroyed || t === this) return t;
						if (t.zOrder && this._set$P("hasZorder", !0), t._parent === this) {
							var i = this.getChildIndex(t);
							i !== this._childs.length - 1 && (this._childs.splice(i, 1), this._childs.push(t), this.conchModel && (this.conchModel.removeChild(t.conchModel), this.conchModel.addChildAt(t.conchModel, this._childs.length - 1)), this._childChanged())
						} else t.parent && t.parent.removeChild(t), this._childs === e.ARRAY_EMPTY && (this._childs = []), this._childs.push(t), this.conchModel && this.conchModel.addChildAt(t.conchModel, this._childs.length - 1), t.parent = this, this._childChanged();
						return t
					}, s.addChildren = function (t) {
						for (var e = arguments, i = 0, s = e.length; i < s;) this.addChild(e[i++])
					}, s.addChildAt = function (t, i) {
						if (!t || this.destroyed || t === this) return t;
						if (t.zOrder && this._set$P("hasZorder", !0), i >= 0 && i <= this._childs.length) {
							if (t._parent === this) {
								var s = this.getChildIndex(t);
								this._childs.splice(s, 1), this._childs.splice(i, 0, t), this.conchModel && (this.conchModel.removeChild(t.conchModel), this.conchModel.addChildAt(t.conchModel, i)), this._childChanged()
							} else t.parent && t.parent.removeChild(t), this._childs === e.ARRAY_EMPTY && (this._childs = []), this._childs.splice(i, 0, t), this.conchModel && this.conchModel.addChildAt(t.conchModel, i), t.parent = this;
							return t
						}
						throw new Error("appendChildAt:The index is out of bounds")
					}, s.getChildIndex = function (t) {
						return this._childs.indexOf(t)
					}, s.getChildByName = function (t) {
						var e = this._childs;
						if (e)
							for (var i = 0, s = e.length; i < s; i++) {
								var n = e[i];
								if (n.name === t) return n
							}
						return null
					}, s._get$P = function (t) {
						return this._$P[t]
					}, s._set$P = function (t, i) {
						return this.destroyed || (this._$P === e.PROP_EMPTY && (this._$P = {}), this._$P[t] = i), i
					}, s.getChildAt = function (t) {
						return this._childs[t]
					}, s.setChildIndex = function (t, e) {
						var i = this._childs;
						if (e < 0 || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
						var s = this.getChildIndex(t);
						if (s < 0) throw new Error("setChildIndex:node is must child of this object.");
						return i.splice(s, 1), i.splice(e, 0, t), this.conchModel && (this.conchModel.removeChild(t.conchModel), this.conchModel.addChildAt(t.conchModel, e)), this._childChanged(), t
					}, s._childChanged = function (t) {}, s.removeChild = function (t) {
						if (!this._childs) return t;
						var e = this._childs.indexOf(t);
						return this.removeChildAt(e)
					}, s.removeSelf = function () {
						return this._parent && this._parent.removeChild(this), this
					}, s.removeChildByName = function (t) {
						var e = this.getChildByName(t);
						return e && this.removeChild(e), e
					}, s.removeChildAt = function (t) {
						var e = this.getChildAt(t);
						return e && (this._childs.splice(t, 1), this.conchModel && this.conchModel.removeChild(e.conchModel), e.parent = null), e
					}, s.removeChildren = function (t, i) {
						if (void 0 === t && (t = 0), void 0 === i && (i = 2147483647), this._childs && this._childs.length > 0) {
							var s = this._childs;
							if (0 === t && i >= o) {
								var n = s;
								this._childs = e.ARRAY_EMPTY
							} else n = s.splice(t, i - t);
							for (var r = 0, o = n.length; r < o; r++) n[r].parent = null, this.conchModel && this.conchModel.removeChild(n[r].conchModel)
						}
						return this
					}, s.replaceChild = function (t, e) {
						var i = this._childs.indexOf(e);
						return i > -1 ? (this._childs.splice(i, 1, t), this.conchModel && (this.conchModel.removeChild(e.conchModel), this.conchModel.addChildAt(t.conchModel, i)), e.parent = null, t.parent = this, t) : null
					}, s._updateDisplayedInstage = function () {
						var t;
						t = this;
						var e = i.stage;
						for (this._displayedInStage = !1; t;) {
							if (t._getBit(1)) {
								this._displayedInStage = t._displayedInStage;
								break
							}
							if (t == e || t._displayedInStage) {
								this._displayedInStage = !0;
								break
							}
							t = t.parent
						}
					}, s._setDisplay = function (t) {
						this._displayedInStage !== t && (this._displayedInStage = t, t ? this.event("display") : this.event("undisplay"))
					}, s._displayChild = function (t, e) {
						var i = t._childs;
						if (i)
							for (var s = 0, n = i.length; s < n; s++) {
								var r = i[s];
								r._getBit(1) && (r._childs.length > 0 ? this._displayChild(r, e) : r._setDisplay(e))
							}
						t._setDisplay(e)
					}, s.contains = function (t) {
						if (t === this) return !0;
						for (; t;) {
							if (t.parent === this) return !0;
							t = t.parent
						}
						return !1
					}, s.timerLoop = function (t, e, i, s, n, r) {
						void 0 === n && (n = !0), void 0 === r && (r = !1), this.timer.loop(t, e, i, s, n, r)
					}, s.timerOnce = function (t, e, i, s, n) {
						void 0 === n && (n = !0), this.timer._create(!1, !1, t, e, i, s, n)
					}, s.frameLoop = function (t, e, i, s, n) {
						void 0 === n && (n = !0), this.timer._create(!0, !0, t, e, i, s, n)
					}, s.frameOnce = function (t, e, i, s, n) {
						void 0 === n && (n = !0), this.timer._create(!0, !1, t, e, i, s, n)
					}, s.clearTimer = function (t, e) {
						this.timer.clear(t, e)
					}, r(0, s, "numChildren", function () {
						return this._childs.length
					}), r(0, s, "destroyed", function () {
						return this._destroyed
					}), r(0, s, "parent", function () {
						return this._parent
					}, function (t) {
						this._parent !== t && (t ? (this._parent = t, this.event("added"), this._getBit(1) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), t._childChanged(this)) : (this.event("removed"), this._parent._childChanged(), this._getBit(1) && this._displayChild(this, !1), this._parent = t))
					}), r(0, s, "displayedInStage", function () {
						return this._getBit(1) ? this._displayedInStage : (this._setUpNoticeType(1), this._displayedInStage)
					}), e.ARRAY_EMPTY = [], e.PROP_EMPTY = {}, e.NOTICE_DISPLAY = 1, e.MOUSEENABLE = 2, e
				}(),
				_t = function (t) {
					function e() {
						this.wx = null, this.openID = null, this.userInfo = null, this.message = null, e.__super.call(this);
						var t = this;
						e.I = this, H.onMiniGame && (this.wx = wx), this.wx && this.wx.onMessage(function (i) {
							i.action ? (t.message = i, t.event("message")) : "filedata" != i.isLoad && "filenative" != i.isLoad || e.I.ReceiveRes(i)
						})
					}
					n(e, "WX", c);
					var s = e.prototype;
					return s.getFriendScore = function () {
						var t = this;
						this.wx && this.wx.getFriendCloudStorage({
							keyList: ["score"],
							success: function (e) {
								t.event("scoreList", e.data)
							},
							fail: function (t) {}
						})
					}, s.getGroupScore = function (t) {
						var e = this;
						this.wx && this.wx.getGroupCloudStorage({
							shareTicket: t,
							keyList: ["score"],
							success: function (t) {
								e.event("scoreList", t.data)
							},
							fail: function (t) {}
						})
					}, s.ReceiveRes = function (t) {
						"filedata" == t.isLoad ? i.MiniFileMgr.ziyuFileData[t.url] = t.data : "filenative" == t.isLoad && (t.isAdd ? i.MiniFileMgr.filesListObj[t.url] = t.data : delete i.MiniFileMgr.filesListObj[t.url])
					}, e.I = null, e
				}(),
				dt = function (t) {
					function e() {
						e.__super.call(this), this._$1__id = ++e._uniqueIDCounter, this.__loaded = !0, this._destroyed = !1, this._referenceCount = 0, e._idResourcesMap[this.id] = this, this._released = !0, this.lock = !1, this._memorySize = 0, this._lastUseFrameCount = -1, D.currentResourceManager && D.currentResourceManager.addResource(this)
					}
					n(e, "laya.resource.Resource", h);
					var s = e.prototype;
					return i.imps(s, {
						"laya.resource.ICreateResource": !0,
						"laya.resource.IDispose": !0
					}), s._setUrl = function (t) {
						if (this._url !== t) {
							var i;
							this._url && ((i = e._urlResourcesMap[this._url]).splice(i.indexOf(this), 1), 0 === i.length && delete e._urlResourcesMap[this._url]), t && ((i = e._urlResourcesMap[t]) || (e._urlResourcesMap[t] = i = []), i.push(this)), this._url = t
						}
					}, s._getGroup = function () {
						return this._group
					}, s._setGroup = function (t) {
						if (this._group !== t) {
							var i;
							this._group && ((i = e._groupResourcesMap[this._group]).splice(i.indexOf(this), 1), 0 === i.length && delete e._groupResourcesMap[this._group]), t && ((i = e._groupResourcesMap[t]) || (e._groupResourcesMap[t] = i = []), i.push(this)), this._group = t
						}
					}, s._addReference = function () {
						this._referenceCount++
					}, s._removeReference = function () {
						this._referenceCount--
					}, s._clearReference = function () {
						this._referenceCount = 0
					}, s._endLoaded = function () {
						this.__loaded = !0, this.event("loaded", this)
					}, s.recreateResource = function () {
						this.completeCreate()
					}, s.disposeResource = function () {}, s.activeResource = function (t) {
						void 0 === t && (t = !1), this._lastUseFrameCount = Z.loopCount, !this._destroyed && this.__loaded && (this._released || t) && this.recreateResource()
					}, s.releaseResource = function (t) {
						return void 0 === t && (t = !1), !(!t && this.lock) && (!(this._released && !t) && (this.disposeResource(), this._released = !0, this._lastUseFrameCount = -1, this.event("released", this), !0))
					}, s.onAsynLoaded = function (t, e, i) {
						throw new Error("Resource: must override this function!")
					}, s.destroy = function () {
						if (!this._destroyed) {
							null !== this._resourceManager && this._resourceManager.removeResource(this), this._destroyed = !0, this.lock = !1, this.releaseResource(), delete e._idResourcesMap[this.id];
							var t;
							this._url && ((t = e._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1), 0 === t.length && delete e._urlResourcesMap[this.url]), xt.clearRes(this._url), this.__loaded || o.cancelLoadByUrl(this._url)), this._group && ((t = e._groupResourcesMap[this._group]).splice(t.indexOf(this), 1), 0 === t.length && delete e._groupResourcesMap[this.url])
						}
					}, s.completeCreate = function () {
						this._released = !1, this.event("recovered", this)
					}, s.dispose = function () {
						this.destroy()
					}, r(0, s, "memorySize", function () {
						return this._memorySize
					}, function (t) {
						var e = t - this._memorySize;
						this._memorySize = t, this.resourceManager && this.resourceManager.addSize(e)
					}), r(0, s, "_loaded", null, function (t) {
						this.__loaded = t
					}), r(0, s, "loaded", function () {
						return this.__loaded
					}), r(0, s, "id", function () {
						return this._$1__id
					}), r(0, s, "destroyed", function () {
						return this._destroyed
					}), r(0, s, "group", function () {
						return this._getGroup()
					}, function (t) {
						this._setGroup(t)
					}), r(0, s, "resourceManager", function () {
						return this._resourceManager
					}), r(0, s, "url", function () {
						return this._url
					}), r(0, s, "released", function () {
						return this._released
					}), r(0, s, "referenceCount", function () {
						return this._referenceCount
					}), e.getResourceByID = function (t) {
						return e._idResourcesMap[t]
					}, e.getResourceByURL = function (t, i) {
						return void 0 === i && (i = 0), e._urlResourcesMap[t][i]
					}, e.getResourceCountByURL = function (t) {
						return e._urlResourcesMap[t].length
					}, e.destroyUnusedResources = function (t) {
						var i;
						if (t) {
							var s = e._groupResourcesMap[t];
							if (s)
								for (var n = s.slice(), r = 0, o = n.length; r < o; r++)(i = n[r]).lock || 0 !== i._referenceCount || i.destroy()
						} else
							for (var a in e._idResourcesMap)(i = e._idResourcesMap[a]).lock || 0 !== i._referenceCount || i.destroy()
					}, e._uniqueIDCounter = 0, e._idResourcesMap = {}, e._urlResourcesMap = {}, e._groupResourcesMap = {}, e
				}(),
				ft = function (t) {
					function e() {
						this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, this._failRes = {}, e.__super.call(this);
						for (var t = 0; t < this._maxPriority; t++) this._resInfos[t] = []
					}
					var r;
					n(e, "laya.net.LoaderManager", h);
					var o = e.prototype;
					return o.create = function (t, e, i, s, n, r, o, a) {
						if (void 0 === r && (r = 1), void 0 === o && (o = !0), t instanceof Array) {
							var h = t,
								c = h.length,
								u = 0;
							if (i) var _ = l.create(i.caller, i.method, i.args, !1);
							for (var d = 0; d < c; d++) {
								var f = h[d];
								"string" == typeof f && (f = h[d] = {
									url: f
								}), f.progress = 0
							}
							for (d = 0; d < c; d++) {
								f = h[d];
								var p = i ? l.create(null, function (t, e) {
										t.progress = e;
										for (var i = 0, s = 0; s < c; s++) i += h[s].progress;
										var n = i / c;
										_.runWith(n)
									}, [f], !1) : null,
									g = i || e ? l.create(null, function (t, i) {
										u++, t.progress = 1, u === c && e && e.run()
									}, [f]) : null;
								this._create(f.url, g, p, f.clas || s, f.params || n, f.priority || r, o, f.group || a)
							}
							return !0
						}
						return this._create(t, e, i, s, n, r, o, a)
					}, o._create = function (t, s, n, r, o, a, h, c) {
						void 0 === a && (a = 1), void 0 === h && (h = !0);
						var u = R.formatURL(t),
							_ = this.getRes(u);
						if (_) !_.hasOwnProperty("loaded") || _.loaded ? (n && n.runWith(1), s && s.run()) : s && i.loader._createListener(t, s.caller, s.method, s.args, !0, !1);
						else {
							var d = tt.getFileExtension(t),
								f = e.createMap[d];
							if (!f) throw new Error("LoaderManager:unknown file(" + t + ") extension with: " + d + ".");
							r || (r = f[0]);
							var p = f[1];
							"atlas" == d ? this.load(t, s, n, p, a, h) : (r === wt && (p = "htmlimage"), (_ = r ? new r : null).hasOwnProperty("_loaded") && (_._loaded = !1), _._setUrl(t), c && _._setGroup(c), this._createLoad(_, t, l.create(null, function (e) {
								_ && !_.destroyed && e && _.onAsynLoaded.call(_, t, e, o), s && s.run(), i.loader.event(t)
							}), n, p, a, !1, c, !0), h && this.cacheRes(u, _))
						}
						return _
					}, o.load = function (t, s, n, o, a, h, l, c) {
						var u = this;
						if (void 0 === a && (a = 1), void 0 === h && (h = !0), void 0 === c && (c = !1), t instanceof Array) return this._loadAssets(t, s, n, o, a, h, l);
						var _ = xt.getRes(t);
						if (null != _) i.timer.frameOnce(1, null, function () {
							n && n.runWith(1), s && s.runWith(_), u._loaderCount || u.event("complete")
						});
						else {
							var d = e._resMap[t];
							d ? (s && d._createListener("complete", s.caller, s.method, s.args, !1, !1), n && d._createListener("progress", n.caller, n.method, n.args, !1, !1)) : ((d = this._infoPool.length ? this._infoPool.pop() : new r).url = t, d.type = o, d.cache = h, d.group = l, d.ignoreCache = c, s && d.on("complete", s.caller, s.method, s.args), n && d.on("progress", n.caller, n.method, n.args), e._resMap[t] = d, a = a < this._maxPriority ? a : this._maxPriority - 1, this._resInfos[a].push(d), this._next())
						}
						return this
					}, o._createLoad = function (t, s, n, o, a, h, l, c, u) {
						var _ = this;
						if (void 0 === h && (h = 1), void 0 === l && (l = !0), void 0 === u && (u = !1), s instanceof Array) return this._loadAssets(s, n, o, a, h, l, c);
						var d = xt.getRes(s);
						if (null != d) i.timer.frameOnce(1, null, function () {
							o && o.runWith(1), n && n.runWith(d), _._loaderCount || _.event("complete")
						});
						else {
							var f = e._resMap[s];
							f ? (n && f._createListener("complete", n.caller, n.method, n.args, !1, !1), o && f._createListener("progress", o.caller, o.method, o.args, !1, !1)) : ((f = this._infoPool.length ? this._infoPool.pop() : new r).url = s, f.clas = t, f.type = a, f.cache = l, f.group = c, f.ignoreCache = u, n && f.on("complete", n.caller, n.method, n.args), o && f.on("progress", o.caller, o.method, o.args), e._resMap[s] = f, h = h < this._maxPriority ? h : this._maxPriority - 1, this._resInfos[h].push(f), this._next())
						}
						return this
					}, o._next = function () {
						if (!(this._loaderCount >= this.maxLoader)) {
							for (var t = 0; t < this._maxPriority; t++)
								for (var e = this._resInfos[t]; e.length > 0;) {
									var i = e.shift();
									if (i) return this._doLoad(i)
								}
							this._loaderCount || this.event("complete")
						}
					}, o._doLoad = function (t) {
						function e(e) {
							i.offAll(), i._data = null, i._customParse = !1, s._loaders.push(i), s._endLoad(t, e instanceof Array ? [e] : e), s._loaderCount--, s._next()
						}
						this._loaderCount++;
						var i = this._loaders.length ? this._loaders.pop() : new xt;
						i.on("complete", null, e), i.on("progress", null, function (e) {
							t.event("progress", e)
						}), i.on("error", null, function (t) {
							e(null)
						});
						var s = this;
						i._class = t.clas, i.load(t.url, t.type, t.cache, t.group, t.ignoreCache)
					}, o._endLoad = function (t, s) {
						var n = t.url;
						if (null == s) {
							var r = this._failRes[n] || 0;
							if (r < this.retryNum) return console.warn("[warn]Retry to load:", n), this._failRes[n] = r + 1, void i.timer.once(this.retryDelay, this, this._addReTry, [t], !1);
							console.warn("[error]Failed to load:", n), this.event("error", n)
						}
						this._failRes[n] && (this._failRes[n] = 0), delete e._resMap[n], t.event("complete", s), t.offAll(), this._infoPool.push(t)
					}, o._addReTry = function (t) {
						this._resInfos[this._maxPriority - 1].push(t), this._next()
					}, o.clearRes = function (t, e) {
						void 0 === e && (e = !1), xt.clearRes(t, e)
					}, o.getRes = function (t) {
						return xt.getRes(t)
					}, o.cacheRes = function (t, e) {
						xt.cacheRes(t, e)
					}, o.clearTextureRes = function (t) {
						xt.clearTextureRes(t)
					}, o.setGroup = function (t, e) {
						xt.setGroup(t, e)
					}, o.clearResByGroup = function (t) {
						xt.clearResByGroup(t)
					}, o.clearUnLoaded = function () {
						for (var t = 0; t < this._maxPriority; t++) {
							for (var i = this._resInfos[t], s = i.length - 1; s > -1; s--) {
								var n = i[s];
								n && (n.offAll(), this._infoPool.push(n))
							}
							i.length = 0
						}
						this._loaderCount = 0, e._resMap = {}
					}, o.cancelLoadByUrls = function (t) {
						if (t)
							for (var e = 0, i = t.length; e < i; e++) this.cancelLoadByUrl(t[e])
					}, o.cancelLoadByUrl = function (t) {
						for (var i = 0; i < this._maxPriority; i++)
							for (var s = this._resInfos[i], n = s.length - 1; n > -1; n--) {
								var r = s[n];
								r && r.url === t && (s[n] = null, r.offAll(), this._infoPool.push(r))
							}
						e._resMap[t] && delete e._resMap[t]
					}, o._loadAssets = function (t, e, i, s, n, r, o) {
						void 0 === n && (n = 1), void 0 === r && (r = !0);
						for (var a = t.length, h = 0, c = 0, u = [], _ = !0, d = 0; d < a; d++) {
							var f = t[d];
							"string" == typeof f && (f = {
								url: f,
								type: s,
								size: 1,
								priority: n
							}), f.size || (f.size = 1), f.progress = 0, c += f.size, u.push(f);
							var p = i ? l.create(null, function (t, e) {
									if (null != i) {
										t.progress = e;
										for (var s = 0, n = 0; n < u.length; n++) {
											var r = u[n];
											s += r.size * r.progress
										}
										var o = s / c;
										i.runWith(o)
									}
								}, [f], !1) : null,
								g = e || i ? l.create(null, function (t, i) {
									h++, t.progress = 1, i || (_ = !1), h === a && e && e.runWith(_)
								}, [f]) : null;
							this.load(f.url, g, p, f.type, f.priority || 1, r, f.group || o)
						}
						return this
					}, e.cacheRes = function (t, e) {
						xt.cacheRes(t, e)
					}, e._resMap = {}, s(e, ["createMap", function () {
						return this.createMap = {
							atlas: [null, "atlas"]
						}
					}]), e.__init$ = function () {
						r = function (t) {
							function e() {
								this.url = null, this.type = null, this.cache = !1, this.group = null, this.ignoreCache = !1, this.clas = null, e.__super.call(this)
							}
							return n(e, "", h), e
						}()
					}, e
				}(),
				pt = function (t) {
					function e() {
						this.url = null, this.audio = null, this.loaded = !1, e.__super.call(this)
					}
					n(e, "laya.media.h5audio.AudioSound", h);
					var i = e.prototype;
					return i.dispose = function () {
						var t = e._audioCache[this.url];
						t && (t.src = "", delete e._audioCache[this.url])
					}, i.load = function (t) {
						function i() {
							n(), o.loaded = !0, o.event("complete")
						}

						function s() {
							r.load = null, n(), o.event("error")
						}

						function n() {
							r.removeEventListener("canplaythrough", i), r.removeEventListener("error", s)
						}
						t = R.formatURL(t), this.url = t;
						var r;
						if (t == k._tMusic ? (e._initMusicAudio(), (r = e._musicAudio).src != t && (e._audioCache[r.src] = null, r = null)) : r = e._audioCache[t], r && r.readyState >= 2) this.event("complete");
						else {
							r || (t == k._tMusic ? (e._initMusicAudio(), r = e._musicAudio) : r = H.createElement("audio"), e._audioCache[t] = r, r.src = t), r.addEventListener("canplaythrough", i), r.addEventListener("error", s);
							var o = this;
							this.audio = r, r.load ? r.load() : s()
						}
					}, i.play = function (t, i) {
						if (void 0 === t && (t = 0), void 0 === i && (i = 0), !this.url) return null;
						var s;
						if (!(s = this.url == k._tMusic ? e._musicAudio : e._audioCache[this.url])) return null;
						var n;
						n = q.getItem("audio:" + this.url), B.isConchApp ? n || ((n = H.createElement("audio")).src = this.url) : this.url == k._tMusic ? (e._initMusicAudio(), (n = e._musicAudio).src = this.url) : n = n || s.cloneNode(!0);
						var r = new Lt(n);
						return r.url = this.url, r.loops = i, r.startTime = t, r.play(), k.addChannel(r), r
					}, r(0, i, "duration", function () {
						var t;
						return (t = e._audioCache[this.url]) ? t.duration : 0
					}), e._initMusicAudio = function () {
						e._musicAudio || (e._musicAudio || (e._musicAudio = H.createElement("audio")), B.isConchApp || H.document.addEventListener("mousedown", e._makeMusicOK))
					}, e._makeMusicOK = function () {
						H.document.removeEventListener("mousedown", e._makeMusicOK), e._musicAudio.src ? e._musicAudio.play() : (e._musicAudio.src = "", e._musicAudio.load())
					}, e._audioCache = {}, e._musicAudio = null, e
				}(),
				gt = function (t) {
					function e() {
						this.url = null, this.loops = 0, this.startTime = NaN, this.isStopped = !1, this.completeHandler = null, e.__super.call(this)
					}
					n(e, "laya.media.SoundChannel", h);
					var i = e.prototype;
					return i.play = function () {}, i.stop = function () {}, i.pause = function () {}, i.resume = function () {}, i.__runComplete = function (t) {
						t && t.run()
					}, r(0, i, "volume", function () {
						return 1
					}, function (t) {}), r(0, i, "position", function () {
						return 0
					}), r(0, i, "duration", function () {
						return 0
					}), e
				}(),
				mt = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.media.Sound", h);
					var i = e.prototype;
					return i.load = function (t) {}, i.play = function (t, e) {
						return void 0 === t && (t = 0), void 0 === e && (e = 0), null
					}, i.dispose = function () {}, r(0, i, "duration", function () {
						return 0
					}), e
				}(),
				vt = function (t) {
					function e() {
						this.url = null, this.loaded = !1, this.data = null, this.audioBuffer = null, this.__toPlays = null, this._disposed = !1, e.__super.call(this)
					}
					n(e, "laya.media.webaudio.WebAudioSound", h);
					var i = e.prototype;
					return i.load = function (t) {
						var i = this;
						if (t = R.formatURL(t), this.url = t, this.audioBuffer = e._dataCache[t], this.audioBuffer) this._loaded(this.audioBuffer);
						else if (e.e.on("loaded:" + t, this, this._loaded), e.e.on("err:" + t, this, this._err), !e.__loadingSound[t]) {
							e.__loadingSound[t] = !0;
							var s = new H.window.XMLHttpRequest;
							s.open("GET", t, !0), s.responseType = "arraybuffer", s.onload = function () {
								i._disposed ? i._removeLoadEvents() : (i.data = s.response, e.buffs.push({
									buffer: i.data,
									url: i.url
								}), e.decode())
							}, s.onerror = function (t) {
								i._err()
							}, s.send()
						}
					}, i._err = function () {
						if (this._removeLoadEvents(), e.__loadingSound[this.url] = !1, this.event("error"), this.__toPlays) {
							var t, i = 0,
								s = 0;
							s = (t = this.__toPlays).length;
							var n;
							for (i = 0; i < s; i++)(n = t[i])[2] && !n[2].isStopped && n[2].event("error");
							this.__toPlays.length = 0
						}
					}, i._loaded = function (t) {
						this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, e._dataCache[this.url] = this.audioBuffer, this.loaded = !0, this.event("complete"))
					}, i._removeLoadEvents = function () {
						e.e.off("loaded:" + this.url, this, this._loaded), e.e.off("err:" + this.url, this, this._err)
					}, i.__playAfterLoaded = function () {
						if (this.__toPlays) {
							var t, e = 0,
								i = 0;
							i = (t = this.__toPlays).length;
							var s;
							for (e = 0; e < i; e++)(s = t[e])[2] && !s[2].isStopped && this.play(s[0], s[1], s[2]);
							this.__toPlays.length = 0
						}
					}, i.play = function (t, e, i) {
						return void 0 === t && (t = 0), void 0 === e && (e = 0), i = i || new kt, this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), this.__toPlays.push([t, e, i]), this.once("complete", this, this.__playAfterLoaded), this.load(this.url)), i.url = this.url, i.loops = e, i.audioBuffer = this.audioBuffer, i.startTime = t, i.play(), k.addChannel(i), i
					}, i.dispose = function () {
						this._disposed = !0, delete e._dataCache[this.url], delete e.__loadingSound[this.url], this.audioBuffer = null, this.data = null, this.__toPlays = []
					}, r(0, i, "duration", function () {
						return this.audioBuffer ? this.audioBuffer.duration : 0
					}), e.decode = function () {
						e.buffs.length <= 0 || e.isDecoding || (e.isDecoding = !0, e.tInfo = e.buffs.shift(), e.ctx.decodeAudioData(e.tInfo.buffer, e._done, e._fail))
					}, e._done = function (t) {
						e.e.event("loaded:" + e.tInfo.url, t), e.isDecoding = !1, e.decode()
					}, e._fail = function () {
						e.e.event("err:" + e.tInfo.url, null), e.isDecoding = !1, e.decode()
					}, e._playEmptySound = function () {
						if (null != e.ctx) {
							var t = e.ctx.createBufferSource();
							t.buffer = e._miniBuffer, t.connect(e.ctx.destination), t.start(0, 0, 0)
						}
					}, e._unlock = function () {
						e._unlocked || (e._playEmptySound(), "running" == e.ctx.state && (H.document.removeEventListener("mousedown", e._unlock, !0), H.document.removeEventListener("touchend", e._unlock, !0), H.document.removeEventListener("touchstart", e._unlock, !0), e._unlocked = !0))
					}, e.initWebAudio = function () {
						"running" != e.ctx.state && (e._unlock(), H.document.addEventListener("mousedown", e._unlock, !0), H.document.addEventListener("touchend", e._unlock, !0), H.document.addEventListener("touchstart", e._unlock, !0))
					}, e._dataCache = {}, e.buffs = [], e.isDecoding = !1, e._unlocked = !1, e.tInfo = null, e.__loadingSound = {}, s(e, ["window", function () {
						return this.window = H.window
					}, "webAudioEnabled", function () {
						return this.webAudioEnabled = e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext
					}, "ctx", function () {
						return this.ctx = e.webAudioEnabled ? new(e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext) : void 0
					}, "_miniBuffer", function () {
						return this._miniBuffer = e.ctx.createBuffer(1, 1, 22050)
					}, "e", function () {
						return this.e = new h
					}]), e
				}(),
				yt = function (t) {
					function e() {
						this._responseType = null, this._data = null, e.__super.call(this), this._http = new H.window.XMLHttpRequest
					}
					n(e, "laya.net.HttpRequest", h);
					var i = e.prototype;
					return i.send = function (t, e, i, s, n) {
						void 0 === i && (i = "get"), void 0 === s && (s = "text"), this._responseType = s, this._data = null;
						var r = this,
							o = this._http;
						if (o.open(i, t, !0), n)
							for (var a = 0; a < n.length; a++) o.setRequestHeader(n[a++], n[a]);
						else B.isConchApp || (e && "string" != typeof e ? o.setRequestHeader("Content-Type", "application/json") : o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
						o.responseType = "arraybuffer" !== s ? "text" : "arraybuffer", o.onerror = function (t) {
							r._onError(t)
						}, o.onabort = function (t) {
							r._onAbort(t)
						}, o.onprogress = function (t) {
							r._onProgress(t)
						}, o.onload = function (t) {
							r._onLoad(t)
						}, o.send(e)
					}, i._onProgress = function (t) {
						t && t.lengthComputable && this.event("progress", t.loaded / t.total)
					}, i._onAbort = function (t) {
						this.error("Request was aborted by user")
					}, i._onError = function (t) {
						this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText)
					}, i._onLoad = function (t) {
						var e = this._http,
							i = void 0 !== e.status ? e.status : 200;
						200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL)
					}, i.error = function (t) {
						this.clear(), this.event("error", t)
					}, i.complete = function () {
						this.clear();
						var t = !0;
						try {
							"json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = tt.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText
						} catch (e) {
							t = !1, this.error(e.message)
						}
						t && this.event("complete", this._data instanceof Array ? [this._data] : this._data)
					}, i.clear = function () {
						var t = this._http;
						t.onerror = t.onabort = t.onprogress = t.onload = null
					}, r(0, i, "url", function () {
						return this._http.responseURL
					}), r(0, i, "http", function () {
						return this._http
					}), r(0, i, "data", function () {
						return this._data
					}), e
				}(),
				xt = function (t) {
					function e() {
						this._data = null, this._class = null, this._url = null, this._type = null, this._cache = !1, this._http = null, this._customParse = !1, e.__super.call(this)
					}
					n(e, "laya.net.Loader", h);
					var s = e.prototype;
					return s.load = function (t, i, s, n, r) {
						if (void 0 === s && (s = !0), void 0 === r && (r = !1), this._url = t, 0 === t.indexOf("data:image") ? this._type = i = "image" : (this._type = i || (i = this.getTypeFromUrl(t)), t = R.formatURL(t)), this._cache = s, this._data = null, !r && e.loadedMap[t]) return this._data = e.loadedMap[t], this.event("progress", 1), void this.event("complete", this._data);
						if (n && e.setGroup(t, n), null != e.parserMap[i]) return this._customParse = !0, void(e.parserMap[i] instanceof laya.utils.Handler ? e.parserMap[i].runWith(this) : e.parserMap[i].call(null, this));
						if ("image" === i || "htmlimage" === i || "nativeimage" === i) return this._loadImage(t);
						if ("sound" === i) return this._loadSound(t);
						if ("ttf" === i) return this._loadTTF(t);
						var o;
						switch (i) {
							case "atlas":
							case "plf":
								o = "json";
								break;
							case "font":
								o = "xml";
								break;
							case "pkm":
								o = "arraybuffer";
								break;
							default:
								o = i
						}
						e.preLoadedMap[t] ? this.onLoaded(e.preLoadedMap[t]) : (this._http || (this._http = new yt, this._http.on("progress", this, this.onProgress), this._http.on("error", this, this.onError), this._http.on("complete", this, this.onLoaded)), this._http.send(t, null, "get", o))
					}, s.getTypeFromUrl = function (t) {
						var i = tt.getFileExtension(t);
						return i ? e.typeMap[i] : (console.warn("Not recognize the resources suffix", t), "text")
					}, s._loadTTF = function (t) {
						t = R.formatURL(t);
						var e = new A;
						e.complete = l.create(this, this.onLoaded), e.load(t)
					}, s._loadImage = function (t) {
						function i() {
							s.onload = null, s.onerror = null, delete e.imgCache[t]
						}
						t = R.formatURL(t);
						var s, n = this,
							r = function () {
								i(), n.onLoaded(s)
							},
							o = function () {
								i(), n.event("error", "Load image failed")
							};
						"nativeimage" === this._type ? ((s = new H.window.Image).crossOrigin = "", s.onload = r, s.onerror = o, s.src = t, e.imgCache[t] = s) : new Zt.create(t, {
							onload: r,
							onerror: o,
							onCreate: function (i) {
								s = i, e.imgCache[t] = i
							}
						})
					}, s._loadSound = function (t) {
						function e() {
							i.offAll()
						}
						var i = new k._soundClass,
							s = this;
						i.on("complete", this, function () {
							e(), s.onLoaded(i)
						}), i.on("error", this, function () {
							e(), i.dispose(), s.event("error", "Load sound failed")
						}), i.load(t)
					}, s.onProgress = function (t) {
						"atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t)
					}, s.onError = function (t) {
						this.event("error", t)
					}, s.onLoaded = function (t) {
						var i = this._type;
						if ("plf" == i) this.parsePLFData(t), this.complete(t);
						else if ("image" === i) {
							var s = new wt(t);
							s.url = this._url, this.complete(s)
						} else if ("sound" === i || "htmlimage" === i || "nativeimage" === i) this.complete(t);
						else if ("atlas" === i) {
							if (!t.src && !t._setContext) {
								if (!this._data) {
									if (this._data = t, t.meta && t.meta.image)
										for (var n = t.meta.image.split(","), r = this._url.indexOf("/") >= 0 ? "/" : "\\", o = this._url.lastIndexOf(r), a = o >= 0 ? this._url.substr(0, o + 1) : "", h = 0, l = n.length; h < l; h++) n[h] = a + n[h];
									else n = [this._url.replace(".json", ".png")];
									n.reverse(), t.toLoads = n, t.pics = []
								}
								return this.event("progress", .3 + 1 / n.length * .6), this._loadImage(n.pop())
							}
							if (this._data.pics.push(t), this._data.toLoads.length > 0) return this.event("progress", .3 + 1 / this._data.toLoads.length * .6), this._loadImage(this._data.toLoads.pop());
							var c = this._data.frames,
								u = this._url.split("?")[0],
								_ = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : u.substring(0, u.lastIndexOf(".")) + "/",
								f = this._data.pics,
								p = R.formatURL(this._url),
								g = e.atlasMap[p] || (e.atlasMap[p] = []);
							g.dir = _;
							var m = 1;
							if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale) {
								m = parseFloat(this._data.meta.scale);
								for (var v in c) {
									var y = c[v],
										x = f[y.frame.idx ? y.frame.idx : 0],
										w = R.formatURL(_ + v);
									x.scaleRate = m;
									var b;
									b = wt.create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h), e.cacheRes(w, b), b.url = w, g.push(w)
								}
							} else
								for (v in c) x = f[(y = c[v]).frame.idx ? y.frame.idx : 0], w = R.formatURL(_ + v), e.cacheRes(w, wt.create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h)), e.loadedMap[w].url = w, g.push(w);
							delete this._data.pics, this.complete(this._data)
						} else if ("font" == i) {
							if (!t.src) return this._data = t, this.event("progress", .5), this._loadImage(this._url.replace(".fnt", ".png"));
							var C = new d;
							C.parseFont(this._data, t);
							var S = this._url.split(".fnt")[0].split("/"),
								T = S[S.length - 1];
							Rt.registerBitmapFont(T, C), this._data = C, this.complete(this._data)
						} else if ("pkm" == i) {
							var M = Zt.create(t, this._url),
								I = new wt(M);
							I.url = this._url, this.complete(I)
						} else this.complete(t)
					}, s.parsePLFData = function (t) {
						var i, s, n;
						for (i in t) switch (n = t[i], i) {
							case "json":
							case "text":
								for (s in n) e.preLoadedMap[R.formatURL(s)] = n[s];
								break;
							default:
								for (s in n) e.preLoadedMap[R.formatURL(s)] = n[s]
						}
					}, s.complete = function (t) {
						this._data = t, this._customParse ? this.event("loaded", t instanceof Array ? [t] : t) : (e._loaders.push(this), e._isWorking || e.checkNext())
					}, s.endLoad = function (t) {
						t && (this._data = t), this._cache && e.cacheRes(this._url, this._data), this.event("progress", 1), this.event("complete", this.data instanceof Array ? [this.data] : this.data)
					}, r(0, s, "url", function () {
						return this._url
					}), r(0, s, "data", function () {
						return this._data
					}), r(0, s, "cache", function () {
						return this._cache
					}), r(0, s, "type", function () {
						return this._type
					}), e.checkNext = function () {
						e._isWorking = !0;
						for (var t = H.now(); e._startIndex < e._loaders.length;)
							if (H.now(), e._loaders[e._startIndex].endLoad(), e._startIndex++, H.now() - t > e.maxTimeOut) return console.warn("loader callback cost a long time:" + (H.now() - t) + " url=" + e._loaders[e._startIndex - 1].url), void i.timer.frameOnce(1, null, e.checkNext);
						e._loaders.length = 0, e._startIndex = 0, e._isWorking = !1
					}, e.clearRes = function (t, i) {
						void 0 === i && (i = !1), t = R.formatURL(t);
						var s = e.getAtlas(t);
						if (s) {
							for (var n = 0, r = s.length; n < r; n++) {
								var o = s[n],
									a = e.getRes(o);
								delete e.loadedMap[o], a && a.destroy(i)
							}
							s.length = 0, delete e.atlasMap[t], delete e.loadedMap[t]
						} else {
							var h = e.loadedMap[t];
							h && (delete e.loadedMap[t], h instanceof laya.resource.Texture && h.bitmap && h.destroy(i))
						}
					}, e.clearTextureRes = function (t) {
						t = R.formatURL(t);
						var e = laya.net.Loader.getAtlas(t),
							i = e && e.length > 0 ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
						i && i.bitmap && (B.isConchApp && !B.isConchWebGL ? i.bitmap.source.releaseTexture && i.bitmap.source.releaseTexture() : null == i.bitmap._atlaser && i.bitmap.releaseResource(!0))
					}, e.getRes = function (t) {
						return e.loadedMap[R.formatURL(t)]
					}, e.getAtlas = function (t) {
						return e.atlasMap[R.formatURL(t)]
					}, e.cacheRes = function (t, i) {
						t = R.formatURL(t), null != e.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : e.loadedMap[t] = i
					}, e.setGroup = function (t, i) {
						e.groupMap[i] || (e.groupMap[i] = []), e.groupMap[i].push(t)
					}, e.clearResByGroup = function (t) {
						if (e.groupMap[t]) {
							var i = e.groupMap[t],
								s = 0,
								n = i.length;
							for (s = 0; s < n; s++) e.clearRes(i[s]);
							i.length = 0
						}
					}, e.TEXT = "text", e.JSON = "json", e.XML = "xml", e.BUFFER = "arraybuffer", e.IMAGE = "image", e.SOUND = "sound", e.ATLAS = "atlas", e.FONT = "font", e.TTF = "ttf", e.PLF = "plf", e.PKM = "pkm", e.typeMap = {
						png: "image",
						jpg: "image",
						jpeg: "image",
						txt: "text",
						json: "json",
						xml: "xml",
						als: "atlas",
						atlas: "atlas",
						mp3: "sound",
						ogg: "sound",
						wav: "sound",
						part: "json",
						fnt: "font",
						pkm: "pkm",
						ttf: "ttf",
						plf: "plf"
					}, e.parserMap = {}, e.groupMap = {}, e.maxTimeOut = 100, e.loadedMap = {}, e.preLoadedMap = {}, e.atlasMap = {}, e._loaders = [], e._isWorking = !1, e._startIndex = 0, e.imgCache = {}, e
				}(),
				wt = function (e) {
					function s(t, e) {
						this.offsetX = 0, this.offsetY = 0, this.sourceWidth = 0, this.sourceHeight = 0, this._w = 0, this._h = 0, this._uvID = 0, this._atlasID = -1, this.scaleRate = 1, s.__super.call(this), t && null != t._addReference && t._addReference(), this.setTo(t, e)
					}
					n(s, "laya.resource.Texture", h);
					var a = s.prototype;
					return a._setUrl = function (t) {
						this.url = t
					}, a.setTo = function (e, i) {
						if (e instanceof t.HTMLElement) {
							var n = Nt.create("2D", e);
							this.bitmap = n
						} else this.bitmap = e;
						if (this.uv = i || s.DEF_UV, e) {
							this._w = e.width, this._h = e.height, this.sourceWidth = this.sourceWidth || this._w, this.sourceHeight = this.sourceHeight || this._h, this._loaded = this._w > 0;
							var r = this;
							if (this._loaded) o.addToAtlas && o.addToAtlas(r);
							else {
								var a = e;
								a instanceof laya.resource.HTMLImage && a.image && a.image.addEventListener("load", function (t) {
									o.addToAtlas && o.addToAtlas(r)
								}, !1)
							}
						}
					}, a.active = function () {
						this.bitmap && this.bitmap.activeResource()
					}, a.destroy = function (t) {
						if (void 0 === t && (t = !1), this.bitmap && this.bitmap.referenceCount > 0) {
							var e = this.bitmap;
							t ? (B.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(), this.bitmap = null, e.dispose(), e._clearReference()) : (e._removeReference(), 0 == e.referenceCount && (B.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(), this.bitmap = null, e.dispose())), this.url && this === i.loader.getRes(this.url) && i.loader.clearRes(this.url, t), this._loaded = !1
						}
					}, a.load = function (t) {
						var e = this;
						this._loaded = !1, t = R.customFormat(t);
						var i = this.bitmap || (this.bitmap = Zt.create(t));
						i && i._addReference();
						var s = this;
						i.onload = function () {
							i.onload = null, s._loaded = !0, e.sourceWidth = e._w = i.width, e.sourceHeight = e._h = i.height, s.event("loaded", this), o.addToAtlas && o.addToAtlas(s)
						}
					}, a.addTextureToAtlas = function (t) {
						o.addTextureToAtlas(this)
					}, a.getPixels = function (t, e, i, s) {
						if (B.isConchApp) {
							var n = this.bitmap;
							if (n.source && n.source.getImageData) {
								var r = n.source.getImageData(t, e, i, s),
									a = new Uint8Array(r);
								return Array.from(a)
							}
							return null
						}
						if (B.isWebGL) return o.getTexturePixels(this, t, e, i, s);
						H.canvas.size(i, s), H.canvas.clear(), H.context.drawTexture(this, -t, -e, this.width, this.height, 0, 0);
						return H.context.getImageData(0, 0, i, s).data
					}, a.onAsynLoaded = function (t, e) {
						e && e._addReference(), this.setTo(e, this.uv)
					}, r(0, a, "source", function () {
						return this.bitmap ? (this.bitmap.activeResource(), this.bitmap.source) : null
					}), r(0, a, "loaded", function () {
						return this._loaded
					}), r(0, a, "released", function () {
						return !this.bitmap || this.bitmap.released
					}), r(0, a, "width", function () {
						return this._w ? this._w : this.uv && this.uv !== s.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width
					}, function (t) {
						this._w = t, this.sourceWidth || (this.sourceWidth = t)
					}), r(0, a, "repeat", function () {
						return !B.isWebGL || !this.bitmap || this.bitmap.repeat
					}, function (t) {
						t && B.isWebGL && this.bitmap && (this.bitmap.repeat = t, t && (this.bitmap.enableMerageInAtlas = !1))
					}), r(0, a, "height", function () {
						return this._h ? this._h : this.uv && this.uv !== s.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height
					}, function (t) {
						this._h = t, this.sourceHeight || (this.sourceHeight = t)
					}), r(0, a, "isLinearSampling", function () {
						return !B.isWebGL || 9728 != this.bitmap.minFifter
					}, function (t) {
						!t && B.isWebGL && (t || -1 != this.bitmap.minFifter || -1 != this.bitmap.magFifter || (this.bitmap.minFifter = 9728, this.bitmap.magFifter = 9728, this.bitmap.enableMerageInAtlas = !1))
					}), s.moveUV = function (t, e, i) {
						for (var s = 0; s < 8; s += 2) i[s] += t, i[s + 1] += e;
						return i
					}, s.create = function (t, e, i, n, r, a, h, l, c) {
						void 0 === a && (a = 0), void 0 === h && (h = 0), void 0 === l && (l = 0), void 0 === c && (c = 0);
						var u = t instanceof laya.resource.Texture,
							_ = u ? t.uv : s.DEF_UV,
							d = u ? t.bitmap : t,
							f = o.isAtlas(d);
						if (f) {
							var p = d._atlaser,
								g = t._atlasID;
							if (-1 == g) throw new Error("create texture error");
							d = p._inAtlasTextureBitmapValue[g], _ = p._inAtlasTextureOriUVValue[g]
						}
						var m = new s(d, null);
						d.width && e + n > d.width && (n = d.width - e), d.height && i + r > d.height && (r = d.height - i), m.width = n, m.height = r, m.offsetX = a, m.offsetY = h, m.sourceWidth = l || n, m.sourceHeight = c || r;
						var v = 1 / d.width,
							y = 1 / d.height;
						e *= v, i *= y, n *= v, r *= y;
						var x = m.uv[0],
							w = m.uv[1],
							b = m.uv[4],
							C = m.uv[5],
							S = b - x,
							T = C - w,
							M = s.moveUV(_[0], _[1], [e, i, e + n, i, e + n, i + r, e, i + r]);
						m.uv = [x + M[0] * S, w + M[1] * T, b - (1 - M[2]) * S, w + M[3] * T, b - (1 - M[4]) * S, C - (1 - M[5]) * T, x + M[6] * S, C - (1 - M[7]) * T], f && m.addTextureToAtlas();
						var I = d.scaleRate;
						return I && 1 != I ? (m.sourceWidth /= I, m.sourceHeight /= I, m.width /= I, m.height /= I, m.scaleRate = I, m.offsetX /= I, m.offsetY /= I) : m.scaleRate = 1, m
					}, s.createFromTexture = function (t, e, i, n, r) {
						var o = t.scaleRate;
						1 != o && (e *= o, i *= o, n *= o, r *= o);
						var a = L.TEMP.setTo(e - t.offsetX, i - t.offsetY, n, r),
							h = a.intersection(s._rect1.setTo(0, 0, t.width, t.height), s._rect2);
						if (!h) return null;
						var l = s.create(t, h.x, h.y, h.width, h.height, h.x - a.x, h.y - a.y, n, r);
						return l.bitmap._removeReference(), l
					}, s.DEF_UV = [0, 0, 1, 0, 1, 1, 0, 1], s.INV_UV = [0, 1, 1, 1, 1, 0, 0, 0], s._rect1 = new L, s._rect2 = new L, s
				}(),
				bt = function (t) {
					function e() {
						this.autoCacheCmd = !0, this._width = 0, this._height = 0, this._source = null, this._sizeGrid = null, this._isChanged = !1, this._offset = null, e.__super.call(this)
					}
					n(e, "laya.ui.AutoBitmap", t);
					var s = e.prototype;
					return s.destroy = function () {
						t.prototype.destroy.call(this), this._source = null, this._sizeGrid = null, this._offset = null
					}, s._setChanged = function () {
						this._isChanged || (this._isChanged = !0, i.timer.callLater(this, this.changeSource))
					}, s.changeSource = function () {
						this._isChanged = !1;
						var t = this._source;
						if (t && t.bitmap) {
							var i = this.width,
								s = this.height,
								n = this._sizeGrid,
								r = t.sourceWidth,
								o = t.sourceHeight;
							if (!n || r === i && o === s) this.cleanByTexture(t, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, i, s);
							else {
								t.$_GID || (t.$_GID = tt.getGID());
								var a = t.$_GID + "." + i + "." + s + "." + n.join(".");
								if (tt.isOKCmdList(it.I.get(a))) return void(this.cmds = it.I.get(a));
								this.clear();
								var h = n[0],
									l = n[1],
									c = n[2],
									u = n[3],
									_ = n[4],
									d = !1;
								if (i == r && (u = l = 0), s == o && (h = c = 0), u + l > i) {
									var f = i;
									d = !0, i = u + l, this.save(), this.clipRect(0, 0, f, s)
								}
								u && h && this.drawTexture(e.getTexture(t, 0, 0, u, h), 0, 0, u, h), l && h && this.drawTexture(e.getTexture(t, r - l, 0, l, h), i - l, 0, l, h), u && c && this.drawTexture(e.getTexture(t, 0, o - c, u, c), 0, s - c, u, c), l && c && this.drawTexture(e.getTexture(t, r - l, o - c, l, c), i - l, s - c, l, c), h && this.drawBitmap(_, e.getTexture(t, u, 0, r - u - l, h), u, 0, i - u - l, h), c && this.drawBitmap(_, e.getTexture(t, u, o - c, r - u - l, c), u, s - c, i - u - l, c), u && this.drawBitmap(_, e.getTexture(t, 0, h, u, o - h - c), 0, h, u, s - h - c), l && this.drawBitmap(_, e.getTexture(t, r - l, h, l, o - h - c), i - l, h, l, s - h - c), this.drawBitmap(_, e.getTexture(t, u, h, r - u - l, o - h - c), u, h, i - u - l, s - h - c), d && this.restore(), this.autoCacheCmd && !B.isConchApp && it.I.set(a, this.cmds)
							}
							this._repaint()
						}
					}, s.drawBitmap = function (t, e, i, s, n, r) {
						void 0 === n && (n = 0), void 0 === r && (r = 0), n < .1 || r < .1 || (!t || e.width == n && e.height == r ? this.drawTexture(e, i, s, n, r) : this.fillTexture(e, i, s, n, r))
					}, s.clear = function (e) {
						void 0 === e && (e = !0), t.prototype.clear.call(this, !1)
					}, r(0, s, "sizeGrid", function () {
						return this._sizeGrid
					}, function (t) {
						this._sizeGrid = t, this._setChanged()
					}), r(0, s, "width", function () {
						return this._width ? this._width : this._source ? this._source.sourceWidth : 0
					}, function (t) {
						this._width != t && (this._width = t, this._setChanged())
					}), r(0, s, "height", function () {
						return this._height ? this._height : this._source ? this._source.sourceHeight : 0
					}, function (t) {
						this._height != t && (this._height = t, this._setChanged())
					}), r(0, s, "source", function () {
						return this._source
					}, function (t) {
						t ? (this._source = t, this._setChanged()) : (this._source = null, this.clear())
					}), e.getTexture = function (t, e, i, s, n) {
						s <= 0 && (s = 1), n <= 0 && (n = 1), t.$_GID || (t.$_GID = tt.getGID());
						var r = t.$_GID + "." + e + "." + i + "." + s + "." + n,
							o = it.I.get(r);
						return o && o.source || (o = wt.createFromTexture(t, e, i, s, n), it.I.set(r, o)), o
					}, e
				}(_),
				Ct = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.wx.mini.MiniLoader", h);
					return e.prototype.load = function (t, i, s, n, r) {
						void 0 === s && (s = !0), void 0 === r && (r = !1);
						if (this._url = t, 0 === t.indexOf("data:image") ? this._type = i = "image" : this._type = i || (i = this.getTypeFromUrl(t)), this._cache = s, this._data = null, !r && xt.loadedMap[R.formatURL(t)]) return this._data = xt.loadedMap[R.formatURL(t)], this.event("progress", 1), void this.event("complete", this._data);
						if (null != xt.parserMap[i]) return this._customParse = !0, void(xt.parserMap[i] instanceof laya.utils.Handler ? xt.parserMap[i].runWith(this) : xt.parserMap[i].call(null, this));
						var o = nt.getUrlEncode(t, i),
							a = tt.getFileExtension(t);
						if (-1 != e._fileTypeArr.indexOf(a)) nt.EnvConfig.load.call(this, t, i, s, n, r);
						else {
							if (nt.isZiYu && !rt.ziyuFileData[t] && (t = R.formatURL(t)), nt.isZiYu && rt.ziyuFileData[t]) {
								var h = rt.ziyuFileData[t];
								return void this.onLoaded(h)
							}
							if (rt.getFileInfo(t)) {
								var c = rt.getFileInfo(t);
								c.encoding = null == c.encoding ? "ascii" : c.encoding, rt.readFile(t, c.encoding, new l(e, e.onReadNativeCallBack, [o, t, i, s, n, r, this]), t)
							} else {
								if (rt.isLocalNativeFile(t)) return void rt.read(t, o, new l(e, e.onReadNativeCallBack, [o, t, i, s, n, r, this]));
								var u = t; - 1 != (t = R.formatURL(t)).indexOf("http://") || -1 != t.indexOf("https://") ? nt.EnvConfig.load.call(this, u, i, s, n, r) : rt.readFile(t, o, new l(e, e.onReadNativeCallBack, [o, t, i, s, n, r, this]), t)
							}
						}
					}, e.onReadNativeCallBack = function (t, e, i, s, n, r, o, a, h) {
						if (void 0 === s && (s = !0), void 0 === r && (r = !1), void 0 === a && (a = 0), a) 1 == a && (console.log("-----------本地加载失败，尝试外网加载----"), nt.EnvConfig.load.call(o, e, i, s, n, r));
						else {
							var l;
							l = "json" == i || "atlas" == i ? nt.getJson(h.data) : "xml" == i ? tt.parseXMLFromString(h.data) : h.data, !nt.isZiYu && nt.isPosMsgYu && "arraybuffer" != i && wx.postMessage({
								url: e,
								data: l,
								isLoad: "filedata"
							}), o.onLoaded(l)
						}
					}, s(e, ["_fileTypeArr", function () {
						return this._fileTypeArr = ["png", "jpg", "bmp", "jpeg", "gif"]
					}]), e
				}(),
				St = function (t) {
					function e() {
						this._sound = null, this.url = null, this.loaded = !1, this.readyUrl = null, e.__super.call(this)
					}
					n(e, "laya.wx.mini.MiniSound", h);
					var i = e.prototype;
					return i.load = function (t) {
						if (rt.isLocalNativeFile(t)) {
							if (-1 != t.indexOf("http://") || -1 != t.indexOf("https://"))
								if ("" != rt.loadPath) t = t.split(rt.loadPath)[1];
								else {
									var i = "" != R.rootPath ? R.rootPath : R.basePath;
									"" != i && (t = t.split(i)[1])
								}
						} else t = R.formatURL(t);
						this.url = t, this.readyUrl = t, e._audioCache[this.readyUrl] ? this.event("complete") : nt.autoCacheFile && rt.getFileInfo(t) ? this.onDownLoadCallBack(t, 0) : nt.autoCacheFile ? rt.downOtherFiles(t, l.create(this, this.onDownLoadCallBack, [t]), t) : this.onDownLoadCallBack(t, 0)
					}, i.onDownLoadCallBack = function (t, i) {
						if (i) this.event("error");
						else {
							var s;
							if (nt.autoCacheFile) {
								var n = rt.getFileInfo(t);
								if (n && n.md5) {
									var r = n.md5;
									s = rt.getFileNativePath(r)
								} else s = t;
								this._sound = e._createSound(), this._sound.src = this.url = s
							} else this._sound = e._createSound(), this._sound.src = t;
							this._sound.onCanplay(e.bindToThis(this.onCanPlay, this)), this._sound.onError(e.bindToThis(this.onError, this))
						}
					}, i.onError = function (t) {
						try {
							console.log("-----1---------------minisound-----id:" + e._id), console.log(t)
						} catch (t) {
							console.log("-----2---------------minisound-----id:" + e._id), console.log(t)
						}
						this.event("error"), this._sound.offError(null)
					}, i.onCanPlay = function () {
						this.loaded = !0, this.event("complete"), this._sound.offCanplay(null)
					}, i.play = function (t, i) {
						void 0 === t && (t = 0), void 0 === i && (i = 0);
						var s;
						if (this.url == k._tMusic ? (e._musicAudio || (e._musicAudio = e._createSound()), s = e._musicAudio) : s = e._audioCache[this.readyUrl] ? e._audioCache[this.readyUrl]._sound : e._createSound(), nt.autoCacheFile && rt.getFileInfo(this.url)) {
							var n = rt.getFileInfo(this.url).md5;
							s.src = this.url = rt.getFileNativePath(n)
						} else s.src = this.url;
						var r = new Et(s, this);
						return r.url = this.url, r.loops = i, r.loop = 0 === i, r.startTime = t, r.play(), k.addChannel(r), r
					}, i.dispose = function () {
						var t = e._audioCache[this.readyUrl];
						t && (t.src = "", t._sound && (t._sound.destroy(), t._sound = null, t = null), delete e._audioCache[this.readyUrl])
					}, r(0, i, "duration", function () {
						return this._sound.duration
					}), e._createSound = function () {
						return e._id++, nt.window.wx.createInnerAudioContext()
					}, e.bindToThis = function (t, e) {
						return t.bind(e)
					}, e._musicAudio = null, e._id = 0, e._audioCache = {}, e
				}(),
				Tt = function (t) {
					function e(t) {
						this._bgground = null, this._border = null, this._rect = null, this.underLine = 0, this.lineHeight = 0, e.__super.call(this), this._padding = e._PADDING, this._spacing = e._SPACING, this._aligns = e._ALIGNS, this._font = p.EMPTY, this._ower = t
					}
					n(e, "laya.display.css.CSSStyle", t);
					var i = e.prototype;
					return i.destroy = function () {
						this._ower = null, this._font = null, this._rect = null
					}, i.inherit = function (t) {
						this._font = t._font, this._spacing = t._spacing === e._SPACING ? e._SPACING : t._spacing.slice(), this.lineHeight = t.lineHeight
					}, i._widthAuto = function () {
						return 0 != (262144 & this._type)
					}, i.widthed = function (t) {
						return 0 != (8 & this._type)
					}, i._calculation = function (t, e) {
						function i(t, e, i) {
							return t * i[0] + e * i[1] + i[2]
						}

						function s(t) {
							var e = r.width,
								s = n.width;
							o.width && (n.width = i(e, s, o.width)), o.height && (n.height = i(e, s, o.height)), o.left && (n.x = i(e, s, o.left)), o.top && (n.y = i(e, s, o.top))
						}
						if (e.indexOf("%") < 0) return !1;
						var n = this._ower,
							r = n.parent,
							o = this._rect;
						null === o && (r._getCSSStyle()._type |= 524288, r.on("resize", this, s), this._rect = o = {
							input: {}
						});
						var a = e.split(" ");
						return a[0] = parseFloat(a[0]) / 100, 1 == a.length ? a[1] = a[2] = 0 : (a[1] = parseFloat(a[1]) / 100, a[2] = parseFloat(a[2])), o[t] = a, o.input[t] = e, s(), !0
					}, i.heighted = function (t) {
						return 0 != (8192 & this._type)
					}, i.size = function (t, e) {
						var i = this._ower,
							s = !1; - 1 !== t && t != this._ower.width && (this._type |= 8, this._ower.width = t, s = !0), -1 !== e && e != this._ower.height && (this._type |= 8192, this._ower.height = e, s = !0), s && (i._layoutLater(), 524288 & this._type && i.event("resize", this))
					}, i._getAlign = function () {
						return this._aligns[0]
					}, i._getValign = function () {
						return this._aligns[1]
					}, i._getCssFloat = function () {
						return 0 != (32768 & this._type) ? 32768 : 0
					}, i._createFont = function () {
						return 4096 & this._type ? this._font : (this._type |= 4096, this._font = new p(this._font))
					}, i.render = function (t, e, i, s) {
						var n = t.width,
							r = t.height;
						i -= t.pivotX, s -= t.pivotY, this._bgground && null != this._bgground.color && e.ctx.fillRect(i, s, n, r, this._bgground.color), this._border && this._border.color && e.drawRect(i, s, n, r, this._border.color.strColor, this._border.size)
					}, i.getCSSStyle = function () {
						return this
					}, i.cssText = function (t) {
						this.attrs(e.parseOneCSS(t, ";"))
					}, i.attrs = function (t) {
						if (t)
							for (var e = 0, i = t.length; e < i; e++) {
								var s = t[e];
								this[s[0]] = s[1]
							}
					}, i.setTransform = function (t) {
						"none" === t ? this._tf = f._TF_EMPTY : this.attrs(e.parseOneCSS(t, ","))
					}, i.translate = function (t, e) {
						this._tf === f._TF_EMPTY && (this._tf = new g), this._tf.translateX = t, this._tf.translateY = e
					}, i.scale = function (t, e) {
						this._tf === f._TF_EMPTY && (this._tf = new g), this._tf.scaleX = t, this._tf.scaleY = e
					}, i._enableLayout = function () {
						return 0 == (2 & this._type) && 0 == (4 & this._type)
					}, r(0, i, "block", t.prototype._$get_block, function (t) {
						t ? this._type |= 1 : this._type &= -2
					}), r(0, i, "valign", function () {
						return e._valigndef[this._aligns[1]]
					}, function (t) {
						this._aligns === e._ALIGNS && (this._aligns = [0, 0, 0]), this._aligns[1] = e._valigndef[t]
					}), r(0, i, "height", null, function (t) {
						if (this._type |= 8192, "string" == typeof t) {
							if (this._calculation("height", t)) return;
							t = parseInt(t)
						}
						this.size(-1, t)
					}), r(0, i, "width", null, function (t) {
						if (this._type |= 8, "string" == typeof t) {
							var e = t.indexOf("auto");
							if (e >= 0 && (this._type |= 262144, t = t.substr(0, e)), this._calculation("width", t)) return;
							t = parseInt(t)
						}
						this.size(t, -1)
					}), r(0, i, "fontWeight", function () {
						return this._font.weight
					}, function (t) {
						this._createFont().weight = t
					}), r(0, i, "left", null, function (t) {
						var e = this._ower;
						if ("string" == typeof t) {
							if ("center" === t ? t = "50% -50% 0" : "right" === t && (t = "100% -100% 0"), this._calculation("left", t)) return;
							t = parseInt(t)
						}
						e.x = t
					}), r(0, i, "_translate", null, function (t) {
						this.translate(t[0], t[1])
					}), r(0, i, "absolute", function () {
						return 0 != (4 & this._type)
					}), r(0, i, "top", null, function (t) {
						var e = this._ower;
						if ("string" == typeof t) {
							if ("middle" === t ? t = "50% -50% 0" : "bottom" === t && (t = "100% -100% 0"), this._calculation("top", t)) return;
							t = parseInt(t)
						}
						e.y = t
					}), r(0, i, "align", function () {
						return e._aligndef[this._aligns[0]]
					}, function (t) {
						this._aligns === e._ALIGNS && (this._aligns = [0, 0, 0]), this._aligns[0] = e._aligndef[t]
					}), r(0, i, "bold", function () {
						return this._font.bold
					}, function (t) {
						this._createFont().bold = t
					}), r(0, i, "padding", function () {
						return this._padding
					}, function (t) {
						this._padding = t
					}), r(0, i, "leading", function () {
						return this._spacing[1]
					}, function (t) {
						"string" == typeof t && (t = parseInt(t + "")), this._spacing === e._SPACING && (this._spacing = [0, 0]), this._spacing[1] = t
					}), r(0, i, "lineElement", function () {
						return 0 != (65536 & this._type)
					}, function (t) {
						t ? this._type |= 65536 : this._type &= -65537
					}), r(0, i, "cssFloat", function () {
						return 0 != (32768 & this._type) ? "right" : "left"
					}, function (t) {
						this.lineElement = !1, "right" === t ? this._type |= 32768 : this._type &= -32769
					}), r(0, i, "textDecoration", function () {
						return this._font.decoration
					}, function (t) {
						this._createFont().decoration = t
					}), r(0, i, "whiteSpace", function () {
						return 131072 & this._type ? "nowrap" : ""
					}, function (t) {
						"nowrap" === t && (this._type |= 131072), "none" === t && (this._type &= -131073)
					}), r(0, i, "background", null, function (t) {
						t ? (this._bgground || (this._bgground = {}), this._bgground.color = t, this._ower.conchModel && this._ower.conchModel.bgColor(t), this._type |= 16384, this._ower._renderType |= 256) : this._bgground = null
					}), r(0, i, "wordWrap", function () {
						return 0 == (131072 & this._type)
					}, function (t) {
						t ? this._type &= -131073 : this._type |= 131072
					}), r(0, i, "color", function () {
						return this._font.color
					}, function (t) {
						this._createFont().color = t
					}), r(0, i, "password", function () {
						return this._font.password
					}, function (t) {
						this._createFont().password = t
					}), r(0, i, "backgroundColor", function () {
						return this._bgground ? this._bgground.color : null
					}, function (t) {
						"none" === t ? this._bgground = null : (this._bgground || (this._bgground = {}), this._bgground.color = t), this._ower.conchModel && this._ower.conchModel.bgColor(t), this._ower._renderType |= 256
					}), r(0, i, "font", function () {
						return this._font.toString()
					}, function (t) {
						this._createFont().set(t)
					}), r(0, i, "weight", null, function (t) {
						this._createFont().weight = t
					}), r(0, i, "letterSpacing", function () {
						return this._spacing[0]
					}, function (t) {
						"string" == typeof t && (t = parseInt(t + "")), this._spacing === e._SPACING && (this._spacing = [0, 0]), this._spacing[0] = t
					}), r(0, i, "fontSize", function () {
						return this._font.size
					}, function (t) {
						this._createFont().size = t
					}), r(0, i, "italic", function () {
						return this._font.italic
					}, function (t) {
						this._createFont().italic = t
					}), r(0, i, "fontFamily", function () {
						return this._font.family
					}, function (t) {
						this._createFont().family = t
					}), r(0, i, "stroke", function () {
						return this._font.stroke[0]
					}, function (t) {
						this._createFont().stroke === p._STROKE && (this._font.stroke = [0, "#000000"]), this._font.stroke[0] = t
					}), r(0, i, "strokeColor", function () {
						return this._font.stroke[1]
					}, function (t) {
						this._createFont().stroke === p._STROKE && (this._font.stroke = [0, "#000000"]), this._font.stroke[1] = t
					}), r(0, i, "border", function () {
						return this._border ? this._border.value : ""
					}, function (t) {
						if ("none" != t) {
							this._border || (this._border = {}), this._border.value = t;
							var e = t.split(" ");
							if (this._border.color = U.create(e[e.length - 1]), 1 == e.length) return this._border.size = 1, void(this._border.type = "solid");
							var i = 0;
							e[0].indexOf("px") > 0 ? (this._border.size = parseInt(e[0]), i++) : this._border.size = 1, this._border.type = e[i], this._ower._renderType |= 256
						} else this._border = null
					}), r(0, i, "borderColor", function () {
						return this._border && this._border.color ? this._border.color.strColor : null
					}, function (t) {
						t ? (this._border || (this._border = {
							size: 1,
							type: "solid"
						}), this._border.color = null == t ? null : U.create(t), this._ower.conchModel && this._ower.conchModel.border(this._border.color.strColor), this._ower._renderType |= 256) : this._border = null
					}), r(0, i, "position", function () {
						return 4 & this._type ? "absolute" : ""
					}, function (t) {
						"absolute" == t ? this._type |= 4 : this._type &= -5
					}), r(0, i, "display", null, function (t) {
						switch (t) {
							case "":
								this._type &= -3, this.visible = !0;
								break;
							case "none":
								this._type |= 2, this.visible = !1, this._ower._layoutLater()
						}
					}), r(0, i, "paddingLeft", function () {
						return this.padding[3]
					}), r(0, i, "paddingTop", function () {
						return this.padding[0]
					}), r(0, i, "_scale", null, function (t) {
						this._ower.scale(t[0], t[1])
					}), r(0, i, "_rotate", null, function (t) {
						this._ower.rotation = t
					}), e.parseOneCSS = function (t, i) {
						for (var s, n = [], r = t.split(i), o = 0, a = r.length; o < a; o++) {
							var h = r[o],
								l = h.indexOf(":"),
								c = h.substr(0, l).replace(/^\s+|\s+$/g, "");
							if (0 != c.length) {
								var u = h.substr(l + 1).replace(/^\s+|\s+$/g, ""),
									_ = [c, u];
								switch (c) {
									case "italic":
									case "bold":
										_[1] = "true" == u;
										break;
									case "line-height":
										_[0] = "lineHeight", _[1] = parseInt(u);
										break;
									case "font-size":
										_[0] = "fontSize", _[1] = parseInt(u);
										break;
									case "padding":
										(s = u.split(" ")).length > 1 || (s[1] = s[2] = s[3] = s[0]), _[1] = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
										break;
									case "rotate":
										_[0] = "_rotate", _[1] = parseFloat(u);
										break;
									case "scale":
										s = u.split(" "), _[0] = "_scale", _[1] = [parseFloat(s[0]), parseFloat(s[1])];
										break;
									case "translate":
										s = u.split(" "), _[0] = "_translate", _[1] = [parseInt(s[0]), parseInt(s[1])];
										break;
									default:
										(_[0] = e._CSSTOVALUE[c]) || (_[0] = c)
								}
								n.push(_)
							}
						}
						return n
					}, e.parseCSS = function (t, i) {
						for (var s; null != (s = e._parseCSSRegExp.exec(t));) e.styleSheets[s[1]] = e.parseOneCSS(s[2], ";")
					}, e.EMPTY = new e(null), e._CSSTOVALUE = {
						"letter-spacing": "letterSpacing",
						"line-spacing": "lineSpacing",
						"white-space": "whiteSpace",
						"line-height": "lineHeight",
						"scale-x": "scaleX",
						"scale-y": "scaleY",
						"translate-x": "translateX",
						"translate-y": "translateY",
						"font-family": "fontFamily",
						"font-weight": "fontWeight",
						"vertical-align": "valign",
						"text-decoration": "textDecoration",
						"background-color": "backgroundColor",
						"border-color": "borderColor",
						float: "cssFloat"
					}, e._parseCSSRegExp = new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}", "g"), e._aligndef = {
						left: 0,
						center: 1,
						right: 2,
						0: "left",
						1: "center",
						2: "right"
					}, e._valigndef = {
						top: 0,
						middle: 1,
						bottom: 2,
						0: "top",
						1: "middle",
						2: "bottom"
					}, e.styleSheets = {}, e.ALIGN_CENTER = 1, e.ALIGN_RIGHT = 2, e.VALIGN_MIDDLE = 1, e.VALIGN_BOTTOM = 2, e._CSS_BLOCK = 1, e._DISPLAY_NONE = 2, e._ABSOLUTE = 4, e._WIDTH_SET = 8, e._PADDING = [0, 0, 0, 0], e._RECT = [-1, -1, -1, -1], e._SPACING = [0, 0], e._ALIGNS = [0, 0, 0], e.ADDLAYOUTED = 512, e._NEWFONT = 4096, e._HEIGHT_SET = 8192, e._BACKGROUND_SET = 16384, e._FLOAT_RIGHT = 32768, e._LINE_ELEMENT = 65536, e._NOWARP = 131072, e._WIDTHAUTO = 262144, e._LISTERRESZIE = 524288, e
				}(f),
				Mt = function (t) {
					function e(t) {
						e.__super.call(this), t || (t = [.3, .59, .11, 0, 0, .3, .59, .11, 0, 0, .3, .59, .11, 0, 0, 0, 0, 0, 1, 0]), this._mat = new Float32Array(16), this._alpha = new Float32Array(4);
						for (var i = 0, s = 0, n = 0; n < 20; n++) n % 5 != 4 ? this._mat[i++] = t[n] : this._alpha[s++] = t[n];
						this._action = o.createFilterAction(32), this._action.data = this
					}
					n(e, "laya.filters.ColorFilter", b);
					var s = e.prototype;
					return i.imps(s, {
						"laya.filters.IFilter": !0
					}), s.callNative = function (t) {
						t._$P.cf = this;
						t.conchModel && t.conchModel.setFilterMatrix && t.conchModel.setFilterMatrix(this._mat, this._alpha)
					}, r(0, s, "type", function () {
						return 32
					}), r(0, s, "action", function () {
						return this._action
					}), e
				}(),
				It = (function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.ui.UIEvent", v), e.SHOW_TIP = "showtip", e.HIDE_TIP = "hidetip"
				}(), function (e) {
					function a() {
						this._transform = null, this._tfChanged = !1, this._x = 0, this._y = 0, this._width = 0, this._height = 0, this._repaint = 1, this._mouseEnableState = 0, this._zOrder = 0, this._graphics = null, this._renderType = 0, this._optimizeScrollRect = !1, this._texture = null, this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1, this.viewport = null, a.__super.call(this), this._style = f.EMPTY
					}
					n(a, "laya.display.Sprite", e);
					var h = a.prototype;
					return i.imps(h, {
						"laya.display.ILayout": !0
					}), h.createConchModel = function () {
						return new ConchNode
					}, h.destroy = function (t) {
						void 0 === t && (t = !0), this._releaseMem(), e.prototype.destroy.call(this, t), this._style && this._style.destroy(), this._transform && this._transform.destroy(), this._transform = null, this._style = null, this._graphics = null
					}, h.updateZOrder = function () {
						tt.updateOrder(this._childs) && this.repaint()
					}, h.reCache = function () {
						this._$P.cacheCanvas && (this._$P.cacheCanvas.reCache = !0), this._repaint = 1
					}, h.setBounds = function (t) {
						this._set$P("uBounds", t)
					}, h.getBounds = function () {
						return this._$P.mBounds || this._set$P("mBounds", new L), L._getWrapRec(this._boundPointsToParent(), this._$P.mBounds)
					}, h.getSelfBounds = function () {
						return this._$P.uBounds ? this._$P.uBounds : (this._$P.mBounds || this._set$P("mBounds", new L), L._getWrapRec(this._getBoundPointsM(!1), this._$P.mBounds))
					}, h._boundPointsToParent = function (t) {
						void 0 === t && (t = !1);
						var e = 0,
							i = 0;
						this._style && (e = this._style._tf.translateX, i = this._style._tf.translateY, t = t || 0 !== this._style._tf.rotate, this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
						var s = this._getBoundPointsM(t);
						if (!s || s.length < 1) return s;
						if (8 != s.length && (s = t ? T.scanPList(s) : L._getWrapRec(s, L.TEMP)._getBoundPoints()), !this.transform) return tt.transPointList(s, this._x - e, this._y - i), s;
						var n = P.TEMP,
							r = 0,
							o = s.length;
						for (r = 0; r < o; r += 2) n.x = s[r], n.y = s[r + 1], this.toParentPoint(n), s[r] = n.x, s[r + 1] = n.y;
						return s
					}, h.getGraphicBounds = function (t) {
						return void 0 === t && (t = !1), this._graphics ? this._graphics.getBounds(t) : L.TEMP.setTo(0, 0, 0, 0)
					}, h._getBoundPointsM = function (t) {
						if (void 0 === t && (t = !1), this._$P.uBounds) return this._$P.uBounds._getBoundPoints();
						if (this._$P.temBM || this._set$P("temBM", []), this.scrollRect) {
							var e = tt.clearArray(this._$P.temBM),
								i = L.TEMP;
							return i.copyFrom(this.scrollRect), tt.concatArray(e, i._getBoundPoints()), e
						}
						for (var s, n, r, o = this._graphics ? this._graphics.getBoundPoints() : tt.clearArray(this._$P.temBM), a = 0, h = (r = this._childs).length; a < h; a++)(s = r[a]) instanceof laya.display.Sprite && 1 == s.visible && (n = s._boundPointsToParent(t)) && (o = o ? tt.concatArray(o, n) : n);
						return o
					}, h.getStyle = function () {
						return this._style === f.EMPTY && (this._style = new f), this._style
					}, h.setStyle = function (t) {
						this._style = t
					}, h._adjustTransform = function () {
						this._tfChanged = !1;
						var t, e = this._style._tf,
							i = e.scaleX,
							s = e.scaleY;
						if (e.rotate || 1 !== i || 1 !== s || e.skewX || e.skewY) {
							(t = this._transform || (this._transform = I.create())).bTransform = !0;
							var n = .0174532922222222 * (e.rotate - e.skewX),
								r = .0174532922222222 * (e.rotate + e.skewY),
								o = Math.cos(r),
								a = Math.sin(r),
								h = Math.sin(n),
								l = Math.cos(n);
							return t.a = i * o, t.b = i * a, t.c = -s * h, t.d = s * l, t.tx = t.ty = 0, t
						}
						return this._transform && this._transform.destroy(), this._transform = null, this._renderType &= -5, t
					}, h.pos = function (t, e, i) {
						if (void 0 === i && (i = !1), this._x !== t || this._y !== e) {
							if (this.destroyed) return this;
							if (i) {
								this._x = t, this._y = e, this.conchModel && this.conchModel.pos(this._x, this._y);
								var s = this._parent;
								s && 0 === s._repaint && (s._repaint = 1, s.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, this._$P.maskParent.parentRepaint())
							} else this.x = t, this.y = e
						}
						return this
					}, h.pivot = function (t, e) {
						return this.pivotX = t, this.pivotY = e, this
					}, h.size = function (t, e) {
						return this.width = t, this.height = e, this
					}, h.scale = function (t, e, i) {
						void 0 === i && (i = !1);
						var s = this.getStyle(),
							n = s._tf;
						if (n.scaleX != t || n.scaleY != e) {
							if (this.destroyed) return this;
							if (i) {
								s.setScale(t, e), this._tfChanged = !0, this.conchModel && this.conchModel.scale(t, e), this._renderType |= 4;
								var r = this._parent;
								r && 0 === r._repaint && (r._repaint = 1, r.parentRepaint())
							} else this.scaleX = t, this.scaleY = e
						}
						return this
					}, h.skew = function (t, e) {
						return this.skewX = t, this.skewY = e, this
					}, h.render = function (t, e, i) {
						Z.spriteCount++, O.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0
					}, h.drawToCanvas = function (t, e, i, s) {
						if (B.isConchNode) {
							var n = Nt.create("2D");
							return new F(t, e, n).ctx.setCanvasType(1), this.conchModel.drawToCanvas(n.source, i, s), n
						}
						return o.drawToCanvas(this, this._renderType, t, e, i, s)
					}, h.customRender = function (t, e, i) {
						this._renderType |= 1024
					}, h._applyFilters = function () {
						if (!B.isWebGL) {
							var t;
							if ((t = this._$P.filters) && !(t.length < 1))
								for (var e = 0, i = t.length; e < i; e++) t[e].action.apply(this._$P.cacheCanvas)
						}
					}, h._isHaveGlowFilter = function () {
						var t = 0,
							e = 0;
						if (this.filters)
							for (t = 0; t < this.filters.length; t++)
								if (8 == this.filters[t].type) return !0;
						for (t = 0, e = this._childs.length; t < e; t++)
							if (this._childs[t]._isHaveGlowFilter()) return !0;
						return !1
					}, h.localToGlobal = function (t, e) {
						void 0 === e && (e = !1), !0 === e && (t = new P(t.x, t.y));
						for (var s = this; s && s != i.stage;) t = s.toParentPoint(t), s = s.parent;
						return t
					}, h.globalToLocal = function (t, e) {
						void 0 === e && (e = !1), e && (t = new P(t.x, t.y));
						for (var s = this, n = []; s && s != i.stage;) n.push(s), s = s.parent;
						for (var r = n.length - 1; r >= 0;) t = (s = n[r]).fromParentPoint(t), r--;
						return t
					}, h.toParentPoint = function (t) {
						if (!t) return t;
						t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), t.x += this._x, t.y += this._y;
						var e = this._style.scrollRect;
						return e && (t.x -= e.x, t.y -= e.y), t
					}, h.fromParentPoint = function (t) {
						if (!t) return t;
						t.x -= this._x, t.y -= this._y;
						var e = this._style.scrollRect;
						return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), t.x += this.pivotX, t.y += this.pivotY, t
					}, h.on = function (t, i, s, n) {
						return 1 !== this._mouseEnableState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(2, !0), this._parent && this._$2__onDisplay(), this._createListener(t, i, s, n, !1)) : e.prototype.on.call(this, t, i, s, n)
					}, h.once = function (t, i, s, n) {
						return 1 !== this._mouseEnableState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(2, !0), this._parent && this._$2__onDisplay(), this._createListener(t, i, s, n, !0)) : e.prototype.once.call(this, t, i, s, n)
					}, h._$2__onDisplay = function () {
						if (1 !== this._mouseEnableState) {
							var t = this;
							for (t = t.parent; t && 1 !== t._mouseEnableState && !t._getBit(2);) t.mouseEnabled = !0, t._setBit(2, !0), t = t.parent
						}
					}, h.loadImage = function (t, e, i, s, n, r) {
						var o = this;
						return void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), void 0 === n && (n = 0), this.graphics.loadImage(t, e, i, s, n, function (t) {
							o.destroyed || (o.size(e + (s || t.width), i + (n || t.height)), o.repaint(), r && r.runWith(t))
						}), this
					}, h.repaint = function () {
						this.conchModel && this.conchModel.repaint && this.conchModel.repaint(), 0 === this._repaint && (this._repaint = 1, this.parentRepaint()), this._$P && this._$P.maskParent && this._$P.maskParent.repaint()
					}, h._needRepaint = function () {
						return 0 !== this._repaint && this._$P.cacheCanvas && this._$P.cacheCanvas.reCache
					}, h._childChanged = function (t) {
						this._childs.length ? this._renderType |= 2048 : this._renderType &= -2049, t && this._get$P("hasZorder") && i.timer.callLater(this, this.updateZOrder), this.repaint()
					}, h.parentRepaint = function () {
						var t = this._parent;
						t && 0 === t._repaint && (t._repaint = 1, t.parentRepaint())
					}, h.startDrag = function (t, e, i, s, n, r, o) {
						void 0 === e && (e = !1), void 0 === i && (i = 0), void 0 === s && (s = 300), void 0 === r && (r = !1), void 0 === o && (o = .92), this._$P.dragging || this._set$P("dragging", new $), this._$P.dragging.start(this, t, e, i, s, n, r, o)
					}, h.stopDrag = function () {
						this._$P.dragging && this._$P.dragging.stop()
					}, h._releaseMem = function () {
						if (this._$P) {
							var t = this._$P.cacheCanvas;
							t && t.ctx && (q.recover("RenderContext", t.ctx), t.ctx.canvas.size(0, 0), t.ctx = null);
							var e = this._$P._filterCache;
							e && (e.destroy(), e.recycle(), this._set$P("_filterCache", null)), this._$P._isHaveGlowFilter && this._set$P("_isHaveGlowFilter", !1), this._$P._isHaveGlowFilter = null
						}
					}, h._setDisplay = function (t) {
						t || this._releaseMem(), e.prototype._setDisplay.call(this, t)
					}, h.hitTestPoint = function (t, e) {
						var i = this.globalToLocal(P.TEMP.setTo(t, e));
						t = i.x, e = i.y;
						return (this._$P.hitArea ? this._$P.hitArea : this._width > 0 && this._height > 0 ? L.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e)
					}, h.getMousePoint = function () {
						return this.globalToLocal(P.TEMP.setTo(i.stage.mouseX, i.stage.mouseY))
					}, h._getWords = function () {
						return null
					}, h._addChildsToLayout = function (t) {
						var e = this._getWords();
						if (null == e && 0 == this._childs.length) return !1;
						if (e)
							for (var i = 0, s = e.length; i < s; i++) t.push(e[i]);
						return this._childs.forEach(function (e, i, s) {
							e._style._enableLayout() && e._addToLayout(t)
						}), !0
					}, h._addToLayout = function (t) {
						this._style.absolute || (this._style.block ? t.push(this) : this._addChildsToLayout(t) && (this.x = this.y = 0))
					}, h._isChar = function () {
						return !1
					}, h._getCSSStyle = function () {
						return this._style.getCSSStyle()
					}, h._setAttributes = function (t, e) {
						switch (t) {
							case "x":
								this.x = parseFloat(e);
								break;
							case "y":
								this.y = parseFloat(e);
								break;
							case "width":
								this.width = parseFloat(e);
								break;
							case "height":
								this.height = parseFloat(e);
								break;
							default:
								this[t] = e
						}
					}, h._layoutLater = function () {
						this.parent && this.parent._layoutLater()
					}, r(0, h, "optimizeScrollRect", function () {
						return this._optimizeScrollRect
					}, function (t) {
						this._optimizeScrollRect != t && (this._optimizeScrollRect = t, this.conchModel && this.conchModel.optimizeScrollRect(t))
					}), r(0, h, "customRenderEnable", null, function (t) {
						if (t && (this._renderType |= 1024, B.isConchNode)) {
							a.CustomList.push(this);
							var e = new Nt("2d");
							e._setContext(new CanvasRenderingContext2D), this.customContext = new F(0, 0, e), e.context.setCanvasType && e.context.setCanvasType(2), this.conchModel.custom(e.context)
						}
					}), r(0, h, "cacheAsBitmap", function () {
						return "none" !== this.cacheAs
					}, function (t) {
						this.cacheAs = t ? this._$P.hasFilter ? "none" : "normal" : "none"
					}), r(0, h, "cacheAs", function () {
						return null == this._$P.cacheCanvas ? "none" : this._$P.cacheCanvas.type
					}, function (t) {
						var e = this._$P.cacheCanvas;
						if (t !== (e ? e.type : "none")) {
							if ("none" !== t) this._getBit(1) || this._setUpNoticeType(1), e || (e = this._set$P("cacheCanvas", q.getItemByClass("cacheCanvas", Object))), e.type = t, e.reCache = !0, this._renderType |= 16, "bitmap" == t && this.conchModel && this.conchModel.cacheAs(1), this._set$P("cacheForFilters", !1);
							else if (this._$P._mask);
							else if (this._$P.hasFilter) this._set$P("cacheForFilters", !0);
							else {
								if (e) {
									var i = e;
									i && i.ctx && (q.recover("RenderContext", i.ctx), i.ctx.canvas.size(0, 0), i.ctx = null), q.recover("cacheCanvas", e)
								}
								this._$P.cacheCanvas = null, this._renderType &= -17, this.conchModel && this.conchModel.cacheAs(0)
							}
							this.repaint()
						}
					}), r(0, h, "zOrder", function () {
						return this._zOrder
					}, function (t) {
						this._zOrder != t && (this._zOrder = t, this.conchModel && this.conchModel.setZOrder && this.conchModel.setZOrder(t), this._parent && (t && this._parent._set$P("hasZorder", !0), i.timer.callLater(this._parent, this.updateZOrder)))
					}), r(0, h, "rotation", function () {
						return this._style._tf.rotate
					}, function (t) {
						var e = this.getStyle();
						if (e._tf.rotate !== t) {
							e.setRotate(t), this._tfChanged = !0, this.conchModel && this.conchModel.rotate(t), this._renderType |= 4;
							var i = this._parent;
							i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
						}
					}), r(0, h, "width", function () {
						return this.autoSize ? this.getSelfBounds().width : this._width
					}, function (t) {
						this._width !== t && (this._width = t, this.conchModel && this.conchModel.size(t, this._height), this.repaint())
					}), r(0, h, "x", function () {
						return this._x
					}, function (t) {
						if (this._x !== t) {
							if (this.destroyed) return;
							this._x = t, this.conchModel && this.conchModel.pos(t, this._y);
							var e = this._parent;
							e && 0 === e._repaint && (e._repaint = 1, e.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, this._$P.maskParent.parentRepaint())
						}
					}), r(0, h, "globalScaleY", function () {
						for (var t = 1, e = this; e && e !== i.stage;) t *= e.scaleY, e = e.parent;
						return t
					}), r(0, h, "hitArea", function () {
						return this._$P.hitArea
					}, function (t) {
						this._set$P("hitArea", t)
					}), r(0, h, "staticCache", function () {
						return this._$P.staticCache
					}, function (t) {
						this._set$P("staticCache", t), t || this.reCache()
					}), r(0, h, "texture", function () {
						return this._texture
					}, function (t) {
						this._texture != t && (this._texture = t, this.graphics.cleanByTexture(t, 0, 0))
					}), r(0, h, "y", function () {
						return this._y
					}, function (t) {
						if (this._y !== t) {
							if (this.destroyed) return;
							this._y = t, this.conchModel && this.conchModel.pos(this._x, t);
							var e = this._parent;
							e && 0 === e._repaint && (e._repaint = 1, e.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, this._$P.maskParent.parentRepaint())
						}
					}), r(0, h, "height", function () {
						return this.autoSize ? this.getSelfBounds().height : this._height
					}, function (t) {
						this._height !== t && (this._height = t, this.conchModel && this.conchModel.size(this._width, t), this.repaint())
					}), r(0, h, "blendMode", function () {
						return this._style.blendMode
					}, function (t) {
						this.getStyle().blendMode = t, this.conchModel && this.conchModel.blendMode(t), t && "source-over" != t ? this._renderType |= 8 : this._renderType &= -9, this.parentRepaint()
					}), r(0, h, "scaleX", function () {
						return this._style._tf.scaleX
					}, function (t) {
						var e = this.getStyle();
						if (e._tf.scaleX !== t) {
							e.setScaleX(t), this._tfChanged = !0, this.conchModel && this.conchModel.scale(t, e._tf.scaleY), this._renderType |= 4;
							var i = this._parent;
							i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
						}
					}), r(0, h, "scaleY", function () {
						return this._style._tf.scaleY
					}, function (t) {
						var e = this.getStyle();
						if (e._tf.scaleY !== t) {
							e.setScaleY(t), this._tfChanged = !0, this.conchModel && this.conchModel.scale(e._tf.scaleX, t), this._renderType |= 4;
							var i = this._parent;
							i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
						}
					}), r(0, h, "stage", function () {
						return i.stage
					}), r(0, h, "skewX", function () {
						return this._style._tf.skewX
					}, function (t) {
						var e = this.getStyle();
						if (e._tf.skewX !== t) {
							e.setSkewX(t), this._tfChanged = !0, this.conchModel && this.conchModel.skew(t, e._tf.skewY), this._renderType |= 4;
							var i = this._parent;
							i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
						}
					}), r(0, h, "scrollRect", function () {
						return this._style.scrollRect
					}, function (t) {
						this.getStyle().scrollRect = t, this.repaint(), t ? (this._renderType |= 128, this.conchModel && this.conchModel.scrollRect(t.x, t.y, t.width, t.height)) : (this._renderType &= -129, this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(64) : this.conchModel.removeType(128)))
					}), r(0, h, "skewY", function () {
						return this._style._tf.skewY
					}, function (t) {
						var e = this.getStyle();
						if (e._tf.skewY !== t) {
							e.setSkewY(t), this._tfChanged = !0, this.conchModel && this.conchModel.skew(e._tf.skewX, t), this._renderType |= 4;
							var i = this._parent;
							i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
						}
					}), r(0, h, "transform", function () {
						return this._tfChanged ? this._adjustTransform() : this._transform
					}, function (t) {
						this._tfChanged = !1, this._transform = t, t && (this._x = t.tx, this._y = t.ty, t.tx = t.ty = 0, this.conchModel && this.conchModel.transform(t.a, t.b, t.c, t.d, this._x, this._y)), t ? this._renderType |= 4 : (this._renderType &= -5, this.conchModel && this.conchModel.removeType(4)), this.parentRepaint()
					}), r(0, h, "pivotX", function () {
						return this._style._tf.translateX
					}, function (t) {
						this.getStyle().setTranslateX(t), this.conchModel && this.conchModel.pivot(t, this._style._tf.translateY), this.repaint()
					}), r(0, h, "pivotY", function () {
						return this._style._tf.translateY
					}, function (t) {
						this.getStyle().setTranslateY(t), this.conchModel && this.conchModel.pivot(this._style._tf.translateX, t), this.repaint()
					}), r(0, h, "alpha", function () {
						return this._style.alpha
					}, function (t) {
						this._style && this._style.alpha !== t && (t = t < 0 ? 0 : t > 1 ? 1 : t, this.getStyle().alpha = t, this.conchModel && this.conchModel.alpha(t), 1 !== t ? this._renderType |= 2 : this._renderType &= -3, this.parentRepaint())
					}), r(0, h, "visible", function () {
						return this._style.visible
					}, function (t) {
						this._style && this._style.visible !== t && (this.getStyle().visible = t, this.conchModel && this.conchModel.visible(t), this.parentRepaint())
					}), r(0, h, "graphics", function () {
						return this._graphics || (this.graphics = o.createGraphics())
					}, function (t) {
						this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._renderType &= -2, this._renderType |= 512, t._sp = this, this.conchModel && this.conchModel.graphics(this._graphics)) : (this._renderType &= -513, this._renderType &= -2, this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(256) : this.conchModel.removeType(512))), this.repaint()
					}), r(0, h, "filters", function () {
						return this._$P.filters
					}, function (t) {
						t && 0 === t.length && (t = null), this._$P.filters != t && (this._set$P("filters", t ? t.slice() : null), B.isConchApp && (this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(16) : this.conchModel.removeType(32)), this._$P.filters && 1 == this._$P.filters.length && this._$P.filters[0].callNative(this)), B.isWebGL && (t && t.length ? this._renderType |= 32 : this._renderType &= -33), t && t.length > 0 ? (this._getBit(1) || this._setUpNoticeType(1), B.isWebGL && 1 == t.length && t[0] instanceof laya.filters.ColorFilter || ("bitmap" != this.cacheAs && (B.isConchNode || (this.cacheAs = "bitmap"), this._set$P("cacheForFilters", !0)), this._set$P("hasFilter", !0))) : (this._set$P("hasFilter", !1), this._$P.cacheForFilters && "bitmap" == this.cacheAs && (this.cacheAs = "none")), this.repaint())
					}), r(0, h, "parent", e.prototype._$get_parent, function (t) {
						i.superSet(ut, this, "parent", t), t && this._getBit(2) && this._$2__onDisplay()
					}), r(0, h, "mask", function () {
						return this._$P._mask
					}, function (t) {
						t && this.mask && this.mask._$P.maskParent || (t ? (this.cacheAs = "bitmap", this._set$P("_mask", t), t._set$P("maskParent", this)) : (this.mask && this.mask._set$P("maskParent", null), this._set$P("_mask", t), this.cacheAs = "none"), this.conchModel && this.conchModel.mask(t ? t.conchModel : null), this._renderType |= 64, this.parentRepaint())
					}), r(0, h, "mouseEnabled", function () {
						return this._mouseEnableState > 1
					}, function (t) {
						this._mouseEnableState = t ? 2 : 1
					}), r(0, h, "globalScaleX", function () {
						for (var t = 1, e = this; e && e !== i.stage;) t *= e.scaleX, e = e.parent;
						return t
					}), r(0, h, "mouseX", function () {
						return this.getMousePoint().x
					}), r(0, h, "mouseY", function () {
						return this.getMousePoint().y
					}), a.fromImage = function (t) {
						return (new a).loadImage(t)
					}, a.CustomList = [], s(a, ["RUNTIMEVERION", function () {
						return this.RUNTIMEVERION = t.conch ? conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-") + 1) : ""
					}]), a
				}(ut)),
				Pt = function (t) {
					function e() {
						e.__super.call(this), this._w = 0, this._h = 0
					}
					n(e, "laya.resource.Bitmap", dt);
					var i = e.prototype;
					return r(0, i, "width", function () {
						return this._w
					}), r(0, i, "height", function () {
						return this._h
					}), r(0, i, "source", function () {
						return this._source
					}), e
				}(),
				Lt = function (t) {
					function e(t) {
						this._audio = null, this._onEnd = null, this._resumePlay = null, e.__super.call(this), this._onEnd = tt.bind(this.__onEnd, this), this._resumePlay = tt.bind(this.__resumePlay, this), t.addEventListener("ended", this._onEnd), this._audio = t
					}
					n(e, "laya.media.h5audio.AudioSoundChannel", gt);
					var s = e.prototype;
					return s.__onEnd = function () {
						if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
						this.loops > 0 && this.loops--, this.startTime = 0, this.play()
					}, s.__resumePlay = function () {
						this._audio && this._audio.removeEventListener("canplay", this._resumePlay);
						try {
							this._audio.currentTime = this.startTime, H.container.appendChild(this._audio), this._audio.play()
						} catch (t) {
							this.event("error")
						}
					}, s.play = function () {
						this.isStopped = !1;
						try {
							this._audio.playbackRate = k.playbackRate, this._audio.currentTime = this.startTime
						} catch (t) {
							return void this._audio.addEventListener("canplay", this._resumePlay)
						}
						k.addChannel(this), H.container.appendChild(this._audio), "play" in this._audio && this._audio.play()
					}, s.stop = function () {
						this.isStopped = !0, k.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && B.isConchApp && this._audio.stop(), this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), H.onIE || this._audio != pt._musicAudio && q.recover("audio:" + this.url, this._audio), H.removeElement(this._audio), this._audio = null)
					}, s.pause = function () {
						this.isStopped = !0, k.removeChannel(this), "pause" in this._audio && this._audio.pause()
					}, s.resume = function () {
						this._audio && (this.isStopped = !1, k.addChannel(this), "play" in this._audio && this._audio.play())
					}, r(0, s, "position", function () {
						return this._audio ? this._audio.currentTime : 0
					}), r(0, s, "duration", function () {
						return this._audio ? this._audio.duration : 0
					}), r(0, s, "volume", function () {
						return this._audio ? this._audio.volume : 1
					}, function (t) {
						this._audio && (this._audio.volume = t)
					}), e
				}(),
				kt = function (t) {
					function e() {
						this.audioBuffer = null, this.gain = null, this.bufferSource = null, this._currentTime = 0, this._volume = 1, this._startTime = 0, this._pauseTime = 0, this._onPlayEnd = null, this.context = vt.ctx, e.__super.call(this), this._onPlayEnd = tt.bind(this.__onPlayEnd, this), this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode()
					}
					n(e, "laya.media.webaudio.WebAudioSoundChannel", gt);
					var s = e.prototype;
					return s.play = function () {
						if (k.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
							var t = this.context,
								e = this.gain,
								i = t.createBufferSource();
							this.bufferSource = i, i.buffer = this.audioBuffer, i.connect(e), e && e.disconnect(), e.connect(t.destination), i.onended = this._onPlayEnd, this.startTime >= this.duration && (this.startTime = 0), this._startTime = H.now(), this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, .1) : this.gain.gain.value = this._volume, 0 == this.loops && (i.loop = !0), i.playbackRate.setTargetAtTime ? i.playbackRate.setTargetAtTime(k.playbackRate, this.context.currentTime, .1) : i.playbackRate.value = k.playbackRate, i.start(0, this.startTime), this._currentTime = 0
						}
					}, s.__onPlayEnd = function () {
						if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
						this.loops > 0 && this.loops--, this.startTime = 0, this.play()
					}, s._clearBufferSource = function () {
						if (this.bufferSource) {
							var t = this.bufferSource;
							t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, e._tryCleanFailed || this._tryClearBuffer(t), this.bufferSource = null
						}
					}, s._tryClearBuffer = function (t) {
						if (H.onMac) try {
							t.buffer = vt._miniBuffer
						} catch (t) {
							e._tryCleanFailed = !0
						} else try {
							t.buffer = null
						} catch (t) {
							e._tryCleanFailed = !0
						}
					}, s.stop = function () {
						this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), this.isStopped = !0, k.removeChannel(this), this.completeHandler = null, k.autoReleaseSound && i.timer.once(5e3, null, k.disposeSoundIfNotUsed, [this.url], !1)
					}, s.pause = function () {
						this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), this.gain && this.gain.disconnect(), this.isStopped = !0, k.removeChannel(this), k.autoReleaseSound && i.timer.once(5e3, null, k.disposeSoundIfNotUsed, [this.url], !1)
					}, s.resume = function () {
						this.startTime = this._pauseTime, this.play()
					}, r(0, s, "position", function () {
						return this.bufferSource ? (H.now() - this._startTime) / 1e3 + this.startTime : 0
					}), r(0, s, "duration", function () {
						return this.audioBuffer ? this.audioBuffer.duration : 0
					}), r(0, s, "volume", function () {
						return this._volume
					}, function (t) {
						this.isStopped || (this._volume = t, this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, .1) : this.gain.gain.value = t)
					}), e._tryCleanFailed = !1, e
				}(),
				Et = function (t) {
					function e(t, i) {
						this._audio = null, this._onEnd = null, this._miniSound = null, e.__super.call(this), this._audio = t, this._miniSound = i, this._onEnd = e.bindToThis(this.__onEnd, this), t.onEnded(this._onEnd)
					}
					n(e, "laya.wx.mini.MiniSoundChannel", gt);
					var s = e.prototype;
					return s.__onEnd = function () {
						if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
						this.loops > 0 && this.loops--, this.startTime = 0, this.play()
					}, s.play = function () {
						this.isStopped = !1, k.addChannel(this), this._audio.play()
					}, s.stop = function () {
						this.isStopped = !0, k.removeChannel(this), this.completeHandler = null, this._audio && (this._audio.pause(), this._audio.offEnded(null), this._audio = null, this._miniSound = null, this._onEnd = null)
					}, s.pause = function () {
						this.isStopped = !0, this._audio.pause()
					}, s.resume = function () {
						this._audio && (this.isStopped = !1, k.addChannel(this), this._audio.play())
					}, r(0, s, "startTime", null, function (t) {
						this._audio && (this._audio.startTime = t)
					}), r(0, s, "autoplay", function () {
						return this._audio.autoplay
					}, function (t) {
						this._audio.autoplay = t
					}), r(0, s, "position", function () {
						return this._audio ? this._audio.currentTime : 0
					}), r(0, s, "duration", function () {
						return this._audio ? this._audio.duration : 0
					}), r(0, s, "loop", function () {
						return this._audio.loop
					}, function (t) {
						this._audio.loop = t
					}), r(0, s, "volume", function () {
						return this._audio ? this._audio.volume : 1
					}, function (t) {
						this._audio && (this._audio.volume = t)
					}), e.bindToThis = function (t, e) {
						return t.bind(e)
					}, e
				}(),
				At = function (t) {
					function e() {
						this._comXml = null, this._dataSource = null, this._toolTip = null, this._tag = null, this._disabled = !1, this._gray = !1, this.layoutEnabled = !0, e.__super.call(this), this._layout = z.EMPTY, this.preinitialize(), this.createChildren(), this.initialize()
					}
					n(e, "laya.ui.Component", t);
					var s = e.prototype;
					return i.imps(s, {
						"laya.ui.IComponent": !0
					}), s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._dataSource = this._layout = null, this._tag = null, this._toolTip = null
					}, s.preinitialize = function () {}, s.createChildren = function () {}, s.initialize = function () {}, s.callLater = function (t, e) {
						i.timer.callLater(this, t, e)
					}, s.runCallLater = function (t) {
						i.timer.runCallLater(this, t)
					}, s.commitMeasure = function () {}, s.changeSize = function () {
						this.event("resize")
					}, s.getLayout = function () {
						return this._layout === z.EMPTY && (this._layout = new z), this._layout
					}, s._setLayoutEnabled = function (t) {
						this._layout && this._layout.enable != t && (this._layout.enable = t, this.on("added", this, this.onAdded), this.on("removed", this, this.onRemoved), this.parent && this.onAdded())
					}, s.onRemoved = function () {
						this.parent.off("resize", this, this.onCompResize)
					}, s.onAdded = function () {
						this.parent.on("resize", this, this.onCompResize), this.resetLayoutX(), this.resetLayoutY()
					}, s.onCompResize = function () {
						this._layout && this._layout.enable && (this.resetLayoutX(), this.resetLayoutY())
					}, s.resetLayoutX = function () {
						var t = this._layout;
						if (isNaN(t.anchorX) || (this.pivotX = t.anchorX * this.width), this.layoutEnabled) {
							var e = this.parent;
							e && (isNaN(t.centerX) ? isNaN(t.left) ? isNaN(t.right) || (this.x = Math.round(e.width - this.displayWidth - t.right + this.pivotX * this.scaleX)) : (this.x = Math.round(t.left + this.pivotX * this.scaleX), isNaN(t.right) || (this.width = (e._width - t.left - t.right) / (this.scaleX || .01))) : this.x = Math.round(.5 * (e.width - this.displayWidth) + t.centerX + this.pivotX * this.scaleX))
						}
					}, s.resetLayoutY = function () {
						var t = this._layout;
						if (isNaN(t.anchorY) || (this.pivotY = t.anchorY * this.height), this.layoutEnabled) {
							var e = this.parent;
							e && (isNaN(t.centerY) ? isNaN(t.top) ? isNaN(t.bottom) || (this.y = Math.round(e.height - this.displayHeight - t.bottom + this.pivotY * this.scaleY)) : (this.y = Math.round(t.top + this.pivotY * this.scaleY), isNaN(t.bottom) || (this.height = (e._height - t.top - t.bottom) / (this.scaleY || .01))) : this.y = Math.round(.5 * (e.height - this.displayHeight) + t.centerY + this.pivotY * this.scaleY))
						}
					}, s.onMouseOver = function (t) {
						i.stage.event("showtip", this._toolTip)
					}, s.onMouseOut = function (t) {
						i.stage.event("hidetip", this._toolTip)
					}, r(0, s, "displayWidth", function () {
						return this.width * this.scaleX
					}), r(0, s, "width", function () {
						return this._width ? this._width : this.measureWidth
					}, function (t) {
						this._width != t && (this._width = t, this.conchModel && this.conchModel.size(this._width, this._height), this.callLater(this.changeSize), !this._layout.enable || isNaN(this._layout.centerX) && isNaN(this._layout.right) && isNaN(this._layout.anchorX) || this.resetLayoutX())
					}), r(0, s, "measureWidth", function () {
						var t = 0;
						this.commitMeasure();
						for (var e = this.numChildren - 1; e > -1; e--) {
							var i = this.getChildAt(e);
							i.visible && (t = Math.max(i.x + i.width * i.scaleX, t))
						}
						return t
					}), r(0, s, "displayHeight", function () {
						return this.height * this.scaleY
					}), r(0, s, "height", function () {
						return this._height ? this._height : this.measureHeight
					}, function (t) {
						this._height != t && (this._height = t, this.conchModel && this.conchModel.size(this._width, this._height), this.callLater(this.changeSize), !this._layout.enable || isNaN(this._layout.centerY) && isNaN(this._layout.bottom) && isNaN(this._layout.anchorY) || this.resetLayoutY())
					}), r(0, s, "dataSource", function () {
						return this._dataSource
					}, function (t) {
						this._dataSource = t;
						for (var e in this._dataSource) this.hasOwnProperty(e) && "function" != typeof this[e] && (this[e] = this._dataSource[e])
					}), r(0, s, "scaleY", t.prototype._$get_scaleY, function (t) {
						i.superGet(It, this, "scaleY") != t && (i.superSet(It, this, "scaleY", t), this.callLater(this.changeSize), this._layout.enable && this.resetLayoutY())
					}), r(0, s, "measureHeight", function () {
						var t = 0;
						this.commitMeasure();
						for (var e = this.numChildren - 1; e > -1; e--) {
							var i = this.getChildAt(e);
							i.visible && (t = Math.max(i.y + i.height * i.scaleY, t))
						}
						return t
					}), r(0, s, "scaleX", t.prototype._$get_scaleX, function (t) {
						i.superGet(It, this, "scaleX") != t && (i.superSet(It, this, "scaleX", t), this.callLater(this.changeSize), this._layout.enable && this.resetLayoutX())
					}), r(0, s, "top", function () {
						return this._layout.top
					}, function (t) {
						t != this._layout.top && (this.getLayout().top = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
					}), r(0, s, "bottom", function () {
						return this._layout.bottom
					}, function (t) {
						t != this._layout.bottom && (this.getLayout().bottom = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
					}), r(0, s, "left", function () {
						return this._layout.left
					}, function (t) {
						t != this._layout.left && (this.getLayout().left = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
					}), r(0, s, "right", function () {
						return this._layout.right
					}, function (t) {
						t != this._layout.right && (this.getLayout().right = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
					}), r(0, s, "centerX", function () {
						return this._layout.centerX
					}, function (t) {
						t != this._layout.centerX && (this.getLayout().centerX = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
					}), r(0, s, "centerY", function () {
						return this._layout.centerY
					}, function (t) {
						t != this._layout.centerY && (this.getLayout().centerY = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
					}), r(0, s, "anchorX", function () {
						return this._layout.anchorX
					}, function (t) {
						t != this._layout.anchorX && (this.getLayout().anchorX = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
					}), r(0, s, "anchorY", function () {
						return this._layout.anchorY
					}, function (t) {
						t != this._layout.anchorY && (this.getLayout().anchorY = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
					}), r(0, s, "tag", function () {
						return this._tag
					}, function (t) {
						this._tag = t
					}), r(0, s, "toolTip", function () {
						return this._toolTip
					}, function (t) {
						this._toolTip != t && (this._toolTip = t, null != t ? (this.on("mouseover", this, this.onMouseOver), this.on("mouseout", this, this.onMouseOut)) : (this.off("mouseover", this, this.onMouseOver), this.off("mouseout", this, this.onMouseOut)))
					}), r(0, s, "comXml", function () {
						return this._comXml
					}, function (t) {
						this._comXml = t
					}), r(0, s, "gray", function () {
						return this._gray
					}, function (t) {
						t !== this._gray && (this._gray = t, Y.gray(this, t))
					}), r(0, s, "disabled", function () {
						return this._disabled
					}, function (t) {
						t !== this._disabled && (this.gray = this._disabled = t, this.mouseEnabled = !t)
					}), e
				}(It),
				Rt = function (t) {
					function e() {
						this._clipPoint = null, this._currBitmapFont = null, this._text = null, this._isChanged = !1, this._textWidth = 0, this._textHeight = 0, this._lines = [], this._lineWidths = [], this._startX = NaN, this._startY = NaN, this._lastVisibleLineIndex = -1, this._words = null, this._charSize = {}, this.underline = !1, this._underlineColor = null, e.__super.call(this), this.overflow = e.VISIBLE, this._style = new Tt(this), this._style.wordWrap = !1
					}
					n(e, "laya.display.Text", t);
					var o = e.prototype;
					return o.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._lines = null, this._words && (this._words.length = 0, this._words = null)
					}, o._getBoundPointsM = function (t) {
						void 0 === t && (t = !1);
						var e = L.TEMP;
						return e.setTo(0, 0, this.width, this.height), e._getBoundPoints()
					}, o.getGraphicBounds = function (t) {
						void 0 === t && (t = !1);
						var e = L.TEMP;
						return e.setTo(0, 0, this.width, this.height), e
					}, o._getCSSStyle = function () {
						return this._style
					}, o.lang = function (t, i, s, n, r, o, a, h, l, c, u) {
						if (t = e.langPacks && e.langPacks[t] ? e.langPacks[t] : t, arguments.length < 2) this._text = t;
						else {
							for (var _ = 0, d = arguments.length; _ < d; _++) t = t.replace("{" + _ + "}", arguments[_ + 1]);
							this._text = t
						}
					}, o._isPassWordMode = function () {
						var t = this._style.password;
						return "prompt" in this && this.prompt == this._text && (t = !1), t
					}, o._getPassWordTxt = function (t) {
						var e;
						e = "";
						for (var i = t.length; i > 0; i--) e += "●";
						return e
					}, o.renderText = function (t, e) {
						var i = this.graphics;
						i.clear(!0);
						var s = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (H.onIPhone ? laya.display.Text._fontFamilyMap[this.font] || this.font : this.font);
						H.context.font = s;
						var n = this.padding,
							r = n[3],
							o = "left",
							a = this._lines,
							h = this.leading + this._charSize.height,
							l = this._currBitmapFont;
						l && (h = this.leading + l.getMaxHeight());
						var c = n[0];
						if (!l && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (o = "right", r = this._width - n[1]) : "center" == this.align && (o = "center", r = .5 * this._width + n[3] - n[1])), this._height > 0) {
							var u = this._textHeight > this._height ? "top" : this.valign;
							"middle" === u ? c = .5 * (this._height - e * h) + n[0] - n[2] : "bottom" === u && (c = this._height - e * h - n[2])
						}
						var _ = this._style;
						if (l && l.autoScaleSize) var d = l.fontSize / this.fontSize;
						if (this._clipPoint)
							if (i.save(), l && l.autoScaleSize) {
								var f = 0,
									p = 0;
								f = this._width ? this._width - n[3] - n[1] : this._textWidth, p = this._height ? this._height - n[0] - n[2] : this._textHeight, f *= d, p *= d, i.clipRect(n[3], n[0], f, p)
							} else i.clipRect(n[3], n[0], this._width ? this._width - n[3] - n[1] : this._textWidth, this._height ? this._height - n[0] - n[2] : this._textHeight);
						var g = _.password;
						"prompt" in this && this.prompt == this._text && (g = !1);
						for (var m = 0, v = 0, y = Math.min(this._lines.length, e + t) || 1, x = t; x < y; x++) {
							var w, b = a[x];
							if (g) {
								var C = b.length;
								b = "";
								for (var S = C; S > 0; S--) b += "●"
							}
							if (m = r - (this._clipPoint ? this._clipPoint.x : 0), v = c + h * x - (this._clipPoint ? this._clipPoint.y : 0), this.underline && this.drawUnderline(o, m, v, x), l) {
								var T = this.width;
								l.autoScaleSize && (T = this.width * d), l.drawText(b, this, m, v, this.align, T)
							} else B.isWebGL ? (this._words || (this._words = []), (w = this._words.length > x - t ? this._words[x - t] : new st).setText(b)) : w = b, _.stroke ? i.fillBorderText(w, m, v, s, this.color, _.strokeColor, _.stroke, o) : i.fillText(w, m, v, s, this.color, o)
						}
						if (l && l.autoScaleSize) {
							var M = 1 / d;
							this.scale(M, M)
						}
						this._clipPoint && i.restore(), this._startX = r, this._startY = c
					}, o.drawUnderline = function (t, e, i, s) {
						var n = this._lineWidths[s];
						switch (t) {
							case "center":
								e -= n / 2;
								break;
							case "right":
								e -= n
						}
						i += this._charSize.height, this._graphics.drawLine(e, i, e + n, i, this.underlineColor || this.color, 1)
					}, o.typeset = function () {
						if (this._isChanged = !1, !this._text) return this._clipPoint = null, this._textWidth = this._textHeight = 0, void this.graphics.clear(!0);
						H.context.font = this._getCSSStyle().font, this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this.parseLines(this._getPassWordTxt(this._text)) : this.parseLines(this._text), this.evalTextSize(), this.checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new P(0, 0)) : this._clipPoint = null;
						var t = this._lines.length;
						if (this.overflow != e.VISIBLE) {
							var i = this.overflow == e.HIDDEN ? Math.floor : Math.ceil;
							t = Math.min(t, i((this.height - this.padding[0] - this.padding[2]) / (this.leading + this._charSize.height)))
						}
						var s = this.scrollY / (this._charSize.height + this.leading) | 0;
						this.renderText(s, t), this.repaint()
					}, o.evalTextSize = function () {
						var t = NaN,
							e = NaN;
						t = Math.max.apply(this, this._lineWidths), e = this._currBitmapFont ? this._lines.length * (this._currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e, this._width && this._height || this.conchModel && this.conchModel.size(this._width || this._textWidth, this._height || this._textHeight))
					}, o.checkEnabledViewportOrNot = function () {
						return this.overflow == e.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height)
					}, o.changeText = function (t) {
						this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset())
					}, o.parseLines = function (t) {
						var i = this.wordWrap || this.overflow == e.HIDDEN;
						if (i) var s = this.getWordWrapWidth();
						if (this._currBitmapFont) this._charSize.width = this._currBitmapFont.getMaxWidth(), this._charSize.height = this._currBitmapFont.getMaxHeight();
						else {
							var n = H.context.measureText(e._testWord);
							B.isConchApp && 0 === n.width && 0 === n.height && (n = H.context.measureText("W")), this._charSize.width = n.width, this._charSize.height = n.height || this.fontSize
						}
						for (var r = t.replace(/\r\n/g, "\n").split("\n"), o = 0, a = r.length; o < a; o++) {
							var h = r[o];
							i ? this.parseLine(h, s) : (this._lineWidths.push(this.getTextWidth(h)), this._lines.push(h))
						}
					}, o.parseLine = function (t, i) {
						H.context;
						var s, n = this._lines,
							r = 0,
							o = NaN,
							a = NaN,
							h = 0;
						if ((o = this.getTextWidth(t)) <= i) return n.push(t), void this._lineWidths.push(o);
						o = this._charSize.width, 0 == (r = Math.floor(i / o)) && (r = 1), a = o = this.getTextWidth(t.substring(0, r));
						for (var l = r, c = t.length; l < c; l++)
							if (o = this.getTextWidth(t.charAt(l)), (a += o) > i)
								if (this.wordWrap) {
									var u = t.substring(h, l);
									if (u.charCodeAt(u.length - 1) < 255 ? (s = /(?:\w|-)+$/.exec(u)) && (l = s.index + h, 0 == s.index ? l += u.length : u = t.substring(h, l)) : e.RightToLeft && (s = /([\u0600-\u06FF])+$/.exec(u)) && (l = s.index + h, 0 == s.index ? l += u.length : u = t.substring(h, l)), n.push(u), this._lineWidths.push(a - o), h = l, !(l + r < c)) {
										n.push(t.substring(h, c)), this._lineWidths.push(this.getTextWidth(n[n.length - 1])), h = -1;
										break
									}
									l += r, a = o = this.getTextWidth(t.substring(h, l)), l--
								} else if (this.overflow == e.HIDDEN) return n.push(t.substring(0, l)), void this._lineWidths.push(this.getTextWidth(n[n.length - 1]));
						this.wordWrap && -1 != h && (n.push(t.substring(h, c)), this._lineWidths.push(this.getTextWidth(n[n.length - 1])))
					}, o.getTextWidth = function (t) {
						return this._currBitmapFont ? this._currBitmapFont.getTextWidth(t) : H.context.measureText(t).width
					}, o.getWordWrapWidth = function () {
						var t = this.padding,
							e = NaN;
						return (e = this._currBitmapFont && this._currBitmapFont.autoScaleSize ? this._width * (this._currBitmapFont.fontSize / this.fontSize) : this._width) <= 0 && (e = this.wordWrap ? 100 : H.width), e <= 0 && (e = 100), e - t[3] - t[1]
					}, o.getCharPoint = function (t, e) {
						this._isChanged && i.timer.runCallLater(this, this.typeset);
						for (var s = 0, n = this._lines, r = 0, o = 0, a = n.length; o < a; o++) {
							if (s += n[o].length, t < s) {
								var h = o;
								break
							}
							r = s
						}
						var l = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
						H.context.font = l;
						var c = this.getTextWidth(this._text.substring(r, t));
						return (e || new P).setTo(this._startX + c - (this._clipPoint ? this._clipPoint.x : 0), this._startY + h * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0))
					}, r(0, o, "width", function () {
						return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3]
					}, function (t) {
						t != this._width && (i.superSet(It, this, "width", t), this.isChanged = !0)
					}), r(0, o, "textWidth", function () {
						return this._isChanged && i.timer.runCallLater(this, this.typeset), this._textWidth
					}), r(0, o, "height", function () {
						return this._height ? this._height : this.textHeight
					}, function (t) {
						t != this._height && (i.superSet(It, this, "height", t), this.isChanged = !0)
					}), r(0, o, "textHeight", function () {
						return this._isChanged && i.timer.runCallLater(this, this.typeset), this._textHeight
					}), r(0, o, "padding", function () {
						return this._getCSSStyle().padding
					}, function (t) {
						this._getCSSStyle().padding = t, this.isChanged = !0
					}), r(0, o, "bold", function () {
						return this._getCSSStyle().bold
					}, function (t) {
						this._getCSSStyle().bold = t, this.isChanged = !0
					}), r(0, o, "text", function () {
						return this._text || ""
					}, function (t) {
						this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event("change"))
					}), r(0, o, "color", function () {
						return this._getCSSStyle().color
					}, function (t) {
						this._getCSSStyle().color != t && (this._getCSSStyle().color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0)
					}), r(0, o, "font", function () {
						return this._getCSSStyle().fontFamily
					}, function (t) {
						this._currBitmapFont && (this._currBitmapFont = null, this.scale(1, 1)), e._bitmapFonts && e._bitmapFonts[t] && (this._currBitmapFont = e._bitmapFonts[t]), this._getCSSStyle().fontFamily = t, this.isChanged = !0
					}), r(0, o, "fontSize", function () {
						return this._getCSSStyle().fontSize
					}, function (t) {
						this._getCSSStyle().fontSize = t, this.isChanged = !0
					}), r(0, o, "italic", function () {
						return this._getCSSStyle().italic
					}, function (t) {
						this._getCSSStyle().italic = t, this.isChanged = !0
					}), r(0, o, "align", function () {
						return this._getCSSStyle().align
					}, function (t) {
						this._getCSSStyle().align = t, this.isChanged = !0
					}), r(0, o, "valign", function () {
						return this._getCSSStyle().valign
					}, function (t) {
						this._getCSSStyle().valign = t, this.isChanged = !0
					}), r(0, o, "wordWrap", function () {
						return this._getCSSStyle().wordWrap
					}, function (t) {
						this._getCSSStyle().wordWrap = t, this.isChanged = !0
					}), r(0, o, "leading", function () {
						return this._getCSSStyle().leading
					}, function (t) {
						this._getCSSStyle().leading = t, this.isChanged = !0
					}), r(0, o, "bgColor", function () {
						return this._getCSSStyle().backgroundColor
					}, function (t) {
						this._getCSSStyle().backgroundColor = t, this.isChanged = !0
					}), r(0, o, "borderColor", function () {
						return this._getCSSStyle().borderColor
					}, function (t) {
						this._getCSSStyle().borderColor = t, this.isChanged = !0
					}), r(0, o, "stroke", function () {
						return this._getCSSStyle().stroke
					}, function (t) {
						this._getCSSStyle().stroke = t, this.isChanged = !0
					}), r(0, o, "strokeColor", function () {
						return this._getCSSStyle().strokeColor
					}, function (t) {
						this._getCSSStyle().strokeColor = t, this.isChanged = !0
					}), r(0, o, "isChanged", null, function (t) {
						this._isChanged !== t && (this._isChanged = t, t && i.timer.callLater(this, this.typeset))
					}), r(0, o, "scrollX", function () {
						return this._clipPoint ? this._clipPoint.x : 0
					}, function (t) {
						if (!(this.overflow != e.SCROLL || this.textWidth < this._width) && this._clipPoint) {
							t = t < this.padding[3] ? this.padding[3] : t;
							var i = this._textWidth - this._width;
							t = t > i ? i : t;
							var s = this._height / (this._charSize.height + this.leading) | 1;
							this._clipPoint.x = t, this.renderText(this._lastVisibleLineIndex, s)
						}
					}), r(0, o, "scrollY", function () {
						return this._clipPoint ? this._clipPoint.y : 0
					}, function (t) {
						if (!(this.overflow != e.SCROLL || this.textHeight < this._height) && this._clipPoint) {
							t = t < this.padding[0] ? this.padding[0] : t;
							var i = this._textHeight - this._height,
								s = (t = t > i ? i : t) / (this._charSize.height + this.leading) | 0;
							this._lastVisibleLineIndex = s;
							var n = 1 + (this._height / (this._charSize.height + this.leading) | 0);
							this._clipPoint.y = t, this.renderText(s, n)
						}
					}), r(0, o, "maxScrollX", function () {
						return this.textWidth < this._width ? 0 : this._textWidth - this._width
					}), r(0, o, "maxScrollY", function () {
						return this.textHeight < this._height ? 0 : this._textHeight - this._height
					}), r(0, o, "lines", function () {
						return this._isChanged && this.typeset(), this._lines
					}), r(0, o, "underlineColor", function () {
						return this._underlineColor
					}, function (t) {
						this._underlineColor = t, this._isChanged = !0, this.typeset()
					}), e.registerBitmapFont = function (t, i) {
						e._bitmapFonts || (e._bitmapFonts = {}), e._bitmapFonts[t] = i
					}, e.unregisterBitmapFont = function (t, i) {
						if (void 0 === i && (i = !0), e._bitmapFonts && e._bitmapFonts[t]) {
							var s = e._bitmapFonts[t];
							i && s.destroy(), delete e._bitmapFonts[t]
						}
					}, e.setTextRightToLeft = function () {
						var t;
						(t = H.canvas.source.style).display = "none", t.position = "absolute", t.direction = "rtl", B._mainCanvas.source.style.direction = "rtl", laya.display.Text.RightToLeft = !0, H.document.body.appendChild(H.canvas.source)
					}, e.supportFont = function (t) {
						H.context.font = "10px sans-serif";
						var e = H.context.measureText("abcji").width;
						H.context.font = "10px " + t;
						var i = H.context.measureText("abcji").width;
						return console.log(e, i), e !== i
					}, e._testWord = "游", e.langPacks = null, e.VISIBLE = "visible", e.SCROLL = "scroll", e.HIDDEN = "hidden", e.CharacterCache = !0, e.RightToLeft = !1, e._bitmapFonts = null, s(e, ["_fontFamilyMap", function () {
						return this._fontFamilyMap = {
							"报隶": "报隶-简",
							"黑体": "黑体-简",
							"楷体": "楷体-简",
							"兰亭黑": "兰亭黑-简",
							"隶变": "隶变-简",
							"凌慧体": "凌慧体-简",
							"翩翩体": "翩翩体-简",
							"苹方": "苹方-简",
							"手札体": "手札体-简",
							"宋体": "宋体-简",
							"娃娃体": "娃娃体-简",
							"魏碑": "魏碑-简",
							"行楷": "行楷-简",
							"雅痞": "雅痞-简",
							"圆体": "圆体-简"
						}
					}]), e
				}(It),
				Bt = function (t) {
					function e() {
						this.loop = !1, this.wrapMode = 0, this._index = 0, this._count = 0, this._isPlaying = !1, this._labels = null, this._isReverse = !1, this._frameRateChanged = !1, this._controlNode = null, this._actionName = null, e.__super.call(this), this._interval = u.animationInterval, this._setUpNoticeType(1)
					}
					n(e, "laya.display.AnimationPlayerBase", t);
					var i = e.prototype;
					return i.play = function (t, e, i, s) {
						void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === s && (s = !0), this._isPlaying = !0, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.loop = e, this._actionName = i, this._isReverse = 1 == this.wrapMode, this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
					}, i._getFrameByLabel = function (t) {
						var e = 0;
						for (e = 0; e < this._count; e++)
							if (this._labels[e] && this._labels[e].indexOf(t) >= 0) return e;
						return 0
					}, i._frameLoop = function () {
						if (this._isReverse) {
							if (this._index--, this._index < 0) {
								if (!this.loop) return this._index = 0, this.stop(), void this.event("complete");
								2 == this.wrapMode ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, this.event("complete")
							}
						} else if (this._index++, this._index >= this._count) {
							if (!this.loop) return this._index--, this.stop(), void this.event("complete");
							2 == this.wrapMode ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, this._isReverse = !0) : this._index = 0, this.event("complete")
						}
						this.index = this._index
					}, i._setControlNode = function (t) {
						this._controlNode && (this._controlNode.off("display", this, this._checkResumePlaying), this._controlNode.off("undisplay", this, this._checkResumePlaying)), this._controlNode = t, t && t != this && (t.on("display", this, this._checkResumePlaying), t.on("undisplay", this, this._checkResumePlaying))
					}, i._setDisplay = function (e) {
						t.prototype._setDisplay.call(this, e), this._checkResumePlaying()
					}, i._checkResumePlaying = function () {
						this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop))
					}, i.stop = function () {
						this._isPlaying = !1, this.clearTimer(this, this._frameLoop)
					}, i.addLabel = function (t, e) {
						this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), this._labels[e].push(t)
					}, i.removeLabel = function (t) {
						if (t) {
							if (this._labels)
								for (var e in this._labels) this._removeLabelFromLabelList(this._labels[e], t)
						} else this._labels = null
					}, i._removeLabelFromLabelList = function (t, e) {
						if (t)
							for (var i = t.length - 1; i >= 0; i--) t[i] == e && t.splice(i, 1)
					}, i.gotoAndStop = function (t) {
						this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop()
					}, i._displayToIndex = function (t) {}, i.clear = function () {
						this.stop(), this._labels = null
					}, r(0, i, "interval", function () {
						return this._interval
					}, function (t) {
						this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0))
					}), r(0, i, "isPlaying", function () {
						return this._isPlaying
					}), r(0, i, "index", function () {
						return this._index
					}, function (t) {
						if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t])
							for (var e = this._labels[t], i = 0, s = e.length; i < s; i++) this.event("label", e[i])
					}), r(0, i, "count", function () {
						return this._count
					}), e.WRAP_POSITIVE = 0, e.WRAP_REVERSE = 1, e.WRAP_PINGPONG = 2, e
				}(It),
				Ft = function (t) {
					function e() {
						this.focus = null, this.designWidth = 0, this.designHeight = 0, this.canvasRotation = !1, this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, this._screenMode = "none", this._scaleMode = "noscale", this._alignV = "top", this._alignH = "left", this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._frameStartTime = NaN, this._isFocused = !1, this._isVisibility = !1, this._scenes = null, this._frameRate = "fast", e.__super.call(this), this.offset = new P, this._canvasTransform = new I, this._previousOrientation = H.window.orientation;
						var t = this;
						this.transform = I.create(), this._scenes = [], this.mouseEnabled = !0, this.hitTestPrior = !0, this.autoSize = !1, this._displayedInStage = !0, this._isFocused = !0, this._isVisibility = !0;
						var i = H.window,
							s = this;
						i.addEventListener("focus", function () {
							t._isFocused = !0, s.event("focus"), s.event("focuschange")
						}), i.addEventListener("blur", function () {
							t._isFocused = !1, s.event("blur"), s.event("focuschange"), s._isInputting() && (jt.inputElement.target.focus = !1)
						});
						var n = "visibilityState",
							r = "visibilitychange",
							o = i.document;
						void 0 !== o.hidden ? (r = "visibilitychange", n = "visibilityState") : void 0 !== o.mozHidden ? (r = "mozvisibilitychange", n = "mozVisibilityState") : void 0 !== o.msHidden ? (r = "msvisibilitychange", n = "msVisibilityState") : void 0 !== o.webkitHidden && (r = "webkitvisibilitychange", n = "webkitVisibilityState"), i.document.addEventListener(r, function () {
							"hidden" == H.document[n] ? s._setStageVisible(!1) : s._setStageVisible(!0)
						}), i.document.addEventListener("qbrowserVisibilityChange", function (t) {
							s._setStageVisible(!t.hidden)
						}), i.addEventListener("resize", function () {
							var e = H.window.orientation;
							null != e && e != t._previousOrientation && s._isInputting() && (jt.inputElement.target.focus = !1), t._previousOrientation = e, s._isInputting() || s._resetCanvas()
						}), i.addEventListener("orientationchange", function (t) {
							s._resetCanvas()
						}), this.on("mousemove", this, this._onmouseMove), H.onMobile && this.on("mousedown", this, this._onmouseMove)
					}
					n(e, "laya.display.Stage", t);
					var a = e.prototype;
					return a._setStageVisible = function (t) {
						this._isVisibility != t && (this._isVisibility = t, this._isVisibility || this._isInputting() && (jt.inputElement.target.focus = !1), this.event("visibilitychange"))
					}, a._isInputting = function () {
						return H.onMobile && jt.isInputting
					}, a._changeCanvasSize = function () {
						this.setScreenSize(H.clientWidth * H.pixelRatio, H.clientHeight * H.pixelRatio)
					}, a._resetCanvas = function () {
						if (this.screenAdaptationEnabled) {
							var t = B._mainCanvas;
							t.source.style;
							t.size(1, 1), i.timer.once(100, this, this._changeCanvasSize)
						}
					}, a.setScreenSize = function (t, e) {
						var i = !1;
						if ("none" !== this._screenMode) {
							if (i = (t / e < 1 ? "vertical" : "horizontal") !== this._screenMode) {
								var s = e;
								e = t, t = s
							}
						}
						this.canvasRotation = i;
						var n = B._mainCanvas,
							r = n.source.style,
							a = this._canvasTransform.identity(),
							h = this._scaleMode,
							l = t / this.designWidth,
							c = e / this.designHeight,
							u = this.designWidth,
							_ = this.designHeight,
							d = t,
							f = e,
							p = H.pixelRatio;
						switch (this._width = this.designWidth, this._height = this.designHeight, h) {
							case "noscale":
								l = c = 1, d = this.designWidth, f = this.designHeight;
								break;
							case "showall":
								l = c = Math.min(l, c), u = d = Math.round(this.designWidth * l), _ = f = Math.round(this.designHeight * c);
								break;
							case "noborder":
								l = c = Math.max(l, c), d = Math.round(this.designWidth * l), f = Math.round(this.designHeight * c);
								break;
							case "full":
								l = c = 1, this._width = u = t, this._height = _ = e;
								break;
							case "fixedwidth":
								c = l, this._height = _ = Math.round(e / l);
								break;
							case "fixedheight":
								l = c, this._width = u = Math.round(t / c);
								break;
							case "fixedauto":
								t / e < this.designWidth / this.designHeight ? (c = l, this._height = _ = Math.round(e / l)) : (l = c, this._width = u = Math.round(t / c))
						}
						this.conchModel && this.conchModel.size(this._width, this._height), l *= this.scaleX, c *= this.scaleY, 1 === l && 1 === c ? this.transform.identity() : (this.transform.a = this._formatData(l / (d / u)), this.transform.d = this._formatData(c / (f / _)), this.conchModel && this.conchModel.scale(this.transform.a, this.transform.d)), n.size(u, _), o.changeWebGLSize(u, _), a.scale(d / u / p, f / _ / p), "left" === this._alignH ? this.offset.x = 0 : "right" === this._alignH ? this.offset.x = (t - d) / p : this.offset.x = .5 * (t - d) / p, "top" === this._alignV ? this.offset.y = 0 : "bottom" === this._alignV ? this.offset.y = (e - f) / p : this.offset.y = .5 * (e - f) / p, this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), a.translate(this.offset.x, this.offset.y), this.canvasDegree = 0, i && ("horizontal" === this._screenMode ? (a.rotate(Math.PI / 2), a.translate(e / p, 0), this.canvasDegree = 90) : (a.rotate(-Math.PI / 2), a.translate(0, t / p), this.canvasDegree = -90)), a.a = this._formatData(a.a), a.d = this._formatData(a.d), a.tx = this._formatData(a.tx), a.ty = this._formatData(a.ty), r.transformOrigin = r.webkitTransformOrigin = r.msTransformOrigin = r.mozTransformOrigin = r.oTransformOrigin = "0px 0px 0px", r.transform = r.webkitTransform = r.msTransform = r.mozTransform = r.oTransform = "matrix(" + a.toString() + ")", a.translate(parseInt(r.left) || 0, parseInt(r.top) || 0), this.visible = !0, this._repaint = 1, this.event("resize")
					}, a._formatData = function (t) {
						return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t
					}, a.getMousePoint = function () {
						return P.TEMP.setTo(this.mouseX, this.mouseY)
					}, a.repaint = function () {
						this._repaint = 1
					}, a.parentRepaint = function () {}, a._loop = function () {
						return this.render(B.context, 0, 0), !0
					}, a._onmouseMove = function (t) {
						this._mouseMoveTime = H.now()
					}, a.getTimeFromFrameStart = function () {
						return H.now() - this._frameStartTime
					}, a.render = function (e, s, n) {
						if ("sleep" === this._frameRate && !B.isConchApp) {
							var r = H.now();
							if (!(r - this._frameStartTime >= 1e3)) return;
							this._frameStartTime = r
						}
						if (this._renderCount++, B.isFlash && this.repaint(), this._style.visible) {
							this._frameStartTime = H.now();
							var a = "slow" !== ("mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate),
								h = this._renderCount % 2 == 0;
							if (Z.renderSlow = !a, a || h || B.isConchApp) {
								Z.loopCount++, x.instance.runEvent(), i.timer._update(), o.update3DLoop();
								var l, c = 0,
									u = 0;
								if (B.isConchNode)
									for (c = 0, u = this._scenes.length; c < u; c++)(l = this._scenes[c]) && l._updateSceneConch();
								else
									for (c = 0, u = this._scenes.length; c < u; c++)(l = this._scenes[c]) && l._updateScene();
								if (B.isConchNode) {
									var _ = It.CustomList;
									for (c = 0, u = _.length; c < u; c++) {
										var d = _[c];
										d.customRender(d.customContext, 0, 0)
									}
									return
								}
							}
							B.isConchNode || this.renderingEnabled && (a || !h || B.isConchWebGL) && (B.isWebGL ? (e.clear(), t.prototype.render.call(this, e, s, n), Z._show && Z._sp && Z._sp.render(e, s, n), o.clear(this._bgColor), o.beginFlush(), e.flush(), o.endFinish(), et.instance && et.getInstance().endDispose()) : (o.clear(this._bgColor), t.prototype.render.call(this, e, s, n), Z._show && Z._sp && Z._sp.render(e, s, n)))
						} else this._renderCount % 5 == 0 && (Z.loopCount++, x.instance.runEvent(), i.timer._update())
					}, a._requestFullscreen = function () {
						var t = H.document.documentElement;
						t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
					}, a._fullScreenChanged = function () {
						i.stage.event("fullscreenchange")
					}, a.exitFullscreen = function () {
						var t = H.document;
						t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen()
					}, r(0, a, "clientScaleX", function () {
						return this._transform ? this._transform.getScaleX() : 1
					}), r(0, a, "desginHeight", function () {
						return console.debug("desginHeight已经弃用，请使用designHeight代替"), this.designHeight
					}), r(0, a, "frameRate", function () {
						return this._frameRate
					}, function (t) {
						if (this._frameRate = t, B.isConchApp) switch (this._frameRate) {
							case "slow":
								H.window.conch && H.window.conchConfig.setSlowFrame && H.window.conchConfig.setSlowFrame(!0);
								break;
							case "fast":
								H.window.conch && H.window.conchConfig.setSlowFrame && H.window.conchConfig.setSlowFrame(!1);
								break;
							case "mouse":
								H.window.conch && H.window.conchConfig.setMouseFrame && H.window.conchConfig.setMouseFrame(2e3);
								break;
							case "sleep":
								H.window.conch && H.window.conchConfig.setLimitFPS && H.window.conchConfig.setLimitFPS(1);
								break;
							default:
								throw new Error("Stage:frameRate invalid.")
						}
					}), r(0, a, "clientScaleY", function () {
						return this._transform ? this._transform.getScaleY() : 1
					}), r(0, a, "width", t.prototype._$get_width, function (t) {
						this.designWidth = t, i.superSet(It, this, "width", t), i.timer.callLater(this, this._changeCanvasSize)
					}), r(0, a, "alignH", function () {
						return this._alignH
					}, function (t) {
						this._alignH = t, i.timer.callLater(this, this._changeCanvasSize)
					}), r(0, a, "isFocused", function () {
						return this._isFocused
					}), r(0, a, "height", t.prototype._$get_height, function (t) {
						this.designHeight = t, i.superSet(It, this, "height", t), i.timer.callLater(this, this._changeCanvasSize)
					}), r(0, a, "transform", function () {
						return this._tfChanged && this._adjustTransform(), this._transform = this._transform || I.create()
					}, t.prototype._$set_transform), r(0, a, "isVisibility", function () {
						return this._isVisibility
					}), r(0, a, "desginWidth", function () {
						return console.debug("desginWidth已经弃用，请使用designWidth代替"), this.designWidth
					}), r(0, a, "scaleMode", function () {
						return this._scaleMode
					}, function (t) {
						this._scaleMode = t, i.timer.callLater(this, this._changeCanvasSize)
					}), r(0, a, "alignV", function () {
						return this._alignV
					}, function (t) {
						this._alignV = t, i.timer.callLater(this, this._changeCanvasSize)
					}), r(0, a, "bgColor", function () {
						return this._bgColor
					}, function (t) {
						this._bgColor = t, this.conchModel && this.conchModel.bgColor(t), B.isWebGL && (t ? e._wgColor = U.create(t)._color : H.onMiniGame || (e._wgColor = null)), H.onLimixiu ? e._wgColor = U.create(t)._color : B.canvas.style.background = t || "none"
					}), r(0, a, "mouseX", function () {
						return Math.round(x.instance.mouseX / this.clientScaleX)
					}), r(0, a, "mouseY", function () {
						return Math.round(x.instance.mouseY / this.clientScaleY)
					}), r(0, a, "screenMode", function () {
						return this._screenMode
					}, function (t) {
						this._screenMode = t
					}), r(0, a, "visible", t.prototype._$get_visible, function (t) {
						if (this.visible !== t) {
							i.superSet(It, this, "visible", t);
							B._mainCanvas.source.style.visibility = t ? "visible" : "hidden"
						}
					}), r(0, a, "fullScreenEnabled", null, function (t) {
						var e = H.document,
							i = B.canvas;
						t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), e.removeEventListener("msfullscreenchange", this._fullScreenChanged))
					}), e.SCALE_NOSCALE = "noscale", e.SCALE_EXACTFIT = "exactfit", e.SCALE_SHOWALL = "showall", e.SCALE_NOBORDER = "noborder", e.SCALE_FULL = "full", e.SCALE_FIXED_WIDTH = "fixedwidth", e.SCALE_FIXED_HEIGHT = "fixedheight", e.SCALE_FIXED_AUTO = "fixedauto", e.ALIGN_LEFT = "left", e.ALIGN_RIGHT = "right", e.ALIGN_CENTER = "center", e.ALIGN_TOP = "top", e.ALIGN_MIDDLE = "middle", e.ALIGN_BOTTOM = "bottom", e.SCREEN_NONE = "none", e.SCREEN_HORIZONTAL = "horizontal", e.SCREEN_VERTICAL = "vertical", e.FRAME_FAST = "fast", e.FRAME_SLOW = "slow", e.FRAME_MOUSE = "mouse", e.FRAME_SLEEP = "sleep", e.FRAME_MOUSE_THREDHOLD = 2e3, s(e, ["_wgColor", function () {
						return this._wgColor = [0, 0, 0, 1]
					}]), e
				}(It),
				Ot = function (t) {
					function e() {
						this._src = null, this._onload = null, this._onerror = null, e.__super.call(this)
					}
					n(e, "laya.resource.FileBitmap", Pt);
					var i = e.prototype;
					return r(0, i, "src", function () {
						return this._src
					}, function (t) {
						this._src = t
					}), r(0, i, "onload", null, function (t) {}), r(0, i, "onerror", null, function (t) {}), e
				}(),
				Nt = function (t) {
					function e(t, i) {
						this._is2D = !1, e.__super.call(this);
						var s = this;
						if (this._source = this, "2D" === t || "AUTO" === t && !B.isWebGL) {
							this._is2D = !0, this._source = i || H.createElement("canvas"), this._w = this._source.width, this._h = this._source.height;
							var n = this;
							n.getContext = function (t, e) {
								if (s._ctx) return s._ctx;
								var i = s._ctx = s._source.getContext(t, e);
								return i && (i._canvas = n, B.isFlash || H.onLimixiu || (i.size = function (t, e) {})), i
							}
						}
						this.lock = !0
					}
					n(e, "laya.resource.HTMLCanvas", Pt);
					var i = e.prototype;
					return i.clear = function () {
						this._ctx && this._ctx.clear()
					}, i.destroy = function () {
						this._ctx && this._ctx.destroy(), this._ctx = null, laya.resource.Resource.prototype.destroy.call(this)
					}, i.release = function () {}, i._setContext = function (t) {
						this._ctx = t
					}, i.getContext = function (t, i) {
						return this._ctx ? this._ctx : this._ctx = e._createContext(this)
					}, i.getMemSize = function () {
						return 0
					}, i.size = function (t, e) {
						(this._w != t || this._h != e || this._source && (this._source.width != t || this._source.height != e)) && (this._w = t, this._h = e, this.memorySize = this._w * this._h * 4, this._ctx && this._ctx.size(t, e), this._source && (this._source.height = e, this._source.width = t))
					}, i.getCanvas = function () {
						return this._source
					}, i.toBase64 = function (t, e, i) {
						if (this._source)
							if (B.isConchApp && this._source.toBase64) this._source.toBase64(t, e, i);
							else {
								var s = this._source.toDataURL(t, e);
								i.call(this, s)
							}
					}, r(0, i, "context", function () {
						return this._ctx
					}), r(0, i, "asBitmap", null, function (t) {}), e.create = function (t, i) {
						return new e(t, i)
					}, e.TYPE2D = "2D", e.TYPE3D = "3D", e.TYPEAUTO = "AUTO", e._createContext = null, e
				}(),
				Dt = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.ui.Box", t);
					var s = e.prototype;
					return i.imps(s, {
						"laya.ui.IBox": !0
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t;
						for (var e in t) {
							var i = this.getChildByName(e);
							i ? i.dataSource = t[e] : this.hasOwnProperty(e) && "function" != typeof this[e] && (this[e] = t[e])
						}
					}), e
				}(At),
				zt = function (t) {
					function e(t, i) {
						this.toggle = !1, this._bitmap = null, this._text = null, this._strokeColors = null, this._state = 0, this._selected = !1, this._skin = null, this._autoSize = !0, this._sources = null, this._clickHandler = null, this._stateChanged = !1, e.__super.call(this), this._labelColors = W.buttonLabelColors, this._stateNum = W.buttonStateNum, void 0 === i && (i = ""), this.skin = t, this.label = i
					}
					n(e, "laya.ui.Button", t);
					var o = e.prototype;
					return i.imps(o, {
						"laya.ui.ISelect": !0
					}), o.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bitmap && this._bitmap.destroy(), this._text && this._text.destroy(e), this._bitmap = null, this._text = null, this._clickHandler = null, this._labelColors = this._sources = this._strokeColors = null
					}, o.createChildren = function () {
						this.graphics = this._bitmap = new bt
					}, o.createText = function () {
						this._text || (this._text = new Rt, this._text.overflow = Rt.HIDDEN, this._text.align = "center", this._text.valign = "middle", this._text.width = this._width, this._text.height = this._height)
					}, o.initialize = function () {
						1 !== this._mouseEnableState && (this.mouseEnabled = !0, this._setBit(2, !0)), this._createListener("mouseover", this, this.onMouse, null, !1, !1), this._createListener("mouseout", this, this.onMouse, null, !1, !1), this._createListener("mousedown", this, this.onMouse, null, !1, !1), this._createListener("mouseup", this, this.onMouse, null, !1, !1), this._createListener("click", this, this.onMouse, null, !1, !1)
					}, o.onMouse = function (t) {
						if (!1 !== this.toggle || !this._selected) return "click" === t.type ? (this.toggle && (this.selected = !this._selected), void(this._clickHandler && this._clickHandler.run())) : void(!this._selected && (this.state = e.stateMap[t.type]))
					}, o.changeClips = function () {
						var t = xt.getRes(this._skin);
						if (t) {
							var e = t.sourceWidth,
								i = t.sourceHeight / this._stateNum;
							t.$_GID || (t.$_GID = tt.getGID());
							var s = t.$_GID + "-" + this._stateNum,
								n = it.I.get(s);
							if (tt.isOkTextureList(n) || (n = null), n) this._sources = n;
							else {
								if (this._sources = [], 1 === this._stateNum) this._sources.push(t);
								else
									for (var r = 0; r < this._stateNum; r++) this._sources.push(wt.createFromTexture(t, 0, i * r, e, i));
								it.I.set(s, this._sources)
							}
							this._autoSize ? (this._bitmap.width = this._width || e, this._bitmap.height = this._height || i, this._text && (this._text.width = this._bitmap.width, this._text.height = this._bitmap.height)) : this._text && (this._text.x = e)
						} else console.log("lose skin", this._skin)
					}, o.changeState = function () {
						this._stateChanged = !1, this.runCallLater(this.changeClips);
						var t = this._state < this._stateNum ? this._state : this._stateNum - 1;
						this._sources && (this._bitmap.source = this._sources[t]), this.label && (this._text.color = this._labelColors[t], this._strokeColors && (this._text.strokeColor = this._strokeColors[t]))
					}, o._setStateChanged = function () {
						this._stateChanged || (this._stateChanged = !0, this.callLater(this.changeState))
					}, r(0, o, "labelStrokeColor", function () {
						return this.createText(), this._text.strokeColor
					}, function (t) {
						this.createText(), this._text.strokeColor = t
					}), r(0, o, "measureHeight", function () {
						return this.runCallLater(this.changeClips), this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height
					}), r(0, o, "skin", function () {
						return this._skin
					}, function (t) {
						this._skin != t && (this._skin = t, this.callLater(this.changeClips), this._setStateChanged())
					}), r(0, o, "state", function () {
						return this._state
					}, function (t) {
						this._state != t && (this._state = t, this._setStateChanged())
					}), r(0, o, "text", function () {
						return this.createText(), this._text
					}), r(0, o, "stateNum", function () {
						return this._stateNum
					}, function (t) {
						"string" == typeof t && (t = parseInt(t)), this._stateNum != t && (this._stateNum = t < 1 ? 1 : t > 3 ? 3 : t, this.callLater(this.changeClips))
					}), r(0, o, "strokeColors", function () {
						return this._strokeColors ? this._strokeColors.join(",") : ""
					}, function (t) {
						this._strokeColors = Y.fillArray(W.buttonLabelColors, t, String), this._setStateChanged()
					}), r(0, o, "labelColors", function () {
						return this._labelColors.join(",")
					}, function (t) {
						this._labelColors = Y.fillArray(W.buttonLabelColors, t, String), this._setStateChanged()
					}), r(0, o, "measureWidth", function () {
						return this.runCallLater(this.changeClips), this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState), this._bitmap.width + (this._text ? this._text.width : 0))
					}), r(0, o, "label", function () {
						return this._text ? this._text.text : null
					}, function (t) {
						(this._text || t) && (this.createText(), this._text.text != t && (t && !this._text.parent && this.addChild(this._text), this._text.text = (t + "").replace(/\\n/g, "\n"), this._setStateChanged()))
					}), r(0, o, "selected", function () {
						return this._selected
					}, function (t) {
						this._selected != t && (this._selected = t, this.state = this._selected ? 2 : 0, this.event("change"))
					}), r(0, o, "labelPadding", function () {
						return this.createText(), this._text.padding.join(",")
					}, function (t) {
						this.createText(), this._text.padding = Y.fillArray(W.labelPadding, t, Number)
					}), r(0, o, "labelSize", function () {
						return this.createText(), this._text.fontSize
					}, function (t) {
						this.createText(), this._text.fontSize = t
					}), r(0, o, "labelStroke", function () {
						return this.createText(), this._text.stroke
					}, function (t) {
						this.createText(), this._text.stroke = t
					}), r(0, o, "labelBold", function () {
						return this.createText(), this._text.bold
					}, function (t) {
						this.createText(), this._text.bold = t
					}), r(0, o, "labelFont", function () {
						return this.createText(), this._text.font
					}, function (t) {
						this.createText(), this._text.font = t
					}), r(0, o, "labelAlign", function () {
						return this.createText(), this._text.align
					}, function (t) {
						this.createText(), this._text.align = t
					}), r(0, o, "clickHandler", function () {
						return this._clickHandler
					}, function (t) {
						this._clickHandler = t
					}), r(0, o, "sizeGrid", function () {
						return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null
					}, function (t) {
						this._bitmap.sizeGrid = Y.fillArray(W.defaultSizeGrid, t, Number)
					}), r(0, o, "width", t.prototype._$get_width, function (t) {
						i.superSet(At, this, "width", t), this._autoSize && (this._bitmap.width = t, this._text && (this._text.width = t))
					}), r(0, o, "height", t.prototype._$get_height, function (t) {
						i.superSet(At, this, "height", t), this._autoSize && (this._bitmap.height = t, this._text && (this._text.height = t))
					}), r(0, o, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.label = t + "" : i.superSet(At, this, "dataSource", t)
					}), r(0, o, "iconOffset", function () {
						return this._bitmap._offset ? this._bitmap._offset.join(",") : null
					}, function (t) {
						this._bitmap._offset = t ? Y.fillArray([1, 1], t, Number) : []
					}), s(e, ["stateMap", function () {
						return this.stateMap = {
							mouseup: 0,
							mouseover: 1,
							mousedown: 2,
							mouseout: 0
						}
					}]), e
				}(At),
				Wt = function (t) {
					function e(t, i, s) {
						this._sources = null, this._bitmap = null, this._skin = null, this._clipX = 1, this._clipY = 1, this._clipWidth = 0, this._clipHeight = 0, this._autoPlay = !1, this._interval = 50, this._complete = null, this._isPlaying = !1, this._index = 0, this._clipChanged = !1, this._group = null, this._toIndex = -1, e.__super.call(this), void 0 === i && (i = 1), void 0 === s && (s = 1), this._clipX = i, this._clipY = s, this.skin = t
					}
					n(e, "laya.ui.Clip", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), this._bitmap = null, this._sources = null
					}, s.dispose = function () {
						this.destroy(!0), i.loader.clearRes(this._skin)
					}, s.createChildren = function () {
						this.graphics = this._bitmap = new bt
					}, s._onDisplay = function (t) {
						this._isPlaying ? this._displayedInStage ? this.play() : this.stop() : this._autoPlay && this.play()
					}, s.changeClip = function () {
						if (this._clipChanged = !1, this._skin) {
							var t = xt.getRes(this._skin);
							t ? this.loadComplete(this._skin, t) : i.loader.load(this._skin, l.create(this, this.loadComplete, [this._skin]))
						}
					}, s.loadComplete = function (t, e) {
						if (t === this._skin && e) {
							var i = this._clipWidth || Math.ceil(e.sourceWidth / this._clipX),
								s = this._clipHeight || Math.ceil(e.sourceHeight / this._clipY),
								n = this._skin + i + s,
								r = it.I.get(n);
							if (tt.isOkTextureList(r) || (r = null), r) this._sources = r;
							else {
								this._sources = [];
								for (var o = 0; o < this._clipY; o++)
									for (var a = 0; a < this._clipX; a++) this._sources.push(wt.createFromTexture(e, i * a, s * o, i, s));
								it.I.set(n, this._sources)
							}
							this.index = this._index, this.event("loaded"), this.onCompResize()
						}
					}, s.play = function (t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = -1), this._isPlaying = !0, this.index = t, this._toIndex = e, this._index++, i.timer.loop(this.interval, this, this._loop), this.on("display", this, this._onDisplay), this.on("undisplay", this, this._onDisplay)
					}, s._loop = function () {
						this._style.visible && this._sources && (this._index++, this._toIndex > -1 && this._index >= this._toIndex ? this.stop() : this._index >= this._sources.length && (this._index = 0), this.index = this._index)
					}, s.stop = function () {
						this._isPlaying = !1, i.timer.clear(this, this._loop), this.event("complete")
					}, s._setClipChanged = function () {
						this._clipChanged || (this._clipChanged = !0, this.callLater(this.changeClip))
					}, r(0, s, "interval", function () {
						return this._interval
					}, function (t) {
						this._interval != t && (this._interval = t, this._isPlaying && this.play())
					}), r(0, s, "skin", function () {
						return this._skin
					}, function (t) {
						this._skin != t && (this._skin = t, t ? this._setClipChanged() : this._bitmap.source = null)
					}), r(0, s, "sources", function () {
						return this._sources
					}, function (t) {
						this._sources = t, this.index = this._index, this.event("loaded")
					}), r(0, s, "clipX", function () {
						return this._clipX
					}, function (t) {
						this._clipX = t || 1, this._setClipChanged()
					}), r(0, s, "clipY", function () {
						return this._clipY
					}, function (t) {
						this._clipY = t || 1, this._setClipChanged()
					}), r(0, s, "total", function () {
						return this.runCallLater(this.changeClip), this._sources ? this._sources.length : 0
					}), r(0, s, "clipWidth", function () {
						return this._clipWidth
					}, function (t) {
						this._clipWidth = t, this._setClipChanged()
					}), r(0, s, "sizeGrid", function () {
						return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null
					}, function (t) {
						this._bitmap.sizeGrid = Y.fillArray(W.defaultSizeGrid, t, Number)
					}), r(0, s, "group", function () {
						return this._group
					}, function (t) {
						t && this._skin && xt.setGroup(this._skin, t), this._group = t
					}), r(0, s, "clipHeight", function () {
						return this._clipHeight
					}, function (t) {
						this._clipHeight = t, this._setClipChanged()
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(At, this, "width", t), this._bitmap.width = t
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(At, this, "height", t), this._bitmap.height = t
					}), r(0, s, "measureWidth", function () {
						return this.runCallLater(this.changeClip), this._bitmap.width
					}), r(0, s, "measureHeight", function () {
						return this.runCallLater(this.changeClip), this._bitmap.height
					}), r(0, s, "index", function () {
						return this._index
					}, function (t) {
						this._index = t, this._bitmap && this._sources && (this._bitmap.source = this._sources[t]), this.event("change")
					}), r(0, s, "autoPlay", function () {
						return this._autoPlay
					}, function (t) {
						this._autoPlay != t && (this._autoPlay = t, t ? this.play() : this.stop())
					}), r(0, s, "isPlaying", function () {
						return this._isPlaying
					}, function (t) {
						this._isPlaying = t
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.index = parseInt(t) : i.superSet(At, this, "dataSource", t)
					}), r(0, s, "bitmap", function () {
						return this._bitmap
					}), e
				}(At),
				Yt = function (t) {
					function e() {
						this.changeHandler = null, this._gridSize = 11, this._bgColor = "#ffffff", this._borderColor = "#000000", this._inputColor = "#000000", this._inputBgColor = "#efefef", this._colorPanel = null, this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = [], this._selectedColor = "#000000", this._panelChanged = !1, e.__super.call(this)
					}
					n(e, "laya.ui.ColorPicker", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._colorPanel && this._colorPanel.destroy(e), this._colorButton && this._colorButton.destroy(e), this._colorPanel = null, this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = null, this.changeHandler = null
					}, s.createChildren = function () {
						this.addChild(this._colorButton = new zt), this._colorPanel = new Dt, this._colorPanel.size(230, 166), this._colorPanel.addChild(this._colorTiles = new It), this._colorPanel.addChild(this._colorBlock = new It), this._colorPanel.addChild(this._colorInput = new jt)
					}, s.initialize = function () {
						this._colorButton.on("click", this, this.onColorButtonClick), this._colorBlock.pos(5, 5), this._colorInput.pos(60, 5), this._colorInput.size(60, 20), this._colorInput.on("change", this, this.onColorInputChange), this._colorInput.on("keydown", this, this.onColorFieldKeyDown), this._colorTiles.pos(5, 30), this._colorTiles.on("mousemove", this, this.onColorTilesMouseMove), this._colorTiles.on("click", this, this.onColorTilesClick), this._colorTiles.size(20 * this._gridSize, 12 * this._gridSize), this._colorPanel.on("mousedown", this, this.onPanelMouseDown), this.bgColor = this._bgColor
					}, s.onPanelMouseDown = function (t) {
						t.stopPropagation()
					}, s.changePanel = function () {
						this._panelChanged = !1;
						var t = this._colorPanel.graphics;
						t.clear(), t.drawRect(0, 0, 230, 166, this._bgColor, this._borderColor), this.drawBlock(this._selectedColor), this._colorInput.borderColor = this._borderColor, this._colorInput.bgColor = this._inputBgColor, this._colorInput.color = this._inputColor, (t = this._colorTiles.graphics).clear();
						for (var e = [0, 3355443, 6710886, 10066329, 13421772, 16777215, 16711680, 65280, 255, 16776960, 65535, 16711935], i = 0; i < 12; i++)
							for (var s = 0; s < 20; s++) {
								var n = 0;
								n = 0 === s ? e[i] : 1 === s ? 0 : 51 * (((3 * i + s / 6) % 3 << 0) + 3 * (i / 6 << 0)) << 16 | s % 6 * 51 << 8 | (i << 0) % 6 * 51;
								var r = Y.toColor(n);
								this._colors.push(r);
								var o = s * this._gridSize,
									a = i * this._gridSize;
								t.drawRect(o, a, this._gridSize, this._gridSize, r, "#000000")
							}
					}, s.onColorButtonClick = function (t) {
						this._colorPanel.parent ? this.close() : this.open()
					}, s.open = function () {
						var t = this.localToGlobal(new P),
							e = t.x + this._colorPanel.width <= i.stage.width ? t.x : i.stage.width - this._colorPanel.width,
							s = t.y + this._colorButton.height;
						s = s + this._colorPanel.height <= i.stage.height ? s : t.y - this._colorPanel.height, this._colorPanel.pos(e, s), this._colorPanel.zOrder = 1001, i._currentStage.addChild(this._colorPanel), i.stage.on("mousedown", this, this.removeColorBox)
					}, s.close = function () {
						i.stage.off("mousedown", this, this.removeColorBox), this._colorPanel.removeSelf()
					}, s.removeColorBox = function (t) {
						this.close()
					}, s.onColorFieldKeyDown = function (t) {
						13 == t.keyCode && (this._colorInput.text ? this.selectedColor = this._colorInput.text : this.selectedColor = null, this.close(), t.stopPropagation())
					}, s.onColorInputChange = function (t) {
						this._colorInput.text ? this.drawBlock(this._colorInput.text) : this.drawBlock("#FFFFFF")
					}, s.onColorTilesClick = function (t) {
						this.selectedColor = this.getColorByMouse(), this.close()
					}, s.onColorTilesMouseMove = function (t) {
						this._colorInput.focus = !1;
						var e = this.getColorByMouse();
						this._colorInput.text = e, this.drawBlock(e)
					}, s.getColorByMouse = function () {
						var t = this._colorTiles.getMousePoint(),
							e = Math.floor(t.x / this._gridSize),
							i = Math.floor(t.y / this._gridSize);
						return this._colors[20 * i + e]
					}, s.drawBlock = function (t) {
						var e = this._colorBlock.graphics;
						e.clear();
						var i = t || "#ffffff";
						e.drawRect(0, 0, 50, 20, i, this._borderColor), t || e.drawLine(0, 0, 50, 20, "#ff0000")
					}, s.changeColor = function () {
						var t = this.graphics;
						t.clear();
						var e = this._selectedColor || "#000000";
						t.drawRect(0, 0, this._colorButton.width, this._colorButton.height, e)
					}, s._setPanelChanged = function () {
						this._panelChanged || (this._panelChanged = !0, this.callLater(this.changePanel))
					}, r(0, s, "inputBgColor", function () {
						return this._inputBgColor
					}, function (t) {
						this._inputBgColor = t, this._setPanelChanged()
					}), r(0, s, "selectedColor", function () {
						return this._selectedColor
					}, function (t) {
						this._selectedColor != t && (this._selectedColor = this._colorInput.text = t, this.drawBlock(t), this.changeColor(), this.changeHandler && this.changeHandler.runWith(this._selectedColor), this.event("change", v.EMPTY.setTo("change", this, this)))
					}), r(0, s, "skin", function () {
						return this._colorButton.skin
					}, function (t) {
						this._colorButton.skin = t, this.changeColor()
					}), r(0, s, "bgColor", function () {
						return this._bgColor
					}, function (t) {
						this._bgColor = t, this._setPanelChanged()
					}), r(0, s, "borderColor", function () {
						return this._borderColor
					}, function (t) {
						this._borderColor = t, this._setPanelChanged()
					}), r(0, s, "inputColor", function () {
						return this._inputColor
					}, function (t) {
						this._inputColor = t, this._setPanelChanged()
					}), e
				}(At),
				Ht = function (t) {
					function e(t, i) {
						this._visibleNum = 6, this._button = null, this._list = null, this._isOpen = !1, this._itemSize = 12, this._labels = [], this._selectedIndex = -1, this._selectHandler = null, this._itemHeight = NaN, this._listHeight = NaN, this._listChanged = !1, this._itemChanged = !1, this._scrollBarSkin = null, this._isCustomList = !1, this.itemRender = null, e.__super.call(this), this._itemColors = W.comboBoxItemColors, this.skin = t, this.labels = i
					}
					n(e, "laya.ui.ComboBox", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._button && this._button.destroy(e), this._list && this._list.destroy(e), this._button = null, this._list = null, this._itemColors = null, this._labels = null, this._selectHandler = null
					}, s.createChildren = function () {
						this.addChild(this._button = new zt), this._button.text.align = "left", this._button.labelPadding = "0,0,0,5", this._button.on("mousedown", this, this.onButtonMouseDown)
					}, s._createList = function () {
						this._list = new Qt, this._scrollBarSkin && (this._list.vScrollBarSkin = this._scrollBarSkin), this._setListEvent(this._list)
					}, s._setListEvent = function (t) {
						this._list.selectEnable = !0, this._list.on("mousedown", this, this.onListDown), this._list.mouseHandler = l.create(this, this.onlistItemMouse, null, !1), this._list.scrollBar && this._list.scrollBar.on("mousedown", this, this.onScrollBarDown)
					}, s.onListDown = function (t) {
						t.stopPropagation()
					}, s.onScrollBarDown = function (t) {
						t.stopPropagation()
					}, s.onButtonMouseDown = function (t) {
						this.callLater(this.switchTo, [!this._isOpen])
					}, s.changeList = function () {
						this._listChanged = !1;
						var t = this.width - 2,
							e = this._itemColors[2];
						this._itemHeight = this._itemSize + 6, this._list.itemRender = this.itemRender || {
							type: "Box",
							child: [{
								type: "Label",
								props: {
									name: "label",
									x: 1,
									padding: "3,3,3,3",
									width: t,
									height: this._itemHeight,
									fontSize: this._itemSize,
									color: e
								}
							}]
						}, this._list.repeatY = this._visibleNum, this._list.refresh()
					}, s.onlistItemMouse = function (t, e) {
						var i = t.type;
						if ("mouseover" === i || "mouseout" === i) {
							if (this._isCustomList) return;
							var s = this._list.getCell(e);
							if (!s) return;
							var n = s.getChildByName("label");
							n && ("mouseover" === i ? (n.bgColor = this._itemColors[0], n.color = this._itemColors[1]) : (n.bgColor = null, n.color = this._itemColors[2]))
						} else "click" === i && (this.selectedIndex = e, this.isOpen = !1)
					}, s.switchTo = function (t) {
						this.isOpen = t
					}, s.changeOpen = function () {
						this.isOpen = !this._isOpen
					}, s.changeItem = function () {
						if (this._itemChanged = !1, this._listHeight = this._labels.length > 0 ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight, !this._isCustomList) {
							var t = this._list.graphics;
							t.clear(), t.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3])
						}
						var e = this._list.array || [];
						e.length = 0;
						for (var i = 0, s = this._labels.length; i < s; i++) e.push({
							label: this._labels[i]
						});
						this._list.height = this._listHeight, this._list.array = e
					}, s.changeSelected = function () {
						this._button.label = this.selectedLabel
					}, s._onStageMouseWheel = function (t) {
						this._list && !this._list.contains(t.target) && this.removeList(null)
					}, s.removeList = function (t) {
						i.stage.off("mousedown", this, this.removeList), i.stage.off("mousewheel", this, this._onStageMouseWheel), this.isOpen = !1
					}, r(0, s, "selectedIndex", function () {
						return this._selectedIndex
					}, function (t) {
						this._selectedIndex != t && (this._selectedIndex = t, this._labels.length > 0 ? this.changeSelected() : this.callLater(this.changeSelected), this.event("change", [v.EMPTY.setTo("change", this, this)]), this._selectHandler && this._selectHandler.runWith(this._selectedIndex))
					}), r(0, s, "measureHeight", function () {
						return this._button.height
					}), r(0, s, "skin", function () {
						return this._button.skin
					}, function (t) {
						this._button.skin != t && (this._button.skin = t, this._listChanged = !0)
					}), r(0, s, "measureWidth", function () {
						return this._button.width
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(At, this, "width", t), this._button.width = this._width, this._itemChanged = !0, this._listChanged = !0
					}), r(0, s, "selectedLabel", function () {
						return this._selectedIndex > -1 && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : null
					}, function (t) {
						this.selectedIndex = this._labels.indexOf(t)
					}), r(0, s, "labels", function () {
						return this._labels.join(",")
					}, function (t) {
						this._labels.length > 0 && (this.selectedIndex = -1), t ? this._labels = t.split(",") : this._labels.length = 0, this._itemChanged = !0
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(At, this, "height", t), this._button.height = this._height
					}), r(0, s, "selectHandler", function () {
						return this._selectHandler
					}, function (t) {
						this._selectHandler = t
					}), r(0, s, "visibleNum", function () {
						return this._visibleNum
					}, function (t) {
						this._visibleNum = t, this._listChanged = !0
					}), r(0, s, "labelBold", function () {
						return this._button.text.bold
					}, function (t) {
						this._button.text.bold = t
					}), r(0, s, "itemColors", function () {
						return String(this._itemColors)
					}, function (t) {
						this._itemColors = Y.fillArray(this._itemColors, t, String), this._listChanged = !0
					}), r(0, s, "itemSize", function () {
						return this._itemSize
					}, function (t) {
						this._itemSize = t, this._listChanged = !0
					}), r(0, s, "scrollBar", function () {
						return this.list.scrollBar
					}), r(0, s, "isOpen", function () {
						return this._isOpen
					}, function (t) {
						if (this._isOpen != t)
							if (this._isOpen = t, this._button.selected = this._isOpen, this._isOpen) {
								this._list || this._createList(), this._listChanged && !this._isCustomList && this.changeList(), this._itemChanged && this.changeItem();
								var e = this.localToGlobal(P.TEMP.setTo(0, 0)),
									s = e.y + this._button.height;
								s = s + this._listHeight <= i.stage.height ? s : e.y - this._listHeight, this._list.pos(e.x, s), this._list.zOrder = 1001, i._currentStage.addChild(this._list), i.stage.once("mousedown", this, this.removeList), i.stage.on("mousewheel", this, this._onStageMouseWheel), this._list.selectedIndex = this._selectedIndex
							} else this._list && this._list.removeSelf()
					}), r(0, s, "scrollBarSkin", function () {
						return this._scrollBarSkin
					}, function (t) {
						this._scrollBarSkin = t
					}), r(0, s, "sizeGrid", function () {
						return this._button.sizeGrid
					}, function (t) {
						this._button.sizeGrid = t
					}), r(0, s, "button", function () {
						return this._button
					}), r(0, s, "list", function () {
						return this._list || this._createList(), this._list
					}, function (t) {
						t && (t.removeSelf(), this._isCustomList = !0, this._list = t, this._setListEvent(t), this._itemHeight = t.getCell(0).height + t.spaceY)
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : i.superSet(At, this, "dataSource", t)
					}), r(0, s, "labelColors", function () {
						return this._button.labelColors
					}, function (t) {
						this._button.labelColors != t && (this._button.labelColors = t)
					}), r(0, s, "labelPadding", function () {
						return this._button.text.padding.join(",")
					}, function (t) {
						this._button.text.padding = Y.fillArray(W.labelPadding, t, Number)
					}), r(0, s, "labelSize", function () {
						return this._button.text.fontSize
					}, function (t) {
						this._button.text.fontSize = t
					}), r(0, s, "labelFont", function () {
						return this._button.text.font
					}, function (t) {
						this._button.text.font = t
					}), r(0, s, "stateNum", function () {
						return this._button.stateNum
					}, function (t) {
						this._button.stateNum = t
					}), e
				}(At),
				Gt = function (t) {
					function e(t) {
						this.rollRatio = .95, this.changeHandler = null, this.scaleBar = !0, this.autoHide = !1, this.elasticDistance = 0, this.elasticBackTime = 500, this.upButton = null, this.downButton = null, this.slider = null, this._scrollSize = 1, this._skin = null, this._thumbPercent = 1, this._target = null, this._lastPoint = null, this._lastOffset = 0, this._checkElastic = !1, this._isElastic = !1, this._value = NaN, this._hide = !1, this._clickOnly = !0, this._offsets = null, e.__super.call(this), this._showButtons = lt.showButtons, this._touchScrollEnable = lt.touchScrollEnable, this._mouseWheelEnable = lt.mouseWheelEnable, this.skin = t, this.max = 1
					}
					n(e, "laya.ui.ScrollBar", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), this.stopScroll(), this.target = null, t.prototype.destroy.call(this, e), this.upButton && this.upButton.destroy(e), this.downButton && this.downButton.destroy(e), this.slider && this.slider.destroy(e), this.upButton = this.downButton = null, this.slider = null, this.changeHandler = null, this._offsets = null
					}, s.createChildren = function () {
						this.addChild(this.slider = new Xt), this.addChild(this.upButton = new zt), this.addChild(this.downButton = new zt)
					}, s.initialize = function () {
						this.slider.showLabel = !1, this.slider.on("change", this, this.onSliderChange), this.slider.setSlider(0, 0, 0), this.upButton.on("mousedown", this, this.onButtonMouseDown), this.downButton.on("mousedown", this, this.onButtonMouseDown)
					}, s.onSliderChange = function () {
						this._value != this.slider.value && (this.value = this.slider.value)
					}, s.onButtonMouseDown = function (t) {
						var e = t.currentTarget === this.upButton;
						this.slide(e), i.timer.once(W.scrollBarDelayTime, this, this.startLoop, [e]), i.stage.once("mouseup", this, this.onStageMouseUp)
					}, s.startLoop = function (t) {
						i.timer.frameLoop(1, this, this.slide, [t])
					}, s.slide = function (t) {
						t ? this.value -= this._scrollSize : this.value += this._scrollSize
					}, s.onStageMouseUp = function (t) {
						i.timer.clear(this, this.startLoop), i.timer.clear(this, this.slide)
					}, s.changeScrollBar = function () {
						this.upButton.visible = this._showButtons, this.downButton.visible = this._showButtons, this._showButtons && (this.upButton.skin = this._skin.replace(".png", "$up.png"), this.downButton.skin = this._skin.replace(".png", "$down.png")), this.slider.isVertical ? this.slider.y = this._showButtons ? this.upButton.height : 0 : this.slider.x = this._showButtons ? this.upButton.width : 0, this.resetPositions(), this.repaint()
					}, s.changeSize = function () {
						t.prototype.changeSize.call(this), this.repaint(), this.resetPositions(), this.event("change"), this.changeHandler && this.changeHandler.runWith(this.value)
					}, s.resetPositions = function () {
						this.slider.isVertical ? this.slider.height = this.height - (this._showButtons ? this.upButton.height + this.downButton.height : 0) : this.slider.width = this.width - (this._showButtons ? this.upButton.width + this.downButton.width : 0), this.resetButtonPosition()
					}, s.resetButtonPosition = function () {
						this.slider.isVertical ? this.downButton.y = this.slider.y + this.slider.height : this.downButton.x = this.slider.x + this.slider.width
					}, s.setScroll = function (t, e, i) {
						this.runCallLater(this.changeSize), this.slider.setSlider(t, e, i), this.slider.bar.visible = e > 0, !this._hide && this.autoHide && (this.visible = !1)
					}, s.onTargetMouseWheel = function (t) {
						this.value -= t.delta * this._scrollSize, this.target = this._target
					}, s.onTargetMouseDown = function (t) {
						this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new P), this._lastPoint.setTo(i.stage.mouseX, i.stage.mouseY), i.timer.clear(this, this.tweenMove), Q.clearTween(this), i.stage.once("mouseup", this, this.onStageMouseUp2), i.stage.once("mouseout", this, this.onStageMouseUp2), i.timer.frameLoop(1, this, this.loop)
					}, s.loop = function () {
						var t = i.stage.mouseY,
							e = i.stage.mouseX;
						if (this._lastOffset = this.isVertical ? t - this._lastPoint.y : e - this._lastPoint.x, this._clickOnly) {
							if (!(Math.abs(this._lastOffset * (this.isVertical ? i.stage._canvasTransform.getScaleY() : i.stage._canvasTransform.getScaleX())) > 1)) return;
							this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this._target.mouseEnabled = !1, !this.hide && this.autoHide && (this.alpha = 1, this.visible = !0), this.event("start")
						}
						this._offsets.push(this._lastOffset), this._lastPoint.x = e, this._lastPoint.y = t, 0 !== this._lastOffset && (this._checkElastic || (this.elasticDistance > 0 ? this._checkElastic || 0 == this._lastOffset || (this._lastOffset > 0 && this._value <= this.min || this._lastOffset < 0 && this._value >= this.max ? (this._isElastic = !0, this._checkElastic = !0) : this._isElastic = !1) : this._checkElastic = !0), this._isElastic ? this._value <= this.min ? this.value -= this._lastOffset * Math.max(0, 1 - (this.min - this._value) / this.elasticDistance) : this._value >= this.max && (this.value -= this._lastOffset * Math.max(0, 1 - (this._value - this.max) / this.elasticDistance)) : this.value -= this._lastOffset)
					}, s.onStageMouseUp2 = function (t) {
						if (i.stage.off("mouseup", this, this.onStageMouseUp2), i.stage.off("mouseout", this, this.onStageMouseUp2), i.timer.clear(this, this.loop), !(this._clickOnly && this._value >= this.min && this._value <= this.max))
							if (this._target.mouseEnabled = !0, this._isElastic) this._value < this.min ? Q.to(this, {
								value: this.min
							}, this.elasticBackTime, j.sineOut, l.create(this, this.elasticOver)) : this._value > this.max && Q.to(this, {
								value: this.max
							}, this.elasticBackTime, j.sineOut, l.create(this, this.elasticOver));
							else {
								if (!this._offsets) return;
								this._offsets.length < 1 && (this._offsets[0] = this.isVertical ? i.stage.mouseY - this._lastPoint.y : i.stage.mouseX - this._lastPoint.x);
								for (var e = 0, s = Math.min(this._offsets.length, 3), n = 0; n < s; n++) e += this._offsets[this._offsets.length - 1 - n];
								if (this._lastOffset = e / s, (e = Math.abs(this._lastOffset)) < 2) return void this.event("end");
								e > 60 && (this._lastOffset = this._lastOffset > 0 ? 60 : -60);
								var r = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 240)));
								i.timer.frameLoop(1, this, this.tweenMove, [r])
							}
					}, s.elasticOver = function () {
						this._isElastic = !1, !this.hide && this.autoHide && Q.to(this, {
							alpha: 0
						}, 500), this.event("end")
					}, s.tweenMove = function (t) {
						this._lastOffset *= this.rollRatio;
						var e = NaN;
						if (t > 0 && (this._lastOffset > 0 && this.value <= this.min ? (this._isElastic = !0, e = .5 * -(this.min - t - this.value), this._lastOffset > e && (this._lastOffset = e)) : this._lastOffset < 0 && this.value >= this.max && (this._isElastic = !0, e = .5 * -(this.max + t - this.value), this._lastOffset < e && (this._lastOffset = e))), this.value -= this._lastOffset, Math.abs(this._lastOffset) < 1) {
							if (i.timer.clear(this, this.tweenMove), this._isElastic) return void(this._value < this.min ? Q.to(this, {
								value: this.min
							}, this.elasticBackTime, j.sineOut, l.create(this, this.elasticOver)) : this._value > this.max ? Q.to(this, {
								value: this.max
							}, this.elasticBackTime, j.sineOut, l.create(this, this.elasticOver)) : this.elasticOver());
							this.event("end"), !this.hide && this.autoHide && Q.to(this, {
								alpha: 0
							}, 500)
						}
					}, s.stopScroll = function () {
						this.onStageMouseUp2(null), i.timer.clear(this, this.tweenMove), Q.clearTween(this)
					}, r(0, s, "measureHeight", function () {
						return this.slider.isVertical ? 100 : this.slider.height
					}), r(0, s, "skin", function () {
						return this._skin
					}, function (t) {
						this._skin != t && (this._skin = t, this.slider.skin = this._skin, this.callLater(this.changeScrollBar))
					}), r(0, s, "max", function () {
						return this.slider.max
					}, function (t) {
						this.slider.max = t
					}), r(0, s, "showButtons", function () {
						return this._showButtons
					}, function (t) {
						this._showButtons = t, this.callLater(this.changeScrollBar)
					}), r(0, s, "measureWidth", function () {
						return this.slider.isVertical ? this.slider.width : 100
					}), r(0, s, "min", function () {
						return this.slider.min
					}, function (t) {
						this.slider.min = t
					}), r(0, s, "value", function () {
						return this._value
					}, function (t) {
						t !== this._value && (this._value = t, this._isElastic || (this.slider._value != t && (this.slider._value = t, this.slider.changeValue()), this._value = this.slider._value), this.event("change"), this.changeHandler && this.changeHandler.runWith(this._value))
					}), r(0, s, "isVertical", function () {
						return this.slider.isVertical
					}, function (t) {
						this.slider.isVertical = t
					}), r(0, s, "sizeGrid", function () {
						return this.slider.sizeGrid
					}, function (t) {
						this.slider.sizeGrid = t
					}), r(0, s, "scrollSize", function () {
						return this._scrollSize
					}, function (t) {
						this._scrollSize = t
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : i.superSet(At, this, "dataSource", t)
					}), r(0, s, "thumbPercent", function () {
						return this._thumbPercent
					}, function (t) {
						this.runCallLater(this.changeScrollBar), this.runCallLater(this.changeSize), t = t >= 1 ? .99 : t, this._thumbPercent = t, this.scaleBar && (this.slider.isVertical ? this.slider.bar.height = Math.max(this.slider.height * t, W.scrollBarMinNum) : this.slider.bar.width = Math.max(this.slider.width * t, W.scrollBarMinNum))
					}), r(0, s, "target", function () {
						return this._target
					}, function (t) {
						this._target && (this._target.off("mousewheel", this, this.onTargetMouseWheel), this._target.off("mousedown", this, this.onTargetMouseDown)), this._target = t, t && (this._mouseWheelEnable && this._target.on("mousewheel", this, this.onTargetMouseWheel), this._touchScrollEnable && this._target.on("mousedown", this, this.onTargetMouseDown))
					}), r(0, s, "hide", function () {
						return this._hide
					}, function (t) {
						this._hide = t, this.visible = !t
					}), r(0, s, "touchScrollEnable", function () {
						return this._touchScrollEnable
					}, function (t) {
						this._touchScrollEnable = t, this.target = this._target
					}), r(0, s, "mouseWheelEnable", function () {
						return this._mouseWheelEnable
					}, function (t) {
						this._mouseWheelEnable = t, this.target = this._target
					}), r(0, s, "tick", function () {
						return this.slider.tick
					}, function (t) {
						this.slider.tick = t
					}), e
				}(At),
				Xt = function (t) {
					function e(t) {
						this.changeHandler = null, this.isVertical = !0, this.showLabel = !0, this._allowClickBack = !1, this._max = 100, this._min = 0, this._tick = 1, this._value = 0, this._skin = null, this._bg = null, this._progress = null, this._bar = null, this._tx = NaN, this._ty = NaN, this._maxMove = NaN, this._globalSacle = null, e.__super.call(this), this.skin = t
					}
					n(e, "laya.ui.Slider", t);
					var o = e.prototype;
					return o.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bg && this._bg.destroy(e), this._bar && this._bar.destroy(e), this._progress && this._progress.destroy(e), this._bg = null, this._bar = null, this._progress = null, this.changeHandler = null
					}, o.createChildren = function () {
						this.addChild(this._bg = new Ut), this.addChild(this._bar = new zt)
					}, o.initialize = function () {
						this._bar.on("mousedown", this, this.onBarMouseDown), this._bg.sizeGrid = this._bar.sizeGrid = "4,4,4,4,0", this._progress && (this._progress.sizeGrid = this._bar.sizeGrid), this.allowClickBack = !0
					}, o.onBarMouseDown = function (t) {
						this._globalSacle || (this._globalSacle = new P), this._globalSacle.setTo(this.globalScaleX || .01, this.globalScaleY || .01), this._maxMove = this.isVertical ? this.height - this._bar.height : this.width - this._bar.width, this._tx = i.stage.mouseX, this._ty = i.stage.mouseY, i.stage.on("mousemove", this, this.mouseMove), i.stage.once("mouseup", this, this.mouseUp), i.stage.once("mouseout", this, this.mouseUp), this.showValueText()
					}, o.showValueText = function () {
						if (this.showLabel) {
							var t = laya.ui.Slider.label;
							this.addChild(t), t.textField.changeText(this._value + ""), this.isVertical ? (t.x = this._bar.x + 20, t.y = .5 * (this._bar.height - t.height) + this._bar.y) : (t.y = this._bar.y - 20, t.x = .5 * (this._bar.width - t.width) + this._bar.x)
						}
					}, o.hideValueText = function () {
						laya.ui.Slider.label && laya.ui.Slider.label.removeSelf()
					}, o.mouseUp = function (t) {
						i.stage.off("mousemove", this, this.mouseMove), i.stage.off("mouseup", this, this.mouseUp), i.stage.off("mouseout", this, this.mouseUp), this.sendChangeEvent("changed"), this.hideValueText()
					}, o.mouseMove = function (t) {
						var e = this._value;
						this.isVertical ? (this._bar.y += (i.stage.mouseY - this._ty) / this._globalSacle.y, this._bar.y > this._maxMove ? this._bar.y = this._maxMove : this._bar.y < 0 && (this._bar.y = 0), this._value = this._bar.y / this._maxMove * (this._max - this._min) + this._min, this._progress && (this._progress.height = this._bar.y + .5 * this._bar.height)) : (this._bar.x += (i.stage.mouseX - this._tx) / this._globalSacle.x, this._bar.x > this._maxMove ? this._bar.x = this._maxMove : this._bar.x < 0 && (this._bar.x = 0), this._value = this._bar.x / this._maxMove * (this._max - this._min) + this._min, this._progress && (this._progress.width = this._bar.x + .5 * this._bar.width)), this._tx = i.stage.mouseX, this._ty = i.stage.mouseY;
						var s = Math.pow(10, (this._tick + "").length - 1);
						this._value = Math.round(Math.round(this._value / this._tick) * this._tick * s) / s, this._value != e && this.sendChangeEvent(), this.showValueText()
					}, o.sendChangeEvent = function (t) {
						void 0 === t && (t = "change"), this.event(t), this.changeHandler && this.changeHandler.runWith(this._value)
					}, o.setBarPoint = function () {
						this.isVertical ? this._bar.x = Math.round(.5 * (this._bg.width - this._bar.width)) : this._bar.y = Math.round(.5 * (this._bg.height - this._bar.height))
					}, o.changeSize = function () {
						t.prototype.changeSize.call(this), this.isVertical ? this._bg.height = this.height : this._bg.width = this.width, this.setBarPoint(), this.changeValue()
					}, o.setSlider = function (t, e, i) {
						this._value = -1, this._min = t, this._max = e > t ? e : t, this.value = i < t ? t : i > e ? e : i
					}, o.changeValue = function () {
						var t = Math.pow(10, (this._tick + "").length - 1);
						this._value = Math.round(Math.round(this._value / this._tick) * this._tick * t) / t, this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
						var e = this._max - this._min;
						0 === e && (e = 1), this.isVertical ? (this._bar.y = (this._value - this._min) / e * (this.height - this._bar.height), this._progress && (this._progress.height = this._bar.y + .5 * this._bar.height)) : (this._bar.x = (this._value - this._min) / e * (this.width - this._bar.width), this._progress && (this._progress.width = this._bar.x + .5 * this._bar.width))
					}, o.onBgMouseDown = function (t) {
						var e = this._bg.getMousePoint();
						this.isVertical ? this.value = e.y / (this.height - this._bar.height) * (this._max - this._min) + this._min : this.value = e.x / (this.width - this._bar.width) * (this._max - this._min) + this._min
					}, r(0, o, "measureHeight", function () {
						return Math.max(this._bg.height, this._bar.height)
					}), r(0, o, "skin", function () {
						return this._skin
					}, function (t) {
						if (this._skin != t) {
							this._skin = t, this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png");
							var e = this._skin.replace(".png", "$progress.png");
							xt.getRes(e) && (this._progress || (this.addChild(this._progress = new Ut), this._progress.sizeGrid = this._bar.sizeGrid, this.setChildIndex(this._progress, 1)), this._progress.skin = e), this.setBarPoint(), this.callLater(this.changeValue)
						}
					}), r(0, o, "allowClickBack", function () {
						return this._allowClickBack
					}, function (t) {
						this._allowClickBack != t && (this._allowClickBack = t, t ? this._bg.on("mousedown", this, this.onBgMouseDown) : this._bg.off("mousedown", this, this.onBgMouseDown))
					}), r(0, o, "max", function () {
						return this._max
					}, function (t) {
						this._max != t && (this._max = t, this.callLater(this.changeValue))
					}), r(0, o, "measureWidth", function () {
						return Math.max(this._bg.width, this._bar.width)
					}), r(0, o, "tick", function () {
						return this._tick
					}, function (t) {
						this._tick != t && (this._tick = t, this.callLater(this.changeValue))
					}), r(0, o, "sizeGrid", function () {
						return this._bg.sizeGrid
					}, function (t) {
						this._bg.sizeGrid = t, this._bar.sizeGrid = t, this._progress && (this._progress.sizeGrid = this._bar.sizeGrid)
					}), r(0, o, "min", function () {
						return this._min
					}, function (t) {
						this._min != t && (this._min = t, this.callLater(this.changeValue))
					}), r(0, o, "value", function () {
						return this._value
					}, function (t) {
						if (this._value != t) {
							var e = this._value;
							this._value = t, this.changeValue(), this._value != e && this.sendChangeEvent()
						}
					}), r(0, o, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : i.superSet(At, this, "dataSource", t)
					}), r(0, o, "bar", function () {
						return this._bar
					}), s(e, ["label", function () {
						return this.label = new Vt
					}]), e
				}(At),
				Ut = function (t) {
					function e(t) {
						this._bitmap = null, this._skin = null, this._group = null, e.__super.call(this), this.skin = t
					}
					n(e, "laya.ui.Image", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), this._bitmap = null
					}, s.dispose = function () {
						this.destroy(!0), i.loader.clearRes(this._skin)
					}, s.createChildren = function () {
						this.graphics = this._bitmap = new bt, this._bitmap.autoCacheCmd = !1
					}, s.setSource = function (t, e) {
						t === this._skin && e && (this.source = e, this.onCompResize())
					}, r(0, s, "source", function () {
						return this._bitmap.source
					}, function (t) {
						this._bitmap && (this._bitmap.source = t, this.event("loaded"), this.repaint())
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "string" == typeof t ? this.skin = t : i.superSet(At, this, "dataSource", t)
					}), r(0, s, "measureHeight", function () {
						return this._bitmap.height
					}), r(0, s, "skin", function () {
						return this._skin
					}, function (t) {
						if (this._skin != t)
							if (this._skin = t, t) {
								var e = xt.getRes(t);
								e ? (this.source = e, this.onCompResize()) : i.loader.load(this._skin, l.create(this, this.setSource, [this._skin]), null, "image", 1, !0, this._group)
							} else this.source = null
					}), r(0, s, "group", function () {
						return this._group
					}, function (t) {
						t && this._skin && xt.setGroup(this._skin, t), this._group = t
					}), r(0, s, "sizeGrid", function () {
						return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null
					}, function (t) {
						this._bitmap.sizeGrid = Y.fillArray(W.defaultSizeGrid, t, Number)
					}), r(0, s, "measureWidth", function () {
						return this._bitmap.width
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(At, this, "width", t), this._bitmap.width = 0 == t ? 1e-7 : t
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(At, this, "height", t), this._bitmap.height = 0 == t ? 1e-7 : t
					}), e
				}(At),
				Vt = function (t) {
					function e(t) {
						this._tf = null, e.__super.call(this), void 0 === t && (t = ""), p.defaultColor = W.labelColor, this.text = t
					}
					n(e, "laya.ui.Label", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._tf = null
					}, s.createChildren = function () {
						this.addChild(this._tf = new Rt)
					}, s.changeText = function (t) {
						this._tf.changeText(t)
					}, r(0, s, "padding", function () {
						return this._tf.padding.join(",")
					}, function (t) {
						this._tf.padding = Y.fillArray(W.labelPadding, t, Number)
					}), r(0, s, "bold", function () {
						return this._tf.bold
					}, function (t) {
						this._tf.bold = t
					}), r(0, s, "align", function () {
						return this._tf.align
					}, function (t) {
						this._tf.align = t
					}), r(0, s, "text", function () {
						return this._tf.text
					}, function (t) {
						this._tf.text != t && (t && (t = Y.adptString(t + "")), this._tf.text = t, this.event("change"), this._width && this._height || this.onCompResize())
					}), r(0, s, "italic", function () {
						return this._tf.italic
					}, function (t) {
						this._tf.italic = t
					}), r(0, s, "wordWrap", function () {
						return this._tf.wordWrap
					}, function (t) {
						this._tf.wordWrap = t
					}), r(0, s, "font", function () {
						return this._tf.font
					}, function (t) {
						this._tf.font = t
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.text = t + "" : i.superSet(At, this, "dataSource", t)
					}), r(0, s, "color", function () {
						return this._tf.color
					}, function (t) {
						this._tf.color = t
					}), r(0, s, "valign", function () {
						return this._tf.valign
					}, function (t) {
						this._tf.valign = t
					}), r(0, s, "leading", function () {
						return this._tf.leading
					}, function (t) {
						this._tf.leading = t
					}), r(0, s, "fontSize", function () {
						return this._tf.fontSize
					}, function (t) {
						this._tf.fontSize = t
					}), r(0, s, "bgColor", function () {
						return this._tf.bgColor
					}, function (t) {
						this._tf.bgColor = t
					}), r(0, s, "borderColor", function () {
						return this._tf.borderColor
					}, function (t) {
						this._tf.borderColor = t
					}), r(0, s, "stroke", function () {
						return this._tf.stroke
					}, function (t) {
						this._tf.stroke = t
					}), r(0, s, "strokeColor", function () {
						return this._tf.strokeColor
					}, function (t) {
						this._tf.strokeColor = t
					}), r(0, s, "textField", function () {
						return this._tf
					}), r(0, s, "measureWidth", function () {
						return this._tf.width
					}), r(0, s, "measureHeight", function () {
						return this._tf.height
					}), r(0, s, "width", function () {
						return this._width || this._tf.text ? i.superGet(At, this, "width") : 0
					}, function (t) {
						i.superSet(At, this, "width", t), this._tf.width = t
					}), r(0, s, "height", function () {
						return this._height || this._tf.text ? i.superGet(At, this, "height") : 0
					}, function (t) {
						i.superSet(At, this, "height", t), this._tf.height = t
					}), r(0, s, "overflow", function () {
						return this._tf.overflow
					}, function (t) {
						this._tf.overflow = t
					}), r(0, s, "underline", function () {
						return this._tf.underline
					}, function (t) {
						this._tf.underline = t
					}), r(0, s, "underlineColor", function () {
						return this._tf.underlineColor
					}, function (t) {
						this._tf.underlineColor = t
					}), e
				}(At),
				$t = function (t) {
					function e(t) {
						this.changeHandler = null, this._bg = null, this._bar = null, this._skin = null, this._value = .5, e.__super.call(this), this.skin = t
					}
					n(e, "laya.ui.ProgressBar", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bg && this._bg.destroy(e), this._bar && this._bar.destroy(e), this._bg = this._bar = null, this.changeHandler = null
					}, s.createChildren = function () {
						this.addChild(this._bg = new Ut), this.addChild(this._bar = new Ut), this._bar._bitmap.autoCacheCmd = !1
					}, s.changeValue = function () {
						if (this.sizeGrid) {
							var t = this.sizeGrid.split(","),
								e = Number(t[3]),
								i = Number(t[1]),
								s = (this.width - e - i) * this._value;
							this._bar.width = e + i + s, this._bar.visible = this._bar.width > e + i
						} else this._bar.width = this.width * this._value
					}, r(0, s, "measureHeight", function () {
						return this._bg.height
					}), r(0, s, "skin", function () {
						return this._skin
					}, function (t) {
						this._skin != t && (this._skin = t, this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"), this.callLater(this.changeValue))
					}), r(0, s, "measureWidth", function () {
						return this._bg.width
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(At, this, "height", t), this._bg.height = this._height, this._bar.height = this._height
					}), r(0, s, "bar", function () {
						return this._bar
					}), r(0, s, "value", function () {
						return this._value
					}, function (t) {
						this._value != t && (t = t > 1 ? 1 : t < 0 ? 0 : t, this._value = t, this.callLater(this.changeValue), this.event("change"), this.changeHandler && this.changeHandler.runWith(t))
					}), r(0, s, "bg", function () {
						return this._bg
					}), r(0, s, "sizeGrid", function () {
						return this._bg.sizeGrid
					}, function (t) {
						this._bg.sizeGrid = this._bar.sizeGrid = t
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(At, this, "width", t), this._bg.width = this._width, this.callLater(this.changeValue)
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : i.superSet(At, this, "dataSource", t)
					}), e
				}(At),
				jt = function (t) {
					function e() {
						this._focus = !1, this._multiline = !1, this._editable = !0, this._restrictPattern = null, this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", this._content = "", e.__super.call(this), this._maxChars = 1e5, this._width = 100, this._height = 20, this.multiline = !1, this.overflow = Rt.SCROLL, this.on("mousedown", this, this._onMouseDown), this.on("undisplay", this, this._onUnDisplay)
					}
					n(e, "laya.display.Input", t);
					var o = e.prototype;
					return o.setSelection = function (t, e) {
						this.focus = !0, laya.display.Input.inputElement.selectionStart = t, laya.display.Input.inputElement.selectionEnd = e
					}, o._onUnDisplay = function (t) {
						this.focus = !1
					}, o._onMouseDown = function (t) {
						this.focus = !0
					}, o._syncInputTransform = function () {
						var t = this.nativeInput,
							s = tt.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]),
							n = this._width - this.padding[1] - this.padding[3],
							r = this._height - this.padding[0] - this.padding[2];
						B.isConchApp ? (t.setScale(s.scaleX, s.scaleY), t.setSize(n, r), t.setPos(s.x, s.y)) : (e.inputContainer.style.transform = e.inputContainer.style.webkitTransform = "scale(" + s.scaleX + "," + s.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", t.style.width = n + "px", t.style.height = r + "px", e.inputContainer.style.left = s.x + "px", e.inputContainer.style.top = s.y + "px")
					}, o.select = function () {
						this.nativeInput.select()
					}, o._setInputMethod = function () {
						e.input.parentElement && e.inputContainer.removeChild(e.input), e.area.parentElement && e.inputContainer.removeChild(e.area), e.inputElement = this._multiline ? e.area : e.input, e.inputContainer.appendChild(e.inputElement), Rt.RightToLeft && (e.inputElement.style.direction = "rtl")
					}, o._focusIn = function () {
						laya.display.Input.isInputting = !0;
						var t = this.nativeInput;
						this._focus = !0;
						var e = t.style;
						e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, B.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), t.maxLength = this._maxChars;
						this.padding;
						if (t.type = this._type, t.value = this._content, t.placeholder = this._prompt, i.stage.off("keydown", this, this._onKeyDown), i.stage.on("keydown", this, this._onKeyDown), i.stage.focus = this, this.event("focus"), H.onPC && t.focus(), !H.onMiniGame) {
							this._text;
							this._text = null
						}
						this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(H.onIPhone ? Rt._fontFamilyMap[this.font] || this.font : this.font), B.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !B.isConchApp && H.onPC && i.timer.frameLoop(1, this, this._syncInputTransform)
					}, o._setPromptColor = function () {
						(e.promptStyleDOM = H.getElementById("promptStyle")) || ((e.promptStyleDOM = H.createElement("style")).setAttribute("id", "promptStyle"), H.document.head.appendChild(e.promptStyleDOM)), e.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}"
					}, o._focusOut = function () {
						laya.display.Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, this._content ? (i.superSet(Rt, this, "text", this._content), i.superSet(Rt, this, "color", this._originColor)) : (i.superSet(Rt, this, "text", this._prompt), i.superSet(Rt, this, "color", this._promptColor)), i.stage.off("keydown", this, this._onKeyDown), i.stage.focus = null, this.event("blur"), B.isConchApp && this.nativeInput.blur(), H.onPC && i.timer.clear(this, this._syncInputTransform)
					}, o._onKeyDown = function (t) {
						13 === t.keyCode && (H.onMobile && !this._multiline && (this.focus = !1), this.event("enter"))
					}, o.changeText = function (e) {
						this._content = e, this._focus ? (this.nativeInput.value = e || "", this.event("change")) : t.prototype.changeText.call(this, e)
					}, r(0, o, "color", t.prototype._$get_color, function (t) {
						this._focus && this.nativeInput.setColor(t), i.superSet(Rt, this, "color", this._content ? t : this._promptColor), this._originColor = t
					}), r(0, o, "inputElementYAdjuster", function () {
						return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。"), 0
					}, function (t) {
						console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。")
					}), r(0, o, "multiline", function () {
						return this._multiline
					}, function (t) {
						this._multiline = t, this.valign = t ? "top" : "middle"
					}), r(0, o, "maxChars", function () {
						return this._maxChars
					}, function (t) {
						t <= 0 && (t = 1e5), this._maxChars = t
					}), r(0, o, "text", function () {
						return this._focus ? this.nativeInput.value : this._content || ""
					}, function (t) {
						i.superSet(Rt, this, "color", this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")), this._content = t, t ? i.superSet(Rt, this, "text", t) : (i.superSet(Rt, this, "text", this._prompt), i.superSet(Rt, this, "color", this.promptColor)))
					}), r(0, o, "nativeInput", function () {
						return this._multiline ? e.area : e.input
					}), r(0, o, "prompt", function () {
						return this._prompt
					}, function (t) {
						!this._text && t && i.superSet(Rt, this, "color", this._promptColor), this.promptColor = this._promptColor, this._text ? i.superSet(Rt, this, "text", this._text == this._prompt ? t : this._text) : i.superSet(Rt, this, "text", t), this._prompt = Rt.langPacks && Rt.langPacks[t] ? Rt.langPacks[t] : t
					}), r(0, o, "focus", function () {
						return this._focus
					}, function (t) {
						var i = this.nativeInput;
						this._focus !== t && (t ? (i.target ? i.target._focusOut() : this._setInputMethod(), i.target = this, this._focusIn()) : (i.target = null, this._focusOut(), H.document.body.scrollTop = 0, i.blur(), B.isConchApp ? i.setPos(-1e4, -1e4) : e.inputContainer.contains(i) && e.inputContainer.removeChild(i)))
					}), r(0, o, "restrict", function () {
						return this._restrictPattern ? this._restrictPattern.source : ""
					}, function (t) {
						t ? ((t = "[^" + t + "]").indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null
					}), r(0, o, "editable", function () {
						return this._editable
					}, function (t) {
						this._editable = t, B.isConchApp && e.input.setForbidEdit(!t)
					}), r(0, o, "promptColor", function () {
						return this._promptColor
					}, function (t) {
						this._promptColor = t, this._content || i.superSet(Rt, this, "color", t)
					}), r(0, o, "type", function () {
						return this._type
					}, function (t) {
						this._getCSSStyle().password = "password" == t, this._type = t, B.isConchApp && this.nativeInput.setType(t)
					}), r(0, o, "inputElementXAdjuster", function () {
						return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。"), 0
					}, function (t) {
						console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。")
					}), r(0, o, "asPassword", function () {
						return this._getCSSStyle().password
					}, function (t) {
						this._getCSSStyle().password = t, this._type = "password", console.warn('deprecated: 使用type="password"替代设置asPassword, asPassword将在下次重大更新时删去'), this.isChanged = !0
					}), e.__init__ = function () {
						e._createInputElement(), H.onMobile && B.canvas.addEventListener(e.IOS_IFRAME ? H.onMiniGame ? "touchend" : "click" : "touchend", e._popupInputMethod)
					}, e._popupInputMethod = function (t) {
						if (laya.display.Input.isInputting) {
							laya.display.Input.inputElement.focus()
						}
					}, e._createInputElement = function () {
						e._initInput(e.area = H.createElement("textarea")), e._initInput(e.input = H.createElement("input")), (e.inputContainer = H.createElement("div")).style.position = "absolute", e.inputContainer.style.zIndex = 1e5, H.container.appendChild(e.inputContainer), e.inputContainer.setPos = function (t, i) {
							e.inputContainer.style.left = t + "px", e.inputContainer.style.top = i + "px"
						}
					}, e._initInput = function (t) {
						var i = t.style;
						i.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", i.resize = "none", i.backgroundColor = "transparent", i.border = "none", i.outline = "none", i.zIndex = 1, t.addEventListener("input", e._processInputting), t.addEventListener("mousemove", e._stopEvent), t.addEventListener("mousedown", e._stopEvent), t.addEventListener("touchmove", e._stopEvent), t.setFontFace = function (e) {
							t.style.fontFamily = e
						}, B.isConchApp || (t.setColor = function (e) {
							t.style.color = e
						}, t.setFontSize = function (e) {
							t.style.fontSize = e + "px"
						})
					}, e._processInputting = function (t) {
						var e = laya.display.Input.inputElement.target;
						if (e) {
							var i = laya.display.Input.inputElement.value;
							e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""), laya.display.Input.inputElement.value = i)), e._text = i, e.event("input")
						}
					}, e._stopEvent = function (t) {
						"touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation()
					}, e.TYPE_TEXT = "text", e.TYPE_PASSWORD = "password", e.TYPE_EMAIL = "email", e.TYPE_URL = "url", e.TYPE_NUMBER = "number", e.TYPE_RANGE = "range", e.TYPE_DATE = "date", e.TYPE_MONTH = "month", e.TYPE_WEEK = "week", e.TYPE_TIME = "time", e.TYPE_DATE_TIME = "datetime", e.TYPE_DATE_TIME_LOCAL = "datetime-local", e.TYPE_SEARCH = "search", e.input = null, e.area = null, e.inputElement = null, e.inputContainer = null, e.confirmButton = null, e.promptStyleDOM = null, e.inputHeight = 45, e.isInputting = !1, e.stageMatrix = null, s(e, ["IOS_IFRAME", function () {
						return this.IOS_IFRAME = H.onIOS && H.window.top != H.window.self
					}]), e
				}(Rt),
				Kt = function (t) {
					function e() {
						this._frames = null, this._url = null, e.__super.call(this), this._setControlNode(this)
					}
					n(e, "laya.display.Animation", t);
					var s = e.prototype;
					return s.destroy = function (t) {
						void 0 === t && (t = !0), this.stop(), laya.display.Sprite.prototype.destroy.call(this, t), this._frames = null, this._labels = null
					}, s.play = function (t, e, i, s) {
						void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === s && (s = !0), i && this._setFramesFromCache(i, s), this._isPlaying = !0, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.loop = e, this._actionName = i, this._isReverse = 1 == this.wrapMode, this._frames && this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
					}, s._setFramesFromCache = function (t, i) {
						if (void 0 === i && (i = !1), this._url && (t = this._url + "#" + t), t && e.framesMap[t]) {
							var s;
							return (s = e.framesMap[t]) instanceof Array ? (this._frames = e.framesMap[t], this._count = this._frames.length) : (s.nodeRoot && (e.framesMap[t] = this._parseGraphicAnimationByData(s), s = e.framesMap[t]), this._frames = s.frames, this._count = this._frames.length, this._frameRateChanged || (this._interval = s.interval), this._labels = this._copyLabels(s.labels)), !0
						}
						return i && console.log("ani not found:", t), !1
					}, s._copyLabels = function (t) {
						if (!t) return null;
						var e;
						e = {};
						var i;
						for (i in t) e[i] = tt.copyArray([], t[i]);
						return e
					}, s._frameLoop = function () {
						this._style.visible && this._style.alpha > .01 && t.prototype._frameLoop.call(this)
					}, s._displayToIndex = function (t) {
						this._frames && (this.graphics = this._frames[t])
					}, s.clear = function () {
						this.stop(), this.graphics = null, this._frames = null, this._labels = null
					}, s.loadImages = function (t, i) {
						return void 0 === i && (i = ""), this._url = "", this._setFramesFromCache(i) || (this.frames = e.framesMap[i] ? e.framesMap[i] : e.createFrames(t, i)), this
					}, s.loadAtlas = function (t, s, n) {
						function r(i) {
							t === i && (o.frames = e.framesMap[n] ? e.framesMap[n] : e.createFrames(t, n), s && s.run())
						}
						void 0 === n && (n = ""), this._url = "";
						var o = this;
						return o._setFramesFromCache(n) || (xt.getAtlas(t) ? r(t) : i.loader.load(t, l.create(null, r, [t]), null, "atlas")), this
					}, s.loadAnimation = function (t, e, s) {
						this._url = t;
						return this._actionName || (this._actionName = ""), this._setFramesFromCache("") ? (this._setFramesFromCache(this._actionName, !0), this.index = 0, e && e.run()) : !s || xt.getAtlas(s) ? this._loadAnimationData(t, e, s) : i.loader.load(s, l.create(this, this._loadAnimationData, [t, e, s]), null, "atlas"), this
					}, s._loadAnimationData = function (t, s, n) {
						function r(i) {
							if (xt.getRes(i) && t === i) {
								var n;
								if (e.framesMap[t + "#"]) a._setFramesFromCache(o._actionName, !0), o.index = 0, o._checkResumePlaying();
								else {
									var r = a._parseGraphicAnimation(xt.getRes(t));
									if (!r) return;
									var h, l = r.animationList,
										c = 0,
										u = l.length;
									for (c = 0; c < u; c++) n = l[c], e.framesMap[t + "#" + n.name] = n, h || (h = n);
									h && (e.framesMap[t + "#"] = h, a._setFramesFromCache(o._actionName, !0), o.index = 0), o._checkResumePlaying()
								}
								s && s.run()
							}
						}
						var o = this;
						if (!n || xt.getAtlas(n)) {
							var a = this;
							xt.getRes(t) ? r(t) : i.loader.load(t, l.create(null, r, [t]), null, "json"), xt.clearRes(t)
						} else console.warn("atlas load fail:" + n)
					}, s._parseGraphicAnimation = function (t) {
						return de.parseAnimationData(t)
					}, s._parseGraphicAnimationByData = function (t) {
						return de.parseAnimationByData(t)
					}, r(0, s, "frames", function () {
						return this._frames
					}, function (t) {
						this._frames = t, t && (this._count = t.length, this._isPlaying ? this.play(this._index, this.loop, this._actionName) : this.index = this._index)
					}), r(0, s, "autoPlay", null, function (t) {
						t ? this.play() : this.stop()
					}), r(0, s, "source", null, function (t) {
						t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","))
					}), r(0, s, "autoAnimation", null, function (t) {
						this.play(0, !0, t, !1)
					}), e.createFrames = function (t, i) {
						var s, n, r = 0,
							a = 0;
						if ("string" == typeof t) {
							var h = xt.getAtlas(t);
							if (h && h.length)
								for (s = [], r = 0, a = h.length; r < a; r++)(n = new o.createGraphics).drawTexture(xt.getRes(h[r]), 0, 0), s.push(n)
						} else if (t instanceof Array)
							for (s = [], r = 0, a = t.length; r < a; r++)(n = new o.createGraphics).loadImage(t[r], 0, 0), s.push(n);
						return i && (e.framesMap[i] = s), s
					}, e.clearCache = function (t) {
						var i, s = e.framesMap,
							n = t + "#";
						for (i in s) i !== t && 0 != i.indexOf(n) || delete e.framesMap[i]
					}, e.framesMap = {}, e
				}(Bt),
				qt = function (t) {
					function e() {
						this._targetDic = null, this._animationData = null, this._animationNewFrames = null, e.__super.call(this), null == e._sortIndexFun && (e._sortIndexFun = M.sortByKey("index", !1, !0))
					}
					n(e, "laya.display.FrameAnimation", t);
					var i = e.prototype;
					return i._setUp = function (t, e) {
						this._labels = null, this._animationNewFrames = null, this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, e.parsed ? (this._count = e.count, this._labels = e.labels, this._animationNewFrames = e.animationNewFrames) : (this._animationNewFrames = [], this._calculateDatas()), e.parsed = !0, e.labels = this._labels, e.count = this._count, e.animationNewFrames = this._animationNewFrames
					}, i.clear = function () {
						t.prototype.clear.call(this), this._targetDic = null, this._animationData = null
					}, i._displayToIndex = function (t) {
						if (this._animationData) {
							t < 0 && (t = 0), t > this._count && (t = this._count);
							var e = this._animationData.nodes,
								i = 0,
								s = e.length;
							for (i = 0; i < s; i++) this._displayNodeToFrame(e[i], t)
						}
					}, i._displayNodeToFrame = function (t, e, i) {
						i || (i = this._targetDic);
						var s = i[t.target];
						if (s) {
							var n, r, o, a = t.frames,
								h = t.keys,
								l = 0,
								c = h.length;
							for (l = 0; l < c; l++) o = (r = a[n = h[l]]).length > e ? r[e] : r[r.length - 1], s[n] = o
						}
					}, i._calculateDatas = function () {
						if (this._animationData) {
							var t, e = this._animationData.nodes,
								i = 0,
								s = e.length;
							for (this._count = 0, i = 0; i < s; i++) t = e[i], this._calculateNodeKeyFrames(t);
							this._count += 1
						}
					}, i._calculateNodeKeyFrames = function (t) {
						var i, s, n = t.keyframes,
							r = t.target;
						t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], t.initValues || (t.initValues = {});
						for (i in n) s = n[i], t.frames[i] || (t.frames[i] = []), this._targetDic && this._targetDic[r] && (t.initValues[i] = this._targetDic[r][i]), s.sort(e._sortIndexFun), t.keys.push(i), this._calculateNodePropFrames(s, t.frames[i], i, r)
					}, i.resetToInitState = function () {
						if (this._targetDic && this._animationData) {
							var t, e, i = this._animationData.nodes,
								s = 0,
								n = i.length;
							for (s = 0; s < n; s++)
								if (t = i[s], e = t.initValues) {
									var r = this._targetDic[t.target];
									if (r) {
										var o;
										for (o in e) r[o] = e[o]
									}
								}
						}
					}, i._calculateNodePropFrames = function (t, e, i, s) {
						var n = 0,
							r = t.length - 1;
						for (e.length = t[r].index + 1, n = 0; n < r; n++) this._dealKeyFrame(t[n]), this._calculateFrameValues(t[n], t[n + 1], e);
						0 == r && (e[t[0].index] = t[0].value, this._animationNewFrames && (this._animationNewFrames[t[0].index] = !0)), this._dealKeyFrame(t[n])
					}, i._dealKeyFrame = function (t) {
						t.label && "" != t.label && this.addLabel(t.label, t.index)
					}, i._calculateFrameValues = function (t, e, i) {
						var s, n = 0,
							r = t.index,
							o = e.index,
							a = t.value,
							h = e.value - t.value,
							l = o - r;
						if (o > this._count && (this._count = o), t.tween)
							for (null == (s = j[t.tweenMethod]) && (s = j.linearNone), n = r; n < o; n++) i[n] = s(n - r, a, h, l), this._animationNewFrames && (this._animationNewFrames[n] = !0);
						else
							for (n = r; n < o; n++) i[n] = a;
						this._animationNewFrames && (this._animationNewFrames[t.index] = !0, this._animationNewFrames[e.index] = !0), i[e.index] = e.value
					}, e._sortIndexFun = null, e
				}(Bt),
				Zt = function (t) {
					function e(t, i) {
						this._recreateLock = !1, this._needReleaseAgain = !1, this._enableMerageInAtlas = !0, e.__super.call(this), this._init_(t, i)
					}
					n(e, "laya.resource.HTMLImage", Ot);
					var i = e.prototype;
					return i._init_ = function (t, e) {
						this._src = t, this._source = new H.window.Image, e && (e.onload && (this.onload = e.onload), e.onerror && (this.onerror = e.onerror), e.onCreate && e.onCreate(this)), 0 != t.indexOf("data:image") && (this._source.crossOrigin = ""), t && (this._source.src = t)
					}, i.recreateResource = function () {
						var t = this;
						if ("" === this._src) throw new Error("src no null！");
						if (this._needReleaseAgain = !1, this._source) {
							if (this._recreateLock) return;
							this.memorySize = this._w * this._h * 4, this._recreateLock = !1, this.completeCreate()
						} else {
							this._recreateLock = !0;
							var e = this;
							this._source = new H.window.Image, this._source.crossOrigin = "", this._source.onload = function () {
								if (e._needReleaseAgain) return e._needReleaseAgain = !1, e._source.onload = null, void(e._source = null);
								e._source.onload = null, e.memorySize = t._w * t._h * 4, e._recreateLock = !1, e.completeCreate()
							}, this._source.src = this._src
						}
					}, i.disposeResource = function () {
						this._recreateLock && (this._needReleaseAgain = !0), this._source && (this._source = null, this.memorySize = 0)
					}, i.onresize = function () {
						this._w = this._source.width, this._h = this._source.height
					}, r(0, i, "onload", null, function (t) {
						var e = this;
						this._onload = t, this._source && (this._source.onload = null != this._onload ? function () {
							e.onresize(), e._onload()
						} : null)
					}), r(0, i, "onerror", null, function (t) {
						var e = this;
						this._onerror = t, this._source && (this._source.onerror = null != this._onerror ? function () {
							e._onerror()
						} : null)
					}), r(0, i, "enableMerageInAtlas", function () {
						return this._enableMerageInAtlas
					}, function (t) {
						this._enableMerageInAtlas = t, B.isConchApp && this._source && (this._source.enableMerageInAtlas = t)
					}), e.create = function (t, i) {
						return new e(t, i)
					}, e
				}(),
				Jt = function (t) {
					function e() {
						this._idMap = null, this._aniList = null, this._watchMap = {}, e.__super.call(this)
					}
					var r;
					n(e, "laya.ui.View", Dt);
					var o = e.prototype;
					return o.createView = function (t) {
						if (t.animations && !this._idMap && (this._idMap = {}), e.createComp(t, this, this), t.animations) {
							var i, s, n = [],
								r = t.animations,
								o = 0,
								a = r.length;
							for (o = 0; o < a; o++) {
								switch (i = new qt, s = r[o], i._setUp(this._idMap, s), this[s.name] = i, i._setControlNode(this), s.action) {
									case 1:
										i.play(0, !1);
										break;
									case 2:
										i.play(0, !0)
								}
								n.push(i)
							}
							this._aniList = n
						}
						this._width > 0 && null == t.props.hitTestPrior && !this.mouseThrough && (this.hitTestPrior = !0)
					}, o.onEvent = function (t, e) {}, o.loadUI = function (t) {
						var i = e.uiMap[t];
						i && this.createView(i)
					}, o.destroy = function (t) {
						void 0 === t && (t = !0), this._aniList && (this._aniList.length = 0), this._idMap = null, this._aniList = null, this._watchMap = null, laya.ui.Component.prototype.destroy.call(this, t)
					}, o.changeData = function (t) {
						var e = this._watchMap[t];
						if (e) {
							console.log("change", t);
							for (var i = 0, s = e.length; i < s; i++) {
								e[i].exe(this)
							}
						}
					}, e._regs = function () {
						for (var t in e.uiClassMap) X.regClass(t, e.uiClassMap[t])
					}, e.createComp = function (t, s, n, r) {
						if (!(s = s || e.getCompInstance(t))) return console.warn("can not create:" + t.type), null;
						var o = t.child;
						if (o)
							for (var a = s instanceof laya.ui.List, h = 0, l = o.length; h < l; h++) {
								var c = o[h];
								if (!s.hasOwnProperty("itemRender") || "render" != c.props.name && "render" !== c.props.renderType)
									if ("Graphic" == c.type) X.addGraphicsToSprite(c, s);
									else if (X.isDrawType(c.type)) X.addGraphicToSprite(c, s, !0);
								else {
									if (a) {
										var u = [],
											_ = e.createComp(c, null, n, u);
										u.length && (_._$bindData = u)
									} else _ = e.createComp(c, null, n, r);
									"Script" == c.type ? "owner" in _ ? _.owner = s : "target" in _ && (_.target = s) : "mask" == c.props.renderType || "mask" == c.props.name ? s.mask = _ : _ instanceof laya.display.Sprite && s.addChild(_)
								} else s.itemRender = c
							}
						var d = t.props;
						for (var f in d) {
							var p = d[f];
							e.eventDic[f] ? p && n && s.on(f, n, n.onEvent, [p]) : e.setCompValue(s, f, p, n, r)
						}
						return i.__typeof(s, "laya.ui.IItem") && s.initItems(), t.compId && n && n._idMap && (n._idMap[t.compId] = s), s
					}, e.setCompValue = function (t, s, n, o, a) {
						if ("string" == typeof n && n.indexOf("${") > -1) {
							if (e._sheet || (e._sheet = X.getClass("laya.data.Table")), !e._sheet) return void console.warn("Can not find class Sheet");
							if (a) a.push(t, s, n);
							else if (o) {
								-1 == n.indexOf("].") && (n = n.replace(".", "[0]."));
								var h = new r(t, s, n);
								h.exe(o);
								for (var l, c, u = n.replace(/\[.*?\]\./g, "."); null != (l = e._parseWatchData.exec(u));) {
									for (var _ = l[1]; null != (c = e._parseKeyWord.exec(_));) {
										var d = c[0],
											f = o._watchMap[d] || (o._watchMap[d] = []);
										f.push(h), e._sheet.I.notifer.on(d, o, o.changeData, [d])
									}(f = o._watchMap[_] || (o._watchMap[_] = [])).push(h), e._sheet.I.notifer.on(_, o, o.changeData, [_])
								}
							}
						} else if ("var" === s && o) o[n] = t;
						else if ("onClick" == s) {
							var p = i._runScript("(function(){" + n + "})");
							t.on("click", o, p)
						} else t[s] = "true" === n || "false" !== n && n
					}, e.getCompInstance = function (t) {
						var s, n = t.props ? t.props.runtime : null;
						return s = n ? e.viewClassMap[n] || e.uiClassMap[n] || i.__classmap[n] : e.uiClassMap[t.type], t.props && t.props.hasOwnProperty("renderType") && "instance" == t.props.renderType ? s.instance : s ? new s : null
					}, e.regComponent = function (t, i) {
						e.uiClassMap[t] = i, X.regClass(t, i)
					}, e.regViewRuntime = function (t, i) {
						e.viewClassMap[t] = i
					}, e.uiMap = {}, e.viewClassMap = {}, e._sheet = null, s(e, ["uiClassMap", function () {
						return this.uiClassMap = {
							ViewStack: ne,
							LinkButton: zt,
							TextArea: ye,
							ColorPicker: Yt,
							Box: Dt,
							Button: zt,
							CheckBox: re,
							Clip: Wt,
							ComboBox: Ht,
							Component: At,
							HScrollBar: he,
							HSlider: le,
							Image: Ut,
							Label: Vt,
							List: Qt,
							Panel: ie,
							ProgressBar: $t,
							Radio: oe,
							RadioGroup: me,
							ScrollBar: Gt,
							Slider: Xt,
							Tab: ve,
							TextInput: _e,
							View: e,
							VScrollBar: ce,
							VSlider: ue,
							Tree: te,
							HBox: pe,
							VBox: ge,
							Sprite: It,
							Animation: Kt,
							Text: Rt,
							FontClip: ae
						}
					}, "eventDic", function () {
						return this.eventDic = {
							mousedown: !0,
							mouseup: !0,
							mousemove: !0,
							mouseover: !0,
							mouseout: !0,
							click: !0,
							doubleclick: !0,
							rightmousedown: !0,
							rightmouseup: !0,
							rightclick: !0
						}
					}, "_parseWatchData", function () {
						return this._parseWatchData = /\${(.*?)}/g
					}, "_parseKeyWord", function () {
						return this._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g
					}]), e.__init$ = function () {
						e._regs(), r = function () {
							function t(t, e, i) {
								this.comp = null, this.prop = null, this.value = null, this.comp = t, this.prop = e, this.value = i
							}
							n(t, "");
							return t.prototype.exe = function (t) {
								var e = Y.getBindFun(this.value);
								this.comp[this.prop] = e.call(this, t)
							}, t
						}()
					}, e
				}(),
				Qt = function (t) {
					function e() {
						this.selectHandler = null, this.renderHandler = null, this.mouseHandler = null, this.selectEnable = !1, this.totalPage = 0, this._content = null, this._scrollBar = null, this._itemRender = null, this._repeatX = 0, this._repeatY = 0, this._repeatX2 = 0, this._repeatY2 = 0, this._spaceX = 0, this._spaceY = 0, this._array = null, this._startIndex = 0, this._selectedIndex = -1, this._page = 0, this._isVertical = !0, this._cellSize = 20, this._cellOffset = 0, this._isMoved = !1, this.cacheContent = !1, this._createdLine = 0, this._cellChanged = !1, this._cells = [], this._offset = new P, e.__super.call(this)
					}
					n(e, "laya.ui.List", t);
					var s = e.prototype;
					return i.imps(s, {
						"laya.ui.IRender": !0,
						"laya.ui.IItem": !0
					}), s.destroy = function (t) {
						void 0 === t && (t = !0), this._content && this._content.destroy(t), this._scrollBar && this._scrollBar.destroy(t), laya.ui.Component.prototype.destroy.call(this, t), this._content = null, this._scrollBar = null, this._itemRender = null, this._cells = null, this._array = null, this.selectHandler = this.renderHandler = this.mouseHandler = null
					}, s.createChildren = function () {
						this.addChild(this._content = new Dt)
					}, s.onScrollStart = function () {
						this._$P.cacheAs || (this._$P.cacheAs = i.superGet(Dt, this, "cacheAs")), i.superSet(Dt, this, "cacheAs", "none"), this._scrollBar.once("end", this, this.onScrollEnd)
					}, s.onScrollEnd = function () {
						i.superSet(Dt, this, "cacheAs", this._$P.cacheAs)
					}, s._removePreScrollBar = function () {
						var t = this.removeChildByName("scrollBar");
						t && t.destroy(!0)
					}, s.changeCells = function () {
						if (this._cellChanged = !1, this._itemRender) {
							this.scrollBar = this.getChildByName("scrollBar");
							var t = this._getOneCell(),
								e = t.width + this._spaceX || 1,
								i = t.height + this._spaceY || 1;
							this._width > 0 && (this._repeatX2 = this._isVertical ? Math.round(this._width / e) : Math.ceil(this._width / e)), this._height > 0 && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / i) : Math.round(this._height / i));
							var s = this._width ? this._width : e * this.repeatX - this._spaceX,
								n = this._height ? this._height : i * this.repeatY - this._spaceY;
							this._cellSize = this._isVertical ? i : e, this._cellOffset = this._isVertical ? i * Math.max(this._repeatY2, this._repeatY) - n - this._spaceY : e * Math.max(this._repeatX2, this._repeatX) - s - this._spaceX, this._isVertical && this._scrollBar ? this._scrollBar.height = n : !this._isVertical && this._scrollBar && (this._scrollBar.width = s), this.setContentSize(s, n);
							var r = this._isVertical ? this.repeatX : this.repeatY,
								o = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
							this._createItems(0, r, o), this._createdLine = o, this._array && (this.array = this._array, this.runCallLater(this.renderItems))
						}
					}, s._getOneCell = function () {
						if (0 === this._cells.length) {
							var t = this.createItem();
							if (this._offset.setTo(t.x, t.y), this.cacheContent) return t;
							this._cells.push(t)
						}
						return this._cells[0]
					}, s._createItems = function (t, e, i) {
						var s = this._content,
							n = this._getOneCell(),
							r = n.width + this._spaceX,
							o = n.height + this._spaceY;
						if (this.cacheContent) {
							var a = new Dt;
							a.cacheAsBitmap = !0, a.pos((this._isVertical ? 0 : t) * r, (this._isVertical ? t : 0) * o), this._content.addChild(a), this._content.optimizeScrollRect = !0, s = a
						} else {
							for (var h = [], l = this._cells.length - 1; l > -1; l--) {
								var c = this._cells[l];
								c.removeSelf(), h.push(c)
							}
							this._cells.length = 0
						}
						for (var u = t; u < i; u++)
							for (var _ = 0; _ < e; _++)(n = h && h.length ? h.pop() : this.createItem()).x = (this._isVertical ? _ : u) * r - s.x, n.y = (this._isVertical ? u : _) * o - s.y, n.name = "item" + (u * e + _), s.addChild(n), this.addCell(n)
					}, s.createItem = function () {
						var t = [];
						if ("function" == typeof this._itemRender) var e = new this._itemRender;
						else e = Jt.createComp(this._itemRender, null, null, t);
						if (0 == t.length && e._watchMap) {
							var i = e._watchMap;
							for (var s in i)
								for (var n = i[s], r = 0; r < n.length; r++) {
									var o = n[r];
									t.push(o.comp, o.prop, o.value)
								}
						}
						return t.length && (e._$bindData = t), e
					}, s.addCell = function (t) {
						t.on("click", this, this.onCellMouse), t.on("rightclick", this, this.onCellMouse), t.on("mouseover", this, this.onCellMouse), t.on("mouseout", this, this.onCellMouse), t.on("mousedown", this, this.onCellMouse), t.on("mouseup", this, this.onCellMouse), this._cells.push(t)
					}, s.initItems = function () {
						if (!this._itemRender && null != this.getChildByName("item0")) {
							this.repeatX = 1;
							var t = 0;
							t = 0;
							for (var e = 0; e < 1e4; e++) {
								var i = this.getChildByName("item" + e); {
									if (!i) break;
									this.addCell(i), t++
								}
							}
							this.repeatY = t
						}
					}, s.setContentSize = function (t, e) {
						this._content.width = t, this._content.height = e, (this._scrollBar || 0 != this._offset.x || 0 != this._offset.y) && (this._content.scrollRect || (this._content.scrollRect = new L), this._content.scrollRect.setTo(-this._offset.x, -this._offset.y, t, e), this._content.scrollRect = this._content.scrollRect), this.event("resize")
					}, s.onCellMouse = function (t) {
						"mousedown" === t.type && (this._isMoved = !1);
						var e = t.currentTarget,
							i = this._startIndex + this._cells.indexOf(e);
						i < 0 || ("click" === t.type || "rightclick" === t.type ? this.selectEnable && !this._isMoved ? this.selectedIndex = i : this.changeCellState(e, !0, 0) : "mouseover" !== t.type && "mouseout" !== t.type || this._selectedIndex === i || this.changeCellState(e, "mouseover" === t.type, 0), this.mouseHandler && this.mouseHandler.runWith([t, i]))
					}, s.changeCellState = function (t, e, i) {
						var s = t.getChildByName("selectBox");
						s && (this.selectEnable = !0, s.visible = e, s.index = i)
					}, s.changeSize = function () {
						laya.ui.Component.prototype.changeSize.call(this), this.setContentSize(this.width, this.height), this._scrollBar && this.callLater(this.onScrollBarChange)
					}, s.onScrollBarChange = function (t) {
						this.runCallLater(this.changeCells);
						var e = this._scrollBar.value,
							i = this._isVertical ? this.repeatX : this.repeatY,
							s = this._isVertical ? this.repeatY : this.repeatX,
							n = Math.floor(e / this._cellSize);
						if (this.cacheContent) o = s + 1, this._createdLine - n < o && (this._createItems(this._createdLine, i, this._createdLine + o), this.renderItems(this._createdLine * i, 0), this._createdLine += o);
						else {
							var r = n * i,
								o = 0;
							if (r > this._startIndex) {
								o = r - this._startIndex;
								var a = !0,
									h = this._startIndex + i * (s + 1);
								this._isMoved = !0
							} else r < this._startIndex && (o = this._startIndex - r, a = !1, h = this._startIndex - 1, this._isMoved = !0);
							for (var l = 0; l < o; l++) {
								if (a) {
									var c = this._cells.shift();
									this._cells[this._cells.length] = c;
									var u = h + l
								} else c = this._cells.pop(), this._cells.unshift(c), u = h - l;
								var _ = Math.floor(u / i) * this._cellSize;
								this._isVertical ? c.y = _ : c.x = _, this.renderItem(c, u)
							}
							this._startIndex = r, this.changeSelectStatus()
						}
						var d = this._content.scrollRect;
						this._isVertical ? (d.y = e - this._offset.y, d.x = -this._offset.x) : (d.y = -this._offset.y, d.x = e - this._offset.x), this._content.scrollRect = d
					}, s.posCell = function (t, e) {
						if (this._scrollBar) {
							var i = this._isVertical ? this.repeatX : this.repeatY,
								s = (this._isVertical ? this.repeatY : this.repeatX, Math.floor(e / i) * this._cellSize);
							this._isVertical ? t.y = s : t.x = s
						}
					}, s.changeSelectStatus = function () {
						for (var t = 0, e = this._cells.length; t < e; t++) this.changeCellState(this._cells[t], this._selectedIndex === this._startIndex + t, 1)
					}, s.renderItems = function (t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = 0);
						for (var i = t, s = e || this._cells.length; i < s; i++) this.renderItem(this._cells[i], this._startIndex + i);
						this.changeSelectStatus()
					}, s.renderItem = function (t, e) {
						this._array && e >= 0 && e < this._array.length ? (t.visible = !0, t._$bindData ? (t._dataSource = this._array[e], this._bindData(t, this._array[e])) : t.dataSource = this._array[e], this.cacheContent || this.posCell(t, e), this.hasListener("render") && this.event("render", [t, e]), this.renderHandler && this.renderHandler.runWith([t, e])) : (t.visible = !1, t.dataSource = null)
					}, s._bindData = function (t, e) {
						for (var i = t._$bindData, s = 0, n = i.length; s < n; s++) {
							var r = i[s++],
								o = i[s++],
								a = i[s],
								h = Y.getBindFun(a);
							r[o] = h.call(this, e)
						}
					}, s.refresh = function () {
						this.array = this._array
					}, s.getItem = function (t) {
						return t > -1 && t < this._array.length ? this._array[t] : null
					}, s.changeItem = function (t, e) {
						t > -1 && t < this._array.length && (this._array[t] = e, t >= this._startIndex && t < this._startIndex + this._cells.length && this.renderItem(this.getCell(t), t))
					}, s.setItem = function (t, e) {
						this.changeItem(t, e)
					}, s.addItem = function (t) {
						this._array.push(t), this.array = this._array
					}, s.addItemAt = function (t, e) {
						this._array.splice(e, 0, t), this.array = this._array
					}, s.deleteItem = function (t) {
						this._array.splice(t, 1), this.array = this._array
					}, s.getCell = function (t) {
						return this.runCallLater(this.changeCells), t > -1 && this._cells ? this._cells[(t - this._startIndex) % this._cells.length] : null
					}, s.scrollTo = function (t) {
						if (this._scrollBar) {
							var e = this._isVertical ? this.repeatX : this.repeatY;
							this._scrollBar.value = Math.floor(t / e) * this._cellSize
						} else this.startIndex = t
					}, s.tweenTo = function (t, e, i) {
						if (void 0 === e && (e = 200), this._scrollBar) {
							var s = this._isVertical ? this.repeatX : this.repeatY;
							Q.to(this._scrollBar, {
								value: Math.floor(t / s) * this._cellSize
							}, e, null, i, 0, !0)
						} else this.startIndex = t, i && i.run()
					}, s._setCellChanged = function () {
						this._cellChanged || (this._cellChanged = !0, this.callLater(this.changeCells))
					}, s.commitMeasure = function () {
						this.runCallLater(this.changeCells)
					}, r(0, s, "cacheAs", t.prototype._$get_cacheAs, function (t) {
						i.superSet(Dt, this, "cacheAs", t), this._scrollBar && (this._$P.cacheAs = null, "none" !== t ? this._scrollBar.on("start", this, this.onScrollStart) : this._scrollBar.off("start", this, this.onScrollStart))
					}), r(0, s, "content", function () {
						return this._content
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						t != this._height && (i.superSet(Dt, this, "height", t), this._setCellChanged())
					}), r(0, s, "itemRender", function () {
						return this._itemRender
					}, function (t) {
						if (this._itemRender != t) {
							this._itemRender = t;
							for (var e = this._cells.length - 1; e > -1; e--) this._cells[e].destroy();
							this._cells.length = 0, this._setCellChanged()
						}
					}), r(0, s, "vScrollBarSkin", function () {
						return this._scrollBar ? this._scrollBar.skin : null
					}, function (t) {
						this._removePreScrollBar();
						var e = new ce;
						e.name = "scrollBar", e.right = 0, t && " " != t && (e.skin = t), this.scrollBar = e, this.addChild(e), this._setCellChanged()
					}), r(0, s, "page", function () {
						return this._page
					}, function (t) {
						this._page = t, this._array && (this._page = t > 0 ? t : 0, this._page = this._page < this.totalPage ? this._page : this.totalPage - 1, this.startIndex = this._page * this.repeatX * this.repeatY)
					}), r(0, s, "hScrollBarSkin", function () {
						return this._scrollBar ? this._scrollBar.skin : null
					}, function (t) {
						this._removePreScrollBar();
						var e = new he;
						e.name = "scrollBar", e.bottom = 0, t && " " != t && (e.skin = t), this.scrollBar = e, this.addChild(e), this._setCellChanged()
					}), r(0, s, "repeatX", function () {
						return this._repeatX > 0 ? this._repeatX : this._repeatX2 > 0 ? this._repeatX2 : 1
					}, function (t) {
						this._repeatX = t, this._setCellChanged()
					}), r(0, s, "scrollBar", function () {
						return this._scrollBar
					}, function (t) {
						this._scrollBar != t && (this._scrollBar = t, t && (this._isVertical = this._scrollBar.isVertical, this.addChild(this._scrollBar), this._scrollBar.on("change", this, this.onScrollBarChange)))
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						t != this._width && (i.superSet(Dt, this, "width", t), this._setCellChanged())
					}), r(0, s, "repeatY", function () {
						return this._repeatY > 0 ? this._repeatY : this._repeatY2 > 0 ? this._repeatY2 : 1
					}, function (t) {
						this._repeatY = t, this._setCellChanged()
					}), r(0, s, "spaceX", function () {
						return this._spaceX
					}, function (t) {
						this._spaceX = t, this._setCellChanged()
					}), r(0, s, "spaceY", function () {
						return this._spaceY
					}, function (t) {
						this._spaceY = t, this._setCellChanged()
					}), r(0, s, "selectedIndex", function () {
						return this._selectedIndex
					}, function (t) {
						this._selectedIndex != t && (this._selectedIndex = t, this.changeSelectStatus(), this.event("change"), this.selectHandler && this.selectHandler.runWith(t), this.startIndex = this._startIndex)
					}), r(0, s, "selectedItem", function () {
						return -1 != this._selectedIndex ? this._array[this._selectedIndex] : null
					}, function (t) {
						this.selectedIndex = this._array.indexOf(t)
					}), r(0, s, "length", function () {
						return this._array ? this._array.length : 0
					}), r(0, s, "selection", function () {
						return this.getCell(this._selectedIndex)
					}, function (t) {
						this.selectedIndex = this._startIndex + this._cells.indexOf(t)
					}), r(0, s, "startIndex", function () {
						return this._startIndex
					}, function (t) {
						this._startIndex = t > 0 ? t : 0, this.callLater(this.renderItems)
					}), r(0, s, "array", function () {
						return this._array
					}, function (t) {
						this.runCallLater(this.changeCells), this._array = t || [];
						var e = this._array.length;
						if (this.totalPage = Math.ceil(e / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < e ? this._selectedIndex : e - 1, this.startIndex = this._startIndex, this._scrollBar) {
							this._scrollBar.stopScroll();
							var i = this._isVertical ? this.repeatX : this.repeatY,
								s = this._isVertical ? this.repeatY : this.repeatX,
								n = Math.ceil(e / i);
							(this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage) > 1 ? (this._scrollBar.scrollSize = this._cellSize, this._scrollBar.thumbPercent = s / n, this._scrollBar.setScroll(0, (n - s) * this._cellSize + this._cellOffset, this._scrollBar.value), this._scrollBar.target = this._content) : (this._scrollBar.setScroll(0, 0, 0), this._scrollBar.target = this._content)
						}
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.array = t : i.superSet(Dt, this, "dataSource", t)
					}), r(0, s, "cells", function () {
						return this.runCallLater(this.changeCells), this._cells
					}), e
				}(Dt),
				te = function (t) {
					function e() {
						this._list = null, this._source = null, this._renderHandler = null, this._spaceLeft = 10, this._spaceBottom = 0, this._keepStatus = !0, e.__super.call(this), this.width = this.height = 200
					}
					n(e, "laya.ui.Tree", t);
					var s = e.prototype;
					return i.imps(s, {
						"laya.ui.IRender": !0
					}), s.destroy = function (t) {
						void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._list && this._list.destroy(t), this._list = null, this._source = null, this._renderHandler = null
					}, s.createChildren = function () {
						this.addChild(this._list = new Qt), this._list.renderHandler = l.create(this, this.renderItem, null, !1), this._list.repeatX = 1, this._list.on("change", this, this.onListChange)
					}, s.onListChange = function (t) {
						this.event("change")
					}, s.getArray = function () {
						var t, e = [];
						for (var i in this._source) t = this._source[i], this.getParentOpenStatus(t) && (t.x = this._spaceLeft * this.getDepth(t), e.push(t));
						return e
					}, s.getDepth = function (t, e) {
						return void 0 === e && (e = 0), null == t.nodeParent ? e : this.getDepth(t.nodeParent, e + 1)
					}, s.getParentOpenStatus = function (t) {
						var e = t.nodeParent;
						return null == e || !!e.isOpen && (null == e.nodeParent || this.getParentOpenStatus(e))
					}, s.renderItem = function (t, e) {
						var i = t.dataSource;
						if (i) {
							t.left = i.x;
							var s = t.getChildByName("arrow");
							s && (i.hasChild ? (s.visible = !0, s.index = i.isOpen ? 1 : 0, s.tag = e, s.off("click", this, this.onArrowClick), s.on("click", this, this.onArrowClick)) : s.visible = !1);
							var n = t.getChildByName("folder");
							n && (2 == n.clipY ? n.index = i.isDirectory ? 0 : 1 : n.index = i.isDirectory ? i.isOpen ? 1 : 0 : 2), this._renderHandler && this._renderHandler.runWith([t, e])
						}
					}, s.onArrowClick = function (t) {
						var e = t.currentTarget.tag;
						this._list.array[e].isOpen = !this._list.array[e].isOpen, this.event("open"), this._list.array = this.getArray()
					}, s.setItemState = function (t, e) {
						this._list.array[t] && (this._list.array[t].isOpen = e, this._list.array = this.getArray())
					}, s.fresh = function () {
						this._list.array = this.getArray(), this.repaint()
					}, s.parseXml = function (t, e, i, s) {
						var n, r = t.childNodes,
							o = r.length;
						if (!s) {
							n = {};
							var a, h = t.attributes;
							for (var l in h) {
								var c = (a = h[l]).nodeName,
									u = a.nodeValue;
								n[c] = "true" == u || "false" != u && u
							}
							n.nodeParent = i, o > 0 && (n.isDirectory = !0), n.hasChild = o > 0, e.push(n)
						}
						for (var _ = 0; _ < o; _++) {
							var d = r[_];
							this.parseXml(d, e, n, !1)
						}
					}, s.parseOpenStatus = function (t, e) {
						for (var i = 0, s = e.length; i < s; i++) {
							var n = e[i];
							if (n.isDirectory)
								for (var r = 0, o = t.length; r < o; r++) {
									var a = t[r];
									if (a.isDirectory && this.isSameParent(a, n) && n.label == a.label) {
										n.isOpen = a.isOpen;
										break
									}
								}
						}
					}, s.isSameParent = function (t, e) {
						return null == t.nodeParent && null == e.nodeParent || null != t.nodeParent && null != e.nodeParent && (t.nodeParent.label == e.nodeParent.label && this.isSameParent(t.nodeParent, e.nodeParent))
					}, s.filter = function (t) {
						if (Boolean(t)) {
							var e = [];
							this.getFilterSource(this._source, e, t), this._list.array = e
						} else this._list.array = this.getArray()
					}, s.getFilterSource = function (t, e, i) {
						i = i.toLocaleLowerCase();
						var s;
						for (var n in t) !(s = t[n]).isDirectory && String(s.label).toLowerCase().indexOf(i) > -1 && (s.x = 0, e.push(s)), s.child && s.child.length > 0 && this.getFilterSource(s.child, e, i)
					}, r(0, s, "spaceBottom", function () {
						return this._list.spaceY
					}, function (t) {
						this._list.spaceY = t
					}), r(0, s, "keepStatus", function () {
						return this._keepStatus
					}, function (t) {
						this._keepStatus = t
					}), r(0, s, "itemRender", function () {
						return this._list.itemRender
					}, function (t) {
						this._list.itemRender = t
					}), r(0, s, "array", function () {
						return this._list.array
					}, function (t) {
						this._keepStatus && this._list.array && t && this.parseOpenStatus(this._list.array, t), this._source = t, this._list.array = this.getArray()
					}), r(0, s, "mouseHandler", function () {
						return this._list.mouseHandler
					}, function (t) {
						this._list.mouseHandler = t
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, i.superSet(Dt, this, "dataSource", t)
					}), r(0, s, "source", function () {
						return this._source
					}), r(0, s, "scrollBar", function () {
						return this._list.scrollBar
					}), r(0, s, "list", function () {
						return this._list
					}), r(0, s, "scrollBarSkin", function () {
						return this._list.vScrollBarSkin
					}, function (t) {
						this._list.vScrollBarSkin = t
					}), r(0, s, "renderHandler", function () {
						return this._renderHandler
					}, function (t) {
						this._renderHandler = t
					}), r(0, s, "selectedIndex", function () {
						return this._list.selectedIndex
					}, function (t) {
						this._list.selectedIndex = t
					}), r(0, s, "spaceLeft", function () {
						return this._spaceLeft
					}, function (t) {
						this._spaceLeft = t
					}), r(0, s, "selectedItem", function () {
						return this._list.selectedItem
					}, function (t) {
						this._list.selectedItem = t
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(Dt, this, "width", t), this._list.width = t
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(Dt, this, "height", t), this._list.height = t
					}), r(0, s, "xml", null, function (t) {
						var e = [];
						this.parseXml(t.childNodes[0], e, null, !0), this.array = e
					}), r(0, s, "selectedPath", function () {
						return this._list.selectedItem ? this._list.selectedItem.path : null
					}), e
				}(Dt),
				ee = function (t) {
					function e() {
						this._space = 0, this._align = "none", this._itemChanged = !1, e.__super.call(this)
					}
					n(e, "laya.ui.LayoutBox", Dt);
					var i = e.prototype;
					return i.addChild = function (t) {
						return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChild.call(this, t)
					}, i.onResize = function (t) {
						this._setItemChanged()
					}, i.addChildAt = function (t, e) {
						return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChildAt.call(this, t, e)
					}, i.removeChild = function (t) {
						return t.off("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.removeChild.call(this, t)
					}, i.removeChildAt = function (t) {
						return this.getChildAt(t).off("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.removeChildAt.call(this, t)
					}, i.refresh = function () {
						this._setItemChanged()
					}, i.changeItems = function () {
						this._itemChanged = !1
					}, i.sortItem = function (t) {
						t && t.sort(function (t, e) {
							return t.y - e.y
						})
					}, i._setItemChanged = function () {
						this._itemChanged || (this._itemChanged = !0, this.callLater(this.changeItems))
					}, r(0, i, "space", function () {
						return this._space
					}, function (t) {
						this._space = t, this._setItemChanged()
					}), r(0, i, "align", function () {
						return this._align
					}, function (t) {
						this._align = t, this._setItemChanged()
					}), e
				}(),
				ie = function (t) {
					function e() {
						this._content = null, this._vScrollBar = null, this._hScrollBar = null, this._scrollChanged = !1, e.__super.call(this), this.width = this.height = 100
					}
					n(e, "laya.ui.Panel", t);
					var s = e.prototype;
					return s.destroy = function (t) {
						void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._content && this._content.destroy(t), this._vScrollBar && this._vScrollBar.destroy(t), this._hScrollBar && this._hScrollBar.destroy(t), this._vScrollBar = null, this._hScrollBar = null, this._content = null
					}, s.destroyChildren = function () {
						this._content.destroyChildren()
					}, s.createChildren = function () {
						laya.display.Node.prototype.addChild.call(this, this._content = new Dt)
					}, s.addChild = function (t) {
						return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChild(t)
					}, s.onResize = function () {
						this._setScrollChanged()
					}, s.addChildAt = function (t, e) {
						return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChildAt(t, e)
					}, s.removeChild = function (t) {
						return t.off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChild(t)
					}, s.removeChildAt = function (t) {
						return this.getChildAt(t).off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChildAt(t)
					}, s.removeChildren = function (t, e) {
						return void 0 === t && (t = 0), void 0 === e && (e = 2147483647), this._content.removeChildren(t, e), this._setScrollChanged(), this
					}, s.getChildAt = function (t) {
						return this._content.getChildAt(t)
					}, s.getChildByName = function (t) {
						return this._content.getChildByName(t)
					}, s.getChildIndex = function (t) {
						return this._content.getChildIndex(t)
					}, s.changeScroll = function () {
						this._scrollChanged = !1;
						var t = this.contentWidth || 1,
							e = this.contentHeight || 1,
							i = this._vScrollBar,
							s = this._hScrollBar,
							n = i && e > this._height,
							r = s && t > this._width,
							o = n ? this._width - i.width : this._width,
							a = r ? this._height - s.height : this._height;
						i && (i.x = this._width - i.width, i.y = 0, i.height = this._height - (r ? s.height : 0), i.scrollSize = Math.max(.033 * this._height, 1), i.thumbPercent = a / e, i.setScroll(0, e - a, i.value)), s && (s.x = 0, s.y = this._height - s.height, s.width = this._width - (n ? i.width : 0), s.scrollSize = Math.max(.033 * this._width, 1), s.thumbPercent = o / t, s.setScroll(0, t - o, s.value))
					}, s.changeSize = function () {
						laya.ui.Component.prototype.changeSize.call(this), this.setContentSize(this._width, this._height)
					}, s.setContentSize = function (t, e) {
						var i = this._content;
						i.width = t, i.height = e, i.scrollRect || (i.scrollRect = new L), i.scrollRect.setTo(0, 0, t, e), i.scrollRect = i.scrollRect
					}, s.onScrollBarChange = function (t) {
						var e = this._content.scrollRect;
						if (e) {
							var i = Math.round(t.value);
							t.isVertical ? e.y = i : e.x = i, this._content.scrollRect = e
						}
					}, s.scrollTo = function (t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), this.vScrollBar && (this.vScrollBar.value = e), this.hScrollBar && (this.hScrollBar.value = t)
					}, s.refresh = function () {
						this.changeScroll()
					}, s.onScrollStart = function () {
						this._$P.cacheAs || (this._$P.cacheAs = i.superGet(Dt, this, "cacheAs")), i.superSet(Dt, this, "cacheAs", "none"), this._hScrollBar && this._hScrollBar.once("end", this, this.onScrollEnd), this._vScrollBar && this._vScrollBar.once("end", this, this.onScrollEnd)
					}, s.onScrollEnd = function () {
						i.superSet(Dt, this, "cacheAs", this._$P.cacheAs)
					}, s._setScrollChanged = function () {
						this._scrollChanged || (this._scrollChanged = !0, this.callLater(this.changeScroll))
					}, r(0, s, "numChildren", function () {
						return this._content.numChildren
					}), r(0, s, "hScrollBarSkin", function () {
						return this._hScrollBar ? this._hScrollBar.skin : null
					}, function (t) {
						null == this._hScrollBar && (laya.display.Node.prototype.addChild.call(this, this._hScrollBar = new he), this._hScrollBar.on("change", this, this.onScrollBarChange, [this._hScrollBar]), this._hScrollBar.target = this._content, this._setScrollChanged()), this._hScrollBar.skin = t
					}), r(0, s, "contentWidth", function () {
						for (var t = 0, e = this._content.numChildren - 1; e > -1; e--) {
							var i = this._content.getChildAt(e);
							t = Math.max(i.x + i.width * i.scaleX, t)
						}
						return t
					}), r(0, s, "contentHeight", function () {
						for (var t = 0, e = this._content.numChildren - 1; e > -1; e--) {
							var i = this._content.getChildAt(e);
							t = Math.max(i.y + i.height * i.scaleY, t)
						}
						return t
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(Dt, this, "width", t), this._setScrollChanged()
					}), r(0, s, "hScrollBar", function () {
						return this._hScrollBar
					}), r(0, s, "content", function () {
						return this._content
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(Dt, this, "height", t), this._setScrollChanged()
					}), r(0, s, "vScrollBarSkin", function () {
						return this._vScrollBar ? this._vScrollBar.skin : null
					}, function (t) {
						null == this._vScrollBar && (laya.display.Node.prototype.addChild.call(this, this._vScrollBar = new ce), this._vScrollBar.on("change", this, this.onScrollBarChange, [this._vScrollBar]), this._vScrollBar.target = this._content, this._setScrollChanged()), this._vScrollBar.skin = t
					}), r(0, s, "vScrollBar", function () {
						return this._vScrollBar
					}), r(0, s, "cacheAs", t.prototype._$get_cacheAs, function (t) {
						i.superSet(Dt, this, "cacheAs", t), this._$P.cacheAs = null, "none" !== t ? (this._hScrollBar && this._hScrollBar.on("start", this, this.onScrollStart), this._vScrollBar && this._vScrollBar.on("start", this, this.onScrollStart)) : (this._hScrollBar && this._hScrollBar.off("start", this, this.onScrollStart), this._vScrollBar && this._vScrollBar.off("start", this, this.onScrollStart))
					}), e
				}(Dt),
				se = function (t) {
					function e(t, i) {
						this.selectHandler = null, this._items = null, this._selectedIndex = -1, this._skin = null, this._direction = "horizontal", this._space = 0, this._labels = null, this._labelColors = null, this._labelFont = null, this._labelStrokeColor = null, this._strokeColors = null, this._labelStroke = NaN, this._labelSize = 0, this._labelBold = !1, this._labelPadding = null, this._labelAlign = null, this._stateNum = 0, this._labelChanged = !1, e.__super.call(this), this.skin = i, this.labels = t
					}
					n(e, "laya.ui.UIGroup", t);
					var s = e.prototype;
					return i.imps(s, {
						"laya.ui.IItem": !0
					}), s.preinitialize = function () {
						this.mouseEnabled = !0
					}, s.destroy = function (t) {
						void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._items && (this._items.length = 0), this._items = null, this.selectHandler = null
					}, s.addItem = function (t, e) {
						void 0 === e && (e = !0);
						var i = t,
							s = this._items.length;
						if (i.name = "item" + s, this.addChild(i), this.initItems(), e && s > 0) {
							var n = this._items[s - 1];
							"horizontal" == this._direction ? i.x = n.x + n.width + this._space : i.y = n.y + n.height + this._space
						} else e && (i.x = 0, i.y = 0);
						return s
					}, s.delItem = function (t, e) {
						void 0 === e && (e = !0);
						var i = this._items.indexOf(t);
						if (-1 != i) {
							var s = t;
							this.removeChild(s);
							for (var n = i + 1, r = this._items.length; n < r; n++) {
								var o = this._items[n];
								o.name = "item" + (n - 1), e && ("horizontal" == this._direction ? o.x -= s.width + this._space : o.y -= s.height + this._space)
							}
							if (this.initItems(), this._selectedIndex > -1) {
								var a = 0;
								a = this._selectedIndex < this._items.length ? this._selectedIndex : this._selectedIndex - 1, this._selectedIndex = -1, this.selectedIndex = a
							}
						}
					}, s.initItems = function () {
						this._items || (this._items = []), this._items.length = 0;
						for (var t = 0; t < 1e4; t++) {
							var e = this.getChildByName("item" + t);
							if (null == e) break;
							this._items.push(e), e.selected = t === this._selectedIndex, e.clickHandler = l.create(this, this.itemClick, [t], !1)
						}
					}, s.itemClick = function (t) {
						this.selectedIndex = t
					}, s.setSelect = function (t, e) {
						this._items && t > -1 && t < this._items.length && (this._items[t].selected = e)
					}, s.createItem = function (t, e) {
						return null
					}, s.changeLabels = function () {
						if (this._labelChanged = !1, this._items)
							for (var t = 0, e = 0, i = this._items.length; e < i; e++) {
								var s = this._items[e];
								this._skin && (s.skin = this._skin), this._labelColors && (s.labelColors = this._labelColors), this._labelSize && (s.labelSize = this._labelSize), this._labelStroke && (s.labelStroke = this._labelStroke), this._labelStrokeColor && (s.labelStrokeColor = this._labelStrokeColor), this._strokeColors && (s.strokeColors = this._strokeColors), this._labelBold && (s.labelBold = this._labelBold), this._labelPadding && (s.labelPadding = this._labelPadding), this._labelAlign && (s.labelAlign = this._labelAlign), this._stateNum && (s.stateNum = this._stateNum), this._labelFont && (s.labelFont = this._labelFont), "horizontal" === this._direction ? (s.y = 0, s.x = t, t += s.width + this._space) : (s.x = 0, s.y = t, t += s.height + this._space)
							}
						this.changeSize()
					}, s.commitMeasure = function () {
						this.runCallLater(this.changeLabels)
					}, s._setLabelChanged = function () {
						this._labelChanged || (this._labelChanged = !0, this.callLater(this.changeLabels))
					}, r(0, s, "labelStrokeColor", function () {
						return this._labelStrokeColor
					}, function (t) {
						this._labelStrokeColor != t && (this._labelStrokeColor = t, this._setLabelChanged())
					}), r(0, s, "skin", function () {
						return this._skin
					}, function (t) {
						this._skin != t && (this._skin = t, this._setLabelChanged())
					}), r(0, s, "selectedIndex", function () {
						return this._selectedIndex
					}, function (t) {
						this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, this.setSelect(t, !0), this.event("change"), this.selectHandler && this.selectHandler.runWith(this._selectedIndex))
					}), r(0, s, "labels", function () {
						return this._labels
					}, function (t) {
						if (this._labels != t) {
							if (this._labels = t, this.removeChildren(), this._setLabelChanged(), this._labels)
								for (var e = this._labels.split(","), i = 0, s = e.length; i < s; i++) {
									var n = this.createItem(this._skin, e[i]);
									n.name = "item" + i, this.addChild(n)
								}
							this.initItems()
						}
					}), r(0, s, "strokeColors", function () {
						return this._strokeColors
					}, function (t) {
						this._strokeColors != t && (this._strokeColors = t, this._setLabelChanged())
					}), r(0, s, "labelColors", function () {
						return this._labelColors
					}, function (t) {
						this._labelColors != t && (this._labelColors = t, this._setLabelChanged())
					}), r(0, s, "labelStroke", function () {
						return this._labelStroke
					}, function (t) {
						this._labelStroke != t && (this._labelStroke = t, this._setLabelChanged())
					}), r(0, s, "labelSize", function () {
						return this._labelSize
					}, function (t) {
						this._labelSize != t && (this._labelSize = t, this._setLabelChanged())
					}), r(0, s, "stateNum", function () {
						return this._stateNum
					}, function (t) {
						this._stateNum != t && (this._stateNum = t, this._setLabelChanged())
					}), r(0, s, "labelBold", function () {
						return this._labelBold
					}, function (t) {
						this._labelBold != t && (this._labelBold = t, this._setLabelChanged())
					}), r(0, s, "labelFont", function () {
						return this._labelFont
					}, function (t) {
						this._labelFont != t && (this._labelFont = t, this._setLabelChanged())
					}), r(0, s, "labelPadding", function () {
						return this._labelPadding
					}, function (t) {
						this._labelPadding != t && (this._labelPadding = t, this._setLabelChanged())
					}), r(0, s, "direction", function () {
						return this._direction
					}, function (t) {
						this._direction = t, this._setLabelChanged()
					}), r(0, s, "space", function () {
						return this._space
					}, function (t) {
						this._space = t, this._setLabelChanged()
					}), r(0, s, "items", function () {
						return this._items
					}), r(0, s, "selection", function () {
						return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null
					}, function (t) {
						this.selectedIndex = this._items.indexOf(t)
					}), r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : i.superSet(Dt, this, "dataSource", t)
					}), e
				}(Dt),
				ne = function (t) {
					function e() {
						this._items = null, this._selectedIndex = 0, e.__super.call(this), this._setIndexHandler = l.create(this, this.setIndex, null, !1)
					}
					n(e, "laya.ui.ViewStack", t);
					var s = e.prototype;
					return i.imps(s, {
						"laya.ui.IItem": !0
					}), s.setItems = function (t) {
						this.removeChildren();
						for (var e = 0, i = 0, s = t.length; i < s; i++) {
							var n = t[i];
							n && (n.name = "item" + e, this.addChild(n), e++)
						}
						this.initItems()
					}, s.addItem = function (t) {
						t.name = "item" + this._items.length, this.addChild(t), this.initItems()
					}, s.initItems = function () {
						this._items = [];
						for (var t = 0; t < 1e4; t++) {
							var e = this.getChildByName("item" + t);
							if (null == e) break;
							this._items.push(e), e.visible = t == this._selectedIndex
						}
					}, s.setSelect = function (t, e) {
						this._items && t > -1 && t < this._items.length && (this._items[t].visible = e)
					}, s.setIndex = function (t) {
						this.selectedIndex = t
					}, r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						if (this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t) this.selectedIndex = parseInt(t);
						else
							for (var e in this._dataSource) this.hasOwnProperty(e) && (this[e] = this._dataSource[e])
					}), r(0, s, "selectedIndex", function () {
						return this._selectedIndex
					}, function (t) {
						this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, this.setSelect(this._selectedIndex, !0))
					}), r(0, s, "selection", function () {
						return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null
					}, function (t) {
						this.selectedIndex = this._items.indexOf(t)
					}), r(0, s, "items", function () {
						return this._items
					}), r(0, s, "setIndexHandler", function () {
						return this._setIndexHandler
					}, function (t) {
						this._setIndexHandler = t
					}), e
				}(Dt),
				re = function (t) {
					function e(t, i) {
						void 0 === i && (i = ""), e.__super.call(this, t, i)
					}
					n(e, "laya.ui.CheckBox", t);
					var s = e.prototype;
					return s.preinitialize = function () {
						laya.ui.Component.prototype.preinitialize.call(this), this.toggle = !0, this._autoSize = !1
					}, s.initialize = function () {
						t.prototype.initialize.call(this), this.createText(), this._text.align = "left", this._text.valign = "top", this._text.width = 0
					}, r(0, s, "dataSource", t.prototype._$get_dataSource, function (t) {
						this._dataSource = t, "boolean" == typeof t ? this.selected = t : "string" == typeof t ? this.selected = "true" === t : i.superSet(zt, this, "dataSource", t)
					}), e
				}(zt),
				oe = function (t) {
					function e(t, i) {
						this._value = null, void 0 === i && (i = ""), e.__super.call(this, t, i)
					}
					n(e, "laya.ui.Radio", t);
					var i = e.prototype;
					return i.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._value = null
					}, i.preinitialize = function () {
						laya.ui.Component.prototype.preinitialize.call(this), this.toggle = !1, this._autoSize = !1
					}, i.initialize = function () {
						t.prototype.initialize.call(this), this.createText(), this._text.align = "left", this._text.valign = "top", this._text.width = 0, this.on("click", this, this.onClick)
					}, i.onClick = function (t) {
						this.selected = !0
					}, r(0, i, "value", function () {
						return null != this._value ? this._value : this.label
					}, function (t) {
						this._value = t
					}), e
				}(zt),
				ae = function (t) {
					function e(t, i) {
						this._valueArr = null, this._indexMap = null, this._sheet = null, this._direction = "horizontal", this._spaceX = 0, this._spaceY = 0, this._align = "left", this._wordsW = 0, this._wordsH = 0, e.__super.call(this), t && (this.skin = t), i && (this.sheet = i)
					}
					n(e, "laya.ui.FontClip", t);
					var s = e.prototype;
					return s.createChildren = function () {
						this._bitmap = new bt, this.on("loaded", this, this._onClipLoaded)
					}, s._onClipLoaded = function () {
						this.callLater(this.changeValue)
					}, s.changeValue = function () {
						if (this._sources && this._valueArr) {
							this.graphics.clear(!0);
							var t;
							if (t = this._sources[0]) {
								var e = "horizontal" === this._direction;
								e ? (this._wordsW = this._valueArr.length * (t.sourceWidth + this.spaceX), this._wordsH = t.sourceHeight) : (this._wordsW = t.sourceWidth, this._wordsH = (t.sourceHeight + this.spaceY) * this._valueArr.length);
								var i = 0;
								if (this._width) switch (this._align) {
									case "center":
										i = .5 * (this._width - this._wordsW);
										break;
									case "right":
										i = this._width - this._wordsW;
										break;
									default:
										i = 0
								}
								for (var s = 0, n = this._valueArr.length; s < n; s++) {
									var r = this._indexMap[this._valueArr.charAt(s)];
									this.sources[r] && (t = this.sources[r], e ? this.graphics.drawTexture(t, i + s * (t.sourceWidth + this.spaceX), 0, t.sourceWidth, t.sourceHeight) : this.graphics.drawTexture(t, 0 + i, s * (t.sourceHeight + this.spaceY), t.sourceWidth, t.sourceHeight))
								}
								this._width || (this.resetLayoutX(), this.callLater(this.changeSize)), this._height || (this.resetLayoutY(), this.callLater(this.changeSize))
							}
						}
					}, s.destroy = function (e) {
						void 0 === e && (e = !0), this._valueArr = null, this._indexMap = null, this.graphics.clear(!0), this.removeSelf(), this.off("loaded", this, this._onClipLoaded), t.prototype.destroy.call(this, e)
					}, r(0, s, "sheet", function () {
						return this._sheet
					}, function (t) {
						t += "", this._sheet = t;
						var e = t.split(" ");
						this._clipX = String(e[0]).length, this.clipY = e.length, this._indexMap = {};
						for (var i = 0; i < this._clipY; i++)
							for (var s = e[i].split(""), n = 0, r = s.length; n < r; n++) this._indexMap[s[n]] = i * this._clipX + n
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(Wt, this, "height", t), this.callLater(this.changeValue)
					}), r(0, s, "direction", function () {
						return this._direction
					}, function (t) {
						this._direction = t, this.callLater(this.changeValue)
					}), r(0, s, "value", function () {
						return this._valueArr ? this._valueArr : ""
					}, function (t) {
						t += "", this._valueArr = t, this.callLater(this.changeValue)
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(Wt, this, "width", t), this.callLater(this.changeValue)
					}), r(0, s, "spaceX", function () {
						return this._spaceX
					}, function (t) {
						this._spaceX = t, "horizontal" === this._direction && this.callLater(this.changeValue)
					}), r(0, s, "spaceY", function () {
						return this._spaceY
					}, function (t) {
						this._spaceY = t, "horizontal" !== this._direction && this.callLater(this.changeValue)
					}), r(0, s, "align", function () {
						return this._align
					}, function (t) {
						this._align = t, this.callLater(this.changeValue)
					}), r(0, s, "measureWidth", function () {
						return this._wordsW
					}), r(0, s, "measureHeight", function () {
						return this._wordsH
					}), e
				}(Wt),
				he = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.ui.HScrollBar", t);
					return e.prototype.initialize = function () {
						t.prototype.initialize.call(this), this.slider.isVertical = !1
					}, e
				}(Gt),
				le = function (t) {
					function e(t) {
						e.__super.call(this, t), this.isVertical = !1
					}
					return n(e, "laya.ui.HSlider", Xt), e
				}(),
				ce = function (t) {
					function e() {
						e.__super.call(this)
					}
					return n(e, "laya.ui.VScrollBar", Gt), e
				}(),
				ue = function (t) {
					function e() {
						e.__super.call(this)
					}
					return n(e, "laya.ui.VSlider", Xt), e
				}(),
				_e = function (t) {
					function e(t) {
						this._bg = null, this._skin = null, e.__super.call(this), void 0 === t && (t = ""), this.text = t, this.skin = this.skin
					}
					n(e, "laya.ui.TextInput", t);
					var s = e.prototype;
					return s.preinitialize = function () {
						this.mouseEnabled = !0
					}, s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bg && this._bg.destroy(), this._bg = null
					}, s.createChildren = function () {
						this.addChild(this._tf = new jt), this._tf.padding = W.inputLabelPadding, this._tf.on("input", this, this._onInput), this._tf.on("enter", this, this._onEnter), this._tf.on("blur", this, this._onBlur), this._tf.on("focus", this, this._onFocus)
					}, s._onFocus = function () {
						this.event("focus", this)
					}, s._onBlur = function () {
						this.event("blur", this)
					}, s._onInput = function () {
						this.event("input", this)
					}, s._onEnter = function () {
						this.event("enter", this)
					}, s.initialize = function () {
						this.width = 128, this.height = 22
					}, s.select = function () {
						this._tf.select()
					}, s.setSelection = function (t, e) {
						this._tf.setSelection(t, e)
					}, r(0, s, "text", t.prototype._$get_text, function (t) {
						this._tf.text != t && (t += "", this._tf.text = t, this.event("change"))
					}), r(0, s, "bg", function () {
						return this._bg
					}, function (t) {
						this.graphics = this._bg = t
					}), r(0, s, "inputElementYAdjuster", function () {
						return this._tf.inputElementYAdjuster
					}, function (t) {
						this._tf.inputElementYAdjuster = t
					}), r(0, s, "multiline", function () {
						return this._tf.multiline
					}, function (t) {
						this._tf.multiline = t
					}), r(0, s, "skin", function () {
						return this._skin
					}, function (t) {
						this._skin != t && (this._skin = t, this._bg || (this.graphics = this._bg = new bt), this._bg.source = xt.getRes(this._skin), this._width && (this._bg.width = this._width), this._height && (this._bg.height = this._height))
					}), r(0, s, "sizeGrid", function () {
						return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(",") : null
					}, function (t) {
						this._bg || (this.graphics = this._bg = new bt), this._bg.sizeGrid = Y.fillArray(W.defaultSizeGrid, t, Number)
					}), r(0, s, "inputElementXAdjuster", function () {
						return this._tf.inputElementXAdjuster
					}, function (t) {
						this._tf.inputElementXAdjuster = t
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(Vt, this, "width", t), this._bg && (this._bg.width = t)
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(Vt, this, "height", t), this._bg && (this._bg.height = t)
					}), r(0, s, "editable", function () {
						return this._tf.editable
					}, function (t) {
						this._tf.editable = t
					}), r(0, s, "restrict", function () {
						return this._tf.restrict
					}, function (t) {
						this._tf.restrict = t
					}), r(0, s, "prompt", function () {
						return this._tf.prompt
					}, function (t) {
						this._tf.prompt = t
					}), r(0, s, "promptColor", function () {
						return this._tf.promptColor
					}, function (t) {
						this._tf.promptColor = t
					}), r(0, s, "maxChars", function () {
						return this._tf.maxChars
					}, function (t) {
						this._tf.maxChars = t
					}), r(0, s, "focus", function () {
						return this._tf.focus
					}, function (t) {
						this._tf.focus = t
					}), r(0, s, "type", function () {
						return this._tf.type
					}, function (t) {
						this._tf.type = t
					}), r(0, s, "asPassword", function () {
						return this._tf.asPassword
					}, function (t) {
						this._tf.asPassword = t
					}), e
				}(Vt),
				de = function (t) {
					function e() {
						this.animationList = null, this.animationDic = null, this._nodeList = null, this._nodeDefaultProps = null, this._gList = null, this._nodeIDAniDic = {}, this._rootNode = null, this._nodeGDic = null, e.__super.call(this)
					}
					var i;
					n(e, "laya.utils.GraphicAnimation", t);
					var r = e.prototype;
					return r._parseNodeList = function (t) {
						this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, t.compId && this._nodeList.push(t.compId);
						var e = t.child;
						if (e) {
							var i = 0,
								s = e.length;
							for (i = 0; i < s; i++) this._parseNodeList(e[i])
						}
					}, r._calGraphicData = function (t) {
						if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic) {
							var e;
							for (e in this._nodeIDAniDic) this._nodeIDAniDic[e] = null
						}
					}, r._createGraphicData = function () {
						var t = [],
							e = 0,
							i = this.count,
							s = this._animationNewFrames;
						s || (s = []);
						var n;
						for (e = 0; e < i; e++) !s[e] && n || (n = this._createFrameGraphic(e)), t.push(n);
						this._gList = t
					}, r._createFrameGraphic = function (t) {
						var i = o.createGraphics();
						return e._rootMatrix || (e._rootMatrix = new I), this._updateNodeGraphic(this._rootNode, t, e._rootMatrix, i), i
					}, r._updateNodeGraphic = function (t, e, i, s, n) {
						void 0 === n && (n = 1);
						var r, o = (r = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).alpha * n;
						if (!(o < .01)) {
							r.resultTransform || (r.resultTransform = I.create());
							var a;
							a = r.resultTransform, I.mul(r.transform, i, a);
							var h;
							r.skin && (h = this._getTextureByUrl(r.skin)) && (a._checkTransform() ? (s.drawTexture(h, 0, 0, r.width, r.height, a, o), r.resultTransform = null) : s.drawTexture(h, a.tx, a.ty, r.width, r.height, null, o));
							var l;
							if (l = t.child) {
								var c = 0,
									u = 0;
								for (u = l.length, c = 0; c < u; c++) this._updateNodeGraphic(l[c], e, a, s, o)
							}
						}
					}, r._updateNoChilds = function (t, e) {
						if (t.skin) {
							var i = this._getTextureByUrl(t.skin);
							if (i) {
								var s = t.transform;
								s._checkTransform();
								!s.bTransform ? e.drawTexture(i, s.tx, s.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, s.clone(), t.alpha)
							}
						}
					}, r._updateNodeGraphic2 = function (t, e, i) {
						var s;
						if (s = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), t.child) {
							var n = s.transform;
							n._checkTransform();
							var r = !1,
								o = !1;
							o = (r = !n.bTransform) && (0 != n.tx || 0 != n.ty);
							var a = !1;
							(a = n.bTransform || 1 != s.alpha) && i.save(), 1 != s.alpha && i.alpha(s.alpha), r ? o && i.translate(n.tx, n.ty) : i.transform(n.clone());
							var h;
							h = t.child;
							var l;
							if (s.skin && (l = this._getTextureByUrl(s.skin)) && i.drawTexture(l, 0, 0, s.width, s.height), h) {
								var c = 0,
									u = 0;
								for (u = h.length, c = 0; c < u; c++) this._updateNodeGraphic2(h[c], e, i)
							}
							a ? i.restore() : r ? o && i.translate(-n.tx, -n.ty) : i.transform(n.clone().invert())
						} else this._updateNoChilds(s, i)
					}, r._calculateNodeKeyFrames = function (e) {
						t.prototype._calculateNodeKeyFrames.call(this, e), this._nodeIDAniDic[e.target] = e
					}, r.getNodeDataByID = function (t) {
						return this._nodeIDAniDic[t]
					}, r._getParams = function (t, i, s, n) {
						var r = e._temParam;
						r.length = i.length;
						var o = 0,
							a = i.length;
						for (o = 0; o < a; o++) r[o] = this._getObjVar(t, i[o][0], s, i[o][1], n);
						return r
					}, r._getObjVar = function (t, e, i, s, n) {
						if (t.hasOwnProperty(e)) {
							var r = t[e];
							if (i >= r.length && (i = r.length - 1), void 0 != t[e][i]) return t[e][i]
						}
						return n.hasOwnProperty(e) ? n[e] : s
					}, r._getNodeGraphicData = function (t, s, n) {
						n || (n = i.create()), n.transform ? n.transform.identity() : n.transform = I.create();
						var r = this.getNodeDataByID(t);
						if (!r) return n;
						var o = r.frames,
							a = this._getParams(o, e._drawTextureCmd, s, this._nodeDefaultProps[t]),
							h = a[0],
							l = NaN,
							c = NaN,
							u = a[5],
							_ = a[6],
							d = a[13],
							f = a[14],
							p = a[7],
							g = a[8],
							m = a[9],
							v = a[11],
							y = a[12];
						l = a[3], c = a[4], 0 != l && 0 != c || (h = null), -1 == l && (l = 0), -1 == c && (c = 0);
						var x;
						n.skin = h, n.width = l, n.height = c, h && ((x = this._getTextureByUrl(h)) ? (l || (l = x.sourceWidth), c || (c = x.sourceHeight)) : console.warn("lost skin:", h, ",you may load pics first")), n.alpha = a[10];
						var w;
						w = n.transform, 0 != d && (u = d * l), 0 != f && (_ = f * c), 0 == u && 0 == _ || w.translate(-u, -_);
						var b = null;
						if (m || 1 !== p || 1 !== g || v || y) {
							(b = e._tempMt).identity(), b.bTransform = !0;
							var C = .0174532922222222 * (m - v),
								S = .0174532922222222 * (m + y),
								T = Math.cos(S),
								M = Math.sin(S),
								P = Math.sin(C),
								L = Math.cos(C);
							b.a = p * T, b.b = p * M, b.c = -g * P, b.d = g * L, b.tx = b.ty = 0
						}
						return b && (w = I.mul(w, b, w)), w.translate(a[1], a[2]), n
					}, r._getTextureByUrl = function (t) {
						return xt.getRes(t)
					}, r.setAniData = function (t, i) {
						if (t.animations) {
							this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = t, this._parseNodeList(t);
							var s, n = {},
								r = [],
								o = t.animations,
								a = 0,
								h = o.length;
							for (a = 0; a < h; a++)
								if (s = o[a], this._labels = null, (!i || i == s.name) && s) {
									try {
										this._calGraphicData(s)
									} catch (t) {
										console.warn("parse animation fail:" + s.name + ",empty animation created"), this._gList = []
									}
									var l = {};
									l.interval = 1e3 / s.frameRate, l.frames = this._gList, l.labels = this._labels, l.name = s.name, r.push(l), n[s.name] = l
								} this.animationList = r, this.animationDic = n
						}
						e._temParam.length = 0
					}, r.parseByData = function (t) {
						var e, i;
						e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, this._parseNodeList(e), this._labels = null;
						try {
							this._calGraphicData(i)
						} catch (t) {
							console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = []
						}
						var s = t;
						return s.interval = 1e3 / i.frameRate, s.frames = this._gList, s.labels = this._labels, s.name = i.name, s
					}, r.setUpAniData = function (t) {
						if (t.animations) {
							var e, i = {},
								s = [],
								n = t.animations,
								r = 0,
								o = n.length;
							for (r = 0; r < o; r++)
								if (e = n[r]) {
									var a = {};
									a.name = e.name, a.aniO = e, a.nodeRoot = t, s.push(a), i[e.name] = a
								} this.animationList = s, this.animationDic = i
						}
					}, r._clear = function () {
						if (this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic) {
							var t, e;
							for (t in this._nodeGDic)(e = this._nodeGDic[t]) && e.recover()
						}
						this._nodeGDic = null
					}, e.parseAnimationByData = function (t) {
						e._I || (e._I = new e);
						var i;
						return i = e._I.parseByData(t), e._I._clear(), i
					}, e.parseAnimationData = function (t) {
						e._I || (e._I = new e), e._I.setUpAniData(t);
						var i;
						return i = {}, i.animationList = e._I.animationList, i.animationDic = e._I.animationDic, e._I._clear(), i
					}, e._drawTextureCmd = [
						["skin", null],
						["x", 0],
						["y", 0],
						["width", -1],
						["height", -1],
						["pivotX", 0],
						["pivotY", 0],
						["scaleX", 1],
						["scaleY", 1],
						["rotation", 0],
						["alpha", 1],
						["skewX", 0],
						["skewY", 0],
						["anchorX", 0],
						["anchorY", 0]
					], e._temParam = [], e._I = null, e._rootMatrix = null, s(e, ["_tempMt", function () {
						return this._tempMt = new I
					}]), e.__init$ = function () {
						i = function () {
							function t() {
								this.skin = null, this.transform = null, this.resultTransform = null, this.width = NaN, this.height = NaN, this.alpha = 1
							}
							n(t, "");
							return t.prototype.recover = function () {
								this.skin = null, this.width = 0, this.height = 0, this.alpha = 1, this.transform && (this.transform.destroy(), this.transform = null), this.resultTransform && (this.resultTransform.destroy(), this.resultTransform = null), q.recover("GraphicNode", this)
							}, t.create = function () {
								return q.getItemByClass("GraphicNode", t)
							}, t
						}()
					}, e
				}(qt),
				fe = function (t) {
					function e() {
						this.rankList = null, this.tPage = null, e.__super.call(this)
					}
					n(e, "ui.PaiHangUI", Jt);
					return e.prototype.createChildren = function () {
						Jt.regComponent("Text", Rt), laya.ui.Component.prototype.createChildren.call(this), this.createView(e.uiView)
					}, e.uiView = {
						type: "View",
						props: {
							width: 738,
							height: 875
						},
						child: [{
							type: "Box",
							props: {
								y: 0,
								x: 0,
								width: 738,
								var: "rankList",
								height: 875
							},
							child: [{
								type: "Box",
								props: {
									y: -3,
									x: 5
								},
								child: [{
									type: "Image",
									props: {
										y: 10,
										width: 724,
										skin: "open/5.png",
										name: "bg",
										height: 125,
										sizeGrid: "21,20,21,22"
									}
								}, {
									type: "Text",
									props: {
										y: 41,
										x: 457,
										width: 236,
										text: "999关",
										name: "tLevel",
										height: 65,
										fontSize: 50,
										font: "Microsoft YaHei",
										color: "#3cffd2",
										align: "right"
									}
								}, {
									type: "Image",
									props: {
										y: 22,
										x: 121,
										width: 100,
										name: "iAvatar",
										height: 100
									}
								}, {
									type: "Text",
									props: {
										y: 64,
										x: 242,
										width: 195,
										text: "我是第一名哦",
										name: "tName",
										height: 37,
										fontSize: 30,
										font: "Microsoft YaHei",
										color: "#d6d6d6",
										align: "left"
									}
								}, {
									type: "Image",
									props: {
										y: 25,
										x: 16,
										skin: "open/1.png",
										name: "iIndex"
									}
								}, {
									type: "Image",
									props: {
										x: 237,
										skin: "open/9.png",
										name: "tTag"
									}
								}, {
									type: "Text",
									props: {
										y: 37,
										x: 16,
										width: 81,
										text: 20,
										name: "tIndex",
										height: 60,
										fontSize: 60,
										color: "#ffffff",
										bold: !0,
										align: "center"
									}
								}]
							}, {
								type: "Box",
								props: {
									y: 145,
									x: 5
								},
								child: [{
									type: "Image",
									props: {
										y: 10,
										width: 724,
										skin: "open/5.png",
										name: "bg",
										height: 125,
										sizeGrid: "21,20,21,22"
									}
								}, {
									type: "Text",
									props: {
										y: 41,
										x: 457,
										width: 236,
										text: "999关",
										name: "tLevel",
										height: 65,
										fontSize: 50,
										font: "Microsoft YaHei",
										color: "#3cffd2",
										align: "right"
									}
								}, {
									type: "Image",
									props: {
										y: 22,
										x: 121,
										width: 100,
										name: "iAvatar",
										height: 100
									}
								}, {
									type: "Text",
									props: {
										y: 64,
										x: 242,
										width: 195,
										text: "我是第一名哦",
										name: "tName",
										height: 37,
										fontSize: 30,
										font: "Microsoft YaHei",
										color: "#d6d6d6",
										align: "left"
									}
								}, {
									type: "Image",
									props: {
										y: 25,
										x: 16,
										skin: "open/1.png",
										name: "iIndex"
									}
								}, {
									type: "Image",
									props: {
										x: 237,
										skin: "open/9.png",
										name: "tTag"
									}
								}, {
									type: "Text",
									props: {
										y: 37,
										x: 16,
										width: 81,
										text: 20,
										name: "tIndex",
										height: 60,
										fontSize: 60,
										color: "#ffffff",
										bold: !0,
										align: "center"
									}
								}]
							}, {
								type: "Box",
								props: {
									y: 294,
									x: 5
								},
								child: [{
									type: "Image",
									props: {
										y: 10,
										width: 724,
										skin: "open/5.png",
										name: "bg",
										height: 125,
										sizeGrid: "21,20,21,22"
									}
								}, {
									type: "Text",
									props: {
										y: 41,
										x: 457,
										width: 236,
										text: "999关",
										name: "tLevel",
										height: 65,
										fontSize: 50,
										font: "Microsoft YaHei",
										color: "#3cffd2",
										align: "right"
									}
								}, {
									type: "Image",
									props: {
										y: 22,
										x: 121,
										width: 100,
										name: "iAvatar",
										height: 100
									}
								}, {
									type: "Text",
									props: {
										y: 64,
										x: 242,
										width: 195,
										text: "我是第一名哦",
										name: "tName",
										height: 37,
										fontSize: 30,
										font: "Microsoft YaHei",
										color: "#d6d6d6",
										align: "left"
									}
								}, {
									type: "Image",
									props: {
										y: 25,
										x: 16,
										skin: "open/1.png",
										name: "iIndex"
									}
								}, {
									type: "Image",
									props: {
										x: 237,
										skin: "open/9.png",
										name: "tTag"
									}
								}, {
									type: "Text",
									props: {
										y: 37,
										x: 16,
										width: 81,
										text: 20,
										name: "tIndex",
										height: 60,
										fontSize: 60,
										color: "#ffffff",
										bold: !0,
										align: "center"
									}
								}]
							}, {
								type: "Box",
								props: {
									y: 442,
									x: 5
								},
								child: [{
									type: "Image",
									props: {
										y: 10,
										width: 724,
										skin: "open/5.png",
										name: "bg",
										height: 125,
										sizeGrid: "21,20,21,22"
									}
								}, {
									type: "Text",
									props: {
										y: 41,
										x: 457,
										width: 236,
										text: "999关",
										name: "tLevel",
										height: 65,
										fontSize: 50,
										font: "Microsoft YaHei",
										color: "#3cffd2",
										align: "right"
									}
								}, {
									type: "Image",
									props: {
										y: 22,
										x: 121,
										width: 100,
										name: "iAvatar",
										height: 100
									}
								}, {
									type: "Text",
									props: {
										y: 64,
										x: 242,
										width: 195,
										text: "我是第一名哦",
										name: "tName",
										height: 37,
										fontSize: 30,
										font: "Microsoft YaHei",
										color: "#d6d6d6",
										align: "left"
									}
								}, {
									type: "Image",
									props: {
										y: 25,
										x: 16,
										skin: "open/1.png",
										name: "iIndex"
									}
								}, {
									type: "Image",
									props: {
										x: 237,
										skin: "open/9.png",
										name: "tTag"
									}
								}, {
									type: "Text",
									props: {
										y: 37,
										x: 16,
										width: 81,
										text: 20,
										name: "tIndex",
										height: 60,
										fontSize: 60,
										color: "#ffffff",
										bold: !0,
										align: "center"
									}
								}]
							}, {
								type: "Box",
								props: {
									y: 590,
									x: 5
								},
								child: [{
									type: "Image",
									props: {
										y: 10,
										width: 724,
										skin: "open/5.png",
										name: "bg",
										height: 125,
										sizeGrid: "21,20,21,22"
									}
								}, {
									type: "Text",
									props: {
										y: 41,
										x: 457,
										width: 236,
										text: "999关",
										name: "tLevel",
										height: 65,
										fontSize: 50,
										font: "Microsoft YaHei",
										color: "#3cffd2",
										align: "right"
									}
								}, {
									type: "Image",
									props: {
										y: 22,
										x: 121,
										width: 100,
										name: "iAvatar",
										height: 100
									}
								}, {
									type: "Text",
									props: {
										y: 64,
										x: 242,
										width: 195,
										text: "我是第一名哦",
										name: "tName",
										height: 37,
										fontSize: 30,
										font: "Microsoft YaHei",
										color: "#d6d6d6",
										align: "left"
									}
								}, {
									type: "Image",
									props: {
										y: 25,
										x: 16,
										skin: "open/1.png",
										name: "iIndex"
									}
								}, {
									type: "Image",
									props: {
										x: 237,
										skin: "open/9.png",
										name: "tTag"
									}
								}, {
									type: "Text",
									props: {
										y: 37,
										x: 16,
										width: 81,
										text: 20,
										name: "tIndex",
										height: 60,
										fontSize: 60,
										color: "#ffffff",
										bold: !0,
										align: "center"
									}
								}]
							}, {
								type: "Text",
								props: {
									y: 774,
									x: 243,
									width: 236,
									var: "tPage",
									text: "1/4",
									height: 65,
									fontSize: 50,
									font: "Microsoft YaHei",
									color: "#3cffd2",
									align: "center"
								}
							}]
						}]
					}, e
				}(),
				pe = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.ui.HBox", t);
					var s = e.prototype;
					return s.sortItem = function (t) {
						t && t.sort(function (t, e) {
							return t.x - e.x
						})
					}, s.changeItems = function () {
						this._itemChanged = !1;
						for (var t = [], e = 0, i = 0, s = this.numChildren; i < s; i++) {
							var n = this.getChildAt(i);
							n && n.layoutEnabled && (t.push(n), e = this._height ? this._height : Math.max(e, n.height * n.scaleY))
						}
						this.sortItem(t);
						var r = 0;
						for (i = 0, s = t.length; i < s; i++)(n = t[i]).x = r, r += n.width * n.scaleX + this._space, "top" == this._align ? n.y = 0 : "middle" == this._align ? n.y = .5 * (e - n.height * n.scaleY) : "bottom" == this._align && (n.y = e - n.height * n.scaleY);
						this.changeSize()
					}, r(0, s, "height", t.prototype._$get_height, function (t) {
						this._height != t && (i.superSet(ee, this, "height", t), this.callLater(this.changeItems))
					}), e.NONE = "none", e.TOP = "top", e.MIDDLE = "middle", e.BOTTOM = "bottom", e
				}(ee),
				ge = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.ui.VBox", t);
					var s = e.prototype;
					return s.changeItems = function () {
						this._itemChanged = !1;
						for (var t = [], e = 0, i = 0, s = this.numChildren; i < s; i++) {
							var n = this.getChildAt(i);
							n && n.layoutEnabled && (t.push(n), e = this._width ? this._width : Math.max(e, n.width * n.scaleX))
						}
						this.sortItem(t);
						var r = 0;
						for (i = 0, s = t.length; i < s; i++)(n = t[i]).y = r, r += n.height * n.scaleY + this._space, "left" == this._align ? n.x = 0 : "center" == this._align ? n.x = .5 * (e - n.width * n.scaleX) : "right" == this._align && (n.x = e - n.width * n.scaleX);
						this.changeSize()
					}, r(0, s, "width", t.prototype._$get_width, function (t) {
						this._width != t && (i.superSet(ee, this, "width", t), this.callLater(this.changeItems))
					}), e.NONE = "none", e.LEFT = "left", e.CENTER = "center", e.RIGHT = "right", e
				}(ee),
				me = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.ui.RadioGroup", se);
					return e.prototype.createItem = function (t, e) {
						return new oe(t, e)
					}, e
				}(),
				ve = function (t) {
					function e() {
						e.__super.call(this)
					}
					n(e, "laya.ui.Tab", se);
					return e.prototype.createItem = function (t, e) {
						return new zt(t, e)
					}, e
				}(),
				ye = function (t) {
					function e(t) {
						this._vScrollBar = null, this._hScrollBar = null, void 0 === t && (t = ""), e.__super.call(this, t)
					}
					n(e, "laya.ui.TextArea", t);
					var s = e.prototype;
					return s.destroy = function (e) {
						void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._vScrollBar && this._vScrollBar.destroy(), this._hScrollBar && this._hScrollBar.destroy(), this._vScrollBar = null, this._hScrollBar = null
					}, s.initialize = function () {
						this.width = 180, this.height = 150, this._tf.wordWrap = !0, this.multiline = !0
					}, s.onVBarChanged = function (t) {
						this._tf.scrollY != this._vScrollBar.value && (this._tf.scrollY = this._vScrollBar.value)
					}, s.onHBarChanged = function (t) {
						this._tf.scrollX != this._hScrollBar.value && (this._tf.scrollX = this._hScrollBar.value)
					}, s.changeScroll = function () {
						var t = this._vScrollBar && this._tf.maxScrollY > 0,
							e = this._hScrollBar && this._tf.maxScrollX > 0,
							i = t ? this._width - this._vScrollBar.width : this._width,
							s = e ? this._height - this._hScrollBar.height : this._height,
							n = this._tf.padding || W.labelPadding;
						this._tf.width = i, this._tf.height = s, this._vScrollBar && (this._vScrollBar.x = this._width - this._vScrollBar.width - n[2], this._vScrollBar.y = n[1], this._vScrollBar.height = this._height - (e ? this._hScrollBar.height : 0) - n[1] - n[3], this._vScrollBar.scrollSize = 1, this._vScrollBar.thumbPercent = s / Math.max(this._tf.textHeight, s), this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY), this._vScrollBar.visible = t), this._hScrollBar && (this._hScrollBar.x = n[0], this._hScrollBar.y = this._height - this._hScrollBar.height - n[3], this._hScrollBar.width = this._width - (t ? this._vScrollBar.width : 0) - n[0] - n[2], this._hScrollBar.scrollSize = Math.max(.033 * i, 1), this._hScrollBar.thumbPercent = i / Math.max(this._tf.textWidth, i), this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX), this._hScrollBar.visible = e)
					}, s.scrollTo = function (t) {
						this.commitMeasure(), this._tf.scrollY = t
					}, r(0, s, "scrollY", function () {
						return this._tf.scrollY
					}), r(0, s, "width", t.prototype._$get_width, function (t) {
						i.superSet(_e, this, "width", t), this.callLater(this.changeScroll)
					}), r(0, s, "hScrollBar", function () {
						return this._hScrollBar
					}), r(0, s, "height", t.prototype._$get_height, function (t) {
						i.superSet(_e, this, "height", t), this.callLater(this.changeScroll)
					}), r(0, s, "maxScrollX", function () {
						return this._tf.maxScrollX
					}), r(0, s, "vScrollBarSkin", function () {
						return this._vScrollBar ? this._vScrollBar.skin : null
					}, function (t) {
						null == this._vScrollBar && (this.addChild(this._vScrollBar = new ce), this._vScrollBar.on("change", this, this.onVBarChanged), this._vScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._vScrollBar.skin = t
					}), r(0, s, "hScrollBarSkin", function () {
						return this._hScrollBar ? this._hScrollBar.skin : null
					}, function (t) {
						null == this._hScrollBar && (this.addChild(this._hScrollBar = new he), this._hScrollBar.on("change", this, this.onHBarChanged), this._hScrollBar.mouseWheelEnable = !1, this._hScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._hScrollBar.skin = t
					}), r(0, s, "vScrollBar", function () {
						return this._vScrollBar
					}), r(0, s, "maxScrollY", function () {
						return this._tf.maxScrollY
					}), r(0, s, "scrollX", function () {
						return this._tf.scrollX
					}), e
				}(_e),
				xe = function (t) {
					function e() {
						this.listData = null, this.pageIndex = 0, this.pageCount = 0, this.itemCount = 0, e.__super.call(this), e.I = this, _t.I.addEvent("scoreList", this, this.onFriendScore), i.stage.addChild(this), this.hideAll()
					}
					n(e, "PaiHang", fe);
					var s = e.prototype;
					return s.hideAll = function () {
						ct.hide(this.rankList)
					}, s.updatePaiHang = function (t) {
						this.hideAll(), ct.show(this.rankList);
						for (var e = 0; e < 5; e++) this.rankList.getChildAt(e).visible = !1;
						"" != t ? _t.I.getGroupScore(t) : _t.I.getFriendScore()
					}, s.onFriendScore = function () {
						this.listData = _t.I.data;
						var t;
						this.itemCount = this.listData.length;
						for (var e = 0; e < this.itemCount; e++)(t = this.listData[e]).openid == a.openid && -1 != a.scoreMax ? t.score = a.scoreMax : t.score = parseInt(t.KVDataList[0].value);
						this.listData.sort(this.sortByScore), this.pageIndex = 0, this.pageCount = Math.ceil(this.itemCount / 5), this.updateList()
					}, s.nextPage = function () {
						this.pageIndex < this.pageCount - 1 && this.pageIndex++, this.updateList()
					}, s.prePage = function () {
						this.pageIndex > 0 && this.pageIndex--, this.updateList()
					}, s.updateList = function () {
						for (var t = 0, e = 0; e < 5; e++)(t = 5 * this.pageIndex + e) < this.itemCount ? this.fillFriend(e, t) : this.fillFriend(e, -1);
						this.tPage.text = this.pageIndex + 1 + "/" + this.pageCount
					}, s.fillFriend = function (t, e) {
						var i = this.rankList.getChildAt(t);
						if (-1 == e) i.visible = !1;
						else {
							i.visible = !0;
							var s = this.listData[e];
							i.getChildByName("bg").skin = s.openid == a.openid ? "open/6.png" : "open/5.png", e < 3 ? (i.getChildByName("iIndex").skin = "open/" + (e + 1) + ".png", i.getChildByName("tIndex").text = "") : (i.getChildByName("iIndex").skin = "open/4.png", i.getChildByName("tIndex").text = "" + (e + 1)), i.getChildByName("iAvatar").skin = s.avatarUrl, i.getChildByName("tName").text = s.nickname, i.getChildByName("tLevel").text = s.score + "关", i.getChildByName("tTag").visible = !1
						}
					}, s.sortByScore = function (t, e) {
						return t.score > e.score ? -1 : t.score < e.score ? 1 : 0
					}, e.I = null, e
				}();
			i.__init([ft, h, H, B, Jt, J, de, E]), new a
		}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function (t, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			for (var i in Laya) {
				var s = Laya[i];
				s && s.__isclass && (e[i] = s)
			}
		});
	});
	define("open/weapp-adapter.js", function (require, module, exports) {
		/******/
		(function (modules) { // webpackBootstrap
			/******/ // The module cache
			/******/
			var installedModules = {};

			/******/ // The require function
			/******/
			function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/
				if (installedModules[moduleId])
					/******/
					return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/
				var module = installedModules[moduleId] = {
					/******/
					exports: {},
					/******/
					id: moduleId,
					/******/
					loaded: false
					/******/
				};

				/******/ // Execute the module function
				/******/
				modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/
				module.loaded = true;

				/******/ // Return the exports of the module
				/******/
				return module.exports;
				/******/
			}


			/******/ // expose the modules object (__webpack_modules__)
			/******/
			__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/
			__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/
			__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/
			return __webpack_require__(0);
			/******/
		})
		/************************************************************************/
		/******/
		([
			/* 0 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				var _window2 = __webpack_require__(1);

				var _window = _interopRequireWildcard(_window2);

				var _HTMLElement = __webpack_require__(4);

				var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				var global = GameGlobal;

				function inject() {
					_window.addEventListener = function (type, listener) {
						_window.document.addEventListener(type, listener);
					};
					_window.removeEventListener = function (type, listener) {
						_window.document.removeEventListener(type, listener);
					};

					if (_window.canvas) {
						_window.canvas.addEventListener = _window.addEventListener;
						_window.canvas.removeEventListener = _window.removeEventListener;
					}

					if (global.sharedCanvas) {
						// eslint-disable-next-line no-undef
						sharedCanvas.__proto__.__proto__ = new _HTMLElement2.default('canvas');
						// eslint-disable-next-line no-undef
						sharedCanvas.addEventListener = _window.addEventListener;
						// eslint-disable-next-line no-undef
						sharedCanvas.removeEventListener = _window.removeEventListener;
					}

					var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
						platform = _wx$getSystemInfoSync.platform;

					// 开发者工具无法重定义 window


					if (typeof __devtoolssubcontext === 'undefined' && platform === 'devtools') {
						for (var key in _window) {
							var descriptor = Object.getOwnPropertyDescriptor(global, key);

							if (!descriptor || descriptor.configurable === true) {
								Object.defineProperty(window, key, {
									value: _window[key]
								});
							}
						}

						for (var _key in _window.document) {
							var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key);

							if (!_descriptor || _descriptor.configurable === true) {
								Object.defineProperty(global.document, _key, {
									value: _window.document[_key]
								});
							}
						}
						window.parent = window;
					} else {
						for (var _key2 in _window) {
							global[_key2] = _window[_key2];
						}
						global.window = _window;
						window = global;
						window.top = window.parent = window;
					}
				}

				if (!GameGlobal.__isAdapterInjected) {
					GameGlobal.__isAdapterInjected = true;
					inject();
				}

				/***/
			}),
			/* 1 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined;

				var _WindowProperties = __webpack_require__(2);

				Object.keys(_WindowProperties).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _WindowProperties[key];
						}
					});
				});

				var _constructor = __webpack_require__(3);

				Object.keys(_constructor).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _constructor[key];
						}
					});
				});

				var _Canvas = __webpack_require__(9);

				var _Canvas2 = _interopRequireDefault(_Canvas);

				var _Util = __webpack_require__(17);

				var _document2 = __webpack_require__(10);

				var _document3 = _interopRequireDefault(_document2);

				var _navigator2 = __webpack_require__(18);

				var _navigator3 = _interopRequireDefault(_navigator2);

				var _XMLHttpRequest2 = __webpack_require__(19);

				var _XMLHttpRequest3 = _interopRequireDefault(_XMLHttpRequest2);

				var _WebSocket2 = __webpack_require__(20);

				var _WebSocket3 = _interopRequireDefault(_WebSocket2);

				var _Image2 = __webpack_require__(11);

				var _Image3 = _interopRequireDefault(_Image2);

				var _Audio2 = __webpack_require__(12);

				var _Audio3 = _interopRequireDefault(_Audio2);

				var _FileReader2 = __webpack_require__(21);

				var _FileReader3 = _interopRequireDefault(_FileReader2);

				var _HTMLElement2 = __webpack_require__(4);

				var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

				var _localStorage2 = __webpack_require__(22);

				var _localStorage3 = _interopRequireDefault(_localStorage2);

				var _location2 = __webpack_require__(23);

				var _location3 = _interopRequireDefault(_location2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				exports.document = _document3.default;
				exports.navigator = _navigator3.default;
				exports.XMLHttpRequest = _XMLHttpRequest3.default;
				exports.WebSocket = _WebSocket3.default;
				exports.Image = _Image3.default;
				exports.Audio = _Audio3.default;
				exports.FileReader = _FileReader3.default;
				exports.HTMLElement = _HTMLElement3.default;
				exports.localStorage = _localStorage3.default;
				exports.location = _location3.default;


				// 暴露全局的 canvas
				var canvas = (0, _Util.isSubContext)() ? undefined : new _Canvas2.default();

				exports.canvas = canvas;
				exports.setTimeout = setTimeout;
				exports.setInterval = setInterval;
				exports.clearTimeout = clearTimeout;
				exports.clearInterval = clearInterval;
				exports.requestAnimationFrame = requestAnimationFrame;
				exports.cancelAnimationFrame = cancelAnimationFrame;

				/***/
			}),
			/* 2 */
			/***/
			(function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
					screenWidth = _wx$getSystemInfoSync.screenWidth,
					screenHeight = _wx$getSystemInfoSync.screenHeight,
					devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio;

				var innerWidth = exports.innerWidth = screenWidth;
				var innerHeight = exports.innerHeight = screenHeight;
				exports.devicePixelRatio = devicePixelRatio;
				var screen = exports.screen = {
					availWidth: innerWidth,
					availHeight: innerHeight
				};
				var performance = exports.performance = {
					now: function now() {
						return Date.now() / 1000;
					}
				};
				var ontouchstart = exports.ontouchstart = null;
				var ontouchmove = exports.ontouchmove = null;
				var ontouchend = exports.ontouchend = null;

				/***/
			}),
			/* 3 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.HTMLCanvasElement = exports.HTMLImageElement = undefined;

				var _HTMLElement3 = __webpack_require__(4);

				var _HTMLElement4 = _interopRequireDefault(_HTMLElement3);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}
					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}
					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var HTMLImageElement = exports.HTMLImageElement = function (_HTMLElement) {
					_inherits(HTMLImageElement, _HTMLElement);

					function HTMLImageElement() {
						_classCallCheck(this, HTMLImageElement);

						return _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, 'img'));
					}

					return HTMLImageElement;
				}(_HTMLElement4.default);

				var HTMLCanvasElement = exports.HTMLCanvasElement = function (_HTMLElement2) {
					_inherits(HTMLCanvasElement, _HTMLElement2);

					function HTMLCanvasElement() {
						_classCallCheck(this, HTMLCanvasElement);

						return _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, 'canvas'));
					}

					return HTMLCanvasElement;
				}(_HTMLElement4.default);

				/***/
			}),
			/* 4 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				var _Element2 = __webpack_require__(5);

				var _Element3 = _interopRequireDefault(_Element2);

				var _util = __webpack_require__(8);

				var _WindowProperties = __webpack_require__(2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}
					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}
					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var HTMLElement = function (_Element) {
					_inherits(HTMLElement, _Element);

					function HTMLElement() {
						var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

						_classCallCheck(this, HTMLElement);

						var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));

						_this.className = '';
						_this.childern = [];
						_this.style = {
							width: _WindowProperties.innerWidth + 'px',
							height: _WindowProperties.innerHeight + 'px'
						};
						_this.insertBefore = _util.noop;
						_this.innerHTML = '';

						_this.tagName = tagName.toUpperCase();
						return _this;
					}

					_createClass(HTMLElement, [{
						key: 'setAttribute',
						value: function setAttribute(name, value) {
							this[name] = value;
						}
					}, {
						key: 'getAttribute',
						value: function getAttribute(name) {
							return this[name];
						}
					}, {
						key: 'getBoundingClientRect',
						value: function getBoundingClientRect() {
							return {
								top: 0,
								left: 0,
								width: _WindowProperties.innerWidth,
								height: _WindowProperties.innerHeight
							};
						}
					}, {
						key: 'focus',
						value: function focus() {}
					}, {
						key: 'clientWidth',
						get: function get() {
							var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;

							return Number.isNaN(ret) ? 0 : ret;
						}
					}, {
						key: 'clientHeight',
						get: function get() {
							var ret = parseInt(this.style.fontSize, 10);

							return Number.isNaN(ret) ? 0 : ret;
						}
					}]);

					return HTMLElement;
				}(_Element3.default);

				exports.default = HTMLElement;

				/***/
			}),
			/* 5 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _Node2 = __webpack_require__(6);

				var _Node3 = _interopRequireDefault(_Node2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}
					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}
					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var ELement = function (_Node) {
					_inherits(ELement, _Node);

					function ELement() {
						_classCallCheck(this, ELement);

						var _this = _possibleConstructorReturn(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));

						_this.className = '';
						_this.children = [];
						return _this;
					}

					return ELement;
				}(_Node3.default);

				exports.default = ELement;

				/***/
			}),
			/* 6 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				var _EventTarget2 = __webpack_require__(7);

				var _EventTarget3 = _interopRequireDefault(_EventTarget2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}
					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}
					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var Node = function (_EventTarget) {
					_inherits(Node, _EventTarget);

					function Node() {
						_classCallCheck(this, Node);

						var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

						_this.childNodes = [];
						return _this;
					}

					_createClass(Node, [{
						key: 'appendChild',
						value: function appendChild(node) {
							if (node instanceof Node) {
								this.childNodes.push(node);
							} else {
								throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
							}
						}
					}, {
						key: 'cloneNode',
						value: function cloneNode() {
							var copyNode = Object.create(this);

							Object.assign(copyNode, this);
							return copyNode;
						}
					}, {
						key: 'removeChild',
						value: function removeChild(node) {
							var index = this.childNodes.findIndex(function (child) {
								return child === node;
							});

							if (index > -1) {
								return this.childNodes.splice(index, 1);
							}
							return null;
						}
					}]);

					return Node;
				}(_EventTarget3.default);

				exports.default = Node;

				/***/
			}),
			/* 7 */
			/***/
			(function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var _events = new WeakMap();

				var EventTarget = function () {
					function EventTarget() {
						_classCallCheck(this, EventTarget);

						_events.set(this, {});
					}

					_createClass(EventTarget, [{
						key: 'addEventListener',
						value: function addEventListener(type, listener) {
							var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

							var events = _events.get(this);

							if (!events) {
								events = {};
								_events.set(this, events);
							}
							if (!events[type]) {
								events[type] = [];
							}
							events[type].push(listener);

							if (options.capture) {
								console.warn('EventTarget.addEventListener: options.capture is not implemented.');
							}
							if (options.once) {
								console.warn('EventTarget.addEventListener: options.once is not implemented.');
							}
							if (options.passive) {
								console.warn('EventTarget.addEventListener: options.passive is not implemented.');
							}
						}
					}, {
						key: 'removeEventListener',
						value: function removeEventListener(type, listener) {
							var listeners = _events.get(this)[type];

							if (listeners && listeners.length > 0) {
								for (var i = listeners.length; i--; i > 0) {
									if (listeners[i] === listener) {
										listeners.splice(i, 1);
										break;
									}
								}
							}
						}
					}, {
						key: 'dispatchEvent',
						value: function dispatchEvent() {
							var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

							var listeners = _events.get(this)[event.type];

							if (listeners) {
								for (var i = 0; i < listeners.length; i++) {
									listeners[i](event);
								}
							}
						}
					}]);

					return EventTarget;
				}();

				exports.default = EventTarget;

				/***/
			}),
			/* 8 */
			/***/
			(function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.noop = noop;
				exports.isSubContext = isSubContext;

				function noop() {}

				function isSubContext() {
					return typeof GameGlobal !== 'undefined' && GameGlobal.__isSubContext === true;
				}

				/***/
			}),
			/* 9 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = Canvas;

				var _constructor = __webpack_require__(3);

				var _HTMLElement = __webpack_require__(4);

				var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

				var _document = __webpack_require__(10);

				var _document2 = _interopRequireDefault(_document);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				var hasModifiedCanvasPrototype = false;
				var hasInit2DContextConstructor = false;
				var hasInitWebGLContextConstructor = false;

				function Canvas() {
					var canvas = wx.createCanvas();

					canvas.type = 'canvas';

					canvas.__proto__.__proto__ = new _HTMLElement2.default('canvas');

					var _getContext = canvas.getContext;

					canvas.getBoundingClientRect = function () {
						var ret = {
							top: 0,
							left: 0,
							width: window.innerWidth,
							height: window.innerHeight
						};
						return ret;
					};

					return canvas;
				}

				/***/
			}),
			/* 10 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _window = __webpack_require__(1);

				var window = _interopRequireWildcard(_window);

				var _HTMLElement = __webpack_require__(4);

				var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

				var _Image = __webpack_require__(11);

				var _Image2 = _interopRequireDefault(_Image);

				var _Audio = __webpack_require__(12);

				var _Audio2 = _interopRequireDefault(_Audio);

				var _Canvas = __webpack_require__(9);

				var _Canvas2 = _interopRequireDefault(_Canvas);

				__webpack_require__(15);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				var events = {};

				var document = {
					readyState: 'complete',
					visibilityState: 'visible',
					documentElement: window,
					hidden: false,
					style: {},
					location: window.location,
					ontouchstart: null,
					ontouchmove: null,
					ontouchend: null,

					head: new _HTMLElement2.default('head'),
					body: new _HTMLElement2.default('body'),

					createElement: function createElement(tagName) {
						if (tagName === 'canvas') {
							return new _Canvas2.default();
						} else if (tagName === 'audio') {
							return new _Audio2.default();
						} else if (tagName === 'img') {
							return new _Image2.default();
						}

						return new _HTMLElement2.default(tagName);
					},
					getElementById: function getElementById(id) {
						if (id === window.canvas.id) {
							return window.canvas;
						}
						return null;
					},
					getElementsByTagName: function getElementsByTagName(tagName) {
						if (tagName === 'head') {
							return [document.head];
						} else if (tagName === 'body') {
							return [document.body];
						} else if (tagName === 'canvas') {
							return [window.canvas];
						}
						return [];
					},
					querySelector: function querySelector(query) {
						if (query === 'head') {
							return document.head;
						} else if (query === 'body') {
							return document.body;
						} else if (query === 'canvas') {
							return window.canvas;
						} else if (query === '#' + window.canvas.id) {
							return window.canvas;
						}
						return null;
					},
					querySelectorAll: function querySelectorAll(query) {
						if (query === 'head') {
							return [document.head];
						} else if (query === 'body') {
							return [document.body];
						} else if (query === 'canvas') {
							return [window.canvas];
						}
						return [];
					},
					addEventListener: function addEventListener(type, listener) {
						if (!events[type]) {
							events[type] = [];
						}
						events[type].push(listener);
					},
					removeEventListener: function removeEventListener(type, listener) {
						var listeners = events[type];

						if (listeners && listeners.length > 0) {
							for (var i = listeners.length; i--; i > 0) {
								if (listeners[i] === listener) {
									listeners.splice(i, 1);
									break;
								}
							}
						}
					},
					dispatchEvent: function dispatchEvent(event) {
						var listeners = events[event.type];

						if (listeners) {
							for (var i = 0; i < listeners.length; i++) {
								listeners[i](event);
							}
						}
					}
				};

				exports.default = document;

				/***/
			}),
			/* 11 */
			/***/
			(function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = Image;

				function Image() {
					var image = wx.createImage();

					return image;
				}

				/***/
			}),
			/* 12 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				var _HTMLAudioElement2 = __webpack_require__(13);

				var _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2);

				var _util = __webpack_require__(8);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}
					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}
					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var HAVE_NOTHING = 0;
				var HAVE_METADATA = 1;
				var HAVE_CURRENT_DATA = 2;
				var HAVE_FUTURE_DATA = 3;
				var HAVE_ENOUGH_DATA = 4;

				var _innerAudioContext = new WeakMap();
				var _src = new WeakMap();
				var _loop = new WeakMap();
				var _autoplay = new WeakMap();

				var Audio = function (_HTMLAudioElement) {
					_inherits(Audio, _HTMLAudioElement);

					function Audio(url) {
						_classCallCheck(this, Audio);

						var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

						_this.HAVE_NOTHING = HAVE_NOTHING;
						_this.HAVE_METADATA = HAVE_METADATA;
						_this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
						_this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
						_this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
						_this.readyState = HAVE_NOTHING;


						if ((0, _util.isSubContext)()) {
							console.warn('HTMLAudioElement is not supported in SubContext.');
							return _possibleConstructorReturn(_this);
						}

						_src.set(_this, '');

						var innerAudioContext = wx.createInnerAudioContext();

						_innerAudioContext.set(_this, innerAudioContext);

						innerAudioContext.onCanplay(function () {
							_this.dispatchEvent({
								type: 'load'
							});
							_this.dispatchEvent({
								type: 'loadend'
							});
							_this.dispatchEvent({
								type: 'canplay'
							});
							_this.dispatchEvent({
								type: 'canplaythrough'
							});
							_this.dispatchEvent({
								type: 'loadedmetadata'
							});
							_this.readyState = HAVE_CURRENT_DATA;
						});
						innerAudioContext.onPlay(function () {
							_this.dispatchEvent({
								type: 'play'
							});
						});
						innerAudioContext.onPause(function () {
							_this.dispatchEvent({
								type: 'pause'
							});
						});
						innerAudioContext.onEnded(function () {
							_this.dispatchEvent({
								type: 'ended'
							});
							_this.readyState = HAVE_ENOUGH_DATA;
						});
						innerAudioContext.onError(function () {
							_this.dispatchEvent({
								type: 'error'
							});
						});

						if (url) {
							_innerAudioContext.get(_this).src = url;
						}
						return _this;
					}

					_createClass(Audio, [{
						key: 'load',
						value: function load() {
							console.warn('HTMLAudioElement.load() is not implemented.');
						}
					}, {
						key: 'play',
						value: function play() {
							if (!(0, _util.isSubContext)()) {
								_innerAudioContext.get(this).play();
							}
						}
					}, {
						key: 'pause',
						value: function pause() {
							if (!(0, _util.isSubContext)()) {
								_innerAudioContext.get(this).pause();
							}
						}
					}, {
						key: 'canPlayType',
						value: function canPlayType() {
							var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

							if (typeof mediaType !== 'string') {
								return '';
							}

							if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
								return 'probably';
							}
							return '';
						}
					}, {
						key: 'cloneNode',
						value: function cloneNode() {
							var newAudio = new Audio();
							if (!(0, _util.isSubContext)()) {
								newAudio.loop = _innerAudioContext.get(this).loop;
								newAudio.autoplay = _innerAudioContext.get(this).loop;
								newAudio.src = this.src;
							}
							return newAudio;
						}
					}, {
						key: 'currentTime',
						get: function get() {
							if (!(0, _util.isSubContext)()) {
								return _innerAudioContext.get(this).currentTime;
							}
							return 0;
						},
						set: function set(value) {
							if (!(0, _util.isSubContext)()) {
								_innerAudioContext.get(this).seek(value);
							}
						}
					}, {
						key: 'src',
						get: function get() {
							return _src.get(this);
						},
						set: function set(value) {
							_src.set(this, value);
							if (!(0, _util.isSubContext)()) {
								_innerAudioContext.get(this).src = value;
							}
						}
					}, {
						key: 'loop',
						get: function get() {
							if (!(0, _util.isSubContext)()) {
								return _innerAudioContext.get(this).loop;
							}
							return false;
						},
						set: function set(value) {
							if (!(0, _util.isSubContext)()) {
								_innerAudioContext.get(this).loop = value;
							}
						}
					}, {
						key: 'autoplay',
						get: function get() {
							if (!(0, _util.isSubContext)()) {
								return _innerAudioContext.get(this).autoplay;
							}
							return false;
						},
						set: function set(value) {
							if (!(0, _util.isSubContext)()) {
								_innerAudioContext.get(this).autoplay = value;
							}
						}
					}, {
						key: 'paused',
						get: function get() {
							if (!(0, _util.isSubContext)()) {
								return _innerAudioContext.get(this).paused;
							}
							return false;
						}
					}]);

					return Audio;
				}(_HTMLAudioElement3.default);

				exports.default = Audio;

				/***/
			}),
			/* 13 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _HTMLMediaElement2 = __webpack_require__(14);

				var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}
					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}
					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var HTMLAudioElement = function (_HTMLMediaElement) {
					_inherits(HTMLAudioElement, _HTMLMediaElement);

					function HTMLAudioElement() {
						_classCallCheck(this, HTMLAudioElement);

						return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, 'audio'));
					}

					return HTMLAudioElement;
				}(_HTMLMediaElement3.default);

				exports.default = HTMLAudioElement;

				/***/
			}),
			/* 14 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				var _HTMLElement2 = __webpack_require__(4);

				var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}
					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}
					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var HTMLMediaElement = function (_HTMLElement) {
					_inherits(HTMLMediaElement, _HTMLElement);

					function HTMLMediaElement(type) {
						_classCallCheck(this, HTMLMediaElement);

						return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, type));
					}

					_createClass(HTMLMediaElement, [{
						key: 'addTextTrack',
						value: function addTextTrack() {}
					}, {
						key: 'captureStream',
						value: function captureStream() {}
					}, {
						key: 'fastSeek',
						value: function fastSeek() {}
					}, {
						key: 'load',
						value: function load() {}
					}, {
						key: 'pause',
						value: function pause() {}
					}, {
						key: 'play',
						value: function play() {}
					}]);

					return HTMLMediaElement;
				}(_HTMLElement3.default);

				exports.default = HTMLMediaElement;

				/***/
			}),
			/* 15 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				__webpack_require__(16);

				/***/
			}),
			/* 16 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				var _window = __webpack_require__(1);

				var window = _interopRequireWildcard(_window);

				var _document = __webpack_require__(10);

				var _document2 = _interopRequireDefault(_document);

				var _util = __webpack_require__(8);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var TouchEvent = function TouchEvent(type) {
					_classCallCheck(this, TouchEvent);

					this.target = window.canvas;
					this.currentTarget = window.canvas;
					this.touches = [];
					this.targetTouches = [];
					this.changedTouches = [];
					this.preventDefault = _util.noop;
					this.stopPropagation = _util.noop;

					this.type = type;
				};

				function touchEventHandlerFactory(type) {
					return function (event) {
						var touchEvent = new TouchEvent(type);

						touchEvent.touches = event.touches;
						touchEvent.targetTouches = Array.prototype.slice.call(event.touches);
						touchEvent.changedTouches = event.changedTouches;
						touchEvent.timeStamp = event.timeStamp;
						_document2.default.dispatchEvent(touchEvent);
					};
				}

				wx.onTouchStart(touchEventHandlerFactory('touchstart'));
				wx.onTouchMove(touchEventHandlerFactory('touchmove'));
				wx.onTouchEnd(touchEventHandlerFactory('touchend'));
				wx.onTouchCancel(touchEventHandlerFactory('touchcancel'));

				/***/
			}),
			/* 17 */
			/***/
			(function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.noop = noop;
				exports.isSubContext = isSubContext;

				function noop() {}

				function isSubContext() {
					return typeof GameGlobal !== 'undefined' && GameGlobal.__isSubContext === true;
				}

				/***/
			}),
			/* 18 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _util = __webpack_require__(8);

				// TODO 需要 wx.getSystemInfo 获取更详细信息
				var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
					platform = _wx$getSystemInfoSync.platform;

				var navigator = {
					platform: platform,
					language: 'zh-cn',
					appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
					userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
					onLine: true, // TODO 用 wx.getNetworkStateChange 和 wx.onNetworkStateChange 来返回真实的状态

					// TODO 用 wx.getLocation 来封装 geolocation
					geolocation: {
						getCurrentPosition: _util.noop,
						watchPosition: _util.noop,
						clearWatch: _util.noop
					}
				};

				exports.default = navigator;

				/***/
			}),
			/* 19 */
			/***/
			(function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var _url = new WeakMap();
				var _method = new WeakMap();
				var _requestHeader = new WeakMap();
				var _responseHeader = new WeakMap();
				var _requestTask = new WeakMap();

				function _triggerEvent(type) {
					if (typeof this['on' + type] === 'function') {
						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						this['on' + type].apply(this, args);
					}
				}

				function _changeReadyState(readyState) {
					this.readyState = readyState;
					_triggerEvent.call(this, 'readystatechange');
				}

				var XMLHttpRequest = function () {
					// TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
					function XMLHttpRequest() {
						_classCallCheck(this, XMLHttpRequest);

						this.onabort = null;
						this.onerror = null;
						this.onload = null;
						this.onloadstart = null;
						this.onprogress = null;
						this.ontimeout = null;
						this.onloadend = null;
						this.onreadystatechange = null;
						this.readyState = 0;
						this.response = null;
						this.responseText = null;
						this.responseType = '';
						this.responseXML = null;
						this.status = 0;
						this.statusText = '';
						this.upload = {};
						this.withCredentials = false;

						_requestHeader.set(this, {
							'content-type': 'application/x-www-form-urlencoded'
						});
						_responseHeader.set(this, {});
					}

					/*
					 * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
					 */


					_createClass(XMLHttpRequest, [{
						key: 'abort',
						value: function abort() {
							var myRequestTask = _requestTask.get(this);

							if (myRequestTask) {
								myRequestTask.abort();
							}
						}
					}, {
						key: 'getAllResponseHeaders',
						value: function getAllResponseHeaders() {
							var responseHeader = _responseHeader.get(this);

							return Object.keys(responseHeader).map(function (header) {
								return header + ': ' + responseHeader[header];
							}).join('\n');
						}
					}, {
						key: 'getResponseHeader',
						value: function getResponseHeader(header) {
							return _responseHeader.get(this)[header];
						}
					}, {
						key: 'open',
						value: function open(method, url /* async, user, password 这几个参数在小程序内不支持*/ ) {
							_method.set(this, method);
							_url.set(this, url);
							_changeReadyState.call(this, XMLHttpRequest.OPENED);
						}
					}, {
						key: 'overrideMimeType',
						value: function overrideMimeType() {}
					}, {
						key: 'send',
						value: function send() {
							var _this = this;

							var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

							if (this.readyState !== XMLHttpRequest.OPENED) {
								throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
							} else {
								wx.request({
									data: data,
									url: _url.get(this),
									method: _method.get(this),
									header: _requestHeader.get(this),
									responseType: this.responseType,
									success: function success(_ref) {
										var data = _ref.data,
											statusCode = _ref.statusCode,
											header = _ref.header;

										if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
											try {
												data = JSON.stringify(data);
											} catch (e) {
												data = data;
											}
										}

										_this.status = statusCode;
										_responseHeader.set(_this, header);
										_triggerEvent.call(_this, 'loadstart');
										_changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED);
										_changeReadyState.call(_this, XMLHttpRequest.LOADING);

										_this.response = data;

										if (data instanceof ArrayBuffer) {
											_this.responseText = '';
											var bytes = new Uint8Array(data);
											var len = bytes.byteLength;

											for (var i = 0; i < len; i++) {
												_this.responseText += String.fromCharCode(bytes[i]);
											}
										} else {
											_this.responseText = data;
										}
										_changeReadyState.call(_this, XMLHttpRequest.DONE);
										_triggerEvent.call(_this, 'load');
										_triggerEvent.call(_this, 'loadend');
									},
									fail: function fail(_ref2) {
										var errMsg = _ref2.errMsg;

										// TODO 规范错误
										if (errMsg.indexOf('abort') !== -1) {
											_triggerEvent.call(_this, 'abort');
										} else {
											_triggerEvent.call(_this, 'error', errMsg);
										}
										_triggerEvent.call(_this, 'loadend');
									}
								});
							}
						}
					}, {
						key: 'setRequestHeader',
						value: function setRequestHeader(header, value) {
							var myHeader = _requestHeader.get(this);

							myHeader[header] = value;
							_requestHeader.set(this, myHeader);
						}
					}]);

					return XMLHttpRequest;
				}();

				XMLHttpRequest.UNSEND = 0;
				XMLHttpRequest.OPENED = 1;
				XMLHttpRequest.HEADERS_RECEIVED = 2;
				XMLHttpRequest.LOADING = 3;
				XMLHttpRequest.DONE = 4;
				exports.default = XMLHttpRequest;

				/***/
			}),
			/* 20 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				var _util = __webpack_require__(8);

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var _socketTask = new WeakMap();

				var WebSocket = function () {
					// TODO 更新 binaryType
					// The connection is in the process of closing.
					// The connection is not yet open.
					function WebSocket(url) {
						var _this = this;

						var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

						_classCallCheck(this, WebSocket);

						this.binaryType = '';
						this.bufferedAmount = 0;
						this.extensions = '';
						this.onclose = null;
						this.onerror = null;
						this.onmessage = null;
						this.onopen = null;
						this.protocol = '';
						this.readyState = 3;

						if ((0, _util.isSubContext)()) {
							throw new Error('WebSocket is not supported in SubContext.');
						}

						if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
							throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid');
						}

						this.url = url;
						this.readyState = WebSocket.CONNECTING;

						var socketTask = wx.connectSocket({
							url: url,
							protocols: Array.isArray(protocols) ? protocols : [protocols]
						});

						_socketTask.set(this, socketTask);

						socketTask.onClose(function (res) {
							_this.readyState = WebSocket.CLOSED;
							if (typeof _this.onclose === 'function') {
								_this.onclose(res);
							}
						});

						socketTask.onMessage(function (res) {
							if (typeof _this.onmessage === 'function') {
								_this.onmessage(res);
							}
						});

						socketTask.onOpen(function () {
							_this.readyState = WebSocket.OPEN;
							if (typeof _this.onopen === 'function') {
								_this.onopen();
							}
						});

						socketTask.onError(function (res) {
							if (typeof _this.onerror === 'function') {
								_this.onerror(new Error(res.errMsg));
							}
						});

						return this;
					} // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
					// TODO 更新 bufferedAmount
					// The connection is closed or couldn't be opened.

					// The connection is open and ready to communicate.


					_createClass(WebSocket, [{
						key: 'close',
						value: function close(code, reason) {
							this.readyState = WebSocket.CLOSING;
							var socketTask = _socketTask.get(this);

							socketTask.close({
								code: code,
								reason: reason
							});
						}
					}, {
						key: 'send',
						value: function send(data) {
							if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
								throw new TypeError('Failed to send message: The data ' + data + ' is invalid');
							}

							var socketTask = _socketTask.get(this);

							socketTask.send({
								data: data
							});
						}
					}]);

					return WebSocket;
				}();

				WebSocket.CONNECTING = 0;
				WebSocket.OPEN = 1;
				WebSocket.CLOSING = 2;
				WebSocket.CLOSED = 3;
				exports.default = WebSocket;

				/***/
			}),
			/* 21 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				var _util = __webpack_require__(8);

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				/*
				 * TODO 使用 wx.readFile 来封装 FileReader
				 */
				var FileReader = function () {
					function FileReader() {
						_classCallCheck(this, FileReader);
					}

					_createClass(FileReader, [{
						key: 'construct',
						value: function construct() {
							if ((0, _util.isSubContext)()) {
								throw new Error('FileReader is not supported in SubContext.');
							}
						}
					}]);

					return FileReader;
				}();

				exports.default = FileReader;

				/***/
			}),
			/* 22 */
			/***/
			(function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _util = __webpack_require__(8);

				var mainContext = {
					get length() {
						var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
							keys = _wx$getStorageInfoSyn.keys;

						return keys.length;
					},

					key: function key(n) {
						var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
							keys = _wx$getStorageInfoSyn2.keys;

						return keys[n];
					},
					getItem: function getItem(key) {
						return wx.getStorageSync(key);
					},
					setItem: function setItem(key, value) {
						return wx.setStorageSync(key, value);
					},
					removeItem: function removeItem(key) {
						wx.removeStorageSync(key);
					},
					clear: function clear() {
						wx.clearStorageSync();
					}
				};

				var memLocalStorage = {};

				var subContext = {
					get length() {
						var keys = Object.keys(memLocalStorage);

						return keys.length;
					},

					key: function key(n) {
						var keys = Object.keys(memLocalStorage);

						return keys[n];
					},
					getItem: function getItem(key) {
						return memLocalStorage[key];
					},
					setItem: function setItem(key, value) {
						memLocalStorage[key] = value;
					},
					removeItem: function removeItem(key) {
						delete memLocalStorage[key];
					},
					clear: function clear() {
						memLocalStorage = {};
					}
				};

				var localStorage = (0, _util.isSubContext)() ? subContext : mainContext;

				exports.default = localStorage;

				/***/
			}),
			/* 23 */
			/***/
			(function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var location = {
					href: 'game.js',
					reload: function reload() {}
				};

				exports.default = location;

				/***/
			})
			/******/
		]);
	});
	define("open/index.js", function (require, module, exports) {
		require("weapp-adapter.js");
		require("./code.js");
	});
	require("open/index.js");