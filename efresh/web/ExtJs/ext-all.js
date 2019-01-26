/*
 * Ext JS Library 3.1.0 Copyright(c) 2006-2009 Ext JS, LLC licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.DomHelper = function() {
	var t = null, k = /^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i, m = /^table|tbody|tr|td$/i, q, n = "afterbegin", o = "afterend", c = "beforebegin", p = "beforeend", a = "<table>", h = "</table>", b = a
			+ "<tbody>", j = "</tbody>" + h, l = b + "<tr>", s = "</tr>" + j;
	function g(x, z, y, A, w, u) {
		var v = q.insertHtml(A, Ext.getDom(x), r(z));
		return y ? Ext.get(v, true) : v
	}
	function r(A) {
		var w = "", v, z, y, u, B;
		if (Ext.isString(A)) {
			w = A
		} else {
			if (Ext.isArray(A)) {
				for (var x = 0; x < A.length; x++) {
					if (A[x]) {
						w += r(A[x])
					}
				}
			} else {
				w += "<" + (A.tag = A.tag || "div");
				Ext.iterate(A, function(C, D) {
							if (!/tag|children|cn|html$/i.test(C)) {
								if (Ext.isObject(D)) {
									w += " " + C + '="';
									Ext.iterate(D, function(F, E) {
												w += F + ":" + E + ";"
											});
									w += '"'
								} else {
									w += " " + ({
										cls : "class",
										htmlFor : "for"
									}[C] || C) + '="' + D + '"'
								}
							}
						});
				if (k.test(A.tag)) {
					w += "/>"
				} else {
					w += ">";
					if ((B = A.children || A.cn)) {
						w += r(B)
					} else {
						if (A.html) {
							w += A.html
						}
					}
					w += "</" + A.tag + ">"
				}
			}
		}
		return w
	}
	function e(B, y, x, z) {
		t.innerHTML = [y, x, z].join("");
		var u = -1, w = t, v;
		while (++u < B) {
			w = w.firstChild
		}
		if (v = w.nextSibling) {
			var A = document.createDocumentFragment();
			while (w) {
				v = w.nextSibling;
				A.appendChild(w);
				w = v
			}
			w = A
		}
		return w
	}
	function d(u, v, x, w) {
		var y, z;
		t = t || document.createElement("div");
		if (u == "td" && (v == n || v == p) || !/td|tr|tbody/i.test(u)
				&& (v == c || v == o)) {
			return
		}
		z = v == c ? x : v == o ? x.nextSibling : v == n ? x.firstChild : null;
		if (v == c || v == o) {
			x = x.parentNode
		}
		if (u == "td" || (u == "tr" && (v == p || v == n))) {
			y = e(4, l, w, s)
		} else {
			if ((u == "tbody" && (v == p || v == n))
					|| (u == "tr" && (v == c || v == o))) {
				y = e(3, b, w, j)
			} else {
				y = e(2, a, w, h)
			}
		}
		x.insertBefore(y, z);
		return y
	}
	q = {
		markup : function(u) {
			return r(u)
		},
		applyStyles : function(x, y) {
			if (y) {
				var v = 0, u, w;
				x = Ext.fly(x);
				if (Ext.isFunction(y)) {
					y = y.call()
				}
				if (Ext.isString(y)) {
					y = y.trim().split(/\s*(?::|;)\s*/);
					for (u = y.length; v < u;) {
						x.setStyle(y[v++], y[v++])
					}
				} else {
					if (Ext.isObject(y)) {
						x.setStyle(y)
					}
				}
			}
		},
		insertHtml : function(z, u, A) {
			var y = {}, w, C, B, D, x, v;
			z = z.toLowerCase();
			y[c] = ["BeforeBegin", "previousSibling"];
			y[o] = ["AfterEnd", "nextSibling"];
			if (u.insertAdjacentHTML) {
				if (m.test(u.tagName)
						&& (v = d(u.tagName.toLowerCase(), z, u, A))) {
					return v
				}
				y[n] = ["AfterBegin", "firstChild"];
				y[p] = ["BeforeEnd", "lastChild"];
				if ((w = y[z])) {
					u.insertAdjacentHTML(w[0], A);
					return u[w[1]]
				}
			} else {
				B = u.ownerDocument.createRange();
				C = "setStart" + (/end/i.test(z) ? "After" : "Before");
				if (y[z]) {
					B[C](u);
					D = B.createContextualFragment(A);
					u.parentNode.insertBefore(D, z == c ? u : u.nextSibling);
					return u[(z == c ? "previous" : "next") + "Sibling"]
				} else {
					x = (z == n ? "first" : "last") + "Child";
					if (u.firstChild) {
						B[C](u[x]);
						D = B.createContextualFragment(A);
						if (z == n) {
							u.insertBefore(D, u.firstChild)
						} else {
							u.appendChild(D)
						}
					} else {
						u.innerHTML = A
					}
					return u[x]
				}
			}
			throw 'Illegal insertion point -> "' + z + '"'
		},
		insertBefore : function(u, w, v) {
			return g(u, w, v, c)
		},
		insertAfter : function(u, w, v) {
			return g(u, w, v, o, "nextSibling")
		},
		insertFirst : function(u, w, v) {
			return g(u, w, v, n, "firstChild")
		},
		append : function(u, w, v) {
			return g(u, w, v, p, "", true)
		},
		overwrite : function(u, w, v) {
			u = Ext.getDom(u);
			u.innerHTML = r(w);
			return v ? Ext.get(u.firstChild) : u.firstChild
		},
		createHtml : r
	};
	return q
}();
Ext.apply(Ext.DomHelper, function() {
	var d, a = "afterbegin", g = "afterend", h = "beforebegin", c = "beforeend";
	function e(m, p, n, q, l, j) {
		m = Ext.getDom(m);
		var k;
		if (d.useDom) {
			k = b(p, null);
			if (j) {
				m.appendChild(k)
			} else {
				(l == "firstChild" ? m : m.parentNode).insertBefore(k, m[l]
								|| m)
			}
		} else {
			k = Ext.DomHelper.insertHtml(q, m, Ext.DomHelper.createHtml(p))
		}
		return n ? Ext.get(k, true) : k
	}
	function b(q, k) {
		var m, n = document, l, j, p, r;
		if (Ext.isArray(q)) {
			m = n.createDocumentFragment();
			Ext.each(q, function(o) {
						b(o, m)
					})
		} else {
			if (Ext.isString(q)) {
				m = n.createTextNode(q)
			} else {
				m = n.createElement(q.tag || "div");
				l = !!m.setAttribute;
				Ext.iterate(q, function(o, s) {
							if (!/tag|children|cn|html|style/.test(o)) {
								if (o == "cls") {
									m.className = s
								} else {
									if (l) {
										m.setAttribute(o, s)
									} else {
										m[o] = s
									}
								}
							}
						});
				Ext.DomHelper.applyStyles(m, q.style);
				if ((r = q.children || q.cn)) {
					b(r, m)
				} else {
					if (q.html) {
						m.innerHTML = q.html
					}
				}
			}
		}
		if (k) {
			k.appendChild(m)
		}
		return m
	}
	d = {
		createTemplate : function(k) {
			var j = Ext.DomHelper.createHtml(k);
			return new Ext.Template(j)
		},
		useDom : false,
		insertBefore : function(j, l, k) {
			return e(j, l, k, h)
		},
		insertAfter : function(j, l, k) {
			return e(j, l, k, g, "nextSibling")
		},
		insertFirst : function(j, l, k) {
			return e(j, l, k, a, "firstChild")
		},
		append : function(j, l, k) {
			return e(j, l, k, c, "", true)
		},
		createDom : b
	};
	return d
}());
Ext.Template = function(d) {
	var e = this, b = arguments, c = [];
	if (Ext.isArray(d)) {
		d = d.join("")
	} else {
		if (b.length > 1) {
			Ext.each(b, function(a) {
						if (Ext.isObject(a)) {
							Ext.apply(e, a)
						} else {
							c.push(a)
						}
					});
			d = c.join("")
		}
	}
	e.html = d;
	if (e.compiled) {
		e.compile()
	}
};
Ext.Template.prototype = {
	re : /\{([\w-]+)\}/g,
	applyTemplate : function(a) {
		var b = this;
		return b.compiled ? b.compiled(a) : b.html.replace(b.re,
				function(c, d) {
					return a[d] !== undefined ? a[d] : ""
				})
	},
	set : function(a, c) {
		var b = this;
		b.html = a;
		b.compiled = null;
		return c ? b.compile() : b
	},
	compile : function() {
		var me = this, sep = Ext.isGecko ? "+" : ",";
		function fn(m, name) {
			name = "values['" + name + "']";
			return "'" + sep + "(" + name + " == undefined ? '' : " + name
					+ ")" + sep + "'"
		}
		eval("this.compiled = function(values){ return "
				+ (Ext.isGecko ? "'" : "['")
				+ me.html.replace(/\\/g, "\\\\").replace(/(\r\n|\n)/g, "\\n")
						.replace(/'/g, "\\'").replace(this.re, fn)
				+ (Ext.isGecko ? "';};" : "'].join('');};"));
		return me
	},
	insertFirst : function(b, a, c) {
		return this.doInsert("afterBegin", b, a, c)
	},
	insertBefore : function(b, a, c) {
		return this.doInsert("beforeBegin", b, a, c)
	},
	insertAfter : function(b, a, c) {
		return this.doInsert("afterEnd", b, a, c)
	},
	append : function(b, a, c) {
		return this.doInsert("beforeEnd", b, a, c)
	},
	doInsert : function(c, e, b, a) {
		e = Ext.getDom(e);
		var d = Ext.DomHelper.insertHtml(c, e, this.applyTemplate(b));
		return a ? Ext.get(d, true) : d
	},
	overwrite : function(b, a, c) {
		b = Ext.getDom(b);
		b.innerHTML = this.applyTemplate(a);
		return c ? Ext.get(b.firstChild, true) : b.firstChild
	}
};
Ext.Template.prototype.apply = Ext.Template.prototype.applyTemplate;
Ext.Template.from = function(b, a) {
	b = Ext.getDom(b);
	return new Ext.Template(b.value || b.innerHTML, a || "")
};
Ext.apply(Ext.Template.prototype, {
	disableFormats : false,
	re : /\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,
	applyTemplate : function(b) {
		var g = this, a = g.disableFormats !== true, e = Ext.util.Format, c = g;
		if (g.compiled) {
			return g.compiled(b)
		}
		function d(j, l, p, k) {
			if (p && a) {
				if (p.substr(0, 5) == "this.") {
					return c.call(p.substr(5), b[l], b)
				} else {
					if (k) {
						var o = /^\s*['"](.*)["']\s*$/;
						k = k.split(",");
						for (var n = 0, h = k.length; n < h; n++) {
							k[n] = k[n].replace(o, "$1")
						}
						k = [b[l]].concat(k)
					} else {
						k = [b[l]]
					}
					return e[p].apply(e, k)
				}
			} else {
				return b[l] !== undefined ? b[l] : ""
			}
		}
		return g.html.replace(g.re, d)
	},
	compile : function() {
		var me = this, fm = Ext.util.Format, useF = me.disableFormats !== true, sep = Ext.isGecko
				? "+"
				: ",", body;
		function fn(m, name, format, args) {
			if (format && useF) {
				args = args ? "," + args : "";
				if (format.substr(0, 5) != "this.") {
					format = "fm." + format + "("
				} else {
					format = 'this.call("' + format.substr(5) + '", ';
					args = ", values"
				}
			} else {
				args = "";
				format = "(values['" + name + "'] == undefined ? '' : "
			}
			return "'" + sep + format + "values['" + name + "']" + args + ")"
					+ sep + "'"
		}
		if (Ext.isGecko) {
			body = "this.compiled = function(values){ return '"
					+ me.html.replace(/\\/g, "\\\\").replace(/(\r\n|\n)/g,
							"\\n").replace(/'/g, "\\'").replace(this.re, fn)
					+ "';};"
		} else {
			body = ["this.compiled = function(values){ return ['"];
			body.push(me.html.replace(/\\/g, "\\\\").replace(/(\r\n|\n)/g,
					"\\n").replace(/'/g, "\\'").replace(this.re, fn));
			body.push("'].join('');};");
			body = body.join("")
		}
		eval(body);
		return me
	},
	call : function(c, b, a) {
		return this[c](b, a)
	}
});
Ext.Template.prototype.apply = Ext.Template.prototype.applyTemplate;
Ext.DomQuery = function() {
	var cache = {}, simpleCache = {}, valueCache = {}, nonSpace = /\S/, trimRe = /^\s+|\s+$/g, tplRe = /\{(\d+)\}/g, modeRe = /^(\s?[\/>+~]\s?|\s|$)/, tagTokenRe = /^(#)?([\w-\*]+)/, nthRe = /(\d*)n\+?(\d*)/, nthRe2 = /\D/, isIE = window.ActiveXObject
			? true
			: false, key = 30803;
	eval("var batch = 30803;");
	function child(p, index) {
		var i = 0, n = p.firstChild;
		while (n) {
			if (n.nodeType == 1) {
				if (++i == index) {
					return n
				}
			}
			n = n.nextSibling
		}
		return null
	}
	function next(n) {
		while ((n = n.nextSibling) && n.nodeType != 1) {
		}
		return n
	}
	function prev(n) {
		while ((n = n.previousSibling) && n.nodeType != 1) {
		}
		return n
	}
	function children(d) {
		var n = d.firstChild, ni = -1, nx;
		while (n) {
			nx = n.nextSibling;
			if (n.nodeType == 3 && !nonSpace.test(n.nodeValue)) {
				d.removeChild(n)
			} else {
				n.nodeIndex = ++ni
			}
			n = nx
		}
		return this
	}
	function byClassName(c, a, v) {
		if (!v) {
			return c
		}
		var r = [], ri = -1, cn;
		for (var i = 0, ci; ci = c[i]; i++) {
			if ((" " + ci.className + " ").indexOf(v) != -1) {
				r[++ri] = ci
			}
		}
		return r
	}
	function attrValue(n, attr) {
		if (!n.tagName && typeof n.length != "undefined") {
			n = n[0]
		}
		if (!n) {
			return null
		}
		if (attr == "for") {
			return n.htmlFor
		}
		if (attr == "class" || attr == "className") {
			return n.className
		}
		return n.getAttribute(attr) || n[attr]
	}
	function getNodes(ns, mode, tagName) {
		var result = [], ri = -1, cs;
		if (!ns) {
			return result
		}
		tagName = tagName || "*";
		if (typeof ns.getElementsByTagName != "undefined") {
			ns = [ns]
		}
		if (!mode) {
			for (var i = 0, ni; ni = ns[i]; i++) {
				cs = ni.getElementsByTagName(tagName);
				for (var j = 0, ci; ci = cs[j]; j++) {
					result[++ri] = ci
				}
			}
		} else {
			if (mode == "/" || mode == ">") {
				var utag = tagName.toUpperCase();
				for (var i = 0, ni, cn; ni = ns[i]; i++) {
					cn = ni.childNodes;
					for (var j = 0, cj; cj = cn[j]; j++) {
						if (cj.nodeName == utag || cj.nodeName == tagName
								|| tagName == "*") {
							result[++ri] = cj
						}
					}
				}
			} else {
				if (mode == "+") {
					var utag = tagName.toUpperCase();
					for (var i = 0, n; n = ns[i]; i++) {
						while ((n = n.nextSibling) && n.nodeType != 1) {
						}
						if (n
								&& (n.nodeName == utag || n.nodeName == tagName || tagName == "*")) {
							result[++ri] = n
						}
					}
				} else {
					if (mode == "~") {
						var utag = tagName.toUpperCase();
						for (var i = 0, n; n = ns[i]; i++) {
							while ((n = n.nextSibling)) {
								if (n.nodeName == utag || n.nodeName == tagName
										|| tagName == "*") {
									result[++ri] = n
								}
							}
						}
					}
				}
			}
		}
		return result
	}
	function concat(a, b) {
		if (b.slice) {
			return a.concat(b)
		}
		for (var i = 0, l = b.length; i < l; i++) {
			a[a.length] = b[i]
		}
		return a
	}
	function byTag(cs, tagName) {
		if (cs.tagName || cs == document) {
			cs = [cs]
		}
		if (!tagName) {
			return cs
		}
		var r = [], ri = -1;
		tagName = tagName.toLowerCase();
		for (var i = 0, ci; ci = cs[i]; i++) {
			if (ci.nodeType == 1 && ci.tagName.toLowerCase() == tagName) {
				r[++ri] = ci
			}
		}
		return r
	}
	function byId(cs, attr, id) {
		if (cs.tagName || cs == document) {
			cs = [cs]
		}
		if (!id) {
			return cs
		}
		var r = [], ri = -1;
		for (var i = 0, ci; ci = cs[i]; i++) {
			if (ci && ci.id == id) {
				r[++ri] = ci;
				return r
			}
		}
		return r
	}
	function byAttribute(cs, attr, value, op, custom) {
		var r = [], ri = -1, st = custom == "{", f = Ext.DomQuery.operators[op];
		for (var i = 0, ci; ci = cs[i]; i++) {
			if (ci.nodeType != 1) {
				continue
			}
			var a;
			if (st) {
				a = Ext.DomQuery.getStyle(ci, attr)
			} else {
				if (attr == "class" || attr == "className") {
					a = ci.className
				} else {
					if (attr == "for") {
						a = ci.htmlFor
					} else {
						if (attr == "href") {
							a = ci.getAttribute("href", 2)
						} else {
							a = ci.getAttribute(attr)
						}
					}
				}
			}
			if ((f && f(a, value)) || (!f && a)) {
				r[++ri] = ci
			}
		}
		return r
	}
	function byPseudo(cs, name, value) {
		return Ext.DomQuery.pseudos[name](cs, value)
	}
	function nodupIEXml(cs) {
		var d = ++key, r;
		cs[0].setAttribute("_nodup", d);
		r = [cs[0]];
		for (var i = 1, len = cs.length; i < len; i++) {
			var c = cs[i];
			if (!c.getAttribute("_nodup") != d) {
				c.setAttribute("_nodup", d);
				r[r.length] = c
			}
		}
		for (var i = 0, len = cs.length; i < len; i++) {
			cs[i].removeAttribute("_nodup")
		}
		return r
	}
	function nodup(cs) {
		if (!cs) {
			return []
		}
		var len = cs.length, c, i, r = cs, cj, ri = -1;
		if (!len || typeof cs.nodeType != "undefined" || len == 1) {
			return cs
		}
		if (isIE && typeof cs[0].selectSingleNode != "undefined") {
			return nodupIEXml(cs)
		}
		var d = ++key;
		cs[0]._nodup = d;
		for (i = 1; c = cs[i]; i++) {
			if (c._nodup != d) {
				c._nodup = d
			} else {
				r = [];
				for (var j = 0; j < i; j++) {
					r[++ri] = cs[j]
				}
				for (j = i + 1; cj = cs[j]; j++) {
					if (cj._nodup != d) {
						cj._nodup = d;
						r[++ri] = cj
					}
				}
				return r
			}
		}
		return r
	}
	function quickDiffIEXml(c1, c2) {
		var d = ++key, r = [];
		for (var i = 0, len = c1.length; i < len; i++) {
			c1[i].setAttribute("_qdiff", d)
		}
		for (var i = 0, len = c2.length; i < len; i++) {
			if (c2[i].getAttribute("_qdiff") != d) {
				r[r.length] = c2[i]
			}
		}
		for (var i = 0, len = c1.length; i < len; i++) {
			c1[i].removeAttribute("_qdiff")
		}
		return r
	}
	function quickDiff(c1, c2) {
		var len1 = c1.length, d = ++key, r = [];
		if (!len1) {
			return c2
		}
		if (isIE && typeof c1[0].selectSingleNode != "undefined") {
			return quickDiffIEXml(c1, c2)
		}
		for (var i = 0; i < len1; i++) {
			c1[i]._qdiff = d
		}
		for (var i = 0, len = c2.length; i < len; i++) {
			if (c2[i]._qdiff != d) {
				r[r.length] = c2[i]
			}
		}
		return r
	}
	function quickId(ns, mode, root, id) {
		if (ns == root) {
			var d = root.ownerDocument || root;
			return d.getElementById(id)
		}
		ns = getNodes(ns, mode, "*");
		return byId(ns, null, id)
	}
	return {
		getStyle : function(el, name) {
			return Ext.fly(el).getStyle(name)
		},
		compile : function(path, type) {
			type = type || "select";
			var fn = ["var f = function(root){\n var mode; ++batch; var n = root || document;\n"], q = path, mode, lq, tk = Ext.DomQuery.matchers, tklen = tk.length, mm, lmode = q
					.match(modeRe);
			if (lmode && lmode[1]) {
				fn[fn.length] = 'mode="' + lmode[1].replace(trimRe, "") + '";';
				q = q.replace(lmode[1], "")
			}
			while (path.substr(0, 1) == "/") {
				path = path.substr(1)
			}
			while (q && lq != q) {
				lq = q;
				var tm = q.match(tagTokenRe);
				if (type == "select") {
					if (tm) {
						if (tm[1] == "#") {
							fn[fn.length] = 'n = quickId(n, mode, root, "'
									+ tm[2] + '");'
						} else {
							fn[fn.length] = 'n = getNodes(n, mode, "' + tm[2]
									+ '");'
						}
						q = q.replace(tm[0], "")
					} else {
						if (q.substr(0, 1) != "@") {
							fn[fn.length] = 'n = getNodes(n, mode, "*");'
						}
					}
				} else {
					if (tm) {
						if (tm[1] == "#") {
							fn[fn.length] = 'n = byId(n, null, "' + tm[2]
									+ '");'
						} else {
							fn[fn.length] = 'n = byTag(n, "' + tm[2] + '");'
						}
						q = q.replace(tm[0], "")
					}
				}
				while (!(mm = q.match(modeRe))) {
					var matched = false;
					for (var j = 0; j < tklen; j++) {
						var t = tk[j];
						var m = q.match(t.re);
						if (m) {
							fn[fn.length] = t.select.replace(tplRe, function(x,
											i) {
										return m[i]
									});
							q = q.replace(m[0], "");
							matched = true;
							break
						}
					}
					if (!matched) {
						throw 'Error parsing selector, parsing failed at "' + q
								+ '"'
					}
				}
				if (mm[1]) {
					fn[fn.length] = 'mode="' + mm[1].replace(trimRe, "") + '";';
					q = q.replace(mm[1], "")
				}
			}
			fn[fn.length] = "return nodup(n);\n}";
			eval(fn.join(""));
			return f
		},
		select : function(path, root, type) {
			if (!root || root == document) {
				root = document
			}
			if (typeof root == "string") {
				root = document.getElementById(root)
			}
			var paths = path.split(","), results = [];
			for (var i = 0, len = paths.length; i < len; i++) {
				var p = paths[i].replace(trimRe, "");
				if (!cache[p]) {
					cache[p] = Ext.DomQuery.compile(p);
					if (!cache[p]) {
						throw p + " is not a valid selector"
					}
				}
				var result = cache[p](root);
				if (result && result != document) {
					results = results.concat(result)
				}
			}
			if (paths.length > 1) {
				return nodup(results)
			}
			return results
		},
		selectNode : function(path, root) {
			return Ext.DomQuery.select(path, root)[0]
		},
		selectValue : function(path, root, defaultValue) {
			path = path.replace(trimRe, "");
			if (!valueCache[path]) {
				valueCache[path] = Ext.DomQuery.compile(path, "select")
			}
			var n = valueCache[path](root), v;
			n = n[0] ? n[0] : n;
			if (typeof n.normalize == "function") {
				n.normalize()
			}
			v = (n && n.firstChild ? n.firstChild.nodeValue : null);
			return ((v === null || v === undefined || v === "")
					? defaultValue
					: v)
		},
		selectNumber : function(path, root, defaultValue) {
			var v = Ext.DomQuery.selectValue(path, root, defaultValue || 0);
			return parseFloat(v)
		},
		is : function(el, ss) {
			if (typeof el == "string") {
				el = document.getElementById(el)
			}
			var isArray = Ext.isArray(el), result = Ext.DomQuery.filter(isArray
							? el
							: [el], ss);
			return isArray ? (result.length == el.length) : (result.length > 0)
		},
		filter : function(els, ss, nonMatches) {
			ss = ss.replace(trimRe, "");
			if (!simpleCache[ss]) {
				simpleCache[ss] = Ext.DomQuery.compile(ss, "simple")
			}
			var result = simpleCache[ss](els);
			return nonMatches ? quickDiff(result, els) : result
		},
		matchers : [{
					re : /^\.([\w-]+)/,
					select : 'n = byClassName(n, null, " {1} ");'
				}, {
					re : /^\:([\w-]+)(?:\(((?:[^\s>\/]*|.*?))\))?/,
					select : 'n = byPseudo(n, "{1}", "{2}");'
				}, {
					re : /^(?:([\[\{])(?:@)?([\w-]+)\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]\}])/,
					select : 'n = byAttribute(n, "{2}", "{4}", "{3}", "{1}");'
				}, {
					re : /^#([\w-]+)/,
					select : 'n = byId(n, null, "{1}");'
				}, {
					re : /^@([\w-]+)/,
					select : 'return {firstChild:{nodeValue:attrValue(n, "{1}")}};'
				}],
		operators : {
			"=" : function(a, v) {
				return a == v
			},
			"!=" : function(a, v) {
				return a != v
			},
			"^=" : function(a, v) {
				return a && a.substr(0, v.length) == v
			},
			"$=" : function(a, v) {
				return a && a.substr(a.length - v.length) == v
			},
			"*=" : function(a, v) {
				return a && a.indexOf(v) !== -1
			},
			"%=" : function(a, v) {
				return (a % v) == 0
			},
			"|=" : function(a, v) {
				return a && (a == v || a.substr(0, v.length + 1) == v + "-")
			},
			"~=" : function(a, v) {
				return a && (" " + a + " ").indexOf(" " + v + " ") != -1
			}
		},
		pseudos : {
			"first-child" : function(c) {
				var r = [], ri = -1, n;
				for (var i = 0, ci; ci = n = c[i]; i++) {
					while ((n = n.previousSibling) && n.nodeType != 1) {
					}
					if (!n) {
						r[++ri] = ci
					}
				}
				return r
			},
			"last-child" : function(c) {
				var r = [], ri = -1, n;
				for (var i = 0, ci; ci = n = c[i]; i++) {
					while ((n = n.nextSibling) && n.nodeType != 1) {
					}
					if (!n) {
						r[++ri] = ci
					}
				}
				return r
			},
			"nth-child" : function(c, a) {
				var r = [], ri = -1, m = nthRe.exec(a == "even" && "2n"
						|| a == "odd" && "2n+1" || !nthRe2.test(a) && "n+" + a
						|| a), f = (m[1] || 1) - 0, l = m[2] - 0;
				for (var i = 0, n; n = c[i]; i++) {
					var pn = n.parentNode;
					if (batch != pn._batch) {
						var j = 0;
						for (var cn = pn.firstChild; cn; cn = cn.nextSibling) {
							if (cn.nodeType == 1) {
								cn.nodeIndex = ++j
							}
						}
						pn._batch = batch
					}
					if (f == 1) {
						if (l == 0 || n.nodeIndex == l) {
							r[++ri] = n
						}
					} else {
						if ((n.nodeIndex + l) % f == 0) {
							r[++ri] = n
						}
					}
				}
				return r
			},
			"only-child" : function(c) {
				var r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					if (!prev(ci) && !next(ci)) {
						r[++ri] = ci
					}
				}
				return r
			},
			empty : function(c) {
				var r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					var cns = ci.childNodes, j = 0, cn, empty = true;
					while (cn = cns[j]) {
						++j;
						if (cn.nodeType == 1 || cn.nodeType == 3) {
							empty = false;
							break
						}
					}
					if (empty) {
						r[++ri] = ci
					}
				}
				return r
			},
			contains : function(c, v) {
				var r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					if ((ci.textContent || ci.innerText || "").indexOf(v) != -1) {
						r[++ri] = ci
					}
				}
				return r
			},
			nodeValue : function(c, v) {
				var r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					if (ci.firstChild && ci.firstChild.nodeValue == v) {
						r[++ri] = ci
					}
				}
				return r
			},
			checked : function(c) {
				var r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					if (ci.checked == true) {
						r[++ri] = ci
					}
				}
				return r
			},
			not : function(c, ss) {
				return Ext.DomQuery.filter(c, ss, true)
			},
			any : function(c, selectors) {
				var ss = selectors.split("|"), r = [], ri = -1, s;
				for (var i = 0, ci; ci = c[i]; i++) {
					for (var j = 0; s = ss[j]; j++) {
						if (Ext.DomQuery.is(ci, s)) {
							r[++ri] = ci;
							break
						}
					}
				}
				return r
			},
			odd : function(c) {
				return this["nth-child"](c, "odd")
			},
			even : function(c) {
				return this["nth-child"](c, "even")
			},
			nth : function(c, a) {
				return c[a - 1] || []
			},
			first : function(c) {
				return c[0] || []
			},
			last : function(c) {
				return c[c.length - 1] || []
			},
			has : function(c, ss) {
				var s = Ext.DomQuery.select, r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					if (s(ss, ci).length > 0) {
						r[++ri] = ci
					}
				}
				return r
			},
			next : function(c, ss) {
				var is = Ext.DomQuery.is, r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					var n = next(ci);
					if (n && is(n, ss)) {
						r[++ri] = ci
					}
				}
				return r
			},
			prev : function(c, ss) {
				var is = Ext.DomQuery.is, r = [], ri = -1;
				for (var i = 0, ci; ci = c[i]; i++) {
					var n = prev(ci);
					if (n && is(n, ss)) {
						r[++ri] = ci
					}
				}
				return r
			}
		}
	}
}();
Ext.query = Ext.DomQuery.select;
Ext.util.DelayedTask = function(d, c, a) {
	var e = this, g, b = function() {
		clearInterval(g);
		g = null;
		d.apply(c, a || [])
	};
	e.delay = function(j, l, k, h) {
		e.cancel();
		d = l || d;
		c = k || c;
		a = h || a;
		g = setInterval(b, j)
	};
	e.cancel = function() {
		if (g) {
			clearInterval(g);
			g = null
		}
	}
};
(function() {
	var j = Ext.util, m = Ext.toArray, l = Ext.each, a = Ext.isObject, h = true, k = false;
	j.Observable = function() {
		var n = this, o = n.events;
		if (n.listeners) {
			n.on(n.listeners);
			delete n.listeners
		}
		n.events = o || {}
	};
	j.Observable.prototype = {
		filterOptRe : /^(?:scope|delay|buffer|single)$/,
		fireEvent : function() {
			var n = m(arguments), p = n[0].toLowerCase(), r = this, o = h, t = r.events[p], s, u;
			if (r.eventsSuspended === h) {
				if (s = r.eventQueue) {
					s.push(n)
				}
			} else {
				if (a(t) && t.bubble) {
					if (t.fire.apply(t, n.slice(1)) === k) {
						return k
					}
					u = r.getBubbleTarget && r.getBubbleTarget();
					if (u && u.enableBubble) {
						if (!u.events[p] || !Ext.isObject(u.events[p])
								|| !u.events[p].bubble) {
							u.enableBubble(p)
						}
						return u.fireEvent.apply(u, n)
					}
				} else {
					if (a(t)) {
						n.shift();
						o = t.fire.apply(t, n)
					}
				}
			}
			return o
		},
		addListener : function(q, t, v, p) {
			var s = this, r, w, u, n;
			if (a(q)) {
				p = q;
				for (r in p) {
					w = p[r];
					if (!s.filterOptRe.test(r)) {
						s.addListener(r, w.fn || w, w.scope || p.scope, w.fn
										? w
										: p)
					}
				}
			} else {
				q = q.toLowerCase();
				n = s.events[q] || h;
				if (Ext.isBoolean(n)) {
					s.events[q] = n = new j.Event(s, q)
				}
				n.addListener(t, v, a(p) ? p : {})
			}
		},
		removeListener : function(n, p, o) {
			var q = this.events[n.toLowerCase()];
			if (a(q)) {
				q.removeListener(p, o)
			}
		},
		purgeListeners : function() {
			var p = this.events, n, o;
			for (o in p) {
				n = p[o];
				if (a(n)) {
					n.clearListeners()
				}
			}
		},
		addEvents : function(r) {
			var q = this;
			q.events = q.events || {};
			if (Ext.isString(r)) {
				var n = arguments, p = n.length;
				while (p--) {
					q.events[n[p]] = q.events[n[p]] || h
				}
			} else {
				Ext.applyIf(q.events, r)
			}
		},
		hasListener : function(n) {
			var o = this.events[n];
			return a(o) && o.listeners.length > 0
		},
		suspendEvents : function(n) {
			this.eventsSuspended = h;
			if (n && !this.eventQueue) {
				this.eventQueue = []
			}
		},
		resumeEvents : function() {
			var n = this, o = n.eventQueue || [];
			n.eventsSuspended = k;
			delete n.eventQueue;
			l(o, function(p) {
						n.fireEvent.apply(n, p)
					})
		}
	};
	var e = j.Observable.prototype;
	e.on = e.addListener;
	e.un = e.removeListener;
	j.Observable.releaseCapture = function(n) {
		n.fireEvent = e.fireEvent
	};
	function g(p, q, n) {
		return function() {
			if (q.target == arguments[0]) {
				p.apply(n, m(arguments))
			}
		}
	}
	function c(q, r, p, n) {
		p.task = new j.DelayedTask();
		return function() {
			p.task.delay(r.buffer, q, n, m(arguments))
		}
	}
	function d(p, q, o, n) {
		return function() {
			q.removeListener(o, n);
			return p.apply(n, arguments)
		}
	}
	function b(q, r, p, n) {
		return function() {
			var o = new j.DelayedTask();
			if (!p.tasks) {
				p.tasks = []
			}
			p.tasks.push(o);
			o.delay(r.delay || 10, q, n, m(arguments))
		}
	}
	j.Event = function(o, n) {
		this.name = n;
		this.obj = o;
		this.listeners = []
	};
	j.Event.prototype = {
		addListener : function(q, p, o) {
			var r = this, n;
			p = p || r.obj;
			if (!r.isListening(q, p)) {
				n = r.createListener(q, p, o);
				if (r.firing) {
					r.listeners = r.listeners.slice(0)
				}
				r.listeners.push(n)
			}
		},
		createListener : function(r, q, s) {
			s = s || {}, q = q || this.obj;
			var n = {
				fn : r,
				scope : q,
				options : s
			}, p = r;
			if (s.target) {
				p = g(p, s, q)
			}
			if (s.delay) {
				p = b(p, s, r, q)
			}
			if (s.single) {
				p = d(p, this, r, q)
			}
			if (s.buffer) {
				p = c(p, s, r, q)
			}
			n.fireFn = p;
			return n
		},
		findListener : function(r, q) {
			var t = this.listeners, o = t.length, n, p;
			while (o--) {
				n = t[o];
				if (n) {
					p = n.scope;
					if (n.fn == r && (p == q || p == this.obj)) {
						return o
					}
				}
			}
			return -1
		},
		isListening : function(o, n) {
			return this.findListener(o, n) != -1
		},
		removeListener : function(s, r) {
			var q, n, o, t = this, p = k;
			if ((q = t.findListener(s, r)) != -1) {
				if (t.firing) {
					t.listeners = t.listeners.slice(0)
				}
				n = t.listeners[q].fn;
				if (n.task) {
					n.task.cancel();
					delete n.task
				}
				o = n.tasks && n.tasks.length;
				if (o) {
					while (o--) {
						n.tasks[o].cancel()
					}
					delete n.tasks
				}
				t.listeners.splice(q, 1);
				p = h
			}
			return p
		},
		clearListeners : function() {
			var p = this, n = p.listeners, o = n.length;
			while (o--) {
				p.removeListener(n[o].fn, n[o].scope)
			}
		},
		fire : function() {
			var s = this, p = m(arguments), r = s.listeners, n = r.length, q = 0, o;
			if (n > 0) {
				s.firing = h;
				for (; q < n; q++) {
					o = r[q];
					if (o
							&& o.fireFn.apply(o.scope || s.obj || window, p) === k) {
						return (s.firing = k)
					}
				}
			}
			s.firing = k;
			return h
		}
	}
})();
Ext.apply(Ext.util.Observable.prototype, function() {
	function a(k) {
		var j = (this.methodEvents = this.methodEvents || {})[k], d, c, g, h = this;
		if (!j) {
			this.methodEvents[k] = j = {};
			j.originalFn = this[k];
			j.methodName = k;
			j.before = [];
			j.after = [];
			var b = function(m, l, e) {
				if (!Ext.isEmpty(c = m.apply(l || h, e))) {
					if (Ext.isObject(c)) {
						d = !Ext.isEmpty(c.returnValue) ? c.returnValue : c;
						g = !!c.cancel
					} else {
						if (c === false) {
							g = true
						} else {
							d = c
						}
					}
				}
			};
			this[k] = function() {
				var e = Ext.toArray(arguments);
				d = c = undefined;
				g = false;
				Ext.each(j.before, function(l) {
							b(l.fn, l.scope, e);
							if (g) {
								return d
							}
						});
				if (!Ext.isEmpty(c = j.originalFn.apply(h, e))) {
					d = c
				}
				Ext.each(j.after, function(l) {
							b(l.fn, l.scope, e);
							if (g) {
								return d
							}
						});
				return d
			}
		}
		return j
	}
	return {
		beforeMethod : function(d, c, b) {
			a.call(this, d).before.push({
						fn : c,
						scope : b
					})
		},
		afterMethod : function(d, c, b) {
			a.call(this, d).after.push({
						fn : c,
						scope : b
					})
		},
		removeMethodListener : function(h, c, b) {
			var g = a.call(this, h), d = false;
			Ext.each(g.before, function(j, k, e) {
						if (j.fn == c && j.scope == b) {
							e.splice(k, 1);
							d = true;
							return false
						}
					});
			if (!d) {
				Ext.each(g.after, function(j, k, e) {
							if (j.fn == c && j.scope == b) {
								e.splice(k, 1);
								return false
							}
						})
			}
		},
		relayEvents : function(e, b) {
			var d = this;
			function c(g) {
				return function() {
					return d.fireEvent.apply(d, [g].concat(Ext
									.toArray(arguments)))
				}
			}
			Ext.each(b, function(g) {
						d.events[g] = d.events[g] || true;
						e.on(g, c(g), d)
					})
		},
		enableBubble : function(b) {
			var c = this;
			if (!Ext.isEmpty(b)) {
				b = Ext.isArray(b) ? b : Ext.toArray(arguments);
				Ext.each(b, function(d) {
							d = d.toLowerCase();
							var e = c.events[d] || true;
							if (Ext.isBoolean(e)) {
								e = new Ext.util.Event(c, d);
								c.events[d] = e
							}
							e.bubble = true
						})
			}
		}
	}
}());
Ext.util.Observable.capture = function(c, b, a) {
	c.fireEvent = c.fireEvent.createInterceptor(b, a)
};
Ext.util.Observable.observeClass = function(b, a) {
	if (b) {
		if (!b.fireEvent) {
			Ext.apply(b, new Ext.util.Observable());
			Ext.util.Observable.capture(b.prototype, b.fireEvent, b)
		}
		if (Ext.isObject(a)) {
			b.on(a)
		}
		return b
	}
};
Ext.EventManager = function() {
	var v, n, j = false, m = Ext.lib.Event, o = Ext.lib.Dom, b = document, w = window, e = "ie-deferred-loader", p = "DOMContentLoaded", g = /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/, r = [];
	function l(z) {
		var C = false, y = 0, x = r.length, C = false, A = false, B;
		if (z) {
			if (z.getElementById || z.navigator) {
				for (; y < x; ++y) {
					B = r[y];
					if (B.el === z) {
						C = B.id;
						break
					}
				}
				if (!C) {
					C = Ext.id(z);
					r.push({
								id : C,
								el : z
							});
					A = true
				}
			} else {
				C = Ext.id(z)
			}
			if (!Ext.elCache[C]) {
				Ext.Element.addToCache(new Ext.Element(z), C);
				if (A) {
					Ext.elCache[C].skipGC = true
				}
			}
		}
		return C
	}
	function k(z, A, D, y, F) {
		z = Ext.getDom(z);
		var x = l(z), E = Ext.elCache[x].events, B;
		B = m.on(z, A, y);
		E[A] = E[A] || [];
		E[A].push([D, y, F, B]);
		if (A == "mousewheel" && z.addEventListener) {
			var C = ["DOMMouseScroll", y, false];
			z.addEventListener.apply(z, C);
			Ext.EventManager.addListener(w, "unload", function() {
						z.removeEventListener.apply(z, C)
					})
		}
		if (A == "mousedown" && z == document) {
			Ext.EventManager.stoppedMouseDownEvent.addListener(y)
		}
	}
	function c() {
		if (!j) {
			Ext.isReady = j = true;
			if (n) {
				clearInterval(n)
			}
			if (Ext.isGecko || Ext.isOpera) {
				b.removeEventListener(p, c, false)
			}
			if (Ext.isIE) {
				var x = b.getElementById(e);
				if (x) {
					x.onreadystatechange = null;
					x.parentNode.removeChild(x)
				}
			}
			if (v) {
				v.fire();
				v.listeners = []
			}
		}
	}
	function a() {
		var x = "complete";
		v = new Ext.util.Event();
		if (Ext.isGecko || Ext.isOpera) {
			b.addEventListener(p, c, false)
		} else {
			if (Ext.isIE) {
				b.write("<script id=" + e
						+ ' defer="defer" src="//:"><\/script>');
				b.getElementById(e).onreadystatechange = function() {
					if (this.readyState == x) {
						c()
					}
				}
			} else {
				if (Ext.isWebKit) {
					n = setInterval(function() {
								if (b.readyState == x) {
									c()
								}
							}, 10)
				}
			}
		}
		m.on(w, "load", c)
	}
	function t(x, y) {
		return function() {
			var z = Ext.toArray(arguments);
			if (y.target == Ext.EventObject.setEvent(z[0]).target) {
				x.apply(this, z)
			}
		}
	}
	function u(z, A, y) {
		y.task = new Ext.util.DelayedTask(z);
		var x = function(B) {
			y.task.delay(A.buffer, z, null, [new Ext.EventObjectImpl(B)])
		};
		return x
	}
	function q(B, A, x, z, y) {
		return function(C) {
			Ext.EventManager.removeListener(A, x, z, y);
			B(C)
		}
	}
	function d(y, z, x) {
		return function(B) {
			var A = new Ext.util.DelayedTask(y);
			if (!x.tasks) {
				x.tasks = []
			}
			x.tasks.push(A);
			A.delay(z.delay || 10, y, null, [new Ext.EventObjectImpl(B)])
		}
	}
	function h(z, y, x, D, C) {
		var E = !Ext.isObject(x) ? {} : x, B = Ext.getDom(z);
		D = D || E.fn;
		C = C || E.scope;
		if (!B) {
			throw 'Error listening for "' + y + '". Element "' + z
					+ "\" doesn't exist."
		}
		function A(G) {
			if (!Ext) {
				return
			}
			G = Ext.EventObject.setEvent(G);
			var F;
			if (E.delegate) {
				if (!(F = G.getTarget(E.delegate, B))) {
					return
				}
			} else {
				F = G.target
			}
			if (E.stopEvent) {
				G.stopEvent()
			}
			if (E.preventDefault) {
				G.preventDefault()
			}
			if (E.stopPropagation) {
				G.stopPropagation()
			}
			if (E.normalized) {
				G = G.browserEvent
			}
			D.call(C || B, G, F, E)
		}
		if (E.target) {
			A = t(A, E)
		}
		if (E.delay) {
			A = d(A, E, D)
		}
		if (E.single) {
			A = q(A, B, y, D, C)
		}
		if (E.buffer) {
			A = u(A, E, D)
		}
		k(B, y, D, A, C);
		return A
	}
	var s = {
		addListener : function(z, x, B, A, y) {
			if (Ext.isObject(x)) {
				var E = x, C, D;
				for (C in E) {
					D = E[C];
					if (!g.test(C)) {
						if (Ext.isFunction(D)) {
							h(z, C, E, D, E.scope)
						} else {
							h(z, C, D)
						}
					}
				}
			} else {
				h(z, x, y, B, A)
			}
		},
		removeListener : function(A, E, G, H) {
			A = Ext.getDom(A);
			var x = l(A), F = A && (Ext.elCache[x].events)[E] || [], y, D, B, C, z;
			for (D = 0, len = F.length; D < len; D++) {
				if (Ext.isArray(F[D]) && F[D][0] == G && (!H || F[D][2] == H)) {
					if (G.task) {
						G.task.cancel();
						delete G.task
					}
					C = G.tasks && G.tasks.length;
					if (C) {
						while (C--) {
							G.tasks[C].cancel()
						}
						delete G.tasks
					}
					z = y = F[D][1];
					if (m.extAdapter) {
						z = F[D][3]
					}
					m.un(A, E, z);
					F.splice(D, 1);
					if (F.length === 0) {
						delete Ext.elCache[x].events[E]
					}
					for (C in Ext.elCache[x].events) {
						return false
					}
					Ext.elCache[x].events = {};
					return false
				}
			}
			if (E == "mousewheel" && A.addEventListener && y) {
				A.removeEventListener("DOMMouseScroll", y, false)
			}
			if (E == "mousedown" && A == b && y) {
				Ext.EventManager.stoppedMouseDownEvent.removeListener(y)
			}
		},
		removeAll : function(y) {
			y = Ext.getDom(y);
			var x = l(y), D = Ext.elCache[x] || {}, G = D.events || {}, C, B, E, z, F, A;
			for (z in G) {
				if (G.hasOwnProperty(z)) {
					C = G[z];
					for (B = 0, E = C.length; B < E; B++) {
						F = C[B][0];
						if (F.task) {
							F.task.cancel();
							delete F.task
						}
						if (F.tasks && (A = F.tasks.length)) {
							while (A--) {
								F.tasks[A].cancel()
							}
							delete F.tasks
						}
						m.un(y, z, m.extAdapter ? C[B][3] : C[B][1])
					}
				}
			}
			if (Ext.elCache[x]) {
				Ext.elCache[x].events = {}
			}
		},
		getListeners : function(A, x) {
			A = Ext.getDom(A);
			var C = l(A), y = Ext.elCache[C] || {}, B = y.events || {}, z = [];
			if (B && B[x]) {
				return B[x]
			} else {
				return null
			}
		},
		purgeElement : function(z, x, B) {
			z = Ext.getDom(z);
			var y = l(z), E = Ext.elCache[y] || {}, F = E.events || {}, A, D, C;
			if (B) {
				if (F && F.hasOwnProperty(B)) {
					D = F[B];
					for (A = 0, C = D.length; A < C; A++) {
						Ext.EventManager.removeListener(z, B, D[A][0])
					}
				}
			} else {
				Ext.EventManager.removeAll(z)
			}
			if (x && z && z.childNodes) {
				for (A = 0, C = z.childNodes.length; A < C; A++) {
					Ext.EventManager.purgeElement(z.childNodes[A], x, B)
				}
			}
		},
		_unload : function() {
			var x;
			for (x in Ext.elCache) {
				Ext.EventManager.removeAll(x)
			}
		},
		onDocumentReady : function(z, y, x) {
			if (j) {
				v.addListener(z, y, x);
				v.fire();
				v.listeners = []
			} else {
				if (!v) {
					a()
				}
				x = x || {};
				x.delay = x.delay || 1;
				v.addListener(z, y, x)
			}
		}
	};
	s.on = s.addListener;
	s.un = s.removeListener;
	s.stoppedMouseDownEvent = new Ext.util.Event();
	return s
}();
Ext.onReady = Ext.EventManager.onDocumentReady;
(function() {
	var a = function() {
		var c = document.body || document.getElementsByTagName("body")[0];
		if (!c) {
			return false
		}
		var b = [
				" ",
				Ext.isIE ? "ext-ie "
						+ (Ext.isIE6 ? "ext-ie6" : (Ext.isIE7
								? "ext-ie7"
								: "ext-ie8")) : Ext.isGecko
						? "ext-gecko "
								+ (Ext.isGecko2 ? "ext-gecko2" : "ext-gecko3")
						: Ext.isOpera ? "ext-opera" : Ext.isWebKit
								? "ext-webkit"
								: ""];
		if (Ext.isSafari) {
			b.push("ext-safari "
					+ (Ext.isSafari2 ? "ext-safari2" : (Ext.isSafari3
							? "ext-safari3"
							: "ext-safari4")))
		} else {
			if (Ext.isChrome) {
				b.push("ext-chrome")
			}
		}
		if (Ext.isMac) {
			b.push("ext-mac")
		}
		if (Ext.isLinux) {
			b.push("ext-linux")
		}
		if (Ext.isStrict || Ext.isBorderBox) {
			var d = c.parentNode;
			if (d) {
				d.className += Ext.isStrict ? " ext-strict" : " ext-border-box"
			}
		}
		c.className += b.join(" ");
		return true
	};
	if (!a()) {
		Ext.onReady(a)
	}
})();
Ext.EventObject = function() {
	var b = Ext.lib.Event, a = {
		3 : 13,
		63234 : 37,
		63235 : 39,
		63232 : 38,
		63233 : 40,
		63276 : 33,
		63277 : 34,
		63272 : 46,
		63273 : 36,
		63275 : 35
	}, c = Ext.isIE ? {
		1 : 0,
		4 : 1,
		2 : 2
	} : (Ext.isWebKit ? {
		1 : 0,
		2 : 1,
		3 : 2
	} : {
		0 : 0,
		1 : 1,
		2 : 2
	});
	Ext.EventObjectImpl = function(d) {
		if (d) {
			this.setEvent(d.browserEvent || d)
		}
	};
	Ext.EventObjectImpl.prototype = {
		setEvent : function(g) {
			var d = this;
			if (g == d || (g && g.browserEvent)) {
				return g
			}
			d.browserEvent = g;
			if (g) {
				d.button = g.button
						? c[g.button]
						: (g.which ? g.which - 1 : -1);
				if (g.type == "click" && d.button == -1) {
					d.button = 0
				}
				d.type = g.type;
				d.shiftKey = g.shiftKey;
				d.ctrlKey = g.ctrlKey || g.metaKey || false;
				d.altKey = g.altKey;
				d.keyCode = g.keyCode;
				d.charCode = g.charCode;
				d.target = b.getTarget(g);
				d.xy = b.getXY(g)
			} else {
				d.button = -1;
				d.shiftKey = false;
				d.ctrlKey = false;
				d.altKey = false;
				d.keyCode = 0;
				d.charCode = 0;
				d.target = null;
				d.xy = [0, 0]
			}
			return d
		},
		stopEvent : function() {
			var d = this;
			if (d.browserEvent) {
				if (d.browserEvent.type == "mousedown") {
					Ext.EventManager.stoppedMouseDownEvent.fire(d)
				}
				b.stopEvent(d.browserEvent)
			}
		},
		preventDefault : function() {
			if (this.browserEvent) {
				b.preventDefault(this.browserEvent)
			}
		},
		stopPropagation : function() {
			var d = this;
			if (d.browserEvent) {
				if (d.browserEvent.type == "mousedown") {
					Ext.EventManager.stoppedMouseDownEvent.fire(d)
				}
				b.stopPropagation(d.browserEvent)
			}
		},
		getCharCode : function() {
			return this.charCode || this.keyCode
		},
		getKey : function() {
			return this.normalizeKey(this.keyCode || this.charCode)
		},
		normalizeKey : function(d) {
			return Ext.isSafari ? (a[d] || d) : d
		},
		getPageX : function() {
			return this.xy[0]
		},
		getPageY : function() {
			return this.xy[1]
		},
		getXY : function() {
			return this.xy
		},
		getTarget : function(e, g, d) {
			return e ? Ext.fly(this.target).findParent(e, g, d) : (d ? Ext
					.get(this.target) : this.target)
		},
		getRelatedTarget : function() {
			return this.browserEvent
					? b.getRelatedTarget(this.browserEvent)
					: null
		},
		getWheelDelta : function() {
			var d = this.browserEvent;
			var g = 0;
			if (d.wheelDelta) {
				g = d.wheelDelta / 120
			} else {
				if (d.detail) {
					g = -d.detail / 3
				}
			}
			return g
		},
		within : function(g, h, d) {
			if (g) {
				var e = this[h ? "getRelatedTarget" : "getTarget"]();
				return e
						&& ((d ? (e == Ext.getDom(g)) : false) || Ext.fly(g)
								.contains(e))
			}
			return false
		}
	};
	return new Ext.EventObjectImpl()
}();
Ext.apply(Ext.EventManager, function() {
	var c, k, e, b, a = Ext.lib.Dom, j = /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/, h = 0, g = 0, d = Ext.isWebKit
			? Ext.num(navigator.userAgent.match(/AppleWebKit\/(\d+)/)[1]) >= 525
			: !((Ext.isGecko && !Ext.isWindows) || Ext.isOpera);
	return {
		doResizeEvent : function() {
			var m = a.getViewHeight(), l = a.getViewWidth();
			if (g != m || h != l) {
				c.fire(h = l, g = m)
			}
		},
		onWindowResize : function(n, m, l) {
			if (!c) {
				c = new Ext.util.Event();
				k = new Ext.util.DelayedTask(this.doResizeEvent);
				Ext.EventManager.on(window, "resize", this.fireWindowResize,
						this)
			}
			c.addListener(n, m, l)
		},
		fireWindowResize : function() {
			if (c) {
				if ((Ext.isIE || Ext.isAir) && k) {
					k.delay(50)
				} else {
					c.fire(a.getViewWidth(), a.getViewHeight())
				}
			}
		},
		onTextResize : function(o, n, l) {
			if (!e) {
				e = new Ext.util.Event();
				var m = new Ext.Element(document.createElement("div"));
				m.dom.className = "x-text-resize";
				m.dom.innerHTML = "X";
				m.appendTo(document.body);
				b = m.dom.offsetHeight;
				setInterval(function() {
							if (m.dom.offsetHeight != b) {
								e.fire(b, b = m.dom.offsetHeight)
							}
						}, this.textResizeInterval)
			}
			e.addListener(o, n, l)
		},
		removeResizeListener : function(m, l) {
			if (c) {
				c.removeListener(m, l)
			}
		},
		fireResize : function() {
			if (c) {
				c.fire(a.getViewWidth(), a.getViewHeight())
			}
		},
		textResizeInterval : 50,
		ieDeferSrc : false,
		useKeydown : d
	}
}());
Ext.EventManager.on = Ext.EventManager.addListener;
Ext.apply(Ext.EventObjectImpl.prototype, {
			BACKSPACE : 8,
			TAB : 9,
			NUM_CENTER : 12,
			ENTER : 13,
			RETURN : 13,
			SHIFT : 16,
			CTRL : 17,
			CONTROL : 17,
			ALT : 18,
			PAUSE : 19,
			CAPS_LOCK : 20,
			ESC : 27,
			SPACE : 32,
			PAGE_UP : 33,
			PAGEUP : 33,
			PAGE_DOWN : 34,
			PAGEDOWN : 34,
			END : 35,
			HOME : 36,
			LEFT : 37,
			UP : 38,
			RIGHT : 39,
			DOWN : 40,
			PRINT_SCREEN : 44,
			INSERT : 45,
			DELETE : 46,
			ZERO : 48,
			ONE : 49,
			TWO : 50,
			THREE : 51,
			FOUR : 52,
			FIVE : 53,
			SIX : 54,
			SEVEN : 55,
			EIGHT : 56,
			NINE : 57,
			A : 65,
			B : 66,
			C : 67,
			D : 68,
			E : 69,
			F : 70,
			G : 71,
			H : 72,
			I : 73,
			J : 74,
			K : 75,
			L : 76,
			M : 77,
			N : 78,
			O : 79,
			P : 80,
			Q : 81,
			R : 82,
			S : 83,
			T : 84,
			U : 85,
			V : 86,
			W : 87,
			X : 88,
			Y : 89,
			Z : 90,
			CONTEXT_MENU : 93,
			NUM_ZERO : 96,
			NUM_ONE : 97,
			NUM_TWO : 98,
			NUM_THREE : 99,
			NUM_FOUR : 100,
			NUM_FIVE : 101,
			NUM_SIX : 102,
			NUM_SEVEN : 103,
			NUM_EIGHT : 104,
			NUM_NINE : 105,
			NUM_MULTIPLY : 106,
			NUM_PLUS : 107,
			NUM_MINUS : 109,
			NUM_PERIOD : 110,
			NUM_DIVISION : 111,
			F1 : 112,
			F2 : 113,
			F3 : 114,
			F4 : 115,
			F5 : 116,
			F6 : 117,
			F7 : 118,
			F8 : 119,
			F9 : 120,
			F10 : 121,
			F11 : 122,
			F12 : 123,
			isNavKeyPress : function() {
				var b = this, a = this.normalizeKey(b.keyCode);
				return (a >= 33 && a <= 40) || a == b.RETURN || a == b.TAB
						|| a == b.ESC
			},
			isSpecialKey : function() {
				var a = this.normalizeKey(this.keyCode);
				return (this.type == "keypress" && this.ctrlKey)
						|| this.isNavKeyPress() || (a == this.BACKSPACE)
						|| (a >= 16 && a <= 20) || (a >= 44 && a <= 45)
			},
			getPoint : function() {
				return new Ext.lib.Point(this.xy[0], this.xy[1])
			},
			hasModifier : function() {
				return ((this.ctrlKey || this.altKey) || this.shiftKey)
			}
		});
(function() {
	var k = document;
	Ext.Element = function(p, q) {
		var r = typeof p == "string" ? k.getElementById(p) : p, s;
		if (!r) {
			return null
		}
		s = r.id;
		if (!q && s && Ext.elCache[s]) {
			return Ext.elCache[s].el
		}
		this.dom = r;
		this.id = s || Ext.id(r)
	};
	var a = Ext.lib.Dom, g = Ext.DomHelper, n = Ext.lib.Event, e = Ext.lib.Anim, h = Ext.Element, b = Ext.elCache;
	h.prototype = {
		set : function(t, q) {
			var r = this.dom, p, s, q = (q !== false) && !!r.setAttribute;
			for (p in t) {
				if (t.hasOwnProperty(p)) {
					s = t[p];
					if (p == "style") {
						g.applyStyles(r, s)
					} else {
						if (p == "cls") {
							r.className = s
						} else {
							if (q) {
								r.setAttribute(p, s)
							} else {
								r[p] = s
							}
						}
					}
				}
			}
			return this
		},
		defaultUnit : "px",
		is : function(p) {
			return Ext.DomQuery.is(this.dom, p)
		},
		focus : function(s, r) {
			var p = this, r = r || p.dom;
			try {
				if (Number(s)) {
					p.focus.defer(s, null, [null, r])
				} else {
					r.focus()
				}
			} catch (q) {
			}
			return p
		},
		blur : function() {
			try {
				this.dom.blur()
			} catch (p) {
			}
			return this
		},
		getValue : function(p) {
			var q = this.dom.value;
			return p ? parseInt(q, 10) : q
		},
		addListener : function(p, s, r, q) {
			Ext.EventManager.on(this.dom, p, s, r || this, q);
			return this
		},
		removeListener : function(p, r, q) {
			Ext.EventManager.removeListener(this.dom, p, r, q || this);
			return this
		},
		removeAllListeners : function() {
			Ext.EventManager.removeAll(this.dom);
			return this
		},
		purgeAllListeners : function() {
			Ext.EventManager.purgeElement(this, true);
			return this
		},
		addUnits : function(p) {
			if (p === "" || p == "auto" || p === undefined) {
				p = p || ""
			} else {
				if (!isNaN(p) || !l.test(p)) {
					p = p + (this.defaultUnit || "px")
				}
			}
			return p
		},
		load : function(q, r, p) {
			Ext.Ajax.request(Ext.apply({
						params : r,
						url : q.url || q,
						callback : p,
						el : this.dom,
						indicatorText : q.indicatorText || ""
					}, Ext.isObject(q) ? q : {}));
			return this
		},
		isBorderBox : function() {
			return j[(this.dom.tagName || "").toLowerCase()] || Ext.isBorderBox
		},
		remove : function() {
			var p = this, q = p.dom;
			if (q) {
				delete p.dom;
				Ext.removeNode(q)
			}
		},
		hover : function(q, p, s, r) {
			var t = this;
			t.on("mouseenter", q, s || t.dom, r);
			t.on("mouseleave", p, s || t.dom, r);
			return t
		},
		contains : function(p) {
			return !p ? false : Ext.lib.Dom.isAncestor(this.dom, p.dom
							? p.dom
							: p)
		},
		getAttributeNS : function(q, p) {
			return this.getAttribute(p, q)
		},
		getAttribute : Ext.isIE ? function(p, r) {
			var s = this.dom, q = typeof s[r + ":" + p];
			if (["undefined", "unknown"].indexOf(q) == -1) {
				return s[r + ":" + p]
			}
			return s[p]
		} : function(p, q) {
			var r = this.dom;
			return r.getAttributeNS(q, p) || r.getAttribute(q + ":" + p)
					|| r.getAttribute(p) || r[p]
		},
		update : function(p) {
			if (this.dom) {
				this.dom.innerHTML = p
			}
			return this
		}
	};
	var o = h.prototype;
	h.addMethods = function(p) {
		Ext.apply(o, p)
	};
	o.on = o.addListener;
	o.un = o.removeListener;
	o.autoBoxAdjust = true;
	var l = /\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i, d;
	h.get = function(q) {
		var p, t, s;
		if (!q) {
			return null
		}
		if (typeof q == "string") {
			if (!(t = k.getElementById(q))) {
				return null
			}
			if (b[q] && b[q].el) {
				p = b[q].el;
				p.dom = t
			} else {
				p = h.addToCache(new h(t))
			}
			return p
		} else {
			if (q.tagName) {
				if (!(s = q.id)) {
					s = Ext.id(q)
				}
				if (b[s] && b[s].el) {
					p = b[s].el;
					p.dom = q
				} else {
					p = h.addToCache(new h(q))
				}
				return p
			} else {
				if (q instanceof h) {
					if (q != d) {
						q.dom = k.getElementById(q.id) || q.dom
					}
					return q
				} else {
					if (q.isComposite) {
						return q
					} else {
						if (Ext.isArray(q)) {
							return h.select(q)
						} else {
							if (q == k) {
								if (!d) {
									var r = function() {
									};
									r.prototype = h.prototype;
									d = new r();
									d.dom = k
								}
								return d
							}
						}
					}
				}
			}
		}
		return null
	};
	h.addToCache = function(p, q) {
		q = q || p.id;
		b[q] = {
			el : p,
			data : {},
			events : {}
		};
		return p
	};
	h.data = function(q, p, r) {
		q = h.get(q);
		if (!q) {
			return null
		}
		var s = b[q.id].data;
		if (arguments.length == 2) {
			return s[p]
		} else {
			return (s[p] = r)
		}
	};
	function m() {
		if (!Ext.enableGarbageCollector) {
			clearInterval(h.collectorThreadId)
		} else {
			var p, r, u, s;
			for (p in b) {
				s = b[p];
				if (s.skipGC) {
					continue
				}
				r = s.el;
				u = r.dom;
				if (!u || !u.parentNode
						|| (!u.offsetParent && !k.getElementById(p))) {
					if (Ext.enableListenerCollection) {
						Ext.EventManager.removeAll(u)
					}
					delete b[p]
				}
			}
			if (Ext.isIE) {
				var q = {};
				for (p in b) {
					q[p] = b[p]
				}
				b = Ext.elCache = q
			}
		}
	}
	h.collectorThreadId = setInterval(m, 30000);
	var c = function() {
	};
	c.prototype = h.prototype;
	h.Flyweight = function(p) {
		this.dom = p
	};
	h.Flyweight.prototype = new c();
	h.Flyweight.prototype.isFlyweight = true;
	h._flyweights = {};
	h.fly = function(r, p) {
		var q = null;
		p = p || "_global";
		if (r = Ext.getDom(r)) {
			(h._flyweights[p] = h._flyweights[p] || new h.Flyweight()).dom = r;
			q = h._flyweights[p]
		}
		return q
	};
	Ext.get = h.get;
	Ext.fly = h.fly;
	var j = Ext.isStrict ? {
		select : 1
	} : {
		input : 1,
		select : 1,
		textarea : 1
	};
	if (Ext.isIE || Ext.isGecko) {
		j.button = 1
	}
	Ext.EventManager.on(window, "unload", function() {
				delete b;
				delete h._flyweights
			})
})();
Ext.Element.addMethods({
	swallowEvent : function(a, b) {
		var d = this;
		function c(g) {
			g.stopPropagation();
			if (b) {
				g.preventDefault()
			}
		}
		if (Ext.isArray(a)) {
			Ext.each(a, function(g) {
						d.on(g, c)
					});
			return d
		}
		d.on(a, c);
		return d
	},
	relayEvent : function(a, b) {
		this.on(a, function(c) {
					b.fireEvent(a, c)
				})
	},
	clean : function(b) {
		var d = this, e = d.dom, g = e.firstChild, c = -1;
		if (Ext.Element.data(e, "isCleaned") && b !== true) {
			return d
		}
		while (g) {
			var a = g.nextSibling;
			if (g.nodeType == 3 && !/\S/.test(g.nodeValue)) {
				e.removeChild(g)
			} else {
				g.nodeIndex = ++c
			}
			g = a
		}
		Ext.Element.data(e, "isCleaned", true);
		return d
	},
	load : function() {
		var a = this.getUpdater();
		a.update.apply(a, arguments);
		return this
	},
	getUpdater : function() {
		return this.updateManager
				|| (this.updateManager = new Ext.Updater(this))
	},
	update : function(html, loadScripts, callback) {
		if (!this.dom) {
			return this
		}
		html = html || "";
		if (loadScripts !== true) {
			this.dom.innerHTML = html;
			if (Ext.isFunction(callback)) {
				callback()
			}
			return this
		}
		var id = Ext.id(), dom = this.dom;
		html += '<span id="' + id + '"></span>';
		Ext.lib.Event.onAvailable(id, function() {
			var DOC = document, hd = DOC.getElementsByTagName("head")[0], re = /(?:<script([^>]*)?>)((\n|\r|.)*?)(?:<\/script>)/ig, srcRe = /\ssrc=([\'\"])(.*?)\1/i, typeRe = /\stype=([\'\"])(.*?)\1/i, match, attrs, srcMatch, typeMatch, el, s;
			while ((match = re.exec(html))) {
				attrs = match[1];
				srcMatch = attrs ? attrs.match(srcRe) : false;
				if (srcMatch && srcMatch[2]) {
					s = DOC.createElement("script");
					s.src = srcMatch[2];
					typeMatch = attrs.match(typeRe);
					if (typeMatch && typeMatch[2]) {
						s.type = typeMatch[2]
					}
					hd.appendChild(s)
				} else {
					if (match[2] && match[2].length > 0) {
						if (window.execScript) {
							window.execScript(match[2])
						} else {
							window.eval(match[2])
						}
					}
				}
			}
			el = DOC.getElementById(id);
			if (el) {
				Ext.removeNode(el)
			}
			if (Ext.isFunction(callback)) {
				callback()
			}
		});
		dom.innerHTML = html.replace(
				/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig, "");
		return this
	},
	removeAllListeners : function() {
		this.removeAnchor();
		Ext.EventManager.removeAll(this.dom);
		return this
	},
	createProxy : function(a, e, d) {
		a = Ext.isObject(a) ? a : {
			tag : "div",
			cls : a
		};
		var c = this, b = e ? Ext.DomHelper.append(e, a, true) : Ext.DomHelper
				.insertBefore(c.dom, a, true);
		if (d && c.setBox && c.getBox) {
			b.setBox(c.getBox())
		}
		return b
	}
});
Ext.Element.prototype.getUpdateManager = Ext.Element.prototype.getUpdater;
Ext.Element.addMethods({
	getAnchorXY : function(e, m, t) {
		e = (e || "tl").toLowerCase();
		t = t || {};
		var l = this, b = l.dom == document.body || l.dom == document, p = t.width
				|| b ? Ext.lib.Dom.getViewWidth() : l.getWidth(), j = t.height
				|| b ? Ext.lib.Dom.getViewHeight() : l.getHeight(), q, a = Math.round, c = l
				.getXY(), n = l.getScroll(), k = b ? n.left : !m ? c[0] : 0, g = b
				? n.top
				: !m ? c[1] : 0, d = {
			c : [a(p * 0.5), a(j * 0.5)],
			t : [a(p * 0.5), 0],
			l : [0, a(j * 0.5)],
			r : [p, a(j * 0.5)],
			b : [a(p * 0.5), j],
			tl : [0, 0],
			bl : [0, j],
			br : [p, j],
			tr : [p, 0]
		};
		q = d[e];
		return [q[0] + k, q[1] + g]
	},
	anchorTo : function(b, h, c, a, l, m) {
		var j = this, e = j.dom, k = !Ext.isEmpty(l), d = function() {
			Ext.fly(e).alignTo(b, h, c, a);
			Ext.callback(m, Ext.fly(e))
		}, g = this.getAnchor();
		this.removeAnchor();
		Ext.apply(g, {
					fn : d,
					scroll : k
				});
		Ext.EventManager.onWindowResize(d, null);
		if (k) {
			Ext.EventManager.on(window, "scroll", d, null, {
						buffer : !isNaN(l) ? l : 50
					})
		}
		d.call(j);
		return j
	},
	removeAnchor : function() {
		var b = this, a = this.getAnchor();
		if (a && a.fn) {
			Ext.EventManager.removeResizeListener(a.fn);
			if (a.scroll) {
				Ext.EventManager.un(window, "scroll", a.fn)
			}
			delete a.fn
		}
		return b
	},
	getAnchor : function() {
		var b = Ext.Element.data, c = this.dom;
		if (!c) {
			return
		}
		var a = b(c, "_anchor");
		if (!a) {
			a = b(c, "_anchor", {})
		}
		return a
	},
	getAlignToXY : function(g, B, C) {
		g = Ext.get(g);
		if (!g || !g.dom) {
			throw "Element.alignToXY with an element that doesn't exist"
		}
		C = C || [0, 0];
		B = (!B || B == "?" ? "tl-bl?" : (!/-/.test(B) && B !== ""
				? "tl-" + B
				: B || "tl-bl")).toLowerCase();
		var L = this, I = L.dom, N, M, q, n, t, G, z, u = Ext.lib.Dom
				.getViewWidth()
				- 10, H = Ext.lib.Dom.getViewHeight() - 10, b, j, k, l, v, A, O = document, K = O.documentElement, s = O.body, F = (K.scrollLeft
				|| s.scrollLeft || 0)
				+ 5, E = (K.scrollTop || s.scrollTop || 0) + 5, J = false, e = "", a = "", D = B
				.match(/^([a-z]+)-([a-z]+)(\?)?$/);
		if (!D) {
			throw "Element.alignTo with an invalid alignment " + B
		}
		e = D[1];
		a = D[2];
		J = !!D[3];
		N = L.getAnchorXY(e, true);
		M = g.getAnchorXY(a, false);
		q = M[0] - N[0] + C[0];
		n = M[1] - N[1] + C[1];
		if (J) {
			t = L.getWidth();
			G = L.getHeight();
			z = g.getRegion();
			b = e.charAt(0);
			j = e.charAt(e.length - 1);
			k = a.charAt(0);
			l = a.charAt(a.length - 1);
			v = ((b == "t" && k == "b") || (b == "b" && k == "t"));
			A = ((j == "r" && l == "l") || (j == "l" && l == "r"));
			if (q + t > u + F) {
				q = A ? z.left - t : u + F - t
			}
			if (q < F) {
				q = A ? z.right : F
			}
			if (n + G > H + E) {
				n = v ? z.top - G : H + E - G
			}
			if (n < E) {
				n = v ? z.bottom : E
			}
		}
		return [q, n]
	},
	alignTo : function(c, a, e, b) {
		var d = this;
		return d.setXY(d.getAlignToXY(c, a, e), d.preanim && !!b ? d.preanim(
						arguments, 3) : false)
	},
	adjustForConstraints : function(c, a, b) {
		return this.getConstrainToXY(a || document, false, b, c) || c
	},
	getConstrainToXY : function(b, a, c, e) {
		var d = {
			top : 0,
			left : 0,
			bottom : 0,
			right : 0
		};
		return function(j, A, l, n) {
			j = Ext.get(j);
			l = l ? Ext.applyIf(l, d) : d;
			var z, D, v = 0, u = 0;
			if (j.dom == document.body || j.dom == document) {
				z = Ext.lib.Dom.getViewWidth();
				D = Ext.lib.Dom.getViewHeight()
			} else {
				z = j.dom.clientWidth;
				D = j.dom.clientHeight;
				if (!A) {
					var t = j.getXY();
					v = t[0];
					u = t[1]
				}
			}
			var r = j.getScroll();
			v += l.left + r.left;
			u += l.top + r.top;
			z -= l.right;
			D -= l.bottom;
			var B = v + z;
			var g = u + D;
			var k = n
					|| (!A ? this.getXY() : [this.getLeft(true),
							this.getTop(true)]);
			var p = k[0], o = k[1];
			var q = this.dom.offsetWidth, C = this.dom.offsetHeight;
			var m = false;
			if ((p + q) > B) {
				p = B - q;
				m = true
			}
			if ((o + C) > g) {
				o = g - C;
				m = true
			}
			if (p < v) {
				p = v;
				m = true
			}
			if (o < u) {
				o = u;
				m = true
			}
			return m ? [p, o] : false
		}
	}(),
	getCenterXY : function() {
		return this.getAlignToXY(document, "c-c")
	},
	center : function(a) {
		return this.alignTo(a || document, "c-c")
	}
});
Ext.Element.addMethods(function() {
	var d = "parentNode", b = "nextSibling", c = "previousSibling", e = Ext.DomQuery, a = Ext.get;
	return {
		findParent : function(n, m, h) {
			var k = this.dom, g = document.body, l = 0, j;
			if (Ext.isGecko
					&& Object.prototype.toString.call(k) == "[object XULElement]") {
				return null
			}
			m = m || 50;
			if (isNaN(m)) {
				j = Ext.getDom(m);
				m = Number.MAX_VALUE
			}
			while (k && k.nodeType == 1 && l < m && k != g && k != j) {
				if (e.is(k, n)) {
					return h ? a(k) : k
				}
				l++;
				k = k.parentNode
			}
			return null
		},
		findParentNode : function(k, j, g) {
			var h = Ext.fly(this.dom.parentNode, "_internal");
			return h ? h.findParent(k, j, g) : null
		},
		up : function(h, g) {
			return this.findParentNode(h, g, true)
		},
		select : function(g) {
			return Ext.Element.select(g, this.dom)
		},
		query : function(g) {
			return e.select(g, this.dom)
		},
		child : function(g, h) {
			var j = e.selectNode(g, this.dom);
			return h ? j : a(j)
		},
		down : function(g, h) {
			var j = e.selectNode(" > " + g, this.dom);
			return h ? j : a(j)
		},
		parent : function(g, h) {
			return this.matchNode(d, d, g, h)
		},
		next : function(g, h) {
			return this.matchNode(b, b, g, h)
		},
		prev : function(g, h) {
			return this.matchNode(c, c, g, h)
		},
		first : function(g, h) {
			return this.matchNode(b, "firstChild", g, h)
		},
		last : function(g, h) {
			return this.matchNode(c, "lastChild", g, h)
		},
		matchNode : function(h, l, g, j) {
			var k = this.dom[l];
			while (k) {
				if (k.nodeType == 1 && (!g || e.is(k, g))) {
					return !j ? a(k) : k
				}
				k = k[h]
			}
			return null
		}
	}
}());
Ext.Element.addMethods({
			select : function(a, b) {
				return Ext.Element.select(a, b, this.dom)
			}
		});
Ext.Element.addMethods(function() {
			var c = Ext.getDom, a = Ext.get, b = Ext.DomHelper;
			return {
				appendChild : function(d) {
					return a(d).appendTo(this)
				},
				appendTo : function(d) {
					c(d).appendChild(this.dom);
					return this
				},
				insertBefore : function(d) {
					(d = c(d)).parentNode.insertBefore(this.dom, d);
					return this
				},
				insertAfter : function(d) {
					(d = c(d)).parentNode.insertBefore(this.dom, d.nextSibling);
					return this
				},
				insertFirst : function(e, d) {
					e = e || {};
					if (e.nodeType || e.dom || typeof e == "string") {
						e = c(e);
						this.dom.insertBefore(e, this.dom.firstChild);
						return !d ? a(e) : e
					} else {
						return this.createChild(e, this.dom.firstChild, d)
					}
				},
				replace : function(d) {
					d = a(d);
					this.insertBefore(d);
					d.remove();
					return this
				},
				replaceWith : function(d) {
					var e = this;
					if (d.nodeType || d.dom || typeof d == "string") {
						d = c(d);
						e.dom.parentNode.insertBefore(d, e.dom)
					} else {
						d = b.insertBefore(e.dom, d)
					}
					delete Ext.elCache[e.id];
					Ext.removeNode(e.dom);
					e.id = Ext.id(e.dom = d);
					Ext.Element.addToCache(e.isFlyweight
							? new Ext.Element(e.dom)
							: e);
					return e
				},
				createChild : function(e, d, g) {
					e = e || {
						tag : "div"
					};
					return d
							? b.insertBefore(d, e, g !== true)
							: b[!this.dom.firstChild ? "overwrite" : "append"](
									this.dom, e, g !== true)
				},
				wrap : function(d, e) {
					var g = b.insertBefore(this.dom, d || {
								tag : "div"
							}, !e);
					g.dom ? g.dom.appendChild(this.dom) : g
							.appendChild(this.dom);
					return g
				},
				insertHtml : function(e, g, d) {
					var h = b.insertHtml(e, this.dom, g);
					return d ? Ext.get(h) : h
				}
			}
		}());
Ext.apply(Ext.Element.prototype, function() {
			var c = Ext.getDom, a = Ext.get, b = Ext.DomHelper;
			return {
				insertSibling : function(j, g, h) {
					var k = this, e, d = (g || "before").toLowerCase() == "after", l;
					if (Ext.isArray(j)) {
						l = k;
						Ext.each(j, function(m) {
									e = Ext.fly(l, "_internal").insertSibling(
											m, g, h);
									if (d) {
										l = e
									}
								});
						return e
					}
					j = j || {};
					if (j.nodeType || j.dom) {
						e = k.dom.parentNode.insertBefore(c(j), d
										? k.dom.nextSibling
										: k.dom);
						if (!h) {
							e = a(e)
						}
					} else {
						if (d && !k.dom.nextSibling) {
							e = b.append(k.dom.parentNode, j, !h)
						} else {
							e = b[d ? "insertAfter" : "insertBefore"](k.dom, j,
									!h)
						}
					}
					return e
				}
			}
		}());
Ext.Element.addMethods(function() {
	var h = {}, y = /(-[a-z])/gi, b = {}, t = document.defaultView, v = Ext.isIE
			? "styleFloat"
			: "cssFloat", D = /alpha\(opacity=(.*)\)/i, m = /^\s+|\s+$/g, B = Ext.Element, d = "padding", c = "margin", z = "border", u = "-left", r = "-right", x = "-top", p = "-bottom", k = "-width", s = Math, A = "hidden", e = "isClipped", l = "overflow", o = "overflow-x", n = "overflow-y", C = "originalClip", j = {
		l : z + u + k,
		r : z + r + k,
		t : z + x + k,
		b : z + p + k
	}, g = {
		l : d + u,
		r : d + r,
		t : d + x,
		b : d + p
	}, a = {
		l : c + u,
		r : c + r,
		t : c + x,
		b : c + p
	}, E = Ext.Element.data;
	function q(F, G) {
		return G.charAt(1).toUpperCase()
	}
	function w(F) {
		return h[F] || (h[F] = F == "float" ? v : F.replace(y, q))
	}
	return {
		adjustWidth : function(F) {
			var G = this;
			var H = Ext.isNumber(F);
			if (H && G.autoBoxAdjust && !G.isBorderBox()) {
				F -= (G.getBorderWidth("lr") + G.getPadding("lr"))
			}
			return (H && F < 0) ? 0 : F
		},
		adjustHeight : function(F) {
			var G = this;
			var H = Ext.isNumber(F);
			if (H && G.autoBoxAdjust && !G.isBorderBox()) {
				F -= (G.getBorderWidth("tb") + G.getPadding("tb"))
			}
			return (H && F < 0) ? 0 : F
		},
		addClass : function(I) {
			var J = this, H, F, G;
			I = Ext.isArray(I) ? I : [I];
			for (H = 0, F = I.length; H < F; H++) {
				G = I[H];
				if (G) {
					J.dom.className += (!J.hasClass(G) && G ? " " + G : "")
				}
			}
			return J
		},
		radioClass : function(I) {
			var J = this.dom.parentNode.childNodes, G;
			I = Ext.isArray(I) ? I : [I];
			for (var H = 0, F = J.length; H < F; H++) {
				G = J[H];
				if (G && G.nodeType == 1) {
					Ext.fly(G, "_internal").removeClass(I)
				}
			}
			return this.addClass(I)
		},
		removeClass : function(I) {
			var J = this, G;
			I = Ext.isArray(I) ? I : [I];
			if (J.dom && J.dom.className) {
				for (var H = 0, F = I.length; H < F; H++) {
					G = I[H];
					if (G) {
						J.dom.className = J.dom.className.replace(b[G] = b[G]
										|| new RegExp("(?:^|\\s+)" + G
														+ "(?:\\s+|$)", "g"),
								" ")
					}
				}
			}
			return J
		},
		toggleClass : function(F) {
			return this.hasClass(F) ? this.removeClass(F) : this.addClass(F)
		},
		hasClass : function(F) {
			return F
					&& (" " + this.dom.className + " ").indexOf(" " + F + " ") != -1
		},
		replaceClass : function(G, F) {
			return this.removeClass(G).addClass(F)
		},
		isStyle : function(F, G) {
			return this.getStyle(F) == G
		},
		getStyle : function() {
			return t && t.getComputedStyle ? function(L) {
				var I = this.dom, F, H, G, J, K = Ext.isWebKit, J;
				if (I == document) {
					return null
				}
				L = w(L);
				if (K && /marginRight/.test(L)) {
					J = this.getStyle("display");
					I.style.display = "inline-block"
				}
				G = (F = I.style[L]) ? F : (H = t.getComputedStyle(I, ""))
						? H[L]
						: null;
				if (K) {
					if (G == "rgba(0, 0, 0, 0)") {
						G = "transparent"
					} else {
						if (J) {
							I.style.display = J
						}
					}
				}
				return G
			} : function(J) {
				var H = this.dom, F, G;
				if (H == document) {
					return null
				}
				if (J == "opacity") {
					if (H.style.filter.match) {
						if (F = H.style.filter.match(D)) {
							var I = parseFloat(F[1]);
							if (!isNaN(I)) {
								return I ? I / 100 : 0
							}
						}
					}
					return 1
				}
				J = w(J);
				return H.style[J] || ((G = H.currentStyle) ? G[J] : null)
			}
		}(),
		getColor : function(F, G, K) {
			var I = this.getStyle(F), H = Ext.isDefined(K) ? K : "#", J;
			if (!I || /transparent|inherit/.test(I)) {
				return G
			}
			if (/^r/.test(I)) {
				Ext.each(I.slice(4, I.length - 1).split(","), function(L) {
							J = parseInt(L, 10);
							H += (J < 16 ? "0" : "") + J.toString(16)
						})
			} else {
				I = I.replace("#", "");
				H += I.length == 3 ? I
						.replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3") : I
			}
			return (H.length > 5 ? H.toLowerCase() : G)
		},
		setStyle : function(J, I) {
			var G, H, F;
			if (!Ext.isObject(J)) {
				G = {};
				G[J] = I;
				J = G
			}
			for (H in J) {
				I = J[H];
				H == "opacity" ? this.setOpacity(I) : this.dom.style[w(H)] = I
			}
			return this
		},
		setOpacity : function(G, F) {
			var J = this, H = J.dom.style;
			if (!F || !J.anim) {
				if (Ext.isIE) {
					var I = G < 1 ? "alpha(opacity=" + G * 100 + ")" : "", K = H.filter
							.replace(D, "").replace(m, "");
					H.zoom = 1;
					H.filter = K + (K.length > 0 ? " " : "") + I
				} else {
					H.opacity = G
				}
			} else {
				J.anim({
							opacity : {
								to : G
							}
						}, J.preanim(arguments, 1), null, 0.35, "easeIn")
			}
			return J
		},
		clearOpacity : function() {
			var F = this.dom.style;
			if (Ext.isIE) {
				if (!Ext.isEmpty(F.filter)) {
					F.filter = F.filter.replace(D, "").replace(m, "")
				}
			} else {
				F.opacity = F["-moz-opacity"] = F["-khtml-opacity"] = ""
			}
			return this
		},
		getHeight : function(H) {
			var G = this, J = G.dom, I = Ext.isIE
					&& G.isStyle("display", "none"), F = s.max(J.offsetHeight,
					I ? 0 : J.clientHeight)
					|| 0;
			F = !H ? F : F - G.getBorderWidth("tb") - G.getPadding("tb");
			return F < 0 ? 0 : F
		},
		getWidth : function(G) {
			var H = this, J = H.dom, I = Ext.isIE
					&& H.isStyle("display", "none"), F = s.max(J.offsetWidth, I
							? 0
							: J.clientWidth)
					|| 0;
			F = !G ? F : F - H.getBorderWidth("lr") - H.getPadding("lr");
			return F < 0 ? 0 : F
		},
		setWidth : function(G, F) {
			var H = this;
			G = H.adjustWidth(G);
			!F || !H.anim ? H.dom.style.width = H.addUnits(G) : H.anim({
						width : {
							to : G
						}
					}, H.preanim(arguments, 1));
			return H
		},
		setHeight : function(F, G) {
			var H = this;
			F = H.adjustHeight(F);
			!G || !H.anim ? H.dom.style.height = H.addUnits(F) : H.anim({
						height : {
							to : F
						}
					}, H.preanim(arguments, 1));
			return H
		},
		getBorderWidth : function(F) {
			return this.addStyles(F, j)
		},
		getPadding : function(F) {
			return this.addStyles(F, g)
		},
		clip : function() {
			var F = this, G = F.dom;
			if (!E(G, e)) {
				E(G, e, true);
				E(G, C, {
							o : F.getStyle(l),
							x : F.getStyle(o),
							y : F.getStyle(n)
						});
				F.setStyle(l, A);
				F.setStyle(o, A);
				F.setStyle(n, A)
			}
			return F
		},
		unclip : function() {
			var F = this, H = F.dom;
			if (E(H, e)) {
				E(H, e, false);
				var G = E(H, C);
				if (G.o) {
					F.setStyle(l, G.o)
				}
				if (G.x) {
					F.setStyle(o, G.x)
				}
				if (G.y) {
					F.setStyle(n, G.y)
				}
			}
			return F
		},
		addStyles : function(K, J) {
			var L = 0, G = K.match(/\w/g), I;
			for (var H = 0, F = G.length; H < F; H++) {
				I = G[H] && parseInt(this.getStyle(J[G[H]]), 10);
				if (I) {
					L += s.abs(I)
				}
			}
			return L
		},
		margins : a
	}
}());
Ext.Element.boxMarkup = '<div class="{0}-tl"><div class="{0}-tr"><div class="{0}-tc"></div></div></div><div class="{0}-ml"><div class="{0}-mr"><div class="{0}-mc"></div></div></div><div class="{0}-bl"><div class="{0}-br"><div class="{0}-bc"></div></div></div>';
Ext.Element.addMethods(function() {
	var a = "_internal", b = /(\d+)px/;
	return {
		applyStyles : function(c) {
			Ext.DomHelper.applyStyles(this.dom, c);
			return this
		},
		getStyles : function() {
			var c = {};
			Ext.each(arguments, function(d) {
						c[d] = this.getStyle(d)
					}, this);
			return c
		},
		getStyleSize : function() {
			var j = this, c, g, k = this.dom, e = k.style;
			if (e.width && e.width != "auto") {
				c = parseInt(e.width, 10);
				if (j.isBorderBox()) {
					c -= j.getFrameWidth("lr")
				}
			}
			if (e.height && e.height != "auto") {
				g = parseInt(e.height, 10);
				if (j.isBorderBox()) {
					g -= j.getFrameWidth("tb")
				}
			}
			return {
				width : c || j.getWidth(true),
				height : g || j.getHeight(true)
			}
		},
		setOverflow : function(c) {
			var d = this.dom;
			if (c == "auto" && Ext.isMac && Ext.isGecko2) {
				d.style.overflow = "hidden";
(function		() {
					d.style.overflow = "auto"
				}).defer(1)
			} else {
				d.style.overflow = c
			}
		},
		boxWrap : function(c) {
			c = c || "x-box";
			var d = Ext.get(this.insertHtml("beforeBegin", "<div class='" + c
							+ "'>" + String.format(Ext.Element.boxMarkup, c)
							+ "</div>"));
			Ext.DomQuery.selectNode("." + c + "-mc", d.dom)
					.appendChild(this.dom);
			return d
		},
		setSize : function(e, c, d) {
			var g = this;
			if (Ext.isObject(e)) {
				c = e.height;
				e = e.width
			}
			e = g.adjustWidth(e);
			c = g.adjustHeight(c);
			if (!d || !g.anim) {
				g.dom.style.width = g.addUnits(e);
				g.dom.style.height = g.addUnits(c)
			} else {
				g.anim({
							width : {
								to : e
							},
							height : {
								to : c
							}
						}, g.preanim(arguments, 2))
			}
			return g
		},
		getComputedHeight : function() {
			var d = this, c = Math.max(d.dom.offsetHeight, d.dom.clientHeight);
			if (!c) {
				c = parseInt(d.getStyle("height"), 10) || 0;
				if (!d.isBorderBox()) {
					c += d.getFrameWidth("tb")
				}
			}
			return c
		},
		getComputedWidth : function() {
			var c = Math.max(this.dom.offsetWidth, this.dom.clientWidth);
			if (!c) {
				c = parseInt(this.getStyle("width"), 10) || 0;
				if (!this.isBorderBox()) {
					c += this.getFrameWidth("lr")
				}
			}
			return c
		},
		getFrameWidth : function(d, c) {
			return c && this.isBorderBox() ? 0 : (this.getPadding(d) + this
					.getBorderWidth(d))
		},
		addClassOnOver : function(c) {
			this.hover(function() {
						Ext.fly(this, a).addClass(c)
					}, function() {
						Ext.fly(this, a).removeClass(c)
					});
			return this
		},
		addClassOnFocus : function(c) {
			this.on("focus", function() {
						Ext.fly(this, a).addClass(c)
					}, this.dom);
			this.on("blur", function() {
						Ext.fly(this, a).removeClass(c)
					}, this.dom);
			return this
		},
		addClassOnClick : function(c) {
			var d = this.dom;
			this.on("mousedown", function() {
						Ext.fly(d, a).addClass(c);
						var g = Ext.getDoc(), e = function() {
							Ext.fly(d, a).removeClass(c);
							g.removeListener("mouseup", e)
						};
						g.on("mouseup", e)
					});
			return this
		},
		getViewSize : function(j) {
			var q = document, l = this, g = l.dom, k = Ext.lib.Dom, m = (g == q || g == q.body), o, r, e, n = 0, s = 0, c = 0, p = 0;
			if (m) {
				return {
					width : k.getViewWidth(),
					height : k.getViewHeight()
				}
			}
			o = l.isBorderBox();
			n = l.getBorderWidth("tb");
			s = l.getBorderWidth("lr");
			c = l.getPadding("tb");
			p = l.getPadding("lr");
			if (r = l.getStyle("width").match(b)) {
				if ((r = parseInt(r[1], 10)) && o) {
					r -= (s + p)
				}
				if (!j) {
					r += p
				}
			} else {
				if (!(r = g.clientWidth) && (r = g.offsetWidth)) {
					r -= s
				}
				if (r && j) {
					r -= p
				}
			}
			if (e = l.getStyle("height").match(b)) {
				if ((e = parseInt(e[1], 10)) && o) {
					e -= (n + c)
				}
				if (!j) {
					e += c
				}
			} else {
				if (!(e = g.clientHeight) && (e = g.offsetHeight)) {
					e -= n
				}
				if (e && j) {
					e -= c
				}
			}
			return {
				width : r,
				height : e
			}
		},
		getSize : function(c) {
			return {
				width : this.getWidth(c),
				height : this.getHeight(c)
			}
		},
		repaint : function() {
			var c = this.dom;
			this.addClass("x-repaint");
			setTimeout(function() {
						Ext.fly(c).removeClass("x-repaint")
					}, 1);
			return this
		},
		unselectable : function() {
			this.dom.unselectable = "on";
			return this
					.swallowEvent("selectstart", true)
					.applyStyles("-moz-user-select:none;-khtml-user-select:none;")
					.addClass("x-unselectable")
		},
		getMargins : function(d) {
			var e = this, c, g = {
				t : "top",
				l : "left",
				r : "right",
				b : "bottom"
			}, h = {};
			if (!d) {
				for (c in e.margins) {
					h[g[c]] = parseInt(e.getStyle(e.margins[c]), 10) || 0
				}
				return h
			} else {
				return e.addStyles.call(e, d, e.margins)
			}
		}
	}
}());
(function() {
	var a = Ext.lib.Dom, b = "left", g = "right", d = "top", j = "bottom", h = "position", c = "static", e = "relative", k = "auto", l = "z-index";
	Ext.Element.addMethods({
				getX : function() {
					return a.getX(this.dom)
				},
				getY : function() {
					return a.getY(this.dom)
				},
				getXY : function() {
					return a.getXY(this.dom)
				},
				getOffsetsTo : function(m) {
					var p = this.getXY(), n = Ext.fly(m, "_internal").getXY();
					return [p[0] - n[0], p[1] - n[1]]
				},
				setX : function(m, n) {
					return this.setXY([m, this.getY()], this.animTest(
									arguments, n, 1))
				},
				setY : function(n, m) {
					return this.setXY([this.getX(), n], this.animTest(
									arguments, m, 1))
				},
				setLeft : function(m) {
					this.setStyle(b, this.addUnits(m));
					return this
				},
				setTop : function(m) {
					this.setStyle(d, this.addUnits(m));
					return this
				},
				setRight : function(m) {
					this.setStyle(g, this.addUnits(m));
					return this
				},
				setBottom : function(m) {
					this.setStyle(j, this.addUnits(m));
					return this
				},
				setXY : function(o, m) {
					var n = this;
					if (!m || !n.anim) {
						a.setXY(n.dom, o)
					} else {
						n.anim({
									points : {
										to : o
									}
								}, n.preanim(arguments, 1), "motion")
					}
					return n
				},
				setLocation : function(m, o, n) {
					return this.setXY([m, o], this.animTest(arguments, n, 2))
				},
				moveTo : function(m, o, n) {
					return this.setXY([m, o], this.animTest(arguments, n, 2))
				},
				getLeft : function(m) {
					return !m ? this.getX() : parseInt(this.getStyle(b), 10)
							|| 0
				},
				getRight : function(m) {
					var n = this;
					return !m ? n.getX() + n.getWidth() : (n.getLeft(true) + n
							.getWidth())
							|| 0
				},
				getTop : function(m) {
					return !m ? this.getY() : parseInt(this.getStyle(d), 10)
							|| 0
				},
				getBottom : function(m) {
					var n = this;
					return !m ? n.getY() + n.getHeight() : (n.getTop(true) + n
							.getHeight())
							|| 0
				},
				position : function(q, p, m, o) {
					var n = this;
					if (!q && n.isStyle(h, c)) {
						n.setStyle(h, e)
					} else {
						if (q) {
							n.setStyle(h, q)
						}
					}
					if (p) {
						n.setStyle(l, p)
					}
					if (m || o) {
						n.setXY([m || false, o || false])
					}
				},
				clearPositioning : function(m) {
					m = m || "";
					this.setStyle({
								left : m,
								right : m,
								top : m,
								bottom : m,
								"z-index" : "",
								position : c
							});
					return this
				},
				getPositioning : function() {
					var m = this.getStyle(b);
					var n = this.getStyle(d);
					return {
						position : this.getStyle(h),
						left : m,
						right : m ? "" : this.getStyle(g),
						top : n,
						bottom : n ? "" : this.getStyle(j),
						"z-index" : this.getStyle(l)
					}
				},
				setPositioning : function(m) {
					var o = this, n = o.dom.style;
					o.setStyle(m);
					if (m.right == k) {
						n.right = ""
					}
					if (m.bottom == k) {
						n.bottom = ""
					}
					return o
				},
				translatePoints : function(m, u) {
					u = isNaN(m[1]) ? u : m[1];
					m = isNaN(m[0]) ? m : m[0];
					var q = this, r = q.isStyle(h, e), s = q.getXY(), n = parseInt(
							q.getStyle(b), 10), p = parseInt(q.getStyle(d), 10);
					n = !isNaN(n) ? n : (r ? 0 : q.dom.offsetLeft);
					p = !isNaN(p) ? p : (r ? 0 : q.dom.offsetTop);
					return {
						left : (m - s[0] + n),
						top : (u - s[1] + p)
					}
				},
				animTest : function(n, m, o) {
					return !!m && this.preanim ? this.preanim(n, o) : false
				}
			})
})();
Ext.Element.addMethods({
	setBox : function(e, g, b) {
		var d = this, a = e.width, c = e.height;
		if ((g && !d.autoBoxAdjust) && !d.isBorderBox()) {
			a -= (d.getBorderWidth("lr") + d.getPadding("lr"));
			c -= (d.getBorderWidth("tb") + d.getPadding("tb"))
		}
		d.setBounds(e.x, e.y, a, c, d.animTest.call(d, arguments, b, 2));
		return d
	},
	getBox : function(k, q) {
		var n = this, x, e, p, d = n.getBorderWidth, s = n.getPadding, g, a, v, o;
		if (!q) {
			x = n.getXY()
		} else {
			e = parseInt(n.getStyle("left"), 10) || 0;
			p = parseInt(n.getStyle("top"), 10) || 0;
			x = [e, p]
		}
		var c = n.dom, u = c.offsetWidth, j = c.offsetHeight, m;
		if (!k) {
			m = {
				x : x[0],
				y : x[1],
				0 : x[0],
				1 : x[1],
				width : u,
				height : j
			}
		} else {
			g = d.call(n, "l") + s.call(n, "l");
			a = d.call(n, "r") + s.call(n, "r");
			v = d.call(n, "t") + s.call(n, "t");
			o = d.call(n, "b") + s.call(n, "b");
			m = {
				x : x[0] + g,
				y : x[1] + v,
				0 : x[0] + g,
				1 : x[1] + v,
				width : u - (g + a),
				height : j - (v + o)
			}
		}
		m.right = m.x + m.width;
		m.bottom = m.y + m.height;
		return m
	},
	move : function(k, b, c) {
		var g = this, n = g.getXY(), l = n[0], j = n[1], d = [l - b, j], m = [
				l + b, j], h = [l, j - b], a = [l, j + b], e = {
			l : d,
			left : d,
			r : m,
			right : m,
			t : h,
			top : h,
			up : h,
			b : a,
			bottom : a,
			down : a
		};
		k = k.toLowerCase();
		g.moveTo(e[k][0], e[k][1], g.animTest.call(g, arguments, c, 2))
	},
	setLeftTop : function(d, c) {
		var b = this, a = b.dom.style;
		a.left = b.addUnits(d);
		a.top = b.addUnits(c);
		return b
	},
	getRegion : function() {
		return Ext.lib.Dom.getRegion(this.dom)
	},
	setBounds : function(b, g, d, a, c) {
		var e = this;
		if (!c || !e.anim) {
			e.setSize(d, a);
			e.setLocation(b, g)
		} else {
			e.anim({
						points : {
							to : [b, g]
						},
						width : {
							to : e.adjustWidth(d)
						},
						height : {
							to : e.adjustHeight(a)
						}
					}, e.preanim(arguments, 4), "motion")
		}
		return e
	},
	setRegion : function(b, a) {
		return this.setBounds(b.left, b.top, b.right - b.left,
				b.bottom - b.top, this.animTest.call(this, arguments, a, 1))
	}
});
Ext.Element.addMethods({
	isScrollable : function() {
		var a = this.dom;
		return a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth
	},
	scrollTo : function(a, b) {
		this.dom["scroll" + (/top/i.test(a) ? "Top" : "Left")] = b;
		return this
	},
	getScroll : function() {
		var j = this.dom, h = document, a = h.body, c = h.documentElement, b, g, e;
		if (j == h || j == a) {
			if (Ext.isIE && Ext.isStrict) {
				b = c.scrollLeft;
				g = c.scrollTop
			} else {
				b = window.pageXOffset;
				g = window.pageYOffset
			}
			e = {
				left : b || (a ? a.scrollLeft : 0),
				top : g || (a ? a.scrollTop : 0)
			}
		} else {
			e = {
				left : j.scrollLeft,
				top : j.scrollTop
			}
		}
		return e
	}
});
Ext.Element.addMethods({
	scrollTo : function(b, d, a) {
		var e = /top/i.test(b), c = this, g = c.dom, h;
		if (!a || !c.anim) {
			h = "scroll" + (e ? "Top" : "Left"), g[h] = d
		} else {
			h = "scroll" + (e ? "Left" : "Top"), c.anim({
						scroll : {
							to : e ? [g[h], d] : [d, g[h]]
						}
					}, c.preanim(arguments, 2), "scroll")
		}
		return c
	},
	scrollIntoView : function(e, j) {
		var q = Ext.getDom(e) || Ext.getBody().dom, h = this.dom, g = this
				.getOffsetsTo(q), m = g[0] + q.scrollLeft, v = g[1]
				+ q.scrollTop, s = v + h.offsetHeight, d = m + h.offsetWidth, a = q.clientHeight, n = parseInt(
				q.scrollTop, 10), u = parseInt(q.scrollLeft, 10), k = n + a, p = u
				+ q.clientWidth;
		if (h.offsetHeight > a || v < n) {
			q.scrollTop = v
		} else {
			if (s > k) {
				q.scrollTop = s - a
			}
		}
		q.scrollTop = q.scrollTop;
		if (j !== false) {
			if (h.offsetWidth > q.clientWidth || m < u) {
				q.scrollLeft = m
			} else {
				if (d > p) {
					q.scrollLeft = d - q.clientWidth
				}
			}
			q.scrollLeft = q.scrollLeft
		}
		return this
	},
	scrollChildIntoView : function(b, a) {
		Ext.fly(b, "_scrollChildIntoView").scrollIntoView(this, a)
	},
	scroll : function(n, b, d) {
		if (!this.isScrollable()) {
			return
		}
		var e = this.dom, g = e.scrollLeft, q = e.scrollTop, o = e.scrollWidth, m = e.scrollHeight, j = e.clientWidth, a = e.clientHeight, c = false, p, k = {
			l : Math.min(g + b, o - j),
			r : p = Math.max(g - b, 0),
			t : Math.max(q - b, 0),
			b : Math.min(q + b, m - a)
		};
		k.d = k.b;
		k.u = k.t;
		n = n.substr(0, 1);
		if ((p = k[n]) > -1) {
			c = true;
			this.scrollTo(n == "l" || n == "r" ? "left" : "top", p, this
							.preanim(arguments, 2))
		}
		return c
	}
});
Ext.Element.VISIBILITY = 1;
Ext.Element.DISPLAY = 2;
Ext.Element.addMethods(function() {
	var h = "visibility", d = "display", b = "hidden", k = "none", a = "originalDisplay", c = "visibilityMode", e = Ext.Element.DISPLAY, g = Ext.Element.data, j = function(
			n) {
		var m = g(n, a);
		if (m === undefined) {
			g(n, a, m = "")
		}
		return m
	}, l = function(o) {
		var n = g(o, c);
		if (n === undefined) {
			g(o, c, n = 1)
		}
		return n
	};
	return {
		originalDisplay : "",
		visibilityMode : 1,
		setVisibilityMode : function(m) {
			g(this.dom, c, m);
			return this
		},
		animate : function(n, p, o, q, m) {
			this.anim(n, {
						duration : p,
						callback : o,
						easing : q
					}, m);
			return this
		},
		anim : function(p, q, n, s, o, m) {
			n = n || "run";
			q = q || {};
			var r = this, t = Ext.lib.Anim[n](r.dom, p, (q.duration || s)
							|| 0.35, (q.easing || o) || "easeOut", function() {
						if (m) {
							m.call(r)
						}
						if (q.callback) {
							q.callback.call(q.scope || r, r, q)
						}
					}, r);
			q.anim = t;
			return t
		},
		preanim : function(m, n) {
			return !m[n] ? false : (Ext.isObject(m[n]) ? m[n] : {
				duration : m[n + 1],
				callback : m[n + 2],
				easing : m[n + 3]
			})
		},
		isVisible : function() {
			return !this.isStyle(h, b) && !this.isStyle(d, k)
		},
		setVisible : function(q, n) {
			var o = this, p = o.dom, m = l(this.dom) == e;
			if (!n || !o.anim) {
				if (m) {
					o.setDisplayed(q)
				} else {
					o.fixDisplay();
					p.style.visibility = q ? "visible" : b
				}
			} else {
				if (q) {
					o.setOpacity(0.01);
					o.setVisible(true)
				}
				o.anim({
							opacity : {
								to : (q ? 1 : 0)
							}
						}, o.preanim(arguments, 1), null, 0.35, "easeIn",
						function() {
							if (!q) {
								p.style[m ? d : h] = (m) ? k : b;
								Ext.fly(p).setOpacity(1)
							}
						})
			}
			return o
		},
		toggle : function(m) {
			var n = this;
			n.setVisible(!n.isVisible(), n.preanim(arguments, 0));
			return n
		},
		setDisplayed : function(m) {
			if (typeof m == "boolean") {
				m = m ? j(this.dom) : k
			}
			this.setStyle(d, m);
			return this
		},
		fixDisplay : function() {
			var m = this;
			if (m.isStyle(d, k)) {
				m.setStyle(h, b);
				m.setStyle(d, j(this.dom));
				if (m.isStyle(d, k)) {
					m.setStyle(d, "block")
				}
			}
		},
		hide : function(m) {
			this.setVisible(false, this.preanim(arguments, 0));
			return this
		},
		show : function(m) {
			this.setVisible(true, this.preanim(arguments, 0));
			return this
		}
	}
}());
Ext.Element.addMethods(function() {
	var d = "visibility", b = "display", a = "hidden", h = "none", c = "x-masked", g = "x-masked-relative", e = Ext.Element.data;
	return {
		isVisible : function(j) {
			var k = !this.isStyle(d, a) && !this.isStyle(b, h), l = this.dom.parentNode;
			if (j !== true || !k) {
				return k
			}
			while (l && !/body/i.test(l.tagName)) {
				if (!Ext.fly(l, "_isVisible").isVisible()) {
					return false
				}
				l = l.parentNode
			}
			return true
		},
		isDisplayed : function() {
			return !this.isStyle(b, h)
		},
		enableDisplayMode : function(j) {
			this.setVisibilityMode(Ext.Element.DISPLAY);
			if (!Ext.isEmpty(j)) {
				e(this.dom, "originalDisplay", j)
			}
			return this
		},
		mask : function(k, o) {
			var q = this, m = q.dom, p = Ext.DomHelper, n = "ext-el-mask-msg", j, r;
			if (q.getStyle("position") == "static") {
				q.addClass(g)
			}
			if ((j = e(m, "maskMsg"))) {
				j.remove()
			}
			if ((j = e(m, "mask"))) {
				j.remove()
			}
			r = p.append(m, {
						cls : "ext-el-mask"
					}, true);
			e(m, "mask", r);
			q.addClass(c);
			r.setDisplayed(true);
			if (typeof k == "string") {
				var l = p.append(m, {
							cls : n,
							cn : {
								tag : "div"
							}
						}, true);
				e(m, "maskMsg", l);
				l.dom.className = o ? n + " " + o : n;
				l.dom.firstChild.innerHTML = k;
				l.setDisplayed(true);
				l.center(q)
			}
			if (Ext.isIE && !(Ext.isIE7 && Ext.isStrict)
					&& q.getStyle("height") == "auto") {
				r.setSize(undefined, q.getHeight())
			}
			return r
		},
		unmask : function() {
			var l = this, m = l.dom, j = e(m, "mask"), k = e(m, "maskMsg");
			if (j) {
				if (k) {
					k.remove();
					e(m, "maskMsg", undefined)
				}
				j.remove();
				e(m, "mask", undefined)
			}
			l.removeClass([c, g])
		},
		isMasked : function() {
			var j = e(this.dom, "mask");
			return j && j.isVisible()
		},
		createShim : function() {
			var j = document.createElement("iframe"), k;
			j.frameBorder = "0";
			j.className = "ext-shim";
			j.src = Ext.SSL_SECURE_URL;
			k = Ext.get(this.dom.parentNode.insertBefore(j, this.dom));
			k.autoBoxAdjust = false;
			return k
		}
	}
}());
Ext.Element.addMethods({
			addKeyListener : function(b, d, c) {
				var a;
				if (!Ext.isObject(b) || Ext.isArray(b)) {
					a = {
						key : b,
						fn : d,
						scope : c
					}
				} else {
					a = {
						key : b.key,
						shift : b.shift,
						ctrl : b.ctrl,
						alt : b.alt,
						fn : d,
						scope : c
					}
				}
				return new Ext.KeyMap(this, a)
			},
			addKeyMap : function(a) {
				return new Ext.KeyMap(this, a)
			}
		});
(function() {
	var z = null, B = undefined, l = true, u = false, k = "setX", h = "setY", a = "setXY", o = "left", m = "bottom", t = "top", n = "right", r = "height", g = "width", j = "points", x = "hidden", A = "absolute", v = "visible", e = "motion", p = "position", s = "easeOut", d = new Ext.Element.Flyweight(), w = {}, y = function(
			C) {
		return C || {}
	}, q = function(C) {
		d.dom = C;
		d.id = Ext.id(C);
		return d
	}, c = function(C) {
		if (!w[C]) {
			w[C] = []
		}
		return w[C]
	}, b = function(D, C) {
		w[D] = C
	};
	Ext.enableFx = l;
	Ext.Fx = {
		switchStatements : function(D, E, C) {
			return E.apply(this, C[D])
		},
		slideIn : function(I, F) {
			F = y(F);
			var K = this, H = K.dom, N = H.style, P, C, M, E, D, N, J, O, L, G;
			I = I || "t";
			K.queueFx(F, function() {
				P = q(H).getXY();
				q(H).fixDisplay();
				C = q(H).getFxRestore();
				M = {
					x : P[0],
					y : P[1],
					0 : P[0],
					1 : P[1],
					width : H.offsetWidth,
					height : H.offsetHeight
				};
				M.right = M.x + M.width;
				M.bottom = M.y + M.height;
				q(H).setWidth(M.width).setHeight(M.height);
				E = q(H).fxWrap(C.pos, F, x);
				N.visibility = v;
				N.position = A;
				function Q() {
					q(H).fxUnwrap(E, C.pos, F);
					N.width = C.width;
					N.height = C.height;
					q(H).afterFx(F)
				}
				O = {
					to : [M.x, M.y]
				};
				L = {
					to : M.width
				};
				G = {
					to : M.height
				};
				function R(V, S, W, T, Y, aa, ad, ac, ab, X, U) {
					var Z = {};
					q(V).setWidth(W).setHeight(T);
					if (q(V)[Y]) {
						q(V)[Y](aa)
					}
					S[ad] = S[ac] = "0";
					if (ab) {
						Z.width = ab
					}
					if (X) {
						Z.height = X
					}
					if (U) {
						Z.points = U
					}
					return Z
				}
				J = q(H).switchStatements(I.toLowerCase(), R, {
							t : [E, N, M.width, 0, z, z, o, m, z, G, z],
							l : [E, N, 0, M.height, z, z, n, t, L, z, z],
							r : [E, N, M.width, M.height, k, M.right, o, t, z,
									z, O],
							b : [E, N, M.width, M.height, h, M.bottom, o, t, z,
									G, O],
							tl : [E, N, 0, 0, z, z, n, m, L, G, O],
							bl : [E, N, 0, 0, h, M.y + M.height, n, t, L, G, O],
							br : [E, N, 0, 0, a, [M.right, M.bottom], o, t, L,
									G, O],
							tr : [E, N, 0, 0, k, M.x + M.width, o, m, L, G, O]
						});
				N.visibility = v;
				q(E).show();
				arguments.callee.anim = q(E).fxanim(J, F, e, 0.5, s, Q)
			});
			return K
		},
		slideOut : function(G, E) {
			E = y(E);
			var I = this, F = I.dom, L = F.style, M = I.getXY(), D, C, J, K, H = {
				to : 0
			};
			G = G || "t";
			I.queueFx(E, function() {
						C = q(F).getFxRestore();
						J = {
							x : M[0],
							y : M[1],
							0 : M[0],
							1 : M[1],
							width : F.offsetWidth,
							height : F.offsetHeight
						};
						J.right = J.x + J.width;
						J.bottom = J.y + J.height;
						q(F).setWidth(J.width).setHeight(J.height);
						D = q(F).fxWrap(C.pos, E, v);
						L.visibility = v;
						L.position = A;
						q(D).setWidth(J.width).setHeight(J.height);
						function N() {
							E.useDisplay ? q(F).setDisplayed(u) : q(F).hide();
							q(F).fxUnwrap(D, C.pos, E);
							L.width = C.width;
							L.height = C.height;
							q(F).afterFx(E)
						}
						function O(P, X, V, Y, T, W, S, U, R) {
							var Q = {};
							P[X] = P[V] = "0";
							Q[Y] = T;
							if (W) {
								Q[W] = S
							}
							if (U) {
								Q[U] = R
							}
							return Q
						}
						K = q(F).switchStatements(G.toLowerCase(), O, {
									t : [L, o, m, r, H],
									l : [L, n, t, g, H],
									r : [L, o, t, g, H, j, {
												to : [J.right, J.y]
											}],
									b : [L, o, t, r, H, j, {
												to : [J.x, J.bottom]
											}],
									tl : [L, n, m, g, H, r, H],
									bl : [L, n, t, g, H, r, H, j, {
												to : [J.x, J.bottom]
											}],
									br : [L, o, t, g, H, r, H, j, {
												to : [J.x + J.width, J.bottom]
											}],
									tr : [L, o, m, g, H, r, H, j, {
												to : [J.right, J.y]
											}]
								});
						arguments.callee.anim = q(D).fxanim(K, E, e, 0.5, s, N)
					});
			return I
		},
		puff : function(I) {
			I = y(I);
			var G = this, H = G.dom, D = H.style, E, C, F;
			G.queueFx(I, function() {
						E = q(H).getWidth();
						C = q(H).getHeight();
						q(H).clearOpacity();
						q(H).show();
						F = q(H).getFxRestore();
						function J() {
							I.useDisplay ? q(H).setDisplayed(u) : q(H).hide();
							q(H).clearOpacity();
							q(H).setPositioning(F.pos);
							D.width = F.width;
							D.height = F.height;
							D.fontSize = "";
							q(H).afterFx(I)
						}
						arguments.callee.anim = q(H).fxanim({
									width : {
										to : q(H).adjustWidth(E * 2)
									},
									height : {
										to : q(H).adjustHeight(C * 2)
									},
									points : {
										by : [-E * 0.5, -C * 0.5]
									},
									opacity : {
										to : 0
									},
									fontSize : {
										to : 200,
										unit : "%"
									}
								}, I, e, 0.5, s, J)
					});
			return G
		},
		switchOff : function(G) {
			G = y(G);
			var E = this, F = E.dom, C = F.style, D;
			E.queueFx(G, function() {
				q(F).clearOpacity();
				q(F).clip();
				D = q(F).getFxRestore();
				function H() {
					G.useDisplay ? q(F).setDisplayed(u) : q(F).hide();
					q(F).clearOpacity();
					q(F).setPositioning(D.pos);
					C.width = D.width;
					C.height = D.height;
					q(F).afterFx(G)
				}
				q(F).fxanim({
							opacity : {
								to : 0.3
							}
						}, z, z, 0.1, z, function() {
							q(F).clearOpacity();
							(function() {
								q(F).fxanim({
											height : {
												to : 1
											},
											points : {
												by : [0, q(F).getHeight() * 0.5]
											}
										}, G, e, 0.3, "easeIn", H)
							}).defer(100)
						})
			});
			return E
		},
		highlight : function(E, I) {
			I = y(I);
			var G = this, H = G.dom, C = I.attr || "backgroundColor", D = {}, F;
			G.queueFx(I, function() {
						q(H).clearOpacity();
						q(H).show();
						function J() {
							H.style[C] = F;
							q(H).afterFx(I)
						}
						F = H.style[C];
						D[C] = {
							from : E || "ffff9c",
							to : I.endColor || q(H).getColor(C) || "ffffff"
						};
						arguments.callee.anim = q(H).fxanim(D, I, "color", 1,
								"easeIn", J)
					});
			return G
		},
		frame : function(C, F, I) {
			I = y(I);
			var E = this, H = E.dom, D, G;
			E.queueFx(I, function() {
						C = C || "#C3DAF9";
						if (C.length == 6) {
							C = "#" + C
						}
						F = F || 1;
						q(H).show();
						var M = q(H).getXY(), K = {
							x : M[0],
							y : M[1],
							0 : M[0],
							1 : M[1],
							width : H.offsetWidth,
							height : H.offsetHeight
						}, J = function() {
							D = q(document.body || document.documentElement)
									.createChild({
												style : {
													position : A,
													"z-index" : 35000,
													border : "0px solid " + C
												}
											});
							return D.queueFx({}, L)
						};
						arguments.callee.anim = {
							isAnimated : true,
							stop : function() {
								F = 0;
								D.stopFx()
							}
						};
						function L() {
							var N = Ext.isBorderBox ? 2 : 1;
							G = D.anim({
										top : {
											from : K.y,
											to : K.y - 20
										},
										left : {
											from : K.x,
											to : K.x - 20
										},
										borderWidth : {
											from : 0,
											to : 10
										},
										opacity : {
											from : 1,
											to : 0
										},
										height : {
											from : K.height,
											to : K.height + 20 * N
										},
										width : {
											from : K.width,
											to : K.width + 20 * N
										}
									}, {
										duration : I.duration || 1,
										callback : function() {
											D.remove();
											--F > 0 ? J() : q(H).afterFx(I)
										}
									});
							arguments.callee.anim = {
								isAnimated : true,
								stop : function() {
									G.stop()
								}
							}
						}
						J()
					});
			return E
		},
		pause : function(E) {
			var D = this.dom, C;
			this.queueFx({}, function() {
						C = setTimeout(function() {
									q(D).afterFx({})
								}, E * 1000);
						arguments.callee.anim = {
							isAnimated : true,
							stop : function() {
								clearTimeout(C);
								q(D).afterFx({})
							}
						}
					});
			return this
		},
		fadeIn : function(E) {
			E = y(E);
			var C = this, D = C.dom, F = E.endOpacity || 1;
			C.queueFx(E, function() {
						q(D).setOpacity(0);
						q(D).fixDisplay();
						D.style.visibility = v;
						arguments.callee.anim = q(D).fxanim({
									opacity : {
										to : F
									}
								}, E, z, 0.5, s, function() {
									if (F == 1) {
										q(D).clearOpacity()
									}
									q(D).afterFx(E)
								})
					});
			return C
		},
		fadeOut : function(F) {
			F = y(F);
			var D = this, E = D.dom, C = E.style, G = F.endOpacity || 0;
			D.queueFx(F, function() {
				arguments.callee.anim = q(E).fxanim({
							opacity : {
								to : G
							}
						}, F, z, 0.5, s, function() {
							if (G == 0) {
								Ext.Element.data(E, "visibilityMode") == Ext.Element.DISPLAY
										|| F.useDisplay
										? C.display = "none"
										: C.visibility = x;
								q(E).clearOpacity()
							}
							q(E).afterFx(F)
						})
			});
			return D
		},
		scale : function(C, D, E) {
			this.shift(Ext.apply({}, E, {
						width : C,
						height : D
					}));
			return this
		},
		shift : function(E) {
			E = y(E);
			var D = this.dom, C = {};
			this.queueFx(E, function() {
						for (var F in E) {
							if (E[F] != B) {
								C[F] = {
									to : E[F]
								}
							}
						}
						C.width ? C.width.to = q(D).adjustWidth(E.width) : C;
						C.height ? C.height.to = q(D).adjustWidth(E.height) : C;
						if (C.x || C.y || C.xy) {
							C.points = C.xy || {
								to : [C.x ? C.x.to : q(D).getX(),
										C.y ? C.y.to : q(D).getY()]
							}
						}
						arguments.callee.anim = q(D).fxanim(C, E, e, 0.35, s,
								function() {
									q(D).afterFx(E)
								})
					});
			return this
		},
		ghost : function(F, D) {
			D = y(D);
			var H = this, E = H.dom, K = E.style, I = {
				opacity : {
					to : 0
				},
				points : {}
			}, L = I.points, C, J, G;
			F = F || "b";
			H.queueFx(D, function() {
						C = q(E).getFxRestore();
						J = q(E).getWidth();
						G = q(E).getHeight();
						function M() {
							D.useDisplay ? q(E).setDisplayed(u) : q(E).hide();
							q(E).clearOpacity();
							q(E).setPositioning(C.pos);
							K.width = C.width;
							K.height = C.height;
							q(E).afterFx(D)
						}
						L.by = q(E).switchStatements(F.toLowerCase(),
								function(O, N) {
									return [O, N]
								}, {
									t : [0, -G],
									l : [-J, 0],
									r : [J, 0],
									b : [0, G],
									tl : [-J, -G],
									bl : [-J, G],
									br : [J, G],
									tr : [J, -G]
								});
						arguments.callee.anim = q(E).fxanim(I, D, e, 0.5, s, M)
					});
			return H
		},
		syncFx : function() {
			var C = this;
			C.fxDefaults = Ext.apply(C.fxDefaults || {}, {
						block : u,
						concurrent : l,
						stopFx : u
					});
			return C
		},
		sequenceFx : function() {
			var C = this;
			C.fxDefaults = Ext.apply(C.fxDefaults || {}, {
						block : u,
						concurrent : u,
						stopFx : u
					});
			return C
		},
		nextFx : function() {
			var C = c(this.dom.id)[0];
			if (C) {
				C.call(this)
			}
		},
		hasActiveFx : function() {
			return c(this.dom.id)[0]
		},
		stopFx : function(C) {
			var D = this, F = D.dom.id;
			if (D.hasActiveFx()) {
				var E = c(F)[0];
				if (E && E.anim) {
					if (E.anim.isAnimated) {
						b(F, [E]);
						E.anim.stop(C !== undefined ? C : l)
					} else {
						b(F, [])
					}
				}
			}
			return D
		},
		beforeFx : function(C) {
			if (this.hasActiveFx() && !C.concurrent) {
				if (C.stopFx) {
					this.stopFx();
					return l
				}
				return u
			}
			return l
		},
		hasFxBlock : function() {
			var C = c(this.dom.id);
			return C && C[0] && C[0].block
		},
		queueFx : function(F, C) {
			var D = q(this.dom);
			if (!D.hasFxBlock()) {
				Ext.applyIf(F, D.fxDefaults);
				if (!F.concurrent) {
					var E = D.beforeFx(F);
					C.block = F.block;
					c(D.dom.id).push(C);
					if (E) {
						D.nextFx()
					}
				} else {
					C.call(D)
				}
			}
			return D
		},
		fxWrap : function(I, G, E) {
			var F = this.dom, D, C;
			if (!G.wrap || !(D = Ext.getDom(G.wrap))) {
				if (G.fixPosition) {
					C = q(F).getXY()
				}
				var H = document.createElement("div");
				H.style.visibility = E;
				D = F.parentNode.insertBefore(H, F);
				q(D).setPositioning(I);
				if (q(D).isStyle(p, "static")) {
					q(D).position("relative")
				}
				q(F).clearPositioning("auto");
				q(D).clip();
				D.appendChild(F);
				if (C) {
					q(D).setXY(C)
				}
			}
			return D
		},
		fxUnwrap : function(D, G, F) {
			var E = this.dom;
			q(E).clearPositioning();
			q(E).setPositioning(G);
			if (!F.wrap) {
				var C = q(D).dom.parentNode;
				C.insertBefore(E, D);
				q(D).remove()
			}
		},
		getFxRestore : function() {
			var C = this.dom.style;
			return {
				pos : this.getPositioning(),
				width : C.width,
				height : C.height
			}
		},
		afterFx : function(D) {
			var C = this.dom, E = C.id;
			if (D.afterStyle) {
				q(C).setStyle(D.afterStyle)
			}
			if (D.afterCls) {
				q(C).addClass(D.afterCls)
			}
			if (D.remove == l) {
				q(C).remove()
			}
			if (D.callback) {
				D.callback.call(D.scope, q(C))
			}
			if (!D.concurrent) {
				c(E).shift();
				q(C).nextFx()
			}
		},
		fxanim : function(F, G, D, H, E, C) {
			D = D || "run";
			G = G || {};
			var I = Ext.lib.Anim[D](this.dom, F, (G.duration || H) || 0.35,
					(G.easing || E) || s, C, this);
			G.anim = I;
			return I
		}
	};
	Ext.Fx.resize = Ext.Fx.scale;
	Ext.Element.addMethods(Ext.Fx)
})();
Ext.CompositeElementLite = function(b, a) {
	this.elements = [];
	this.add(b, a);
	this.el = new Ext.Element.Flyweight()
};
Ext.CompositeElementLite.prototype = {
	isComposite : true,
	getElement : function(a) {
		var b = this.el;
		b.dom = a;
		b.id = a.id;
		return b
	},
	transformElement : function(a) {
		return Ext.getDom(a)
	},
	getCount : function() {
		return this.elements.length
	},
	add : function(d, b) {
		var e = this, g = e.elements;
		if (!d) {
			return this
		}
		if (Ext.isString(d)) {
			d = Ext.Element.selectorFunction(d, b)
		} else {
			if (d.isComposite) {
				d = d.elements
			} else {
				if (!Ext.isIterable(d)) {
					d = [d]
				}
			}
		}
		for (var c = 0, a = d.length; c < a; ++c) {
			g.push(e.transformElement(d[c]))
		}
		return e
	},
	invoke : function(d, b) {
		var g = this, c = g.elements, a = c.length, h;
		for (i = 0; i < a; i++) {
			h = c[i];
			if (h) {
				Ext.Element.prototype[d].apply(g.getElement(h), b)
			}
		}
		return g
	},
	item : function(b) {
		var d = this, c = d.elements[b], a = null;
		if (c) {
			a = d.getElement(c)
		}
		return a
	},
	addListener : function(b, j, h, g) {
		var d = this.elements, a = d.length, c, k;
		for (c = 0; c < a; c++) {
			k = d[c];
			if (k) {
				Ext.EventManager.on(k, b, j, h || k, g)
			}
		}
		return this
	},
	each : function(g, d) {
		var h = this, c = h.elements, a = c.length, b, j;
		for (b = 0; b < a; b++) {
			j = c[b];
			if (j) {
				j = this.getElement(j);
				if (g.call(d || j, j, h, b)) {
					break
				}
			}
		}
		return h
	},
	fill : function(a) {
		var b = this;
		b.elements = [];
		b.add(a);
		return b
	},
	filter : function(a) {
		var b = [], d = this, e = d.elements, c = Ext.isFunction(a)
				? a
				: function(g) {
					return g.is(a)
				};
		d.each(function(j, g, h) {
					if (c(j, h) !== false) {
						b[b.length] = d.transformElement(j)
					}
				});
		d.elements = b;
		return d
	},
	indexOf : function(a) {
		return this.elements.indexOf(this.transformElement(a))
	},
	replaceElement : function(e, c, a) {
		var b = !isNaN(e) ? e : this.indexOf(e), g;
		if (b > -1) {
			c = Ext.getDom(c);
			if (a) {
				g = this.elements[b];
				g.parentNode.insertBefore(c, g);
				Ext.removeNode(g)
			}
			this.elements.splice(b, 1, c)
		}
		return this
	},
	clear : function() {
		this.elements = []
	}
};
Ext.CompositeElementLite.prototype.on = Ext.CompositeElementLite.prototype.addListener;
(function() {
	var c, b = Ext.Element.prototype, a = Ext.CompositeElementLite.prototype;
	for (c in b) {
		if (Ext.isFunction(b[c])) {
			(function(d) {
				a[d] = a[d] || function() {
					return this.invoke(d, arguments)
				}
			}).call(a, c)
		}
	}
})();
if (Ext.DomQuery) {
	Ext.Element.selectorFunction = Ext.DomQuery.select
}
Ext.Element.select = function(a, b) {
	var c;
	if (typeof a == "string") {
		c = Ext.Element.selectorFunction(a, b)
	} else {
		if (a.length !== undefined) {
			c = a
		} else {
			throw "Invalid selector"
		}
	}
	return new Ext.CompositeElementLite(c)
};
Ext.select = Ext.Element.select;
Ext.apply(Ext.CompositeElementLite.prototype, {
			addElements : function(c, a) {
				if (!c) {
					return this
				}
				if (typeof c == "string") {
					c = Ext.Element.selectorFunction(c, a)
				}
				var b = this.elements;
				Ext.each(c, function(d) {
							b.push(Ext.get(d))
						});
				return this
			},
			first : function() {
				return this.item(0)
			},
			last : function() {
				return this.item(this.getCount() - 1)
			},
			contains : function(a) {
				return this.indexOf(a) != -1
			},
			removeElement : function(d, e) {
				var c = this, a = this.elements, b;
				Ext.each(d, function(g) {
							if ((b = (a[g] || a[g = c.indexOf(g)]))) {
								if (e) {
									if (b.dom) {
										b.remove()
									} else {
										Ext.removeNode(b)
									}
								}
								a.splice(g, 1)
							}
						});
				return this
			}
		});
Ext.CompositeElement = function(b, a) {
	this.elements = [];
	this.add(b, a)
};
Ext.extend(Ext.CompositeElement, Ext.CompositeElementLite, {
			getElement : function(a) {
				return a
			},
			transformElement : function(a) {
				return Ext.get(a)
			}
		});
Ext.Element.select = function(a, d, b) {
	var c;
	if (typeof a == "string") {
		c = Ext.Element.selectorFunction(a, b)
	} else {
		if (a.length !== undefined) {
			c = a
		} else {
			throw "Invalid selector"
		}
	}
	return (d === true)
			? new Ext.CompositeElement(c)
			: new Ext.CompositeElementLite(c)
};
Ext.select = Ext.Element.select;
(function() {
	var b = "beforerequest", e = "requestcomplete", d = "requestexception", h = undefined, c = "load", j = "POST", a = "GET", g = window;
	Ext.data.Connection = function(k) {
		Ext.apply(this, k);
		this.addEvents(b, e, d);
		Ext.data.Connection.superclass.constructor.call(this)
	};
	Ext.extend(Ext.data.Connection, Ext.util.Observable, {
		timeout : 30000,
		autoAbort : false,
		disableCaching : true,
		disableCachingParam : "_dc",
		request : function(q) {
			var t = this;
			if (t.fireEvent(b, t, q)) {
				if (q.el) {
					if (!Ext.isEmpty(q.indicatorText)) {
						t.indicatorText = '<div class="loading-indicator">'
								+ q.indicatorText + "</div>"
					}
					if (t.indicatorText) {
						Ext.getDom(q.el).innerHTML = t.indicatorText
					}
					q.success = (Ext.isFunction(q.success)
							? q.success
							: function() {
							}).createInterceptor(function(o) {
								Ext.getDom(q.el).innerHTML = o.responseText
							})
				}
				var m = q.params, l = q.url || t.url, k, r = {
					success : t.handleResponse,
					failure : t.handleFailure,
					scope : t,
					argument : {
						options : q
					},
					timeout : q.timeout || t.timeout
				}, n, u;
				if (Ext.isFunction(m)) {
					m = m.call(q.scope || g, q)
				}
				m = Ext.urlEncode(t.extraParams, Ext.isObject(m) ? Ext
								.urlEncode(m) : m);
				if (Ext.isFunction(l)) {
					l = l.call(q.scope || g, q)
				}
				if ((n = Ext.getDom(q.form))) {
					l = l || n.action;
					if (q.isUpload
							|| /multipart\/form-data/i.test(n
									.getAttribute("enctype"))) {
						return t.doFormUpload.call(t, q, m, l)
					}
					u = Ext.lib.Ajax.serializeForm(n);
					m = m ? (m + "&" + u) : u
				}
				k = q.method || t.method
						|| ((m || q.xmlData || q.jsonData) ? j : a);
				if (k === a && (t.disableCaching && q.disableCaching !== false)
						|| q.disableCaching === true) {
					var s = q.disableCachingParam || t.disableCachingParam;
					l = Ext.urlAppend(l, s + "=" + (new Date().getTime()))
				}
				q.headers = Ext.apply(q.headers || {}, t.defaultHeaders || {});
				if (q.autoAbort === true || t.autoAbort) {
					t.abort()
				}
				if ((k == a || q.xmlData || q.jsonData) && m) {
					l = Ext.urlAppend(l, m);
					m = ""
				}
				return (t.transId = Ext.lib.Ajax.request(k, l, r, m, q))
			} else {
				return q.callback ? q.callback.apply(q.scope, [q, h, h]) : null
			}
		},
		isLoading : function(k) {
			return k ? Ext.lib.Ajax.isCallInProgress(k) : !!this.transId
		},
		abort : function(k) {
			if (k || this.isLoading()) {
				Ext.lib.Ajax.abort(k || this.transId)
			}
		},
		handleResponse : function(k) {
			this.transId = false;
			var l = k.argument.options;
			k.argument = l ? l.argument : null;
			this.fireEvent(e, this, k, l);
			if (l.success) {
				l.success.call(l.scope, k, l)
			}
			if (l.callback) {
				l.callback.call(l.scope, l, true, k)
			}
		},
		handleFailure : function(k, m) {
			this.transId = false;
			var l = k.argument.options;
			k.argument = l ? l.argument : null;
			this.fireEvent(d, this, k, l, m);
			if (l.failure) {
				l.failure.call(l.scope, k, l)
			}
			if (l.callback) {
				l.callback.call(l.scope, l, false, k)
			}
		},
		doFormUpload : function(r, k, l) {
			var m = Ext.id(), w = document, s = w.createElement("iframe"), n = Ext
					.getDom(r.form), v = [], u, q = "multipart/form-data", p = {
				target : n.target,
				method : n.method,
				encoding : n.encoding,
				enctype : n.enctype,
				action : n.action
			};
			Ext.fly(s).set({
						id : m,
						name : m,
						cls : "x-hidden",
						src : Ext.SSL_SECURE_URL
					});
			w.body.appendChild(s);
			if (Ext.isIE) {
				document.frames[m].name = m
			}
			Ext.fly(n).set({
						target : m,
						method : j,
						enctype : q,
						encoding : q,
						action : l || p.action
					});
			Ext.iterate(Ext.urlDecode(k, false), function(x, o) {
						u = w.createElement("input");
						Ext.fly(u).set({
									type : "hidden",
									value : o,
									name : x
								});
						n.appendChild(u);
						v.push(u)
					});
			function t() {
				var y = this, x = {
					responseText : "",
					responseXML : null,
					argument : r.argument
				}, B, A;
				try {
					B = s.contentWindow.document || s.contentDocument
							|| g.frames[m].document;
					if (B) {
						if (B.body) {
							if (/textarea/i
									.test((A = B.body.firstChild || {}).tagName)) {
								x.responseText = A.value
							} else {
								x.responseText = B.body.innerHTML
							}
						}
						x.responseXML = B.XMLDocument || B
					}
				} catch (z) {
				}
				Ext.EventManager.removeListener(s, c, t, y);
				y.fireEvent(e, y, x, r);
				function o(E, D, C) {
					if (Ext.isFunction(E)) {
						E.apply(D, C)
					}
				}
				o(r.success, r.scope, [x, r]);
				o(r.callback, r.scope, [r, true, x]);
				if (!y.debugUploads) {
					setTimeout(function() {
								Ext.removeNode(s)
							}, 100)
				}
			}
			Ext.EventManager.on(s, c, t, this);
			n.submit();
			Ext.fly(n).set(p);
			Ext.each(v, function(o) {
						Ext.removeNode(o)
					})
		}
	})
})();
Ext.Ajax = new Ext.data.Connection({
			autoAbort : false,
			serializeForm : function(a) {
				return Ext.lib.Ajax.serializeForm(a)
			}
		});
Ext.UpdateManager = Ext.Updater = Ext.extend(Ext.util.Observable, function() {
	var b = "beforeupdate", d = "update", c = "failure";
	function a(h) {
		var j = this;
		j.transaction = null;
		if (h.argument.form && h.argument.reset) {
			try {
				h.argument.form.reset()
			} catch (k) {
			}
		}
		if (j.loadScripts) {
			j.renderer.render(j.el, h, j, g.createDelegate(j, [h]))
		} else {
			j.renderer.render(j.el, h, j);
			g.call(j, h)
		}
	}
	function g(h, j, k) {
		this.fireEvent(j || d, this.el, h);
		if (Ext.isFunction(h.argument.callback)) {
			h.argument.callback.call(h.argument.scope, this.el, Ext.isEmpty(k)
							? true
							: false, h, h.argument.options)
		}
	}
	function e(h) {
		g.call(this, h, c, !!(this.transaction = null))
	}
	return {
		constructor : function(j, h) {
			var k = this;
			j = Ext.get(j);
			if (!h && j.updateManager) {
				return j.updateManager
			}
			k.el = j;
			k.defaultUrl = null;
			k.addEvents(b, d, c);
			Ext.apply(k, Ext.Updater.defaults);
			k.transaction = null;
			k.refreshDelegate = k.refresh.createDelegate(k);
			k.updateDelegate = k.update.createDelegate(k);
			k.formUpdateDelegate = (k.formUpdate || function() {
			}).createDelegate(k);
			k.renderer = k.renderer || k.getDefaultRenderer();
			Ext.Updater.superclass.constructor.call(k)
		},
		setRenderer : function(h) {
			this.renderer = h
		},
		getRenderer : function() {
			return this.renderer
		},
		getDefaultRenderer : function() {
			return new Ext.Updater.BasicRenderer()
		},
		setDefaultUrl : function(h) {
			this.defaultUrl = h
		},
		getEl : function() {
			return this.el
		},
		update : function(j, p, q, m) {
			var l = this, h, k;
			if (l.fireEvent(b, l.el, j, p) !== false) {
				if (Ext.isObject(j)) {
					h = j;
					j = h.url;
					p = p || h.params;
					q = q || h.callback;
					m = m || h.discardUrl;
					k = h.scope;
					if (!Ext.isEmpty(h.nocache)) {
						l.disableCaching = h.nocache
					}
					if (!Ext.isEmpty(h.text)) {
						l.indicatorText = '<div class="loading-indicator">'
								+ h.text + "</div>"
					}
					if (!Ext.isEmpty(h.scripts)) {
						l.loadScripts = h.scripts
					}
					if (!Ext.isEmpty(h.timeout)) {
						l.timeout = h.timeout
					}
				}
				l.showLoading();
				if (!m) {
					l.defaultUrl = j
				}
				if (Ext.isFunction(j)) {
					j = j.call(l)
				}
				var n = Ext.apply({}, {
					url : j,
					params : (Ext.isFunction(p) && k) ? p.createDelegate(k) : p,
					success : a,
					failure : e,
					scope : l,
					callback : undefined,
					timeout : (l.timeout * 1000),
					disableCaching : l.disableCaching,
					argument : {
						options : h,
						url : j,
						form : null,
						callback : q,
						scope : k || window,
						params : p
					}
				}, h);
				l.transaction = Ext.Ajax.request(n)
			}
		},
		formUpdate : function(l, h, k, m) {
			var j = this;
			if (j.fireEvent(b, j.el, l, h) !== false) {
				if (Ext.isFunction(h)) {
					h = h.call(j)
				}
				l = Ext.getDom(l);
				j.transaction = Ext.Ajax.request({
							form : l,
							url : h,
							success : a,
							failure : e,
							scope : j,
							timeout : (j.timeout * 1000),
							argument : {
								url : h,
								form : l,
								callback : m,
								reset : k
							}
						});
				j.showLoading.defer(1, j)
			}
		},
		startAutoRefresh : function(j, k, m, n, h) {
			var l = this;
			if (h) {
				l.update(k || l.defaultUrl, m, n, true)
			}
			if (l.autoRefreshProcId) {
				clearInterval(l.autoRefreshProcId)
			}
			l.autoRefreshProcId = setInterval(l.update.createDelegate(l, [
									k || l.defaultUrl, m, n, true]), j * 1000)
		},
		stopAutoRefresh : function() {
			if (this.autoRefreshProcId) {
				clearInterval(this.autoRefreshProcId);
				delete this.autoRefreshProcId
			}
		},
		isAutoRefreshing : function() {
			return !!this.autoRefreshProcId
		},
		showLoading : function() {
			if (this.showLoadIndicator) {
				this.el.dom.innerHTML = this.indicatorText
			}
		},
		abort : function() {
			if (this.transaction) {
				Ext.Ajax.abort(this.transaction)
			}
		},
		isUpdating : function() {
			return this.transaction
					? Ext.Ajax.isLoading(this.transaction)
					: false
		},
		refresh : function(h) {
			if (this.defaultUrl) {
				this.update(this.defaultUrl, null, h, true)
			}
		}
	}
}());
Ext.Updater.defaults = {
	timeout : 30,
	disableCaching : false,
	showLoadIndicator : true,
	indicatorText : '<div class="loading-indicator">Loading...</div>',
	loadScripts : false,
	sslBlankUrl : Ext.SSL_SECURE_URL
};
Ext.Updater.updateElement = function(d, c, e, b) {
	var a = Ext.get(d).getUpdater();
	Ext.apply(a, b);
	a.update(c, e, b ? b.callback : null)
};
Ext.Updater.BasicRenderer = function() {
};
Ext.Updater.BasicRenderer.prototype = {
	render : function(c, a, b, d) {
		c.update(a.responseText, b.loadScripts, d)
	}
};
(function() {
	Date.useStrict = false;
	function b(d) {
		var c = Array.prototype.slice.call(arguments, 1);
		return d.replace(/\{(\d+)\}/g, function(e, g) {
					return c[g]
				})
	}
	Date.formatCodeToRegex = function(d, c) {
		var e = Date.parseCodes[d];
		if (e) {
			e = typeof e == "function" ? e() : e;
			Date.parseCodes[d] = e
		}
		return e ? Ext.applyIf({
					c : e.c ? b(e.c, c || "{0}") : e.c
				}, e) : {
			g : 0,
			c : null,
			s : Ext.escapeRe(d)
		}
	};
	var a = Date.formatCodeToRegex;
	Ext.apply(Date, {
		parseFunctions : {
			"M$" : function(d, c) {
				var e = new RegExp("\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/");
				var g = (d || "").match(e);
				return g ? new Date(((g[1] || "") + g[2]) * 1) : null
			}
		},
		parseRegexes : [],
		formatFunctions : {
			"M$" : function() {
				return "\\/Date(" + this.getTime() + ")\\/"
			}
		},
		y2kYear : 50,
		MILLI : "ms",
		SECOND : "s",
		MINUTE : "mi",
		HOUR : "h",
		DAY : "d",
		MONTH : "mo",
		YEAR : "y",
		defaults : {},
		dayNames : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday"],
		monthNames : ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November",
				"December"],
		monthNumbers : {
			Jan : 0,
			Feb : 1,
			Mar : 2,
			Apr : 3,
			May : 4,
			Jun : 5,
			Jul : 6,
			Aug : 7,
			Sep : 8,
			Oct : 9,
			Nov : 10,
			Dec : 11
		},
		getShortMonthName : function(c) {
			return Date.monthNames[c].substring(0, 3)
		},
		getShortDayName : function(c) {
			return Date.dayNames[c].substring(0, 3)
		},
		getMonthNumber : function(c) {
			return Date.monthNumbers[c.substring(0, 1).toUpperCase()
					+ c.substring(1, 3).toLowerCase()]
		},
		formatCodes : {
			d : "String.leftPad(this.getDate(), 2, '0')",
			D : "Date.getShortDayName(this.getDay())",
			j : "this.getDate()",
			l : "Date.dayNames[this.getDay()]",
			N : "(this.getDay() ? this.getDay() : 7)",
			S : "this.getSuffix()",
			w : "this.getDay()",
			z : "this.getDayOfYear()",
			W : "String.leftPad(this.getWeekOfYear(), 2, '0')",
			F : "Date.monthNames[this.getMonth()]",
			m : "String.leftPad(this.getMonth() + 1, 2, '0')",
			M : "Date.getShortMonthName(this.getMonth())",
			n : "(this.getMonth() + 1)",
			t : "this.getDaysInMonth()",
			L : "(this.isLeapYear() ? 1 : 0)",
			o : "(this.getFullYear() + (this.getWeekOfYear() == 1 && this.getMonth() > 0 ? +1 : (this.getWeekOfYear() >= 52 && this.getMonth() < 11 ? -1 : 0)))",
			Y : "this.getFullYear()",
			y : "('' + this.getFullYear()).substring(2, 4)",
			a : "(this.getHours() < 12 ? 'am' : 'pm')",
			A : "(this.getHours() < 12 ? 'AM' : 'PM')",
			g : "((this.getHours() % 12) ? this.getHours() % 12 : 12)",
			G : "this.getHours()",
			h : "String.leftPad((this.getHours() % 12) ? this.getHours() % 12 : 12, 2, '0')",
			H : "String.leftPad(this.getHours(), 2, '0')",
			i : "String.leftPad(this.getMinutes(), 2, '0')",
			s : "String.leftPad(this.getSeconds(), 2, '0')",
			u : "String.leftPad(this.getMilliseconds(), 3, '0')",
			O : "this.getGMTOffset()",
			P : "this.getGMTOffset(true)",
			T : "this.getTimezone()",
			Z : "(this.getTimezoneOffset() * -60)",
			c : function() {
				for (var k = "Y-m-dTH:i:sP", h = [], g = 0, d = k.length; g < d; ++g) {
					var j = k.charAt(g);
					h.push(j == "T" ? "'T'" : Date.getFormatCode(j))
				}
				return h.join(" + ")
			},
			U : "Math.round(this.getTime() / 1000)"
		},
		isValid : function(o, c, n, k, g, j, e) {
			k = k || 0;
			g = g || 0;
			j = j || 0;
			e = e || 0;
			var l = new Date(o, c - 1, n, k, g, j, e);
			return o == l.getFullYear() && c == l.getMonth() + 1
					&& n == l.getDate() && k == l.getHours()
					&& g == l.getMinutes() && j == l.getSeconds()
					&& e == l.getMilliseconds()
		},
		parseDate : function(d, g, c) {
			var e = Date.parseFunctions;
			if (e[g] == null) {
				Date.createParser(g)
			}
			return e[g](d, Ext.isDefined(c) ? c : Date.useStrict)
		},
		getFormatCode : function(d) {
			var c = Date.formatCodes[d];
			if (c) {
				c = typeof c == "function" ? c() : c;
				Date.formatCodes[d] = c
			}
			return c || ("'" + String.escape(d) + "'")
		},
		createFormat : function(h) {
			var g = [], c = false, e = "";
			for (var d = 0; d < h.length; ++d) {
				e = h.charAt(d);
				if (!c && e == "\\") {
					c = true
				} else {
					if (c) {
						c = false;
						g.push("'" + String.escape(e) + "'")
					} else {
						g.push(Date.getFormatCode(e))
					}
				}
			}
			Date.formatFunctions[h] = new Function("return " + g.join("+"))
		},
		createParser : function() {
			var c = [
					"var dt, y, m, d, h, i, s, ms, o, z, zz, u, v,",
					"def = Date.defaults,",
					"results = String(input).match(Date.parseRegexes[{0}]);",
					"if(results){",
					"{1}",
					"if(u != null){",
					"v = new Date(u * 1000);",
					"}else{",
					"dt = (new Date()).clearTime();",
					"y = y >= 0? y : Ext.num(def.y, dt.getFullYear());",
					"m = m >= 0? m : Ext.num(def.m - 1, dt.getMonth());",
					"d = d >= 0? d : Ext.num(def.d, dt.getDate());",
					"h  = h || Ext.num(def.h, dt.getHours());",
					"i  = i || Ext.num(def.i, dt.getMinutes());",
					"s  = s || Ext.num(def.s, dt.getSeconds());",
					"ms = ms || Ext.num(def.ms, dt.getMilliseconds());",
					"if(z >= 0 && y >= 0){",
					"v = new Date(y, 0, 1, h, i, s, ms);",
					"v = !strict? v : (strict === true && (z <= 364 || (v.isLeapYear() && z <= 365))? v.add(Date.DAY, z) : null);",
					"}else if(strict === true && !Date.isValid(y, m + 1, d, h, i, s, ms)){",
					"v = null;",
					"}else{",
					"v = new Date(y, m, d, h, i, s, ms);",
					"}",
					"}",
					"}",
					"if(v){",
					"if(zz != null){",
					"v = v.add(Date.SECOND, -v.getTimezoneOffset() * 60 - zz);",
					"}else if(o){",
					"v = v.add(Date.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));",
					"}", "}", "return v;"].join("\n");
			return function(m) {
				var e = Date.parseRegexes.length, n = 1, g = [], l = [], k = false, d = "";
				for (var j = 0; j < m.length; ++j) {
					d = m.charAt(j);
					if (!k && d == "\\") {
						k = true
					} else {
						if (k) {
							k = false;
							l.push(String.escape(d))
						} else {
							var h = a(d, n);
							n += h.g;
							l.push(h.s);
							if (h.g && h.c) {
								g.push(h.c)
							}
						}
					}
				}
				Date.parseRegexes[e] = new RegExp("^" + l.join("") + "$", "i");
				Date.parseFunctions[m] = new Function("input", "strict", b(c,
								e, g.join("")))
			}
		}(),
		parseCodes : {
			d : {
				g : 1,
				c : "d = parseInt(results[{0}], 10);\n",
				s : "(\\d{2})"
			},
			j : {
				g : 1,
				c : "d = parseInt(results[{0}], 10);\n",
				s : "(\\d{1,2})"
			},
			D : function() {
				for (var c = [], d = 0; d < 7; c.push(Date.getShortDayName(d)), ++d) {
				}
				return {
					g : 0,
					c : null,
					s : "(?:" + c.join("|") + ")"
				}
			},
			l : function() {
				return {
					g : 0,
					c : null,
					s : "(?:" + Date.dayNames.join("|") + ")"
				}
			},
			N : {
				g : 0,
				c : null,
				s : "[1-7]"
			},
			S : {
				g : 0,
				c : null,
				s : "(?:st|nd|rd|th)"
			},
			w : {
				g : 0,
				c : null,
				s : "[0-6]"
			},
			z : {
				g : 1,
				c : "z = parseInt(results[{0}], 10);\n",
				s : "(\\d{1,3})"
			},
			W : {
				g : 0,
				c : null,
				s : "(?:\\d{2})"
			},
			F : function() {
				return {
					g : 1,
					c : "m = parseInt(Date.getMonthNumber(results[{0}]), 10);\n",
					s : "(" + Date.monthNames.join("|") + ")"
				}
			},
			M : function() {
				for (var c = [], d = 0; d < 12; c.push(Date
						.getShortMonthName(d)), ++d) {
				}
				return Ext.applyIf({
							s : "(" + c.join("|") + ")"
						}, a("F"))
			},
			m : {
				g : 1,
				c : "m = parseInt(results[{0}], 10) - 1;\n",
				s : "(\\d{2})"
			},
			n : {
				g : 1,
				c : "m = parseInt(results[{0}], 10) - 1;\n",
				s : "(\\d{1,2})"
			},
			t : {
				g : 0,
				c : null,
				s : "(?:\\d{2})"
			},
			L : {
				g : 0,
				c : null,
				s : "(?:1|0)"
			},
			o : function() {
				return a("Y")
			},
			Y : {
				g : 1,
				c : "y = parseInt(results[{0}], 10);\n",
				s : "(\\d{4})"
			},
			y : {
				g : 1,
				c : "var ty = parseInt(results[{0}], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
				s : "(\\d{1,2})"
			},
			a : {
				g : 1,
				c : "if (results[{0}] == 'am') {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
				s : "(am|pm)"
			},
			A : {
				g : 1,
				c : "if (results[{0}] == 'AM') {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
				s : "(AM|PM)"
			},
			g : function() {
				return a("G")
			},
			G : {
				g : 1,
				c : "h = parseInt(results[{0}], 10);\n",
				s : "(\\d{1,2})"
			},
			h : function() {
				return a("H")
			},
			H : {
				g : 1,
				c : "h = parseInt(results[{0}], 10);\n",
				s : "(\\d{2})"
			},
			i : {
				g : 1,
				c : "i = parseInt(results[{0}], 10);\n",
				s : "(\\d{2})"
			},
			s : {
				g : 1,
				c : "s = parseInt(results[{0}], 10);\n",
				s : "(\\d{2})"
			},
			u : {
				g : 1,
				c : "ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",
				s : "(\\d+)"
			},
			O : {
				g : 1,
				c : [
						"o = results[{0}];",
						"var sn = o.substring(0,1),",
						"hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),",
						"mn = o.substring(3,5) % 60;",
						"o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + String.leftPad(hr, 2, '0') + String.leftPad(mn, 2, '0')) : null;\n"]
						.join("\n"),
				s : "([+-]\\d{4})"
			},
			P : {
				g : 1,
				c : [
						"o = results[{0}];",
						"var sn = o.substring(0,1),",
						"hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),",
						"mn = o.substring(4,6) % 60;",
						"o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + String.leftPad(hr, 2, '0') + String.leftPad(mn, 2, '0')) : null;\n"]
						.join("\n"),
				s : "([+-]\\d{2}:\\d{2})"
			},
			T : {
				g : 0,
				c : null,
				s : "[A-Z]{1,4}"
			},
			Z : {
				g : 1,
				c : "zz = results[{0}] * 1;\nzz = (-43200 <= zz && zz <= 50400)? zz : null;\n",
				s : "([+-]?\\d{1,5})"
			},
			c : function() {
				var e = [], c = [a("Y", 1), a("m", 2), a("d", 3), a("h", 4),
						a("i", 5), a("s", 6), {
							c : "ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"
						}, {
							c : ["if(results[8]) {", "if(results[8] == 'Z'){",
									"zz = 0;",
									"}else if (results[8].indexOf(':') > -1){",
									a("P", 8).c, "}else{", a("O", 8).c, "}",
									"}"].join("\n")
						}];
				for (var g = 0, d = c.length; g < d; ++g) {
					e.push(c[g].c)
				}
				return {
					g : 1,
					c : e.join(""),
					s : [c[0].s, "(?:", "-", c[1].s, "(?:", "-", c[2].s, "(?:",
							"(?:T| )?", c[3].s, ":", c[4].s, "(?::", c[5].s,
							")?", "(?:(?:\\.|,)(\\d+))?",
							"(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?", ")?", ")?", ")?"]
							.join("")
				}
			},
			U : {
				g : 1,
				c : "u = parseInt(results[{0}], 10);\n",
				s : "(-?\\d+)"
			}
		}
	})
}());
Ext.apply(Date.prototype, {
	dateFormat : function(a) {
		if (Date.formatFunctions[a] == null) {
			Date.createFormat(a)
		}
		return Date.formatFunctions[a].call(this)
	},
	getTimezone : function() {
		return this.toString().replace(
				/^.* (?:\((.*)\)|([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/,
				"$1$2").replace(/[^A-Z]/g, "")
	},
	getGMTOffset : function(a) {
		return (this.getTimezoneOffset() > 0 ? "-" : "+")
				+ String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())
								/ 60), 2, "0")
				+ (a ? ":" : "")
				+ String.leftPad(Math.abs(this.getTimezoneOffset() % 60), 2,
						"0")
	},
	getDayOfYear : function() {
		var b = 0, e = this.clone(), a = this.getMonth(), c;
		for (c = 0, e.setDate(1), e.setMonth(0); c < a; e.setMonth(++c)) {
			b += e.getDaysInMonth()
		}
		return b + this.getDate() - 1
	},
	getWeekOfYear : function() {
		var a = 86400000, b = 7 * a;
		return function() {
			var d = Date.UTC(this.getFullYear(), this.getMonth(), this
							.getDate()
							+ 3)
					/ a, c = Math.floor(d / 7), e = new Date(c * b)
					.getUTCFullYear();
			return c - Math.floor(Date.UTC(e, 0, 7) / b) + 1
		}
	}(),
	isLeapYear : function() {
		var a = this.getFullYear();
		return !!((a & 3) == 0 && (a % 100 || (a % 400 == 0 && a)))
	},
	getFirstDayOfMonth : function() {
		var a = (this.getDay() - (this.getDate() - 1)) % 7;
		return (a < 0) ? (a + 7) : a
	},
	getLastDayOfMonth : function() {
		return this.getLastDateOfMonth().getDay()
	},
	getFirstDateOfMonth : function() {
		return new Date(this.getFullYear(), this.getMonth(), 1)
	},
	getLastDateOfMonth : function() {
		return new Date(this.getFullYear(), this.getMonth(), this
						.getDaysInMonth())
	},
	getDaysInMonth : function() {
		var a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return function() {
			var b = this.getMonth();
			return b == 1 && this.isLeapYear() ? 29 : a[b]
		}
	}(),
	getSuffix : function() {
		switch (this.getDate()) {
			case 1 :
			case 21 :
			case 31 :
				return "st";
			case 2 :
			case 22 :
				return "nd";
			case 3 :
			case 23 :
				return "rd";
			default :
				return "th"
		}
	},
	clone : function() {
		return new Date(this.getTime())
	},
	isDST : function() {
		return new Date(this.getFullYear(), 0, 1).getTimezoneOffset() != this
				.getTimezoneOffset()
	},
	clearTime : function(g) {
		if (g) {
			return this.clone().clearTime()
		}
		var b = this.getDate();
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		if (this.getDate() != b) {
			for (var a = 1, e = this.add(Date.HOUR, a); e.getDate() != b; a++, e = this
					.add(Date.HOUR, a)) {
			}
			this.setDate(b);
			this.setHours(e.getHours())
		}
		return this
	},
	add : function(b, c) {
		var e = this.clone();
		if (!b || c === 0) {
			return e
		}
		switch (b.toLowerCase()) {
			case Date.MILLI :
				e.setMilliseconds(this.getMilliseconds() + c);
				break;
			case Date.SECOND :
				e.setSeconds(this.getSeconds() + c);
				break;
			case Date.MINUTE :
				e.setMinutes(this.getMinutes() + c);
				break;
			case Date.HOUR :
				e.setHours(this.getHours() + c);
				break;
			case Date.DAY :
				e.setDate(this.getDate() + c);
				break;
			case Date.MONTH :
				var a = this.getDate();
				if (a > 28) {
					a = Math.min(a, this.getFirstDateOfMonth().add("mo", c)
									.getLastDateOfMonth().getDate())
				}
				e.setDate(a);
				e.setMonth(this.getMonth() + c);
				break;
			case Date.YEAR :
				e.setFullYear(this.getFullYear() + c);
				break
		}
		return e
	},
	between : function(c, a) {
		var b = this.getTime();
		return c.getTime() <= b && b <= a.getTime()
	}
});
Date.prototype.format = Date.prototype.dateFormat;
if (Ext.isSafari
		&& (navigator.userAgent.match(/WebKit\/(\d+)/)[1] || NaN) < 420) {
	Ext.apply(Date.prototype, {
				_xMonth : Date.prototype.setMonth,
				_xDate : Date.prototype.setDate,
				setMonth : function(a) {
					if (a <= -1) {
						var d = Math.ceil(-a), c = Math.ceil(d / 12), b = (d % 12)
								? 12 - d % 12
								: 0;
						this.setFullYear(this.getFullYear() - c);
						return this._xMonth(b)
					} else {
						return this._xMonth(a)
					}
				},
				setDate : function(a) {
					return this.setTime(this.getTime() - (this.getDate() - a)
							* 86400000)
				}
			})
}
Ext.util.MixedCollection = function(b, a) {
	this.items = [];
	this.map = {};
	this.keys = [];
	this.length = 0;
	this.addEvents("clear", "add", "replace", "remove", "sort");
	this.allowFunctions = b === true;
	if (a) {
		this.getKey = a
	}
	Ext.util.MixedCollection.superclass.constructor.call(this)
};
Ext.extend(Ext.util.MixedCollection, Ext.util.Observable, {
	allowFunctions : false,
	add : function(b, c) {
		if (arguments.length == 1) {
			c = arguments[0];
			b = this.getKey(c)
		}
		if (typeof b != "undefined" && b !== null) {
			var a = this.map[b];
			if (typeof a != "undefined") {
				return this.replace(b, c)
			}
			this.map[b] = c
		}
		this.length++;
		this.items.push(c);
		this.keys.push(b);
		this.fireEvent("add", this.length - 1, c, b);
		return c
	},
	getKey : function(a) {
		return a.id
	},
	replace : function(c, d) {
		if (arguments.length == 1) {
			d = arguments[0];
			c = this.getKey(d)
		}
		var a = this.map[c];
		if (typeof c == "undefined" || c === null || typeof a == "undefined") {
			return this.add(c, d)
		}
		var b = this.indexOfKey(c);
		this.items[b] = d;
		this.map[c] = d;
		this.fireEvent("replace", c, a, d);
		return d
	},
	addAll : function(e) {
		if (arguments.length > 1 || Ext.isArray(e)) {
			var b = arguments.length > 1 ? arguments : e;
			for (var d = 0, a = b.length; d < a; d++) {
				this.add(b[d])
			}
		} else {
			for (var c in e) {
				if (this.allowFunctions || typeof e[c] != "function") {
					this.add(c, e[c])
				}
			}
		}
	},
	each : function(e, d) {
		var b = [].concat(this.items);
		for (var c = 0, a = b.length; c < a; c++) {
			if (e.call(d || b[c], b[c], c, a) === false) {
				break
			}
		}
	},
	eachKey : function(d, c) {
		for (var b = 0, a = this.keys.length; b < a; b++) {
			d.call(c || window, this.keys[b], this.items[b], b, a)
		}
	},
	find : function(d, c) {
		for (var b = 0, a = this.items.length; b < a; b++) {
			if (d.call(c || window, this.items[b], this.keys[b])) {
				return this.items[b]
			}
		}
		return null
	},
	insert : function(a, b, c) {
		if (arguments.length == 2) {
			c = arguments[1];
			b = this.getKey(c)
		}
		if (this.containsKey(b)) {
			this.suspendEvents();
			this.removeKey(b);
			this.resumeEvents()
		}
		if (a >= this.length) {
			return this.add(b, c)
		}
		this.length++;
		this.items.splice(a, 0, c);
		if (typeof b != "undefined" && b !== null) {
			this.map[b] = c
		}
		this.keys.splice(a, 0, b);
		this.fireEvent("add", a, c, b);
		return c
	},
	remove : function(a) {
		return this.removeAt(this.indexOf(a))
	},
	removeAt : function(a) {
		if (a < this.length && a >= 0) {
			this.length--;
			var c = this.items[a];
			this.items.splice(a, 1);
			var b = this.keys[a];
			if (typeof b != "undefined") {
				delete this.map[b]
			}
			this.keys.splice(a, 1);
			this.fireEvent("remove", c, b);
			return c
		}
		return false
	},
	removeKey : function(a) {
		return this.removeAt(this.indexOfKey(a))
	},
	getCount : function() {
		return this.length
	},
	indexOf : function(a) {
		return this.items.indexOf(a)
	},
	indexOfKey : function(a) {
		return this.keys.indexOf(a)
	},
	item : function(b) {
		var a = this.map[b], c = a !== undefined ? a : (typeof b == "number")
				? this.items[b]
				: undefined;
		return !Ext.isFunction(c) || this.allowFunctions ? c : null
	},
	itemAt : function(a) {
		return this.items[a]
	},
	key : function(a) {
		return this.map[a]
	},
	contains : function(a) {
		return this.indexOf(a) != -1
	},
	containsKey : function(a) {
		return typeof this.map[a] != "undefined"
	},
	clear : function() {
		this.length = 0;
		this.items = [];
		this.keys = [];
		this.map = {};
		this.fireEvent("clear")
	},
	first : function() {
		return this.items[0]
	},
	last : function() {
		return this.items[this.length - 1]
	},
	_sort : function(m, a, l) {
		var e, g, d = String(a).toUpperCase() == "DESC" ? -1 : 1, j = [], b = this.keys, h = this.items;
		l = l || function(k, c) {
			return k - c
		};
		for (e = 0, g = h.length; e < g; e++) {
			j[j.length] = {
				key : b[e],
				value : h[e],
				index : e
			}
		}
		j.sort(function(k, c) {
					var n = l(k[m], c[m]) * d;
					if (n === 0) {
						n = (k.index < c.index ? -1 : 1)
					}
					return n
				});
		for (e = 0, g = j.length; e < g; e++) {
			h[e] = j[e].value;
			b[e] = j[e].key
		}
		this.fireEvent("sort", this)
	},
	sort : function(a, b) {
		this._sort("value", a, b)
	},
	keySort : function(a, b) {
		this._sort("key", a, b || function(d, c) {
					var g = String(d).toUpperCase(), e = String(c)
							.toUpperCase();
					return g > e ? 1 : (g < e ? -1 : 0)
				})
	},
	getRange : function(e, a) {
		var b = this.items;
		if (b.length < 1) {
			return []
		}
		e = e || 0;
		a = Math.min(typeof a == "undefined" ? this.length - 1 : a, this.length
						- 1);
		var c, d = [];
		if (e <= a) {
			for (c = e; c <= a; c++) {
				d[d.length] = b[c]
			}
		} else {
			for (c = e; c >= a; c--) {
				d[d.length] = b[c]
			}
		}
		return d
	},
	filter : function(c, b, d, a) {
		if (Ext.isEmpty(b, false)) {
			return this.clone()
		}
		b = this.createValueMatcher(b, d, a);
		return this.filterBy(function(e) {
					return e && b.test(e[c])
				})
	},
	filterBy : function(g, e) {
		var h = new Ext.util.MixedCollection();
		h.getKey = this.getKey;
		var b = this.keys, d = this.items;
		for (var c = 0, a = d.length; c < a; c++) {
			if (g.call(e || this, d[c], b[c])) {
				h.add(b[c], d[c])
			}
		}
		return h
	},
	findIndex : function(c, b, e, d, a) {
		if (Ext.isEmpty(b, false)) {
			return -1
		}
		b = this.createValueMatcher(b, d, a);
		return this.findIndexBy(function(g) {
					return g && b.test(g[c])
				}, null, e)
	},
	findIndexBy : function(g, e, h) {
		var b = this.keys, d = this.items;
		for (var c = (h || 0), a = d.length; c < a; c++) {
			if (g.call(e || this, d[c], b[c])) {
				return c
			}
		}
		return -1
	},
	createValueMatcher : function(c, e, a, b) {
		if (!c.exec) {
			var d = Ext.escapeRe;
			c = String(c);
			if (e === true) {
				c = d(c)
			} else {
				c = "^" + d(c);
				if (b === true) {
					c += "$"
				}
			}
			c = new RegExp(c, a ? "" : "i")
		}
		return c
	},
	clone : function() {
		var e = new Ext.util.MixedCollection();
		var b = this.keys, d = this.items;
		for (var c = 0, a = d.length; c < a; c++) {
			e.add(b[c], d[c])
		}
		e.getKey = this.getKey;
		return e
	}
});
Ext.util.MixedCollection.prototype.get = Ext.util.MixedCollection.prototype.item;
Ext.util.JSON = new (function() {
	var useHasOwn = !!{}.hasOwnProperty, isNative = function() {
		var useNative = null;
		return function() {
			if (useNative === null) {
				useNative = Ext.USE_NATIVE_JSON && window.JSON
						&& JSON.toString() == "[object JSON]"
			}
			return useNative
		}
	}(), pad = function(n) {
		return n < 10 ? "0" + n : n
	}, doDecode = function(json) {
//		Ext.Msg.alert(json);
		return eval("(" + json + ")")
	}, doEncode = function(o) {
		if (!Ext.isDefined(o) || o === null) {
			return "null"
		} else {
			if (Ext.isArray(o)) {
				return encodeArray(o)
			} else {
				if (Ext.isDate(o)) {
					return Ext.util.JSON.encodeDate(o)
				} else {
					if (Ext.isString(o)) {
						return encodeString(o)
					} else {
						if (typeof o == "number") {
							return isFinite(o) ? String(o) : "null"
						} else {
							if (Ext.isBoolean(o)) {
								return String(o)
							} else {
								var a = ["{"], b, i, v;
								for (i in o) {
									if (!o.getElementsByTagName) {
										if (!useHasOwn || o.hasOwnProperty(i)) {
											v = o[i];
											switch (typeof v) {
												case "undefined" :
												case "function" :
												case "unknown" :
													break;
												default :
													if (b) {
														a.push(",")
													}
													a
															.push(
																	doEncode(i),
																	":",
																	v === null
																			? "null"
																			: doEncode(v));
													b = true
											}
										}
									}
								}
								a.push("}");
								return a.join("")
							}
						}
					}
				}
			}
		}
	}, m = {
		"\b" : "\\b",
		"\t" : "\\t",
		"\n" : "\\n",
		"\f" : "\\f",
		"\r" : "\\r",
		'"' : '\\"',
		"\\" : "\\\\"
	}, encodeString = function(s) {
		if (/["\\\x00-\x1f]/.test(s)) {
			return '"' + s.replace(/([\x00-\x1f\\"])/g, function(a, b) {
						var c = m[b];
						if (c) {
							return c
						}
						c = b.charCodeAt();
						return "\\u00" + Math.floor(c / 16).toString(16)
								+ (c % 16).toString(16)
					}) + '"'
		}
		return '"' + s + '"'
	}, encodeArray = function(o) {
		var a = ["["], b, i, l = o.length, v;
		for (i = 0; i < l; i += 1) {
			v = o[i];
			switch (typeof v) {
				case "undefined" :
				case "function" :
				case "unknown" :
					break;
				default :
					if (b) {
						a.push(",")
					}
					a.push(v === null ? "null" : Ext.util.JSON.encode(v));
					b = true
			}
		}
		a.push("]");
		return a.join("")
	};
	this.encodeDate = function(o) {
		return '"' + o.getFullYear() + "-" + pad(o.getMonth() + 1) + "-"
				+ pad(o.getDate()) + "T" + pad(o.getHours()) + ":"
				+ pad(o.getMinutes()) + ":" + pad(o.getSeconds()) + '"'
	};
	this.encode = function() {
		var ec;
		return function(o) {
			if (!ec) {
				ec = isNative() ? JSON.stringify : doEncode
			}
			return ec(o)
		}
	}();
	this.decode = function() {
		var dc;
		return function(json) {
			if (!dc) {
				dc = isNative() ? JSON.parse : doDecode
			}
			return dc(json)
		}
	}()
})();
Ext.encode = Ext.util.JSON.encode;
Ext.decode = Ext.util.JSON.decode;
Ext.util.Format = function() {
	var trimRe = /^\s+|\s+$/g, stripTagsRE = /<\/?[^>]+>/gi, stripScriptsRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig, nl2brRe = /\r?\n/g;
	return {
		ellipsis : function(value, len, word) {
			if (value && value.length > len) {
				if (word) {
					var vs = value.substr(0, len - 2), index = Math.max(vs
									.lastIndexOf(" "), vs.lastIndexOf("."), vs
									.lastIndexOf("!"), vs.lastIndexOf("?"));
					if (index == -1 || index < (len - 15)) {
						return value.substr(0, len - 3) + "..."
					} else {
						return vs.substr(0, index) + "..."
					}
				} else {
					return value.substr(0, len - 3) + "..."
				}
			}
			return value
		},
		undef : function(value) {
			return value !== undefined ? value : ""
		},
		defaultValue : function(value, defaultValue) {
			return value !== undefined && value !== "" ? value : defaultValue
		},
		htmlEncode : function(value) {
			return !value ? value : String(value).replace(/&/g, "&amp;")
					.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g,
							"&quot;")
		},
		htmlDecode : function(value) {
			return !value ? value : String(value).replace(/&gt;/g, ">")
					.replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(
							/&amp;/g, "&")
		},
		trim : function(value) {
			return String(value).replace(trimRe, "")
		},
		substr : function(value, start, length) {
			return String(value).substr(start, length)
		},
		lowercase : function(value) {
			return String(value).toLowerCase()
		},
		uppercase : function(value) {
			return String(value).toUpperCase()
		},
		capitalize : function(value) {
			return !value ? value : value.charAt(0).toUpperCase()
					+ value.substr(1).toLowerCase()
		},
		call : function(value, fn) {
			if (arguments.length > 2) {
				var args = Array.prototype.slice.call(arguments, 2);
				args.unshift(value);
				return eval(fn).apply(window, args)
			} else {
				return eval(fn).call(window, value)
			}
		},
		usMoney : function(v) {
			v = (Math.round((v - 0) * 100)) / 100;
			v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v
					* 10)) ? v + "0" : v);
			v = String(v);
			var ps = v.split("."), whole = ps[0], sub = ps[1]
					? "." + ps[1]
					: ".00", r = /(\d+)(\d{3})/;
			while (r.test(whole)) {
				whole = whole.replace(r, "$1,$2")
			}
			v = whole + sub;
			if (v.charAt(0) == "-") {
				return "-$" + v.substr(1)
			}
			return "$" + v
		},
		date : function(v, format) {
			if (!v) {
				return ""
			}
			if (!Ext.isDate(v)) {
				v = new Date(Date.parse(v))
			}
			return v.dateFormat(format || "m/d/Y")
		},
		dateRenderer : function(format) {
			return function(v) {
				return Ext.util.Format.date(v, format)
			}
		},
		stripTags : function(v) {
			return !v ? v : String(v).replace(stripTagsRE, "")
		},
		stripScripts : function(v) {
			return !v ? v : String(v).replace(stripScriptsRe, "")
		},
		fileSize : function(size) {
			if (size < 1024) {
				return size + " bytes"
			} else {
				if (size < 1048576) {
					return (Math.round(((size * 10) / 1024)) / 10) + " KB"
				} else {
					return (Math.round(((size * 10) / 1048576)) / 10) + " MB"
				}
			}
		},
		math : function() {
			var fns = {};
			return function(v, a) {
				if (!fns[a]) {
					fns[a] = new Function("v", "return v " + a + ";")
				}
				return fns[a](v)
			}
		}(),
		round : function(value, precision) {
			var result = Number(value);
			if (typeof precision == "number") {
				precision = Math.pow(10, precision);
				result = Math.round(value * precision) / precision
			}
			return result
		},
		number : function(v, format) {
			if (!format) {
				return v
			}
			v = Ext.num(v, NaN);
			if (isNaN(v)) {
				return ""
			}
			var comma = ",", dec = ".", i18n = false, neg = v < 0;
			v = Math.abs(v);
			if (format.substr(format.length - 2) == "/i") {
				format = format.substr(0, format.length - 2);
				i18n = true;
				comma = ".";
				dec = ","
			}
			var hasComma = format.indexOf(comma) != -1, psplit = (i18n ? format
					.replace(/[^\d\,]/g, "") : format.replace(/[^\d\.]/g, ""))
					.split(dec);
			if (1 < psplit.length) {
				v = v.toFixed(psplit[1].length)
			} else {
				if (2 < psplit.length) {
					throw ("NumberFormatException: invalid format, formats should have no more than 1 period: " + format)
				} else {
					v = v.toFixed(0)
				}
			}
			var fnum = v.toString();
			if (hasComma) {
				psplit = fnum.split(".");
				var cnum = psplit[0], parr = [], j = cnum.length, m = Math
						.floor(j / 3), n = cnum.length % 3 || 3;
				for (var i = 0; i < j; i += n) {
					if (i != 0) {
						n = 3
					}
					parr[parr.length] = cnum.substr(i, n);
					m -= 1
				}
				fnum = parr.join(comma);
				if (psplit[1]) {
					fnum += dec + psplit[1]
				}
			}
			return (neg ? "-" : "") + format.replace(/[\d,?\.?]+/, fnum)
		},
		numberRenderer : function(format) {
			return function(v) {
				return Ext.util.Format.number(v, format)
			}
		},
		plural : function(v, s, p) {
			return v + " " + (v == 1 ? s : (p ? p : s + "s"))
		},
		nl2br : function(v) {
			return Ext.isEmpty(v) ? "" : v.replace(nl2brRe, "<br/>")
		}
	}
}();
Ext.XTemplate = function() {
	Ext.XTemplate.superclass.constructor.apply(this, arguments);
	var x = this, j = x.html, q = /<tpl\b[^>]*>((?:(?=([^<]+))\2|<(?!tpl\b[^>]*>))*?)<\/tpl>/, d = /^<tpl\b[^>]*?for="(.*?)"/, u = /^<tpl\b[^>]*?if="(.*?)"/, w = /^<tpl\b[^>]*?exec="(.*?)"/, r, p = 0, k = [], o = "values", v = "parent", l = "xindex", n = "xcount", e = "return ", c = "with(values){ ";
	j = ["<tpl>", j, "</tpl>"].join("");
	while ((r = j.match(q))) {
		var b = r[0].match(d), a = r[0].match(u), z = r[0].match(w), g = null, h = null, t = null, y = b
				&& b[1] ? b[1] : "";
		if (a) {
			g = a && a[1] ? a[1] : null;
			if (g) {
				h = new Function(o, v, l, n, c + e
								+ (Ext.util.Format.htmlDecode(g)) + "; }")
			}
		}
		if (z) {
			g = z && z[1] ? z[1] : null;
			if (g) {
				t = new Function(o, v, l, n, c
								+ (Ext.util.Format.htmlDecode(g)) + "; }")
			}
		}
		if (y) {
			switch (y) {
				case "." :
					y = new Function(o, v, c + e + o + "; }");
					break;
				case ".." :
					y = new Function(o, v, c + e + v + "; }");
					break;
				default :
					y = new Function(o, v, c + e + y + "; }")
			}
		}
		k.push({
					id : p,
					target : y,
					exec : t,
					test : h,
					body : r[1] || ""
				});
		j = j.replace(r[0], "{xtpl" + p + "}");
		++p
	}
	Ext.each(k, function(m) {
				x.compileTpl(m)
			});
	x.master = k[k.length - 1];
	x.tpls = k
};
Ext.extend(Ext.XTemplate, Ext.Template, {
	re : /\{([\w-\.\#]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\\]\s?[\d\.\+\-\*\\\(\)]+)?\}/g,
	codeRe : /\{\[((?:\\\]|.|\n)*?)\]\}/g,
	applySubTemplate : function(a, j, h, d, c) {
		var g = this, e, l = g.tpls[a], k, b = [];
		if ((l.test && !l.test.call(g, j, h, d, c))
				|| (l.exec && l.exec.call(g, j, h, d, c))) {
			return ""
		}
		k = l.target ? l.target.call(g, j, h) : j;
		e = k.length;
		h = l.target ? j : h;
		if (l.target && Ext.isArray(k)) {
			Ext.each(k, function(m, n) {
						b[b.length] = l.compiled.call(g, m, h, n + 1, e)
					});
			return b.join("")
		}
		return l.compiled.call(g, k, h, d, c)
	},
	compileTpl : function(tpl) {
		var fm = Ext.util.Format, useF = this.disableFormats !== true, sep = Ext.isGecko
				? "+"
				: ",", body;
		function fn(m, name, format, args, math) {
			if (name.substr(0, 4) == "xtpl") {
				return "'" + sep + "this.applySubTemplate(" + name.substr(4)
						+ ", values, parent, xindex, xcount)" + sep + "'"
			}
			var v;
			if (name === ".") {
				v = "values"
			} else {
				if (name === "#") {
					v = "xindex"
				} else {
					if (name.indexOf(".") != -1) {
						v = name
					} else {
						v = "values['" + name + "']"
					}
				}
			}
			if (math) {
				v = "(" + v + math + ")"
			}
			if (format && useF) {
				args = args ? "," + args : "";
				if (format.substr(0, 5) != "this.") {
					format = "fm." + format + "("
				} else {
					format = 'this.call("' + format.substr(5) + '", ';
					args = ", values"
				}
			} else {
				args = "";
				format = "(" + v + " === undefined ? '' : "
			}
			return "'" + sep + format + v + args + ")" + sep + "'"
		}
		function codeFn(m, code) {
			return "'" + sep + "(" + code.replace(/\\'/g, "'") + ")" + sep
					+ "'"
		}
		if (Ext.isGecko) {
			body = "tpl.compiled = function(values, parent, xindex, xcount){ return '"
					+ tpl.body.replace(/(\r\n|\n)/g, "\\n")
							.replace(/'/g, "\\'").replace(this.re, fn).replace(
									this.codeRe, codeFn) + "';};"
		} else {
			body = ["tpl.compiled = function(values, parent, xindex, xcount){ return ['"];
			body.push(tpl.body.replace(/(\r\n|\n)/g, "\\n")
					.replace(/'/g, "\\'").replace(this.re, fn).replace(
							this.codeRe, codeFn));
			body.push("'].join('');};");
			body = body.join("")
		}
		eval(body);
		return this
	},
	applyTemplate : function(a) {
		return this.master.compiled.call(this, a, {}, 1, 1)
	},
	compile : function() {
		return this
	}
});
Ext.XTemplate.prototype.apply = Ext.XTemplate.prototype.applyTemplate;
Ext.XTemplate.from = function(a) {
	a = Ext.getDom(a);
	return new Ext.XTemplate(a.value || a.innerHTML)
};
Ext.util.CSS = function() {
	var d = null;
	var c = document;
	var b = /(-[a-z])/gi;
	var a = function(e, g) {
		return g.charAt(1).toUpperCase()
	};
	return {
		createStyleSheet : function(j, m) {
			var h;
			var g = c.getElementsByTagName("head")[0];
			var l = c.createElement("style");
			l.setAttribute("type", "text/css");
			if (m) {
				l.setAttribute("id", m)
			}
			if (Ext.isIE) {
				g.appendChild(l);
				h = l.styleSheet;
				h.cssText = j
			} else {
				try {
					l.appendChild(c.createTextNode(j))
				} catch (k) {
					l.cssText = j
				}
				g.appendChild(l);
				h = l.styleSheet
						? l.styleSheet
						: (l.sheet || c.styleSheets[c.styleSheets.length - 1])
			}
			this.cacheStyleSheet(h);
			return h
		},
		removeStyleSheet : function(g) {
			var e = c.getElementById(g);
			if (e) {
				e.parentNode.removeChild(e)
			}
		},
		swapStyleSheet : function(h, e) {
			this.removeStyleSheet(h);
			var g = c.createElement("link");
			g.setAttribute("rel", "stylesheet");
			g.setAttribute("type", "text/css");
			g.setAttribute("id", h);
			g.setAttribute("href", e);
			c.getElementsByTagName("head")[0].appendChild(g)
		},
		refreshCache : function() {
			return this.getRules(true)
		},
		cacheStyleSheet : function(h) {
			if (!d) {
				d = {}
			}
			try {
				var l = h.cssRules || h.rules;
				for (var g = l.length - 1; g >= 0; --g) {
					d[l[g].selectorText.toLowerCase()] = l[g]
				}
			} catch (k) {
			}
		},
		getRules : function(h) {
			if (d === null || h) {
				d = {};
				var k = c.styleSheets;
				for (var j = 0, g = k.length; j < g; j++) {
					try {
						this.cacheStyleSheet(k[j])
					} catch (l) {
					}
				}
			}
			return d
		},
		getRule : function(e, h) {
			var g = this.getRules(h);
			if (!Ext.isArray(e)) {
				return g[e.toLowerCase()]
			}
			for (var j = 0; j < e.length; j++) {
				if (g[e[j]]) {
					return g[e[j].toLowerCase()]
				}
			}
			return null
		},
		updateRule : function(e, j, h) {
			if (!Ext.isArray(e)) {
				var k = this.getRule(e);
				if (k) {
					k.style[j.replace(b, a)] = h;
					return true
				}
			} else {
				for (var g = 0; g < e.length; g++) {
					if (this.updateRule(e[g], j, h)) {
						return true
					}
				}
			}
			return false
		}
	}
}();
Ext.util.ClickRepeater = function(b, a) {
	this.el = Ext.get(b);
	this.el.unselectable();
	Ext.apply(this, a);
	this.addEvents("mousedown", "click", "mouseup");
	if (!this.disabled) {
		this.disabled = true;
		this.enable()
	}
	if (this.handler) {
		this.on("click", this.handler, this.scope || this)
	}
	Ext.util.ClickRepeater.superclass.constructor.call(this)
};
Ext.extend(Ext.util.ClickRepeater, Ext.util.Observable, {
			interval : 20,
			delay : 250,
			preventDefault : true,
			stopDefault : false,
			timer : 0,
			enable : function() {
				if (this.disabled) {
					this.el.on("mousedown", this.handleMouseDown, this);
					if (this.preventDefault || this.stopDefault) {
						this.el.on("click", this.eventOptions, this)
					}
				}
				this.disabled = false
			},
			disable : function(a) {
				if (a || !this.disabled) {
					clearTimeout(this.timer);
					if (this.pressClass) {
						this.el.removeClass(this.pressClass)
					}
					Ext.getDoc().un("mouseup", this.handleMouseUp, this);
					this.el.removeAllListeners()
				}
				this.disabled = true
			},
			setDisabled : function(a) {
				this[a ? "disable" : "enable"]()
			},
			eventOptions : function(a) {
				if (this.preventDefault) {
					a.preventDefault()
				}
				if (this.stopDefault) {
					a.stopEvent()
				}
			},
			destroy : function() {
				this.disable(true);
				Ext.destroy(this.el);
				this.purgeListeners()
			},
			handleMouseDown : function() {
				clearTimeout(this.timer);
				this.el.blur();
				if (this.pressClass) {
					this.el.addClass(this.pressClass)
				}
				this.mousedownTime = new Date();
				Ext.getDoc().on("mouseup", this.handleMouseUp, this);
				this.el.on("mouseout", this.handleMouseOut, this);
				this.fireEvent("mousedown", this);
				this.fireEvent("click", this);
				if (this.accelerate) {
					this.delay = 400
				}
				this.timer = this.click
						.defer(this.delay || this.interval, this)
			},
			click : function() {
				this.fireEvent("click", this);
				this.timer = this.click
						.defer(	this.accelerate ? this.easeOutExpo(
										this.mousedownTime.getElapsed(), 400,
										-390, 12000) : this.interval, this)
			},
			easeOutExpo : function(e, a, h, g) {
				return (e == g) ? a + h : h * (-Math.pow(2, -10 * e / g) + 1)
						+ a
			},
			handleMouseOut : function() {
				clearTimeout(this.timer);
				if (this.pressClass) {
					this.el.removeClass(this.pressClass)
				}
				this.el.on("mouseover", this.handleMouseReturn, this)
			},
			handleMouseReturn : function() {
				this.el.un("mouseover", this.handleMouseReturn, this);
				if (this.pressClass) {
					this.el.addClass(this.pressClass)
				}
				this.click()
			},
			handleMouseUp : function() {
				clearTimeout(this.timer);
				this.el.un("mouseover", this.handleMouseReturn, this);
				this.el.un("mouseout", this.handleMouseOut, this);
				Ext.getDoc().un("mouseup", this.handleMouseUp, this);
				this.el.removeClass(this.pressClass);
				this.fireEvent("mouseup", this)
			}
		});
Ext.KeyNav = function(b, a) {
	this.el = Ext.get(b);
	Ext.apply(this, a);
	if (!this.disabled) {
		this.disabled = true;
		this.enable()
	}
};
Ext.KeyNav.prototype = {
	disabled : false,
	defaultEventAction : "stopEvent",
	forceKeyDown : false,
	relay : function(c) {
		var a = c.getKey();
		var b = this.keyToHandler[a];
		if (b && this[b]) {
			if (this.doRelay(c, this[b], b) !== true) {
				c[this.defaultEventAction]()
			}
		}
	},
	doRelay : function(c, b, a) {
		return b.call(this.scope || this, c)
	},
	enter : false,
	left : false,
	right : false,
	up : false,
	down : false,
	tab : false,
	esc : false,
	pageUp : false,
	pageDown : false,
	del : false,
	home : false,
	end : false,
	keyToHandler : {
		37 : "left",
		39 : "right",
		38 : "up",
		40 : "down",
		33 : "pageUp",
		34 : "pageDown",
		46 : "del",
		36 : "home",
		35 : "end",
		13 : "enter",
		27 : "esc",
		9 : "tab"
	},
	stopKeyUp : function(b) {
		var a = b.getKey();
		if (a >= 37 && a <= 40) {
			b.stopEvent()
		}
	},
	destroy : function() {
		this.disable()
	},
	enable : function() {
		if (this.disabled) {
			if (Ext.isSafari2) {
				this.el.on("keyup", this.stopKeyUp, this)
			}
			this.el.on(this.isKeydown() ? "keydown" : "keypress", this.relay,
					this);
			this.disabled = false
		}
	},
	disable : function() {
		if (!this.disabled) {
			if (Ext.isSafari2) {
				this.el.un("keyup", this.stopKeyUp, this)
			}
			this.el.un(this.isKeydown() ? "keydown" : "keypress", this.relay,
					this);
			this.disabled = true
		}
	},
	setDisabled : function(a) {
		this[a ? "disable" : "enable"]()
	},
	isKeydown : function() {
		return this.forceKeyDown || Ext.EventManager.useKeydown
	}
};
Ext.KeyMap = function(c, b, a) {
	this.el = Ext.get(c);
	this.eventName = a || "keydown";
	this.bindings = [];
	if (b) {
		this.addBinding(b)
	}
	this.enable()
};
Ext.KeyMap.prototype = {
	stopEvent : false,
	addBinding : function(b) {
		if (Ext.isArray(b)) {
			Ext.each(b, function(j) {
						this.addBinding(j)
					}, this);
			return
		}
		var l = b.key, g = b.fn || b.handler, m = b.scope;
		if (b.stopEvent) {
			this.stopEvent = b.stopEvent
		}
		if (typeof l == "string") {
			var h = [];
			var e = l.toUpperCase();
			for (var c = 0, d = e.length; c < d; c++) {
				h.push(e.charCodeAt(c))
			}
			l = h
		}
		var a = Ext.isArray(l);
		var k = function(p) {
			if (this.checkModifiers(b, p)) {
				var n = p.getKey();
				if (a) {
					for (var o = 0, j = l.length; o < j; o++) {
						if (l[o] == n) {
							if (this.stopEvent) {
								p.stopEvent()
							}
							g.call(m || window, n, p);
							return
						}
					}
				} else {
					if (n == l) {
						if (this.stopEvent) {
							p.stopEvent()
						}
						g.call(m || window, n, p)
					}
				}
			}
		};
		this.bindings.push(k)
	},
	checkModifiers : function(b, h) {
		var j, d, g = ["shift", "ctrl", "alt"];
		for (var c = 0, a = g.length; c < a; ++c) {
			d = g[c];
			j = b[d];
			if (!(j === undefined || (j === h[d + "Key"]))) {
				return false
			}
		}
		return true
	},
	on : function(b, d, c) {
		var h, a, e, g;
		if (typeof b == "object" && !Ext.isArray(b)) {
			h = b.key;
			a = b.shift;
			e = b.ctrl;
			g = b.alt
		} else {
			h = b
		}
		this.addBinding({
					key : h,
					shift : a,
					ctrl : e,
					alt : g,
					fn : d,
					scope : c
				})
	},
	handleKeyDown : function(g) {
		if (this.enabled) {
			var c = this.bindings;
			for (var d = 0, a = c.length; d < a; d++) {
				c[d].call(this, g)
			}
		}
	},
	isEnabled : function() {
		return this.enabled
	},
	enable : function() {
		if (!this.enabled) {
			this.el.on(this.eventName, this.handleKeyDown, this);
			this.enabled = true
		}
	},
	disable : function() {
		if (this.enabled) {
			this.el.removeListener(this.eventName, this.handleKeyDown, this);
			this.enabled = false
		}
	},
	setDisabled : function(a) {
		this[a ? "disable" : "enable"]()
	}
};
Ext.util.TextMetrics = function() {
	var a;
	return {
		measure : function(b, c, d) {
			if (!a) {
				a = Ext.util.TextMetrics.Instance(b, d)
			}
			a.bind(b);
			a.setFixedWidth(d || "auto");
			return a.getSize(c)
		},
		createInstance : function(b, c) {
			return Ext.util.TextMetrics.Instance(b, c)
		}
	}
}();
Ext.util.TextMetrics.Instance = function(b, d) {
	var c = new Ext.Element(document.createElement("div"));
	document.body.appendChild(c.dom);
	c.position("absolute");
	c.setLeftTop(-1000, -1000);
	c.hide();
	if (d) {
		c.setWidth(d)
	}
	var a = {
		getSize : function(g) {
			c.update(g);
			var e = c.getSize();
			c.update("");
			return e
		},
		bind : function(e) {
			c.setStyle(Ext.fly(e).getStyles("font-size", "font-style",
					"font-weight", "font-family", "line-height",
					"text-transform", "letter-spacing"))
		},
		setFixedWidth : function(e) {
			c.setWidth(e)
		},
		getWidth : function(e) {
			c.dom.style.width = "auto";
			return this.getSize(e).width
		},
		getHeight : function(e) {
			return this.getSize(e).height
		}
	};
	a.bind(b);
	return a
};
Ext.Element.addMethods({
			getTextWidth : function(c, b, a) {
				return (Ext.util.TextMetrics.measure(this.dom, Ext.value(c,
								this.dom.innerHTML, true)).width).constrain(b
								|| 0, a || 1000000)
			}
		});
Ext.util.Cookies = {
	set : function(c, e) {
		var a = arguments;
		var j = arguments.length;
		var b = (j > 2) ? a[2] : null;
		var h = (j > 3) ? a[3] : "/";
		var d = (j > 4) ? a[4] : null;
		var g = (j > 5) ? a[5] : false;
		document.cookie = c + "=" + escape(e)
				+ ((b === null) ? "" : ("; expires=" + b.toGMTString()))
				+ ((h === null) ? "" : ("; path=" + h))
				+ ((d === null) ? "" : ("; domain=" + d))
				+ ((g === true) ? "; secure" : "")
	},
	get : function(d) {
		var b = d + "=";
		var g = b.length;
		var a = document.cookie.length;
		var e = 0;
		var c = 0;
		while (e < a) {
			c = e + g;
			if (document.cookie.substring(e, c) == b) {
				return Ext.util.Cookies.getCookieVal(c)
			}
			e = document.cookie.indexOf(" ", e) + 1;
			if (e === 0) {
				break
			}
		}
		return null
	},
	clear : function(a) {
		if (Ext.util.Cookies.get(a)) {
			document.cookie = a + "=; expires=Thu, 01-Jan-70 00:00:01 GMT"
		}
	},
	getCookieVal : function(b) {
		var a = document.cookie.indexOf(";", b);
		if (a == -1) {
			a = document.cookie.length
		}
		return unescape(document.cookie.substring(b, a))
	}
};
Ext.handleError = function(a) {
	throw a
};
Ext.Error = function(a) {
	this.message = (this.lang[a]) ? this.lang[a] : a
};
Ext.Error.prototype = new Error();
Ext.apply(Ext.Error.prototype, {
			lang : {},
			name : "Ext.Error",
			getName : function() {
				return this.name
			},
			getMessage : function() {
				return this.message
			},
			toJson : function() {
				return Ext.encode(this)
			}
		});
Ext.ComponentMgr = function() {
	var c = new Ext.util.MixedCollection();
	var b = {};
	var a = {};
	return {
		register : function(d) {
			c.add(d)
		},
		unregister : function(d) {
			c.remove(d)
		},
		get : function(d) {
			return c.get(d)
		},
		onAvailable : function(g, e, d) {
			c.on("add", function(h, j) {
						if (j.id == g) {
							e.call(d || j, j);
							c.un("add", e, d)
						}
					})
		},
		all : c,
		isRegistered : function(d) {
			return b[d] !== undefined
		},
		registerType : function(e, d) {
			b[e] = d;
			d.xtype = e
		},
		create : function(d, e) {
			return d.render ? d : new b[d.xtype || e](d)
		},
		registerPlugin : function(e, d) {
			a[e] = d;
			d.ptype = e
		},
		createPlugin : function(e, g) {
			var d = a[e.ptype || g];
			if (d.init) {
				return d
			} else {
				return new d(e)
			}
		}
	}
}();
Ext.reg = Ext.ComponentMgr.registerType;
Ext.preg = Ext.ComponentMgr.registerPlugin;
Ext.create = Ext.ComponentMgr.create;
Ext.Component = function(b) {
	b = b || {};
	if (b.initialConfig) {
		if (b.isAction) {
			this.baseAction = b
		}
		b = b.initialConfig
	} else {
		if (b.tagName || b.dom || Ext.isString(b)) {
			b = {
				applyTo : b,
				id : b.id || b
			}
		}
	}
	this.initialConfig = b;
	Ext.apply(this, b);
	this.addEvents("added", "disable", "enable", "beforeshow", "show",
			"beforehide", "hide", "removed", "beforerender", "render",
			"afterrender", "beforedestroy", "destroy", "beforestaterestore",
			"staterestore", "beforestatesave", "statesave");
	this.getId();
	Ext.ComponentMgr.register(this);
	Ext.Component.superclass.constructor.call(this);
	if (this.baseAction) {
		this.baseAction.addComponent(this)
	}
	this.initComponent();
	if (this.plugins) {
		if (Ext.isArray(this.plugins)) {
			for (var c = 0, a = this.plugins.length; c < a; c++) {
				this.plugins[c] = this.initPlugin(this.plugins[c])
			}
		} else {
			this.plugins = this.initPlugin(this.plugins)
		}
	}
	if (this.stateful !== false) {
		this.initState()
	}
	if (this.applyTo) {
		this.applyToMarkup(this.applyTo);
		delete this.applyTo
	} else {
		if (this.renderTo) {
			this.render(this.renderTo);
			delete this.renderTo
		}
	}
};
Ext.Component.AUTO_ID = 1000;
Ext.extend(Ext.Component, Ext.util.Observable, {
	disabled : false,
	hidden : false,
	autoEl : "div",
	disabledClass : "x-item-disabled",
	allowDomMove : true,
	autoShow : false,
	hideMode : "display",
	hideParent : false,
	rendered : false,
	tplWriteMode : "overwrite",
	ctype : "Ext.Component",
	actionMode : "el",
	getActionEl : function() {
		return this[this.actionMode]
	},
	initPlugin : function(a) {
		if (a.ptype && !Ext.isFunction(a.init)) {
			a = Ext.ComponentMgr.createPlugin(a)
		} else {
			if (Ext.isString(a)) {
				a = Ext.ComponentMgr.createPlugin({
							ptype : a
						})
			}
		}
		a.init(this);
		return a
	},
	initComponent : Ext.emptyFn,
	render : function(b, a) {
		if (!this.rendered && this.fireEvent("beforerender", this) !== false) {
			if (!b && this.el) {
				this.el = Ext.get(this.el);
				b = this.el.dom.parentNode;
				this.allowDomMove = false
			}
			this.container = Ext.get(b);
			if (this.ctCls) {
				this.container.addClass(this.ctCls)
			}
			this.rendered = true;
			if (a !== undefined) {
				if (Ext.isNumber(a)) {
					a = this.container.dom.childNodes[a]
				} else {
					a = Ext.getDom(a)
				}
			}
			this.onRender(this.container, a || null);
			if (this.autoShow) {
				this.el.removeClass(["x-hidden", "x-hide-" + this.hideMode])
			}
			if (this.cls) {
				this.el.addClass(this.cls);
				delete this.cls
			}
			if (this.style) {
				this.el.applyStyles(this.style);
				delete this.style
			}
			if (this.overCls) {
				this.el.addClassOnOver(this.overCls)
			}
			this.fireEvent("render", this);
			var c = this.getContentTarget();
			if (this.html) {
				c.update(Ext.DomHelper.markup(this.html));
				delete this.html
			}
			if (this.contentEl) {
				var d = Ext.getDom(this.contentEl);
				Ext.fly(d).removeClass(["x-hidden", "x-hide-display"]);
				c.appendChild(d)
			}
			if (this.tpl) {
				if (!this.tpl.compile) {
					this.tpl = new Ext.XTemplate(this.tpl)
				}
				if (this.data) {
					this.tpl[this.tplWriteMode](c, this.data);
					delete this.data
				}
			}
			this.afterRender(this.container);
			if (this.hidden) {
				this.doHide()
			}
			if (this.disabled) {
				this.disable(true)
			}
			if (this.stateful !== false) {
				this.initStateEvents()
			}
			this.fireEvent("afterrender", this)
		}
		return this
	},
	update : function(b, d, a) {
		var c = this.getContentTarget();
		if (this.tpl && typeof b !== "string") {
			this.tpl[this.tplWriteMode](c, b || {})
		} else {
			var e = Ext.isObject(b) ? Ext.DomHelper.markup(b) : b;
			c.update(e, d, a)
		}
	},
	onAdded : function(a, b) {
		this.ownerCt = a;
		this.initRef();
		this.fireEvent("added", this, a, b)
	},
	onRemoved : function() {
		this.removeRef();
		this.fireEvent("removed", this, this.ownerCt);
		delete this.ownerCt
	},
	initRef : function() {
		if (this.ref && !this.refOwner) {
			var d = this.ref.split("/"), c = d.length, b = 0, a = this;
			while (a && b < c) {
				a = a.ownerCt;
				++b
			}
			if (a) {
				a[this.refName = d[--b]] = this;
				this.refOwner = a
			}
		}
	},
	removeRef : function() {
		if (this.refOwner && this.refName) {
			delete this.refOwner[this.refName];
			delete this.refOwner
		}
	},
	initState : function() {
		if (Ext.state.Manager) {
			var b = this.getStateId();
			if (b) {
				var a = Ext.state.Manager.get(b);
				if (a) {
					if (this.fireEvent("beforestaterestore", this, a) !== false) {
						this.applyState(Ext.apply({}, a));
						this.fireEvent("staterestore", this, a)
					}
				}
			}
		}
	},
	getStateId : function() {
		return this.stateId
				|| ((this.id.indexOf("ext-comp-") == 0 || this.id
						.indexOf("ext-gen") == 0) ? null : this.id)
	},
	initStateEvents : function() {
		if (this.stateEvents) {
			for (var a = 0, b; b = this.stateEvents[a]; a++) {
				this.on(b, this.saveState, this, {
							delay : 100
						})
			}
		}
	},
	applyState : function(a) {
		if (a) {
			Ext.apply(this, a)
		}
	},
	getState : function() {
		return null
	},
	saveState : function() {
		if (Ext.state.Manager && this.stateful !== false) {
			var b = this.getStateId();
			if (b) {
				var a = this.getState();
				if (this.fireEvent("beforestatesave", this, a) !== false) {
					Ext.state.Manager.set(b, a);
					this.fireEvent("statesave", this, a)
				}
			}
		}
	},
	applyToMarkup : function(a) {
		this.allowDomMove = false;
		this.el = Ext.get(a);
		this.render(this.el.dom.parentNode)
	},
	addClass : function(a) {
		if (this.el) {
			this.el.addClass(a)
		} else {
			this.cls = this.cls ? this.cls + " " + a : a
		}
		return this
	},
	removeClass : function(a) {
		if (this.el) {
			this.el.removeClass(a)
		} else {
			if (this.cls) {
				this.cls = this.cls.split(" ").remove(a).join(" ")
			}
		}
		return this
	},
	onRender : function(b, a) {
		if (!this.el && this.autoEl) {
			if (Ext.isString(this.autoEl)) {
				this.el = document.createElement(this.autoEl)
			} else {
				var c = document.createElement("div");
				Ext.DomHelper.overwrite(c, this.autoEl);
				this.el = c.firstChild
			}
			if (!this.el.id) {
				this.el.id = this.getId()
			}
		}
		if (this.el) {
			this.el = Ext.get(this.el);
			if (this.allowDomMove !== false) {
				b.dom.insertBefore(this.el.dom, a);
				if (c) {
					Ext.removeNode(c);
					c = null
				}
			}
		}
	},
	getAutoCreate : function() {
		var a = Ext.isObject(this.autoCreate) ? this.autoCreate : Ext.apply({},
				this.defaultAutoCreate);
		if (this.id && !a.id) {
			a.id = this.id
		}
		return a
	},
	afterRender : Ext.emptyFn,
	destroy : function() {
		if (!this.isDestroyed) {
			if (this.fireEvent("beforedestroy", this) !== false) {
				this.destroying = true;
				this.beforeDestroy();
				if (this.ownerCt && this.ownerCt.remove) {
					this.ownerCt.remove(this, false)
				}
				if (this.rendered) {
					this.el.remove();
					if (this.actionMode == "container"
							|| this.removeMode == "container") {
						this.container.remove()
					}
				}
				this.onDestroy();
				Ext.ComponentMgr.unregister(this);
				this.fireEvent("destroy", this);
				this.purgeListeners();
				this.destroying = false;
				this.isDestroyed = true
			}
		}
	},
	deleteMembers : function() {
		var b = arguments;
		for (var c = 0, a = b.length; c < a; ++c) {
			delete this[b[c]]
		}
	},
	beforeDestroy : Ext.emptyFn,
	onDestroy : Ext.emptyFn,
	getEl : function() {
		return this.el
	},
	getContentTarget : function() {
		return this.el
	},
	getId : function() {
		return this.id || (this.id = "ext-comp-" + (++Ext.Component.AUTO_ID))
	},
	getItemId : function() {
		return this.itemId || this.getId()
	},
	focus : function(b, a) {
		if (a) {
			this.focus.defer(Ext.isNumber(a) ? a : 10, this, [b, false]);
			return
		}
		if (this.rendered) {
			this.el.focus();
			if (b === true) {
				this.el.dom.select()
			}
		}
		return this
	},
	blur : function() {
		if (this.rendered) {
			this.el.blur()
		}
		return this
	},
	disable : function(a) {
		if (this.rendered) {
			this.onDisable()
		}
		this.disabled = true;
		if (a !== true) {
			this.fireEvent("disable", this)
		}
		return this
	},
	onDisable : function() {
		this.getActionEl().addClass(this.disabledClass);
		this.el.dom.disabled = true
	},
	enable : function() {
		if (this.rendered) {
			this.onEnable()
		}
		this.disabled = false;
		this.fireEvent("enable", this);
		return this
	},
	onEnable : function() {
		this.getActionEl().removeClass(this.disabledClass);
		this.el.dom.disabled = false
	},
	setDisabled : function(a) {
		return this[a ? "disable" : "enable"]()
	},
	show : function() {
		if (this.fireEvent("beforeshow", this) !== false) {
			this.hidden = false;
			if (this.autoRender) {
				this.render(Ext.isBoolean(this.autoRender)
						? Ext.getBody()
						: this.autoRender)
			}
			if (this.rendered) {
				this.onShow()
			}
			this.fireEvent("show", this)
		}
		return this
	},
	onShow : function() {
		this.getVisibilityEl().removeClass("x-hide-" + this.hideMode)
	},
	hide : function() {
		if (this.fireEvent("beforehide", this) !== false) {
			this.doHide();
			this.fireEvent("hide", this)
		}
		return this
	},
	doHide : function() {
		this.hidden = true;
		if (this.rendered) {
			this.onHide()
		}
	},
	onHide : function() {
		this.getVisibilityEl().addClass("x-hide-" + this.hideMode)
	},
	getVisibilityEl : function() {
		return this.hideParent ? this.container : this.getActionEl()
	},
	setVisible : function(a) {
		return this[a ? "show" : "hide"]()
	},
	isVisible : function() {
		return this.rendered && this.getVisibilityEl().isVisible()
	},
	cloneConfig : function(b) {
		b = b || {};
		var c = b.id || Ext.id();
		var a = Ext.applyIf(b, this.initialConfig);
		a.id = c;
		return new this.constructor(a)
	},
	getXType : function() {
		return this.constructor.xtype
	},
	isXType : function(b, a) {
		if (Ext.isFunction(b)) {
			b = b.xtype
		} else {
			if (Ext.isObject(b)) {
				b = b.constructor.xtype
			}
		}
		return !a
				? ("/" + this.getXTypes() + "/").indexOf("/" + b + "/") != -1
				: this.constructor.xtype == b
	},
	getXTypes : function() {
		var a = this.constructor;
		if (!a.xtypes) {
			var d = [], b = this;
			while (b && b.constructor.xtype) {
				d.unshift(b.constructor.xtype);
				b = b.constructor.superclass
			}
			a.xtypeChain = d;
			a.xtypes = d.join("/")
		}
		return a.xtypes
	},
	findParentBy : function(a) {
		for (var b = this.ownerCt; (b != null) && !a(b, this); b = b.ownerCt) {
		}
		return b || null
	},
	findParentByType : function(a) {
		return Ext.isFunction(a) ? this.findParentBy(function(b) {
					return b.constructor === a
				}) : this.findParentBy(function(b) {
					return b.constructor.xtype === a
				})
	},
	getPositionEl : function() {
		return this.positionEl || this.el
	},
	purgeListeners : function() {
		Ext.Component.superclass.purgeListeners.call(this);
		if (this.mons) {
			this.on("beforedestroy", this.clearMons, this, {
						single : true
					})
		}
	},
	clearMons : function() {
		Ext.each(this.mons, function(a) {
					a.item.un(a.ename, a.fn, a.scope)
				}, this);
		this.mons = []
	},
	createMons : function() {
		if (!this.mons) {
			this.mons = [];
			this.on("beforedestroy", this.clearMons, this, {
						single : true
					})
		}
	},
	mon : function(g, b, d, c, a) {
		this.createMons();
		if (Ext.isObject(b)) {
			var k = /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/;
			var j = b;
			for (var h in j) {
				if (k.test(h)) {
					continue
				}
				if (Ext.isFunction(j[h])) {
					this.mons.push({
								item : g,
								ename : h,
								fn : j[h],
								scope : j.scope
							});
					g.on(h, j[h], j.scope, j)
				} else {
					this.mons.push({
								item : g,
								ename : h,
								fn : j[h],
								scope : j.scope
							});
					g.on(h, j[h])
				}
			}
			return
		}
		this.mons.push({
					item : g,
					ename : b,
					fn : d,
					scope : c
				});
		g.on(b, d, c, a)
	},
	mun : function(h, c, g, e) {
		var j, d;
		this.createMons();
		for (var b = 0, a = this.mons.length; b < a; ++b) {
			d = this.mons[b];
			if (h === d.item && c == d.ename && g === d.fn && e === d.scope) {
				this.mons.splice(b, 1);
				h.un(c, g, e);
				j = true;
				break
			}
		}
		return j
	},
	nextSibling : function() {
		if (this.ownerCt) {
			var a = this.ownerCt.items.indexOf(this);
			if (a != -1 && a + 1 < this.ownerCt.items.getCount()) {
				return this.ownerCt.items.itemAt(a + 1)
			}
		}
		return null
	},
	previousSibling : function() {
		if (this.ownerCt) {
			var a = this.ownerCt.items.indexOf(this);
			if (a > 0) {
				return this.ownerCt.items.itemAt(a - 1)
			}
		}
		return null
	},
	getBubbleTarget : function() {
		return this.ownerCt
	}
});
Ext.reg("component", Ext.Component);
Ext.Action = Ext.extend(Object, {
			constructor : function(a) {
				this.initialConfig = a;
				this.itemId = a.itemId = (a.itemId || a.id || Ext.id());
				this.items = []
			},
			isAction : true,
			setText : function(a) {
				this.initialConfig.text = a;
				this.callEach("setText", [a])
			},
			getText : function() {
				return this.initialConfig.text
			},
			setIconClass : function(a) {
				this.initialConfig.iconCls = a;
				this.callEach("setIconClass", [a])
			},
			getIconClass : function() {
				return this.initialConfig.iconCls
			},
			setDisabled : function(a) {
				this.initialConfig.disabled = a;
				this.callEach("setDisabled", [a])
			},
			enable : function() {
				this.setDisabled(false)
			},
			disable : function() {
				this.setDisabled(true)
			},
			isDisabled : function() {
				return this.initialConfig.disabled
			},
			setHidden : function(a) {
				this.initialConfig.hidden = a;
				this.callEach("setVisible", [!a])
			},
			show : function() {
				this.setHidden(false)
			},
			hide : function() {
				this.setHidden(true)
			},
			isHidden : function() {
				return this.initialConfig.hidden
			},
			setHandler : function(b, a) {
				this.initialConfig.handler = b;
				this.initialConfig.scope = a;
				this.callEach("setHandler", [b, a])
			},
			each : function(b, a) {
				Ext.each(this.items, b, a)
			},
			callEach : function(e, b) {
				var d = this.items;
				for (var c = 0, a = d.length; c < a; c++) {
					d[c][e].apply(d[c], b)
				}
			},
			addComponent : function(a) {
				this.items.push(a);
				a.on("destroy", this.removeComponent, this)
			},
			removeComponent : function(a) {
				this.items.remove(a)
			},
			execute : function() {
				this.initialConfig.handler.apply(this.initialConfig.scope
								|| window, arguments)
			}
		});
(function() {
	Ext.Layer = function(d, c) {
		d = d || {};
		var e = Ext.DomHelper;
		var h = d.parentEl, g = h ? Ext.getDom(h) : document.body;
		if (c) {
			this.dom = Ext.getDom(c)
		}
		if (!this.dom) {
			var j = d.dh || {
				tag : "div",
				cls : "x-layer"
			};
			this.dom = e.append(g, j)
		}
		if (d.cls) {
			this.addClass(d.cls)
		}
		this.constrain = d.constrain !== false;
		this.setVisibilityMode(Ext.Element.VISIBILITY);
		if (d.id) {
			this.id = this.dom.id = d.id
		} else {
			this.id = Ext.id(this.dom)
		}
		this.zindex = d.zindex || this.getZIndex();
		this.position("absolute", this.zindex);
		if (d.shadow) {
			this.shadowOffset = d.shadowOffset || 4;
			this.shadow = new Ext.Shadow({
						offset : this.shadowOffset,
						mode : d.shadow
					})
		} else {
			this.shadowOffset = 0
		}
		this.useShim = d.shim !== false && Ext.useShims;
		this.useDisplay = d.useDisplay;
		this.hide()
	};
	var a = Ext.Element.prototype;
	var b = [];
	Ext.extend(Ext.Layer, Ext.Element, {
		getZIndex : function() {
			return this.zindex
					|| parseInt((this.getShim() || this).getStyle("z-index"),
							10) || 11000
		},
		getShim : function() {
			if (!this.useShim) {
				return null
			}
			if (this.shim) {
				return this.shim
			}
			var d = b.shift();
			if (!d) {
				d = this.createShim();
				d.enableDisplayMode("block");
				d.dom.style.display = "none";
				d.dom.style.visibility = "visible"
			}
			var c = this.dom.parentNode;
			if (d.dom.parentNode != c) {
				c.insertBefore(d.dom, this.dom)
			}
			d.setStyle("z-index", this.getZIndex() - 2);
			this.shim = d;
			return d
		},
		hideShim : function() {
			if (this.shim) {
				this.shim.setDisplayed(false);
				b.push(this.shim);
				delete this.shim
			}
		},
		disableShadow : function() {
			if (this.shadow) {
				this.shadowDisabled = true;
				this.shadow.hide();
				this.lastShadowOffset = this.shadowOffset;
				this.shadowOffset = 0
			}
		},
		enableShadow : function(c) {
			if (this.shadow) {
				this.shadowDisabled = false;
				this.shadowOffset = this.lastShadowOffset;
				delete this.lastShadowOffset;
				if (c) {
					this.sync(true)
				}
			}
		},
		sync : function(c) {
			var m = this.shadow;
			if (!this.updating && this.isVisible() && (m || this.useShim)) {
				var g = this.getShim();
				var k = this.getWidth(), e = this.getHeight();
				var d = this.getLeft(true), n = this.getTop(true);
				if (m && !this.shadowDisabled) {
					if (c && !m.isVisible()) {
						m.show(this)
					} else {
						m.realign(d, n, k, e)
					}
					if (g) {
						if (c) {
							g.show()
						}
						var j = m.adjusts, o = g.dom.style;
						o.left = (Math.min(d, d + j.l)) + "px";
						o.top = (Math.min(n, n + j.t)) + "px";
						o.width = (k + j.w) + "px";
						o.height = (e + j.h) + "px"
					}
				} else {
					if (g) {
						if (c) {
							g.show()
						}
						g.setSize(k, e);
						g.setLeftTop(d, n)
					}
				}
			}
		},
		destroy : function() {
			this.hideShim();
			if (this.shadow) {
				this.shadow.hide()
			}
			this.removeAllListeners();
			Ext.removeNode(this.dom);
			delete this.dom
		},
		remove : function() {
			this.destroy()
		},
		beginUpdate : function() {
			this.updating = true
		},
		endUpdate : function() {
			this.updating = false;
			this.sync(true)
		},
		hideUnders : function(c) {
			if (this.shadow) {
				this.shadow.hide()
			}
			this.hideShim()
		},
		constrainXY : function() {
			if (this.constrain) {
				var k = Ext.lib.Dom.getViewWidth(), d = Ext.lib.Dom
						.getViewHeight();
				var p = Ext.getDoc().getScroll();
				var o = this.getXY();
				var l = o[0], j = o[1];
				var c = this.shadowOffset;
				var m = this.dom.offsetWidth + c, e = this.dom.offsetHeight + c;
				var g = false;
				if ((l + m) > k + p.left) {
					l = k - m - c;
					g = true
				}
				if ((j + e) > d + p.top) {
					j = d - e - c;
					g = true
				}
				if (l < p.left) {
					l = p.left;
					g = true
				}
				if (j < p.top) {
					j = p.top;
					g = true
				}
				if (g) {
					if (this.avoidY) {
						var n = this.avoidY;
						if (j <= n && (j + e) >= n) {
							j = n - e - 5
						}
					}
					o = [l, j];
					this.storeXY(o);
					a.setXY.call(this, o);
					this.sync()
				}
			}
			return this
		},
		isVisible : function() {
			return this.visible
		},
		showAction : function() {
			this.visible = true;
			if (this.useDisplay === true) {
				this.setDisplayed("")
			} else {
				if (this.lastXY) {
					a.setXY.call(this, this.lastXY)
				} else {
					if (this.lastLT) {
						a.setLeftTop.call(this, this.lastLT[0], this.lastLT[1])
					}
				}
			}
		},
		hideAction : function() {
			this.visible = false;
			if (this.useDisplay === true) {
				this.setDisplayed(false)
			} else {
				this.setLeftTop(-10000, -10000)
			}
		},
		setVisible : function(j, h, l, m, k) {
			if (j) {
				this.showAction()
			}
			if (h && j) {
				var g = function() {
					this.sync(true);
					if (m) {
						m()
					}
				}.createDelegate(this);
				a.setVisible.call(this, true, true, l, g, k)
			} else {
				if (!j) {
					this.hideUnders(true)
				}
				var g = m;
				if (h) {
					g = function() {
						this.hideAction();
						if (m) {
							m()
						}
					}.createDelegate(this)
				}
				a.setVisible.call(this, j, h, l, g, k);
				if (j) {
					this.sync(true)
				} else {
					if (!h) {
						this.hideAction()
					}
				}
			}
			return this
		},
		storeXY : function(c) {
			delete this.lastLT;
			this.lastXY = c
		},
		storeLeftTop : function(d, c) {
			delete this.lastXY;
			this.lastLT = [d, c]
		},
		beforeFx : function() {
			this.beforeAction();
			return Ext.Layer.superclass.beforeFx.apply(this, arguments)
		},
		afterFx : function() {
			Ext.Layer.superclass.afterFx.apply(this, arguments);
			this.sync(this.isVisible())
		},
		beforeAction : function() {
			if (!this.updating && this.shadow) {
				this.shadow.hide()
			}
		},
		setLeft : function(c) {
			this.storeLeftTop(c, this.getTop(true));
			a.setLeft.apply(this, arguments);
			this.sync();
			return this
		},
		setTop : function(c) {
			this.storeLeftTop(this.getLeft(true), c);
			a.setTop.apply(this, arguments);
			this.sync();
			return this
		},
		setLeftTop : function(d, c) {
			this.storeLeftTop(d, c);
			a.setLeftTop.apply(this, arguments);
			this.sync();
			return this
		},
		setXY : function(k, h, l, m, j) {
			this.fixDisplay();
			this.beforeAction();
			this.storeXY(k);
			var g = this.createCB(m);
			a.setXY.call(this, k, h, l, g, j);
			if (!h) {
				g()
			}
			return this
		},
		createCB : function(e) {
			var d = this;
			return function() {
				d.constrainXY();
				d.sync(true);
				if (e) {
					e()
				}
			}
		},
		setX : function(g, h, k, l, j) {
			this.setXY([g, this.getY()], h, k, l, j);
			return this
		},
		setY : function(l, g, j, k, h) {
			this.setXY([this.getX(), l], g, j, k, h);
			return this
		},
		setSize : function(k, l, j, n, o, m) {
			this.beforeAction();
			var g = this.createCB(o);
			a.setSize.call(this, k, l, j, n, g, m);
			if (!j) {
				g()
			}
			return this
		},
		setWidth : function(j, h, l, m, k) {
			this.beforeAction();
			var g = this.createCB(m);
			a.setWidth.call(this, j, h, l, g, k);
			if (!h) {
				g()
			}
			return this
		},
		setHeight : function(k, j, m, n, l) {
			this.beforeAction();
			var g = this.createCB(n);
			a.setHeight.call(this, k, j, m, g, l);
			if (!j) {
				g()
			}
			return this
		},
		setBounds : function(p, n, q, j, o, l, m, k) {
			this.beforeAction();
			var g = this.createCB(m);
			if (!o) {
				this.storeXY([p, n]);
				a.setXY.call(this, [p, n]);
				a.setSize.call(this, q, j, o, l, g, k);
				g()
			} else {
				a.setBounds.call(this, p, n, q, j, o, l, g, k)
			}
			return this
		},
		setZIndex : function(c) {
			this.zindex = c;
			this.setStyle("z-index", c + 2);
			if (this.shadow) {
				this.shadow.setZIndex(c + 1)
			}
			if (this.shim) {
				this.shim.setStyle("z-index", c)
			}
			return this
		}
	})
})();
Ext.Shadow = function(d) {
	Ext.apply(this, d);
	if (typeof this.mode != "string") {
		this.mode = this.defaultMode
	}
	var e = this.offset, c = {
		h : 0
	};
	var b = Math.floor(this.offset / 2);
	switch (this.mode.toLowerCase()) {
		case "drop" :
			c.w = 0;
			c.l = c.t = e;
			c.t -= 1;
			if (Ext.isIE) {
				c.l -= this.offset + b;
				c.t -= this.offset + b;
				c.w -= b;
				c.h -= b;
				c.t += 1
			}
			break;
		case "sides" :
			c.w = (e * 2);
			c.l = -e;
			c.t = e - 1;
			if (Ext.isIE) {
				c.l -= (this.offset - b);
				c.t -= this.offset + b;
				c.l += 1;
				c.w -= (this.offset - b) * 2;
				c.w -= b + 1;
				c.h -= 1
			}
			break;
		case "frame" :
			c.w = c.h = (e * 2);
			c.l = c.t = -e;
			c.t += 1;
			c.h -= 2;
			if (Ext.isIE) {
				c.l -= (this.offset - b);
				c.t -= (this.offset - b);
				c.l += 1;
				c.w -= (this.offset + b + 1);
				c.h -= (this.offset + b);
				c.h += 1
			}
			break
	}
	this.adjusts = c
};
Ext.Shadow.prototype = {
	offset : 4,
	defaultMode : "drop",
	show : function(a) {
		a = Ext.get(a);
		if (!this.el) {
			this.el = Ext.Shadow.Pool.pull();
			if (this.el.dom.nextSibling != a.dom) {
				this.el.insertBefore(a)
			}
		}
		this.el.setStyle("z-index", this.zIndex
						|| parseInt(a.getStyle("z-index"), 10) - 1);
		if (Ext.isIE) {
			this.el.dom.style.filter = "progid:DXImageTransform.Microsoft.alpha(opacity=50) progid:DXImageTransform.Microsoft.Blur(pixelradius="
					+ (this.offset) + ")"
		}
		this.realign(a.getLeft(true), a.getTop(true), a.getWidth(), a
						.getHeight());
		this.el.dom.style.display = "block"
	},
	isVisible : function() {
		return this.el ? true : false
	},
	realign : function(b, u, r, g) {
		if (!this.el) {
			return
		}
		var o = this.adjusts, m = this.el.dom, v = m.style;
		var j = 0;
		v.left = (b + o.l) + "px";
		v.top = (u + o.t) + "px";
		var q = (r + o.w), e = (g + o.h), k = q + "px", p = e + "px";
		if (v.width != k || v.height != p) {
			v.width = k;
			v.height = p;
			if (!Ext.isIE) {
				var n = m.childNodes;
				var c = Math.max(0, (q - 12)) + "px";
				n[0].childNodes[1].style.width = c;
				n[1].childNodes[1].style.width = c;
				n[2].childNodes[1].style.width = c;
				n[1].style.height = Math.max(0, (e - 12)) + "px"
			}
		}
	},
	hide : function() {
		if (this.el) {
			this.el.dom.style.display = "none";
			Ext.Shadow.Pool.push(this.el);
			delete this.el
		}
	},
	setZIndex : function(a) {
		this.zIndex = a;
		if (this.el) {
			this.el.setStyle("z-index", a)
		}
	}
};
Ext.Shadow.Pool = function() {
	var b = [];
	var a = Ext.isIE
			? '<div class="x-ie-shadow"></div>'
			: '<div class="x-shadow"><div class="xst"><div class="xstl"></div><div class="xstc"></div><div class="xstr"></div></div><div class="xsc"><div class="xsml"></div><div class="xsmc"></div><div class="xsmr"></div></div><div class="xsb"><div class="xsbl"></div><div class="xsbc"></div><div class="xsbr"></div></div></div>';
	return {
		pull : function() {
			var c = b.shift();
			if (!c) {
				c = Ext.get(Ext.DomHelper.insertHtml("beforeBegin",
						document.body.firstChild, a));
				c.autoBoxAdjust = false
			}
			return c
		},
		push : function(c) {
			b.push(c)
		}
	}
}();
Ext.BoxComponent = Ext.extend(Ext.Component, {
			initComponent : function() {
				Ext.BoxComponent.superclass.initComponent.call(this);
				this.addEvents("resize", "move")
			},
			boxReady : false,
			deferHeight : false,
			setSize : function(b, d) {
				if (typeof b == "object") {
					d = b.height, b = b.width
				}
				if (Ext.isDefined(b) && Ext.isDefined(this.boxMinWidth)
						&& (b < this.boxMinWidth)) {
					b = this.boxMinWidth
				}
				if (Ext.isDefined(d) && Ext.isDefined(this.boxMinHeight)
						&& (d < this.boxMinHeight)) {
					d = this.boxMinHeight
				}
				if (Ext.isDefined(b) && Ext.isDefined(this.boxMaxWidth)
						&& (b > this.boxMaxWidth)) {
					b = this.boxMaxWidth
				}
				if (Ext.isDefined(d) && Ext.isDefined(this.boxMaxHeight)
						&& (d > this.boxMaxHeight)) {
					d = this.boxMaxHeight
				}
				if (!this.boxReady) {
					this.width = b, this.height = d;
					return this
				}
				if (this.cacheSizes !== false && this.lastSize
						&& this.lastSize.width == b
						&& this.lastSize.height == d) {
					return this
				}
				this.lastSize = {
					width : b,
					height : d
				};
				var c = this.adjustSize(b, d), g = c.width, a = c.height, e;
				if (g !== undefined || a !== undefined) {
					e = this.getResizeEl();
					if (!this.deferHeight && g !== undefined && a !== undefined) {
						e.setSize(g, a)
					} else {
						if (!this.deferHeight && a !== undefined) {
							e.setHeight(a)
						} else {
							if (g !== undefined) {
								e.setWidth(g)
							}
						}
					}
					this.onResize(g, a, b, d)
				}
				return this
			},
			setWidth : function(a) {
				return this.setSize(a)
			},
			setHeight : function(a) {
				return this.setSize(undefined, a)
			},
			getSize : function() {
				return this.getResizeEl().getSize()
			},
			getWidth : function() {
				return this.getResizeEl().getWidth()
			},
			getHeight : function() {
				return this.getResizeEl().getHeight()
			},
			getOuterSize : function() {
				var a = this.getResizeEl();
				return {
					width : a.getWidth() + a.getMargins("lr"),
					height : a.getHeight() + a.getMargins("tb")
				}
			},
			getPosition : function(a) {
				var b = this.getPositionEl();
				if (a === true) {
					return [b.getLeft(true), b.getTop(true)]
				}
				return this.xy || b.getXY()
			},
			getBox : function(a) {
				var c = this.getPosition(a);
				var b = this.getSize();
				b.x = c[0];
				b.y = c[1];
				return b
			},
			updateBox : function(a) {
				this.setSize(a.width, a.height);
				this.setPagePosition(a.x, a.y);
				return this
			},
			getResizeEl : function() {
				return this.resizeEl || this.el
			},
			setAutoScroll : function(a) {
				if (this.rendered) {
					this.getContentTarget().setOverflow(a ? "auto" : "")
				}
				this.autoScroll = a;
				return this
			},
			setPosition : function(a, g) {
				if (a && typeof a[1] == "number") {
					g = a[1];
					a = a[0]
				}
				this.x = a;
				this.y = g;
				if (!this.boxReady) {
					return this
				}
				var b = this.adjustPosition(a, g);
				var e = b.x, d = b.y;
				var c = this.getPositionEl();
				if (e !== undefined || d !== undefined) {
					if (e !== undefined && d !== undefined) {
						c.setLeftTop(e, d)
					} else {
						if (e !== undefined) {
							c.setLeft(e)
						} else {
							if (d !== undefined) {
								c.setTop(d)
							}
						}
					}
					this.onPosition(e, d);
					this.fireEvent("move", this, e, d)
				}
				return this
			},
			setPagePosition : function(a, c) {
				if (a && typeof a[1] == "number") {
					c = a[1];
					a = a[0]
				}
				this.pageX = a;
				this.pageY = c;
				if (!this.boxReady) {
					return
				}
				if (a === undefined || c === undefined) {
					return
				}
				var b = this.getPositionEl().translatePoints(a, c);
				this.setPosition(b.left, b.top);
				return this
			},
			afterRender : function() {
				Ext.BoxComponent.superclass.afterRender.call(this);
				if (this.resizeEl) {
					this.resizeEl = Ext.get(this.resizeEl)
				}
				if (this.positionEl) {
					this.positionEl = Ext.get(this.positionEl)
				}
				this.boxReady = true;
				this.setAutoScroll(this.autoScroll);
				this.setSize(this.width, this.height);
				if (this.x || this.y) {
					this.setPosition(this.x, this.y)
				} else {
					if (this.pageX || this.pageY) {
						this.setPagePosition(this.pageX, this.pageY)
					}
				}
			},
			syncSize : function() {
				delete this.lastSize;
				this.setSize(this.autoWidth ? undefined : this.getResizeEl()
								.getWidth(), this.autoHeight ? undefined : this
								.getResizeEl().getHeight());
				return this
			},
			onResize : function(d, b, a, c) {
				this.fireEvent("resize", this, d, b, a, c)
			},
			onPosition : function(a, b) {
			},
			adjustSize : function(a, b) {
				if (this.autoWidth) {
					a = "auto"
				}
				if (this.autoHeight) {
					b = "auto"
				}
				return {
					width : a,
					height : b
				}
			},
			adjustPosition : function(a, b) {
				return {
					x : a,
					y : b
				}
			}
		});
Ext.reg("box", Ext.BoxComponent);
Ext.Spacer = Ext.extend(Ext.BoxComponent, {
			autoEl : "div"
		});
Ext.reg("spacer", Ext.Spacer);
Ext.SplitBar = function(c, e, b, d, a) {
	this.el = Ext.get(c, true);
	this.el.dom.unselectable = "on";
	this.resizingEl = Ext.get(e, true);
	this.orientation = b || Ext.SplitBar.HORIZONTAL;
	this.minSize = 0;
	this.maxSize = 2000;
	this.animate = false;
	this.useShim = false;
	this.shim = null;
	if (!a) {
		this.proxy = Ext.SplitBar.createProxy(this.orientation)
	} else {
		this.proxy = Ext.get(a).dom
	}
	this.dd = new Ext.dd.DDProxy(this.el.dom.id, "XSplitBars", {
				dragElId : this.proxy.id
			});
	this.dd.b4StartDrag = this.onStartProxyDrag.createDelegate(this);
	this.dd.endDrag = this.onEndProxyDrag.createDelegate(this);
	this.dragSpecs = {};
	this.adapter = new Ext.SplitBar.BasicLayoutAdapter();
	this.adapter.init(this);
	if (this.orientation == Ext.SplitBar.HORIZONTAL) {
		this.placement = d
				|| (this.el.getX() > this.resizingEl.getX()
						? Ext.SplitBar.LEFT
						: Ext.SplitBar.RIGHT);
		this.el.addClass("x-splitbar-h")
	} else {
		this.placement = d
				|| (this.el.getY() > this.resizingEl.getY()
						? Ext.SplitBar.TOP
						: Ext.SplitBar.BOTTOM);
		this.el.addClass("x-splitbar-v")
	}
	this.addEvents("resize", "moved", "beforeresize", "beforeapply");
	Ext.SplitBar.superclass.constructor.call(this)
};
Ext.extend(Ext.SplitBar, Ext.util.Observable, {
	onStartProxyDrag : function(a, e) {
		this.fireEvent("beforeresize", this);
		this.overlay = Ext.DomHelper.append(document.body, {
					cls : "x-drag-overlay",
					html : "&#160;"
				}, true);
		this.overlay.unselectable();
		this.overlay.setSize(Ext.lib.Dom.getViewWidth(true), Ext.lib.Dom
						.getViewHeight(true));
		this.overlay.show();
		Ext.get(this.proxy).setDisplayed("block");
		var c = this.adapter.getElementSize(this);
		this.activeMinSize = this.getMinimumSize();
		this.activeMaxSize = this.getMaximumSize();
		var d = c - this.activeMinSize;
		var b = Math.max(this.activeMaxSize - c, 0);
		if (this.orientation == Ext.SplitBar.HORIZONTAL) {
			this.dd.resetConstraints();
			this.dd.setXConstraint(this.placement == Ext.SplitBar.LEFT ? d : b,
					this.placement == Ext.SplitBar.LEFT ? b : d, this.tickSize);
			this.dd.setYConstraint(0, 0)
		} else {
			this.dd.resetConstraints();
			this.dd.setXConstraint(0, 0);
			this.dd.setYConstraint(this.placement == Ext.SplitBar.TOP ? d : b,
					this.placement == Ext.SplitBar.TOP ? b : d, this.tickSize)
		}
		this.dragSpecs.startSize = c;
		this.dragSpecs.startPoint = [a, e];
		Ext.dd.DDProxy.prototype.b4StartDrag.call(this.dd, a, e)
	},
	onEndProxyDrag : function(c) {
		Ext.get(this.proxy).setDisplayed(false);
		var b = Ext.lib.Event.getXY(c);
		if (this.overlay) {
			Ext.destroy(this.overlay);
			delete this.overlay
		}
		var a;
		if (this.orientation == Ext.SplitBar.HORIZONTAL) {
			a = this.dragSpecs.startSize
					+ (this.placement == Ext.SplitBar.LEFT
							? b[0] - this.dragSpecs.startPoint[0]
							: this.dragSpecs.startPoint[0] - b[0])
		} else {
			a = this.dragSpecs.startSize
					+ (this.placement == Ext.SplitBar.TOP
							? b[1] - this.dragSpecs.startPoint[1]
							: this.dragSpecs.startPoint[1] - b[1])
		}
		a = Math.min(Math.max(a, this.activeMinSize), this.activeMaxSize);
		if (a != this.dragSpecs.startSize) {
			if (this.fireEvent("beforeapply", this, a) !== false) {
				this.adapter.setElementSize(this, a);
				this.fireEvent("moved", this, a);
				this.fireEvent("resize", this, a)
			}
		}
	},
	getAdapter : function() {
		return this.adapter
	},
	setAdapter : function(a) {
		this.adapter = a;
		this.adapter.init(this)
	},
	getMinimumSize : function() {
		return this.minSize
	},
	setMinimumSize : function(a) {
		this.minSize = a
	},
	getMaximumSize : function() {
		return this.maxSize
	},
	setMaximumSize : function(a) {
		this.maxSize = a
	},
	setCurrentSize : function(b) {
		var a = this.animate;
		this.animate = false;
		this.adapter.setElementSize(this, b);
		this.animate = a
	},
	destroy : function(a) {
		Ext.destroy(this.shim, Ext.get(this.proxy));
		this.dd.unreg();
		if (a) {
			this.el.remove()
		}
		this.purgeListeners()
	}
});
Ext.SplitBar.createProxy = function(b) {
	var c = new Ext.Element(document.createElement("div"));
	document.body.appendChild(c.dom);
	c.unselectable();
	var a = "x-splitbar-proxy";
	c.addClass(a + " " + (b == Ext.SplitBar.HORIZONTAL ? a + "-h" : a + "-v"));
	return c.dom
};
Ext.SplitBar.BasicLayoutAdapter = function() {
};
Ext.SplitBar.BasicLayoutAdapter.prototype = {
	init : function(a) {
	},
	getElementSize : function(a) {
		if (a.orientation == Ext.SplitBar.HORIZONTAL) {
			return a.resizingEl.getWidth()
		} else {
			return a.resizingEl.getHeight()
		}
	},
	setElementSize : function(b, a, c) {
		if (b.orientation == Ext.SplitBar.HORIZONTAL) {
			if (!b.animate) {
				b.resizingEl.setWidth(a);
				if (c) {
					c(b, a)
				}
			} else {
				b.resizingEl.setWidth(a, true, 0.1, c, "easeOut")
			}
		} else {
			if (!b.animate) {
				b.resizingEl.setHeight(a);
				if (c) {
					c(b, a)
				}
			} else {
				b.resizingEl.setHeight(a, true, 0.1, c, "easeOut")
			}
		}
	}
};
Ext.SplitBar.AbsoluteLayoutAdapter = function(a) {
	this.basic = new Ext.SplitBar.BasicLayoutAdapter();
	this.container = Ext.get(a)
};
Ext.SplitBar.AbsoluteLayoutAdapter.prototype = {
	init : function(a) {
		this.basic.init(a)
	},
	getElementSize : function(a) {
		return this.basic.getElementSize(a)
	},
	setElementSize : function(b, a, c) {
		this.basic.setElementSize(b, a, this.moveSplitter.createDelegate(this,
						[b]))
	},
	moveSplitter : function(a) {
		var b = Ext.SplitBar;
		switch (a.placement) {
			case b.LEFT :
				a.el.setX(a.resizingEl.getRight());
				break;
			case b.RIGHT :
				a.el.setStyle("right",
						(this.container.getWidth() - a.resizingEl.getLeft())
								+ "px");
				break;
			case b.TOP :
				a.el.setY(a.resizingEl.getBottom());
				break;
			case b.BOTTOM :
				a.el.setY(a.resizingEl.getTop() - a.el.getHeight());
				break
		}
	}
};
Ext.SplitBar.VERTICAL = 1;
Ext.SplitBar.HORIZONTAL = 2;
Ext.SplitBar.LEFT = 1;
Ext.SplitBar.RIGHT = 2;
Ext.SplitBar.TOP = 3;
Ext.SplitBar.BOTTOM = 4;
Ext.Container = Ext.extend(Ext.BoxComponent, {
	bufferResize : 50,
	autoDestroy : true,
	forceLayout : false,
	defaultType : "panel",
	resizeEvent : "resize",
	bubbleEvents : ["add", "remove"],
	initComponent : function() {
		Ext.Container.superclass.initComponent.call(this);
		this.addEvents("afterlayout", "beforeadd", "beforeremove", "add",
				"remove");
		this.enableBubble(this.bubbleEvents);
		var a = this.items;
		if (a) {
			delete this.items;
			this.add(a)
		}
	},
	initItems : function() {
		if (!this.items) {
			this.items = new Ext.util.MixedCollection(false,
					this.getComponentId);
			this.getLayout()
		}
	},
	setLayout : function(a) {
		if (this.layout && this.layout != a) {
			this.layout.setContainer(null)
		}
		this.initItems();
		this.layout = a;
		a.setContainer(this)
	},
	afterRender : function() {
		this.layoutDone = false;
		if (!this.layout) {
			this.layout = "auto"
		}
		if (Ext.isObject(this.layout) && !this.layout.layout) {
			this.layoutConfig = this.layout;
			this.layout = this.layoutConfig.type
		}
		if (Ext.isString(this.layout)) {
			this.layout = new Ext.Container.LAYOUTS[this.layout.toLowerCase()](this.layoutConfig)
		}
		this.setLayout(this.layout);
		Ext.Container.superclass.afterRender.call(this);
		if (Ext.isDefined(this.activeItem)) {
			var a = this.activeItem;
			delete this.activeItem;
			this.layout.setActiveItem(a)
		}
		if (!this.ownerCt && !this.layoutDone) {
			this.doLayout(false, true)
		}
		if (this.monitorResize === true) {
			Ext.EventManager.onWindowResize(this.doLayout, this, [false])
		}
	},
	getLayoutTarget : function() {
		return this.el
	},
	getComponentId : function(a) {
		return a.getItemId()
	},
	add : function(b) {
		this.initItems();
		var e = arguments.length > 1;
		if (e || Ext.isArray(b)) {
			var a = [];
			Ext.each(e ? arguments : b, function(h) {
						a.push(this.add(h))
					}, this);
			return a
		}
		var g = this.lookupComponent(this.applyDefaults(b));
		var d = this.items.length;
		if (this.fireEvent("beforeadd", this, g, d) !== false
				&& this.onBeforeAdd(g) !== false) {
			this.items.add(g);
			g.onAdded(this, d);
			this.onAdd(g);
			this.fireEvent("add", this, g, d)
		}
		return g
	},
	onAdd : function(a) {
	},
	onAdded : function(a, b) {
		this.ownerCt = a;
		this.initRef();
		this.cascade(function(d) {
					d.initRef()
				});
		this.fireEvent("added", this, a, b)
	},
	insert : function(h, g) {
		this.initItems();
		var e = arguments, d = e.length;
		if (d > 2) {
			var b = [];
			for (var j = d - 1; j >= 1; --j) {
				b.push(this.insert(h, e[j]))
			}
			return b
		}
		var k = this.lookupComponent(this.applyDefaults(g));
		h = Math.min(h, this.items.length);
		if (this.fireEvent("beforeadd", this, k, h) !== false
				&& this.onBeforeAdd(k) !== false) {
			if (k.ownerCt == this) {
				this.items.remove(k)
			}
			this.items.insert(h, k);
			k.onAdded(this, h);
			this.onAdd(k);
			this.fireEvent("add", this, k, h)
		}
		return k
	},
	applyDefaults : function(b) {
		var a = this.defaults;
		if (a) {
			if (Ext.isFunction(a)) {
				a = a.call(this, b)
			}
			if (Ext.isString(b)) {
				b = Ext.ComponentMgr.get(b);
				Ext.apply(b, a)
			} else {
				if (!b.events) {
					Ext.applyIf(b, a)
				} else {
					Ext.apply(b, a)
				}
			}
		}
		return b
	},
	onBeforeAdd : function(a) {
		if (a.ownerCt) {
			a.ownerCt.remove(a, false)
		}
		if (this.hideBorders === true) {
			a.border = (a.border === true)
		}
	},
	remove : function(a, b) {
		this.initItems();
		var d = this.getComponent(a);
		if (d && this.fireEvent("beforeremove", this, d) !== false) {
			this.doRemove(d, b);
			this.fireEvent("remove", this, d)
		}
		return d
	},
	onRemove : function(a) {
	},
	doRemove : function(b, a) {
		if (this.layout && this.rendered) {
			this.layout.onRemove(b)
		}
		this.items.remove(b);
		b.onRemoved();
		this.onRemove(b);
		if (a === true || (a !== false && this.autoDestroy)) {
			b.destroy()
		}
	},
	removeAll : function(c) {
		this.initItems();
		var e, g = [], b = [];
		this.items.each(function(h) {
					g.push(h)
				});
		for (var d = 0, a = g.length; d < a; ++d) {
			e = g[d];
			this.remove(e, c);
			if (e.ownerCt !== this) {
				b.push(e)
			}
		}
		return b
	},
	getComponent : function(a) {
		if (Ext.isObject(a)) {
			a = a.getItemId()
		}
		return this.items.get(a)
	},
	lookupComponent : function(a) {
		if (Ext.isString(a)) {
			return Ext.ComponentMgr.get(a)
		} else {
			if (!a.events) {
				return this.createComponent(a)
			}
		}
		return a
	},
	createComponent : function(a, d) {
		var b = a.render ? a : Ext.create(Ext.apply({
							ownerCt : this
						}, a), d || this.defaultType);
		delete b.ownerCt;
		return b
	},
	canLayout : function() {
		var a = this.getLayoutTarget(), b;
		return !!(a && (b = a.dom.offsetWidth || a.dom.offsetHeight))
	},
	doLayout : function(g, e) {
		var k = this.rendered, j = e || this.forceLayout, d, b, a, h;
		this.layoutDone = true;
		if (!this.canLayout() || this.collapsed) {
			this.deferLayout = this.deferLayout || !g;
			if (!j) {
				return
			}
			g = g && !this.deferLayout
		} else {
			delete this.deferLayout
		}
		d = (g !== true && this.items) ? this.items.items : [];
		for (b = 0, a = d.length; b < a; b++) {
			if ((h = d[b]).layout) {
				h.suspendLayoutResize = true
			}
		}
		if (k && this.layout) {
			this.layout.layout()
		}
		for (b = 0; b < a; b++) {
			if ((h = d[b]).doLayout) {
				h.doLayout(false, j)
			}
		}
		if (k) {
			this.onLayout(g, j)
		}
		this.hasLayout = true;
		delete this.forceLayout;
		for (b = 0; b < a; b++) {
			if ((h = d[b]).layout) {
				delete h.suspendLayoutResize
			}
		}
	},
	onLayout : Ext.emptyFn,
	onResize : function(d, b, a, c) {
		Ext.Container.superclass.onResize.apply(this, arguments);
		if ((this.rendered && this.layout && this.layout.monitorResize)
				&& !this.suspendLayoutResize) {
			this.layout.onResize()
		}
	},
	hasLayoutPending : function() {
		var a = this.layoutPending;
		this.ownerCt.bubble(function(b) {
					return !(a = b.layoutPending)
				});
		return a
	},
	onShow : function() {
		Ext.Container.superclass.onShow.call(this);
		if (Ext.isDefined(this.deferLayout)) {
			this.doLayout(true)
		}
	},
	getLayout : function() {
		if (!this.layout) {
			var a = new Ext.layout.ContainerLayout(this.layoutConfig);
			this.setLayout(a)
		}
		return this.layout
	},
	beforeDestroy : function() {
		var a;
		if (this.items) {
			while (a = this.items.first()) {
				this.doRemove(a, true)
			}
		}
		if (this.monitorResize) {
			Ext.EventManager.removeResizeListener(this.doLayout, this)
		}
		Ext.destroy(this.layout);
		Ext.Container.superclass.beforeDestroy.call(this)
	},
	bubble : function(c, b, a) {
		var d = this;
		while (d) {
			if (c.apply(b || d, a || [d]) === false) {
				break
			}
			d = d.ownerCt
		}
		return this
	},
	cascade : function(g, e, b) {
		if (g.apply(e || this, b || [this]) !== false) {
			if (this.items) {
				var d = this.items.items;
				for (var c = 0, a = d.length; c < a; c++) {
					if (d[c].cascade) {
						d[c].cascade(g, e, b)
					} else {
						g.apply(e || d[c], b || [d[c]])
					}
				}
			}
		}
		return this
	},
	findById : function(c) {
		var a, b = this;
		this.cascade(function(d) {
					if (b != d && d.id === c) {
						a = d;
						return false
					}
				});
		return a || null
	},
	findByType : function(b, a) {
		return this.findBy(function(d) {
					return d.isXType(b, a)
				})
	},
	find : function(b, a) {
		return this.findBy(function(d) {
					return d[b] === a
				})
	},
	findBy : function(d, c) {
		var a = [], b = this;
		this.cascade(function(e) {
					if (b != e && d.call(c || e, e, b) === true) {
						a.push(e)
					}
				});
		return a
	},
	get : function(a) {
		return this.items.get(a)
	}
});
Ext.Container.LAYOUTS = {};
Ext.reg("container", Ext.Container);
Ext.layout.ContainerLayout = Ext.extend(Object, {
	monitorResize : false,
	activeItem : null,
	constructor : function(a) {
		Ext.apply(this, a)
	},
	layout : function() {
		var a = this.container.getLayoutTarget();
		if (!(this.hasLayout || Ext.isEmpty(this.targetCls))) {
			a.addClass(this.targetCls)
		}
		this.onLayout(this.container, a);
		this.container.fireEvent("afterlayout", this.container, this);
		this.hasLayout = true
	},
	onLayout : function(a, b) {
		this.renderAll(a, b)
	},
	isValidParent : function(b, a) {
		return a && b.getPositionEl().dom.parentNode == (a.dom || a)
	},
	renderAll : function(e, g) {
		var b = e.items.items;
		for (var d = 0, a = b.length; d < a; d++) {
			var h = b[d];
			if (h && (!h.rendered || !this.isValidParent(h, g))) {
				this.renderItem(h, d, g)
			}
		}
	},
	renderItem : function(d, a, b) {
		if (d && !d.rendered) {
			d.render(b, a);
			this.configureItem(d, a)
		} else {
			if (d && !this.isValidParent(d, b)) {
				if (Ext.isNumber(a)) {
					a = b.dom.childNodes[a]
				}
				b.dom.insertBefore(d.getPositionEl().dom, a || null);
				d.container = b;
				this.configureItem(d, a)
			}
		}
	},
	configureItem : function(d, a) {
		if (this.extraCls) {
			var b = d.getPositionEl ? d.getPositionEl() : d;
			b.addClass(this.extraCls)
		}
		if (d.doLayout && this.forceLayout) {
			d.doLayout(false, true)
		}
		if (this.renderHidden && d != this.activeItem) {
			d.hide()
		}
	},
	onRemove : function(b) {
		if (this.activeItem == b) {
			delete this.activeItem
		}
		if (b.rendered && this.extraCls) {
			var a = b.getPositionEl ? b.getPositionEl() : b;
			a.removeClass(this.extraCls)
		}
	},
	onResize : function() {
		var c = this.container, a = c.bufferResize;
		if (c.collapsed) {
			return
		}
		if (a && c.ownerCt) {
			if (!c.hasLayoutPending()) {
				if (!this.resizeTask) {
					this.resizeTask = new Ext.util.DelayedTask(this.runLayout,
							this);
					this.resizeBuffer = Ext.isNumber(a) ? a : 50
				}
				c.layoutPending = true;
				this.resizeTask.delay(this.resizeBuffer)
			}
		} else {
			c.doLayout(false, this.forceLayout)
		}
	},
	runLayout : function() {
		var a = this.container;
		a.doLayout();
		delete a.layoutPending
	},
	setContainer : function(a) {
		this.container = a
	},
	parseMargins : function(b) {
		if (Ext.isNumber(b)) {
			b = b.toString()
		}
		var c = b.split(" ");
		var a = c.length;
		if (a == 1) {
			c[1] = c[0];
			c[2] = c[0];
			c[3] = c[0]
		}
		if (a == 2) {
			c[2] = c[0];
			c[3] = c[1]
		}
		if (a == 3) {
			c[3] = c[1]
		}
		return {
			top : parseInt(c[0], 10) || 0,
			right : parseInt(c[1], 10) || 0,
			bottom : parseInt(c[2], 10) || 0,
			left : parseInt(c[3], 10) || 0
		}
	},
	fieldTpl : (function() {
		var a = new Ext.Template(
				'<div class="x-form-item {itemCls}" tabIndex="-1">',
				'<label for="{id}" style="{labelStyle}" class="x-form-item-label">{label}{labelSeparator}</label>',
				'<div class="x-form-element" id="x-form-el-{id}" style="{elementStyle}">',
				'</div><div class="{clearCls}"></div>', "</div>");
		a.disableFormats = true;
		return a.compile()
	})(),
	destroy : function() {
		if (!Ext.isEmpty(this.targetCls)) {
			var a = this.container.getLayoutTarget();
			if (a) {
				a.removeClass(this.targetCls)
			}
		}
	}
});
Ext.Container.LAYOUTS.auto = Ext.layout.ContainerLayout;
Ext.layout.FitLayout = Ext.extend(Ext.layout.ContainerLayout, {
			monitorResize : true,
			onLayout : function(a, b) {
				Ext.layout.FitLayout.superclass.onLayout.call(this, a, b);
				if (!this.container.collapsed) {
					this.setItemSize(this.activeItem || a.items.itemAt(0), b
									.getViewSize(true))
				}
			},
			setItemSize : function(b, a) {
				if (b && a.height > 0) {
					b.setSize(a)
				}
			}
		});
Ext.Container.LAYOUTS.fit = Ext.layout.FitLayout;
Ext.layout.CardLayout = Ext.extend(Ext.layout.FitLayout, {
			deferredRender : false,
			layoutOnCardChange : false,
			renderHidden : true,
			constructor : function(a) {
				Ext.layout.CardLayout.superclass.constructor.call(this, a)
			},
			setActiveItem : function(c) {
				var a = this.activeItem;
				c = this.container.getComponent(c);
				if (a != c) {
					if (a) {
						a.hide();
						a.fireEvent("deactivate", a)
					}
					var b = c.doLayout
							&& (this.layoutOnCardChange || !c.rendered);
					this.activeItem = c;
					if (c) {
						c.show()
					}
					this.layout();
					if (c && b) {
						c.doLayout()
					}
					c.fireEvent("activate", c)
				}
			},
			renderAll : function(a, b) {
				if (this.deferredRender) {
					this.renderItem(this.activeItem, undefined, b)
				} else {
					Ext.layout.CardLayout.superclass.renderAll.call(this, a, b)
				}
			}
		});
Ext.Container.LAYOUTS.card = Ext.layout.CardLayout;
Ext.layout.AnchorLayout = Ext.extend(Ext.layout.ContainerLayout, {
			monitorResize : true,
			getAnchorViewSize : function(a, b) {
				return b.dom == document.body ? b.getViewSize(true) : b
						.getStyleSize()
			},
			onLayout : function(l, o) {
				Ext.layout.AnchorLayout.superclass.onLayout.call(this, l, o);
				var u = o.getViewSize(true);
				var s = u.width, k = u.height;
				if (s < 20 && k < 20) {
					return
				}
				var d, q;
				if (l.anchorSize) {
					if (typeof l.anchorSize == "number") {
						d = l.anchorSize
					} else {
						d = l.anchorSize.width;
						q = l.anchorSize.height
					}
				} else {
					d = l.initialConfig.width;
					q = l.initialConfig.height
				}
				var n = l.items.items, m = n.length, j, p, r, g, b, e, t;
				for (j = 0; j < m; j++) {
					p = n[j];
					e = p.getPositionEl();
					if (p.anchor) {
						r = p.anchorSpec;
						if (!r) {
							t = p.anchor.split(" ");
							p.anchorSpec = r = {
								right : this.parseAnchor(t[0],
										p.initialConfig.width, d),
								bottom : this.parseAnchor(t[1],
										p.initialConfig.height, q)
							}
						}
						g = r.right ? this.adjustWidthAnchor(r.right(s)
										- e.getMargins("lr"), p) : undefined;
						b = r.bottom ? this.adjustHeightAnchor(r.bottom(k)
										- e.getMargins("tb"), p) : undefined;
						if (g || b) {
							p.setSize(g || undefined, b || undefined)
						}
					}
				}
			},
			parseAnchor : function(c, h, b) {
				if (c && c != "none") {
					var e;
					if (/^(r|right|b|bottom)$/i.test(c)) {
						var g = b - h;
						return function(a) {
							if (a !== e) {
								e = a;
								return a - g
							}
						}
					} else {
						if (c.indexOf("%") != -1) {
							var d = parseFloat(c.replace("%", "")) * 0.01;
							return function(a) {
								if (a !== e) {
									e = a;
									return Math.floor(a * d)
								}
							}
						} else {
							c = parseInt(c, 10);
							if (!isNaN(c)) {
								return function(a) {
									if (a !== e) {
										e = a;
										return a + c
									}
								}
							}
						}
					}
				}
				return false
			},
			adjustWidthAnchor : function(b, a) {
				return b
			},
			adjustHeightAnchor : function(b, a) {
				return b
			}
		});
Ext.Container.LAYOUTS.anchor = Ext.layout.AnchorLayout;
Ext.layout.ColumnLayout = Ext.extend(Ext.layout.ContainerLayout, {
			monitorResize : true,
			extraCls : "x-column",
			scrollOffset : 0,
			targetCls : "x-column-layout-ct",
			isValidParent : function(b, a) {
				return b.getPositionEl().dom.parentNode == this.innerCt.dom
			},
			onLayout : function(d, j) {
				var e = d.items.items, g = e.length, k, a;
				if (!this.innerCt) {
					this.innerCt = j.createChild({
								cls : "x-column-inner"
							});
					this.innerCt.createChild({
								cls : "x-clear"
							})
				}
				this.renderAll(d, this.innerCt);
				var n = j.getViewSize(true);
				if (n.width < 1 && n.height < 1) {
					return
				}
				var l = n.width - this.scrollOffset, b = n.height, m = l;
				this.innerCt.setWidth(l);
				for (a = 0; a < g; a++) {
					k = e[a];
					if (!k.columnWidth) {
						m -= (k.getSize().width + k.getPositionEl()
								.getMargins("lr"))
					}
				}
				m = m < 0 ? 0 : m;
				for (a = 0; a < g; a++) {
					k = e[a];
					if (k.columnWidth) {
						k.setSize(Math.floor(k.columnWidth * m)
								- k.getPositionEl().getMargins("lr"))
					}
				}
			}
		});
Ext.Container.LAYOUTS.column = Ext.layout.ColumnLayout;
Ext.layout.BorderLayout = Ext.extend(Ext.layout.ContainerLayout, {
	monitorResize : true,
	rendered : false,
	targetCls : "x-border-layout-ct",
	onLayout : function(d, H) {
		var g;
		if (!this.rendered) {
			var v = d.items.items;
			g = [];
			for (var A = 0, B = v.length; A < B; A++) {
				var E = v[A];
				var l = E.region;
				if (E.collapsed) {
					g.push(E)
				}
				E.collapsed = false;
				if (!E.rendered) {
					E.render(H, A);
					E.getPositionEl().addClass("x-border-panel")
				}
				this[l] = l != "center" && E.split
						? new Ext.layout.BorderLayout.SplitRegion(this,
								E.initialConfig, l)
						: new Ext.layout.BorderLayout.Region(this,
								E.initialConfig, l);
				this[l].render(H, E)
			}
			this.rendered = true
		}
		var u = H.getViewSize(false);
		if (u.width < 20 || u.height < 20) {
			if (g) {
				this.restoreCollapsed = g
			}
			return
		} else {
			if (this.restoreCollapsed) {
				g = this.restoreCollapsed;
				delete this.restoreCollapsed
			}
		}
		var r = u.width, C = u.height;
		var q = r, z = C, o = 0, p = 0;
		var x = this.north, t = this.south, k = this.west, D = this.east, E = this.center;
		if (!E && Ext.layout.BorderLayout.WARN !== false) {
			throw "No center region defined in BorderLayout " + d.id
		}
		if (x && x.isVisible()) {
			var G = x.getSize();
			var y = x.getMargins();
			G.width = r - (y.left + y.right);
			G.x = y.left;
			G.y = y.top;
			o = G.height + G.y + y.bottom;
			z -= o;
			x.applyLayout(G)
		}
		if (t && t.isVisible()) {
			var G = t.getSize();
			var y = t.getMargins();
			G.width = r - (y.left + y.right);
			G.x = y.left;
			var F = (G.height + y.top + y.bottom);
			G.y = C - F + y.top;
			z -= F;
			t.applyLayout(G)
		}
		if (k && k.isVisible()) {
			var G = k.getSize();
			var y = k.getMargins();
			G.height = z - (y.top + y.bottom);
			G.x = y.left;
			G.y = o + y.top;
			var a = (G.width + y.left + y.right);
			p += a;
			q -= a;
			k.applyLayout(G)
		}
		if (D && D.isVisible()) {
			var G = D.getSize();
			var y = D.getMargins();
			G.height = z - (y.top + y.bottom);
			var a = (G.width + y.left + y.right);
			G.x = r - a + y.left;
			G.y = o + y.top;
			q -= a;
			D.applyLayout(G)
		}
		if (E) {
			var y = E.getMargins();
			var j = {
				x : p + y.left,
				y : o + y.top,
				width : q - (y.left + y.right),
				height : z - (y.top + y.bottom)
			};
			E.applyLayout(j)
		}
		if (g) {
			for (var A = 0, B = g.length; A < B; A++) {
				g[A].collapse(false)
			}
		}
		if (Ext.isIE && Ext.isStrict) {
			H.repaint()
		}
	},
	destroy : function() {
		var b = ["north", "south", "east", "west"];
		for (var a = 0; a < b.length; a++) {
			var c = this[b[a]];
			if (c) {
				if (c.destroy) {
					c.destroy()
				} else {
					if (c.split) {
						c.split.destroy(true)
					}
				}
			}
		}
		Ext.layout.BorderLayout.superclass.destroy.call(this)
	}
});
Ext.layout.BorderLayout.Region = function(b, a, c) {
	Ext.apply(this, a);
	this.layout = b;
	this.position = c;
	this.state = {};
	if (typeof this.margins == "string") {
		this.margins = this.layout.parseMargins(this.margins)
	}
	this.margins = Ext.applyIf(this.margins || {}, this.defaultMargins);
	if (this.collapsible) {
		if (typeof this.cmargins == "string") {
			this.cmargins = this.layout.parseMargins(this.cmargins)
		}
		if (this.collapseMode == "mini" && !this.cmargins) {
			this.cmargins = {
				left : 0,
				top : 0,
				right : 0,
				bottom : 0
			}
		} else {
			this.cmargins = Ext.applyIf(this.cmargins || {}, c == "north"
							|| c == "south"
							? this.defaultNSCMargins
							: this.defaultEWCMargins)
		}
	}
};
Ext.layout.BorderLayout.Region.prototype = {
	collapsible : false,
	split : false,
	floatable : true,
	minWidth : 50,
	minHeight : 50,
	defaultMargins : {
		left : 0,
		top : 0,
		right : 0,
		bottom : 0
	},
	defaultNSCMargins : {
		left : 5,
		top : 5,
		right : 5,
		bottom : 5
	},
	defaultEWCMargins : {
		left : 5,
		top : 0,
		right : 5,
		bottom : 0
	},
	floatingZIndex : 100,
	isCollapsed : false,
	render : function(b, c) {
		this.panel = c;
		c.el.enableDisplayMode();
		this.targetEl = b;
		this.el = c.el;
		var a = c.getState, d = this.position;
		c.getState = function() {
			return Ext.apply(a.call(c) || {}, this.state)
		}.createDelegate(this);
		if (d != "center") {
			c.allowQueuedExpand = false;
			c.on({
						beforecollapse : this.beforeCollapse,
						collapse : this.onCollapse,
						beforeexpand : this.beforeExpand,
						expand : this.onExpand,
						hide : this.onHide,
						show : this.onShow,
						scope : this
					});
			if (this.collapsible || this.floatable) {
				c.collapseEl = "el";
				c.slideAnchor = this.getSlideAnchor()
			}
			if (c.tools && c.tools.toggle) {
				c.tools.toggle.addClass("x-tool-collapse-" + d);
				c.tools.toggle.addClassOnOver("x-tool-collapse-" + d + "-over")
			}
		}
	},
	getCollapsedEl : function() {
		if (!this.collapsedEl) {
			if (!this.toolTemplate) {
				var b = new Ext.Template('<div class="x-tool x-tool-{id}">&#160;</div>');
				b.disableFormats = true;
				b.compile();
				Ext.layout.BorderLayout.Region.prototype.toolTemplate = b
			}
			this.collapsedEl = this.targetEl.createChild({
						cls : "x-layout-collapsed x-layout-collapsed-"
								+ this.position,
						id : this.panel.id + "-xcollapsed"
					});
			this.collapsedEl.enableDisplayMode("block");
			if (this.collapseMode == "mini") {
				this.collapsedEl.addClass("x-layout-cmini-" + this.position);
				this.miniCollapsedEl = this.collapsedEl.createChild({
							cls : "x-layout-mini x-layout-mini-"
									+ this.position,
							html : "&#160;"
						});
				this.miniCollapsedEl.addClassOnOver("x-layout-mini-over");
				this.collapsedEl.addClassOnOver("x-layout-collapsed-over");
				this.collapsedEl.on("click", this.onExpandClick, this, {
							stopEvent : true
						})
			} else {
				if (this.collapsible !== false && !this.hideCollapseTool) {
					var a = this.toolTemplate.append(this.collapsedEl.dom, {
								id : "expand-" + this.position
							}, true);
					a
							.addClassOnOver("x-tool-expand-" + this.position
									+ "-over");
					a.on("click", this.onExpandClick, this, {
								stopEvent : true
							})
				}
				if (this.floatable !== false || this.titleCollapse) {
					this.collapsedEl.addClassOnOver("x-layout-collapsed-over");
					this.collapsedEl.on("click", this[this.floatable
									? "collapseClick"
									: "onExpandClick"], this)
				}
			}
		}
		return this.collapsedEl
	},
	onExpandClick : function(a) {
		if (this.isSlid) {
			this.panel.expand(false)
		} else {
			this.panel.expand()
		}
	},
	onCollapseClick : function(a) {
		this.panel.collapse()
	},
	beforeCollapse : function(c, a) {
		this.lastAnim = a;
		if (this.splitEl) {
			this.splitEl.hide()
		}
		this.getCollapsedEl().show();
		var b = this.panel.getEl();
		this.originalZIndex = b.getStyle("z-index");
		b.setStyle("z-index", 100);
		this.isCollapsed = true;
		this.layout.layout()
	},
	onCollapse : function(a) {
		this.panel.el.setStyle("z-index", 1);
		if (this.lastAnim === false || this.panel.animCollapse === false) {
			this.getCollapsedEl().dom.style.visibility = "visible"
		} else {
			this.getCollapsedEl().slideIn(this.panel.slideAnchor, {
						duration : 0.2
					})
		}
		this.state.collapsed = true;
		this.panel.saveState()
	},
	beforeExpand : function(a) {
		if (this.isSlid) {
			this.afterSlideIn()
		}
		var b = this.getCollapsedEl();
		this.el.show();
		if (this.position == "east" || this.position == "west") {
			this.panel.setSize(undefined, b.getHeight())
		} else {
			this.panel.setSize(b.getWidth(), undefined)
		}
		b.hide();
		b.dom.style.visibility = "hidden";
		this.panel.el.setStyle("z-index", this.floatingZIndex)
	},
	onExpand : function() {
		this.isCollapsed = false;
		if (this.splitEl) {
			this.splitEl.show()
		}
		this.layout.layout();
		this.panel.el.setStyle("z-index", this.originalZIndex);
		this.state.collapsed = false;
		this.panel.saveState()
	},
	collapseClick : function(a) {
		if (this.isSlid) {
			a.stopPropagation();
			this.slideIn()
		} else {
			a.stopPropagation();
			this.slideOut()
		}
	},
	onHide : function() {
		if (this.isCollapsed) {
			this.getCollapsedEl().hide()
		} else {
			if (this.splitEl) {
				this.splitEl.hide()
			}
		}
	},
	onShow : function() {
		if (this.isCollapsed) {
			this.getCollapsedEl().show()
		} else {
			if (this.splitEl) {
				this.splitEl.show()
			}
		}
	},
	isVisible : function() {
		return !this.panel.hidden
	},
	getMargins : function() {
		return this.isCollapsed && this.cmargins ? this.cmargins : this.margins
	},
	getSize : function() {
		return this.isCollapsed ? this.getCollapsedEl().getSize() : this.panel
				.getSize()
	},
	setPanel : function(a) {
		this.panel = a
	},
	getMinWidth : function() {
		return this.minWidth
	},
	getMinHeight : function() {
		return this.minHeight
	},
	applyLayoutCollapsed : function(a) {
		var b = this.getCollapsedEl();
		b.setLeftTop(a.x, a.y);
		b.setSize(a.width, a.height)
	},
	applyLayout : function(a) {
		if (this.isCollapsed) {
			this.applyLayoutCollapsed(a)
		} else {
			this.panel.setPosition(a.x, a.y);
			this.panel.setSize(a.width, a.height)
		}
	},
	beforeSlide : function() {
		this.panel.beforeEffect()
	},
	afterSlide : function() {
		this.panel.afterEffect()
	},
	initAutoHide : function() {
		if (this.autoHide !== false) {
			if (!this.autoHideHd) {
				var a = new Ext.util.DelayedTask(this.slideIn, this);
				this.autoHideHd = {
					mouseout : function(b) {
						if (!b.within(this.el, true)) {
							a.delay(500)
						}
					},
					mouseover : function(b) {
						a.cancel()
					},
					scope : this
				}
			}
			this.el.on(this.autoHideHd);
			this.collapsedEl.on(this.autoHideHd)
		}
	},
	clearAutoHide : function() {
		if (this.autoHide !== false) {
			this.el.un("mouseout", this.autoHideHd.mouseout);
			this.el.un("mouseover", this.autoHideHd.mouseover);
			this.collapsedEl.un("mouseout", this.autoHideHd.mouseout);
			this.collapsedEl.un("mouseover", this.autoHideHd.mouseover)
		}
	},
	clearMonitor : function() {
		Ext.getDoc().un("click", this.slideInIf, this)
	},
	slideOut : function() {
		if (this.isSlid || this.el.hasActiveFx()) {
			return
		}
		this.isSlid = true;
		var a = this.panel.tools;
		if (a && a.toggle) {
			a.toggle.hide()
		}
		this.el.show();
		if (this.position == "east" || this.position == "west") {
			this.panel.setSize(undefined, this.collapsedEl.getHeight())
		} else {
			this.panel.setSize(this.collapsedEl.getWidth(), undefined)
		}
		this.restoreLT = [this.el.dom.style.left, this.el.dom.style.top];
		this.el.alignTo(this.collapsedEl, this.getCollapseAnchor());
		this.el.setStyle("z-index", this.floatingZIndex + 2);
		this.panel.el.replaceClass("x-panel-collapsed", "x-panel-floating");
		if (this.animFloat !== false) {
			this.beforeSlide();
			this.el.slideIn(this.getSlideAnchor(), {
						callback : function() {
							this.afterSlide();
							this.initAutoHide();
							Ext.getDoc().on("click", this.slideInIf, this)
						},
						scope : this,
						block : true
					})
		} else {
			this.initAutoHide();
			Ext.getDoc().on("click", this.slideInIf, this)
		}
	},
	afterSlideIn : function() {
		this.clearAutoHide();
		this.isSlid = false;
		this.clearMonitor();
		this.el.setStyle("z-index", "");
		this.panel.el.replaceClass("x-panel-floating", "x-panel-collapsed");
		this.el.dom.style.left = this.restoreLT[0];
		this.el.dom.style.top = this.restoreLT[1];
		var a = this.panel.tools;
		if (a && a.toggle) {
			a.toggle.show()
		}
	},
	slideIn : function(a) {
		if (!this.isSlid || this.el.hasActiveFx()) {
			Ext.callback(a);
			return
		}
		this.isSlid = false;
		if (this.animFloat !== false) {
			this.beforeSlide();
			this.el.slideOut(this.getSlideAnchor(), {
						callback : function() {
							this.el.hide();
							this.afterSlide();
							this.afterSlideIn();
							Ext.callback(a)
						},
						scope : this,
						block : true
					})
		} else {
			this.el.hide();
			this.afterSlideIn()
		}
	},
	slideInIf : function(a) {
		if (!a.within(this.el)) {
			this.slideIn()
		}
	},
	anchors : {
		west : "left",
		east : "right",
		north : "top",
		south : "bottom"
	},
	sanchors : {
		west : "l",
		east : "r",
		north : "t",
		south : "b"
	},
	canchors : {
		west : "tl-tr",
		east : "tr-tl",
		north : "tl-bl",
		south : "bl-tl"
	},
	getAnchor : function() {
		return this.anchors[this.position]
	},
	getCollapseAnchor : function() {
		return this.canchors[this.position]
	},
	getSlideAnchor : function() {
		return this.sanchors[this.position]
	},
	getAlignAdj : function() {
		var a = this.cmargins;
		switch (this.position) {
			case "west" :
				return [0, 0];
				break;
			case "east" :
				return [0, 0];
				break;
			case "north" :
				return [0, 0];
				break;
			case "south" :
				return [0, 0];
				break
		}
	},
	getExpandAdj : function() {
		var b = this.collapsedEl, a = this.cmargins;
		switch (this.position) {
			case "west" :
				return [-(a.right + b.getWidth() + a.left), 0];
				break;
			case "east" :
				return [a.right + b.getWidth() + a.left, 0];
				break;
			case "north" :
				return [0, -(a.top + a.bottom + b.getHeight())];
				break;
			case "south" :
				return [0, a.top + a.bottom + b.getHeight()];
				break
		}
	},
	destroy : function() {
		Ext.destroy(this.miniCollapsedEl, this.collapsedEl)
	}
};
Ext.layout.BorderLayout.SplitRegion = function(b, a, c) {
	Ext.layout.BorderLayout.SplitRegion.superclass.constructor.call(this, b, a,
			c);
	this.applyLayout = this.applyFns[c]
};
Ext.extend(Ext.layout.BorderLayout.SplitRegion, Ext.layout.BorderLayout.Region,
		{
			splitTip : "Drag to resize.",
			collapsibleSplitTip : "Drag to resize. Double click to hide.",
			useSplitTips : false,
			splitSettings : {
				north : {
					orientation : Ext.SplitBar.VERTICAL,
					placement : Ext.SplitBar.TOP,
					maxFn : "getVMaxSize",
					minProp : "minHeight",
					maxProp : "maxHeight"
				},
				south : {
					orientation : Ext.SplitBar.VERTICAL,
					placement : Ext.SplitBar.BOTTOM,
					maxFn : "getVMaxSize",
					minProp : "minHeight",
					maxProp : "maxHeight"
				},
				east : {
					orientation : Ext.SplitBar.HORIZONTAL,
					placement : Ext.SplitBar.RIGHT,
					maxFn : "getHMaxSize",
					minProp : "minWidth",
					maxProp : "maxWidth"
				},
				west : {
					orientation : Ext.SplitBar.HORIZONTAL,
					placement : Ext.SplitBar.LEFT,
					maxFn : "getHMaxSize",
					minProp : "minWidth",
					maxProp : "maxWidth"
				}
			},
			applyFns : {
				west : function(c) {
					if (this.isCollapsed) {
						return this.applyLayoutCollapsed(c)
					}
					var d = this.splitEl.dom, b = d.style;
					this.panel.setPosition(c.x, c.y);
					var a = d.offsetWidth;
					b.left = (c.x + c.width - a) + "px";
					b.top = (c.y) + "px";
					b.height = Math.max(0, c.height) + "px";
					this.panel.setSize(c.width - a, c.height)
				},
				east : function(c) {
					if (this.isCollapsed) {
						return this.applyLayoutCollapsed(c)
					}
					var d = this.splitEl.dom, b = d.style;
					var a = d.offsetWidth;
					this.panel.setPosition(c.x + a, c.y);
					b.left = (c.x) + "px";
					b.top = (c.y) + "px";
					b.height = Math.max(0, c.height) + "px";
					this.panel.setSize(c.width - a, c.height)
				},
				north : function(c) {
					if (this.isCollapsed) {
						return this.applyLayoutCollapsed(c)
					}
					var d = this.splitEl.dom, b = d.style;
					var a = d.offsetHeight;
					this.panel.setPosition(c.x, c.y);
					b.left = (c.x) + "px";
					b.top = (c.y + c.height - a) + "px";
					b.width = Math.max(0, c.width) + "px";
					this.panel.setSize(c.width, c.height - a)
				},
				south : function(c) {
					if (this.isCollapsed) {
						return this.applyLayoutCollapsed(c)
					}
					var d = this.splitEl.dom, b = d.style;
					var a = d.offsetHeight;
					this.panel.setPosition(c.x, c.y + a);
					b.left = (c.x) + "px";
					b.top = (c.y) + "px";
					b.width = Math.max(0, c.width) + "px";
					this.panel.setSize(c.width, c.height - a)
				}
			},
			render : function(a, c) {
				Ext.layout.BorderLayout.SplitRegion.superclass.render.call(
						this, a, c);
				var d = this.position;
				this.splitEl = a.createChild({
							cls : "x-layout-split x-layout-split-" + d,
							html : "&#160;",
							id : this.panel.id + "-xsplit"
						});
				if (this.collapseMode == "mini") {
					this.miniSplitEl = this.splitEl.createChild({
								cls : "x-layout-mini x-layout-mini-" + d,
								html : "&#160;"
							});
					this.miniSplitEl.addClassOnOver("x-layout-mini-over");
					this.miniSplitEl.on("click", this.onCollapseClick, this, {
								stopEvent : true
							})
				}
				var b = this.splitSettings[d];
				this.split = new Ext.SplitBar(this.splitEl.dom, c.el,
						b.orientation);
				this.split.tickSize = this.tickSize;
				this.split.placement = b.placement;
				this.split.getMaximumSize = this[b.maxFn].createDelegate(this);
				this.split.minSize = this.minSize || this[b.minProp];
				this.split.on("beforeapply", this.onSplitMove, this);
				this.split.useShim = this.useShim === true;
				this.maxSize = this.maxSize || this[b.maxProp];
				if (c.hidden) {
					this.splitEl.hide()
				}
				if (this.useSplitTips) {
					this.splitEl.dom.title = this.collapsible
							? this.collapsibleSplitTip
							: this.splitTip
				}
				if (this.collapsible) {
					this.splitEl.on("dblclick", this.onCollapseClick, this)
				}
			},
			getSize : function() {
				if (this.isCollapsed) {
					return this.collapsedEl.getSize()
				}
				var a = this.panel.getSize();
				if (this.position == "north" || this.position == "south") {
					a.height += this.splitEl.dom.offsetHeight
				} else {
					a.width += this.splitEl.dom.offsetWidth
				}
				return a
			},
			getHMaxSize : function() {
				var b = this.maxSize || 10000;
				var a = this.layout.center;
				return Math.min(b, (this.el.getWidth() + a.el.getWidth())
								- a.getMinWidth())
			},
			getVMaxSize : function() {
				var b = this.maxSize || 10000;
				var a = this.layout.center;
				return Math.min(b, (this.el.getHeight() + a.el.getHeight())
								- a.getMinHeight())
			},
			onSplitMove : function(b, a) {
				var c = this.panel.getSize();
				this.lastSplitSize = a;
				if (this.position == "north" || this.position == "south") {
					this.panel.setSize(c.width, a);
					this.state.height = a
				} else {
					this.panel.setSize(a, c.height);
					this.state.width = a
				}
				this.layout.layout();
				this.panel.saveState();
				return false
			},
			getSplitBar : function() {
				return this.split
			},
			destroy : function() {
				Ext.destroy(this.miniSplitEl, this.split, this.splitEl);
				Ext.layout.BorderLayout.SplitRegion.superclass.destroy
						.call(this)
			}
		});
Ext.Container.LAYOUTS.border = Ext.layout.BorderLayout;
Ext.layout.FormLayout = Ext.extend(Ext.layout.AnchorLayout, {
	labelSeparator : ":",
	trackLabels : false,
	onRemove : function(d) {
		Ext.layout.FormLayout.superclass.onRemove.call(this, d);
		if (this.trackLabels) {
			d.un("show", this.onFieldShow, this);
			d.un("hide", this.onFieldHide, this)
		}
		var b = d.getPositionEl(), a = d.getItemCt && d.getItemCt();
		if (d.rendered && a) {
			if (b && b.dom) {
				b.insertAfter(a)
			}
			Ext.destroy(a);
			Ext.destroyMembers(d, "label", "itemCt");
			if (d.customItemCt) {
				Ext.destroyMembers(d, "getItemCt", "customItemCt")
			}
		}
	},
	setContainer : function(a) {
		Ext.layout.FormLayout.superclass.setContainer.call(this, a);
		if (a.labelAlign) {
			a.addClass("x-form-label-" + a.labelAlign)
		}
		if (a.hideLabels) {
			Ext.apply(this, {
						labelStyle : "display:none",
						elementStyle : "padding-left:0;",
						labelAdjust : 0
					})
		} else {
			this.labelSeparator = a.labelSeparator || this.labelSeparator;
			a.labelWidth = a.labelWidth || 100;
			if (Ext.isNumber(a.labelWidth)) {
				var b = Ext.isNumber(a.labelPad) ? a.labelPad : 5;
				Ext.apply(this, {
							labelAdjust : a.labelWidth + b,
							labelStyle : "width:" + a.labelWidth + "px;",
							elementStyle : "padding-left:" + (a.labelWidth + b)
									+ "px"
						})
			}
			if (a.labelAlign == "top") {
				Ext.apply(this, {
							labelStyle : "width:auto;",
							labelAdjust : 0,
							elementStyle : "padding-left:0;"
						})
			}
		}
	},
	isHide : function(a) {
		return a.hideLabel || this.container.hideLabels
	},
	onFieldShow : function(a) {
		a.getItemCt().removeClass("x-hide-" + a.hideMode)
	},
	onFieldHide : function(a) {
		a.getItemCt().addClass("x-hide-" + a.hideMode)
	},
	getLabelStyle : function(e) {
		var b = "", c = [this.labelStyle, e];
		for (var d = 0, a = c.length; d < a; ++d) {
			if (c[d]) {
				b += c[d];
				if (b.substr(-1, 1) != ";") {
					b += ";"
				}
			}
		}
		return b
	},
	renderItem : function(e, a, d) {
		if (e && (e.isFormField || e.fieldLabel) && e.inputType != "hidden") {
			var b = this.getTemplateArgs(e);
			if (Ext.isNumber(a)) {
				a = d.dom.childNodes[a] || null
			}
			if (a) {
				e.itemCt = this.fieldTpl.insertBefore(a, b, true)
			} else {
				e.itemCt = this.fieldTpl.append(d, b, true)
			}
			if (!e.getItemCt) {
				Ext.apply(e, {
							getItemCt : function() {
								return e.itemCt
							},
							customItemCt : true
						})
			}
			e.label = e.getItemCt().child("label.x-form-item-label");
			if (!e.rendered) {
				e.render("x-form-el-" + e.id)
			} else {
				if (!this.isValidParent(e, d)) {
					Ext.fly("x-form-el-" + e.id).appendChild(e.getPositionEl())
				}
			}
			if (this.trackLabels) {
				if (e.hidden) {
					this.onFieldHide(e)
				}
				e.on({
							scope : this,
							show : this.onFieldShow,
							hide : this.onFieldHide
						})
			}
			this.configureItem(e)
		} else {
			Ext.layout.FormLayout.superclass.renderItem.apply(this, arguments)
		}
	},
	getTemplateArgs : function(b) {
		var a = !b.fieldLabel || b.hideLabel;
		return {
			id : b.id,
			label : b.fieldLabel,
			labelStyle : this.getLabelStyle(b.labelStyle),
			elementStyle : this.elementStyle || "",
			labelSeparator : a ? "" : (Ext.isDefined(b.labelSeparator)
					? b.labelSeparator
					: this.labelSeparator),
			itemCls : (b.itemCls || this.container.itemCls || "")
					+ (b.hideLabel ? " x-hide-label" : ""),
			clearCls : b.clearCls || "x-form-clear-left"
		}
	},
	adjustWidthAnchor : function(a, d) {
		if (d.label && !this.isHide(d) && (this.container.labelAlign != "top")) {
			var b = Ext.isIE6 || (Ext.isIE && !Ext.isStrict);
			return a - this.labelAdjust + (b ? -3 : 0)
		}
		return a
	},
	adjustHeightAnchor : function(a, b) {
		if (b.label && !this.isHide(b) && (this.container.labelAlign == "top")) {
			return a - b.label.getHeight()
		}
		return a
	},
	isValidParent : function(b, a) {
		return a && this.container.getEl().contains(b.getPositionEl())
	}
});
Ext.Container.LAYOUTS.form = Ext.layout.FormLayout;
Ext.layout.AccordionLayout = Ext.extend(Ext.layout.FitLayout, {
	fill : true,
	autoWidth : true,
	titleCollapse : true,
	hideCollapseTool : false,
	collapseFirst : false,
	animate : false,
	sequence : false,
	activeOnTop : false,
	renderItem : function(a) {
		if (this.animate === false) {
			a.animCollapse = false
		}
		a.collapsible = true;
		if (this.autoWidth) {
			a.autoWidth = true
		}
		if (this.titleCollapse) {
			a.titleCollapse = true
		}
		if (this.hideCollapseTool) {
			a.hideCollapseTool = true
		}
		if (this.collapseFirst !== undefined) {
			a.collapseFirst = this.collapseFirst
		}
		if (!this.activeItem && !a.collapsed) {
			this.setActiveItem(a, true)
		} else {
			if (this.activeItem && this.activeItem != a) {
				a.collapsed = true
			}
		}
		Ext.layout.AccordionLayout.superclass.renderItem.apply(this, arguments);
		a.header.addClass("x-accordion-hd");
		a.on("beforeexpand", this.beforeExpand, this)
	},
	onRemove : function(a) {
		Ext.layout.AccordionLayout.superclass.onRemove.call(this, a);
		if (a.rendered) {
			a.header.removeClass("x-accordion-hd")
		}
		a.un("beforeexpand", this.beforeExpand, this)
	},
	beforeExpand : function(c, b) {
		var a = this.activeItem;
		if (a) {
			if (this.sequence) {
				delete this.activeItem;
				if (!a.collapsed) {
					a.collapse({
								callback : function() {
									c.expand(b || true)
								},
								scope : this
							});
					return false
				}
			} else {
				a.collapse(this.animate)
			}
		}
		this.setActive(c);
		if (this.activeOnTop) {
			c.el.dom.parentNode.insertBefore(c.el.dom,
					c.el.dom.parentNode.firstChild)
		}
		this.layout()
	},
	setItemSize : function(c, b) {
		if (this.fill && c) {
			var a = 0;
			this.container.items.each(function(d) {
						if (d != c) {
							a += d.header.getHeight()
						}
					});
			b.height -= a;
			c.setSize(b)
		}
	},
	setActiveItem : function(a) {
		this.setActive(a, true)
	},
	setActive : function(c, b) {
		var a = this.activeItem;
		c = this.container.getComponent(c);
		if (a != c) {
			if (c.rendered && c.collapsed && b) {
				c.expand()
			} else {
				if (a) {
					a.fireEvent("deactivate", a)
				}
				this.activeItem = c;
				c.fireEvent("activate", c)
			}
		}
	}
});
Ext.Container.LAYOUTS.accordion = Ext.layout.AccordionLayout;
Ext.layout.Accordion = Ext.layout.AccordionLayout;
Ext.layout.TableLayout = Ext.extend(Ext.layout.ContainerLayout, {
			monitorResize : false,
			targetCls : "x-table-layout-ct",
			tableAttrs : null,
			setContainer : function(a) {
				Ext.layout.TableLayout.superclass.setContainer.call(this, a);
				this.currentRow = 0;
				this.currentColumn = 0;
				this.cells = []
			},
			onLayout : function(d, g) {
				var e = d.items.items, a = e.length, h, b;
				if (!this.table) {
					this.table = g.createChild(Ext.apply({
										tag : "table",
										cls : "x-table-layout",
										cellspacing : 0,
										cn : {
											tag : "tbody"
										}
									}, this.tableAttrs), null, true)
				}
				this.renderAll(d, g)
			},
			getRow : function(a) {
				var b = this.table.tBodies[0].childNodes[a];
				if (!b) {
					b = document.createElement("tr");
					this.table.tBodies[0].appendChild(b)
				}
				return b
			},
			getNextCell : function(k) {
				var a = this
						.getNextNonSpan(this.currentColumn, this.currentRow);
				var g = this.currentColumn = a[0], e = this.currentRow = a[1];
				for (var j = e; j < e + (k.rowspan || 1); j++) {
					if (!this.cells[j]) {
						this.cells[j] = []
					}
					for (var d = g; d < g + (k.colspan || 1); d++) {
						this.cells[j][d] = true
					}
				}
				var h = document.createElement("td");
				if (k.cellId) {
					h.id = k.cellId
				}
				var b = "x-table-layout-cell";
				if (k.cellCls) {
					b += " " + k.cellCls
				}
				h.className = b;
				if (k.colspan) {
					h.colSpan = k.colspan
				}
				if (k.rowspan) {
					h.rowSpan = k.rowspan
				}
				this.getRow(e).appendChild(h);
				return h
			},
			getNextNonSpan : function(a, c) {
				var b = this.columns;
				while ((b && a >= b) || (this.cells[c] && this.cells[c][a])) {
					if (b && a >= b) {
						c++;
						a = 0
					} else {
						a++
					}
				}
				return [a, c]
			},
			renderItem : function(e, a, d) {
				if (e && !e.rendered) {
					e.render(this.getNextCell(e));
					this.configureItem(e, a)
				} else {
					if (e && !this.isValidParent(e, d)) {
						var b = this.getNextCell(e);
						b.insertBefore(e.getPositionEl().dom, null);
						e.container = Ext.get(b);
						this.configureItem(e, a)
					}
				}
			},
			isValidParent : function(b, a) {
				return b.getPositionEl().up("table", 5).dom.parentNode === (a.dom || a)
			}
		});
Ext.Container.LAYOUTS.table = Ext.layout.TableLayout;
Ext.layout.AbsoluteLayout = Ext.extend(Ext.layout.AnchorLayout, {
			extraCls : "x-abs-layout-item",
			onLayout : function(a, b) {
				b.position();
				this.paddingLeft = b.getPadding("l");
				this.paddingTop = b.getPadding("t");
				Ext.layout.AbsoluteLayout.superclass.onLayout.call(this, a, b)
			},
			adjustWidthAnchor : function(b, a) {
				return b ? b - a.getPosition(true)[0] + this.paddingLeft : b
			},
			adjustHeightAnchor : function(b, a) {
				return b ? b - a.getPosition(true)[1] + this.paddingTop : b
			}
		});
Ext.Container.LAYOUTS.absolute = Ext.layout.AbsoluteLayout;
Ext.layout.BoxLayout = Ext.extend(Ext.layout.ContainerLayout, {
			defaultMargins : {
				left : 0,
				top : 0,
				right : 0,
				bottom : 0
			},
			padding : "0",
			pack : "start",
			monitorResize : true,
			scrollOffset : 0,
			extraCls : "x-box-item",
			targetCls : "x-box-layout-ct",
			innerCls : "x-box-inner",
			constructor : function(a) {
				Ext.layout.BoxLayout.superclass.constructor.call(this, a);
				if (Ext.isString(this.defaultMargins)) {
					this.defaultMargins = this
							.parseMargins(this.defaultMargins)
				}
			},
			isValidParent : function(b, a) {
				return b.getPositionEl().dom.parentNode == this.innerCt.dom
			},
			onLayout : function(e, j) {
				var g = e.items.items, b = g.length, k, d, h = b - 1, a;
				if (!this.innerCt) {
					this.innerCt = j.createChild({
								cls : this.innerCls
							});
					this.padding = this.parseMargins(this.padding)
				}
				this.renderAll(e, this.innerCt)
			},
			renderItem : function(a) {
				if (Ext.isString(a.margins)) {
					a.margins = this.parseMargins(a.margins)
				} else {
					if (!a.margins) {
						a.margins = this.defaultMargins
					}
				}
				Ext.layout.BoxLayout.superclass.renderItem.apply(this,
						arguments)
			},
			getTargetSize : function(a) {
				return (Ext.isIE6 && Ext.isStrict && a.dom == document.body)
						? a.getStyleSize()
						: a.getViewSize(true)
			},
			getItems : function(b) {
				var a = [];
				b.items.each(function(d) {
							if (d.isVisible()) {
								a.push(d)
							}
						});
				return a
			}
		});
Ext.layout.VBoxLayout = Ext.extend(Ext.layout.BoxLayout, {
	align : "left",
	onLayout : function(g, K) {
		Ext.layout.VBoxLayout.superclass.onLayout.call(this, g, K);
		var j = this.getItems(g), n, r, y, o, u, q, z = K.getViewSize(true), p = z.width, D = z.height
				- this.scrollOffset, A = this.padding.left, s = this.padding.top, m = this.pack == "start", G = p
				- (this.padding.left + this.padding.right), v = 0, F = 0, B = 0, I = 0, e = 0, x = 0, E = [], C = [], H, k = j.length;
		for (i = 0; i < k; i++) {
			H = j[i];
			n = H.margins;
			y = n.top + n.bottom;
			F = Math.max(F, H.getWidth() + n.left + n.right)
		}
		var a = F + this.padding.left + this.padding.right;
		switch (this.align) {
			case "stretch" :
				this.innerCt.setSize(p, D);
				break;
			case "stretchmax" :
			case "left" :
				this.innerCt.setSize(a, D);
				break;
			case "center" :
				this.innerCt.setSize(p = Math.max(p, a), D);
				break
		}
		var b = Math.max(0, p - this.padding.left - this.padding.right);
		for (i = 0; i < k; i++) {
			H = j[i];
			n = H.margins;
			if (this.align == "stretch") {
				H.setWidth((G - (n.left + n.right)).constrain(H.minWidth || 0,
						H.maxWidth || 1000000))
			} else {
				if (this.align == "stretchmax") {
					H.setWidth((F - (n.left + n.right)).constrain(H.minWidth
									|| 0, H.maxWidth || 1000000))
				} else {
					if (m && H.flex) {
						H.setWidth()
					}
				}
			}
		}
		for (i = 0; i < k; i++) {
			H = j[i];
			n = H.margins;
			B += H.flex || 0;
			r = H.getHeight();
			y = n.top + n.bottom;
			v += r + y;
			I += y + (H.flex ? 0 : r)
		}
		v = D - v - this.padding.top - this.padding.bottom;
		var d = Math.max(0, D - this.padding.top - this.padding.bottom - I), J = d;
		for (i = 0; i < k; i++) {
			H = j[i];
			if (m && H.flex) {
				r = Math.floor(d * (H.flex / B));
				J -= r;
				E.push(r)
			}
		}
		if (this.pack == "center") {
			s += v ? v / 2 : 0
		} else {
			if (this.pack == "end") {
				s += v
			}
		}
		x = 0;
		for (i = 0; i < k; i++) {
			H = j[i];
			n = H.margins;
			s += n.top;
			q = b;
			o = A + n.left;
			if (this.align == "center") {
				if ((u = b - (H.getWidth() + n.left + n.right)) > 0) {
					o += (u / 2);
					q -= u
				}
			}
			H.setPosition(o, s);
			if (m && H.flex) {
				r = Math.max(0, E[x++] + (J-- > 0 ? 1 : 0));
				H.setSize(q, r)
			} else {
				r = H.getHeight()
			}
			s += r + n.bottom
		}
	}
});
Ext.Container.LAYOUTS.vbox = Ext.layout.VBoxLayout;
Ext.layout.HBoxLayout = Ext.extend(Ext.layout.BoxLayout, {
	align : "top",
	onLayout : function(d, H) {
		Ext.layout.HBoxLayout.superclass.onLayout.call(this, d, H);
		var e = this.getItems(d), k, c, u, p, r, v = H.getViewSize(true), n = v.width
				- this.scrollOffset, E = v.height, y = this.padding.left, q = this.padding.top, j = this.pack == "start", C = [
				"stretch", "stretchmax"].indexOf(this.align) == -1, o = E
				- (this.padding.top + this.padding.bottom), F = 0, x = 0, z = 0, b = 0, g = 0;
		Ext.each(e, function(h) {
					k = h.margins;
					z += h.flex || 0;
					c = h.getWidth();
					u = k.left + k.right;
					F += c + u;
					b += u + (h.flex ? 0 : c);
					x = Math.max(x, h.getHeight() + k.top + k.bottom)
				});
		F = n - F - this.padding.left - this.padding.right;
		var B = x + this.padding.top + this.padding.bottom;
		switch (this.align) {
			case "stretch" :
				this.innerCt.setSize(n, E);
				break;
			case "stretchmax" :
			case "top" :
				this.innerCt.setSize(n, B);
				break;
			case "middle" :
				this.innerCt.setSize(n, E = Math.max(E, B));
				break
		}
		var A = Math.max(0, n - this.padding.left - this.padding.right - b), G = A, m = [], D = [], s = 0, a = Math
				.max(0, E - this.padding.top - this.padding.bottom);
		Ext.each(e, function(h) {
					if (j && h.flex) {
						c = Math.floor(A * (h.flex / z));
						G -= c;
						m.push(c)
					}
				});
		if (this.pack == "center") {
			y += F ? F / 2 : 0
		} else {
			if (this.pack == "end") {
				y += F
			}
		}
		Ext.each(e, function(h) {
					k = h.margins;
					y += k.left;
					h.setPosition(y, q + k.top);
					if (j && h.flex) {
						c = Math.max(0, m[s++] + (G-- > 0 ? 1 : 0));
						if (C) {
							D.push(h.getHeight())
						}
						h.setSize(c, a)
					} else {
						c = h.getWidth()
					}
					y += c + k.right
				});
		s = 0;
		Ext.each(e, function(h) {
					k = h.margins;
					p = h.getHeight();
					if (j && h.flex) {
						p = D[s++]
					}
					if (this.align == "stretch") {
						h.setHeight((o - (k.top + k.bottom)).constrain(
								h.minHeight || 0, h.maxHeight || 1000000))
					} else {
						if (this.align == "stretchmax") {
							h.setHeight((x - (k.top + k.bottom)).constrain(
									h.minHeight || 0, h.maxHeight || 1000000))
						} else {
							if (this.align == "middle") {
								r = a - (p + k.top + k.bottom);
								p = q + k.top + (r / 2);
								if (r > 0) {
									h.setPosition(h.x, p)
								}
							}
							if (j && h.flex) {
								h.setHeight(p)
							}
						}
					}
				}, this)
	}
});
Ext.Container.LAYOUTS.hbox = Ext.layout.HBoxLayout;
Ext.Viewport = Ext.extend(Ext.Container, {
			initComponent : function() {
				Ext.Viewport.superclass.initComponent.call(this);
				document.getElementsByTagName("html")[0].className += " x-viewport";
				this.el = Ext.getBody();
				this.el.setHeight = Ext.emptyFn;
				this.el.setWidth = Ext.emptyFn;
				this.el.setSize = Ext.emptyFn;
				this.el.dom.scroll = "no";
				this.allowDomMove = false;
				this.autoWidth = true;
				this.autoHeight = true;
				Ext.EventManager.onWindowResize(this.fireResize, this);
				this.renderTo = this.el
			},
			fireResize : function(a, b) {
				this.onResize(a, b, a, b)
			}
		});
Ext.reg("viewport", Ext.Viewport);
Ext.Panel = Ext.extend(Ext.Container, {
	baseCls : "x-panel",
	collapsedCls : "x-panel-collapsed",
	maskDisabled : true,
	animCollapse : Ext.enableFx,
	headerAsText : true,
	buttonAlign : "right",
	collapsed : false,
	collapseFirst : true,
	minButtonWidth : 75,
	elements : "body",
	preventBodyReset : false,
	padding : undefined,
	resizeEvent : "bodyresize",
	toolTarget : "header",
	collapseEl : "bwrap",
	slideAnchor : "t",
	disabledClass : "",
	deferHeight : true,
	expandDefaults : {
		duration : 0.25
	},
	collapseDefaults : {
		duration : 0.25
	},
	initComponent : function() {
		Ext.Panel.superclass.initComponent.call(this);
		this.addEvents("bodyresize", "titlechange", "iconchange", "collapse",
				"expand", "beforecollapse", "beforeexpand", "beforeclose",
				"close", "activate", "deactivate");
		if (this.unstyled) {
			this.baseCls = "x-plain"
		}
		this.toolbars = [];
		if (this.tbar) {
			this.elements += ",tbar";
			this.topToolbar = this.createToolbar(this.tbar);
			delete this.tbar
		}
		if (this.bbar) {
			this.elements += ",bbar";
			this.bottomToolbar = this.createToolbar(this.bbar);
			delete this.bbar
		}
		if (this.header === true) {
			this.elements += ",header";
			delete this.header
		} else {
			if (this.headerCfg || (this.title && this.header !== false)) {
				this.elements += ",header"
			}
		}
		if (this.footerCfg || this.footer === true) {
			this.elements += ",footer";
			delete this.footer
		}
		if (this.buttons) {
			this.fbar = this.buttons;
			delete this.buttons
		}
		if (this.fbar) {
			this.createFbar(this.fbar)
		}
		if (this.autoLoad) {
			this.on("render", this.doAutoLoad, this, {
						delay : 10
					})
		}
	},
	createFbar : function(b) {
		var a = this.minButtonWidth;
		this.elements += ",footer";
		this.fbar = this.createToolbar(b, {
					buttonAlign : this.buttonAlign,
					toolbarCls : "x-panel-fbar",
					enableOverflow : false,
					defaults : function(d) {
						return {
							minWidth : d.minWidth || a
						}
					}
				});
		this.fbar.items.each(function(d) {
					d.minWidth = d.minWidth || this.minButtonWidth
				}, this);
		this.buttons = this.fbar.items.items
	},
	createToolbar : function(b, c) {
		var a;
		if (Ext.isArray(b)) {
			b = {
				items : b
			}
		}
		a = b.events ? Ext.apply(b, c) : this.createComponent(Ext.apply({}, b,
						c), "toolbar");
		a.ownerCt = this;
		a.bufferResize = false;
		this.toolbars.push(a);
		return a
	},
	createElement : function(a, c) {
		if (this[a]) {
			c.appendChild(this[a].dom);
			return
		}
		if (a === "bwrap" || this.elements.indexOf(a) != -1) {
			if (this[a + "Cfg"]) {
				this[a] = Ext.fly(c).createChild(this[a + "Cfg"])
			} else {
				var b = document.createElement("div");
				b.className = this[a + "Cls"];
				this[a] = Ext.get(c.appendChild(b))
			}
			if (this[a + "CssClass"]) {
				this[a].addClass(this[a + "CssClass"])
			}
			if (this[a + "Style"]) {
				this[a].applyStyles(this[a + "Style"])
			}
		}
	},
	onRender : function(g, e) {
		Ext.Panel.superclass.onRender.call(this, g, e);
		this.createClasses();
		var a = this.el, h = a.dom, l, j;
		if (this.collapsible && !this.hideCollapseTool) {
			this.tools = this.tools ? this.tools.slice(0) : [];
			this.tools[this.collapseFirst ? "unshift" : "push"]({
						id : "toggle",
						handler : this.toggleCollapse,
						scope : this
					})
		}
		if (this.tools) {
			j = this.tools;
			this.elements += (this.header !== false) ? ",header" : ""
		}
		this.tools = {};
		a.addClass(this.baseCls);
		if (h.firstChild) {
			this.header = a.down("." + this.headerCls);
			this.bwrap = a.down("." + this.bwrapCls);
			var k = this.bwrap ? this.bwrap : a;
			this.tbar = k.down("." + this.tbarCls);
			this.body = k.down("." + this.bodyCls);
			this.bbar = k.down("." + this.bbarCls);
			this.footer = k.down("." + this.footerCls);
			this.fromMarkup = true
		}
		if (this.preventBodyReset === true) {
			a.addClass("x-panel-reset")
		}
		if (this.cls) {
			a.addClass(this.cls)
		}
		if (this.buttons) {
			this.elements += ",footer"
		}
		if (this.frame) {
			a.insertHtml("afterBegin", String.format(Ext.Element.boxMarkup,
							this.baseCls));
			this.createElement("header", h.firstChild.firstChild.firstChild);
			this.createElement("bwrap", h);
			l = this.bwrap.dom;
			var c = h.childNodes[1], b = h.childNodes[2];
			l.appendChild(c);
			l.appendChild(b);
			var m = l.firstChild.firstChild.firstChild;
			this.createElement("tbar", m);
			this.createElement("body", m);
			this.createElement("bbar", m);
			this.createElement("footer", l.lastChild.firstChild.firstChild);
			if (!this.footer) {
				this.bwrap.dom.lastChild.className += " x-panel-nofooter"
			}
			this.ft = Ext.get(this.bwrap.dom.lastChild);
			this.mc = Ext.get(m)
		} else {
			this.createElement("header", h);
			this.createElement("bwrap", h);
			l = this.bwrap.dom;
			this.createElement("tbar", l);
			this.createElement("body", l);
			this.createElement("bbar", l);
			this.createElement("footer", l);
			if (!this.header) {
				this.body.addClass(this.bodyCls + "-noheader");
				if (this.tbar) {
					this.tbar.addClass(this.tbarCls + "-noheader")
				}
			}
		}
		if (Ext.isDefined(this.padding)) {
			this.body.setStyle("padding", this.body.addUnits(this.padding))
		}
		if (this.border === false) {
			this.el.addClass(this.baseCls + "-noborder");
			this.body.addClass(this.bodyCls + "-noborder");
			if (this.header) {
				this.header.addClass(this.headerCls + "-noborder")
			}
			if (this.footer) {
				this.footer.addClass(this.footerCls + "-noborder")
			}
			if (this.tbar) {
				this.tbar.addClass(this.tbarCls + "-noborder")
			}
			if (this.bbar) {
				this.bbar.addClass(this.bbarCls + "-noborder")
			}
		}
		if (this.bodyBorder === false) {
			this.body.addClass(this.bodyCls + "-noborder")
		}
		this.bwrap.enableDisplayMode("block");
		if (this.header) {
			this.header.unselectable();
			if (this.headerAsText) {
				this.header.dom.innerHTML = '<span class="'
						+ this.headerTextCls + '">' + this.header.dom.innerHTML
						+ "</span>";
				if (this.iconCls) {
					this.setIconClass(this.iconCls)
				}
			}
		}
		if (this.floating) {
			this.makeFloating(this.floating)
		}
		if (this.collapsible && this.titleCollapse && this.header) {
			this.mon(this.header, "click", this.toggleCollapse, this);
			this.header.setStyle("cursor", "pointer")
		}
		if (j) {
			this.addTool.apply(this, j)
		}
		if (this.fbar) {
			this.footer.addClass("x-panel-btns");
			this.fbar.render(this.footer);
			this.footer.createChild({
						cls : "x-clear"
					})
		}
		if (this.tbar && this.topToolbar) {
			this.topToolbar.render(this.tbar)
		}
		if (this.bbar && this.bottomToolbar) {
			this.bottomToolbar.render(this.bbar)
		}
	},
	setIconClass : function(b) {
		var a = this.iconCls;
		this.iconCls = b;
		if (this.rendered && this.header) {
			if (this.frame) {
				this.header.addClass("x-panel-icon");
				this.header.replaceClass(a, this.iconCls)
			} else {
				var d = this.header, c = d.child("img.x-panel-inline-icon");
				if (c) {
					Ext.fly(c).replaceClass(a, this.iconCls)
				} else {
					Ext.DomHelper.insertBefore(d.dom.firstChild, {
								tag : "img",
								src : Ext.BLANK_IMAGE_URL,
								cls : "x-panel-inline-icon " + this.iconCls
							})
				}
			}
		}
		this.fireEvent("iconchange", this, b, a)
	},
	makeFloating : function(a) {
		this.floating = true;
		this.el = new Ext.Layer(Ext.apply({}, a, {
					shadow : Ext.isDefined(this.shadow) ? this.shadow : "sides",
					shadowOffset : this.shadowOffset,
					constrain : false,
					shim : this.shim === false ? false : undefined
				}), this.el)
	},
	getTopToolbar : function() {
		return this.topToolbar
	},
	getBottomToolbar : function() {
		return this.bottomToolbar
	},
	addButton : function(a, c, b) {
		if (!this.fbar) {
			this.createFbar([])
		}
		if (c) {
			if (Ext.isString(a)) {
				a = {
					text : a
				}
			}
			a = Ext.apply({
						handler : c,
						scope : b
					}, a)
		}
		return this.fbar.add(a)
	},
	addTool : function() {
		if (!this.rendered) {
			if (!this.tools) {
				this.tools = []
			}
			Ext.each(arguments, function(a) {
						this.tools.push(a)
					}, this);
			return
		}
		if (!this[this.toolTarget]) {
			return
		}
		if (!this.toolTemplate) {
			var h = new Ext.Template('<div class="x-tool x-tool-{id}">&#160;</div>');
			h.disableFormats = true;
			h.compile();
			Ext.Panel.prototype.toolTemplate = h
		}
		for (var g = 0, d = arguments, c = d.length; g < c; g++) {
			var b = d[g];
			if (!this.tools[b.id]) {
				var j = "x-tool-" + b.id + "-over";
				var e = this.toolTemplate.insertFirst((b.align !== "left")
								? this[this.toolTarget]
								: this[this.toolTarget].child("span"), b, true);
				this.tools[b.id] = e;
				e.enableDisplayMode("block");
				this.mon(e, "click", this.createToolHandler(e, b, j, this));
				if (b.on) {
					this.mon(e, b.on)
				}
				if (b.hidden) {
					e.hide()
				}
				if (b.qtip) {
					if (Ext.isObject(b.qtip)) {
						Ext.QuickTips.register(Ext.apply({
									target : e.id
								}, b.qtip))
					} else {
						e.dom.qtip = b.qtip
					}
				}
				e.addClassOnOver(j)
			}
		}
	},
	onLayout : function(b, a) {
		if (this.hasLayout && this.toolbars.length > 0) {
			Ext.each(this.toolbars, function(c) {
						c.doLayout(undefined, a)
					});
			this.syncHeight()
		}
	},
	syncHeight : function() {
		var b = this.toolbarHeight, c = this.body, a = this.lastSize.height, d;
		if (this.autoHeight || !Ext.isDefined(a) || a == "auto") {
			return
		}
		if (b != this.getToolbarHeight()) {
			b = Math.max(0, this.adjustBodyHeight(a - this.getFrameHeight()));
			c.setHeight(b);
			d = c.getSize();
			this.toolbarHeight = this.getToolbarHeight();
			this.onBodyResize(d.width, d.height)
		}
	},
	onShow : function() {
		if (this.floating) {
			return this.el.show()
		}
		Ext.Panel.superclass.onShow.call(this)
	},
	onHide : function() {
		if (this.floating) {
			return this.el.hide()
		}
		Ext.Panel.superclass.onHide.call(this)
	},
	createToolHandler : function(c, a, d, b) {
		return function(g) {
			c.removeClass(d);
			if (a.stopEvent !== false) {
				g.stopEvent()
			}
			if (a.handler) {
				a.handler.call(a.scope || c, g, c, b, a)
			}
		}
	},
	afterRender : function() {
		if (this.floating && !this.hidden) {
			this.el.show()
		}
		if (this.title) {
			this.setTitle(this.title)
		}
		if (this.collapsed) {
			this.collapsed = false;
			this.collapse(false)
		}
		Ext.Panel.superclass.afterRender.call(this);
		this.initEvents()
	},
	getKeyMap : function() {
		if (!this.keyMap) {
			this.keyMap = new Ext.KeyMap(this.el, this.keys)
		}
		return this.keyMap
	},
	initEvents : function() {
		if (this.keys) {
			this.getKeyMap()
		}
		if (this.draggable) {
			this.initDraggable()
		}
		if (this.toolbars.length > 0) {
			Ext.each(this.toolbars, function(a) {
						a.doLayout();
						a.on({
									scope : this,
									afterlayout : this.syncHeight,
									remove : this.syncHeight
								})
					}, this);
			if (!this.ownerCt) {
				this.syncHeight()
			}
		}
	},
	initDraggable : function() {
		this.dd = new Ext.Panel.DD(this, Ext.isBoolean(this.draggable)
						? null
						: this.draggable)
	},
	beforeEffect : function(a) {
		if (this.floating) {
			this.el.beforeAction()
		}
		if (a !== false) {
			this.el.addClass("x-panel-animated")
		}
	},
	afterEffect : function(a) {
		this.syncShadow();
		if (a !== false) {
			this.el.removeClass("x-panel-animated")
		}
	},
	createEffect : function(c, b, d) {
		var e = {
			scope : d,
			block : true
		};
		if (c === true) {
			e.callback = b;
			return e
		} else {
			if (!c.callback) {
				e.callback = b
			} else {
				e.callback = function() {
					b.call(d);
					Ext.callback(c.callback, c.scope)
				}
			}
		}
		return Ext.applyIf(e, c)
	},
	collapse : function(b) {
		if (this.collapsed || this.el.hasFxBlock()
				|| this.fireEvent("beforecollapse", this, b) === false) {
			return
		}
		var a = b === true || (b !== false && this.animCollapse);
		this.beforeEffect(a);
		this.onCollapse(a, b);
		return this
	},
	onCollapse : function(a, b) {
		if (a) {
			this[this.collapseEl].slideOut(this.slideAnchor, Ext.apply(this
									.createEffect(b || true,
											this.afterCollapse, this),
							this.collapseDefaults))
		} else {
			this[this.collapseEl].hide();
			this.afterCollapse(false)
		}
	},
	afterCollapse : function(a) {
		this.collapsed = true;
		this.el.addClass(this.collapsedCls);
		this.afterEffect(a);
		this.fireEvent("collapse", this)
	},
	expand : function(b) {
		if (!this.collapsed || this.el.hasFxBlock()
				|| this.fireEvent("beforeexpand", this, b) === false) {
			return
		}
		var a = b === true || (b !== false && this.animCollapse);
		this.el.removeClass(this.collapsedCls);
		this.beforeEffect(a);
		this.onExpand(a, b);
		return this
	},
	onExpand : function(a, b) {
		if (a) {
			this[this.collapseEl].slideIn(this.slideAnchor, Ext.apply(this
									.createEffect(b || true, this.afterExpand,
											this), this.expandDefaults))
		} else {
			this[this.collapseEl].show();
			this.afterExpand(false)
		}
	},
	afterExpand : function(a) {
		this.collapsed = false;
		this.afterEffect(a);
		if (Ext.isDefined(this.deferLayout)) {
			this.doLayout(true)
		}
		this.fireEvent("expand", this)
	},
	toggleCollapse : function(a) {
		this[this.collapsed ? "expand" : "collapse"](a);
		return this
	},
	onDisable : function() {
		if (this.rendered && this.maskDisabled) {
			this.el.mask()
		}
		Ext.Panel.superclass.onDisable.call(this)
	},
	onEnable : function() {
		if (this.rendered && this.maskDisabled) {
			this.el.unmask()
		}
		Ext.Panel.superclass.onEnable.call(this)
	},
	onResize : function(a, b) {
		if (Ext.isDefined(a) || Ext.isDefined(b)) {
			if (!this.collapsed) {
				if (Ext.isNumber(a)) {
					this.body.setWidth(a = this.adjustBodyWidth(a
							- this.getFrameWidth()))
				} else {
					if (a == "auto") {
						a = this.body.setWidth("auto").dom.offsetWidth
					} else {
						a = this.body.dom.offsetWidth
					}
				}
				if (this.tbar) {
					this.tbar.setWidth(a);
					if (this.topToolbar) {
						this.topToolbar.setSize(a)
					}
				}
				if (this.bbar) {
					this.bbar.setWidth(a);
					if (this.bottomToolbar) {
						this.bottomToolbar.setSize(a);
						if (Ext.isIE) {
							this.bbar.setStyle("position", "static");
							this.bbar.setStyle("position", "")
						}
					}
				}
				if (this.footer) {
					this.footer.setWidth(a);
					if (this.fbar) {
						this.fbar.setSize(Ext.isIE ? (a - this.footer
								.getFrameWidth("lr")) : "auto")
					}
				}
				if (Ext.isNumber(b)) {
					b = Math.max(0, this.adjustBodyHeight(b
									- this.getFrameHeight()));
					this.body.setHeight(b)
				} else {
					if (b == "auto") {
						this.body.setHeight(b)
					}
				}
				if (this.disabled && this.el._mask) {
					this.el._mask.setSize(this.el.dom.clientWidth, this.el
									.getHeight())
				}
			} else {
				this.queuedBodySize = {
					width : a,
					height : b
				};
				if (!this.queuedExpand && this.allowQueuedExpand !== false) {
					this.queuedExpand = true;
					this.on("expand", function() {
								delete this.queuedExpand;
								this.onResize(this.queuedBodySize.width,
										this.queuedBodySize.height)
							}, this, {
								single : true
							})
				}
			}
			this.onBodyResize(a, b)
		}
		this.syncShadow();
		Ext.Panel.superclass.onResize.call(this)
	},
	onBodyResize : function(a, b) {
		this.fireEvent("bodyresize", this, a, b)
	},
	getToolbarHeight : function() {
		var a = 0;
		if (this.rendered) {
			Ext.each(this.toolbars, function(b) {
						a += b.getHeight()
					}, this)
		}
		return a
	},
	adjustBodyHeight : function(a) {
		return a
	},
	adjustBodyWidth : function(a) {
		return a
	},
	onPosition : function() {
		this.syncShadow()
	},
	getFrameWidth : function() {
		var b = this.el.getFrameWidth("lr") + this.bwrap.getFrameWidth("lr");
		if (this.frame) {
			var a = this.bwrap.dom.firstChild;
			b += (Ext.fly(a).getFrameWidth("l") + Ext.fly(a.firstChild)
					.getFrameWidth("r"));
			b += this.mc.getFrameWidth("lr")
		}
		return b
	},
	getFrameHeight : function() {
		var a = this.el.getFrameWidth("tb") + this.bwrap.getFrameWidth("tb");
		a += (this.tbar ? this.tbar.getHeight() : 0)
				+ (this.bbar ? this.bbar.getHeight() : 0);
		if (this.frame) {
			a += this.el.dom.firstChild.offsetHeight + this.ft.dom.offsetHeight
					+ this.mc.getFrameWidth("tb")
		} else {
			a += (this.header ? this.header.getHeight() : 0)
					+ (this.footer ? this.footer.getHeight() : 0)
		}
		return a
	},
	getInnerWidth : function() {
		return this.getSize().width - this.getFrameWidth()
	},
	getInnerHeight : function() {
		return this.getSize().height - this.getFrameHeight()
	},
	syncShadow : function() {
		if (this.floating) {
			this.el.sync(true)
		}
	},
	getLayoutTarget : function() {
		return this.body
	},
	getContentTarget : function() {
		return this.body
	},
	setTitle : function(b, a) {
		this.title = b;
		if (this.header && this.headerAsText) {
			this.header.child("span").update(b)
		}
		if (a) {
			this.setIconClass(a)
		}
		this.fireEvent("titlechange", this, b);
		return this
	},
	getUpdater : function() {
		return this.body.getUpdater()
	},
	load : function() {
		var a = this.body.getUpdater();
		a.update.apply(a, arguments);
		return this
	},
	beforeDestroy : function() {
		Ext.Panel.superclass.beforeDestroy.call(this);
		if (this.header) {
			this.header.removeAllListeners()
		}
		if (this.tools) {
			for (var a in this.tools) {
				Ext.destroy(this.tools[a])
			}
		}
		if (Ext.isArray(this.buttons)) {
			while (this.buttons.length) {
				Ext.destroy(this.buttons[0])
			}
		}
		if (this.rendered) {
			Ext.destroy(this.ft, this.header, this.footer, this.toolbars,
					this.tbar, this.bbar, this.body, this.mc, this.bwrap);
			if (this.fbar) {
				Ext.destroy(this.fbar, this.fbar.el)
			}
		} else {
			Ext.destroy(this.topToolbar, this.bottomToolbar)
		}
	},
	createClasses : function() {
		this.headerCls = this.baseCls + "-header";
		this.headerTextCls = this.baseCls + "-header-text";
		this.bwrapCls = this.baseCls + "-bwrap";
		this.tbarCls = this.baseCls + "-tbar";
		this.bodyCls = this.baseCls + "-body";
		this.bbarCls = this.baseCls + "-bbar";
		this.footerCls = this.baseCls + "-footer"
	},
	createGhost : function(a, e, b) {
		var d = document.createElement("div");
		d.className = "x-panel-ghost " + (a ? a : "");
		if (this.header) {
			d.appendChild(this.el.dom.firstChild.cloneNode(true))
		}
		Ext.fly(d.appendChild(document.createElement("ul")))
				.setHeight(this.bwrap.getHeight());
		d.style.width = this.el.dom.offsetWidth + "px";
		if (!b) {
			this.container.dom.appendChild(d)
		} else {
			Ext.getDom(b).appendChild(d)
		}
		if (e !== false && this.el.useShim !== false) {
			var c = new Ext.Layer({
						shadow : false,
						useDisplay : true,
						constrain : false
					}, d);
			c.show();
			return c
		} else {
			return new Ext.Element(d)
		}
	},
	doAutoLoad : function() {
		var a = this.body.getUpdater();
		if (this.renderer) {
			a.setRenderer(this.renderer)
		}
		a.update(Ext.isObject(this.autoLoad) ? this.autoLoad : {
			url : this.autoLoad
		})
	},
	getTool : function(a) {
		return this.tools[a]
	}
});
Ext.reg("panel", Ext.Panel);
Ext.Editor = function(b, a) {
	if (b.field) {
		this.field = Ext.create(b.field, "textfield");
		a = Ext.apply({}, b);
		delete a.field
	} else {
		this.field = b
	}
	Ext.Editor.superclass.constructor.call(this, a)
};
Ext.extend(Ext.Editor, Ext.Component, {
	value : "",
	alignment : "c-c?",
	offsets : [0, 0],
	shadow : "frame",
	constrain : false,
	swallowKeys : true,
	completeOnEnter : true,
	cancelOnEsc : true,
	updateEl : false,
	initComponent : function() {
		Ext.Editor.superclass.initComponent.call(this);
		this.addEvents("beforestartedit", "startedit", "beforecomplete",
				"complete", "canceledit", "specialkey")
	},
	onRender : function(b, a) {
		this.el = new Ext.Layer({
					shadow : this.shadow,
					cls : "x-editor",
					parentEl : b,
					shim : this.shim,
					shadowOffset : this.shadowOffset || 4,
					id : this.id,
					constrain : this.constrain
				});
		if (this.zIndex) {
			this.el.setZIndex(this.zIndex)
		}
		this.el.setStyle("overflow", Ext.isGecko ? "auto" : "hidden");
		if (this.field.msgTarget != "title") {
			this.field.msgTarget = "qtip"
		}
		this.field.inEditor = true;
		this.mon(this.field, {
					scope : this,
					blur : this.onBlur,
					specialkey : this.onSpecialKey
				});
		if (this.field.grow) {
			this.mon(this.field, "autosize", this.el.sync, this.el, {
						delay : 1
					})
		}
		this.field.render(this.el).show();
		this.field.getEl().dom.name = "";
		if (this.swallowKeys) {
			this.field.el.swallowEvent(["keypress", "keydown"])
		}
	},
	onSpecialKey : function(g, d) {
		var b = d.getKey(), a = this.completeOnEnter && b == d.ENTER, c = this.cancelOnEsc
				&& b == d.ESC;
		if (a || c) {
			d.stopEvent();
			if (a) {
				this.completeEdit()
			} else {
				this.cancelEdit()
			}
			if (g.triggerBlur) {
				g.triggerBlur()
			}
		}
		this.fireEvent("specialkey", g, d)
	},
	startEdit : function(b, c) {
		if (this.editing) {
			this.completeEdit()
		}
		this.boundEl = Ext.get(b);
		var a = c !== undefined ? c : this.boundEl.dom.innerHTML;
		if (!this.rendered) {
			this.render(this.parentEl || document.body)
		}
		if (this.fireEvent("beforestartedit", this, this.boundEl, a) !== false) {
			this.startValue = a;
			this.field.reset();
			this.field.setValue(a);
			this.realign(true);
			this.editing = true;
			this.show()
		}
	},
	doAutoSize : function() {
		if (this.autoSize) {
			var b = this.boundEl.getSize(), a = this.field.getSize();
			switch (this.autoSize) {
				case "width" :
					this.setSize(b.width, a.height);
					break;
				case "height" :
					this.setSize(a.width, b.height);
					break;
				case "none" :
					this.setSize(a.width, a.height);
					break;
				default :
					this.setSize(b.width, b.height)
			}
		}
	},
	setSize : function(a, b) {
		delete this.field.lastSize;
		this.field.setSize(a, b);
		if (this.el) {
			if (Ext.isGecko2 || Ext.isOpera) {
				this.el.setSize(a, b)
			}
			this.el.sync()
		}
	},
	realign : function(a) {
		if (a === true) {
			this.doAutoSize()
		}
		this.el.alignTo(this.boundEl, this.alignment, this.offsets)
	},
	completeEdit : function(a) {
		if (!this.editing) {
			return
		}
		var b = this.getValue();
		if (!this.field.isValid()) {
			if (this.revertInvalid !== false) {
				this.cancelEdit(a)
			}
			return
		}
		if (String(b) === String(this.startValue) && this.ignoreNoChange) {
			this.hideEdit(a);
			return
		}
		if (this.fireEvent("beforecomplete", this, b, this.startValue) !== false) {
			b = this.getValue();
			if (this.updateEl && this.boundEl) {
				this.boundEl.update(b)
			}
			this.hideEdit(a);
			this.fireEvent("complete", this, b, this.startValue)
		}
	},
	onShow : function() {
		this.el.show();
		if (this.hideEl !== false) {
			this.boundEl.hide()
		}
		this.field.show().focus(false, true);
		this.fireEvent("startedit", this.boundEl, this.startValue)
	},
	cancelEdit : function(a) {
		if (this.editing) {
			var b = this.getValue();
			this.setValue(this.startValue);
			this.hideEdit(a);
			this.fireEvent("canceledit", this, b, this.startValue)
		}
	},
	hideEdit : function(a) {
		if (a !== true) {
			this.editing = false;
			this.hide()
		}
	},
	onBlur : function() {
		if (this.allowBlur !== true && this.editing) {
			this.completeEdit()
		}
	},
	onHide : function() {
		if (this.editing) {
			this.completeEdit();
			return
		}
		this.field.blur();
		if (this.field.collapse) {
			this.field.collapse()
		}
		this.el.hide();
		if (this.hideEl !== false) {
			this.boundEl.show()
		}
	},
	setValue : function(a) {
		this.field.setValue(a)
	},
	getValue : function() {
		return this.field.getValue()
	},
	beforeDestroy : function() {
		Ext.destroyMembers(this, "field");
		delete this.parentEl;
		delete this.boundEl
	}
});
Ext.reg("editor", Ext.Editor);
Ext.ColorPalette = Ext.extend(Ext.Component, {
	itemCls : "x-color-palette",
	value : null,
	clickEvent : "click",
	ctype : "Ext.ColorPalette",
	allowReselect : false,
	colors : ["000000", "993300", "333300", "003300", "003366", "000080",
			"333399", "333333", "800000", "FF6600", "808000", "008000",
			"008080", "0000FF", "666699", "808080", "FF0000", "FF9900",
			"99CC00", "339966", "33CCCC", "3366FF", "800080", "969696",
			"FF00FF", "FFCC00", "FFFF00", "00FF00", "00FFFF", "00CCFF",
			"993366", "C0C0C0", "FF99CC", "FFCC99", "FFFF99", "CCFFCC",
			"CCFFFF", "99CCFF", "CC99FF", "FFFFFF"],
	initComponent : function() {
		Ext.ColorPalette.superclass.initComponent.call(this);
		this.addEvents("select");
		if (this.handler) {
			this.on("select", this.handler, this.scope, true)
		}
	},
	onRender : function(b, a) {
		this.autoEl = {
			tag : "div",
			cls : this.itemCls
		};
		Ext.ColorPalette.superclass.onRender.call(this, b, a);
		var c = this.tpl
				|| new Ext.XTemplate('<tpl for="."><a href="#" class="color-{.}" hidefocus="on"><em><span style="background:#{.}" unselectable="on">&#160;</span></em></a></tpl>');
		c.overwrite(this.el, this.colors);
		this.mon(this.el, this.clickEvent, this.handleClick, this, {
					delegate : "a"
				});
		if (this.clickEvent != "click") {
			this.mon(this.el, "click", Ext.emptyFn, this, {
						delegate : "a",
						preventDefault : true
					})
		}
	},
	afterRender : function() {
		Ext.ColorPalette.superclass.afterRender.call(this);
		if (this.value) {
			var a = this.value;
			this.value = null;
			this.select(a)
		}
	},
	handleClick : function(b, a) {
		b.preventDefault();
		if (!this.disabled) {
			var d = a.className.match(/(?:^|\s)color-(.{6})(?:\s|$)/)[1];
			this.select(d.toUpperCase())
		}
	},
	select : function(a) {
		a = a.replace("#", "");
		if (a != this.value || this.allowReselect) {
			var b = this.el;
			if (this.value) {
				b.child("a.color-" + this.value)
						.removeClass("x-color-palette-sel")
			}
			b.child("a.color-" + a).addClass("x-color-palette-sel");
			this.value = a;
			this.fireEvent("select", this, a)
		}
	}
});
Ext.reg("colorpalette", Ext.ColorPalette);
Ext.DatePicker = Ext.extend(Ext.BoxComponent, {
	todayText : "Today",
	okText : "&#160;OK&#160;",
	cancelText : "Cancel",
	todayTip : "{0} (Spacebar)",
	minText : "This date is before the minimum date",
	maxText : "This date is after the maximum date",
	format : "m/d/y",
	disabledDaysText : "Disabled",
	disabledDatesText : "Disabled",
	monthNames : Date.monthNames,
	dayNames : Date.dayNames,
	nextText : "Next Month (Control+Right)",
	prevText : "Previous Month (Control+Left)",
	monthYearText : "Choose a month (Control+Up/Down to move years)",
	startDay : 0,
	showToday : true,
	focusOnSelect : true,
	initComponent : function() {
		Ext.DatePicker.superclass.initComponent.call(this);
		this.value = this.value ? this.value.clearTime(true) : new Date()
				.clearTime();
		this.addEvents("select");
		if (this.handler) {
			this.on("select", this.handler, this.scope || this)
		}
		this.initDisabledDays()
	},
	initDisabledDays : function() {
		if (!this.disabledDatesRE && this.disabledDates) {
			var b = this.disabledDates, a = b.length - 1, c = "(?:";
			Ext.each(b, function(g, e) {
						c += Ext.isDate(g)
								? "^" + Ext.escapeRe(g.dateFormat(this.format))
										+ "$"
								: b[e];
						if (e != a) {
							c += "|"
						}
					}, this);
			this.disabledDatesRE = new RegExp(c + ")")
		}
	},
	setDisabledDates : function(a) {
		if (Ext.isArray(a)) {
			this.disabledDates = a;
			this.disabledDatesRE = null
		} else {
			this.disabledDatesRE = a
		}
		this.initDisabledDays();
		this.update(this.value, true)
	},
	setDisabledDays : function(a) {
		this.disabledDays = a;
		this.update(this.value, true)
	},
	setMinDate : function(a) {
		this.minDate = a;
		this.update(this.value, true)
	},
	setMaxDate : function(a) {
		this.maxDate = a;
		this.update(this.value, true)
	},
	setValue : function(a) {
		this.value = a.clearTime(true);
		this.update(this.value)
	},
	getValue : function() {
		return this.value
	},
	focus : function() {
		this.update(this.activeDate)
	},
	onEnable : function(a) {
		Ext.DatePicker.superclass.onEnable.call(this);
		this.doDisabled(false);
		this.update(a ? this.value : this.activeDate);
		if (Ext.isIE) {
			this.el.repaint()
		}
	},
	onDisable : function() {
		Ext.DatePicker.superclass.onDisable.call(this);
		this.doDisabled(true);
		if (Ext.isIE && !Ext.isIE8) {
			Ext.each([].concat(this.textNodes, this.el.query("th span")),
					function(a) {
						Ext.fly(a).repaint()
					})
		}
	},
	doDisabled : function(a) {
		this.keyNav.setDisabled(a);
		this.prevRepeater.setDisabled(a);
		this.nextRepeater.setDisabled(a);
		if (this.showToday) {
			this.todayKeyListener.setDisabled(a);
			this.todayBtn.setDisabled(a)
		}
	},
	onRender : function(e, b) {
		var a = [
				'<table cellspacing="0">',
				'<tr><td class="x-date-left"><a href="#" title="',
				this.prevText,
				'">&#160;</a></td><td class="x-date-middle" align="center"></td><td class="x-date-right"><a href="#" title="',
				this.nextText, '">&#160;</a></td></tr>',
				'<tr><td colspan="3"><table class="x-date-inner" cellspacing="0"><thead><tr>'], c = this.dayNames, h;
		for (h = 0; h < 7; h++) {
			var k = this.startDay + h;
			if (k > 6) {
				k = k - 7
			}
			a.push("<th><span>", c[k].substr(0, 1), "</span></th>")
		}
		a[a.length] = "</tr></thead><tbody><tr>";
		for (h = 0; h < 42; h++) {
			if (h % 7 === 0 && h !== 0) {
				a[a.length] = "</tr><tr>"
			}
			a[a.length] = '<td><a href="#" hidefocus="on" class="x-date-date" tabIndex="1"><em><span></span></em></a></td>'
		}
		a
				.push(
						"</tr></tbody></table></td></tr>",
						this.showToday
								? '<tr><td colspan="3" class="x-date-bottom" align="center"></td></tr>'
								: "", '</table><div class="x-date-mp"></div>');
		var j = document.createElement("div");
		j.className = "x-date-picker";
		j.innerHTML = a.join("");
		e.dom.insertBefore(j, b);
		this.el = Ext.get(j);
		this.eventEl = Ext.get(j.firstChild);
		this.prevRepeater = new Ext.util.ClickRepeater(this.el
						.child("td.x-date-left a"), {
					handler : this.showPrevMonth,
					scope : this,
					preventDefault : true,
					stopDefault : true
				});
		this.nextRepeater = new Ext.util.ClickRepeater(this.el
						.child("td.x-date-right a"), {
					handler : this.showNextMonth,
					scope : this,
					preventDefault : true,
					stopDefault : true
				});
		this.monthPicker = this.el.down("div.x-date-mp");
		this.monthPicker.enableDisplayMode("block");
		this.keyNav = new Ext.KeyNav(this.eventEl, {
					left : function(d) {
						if (d.ctrlKey) {
							this.showPrevMonth()
						} else {
							this.update(this.activeDate.add("d", -1))
						}
					},
					right : function(d) {
						if (d.ctrlKey) {
							this.showNextMonth()
						} else {
							this.update(this.activeDate.add("d", 1))
						}
					},
					up : function(d) {
						if (d.ctrlKey) {
							this.showNextYear()
						} else {
							this.update(this.activeDate.add("d", -7))
						}
					},
					down : function(d) {
						if (d.ctrlKey) {
							this.showPrevYear()
						} else {
							this.update(this.activeDate.add("d", 7))
						}
					},
					pageUp : function(d) {
						this.showNextMonth()
					},
					pageDown : function(d) {
						this.showPrevMonth()
					},
					enter : function(d) {
						d.stopPropagation();
						return true
					},
					scope : this
				});
		this.el.unselectable();
		this.cells = this.el.select("table.x-date-inner tbody td");
		this.textNodes = this.el.query("table.x-date-inner tbody span");
		this.mbtn = new Ext.Button({
					text : "&#160;",
					tooltip : this.monthYearText,
					renderTo : this.el.child("td.x-date-middle", true)
				});
		this.mbtn.el.child("em").addClass("x-btn-arrow");
		if (this.showToday) {
			this.todayKeyListener = this.eventEl.addKeyListener(
					Ext.EventObject.SPACE, this.selectToday, this);
			var g = (new Date()).dateFormat(this.format);
			this.todayBtn = new Ext.Button({
						renderTo : this.el.child("td.x-date-bottom", true),
						text : String.format(this.todayText, g),
						tooltip : String.format(this.todayTip, g),
						handler : this.selectToday,
						scope : this
					})
		}
		this.mon(this.eventEl, "mousewheel", this.handleMouseWheel, this);
		this.mon(this.eventEl, "click", this.handleDateClick, this, {
					delegate : "a.x-date-date"
				});
		this.mon(this.mbtn, "click", this.showMonthPicker, this);
		this.onEnable(true)
	},
	createMonthPicker : function() {
		if (!this.monthPicker.dom.firstChild) {
			var a = ['<table border="0" cellspacing="0">'];
			for (var b = 0; b < 6; b++) {
				a
						.push(
								'<tr><td class="x-date-mp-month"><a href="#">',
								Date.getShortMonthName(b),
								"</a></td>",
								'<td class="x-date-mp-month x-date-mp-sep"><a href="#">',
								Date.getShortMonthName(b + 6),
								"</a></td>",
								b === 0
										? '<td class="x-date-mp-ybtn" align="center"><a class="x-date-mp-prev"></a></td><td class="x-date-mp-ybtn" align="center"><a class="x-date-mp-next"></a></td></tr>'
										: '<td class="x-date-mp-year"><a href="#"></a></td><td class="x-date-mp-year"><a href="#"></a></td></tr>')
			}
			a
					.push(
							'<tr class="x-date-mp-btns"><td colspan="4"><button type="button" class="x-date-mp-ok">',
							this.okText,
							'</button><button type="button" class="x-date-mp-cancel">',
							this.cancelText, "</button></td></tr>", "</table>");
			this.monthPicker.update(a.join(""));
			this.mon(this.monthPicker, "click", this.onMonthClick, this);
			this.mon(this.monthPicker, "dblclick", this.onMonthDblClick, this);
			this.mpMonths = this.monthPicker.select("td.x-date-mp-month");
			this.mpYears = this.monthPicker.select("td.x-date-mp-year");
			this.mpMonths.each(function(c, d, e) {
						e += 1;
						if ((e % 2) === 0) {
							c.dom.xmonth = 5 + Math.round(e * 0.5)
						} else {
							c.dom.xmonth = Math.round((e - 1) * 0.5)
						}
					})
		}
	},
	showMonthPicker : function() {
		if (!this.disabled) {
			this.createMonthPicker();
			var a = this.el.getSize();
			this.monthPicker.setSize(a);
			this.monthPicker.child("table").setSize(a);
			this.mpSelMonth = (this.activeDate || this.value).getMonth();
			this.updateMPMonth(this.mpSelMonth);
			this.mpSelYear = (this.activeDate || this.value).getFullYear();
			this.updateMPYear(this.mpSelYear);
			this.monthPicker.slideIn("t", {
						duration : 0.2
					})
		}
	},
	updateMPYear : function(e) {
		this.mpyear = e;
		var c = this.mpYears.elements;
		for (var b = 1; b <= 10; b++) {
			var d = c[b - 1], a;
			if ((b % 2) === 0) {
				a = e + Math.round(b * 0.5);
				d.firstChild.innerHTML = a;
				d.xyear = a
			} else {
				a = e - (5 - Math.round(b * 0.5));
				d.firstChild.innerHTML = a;
				d.xyear = a
			}
			this.mpYears.item(b - 1)[a == this.mpSelYear
					? "addClass"
					: "removeClass"]("x-date-mp-sel")
		}
	},
	updateMPMonth : function(a) {
		this.mpMonths.each(function(b, c, d) {
					b[b.dom.xmonth == a ? "addClass" : "removeClass"]("x-date-mp-sel")
				})
	},
	selectMPMonth : function(a) {
	},
	onMonthClick : function(g, b) {
		g.stopEvent();
		var c = new Ext.Element(b), a;
		if (c.is("button.x-date-mp-cancel")) {
			this.hideMonthPicker()
		} else {
			if (c.is("button.x-date-mp-ok")) {
				var h = new Date(this.mpSelYear, this.mpSelMonth,
						(this.activeDate || this.value).getDate());
				if (h.getMonth() != this.mpSelMonth) {
					h = new Date(this.mpSelYear, this.mpSelMonth, 1)
							.getLastDateOfMonth()
				}
				this.update(h);
				this.hideMonthPicker()
			} else {
				if ((a = c.up("td.x-date-mp-month", 2))) {
					this.mpMonths.removeClass("x-date-mp-sel");
					a.addClass("x-date-mp-sel");
					this.mpSelMonth = a.dom.xmonth
				} else {
					if ((a = c.up("td.x-date-mp-year", 2))) {
						this.mpYears.removeClass("x-date-mp-sel");
						a.addClass("x-date-mp-sel");
						this.mpSelYear = a.dom.xyear
					} else {
						if (c.is("a.x-date-mp-prev")) {
							this.updateMPYear(this.mpyear - 10)
						} else {
							if (c.is("a.x-date-mp-next")) {
								this.updateMPYear(this.mpyear + 10)
							}
						}
					}
				}
			}
		}
	},
	onMonthDblClick : function(d, b) {
		d.stopEvent();
		var c = new Ext.Element(b), a;
		if ((a = c.up("td.x-date-mp-month", 2))) {
			this.update(new Date(this.mpSelYear, a.dom.xmonth,
					(this.activeDate || this.value).getDate()));
			this.hideMonthPicker()
		} else {
			if ((a = c.up("td.x-date-mp-year", 2))) {
				this.update(new Date(a.dom.xyear, this.mpSelMonth,
						(this.activeDate || this.value).getDate()));
				this.hideMonthPicker()
			}
		}
	},
	hideMonthPicker : function(a) {
		if (this.monthPicker) {
			if (a === true) {
				this.monthPicker.hide()
			} else {
				this.monthPicker.slideOut("t", {
							duration : 0.2
						})
			}
		}
	},
	showPrevMonth : function(a) {
		this.update(this.activeDate.add("mo", -1))
	},
	showNextMonth : function(a) {
		this.update(this.activeDate.add("mo", 1))
	},
	showPrevYear : function() {
		this.update(this.activeDate.add("y", -1))
	},
	showNextYear : function() {
		this.update(this.activeDate.add("y", 1))
	},
	handleMouseWheel : function(a) {
		a.stopEvent();
		if (!this.disabled) {
			var b = a.getWheelDelta();
			if (b > 0) {
				this.showPrevMonth()
			} else {
				if (b < 0) {
					this.showNextMonth()
				}
			}
		}
	},
	handleDateClick : function(b, a) {
		b.stopEvent();
		if (!this.disabled && a.dateValue
				&& !Ext.fly(a.parentNode).hasClass("x-date-disabled")) {
			this.cancelFocus = this.focusOnSelect === false;
			this.setValue(new Date(a.dateValue));
			delete this.cancelFocus;
			this.fireEvent("select", this, this.value)
		}
	},
	selectToday : function() {
		if (this.todayBtn && !this.todayBtn.disabled) {
			this.setValue(new Date().clearTime());
			this.fireEvent("select", this, this.value)
		}
	},
	update : function(H, B) {
		if (this.rendered) {
			var a = this.activeDate, p = this.isVisible();
			this.activeDate = H;
			if (!B && a && this.el) {
				var o = H.getTime();
				if (a.getMonth() == H.getMonth()
						&& a.getFullYear() == H.getFullYear()) {
					this.cells.removeClass("x-date-selected");
					this.cells.each(function(d) {
								if (d.dom.firstChild.dateValue == o) {
									d.addClass("x-date-selected");
									if (p && !this.cancelFocus) {
										Ext.fly(d.dom.firstChild).focus(50)
									}
									return false
								}
							}, this);
					return
				}
			}
			var k = H.getDaysInMonth(), q = H.getFirstDateOfMonth(), g = q
					.getDay()
					- this.startDay;
			if (g < 0) {
				g += 7
			}
			k += g;
			var C = H.add("mo", -1), h = C.getDaysInMonth() - g, e = this.cells.elements, r = this.textNodes, z = 86400000, E = (new Date(
					C.getFullYear(), C.getMonth(), h)).clearTime(), D = new Date()
					.clearTime().getTime(), v = H.clearTime(true).getTime(), u = this.minDate
					? this.minDate.clearTime(true)
					: Number.NEGATIVE_INFINITY, y = this.maxDate ? this.maxDate
					.clearTime(true) : Number.POSITIVE_INFINITY, G = this.disabledDatesRE, s = this.disabledDatesText, J = this.disabledDays
					? this.disabledDays.join("")
					: false, F = this.disabledDaysText, A = this.format;
			if (this.showToday) {
				var m = new Date().clearTime(), c = (m < u || m > y
						|| (G && A && G.test(m.dateFormat(A))) || (J && J
						.indexOf(m.getDay()) != -1));
				if (!this.disabled) {
					this.todayBtn.setDisabled(c);
					this.todayKeyListener[c ? "disable" : "enable"]()
				}
			}
			var l = function(L, d) {
				d.title = "";
				var w = E.getTime();
				d.firstChild.dateValue = w;
				if (w == D) {
					d.className += " x-date-today";
					d.title = L.todayText
				}
				if (w == v) {
					d.className += " x-date-selected";
					if (p) {
						Ext.fly(d.firstChild).focus(50)
					}
				}
				if (w < u) {
					d.className = " x-date-disabled";
					d.title = L.minText;
					return
				}
				if (w > y) {
					d.className = " x-date-disabled";
					d.title = L.maxText;
					return
				}
				if (J) {
					if (J.indexOf(E.getDay()) != -1) {
						d.title = F;
						d.className = " x-date-disabled"
					}
				}
				if (G && A) {
					var K = E.dateFormat(A);
					if (G.test(K)) {
						d.title = s.replace("%0", K);
						d.className = " x-date-disabled"
					}
				}
			};
			var x = 0;
			for (; x < g; x++) {
				r[x].innerHTML = (++h);
				E.setDate(E.getDate() + 1);
				e[x].className = "x-date-prevday";
				l(this, e[x])
			}
			for (; x < k; x++) {
				var b = x - g + 1;
				r[x].innerHTML = (b);
				E.setDate(E.getDate() + 1);
				e[x].className = "x-date-active";
				l(this, e[x])
			}
			var I = 0;
			for (; x < 42; x++) {
				r[x].innerHTML = (++I);
				E.setDate(E.getDate() + 1);
				e[x].className = "x-date-nextday";
				l(this, e[x])
			}
			this.mbtn.setText(this.monthNames[H.getMonth()] + " "
					+ H.getFullYear());
			if (!this.internalRender) {
				var j = this.el.dom.firstChild, n = j.offsetWidth;
				this.el.setWidth(n + this.el.getBorderWidth("lr"));
				Ext.fly(j).setWidth(n);
				this.internalRender = true;
				if (Ext.isOpera && !this.secondPass) {
					j.rows[0].cells[1].style.width = (n - (j.rows[0].cells[0].offsetWidth + j.rows[0].cells[2].offsetWidth))
							+ "px";
					this.secondPass = true;
					this.update.defer(10, this, [H])
				}
			}
		}
	},
	beforeDestroy : function() {
		if (this.rendered) {
			Ext.destroy(this.keyNav, this.monthPicker, this.eventEl, this.mbtn,
					this.nextRepeater, this.prevRepeater, this.cells.el,
					this.todayBtn);
			delete this.textNodes;
			delete this.cells.elements
		}
	}
});
Ext.reg("datepicker", Ext.DatePicker);
Ext.LoadMask = function(c, b) {
	this.el = Ext.get(c);
	Ext.apply(this, b);
	if (this.store) {
		this.store.on({
					scope : this,
					beforeload : this.onBeforeLoad,
					load : this.onLoad,
					exception : this.onLoad
				});
		this.removeMask = Ext.value(this.removeMask, false)
	} else {
		var a = this.el.getUpdater();
		a.showLoadIndicator = false;
		a.on({
					scope : this,
					beforeupdate : this.onBeforeLoad,
					update : this.onLoad,
					failure : this.onLoad
				});
		this.removeMask = Ext.value(this.removeMask, true)
	}
};
Ext.LoadMask.prototype = {
	msg : "Loading...",
	msgCls : "x-mask-loading",
	disabled : false,
	disable : function() {
		this.disabled = true
	},
	enable : function() {
		this.disabled = false
	},
	onLoad : function() {
		this.el.unmask(this.removeMask)
	},
	onBeforeLoad : function() {
		if (!this.disabled) {
			this.el.mask(this.msg, this.msgCls)
		}
	},
	show : function() {
		this.onBeforeLoad()
	},
	hide : function() {
		this.onLoad()
	},
	destroy : function() {
		if (this.store) {
			this.store.un("beforeload", this.onBeforeLoad, this);
			this.store.un("load", this.onLoad, this);
			this.store.un("exception", this.onLoad, this)
		} else {
			var a = this.el.getUpdater();
			a.un("beforeupdate", this.onBeforeLoad, this);
			a.un("update", this.onLoad, this);
			a.un("failure", this.onLoad, this)
		}
	}
};
Ext.Slider = Ext.extend(Ext.BoxComponent, {
	vertical : false,
	minValue : 0,
	maxValue : 100,
	decimalPrecision : 0,
	keyIncrement : 1,
	increment : 0,
	clickRange : [5, 15],
	clickToChange : true,
	animate : true,
	dragging : false,
	initComponent : function() {
		if (!Ext.isDefined(this.value)) {
			this.value = this.minValue
		}
		Ext.Slider.superclass.initComponent.call(this);
		this.keyIncrement = Math.max(this.increment, this.keyIncrement);
		this.addEvents("beforechange", "change", "changecomplete", "dragstart",
				"drag", "dragend");
		if (this.vertical) {
			Ext.apply(this, Ext.Slider.Vertical)
		}
	},
	onRender : function() {
		this.autoEl = {
			cls : "x-slider "
					+ (this.vertical ? "x-slider-vert" : "x-slider-horz"),
			cn : {
				cls : "x-slider-end",
				cn : {
					cls : "x-slider-inner",
					cn : [{
								cls : "x-slider-thumb"
							}, {
								tag : "a",
								cls : "x-slider-focus",
								href : "#",
								tabIndex : "-1",
								hidefocus : "on"
							}]
				}
			}
		};
		Ext.Slider.superclass.onRender.apply(this, arguments);
		this.endEl = this.el.first();
		this.innerEl = this.endEl.first();
		this.thumb = this.innerEl.first();
		this.halfThumb = (this.vertical ? this.thumb.getHeight() : this.thumb
				.getWidth())
				/ 2;
		this.focusEl = this.thumb.next();
		this.initEvents()
	},
	initEvents : function() {
		this.thumb.addClassOnOver("x-slider-thumb-over");
		this.mon(this.el, {
					scope : this,
					mousedown : this.onMouseDown,
					keydown : this.onKeyDown
				});
		this.focusEl.swallowEvent("click", true);
		this.tracker = new Ext.dd.DragTracker({
					onBeforeStart : this.onBeforeDragStart.createDelegate(this),
					onStart : this.onDragStart.createDelegate(this),
					onDrag : this.onDrag.createDelegate(this),
					onEnd : this.onDragEnd.createDelegate(this),
					tolerance : 3,
					autoStart : 300
				});
		this.tracker.initEl(this.thumb)
	},
	onMouseDown : function(b) {
		if (this.disabled) {
			return
		}
		if (this.clickToChange && b.target != this.thumb.dom) {
			var a = this.innerEl.translatePoints(b.getXY());
			this.onClickChange(a)
		}
		this.focus()
	},
	onClickChange : function(a) {
		if (a.top > this.clickRange[0] && a.top < this.clickRange[1]) {
			this.setValue(Ext.util.Format.round(this.reverseValue(a.left),
							this.decimalPrecision), undefined, true)
		}
	},
	onKeyDown : function(b) {
		if (this.disabled) {
			b.preventDefault();
			return
		}
		var a = b.getKey();
		switch (a) {
			case b.UP :
			case b.RIGHT :
				b.stopEvent();
				if (b.ctrlKey) {
					this.setValue(this.maxValue, undefined, true)
				} else {
					this.setValue(this.value + this.keyIncrement, undefined,
							true)
				}
				break;
			case b.DOWN :
			case b.LEFT :
				b.stopEvent();
				if (b.ctrlKey) {
					this.setValue(this.minValue, undefined, true)
				} else {
					this.setValue(this.value - this.keyIncrement, undefined,
							true)
				}
				break;
			default :
				b.preventDefault()
		}
	},
	doSnap : function(b) {
		if (!(this.increment && b)) {
			return b
		}
		var d = b, c = this.increment, a = b % c;
		if (a != 0) {
			d -= a;
			if (a * 2 > c) {
				d += c
			} else {
				if (a * 2 < -c) {
					d -= c
				}
			}
		}
		return d.constrain(this.minValue, this.maxValue)
	},
	afterRender : function() {
		Ext.Slider.superclass.afterRender.apply(this, arguments);
		if (this.value !== undefined) {
			var a = this.normalizeValue(this.value);
			if (a !== this.value) {
				delete this.value;
				this.setValue(a, false)
			} else {
				this.moveThumb(this.translateValue(a), false)
			}
		}
	},
	getRatio : function() {
		var a = this.innerEl.getWidth(), b = this.maxValue - this.minValue;
		return b == 0 ? a : (a / b)
	},
	normalizeValue : function(a) {
		a = this.doSnap(a);
		a = Ext.util.Format.round(a, this.decimalPrecision);
		a = a.constrain(this.minValue, this.maxValue);
		return a
	},
	setValue : function(b, a, c) {
		b = this.normalizeValue(b);
		if (b !== this.value
				&& this.fireEvent("beforechange", this, b, this.value) !== false) {
			this.value = b;
			this.moveThumb(this.translateValue(b), a !== false);
			this.fireEvent("change", this, b);
			if (c) {
				this.fireEvent("changecomplete", this, b)
			}
		}
	},
	translateValue : function(a) {
		var b = this.getRatio();
		return (a * b) - (this.minValue * b) - this.halfThumb
	},
	reverseValue : function(b) {
		var a = this.getRatio();
		return (b + this.halfThumb + (this.minValue * a)) / a
	},
	moveThumb : function(b, a) {
		if (!a || this.animate === false) {
			this.thumb.setLeft(b)
		} else {
			this.thumb.shift({
						left : b,
						stopFx : true,
						duration : 0.35
					})
		}
	},
	focus : function() {
		this.focusEl.focus(10)
	},
	onBeforeDragStart : function(a) {
		return !this.disabled
	},
	onDragStart : function(a) {
		this.thumb.addClass("x-slider-thumb-drag");
		this.dragging = true;
		this.dragStartValue = this.value;
		this.fireEvent("dragstart", this, a)
	},
	onDrag : function(a) {
		var b = this.innerEl.translatePoints(this.tracker.getXY());
		this.setValue(Ext.util.Format.round(this.reverseValue(b.left),
						this.decimalPrecision), false);
		this.fireEvent("drag", this, a)
	},
	onDragEnd : function(a) {
		this.thumb.removeClass("x-slider-thumb-drag");
		this.dragging = false;
		this.fireEvent("dragend", this, a);
		if (this.dragStartValue != this.value) {
			this.fireEvent("changecomplete", this, this.value)
		}
	},
	onResize : function(a, b) {
		this.innerEl.setWidth(a
				- (this.el.getPadding("l") + this.endEl.getPadding("r")));
		this.syncThumb()
	},
	onDisable : function() {
		Ext.Slider.superclass.onDisable.call(this);
		this.thumb.addClass(this.disabledClass);
		if (Ext.isIE) {
			var a = this.thumb.getXY();
			this.thumb.hide();
			this.innerEl.addClass(this.disabledClass).dom.disabled = true;
			if (!this.thumbHolder) {
				this.thumbHolder = this.endEl.createChild({
							cls : "x-slider-thumb " + this.disabledClass
						})
			}
			this.thumbHolder.show().setXY(a)
		}
	},
	onEnable : function() {
		Ext.Slider.superclass.onEnable.call(this);
		this.thumb.removeClass(this.disabledClass);
		if (Ext.isIE) {
			this.innerEl.removeClass(this.disabledClass).dom.disabled = false;
			if (this.thumbHolder) {
				this.thumbHolder.hide()
			}
			this.thumb.show();
			this.syncThumb()
		}
	},
	syncThumb : function() {
		if (this.rendered) {
			this.moveThumb(this.translateValue(this.value))
		}
	},
	getValue : function() {
		return this.value
	},
	beforeDestroy : function() {
		Ext.destroyMembers(this, "endEl", "innerEl", "thumb", "halfThumb",
				"focusEl", "tracker", "thumbHolder");
		Ext.Slider.superclass.beforeDestroy.call(this)
	}
});
Ext.reg("slider", Ext.Slider);
Ext.Slider.Vertical = {
	onResize : function(a, b) {
		this.innerEl.setHeight(b
				- (this.el.getPadding("t") + this.endEl.getPadding("b")));
		this.syncThumb()
	},
	getRatio : function() {
		var b = this.innerEl.getHeight(), a = this.maxValue - this.minValue;
		return b / a
	},
	moveThumb : function(b, a) {
		if (!a || this.animate === false) {
			this.thumb.setBottom(b)
		} else {
			this.thumb.shift({
						bottom : b,
						stopFx : true,
						duration : 0.35
					})
		}
	},
	onDrag : function(b) {
		var c = this.innerEl.translatePoints(this.tracker.getXY()), a = this.innerEl
				.getHeight()
				- c.top;
		this.setValue(this.minValue
						+ Ext.util.Format.round(a / this.getRatio(),
								this.decimalPrecision), false);
		this.fireEvent("drag", this, b)
	},
	onClickChange : function(b) {
		if (b.left > this.clickRange[0] && b.left < this.clickRange[1]) {
			var a = this.innerEl.getHeight() - b.top;
			this.setValue(this.minValue
							+ Ext.util.Format.round(a / this.getRatio(),
									this.decimalPrecision), undefined, true)
		}
	}
};
Ext.ProgressBar = Ext.extend(Ext.BoxComponent, {
			baseCls : "x-progress",
			animate : false,
			waitTimer : null,
			initComponent : function() {
				Ext.ProgressBar.superclass.initComponent.call(this);
				this.addEvents("update")
			},
			onRender : function(d, a) {
				var c = new Ext.Template('<div class="{cls}-wrap">',
						'<div class="{cls}-inner">', '<div class="{cls}-bar">',
						'<div class="{cls}-text">', "<div>&#160;</div>",
						"</div>", "</div>",
						'<div class="{cls}-text {cls}-text-back">',
						"<div>&#160;</div>", "</div>", "</div>", "</div>");
				this.el = a ? c.insertBefore(a, {
							cls : this.baseCls
						}, true) : c.append(d, {
							cls : this.baseCls
						}, true);
				if (this.id) {
					this.el.dom.id = this.id
				}
				var b = this.el.dom.firstChild;
				this.progressBar = Ext.get(b.firstChild);
				if (this.textEl) {
					this.textEl = Ext.get(this.textEl);
					delete this.textTopEl
				} else {
					this.textTopEl = Ext.get(this.progressBar.dom.firstChild);
					var e = Ext.get(b.childNodes[1]);
					this.textTopEl.setStyle("z-index", 99).addClass("x-hidden");
					this.textEl = new Ext.CompositeElement([
							this.textTopEl.dom.firstChild, e.dom.firstChild]);
					this.textEl.setWidth(b.offsetWidth)
				}
				this.progressBar.setHeight(b.offsetHeight)
			},
			afterRender : function() {
				Ext.ProgressBar.superclass.afterRender.call(this);
				if (this.value) {
					this.updateProgress(this.value, this.text)
				} else {
					this.updateText(this.text)
				}
			},
			updateProgress : function(c, d, b) {
				this.value = c || 0;
				if (d) {
					this.updateText(d)
				}
				if (this.rendered) {
					var a = Math.floor(c * this.el.dom.firstChild.offsetWidth);
					this.progressBar.setWidth(a, b === true
									|| (b !== false && this.animate));
					if (this.textTopEl) {
						this.textTopEl.removeClass("x-hidden").setWidth(a)
					}
				}
				this.fireEvent("update", this, c, d);
				return this
			},
			wait : function(b) {
				if (!this.waitTimer) {
					var a = this;
					b = b || {};
					this.updateText(b.text);
					this.waitTimer = Ext.TaskMgr.start({
								run : function(c) {
									var d = b.increment || 10;
									c -= 1;
									this.updateProgress(
											((((c + d) % d) + 1) * (100 / d))
													* 0.01, null, b.animate)
								},
								interval : b.interval || 1000,
								duration : b.duration,
								onStop : function() {
									if (b.fn) {
										b.fn.apply(b.scope || this)
									}
									this.reset()
								},
								scope : a
							})
				}
				return this
			},
			isWaiting : function() {
				return this.waitTimer !== null
			},
			updateText : function(a) {
				this.text = a || "&#160;";
				if (this.rendered) {
					this.textEl.update(this.text)
				}
				return this
			},
			syncProgressBar : function() {
				if (this.value) {
					this.updateProgress(this.value, this.text)
				}
				return this
			},
			setSize : function(a, c) {
				Ext.ProgressBar.superclass.setSize.call(this, a, c);
				if (this.textTopEl) {
					var b = this.el.dom.firstChild;
					this.textEl.setSize(b.offsetWidth, b.offsetHeight)
				}
				this.syncProgressBar();
				return this
			},
			reset : function(a) {
				this.updateProgress(0);
				if (this.textTopEl) {
					this.textTopEl.addClass("x-hidden")
				}
				if (this.waitTimer) {
					this.waitTimer.onStop = null;
					Ext.TaskMgr.stop(this.waitTimer);
					this.waitTimer = null
				}
				if (a === true) {
					this.hide()
				}
				return this
			},
			onDestroy : function() {
				if (this.rendered) {
					if (this.textEl.isComposite) {
						this.textEl.clear()
					}
					Ext.destroyMembers(this, "textEl", "progressBar",
							"textTopEl")
				}
				Ext.ProgressBar.superclass.onDestroy.call(this)
			}
		});
Ext.reg("progress", Ext.ProgressBar);
(function() {
	var a = Ext.EventManager;
	var b = Ext.lib.Dom;
	Ext.dd.DragDrop = function(e, c, d) {
		if (e) {
			this.init(e, c, d)
		}
	};
	Ext.dd.DragDrop.prototype = {
		id : null,
		config : null,
		dragElId : null,
		handleElId : null,
		invalidHandleTypes : null,
		invalidHandleIds : null,
		invalidHandleClasses : null,
		startPageX : 0,
		startPageY : 0,
		groups : null,
		locked : false,
		lock : function() {
			this.locked = true
		},
		moveOnly : false,
		unlock : function() {
			this.locked = false
		},
		isTarget : true,
		padding : null,
		_domRef : null,
		__ygDragDrop : true,
		constrainX : false,
		constrainY : false,
		minX : 0,
		maxX : 0,
		minY : 0,
		maxY : 0,
		maintainOffset : false,
		xTicks : null,
		yTicks : null,
		primaryButtonOnly : true,
		available : false,
		hasOuterHandles : false,
		b4StartDrag : function(c, d) {
		},
		startDrag : function(c, d) {
		},
		b4Drag : function(c) {
		},
		onDrag : function(c) {
		},
		onDragEnter : function(c, d) {
		},
		b4DragOver : function(c) {
		},
		onDragOver : function(c, d) {
		},
		b4DragOut : function(c) {
		},
		onDragOut : function(c, d) {
		},
		b4DragDrop : function(c) {
		},
		onDragDrop : function(c, d) {
		},
		onInvalidDrop : function(c) {
		},
		b4EndDrag : function(c) {
		},
		endDrag : function(c) {
		},
		b4MouseDown : function(c) {
		},
		onMouseDown : function(c) {
		},
		onMouseUp : function(c) {
		},
		onAvailable : function() {
		},
		defaultPadding : {
			left : 0,
			right : 0,
			top : 0,
			bottom : 0
		},
		constrainTo : function(k, h, p) {
			if (Ext.isNumber(h)) {
				h = {
					left : h,
					right : h,
					top : h,
					bottom : h
				}
			}
			h = h || this.defaultPadding;
			var m = Ext.get(this.getEl()).getBox(), d = Ext.get(k), o = d
					.getScroll(), l, e = d.dom;
			if (e == document.body) {
				l = {
					x : o.left,
					y : o.top,
					width : Ext.lib.Dom.getViewWidth(),
					height : Ext.lib.Dom.getViewHeight()
				}
			} else {
				var n = d.getXY();
				l = {
					x : n[0],
					y : n[1],
					width : e.clientWidth,
					height : e.clientHeight
				}
			}
			var j = m.y - l.y, g = m.x - l.x;
			this.resetConstraints();
			this.setXConstraint(g - (h.left || 0), l.width - g - m.width
							- (h.right || 0), this.xTickSize);
			this.setYConstraint(j - (h.top || 0), l.height - j - m.height
							- (h.bottom || 0), this.yTickSize)
		},
		getEl : function() {
			if (!this._domRef) {
				this._domRef = Ext.getDom(this.id)
			}
			return this._domRef
		},
		getDragEl : function() {
			return Ext.getDom(this.dragElId)
		},
		init : function(e, c, d) {
			this.initTarget(e, c, d);
			a.on(this.id, "mousedown", this.handleMouseDown, this)
		},
		initTarget : function(e, c, d) {
			this.config = d || {};
			this.DDM = Ext.dd.DDM;
			this.groups = {};
			if (typeof e !== "string") {
				e = Ext.id(e)
			}
			this.id = e;
			this.addToGroup((c) ? c : "default");
			this.handleElId = e;
			this.setDragElId(e);
			this.invalidHandleTypes = {
				A : "A"
			};
			this.invalidHandleIds = {};
			this.invalidHandleClasses = [];
			this.applyConfig();
			this.handleOnAvailable()
		},
		applyConfig : function() {
			this.padding = this.config.padding || [0, 0, 0, 0];
			this.isTarget = (this.config.isTarget !== false);
			this.maintainOffset = (this.config.maintainOffset);
			this.primaryButtonOnly = (this.config.primaryButtonOnly !== false)
		},
		handleOnAvailable : function() {
			this.available = true;
			this.resetConstraints();
			this.onAvailable()
		},
		setPadding : function(e, c, g, d) {
			if (!c && 0 !== c) {
				this.padding = [e, e, e, e]
			} else {
				if (!g && 0 !== g) {
					this.padding = [e, c, e, c]
				} else {
					this.padding = [e, c, g, d]
				}
			}
		},
		setInitPosition : function(g, e) {
			var h = this.getEl();
			if (!this.DDM.verifyEl(h)) {
				return
			}
			var d = g || 0;
			var c = e || 0;
			var j = b.getXY(h);
			this.initPageX = j[0] - d;
			this.initPageY = j[1] - c;
			this.lastPageX = j[0];
			this.lastPageY = j[1];
			this.setStartPosition(j)
		},
		setStartPosition : function(d) {
			var c = d || b.getXY(this.getEl());
			this.deltaSetXY = null;
			this.startPageX = c[0];
			this.startPageY = c[1]
		},
		addToGroup : function(c) {
			this.groups[c] = true;
			this.DDM.regDragDrop(this, c)
		},
		removeFromGroup : function(c) {
			if (this.groups[c]) {
				delete this.groups[c]
			}
			this.DDM.removeDDFromGroup(this, c)
		},
		setDragElId : function(c) {
			this.dragElId = c
		},
		setHandleElId : function(c) {
			if (typeof c !== "string") {
				c = Ext.id(c)
			}
			this.handleElId = c;
			this.DDM.regHandle(this.id, c)
		},
		setOuterHandleElId : function(c) {
			if (typeof c !== "string") {
				c = Ext.id(c)
			}
			a.on(c, "mousedown", this.handleMouseDown, this);
			this.setHandleElId(c);
			this.hasOuterHandles = true
		},
		unreg : function() {
			a.un(this.id, "mousedown", this.handleMouseDown);
			this._domRef = null;
			this.DDM._remove(this)
		},
		destroy : function() {
			this.unreg()
		},
		isLocked : function() {
			return (this.DDM.isLocked() || this.locked)
		},
		handleMouseDown : function(g, d) {
			if (this.primaryButtonOnly && g.button != 0) {
				return
			}
			if (this.isLocked()) {
				return
			}
			this.DDM.refreshCache(this.groups);
			var c = new Ext.lib.Point(Ext.lib.Event.getPageX(g), Ext.lib.Event
							.getPageY(g));
			if (!this.hasOuterHandles && !this.DDM.isOverTarget(c, this)) {
			} else {
				if (this.clickValidator(g)) {
					this.setStartPosition();
					this.b4MouseDown(g);
					this.onMouseDown(g);
					this.DDM.handleMouseDown(g, this);
					this.DDM.stopEvent(g)
				} else {
				}
			}
		},
		clickValidator : function(d) {
			var c = d.getTarget();
			return (this.isValidHandleChild(c) && (this.id == this.handleElId || this.DDM
					.handleWasClicked(c, this.id)))
		},
		addInvalidHandleType : function(c) {
			var d = c.toUpperCase();
			this.invalidHandleTypes[d] = d
		},
		addInvalidHandleId : function(c) {
			if (typeof c !== "string") {
				c = Ext.id(c)
			}
			this.invalidHandleIds[c] = c
		},
		addInvalidHandleClass : function(c) {
			this.invalidHandleClasses.push(c)
		},
		removeInvalidHandleType : function(c) {
			var d = c.toUpperCase();
			delete this.invalidHandleTypes[d]
		},
		removeInvalidHandleId : function(c) {
			if (typeof c !== "string") {
				c = Ext.id(c)
			}
			delete this.invalidHandleIds[c]
		},
		removeInvalidHandleClass : function(d) {
			for (var e = 0, c = this.invalidHandleClasses.length; e < c; ++e) {
				if (this.invalidHandleClasses[e] == d) {
					delete this.invalidHandleClasses[e]
				}
			}
		},
		isValidHandleChild : function(h) {
			var g = true;
			var k;
			try {
				k = h.nodeName.toUpperCase()
			} catch (j) {
				k = h.nodeName
			}
			g = g && !this.invalidHandleTypes[k];
			g = g && !this.invalidHandleIds[h.id];
			for (var d = 0, c = this.invalidHandleClasses.length; g && d < c; ++d) {
				g = !Ext.fly(h).hasClass(this.invalidHandleClasses[d])
			}
			return g
		},
		setXTicks : function(g, c) {
			this.xTicks = [];
			this.xTickSize = c;
			var e = {};
			for (var d = this.initPageX; d >= this.minX; d = d - c) {
				if (!e[d]) {
					this.xTicks[this.xTicks.length] = d;
					e[d] = true
				}
			}
			for (d = this.initPageX; d <= this.maxX; d = d + c) {
				if (!e[d]) {
					this.xTicks[this.xTicks.length] = d;
					e[d] = true
				}
			}
			this.xTicks.sort(this.DDM.numericSort)
		},
		setYTicks : function(g, c) {
			this.yTicks = [];
			this.yTickSize = c;
			var e = {};
			for (var d = this.initPageY; d >= this.minY; d = d - c) {
				if (!e[d]) {
					this.yTicks[this.yTicks.length] = d;
					e[d] = true
				}
			}
			for (d = this.initPageY; d <= this.maxY; d = d + c) {
				if (!e[d]) {
					this.yTicks[this.yTicks.length] = d;
					e[d] = true
				}
			}
			this.yTicks.sort(this.DDM.numericSort)
		},
		setXConstraint : function(e, d, c) {
			this.leftConstraint = e;
			this.rightConstraint = d;
			this.minX = this.initPageX - e;
			this.maxX = this.initPageX + d;
			if (c) {
				this.setXTicks(this.initPageX, c)
			}
			this.constrainX = true
		},
		clearConstraints : function() {
			this.constrainX = false;
			this.constrainY = false;
			this.clearTicks()
		},
		clearTicks : function() {
			this.xTicks = null;
			this.yTicks = null;
			this.xTickSize = 0;
			this.yTickSize = 0
		},
		setYConstraint : function(c, e, d) {
			this.topConstraint = c;
			this.bottomConstraint = e;
			this.minY = this.initPageY - c;
			this.maxY = this.initPageY + e;
			if (d) {
				this.setYTicks(this.initPageY, d)
			}
			this.constrainY = true
		},
		resetConstraints : function() {
			if (this.initPageX || this.initPageX === 0) {
				var d = (this.maintainOffset)
						? this.lastPageX - this.initPageX
						: 0;
				var c = (this.maintainOffset)
						? this.lastPageY - this.initPageY
						: 0;
				this.setInitPosition(d, c)
			} else {
				this.setInitPosition()
			}
			if (this.constrainX) {
				this.setXConstraint(this.leftConstraint, this.rightConstraint,
						this.xTickSize)
			}
			if (this.constrainY) {
				this.setYConstraint(this.topConstraint, this.bottomConstraint,
						this.yTickSize)
			}
		},
		getTick : function(k, g) {
			if (!g) {
				return k
			} else {
				if (g[0] >= k) {
					return g[0]
				} else {
					for (var d = 0, c = g.length; d < c; ++d) {
						var e = d + 1;
						if (g[e] && g[e] >= k) {
							var j = k - g[d];
							var h = g[e] - k;
							return (h > j) ? g[d] : g[e]
						}
					}
					return g[g.length - 1]
				}
			}
		},
		toString : function() {
			return ("DragDrop " + this.id)
		}
	}
})();
if (!Ext.dd.DragDropMgr) {
	Ext.dd.DragDropMgr = function() {
		var a = Ext.EventManager;
		return {
			ids : {},
			handleIds : {},
			dragCurrent : null,
			dragOvers : {},
			deltaX : 0,
			deltaY : 0,
			preventDefault : true,
			stopPropagation : true,
			initialized : false,
			locked : false,
			init : function() {
				this.initialized = true
			},
			POINT : 0,
			INTERSECT : 1,
			mode : 0,
			_execOnAll : function(d, c) {
				for (var e in this.ids) {
					for (var b in this.ids[e]) {
						var g = this.ids[e][b];
						if (!this.isTypeOfDD(g)) {
							continue
						}
						g[d].apply(g, c)
					}
				}
			},
			_onLoad : function() {
				this.init();
				a.on(document, "mouseup", this.handleMouseUp, this, true);
				a.on(document, "mousemove", this.handleMouseMove, this, true);
				a.on(window, "unload", this._onUnload, this, true);
				a.on(window, "resize", this._onResize, this, true)
			},
			_onResize : function(b) {
				this._execOnAll("resetConstraints", [])
			},
			lock : function() {
				this.locked = true
			},
			unlock : function() {
				this.locked = false
			},
			isLocked : function() {
				return this.locked
			},
			locationCache : {},
			useCache : true,
			clickPixelThresh : 3,
			clickTimeThresh : 350,
			dragThreshMet : false,
			clickTimeout : null,
			startX : 0,
			startY : 0,
			regDragDrop : function(c, b) {
				if (!this.initialized) {
					this.init()
				}
				if (!this.ids[b]) {
					this.ids[b] = {}
				}
				this.ids[b][c.id] = c
			},
			removeDDFromGroup : function(d, b) {
				if (!this.ids[b]) {
					this.ids[b] = {}
				}
				var c = this.ids[b];
				if (c && c[d.id]) {
					delete c[d.id]
				}
			},
			_remove : function(c) {
				for (var b in c.groups) {
					if (b && this.ids[b] && this.ids[b][c.id]) {
						delete this.ids[b][c.id]
					}
				}
				delete this.handleIds[c.id]
			},
			regHandle : function(c, b) {
				if (!this.handleIds[c]) {
					this.handleIds[c] = {}
				}
				this.handleIds[c][b] = b
			},
			isDragDrop : function(b) {
				return (this.getDDById(b)) ? true : false
			},
			getRelated : function(h, c) {
				var g = [];
				for (var e in h.groups) {
					for (var d in this.ids[e]) {
						var b = this.ids[e][d];
						if (!this.isTypeOfDD(b)) {
							continue
						}
						if (!c || b.isTarget) {
							g[g.length] = b
						}
					}
				}
				return g
			},
			isLegalTarget : function(g, e) {
				var c = this.getRelated(g, true);
				for (var d = 0, b = c.length; d < b; ++d) {
					if (c[d].id == e.id) {
						return true
					}
				}
				return false
			},
			isTypeOfDD : function(b) {
				return (b && b.__ygDragDrop)
			},
			isHandle : function(c, b) {
				return (this.handleIds[c] && this.handleIds[c][b])
			},
			getDDById : function(c) {
				for (var b in this.ids) {
					if (this.ids[b][c]) {
						return this.ids[b][c]
					}
				}
				return null
			},
			handleMouseDown : function(d, c) {
				if (Ext.QuickTips) {
					Ext.QuickTips.disable()
				}
				if (this.dragCurrent) {
					this.handleMouseUp(d)
				}
				this.currentTarget = d.getTarget();
				this.dragCurrent = c;
				var b = c.getEl();
				this.startX = d.getPageX();
				this.startY = d.getPageY();
				this.deltaX = this.startX - b.offsetLeft;
				this.deltaY = this.startY - b.offsetTop;
				this.dragThreshMet = false;
				this.clickTimeout = setTimeout(function() {
							var e = Ext.dd.DDM;
							e.startDrag(e.startX, e.startY)
						}, this.clickTimeThresh)
			},
			startDrag : function(b, c) {
				clearTimeout(this.clickTimeout);
				if (this.dragCurrent) {
					this.dragCurrent.b4StartDrag(b, c);
					this.dragCurrent.startDrag(b, c)
				}
				this.dragThreshMet = true
			},
			handleMouseUp : function(b) {
				if (Ext.QuickTips) {
					Ext.QuickTips.enable()
				}
				if (!this.dragCurrent) {
					return
				}
				clearTimeout(this.clickTimeout);
				if (this.dragThreshMet) {
					this.fireEvents(b, true)
				} else {
				}
				this.stopDrag(b);
				this.stopEvent(b)
			},
			stopEvent : function(b) {
				if (this.stopPropagation) {
					b.stopPropagation()
				}
				if (this.preventDefault) {
					b.preventDefault()
				}
			},
			stopDrag : function(b) {
				if (this.dragCurrent) {
					if (this.dragThreshMet) {
						this.dragCurrent.b4EndDrag(b);
						this.dragCurrent.endDrag(b)
					}
					this.dragCurrent.onMouseUp(b)
				}
				this.dragCurrent = null;
				this.dragOvers = {}
			},
			handleMouseMove : function(d) {
				if (!this.dragCurrent) {
					return true
				}
				if (Ext.isIE
						&& (d.button !== 0 && d.button !== 1 && d.button !== 2)) {
					this.stopEvent(d);
					return this.handleMouseUp(d)
				}
				if (!this.dragThreshMet) {
					var c = Math.abs(this.startX - d.getPageX());
					var b = Math.abs(this.startY - d.getPageY());
					if (c > this.clickPixelThresh || b > this.clickPixelThresh) {
						this.startDrag(this.startX, this.startY)
					}
				}
				if (this.dragThreshMet) {
					this.dragCurrent.b4Drag(d);
					this.dragCurrent.onDrag(d);
					if (!this.dragCurrent.moveOnly) {
						this.fireEvents(d, false)
					}
				}
				this.stopEvent(d);
				return true
			},
			fireEvents : function(n, o) {
				var q = this.dragCurrent;
				if (!q || q.isLocked()) {
					return
				}
				var r = n.getPoint();
				var b = [];
				var g = [];
				var l = [];
				var j = [];
				var d = [];
				for (var h in this.dragOvers) {
					var c = this.dragOvers[h];
					if (!this.isTypeOfDD(c)) {
						continue
					}
					if (!this.isOverTarget(r, c, this.mode)) {
						g.push(c)
					}
					b[h] = true;
					delete this.dragOvers[h]
				}
				for (var p in q.groups) {
					if ("string" != typeof p) {
						continue
					}
					for (h in this.ids[p]) {
						var k = this.ids[p][h];
						if (!this.isTypeOfDD(k)) {
							continue
						}
						if (k.isTarget && !k.isLocked()
								&& ((k != q) || (q.ignoreSelf === false))) {
							if (this.isOverTarget(r, k, this.mode)) {
								if (o) {
									j.push(k)
								} else {
									if (!b[k.id]) {
										d.push(k)
									} else {
										l.push(k)
									}
									this.dragOvers[k.id] = k
								}
							}
						}
					}
				}
				if (this.mode) {
					if (g.length) {
						q.b4DragOut(n, g);
						q.onDragOut(n, g)
					}
					if (d.length) {
						q.onDragEnter(n, d)
					}
					if (l.length) {
						q.b4DragOver(n, l);
						q.onDragOver(n, l)
					}
					if (j.length) {
						q.b4DragDrop(n, j);
						q.onDragDrop(n, j)
					}
				} else {
					var m = 0;
					for (h = 0, m = g.length; h < m; ++h) {
						q.b4DragOut(n, g[h].id);
						q.onDragOut(n, g[h].id)
					}
					for (h = 0, m = d.length; h < m; ++h) {
						q.onDragEnter(n, d[h].id)
					}
					for (h = 0, m = l.length; h < m; ++h) {
						q.b4DragOver(n, l[h].id);
						q.onDragOver(n, l[h].id)
					}
					for (h = 0, m = j.length; h < m; ++h) {
						q.b4DragDrop(n, j[h].id);
						q.onDragDrop(n, j[h].id)
					}
				}
				if (o && !j.length) {
					q.onInvalidDrop(n)
				}
			},
			getBestMatch : function(d) {
				var g = null;
				var c = d.length;
				if (c == 1) {
					g = d[0]
				} else {
					for (var e = 0; e < c; ++e) {
						var b = d[e];
						if (b.cursorIsOver) {
							g = b;
							break
						} else {
							if (!g || g.overlap.getArea() < b.overlap.getArea()) {
								g = b
							}
						}
					}
				}
				return g
			},
			refreshCache : function(c) {
				for (var b in c) {
					if ("string" != typeof b) {
						continue
					}
					for (var d in this.ids[b]) {
						var e = this.ids[b][d];
						if (this.isTypeOfDD(e)) {
							var g = this.getLocation(e);
							if (g) {
								this.locationCache[e.id] = g
							} else {
								delete this.locationCache[e.id]
							}
						}
					}
				}
			},
			verifyEl : function(c) {
				if (c) {
					var b;
					if (Ext.isIE) {
						try {
							b = c.offsetParent
						} catch (d) {
						}
					} else {
						b = c.offsetParent
					}
					if (b) {
						return true
					}
				}
				return false
			},
			getLocation : function(k) {
				if (!this.isTypeOfDD(k)) {
					return null
				}
				var h = k.getEl(), o, g, d, q, p, s, c, n, j;
				try {
					o = Ext.lib.Dom.getXY(h)
				} catch (m) {
				}
				if (!o) {
					return null
				}
				g = o[0];
				d = g + h.offsetWidth;
				q = o[1];
				p = q + h.offsetHeight;
				s = q - k.padding[0];
				c = d + k.padding[1];
				n = p + k.padding[2];
				j = g - k.padding[3];
				return new Ext.lib.Region(s, c, n, j)
			},
			isOverTarget : function(l, b, d) {
				var g = this.locationCache[b.id];
				if (!g || !this.useCache) {
					g = this.getLocation(b);
					this.locationCache[b.id] = g
				}
				if (!g) {
					return false
				}
				b.cursorIsOver = g.contains(l);
				var k = this.dragCurrent;
				if (!k || !k.getTargetCoord
						|| (!d && !k.constrainX && !k.constrainY)) {
					return b.cursorIsOver
				}
				b.overlap = null;
				var h = k.getTargetCoord(l.x, l.y);
				var c = k.getDragEl();
				var e = new Ext.lib.Region(h.y, h.x + c.offsetWidth, h.y
								+ c.offsetHeight, h.x);
				var j = e.intersect(g);
				if (j) {
					b.overlap = j;
					return (d) ? true : b.cursorIsOver
				} else {
					return false
				}
			},
			_onUnload : function(c, b) {
				Ext.dd.DragDropMgr.unregAll()
			},
			unregAll : function() {
				if (this.dragCurrent) {
					this.stopDrag();
					this.dragCurrent = null
				}
				this._execOnAll("unreg", []);
				for (var b in this.elementCache) {
					delete this.elementCache[b]
				}
				this.elementCache = {};
				this.ids = {}
			},
			elementCache : {},
			getElWrapper : function(c) {
				var b = this.elementCache[c];
				if (!b || !b.el) {
					b = this.elementCache[c] = new this.ElementWrapper(Ext
							.getDom(c))
				}
				return b
			},
			getElement : function(b) {
				return Ext.getDom(b)
			},
			getCss : function(c) {
				var b = Ext.getDom(c);
				return (b) ? b.style : null
			},
			ElementWrapper : function(b) {
				this.el = b || null;
				this.id = this.el && b.id;
				this.css = this.el && b.style
			},
			getPosX : function(b) {
				return Ext.lib.Dom.getX(b)
			},
			getPosY : function(b) {
				return Ext.lib.Dom.getY(b)
			},
			swapNode : function(d, b) {
				if (d.swapNode) {
					d.swapNode(b)
				} else {
					var e = b.parentNode;
					var c = b.nextSibling;
					if (c == d) {
						e.insertBefore(d, b)
					} else {
						if (b == d.nextSibling) {
							e.insertBefore(b, d)
						} else {
							d.parentNode.replaceChild(b, d);
							e.insertBefore(d, c)
						}
					}
				}
			},
			getScroll : function() {
				var d, b, e = document.documentElement, c = document.body;
				if (e && (e.scrollTop || e.scrollLeft)) {
					d = e.scrollTop;
					b = e.scrollLeft
				} else {
					if (c) {
						d = c.scrollTop;
						b = c.scrollLeft
					} else {
					}
				}
				return {
					top : d,
					left : b
				}
			},
			getStyle : function(c, b) {
				return Ext.fly(c).getStyle(b)
			},
			getScrollTop : function() {
				return this.getScroll().top
			},
			getScrollLeft : function() {
				return this.getScroll().left
			},
			moveToEl : function(b, d) {
				var c = Ext.lib.Dom.getXY(d);
				Ext.lib.Dom.setXY(b, c)
			},
			numericSort : function(d, c) {
				return (d - c)
			},
			_timeoutCount : 0,
			_addListeners : function() {
				var b = Ext.dd.DDM;
				if (Ext.lib.Event && document) {
					b._onLoad()
				} else {
					if (b._timeoutCount > 2000) {
					} else {
						setTimeout(b._addListeners, 10);
						if (document && document.body) {
							b._timeoutCount += 1
						}
					}
				}
			},
			handleWasClicked : function(b, d) {
				if (this.isHandle(d, b.id)) {
					return true
				} else {
					var c = b.parentNode;
					while (c) {
						if (this.isHandle(d, c.id)) {
							return true
						} else {
							c = c.parentNode
						}
					}
				}
				return false
			}
		}
	}();
	Ext.dd.DDM = Ext.dd.DragDropMgr;
	Ext.dd.DDM._addListeners()
}
Ext.dd.DD = function(c, a, b) {
	if (c) {
		this.init(c, a, b)
	}
};
Ext.extend(Ext.dd.DD, Ext.dd.DragDrop, {
			scroll : true,
			autoOffset : function(c, b) {
				var a = c - this.startPageX;
				var d = b - this.startPageY;
				this.setDelta(a, d)
			},
			setDelta : function(b, a) {
				this.deltaX = b;
				this.deltaY = a
			},
			setDragElPos : function(c, b) {
				var a = this.getDragEl();
				this.alignElWithMouse(a, c, b)
			},
			alignElWithMouse : function(c, h, g) {
				var e = this.getTargetCoord(h, g);
				var b = c.dom ? c : Ext.fly(c, "_dd");
				if (!this.deltaSetXY) {
					var j = [e.x, e.y];
					b.setXY(j);
					var d = b.getLeft(true);
					var a = b.getTop(true);
					this.deltaSetXY = [d - e.x, a - e.y]
				} else {
					b.setLeftTop(e.x + this.deltaSetXY[0], e.y
									+ this.deltaSetXY[1])
				}
				this.cachePosition(e.x, e.y);
				this.autoScroll(e.x, e.y, c.offsetHeight, c.offsetWidth);
				return e
			},
			cachePosition : function(b, a) {
				if (b) {
					this.lastPageX = b;
					this.lastPageY = a
				} else {
					var c = Ext.lib.Dom.getXY(this.getEl());
					this.lastPageX = c[0];
					this.lastPageY = c[1]
				}
			},
			autoScroll : function(m, l, e, n) {
				if (this.scroll) {
					var o = Ext.lib.Dom.getViewHeight();
					var b = Ext.lib.Dom.getViewWidth();
					var q = this.DDM.getScrollTop();
					var d = this.DDM.getScrollLeft();
					var k = e + l;
					var p = n + m;
					var j = (o + q - l - this.deltaY);
					var g = (b + d - m - this.deltaX);
					var c = 40;
					var a = (document.all) ? 80 : 30;
					if (k > o && j < c) {
						window.scrollTo(d, q + a)
					}
					if (l < q && q > 0 && l - q < c) {
						window.scrollTo(d, q - a)
					}
					if (p > b && g < c) {
						window.scrollTo(d + a, q)
					}
					if (m < d && d > 0 && m - d < c) {
						window.scrollTo(d - a, q)
					}
				}
			},
			getTargetCoord : function(c, b) {
				var a = c - this.deltaX;
				var d = b - this.deltaY;
				if (this.constrainX) {
					if (a < this.minX) {
						a = this.minX
					}
					if (a > this.maxX) {
						a = this.maxX
					}
				}
				if (this.constrainY) {
					if (d < this.minY) {
						d = this.minY
					}
					if (d > this.maxY) {
						d = this.maxY
					}
				}
				a = this.getTick(a, this.xTicks);
				d = this.getTick(d, this.yTicks);
				return {
					x : a,
					y : d
				}
			},
			applyConfig : function() {
				Ext.dd.DD.superclass.applyConfig.call(this);
				this.scroll = (this.config.scroll !== false)
			},
			b4MouseDown : function(a) {
				this.autoOffset(a.getPageX(), a.getPageY())
			},
			b4Drag : function(a) {
				this.setDragElPos(a.getPageX(), a.getPageY())
			},
			toString : function() {
				return ("DD " + this.id)
			}
		});
Ext.dd.DDProxy = function(c, a, b) {
	if (c) {
		this.init(c, a, b);
		this.initFrame()
	}
};
Ext.dd.DDProxy.dragElId = "ygddfdiv";
Ext.extend(Ext.dd.DDProxy, Ext.dd.DD, {
			resizeFrame : true,
			centerFrame : false,
			createFrame : function() {
				var b = this;
				var a = document.body;
				if (!a || !a.firstChild) {
					setTimeout(function() {
								b.createFrame()
							}, 50);
					return
				}
				var d = this.getDragEl();
				if (!d) {
					d = document.createElement("div");
					d.id = this.dragElId;
					var c = d.style;
					c.position = "absolute";
					c.visibility = "hidden";
					c.cursor = "move";
					c.border = "2px solid #aaa";
					c.zIndex = 999;
					a.insertBefore(d, a.firstChild)
				}
			},
			initFrame : function() {
				this.createFrame()
			},
			applyConfig : function() {
				Ext.dd.DDProxy.superclass.applyConfig.call(this);
				this.resizeFrame = (this.config.resizeFrame !== false);
				this.centerFrame = (this.config.centerFrame);
				this.setDragElId(this.config.dragElId
						|| Ext.dd.DDProxy.dragElId)
			},
			showFrame : function(e, d) {
				var c = this.getEl();
				var a = this.getDragEl();
				var b = a.style;
				this._resizeProxy();
				if (this.centerFrame) {
					this.setDelta(Math.round(parseInt(b.width, 10) / 2), Math
									.round(parseInt(b.height, 10) / 2))
				}
				this.setDragElPos(e, d);
				Ext.fly(a).show()
			},
			_resizeProxy : function() {
				if (this.resizeFrame) {
					var a = this.getEl();
					Ext.fly(this.getDragEl()).setSize(a.offsetWidth,
							a.offsetHeight)
				}
			},
			b4MouseDown : function(b) {
				var a = b.getPageX();
				var c = b.getPageY();
				this.autoOffset(a, c);
				this.setDragElPos(a, c)
			},
			b4StartDrag : function(a, b) {
				this.showFrame(a, b)
			},
			b4EndDrag : function(a) {
				Ext.fly(this.getDragEl()).hide()
			},
			endDrag : function(c) {
				var b = this.getEl();
				var a = this.getDragEl();
				a.style.visibility = "";
				this.beforeMove();
				b.style.visibility = "hidden";
				Ext.dd.DDM.moveToEl(b, a);
				a.style.visibility = "hidden";
				b.style.visibility = "";
				this.afterDrag()
			},
			beforeMove : function() {
			},
			afterDrag : function() {
			},
			toString : function() {
				return ("DDProxy " + this.id)
			}
		});
Ext.dd.DDTarget = function(c, a, b) {
	if (c) {
		this.initTarget(c, a, b)
	}
};
Ext.extend(Ext.dd.DDTarget, Ext.dd.DragDrop, {
			getDragEl : Ext.emptyFn,
			isValidHandleChild : Ext.emptyFn,
			startDrag : Ext.emptyFn,
			endDrag : Ext.emptyFn,
			onDrag : Ext.emptyFn,
			onDragDrop : Ext.emptyFn,
			onDragEnter : Ext.emptyFn,
			onDragOut : Ext.emptyFn,
			onDragOver : Ext.emptyFn,
			onInvalidDrop : Ext.emptyFn,
			onMouseDown : Ext.emptyFn,
			onMouseUp : Ext.emptyFn,
			setXConstraint : Ext.emptyFn,
			setYConstraint : Ext.emptyFn,
			resetConstraints : Ext.emptyFn,
			clearConstraints : Ext.emptyFn,
			clearTicks : Ext.emptyFn,
			setInitPosition : Ext.emptyFn,
			setDragElId : Ext.emptyFn,
			setHandleElId : Ext.emptyFn,
			setOuterHandleElId : Ext.emptyFn,
			addInvalidHandleClass : Ext.emptyFn,
			addInvalidHandleId : Ext.emptyFn,
			addInvalidHandleType : Ext.emptyFn,
			removeInvalidHandleClass : Ext.emptyFn,
			removeInvalidHandleId : Ext.emptyFn,
			removeInvalidHandleType : Ext.emptyFn,
			toString : function() {
				return ("DDTarget " + this.id)
			}
		});
Ext.dd.DragTracker = Ext.extend(Ext.util.Observable, {
			active : false,
			tolerance : 5,
			autoStart : false,
			constructor : function(a) {
				Ext.apply(this, a);
				this.addEvents("mousedown", "mouseup", "mousemove",
						"dragstart", "dragend", "drag");
				this.dragRegion = new Ext.lib.Region(0, 0, 0, 0);
				if (this.el) {
					this.initEl(this.el)
				}
				Ext.dd.DragTracker.superclass.constructor.call(this, a)
			},
			initEl : function(a) {
				this.el = Ext.get(a);
				a.on("mousedown", this.onMouseDown, this, this.delegate ? {
							delegate : this.delegate
						} : undefined)
			},
			destroy : function() {
				this.el.un("mousedown", this.onMouseDown, this)
			},
			onMouseDown : function(c, b) {
				if (this.fireEvent("mousedown", this, c) !== false
						&& this.onBeforeStart(c) !== false) {
					this.startXY = this.lastXY = c.getXY();
					this.dragTarget = this.delegate ? b : this.el.dom;
					if (this.preventDefault !== false) {
						c.preventDefault()
					}
					var a = Ext.getDoc();
					a.on("mouseup", this.onMouseUp, this);
					a.on("mousemove", this.onMouseMove, this);
					a.on("selectstart", this.stopSelect, this);
					if (this.autoStart) {
						this.timer = this.triggerStart
								.defer(	this.autoStart === true
												? 1000
												: this.autoStart, this)
					}
				}
			},
			onMouseMove : function(d, c) {
				if (this.active && Ext.isIE && !d.browserEvent.button) {
					d.preventDefault();
					this.onMouseUp(d);
					return
				}
				d.preventDefault();
				var b = d.getXY(), a = this.startXY;
				this.lastXY = b;
				if (!this.active) {
					if (Math.abs(a[0] - b[0]) > this.tolerance
							|| Math.abs(a[1] - b[1]) > this.tolerance) {
						this.triggerStart()
					} else {
						return
					}
				}
				this.fireEvent("mousemove", this, d);
				this.onDrag(d);
				this.fireEvent("drag", this, d)
			},
			onMouseUp : function(c) {
				var b = Ext.getDoc();
				b.un("mousemove", this.onMouseMove, this);
				b.un("mouseup", this.onMouseUp, this);
				b.un("selectstart", this.stopSelect, this);
				c.preventDefault();
				this.clearStart();
				var a = this.active;
				this.active = false;
				delete this.elRegion;
				this.fireEvent("mouseup", this, c);
				if (a) {
					this.onEnd(c);
					this.fireEvent("dragend", this, c)
				}
			},
			triggerStart : function(a) {
				this.clearStart();
				this.active = true;
				this.onStart(this.startXY);
				this.fireEvent("dragstart", this, this.startXY)
			},
			clearStart : function() {
				if (this.timer) {
					clearTimeout(this.timer);
					delete this.timer
				}
			},
			stopSelect : function(a) {
				a.stopEvent();
				return false
			},
			onBeforeStart : function(a) {
			},
			onStart : function(a) {
			},
			onDrag : function(a) {
			},
			onEnd : function(a) {
			},
			getDragTarget : function() {
				return this.dragTarget
			},
			getDragCt : function() {
				return this.el
			},
			getXY : function(a) {
				return a
						? this.constrainModes[a].call(this, this.lastXY)
						: this.lastXY
			},
			getOffset : function(c) {
				var b = this.getXY(c);
				var a = this.startXY;
				return [a[0] - b[0], a[1] - b[1]]
			},
			constrainModes : {
				point : function(b) {
					if (!this.elRegion) {
						this.elRegion = this.getDragCt().getRegion()
					}
					var a = this.dragRegion;
					a.left = b[0];
					a.top = b[1];
					a.right = b[0];
					a.bottom = b[1];
					a.constrainTo(this.elRegion);
					return [a.left, a.top]
				}
			}
		});
Ext.dd.ScrollManager = function() {
	var c = Ext.dd.DragDropMgr;
	var e = {};
	var b = null;
	var j = {};
	var h = function(m) {
		b = null;
		a()
	};
	var k = function() {
		if (c.dragCurrent) {
			c.refreshCache(c.dragCurrent.groups)
		}
	};
	var d = function() {
		if (c.dragCurrent) {
			var m = Ext.dd.ScrollManager;
			var n = j.el.ddScrollConfig
					? j.el.ddScrollConfig.increment
					: m.increment;
			if (!m.animate) {
				if (j.el.scroll(j.dir, n)) {
					k()
				}
			} else {
				j.el.scroll(j.dir, n, true, m.animDuration, k)
			}
		}
	};
	var a = function() {
		if (j.id) {
			clearInterval(j.id)
		}
		j.id = 0;
		j.el = null;
		j.dir = ""
	};
	var g = function(n, m) {
		a();
		j.el = n;
		j.dir = m;
		var o = (n.ddScrollConfig && n.ddScrollConfig.frequency)
				? n.ddScrollConfig.frequency
				: Ext.dd.ScrollManager.frequency;
		j.id = setInterval(d, o)
	};
	var l = function(p, s) {
		if (s || !c.dragCurrent) {
			return
		}
		var t = Ext.dd.ScrollManager;
		if (!b || b != c.dragCurrent) {
			b = c.dragCurrent;
			t.refreshCache()
		}
		var u = Ext.lib.Event.getXY(p);
		var v = new Ext.lib.Point(u[0], u[1]);
		for (var n in e) {
			var o = e[n], m = o._region;
			var q = o.ddScrollConfig ? o.ddScrollConfig : t;
			if (m && m.contains(v) && o.isScrollable()) {
				if (m.bottom - v.y <= q.vthresh) {
					if (j.el != o) {
						g(o, "down")
					}
					return
				} else {
					if (m.right - v.x <= q.hthresh) {
						if (j.el != o) {
							g(o, "left")
						}
						return
					} else {
						if (v.y - m.top <= q.vthresh) {
							if (j.el != o) {
								g(o, "up")
							}
							return
						} else {
							if (v.x - m.left <= q.hthresh) {
								if (j.el != o) {
									g(o, "right")
								}
								return
							}
						}
					}
				}
			}
		}
		a()
	};
	c.fireEvents = c.fireEvents.createSequence(l, c);
	c.stopDrag = c.stopDrag.createSequence(h, c);
	return {
		register : function(o) {
			if (Ext.isArray(o)) {
				for (var n = 0, m = o.length; n < m; n++) {
					this.register(o[n])
				}
			} else {
				o = Ext.get(o);
				e[o.id] = o
			}
		},
		unregister : function(o) {
			if (Ext.isArray(o)) {
				for (var n = 0, m = o.length; n < m; n++) {
					this.unregister(o[n])
				}
			} else {
				o = Ext.get(o);
				delete e[o.id]
			}
		},
		vthresh : 25,
		hthresh : 25,
		increment : 100,
		frequency : 500,
		animate : true,
		animDuration : 0.4,
		refreshCache : function() {
			for (var m in e) {
				if (typeof e[m] == "object") {
					e[m]._region = e[m].getRegion()
				}
			}
		}
	}
}();
Ext.dd.Registry = function() {
	var d = {};
	var b = {};
	var a = 0;
	var c = function(g, e) {
		if (typeof g == "string") {
			return g
		}
		var h = g.id;
		if (!h && e !== false) {
			h = "extdd-" + (++a);
			g.id = h
		}
		return h
	};
	return {
		register : function(j, k) {
			k = k || {};
			if (typeof j == "string") {
				j = document.getElementById(j)
			}
			k.ddel = j;
			d[c(j)] = k;
			if (k.isHandle !== false) {
				b[k.ddel.id] = k
			}
			if (k.handles) {
				var h = k.handles;
				for (var g = 0, e = h.length; g < e; g++) {
					b[c(h[g])] = k
				}
			}
		},
		unregister : function(j) {
			var l = c(j, false);
			var k = d[l];
			if (k) {
				delete d[l];
				if (k.handles) {
					var h = k.handles;
					for (var g = 0, e = h.length; g < e; g++) {
						delete b[c(h[g], false)]
					}
				}
			}
		},
		getHandle : function(e) {
			if (typeof e != "string") {
				e = e.id
			}
			return b[e]
		},
		getHandleFromEvent : function(h) {
			var g = Ext.lib.Event.getTarget(h);
			return g ? b[g.id] : null
		},
		getTarget : function(e) {
			if (typeof e != "string") {
				e = e.id
			}
			return d[e]
		},
		getTargetFromEvent : function(h) {
			var g = Ext.lib.Event.getTarget(h);
			return g ? d[g.id] || b[g.id] : null
		}
	}
}();
Ext.dd.StatusProxy = function(a) {
	Ext.apply(this, a);
	this.id = this.id || Ext.id();
	this.el = new Ext.Layer({
				dh : {
					id : this.id,
					tag : "div",
					cls : "x-dd-drag-proxy " + this.dropNotAllowed,
					children : [{
								tag : "div",
								cls : "x-dd-drop-icon"
							}, {
								tag : "div",
								cls : "x-dd-drag-ghost"
							}]
				},
				shadow : !a || a.shadow !== false
			});
	this.ghost = Ext.get(this.el.dom.childNodes[1]);
	this.dropStatus = this.dropNotAllowed
};
Ext.dd.StatusProxy.prototype = {
	dropAllowed : "x-dd-drop-ok",
	dropNotAllowed : "x-dd-drop-nodrop",
	setStatus : function(a) {
		a = a || this.dropNotAllowed;
		if (this.dropStatus != a) {
			this.el.replaceClass(this.dropStatus, a);
			this.dropStatus = a
		}
	},
	reset : function(a) {
		this.el.dom.className = "x-dd-drag-proxy " + this.dropNotAllowed;
		this.dropStatus = this.dropNotAllowed;
		if (a) {
			this.ghost.update("")
		}
	},
	update : function(a) {
		if (typeof a == "string") {
			this.ghost.update(a)
		} else {
			this.ghost.update("");
			a.style.margin = "0";
			this.ghost.dom.appendChild(a)
		}
		var b = this.ghost.dom.firstChild;
		if (b) {
			Ext.fly(b).setStyle("float", "none")
		}
	},
	getEl : function() {
		return this.el
	},
	getGhost : function() {
		return this.ghost
	},
	hide : function(a) {
		this.el.hide();
		if (a) {
			this.reset(true)
		}
	},
	stop : function() {
		if (this.anim && this.anim.isAnimated && this.anim.isAnimated()) {
			this.anim.stop()
		}
	},
	show : function() {
		this.el.show()
	},
	sync : function() {
		this.el.sync()
	},
	repair : function(b, c, a) {
		this.callback = c;
		this.scope = a;
		if (b && this.animRepair !== false) {
			this.el.addClass("x-dd-drag-repair");
			this.el.hideUnders(true);
			this.anim = this.el.shift({
						duration : this.repairDuration || 0.5,
						easing : "easeOut",
						xy : b,
						stopFx : true,
						callback : this.afterRepair,
						scope : this
					})
		} else {
			this.afterRepair()
		}
	},
	afterRepair : function() {
		this.hide(true);
		if (typeof this.callback == "function") {
			this.callback.call(this.scope || this)
		}
		this.callback = null;
		this.scope = null
	},
	destroy : function() {
		Ext.destroy(this.ghost, this.el)
	}
};
Ext.dd.DragSource = function(b, a) {
	this.el = Ext.get(b);
	if (!this.dragData) {
		this.dragData = {}
	}
	Ext.apply(this, a);
	if (!this.proxy) {
		this.proxy = new Ext.dd.StatusProxy()
	}
	Ext.dd.DragSource.superclass.constructor.call(this, this.el.dom,
			this.ddGroup || this.group, {
				dragElId : this.proxy.id,
				resizeFrame : false,
				isTarget : false,
				scroll : this.scroll === true
			});
	this.dragging = false
};
Ext.extend(Ext.dd.DragSource, Ext.dd.DDProxy, {
			dropAllowed : "x-dd-drop-ok",
			dropNotAllowed : "x-dd-drop-nodrop",
			getDragData : function(a) {
				return this.dragData
			},
			onDragEnter : function(c, d) {
				var b = Ext.dd.DragDropMgr.getDDById(d);
				this.cachedTarget = b;
				if (this.beforeDragEnter(b, c, d) !== false) {
					if (b.isNotifyTarget) {
						var a = b.notifyEnter(this, c, this.dragData);
						this.proxy.setStatus(a)
					} else {
						this.proxy.setStatus(this.dropAllowed)
					}
					if (this.afterDragEnter) {
						this.afterDragEnter(b, c, d)
					}
				}
			},
			beforeDragEnter : function(b, a, c) {
				return true
			},
			alignElWithMouse : function() {
				Ext.dd.DragSource.superclass.alignElWithMouse.apply(this,
						arguments);
				this.proxy.sync()
			},
			onDragOver : function(c, d) {
				var b = this.cachedTarget || Ext.dd.DragDropMgr.getDDById(d);
				if (this.beforeDragOver(b, c, d) !== false) {
					if (b.isNotifyTarget) {
						var a = b.notifyOver(this, c, this.dragData);
						this.proxy.setStatus(a)
					}
					if (this.afterDragOver) {
						this.afterDragOver(b, c, d)
					}
				}
			},
			beforeDragOver : function(b, a, c) {
				return true
			},
			onDragOut : function(b, c) {
				var a = this.cachedTarget || Ext.dd.DragDropMgr.getDDById(c);
				if (this.beforeDragOut(a, b, c) !== false) {
					if (a.isNotifyTarget) {
						a.notifyOut(this, b, this.dragData)
					}
					this.proxy.reset();
					if (this.afterDragOut) {
						this.afterDragOut(a, b, c)
					}
				}
				this.cachedTarget = null
			},
			beforeDragOut : function(b, a, c) {
				return true
			},
			onDragDrop : function(b, c) {
				var a = this.cachedTarget || Ext.dd.DragDropMgr.getDDById(c);
				if (this.beforeDragDrop(a, b, c) !== false) {
					if (a.isNotifyTarget) {
						if (a.notifyDrop(this, b, this.dragData)) {
							this.onValidDrop(a, b, c)
						} else {
							this.onInvalidDrop(a, b, c)
						}
					} else {
						this.onValidDrop(a, b, c)
					}
					if (this.afterDragDrop) {
						this.afterDragDrop(a, b, c)
					}
				}
				delete this.cachedTarget
			},
			beforeDragDrop : function(b, a, c) {
				return true
			},
			onValidDrop : function(b, a, c) {
				this.hideProxy();
				if (this.afterValidDrop) {
					this.afterValidDrop(b, a, c)
				}
			},
			getRepairXY : function(b, a) {
				return this.el.getXY()
			},
			onInvalidDrop : function(b, a, c) {
				this.beforeInvalidDrop(b, a, c);
				if (this.cachedTarget) {
					if (this.cachedTarget.isNotifyTarget) {
						this.cachedTarget.notifyOut(this, a, this.dragData)
					}
					this.cacheTarget = null
				}
				this.proxy.repair(this.getRepairXY(a, this.dragData),
						this.afterRepair, this);
				if (this.afterInvalidDrop) {
					this.afterInvalidDrop(a, c)
				}
			},
			afterRepair : function() {
				if (Ext.enableFx) {
					this.el.highlight(this.hlColor || "c3daf9")
				}
				this.dragging = false
			},
			beforeInvalidDrop : function(b, a, c) {
				return true
			},
			handleMouseDown : function(b) {
				if (this.dragging) {
					return
				}
				var a = this.getDragData(b);
				if (a && this.onBeforeDrag(a, b) !== false) {
					this.dragData = a;
					this.proxy.stop();
					Ext.dd.DragSource.superclass.handleMouseDown.apply(this,
							arguments)
				}
			},
			onBeforeDrag : function(a, b) {
				return true
			},
			onStartDrag : Ext.emptyFn,
			startDrag : function(a, b) {
				this.proxy.reset();
				this.dragging = true;
				this.proxy.update("");
				this.onInitDrag(a, b);
				this.proxy.show()
			},
			onInitDrag : function(a, c) {
				var b = this.el.dom.cloneNode(true);
				b.id = Ext.id();
				this.proxy.update(b);
				this.onStartDrag(a, c);
				return true
			},
			getProxy : function() {
				return this.proxy
			},
			hideProxy : function() {
				this.proxy.hide();
				this.proxy.reset(true);
				this.dragging = false
			},
			triggerCacheRefresh : function() {
				Ext.dd.DDM.refreshCache(this.groups)
			},
			b4EndDrag : function(a) {
			},
			endDrag : function(a) {
				this.onEndDrag(this.dragData, a)
			},
			onEndDrag : function(a, b) {
			},
			autoOffset : function(a, b) {
				this.setDelta(-12, -20)
			},
			destroy : function() {
				Ext.dd.DragSource.superclass.destroy.call(this);
				Ext.destroy(this.proxy)
			}
		});
Ext.dd.DropTarget = function(b, a) {
	this.el = Ext.get(b);
	Ext.apply(this, a);
	if (this.containerScroll) {
		Ext.dd.ScrollManager.register(this.el)
	}
	Ext.dd.DropTarget.superclass.constructor.call(this, this.el.dom,
			this.ddGroup || this.group, {
				isTarget : true
			})
};
Ext.extend(Ext.dd.DropTarget, Ext.dd.DDTarget, {
			dropAllowed : "x-dd-drop-ok",
			dropNotAllowed : "x-dd-drop-nodrop",
			isTarget : true,
			isNotifyTarget : true,
			notifyEnter : function(a, c, b) {
				if (this.overClass) {
					this.el.addClass(this.overClass)
				}
				return this.dropAllowed
			},
			notifyOver : function(a, c, b) {
				return this.dropAllowed
			},
			notifyOut : function(a, c, b) {
				if (this.overClass) {
					this.el.removeClass(this.overClass)
				}
			},
			notifyDrop : function(a, c, b) {
				return false
			}
		});
Ext.dd.DragZone = function(b, a) {
	Ext.dd.DragZone.superclass.constructor.call(this, b, a);
	if (this.containerScroll) {
		Ext.dd.ScrollManager.register(this.el)
	}
};
Ext.extend(Ext.dd.DragZone, Ext.dd.DragSource, {
			getDragData : function(a) {
				return Ext.dd.Registry.getHandleFromEvent(a)
			},
			onInitDrag : function(a, b) {
				this.proxy.update(this.dragData.ddel.cloneNode(true));
				this.onStartDrag(a, b);
				return true
			},
			afterRepair : function() {
				if (Ext.enableFx) {
					Ext.Element.fly(this.dragData.ddel).highlight(this.hlColor
							|| "c3daf9")
				}
				this.dragging = false
			},
			getRepairXY : function(a) {
				return Ext.Element.fly(this.dragData.ddel).getXY()
			}
		});
Ext.dd.DropZone = function(b, a) {
	Ext.dd.DropZone.superclass.constructor.call(this, b, a)
};
Ext.extend(Ext.dd.DropZone, Ext.dd.DropTarget, {
			getTargetFromEvent : function(a) {
				return Ext.dd.Registry.getTargetFromEvent(a)
			},
			onNodeEnter : function(d, a, c, b) {
			},
			onNodeOver : function(d, a, c, b) {
				return this.dropAllowed
			},
			onNodeOut : function(d, a, c, b) {
			},
			onNodeDrop : function(d, a, c, b) {
				return false
			},
			onContainerOver : function(a, c, b) {
				return this.dropNotAllowed
			},
			onContainerDrop : function(a, c, b) {
				return false
			},
			notifyEnter : function(a, c, b) {
				return this.dropNotAllowed
			},
			notifyOver : function(a, c, b) {
				var d = this.getTargetFromEvent(c);
				if (!d) {
					if (this.lastOverNode) {
						this.onNodeOut(this.lastOverNode, a, c, b);
						this.lastOverNode = null
					}
					return this.onContainerOver(a, c, b)
				}
				if (this.lastOverNode != d) {
					if (this.lastOverNode) {
						this.onNodeOut(this.lastOverNode, a, c, b)
					}
					this.onNodeEnter(d, a, c, b);
					this.lastOverNode = d
				}
				return this.onNodeOver(d, a, c, b)
			},
			notifyOut : function(a, c, b) {
				if (this.lastOverNode) {
					this.onNodeOut(this.lastOverNode, a, c, b);
					this.lastOverNode = null
				}
			},
			notifyDrop : function(a, c, b) {
				if (this.lastOverNode) {
					this.onNodeOut(this.lastOverNode, a, c, b);
					this.lastOverNode = null
				}
				var d = this.getTargetFromEvent(c);
				return d ? this.onNodeDrop(d, a, c, b) : this.onContainerDrop(
						a, c, b)
			},
			triggerCacheRefresh : function() {
				Ext.dd.DDM.refreshCache(this.groups)
			}
		});
Ext.Element.addMethods({
			initDD : function(c, b, d) {
				var a = new Ext.dd.DD(Ext.id(this.dom), c, b);
				return Ext.apply(a, d)
			},
			initDDProxy : function(c, b, d) {
				var a = new Ext.dd.DDProxy(Ext.id(this.dom), c, b);
				return Ext.apply(a, d)
			},
			initDDTarget : function(c, b, d) {
				var a = new Ext.dd.DDTarget(Ext.id(this.dom), c, b);
				return Ext.apply(a, d)
			}
		});
Ext.data.Api = (function() {
	var a = {};
	return {
		actions : {
			create : "create",
			read : "read",
			update : "update",
			destroy : "destroy"
		},
		restActions : {
			create : "POST",
			read : "GET",
			update : "PUT",
			destroy : "DELETE"
		},
		isAction : function(b) {
			return (Ext.data.Api.actions[b]) ? true : false
		},
		getVerb : function(b) {
			if (a[b]) {
				return a[b]
			}
			for (var c in this.actions) {
				if (this.actions[c] === b) {
					a[b] = c;
					break
				}
			}
			return (a[b] !== undefined) ? a[b] : null
		},
		isValid : function(b) {
			var e = [];
			var d = this.actions;
			for (var c in b) {
				if (!(c in d)) {
					e.push(c)
				}
			}
			return (!e.length) ? true : e
		},
		hasUniqueUrl : function(c, g) {
			var b = (c.api[g]) ? c.api[g].url : null;
			var e = true;
			for (var d in c.api) {
				if ((e = (d === g) ? true : (c.api[d].url != b) ? true : false) === false) {
					break
				}
			}
			return e
		},
		prepare : function(b) {
			if (!b.api) {
				b.api = {}
			}
			for (var d in this.actions) {
				var c = this.actions[d];
				b.api[c] = b.api[c] || b.url || b.directFn;
				if (typeof(b.api[c]) == "string") {
					b.api[c] = {
						url : b.api[c],
						method : (b.restful === true)
								? Ext.data.Api.restActions[c]
								: undefined
					}
				}
			}
		},
		restify : function(b) {
			b.restful = true;
			for (var c in this.restActions) {
				b.api[this.actions[c]].method = this.restActions[c]
			}
			b.onWrite = b.onWrite.createInterceptor(function(j, k, g, e) {
						var d = k.reader;
						var h = new Ext.data.Response({
									action : j,
									raw : g
								});
						switch (g.status) {
							case 200 :
								return true;
								break;
							case 201 :
								h.success = true;
								break;
							case 204 :
								h.success = true;
								h.data = null;
								break;
							default :
								return true;
								break
						}
						if (h.success === true) {
							this.fireEvent("write", this, j, h.data, h, e,
									k.request.arg)
						} else {
							this.fireEvent("exception", this, "remote", j, k,
									h, e)
						}
						k.request.callback.call(k.request.scope, h.data, h,
								h.success);
						return false
					}, b)
		}
	}
})();
Ext.data.Response = function(b, a) {
	Ext.apply(this, b, {
				raw : a
			})
};
Ext.data.Response.prototype = {
	message : null,
	success : false,
	status : null,
	root : null,
	raw : null,
	getMessage : function() {
		return this.message
	},
	getSuccess : function() {
		return this.success
	},
	getStatus : function() {
		return this.status
	},
	getRoot : function() {
		return this.root
	},
	getRawResponse : function() {
		return this.raw
	}
};
Ext.data.Api.Error = Ext.extend(Ext.Error, {
			constructor : function(b, a) {
				this.arg = a;
				Ext.Error.call(this, b)
			},
			name : "Ext.data.Api"
		});
Ext.apply(Ext.data.Api.Error.prototype, {
	lang : {
		"action-url-undefined" : "No fallback url defined for this action.  When defining a DataProxy api, please be sure to define an url for each CRUD action in Ext.data.Api.actions or define a default url in addition to your api-configuration.",
		invalid : "received an invalid API-configuration.  Please ensure your proxy API-configuration contains only the actions defined in Ext.data.Api.actions",
		"invalid-url" : "Invalid url.  Please review your proxy configuration.",
		execute : 'Attempted to execute an unknown action.  Valid API actions are defined in Ext.data.Api.actions"'
	}
});
Ext.data.SortTypes = {
	none : function(a) {
		return a
	},
	stripTagsRE : /<\/?[^>]+>/gi,
	asText : function(a) {
		return String(a).replace(this.stripTagsRE, "")
	},
	asUCText : function(a) {
		return String(a).toUpperCase().replace(this.stripTagsRE, "")
	},
	asUCString : function(a) {
		return String(a).toUpperCase()
	},
	asDate : function(a) {
		if (!a) {
			return 0
		}
		if (Ext.isDate(a)) {
			return a.getTime()
		}
		return Date.parse(String(a))
	},
	asFloat : function(a) {
		var b = parseFloat(String(a).replace(/,/g, ""));
		return isNaN(b) ? 0 : b
	},
	asInt : function(a) {
		var b = parseInt(String(a).replace(/,/g, ""), 10);
		return isNaN(b) ? 0 : b
	}
};
Ext.data.Record = function(a, b) {
	this.id = (b || b === 0) ? b : Ext.data.Record.id(this);
	this.data = a || {}
};
Ext.data.Record.create = function(e) {
	var c = Ext.extend(Ext.data.Record, {});
	var d = c.prototype;
	d.fields = new Ext.util.MixedCollection(false, function(g) {
				return g.name
			});
	for (var b = 0, a = e.length; b < a; b++) {
		d.fields.add(new Ext.data.Field(e[b]))
	}
	c.getField = function(g) {
		return d.fields.get(g)
	};
	return c
};
Ext.data.Record.PREFIX = "ext-record";
Ext.data.Record.AUTO_ID = 1;
Ext.data.Record.EDIT = "edit";
Ext.data.Record.REJECT = "reject";
Ext.data.Record.COMMIT = "commit";
Ext.data.Record.id = function(a) {
	a.phantom = true;
	return [Ext.data.Record.PREFIX, "-", Ext.data.Record.AUTO_ID++].join("")
};
Ext.data.Record.prototype = {
	dirty : false,
	editing : false,
	error : null,
	modified : null,
	phantom : false,
	join : function(a) {
		this.store = a
	},
	set : function(a, c) {
		var b = Ext.isPrimitive(c) ? String : Ext.encode;
		if (b(this.data[a]) == b(c)) {
			return
		}
		this.dirty = true;
		if (!this.modified) {
			this.modified = {}
		}
		if (this.modified[a] === undefined) {
			this.modified[a] = this.data[a]
		}
		this.data[a] = c;
		if (!this.editing) {
			this.afterEdit()
		}
	},
	afterEdit : function() {
		if (this.store) {
			this.store.afterEdit(this)
		}
	},
	afterReject : function() {
		if (this.store) {
			this.store.afterReject(this)
		}
	},
	afterCommit : function() {
		if (this.store) {
			this.store.afterCommit(this)
		}
	},
	get : function(a) {
		return this.data[a]
	},
	beginEdit : function() {
		this.editing = true;
		this.modified = this.modified || {}
	},
	cancelEdit : function() {
		this.editing = false;
		delete this.modified
	},
	endEdit : function() {
		this.editing = false;
		if (this.dirty) {
			this.afterEdit()
		}
	},
	reject : function(b) {
		var a = this.modified;
		for (var c in a) {
			if (typeof a[c] != "function") {
				this.data[c] = a[c]
			}
		}
		this.dirty = false;
		delete this.modified;
		this.editing = false;
		if (b !== true) {
			this.afterReject()
		}
	},
	commit : function(a) {
		this.dirty = false;
		delete this.modified;
		this.editing = false;
		if (a !== true) {
			this.afterCommit()
		}
	},
	getChanges : function() {
		var a = this.modified, b = {};
		for (var c in a) {
			if (a.hasOwnProperty(c)) {
				b[c] = this.data[c]
			}
		}
		return b
	},
	hasError : function() {
		return this.error !== null
	},
	clearError : function() {
		this.error = null
	},
	copy : function(a) {
		return new this.constructor(Ext.apply({}, this.data), a || this.id)
	},
	isModified : function(a) {
		return !!(this.modified && this.modified.hasOwnProperty(a))
	},
	isValid : function() {
		return this.fields.find(function(a) {
					return (a.allowBlank === false && Ext
							.isEmpty(this.data[a.name])) ? true : false
				}, this) ? false : true
	},
	markDirty : function() {
		this.dirty = true;
		if (!this.modified) {
			this.modified = {}
		}
		this.fields.each(function(a) {
					this.modified[a.name] = this.data[a.name]
				}, this)
	}
};
Ext.StoreMgr = Ext.apply(new Ext.util.MixedCollection(), {
			register : function() {
				for (var a = 0, b; (b = arguments[a]); a++) {
					this.add(b)
				}
			},
			unregister : function() {
				for (var a = 0, b; (b = arguments[a]); a++) {
					this.remove(this.lookup(b))
				}
			},
			lookup : function(e) {
				if (Ext.isArray(e)) {
					var b = ["field1"], d = !Ext.isArray(e[0]);
					if (!d) {
						for (var c = 2, a = e[0].length; c <= a; ++c) {
							b.push("field" + c)
						}
					}
					return new Ext.data.ArrayStore({
								fields : b,
								data : e,
								expandData : d,
								autoDestroy : true,
								autoCreated : true
							})
				}
				return Ext.isObject(e)
						? (e.events ? e : Ext.create(e, "store"))
						: this.get(e)
			},
			getKey : function(a) {
				return a.storeId
			}
		});
Ext.data.Store = Ext.extend(Ext.util.Observable, {
			writer : undefined,
			remoteSort : false,
			autoDestroy : false,
			pruneModifiedRecords : false,
			lastOptions : null,
			autoSave : true,
			batch : true,
			restful : false,
			paramNames : undefined,
			defaultParamNames : {
				start : "start",
				limit : "limit",
				sort : "sort",
				dir : "dir"
			},
			batchKey : "_ext_batch_",
			constructor : function(a) {
				this.data = new Ext.util.MixedCollection(false);
				this.data.getKey = function(b) {
					return b.id
				};
				this.baseParams = {};
				this.removed = [];
				if (a && a.data) {
					this.inlineData = a.data;
					delete a.data
				}
				Ext.apply(this, a);
				this.paramNames = Ext.applyIf(this.paramNames || {},
						this.defaultParamNames);
				if ((this.url || this.api) && !this.proxy) {
					this.proxy = new Ext.data.HttpProxy({
								url : this.url,
								api : this.api
							})
				}
				if (this.restful === true && this.proxy) {
					this.batch = false;
					Ext.data.Api.restify(this.proxy)
				}
				if (this.reader) {
					if (!this.recordType) {
						this.recordType = this.reader.recordType
					}
					if (this.reader.onMetaChange) {
						this.reader.onMetaChange = this.reader.onMetaChange
								.createSequence(this.onMetaChange, this)
					}
					if (this.writer) {
						if (this.writer instanceof (Ext.data.DataWriter) === false) {
							this.writer = this.buildWriter(this.writer)
						}
						this.writer.meta = this.reader.meta;
						this.pruneModifiedRecords = true
					}
				}
				if (this.recordType) {
					this.fields = this.recordType.prototype.fields
				}
				this.modified = [];
				this.addEvents("datachanged", "metachange", "add", "remove",
						"update", "clear", "exception", "beforeload", "load",
						"loadexception", "beforewrite", "write", "beforesave",
						"save");
				if (this.proxy) {
					this
							.relayEvents(this.proxy, ["loadexception",
											"exception"])
				}
				if (this.writer) {
					this.on({
								scope : this,
								add : this.createRecords,
								remove : this.destroyRecord,
								update : this.updateRecord,
								clear : this.onClear
							})
				}
				this.sortToggle = {};
				if (this.sortField) {
					this.setDefaultSort(this.sortField, this.sortDir)
				} else {
					if (this.sortInfo) {
						this.setDefaultSort(this.sortInfo.field,
								this.sortInfo.direction)
					}
				}
				Ext.data.Store.superclass.constructor.call(this);
				if (this.id) {
					this.storeId = this.id;
					delete this.id
				}
				if (this.storeId) {
					Ext.StoreMgr.register(this)
				}
				if (this.inlineData) {
					this.loadData(this.inlineData);
					delete this.inlineData
				} else {
					if (this.autoLoad) {
						this.load.defer(10, this,
								[typeof this.autoLoad == "object"
										? this.autoLoad
										: undefined])
					}
				}
				this.batchCounter = 0;
				this.batches = {}
			},
			buildWriter : function(b) {
				var a = undefined;
				type = (b.format || "json").toLowerCase();
				switch (type) {
					case "json" :
						a = Ext.data.JsonWriter;
						break;
					case "xml" :
						a = Ext.data.XmlWriter;
						break;
					default :
						a = Ext.data.JsonWriter
				}
				return new a(b)
			},
			destroy : function() {
				if (!this.isDestroyed) {
					if (this.storeId) {
						Ext.StoreMgr.unregister(this)
					}
					this.clearData();
					this.data = null;
					Ext.destroy(this.proxy);
					this.reader = this.writer = null;
					this.purgeListeners();
					this.isDestroyed = true
				}
			},
			add : function(b) {
				b = [].concat(b);
				if (b.length < 1) {
					return
				}
				for (var d = 0, a = b.length; d < a; d++) {
					b[d].join(this)
				}
				var c = this.data.length;
				this.data.addAll(b);
				if (this.snapshot) {
					this.snapshot.addAll(b)
				}
				this.fireEvent("add", this, b, c)
			},
			addSorted : function(a) {
				var b = this.findInsertIndex(a);
				this.insert(b, a)
			},
			remove : function(a) {
				if (Ext.isArray(a)) {
					Ext.each(a, function(c) {
								this.remove(c)
							}, this)
				}
				var b = this.data.indexOf(a);
				if (b > -1) {
					a.join(null);
					this.data.removeAt(b)
				}
				if (this.pruneModifiedRecords) {
					this.modified.remove(a)
				}
				if (this.snapshot) {
					this.snapshot.remove(a)
				}
				if (b > -1) {
					this.fireEvent("remove", this, a, b)
				}
			},
			removeAt : function(a) {
				this.remove(this.getAt(a))
			},
			removeAll : function(b) {
				var a = [];
				this.each(function(c) {
							a.push(c)
						});
				this.clearData();
				if (this.snapshot) {
					this.snapshot.clear()
				}
				if (this.pruneModifiedRecords) {
					this.modified = []
				}
				if (b !== true) {
					this.fireEvent("clear", this, a)
				}
			},
			onClear : function(b, a) {
				Ext.each(a, function(d, c) {
							this.destroyRecord(this, d, c)
						}, this)
			},
			insert : function(c, b) {
				b = [].concat(b);
				for (var d = 0, a = b.length; d < a; d++) {
					this.data.insert(c, b[d]);
					b[d].join(this)
				}
				if (this.snapshot) {
					this.snapshot.addAll(b)
				}
				this.fireEvent("add", this, b, c)
			},
			indexOf : function(a) {
				return this.data.indexOf(a)
			},
			indexOfId : function(a) {
				return this.data.indexOfKey(a)
			},
			getById : function(a) {
				return (this.snapshot || this.data).key(a)
			},
			getAt : function(a) {
				return this.data.itemAt(a)
			},
			getRange : function(b, a) {
				return this.data.getRange(b, a)
			},
			storeOptions : function(a) {
				a = Ext.apply({}, a);
				delete a.callback;
				delete a.scope;
				this.lastOptions = a
			},
			clearData : function() {
				this.data.each(function(a) {
							a.join(null)
						});
				this.data.clear()
			},
			load : function(b) {
				b = b || {};
				this.storeOptions(b);
				if (this.sortInfo && this.remoteSort) {
					var a = this.paramNames;
					b.params = b.params || {};
					b.params[a.sort] = this.sortInfo.field;
					b.params[a.dir] = this.sortInfo.direction
				}
				try {
					return this.execute("read", null, b)
				} catch (c) {
					this.handleException(c);
					return false
				}
			},
			updateRecord : function(b, a, c) {
				if (c == Ext.data.Record.EDIT && this.autoSave === true
						&& (!a.phantom || (a.phantom && a.isValid()))) {
					this.save()
				}
			},
			createRecords : function(c, b, d) {
				for (var e = 0, a = b.length; e < a; e++) {
					if (b[e].phantom && b[e].isValid()) {
						b[e].markDirty();
						this.modified.push(b[e])
					}
				}
				if (this.autoSave === true) {
					this.save()
				}
			},
			destroyRecord : function(b, a, c) {
				if (this.modified.indexOf(a) != -1) {
					this.modified.remove(a)
				}
				if (!a.phantom) {
					this.removed.push(a);
					a.lastIndex = c;
					if (this.autoSave === true) {
						this.save()
					}
				}
			},
			execute : function(e, a, c, b) {
				if (!Ext.data.Api.isAction(e)) {
					throw new Ext.data.Api.Error("execute", e)
				}
				c = Ext.applyIf(c || {}, {
							params : {}
						});
				if (b !== undefined) {
					this.addToBatch(b)
				}
				var d = true;
				if (e === "read") {
					Ext.applyIf(c.params, this.baseParams);
					d = this.fireEvent("beforeload", this, c)
				} else {
					if (this.writer.listful === true && this.restful !== true) {
						a = (Ext.isArray(a)) ? a : [a]
					} else {
						if (Ext.isArray(a) && a.length == 1) {
							a = a.shift()
						}
					}
					if ((d = this.fireEvent("beforewrite", this, e, a, c)) !== false) {
						this.writer.apply(c.params, this.baseParams, e, a)
					}
				}
				if (d !== false) {
					if (this.writer && this.proxy.url && !this.proxy.restful
							&& !Ext.data.Api.hasUniqueUrl(this.proxy, e)) {
						c.params.xaction = e
					}
					this.proxy.request(Ext.data.Api.actions[e], a, c.params,
							this.reader, this.createCallback(e, a, b), this, c)
				}
				return d
			},
			save : function() {
				if (!this.writer) {
					throw new Ext.data.Store.Error("writer-undefined")
				}
				var h = [], j, k, e, c = {};
				if (this.removed.length) {
					h.push(["destroy", this.removed])
				}
				var b = [].concat(this.getModifiedRecords());
				if (b.length) {
					var g = [];
					for (var d = b.length - 1; d >= 0; d--) {
						if (b[d].phantom === true) {
							var a = b.splice(d, 1).shift();
							if (a.isValid()) {
								g.push(a)
							}
						} else {
							if (!b[d].isValid()) {
								b.splice(d, 1)
							}
						}
					}
					if (g.length) {
						h.push(["create", g])
					}
					if (b.length) {
						h.push(["update", b])
					}
				}
				j = h.length;
				if (j) {
					e = ++this.batchCounter;
					for (var d = 0; d < j; ++d) {
						k = h[d];
						c[k[0]] = k[1]
					}
					if (this.fireEvent("beforesave", this, c) !== false) {
						for (var d = 0; d < j; ++d) {
							k = h[d];
							this.doTransaction(k[0], k[1], e)
						}
						return e
					}
				}
				return -1
			},
			doTransaction : function(e, b, c) {
				function g(h) {
					try {
						this.execute(e, h, undefined, c)
					} catch (j) {
						this.handleException(j)
					}
				}
				if (this.batch === false) {
					for (var d = 0, a = b.length; d < a; d++) {
						g.call(this, b[d])
					}
				} else {
					g.call(this, b)
				}
			},
			addToBatch : function(c) {
				var a = this.batches, d = this.batchKey + c, e = a[d];
				if (!e) {
					a[d] = e = {
						id : c,
						count : 0,
						data : {}
					}
				}
				++e.count
			},
			removeFromBatch : function(d, h, g) {
				var c = this.batches, e = this.batchKey + d, j = c[e], g, a;
				if (j) {
					a = j.data[h] || [];
					j.data[h] = a.concat(g);
					if (j.count === 1) {
						g = j.data;
						delete c[e];
						this.fireEvent("save", this, d, g)
					} else {
						--j.count
					}
				}
			},
			createCallback : function(c, a, b) {
				var d = Ext.data.Api.actions;
				return (c == "read") ? this.loadRecords : function(g, e, h) {
					this["on" + Ext.util.Format.capitalize(c) + "Records"](h,
							a, [].concat(g));
					if (h === true) {
						this.fireEvent("write", this, c, g, e, a)
					}
					this.removeFromBatch(b, c, g)
				}
			},
			clearModified : function(a) {
				if (Ext.isArray(a)) {
					for (var b = a.length - 1; b >= 0; b--) {
						this.modified.splice(this.modified.indexOf(a[b]), 1)
					}
				} else {
					this.modified.splice(this.modified.indexOf(a), 1)
				}
			},
			reMap : function(b) {
				if (Ext.isArray(b)) {
					for (var d = 0, a = b.length; d < a; d++) {
						this.reMap(b[d])
					}
				} else {
					delete this.data.map[b._phid];
					this.data.map[b.id] = b;
					var c = this.data.keys.indexOf(b._phid);
					this.data.keys.splice(c, 1, b.id);
					delete b._phid
				}
			},
			onCreateRecords : function(d, a, b) {
				if (d === true) {
					try {
						this.reader.realize(a, b);
						this.reMap(a)
					} catch (c) {
						this.handleException(c);
						if (Ext.isArray(a)) {
							this.onCreateRecords(d, a, b)
						}
					}
				}
			},
			onUpdateRecords : function(d, a, b) {
				if (d === true) {
					try {
						this.reader.update(a, b)
					} catch (c) {
						this.handleException(c);
						if (Ext.isArray(a)) {
							this.onUpdateRecords(d, a, b)
						}
					}
				}
			},
			onDestroyRecords : function(e, b, d) {
				b = (b instanceof Ext.data.Record) ? [b] : [].concat(b);
				for (var c = 0, a = b.length; c < a; c++) {
					this.removed.splice(this.removed.indexOf(b[c]), 1)
				}
				if (e === false) {
					for (c = b.length - 1; c >= 0; c--) {
						this.insert(b[c].lastIndex, b[c])
					}
				}
			},
			handleException : function(a) {
				Ext.handleError(a)
			},
			reload : function(a) {
				this.load(Ext.applyIf(a || {}, this.lastOptions))
			},
			loadRecords : function(h, b, g) {
				if (this.isDestroyed === true) {
					return
				}
				if (!h || g === false) {
					if (g !== false) {
						this.fireEvent("load", this, [], b)
					}
					if (b.callback) {
						b.callback.call(b.scope || this, [], b, false, h)
					}
					return
				}
				var e = h.records, d = h.totalRecords || e.length;
				if (!b || b.add !== true) {
					if (this.pruneModifiedRecords) {
						this.modified = []
					}
					for (var c = 0, a = e.length; c < a; c++) {
						e[c].join(this)
					}
					if (this.snapshot) {
						this.data = this.snapshot;
						delete this.snapshot
					}
					this.clearData();
					this.data.addAll(e);
					this.totalLength = d;
					this.applySort();
					this.fireEvent("datachanged", this)
				} else {
					this.totalLength = Math.max(d, this.data.length + e.length);
					this.add(e)
				}
				this.fireEvent("load", this, e, b);
				if (b.callback) {
					b.callback.call(b.scope || this, e, b, true)
				}
			},
			loadData : function(c, a) {
				var b = this.reader.readRecords(c);
				this.loadRecords(b, {
							add : a
						}, true)
			},
			getCount : function() {
				return this.data.length || 0
			},
			getTotalCount : function() {
				return this.totalLength || 0
			},
			getSortState : function() {
				return this.sortInfo
			},
			applySort : function() {
				if (this.sortInfo && !this.remoteSort) {
					var a = this.sortInfo, b = a.field;
					this.sortData(b, a.direction)
				}
			},
			sortData : function(c, d) {
				d = d || "ASC";
				var a = this.fields.get(c).sortType;
				var b = function(g, e) {
					var j = a(g.data[c]), h = a(e.data[c]);
					return j > h ? 1 : (j < h ? -1 : 0)
				};
				this.data.sort(d, b);
				if (this.snapshot && this.snapshot != this.data) {
					this.snapshot.sort(d, b)
				}
			},
			setDefaultSort : function(b, a) {
				a = a ? a.toUpperCase() : "ASC";
				this.sortInfo = {
					field : b,
					direction : a
				};
				this.sortToggle[b] = a
			},
			sort : function(e, c) {
				var d = this.fields.get(e);
				if (!d) {
					return false
				}
				if (!c) {
					if (this.sortInfo && this.sortInfo.field == d.name) {
						c = (this.sortToggle[d.name] || "ASC").toggle("ASC",
								"DESC")
					} else {
						c = d.sortDir
					}
				}
				var b = (this.sortToggle) ? this.sortToggle[d.name] : null;
				var a = (this.sortInfo) ? this.sortInfo : null;
				this.sortToggle[d.name] = c;
				this.sortInfo = {
					field : d.name,
					direction : c
				};
				if (!this.remoteSort) {
					this.applySort();
					this.fireEvent("datachanged", this)
				} else {
					if (!this.load(this.lastOptions)) {
						if (b) {
							this.sortToggle[d.name] = b
						}
						if (a) {
							this.sortInfo = a
						}
					}
				}
			},
			each : function(b, a) {
				this.data.each(b, a)
			},
			getModifiedRecords : function() {
				return this.modified
			},
			createFilterFn : function(c, b, d, a) {
				if (Ext.isEmpty(b, false)) {
					return false
				}
				b = this.data.createValueMatcher(b, d, a);
				return function(e) {
					return b.test(e.data[c])
				}
			},
			sum : function(e, g, a) {
				var c = this.data.items, b = 0;
				g = g || 0;
				a = (a || a === 0) ? a : c.length - 1;
				for (var d = g; d <= a; d++) {
					b += (c[d].data[e] || 0)
				}
				return b
			},
			filter : function(d, c, e, a) {
				var b = this.createFilterFn(d, c, e, a);
				return b ? this.filterBy(b) : this.clearFilter()
			},
			filterBy : function(b, a) {
				this.snapshot = this.snapshot || this.data;
				this.data = this.queryBy(b, a || this);
				this.fireEvent("datachanged", this)
			},
			query : function(d, c, e, a) {
				var b = this.createFilterFn(d, c, e, a);
				return b ? this.queryBy(b) : this.data.clone()
			},
			queryBy : function(b, a) {
				var c = this.snapshot || this.data;
				return c.filterBy(b, a || this)
			},
			find : function(d, c, g, e, a) {
				var b = this.createFilterFn(d, c, e, a);
				return b ? this.data.findIndexBy(b, null, g) : -1
			},
			findExact : function(b, a, c) {
				return this.data.findIndexBy(function(d) {
							return d.get(b) === a
						}, this, c)
			},
			findBy : function(b, a, c) {
				return this.data.findIndexBy(b, a, c)
			},
			collect : function(j, k, b) {
				var h = (b === true && this.snapshot)
						? this.snapshot.items
						: this.data.items;
				var m, n, a = [], c = {};
				for (var e = 0, g = h.length; e < g; e++) {
					m = h[e].data[j];
					n = String(m);
					if ((k || !Ext.isEmpty(m)) && !c[n]) {
						c[n] = true;
						a[a.length] = m
					}
				}
				return a
			},
			clearFilter : function(a) {
				if (this.isFiltered()) {
					this.data = this.snapshot;
					delete this.snapshot;
					if (a !== true) {
						this.fireEvent("datachanged", this)
					}
				}
			},
			isFiltered : function() {
				return this.snapshot && this.snapshot != this.data
			},
			afterEdit : function(a) {
				if (this.modified.indexOf(a) == -1) {
					this.modified.push(a)
				}
				this.fireEvent("update", this, a, Ext.data.Record.EDIT)
			},
			afterReject : function(a) {
				this.modified.remove(a);
				this.fireEvent("update", this, a, Ext.data.Record.REJECT)
			},
			afterCommit : function(a) {
				this.modified.remove(a);
				this.fireEvent("update", this, a, Ext.data.Record.COMMIT)
			},
			commitChanges : function() {
				var b = this.modified.slice(0);
				this.modified = [];
				for (var c = 0, a = b.length; c < a; c++) {
					b[c].commit()
				}
			},
			rejectChanges : function() {
				var b = this.modified.slice(0);
				this.modified = [];
				for (var c = 0, a = b.length; c < a; c++) {
					b[c].reject()
				}
				var b = this.removed.slice(0).reverse();
				this.removed = [];
				for (var c = 0, a = b.length; c < a; c++) {
					this.insert(b[c].lastIndex || 0, b[c]);
					b[c].reject()
				}
			},
			onMetaChange : function(a) {
				this.recordType = this.reader.recordType;
				this.fields = this.recordType.prototype.fields;
				delete this.snapshot;
				if (this.reader.meta.sortInfo) {
					this.sortInfo = this.reader.meta.sortInfo
				} else {
					if (this.sortInfo && !this.fields.get(this.sortInfo.field)) {
						delete this.sortInfo
					}
				}
				if (this.writer) {
					this.writer.meta = this.reader.meta
				}
				this.modified = [];
				this.fireEvent("metachange", this, this.reader.meta)
			},
			findInsertIndex : function(a) {
				this.suspendEvents();
				var c = this.data.clone();
				this.data.add(a);
				this.applySort();
				var b = this.data.indexOf(a);
				this.data = c;
				this.resumeEvents();
				return b
			},
			setBaseParam : function(a, b) {
				this.baseParams = this.baseParams || {};
				this.baseParams[a] = b
			}
		});
Ext.reg("store", Ext.data.Store);
Ext.data.Store.Error = Ext.extend(Ext.Error, {
			name : "Ext.data.Store"
		});
Ext.apply(Ext.data.Store.Error.prototype, {
	lang : {
		"writer-undefined" : "Attempted to execute a write-action without a DataWriter installed."
	}
});
Ext.data.Field = function(d) {
	if (typeof d == "string") {
		d = {
			name : d
		}
	}
	Ext.apply(this, d);
	if (!this.type) {
		this.type = "auto"
	}
	var c = Ext.data.SortTypes;
	if (typeof this.sortType == "string") {
		this.sortType = c[this.sortType]
	}
	if (!this.sortType) {
		switch (this.type) {
			case "string" :
				this.sortType = c.asUCString;
				break;
			case "date" :
				this.sortType = c.asDate;
				break;
			default :
				this.sortType = c.none
		}
	}
	var e = /[\$,%]/g;
	if (!this.convert) {
		var b, a = this.dateFormat;
		switch (this.type) {
			case "" :
			case "auto" :
			case undefined :
				b = function(g) {
					return g
				};
				break;
			case "string" :
				b = function(g) {
					return (g === undefined || g === null) ? "" : String(g)
				};
				break;
			case "int" :
				b = function(g) {
					return g !== undefined && g !== null && g !== ""
							? parseInt(String(g).replace(e, ""), 10)
							: ""
				};
				break;
			case "float" :
				b = function(g) {
					return g !== undefined && g !== null && g !== ""
							? parseFloat(String(g).replace(e, ""), 10)
							: ""
				};
				break;
			case "bool" :
				b = function(g) {
					return g === true || g === "true" || g == 1
				};
				break;
			case "date" :
				b = function(h) {
					if (!h) {
						return ""
					}
					if (Ext.isDate(h)) {
						return h
					}
					if (a) {
						if (a == "timestamp") {
							return new Date(h * 1000)
						}
						if (a == "time") {
							return new Date(parseInt(h, 10))
						}
						return Date.parseDate(h, a)
					}
					var g = Date.parse(h);
					return g ? new Date(g) : null
				};
				break;
			default :
				b = function(g) {
					return g
				};
				break
		}
		this.convert = b
	}
};
Ext.data.Field.prototype = {
	dateFormat : null,
	defaultValue : "",
	mapping : null,
	sortType : null,
	sortDir : "ASC",
	allowBlank : true
};
Ext.data.DataReader = function(a, b) {
	this.meta = a;
	this.recordType = Ext.isArray(b) ? Ext.data.Record.create(b) : b;
	if (this.recordType) {
		this.buildExtractors()
	}
};
Ext.data.DataReader.prototype = {
	getTotal : Ext.emptyFn,
	getRoot : Ext.emptyFn,
	getMessage : Ext.emptyFn,
	getSuccess : Ext.emptyFn,
	getId : Ext.emptyFn,
	buildExtractors : Ext.emptyFn,
	extractData : Ext.emptyFn,
	extractValues : Ext.emptyFn,
	realize : function(a, c) {
		if (Ext.isArray(a)) {
			for (var b = a.length - 1; b >= 0; b--) {
				if (Ext.isArray(c)) {
					this
							.realize(a.splice(b, 1).shift(), c.splice(b, 1)
											.shift())
				} else {
					this.realize(a.splice(b, 1).shift(), c)
				}
			}
		} else {
			if (Ext.isArray(c) && c.length == 1) {
				c = c.shift()
			}
			if (!this.isData(c)) {
				throw new Ext.data.DataReader.Error("realize", a)
			}
			a.phantom = false;
			a._phid = a.id;
			a.id = this.getId(c);
			a.fields.each(function(d) {
						if (c[d.name] !== d.defaultValue) {
							a.data[d.name] = c[d.name]
						}
					});
			a.commit()
		}
	},
	update : function(a, c) {
		if (Ext.isArray(a)) {
			for (var b = a.length - 1; b >= 0; b--) {
				if (Ext.isArray(c)) {
					this.update(a.splice(b, 1).shift(), c.splice(b, 1).shift())
				} else {
					this.update(a.splice(b, 1).shift(), c)
				}
			}
		} else {
			if (Ext.isArray(c) && c.length == 1) {
				c = c.shift()
			}
			if (this.isData(c)) {
				a.fields.each(function(d) {
							if (c[d.name] !== d.defaultValue) {
								a.data[d.name] = c[d.name]
							}
						})
			}
			a.commit()
		}
	},
	extractData : function(k, a) {
		var j = (this instanceof Ext.data.JsonReader) ? "json" : "node";
		var c = [];
		if (this.isData(k) && !(this instanceof Ext.data.XmlReader)) {
			k = [k]
		}
		var h = this.recordType.prototype.fields, o = h.items, m = h.length, c = [];
		if (a === true) {
			var l = this.recordType;
			for (var e = 0; e < k.length; e++) {
				var b = k[e];
				var g = new l(this.extractValues(b, o, m), this.getId(b));
				g[j] = b;
				c.push(g)
			}
		} else {
			for (var e = 0; e < k.length; e++) {
				var d = this.extractValues(k[e], o, m);
				d[this.meta.idProperty] = this.getId(k[e]);
				c.push(d)
			}
		}
		return c
	},
	isData : function(a) {
		return (a && Ext.isObject(a) && !Ext.isEmpty(this.getId(a)))
				? true
				: false
	},
	onMetaChange : function(a) {
		delete this.ef;
		this.meta = a;
		this.recordType = Ext.data.Record.create(a.fields);
		this.buildExtractors()
	}
};
Ext.data.DataReader.Error = Ext.extend(Ext.Error, {
			constructor : function(b, a) {
				this.arg = a;
				Ext.Error.call(this, b)
			},
			name : "Ext.data.DataReader"
		});
Ext.apply(Ext.data.DataReader.Error.prototype, {
	lang : {
		update : "#update received invalid data from server.  Please see docs for DataReader#update and review your DataReader configuration.",
		realize : "#realize was called with invalid remote-data.  Please see the docs for DataReader#realize and review your DataReader configuration.",
		"invalid-response" : "#readResponse received an invalid response from the server."
	}
});
Ext.data.DataWriter = function(a) {
	Ext.apply(this, a)
};
Ext.data.DataWriter.prototype = {
	writeAllFields : false,
	listful : false,
	apply : function(e, g, d, a) {
		var c = [], b = d + "Record";
		if (Ext.isArray(a)) {
			Ext.each(a, function(h) {
						c.push(this[b](h))
					}, this)
		} else {
			if (a instanceof Ext.data.Record) {
				c = this[b](a)
			}
		}
		this.render(e, g, c)
	},
	render : Ext.emptyFn,
	updateRecord : Ext.emptyFn,
	createRecord : Ext.emptyFn,
	destroyRecord : Ext.emptyFn,
	toHash : function(g, c) {
		var e = g.fields.map, d = {}, b = (this.writeAllFields === false && g.phantom === false)
				? g.getChanges()
				: g.data, a;
		Ext.iterate(b, function(j, h) {
					if ((a = e[j])) {
						d[a.mapping ? a.mapping : a.name] = h
					}
				});
		if (g.phantom) {
			if (g.fields.containsKey(this.meta.idProperty)
					&& Ext.isEmpty(g.data[this.meta.idProperty])) {
				delete d[this.meta.idProperty]
			}
		} else {
			d[this.meta.idProperty] = g.id
		}
		return d
	},
	toArray : function(b) {
		var a = [];
		Ext.iterate(b, function(d, c) {
					a.push({
								name : d,
								value : c
							})
				}, this);
		return a
	}
};
Ext.data.DataProxy = function(a) {
	a = a || {};
	this.api = a.api;
	this.url = a.url;
	this.restful = a.restful;
	this.listeners = a.listeners;
	this.prettyUrls = a.prettyUrls;
	this.addEvents("exception", "beforeload", "load", "loadexception",
			"beforewrite", "write");
	Ext.data.DataProxy.superclass.constructor.call(this);
	try {
		Ext.data.Api.prepare(this)
	} catch (b) {
		if (b instanceof Ext.data.Api.Error) {
			b.toConsole()
		}
	}
	Ext.data.DataProxy.relayEvents(this, ["beforewrite", "write", "exception"])
};
Ext.extend(Ext.data.DataProxy, Ext.util.Observable, {
			restful : false,
			setApi : function() {
				if (arguments.length == 1) {
					var a = Ext.data.Api.isValid(arguments[0]);
					if (a === true) {
						this.api = arguments[0]
					} else {
						throw new Ext.data.Api.Error("invalid", a)
					}
				} else {
					if (arguments.length == 2) {
						if (!Ext.data.Api.isAction(arguments[0])) {
							throw new Ext.data.Api.Error("invalid",
									arguments[0])
						}
						this.api[arguments[0]] = arguments[1]
					}
				}
				Ext.data.Api.prepare(this)
			},
			isApiAction : function(a) {
				return (this.api[a]) ? true : false
			},
			request : function(e, b, g, a, h, d, c) {
				if (!this.api[e] && !this.load) {
					throw new Ext.data.DataProxy.Error("action-undefined", e)
				}
				g = g || {};
				if ((e === Ext.data.Api.actions.read) ? this.fireEvent(
						"beforeload", this, g) : this.fireEvent("beforewrite",
						this, e, b, g) !== false) {
					this.doRequest.apply(this, arguments)
				} else {
					h.call(d || this, null, c, false)
				}
			},
			load : null,
			doRequest : function(e, b, g, a, h, d, c) {
				this.load(g, a, h, d, c)
			},
			onRead : Ext.emptyFn,
			onWrite : Ext.emptyFn,
			buildUrl : function(d, b) {
				b = b || null;
				var c = (this.conn && this.conn.url)
						? this.conn.url
						: (this.api[d]) ? this.api[d].url : this.url;
				if (!c) {
					throw new Ext.data.Api.Error("invalid-url", d)
				}
				var e = null;
				var a = c.match(/(.*)(\.json|\.xml|\.html)$/);
				if (a) {
					e = a[2];
					c = a[1]
				}
				if ((this.restful === true || this.prettyUrls === true)
						&& b instanceof Ext.data.Record && !b.phantom) {
					c += "/" + b.id
				}
				return (e === null) ? c : c + e
			},
			destroy : function() {
				this.purgeListeners()
			}
		});
Ext.apply(Ext.data.DataProxy, Ext.util.Observable.prototype);
Ext.util.Observable.call(Ext.data.DataProxy);
Ext.data.DataProxy.Error = Ext.extend(Ext.Error, {
			constructor : function(b, a) {
				this.arg = a;
				Ext.Error.call(this, b)
			},
			name : "Ext.data.DataProxy"
		});
Ext.apply(Ext.data.DataProxy.Error.prototype, {
	lang : {
		"action-undefined" : "DataProxy attempted to execute an API-action but found an undefined url / function.  Please review your Proxy url/api-configuration.",
		"api-invalid" : "Recieved an invalid API-configuration.  Please ensure your proxy API-configuration contains only the actions from Ext.data.Api.actions."
	}
});
Ext.data.Request = function(a) {
	Ext.apply(this, a)
};
Ext.data.Request.prototype = {
	action : undefined,
	rs : undefined,
	params : undefined,
	callback : Ext.emptyFn,
	scope : undefined,
	reader : undefined
};
Ext.data.Response = function(a) {
	Ext.apply(this, a)
};
Ext.data.Response.prototype = {
	action : undefined,
	success : undefined,
	message : undefined,
	data : undefined,
	raw : undefined,
	records : undefined
};
Ext.data.ScriptTagProxy = function(a) {
	Ext.apply(this, a);
	Ext.data.ScriptTagProxy.superclass.constructor.call(this, a);
	this.head = document.getElementsByTagName("head")[0]
};
Ext.data.ScriptTagProxy.TRANS_ID = 1000;
Ext.extend(Ext.data.ScriptTagProxy, Ext.data.DataProxy, {
			timeout : 30000,
			callbackParam : "callback",
			nocache : true,
			doRequest : function(e, g, d, h, k, l, m) {
				var c = Ext.urlEncode(Ext.apply(d, this.extraParams));
				var b = this.buildUrl(e, g);
				if (!b) {
					throw new Ext.data.Api.Error("invalid-url", b)
				}
				b = Ext.urlAppend(b, c);
				if (this.nocache) {
					b = Ext.urlAppend(b, "_dc=" + (new Date().getTime()))
				}
				var a = ++Ext.data.ScriptTagProxy.TRANS_ID;
				var n = {
					id : a,
					action : e,
					cb : "stcCallback" + a,
					scriptId : "stcScript" + a,
					params : d,
					arg : m,
					url : b,
					callback : k,
					scope : l,
					reader : h
				};
				window[n.cb] = this.createCallback(e, g, n);
				b += String.format("&{0}={1}", this.callbackParam, n.cb);
				if (this.autoAbort !== false) {
					this.abort()
				}
				n.timeoutId = this.handleFailure.defer(this.timeout, this, [n]);
				var j = document.createElement("script");
				j.setAttribute("src", b);
				j.setAttribute("type", "text/javascript");
				j.setAttribute("id", n.scriptId);
				this.head.appendChild(j);
				this.trans = n
			},
			createCallback : function(d, b, c) {
				var a = this;
				return function(e) {
					a.trans = false;
					a.destroyTrans(c, true);
					if (d === Ext.data.Api.actions.read) {
						a.onRead.call(a, d, c, e)
					} else {
						a.onWrite.call(a, d, c, e, b)
					}
				}
			},
			onRead : function(d, c, b) {
				var a;
				try {
					a = c.reader.readRecords(b)
				} catch (g) {
					this.fireEvent("loadexception", this, c, b, g);
					this.fireEvent("exception", this, "response", d, c, b, g);
					c.callback.call(c.scope || window, null, c.arg, false);
					return
				}
				if (a.success === false) {
					this.fireEvent("loadexception", this, c, b);
					this.fireEvent("exception", this, "remote", d, c, b, null)
				} else {
					this.fireEvent("load", this, b, c.arg)
				}
				c.callback.call(c.scope || window, a, c.arg, a.success)
			},
			onWrite : function(h, g, c, b) {
				var a = g.reader;
				try {
					var d = a.readResponse(h, c)
				} catch (j) {
					this.fireEvent("exception", this, "response", h, g, d, j);
					g.callback.call(g.scope || window, null, d, false);
					return
				}
				if (!d.success === true) {
					this.fireEvent("exception", this, "remote", h, g, d, b);
					g.callback.call(g.scope || window, null, d, false);
					return
				}
				this.fireEvent("write", this, h, d.data, d, b, g.arg);
				g.callback.call(g.scope || window, d.data, d, true)
			},
			isLoading : function() {
				return this.trans ? true : false
			},
			abort : function() {
				if (this.isLoading()) {
					this.destroyTrans(this.trans)
				}
			},
			destroyTrans : function(b, a) {
				this.head.removeChild(document.getElementById(b.scriptId));
				clearTimeout(b.timeoutId);
				if (a) {
					window[b.cb] = undefined;
					try {
						delete window[b.cb]
					} catch (c) {
					}
				} else {
					window[b.cb] = function() {
						window[b.cb] = undefined;
						try {
							delete window[b.cb]
						} catch (d) {
						}
					}
				}
			},
			handleFailure : function(a) {
				this.trans = false;
				this.destroyTrans(a, false);
				if (a.action === Ext.data.Api.actions.read) {
					this.fireEvent("loadexception", this, null, a.arg)
				}
				this.fireEvent("exception", this, "response", a.action, {
							response : null,
							options : a.arg
						});
				a.callback.call(a.scope || window, null, a.arg, false)
			},
			destroy : function() {
				this.abort();
				Ext.data.ScriptTagProxy.superclass.destroy.call(this)
			}
		});
Ext.data.HttpProxy = function(a) {
	Ext.data.HttpProxy.superclass.constructor.call(this, a);
	this.conn = a;
	this.conn.url = null;
	this.useAjax = !a || !a.events;
	var c = Ext.data.Api.actions;
	this.activeRequest = {};
	for (var b in c) {
		this.activeRequest[c[b]] = undefined
	}
};
Ext.extend(Ext.data.HttpProxy, Ext.data.DataProxy, {
			getConnection : function() {
				return this.useAjax ? Ext.Ajax : this.conn
			},
			setUrl : function(a, b) {
				this.conn.url = a;
				if (b === true) {
					this.url = a;
					this.api = null;
					Ext.data.Api.prepare(this)
				}
			},
			doRequest : function(g, d, j, c, b, e, a) {
				var h = {
					method : (this.api[g]) ? this.api[g]["method"] : undefined,
					request : {
						callback : b,
						scope : e,
						arg : a
					},
					reader : c,
					callback : this.createCallback(g, d),
					scope : this
				};
				if (j.jsonData) {
					h.jsonData = j.jsonData
				} else {
					if (j.xmlData) {
						h.xmlData = j.xmlData
					} else {
						h.params = j || {}
					}
				}
				this.conn.url = this.buildUrl(g, d);
				if (this.useAjax) {
					Ext.applyIf(h, this.conn);
					if (this.activeRequest[g]) {
					}
					this.activeRequest[g] = Ext.Ajax.request(h)
				} else {
					this.conn.request(h)
				}
				this.conn.url = null
			},
			createCallback : function(b, a) {
				return function(e, d, c) {
					this.activeRequest[b] = undefined;
					if (!d) {
						if (b === Ext.data.Api.actions.read) {
							this.fireEvent("loadexception", this, e, c)
						}
						this.fireEvent("exception", this, "response", b, e, c);
						e.request.callback.call(e.request.scope, null,
								e.request.arg, false);
						return
					}
					if (b === Ext.data.Api.actions.read) {
						this.onRead(b, e, c)
					} else {
						this.onWrite(b, e, c, a)
					}
				}
			},
			onRead : function(d, h, b) {
				var a;
				try {
					a = h.reader.read(b)
				} catch (g) {
					this.fireEvent("loadexception", this, h, b, g);
					this.fireEvent("exception", this, "response", d, h, b, g);
					h.request.callback.call(h.request.scope, null,
							h.request.arg, false);
					return
				}
				if (a.success === false) {
					this.fireEvent("loadexception", this, h, b);
					var c = h.reader.readResponse(d, b);
					this.fireEvent("exception", this, "remote", d, h, c, null)
				} else {
					this.fireEvent("load", this, h, h.request.arg)
				}
				h.request.callback.call(h.request.scope, a, h.request.arg,
						a.success)
			},
			onWrite : function(g, j, c, b) {
				var a = j.reader;
				var d;
				try {
					d = a.readResponse(g, c)
				} catch (h) {
					this.fireEvent("exception", this, "response", g, j, c, h);
					j.request.callback.call(j.request.scope, null,
							j.request.arg, false);
					return
				}
				if (d.success === false) {
					this.fireEvent("exception", this, "remote", g, j, d, b)
				} else {
					this.fireEvent("write", this, g, d.data, d, b,
							j.request.arg)
				}
				j.request.callback.call(j.request.scope, d.data, d, d.success)
			},
			destroy : function() {
				if (!this.useAjax) {
					this.conn.abort()
				} else {
					if (this.activeRequest) {
						var b = Ext.data.Api.actions;
						for (var a in b) {
							if (this.activeRequest[b[a]]) {
								Ext.Ajax.abort(this.activeRequest[b[a]])
							}
						}
					}
				}
				Ext.data.HttpProxy.superclass.destroy.call(this)
			}
		});
Ext.data.MemoryProxy = function(b) {
	var a = {};
	a[Ext.data.Api.actions.read] = true;
	Ext.data.MemoryProxy.superclass.constructor.call(this, {
				api : a
			});
	this.data = b
};
Ext.extend(Ext.data.MemoryProxy, Ext.data.DataProxy, {
			doRequest : function(b, c, a, d, h, j, k) {
				a = a || {};
				var l;
				try {
					l = d.readRecords(this.data)
				} catch (g) {
					this.fireEvent("loadexception", this, null, k, g);
					this
							.fireEvent("exception", this, "response", b, k,
									null, g);
					h.call(j, null, k, false);
					return
				}
				h.call(j, l, k, true)
			}
		});
Ext.data.JsonWriter = function(a) {
	Ext.data.JsonWriter.superclass.constructor.call(this, a);
	if (this.returnJson != undefined) {
		this.encode = this.returnJson
	}
};
Ext.extend(Ext.data.JsonWriter, Ext.data.DataWriter, {
			returnJson : undefined,
			encode : true,
			render : function(c, d, b) {
				if (this.encode === true) {
					Ext.apply(c, d);
					c[this.meta.root] = Ext.encode(b)
				} else {
					var a = Ext.apply({}, d);
					a[this.meta.root] = b;
					c.jsonData = a
				}
			},
			createRecord : function(a) {
				return this.toHash(a)
			},
			updateRecord : function(a) {
				return this.toHash(a)
			},
			destroyRecord : function(a) {
				return a.id
			}
		});
Ext.data.JsonReader = function(a, b) {
	a = a || {};
	Ext.applyIf(a, {
				idProperty : "id",
				successProperty : "success",
				totalProperty : "total"
			});
	Ext.data.JsonReader.superclass.constructor.call(this, a, b || a.fields)
};
Ext.extend(Ext.data.JsonReader, Ext.data.DataReader, {
	read : function(a) {
		var b = a.responseText;
		var c = Ext.decode(b);
		if (!c) {
			throw {
				message : "JsonReader.read: Json object not found"
			}
		}
		return this.readRecords(c)
	},
	readResponse : function(e, b) {
		var g = (b.responseText !== undefined) ? Ext.decode(b.responseText) : b;
		if (!g) {
			throw new Ext.data.JsonReader.Error("response")
		}
		var a = this.getRoot(g);
		if (e === Ext.data.Api.actions.create) {
			var d = Ext.isDefined(a);
			if (d && Ext.isEmpty(a)) {
				throw new Ext.data.JsonReader.Error("root-empty",
						this.meta.root)
			} else {
				if (!d) {
					throw new Ext.data.JsonReader.Error(
							"root-undefined-response", this.meta.root)
				}
			}
		}
		var c = new Ext.data.Response({
					action : e,
					success : this.getSuccess(g),
					data : (a) ? this.extractData(a, false) : [],
					message : this.getMessage(g),
					raw : g
				});
		if (Ext.isEmpty(c.success)) {
			throw new Ext.data.JsonReader.Error("successProperty-response",
					this.meta.successProperty)
		}
		return c
	},
	readRecords : function(a) {
		this.jsonData = a;
		if (a.metaData) {
			this.onMetaChange(a.metaData)
		}
		var n = this.meta, h = this.recordType, b = h.prototype.fields, m = b.items, j = b.length, k;
		var g = this.getRoot(a), e = g.length, d = e, l = true;
		if (n.totalProperty) {
			k = parseInt(this.getTotal(a), 10);
			if (!isNaN(k)) {
				d = k
			}
		}
		if (n.successProperty) {
			k = this.getSuccess(a);
			if (k === false || k === "false") {
				l = false
			}
		}
		return {
			success : l,
			records : this.extractData(g, true),
			totalRecords : d
		}
	},
	buildExtractors : function() {
		if (this.ef) {
			return
		}
		var l = this.meta, h = this.recordType, e = h.prototype.fields, k = e.items, j = e.length;
		if (l.totalProperty) {
			this.getTotal = this.createAccessor(l.totalProperty)
		}
		if (l.successProperty) {
			this.getSuccess = this.createAccessor(l.successProperty)
		}
		if (l.messageProperty) {
			this.getMessage = this.createAccessor(l.messageProperty)
		}
		this.getRoot = l.root ? this.createAccessor(l.root) : function(g) {
			return g
		};
		if (l.id || l.idProperty) {
			var d = this.createAccessor(l.id || l.idProperty);
			this.getId = function(m) {
				var g = d(m);
				return (g === undefined || g === "") ? null : g
			}
		} else {
			this.getId = function() {
				return null
			}
		}
		var c = [];
		for (var b = 0; b < j; b++) {
			e = k[b];
			var a = (e.mapping !== undefined && e.mapping !== null)
					? e.mapping
					: e.name;
			c.push(this.createAccessor(a))
		}
		this.ef = c
	},
	simpleAccess : function(b, a) {
		return b[a]
	},
	createAccessor : function() {
		var a = /[\[\.]/;
		return function(c) {
			try {
				return (a.test(c))
						? new Function("obj", "return obj." + c)
						: function(d) {
							return d[c]
						}
			} catch (b) {
			}
			return Ext.emptyFn
		}
	}(),
	extractValues : function(h, d, a) {
		var g, c = {};
		for (var e = 0; e < a; e++) {
			g = d[e];
			var b = this.ef[e](h);
			c[g.name] = g.convert((b !== undefined) ? b : g.defaultValue, h)
		}
		return c
	}
});
Ext.data.JsonReader.Error = Ext.extend(Ext.Error, {
			constructor : function(b, a) {
				this.arg = a;
				Ext.Error.call(this, b)
			},
			name : "Ext.data.JsonReader"
		});
Ext.apply(Ext.data.JsonReader.Error.prototype, {
	lang : {
		response : "An error occurred while json-decoding your server response",
		"successProperty-response" : 'Could not locate your "successProperty" in your server response.  Please review your JsonReader config to ensure the config-property "successProperty" matches the property in your server-response.  See the JsonReader docs.',
		"root-undefined-config" : 'Your JsonReader was configured without a "root" property.  Please review your JsonReader config and make sure to define the root property.  See the JsonReader docs.',
		"idProperty-undefined" : 'Your JsonReader was configured without an "idProperty"  Please review your JsonReader configuration and ensure the "idProperty" is set (e.g.: "id").  See the JsonReader docs.',
		"root-empty" : 'Data was expected to be returned by the server in the "root" property of the response.  Please review your JsonReader configuration to ensure the "root" property matches that returned in the server-response.  See JsonReader docs.'
	}
});
Ext.data.ArrayReader = Ext.extend(Ext.data.JsonReader, {
	readRecords : function(q) {
		this.arrayData = q;
		var h = this.meta, d = h ? Ext.num(h.idIndex, h.id) : null, b = this.recordType, p = b.prototype.fields, y = [], e;
		var t = this.getRoot(q);
		for (var x = 0, z = t.length; x < z; x++) {
			var r = t[x], a = {}, m = ((d || d === 0) && r[d] !== undefined
					&& r[d] !== "" ? r[d] : null);
			for (var w = 0, l = p.length; w < l; w++) {
				var A = p.items[w], u = A.mapping !== undefined
						&& A.mapping !== null ? A.mapping : w;
				e = r[u] !== undefined ? r[u] : A.defaultValue;
				e = A.convert(e, r);
				a[A.name] = e
			}
			var c = new b(a, m);
			c.json = r;
			y[y.length] = c
		}
		var g = y.length;
		if (h.totalProperty) {
			e = parseInt(this.getTotal(q), 10);
			if (!isNaN(e)) {
				g = e
			}
		}
		return {
			records : y,
			totalRecords : g
		}
	}
});
Ext.data.ArrayStore = Ext.extend(Ext.data.Store, {
			constructor : function(a) {
				Ext.data.ArrayStore.superclass.constructor.call(this, Ext
								.apply(a, {
											reader : new Ext.data.ArrayReader(a)
										}))
			},
			loadData : function(e, b) {
				if (this.expandData === true) {
					var d = [];
					for (var c = 0, a = e.length; c < a; c++) {
						d[d.length] = [e[c]]
					}
					e = d
				}
				Ext.data.ArrayStore.superclass.loadData.call(this, e, b)
			}
		});
Ext.reg("arraystore", Ext.data.ArrayStore);
Ext.data.SimpleStore = Ext.data.ArrayStore;
Ext.reg("simplestore", Ext.data.SimpleStore);
Ext.data.JsonStore = Ext.extend(Ext.data.Store, {
			constructor : function(a) {
				Ext.data.JsonStore.superclass.constructor.call(this, Ext.apply(
								a, {
									reader : new Ext.data.JsonReader(a)
								}))
			}
		});
Ext.reg("jsonstore", Ext.data.JsonStore);
Ext.data.XmlWriter = function(a) {
	Ext.data.XmlWriter.superclass.constructor.apply(this, arguments);
	this.tpl = (typeof(this.tpl) === "string") ? new Ext.XTemplate(this.tpl)
			.compile() : this.tpl.compile()
};
Ext.extend(Ext.data.XmlWriter, Ext.data.DataWriter, {
	documentRoot : "xrequest",
	forceDocumentRoot : false,
	root : "records",
	xmlVersion : "1.0",
	xmlEncoding : "ISO-8859-15",
	tpl : '<tpl for="."><?xml version="{version}" encoding="{encoding}"?><tpl if="documentRoot"><{documentRoot}><tpl for="baseParams"><tpl for="."><{name}>{value}</{name}</tpl></tpl></tpl><tpl if="records.length&gt;1"><{root}></tpl><tpl for="records"><{parent.record}><tpl for="."><{name}>{value}</{name}></tpl></{parent.record}></tpl><tpl if="records.length&gt;1"></{root}></tpl><tpl if="documentRoot"></{documentRoot}></tpl></tpl>',
	render : function(b, c, a) {
		c = this.toArray(c);
		b.xmlData = this.tpl.applyTemplate({
					version : this.xmlVersion,
					encoding : this.xmlEncoding,
					documentRoot : (c.length > 0 || this.forceDocumentRoot === true)
							? this.documentRoot
							: false,
					record : this.meta.record,
					root : this.root,
					baseParams : c,
					records : (Ext.isArray(a[0])) ? a : [a]
				})
	},
	createRecord : function(a) {
		return this.toArray(this.toHash(a))
	},
	updateRecord : function(a) {
		return this.toArray(this.toHash(a))
	},
	destroyRecord : function(b) {
		var a = {};
		a[this.meta.idProperty] = b.id;
		return this.toArray(a)
	}
});
Ext.data.XmlReader = function(a, b) {
	a = a || {};
	Ext.applyIf(a, {
				idProperty : a.idProperty || a.idPath || a.id,
				successProperty : a.successProperty || a.success
			});
	Ext.data.XmlReader.superclass.constructor.call(this, a, b || a.fields)
};
Ext.extend(Ext.data.XmlReader, Ext.data.DataReader, {
	read : function(a) {
		var b = a.responseXML;
		if (!b) {
			throw {
				message : "XmlReader.read: XML Document not available"
			}
		}
		return this.readRecords(b)
	},
	readRecords : function(d) {
		this.xmlData = d;
		var a = d.documentElement || d, c = Ext.DomQuery, g = 0, e = true;
		if (this.meta.totalProperty) {
			g = this.getTotal(a, 0)
		}
		if (this.meta.successProperty) {
			e = this.getSuccess(a)
		}
		var b = this.extractData(c.select(this.meta.record, a), true);
		return {
			success : e,
			records : b,
			totalRecords : g || b.length
		}
	},
	readResponse : function(e, a) {
		var d = Ext.DomQuery, g = a.responseXML;
		var b = new Ext.data.Response({
					action : e,
					success : this.getSuccess(g),
					message : this.getMessage(g),
					data : this.extractData(d.select(this.meta.record, g)
									|| d.select(this.meta.root, g), false),
					raw : g
				});
		if (Ext.isEmpty(b.success)) {
			throw new Ext.data.DataReader.Error("successProperty-response",
					this.meta.successProperty)
		}
		if (e === Ext.data.Api.actions.create) {
			var c = Ext.isDefined(b.data);
			if (c && Ext.isEmpty(b.data)) {
				throw new Ext.data.JsonReader.Error("root-empty",
						this.meta.root)
			} else {
				if (!c) {
					throw new Ext.data.JsonReader.Error(
							"root-undefined-response", this.meta.root)
				}
			}
		}
		return b
	},
	getSuccess : function() {
		return true
	},
	buildExtractors : function() {
		if (this.ef) {
			return
		}
		var l = this.meta, h = this.recordType, e = h.prototype.fields, k = e.items, j = e.length;
		if (l.totalProperty) {
			this.getTotal = this.createAccessor(l.totalProperty)
		}
		if (l.successProperty) {
			this.getSuccess = this.createAccessor(l.successProperty)
		}
		if (l.messageProperty) {
			this.getMessage = this.createAccessor(l.messageProperty)
		}
		this.getRoot = function(g) {
			return (!Ext.isEmpty(g[this.meta.record]))
					? g[this.meta.record]
					: g[this.meta.root]
		};
		if (l.idPath || l.idProperty) {
			var d = this.createAccessor(l.idPath || l.idProperty);
			this.getId = function(g) {
				var m = d(g) || g.id;
				return (m === undefined || m === "") ? null : m
			}
		} else {
			this.getId = function() {
				return null
			}
		}
		var c = [];
		for (var b = 0; b < j; b++) {
			e = k[b];
			var a = (e.mapping !== undefined && e.mapping !== null)
					? e.mapping
					: e.name;
			c.push(this.createAccessor(a))
		}
		this.ef = c
	},
	createAccessor : function() {
		var a = Ext.DomQuery;
		return function(b) {
			switch (b) {
				case this.meta.totalProperty :
					return function(c, d) {
						return a.selectNumber(b, c, d)
					};
					break;
				case this.meta.successProperty :
					return function(d, e) {
						var c = a.selectValue(b, d, true);
						var g = c !== false && c !== "false";
						return g
					};
					break;
				default :
					return function(c, d) {
						return a.selectValue(b, c, d)
					};
					break
			}
		}
	}(),
	extractValues : function(h, d, a) {
		var g, c = {};
		for (var e = 0; e < a; e++) {
			g = d[e];
			var b = this.ef[e](h);
			c[g.name] = g.convert((b !== undefined) ? b : g.defaultValue, h)
		}
		return c
	}
});
Ext.data.XmlStore = Ext.extend(Ext.data.Store, {
			constructor : function(a) {
				Ext.data.XmlStore.superclass.constructor.call(this, Ext.apply(
								a, {
									reader : new Ext.data.XmlReader(a)
								}))
			}
		});
Ext.reg("xmlstore", Ext.data.XmlStore);
Ext.data.GroupingStore = Ext.extend(Ext.data.Store, {
	constructor : function(a) {
		Ext.data.GroupingStore.superclass.constructor.call(this, a);
		this.applyGroupField()
	},
	remoteGroup : false,
	groupOnSort : false,
	groupDir : "ASC",
	clearGrouping : function() {
		this.groupField = false;
		if (this.remoteGroup) {
			if (this.baseParams) {
				delete this.baseParams.groupBy
			}
			var a = this.lastOptions;
			if (a && a.params) {
				delete a.params.groupBy
			}
			this.reload()
		} else {
			this.applySort();
			this.fireEvent("datachanged", this)
		}
	},
	groupBy : function(d, b, c) {
		c = c
				? (String(c).toUpperCase() == "DESC" ? "DESC" : "ASC")
				: this.groupDir;
		if (this.groupField == d && this.groupDir == c && !b) {
			return
		}
		this.groupField = d;
		this.groupDir = c;
		this.applyGroupField();
		if (this.groupOnSort) {
			this.sort(d, c);
			return
		}
		if (this.remoteGroup) {
			this.reload()
		} else {
			var a = this.sortInfo || {};
			if (a.field != d || a.direction != c) {
				this.applySort()
			} else {
				this.sortData(d, c)
			}
			this.fireEvent("datachanged", this)
		}
	},
	applyGroupField : function() {
		if (this.remoteGroup) {
			if (!this.baseParams) {
				this.baseParams = {}
			}
			this.baseParams.groupBy = this.groupField;
			this.baseParams.groupDir = this.groupDir
		}
	},
	applySort : function() {
		Ext.data.GroupingStore.superclass.applySort.call(this);
		if (!this.groupOnSort && !this.remoteGroup) {
			var a = this.getGroupState();
			if (a
					&& (a != this.sortInfo.field || this.groupDir != this.sortInfo.direction)) {
				this.sortData(this.groupField, this.groupDir)
			}
		}
	},
	applyGrouping : function(a) {
		if (this.groupField !== false) {
			this.groupBy(this.groupField, true, this.groupDir);
			return true
		} else {
			if (a === true) {
				this.fireEvent("datachanged", this)
			}
			return false
		}
	},
	getGroupState : function() {
		return this.groupOnSort && this.groupField !== false ? (this.sortInfo
				? this.sortInfo.field
				: undefined) : this.groupField
	}
});
Ext.reg("groupingstore", Ext.data.GroupingStore);
Ext.data.DirectProxy = function(a) {
	Ext.apply(this, a);
	if (typeof this.paramOrder == "string") {
		this.paramOrder = this.paramOrder.split(/[\s,|]/)
	}
	Ext.data.DirectProxy.superclass.constructor.call(this, a)
};
Ext.extend(Ext.data.DirectProxy, Ext.data.DataProxy, {
	paramOrder : undefined,
	paramsAsHash : true,
	directFn : undefined,
	doRequest : function(b, c, a, e, k, l, n) {
		var j = [], h = this.api[b] || this.directFn;
		switch (b) {
			case Ext.data.Api.actions.create :
				j.push(a.jsonData);
				break;
			case Ext.data.Api.actions.read :
				if (h.directCfg.method.len > 0) {
					if (this.paramOrder) {
						for (var d = 0, g = this.paramOrder.length; d < g; d++) {
							j.push(a[this.paramOrder[d]])
						}
					} else {
						if (this.paramsAsHash) {
							j.push(a)
						}
					}
				}
				break;
			case Ext.data.Api.actions.update :
				j.push(a.jsonData);
				break;
			case Ext.data.Api.actions.destroy :
				j.push(a.jsonData);
				break
		}
		var m = {
			params : a || {},
			request : {
				callback : k,
				scope : l,
				arg : n
			},
			reader : e
		};
		j.push(this.createCallback(b, c, m), this);
		h.apply(window, j)
	},
	createCallback : function(c, a, b) {
		return function(d, e) {
			if (!e.status) {
				if (c === Ext.data.Api.actions.read) {
					this.fireEvent("loadexception", this, b, e, null)
				}
				this.fireEvent("exception", this, "remote", c, b, e, null);
				b.request.callback.call(b.request.scope, null, b.request.arg,
						false);
				return
			}
			if (c === Ext.data.Api.actions.read) {
				this.onRead(c, b, d, e)
			} else {
				this.onWrite(c, b, d, e, a)
			}
		}
	},
	onRead : function(g, e, a, d) {
		var b;
		try {
			b = e.reader.readRecords(a)
		} catch (c) {
			this.fireEvent("loadexception", this, e, d, c);
			this.fireEvent("exception", this, "response", g, e, d, c);
			e.request.callback
					.call(e.request.scope, null, e.request.arg, false);
			return
		}
		this.fireEvent("load", this, d, e.request.arg);
		e.request.callback.call(e.request.scope, b, e.request.arg, true)
	},
	onWrite : function(g, d, a, c, b) {
		var e = d.reader.extractData(a, false);
		this.fireEvent("write", this, g, e, c, b, d.request.arg);
		d.request.callback.call(d.request.scope, e, c, true)
	}
});
Ext.data.DirectStore = function(a) {
	a.batchTransactions = false;
	Ext.data.DirectStore.superclass.constructor.call(this, Ext.apply(a, {
		proxy : (typeof(a.proxy) == "undefined")
				? new Ext.data.DirectProxy(Ext.copyTo({}, a,
						"paramOrder,paramsAsHash,directFn,api"))
				: a.proxy,
		reader : (typeof(a.reader) == "undefined" && typeof(a.fields) == "object")
				? new Ext.data.JsonReader(Ext.copyTo({}, a,
								"totalProperty,root,idProperty"), a.fields)
				: a.reader
	}))
};
Ext.extend(Ext.data.DirectStore, Ext.data.Store, {});
Ext.reg("directstore", Ext.data.DirectStore);
Ext.Direct = Ext.extend(Ext.util.Observable, {
			exceptions : {
				TRANSPORT : "xhr",
				PARSE : "parse",
				LOGIN : "login",
				SERVER : "exception"
			},
			constructor : function() {
				this.addEvents("event", "exception");
				this.transactions = {};
				this.providers = {}
			},
			addProvider : function(e) {
				var c = arguments;
				if (c.length > 1) {
					for (var d = 0, b = c.length; d < b; d++) {
						this.addProvider(c[d])
					}
					return
				}
				if (!e.events) {
					e = new Ext.Direct.PROVIDERS[e.type](e)
				}
				e.id = e.id || Ext.id();
				this.providers[e.id] = e;
				e.on("data", this.onProviderData, this);
				e.on("exception", this.onProviderException, this);
				if (!e.isConnected()) {
					e.connect()
				}
				return e
			},
			getProvider : function(a) {
				return this.providers[a]
			},
			removeProvider : function(b) {
				var a = b.id ? b : this.providers[b.id];
				a.un("data", this.onProviderData, this);
				a.un("exception", this.onProviderException, this);
				delete this.providers[a.id];
				return a
			},
			addTransaction : function(a) {
				this.transactions[a.tid] = a;
				return a
			},
			removeTransaction : function(a) {
				delete this.transactions[a.tid || a];
				return a
			},
			getTransaction : function(a) {
				return this.transactions[a.tid || a]
			},
			onProviderData : function(d, c) {
				if (Ext.isArray(c)) {
					for (var b = 0, a = c.length; b < a; b++) {
						this.onProviderData(d, c[b])
					}
					return
				}
				if (c.name && c.name != "event" && c.name != "exception") {
					this.fireEvent(c.name, c)
				} else {
					if (c.type == "exception") {
						this.fireEvent("exception", c)
					}
				}
				this.fireEvent("event", c, d)
			},
			createEvent : function(a, b) {
				return new Ext.Direct.eventTypes[a.type](Ext.apply(a, b))
			}
		});
Ext.Direct = new Ext.Direct();
Ext.Direct.TID = 1;
Ext.Direct.PROVIDERS = {};
Ext.Direct.Transaction = function(a) {
	Ext.apply(this, a);
	this.tid = ++Ext.Direct.TID;
	this.retryCount = 0
};
Ext.Direct.Transaction.prototype = {
	send : function() {
		this.provider.queueTransaction(this)
	},
	retry : function() {
		this.retryCount++;
		this.send()
	},
	getProvider : function() {
		return this.provider
	}
};
Ext.Direct.Event = function(a) {
	Ext.apply(this, a)
};
Ext.Direct.Event.prototype = {
	status : true,
	getData : function() {
		return this.data
	}
};
Ext.Direct.RemotingEvent = Ext.extend(Ext.Direct.Event, {
			type : "rpc",
			getTransaction : function() {
				return this.transaction || Ext.Direct.getTransaction(this.tid)
			}
		});
Ext.Direct.ExceptionEvent = Ext.extend(Ext.Direct.RemotingEvent, {
			status : false,
			type : "exception"
		});
Ext.Direct.eventTypes = {
	rpc : Ext.Direct.RemotingEvent,
	event : Ext.Direct.Event,
	exception : Ext.Direct.ExceptionEvent
};
Ext.direct.Provider = Ext.extend(Ext.util.Observable, {
			priority : 1,
			constructor : function(a) {
				Ext.apply(this, a);
				this.addEvents("connect", "disconnect", "data", "exception");
				Ext.direct.Provider.superclass.constructor.call(this, a)
			},
			isConnected : function() {
				return false
			},
			connect : Ext.emptyFn,
			disconnect : Ext.emptyFn
		});
Ext.direct.JsonProvider = Ext.extend(Ext.direct.Provider, {
			parseResponse : function(a) {
				if (!Ext.isEmpty(a.responseText)) {
					if (typeof a.responseText == "object") {
						return a.responseText
					}
					return Ext.decode(a.responseText)
				}
				return null
			},
			getEvents : function(j) {
				var g = null;
				try {
					g = this.parseResponse(j)
				} catch (h) {
					var d = new Ext.Direct.ExceptionEvent({
								data : h,
								xhr : j,
								code : Ext.Direct.exceptions.PARSE,
								message : "Error parsing json response: \n\n "
										+ g
							});
					return [d]
				}
				var c = [];
				if (Ext.isArray(g)) {
					for (var b = 0, a = g.length; b < a; b++) {
						c.push(Ext.Direct.createEvent(g[b]))
					}
				} else {
					c.push(Ext.Direct.createEvent(g))
				}
				return c
			}
		});
Ext.direct.PollingProvider = Ext.extend(Ext.direct.JsonProvider, {
			priority : 3,
			interval : 3000,
			constructor : function(a) {
				Ext.direct.PollingProvider.superclass.constructor.call(this, a);
				this.addEvents("beforepoll", "poll")
			},
			isConnected : function() {
				return !!this.pollTask
			},
			connect : function() {
				if (this.url && !this.pollTask) {
					this.pollTask = Ext.TaskMgr.start({
								run : function() {
									if (this.fireEvent("beforepoll", this) !== false) {
										if (typeof this.url == "function") {
											this.url(this.baseParams)
										} else {
											Ext.Ajax.request({
														url : this.url,
														callback : this.onData,
														scope : this,
														params : this.baseParams
													})
										}
									}
								},
								interval : this.interval,
								scope : this
							});
					this.fireEvent("connect", this)
				} else {
					if (!this.url) {
						throw "Error initializing PollingProvider, no url configured."
					}
				}
			},
			disconnect : function() {
				if (this.pollTask) {
					Ext.TaskMgr.stop(this.pollTask);
					delete this.pollTask;
					this.fireEvent("disconnect", this)
				}
			},
			onData : function(d, j, h) {
				if (j) {
					var c = this.getEvents(h);
					for (var b = 0, a = c.length; b < a; b++) {
						var g = c[b];
						this.fireEvent("data", this, g)
					}
				} else {
					var g = new Ext.Direct.ExceptionEvent({
								data : g,
								code : Ext.Direct.exceptions.TRANSPORT,
								message : "Unable to connect to the server.",
								xhr : h
							});
					this.fireEvent("data", this, g)
				}
			}
		});
Ext.Direct.PROVIDERS.polling = Ext.direct.PollingProvider;
Ext.direct.RemotingProvider = Ext.extend(Ext.direct.JsonProvider, {
	enableBuffer : 10,
	maxRetries : 1,
	timeout : undefined,
	constructor : function(a) {
		Ext.direct.RemotingProvider.superclass.constructor.call(this, a);
		this.addEvents("beforecall", "call");
		this.namespace = (Ext.isString(this.namespace)) ? Ext
				.ns(this.namespace) : this.namespace || window;
		this.transactions = {};
		this.callBuffer = []
	},
	initAPI : function() {
		var h = this.actions;
		for (var j in h) {
			var d = this.namespace[j] || (this.namespace[j] = {}), e = h[j];
			for (var g = 0, b = e.length; g < b; g++) {
				var a = e[g];
				d[a.name] = this.createMethod(j, a)
			}
		}
	},
	isConnected : function() {
		return !!this.connected
	},
	connect : function() {
		if (this.url) {
			this.initAPI();
			this.connected = true;
			this.fireEvent("connect", this)
		} else {
			if (!this.url) {
				throw "Error initializing RemotingProvider, no url configured."
			}
		}
	},
	disconnect : function() {
		if (this.connected) {
			this.connected = false;
			this.fireEvent("disconnect", this)
		}
	},
	onData : function(a, h, j) {
		if (h) {
			var k = this.getEvents(j);
			for (var b = 0, c = k.length; b < c; b++) {
				var d = k[b], l = this.getTransaction(d);
				this.fireEvent("data", this, d);
				if (l) {
					this.doCallback(l, d, true);
					Ext.Direct.removeTransaction(l)
				}
			}
		} else {
			var g = [].concat(a.ts);
			for (var b = 0, c = g.length; b < c; b++) {
				var l = this.getTransaction(g[b]);
				if (l && l.retryCount < this.maxRetries) {
					l.retry()
				} else {
					var d = new Ext.Direct.ExceptionEvent({
								data : d,
								transaction : l,
								code : Ext.Direct.exceptions.TRANSPORT,
								message : "Unable to connect to the server.",
								xhr : j
							});
					this.fireEvent("data", this, d);
					if (l) {
						this.doCallback(l, d, false);
						Ext.Direct.removeTransaction(l)
					}
				}
			}
		}
	},
	getCallData : function(a) {
		return {
			action : a.action,
			method : a.method,
			data : a.data,
			type : "rpc",
			tid : a.tid
		}
	},
	doSend : function(d) {
		var g = {
			url : this.url,
			callback : this.onData,
			scope : this,
			ts : d,
			timeout : this.timeout
		}, b;
		if (Ext.isArray(d)) {
			b = [];
			for (var c = 0, a = d.length; c < a; c++) {
				b.push(this.getCallData(d[c]))
			}
		} else {
			b = this.getCallData(d)
		}
		if (this.enableUrlEncode) {
			var e = {};
			e[Ext.isString(this.enableUrlEncode)
					? this.enableUrlEncode
					: "data"] = Ext.encode(b);
			g.params = e
		} else {
			g.jsonData = b
		}
		Ext.Ajax.request(g)
	},
	combineAndSend : function() {
		var a = this.callBuffer.length;
		if (a > 0) {
			this.doSend(a == 1 ? this.callBuffer[0] : this.callBuffer);
			this.callBuffer = []
		}
	},
	queueTransaction : function(a) {
		if (a.form) {
			this.processForm(a);
			return
		}
		this.callBuffer.push(a);
		if (this.enableBuffer) {
			if (!this.callTask) {
				this.callTask = new Ext.util.DelayedTask(this.combineAndSend,
						this)
			}
			this.callTask.delay(Ext.isNumber(this.enableBuffer)
					? this.enableBuffer
					: 10)
		} else {
			this.combineAndSend()
		}
	},
	doCall : function(j, a, b) {
		var h = null, e = b[a.len], g = b[a.len + 1];
		if (a.len !== 0) {
			h = b.slice(0, a.len)
		}
		var d = new Ext.Direct.Transaction({
					provider : this,
					args : b,
					action : j,
					method : a.name,
					data : h,
					cb : g && Ext.isFunction(e) ? e.createDelegate(g) : e
				});
		if (this.fireEvent("beforecall", this, d) !== false) {
			Ext.Direct.addTransaction(d);
			this.queueTransaction(d);
			this.fireEvent("call", this, d)
		}
	},
	doForm : function(k, b, g, j, e) {
		var d = new Ext.Direct.Transaction({
					provider : this,
					action : k,
					method : b.name,
					args : [g, j, e],
					cb : e && Ext.isFunction(j) ? j.createDelegate(e) : j,
					isForm : true
				});
		if (this.fireEvent("beforecall", this, d) !== false) {
			Ext.Direct.addTransaction(d);
			var a = String(g.getAttribute("enctype")).toLowerCase() == "multipart/form-data", h = {
				extTID : d.tid,
				extAction : k,
				extMethod : b.name,
				extType : "rpc",
				extUpload : String(a)
			};
			Ext.apply(d, {
						form : Ext.getDom(g),
						isUpload : a,
						params : j && Ext.isObject(j.params) ? Ext.apply(h,
								j.params) : h
					});
			this.fireEvent("call", this, d);
			this.processForm(d)
		}
	},
	processForm : function(a) {
		Ext.Ajax.request({
					url : this.url,
					params : a.params,
					callback : this.onData,
					scope : this,
					form : a.form,
					isUpload : a.isUpload,
					ts : a
				})
	},
	createMethod : function(d, a) {
		var b;
		if (!a.formHandler) {
			b = function() {
				this.doCall(d, a, Array.prototype.slice.call(arguments, 0))
			}.createDelegate(this)
		} else {
			b = function(e, g, c) {
				this.doForm(d, a, e, g, c)
			}.createDelegate(this)
		}
		b.directCfg = {
			action : d,
			method : a
		};
		return b
	},
	getTransaction : function(a) {
		return a && a.tid ? Ext.Direct.getTransaction(a.tid) : null
	},
	doCallback : function(c, g) {
		var d = g.status ? "success" : "failure";
		if (c && c.cb) {
			var b = c.cb, a = Ext.isDefined(g.result) ? g.result : g.data;
			if (Ext.isFunction(b)) {
				b(a, g)
			} else {
				Ext.callback(b[d], b.scope, [a, g]);
				Ext.callback(b.callback, b.scope, [a, g])
			}
		}
	}
});
Ext.Direct.PROVIDERS.remoting = Ext.direct.RemotingProvider;
Ext.Resizable = function(d, e) {
	this.el = Ext.get(d);
	if (e && e.wrap) {
		e.resizeChild = this.el;
		this.el = this.el.wrap(typeof e.wrap == "object" ? e.wrap : {
			cls : "xresizable-wrap"
		});
		this.el.id = this.el.dom.id = e.resizeChild.id + "-rzwrap";
		this.el.setStyle("overflow", "hidden");
		this.el.setPositioning(e.resizeChild.getPositioning());
		e.resizeChild.clearPositioning();
		if (!e.width || !e.height) {
			var g = e.resizeChild.getSize();
			this.el.setSize(g.width, g.height)
		}
		if (e.pinned && !e.adjustments) {
			e.adjustments = "auto"
		}
	}
	this.proxy = this.el.createProxy({
				tag : "div",
				cls : "x-resizable-proxy",
				id : this.el.id + "-rzproxy"
			}, Ext.getBody());
	this.proxy.unselectable();
	this.proxy.enableDisplayMode("block");
	Ext.apply(this, e);
	if (this.pinned) {
		this.disableTrackOver = true;
		this.el.addClass("x-resizable-pinned")
	}
	var k = this.el.getStyle("position");
	if (k != "absolute" && k != "fixed") {
		this.el.setStyle("position", "relative")
	}
	if (!this.handles) {
		this.handles = "s,e,se";
		if (this.multiDirectional) {
			this.handles += ",n,w"
		}
	}
	if (this.handles == "all") {
		this.handles = "n s e w ne nw se sw"
	}
	var o = this.handles.split(/\s*?[,;]\s*?| /);
	var c = Ext.Resizable.positions;
	for (var j = 0, l = o.length; j < l; j++) {
		if (o[j] && c[o[j]]) {
			var n = c[o[j]];
			this[n] = new Ext.Resizable.Handle(this, n, this.disableTrackOver,
					this.transparent)
		}
	}
	this.corner = this.southeast;
	if (this.handles.indexOf("n") != -1 || this.handles.indexOf("w") != -1) {
		this.updateBox = true
	}
	this.activeHandle = null;
	if (this.resizeChild) {
		if (typeof this.resizeChild == "boolean") {
			this.resizeChild = Ext.get(this.el.dom.firstChild, true)
		} else {
			this.resizeChild = Ext.get(this.resizeChild, true)
		}
	}
	if (this.adjustments == "auto") {
		var b = this.resizeChild;
		var m = this.west, h = this.east, a = this.north, o = this.south;
		if (b && (m || a)) {
			b.position("relative");
			b.setLeft(m ? m.el.getWidth() : 0);
			b.setTop(a ? a.el.getHeight() : 0)
		}
		this.adjustments = [
				(h ? -h.el.getWidth() : 0) + (m ? -m.el.getWidth() : 0),
				(a ? -a.el.getHeight() : 0) + (o ? -o.el.getHeight() : 0) - 1]
	}
	if (this.draggable) {
		this.dd = this.dynamic ? this.el.initDD(null) : this.el.initDDProxy(
				null, {
					dragElId : this.proxy.id
				});
		this.dd.setHandleElId(this.resizeChild
				? this.resizeChild.id
				: this.el.id);
		if (this.constrainTo) {
			this.dd.constrainTo(this.constrainTo)
		}
	}
	this.addEvents("beforeresize", "resize");
	if (this.width !== null && this.height !== null) {
		this.resizeTo(this.width, this.height)
	} else {
		this.updateChildSize()
	}
	if (Ext.isIE) {
		this.el.dom.style.zoom = 1
	}
	Ext.Resizable.superclass.constructor.call(this)
};
Ext.extend(Ext.Resizable, Ext.util.Observable, {
	adjustments : [0, 0],
	animate : false,
	disableTrackOver : false,
	draggable : false,
	duration : 0.35,
	dynamic : false,
	easing : "easeOutStrong",
	enabled : true,
	handles : false,
	multiDirectional : false,
	height : null,
	width : null,
	heightIncrement : 0,
	widthIncrement : 0,
	minHeight : 5,
	minWidth : 5,
	maxHeight : 10000,
	maxWidth : 10000,
	minX : 0,
	minY : 0,
	pinned : false,
	preserveRatio : false,
	resizeChild : false,
	transparent : false,
	resizeTo : function(b, a) {
		this.el.setSize(b, a);
		this.updateChildSize();
		this.fireEvent("resize", this, b, a, null)
	},
	startSizing : function(c, b) {
		this.fireEvent("beforeresize", this, c);
		if (this.enabled) {
			if (!this.overlay) {
				this.overlay = this.el.createProxy({
							tag : "div",
							cls : "x-resizable-overlay",
							html : "&#160;"
						}, Ext.getBody());
				this.overlay.unselectable();
				this.overlay.enableDisplayMode("block");
				this.overlay.on({
							scope : this,
							mousemove : this.onMouseMove,
							mouseup : this.onMouseUp
						})
			}
			this.overlay.setStyle("cursor", b.el.getStyle("cursor"));
			this.resizing = true;
			this.startBox = this.el.getBox();
			this.startPoint = c.getXY();
			this.offsets = [
					(this.startBox.x + this.startBox.width)
							- this.startPoint[0],
					(this.startBox.y + this.startBox.height)
							- this.startPoint[1]];
			this.overlay.setSize(Ext.lib.Dom.getViewWidth(true), Ext.lib.Dom
							.getViewHeight(true));
			this.overlay.show();
			if (this.constrainTo) {
				var a = Ext.get(this.constrainTo);
				this.resizeRegion = a.getRegion().adjust(a.getFrameWidth("t"),
						a.getFrameWidth("l"), -a.getFrameWidth("b"),
						-a.getFrameWidth("r"))
			}
			this.proxy.setStyle("visibility", "hidden");
			this.proxy.show();
			this.proxy.setBox(this.startBox);
			if (!this.dynamic) {
				this.proxy.setStyle("visibility", "visible")
			}
		}
	},
	onMouseDown : function(a, b) {
		if (this.enabled) {
			b.stopEvent();
			this.activeHandle = a;
			this.startSizing(b, a)
		}
	},
	onMouseUp : function(b) {
		this.activeHandle = null;
		var a = this.resizeElement();
		this.resizing = false;
		this.handleOut();
		this.overlay.hide();
		this.proxy.hide();
		this.fireEvent("resize", this, a.width, a.height, b)
	},
	updateChildSize : function() {
		if (this.resizeChild) {
			var d = this.el;
			var e = this.resizeChild;
			var c = this.adjustments;
			if (d.dom.offsetWidth) {
				var a = d.getSize(true);
				e.setSize(a.width + c[0], a.height + c[1])
			}
			if (Ext.isIE) {
				setTimeout(function() {
							if (d.dom.offsetWidth) {
								var g = d.getSize(true);
								e.setSize(g.width + c[0], g.height + c[1])
							}
						}, 10)
			}
		}
	},
	snap : function(c, e, b) {
		if (!e || !c) {
			return c
		}
		var d = c;
		var a = c % e;
		if (a > 0) {
			if (a > (e / 2)) {
				d = c + (e - a)
			} else {
				d = c - a
			}
		}
		return Math.max(b, d)
	},
	resizeElement : function() {
		var a = this.proxy.getBox();
		if (this.updateBox) {
			this.el.setBox(a, false, this.animate, this.duration, null,
					this.easing)
		} else {
			this.el.setSize(a.width, a.height, this.animate, this.duration,
					null, this.easing)
		}
		this.updateChildSize();
		if (!this.dynamic) {
			this.proxy.hide()
		}
		if (this.draggable && this.constrainTo) {
			this.dd.resetConstraints();
			this.dd.constrainTo(this.constrainTo)
		}
		return a
	},
	constrain : function(b, c, a, d) {
		if (b - c < a) {
			c = b - a
		} else {
			if (b - c > d) {
				c = b - d
			}
		}
		return c
	},
	onMouseMove : function(A) {
		if (this.enabled && this.activeHandle) {
			try {
				if (this.resizeRegion
						&& !this.resizeRegion.contains(A.getPoint())) {
					return
				}
				var u = this.curSize || this.startBox, m = this.startBox.x, l = this.startBox.y, c = m, b = l, n = u.width, v = u.height, d = n, p = v, o = this.minWidth, B = this.minHeight, t = this.maxWidth, E = this.maxHeight, j = this.widthIncrement, a = this.heightIncrement, C = A
						.getXY(), s = -(this.startPoint[0] - Math.max(
						this.minX, C[0])), q = -(this.startPoint[1] - Math.max(
						this.minY, C[1])), k = this.activeHandle.position, F, g;
				switch (k) {
					case "east" :
						n += s;
						n = Math.min(Math.max(o, n), t);
						break;
					case "south" :
						v += q;
						v = Math.min(Math.max(B, v), E);
						break;
					case "southeast" :
						n += s;
						v += q;
						n = Math.min(Math.max(o, n), t);
						v = Math.min(Math.max(B, v), E);
						break;
					case "north" :
						q = this.constrain(v, q, B, E);
						l += q;
						v -= q;
						break;
					case "west" :
						s = this.constrain(n, s, o, t);
						m += s;
						n -= s;
						break;
					case "northeast" :
						n += s;
						n = Math.min(Math.max(o, n), t);
						q = this.constrain(v, q, B, E);
						l += q;
						v -= q;
						break;
					case "northwest" :
						s = this.constrain(n, s, o, t);
						q = this.constrain(v, q, B, E);
						l += q;
						v -= q;
						m += s;
						n -= s;
						break;
					case "southwest" :
						s = this.constrain(n, s, o, t);
						v += q;
						v = Math.min(Math.max(B, v), E);
						m += s;
						n -= s;
						break
				}
				var r = this.snap(n, j, o);
				var D = this.snap(v, a, B);
				if (r != n || D != v) {
					switch (k) {
						case "northeast" :
							l -= D - v;
							break;
						case "north" :
							l -= D - v;
							break;
						case "southwest" :
							m -= r - n;
							break;
						case "west" :
							m -= r - n;
							break;
						case "northwest" :
							m -= r - n;
							l -= D - v;
							break
					}
					n = r;
					v = D
				}
				if (this.preserveRatio) {
					switch (k) {
						case "southeast" :
						case "east" :
							v = p * (n / d);
							v = Math.min(Math.max(B, v), E);
							n = d * (v / p);
							break;
						case "south" :
							n = d * (v / p);
							n = Math.min(Math.max(o, n), t);
							v = p * (n / d);
							break;
						case "northeast" :
							n = d * (v / p);
							n = Math.min(Math.max(o, n), t);
							v = p * (n / d);
							break;
						case "north" :
							F = n;
							n = d * (v / p);
							n = Math.min(Math.max(o, n), t);
							v = p * (n / d);
							m += (F - n) / 2;
							break;
						case "southwest" :
							v = p * (n / d);
							v = Math.min(Math.max(B, v), E);
							F = n;
							n = d * (v / p);
							m += F - n;
							break;
						case "west" :
							g = v;
							v = p * (n / d);
							v = Math.min(Math.max(B, v), E);
							l += (g - v) / 2;
							F = n;
							n = d * (v / p);
							m += F - n;
							break;
						case "northwest" :
							F = n;
							g = v;
							v = p * (n / d);
							v = Math.min(Math.max(B, v), E);
							n = d * (v / p);
							l += g - v;
							m += F - n;
							break
					}
				}
				this.proxy.setBounds(m, l, n, v);
				if (this.dynamic) {
					this.resizeElement()
				}
			} catch (z) {
			}
		}
	},
	handleOver : function() {
		if (this.enabled) {
			this.el.addClass("x-resizable-over")
		}
	},
	handleOut : function() {
		if (!this.resizing) {
			this.el.removeClass("x-resizable-over")
		}
	},
	getEl : function() {
		return this.el
	},
	getResizeChild : function() {
		return this.resizeChild
	},
	destroy : function(b) {
		Ext.destroy(this.dd, this.overlay, this.proxy);
		this.overlay = null;
		this.proxy = null;
		var c = Ext.Resizable.positions;
		for (var a in c) {
			if (typeof c[a] != "function" && this[c[a]]) {
				this[c[a]].destroy()
			}
		}
		if (b) {
			this.el.update("");
			Ext.destroy(this.el);
			this.el = null
		}
		this.purgeListeners()
	},
	syncHandleHeight : function() {
		var a = this.el.getHeight(true);
		if (this.west) {
			this.west.el.setHeight(a)
		}
		if (this.east) {
			this.east.el.setHeight(a)
		}
	}
});
Ext.Resizable.positions = {
	n : "north",
	s : "south",
	e : "east",
	w : "west",
	se : "southeast",
	sw : "southwest",
	nw : "northwest",
	ne : "northeast"
};
Ext.Resizable.Handle = function(c, e, b, d) {
	if (!this.tpl) {
		var a = Ext.DomHelper.createTemplate({
					tag : "div",
					cls : "x-resizable-handle x-resizable-handle-{0}"
				});
		a.compile();
		Ext.Resizable.Handle.prototype.tpl = a
	}
	this.position = e;
	this.rz = c;
	this.el = this.tpl.append(c.el.dom, [this.position], true);
	this.el.unselectable();
	if (d) {
		this.el.setOpacity(0)
	}
	this.el.on("mousedown", this.onMouseDown, this);
	if (!b) {
		this.el.on({
					scope : this,
					mouseover : this.onMouseOver,
					mouseout : this.onMouseOut
				})
	}
};
Ext.Resizable.Handle.prototype = {
	afterResize : function(a) {
	},
	onMouseDown : function(a) {
		this.rz.onMouseDown(this, a)
	},
	onMouseOver : function(a) {
		this.rz.handleOver(this, a)
	},
	onMouseOut : function(a) {
		this.rz.handleOut(this, a)
	},
	destroy : function() {
		Ext.destroy(this.el);
		this.el = null
	}
};
Ext.Window = Ext.extend(Ext.Panel, {
			baseCls : "x-window",
			resizable : true,
			draggable : true,
			closable : true,
			closeAction : "close",
			constrain : false,
			constrainHeader : false,
			plain : false,
			minimizable : false,
			maximizable : false,
			minHeight : 100,
			minWidth : 200,
			expandOnShow : true,
			collapsible : false,
			initHidden : undefined,
			hidden : true,
			monitorResize : true,
			elements : "header,body",
			frame : true,
			floating : true,
			initComponent : function() {
				this.initTools();
				Ext.Window.superclass.initComponent.call(this);
				this.addEvents("resize", "maximize", "minimize", "restore");
				if (Ext.isDefined(this.initHidden)) {
					this.hidden = this.initHidden
				}
				if (this.hidden === false) {
					this.hidden = true;
					this.show()
				}
			},
			getState : function() {
				return Ext.apply(Ext.Window.superclass.getState.call(this)
								|| {}, this.getBox(true))
			},
			onRender : function(b, a) {
				Ext.Window.superclass.onRender.call(this, b, a);
				if (this.plain) {
					this.el.addClass("x-window-plain")
				}
				this.focusEl = this.el.createChild({
							tag : "a",
							href : "#",
							cls : "x-dlg-focus",
							tabIndex : "-1",
							html : "&#160;"
						});
				this.focusEl.swallowEvent("click", true);
				this.proxy = this.el.createProxy("x-window-proxy");
				this.proxy.enableDisplayMode("block");
				if (this.modal) {
					this.mask = this.container.createChild({
								cls : "ext-el-mask"
							}, this.el.dom);
					this.mask.enableDisplayMode("block");
					this.mask.hide();
					this.mon(this.mask, "click", this.focus, this)
				}
				if (this.maximizable) {
					this
							.mon(this.header, "dblclick", this.toggleMaximize,
									this)
				}
			},
			initEvents : function() {
				Ext.Window.superclass.initEvents.call(this);
				if (this.animateTarget) {
					this.setAnimateTarget(this.animateTarget)
				}
				if (this.resizable) {
					this.resizer = new Ext.Resizable(this.el, {
								minWidth : this.minWidth,
								minHeight : this.minHeight,
								handles : this.resizeHandles || "all",
								pinned : true,
								resizeElement : this.resizerAction
							});
					this.resizer.window = this;
					this.mon(this.resizer, "beforeresize", this.beforeResize,
							this)
				}
				if (this.draggable) {
					this.header.addClass("x-window-draggable")
				}
				this.mon(this.el, "mousedown", this.toFront, this);
				this.manager = this.manager || Ext.WindowMgr;
				this.manager.register(this);
				if (this.maximized) {
					this.maximized = false;
					this.maximize()
				}
				if (this.closable) {
					var a = this.getKeyMap();
					a.on(27, this.onEsc, this);
					a.disable()
				}
			},
			initDraggable : function() {
				this.dd = new Ext.Window.DD(this)
			},
			onEsc : function() {
				this[this.closeAction]()
			},
			beforeDestroy : function() {
				if (this.rendered) {
					this.hide();
					if (this.doAnchor) {
						Ext.EventManager.removeResizeListener(this.doAnchor,
								this);
						Ext.EventManager.un(window, "scroll", this.doAnchor,
								this)
					}
					Ext.destroy(this.focusEl, this.resizer, this.dd,
							this.proxy, this.mask)
				}
				Ext.Window.superclass.beforeDestroy.call(this)
			},
			onDestroy : function() {
				if (this.manager) {
					this.manager.unregister(this)
				}
				Ext.Window.superclass.onDestroy.call(this)
			},
			initTools : function() {
				if (this.minimizable) {
					this.addTool({
								id : "minimize",
								handler : this.minimize
										.createDelegate(this, [])
							})
				}
				if (this.maximizable) {
					this.addTool({
								id : "maximize",
								handler : this.maximize
										.createDelegate(this, [])
							});
					this.addTool({
								id : "restore",
								handler : this.restore.createDelegate(this, []),
								hidden : true
							})
				}
				if (this.closable) {
					this.addTool({
								id : "close",
								handler : this[this.closeAction]
										.createDelegate(this, [])
							})
				}
			},
			resizerAction : function() {
				var a = this.proxy.getBox();
				this.proxy.hide();
				this.window.handleResize(a);
				return a
			},
			beforeResize : function() {
				this.resizer.minHeight = Math.max(this.minHeight, this
								.getFrameHeight()
								+ 40);
				this.resizer.minWidth = Math.max(this.minWidth, this
								.getFrameWidth()
								+ 40);
				this.resizeBox = this.el.getBox()
			},
			updateHandles : function() {
				if (Ext.isIE && this.resizer) {
					this.resizer.syncHandleHeight();
					this.el.repaint()
				}
			},
			handleResize : function(b) {
				var a = this.resizeBox;
				if (a.x != b.x || a.y != b.y) {
					this.updateBox(b)
				} else {
					this.setSize(b)
				}
				this.focus();
				this.updateHandles();
				this.saveState()
			},
			focus : function() {
				var c = this.focusEl, a = this.defaultButton, b = typeof a;
				if (Ext.isDefined(a)) {
					if (Ext.isNumber(a) && this.fbar) {
						c = this.fbar.items.get(a)
					} else {
						if (Ext.isString(a)) {
							c = Ext.getCmp(a)
						} else {
							c = a
						}
					}
				}
				c = c || this.focusEl;
				c.focus.defer(10, c)
			},
			setAnimateTarget : function(a) {
				a = Ext.get(a);
				this.animateTarget = a
			},
			beforeShow : function() {
				delete this.el.lastXY;
				delete this.el.lastLT;
				if (this.x === undefined || this.y === undefined) {
					var a = this.el.getAlignToXY(this.container, "c-c");
					var b = this.el.translatePoints(a[0], a[1]);
					this.x = this.x === undefined ? b.left : this.x;
					this.y = this.y === undefined ? b.top : this.y
				}
				this.el.setLeftTop(this.x, this.y);
				if (this.expandOnShow) {
					this.expand(false)
				}
				if (this.modal) {
					Ext.getBody().addClass("x-body-masked");
					this.mask.setSize(Ext.lib.Dom.getViewWidth(true),
							Ext.lib.Dom.getViewHeight(true));
					this.mask.show()
				}
			},
			show : function(c, a, b) {
				if (!this.rendered) {
					this.render(Ext.getBody())
				}
				if (this.hidden === false) {
					this.toFront();
					return this
				}
				if (this.fireEvent("beforeshow", this) === false) {
					return this
				}
				if (a) {
					this.on("show", a, b, {
								single : true
							})
				}
				this.hidden = false;
				if (Ext.isDefined(c)) {
					this.setAnimateTarget(c)
				}
				this.beforeShow();
				if (this.animateTarget) {
					this.animShow()
				} else {
					this.afterShow()
				}
				return this
			},
			afterShow : function(b) {
				this.proxy.hide();
				this.el.setStyle("display", "block");
				this.el.show();
				if (this.maximized) {
					this.fitContainer()
				}
				if (Ext.isMac && Ext.isGecko2) {
					this.cascade(this.setAutoScroll)
				}
				if (this.monitorResize || this.modal || this.constrain
						|| this.constrainHeader) {
					Ext.EventManager.onWindowResize(this.onWindowResize, this)
				}
				this.doConstrain();
				this.doLayout();
				if (this.keyMap) {
					this.keyMap.enable()
				}
				this.toFront();
				this.updateHandles();
				if (b && (Ext.isIE || Ext.isWebKit)) {
					var a = this.getSize();
					this.onResize(a.width, a.height)
				}
				this.onShow();
				this.fireEvent("show", this)
			},
			animShow : function() {
				this.proxy.show();
				this.proxy.setBox(this.animateTarget.getBox());
				this.proxy.setOpacity(0);
				var a = this.getBox();
				this.el.setStyle("display", "none");
				this.proxy.shift(Ext.apply(a, {
							callback : this.afterShow.createDelegate(this,
									[true], false),
							scope : this,
							easing : "easeNone",
							duration : 0.25,
							opacity : 0.5
						}))
			},
			hide : function(c, a, b) {
				if (this.hidden || this.fireEvent("beforehide", this) === false) {
					return this
				}
				if (a) {
					this.on("hide", a, b, {
								single : true
							})
				}
				this.hidden = true;
				if (c !== undefined) {
					this.setAnimateTarget(c)
				}
				if (this.modal) {
					this.mask.hide();
					Ext.getBody().removeClass("x-body-masked")
				}
				if (this.animateTarget) {
					this.animHide()
				} else {
					this.el.hide();
					this.afterHide()
				}
				return this
			},
			afterHide : function() {
				this.proxy.hide();
				if (this.monitorResize || this.modal || this.constrain
						|| this.constrainHeader) {
					Ext.EventManager.removeResizeListener(this.onWindowResize,
							this)
				}
				if (this.keyMap) {
					this.keyMap.disable()
				}
				this.onHide();
				this.fireEvent("hide", this)
			},
			animHide : function() {
				this.proxy.setOpacity(0.5);
				this.proxy.show();
				var a = this.getBox(false);
				this.proxy.setBox(a);
				this.el.hide();
				this.proxy.shift(Ext.apply(this.animateTarget.getBox(), {
							callback : this.afterHide,
							scope : this,
							duration : 0.25,
							easing : "easeNone",
							opacity : 0
						}))
			},
			onShow : Ext.emptyFn,
			onHide : Ext.emptyFn,
			onWindowResize : function() {
				if (this.maximized) {
					this.fitContainer()
				}
				if (this.modal) {
					this.mask.setSize("100%", "100%");
					var a = this.mask.dom.offsetHeight;
					this.mask.setSize(Ext.lib.Dom.getViewWidth(true),
							Ext.lib.Dom.getViewHeight(true))
				}
				this.doConstrain()
			},
			doConstrain : function() {
				if (this.constrain || this.constrainHeader) {
					var b;
					if (this.constrain) {
						b = {
							right : this.el.shadowOffset,
							left : this.el.shadowOffset,
							bottom : this.el.shadowOffset
						}
					} else {
						var a = this.getSize();
						b = {
							right : -(a.width - 100),
							bottom : -(a.height - 25)
						}
					}
					var c = this.el.getConstrainToXY(this.container, true, b);
					if (c) {
						this.setPosition(c[0], c[1])
					}
				}
			},
			ghost : function(a) {
				var c = this.createGhost(a);
				var b = this.getBox(true);
				c.setLeftTop(b.x, b.y);
				c.setWidth(b.width);
				this.el.hide();
				this.activeGhost = c;
				return c
			},
			unghost : function(b, a) {
				if (!this.activeGhost) {
					return
				}
				if (b !== false) {
					this.el.show();
					this.focus();
					if (Ext.isMac && Ext.isGecko2) {
						this.cascade(this.setAutoScroll)
					}
				}
				if (a !== false) {
					this.setPosition(this.activeGhost.getLeft(true),
							this.activeGhost.getTop(true))
				}
				this.activeGhost.hide();
				this.activeGhost.remove();
				delete this.activeGhost
			},
			minimize : function() {
				this.fireEvent("minimize", this);
				return this
			},
			close : function() {
				if (this.fireEvent("beforeclose", this) !== false) {
					if (this.hidden) {
						this.doClose()
					} else {
						this.hide(null, this.doClose, this)
					}
				}
			},
			doClose : function() {
				this.fireEvent("close", this);
				this.destroy()
			},
			maximize : function() {
				if (!this.maximized) {
					this.expand(false);
					this.restoreSize = this.getSize();
					this.restorePos = this.getPosition(true);
					if (this.maximizable) {
						this.tools.maximize.hide();
						this.tools.restore.show()
					}
					this.maximized = true;
					this.el.disableShadow();
					if (this.dd) {
						this.dd.lock()
					}
					if (this.collapsible) {
						this.tools.toggle.hide()
					}
					this.el.addClass("x-window-maximized");
					this.container.addClass("x-window-maximized-ct");
					this.setPosition(0, 0);
					this.fitContainer();
					this.fireEvent("maximize", this)
				}
				return this
			},
			restore : function() {
				if (this.maximized) {
					var a = this.tools;
					this.el.removeClass("x-window-maximized");
					if (a.restore) {
						a.restore.hide()
					}
					if (a.maximize) {
						a.maximize.show()
					}
					this.setPosition(this.restorePos[0], this.restorePos[1]);
					this.setSize(this.restoreSize.width,
							this.restoreSize.height);
					delete this.restorePos;
					delete this.restoreSize;
					this.maximized = false;
					this.el.enableShadow(true);
					if (this.dd) {
						this.dd.unlock()
					}
					if (this.collapsible && a.toggle) {
						a.toggle.show()
					}
					this.container.removeClass("x-window-maximized-ct");
					this.doConstrain();
					this.fireEvent("restore", this)
				}
				return this
			},
			toggleMaximize : function() {
				return this[this.maximized ? "restore" : "maximize"]()
			},
			fitContainer : function() {
				var a = this.container.getViewSize(false);
				this.setSize(a.width, a.height)
			},
			setZIndex : function(a) {
				if (this.modal) {
					this.mask.setStyle("z-index", a)
				}
				this.el.setZIndex(++a);
				a += 5;
				if (this.resizer) {
					this.resizer.proxy.setStyle("z-index", ++a)
				}
				this.lastZIndex = a
			},
			alignTo : function(b, a, c) {
				var d = this.el.getAlignToXY(b, a, c);
				this.setPagePosition(d[0], d[1]);
				return this
			},
			anchorTo : function(c, e, d, b) {
				if (this.doAnchor) {
					Ext.EventManager.removeResizeListener(this.doAnchor, this);
					Ext.EventManager.un(window, "scroll", this.doAnchor, this)
				}
				this.doAnchor = function() {
					this.alignTo(c, e, d)
				};
				Ext.EventManager.onWindowResize(this.doAnchor, this);
				var a = typeof b;
				if (a != "undefined") {
					Ext.EventManager.on(window, "scroll", this.doAnchor, this,
							{
								buffer : a == "number" ? b : 50
							})
				}
				this.doAnchor();
				return this
			},
			toFront : function(a) {
				if (this.manager.bringToFront(this)) {
					if (!a || !a.getTarget().focus) {
						this.focus()
					}
				}
				return this
			},
			setActive : function(a) {
				if (a) {
					if (!this.maximized) {
						this.el.enableShadow(true)
					}
					this.fireEvent("activate", this)
				} else {
					this.el.disableShadow();
					this.fireEvent("deactivate", this)
				}
			},
			toBack : function() {
				this.manager.sendToBack(this);
				return this
			},
			center : function() {
				var a = this.el.getAlignToXY(this.container, "c-c");
				this.setPagePosition(a[0], a[1]);
				return this
			}
		});
Ext.reg("window", Ext.Window);
Ext.Window.DD = function(a) {
	this.win = a;
	Ext.Window.DD.superclass.constructor
			.call(this, a.el.id, "WindowDD-" + a.id);
	this.setHandleElId(a.header.id);
	this.scroll = false
};
Ext.extend(Ext.Window.DD, Ext.dd.DD, {
			moveOnly : true,
			headerOffsets : [100, 25],
			startDrag : function() {
				var a = this.win;
				this.proxy = a.ghost();
				if (a.constrain !== false) {
					var c = a.el.shadowOffset;
					this.constrainTo(a.container, {
								right : c,
								left : c,
								bottom : c
							})
				} else {
					if (a.constrainHeader !== false) {
						var b = this.proxy.getSize();
						this.constrainTo(a.container, {
									right : -(b.width - this.headerOffsets[0]),
									bottom : -(b.height - this.headerOffsets[1])
								})
					}
				}
			},
			b4Drag : Ext.emptyFn,
			onDrag : function(a) {
				this.alignElWithMouse(this.proxy, a.getPageX(), a.getPageY())
			},
			endDrag : function(a) {
				this.win.unghost();
				this.win.saveState()
			}
		});
Ext.WindowGroup = function() {
	var g = {};
	var d = [];
	var e = null;
	var c = function(k, j) {
		return (!k._lastAccess || k._lastAccess < j._lastAccess) ? -1 : 1
	};
	var h = function() {
		var l = d, j = l.length;
		if (j > 0) {
			l.sort(c);
			var k = l[0].manager.zseed;
			for (var m = 0; m < j; m++) {
				var n = l[m];
				if (n && !n.hidden) {
					n.setZIndex(k + (m * 10))
				}
			}
		}
		a()
	};
	var b = function(j) {
		if (j != e) {
			if (e) {
				e.setActive(false)
			}
			e = j;
			if (j) {
				j.setActive(true)
			}
		}
	};
	var a = function() {
		for (var j = d.length - 1; j >= 0; --j) {
			if (!d[j].hidden) {
				b(d[j]);
				return
			}
		}
		b(null)
	};
	return {
		zseed : 9000,
		register : function(j) {
			if (j.manager) {
				j.manager.unregister(j)
			}
			j.manager = this;
			g[j.id] = j;
			d.push(j);
			j.on("hide", a)
		},
		unregister : function(j) {
			delete j.manager;
			delete g[j.id];
			j.un("hide", a);
			d.remove(j)
		},
		get : function(j) {
			return typeof j == "object" ? j : g[j]
		},
		bringToFront : function(j) {
			j = this.get(j);
			if (j != e) {
				j._lastAccess = new Date().getTime();
				h();
				return true
			}
			return false
		},
		sendToBack : function(j) {
			j = this.get(j);
			j._lastAccess = -(new Date().getTime());
			h();
			return j
		},
		hideAll : function() {
			for (var j in g) {
				if (g[j] && typeof g[j] != "function" && g[j].isVisible()) {
					g[j].hide()
				}
			}
		},
		getActive : function() {
			return e
		},
		getBy : function(l, k) {
			var m = [];
			for (var j = d.length - 1; j >= 0; --j) {
				var n = d[j];
				if (l.call(k || n, n) !== false) {
					m.push(n)
				}
			}
			return m
		},
		each : function(k, j) {
			for (var l in g) {
				if (g[l] && typeof g[l] != "function") {
					if (k.call(j || g[l], g[l]) === false) {
						return
					}
				}
			}
		}
	}
};
Ext.WindowMgr = new Ext.WindowGroup();
Ext.MessageBox = function() {
	var v, b, r, u, h, m, t, a, o, q, k, g, s, w, p, j = "", d = "", n = ["ok",
			"yes", "no", "cancel"];
	var c = function(y) {
		s[y].blur();
		if (v.isVisible()) {
			v.hide();
			x();
			Ext.callback(b.fn, b.scope || window, [y, w.dom.value, b], 1)
		}
	};
	var x = function() {
		if (b && b.cls) {
			v.el.removeClass(b.cls)
		}
		o.reset()
	};
	var e = function(A, y, z) {
		if (b && b.closable !== false) {
			v.hide();
			x()
		}
		if (z) {
			z.stopEvent()
		}
	};
	var l = function(y) {
		var A = 0, z;
		if (!y) {
			Ext.each(n, function(B) {
						s[B].hide()
					});
			return A
		}
		v.footer.dom.style.display = "";
		Ext.iterate(s, function(B, C) {
					z = y[B];
					if (z) {
						C.show();
						C.setText(Ext.isString(z)
								? z
								: Ext.MessageBox.buttonText[B]);
						A += C.getEl().getWidth() + 15
					} else {
						C.hide()
					}
				});
		return A
	};
	return {
		getDialog : function(y) {
			if (!v) {
				var A = [];
				s = {};
				Ext.each(n, function(B) {
							A.push(s[B] = new Ext.Button({
										text : this.buttonText[B],
										handler : c.createCallback(B),
										hideMode : "offsets"
									}))
						}, this);
				v = new Ext.Window({
					autoCreate : true,
					title : y,
					resizable : false,
					constrain : true,
					constrainHeader : true,
					minimizable : false,
					maximizable : false,
					stateful : false,
					modal : true,
					shim : true,
					buttonAlign : "center",
					width : 400,
					height : 100,
					minHeight : 80,
					plain : true,
					footer : true,
					closable : true,
					close : function() {
						if (b && b.buttons && b.buttons.no && !b.buttons.cancel) {
							c("no")
						} else {
							c("cancel")
						}
					},
					fbar : new Ext.Toolbar({
								items : A,
								enableOverflow : false
							})
				});
				v.render(document.body);
				v.getEl().addClass("x-window-dlg");
				r = v.mask;
				h = v.body.createChild({
					html : '<div class="ext-mb-icon"></div><div class="ext-mb-content"><span class="ext-mb-text"></span><br /><div class="ext-mb-fix-cursor"><input type="text" class="ext-mb-input" /><textarea class="ext-mb-textarea"></textarea></div></div>'
				});
				k = Ext.get(h.dom.firstChild);
				var z = h.dom.childNodes[1];
				m = Ext.get(z.firstChild);
				t = Ext.get(z.childNodes[2].firstChild);
				t.enableDisplayMode();
				t.addKeyListener([10, 13], function() {
							if (v.isVisible() && b && b.buttons) {
								if (b.buttons.ok) {
									c("ok")
								} else {
									if (b.buttons.yes) {
										c("yes")
									}
								}
							}
						});
				a = Ext.get(z.childNodes[2].childNodes[1]);
				a.enableDisplayMode();
				o = new Ext.ProgressBar({
							renderTo : h
						});
				h.createChild({
							cls : "x-clear"
						})
			}
			return v
		},
		updateText : function(B) {
			if (!v.isVisible() && !b.width) {
				v.setSize(this.maxWidth, 100)
			}
			m.update(B || "&#160;");
			var z = d != "" ? (k.getWidth() + k.getMargins("lr")) : 0;
			var D = m.getWidth() + m.getMargins("lr");
			var A = v.getFrameWidth("lr");
			var C = v.body.getFrameWidth("lr");
			if (Ext.isIE && z > 0) {
				z += 3
			}
			var y = Math.max(Math.min(b.width || z + D + A + C, this.maxWidth),
					Math.max(b.minWidth || this.minWidth, p || 0));
			if (b.prompt === true) {
				w.setWidth(y - z - A - C)
			}
			if (b.progress === true || b.wait === true) {
				o.setSize(y - z - A - C)
			}
			if (Ext.isIE && y == p) {
				y += 4
			}
			v.setSize(y, "auto").center();
			return this
		},
		updateProgress : function(z, y, A) {
			o.updateProgress(z, y);
			if (A) {
				this.updateText(A)
			}
			return this
		},
		isVisible : function() {
			return v && v.isVisible()
		},
		hide : function() {
			var y = v ? v.activeGhost : null;
			if (this.isVisible() || y) {
				v.hide();
				x();
				if (y) {
					v.unghost(false, false)
				}
			}
			return this
		},
		show : function(B) {
			if (this.isVisible()) {
				this.hide()
			}
			b = B;
			var C = this.getDialog(b.title || "&#160;");
			C.setTitle(b.title || "&#160;");
			var y = (b.closable !== false && b.progress !== true && b.wait !== true);
			C.tools.close.setDisplayed(y);
			w = t;
			b.prompt = b.prompt || (b.multiline ? true : false);
			if (b.prompt) {
				if (b.multiline) {
					t.hide();
					a.show();
					a.setHeight(Ext.isNumber(b.multiline)
							? b.multiline
							: this.defaultTextHeight);
					w = a
				} else {
					t.show();
					a.hide()
				}
			} else {
				t.hide();
				a.hide()
			}
			w.dom.value = b.value || "";
			if (b.prompt) {
				C.focusEl = w
			} else {
				var A = b.buttons;
				var z = null;
				if (A && A.ok) {
					z = s.ok
				} else {
					if (A && A.yes) {
						z = s.yes
					}
				}
				if (z) {
					C.focusEl = z
				}
			}
			if (b.iconCls) {
				C.setIconClass(b.iconCls)
			}
			this.setIcon(Ext.isDefined(b.icon) ? b.icon : j);
			p = l(b.buttons);
			o.setVisible(b.progress === true || b.wait === true);
			this.updateProgress(0, b.progressText);
			this.updateText(b.msg);
			if (b.cls) {
				C.el.addClass(b.cls)
			}
			C.proxyDrag = b.proxyDrag === true;
			C.modal = b.modal !== false;
			C.mask = b.modal !== false ? r : false;
			if (!C.isVisible()) {
				document.body.appendChild(v.el.dom);
				C.setAnimateTarget(b.animEl);
				C.on("show", function() {
							if (y === true) {
								C.keyMap.enable()
							} else {
								C.keyMap.disable()
							}
						}, this, {
							single : true
						});
				C.show(b.animEl)
			}
			if (b.wait === true) {
				o.wait(b.waitConfig)
			}
			return this
		},
		setIcon : function(y) {
			if (!v) {
				j = y;
				return
			}
			j = undefined;
			if (y && y != "") {
				k.removeClass("x-hidden");
				k.replaceClass(d, y);
				h.addClass("x-dlg-icon");
				d = y
			} else {
				k.replaceClass(d, "x-hidden");
				h.removeClass("x-dlg-icon");
				d = ""
			}
			return this
		},
		progress : function(A, z, y) {
			this.show({
						title : A,
						msg : z,
						buttons : false,
						progress : true,
						closable : false,
						minWidth : this.minProgressWidth,
						progressText : y
					});
			return this
		},
		wait : function(A, z, y) {
			this.show({
						title : z,
						msg : A,
						buttons : false,
						closable : false,
						wait : true,
						modal : true,
						minWidth : this.minProgressWidth,
						waitConfig : y
					});
			return this
		},
		alert : function(B, A, z, y) {
			this.show({
						title : B,
						msg : A,
						buttons : this.OK,
						fn : z,
						scope : y
					});
			return this
		},
		confirm : function(B, A, z, y) {
			this.show({
						title : B,
						msg : A,
						buttons : this.YESNO,
						fn : z,
						scope : y,
						icon : this.QUESTION
					});
			return this
		},
		prompt : function(D, C, A, z, y, B) {
			this.show({
						title : D,
						msg : C,
						buttons : this.OKCANCEL,
						fn : A,
						minWidth : 250,
						scope : z,
						prompt : true,
						multiline : y,
						value : B
					});
			return this
		},
		OK : {
			ok : true
		},
		CANCEL : {
			cancel : true
		},
		OKCANCEL : {
			ok : true,
			cancel : true
		},
		YESNO : {
			yes : true,
			no : true
		},
		YESNOCANCEL : {
			yes : true,
			no : true,
			cancel : true
		},
		INFO : "ext-mb-info",
		WARNING : "ext-mb-warning",
		QUESTION : "ext-mb-question",
		ERROR : "ext-mb-error",
		defaultTextHeight : 75,
		maxWidth : 600,
		minWidth : 100,
		minProgressWidth : 250,
		buttonText : {
			ok : "OK",
			cancel : "Cancel",
			yes : "Yes",
			no : "No"
		}
	}
}();
Ext.Msg = Ext.MessageBox;
Ext.dd.PanelProxy = function(a, b) {
	this.panel = a;
	this.id = this.panel.id + "-ddproxy";
	Ext.apply(this, b)
};
Ext.dd.PanelProxy.prototype = {
	insertProxy : true,
	setStatus : Ext.emptyFn,
	reset : Ext.emptyFn,
	update : Ext.emptyFn,
	stop : Ext.emptyFn,
	sync : Ext.emptyFn,
	getEl : function() {
		return this.ghost
	},
	getGhost : function() {
		return this.ghost
	},
	getProxy : function() {
		return this.proxy
	},
	hide : function() {
		if (this.ghost) {
			if (this.proxy) {
				this.proxy.remove();
				delete this.proxy
			}
			this.panel.el.dom.style.display = "";
			this.ghost.remove();
			delete this.ghost
		}
	},
	show : function() {
		if (!this.ghost) {
			this.ghost = this.panel.createGhost(undefined, undefined, Ext
							.getBody());
			this.ghost.setXY(this.panel.el.getXY());
			if (this.insertProxy) {
				this.proxy = this.panel.el.insertSibling({
							cls : "x-panel-dd-spacer"
						});
				this.proxy.setSize(this.panel.getSize())
			}
			this.panel.el.dom.style.display = "none"
		}
	},
	repair : function(b, c, a) {
		this.hide();
		if (typeof c == "function") {
			c.call(a || this)
		}
	},
	moveProxy : function(a, b) {
		if (this.proxy) {
			a.insertBefore(this.proxy.dom, b)
		}
	}
};
Ext.Panel.DD = function(b, a) {
	this.panel = b;
	this.dragData = {
		panel : b
	};
	this.proxy = new Ext.dd.PanelProxy(b, a);
	Ext.Panel.DD.superclass.constructor.call(this, b.el, a);
	var c = b.header;
	if (c) {
		this.setHandleElId(c.id)
	}
	(c ? c : this.panel.body).setStyle("cursor", "move");
	this.scroll = false
};
Ext.extend(Ext.Panel.DD, Ext.dd.DragSource, {
			showFrame : Ext.emptyFn,
			startDrag : Ext.emptyFn,
			b4StartDrag : function(a, b) {
				this.proxy.show()
			},
			b4MouseDown : function(b) {
				var a = b.getPageX();
				var c = b.getPageY();
				this.autoOffset(a, c)
			},
			onInitDrag : function(a, b) {
				this.onStartDrag(a, b);
				return true
			},
			createFrame : Ext.emptyFn,
			getDragEl : function(a) {
				return this.proxy.ghost.dom
			},
			endDrag : function(a) {
				this.proxy.hide();
				this.panel.saveState()
			},
			autoOffset : function(a, b) {
				a -= this.startPageX;
				b -= this.startPageY;
				this.setDelta(a, b)
			}
		});
Ext.state.Provider = function() {
	this.addEvents("statechange");
	this.state = {};
	Ext.state.Provider.superclass.constructor.call(this)
};
Ext.extend(Ext.state.Provider, Ext.util.Observable, {
			get : function(b, a) {
				return typeof this.state[b] == "undefined" ? a : this.state[b]
			},
			clear : function(a) {
				delete this.state[a];
				this.fireEvent("statechange", this, a, null)
			},
			set : function(a, b) {
				this.state[a] = b;
				this.fireEvent("statechange", this, a, b)
			},
			decodeValue : function(b) {
				var e = /^(a|n|d|b|s|o)\:(.*)$/;
				var g = e.exec(unescape(b));
				if (!g || !g[1]) {
					return
				}
				var d = g[1];
				var a = g[2];
				switch (d) {
					case "n" :
						return parseFloat(a);
					case "d" :
						return new Date(Date.parse(a));
					case "b" :
						return (a == "1");
					case "a" :
						var c = [];
						if (a != "") {
							Ext.each(a.split("^"), function(h) {
										c.push(this.decodeValue(h))
									}, this)
						}
						return c;
					case "o" :
						var c = {};
						if (a != "") {
							Ext.each(a.split("^"), function(j) {
										var h = j.split("=");
										c[h[0]] = this.decodeValue(h[1])
									}, this)
						}
						return c;
					default :
						return a
				}
			},
			encodeValue : function(c) {
				var b;
				if (typeof c == "number") {
					b = "n:" + c
				} else {
					if (typeof c == "boolean") {
						b = "b:" + (c ? "1" : "0")
					} else {
						if (Ext.isDate(c)) {
							b = "d:" + c.toGMTString()
						} else {
							if (Ext.isArray(c)) {
								var g = "";
								for (var e = 0, a = c.length; e < a; e++) {
									g += this.encodeValue(c[e]);
									if (e != a - 1) {
										g += "^"
									}
								}
								b = "a:" + g
							} else {
								if (typeof c == "object") {
									var g = "";
									for (var d in c) {
										if (typeof c[d] != "function"
												&& c[d] !== undefined) {
											g += d + "="
													+ this.encodeValue(c[d])
													+ "^"
										}
									}
									b = "o:" + g.substring(0, g.length - 1)
								} else {
									b = "s:" + c
								}
							}
						}
					}
				}
				return escape(b)
			}
		});
Ext.state.Manager = function() {
	var a = new Ext.state.Provider();
	return {
		setProvider : function(b) {
			a = b
		},
		get : function(c, b) {
			return a.get(c, b)
		},
		set : function(b, c) {
			a.set(b, c)
		},
		clear : function(b) {
			a.clear(b)
		},
		getProvider : function() {
			return a
		}
	}
}();
Ext.state.CookieProvider = function(a) {
	Ext.state.CookieProvider.superclass.constructor.call(this);
	this.path = "/";
	this.expires = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7));
	this.domain = null;
	this.secure = false;
	Ext.apply(this, a);
	this.state = this.readCookies()
};
Ext.extend(Ext.state.CookieProvider, Ext.state.Provider, {
			set : function(a, b) {
				if (typeof b == "undefined" || b === null) {
					this.clear(a);
					return
				}
				this.setCookie(a, b);
				Ext.state.CookieProvider.superclass.set.call(this, a, b)
			},
			clear : function(a) {
				this.clearCookie(a);
				Ext.state.CookieProvider.superclass.clear.call(this, a)
			},
			readCookies : function() {
				var d = {};
				var h = document.cookie + ";";
				var b = /\s?(.*?)=(.*?);/g;
				var g;
				while ((g = b.exec(h)) != null) {
					var a = g[1];
					var e = g[2];
					if (a && a.substring(0, 3) == "ys-") {
						d[a.substr(3)] = this.decodeValue(e)
					}
				}
				return d
			},
			setCookie : function(a, b) {
				document.cookie = "ys-"
						+ a
						+ "="
						+ this.encodeValue(b)
						+ ((this.expires == null)
								? ""
								: ("; expires=" + this.expires.toGMTString()))
						+ ((this.path == null) ? "" : ("; path=" + this.path))
						+ ((this.domain == null)
								? ""
								: ("; domain=" + this.domain))
						+ ((this.secure == true) ? "; secure" : "")
			},
			clearCookie : function(a) {
				document.cookie = "ys-"
						+ a
						+ "=null; expires=Thu, 01-Jan-70 00:00:01 GMT"
						+ ((this.path == null) ? "" : ("; path=" + this.path))
						+ ((this.domain == null)
								? ""
								: ("; domain=" + this.domain))
						+ ((this.secure == true) ? "; secure" : "")
			}
		});
Ext.DataView = Ext.extend(Ext.BoxComponent, {
			selectedClass : "x-view-selected",
			emptyText : "",
			deferEmptyText : true,
			trackOver : false,
			last : false,
			initComponent : function() {
				Ext.DataView.superclass.initComponent.call(this);
				if (Ext.isString(this.tpl) || Ext.isArray(this.tpl)) {
					this.tpl = new Ext.XTemplate(this.tpl)
				}
				this.addEvents("beforeclick", "click", "mouseenter",
						"mouseleave", "containerclick", "dblclick",
						"contextmenu", "containercontextmenu",
						"selectionchange", "beforeselect");
				this.store = Ext.StoreMgr.lookup(this.store);
				this.all = new Ext.CompositeElementLite();
				this.selected = new Ext.CompositeElementLite()
			},
			afterRender : function() {
				Ext.DataView.superclass.afterRender.call(this);
				this.mon(this.getTemplateTarget(), {
							click : this.onClick,
							dblclick : this.onDblClick,
							contextmenu : this.onContextMenu,
							scope : this
						});
				if (this.overClass || this.trackOver) {
					this.mon(this.getTemplateTarget(), {
								mouseover : this.onMouseOver,
								mouseout : this.onMouseOut,
								scope : this
							})
				}
				if (this.store) {
					this.bindStore(this.store, true)
				}
			},
			refresh : function() {
				this.clearSelections(false, true);
				var b = this.getTemplateTarget();
				b.update("");
				var a = this.store.getRange();
				if (a.length < 1) {
					if (!this.deferEmptyText || this.hasSkippedEmptyText) {
						b.update(this.emptyText)
					}
					this.all.clear()
				} else {
					this.tpl.overwrite(b, this.collectData(a, 0));
					this.all.fill(Ext.query(this.itemSelector, b.dom));
					this.updateIndexes(0)
				}
				this.hasSkippedEmptyText = true
			},
			getTemplateTarget : function() {
				return this.el
			},
			prepareData : function(a) {
				return a
			},
			collectData : function(b, e) {
				var d = [];
				for (var c = 0, a = b.length; c < a; c++) {
					d[d.length] = this.prepareData(b[c].data, e + c, b[c])
				}
				return d
			},
			bufferRender : function(a) {
				var b = document.createElement("div");
				this.tpl.overwrite(b, this.collectData(a));
				return Ext.query(this.itemSelector, b)
			},
			onUpdate : function(g, a) {
				var b = this.store.indexOf(a);
				if (b > -1) {
					var e = this.isSelected(b);
					var c = this.all.elements[b];
					var d = this.bufferRender([a], b)[0];
					this.all.replaceElement(b, d, true);
					if (e) {
						this.selected.replaceElement(c, d);
						this.all.item(b).addClass(this.selectedClass)
					}
					this.updateIndexes(b, b)
				}
			},
			onAdd : function(g, d, e) {
				if (this.all.getCount() === 0) {
					this.refresh();
					return
				}
				var c = this.bufferRender(d, e), h, b = this.all.elements;
				if (e < this.all.getCount()) {
					h = this.all.item(e).insertSibling(c, "before", true);
					b.splice.apply(b, [e, 0].concat(c))
				} else {
					h = this.all.last().insertSibling(c, "after", true);
					b.push.apply(b, c)
				}
				this.updateIndexes(e)
			},
			onRemove : function(c, a, b) {
				this.deselect(b);
				this.all.removeElement(b, true);
				this.updateIndexes(b);
				if (this.store.getCount() === 0) {
					this.refresh()
				}
			},
			refreshNode : function(a) {
				this.onUpdate(this.store, this.store.getAt(a))
			},
			updateIndexes : function(d, c) {
				var b = this.all.elements;
				d = d || 0;
				c = c || ((c === 0) ? 0 : (b.length - 1));
				for (var a = d; a <= c; a++) {
					b[a].viewIndex = a
				}
			},
			getStore : function() {
				return this.store
			},
			bindStore : function(a, b) {
				if (!b && this.store) {
					if (a !== this.store && this.store.autoDestroy) {
						this.store.destroy()
					} else {
						this.store.un("beforeload", this.onBeforeLoad, this);
						this.store.un("datachanged", this.refresh, this);
						this.store.un("add", this.onAdd, this);
						this.store.un("remove", this.onRemove, this);
						this.store.un("update", this.onUpdate, this);
						this.store.un("clear", this.refresh, this)
					}
					if (!a) {
						this.store = null
					}
				}
				if (a) {
					a = Ext.StoreMgr.lookup(a);
					a.on({
								scope : this,
								beforeload : this.onBeforeLoad,
								datachanged : this.refresh,
								add : this.onAdd,
								remove : this.onRemove,
								update : this.onUpdate,
								clear : this.refresh
							})
				}
				this.store = a;
				if (a) {
					this.refresh()
				}
			},
			findItemFromChild : function(a) {
				return Ext.fly(a).findParent(this.itemSelector,
						this.getTemplateTarget())
			},
			onClick : function(c) {
				var b = c
						.getTarget(this.itemSelector, this.getTemplateTarget());
				if (b) {
					var a = this.indexOf(b);
					if (this.onItemClick(b, a, c) !== false) {
						this.fireEvent("click", this, a, b, c)
					}
				} else {
					if (this.fireEvent("containerclick", this, c) !== false) {
						this.onContainerClick(c)
					}
				}
			},
			onContainerClick : function(a) {
				this.clearSelections()
			},
			onContextMenu : function(b) {
				var a = b
						.getTarget(this.itemSelector, this.getTemplateTarget());
				if (a) {
					this.fireEvent("contextmenu", this, this.indexOf(a), a, b)
				} else {
					this.fireEvent("containercontextmenu", this, b)
				}
			},
			onDblClick : function(b) {
				var a = b
						.getTarget(this.itemSelector, this.getTemplateTarget());
				if (a) {
					this.fireEvent("dblclick", this, this.indexOf(a), a, b)
				}
			},
			onMouseOver : function(b) {
				var a = b
						.getTarget(this.itemSelector, this.getTemplateTarget());
				if (a && a !== this.lastItem) {
					this.lastItem = a;
					Ext.fly(a).addClass(this.overClass);
					this.fireEvent("mouseenter", this, this.indexOf(a), a, b)
				}
			},
			onMouseOut : function(a) {
				if (this.lastItem) {
					if (!a.within(this.lastItem, true, true)) {
						Ext.fly(this.lastItem).removeClass(this.overClass);
						this.fireEvent("mouseleave", this, this
										.indexOf(this.lastItem), this.lastItem,
								a);
						delete this.lastItem
					}
				}
			},
			onItemClick : function(b, a, c) {
				if (this.fireEvent("beforeclick", this, a, b, c) === false) {
					return false
				}
				if (this.multiSelect) {
					this.doMultiSelection(b, a, c);
					c.preventDefault()
				} else {
					if (this.singleSelect) {
						this.doSingleSelection(b, a, c);
						c.preventDefault()
					}
				}
				return true
			},
			doSingleSelection : function(b, a, c) {
				if (c.ctrlKey && this.isSelected(a)) {
					this.deselect(a)
				} else {
					this.select(a, false)
				}
			},
			doMultiSelection : function(c, a, d) {
				if (d.shiftKey && this.last !== false) {
					var b = this.last;
					this.selectRange(b, a, d.ctrlKey);
					this.last = b
				} else {
					if ((d.ctrlKey || this.simpleSelect) && this.isSelected(a)) {
						this.deselect(a)
					} else {
						this.select(a, d.ctrlKey || d.shiftKey
										|| this.simpleSelect)
					}
				}
			},
			getSelectionCount : function() {
				return this.selected.getCount()
			},
			getSelectedNodes : function() {
				return this.selected.elements
			},
			getSelectedIndexes : function() {
				var b = [], d = this.selected.elements;
				for (var c = 0, a = d.length; c < a; c++) {
					b.push(d[c].viewIndex)
				}
				return b
			},
			getSelectedRecords : function() {
				var d = [], c = this.selected.elements;
				for (var b = 0, a = c.length; b < a; b++) {
					d[d.length] = this.store.getAt(c[b].viewIndex)
				}
				return d
			},
			getRecords : function(b) {
				var e = [], d = b;
				for (var c = 0, a = d.length; c < a; c++) {
					e[e.length] = this.store.getAt(d[c].viewIndex)
				}
				return e
			},
			getRecord : function(a) {
				return this.store.getAt(a.viewIndex)
			},
			clearSelections : function(a, b) {
				if ((this.multiSelect || this.singleSelect)
						&& this.selected.getCount() > 0) {
					if (!b) {
						this.selected.removeClass(this.selectedClass)
					}
					this.selected.clear();
					this.last = false;
					if (!a) {
						this.fireEvent("selectionchange", this,
								this.selected.elements)
					}
				}
			},
			isSelected : function(a) {
				return this.selected.contains(this.getNode(a))
			},
			deselect : function(a) {
				if (this.isSelected(a)) {
					a = this.getNode(a);
					this.selected.removeElement(a);
					if (this.last == a.viewIndex) {
						this.last = false
					}
					Ext.fly(a).removeClass(this.selectedClass);
					this.fireEvent("selectionchange", this,
							this.selected.elements)
				}
			},
			select : function(d, g, b) {
				if (Ext.isArray(d)) {
					if (!g) {
						this.clearSelections(true)
					}
					for (var c = 0, a = d.length; c < a; c++) {
						this.select(d[c], true, true)
					}
					if (!b) {
						this.fireEvent("selectionchange", this,
								this.selected.elements)
					}
				} else {
					var e = this.getNode(d);
					if (!g) {
						this.clearSelections(true)
					}
					if (e && !this.isSelected(e)) {
						if (this.fireEvent("beforeselect", this, e,
								this.selected.elements) !== false) {
							Ext.fly(e).addClass(this.selectedClass);
							this.selected.add(e);
							this.last = e.viewIndex;
							if (!b) {
								this.fireEvent("selectionchange", this,
										this.selected.elements)
							}
						}
					}
				}
			},
			selectRange : function(c, a, b) {
				if (!b) {
					this.clearSelections(true)
				}
				this.select(this.getNodes(c, a), true)
			},
			getNode : function(a) {
				if (Ext.isString(a)) {
					return document.getElementById(a)
				} else {
					if (Ext.isNumber(a)) {
						return this.all.elements[a]
					}
				}
				return a
			},
			getNodes : function(e, a) {
				var d = this.all.elements;
				e = e || 0;
				a = !Ext.isDefined(a) ? Math.max(d.length - 1, 0) : a;
				var b = [], c;
				if (e <= a) {
					for (c = e; c <= a && d[c]; c++) {
						b.push(d[c])
					}
				} else {
					for (c = e; c >= a && d[c]; c--) {
						b.push(d[c])
					}
				}
				return b
			},
			indexOf : function(a) {
				a = this.getNode(a);
				if (Ext.isNumber(a.viewIndex)) {
					return a.viewIndex
				}
				return this.all.indexOf(a)
			},
			onBeforeLoad : function() {
				if (this.loadingText) {
					this.clearSelections(false, true);
					this.getTemplateTarget()
							.update('<div class="loading-indicator">'
									+ this.loadingText + "</div>");
					this.all.clear()
				}
			},
			onDestroy : function() {
				this.all.clear();
				this.selected.clear();
				Ext.DataView.superclass.onDestroy.call(this);
				this.bindStore(null)
			}
		});
Ext.DataView.prototype.setStore = Ext.DataView.prototype.bindStore;
Ext.reg("dataview", Ext.DataView);
Ext.list.ListView = Ext.extend(Ext.DataView, {
	itemSelector : "dl",
	selectedClass : "x-list-selected",
	overClass : "x-list-over",
	scrollOffset : undefined,
	columnResize : true,
	columnSort : true,
	maxWidth : Ext.isIE ? 99 : 100,
	initComponent : function() {
		if (this.columnResize) {
			this.colResizer = new Ext.list.ColumnResizer(this.colResizer);
			this.colResizer.init(this)
		}
		if (this.columnSort) {
			this.colSorter = new Ext.list.Sorter(this.columnSort);
			this.colSorter.init(this)
		}
		if (!this.internalTpl) {
			this.internalTpl = new Ext.XTemplate(
					'<div class="x-list-header"><div class="x-list-header-inner">',
					'<tpl for="columns">',
					'<div style="width:{[values.width*100]}%;text-align:{align};"><em unselectable="on" id="',
					this.id, '-xlhd-{#}">', "{header}", "</em></div>",
					"</tpl>", '<div class="x-clear"></div>', "</div></div>",
					'<div class="x-list-body"><div class="x-list-body-inner">',
					"</div></div>")
		}
		if (!this.tpl) {
			this.tpl = new Ext.XTemplate(
					'<tpl for="rows">',
					"<dl>",
					'<tpl for="parent.columns">',
					'<dt style="width:{[values.width*100]}%;text-align:{align};">',
					'<em unselectable="on"<tpl if="cls"> class="{cls}</tpl>">',
					"{[values.tpl.apply(parent)]}", "</em></dt>", "</tpl>",
					'<div class="x-clear"></div>', "</dl>", "</tpl>")
		}
		var l = this.columns, h = 0, k = 0, m = l.length, b = [];
		for (var g = 0; g < m; g++) {
			var n = l[g];
			if (!n.isColumn) {
				n.xtype = n.xtype ? (/^lv/.test(n.xtype) ? n.xtype : "lv"
						+ n.xtype) : "lvcolumn";
				n = Ext.create(n)
			}
			if (n.width) {
				h += n.width * 100;
				k++
			}
			b.push(n)
		}
		l = this.columns = b;
		if (k < m) {
			var d = m - k;
			if (h < this.maxWidth) {
				var a = ((this.maxWidth - h) / d) / 100;
				for (var e = 0; e < m; e++) {
					var n = l[e];
					if (!n.width) {
						n.width = a
					}
				}
			}
		}
		Ext.list.ListView.superclass.initComponent.call(this)
	},
	onRender : function() {
		this.autoEl = {
			cls : "x-list-wrap"
		};
		Ext.list.ListView.superclass.onRender.apply(this, arguments);
		this.internalTpl.overwrite(this.el, {
					columns : this.columns
				});
		this.innerBody = Ext.get(this.el.dom.childNodes[1].firstChild);
		this.innerHd = Ext.get(this.el.dom.firstChild.firstChild);
		if (this.hideHeaders) {
			this.el.dom.firstChild.style.display = "none"
		}
	},
	getTemplateTarget : function() {
		return this.innerBody
	},
	collectData : function() {
		var a = Ext.list.ListView.superclass.collectData.apply(this, arguments);
		return {
			columns : this.columns,
			rows : a
		}
	},
	verifyInternalSize : function() {
		if (this.lastSize) {
			this.onResize(this.lastSize.width, this.lastSize.height)
		}
	},
	onResize : function(b, d) {
		var e = this.innerBody.dom;
		var g = this.innerHd.dom;
		if (!e) {
			return
		}
		var c = e.parentNode;
		if (Ext.isNumber(b)) {
			var a = b - Ext.num(this.scrollOffset, Ext.getScrollBarWidth());
			if (this.reserveScrollOffset
					|| ((c.offsetWidth - c.clientWidth) > 10)) {
				e.style.width = a + "px";
				g.style.width = a + "px"
			} else {
				e.style.width = b + "px";
				g.style.width = b + "px";
				setTimeout(function() {
							if ((c.offsetWidth - c.clientWidth) > 10) {
								e.style.width = a + "px";
								g.style.width = a + "px"
							}
						}, 10)
			}
		}
		if (Ext.isNumber(d)) {
			c.style.height = (d - g.parentNode.offsetHeight) + "px"
		}
	},
	updateIndexes : function() {
		Ext.list.ListView.superclass.updateIndexes.apply(this, arguments);
		this.verifyInternalSize()
	},
	findHeaderIndex : function(e) {
		e = e.dom || e;
		var a = e.parentNode, d = a.parentNode.childNodes;
		for (var b = 0, g; g = d[b]; b++) {
			if (g == a) {
				return b
			}
		}
		return -1
	},
	setHdWidths : function() {
		var c = this.innerHd.dom.getElementsByTagName("div");
		for (var b = 0, d = this.columns, a = d.length; b < a; b++) {
			c[b].style.width = (d[b].width * 100) + "%"
		}
	}
});
Ext.reg("listview", Ext.list.ListView);
Ext.ListView = Ext.list.ListView;
Ext.list.Column = Ext.extend(Object, {
			isColumn : true,
			align : "left",
			header : "",
			width : null,
			cls : "",
			constructor : function(a) {
				if (!a.tpl) {
					a.tpl = new Ext.XTemplate("{" + a.dataIndex + "}")
				} else {
					if (Ext.isString(a.tpl)) {
						a.tpl = new Ext.XTemplate(a.tpl)
					}
				}
				Ext.apply(this, a)
			}
		});
Ext.reg("lvcolumn", Ext.list.Column);
Ext.list.NumberColumn = Ext.extend(Ext.list.Column, {
			format : "0,000.00",
			constructor : function(a) {
				a.tpl = a.tpl
						|| new Ext.XTemplate("{" + a.dataIndex + ':number("'
								+ (a.format || this.format) + '")}');
				Ext.list.NumberColumn.superclass.constructor.call(this, a)
			}
		});
Ext.reg("lvnumbercolumn", Ext.list.NumberColumn);
Ext.list.DateColumn = Ext.extend(Ext.list.Column, {
			format : "m/d/Y",
			constructor : function(a) {
				a.tpl = a.tpl
						|| new Ext.XTemplate("{" + a.dataIndex + ':date("'
								+ (a.format || this.format) + '")}');
				Ext.list.DateColumn.superclass.constructor.call(this, a)
			}
		});
Ext.reg("lvdatecolumn", Ext.list.DateColumn);
Ext.list.BooleanColumn = Ext.extend(Ext.list.Column, {
	trueText : "true",
	falseText : "false",
	undefinedText : "&#160;",
	constructor : function(e) {
		e.tpl = e.tpl || new Ext.XTemplate("{" + e.dataIndex + ":this.format}");
		var b = this.trueText, d = this.falseText, a = this.undefinedText;
		e.tpl.format = function(c) {
			if (c === undefined) {
				return a
			}
			if (!c || c === "false") {
				return d
			}
			return b
		};
		Ext.list.DateColumn.superclass.constructor.call(this, e)
	}
});
Ext.reg("lvbooleancolumn", Ext.list.BooleanColumn);
Ext.list.ColumnResizer = Ext.extend(Ext.util.Observable, {
	minPct : 0.05,
	constructor : function(a) {
		Ext.apply(this, a);
		Ext.list.ColumnResizer.superclass.constructor.call(this)
	},
	init : function(a) {
		this.view = a;
		a.on("render", this.initEvents, this)
	},
	initEvents : function(a) {
		a.mon(a.innerHd, "mousemove", this.handleHdMove, this);
		this.tracker = new Ext.dd.DragTracker({
					onBeforeStart : this.onBeforeStart.createDelegate(this),
					onStart : this.onStart.createDelegate(this),
					onDrag : this.onDrag.createDelegate(this),
					onEnd : this.onEnd.createDelegate(this),
					tolerance : 3,
					autoStart : 300
				});
		this.tracker.initEl(a.innerHd);
		a.on("beforedestroy", this.tracker.destroy, this.tracker)
	},
	handleHdMove : function(k, g) {
		var b = 5, a = k.getPageX(), j = k.getTarget("em", 3, true);
		if (j) {
			var h = j.getRegion(), d = j.dom.style, c = j.dom.parentNode;
			if (a - h.left <= b && c != c.parentNode.firstChild) {
				this.activeHd = Ext.get(c.previousSibling.firstChild);
				d.cursor = Ext.isWebKit ? "e-resize" : "col-resize"
			} else {
				if (h.right - a <= b
						&& c != c.parentNode.lastChild.previousSibling) {
					this.activeHd = j;
					d.cursor = Ext.isWebKit ? "w-resize" : "col-resize"
				} else {
					delete this.activeHd;
					d.cursor = ""
				}
			}
		}
	},
	onBeforeStart : function(a) {
		this.dragHd = this.activeHd;
		return !!this.dragHd
	},
	onStart : function(c) {
		this.view.disableHeaders = true;
		this.proxy = this.view.el.createChild({
					cls : "x-list-resizer"
				});
		this.proxy.setHeight(this.view.el.getHeight());
		var a = this.tracker.getXY()[0], b = this.view.innerHd.getWidth();
		this.hdX = this.dragHd.getX();
		this.hdIndex = this.view.findHeaderIndex(this.dragHd);
		this.proxy.setX(this.hdX);
		this.proxy.setWidth(a - this.hdX);
		this.minWidth = b * this.minPct;
		this.maxWidth = b
				- (this.minWidth * (this.view.columns.length - 1 - this.hdIndex))
	},
	onDrag : function(b) {
		var a = this.tracker.getXY()[0];
		this.proxy.setWidth((a - this.hdX).constrain(this.minWidth,
				this.maxWidth))
	},
	onEnd : function(l) {
		var j = this.proxy.getWidth();
		this.proxy.remove();
		var h = this.hdIndex, o = this.view, g = o.columns, k = g.length, q = this.view.innerHd
				.getWidth(), d = this.minPct * 100, r = Math
				.ceil((j * o.maxWidth) / q), p = (g[h].width * 100) - r, n = Math
				.floor(p / (k - 1 - h)), m = p - (n * (k - 1 - h));
		for (var c = h + 1; c < k; c++) {
			var b = (g[c].width * 100) + n, a = Math.max(d, b);
			if (b != a) {
				m += b - a
			}
			g[c].width = a / 100
		}
		g[h].width = r / 100;
		g[h + 1].width += (m / 100);
		delete this.dragHd;
		o.setHdWidths();
		o.refresh();
		setTimeout(function() {
					o.disableHeaders = false
				}, 100)
	}
});
Ext.ListView.ColumnResizer = Ext.list.ColumnResizer;
Ext.list.Sorter = Ext.extend(Ext.util.Observable, {
			sortClasses : ["sort-asc", "sort-desc"],
			constructor : function(a) {
				Ext.apply(this, a);
				Ext.list.Sorter.superclass.constructor.call(this)
			},
			init : function(a) {
				this.view = a;
				a.on("render", this.initEvents, this)
			},
			initEvents : function(a) {
				a.mon(a.innerHd, "click", this.onHdClick, this);
				a.innerHd.setStyle("cursor", "pointer");
				a.mon(a.store, "datachanged", this.updateSortState, this);
				this.updateSortState.defer(10, this, [a.store])
			},
			updateSortState : function(c) {
				var g = c.getSortState();
				if (!g) {
					return
				}
				this.sortState = g;
				var e = this.view.columns, h = -1;
				for (var d = 0, a = e.length; d < a; d++) {
					if (e[d].dataIndex == g.field) {
						h = d;
						break
					}
				}
				if (h != -1) {
					var b = g.direction;
					this.updateSortIcon(h, b)
				}
			},
			updateSortIcon : function(b, a) {
				var d = this.sortClasses;
				var c = this.view.innerHd.select("em").removeClass(d);
				c.item(b).addClass(d[a == "DESC" ? 1 : 0])
			},
			onHdClick : function(c) {
				var b = c.getTarget("em", 3);
				if (b && !this.view.disableHeaders) {
					var a = this.view.findHeaderIndex(b);
					this.view.store.sort(this.view.columns[a].dataIndex)
				}
			}
		});
Ext.ListView.Sorter = Ext.list.Sorter;
Ext.TabPanel = Ext.extend(Ext.Panel, {
	monitorResize : true,
	deferredRender : true,
	tabWidth : 120,
	minTabWidth : 30,
	resizeTabs : false,
	enableTabScroll : false,
	scrollIncrement : 0,
	scrollRepeatInterval : 400,
	scrollDuration : 0.35,
	animScroll : true,
	tabPosition : "top",
	baseCls : "x-tab-panel",
	autoTabs : false,
	autoTabSelector : "div.x-tab",
	activeTab : undefined,
	tabMargin : 2,
	plain : false,
	wheelIncrement : 20,
	idDelimiter : "__",
	itemCls : "x-tab-item",
	elements : "body",
	headerAsText : false,
	frame : false,
	hideBorders : true,
	initComponent : function() {
		this.frame = false;
		Ext.TabPanel.superclass.initComponent.call(this);
		this.addEvents("beforetabchange", "tabchange", "contextmenu");
		this.setLayout(new Ext.layout.CardLayout(Ext.apply({
					layoutOnCardChange : this.layoutOnTabChange,
					deferredRender : this.deferredRender
				}, this.layoutConfig)));
		if (this.tabPosition == "top") {
			this.elements += ",header";
			this.stripTarget = "header"
		} else {
			this.elements += ",footer";
			this.stripTarget = "footer"
		}
		if (!this.stack) {
			this.stack = Ext.TabPanel.AccessStack()
		}
		this.initItems()
	},
	onRender : function(c, a) {
		Ext.TabPanel.superclass.onRender.call(this, c, a);
		if (this.plain) {
			var g = this.tabPosition == "top" ? "header" : "footer";
			this[g].addClass("x-tab-panel-" + g + "-plain")
		}
		var b = this[this.stripTarget];
		this.stripWrap = b.createChild({
					cls : "x-tab-strip-wrap",
					cn : {
						tag : "ul",
						cls : "x-tab-strip x-tab-strip-" + this.tabPosition
					}
				});
		var e = (this.tabPosition == "bottom" ? this.stripWrap : null);
		b.createChild({
					cls : "x-tab-strip-spacer"
				}, e);
		this.strip = new Ext.Element(this.stripWrap.dom.firstChild);
		this.edge = this.strip.createChild({
					tag : "li",
					cls : "x-tab-edge",
					cn : [{
								tag : "span",
								cls : "x-tab-strip-text",
								cn : "&#160;"
							}]
				});
		this.strip.createChild({
					cls : "x-clear"
				});
		this.body.addClass("x-tab-panel-body-" + this.tabPosition);
		if (!this.itemTpl) {
			var d = new Ext.Template(
					'<li class="{cls}" id="{id}"><a class="x-tab-strip-close"></a>',
					'<a class="x-tab-right" href="#"><em class="x-tab-left">',
					'<span class="x-tab-strip-inner"><span class="x-tab-strip-text {iconCls}">{text}</span></span>',
					"</em></a></li>");
			d.disableFormats = true;
			d.compile();
			Ext.TabPanel.prototype.itemTpl = d
		}
		this.items.each(this.initTab, this)
	},
	afterRender : function() {
		Ext.TabPanel.superclass.afterRender.call(this);
		if (this.autoTabs) {
			this.readTabs(false)
		}
		if (this.activeTab !== undefined) {
			var a = Ext.isObject(this.activeTab) ? this.activeTab : this.items
					.get(this.activeTab);
			delete this.activeTab;
			this.setActiveTab(a)
		}
	},
	initEvents : function() {
		Ext.TabPanel.superclass.initEvents.call(this);
		this.mon(this.strip, {
					scope : this,
					mousedown : this.onStripMouseDown,
					contextmenu : this.onStripContextMenu
				});
		if (this.enableTabScroll) {
			this.mon(this.strip, "mousewheel", this.onWheel, this)
		}
	},
	findTargets : function(c) {
		var b = null;
		var a = c.getTarget("li", this.strip);
		if (a) {
			b = this.getComponent(a.id.split(this.idDelimiter)[1]);
			if (b.disabled) {
				return {
					close : null,
					item : null,
					el : null
				}
			}
		}
		return {
			close : c.getTarget(".x-tab-strip-close", this.strip),
			item : b,
			el : a
		}
	},
	onStripMouseDown : function(b) {
		if (b.button !== 0) {
			return
		}
		b.preventDefault();
		var a = this.findTargets(b);
		if (a.close) {
			if (a.item.fireEvent("beforeclose", a.item) !== false) {
				a.item.fireEvent("close", a.item);
				this.remove(a.item)
			}
			return
		}
		if (a.item && a.item != this.activeTab) {
			this.setActiveTab(a.item)
		}
	},
	onStripContextMenu : function(b) {
		b.preventDefault();
		var a = this.findTargets(b);
		if (a.item) {
			this.fireEvent("contextmenu", this, a.item, b)
		}
	},
	readTabs : function(d) {
		if (d === true) {
			this.items.each(function(h) {
						this.remove(h)
					}, this)
		}
		var c = this.el.query(this.autoTabSelector);
		for (var b = 0, a = c.length; b < a; b++) {
			var e = c[b], g = e.getAttribute("title");
			e.removeAttribute("title");
			this.add({
						title : g,
						contentEl : e
					})
		}
	},
	initTab : function(d, b) {
		var e = this.strip.dom.childNodes[b], g = this.getTemplateArgs(d), c = e
				? this.itemTpl.insertBefore(e, g)
				: this.itemTpl.append(this.strip, g), a = "x-tab-strip-over", h = Ext
				.get(c);
		h.hover(function() {
					if (!d.disabled) {
						h.addClass(a)
					}
				}, function() {
					h.removeClass(a)
				});
		if (d.tabTip) {
			h.child("span.x-tab-strip-text", true).qtip = d.tabTip
		}
		d.tabEl = c;
		h.select("a").on("click", function(j) {
					if (!j.getPageX()) {
						this.onStripMouseDown(j)
					}
				}, this, {
					preventDefault : true
				});
		d.on({
					scope : this,
					disable : this.onItemDisabled,
					enable : this.onItemEnabled,
					titlechange : this.onItemTitleChanged,
					iconchange : this.onItemIconChanged,
					beforeshow : this.onBeforeShowItem
				})
	},
	getTemplateArgs : function(b) {
		var a = b.closable ? "x-tab-strip-closable" : "";
		if (b.disabled) {
			a += " x-item-disabled"
		}
		if (b.iconCls) {
			a += " x-tab-with-icon"
		}
		if (b.tabCls) {
			a += " " + b.tabCls
		}
		return {
			id : this.id + this.idDelimiter + b.getItemId(),
			text : b.title,
			cls : a,
			iconCls : b.iconCls || ""
		}
	},
	onAdd : function(b) {
		Ext.TabPanel.superclass.onAdd.call(this, b);
		if (this.rendered) {
			var a = this.items;
			this.initTab(b, a.indexOf(b));
			if (a.getCount() == 1) {
				this.syncSize()
			}
			this.delegateUpdates()
		}
	},
	onBeforeAdd : function(b) {
		var a = b.events
				? (this.items.containsKey(b.getItemId()) ? b : null)
				: this.items.get(b);
		if (a) {
			this.setActiveTab(b);
			return false
		}
		Ext.TabPanel.superclass.onBeforeAdd.apply(this, arguments);
		var c = b.elements;
		b.elements = c ? c.replace(",header", "") : c;
		b.border = (b.border === true)
	},
	onRemove : function(d) {
		var b = Ext.get(d.tabEl);
		if (b) {
			b.select("a").removeAllListeners();
			Ext.destroy(b)
		}
		Ext.TabPanel.superclass.onRemove.call(this, d);
		this.stack.remove(d);
		delete d.tabEl;
		d.un("disable", this.onItemDisabled, this);
		d.un("enable", this.onItemEnabled, this);
		d.un("titlechange", this.onItemTitleChanged, this);
		d.un("iconchange", this.onItemIconChanged, this);
		d.un("beforeshow", this.onBeforeShowItem, this);
		if (d == this.activeTab) {
			var a = this.stack.next();
			if (a) {
				this.setActiveTab(a)
			} else {
				if (this.items.getCount() > 0) {
					this.setActiveTab(0)
				} else {
					this.setActiveTab(null)
				}
			}
		}
		if (!this.destroying) {
			this.delegateUpdates()
		}
	},
	onBeforeShowItem : function(a) {
		if (a != this.activeTab) {
			this.setActiveTab(a);
			return false
		}
	},
	onItemDisabled : function(b) {
		var a = this.getTabEl(b);
		if (a) {
			Ext.fly(a).addClass("x-item-disabled")
		}
		this.stack.remove(b)
	},
	onItemEnabled : function(b) {
		var a = this.getTabEl(b);
		if (a) {
			Ext.fly(a).removeClass("x-item-disabled")
		}
	},
	onItemTitleChanged : function(b) {
		var a = this.getTabEl(b);
		if (a) {
			Ext.fly(a).child("span.x-tab-strip-text", true).innerHTML = b.title
		}
	},
	onItemIconChanged : function(d, a, c) {
		var b = this.getTabEl(d);
		if (b) {
			b = Ext.get(b);
			b.child("span.x-tab-strip-text").replaceClass(c, a);
			b[Ext.isEmpty(a) ? "removeClass" : "addClass"]("x-tab-with-icon")
		}
	},
	getTabEl : function(a) {
		var b = this.getComponent(a);
		return b ? b.tabEl : null
	},
	onResize : function() {
		Ext.TabPanel.superclass.onResize.apply(this, arguments);
		this.delegateUpdates()
	},
	beginUpdate : function() {
		this.suspendUpdates = true
	},
	endUpdate : function() {
		this.suspendUpdates = false;
		this.delegateUpdates()
	},
	hideTabStripItem : function(b) {
		b = this.getComponent(b);
		var a = this.getTabEl(b);
		if (a) {
			a.style.display = "none";
			this.delegateUpdates()
		}
		this.stack.remove(b)
	},
	unhideTabStripItem : function(b) {
		b = this.getComponent(b);
		var a = this.getTabEl(b);
		if (a) {
			a.style.display = "";
			this.delegateUpdates()
		}
	},
	delegateUpdates : function() {
		if (this.suspendUpdates) {
			return
		}
		if (this.resizeTabs && this.rendered) {
			this.autoSizeTabs()
		}
		if (this.enableTabScroll && this.rendered) {
			this.autoScrollTabs()
		}
	},
	autoSizeTabs : function() {
		var h = this.items.length, b = this.tabPosition != "bottom"
				? "header"
				: "footer", c = this[b].dom.offsetWidth, a = this[b].dom.clientWidth;
		if (!this.resizeTabs || h < 1 || !a) {
			return
		}
		var k = Math.max(Math.min(Math.floor((a - 4) / h) - this.tabMargin,
						this.tabWidth), this.minTabWidth);
		this.lastTabWidth = k;
		var m = this.strip.query("li:not([className^=x-tab-edge])");
		for (var e = 0, j = m.length; e < j; e++) {
			var l = m[e], n = Ext.fly(l).child(".x-tab-strip-inner", true), g = l.offsetWidth, d = n.offsetWidth;
			n.style.width = (k - (g - d)) + "px"
		}
	},
	adjustBodyWidth : function(a) {
		if (this.header) {
			this.header.setWidth(a)
		}
		if (this.footer) {
			this.footer.setWidth(a)
		}
		return a
	},
	setActiveTab : function(c) {
		c = this.getComponent(c);
		if (this.fireEvent("beforetabchange", this, c, this.activeTab) === false) {
			return
		}
		if (!this.rendered) {
			this.activeTab = c;
			return
		}
		if (this.activeTab != c) {
			if (this.activeTab) {
				var a = this.getTabEl(this.activeTab);
				if (a) {
					Ext.fly(a).removeClass("x-tab-strip-active")
				}
			}
			if (c) {
				var b = this.getTabEl(c);
				Ext.fly(b).addClass("x-tab-strip-active");
				this.activeTab = c;
				this.stack.add(c);
				this.layout.setActiveItem(c);
				if (this.scrolling) {
					this.scrollToTab(c, this.animScroll)
				}
			}
			this.fireEvent("tabchange", this, c)
		}
	},
	getActiveTab : function() {
		return this.activeTab || null
	},
	getItem : function(a) {
		return this.getComponent(a)
	},
	autoScrollTabs : function() {
		this.pos = this.tabPosition == "bottom" ? this.footer : this.header;
		var h = this.items.length, d = this.pos.dom.offsetWidth, c = this.pos.dom.clientWidth, g = this.stripWrap, e = g.dom, b = e.offsetWidth, j = this
				.getScrollPos(), a = this.edge.getOffsetsTo(this.stripWrap)[0]
				+ j;
		if (!this.enableTabScroll || h < 1 || b < 20) {
			return
		}
		if (a <= c) {
			e.scrollLeft = 0;
			g.setWidth(c);
			if (this.scrolling) {
				this.scrolling = false;
				this.pos.removeClass("x-tab-scrolling");
				this.scrollLeft.hide();
				this.scrollRight.hide();
				if (Ext.isAir || Ext.isWebKit) {
					e.style.marginLeft = "";
					e.style.marginRight = ""
				}
			}
		} else {
			if (!this.scrolling) {
				this.pos.addClass("x-tab-scrolling");
				if (Ext.isAir || Ext.isWebKit) {
					e.style.marginLeft = "18px";
					e.style.marginRight = "18px"
				}
			}
			c -= g.getMargins("lr");
			g.setWidth(c > 20 ? c : 20);
			if (!this.scrolling) {
				if (!this.scrollLeft) {
					this.createScrollers()
				} else {
					this.scrollLeft.show();
					this.scrollRight.show()
				}
			}
			this.scrolling = true;
			if (j > (a - c)) {
				e.scrollLeft = a - c
			} else {
				this.scrollToTab(this.activeTab, false)
			}
			this.updateScrollButtons()
		}
	},
	createScrollers : function() {
		this.pos.addClass("x-tab-scrolling-" + this.tabPosition);
		var c = this.stripWrap.dom.offsetHeight;
		var a = this.pos.insertFirst({
					cls : "x-tab-scroller-left"
				});
		a.setHeight(c);
		a.addClassOnOver("x-tab-scroller-left-over");
		this.leftRepeater = new Ext.util.ClickRepeater(a, {
					interval : this.scrollRepeatInterval,
					handler : this.onScrollLeft,
					scope : this
				});
		this.scrollLeft = a;
		var b = this.pos.insertFirst({
					cls : "x-tab-scroller-right"
				});
		b.setHeight(c);
		b.addClassOnOver("x-tab-scroller-right-over");
		this.rightRepeater = new Ext.util.ClickRepeater(b, {
					interval : this.scrollRepeatInterval,
					handler : this.onScrollRight,
					scope : this
				});
		this.scrollRight = b
	},
	getScrollWidth : function() {
		return this.edge.getOffsetsTo(this.stripWrap)[0] + this.getScrollPos()
	},
	getScrollPos : function() {
		return parseInt(this.stripWrap.dom.scrollLeft, 10) || 0
	},
	getScrollArea : function() {
		return parseInt(this.stripWrap.dom.clientWidth, 10) || 0
	},
	getScrollAnim : function() {
		return {
			duration : this.scrollDuration,
			callback : this.updateScrollButtons,
			scope : this
		}
	},
	getScrollIncrement : function() {
		return this.scrollIncrement
				|| (this.resizeTabs ? this.lastTabWidth + 2 : 100)
	},
	scrollToTab : function(e, a) {
		if (!e) {
			return
		}
		var c = this.getTabEl(e), h = this.getScrollPos(), d = this
				.getScrollArea(), g = Ext.fly(c).getOffsetsTo(this.stripWrap)[0]
				+ h, b = g + c.offsetWidth;
		if (g < h) {
			this.scrollTo(g, a)
		} else {
			if (b > (h + d)) {
				this.scrollTo(b - d, a)
			}
		}
	},
	scrollTo : function(b, a) {
		this.stripWrap.scrollTo("left", b, a ? this.getScrollAnim() : false);
		if (!a) {
			this.updateScrollButtons()
		}
	},
	onWheel : function(g) {
		var h = g.getWheelDelta() * this.wheelIncrement * -1;
		g.stopEvent();
		var j = this.getScrollPos(), c = j + h, a = this.getScrollWidth()
				- this.getScrollArea();
		var b = Math.max(0, Math.min(a, c));
		if (b != j) {
			this.scrollTo(b, false)
		}
	},
	onScrollRight : function() {
		var a = this.getScrollWidth() - this.getScrollArea(), c = this
				.getScrollPos(), b = Math.min(a, c + this.getScrollIncrement());
		if (b != c) {
			this.scrollTo(b, this.animScroll)
		}
	},
	onScrollLeft : function() {
		var b = this.getScrollPos(), a = Math.max(0, b
						- this.getScrollIncrement());
		if (a != b) {
			this.scrollTo(a, this.animScroll)
		}
	},
	updateScrollButtons : function() {
		var a = this.getScrollPos();
		this.scrollLeft[a === 0 ? "addClass" : "removeClass"]("x-tab-scroller-left-disabled");
		this.scrollRight[a >= (this.getScrollWidth() - this.getScrollArea())
				? "addClass"
				: "removeClass"]("x-tab-scroller-right-disabled")
	},
	beforeDestroy : function() {
		Ext.destroy(this.leftRepeater, this.rightRepeater);
		this.deleteMembers("strip", "edge", "scrollLeft", "scrollRight",
				"stripWrap");
		this.activeTab = null;
		Ext.TabPanel.superclass.beforeDestroy.apply(this)
	}
});
Ext.reg("tabpanel", Ext.TabPanel);
Ext.TabPanel.prototype.activate = Ext.TabPanel.prototype.setActiveTab;
Ext.TabPanel.AccessStack = function() {
	var a = [];
	return {
		add : function(b) {
			a.push(b);
			if (a.length > 10) {
				a.shift()
			}
		},
		remove : function(e) {
			var d = [];
			for (var c = 0, b = a.length; c < b; c++) {
				if (a[c] != e) {
					d.push(a[c])
				}
			}
			a = d
		},
		next : function() {
			return a.pop()
		}
	}
};
Ext.Button = Ext.extend(Ext.BoxComponent, {
	hidden : false,
	disabled : false,
	pressed : false,
	enableToggle : false,
	menuAlign : "tl-bl?",
	type : "button",
	menuClassTarget : "tr:nth(2)",
	clickEvent : "click",
	handleMouseEvents : true,
	tooltipType : "qtip",
	buttonSelector : "button:first-child",
	scale : "small",
	iconAlign : "left",
	arrowAlign : "right",
	initComponent : function() {
		Ext.Button.superclass.initComponent.call(this);
		this.addEvents("click", "toggle", "mouseover", "mouseout", "menushow",
				"menuhide", "menutriggerover", "menutriggerout");
		if (this.menu) {
			this.menu = Ext.menu.MenuMgr.get(this.menu)
		}
		if (Ext.isString(this.toggleGroup)) {
			this.enableToggle = true
		}
	},
	getTemplateArgs : function() {
		return [
				this.type,
				"x-btn-" + this.scale + " x-btn-icon-" + this.scale + "-"
						+ this.iconAlign, this.getMenuClass(), this.cls,
				this.id]
	},
	setButtonClass : function() {
		if (this.useSetClass) {
			if (!Ext.isEmpty(this.oldCls)) {
				this.el.removeClass([this.oldCls, "x-btn-pressed"])
			}
			this.oldCls = (this.iconCls || this.icon) ? (this.text
					? " x-btn-text-icon"
					: " x-btn-icon") : " x-btn-noicon";
			this.el.addClass([this.oldCls,
					this.pressed ? "x-btn-pressed" : null])
		}
	},
	getMenuClass : function() {
		return this.menu ? (this.arrowAlign != "bottom"
				? "x-btn-arrow"
				: "x-btn-arrow-bottom") : ""
	},
	onRender : function(c, a) {
		if (!this.template) {
			if (!Ext.Button.buttonTemplate) {
				Ext.Button.buttonTemplate = new Ext.Template(
						'<table id="{4}" cellspacing="0" class="x-btn {3}"><tbody class="{1}">',
						'<tr><td class="x-btn-tl"><i>&#160;</i></td><td class="x-btn-tc"></td><td class="x-btn-tr"><i>&#160;</i></td></tr>',
						'<tr><td class="x-btn-ml"><i>&#160;</i></td><td class="x-btn-mc"><em class="{2}" unselectable="on"><button type="{0}"></button></em></td><td class="x-btn-mr"><i>&#160;</i></td></tr>',
						'<tr><td class="x-btn-bl"><i>&#160;</i></td><td class="x-btn-bc"></td><td class="x-btn-br"><i>&#160;</i></td></tr>',
						"</tbody></table>");
				Ext.Button.buttonTemplate.compile()
			}
			this.template = Ext.Button.buttonTemplate
		}
		var b, d = this.getTemplateArgs();
		if (a) {
			b = this.template.insertBefore(a, d, true)
		} else {
			b = this.template.append(c, d, true)
		}
		this.btnEl = b.child(this.buttonSelector);
		this.mon(this.btnEl, {
					scope : this,
					focus : this.onFocus,
					blur : this.onBlur
				});
		this.initButtonEl(b, this.btnEl);
		Ext.ButtonToggleMgr.register(this)
	},
	initButtonEl : function(b, c) {
		this.el = b;
		this.setIcon(this.icon);
		this.setText(this.text);
		this.setIconClass(this.iconCls);
		if (Ext.isDefined(this.tabIndex)) {
			c.dom.tabIndex = this.tabIndex
		}
		if (this.tooltip) {
			this.setTooltip(this.tooltip, true)
		}
		if (this.handleMouseEvents) {
			this.mon(b, {
						scope : this,
						mouseover : this.onMouseOver,
						mousedown : this.onMouseDown
					})
		}
		if (this.menu) {
			this.mon(this.menu, {
						scope : this,
						show : this.onMenuShow,
						hide : this.onMenuHide
					})
		}
		if (this.repeat) {
			var a = new Ext.util.ClickRepeater(b, Ext.isObject(this.repeat)
							? this.repeat
							: {});
			this.mon(a, "click", this.onClick, this)
		}
		this.mon(b, this.clickEvent, this.onClick, this)
	},
	afterRender : function() {
		Ext.Button.superclass.afterRender.call(this);
		this.useSetClass = true;
		this.setButtonClass();
		this.doc = Ext.getDoc();
		this.doAutoWidth()
	},
	setIconClass : function(a) {
		this.iconCls = a;
		if (this.el) {
			this.btnEl.dom.className = "";
			this.btnEl.addClass(["x-btn-text", a || ""]);
			this.setButtonClass()
		}
		return this
	},
	setTooltip : function(b, a) {
		if (this.rendered) {
			if (!a) {
				this.clearTip()
			}
			if (Ext.isObject(b)) {
				Ext.QuickTips.register(Ext.apply({
							target : this.btnEl.id
						}, b));
				this.tooltip = b
			} else {
				this.btnEl.dom[this.tooltipType] = b
			}
		} else {
			this.tooltip = b
		}
		return this
	},
	clearTip : function() {
		if (Ext.isObject(this.tooltip)) {
			Ext.QuickTips.unregister(this.btnEl)
		}
	},
	beforeDestroy : function() {
		if (this.rendered) {
			this.clearTip()
		}
		if (this.menu && this.menu.autoDestroy) {
			Ext.destroy(this.menu)
		}
		Ext.destroy(this.repeater)
	},
	onDestroy : function() {
		if (this.rendered) {
			this.doc.un("mouseover", this.monitorMouseOver, this);
			this.doc.un("mouseup", this.onMouseUp, this);
			delete this.doc;
			delete this.btnEl;
			Ext.ButtonToggleMgr.unregister(this)
		}
	},
	doAutoWidth : function() {
		if (this.el && this.text && this.width === undefined) {
			this.el.setWidth("auto");
			if (Ext.isIE7 && Ext.isStrict) {
				var a = this.btnEl;
				if (a && a.getWidth() > 20) {
					a.clip();
					a.setWidth(Ext.util.TextMetrics.measure(a, this.text).width
							+ a.getFrameWidth("lr"))
				}
			}
			if (this.minWidth) {
				if (this.el.getWidth() < this.minWidth) {
					this.el.setWidth(this.minWidth)
				}
			}
		}
	},
	setHandler : function(b, a) {
		this.handler = b;
		this.scope = a;
		return this
	},
	setText : function(a) {
		this.text = a;
		if (this.el) {
			this.btnEl.update(a || "&#160;");
			this.setButtonClass()
		}
		this.doAutoWidth();
		return this
	},
	setIcon : function(a) {
		this.icon = a;
		if (this.el) {
			this.btnEl.setStyle("background-image", a ? "url(" + a + ")" : "");
			this.setButtonClass()
		}
		return this
	},
	getText : function() {
		return this.text
	},
	toggle : function(b, a) {
		b = b === undefined ? !this.pressed : !!b;
		if (b != this.pressed) {
			if (this.rendered) {
				this.el[b ? "addClass" : "removeClass"]("x-btn-pressed")
			}
			this.pressed = b;
			if (!a) {
				this.fireEvent("toggle", this, b);
				if (this.toggleHandler) {
					this.toggleHandler.call(this.scope || this, this, b)
				}
			}
		}
		return this
	},
	focus : function() {
		this.btnEl.focus()
	},
	onDisable : function() {
		this.onDisableChange(true)
	},
	onEnable : function() {
		this.onDisableChange(false)
	},
	onDisableChange : function(a) {
		if (this.el) {
			if (!Ext.isIE6 || !this.text) {
				this.el[a ? "addClass" : "removeClass"](this.disabledClass)
			}
			this.el.dom.disabled = a
		}
		this.disabled = a
	},
	showMenu : function() {
		if (this.rendered && this.menu) {
			if (this.tooltip) {
				Ext.QuickTips.getQuickTip().cancelShow(this.btnEl)
			}
			this.menu.show(this.el, this.menuAlign)
		}
		return this
	},
	hideMenu : function() {
		if (this.menu) {
			this.menu.hide()
		}
		return this
	},
	hasVisibleMenu : function() {
		return this.menu && this.menu.isVisible()
	},
	onClick : function(a) {
		if (a) {
			a.preventDefault()
		}
		if (a.button !== 0) {
			return
		}
		if (!this.disabled) {
			if (this.enableToggle
					&& (this.allowDepress !== false || !this.pressed)) {
				this.toggle()
			}
			if (this.menu && !this.menu.isVisible() && !this.ignoreNextClick) {
				this.showMenu()
			}
			this.fireEvent("click", this, a);
			if (this.handler) {
				this.handler.call(this.scope || this, this, a)
			}
		}
	},
	isMenuTriggerOver : function(b, a) {
		return this.menu && !a
	},
	isMenuTriggerOut : function(b, a) {
		return this.menu && !a
	},
	onMouseOver : function(b) {
		if (!this.disabled) {
			var a = b.within(this.el, true);
			if (!a) {
				this.el.addClass("x-btn-over");
				if (!this.monitoringMouseOver) {
					this.doc.on("mouseover", this.monitorMouseOver, this);
					this.monitoringMouseOver = true
				}
				this.fireEvent("mouseover", this, b)
			}
			if (this.isMenuTriggerOver(b, a)) {
				this.fireEvent("menutriggerover", this, this.menu, b)
			}
		}
	},
	monitorMouseOver : function(a) {
		if (a.target != this.el.dom && !a.within(this.el)) {
			if (this.monitoringMouseOver) {
				this.doc.un("mouseover", this.monitorMouseOver, this);
				this.monitoringMouseOver = false
			}
			this.onMouseOut(a)
		}
	},
	onMouseOut : function(b) {
		var a = b.within(this.el) && b.target != this.el.dom;
		this.el.removeClass("x-btn-over");
		this.fireEvent("mouseout", this, b);
		if (this.isMenuTriggerOut(b, a)) {
			this.fireEvent("menutriggerout", this, this.menu, b)
		}
	},
	focus : function() {
		this.btnEl.focus()
	},
	blur : function() {
		this.btnEl.blur()
	},
	onFocus : function(a) {
		if (!this.disabled) {
			this.el.addClass("x-btn-focus")
		}
	},
	onBlur : function(a) {
		this.el.removeClass("x-btn-focus")
	},
	getClickEl : function(b, a) {
		return this.el
	},
	onMouseDown : function(a) {
		if (!this.disabled && a.button === 0) {
			this.getClickEl(a).addClass("x-btn-click");
			this.doc.on("mouseup", this.onMouseUp, this)
		}
	},
	onMouseUp : function(a) {
		if (a.button === 0) {
			this.getClickEl(a, true).removeClass("x-btn-click");
			this.doc.un("mouseup", this.onMouseUp, this)
		}
	},
	onMenuShow : function(a) {
		this.menu.ownerCt = this;
		this.ignoreNextClick = 0;
		this.el.addClass("x-btn-menu-active");
		this.fireEvent("menushow", this, this.menu)
	},
	onMenuHide : function(a) {
		this.el.removeClass("x-btn-menu-active");
		this.ignoreNextClick = this.restoreClick.defer(250, this);
		this.fireEvent("menuhide", this, this.menu);
		delete this.menu.ownerCt
	},
	restoreClick : function() {
		this.ignoreNextClick = 0
	}
});
Ext.reg("button", Ext.Button);
Ext.ButtonToggleMgr = function() {
	var a = {};
	function b(e, j) {
		if (j) {
			var h = a[e.toggleGroup];
			for (var d = 0, c = h.length; d < c; d++) {
				if (h[d] != e) {
					h[d].toggle(false)
				}
			}
		}
	}
	return {
		register : function(c) {
			if (!c.toggleGroup) {
				return
			}
			var d = a[c.toggleGroup];
			if (!d) {
				d = a[c.toggleGroup] = []
			}
			d.push(c);
			c.on("toggle", b)
		},
		unregister : function(c) {
			if (!c.toggleGroup) {
				return
			}
			var d = a[c.toggleGroup];
			if (d) {
				d.remove(c);
				c.un("toggle", b)
			}
		},
		getPressed : function(h) {
			var e = a[h];
			if (e) {
				for (var d = 0, c = e.length; d < c; d++) {
					if (e[d].pressed === true) {
						return e[d]
					}
				}
			}
			return null
		}
	}
}();
Ext.SplitButton = Ext.extend(Ext.Button, {
	arrowSelector : "em",
	split : true,
	initComponent : function() {
		Ext.SplitButton.superclass.initComponent.call(this);
		this.addEvents("arrowclick")
	},
	onRender : function() {
		Ext.SplitButton.superclass.onRender.apply(this, arguments);
		if (this.arrowTooltip) {
			this.el.child(this.arrowSelector).dom[this.tooltipType] = this.arrowTooltip
		}
	},
	setArrowHandler : function(b, a) {
		this.arrowHandler = b;
		this.scope = a
	},
	getMenuClass : function() {
		return "x-btn-split" + (this.arrowAlign == "bottom" ? "-bottom" : "")
	},
	isClickOnArrow : function(c) {
		if (this.arrowAlign != "bottom") {
			var b = this.el.child("em.x-btn-split");
			var a = b.getRegion().right - b.getPadding("r");
			return c.getPageX() > a
		} else {
			return c.getPageY() > this.btnEl.getRegion().bottom
		}
	},
	onClick : function(b, a) {
		b.preventDefault();
		if (!this.disabled) {
			if (this.isClickOnArrow(b)) {
				if (this.menu && !this.menu.isVisible()
						&& !this.ignoreNextClick) {
					this.showMenu()
				}
				this.fireEvent("arrowclick", this, b);
				if (this.arrowHandler) {
					this.arrowHandler.call(this.scope || this, this, b)
				}
			} else {
				if (this.enableToggle) {
					this.toggle()
				}
				this.fireEvent("click", this, b);
				if (this.handler) {
					this.handler.call(this.scope || this, this, b)
				}
			}
		}
	},
	isMenuTriggerOver : function(a) {
		return this.menu && a.target.tagName == this.arrowSelector
	},
	isMenuTriggerOut : function(b, a) {
		return this.menu && b.target.tagName != this.arrowSelector
	}
});
Ext.reg("splitbutton", Ext.SplitButton);
Ext.CycleButton = Ext.extend(Ext.SplitButton, {
			getItemText : function(a) {
				if (a && this.showText === true) {
					var b = "";
					if (this.prependText) {
						b += this.prependText
					}
					b += a.text;
					return b
				}
				return undefined
			},
			setActiveItem : function(c, a) {
				if (!Ext.isObject(c)) {
					c = this.menu.getComponent(c)
				}
				if (c) {
					if (!this.rendered) {
						this.text = this.getItemText(c);
						this.iconCls = c.iconCls
					} else {
						var b = this.getItemText(c);
						if (b) {
							this.setText(b)
						}
						this.setIconClass(c.iconCls)
					}
					this.activeItem = c;
					if (!c.checked) {
						c.setChecked(true, true)
					}
					if (this.forceIcon) {
						this.setIconClass(this.forceIcon)
					}
					if (!a) {
						this.fireEvent("change", this, c)
					}
				}
			},
			getActiveItem : function() {
				return this.activeItem
			},
			initComponent : function() {
				this.addEvents("change");
				if (this.changeHandler) {
					this.on("change", this.changeHandler, this.scope || this);
					delete this.changeHandler
				}
				this.itemCount = this.items.length;
				this.menu = {
					cls : "x-cycle-menu",
					items : []
				};
				var a;
				Ext.each(this.items, function(c, b) {
							Ext.apply(c, {
										group : c.group || this.id,
										itemIndex : b,
										checkHandler : this.checkHandler,
										scope : this,
										checked : c.checked || false
									});
							this.menu.items.push(c);
							if (c.checked) {
								a = c
							}
						}, this);
				this.setActiveItem(a, true);
				Ext.CycleButton.superclass.initComponent.call(this);
				this.on("click", this.toggleSelected, this)
			},
			checkHandler : function(a, b) {
				if (b) {
					this.setActiveItem(a)
				}
			},
			toggleSelected : function() {
				var a = this.menu;
				a.render();
				if (!a.hasLayout) {
					a.doLayout()
				}
				var d, b;
				for (var c = 1; c < this.itemCount; c++) {
					d = (this.activeItem.itemIndex + c) % this.itemCount;
					b = a.items.itemAt(d);
					if (!b.disabled) {
						b.setChecked(true);
						break
					}
				}
			}
		});
Ext.reg("cycle", Ext.CycleButton);
Ext.layout.ToolbarLayout = Ext.extend(Ext.layout.ContainerLayout, {
	monitorResize : true,
	triggerWidth : 18,
	lastOverflow : false,
	forceLayout : true,
	noItemsMenuText : '<div class="x-toolbar-no-items">(None)</div>',
	onLayout : function(d, h) {
		if (!this.leftTr) {
			var g = d.buttonAlign == "center" ? "center" : "left";
			h.addClass("x-toolbar-layout-ct");
			h
					.insertHtml(
							"beforeEnd",
							'<table cellspacing="0" class="x-toolbar-ct"><tbody><tr><td class="x-toolbar-left" align="'
									+ g
									+ '"><table cellspacing="0"><tbody><tr class="x-toolbar-left-row"></tr></tbody></table></td><td class="x-toolbar-right" align="right"><table cellspacing="0" class="x-toolbar-right-ct"><tbody><tr><td><table cellspacing="0"><tbody><tr class="x-toolbar-right-row"></tr></tbody></table></td><td><table cellspacing="0"><tbody><tr class="x-toolbar-extras-row"></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>');
			this.leftTr = h.child("tr.x-toolbar-left-row", true);
			this.rightTr = h.child("tr.x-toolbar-right-row", true);
			this.extrasTr = h.child("tr.x-toolbar-extras-row", true)
		}
		var j = d.buttonAlign == "right" ? this.rightTr : this.leftTr, m = 0, k = d.items.items;
		for (var b = 0, e = k.length, l; b < e; b++, m++) {
			l = k[b];
			if (l.isFill) {
				j = this.rightTr;
				m = -1
			} else {
				if (!l.rendered) {
					l.render(this.insertCell(l, j, m))
				} else {
					if (!l.xtbHidden && !this.isValidParent(l, j.childNodes[m])) {
						var a = this.insertCell(l, j, m);
						a.appendChild(l.getPositionEl().dom);
						l.container = Ext.get(a)
					}
				}
			}
		}
		this.cleanup(this.leftTr);
		this.cleanup(this.rightTr);
		this.cleanup(this.extrasTr);
		this.fitToSize(h)
	},
	cleanup : function(b) {
		var e = b.childNodes;
		for (var a = e.length - 1, d; a >= 0 && (d = e[a]); a--) {
			if (!d.firstChild) {
				b.removeChild(d)
			}
		}
	},
	insertCell : function(e, a, d) {
		var b = document.createElement("td");
		b.className = "x-toolbar-cell";
		a.insertBefore(b, a.childNodes[d] || null);
		return b
	},
	hideItem : function(b) {
		var a = (this.hiddens = this.hiddens || []);
		a.push(b);
		b.xtbHidden = true;
		b.xtbWidth = b.getPositionEl().dom.parentNode.offsetWidth;
		b.hide()
	},
	unhideItem : function(a) {
		a.show();
		a.xtbHidden = false;
		this.hiddens.remove(a);
		if (this.hiddens.length < 1) {
			delete this.hiddens
		}
	},
	getItemWidth : function(a) {
		return a.hidden
				? (a.xtbWidth || 0)
				: a.getPositionEl().dom.parentNode.offsetWidth
	},
	fitToSize : function(n) {
		if (this.container.enableOverflow === false) {
			return
		}
		var m = n.dom.clientWidth, b = this.lastWidth || 0, d = n.dom.firstChild.offsetWidth, l = m
				- this.triggerWidth, k = -1;
		this.lastWidth = m;
		if (d > m || (this.hiddens && m >= b)) {
			var e, h = this.container.items.items, g = h.length, j, a = 0;
			for (e = 0; e < g; e++) {
				j = h[e];
				if (!j.isFill) {
					a += this.getItemWidth(j);
					if (a > l) {
						if (!(j.hidden || j.xtbHidden)) {
							this.hideItem(j)
						}
					} else {
						if (j.xtbHidden) {
							this.unhideItem(j)
						}
					}
				}
			}
		}
		if (this.hiddens) {
			this.initMore();
			if (!this.lastOverflow) {
				this.container
						.fireEvent("overflowchange", this.container, true);
				this.lastOverflow = true
			}
		} else {
			if (this.more) {
				this.clearMenu();
				this.more.destroy();
				delete this.more;
				if (this.lastOverflow) {
					this.container.fireEvent("overflowchange", this.container,
							false);
					this.lastOverflow = false
				}
			}
		}
	},
	createMenuConfig : function(e, b) {
		var a = Ext.apply({}, e.initialConfig), d = e.toggleGroup;
		Ext.apply(a, {
					text : e.overflowText || e.text,
					iconCls : e.iconCls,
					icon : e.icon,
					itemId : e.itemId,
					disabled : e.disabled,
					handler : e.handler,
					scope : e.scope,
					menu : e.menu,
					hideOnClick : b
				});
		if (d || e.enableToggle) {
			Ext.apply(a, {
						group : d,
						checked : e.pressed,
						listeners : {
							checkchange : function(g, c) {
								e.toggle(c)
							}
						}
					})
		}
		delete a.ownerCt;
		delete a.xtype;
		delete a.id;
		return a
	},
	addComponentToMenu : function(a, b) {
		if (b instanceof Ext.Toolbar.Separator) {
			a.add("-")
		} else {
			if (Ext.isFunction(b.isXType)) {
				if (b.isXType("splitbutton")) {
					a.add(this.createMenuConfig(b, true))
				} else {
					if (b.isXType("button")) {
						a.add(this.createMenuConfig(b, !b.menu))
					} else {
						if (b.isXType("buttongroup")) {
							b.items.each(function(c) {
										this.addComponentToMenu(a, c)
									}, this)
						}
					}
				}
			}
		}
	},
	clearMenu : function() {
		var a = this.moreMenu;
		if (a && a.items) {
			a.items.each(function(b) {
						delete b.menu
					})
		}
	},
	beforeMoreShow : function(b) {
		var g = this.container.items.items, a = g.length, k, j, d = function(h,
				c) {
			return h.isXType("buttongroup")
					&& !(c instanceof Ext.Toolbar.Separator)
		};
		this.clearMenu();
		b.removeAll();
		for (var e = 0; e < a; e++) {
			k = g[e];
			if (k.xtbHidden) {
				if (j && (d(k, j) || d(j, k))) {
					b.add("-")
				}
				this.addComponentToMenu(b, k);
				j = k
			}
		}
		if (b.items.length < 1) {
			b.add(this.noItemsMenuText)
		}
	},
	initMore : function() {
		if (!this.more) {
			this.moreMenu = new Ext.menu.Menu({
						listeners : {
							beforeshow : this.beforeMoreShow,
							scope : this
						}
					});
			this.moreMenu.ownerCt = this.container;
			this.more = new Ext.Button({
						iconCls : "x-toolbar-more-icon",
						cls : "x-toolbar-more",
						menu : this.moreMenu
					});
			var a = this.insertCell(this.more, this.extrasTr, 100);
			this.more.render(a)
		}
	},
	onRemove : function(a) {
		delete this.leftTr;
		delete this.rightTr;
		delete this.extrasTr;
		Ext.layout.ToolbarLayout.superclass.onRemove.call(this, a)
	},
	destroy : function() {
		Ext.destroy(this.more, this.moreMenu);
		delete this.leftTr;
		delete this.rightTr;
		delete this.extrasTr;
		Ext.layout.ToolbarLayout.superclass.destroy.call(this)
	}
});
Ext.Container.LAYOUTS.toolbar = Ext.layout.ToolbarLayout;
Ext.Toolbar = function(a) {
	if (Ext.isArray(a)) {
		a = {
			items : a,
			layout : "toolbar"
		}
	} else {
		a = Ext.apply({
					layout : "toolbar"
				}, a);
		if (a.buttons) {
			a.items = a.buttons
		}
	}
	Ext.Toolbar.superclass.constructor.call(this, a)
};
(function() {
	var a = Ext.Toolbar;
	Ext.extend(a, Ext.Container, {
				defaultType : "button",
				trackMenus : true,
				internalDefaults : {
					removeMode : "container",
					hideParent : true
				},
				toolbarCls : "x-toolbar",
				initComponent : function() {
					a.superclass.initComponent.call(this);
					this.addEvents("overflowchange")
				},
				onRender : function(c, b) {
					if (!this.el) {
						if (!this.autoCreate) {
							this.autoCreate = {
								cls : this.toolbarCls + " x-small-editor"
							}
						}
						this.el = c.createChild(Ext.apply({
											id : this.id
										}, this.autoCreate), b);
						Ext.Toolbar.superclass.onRender.apply(this, arguments)
					}
				},
				lookupComponent : function(b) {
					if (Ext.isString(b)) {
						if (b == "-") {
							b = new a.Separator()
						} else {
							if (b == " ") {
								b = new a.Spacer()
							} else {
								if (b == "->") {
									b = new a.Fill()
								} else {
									b = new a.TextItem(b)
								}
							}
						}
						this.applyDefaults(b)
					} else {
						if (b.isFormField || b.render) {
							b = this.createComponent(b)
						} else {
							if (b.tag) {
								b = new a.Item({
											autoEl : b
										})
							} else {
								if (b.tagName) {
									b = new a.Item({
												el : b
											})
								} else {
									if (Ext.isObject(b)) {
										b = b.xtype
												? this.createComponent(b)
												: this.constructButton(b)
									}
								}
							}
						}
					}
					return b
				},
				applyDefaults : function(e) {
					if (!Ext.isString(e)) {
						e = Ext.Toolbar.superclass.applyDefaults.call(this, e);
						var b = this.internalDefaults;
						if (e.events) {
							Ext.applyIf(e.initialConfig, b);
							Ext.apply(e, b)
						} else {
							Ext.applyIf(e, b)
						}
					}
					return e
				},
				addSeparator : function() {
					return this.add(new a.Separator())
				},
				addSpacer : function() {
					return this.add(new a.Spacer())
				},
				addFill : function() {
					this.add(new a.Fill())
				},
				addElement : function(b) {
					return this.addItem(new a.Item({
								el : b
							}))
				},
				addItem : function(b) {
					return this.add.apply(this, arguments)
				},
				addButton : function(c) {
					if (Ext.isArray(c)) {
						var e = [];
						for (var d = 0, b = c.length; d < b; d++) {
							e.push(this.addButton(c[d]))
						}
						return e
					}
					return this.add(this.constructButton(c))
				},
				addText : function(b) {
					return this.addItem(new a.TextItem(b))
				},
				addDom : function(b) {
					return this.add(new a.Item({
								autoEl : b
							}))
				},
				addField : function(b) {
					return this.add(b)
				},
				insertButton : function(c, g) {
					if (Ext.isArray(g)) {
						var e = [];
						for (var d = 0, b = g.length; d < b; d++) {
							e.push(this.insertButton(c + d, g[d]))
						}
						return e
					}
					return Ext.Toolbar.superclass.insert.call(this, c, g)
				},
				trackMenu : function(c, b) {
					if (this.trackMenus && c.menu) {
						var d = b ? "mun" : "mon";
						this[d](c, "menutriggerover", this.onButtonTriggerOver,
								this);
						this[d](c, "menushow", this.onButtonMenuShow, this);
						this[d](c, "menuhide", this.onButtonMenuHide, this)
					}
				},
				constructButton : function(d) {
					var c = d.events ? d : this.createComponent(d, d.split
									? "splitbutton"
									: this.defaultType);
					return c
				},
				onAdd : function(b) {
					Ext.Toolbar.superclass.onAdd.call(this);
					this.trackMenu(b)
				},
				onRemove : function(b) {
					Ext.Toolbar.superclass.onRemove.call(this);
					this.trackMenu(b, true)
				},
				onDisable : function() {
					this.items.each(function(b) {
								if (b.disable) {
									b.disable()
								}
							})
				},
				onEnable : function() {
					this.items.each(function(b) {
								if (b.enable) {
									b.enable()
								}
							})
				},
				onButtonTriggerOver : function(b) {
					if (this.activeMenuBtn && this.activeMenuBtn != b) {
						this.activeMenuBtn.hideMenu();
						b.showMenu();
						this.activeMenuBtn = b
					}
				},
				onButtonMenuShow : function(b) {
					this.activeMenuBtn = b
				},
				onButtonMenuHide : function(b) {
					delete this.activeMenuBtn
				}
			});
	Ext.reg("toolbar", Ext.Toolbar);
	a.Item = Ext.extend(Ext.BoxComponent, {
				hideParent : true,
				enable : Ext.emptyFn,
				disable : Ext.emptyFn,
				focus : Ext.emptyFn
			});
	Ext.reg("tbitem", a.Item);
	a.Separator = Ext.extend(a.Item, {
				onRender : function(c, b) {
					this.el = c.createChild({
								tag : "span",
								cls : "xtb-sep"
							}, b)
				}
			});
	Ext.reg("tbseparator", a.Separator);
	a.Spacer = Ext.extend(a.Item, {
				onRender : function(c, b) {
					this.el = c.createChild({
								tag : "div",
								cls : "xtb-spacer",
								style : this.width ? "width:" + this.width
										+ "px" : ""
							}, b)
				}
			});
	Ext.reg("tbspacer", a.Spacer);
	a.Fill = Ext.extend(a.Item, {
				render : Ext.emptyFn,
				isFill : true
			});
	Ext.reg("tbfill", a.Fill);
	a.TextItem = Ext.extend(a.Item, {
				constructor : function(b) {
					a.TextItem.superclass.constructor.call(this, Ext
									.isString(b) ? {
								text : b
							} : b)
				},
				onRender : function(c, b) {
					this.autoEl = {
						cls : "xtb-text",
						html : this.text || ""
					};
					a.TextItem.superclass.onRender.call(this, c, b)
				},
				setText : function(b) {
					if (this.rendered) {
						this.el.update(b)
					} else {
						this.text = b
					}
				}
			});
	Ext.reg("tbtext", a.TextItem);
	a.Button = Ext.extend(Ext.Button, {});
	a.SplitButton = Ext.extend(Ext.SplitButton, {});
	Ext.reg("tbbutton", a.Button);
	Ext.reg("tbsplit", a.SplitButton)
})();
Ext.ButtonGroup = Ext.extend(Ext.Panel, {
			baseCls : "x-btn-group",
			layout : "table",
			defaultType : "button",
			frame : true,
			internalDefaults : {
				removeMode : "container",
				hideParent : true
			},
			initComponent : function() {
				this.layoutConfig = this.layoutConfig || {};
				Ext.applyIf(this.layoutConfig, {
							columns : this.columns
						});
				if (!this.title) {
					this.addClass("x-btn-group-notitle")
				}
				this.on("afterlayout", this.onAfterLayout, this);
				Ext.ButtonGroup.superclass.initComponent.call(this)
			},
			applyDefaults : function(b) {
				b = Ext.ButtonGroup.superclass.applyDefaults.call(this, b);
				var a = this.internalDefaults;
				if (b.events) {
					Ext.applyIf(b.initialConfig, a);
					Ext.apply(b, a)
				} else {
					Ext.applyIf(b, a)
				}
				return b
			},
			onAfterLayout : function() {
				var a = this.body.getFrameWidth("lr")
						+ this.body.dom.firstChild.offsetWidth;
				this.body.setWidth(a);
				this.el.setWidth(a + this.getFrameWidth())
			}
		});
Ext.reg("buttongroup", Ext.ButtonGroup);
(function() {
	var a = Ext.Toolbar;
	Ext.PagingToolbar = Ext.extend(Ext.Toolbar, {
				pageSize : 20,
				displayMsg : "Displaying {0} - {1} of {2}",
				emptyMsg : "No data to display",
				beforePageText : "Page",
				afterPageText : "of {0}",
				firstText : "First Page",
				prevText : "Previous Page",
				nextText : "Next Page",
				lastText : "Last Page",
				refreshText : "Refresh",
				initComponent : function() {
					var c = [this.first = new a.Button({
										tooltip : this.firstText,
										overflowText : this.firstText,
										iconCls : "x-tbar-page-first",
										disabled : true,
										handler : this.moveFirst,
										scope : this
									}), this.prev = new a.Button({
										tooltip : this.prevText,
										overflowText : this.prevText,
										iconCls : "x-tbar-page-prev",
										disabled : true,
										handler : this.movePrevious,
										scope : this
									}), "-", this.beforePageText,
							this.inputItem = new Ext.form.NumberField({
										cls : "x-tbar-page-number",
										allowDecimals : false,
										allowNegative : false,
										enableKeyEvents : true,
										selectOnFocus : true,
										submitValue : false,
										listeners : {
											scope : this,
											keydown : this.onPagingKeyDown,
											blur : this.onPagingBlur
										}
									}), this.afterTextItem = new a.TextItem({
										text : String.format(
												this.afterPageText, 1)
									}), "-", this.next = new a.Button({
										tooltip : this.nextText,
										overflowText : this.nextText,
										iconCls : "x-tbar-page-next",
										disabled : true,
										handler : this.moveNext,
										scope : this
									}), this.last = new a.Button({
										tooltip : this.lastText,
										overflowText : this.lastText,
										iconCls : "x-tbar-page-last",
										disabled : true,
										handler : this.moveLast,
										scope : this
									}), "-", this.refresh = new a.Button({
										tooltip : this.refreshText,
										overflowText : this.refreshText,
										iconCls : "x-tbar-loading",
										handler : this.doRefresh,
										scope : this
									})];
					var b = this.items || this.buttons || [];
					if (this.prependButtons) {
						this.items = b.concat(c)
					} else {
						this.items = c.concat(b)
					}
					delete this.buttons;
					if (this.displayInfo) {
						this.items.push("->");
						this.items.push(this.displayItem = new a.TextItem({}))
					}
					Ext.PagingToolbar.superclass.initComponent.call(this);
					this.addEvents("change", "beforechange");
					this.on("afterlayout", this.onFirstLayout, this, {
								single : true
							});
					this.cursor = 0;
					this.bindStore(this.store, true)
				},
				onFirstLayout : function() {
					if (this.dsLoaded) {
						this.onLoad.apply(this, this.dsLoaded)
					}
				},
				updateInfo : function() {
					if (this.displayItem) {
						var b = this.store.getCount();
						var c = b == 0 ? this.emptyMsg : String.format(
								this.displayMsg, this.cursor + 1, this.cursor
										+ b, this.store.getTotalCount());
						this.displayItem.setText(c)
					}
				},
				onLoad : function(b, e, k) {
					if (!this.rendered) {
						this.dsLoaded = [b, e, k];
						return
					}
					var g = this.getParams();
					this.cursor = (k.params && k.params[g.start])
							? k.params[g.start]
							: 0;
					var j = this.getPageData(), c = j.activePage, h = j.pages;
					this.afterTextItem.setText(String.format(
							this.afterPageText, j.pages));
					this.inputItem.setValue(c);
					this.first.setDisabled(c == 1);
					this.prev.setDisabled(c == 1);
					this.next.setDisabled(c == h);
					this.last.setDisabled(c == h);
					this.refresh.enable();
					this.updateInfo();
					this.fireEvent("change", this, j)
				},
				getPageData : function() {
					var b = this.store.getTotalCount();
					return {
						total : b,
						activePage : Math.ceil((this.cursor + this.pageSize)
								/ this.pageSize),
						pages : b < this.pageSize ? 1 : Math.ceil(b
								/ this.pageSize)
					}
				},
				changePage : function(b) {
					this.doLoad(((b - 1) * this.pageSize).constrain(0,
							this.store.getTotalCount()))
				},
				onLoadError : function() {
					if (!this.rendered) {
						return
					}
					this.refresh.enable()
				},
				readPage : function(e) {
					var b = this.inputItem.getValue(), c;
					if (!b || isNaN(c = parseInt(b, 10))) {
						this.inputItem.setValue(e.activePage);
						return false
					}
					return c
				},
				onPagingFocus : function() {
					this.inputItem.select()
				},
				onPagingBlur : function(b) {
					this.inputItem.setValue(this.getPageData().activePage)
				},
				onPagingKeyDown : function(j, h) {
					var c = h.getKey(), l = this.getPageData(), g;
					if (c == h.RETURN) {
						h.stopEvent();
						g = this.readPage(l);
						if (g !== false) {
							g = Math.min(Math.max(1, g), l.pages) - 1;
							this.doLoad(g * this.pageSize)
						}
					} else {
						if (c == h.HOME || c == h.END) {
							h.stopEvent();
							g = c == h.HOME ? 1 : l.pages;
							j.setValue(g)
						} else {
							if (c == h.UP || c == h.PAGEUP || c == h.DOWN
									|| c == h.PAGEDOWN) {
								h.stopEvent();
								if ((g = this.readPage(l))) {
									var b = h.shiftKey ? 10 : 1;
									if (c == h.DOWN || c == h.PAGEDOWN) {
										b *= -1
									}
									g += b;
									if (g >= 1 & g <= l.pages) {
										j.setValue(g)
									}
								}
							}
						}
					}
				},
				getParams : function() {
					return this.paramNames || this.store.paramNames
				},
				beforeLoad : function() {
					if (this.rendered && this.refresh) {
						this.refresh.disable()
					}
				},
				doLoad : function(d) {
					var c = {}, b = this.getParams();
					c[b.start] = d;
					c[b.limit] = this.pageSize;
					if (this.fireEvent("beforechange", this, c) !== false) {
						this.store.load({
									params : c
								})
					}
				},
				moveFirst : function() {
					this.doLoad(0)
				},
				movePrevious : function() {
					this.doLoad(Math.max(0, this.cursor - this.pageSize))
				},
				moveNext : function() {
					this.doLoad(this.cursor + this.pageSize)
				},
				moveLast : function() {
					var c = this.store.getTotalCount(), b = c % this.pageSize;
					this.doLoad(b ? (c - b) : c - this.pageSize)
				},
				doRefresh : function() {
					this.doLoad(this.cursor)
				},
				bindStore : function(c, d) {
					var b;
					if (!d && this.store) {
						if (c !== this.store && this.store.autoDestroy) {
							this.store.destroy()
						} else {
							this.store.un("beforeload", this.beforeLoad, this);
							this.store.un("load", this.onLoad, this);
							this.store.un("exception", this.onLoadError, this)
						}
						if (!c) {
							this.store = null
						}
					}
					if (c) {
						c = Ext.StoreMgr.lookup(c);
						c.on({
									scope : this,
									beforeload : this.beforeLoad,
									load : this.onLoad,
									exception : this.onLoadError
								});
						b = true
					}
					this.store = c;
					if (b) {
						this.onLoad(c, null, {})
					}
				},
				unbind : function(b) {
					this.bindStore(null)
				},
				bind : function(b) {
					this.bindStore(b)
				},
				onDestroy : function() {
					this.bindStore(null);
					Ext.PagingToolbar.superclass.onDestroy.call(this)
				}
			})
})();
Ext.reg("paging", Ext.PagingToolbar);
Ext.History = (function() {
	var e, c;
	var l = false;
	var d;
	function g() {
		var m = top.location.href, n = m.indexOf("#");
		return n >= 0 ? m.substr(n + 1) : null
	}
	function a() {
		c.value = d
	}
	function h(m) {
		d = m;
		Ext.History.fireEvent("change", m)
	}
	function j(n) {
		var m = ['<html><body><div id="state">', Ext.util.Format.htmlEncode(n),
				"</div></body></html>"].join("");
		try {
			var p = e.contentWindow.document;
			p.open();
			p.write(m);
			p.close();
			return true
		} catch (o) {
			return false
		}
	}
	function b() {
		if (!e.contentWindow || !e.contentWindow.document) {
			setTimeout(b, 10);
			return
		}
		var p = e.contentWindow.document;
		var n = p.getElementById("state");
		var m = n ? n.innerText : null;
		var o = g();
		setInterval(function() {
					p = e.contentWindow.document;
					n = p.getElementById("state");
					var r = n ? n.innerText : null;
					var q = g();
					if (r !== m) {
						m = r;
						h(m);
						top.location.hash = m;
						o = m;
						a()
					} else {
						if (q !== o) {
							o = q;
							j(q)
						}
					}
				}, 50);
		l = true;
		Ext.History.fireEvent("ready", Ext.History)
	}
	function k() {
		d = c.value ? c.value : g();
		if (Ext.isIE) {
			b()
		} else {
			var m = g();
			setInterval(function() {
						var n = g();
						if (n !== m) {
							m = n;
							h(m);
							a()
						}
					}, 50);
			l = true;
			Ext.History.fireEvent("ready", Ext.History)
		}
	}
	return {
		fieldId : "x-history-field",
		iframeId : "x-history-frame",
		events : {},
		init : function(n, m) {
			if (l) {
				Ext.callback(n, m, [this]);
				return
			}
			if (!Ext.isReady) {
				Ext.onReady(function() {
							Ext.History.init(n, m)
						});
				return
			}
			c = Ext.getDom(Ext.History.fieldId);
			if (Ext.isIE) {
				e = Ext.getDom(Ext.History.iframeId)
			}
			this.addEvents("ready", "change");
			if (n) {
				this.on("ready", n, m, {
							single : true
						})
			}
			k()
		},
		add : function(m, n) {
			if (n !== false) {
				if (this.getToken() == m) {
					return true
				}
			}
			if (Ext.isIE) {
				return j(m)
			} else {
				top.location.hash = m;
				return true
			}
		},
		back : function() {
			history.go(-1)
		},
		forward : function() {
			history.go(1)
		},
		getToken : function() {
			return l ? d : g()
		}
	}
})();
Ext.apply(Ext.History, new Ext.util.Observable());
Ext.Tip = Ext.extend(Ext.Panel, {
	minWidth : 40,
	maxWidth : 300,
	shadow : "sides",
	defaultAlign : "tl-bl?",
	autoRender : true,
	quickShowInterval : 250,
	frame : true,
	hidden : true,
	baseCls : "x-tip",
	floating : {
		shadow : true,
		shim : true,
		useDisplay : true,
		constrain : false
	},
	autoHeight : true,
	closeAction : "hide",
	initComponent : function() {
		Ext.Tip.superclass.initComponent.call(this);
		if (this.closable && !this.title) {
			this.elements += ",header"
		}
	},
	afterRender : function() {
		Ext.Tip.superclass.afterRender.call(this);
		if (this.closable) {
			this.addTool({
						id : "close",
						handler : this[this.closeAction],
						scope : this
					})
		}
	},
	showAt : function(a) {
		Ext.Tip.superclass.show.call(this);
		if (this.measureWidth !== false
				&& (!this.initialConfig || typeof this.initialConfig.width != "number")) {
			this.doAutoWidth()
		}
		if (this.constrainPosition) {
			a = this.el.adjustForConstraints(a)
		}
		this.setPagePosition(a[0], a[1])
	},
	doAutoWidth : function(a) {
		a = a || 0;
		var b = this.body.getTextWidth();
		if (this.title) {
			b = Math.max(b, this.header.child("span").getTextWidth(this.title))
		}
		b += this.getFrameWidth() + (this.closable ? 20 : 0)
				+ this.body.getPadding("lr") + a;
		this.setWidth(b.constrain(this.minWidth, this.maxWidth));
		if (Ext.isIE7 && !this.repainted) {
			this.el.repaint();
			this.repainted = true
		}
	},
	showBy : function(a, b) {
		if (!this.rendered) {
			this.render(Ext.getBody())
		}
		this.showAt(this.el.getAlignToXY(a, b || this.defaultAlign))
	},
	initDraggable : function() {
		this.dd = new Ext.Tip.DD(this, typeof this.draggable == "boolean"
						? null
						: this.draggable);
		this.header.addClass("x-tip-draggable")
	}
});
Ext.reg("tip", Ext.Tip);
Ext.Tip.DD = function(b, a) {
	Ext.apply(this, a);
	this.tip = b;
	Ext.Tip.DD.superclass.constructor.call(this, b.el.id, "WindowDD-" + b.id);
	this.setHandleElId(b.header.id);
	this.scroll = false
};
Ext.extend(Ext.Tip.DD, Ext.dd.DD, {
			moveOnly : true,
			scroll : false,
			headerOffsets : [100, 25],
			startDrag : function() {
				this.tip.el.disableShadow()
			},
			endDrag : function(a) {
				this.tip.el.enableShadow(true)
			}
		});
Ext.ToolTip = Ext.extend(Ext.Tip, {
	showDelay : 500,
	hideDelay : 200,
	dismissDelay : 5000,
	trackMouse : false,
	anchorToTarget : true,
	anchorOffset : 0,
	targetCounter : 0,
	constrainPosition : false,
	initComponent : function() {
		Ext.ToolTip.superclass.initComponent.call(this);
		this.lastActive = new Date();
		this.initTarget(this.target);
		this.origAnchor = this.anchor
	},
	onRender : function(b, a) {
		Ext.ToolTip.superclass.onRender.call(this, b, a);
		this.anchorCls = "x-tip-anchor-" + this.getAnchorPosition();
		this.anchorEl = this.el.createChild({
					cls : "x-tip-anchor " + this.anchorCls
				})
	},
	afterRender : function() {
		Ext.ToolTip.superclass.afterRender.call(this);
		this.anchorEl.setStyle("z-index", this.el.getZIndex() + 1)
	},
	initTarget : function(c) {
		var a;
		if ((a = Ext.get(c))) {
			if (this.target) {
				var b = Ext.get(this.target);
				this.mun(b, "mouseover", this.onTargetOver, this);
				this.mun(b, "mouseout", this.onTargetOut, this);
				this.mun(b, "mousemove", this.onMouseMove, this)
			}
			this.mon(a, {
						mouseover : this.onTargetOver,
						mouseout : this.onTargetOut,
						mousemove : this.onMouseMove,
						scope : this
					});
			this.target = a
		}
		if (this.anchor) {
			this.anchorTarget = this.target
		}
	},
	onMouseMove : function(b) {
		var a = this.delegate
				? b.getTarget(this.delegate)
				: this.triggerElement = true;
		if (a) {
			this.targetXY = b.getXY();
			if (a === this.triggerElement) {
				if (!this.hidden && this.trackMouse) {
					this.setPagePosition(this.getTargetXY())
				}
			} else {
				this.hide();
				this.lastActive = new Date(0);
				this.onTargetOver(b)
			}
		} else {
			if (!this.closable && this.isVisible()) {
				this.hide()
			}
		}
	},
	getTargetXY : function() {
		if (this.delegate) {
			this.anchorTarget = this.triggerElement
		}
		if (this.anchor) {
			this.targetCounter++;
			var c = this.getOffsets(), l = (this.anchorToTarget && !this.trackMouse)
					? this.el.getAlignToXY(this.anchorTarget, this
									.getAnchorAlign())
					: this.targetXY, a = Ext.lib.Dom.getViewWidth() - 5, g = Ext.lib.Dom
					.getViewHeight()
					- 5, h = document.documentElement, e = document.body, k = (h.scrollLeft
					|| e.scrollLeft || 0)
					+ 5, j = (h.scrollTop || e.scrollTop || 0) + 5, b = [
					l[0] + c[0], l[1] + c[1]];
			sz = this.getSize();
			this.anchorEl.removeClass(this.anchorCls);
			if (this.targetCounter < 2) {
				if (b[0] < k) {
					if (this.anchorToTarget) {
						this.defaultAlign = "l-r";
						if (this.mouseOffset) {
							this.mouseOffset[0] *= -1
						}
					}
					this.anchor = "left";
					return this.getTargetXY()
				}
				if (b[0] + sz.width > a) {
					if (this.anchorToTarget) {
						this.defaultAlign = "r-l";
						if (this.mouseOffset) {
							this.mouseOffset[0] *= -1
						}
					}
					this.anchor = "right";
					return this.getTargetXY()
				}
				if (b[1] < j) {
					if (this.anchorToTarget) {
						this.defaultAlign = "t-b";
						if (this.mouseOffset) {
							this.mouseOffset[1] *= -1
						}
					}
					this.anchor = "top";
					return this.getTargetXY()
				}
				if (b[1] + sz.height > g) {
					if (this.anchorToTarget) {
						this.defaultAlign = "b-t";
						if (this.mouseOffset) {
							this.mouseOffset[1] *= -1
						}
					}
					this.anchor = "bottom";
					return this.getTargetXY()
				}
			}
			this.anchorCls = "x-tip-anchor-" + this.getAnchorPosition();
			this.anchorEl.addClass(this.anchorCls);
			this.targetCounter = 0;
			return b
		} else {
			var d = this.getMouseOffset();
			return [this.targetXY[0] + d[0], this.targetXY[1] + d[1]]
		}
	},
	getMouseOffset : function() {
		var a = this.anchor ? [0, 0] : [15, 18];
		if (this.mouseOffset) {
			a[0] += this.mouseOffset[0];
			a[1] += this.mouseOffset[1]
		}
		return a
	},
	getAnchorPosition : function() {
		if (this.anchor) {
			this.tipAnchor = this.anchor.charAt(0)
		} else {
			var a = this.defaultAlign.match(/^([a-z]+)-([a-z]+)(\?)?$/);
			if (!a) {
				throw "AnchorTip.defaultAlign is invalid"
			}
			this.tipAnchor = a[1].charAt(0)
		}
		switch (this.tipAnchor) {
			case "t" :
				return "top";
			case "b" :
				return "bottom";
			case "r" :
				return "right"
		}
		return "left"
	},
	getAnchorAlign : function() {
		switch (this.anchor) {
			case "top" :
				return "tl-bl";
			case "left" :
				return "tl-tr";
			case "right" :
				return "tr-tl";
			default :
				return "bl-tl"
		}
	},
	getOffsets : function() {
		var b, a = this.getAnchorPosition().charAt(0);
		if (this.anchorToTarget && !this.trackMouse) {
			switch (a) {
				case "t" :
					b = [0, 9];
					break;
				case "b" :
					b = [0, -13];
					break;
				case "r" :
					b = [-13, 0];
					break;
				default :
					b = [9, 0];
					break
			}
		} else {
			switch (a) {
				case "t" :
					b = [-15 - this.anchorOffset, 30];
					break;
				case "b" :
					b = [-19 - this.anchorOffset,
							-13 - this.el.dom.offsetHeight];
					break;
				case "r" :
					b = [-15 - this.el.dom.offsetWidth, -13 - this.anchorOffset];
					break;
				default :
					b = [25, -13 - this.anchorOffset];
					break
			}
		}
		var c = this.getMouseOffset();
		b[0] += c[0];
		b[1] += c[1];
		return b
	},
	onTargetOver : function(b) {
		if (this.disabled || b.within(this.target.dom, true)) {
			return
		}
		var a = b.getTarget(this.delegate);
		if (a) {
			this.triggerElement = a;
			this.clearTimer("hide");
			this.targetXY = b.getXY();
			this.delayShow()
		}
	},
	delayShow : function() {
		if (this.hidden && !this.showTimer) {
			if (this.lastActive.getElapsed() < this.quickShowInterval) {
				this.show()
			} else {
				this.showTimer = this.show.defer(this.showDelay, this)
			}
		} else {
			if (!this.hidden && this.autoHide !== false) {
				this.show()
			}
		}
	},
	onTargetOut : function(a) {
		if (this.disabled || a.within(this.target.dom, true)) {
			return
		}
		this.clearTimer("show");
		if (this.autoHide !== false) {
			this.delayHide()
		}
	},
	delayHide : function() {
		if (!this.hidden && !this.hideTimer) {
			this.hideTimer = this.hide.defer(this.hideDelay, this)
		}
	},
	hide : function() {
		this.clearTimer("dismiss");
		this.lastActive = new Date();
		if (this.anchorEl) {
			this.anchorEl.hide()
		}
		Ext.ToolTip.superclass.hide.call(this);
		delete this.triggerElement
	},
	show : function() {
		if (this.anchor) {
			this.showAt([-1000, -1000]);
			this.origConstrainPosition = this.constrainPosition;
			this.constrainPosition = false;
			this.anchor = this.origAnchor
		}
		this.showAt(this.getTargetXY());
		if (this.anchor) {
			this.syncAnchor();
			this.anchorEl.show();
			this.constrainPosition = this.origConstrainPosition
		} else {
			this.anchorEl.hide()
		}
	},
	showAt : function(a) {
		this.lastActive = new Date();
		this.clearTimers();
		Ext.ToolTip.superclass.showAt.call(this, a);
		if (this.dismissDelay && this.autoHide !== false) {
			this.dismissTimer = this.hide.defer(this.dismissDelay, this)
		}
		if (this.anchor && !this.anchorEl.isVisible()) {
			this.syncAnchor();
			this.anchorEl.show()
		}
	},
	syncAnchor : function() {
		var a, b, c;
		switch (this.tipAnchor.charAt(0)) {
			case "t" :
				a = "b";
				b = "tl";
				c = [20 + this.anchorOffset, 2];
				break;
			case "r" :
				a = "l";
				b = "tr";
				c = [-2, 11 + this.anchorOffset];
				break;
			case "b" :
				a = "t";
				b = "bl";
				c = [20 + this.anchorOffset, -2];
				break;
			default :
				a = "r";
				b = "tl";
				c = [2, 11 + this.anchorOffset];
				break
		}
		this.anchorEl.alignTo(this.el, a + "-" + b, c)
	},
	setPagePosition : function(a, b) {
		Ext.ToolTip.superclass.setPagePosition.call(this, a, b);
		if (this.anchor) {
			this.syncAnchor()
		}
	},
	clearTimer : function(a) {
		a = a + "Timer";
		clearTimeout(this[a]);
		delete this[a]
	},
	clearTimers : function() {
		this.clearTimer("show");
		this.clearTimer("dismiss");
		this.clearTimer("hide")
	},
	onShow : function() {
		Ext.ToolTip.superclass.onShow.call(this);
		Ext.getDoc().on("mousedown", this.onDocMouseDown, this)
	},
	onHide : function() {
		Ext.ToolTip.superclass.onHide.call(this);
		Ext.getDoc().un("mousedown", this.onDocMouseDown, this)
	},
	onDocMouseDown : function(a) {
		if (this.autoHide !== true && !this.closable && !a.within(this.el.dom)) {
			this.disable();
			this.enable.defer(100, this)
		}
	},
	onDisable : function() {
		this.clearTimers();
		this.hide()
	},
	adjustPosition : function(a, d) {
		if (this.contstrainPosition) {
			var c = this.targetXY[1], b = this.getSize().height;
			if (d <= c && (d + b) >= c) {
				d = c - b - 5
			}
		}
		return {
			x : a,
			y : d
		}
	},
	beforeDestroy : function() {
		this.clearTimers();
		Ext.destroy(this.anchorEl);
		delete this.anchorEl;
		delete this.target;
		delete this.anchorTarget;
		delete this.triggerElement;
		Ext.ToolTip.superclass.beforeDestroy.call(this)
	},
	onDestroy : function() {
		Ext.getDoc().un("mousedown", this.onDocMouseDown, this);
		Ext.ToolTip.superclass.onDestroy.call(this)
	}
});
Ext.reg("tooltip", Ext.ToolTip);
Ext.QuickTip = Ext.extend(Ext.ToolTip, {
			interceptTitles : false,
			tagConfig : {
				namespace : "ext",
				attribute : "qtip",
				width : "qwidth",
				target : "target",
				title : "qtitle",
				hide : "hide",
				cls : "qclass",
				align : "qalign",
				anchor : "anchor"
			},
			initComponent : function() {
				this.target = this.target || Ext.getDoc();
				this.targets = this.targets || {};
				Ext.QuickTip.superclass.initComponent.call(this)
			},
			register : function(e) {
				var h = Ext.isArray(e) ? e : arguments;
				for (var g = 0, a = h.length; g < a; g++) {
					var l = h[g];
					var k = l.target;
					if (k) {
						if (Ext.isArray(k)) {
							for (var d = 0, b = k.length; d < b; d++) {
								this.targets[Ext.id(k[d])] = l
							}
						} else {
							this.targets[Ext.id(k)] = l
						}
					}
				}
			},
			unregister : function(a) {
				delete this.targets[Ext.id(a)]
			},
			cancelShow : function(b) {
				var a = this.activeTarget;
				b = Ext.get(b).dom;
				if (this.isVisible()) {
					if (a && a.el == b) {
						this.hide()
					}
				} else {
					if (a && a.el == b) {
						this.clearTimer("show")
					}
				}
			},
			getTipCfg : function(d) {
				var b = d.getTarget(), c, a;
				if (this.interceptTitles && b.title && Ext.isString(b.title)) {
					c = b.title;
					b.qtip = c;
					b.removeAttribute("title");
					d.preventDefault()
				} else {
					a = this.tagConfig;
					c = b.qtip
							|| Ext.fly(b)
									.getAttribute(a.attribute, a.namespace)
				}
				return c
			},
			onTargetOver : function(j) {
				if (this.disabled) {
					return
				}
				this.targetXY = j.getXY();
				var c = j.getTarget();
				if (!c || c.nodeType !== 1 || c == document
						|| c == document.body) {
					return
				}
				if (this.activeTarget
						&& ((c == this.activeTarget.el) || Ext
								.fly(this.activeTarget.el).contains(c))) {
					this.clearTimer("hide");
					this.show();
					return
				}
				if (c && this.targets[c.id]) {
					this.activeTarget = this.targets[c.id];
					this.activeTarget.el = c;
					this.anchor = this.activeTarget.anchor;
					if (this.anchor) {
						this.anchorTarget = c
					}
					this.delayShow();
					return
				}
				var g, h = Ext.fly(c), b = this.tagConfig, d = b.namespace;
				if (g = this.getTipCfg(j)) {
					var a = h.getAttribute(b.hide, d);
					this.activeTarget = {
						el : c,
						text : g,
						width : h.getAttribute(b.width, d),
						autoHide : a != "user" && a !== "false",
						title : h.getAttribute(b.title, d),
						cls : h.getAttribute(b.cls, d),
						align : h.getAttribute(b.align, d)
					};
					this.anchor = h.getAttribute(b.anchor, d);
					if (this.anchor) {
						this.anchorTarget = c
					}
					this.delayShow()
				}
			},
			onTargetOut : function(a) {
				if (this.activeTarget && a.within(this.activeTarget.el)
						&& !this.getTipCfg(a)) {
					return
				}
				this.clearTimer("show");
				if (this.autoHide !== false) {
					this.delayHide()
				}
			},
			showAt : function(b) {
				var a = this.activeTarget;
				if (a) {
					if (!this.rendered) {
						this.render(Ext.getBody());
						this.activeTarget = a
					}
					if (a.width) {
						this.setWidth(a.width);
						this.body.setWidth(this.adjustBodyWidth(a.width
								- this.getFrameWidth()));
						this.measureWidth = false
					} else {
						this.measureWidth = true
					}
					this.setTitle(a.title || "");
					this.body.update(a.text);
					this.autoHide = a.autoHide;
					this.dismissDelay = a.dismissDelay || this.dismissDelay;
					if (this.lastCls) {
						this.el.removeClass(this.lastCls);
						delete this.lastCls
					}
					if (a.cls) {
						this.el.addClass(a.cls);
						this.lastCls = a.cls
					}
					if (this.anchor) {
						this.constrainPosition = false
					} else {
						if (a.align) {
							b = this.el.getAlignToXY(a.el, a.align);
							this.constrainPosition = false
						} else {
							this.constrainPosition = true
						}
					}
				}
				Ext.QuickTip.superclass.showAt.call(this, b)
			},
			hide : function() {
				delete this.activeTarget;
				Ext.QuickTip.superclass.hide.call(this)
			}
		});
Ext.reg("quicktip", Ext.QuickTip);
Ext.QuickTips = function() {
	var b, a = [];
	return {
		init : function(c) {
			if (!b) {
				if (!Ext.isReady) {
					Ext.onReady(function() {
								Ext.QuickTips.init(c)
							});
					return
				}
				b = new Ext.QuickTip({
							elements : "header,body"
						});
				if (c !== false) {
					b.render(Ext.getBody())
				}
			}
		},
		enable : function() {
			if (b) {
				a.pop();
				if (a.length < 1) {
					b.enable()
				}
			}
		},
		disable : function() {
			if (b) {
				b.disable()
			}
			a.push(1)
		},
		isEnabled : function() {
			return b !== undefined && !b.disabled
		},
		getQuickTip : function() {
			return b
		},
		register : function() {
			b.register.apply(b, arguments)
		},
		unregister : function() {
			b.unregister.apply(b, arguments)
		},
		tips : function() {
			b.register.apply(b, arguments)
		}
	}
}();
Ext.tree.TreePanel = Ext.extend(Ext.Panel, {
			rootVisible : true,
			animate : Ext.enableFx,
			lines : true,
			enableDD : false,
			hlDrop : Ext.enableFx,
			pathSeparator : "/",
			bubbleEvents : [],
			initComponent : function() {
				Ext.tree.TreePanel.superclass.initComponent.call(this);
				if (!this.eventModel) {
					this.eventModel = new Ext.tree.TreeEventModel(this)
				}
				var a = this.loader;
				if (!a) {
					a = new Ext.tree.TreeLoader({
								dataUrl : this.dataUrl,
								requestMethod : this.requestMethod
							})
				} else {
					if (Ext.isObject(a) && !a.load) {
						a = new Ext.tree.TreeLoader(a)
					}
				}
				this.loader = a;
				this.nodeHash = {};
				if (this.root) {
					var b = this.root;
					delete this.root;
					this.setRootNode(b)
				}
				this.addEvents("append", "remove", "movenode", "insert",
						"beforeappend", "beforeremove", "beforemovenode",
						"beforeinsert", "beforeload", "load", "textchange",
						"beforeexpandnode", "beforecollapsenode", "expandnode",
						"disabledchange", "collapsenode", "beforeclick",
						"click", "containerclick", "checkchange",
						"beforedblclick", "dblclick", "containerdblclick",
						"contextmenu", "containercontextmenu",
						"beforechildrenrendered", "startdrag", "enddrag",
						"dragdrop", "beforenodedrop", "nodedrop",
						"nodedragover");
				if (this.singleExpand) {
					this.on("beforeexpandnode", this.restrictExpand, this)
				}
			},
			proxyNodeEvent : function(c, b, a, h, g, e, d) {
				if (c == "collapse" || c == "expand" || c == "beforecollapse"
						|| c == "beforeexpand" || c == "move"
						|| c == "beforemove") {
					c = c + "node"
				}
				return this.fireEvent(c, b, a, h, g, e, d)
			},
			getRootNode : function() {
				return this.root
			},
			setRootNode : function(b) {
				Ext.destroy(this.root);
				if (!b.render) {
					b = this.loader.createNode(b)
				}
				this.root = b;
				b.ownerTree = this;
				b.isRoot = true;
				this.registerNode(b);
				if (!this.rootVisible) {
					var a = b.attributes.uiProvider;
					b.ui = a ? new a(b) : new Ext.tree.RootTreeNodeUI(b)
				}
				if (this.innerCt) {
					this.innerCt.update("");
					this.afterRender()
				}
				return b
			},
			getNodeById : function(a) {
				return this.nodeHash[a]
			},
			registerNode : function(a) {
				this.nodeHash[a.id] = a
			},
			unregisterNode : function(a) {
				delete this.nodeHash[a.id]
			},
			toString : function() {
				return "[Tree" + (this.id ? " " + this.id : "") + "]"
			},
			restrictExpand : function(a) {
				var b = a.parentNode;
				if (b) {
					if (b.expandedChild && b.expandedChild.parentNode == b) {
						b.expandedChild.collapse()
					}
					b.expandedChild = a
				}
			},
			getChecked : function(b, c) {
				c = c || this.root;
				var d = [];
				var e = function() {
					if (this.attributes.checked) {
						d.push(!b ? this : (b == "id"
								? this.id
								: this.attributes[b]))
					}
				};
				c.cascade(e);
				return d
			},
			getLoader : function() {
				return this.loader
			},
			expandAll : function() {
				this.root.expand(true)
			},
			collapseAll : function() {
				this.root.collapse(true)
			},
			getSelectionModel : function() {
				if (!this.selModel) {
					this.selModel = new Ext.tree.DefaultSelectionModel()
				}
				return this.selModel
			},
			expandPath : function(g, a, h) {
				a = a || "id";
				var d = g.split(this.pathSeparator);
				var c = this.root;
				if (c.attributes[a] != d[1]) {
					if (h) {
						h(false, null)
					}
					return
				}
				var b = 1;
				var e = function() {
					if (++b == d.length) {
						if (h) {
							h(true, c)
						}
						return
					}
					var j = c.findChild(a, d[b]);
					if (!j) {
						if (h) {
							h(false, c)
						}
						return
					}
					c = j;
					j.expand(false, false, e)
				};
				c.expand(false, false, e)
			},
			selectPath : function(e, a, g) {
				a = a || "id";
				var c = e.split(this.pathSeparator), b = c.pop();
				if (c.length > 1) {
					var d = function(j, h) {
						if (j && h) {
							var k = h.findChild(a, b);
							if (k) {
								k.select();
								if (g) {
									g(true, k)
								}
							} else {
								if (g) {
									g(false, k)
								}
							}
						} else {
							if (g) {
								g(false, k)
							}
						}
					};
					this.expandPath(c.join(this.pathSeparator), a, d)
				} else {
					this.root.select();
					if (g) {
						g(true, this.root)
					}
				}
			},
			getTreeEl : function() {
				return this.body
			},
			onRender : function(b, a) {
				Ext.tree.TreePanel.superclass.onRender.call(this, b, a);
				this.el.addClass("x-tree");
				this.innerCt = this.body.createChild({
							tag : "ul",
							cls : "x-tree-root-ct "
									+ (this.useArrows
											? "x-tree-arrows"
											: this.lines
													? "x-tree-lines"
													: "x-tree-no-lines")
						})
			},
			initEvents : function() {
				Ext.tree.TreePanel.superclass.initEvents.call(this);
				if (this.containerScroll) {
					Ext.dd.ScrollManager.register(this.body)
				}
				if ((this.enableDD || this.enableDrop) && !this.dropZone) {
					this.dropZone = new Ext.tree.TreeDropZone(this,
							this.dropConfig || {
								ddGroup : this.ddGroup || "TreeDD",
								appendOnly : this.ddAppendOnly === true
							})
				}
				if ((this.enableDD || this.enableDrag) && !this.dragZone) {
					this.dragZone = new Ext.tree.TreeDragZone(this,
							this.dragConfig || {
								ddGroup : this.ddGroup || "TreeDD",
								scroll : this.ddScroll
							})
				}
				this.getSelectionModel().init(this)
			},
			afterRender : function() {
				Ext.tree.TreePanel.superclass.afterRender.call(this);
				this.root.render();
				if (!this.rootVisible) {
					this.root.renderChildren()
				}
			},
			beforeDestroy : function() {
				if (this.rendered) {
					Ext.dd.ScrollManager.unregister(this.body);
					Ext.destroy(this.dropZone, this.dragZone)
				}
				Ext.destroy(this.root, this.loader);
				this.nodeHash = this.root = this.loader = null;
				Ext.tree.TreePanel.superclass.beforeDestroy.call(this)
			}
		});
Ext.tree.TreePanel.nodeTypes = {};
Ext.reg("treepanel", Ext.tree.TreePanel);
Ext.tree.TreeEventModel = function(a) {
	this.tree = a;
	this.tree.on("render", this.initEvents, this)
};
Ext.tree.TreeEventModel.prototype = {
	initEvents : function() {
		var a = this.tree;
		if (a.trackMouseOver !== false) {
			a.mon(a.innerCt, {
						scope : this,
						mouseover : this.delegateOver,
						mouseout : this.delegateOut
					})
		}
		a.mon(a.getTreeEl(), {
					scope : this,
					click : this.delegateClick,
					dblclick : this.delegateDblClick,
					contextmenu : this.delegateContextMenu
				})
	},
	getNode : function(b) {
		var a;
		if (a = b.getTarget(".x-tree-node-el", 10)) {
			var c = Ext.fly(a, "_treeEvents").getAttribute("tree-node-id",
					"ext")||a.getAttribute('ext:tree-node-id');;
			if (c) {
				return this.tree.getNodeById(c)
			}
		}
		return null
	},
	getNodeTarget : function(b) {
		var a = b.getTarget(".x-tree-node-icon", 1);
		if (!a) {
			a = b.getTarget(".x-tree-node-el", 6)
		}
		return a
	},
	delegateOut : function(b, a) {
		if (!this.beforeEvent(b)) {
			return
		}
		if (b.getTarget(".x-tree-ec-icon", 1)) {
			var c = this.getNode(b);
			this.onIconOut(b, c);
			if (c == this.lastEcOver) {
				delete this.lastEcOver
			}
		}
		if ((a = this.getNodeTarget(b)) && !b.within(a, true)) {
			this.onNodeOut(b, this.getNode(b))
		}
	},
	delegateOver : function(b, a) {
		if (!this.beforeEvent(b)) {
			return
		}
		if (Ext.isGecko && !this.trackingDoc) {
			Ext.getBody().on("mouseover", this.trackExit, this);
			this.trackingDoc = true
		}
		if (this.lastEcOver) {
			this.onIconOut(b, this.lastEcOver);
			delete this.lastEcOver
		}
		if (b.getTarget(".x-tree-ec-icon", 1)) {
			this.lastEcOver = this.getNode(b);
			this.onIconOver(b, this.lastEcOver)
		}
		if (a = this.getNodeTarget(b)) {
			this.onNodeOver(b, this.getNode(b))
		}
	},
	trackExit : function(a) {
		if (this.lastOverNode && !a.within(this.lastOverNode.ui.getEl())) {
			this.onNodeOut(a, this.lastOverNode);
			delete this.lastOverNode;
			Ext.getBody().un("mouseover", this.trackExit, this);
			this.trackingDoc = false
		}
	},
	delegateClick : function(b, a) {
		if (this.beforeEvent(b)) {
			if (b.getTarget("input[type=checkbox]", 1)) {
				this.onCheckboxClick(b, this.getNode(b))
			} else {
				if (b.getTarget(".x-tree-ec-icon", 1)) {
					this.onIconClick(b, this.getNode(b))
				} else {
					if (this.getNodeTarget(b)) {
						this.onNodeClick(b, this.getNode(b))
					} else {
						this.onContainerEvent(b, "click")
					}
				}
			}
		}
	},
	delegateDblClick : function(b, a) {
		if (this.beforeEvent(b)) {
			if (this.getNodeTarget(b)) {
				this.onNodeDblClick(b, this.getNode(b))
			} else {
				this.onContainerEvent(b, "dblclick")
			}
		}
	},
	delegateContextMenu : function(b, a) {
		if (this.beforeEvent(b)) {
			if (this.getNodeTarget(b)) {
				this.onNodeContextMenu(b, this.getNode(b))
			} else {
				this.onContainerEvent(b, "contextmenu")
			}
		}
	},
	onContainerEvent : function(b, a) {
		this.tree.fireEvent("container" + a, this.tree, b)
	},
	onNodeClick : function(b, a) {
		a.ui.onClick(b)
	},
	onNodeOver : function(b, a) {
		this.lastOverNode = a;
		a.ui.onOver(b)
	},
	onNodeOut : function(b, a) {
		a.ui.onOut(b)
	},
	onIconOver : function(b, a) {
		a.ui.addClass("x-tree-ec-over")
	},
	onIconOut : function(b, a) {
		a.ui.removeClass("x-tree-ec-over")
	},
	onIconClick : function(b, a) {
		a.ui.ecClick(b)
	},
	onCheckboxClick : function(b, a) {
		a.ui.onCheckChange(b)
	},
	onNodeDblClick : function(b, a) {
		a.ui.onDblClick(b)
	},
	onNodeContextMenu : function(b, a) {
		a.ui.onContextMenu(b)
	},
	beforeEvent : function(a) {
		if (this.disabled) {
			a.stopEvent();
			return false
		}
		return true
	},
	disable : function() {
		this.disabled = true
	},
	enable : function() {
		this.disabled = false
	}
};
Ext.tree.DefaultSelectionModel = function(a) {
	this.selNode = null;
	this.addEvents("selectionchange", "beforeselect");
	Ext.apply(this, a);
	Ext.tree.DefaultSelectionModel.superclass.constructor.call(this)
};
Ext.extend(Ext.tree.DefaultSelectionModel, Ext.util.Observable, {
	init : function(a) {
		this.tree = a;
		a.mon(a.getTreeEl(), "keydown", this.onKeyDown, this);
		a.on("click", this.onNodeClick, this)
	},
	onNodeClick : function(a, b) {
		this.select(a)
	},
	select : function(c, a) {
		if (!Ext.fly(c.ui.wrap).isVisible() && a) {
			return a.call(this, c)
		}
		var b = this.selNode;
		if (c == b) {
			c.ui.onSelectedChange(true)
		} else {
			if (this.fireEvent("beforeselect", this, c, b) !== false) {
				if (b && b.ui) {
					b.ui.onSelectedChange(false)
				}
				this.selNode = c;
				c.ui.onSelectedChange(true);
				this.fireEvent("selectionchange", this, c, b)
			}
		}
		return c
	},
	unselect : function(b, a) {
		if (this.selNode == b) {
			this.clearSelections(a)
		}
	},
	clearSelections : function(a) {
		var b = this.selNode;
		if (b) {
			b.ui.onSelectedChange(false);
			this.selNode = null;
			if (a !== true) {
				this.fireEvent("selectionchange", this, null)
			}
		}
		return b
	},
	getSelectedNode : function() {
		return this.selNode
	},
	isSelected : function(a) {
		return this.selNode == a
	},
	selectPrevious : function(a) {
		if (!(a = a || this.selNode || this.lastSelNode)) {
			return null
		}
		var c = a.previousSibling;
		if (c) {
			if (!c.isExpanded() || c.childNodes.length < 1) {
				return this.select(c, this.selectPrevious)
			} else {
				var b = c.lastChild;
				while (b && b.isExpanded() && Ext.fly(b.ui.wrap).isVisible()
						&& b.childNodes.length > 0) {
					b = b.lastChild
				}
				return this.select(b, this.selectPrevious)
			}
		} else {
			if (a.parentNode && (this.tree.rootVisible || !a.parentNode.isRoot)) {
				return this.select(a.parentNode, this.selectPrevious)
			}
		}
		return null
	},
	selectNext : function(b) {
		if (!(b = b || this.selNode || this.lastSelNode)) {
			return null
		}
		if (b.firstChild && b.isExpanded() && Ext.fly(b.ui.wrap).isVisible()) {
			return this.select(b.firstChild, this.selectNext)
		} else {
			if (b.nextSibling) {
				return this.select(b.nextSibling, this.selectNext)
			} else {
				if (b.parentNode) {
					var a = null;
					b.parentNode.bubble(function() {
								if (this.nextSibling) {
									a = this.getOwnerTree().selModel.select(
											this.nextSibling, this.selectNext);
									return false
								}
							});
					return a
				}
			}
		}
		return null
	},
	onKeyDown : function(c) {
		var b = this.selNode || this.lastSelNode;
		var d = this;
		if (!b) {
			return
		}
		var a = c.getKey();
		switch (a) {
			case c.DOWN :
				c.stopEvent();
				this.selectNext();
				break;
			case c.UP :
				c.stopEvent();
				this.selectPrevious();
				break;
			case c.RIGHT :
				c.preventDefault();
				if (b.hasChildNodes()) {
					if (!b.isExpanded()) {
						b.expand()
					} else {
						if (b.firstChild) {
							this.select(b.firstChild, c)
						}
					}
				}
				break;
			case c.LEFT :
				c.preventDefault();
				if (b.hasChildNodes() && b.isExpanded()) {
					b.collapse()
				} else {
					if (b.parentNode
							&& (this.tree.rootVisible || b.parentNode != this.tree
									.getRootNode())) {
						this.select(b.parentNode, c)
					}
				}
				break
		}
	}
});
Ext.tree.MultiSelectionModel = function(a) {
	this.selNodes = [];
	this.selMap = {};
	this.addEvents("selectionchange");
	Ext.apply(this, a);
	Ext.tree.MultiSelectionModel.superclass.constructor.call(this)
};
Ext.extend(Ext.tree.MultiSelectionModel, Ext.util.Observable, {
			init : function(a) {
				this.tree = a;
				a.mon(a.getTreeEl(), "keydown", this.onKeyDown, this);
				a.on("click", this.onNodeClick, this)
			},
			onNodeClick : function(a, b) {
				if (b.ctrlKey && this.isSelected(a)) {
					this.unselect(a)
				} else {
					this.select(a, b, b.ctrlKey)
				}
			},
			select : function(a, c, b) {
				if (b !== true) {
					this.clearSelections(true)
				}
				if (this.isSelected(a)) {
					this.lastSelNode = a;
					return a
				}
				this.selNodes.push(a);
				this.selMap[a.id] = a;
				this.lastSelNode = a;
				a.ui.onSelectedChange(true);
				this.fireEvent("selectionchange", this, this.selNodes);
				return a
			},
			unselect : function(b) {
				if (this.selMap[b.id]) {
					b.ui.onSelectedChange(false);
					var c = this.selNodes;
					var a = c.indexOf(b);
					if (a != -1) {
						this.selNodes.splice(a, 1)
					}
					delete this.selMap[b.id];
					this.fireEvent("selectionchange", this, this.selNodes)
				}
			},
			clearSelections : function(b) {
				var d = this.selNodes;
				if (d.length > 0) {
					for (var c = 0, a = d.length; c < a; c++) {
						d[c].ui.onSelectedChange(false)
					}
					this.selNodes = [];
					this.selMap = {};
					if (b !== true) {
						this.fireEvent("selectionchange", this, this.selNodes)
					}
				}
			},
			isSelected : function(a) {
				return this.selMap[a.id] ? true : false
			},
			getSelectedNodes : function() {
				return this.selNodes
			},
			onKeyDown : Ext.tree.DefaultSelectionModel.prototype.onKeyDown,
			selectNext : Ext.tree.DefaultSelectionModel.prototype.selectNext,
			selectPrevious : Ext.tree.DefaultSelectionModel.prototype.selectPrevious
		});
Ext.data.Tree = function(a) {
	this.nodeHash = {};
	this.root = null;
	if (a) {
		this.setRootNode(a)
	}
	this.addEvents("append", "remove", "move", "insert", "beforeappend",
			"beforeremove", "beforemove", "beforeinsert");
	Ext.data.Tree.superclass.constructor.call(this)
};
Ext.extend(Ext.data.Tree, Ext.util.Observable, {
			pathSeparator : "/",
			proxyNodeEvent : function() {
				return this.fireEvent.apply(this, arguments)
			},
			getRootNode : function() {
				return this.root
			},
			setRootNode : function(a) {
				this.root = a;
				a.ownerTree = this;
				a.isRoot = true;
				this.registerNode(a);
				return a
			},
			getNodeById : function(a) {
				return this.nodeHash[a]
			},
			registerNode : function(a) {
				this.nodeHash[a.id] = a
			},
			unregisterNode : function(a) {
				delete this.nodeHash[a.id]
			},
			toString : function() {
				return "[Tree" + (this.id ? " " + this.id : "") + "]"
			}
		});
Ext.data.Node = function(a) {
	this.attributes = a || {};
	this.leaf = this.attributes.leaf;
	this.id = this.attributes.id;
	if (!this.id) {
		this.id = Ext.id(null, "xnode-");
		this.attributes.id = this.id
	}
	this.childNodes = [];
	if (!this.childNodes.indexOf) {
		this.childNodes.indexOf = function(d) {
			for (var c = 0, b = this.length; c < b; c++) {
				if (this[c] == d) {
					return c
				}
			}
			return -1
		}
	}
	this.parentNode = null;
	this.firstChild = null;
	this.lastChild = null;
	this.previousSibling = null;
	this.nextSibling = null;
	this.addEvents({
				append : true,
				remove : true,
				move : true,
				insert : true,
				beforeappend : true,
				beforeremove : true,
				beforemove : true,
				beforeinsert : true
			});
	this.listeners = this.attributes.listeners;
	Ext.data.Node.superclass.constructor.call(this)
};
Ext.extend(Ext.data.Node, Ext.util.Observable, {
	fireEvent : function(b) {
		if (Ext.data.Node.superclass.fireEvent.apply(this, arguments) === false) {
			return false
		}
		var a = this.getOwnerTree();
		if (a) {
			if (a.proxyNodeEvent.apply(a, arguments) === false) {
				return false
			}
		}
		return true
	},
	isLeaf : function() {
		return this.leaf === true
	},
	setFirstChild : function(a) {
		this.firstChild = a
	},
	setLastChild : function(a) {
		this.lastChild = a
	},
	isLast : function() {
		return (!this.parentNode ? true : this.parentNode.lastChild == this)
	},
	isFirst : function() {
		return (!this.parentNode ? true : this.parentNode.firstChild == this)
	},
	hasChildNodes : function() {
		return !this.isLeaf() && this.childNodes.length > 0
	},
	isExpandable : function() {
		return this.attributes.expandable || this.hasChildNodes()
	},
	appendChild : function(e) {
		var g = false;
		if (Ext.isArray(e)) {
			g = e
		} else {
			if (arguments.length > 1) {
				g = arguments
			}
		}
		if (g) {
			for (var d = 0, a = g.length; d < a; d++) {
				this.appendChild(g[d])
			}
		} else {
			if (this.fireEvent("beforeappend", this.ownerTree, this, e) === false) {
				return false
			}
			var b = this.childNodes.length;
			var c = e.parentNode;
			if (c) {
				if (e.fireEvent("beforemove", e.getOwnerTree(), e, c, this, b) === false) {
					return false
				}
				c.removeChild(e)
			}
			b = this.childNodes.length;
			if (b === 0) {
				this.setFirstChild(e)
			}
			this.childNodes.push(e);
			e.parentNode = this;
			var h = this.childNodes[b - 1];
			if (h) {
				e.previousSibling = h;
				h.nextSibling = e
			} else {
				e.previousSibling = null
			}
			e.nextSibling = null;
			this.setLastChild(e);
			e.setOwnerTree(this.getOwnerTree());
			this.fireEvent("append", this.ownerTree, this, e, b);
			if (c) {
				e.fireEvent("move", this.ownerTree, e, c, this, b)
			}
			return e
		}
	},
	removeChild : function(c, b) {
		var a = this.childNodes.indexOf(c);
		if (a == -1) {
			return false
		}
		if (this.fireEvent("beforeremove", this.ownerTree, this, c) === false) {
			return false
		}
		this.childNodes.splice(a, 1);
		if (c.previousSibling) {
			c.previousSibling.nextSibling = c.nextSibling
		}
		if (c.nextSibling) {
			c.nextSibling.previousSibling = c.previousSibling
		}
		if (this.firstChild == c) {
			this.setFirstChild(c.nextSibling)
		}
		if (this.lastChild == c) {
			this.setLastChild(c.previousSibling)
		}
		c.clear();
		this.fireEvent("remove", this.ownerTree, this, c);
		if (b) {
			c.destroy()
		}
		return c
	},
	clear : function(a) {
		this.setOwnerTree(null, a);
		this.parentNode = this.previousSibling = this.nextSibling = null;
		if (a) {
			this.firstChild = this.lastChild = null
		}
	},
	destroy : function() {
		this.purgeListeners();
		this.clear(true);
		Ext.each(this.childNodes, function(a) {
					a.destroy()
				});
		this.childNodes = null
	},
	insertBefore : function(d, a) {
		if (!a) {
			return this.appendChild(d)
		}
		if (d == a) {
			return false
		}
		if (this.fireEvent("beforeinsert", this.ownerTree, this, d, a) === false) {
			return false
		}
		var b = this.childNodes.indexOf(a);
		var c = d.parentNode;
		var e = b;
		if (c == this && this.childNodes.indexOf(d) < b) {
			e--
		}
		if (c) {
			if (d.fireEvent("beforemove", d.getOwnerTree(), d, c, this, b, a) === false) {
				return false
			}
			c.removeChild(d)
		}
		if (e === 0) {
			this.setFirstChild(d)
		}
		this.childNodes.splice(e, 0, d);
		d.parentNode = this;
		var g = this.childNodes[e - 1];
		if (g) {
			d.previousSibling = g;
			g.nextSibling = d
		} else {
			d.previousSibling = null
		}
		d.nextSibling = a;
		a.previousSibling = d;
		d.setOwnerTree(this.getOwnerTree());
		this.fireEvent("insert", this.ownerTree, this, d, a);
		if (c) {
			d.fireEvent("move", this.ownerTree, d, c, this, e, a)
		}
		return d
	},
	remove : function(a) {
		this.parentNode.removeChild(this, a);
		return this
	},
	item : function(a) {
		return this.childNodes[a]
	},
	replaceChild : function(a, c) {
		var b = c ? c.nextSibling : null;
		this.removeChild(c);
		this.insertBefore(a, b);
		return c
	},
	indexOf : function(a) {
		return this.childNodes.indexOf(a)
	},
	getOwnerTree : function() {
		if (!this.ownerTree) {
			var a = this;
			while (a) {
				if (a.ownerTree) {
					this.ownerTree = a.ownerTree;
					break
				}
				a = a.parentNode
			}
		}
		return this.ownerTree
	},
	getDepth : function() {
		var b = 0;
		var a = this;
		while (a.parentNode) {
			++b;
			a = a.parentNode
		}
		return b
	},
	setOwnerTree : function(a, b) {
		if (a != this.ownerTree) {
			if (this.ownerTree) {
				this.ownerTree.unregisterNode(this)
			}
			this.ownerTree = a;
			if (b !== true) {
				Ext.each(this.childNodes, function(c) {
							c.setOwnerTree(a)
						})
			}
			if (a) {
				a.registerNode(this)
			}
		}
	},
	setId : function(b) {
		if (b !== this.id) {
			var a = this.ownerTree;
			if (a) {
				a.unregisterNode(this)
			}
			this.id = this.attributes.id = b;
			if (a) {
				a.registerNode(this)
			}
			this.onIdChange(b)
		}
	},
	onIdChange : Ext.emptyFn,
	getPath : function(c) {
		c = c || "id";
		var e = this.parentNode;
		var a = [this.attributes[c]];
		while (e) {
			a.unshift(e.attributes[c]);
			e = e.parentNode
		}
		var d = this.getOwnerTree().pathSeparator;
		return d + a.join(d)
	},
	bubble : function(c, b, a) {
		var d = this;
		while (d) {
			if (c.apply(b || d, a || [d]) === false) {
				break
			}
			d = d.parentNode
		}
	},
	cascade : function(g, e, b) {
		if (g.apply(e || this, b || [this]) !== false) {
			var d = this.childNodes;
			for (var c = 0, a = d.length; c < a; c++) {
				d[c].cascade(g, e, b)
			}
		}
	},
	eachChild : function(g, e, b) {
		var d = this.childNodes;
		for (var c = 0, a = d.length; c < a; c++) {
			if (g.apply(e || this, b || [d[c]]) === false) {
				break
			}
		}
	},
	findChild : function(d, e) {
		var c = this.childNodes;
		for (var b = 0, a = c.length; b < a; b++) {
			if (c[b].attributes[d] == e) {
				return c[b]
			}
		}
		return null
	},
	findChildBy : function(e, d) {
		var c = this.childNodes;
		for (var b = 0, a = c.length; b < a; b++) {
			if (e.call(d || c[b], c[b]) === true) {
				return c[b]
			}
		}
		return null
	},
	sort : function(e, d) {
		var c = this.childNodes;
		var a = c.length;
		if (a > 0) {
			var g = d ? function() {
				e.apply(d, arguments)
			} : e;
			c.sort(g);
			for (var b = 0; b < a; b++) {
				var h = c[b];
				h.previousSibling = c[b - 1];
				h.nextSibling = c[b + 1];
				if (b === 0) {
					this.setFirstChild(h)
				}
				if (b == a - 1) {
					this.setLastChild(h)
				}
			}
		}
	},
	contains : function(a) {
		return a.isAncestor(this)
	},
	isAncestor : function(a) {
		var b = this.parentNode;
		while (b) {
			if (b == a) {
				return true
			}
			b = b.parentNode
		}
		return false
	},
	toString : function() {
		return "[Node" + (this.id ? " " + this.id : "") + "]"
	}
});
Ext.tree.TreeNode = function(a) {
	a = a || {};
	if (Ext.isString(a)) {
		a = {
			text : a
		}
	}
	this.childrenRendered = false;
	this.rendered = false;
	Ext.tree.TreeNode.superclass.constructor.call(this, a);
	this.expanded = a.expanded === true;
	this.isTarget = a.isTarget !== false;
	this.draggable = a.draggable !== false && a.allowDrag !== false;
	this.allowChildren = a.allowChildren !== false && a.allowDrop !== false;
	this.text = a.text;
	this.disabled = a.disabled === true;
	this.hidden = a.hidden === true;
	this.addEvents("textchange", "beforeexpand", "beforecollapse", "expand",
			"disabledchange", "collapse", "beforeclick", "click",
			"checkchange", "beforedblclick", "dblclick", "contextmenu",
			"beforechildrenrendered");
	var b = this.attributes.uiProvider || this.defaultUI || Ext.tree.TreeNodeUI;
	this.ui = new b(this)
};
Ext.extend(Ext.tree.TreeNode, Ext.data.Node, {
			preventHScroll : true,
			isExpanded : function() {
				return this.expanded
			},
			getUI : function() {
				return this.ui
			},
			getLoader : function() {
				var a;
				return this.loader
						|| ((a = this.getOwnerTree()) && a.loader
								? a.loader
								: (this.loader = new Ext.tree.TreeLoader()))
			},
			setFirstChild : function(a) {
				var b = this.firstChild;
				Ext.tree.TreeNode.superclass.setFirstChild.call(this, a);
				if (this.childrenRendered && b && a != b) {
					b.renderIndent(true, true)
				}
				if (this.rendered) {
					this.renderIndent(true, true)
				}
			},
			setLastChild : function(b) {
				var a = this.lastChild;
				Ext.tree.TreeNode.superclass.setLastChild.call(this, b);
				if (this.childrenRendered && a && b != a) {
					a.renderIndent(true, true)
				}
				if (this.rendered) {
					this.renderIndent(true, true)
				}
			},
			appendChild : function(b) {
				if (!b.render && !Ext.isArray(b)) {
					b = this.getLoader().createNode(b)
				}
				var a = Ext.tree.TreeNode.superclass.appendChild.call(this, b);
				if (a && this.childrenRendered) {
					a.render()
				}
				this.ui.updateExpandIcon();
				return a
			},
			removeChild : function(b, a) {
				this.ownerTree.getSelectionModel().unselect(b);
				Ext.tree.TreeNode.superclass.removeChild.apply(this, arguments);
				if (b.ui.rendered) {
					b.ui.remove()
				}
				if (this.childNodes.length < 1) {
					this.collapse(false, false)
				} else {
					this.ui.updateExpandIcon()
				}
				if (!this.firstChild && !this.isHiddenRoot()) {
					this.childrenRendered = false
				}
				return b
			},
			insertBefore : function(c, a) {
				if (!c.render) {
					c = this.getLoader().createNode(c)
				}
				var b = Ext.tree.TreeNode.superclass.insertBefore.call(this, c,
						a);
				if (b && a && this.childrenRendered) {
					c.render()
				}
				this.ui.updateExpandIcon();
				return b
			},
			setText : function(b) {
				var a = this.text;
				this.text = this.attributes.text = b;
				if (this.rendered) {
					this.ui.onTextChange(this, b, a)
				}
				this.fireEvent("textchange", this, b, a)
			},
			select : function() {
				var a = this.getOwnerTree();
				if (a) {
					a.getSelectionModel().select(this)
				}
			},
			unselect : function(a) {
				var b = this.getOwnerTree();
				if (b) {
					b.getSelectionModel().unselect(this, a)
				}
			},
			isSelected : function() {
				var a = this.getOwnerTree();
				return a ? a.getSelectionModel().isSelected(this) : false
			},
			expand : function(a, c, d, b) {
				if (!this.expanded) {
					if (this.fireEvent("beforeexpand", this, a, c) === false) {
						return
					}
					if (!this.childrenRendered) {
						this.renderChildren()
					}
					this.expanded = true;
					if (!this.isHiddenRoot()
							&& (this.getOwnerTree().animate && c !== false)
							|| c) {
						this.ui.animExpand(function() {
									this.fireEvent("expand", this);
									this.runCallback(d, b || this, [this]);
									if (a === true) {
										this.expandChildNodes(true)
									}
								}.createDelegate(this));
						return
					} else {
						this.ui.expand();
						this.fireEvent("expand", this);
						this.runCallback(d, b || this, [this])
					}
				} else {
					this.runCallback(d, b || this, [this])
				}
				if (a === true) {
					this.expandChildNodes(true)
				}
			},
			runCallback : function(a, c, b) {
				if (Ext.isFunction(a)) {
					a.apply(c, b)
				}
			},
			isHiddenRoot : function() {
				return this.isRoot && !this.getOwnerTree().rootVisible
			},
			collapse : function(b, g, h, e) {
				if (this.expanded && !this.isHiddenRoot()) {
					if (this.fireEvent("beforecollapse", this, b, g) === false) {
						return
					}
					this.expanded = false;
					if ((this.getOwnerTree().animate && g !== false) || g) {
						this.ui.animCollapse(function() {
									this.fireEvent("collapse", this);
									this.runCallback(h, e || this, [this]);
									if (b === true) {
										this.collapseChildNodes(true)
									}
								}.createDelegate(this));
						return
					} else {
						this.ui.collapse();
						this.fireEvent("collapse", this);
						this.runCallback(h, e || this, [this])
					}
				} else {
					if (!this.expanded) {
						this.runCallback(h, e || this, [this])
					}
				}
				if (b === true) {
					var d = this.childNodes;
					for (var c = 0, a = d.length; c < a; c++) {
						d[c].collapse(true, false)
					}
				}
			},
			delayedExpand : function(a) {
				if (!this.expandProcId) {
					this.expandProcId = this.expand.defer(a, this)
				}
			},
			cancelExpand : function() {
				if (this.expandProcId) {
					clearTimeout(this.expandProcId)
				}
				this.expandProcId = false
			},
			toggle : function() {
				if (this.expanded) {
					this.collapse()
				} else {
					this.expand()
				}
			},
			ensureVisible : function(c, b) {
				var a = this.getOwnerTree();
				a.expandPath(this.parentNode ? this.parentNode.getPath() : this
								.getPath(), false, function() {
							var d = a.getNodeById(this.id);
							a.getTreeEl().scrollChildIntoView(d.ui.anchor);
							this.runCallback(c, b || this, [this])
						}.createDelegate(this))
			},
			expandChildNodes : function(b) {
				var d = this.childNodes;
				for (var c = 0, a = d.length; c < a; c++) {
					d[c].expand(b)
				}
			},
			collapseChildNodes : function(b) {
				var d = this.childNodes;
				for (var c = 0, a = d.length; c < a; c++) {
					d[c].collapse(b)
				}
			},
			disable : function() {
				this.disabled = true;
				this.unselect();
				if (this.rendered && this.ui.onDisableChange) {
					this.ui.onDisableChange(this, true)
				}
				this.fireEvent("disabledchange", this, true)
			},
			enable : function() {
				this.disabled = false;
				if (this.rendered && this.ui.onDisableChange) {
					this.ui.onDisableChange(this, false)
				}
				this.fireEvent("disabledchange", this, false)
			},
			renderChildren : function(b) {
				if (b !== false) {
					this.fireEvent("beforechildrenrendered", this)
				}
				var d = this.childNodes;
				for (var c = 0, a = d.length; c < a; c++) {
					d[c].render(true)
				}
				this.childrenRendered = true
			},
			sort : function(e, d) {
				Ext.tree.TreeNode.superclass.sort.apply(this, arguments);
				if (this.childrenRendered) {
					var c = this.childNodes;
					for (var b = 0, a = c.length; b < a; b++) {
						c[b].render(true)
					}
				}
			},
			render : function(a) {
				this.ui.render(a);
				if (!this.rendered) {
					this.getOwnerTree().registerNode(this);
					this.rendered = true;
					if (this.expanded) {
						this.expanded = false;
						this.expand(false, false)
					}
				}
			},
			renderIndent : function(b, e) {
				if (e) {
					this.ui.childIndent = null
				}
				this.ui.renderIndent();
				if (b === true && this.childrenRendered) {
					var d = this.childNodes;
					for (var c = 0, a = d.length; c < a; c++) {
						d[c].renderIndent(true, e)
					}
				}
			},
			beginUpdate : function() {
				this.childrenRendered = false
			},
			endUpdate : function() {
				if (this.expanded && this.rendered) {
					this.renderChildren()
				}
			},
			destroy : function() {
				this.unselect(true);
				Ext.tree.TreeNode.superclass.destroy.call(this);
				Ext.destroy(this.ui, this.loader);
				this.ui = this.loader = null
			},
			onIdChange : function(a) {
				this.ui.onIdChange(a)
			}
		});
Ext.tree.TreePanel.nodeTypes.node = Ext.tree.TreeNode;
Ext.tree.AsyncTreeNode = function(a) {
	this.loaded = a && a.loaded === true;
	this.loading = false;
	Ext.tree.AsyncTreeNode.superclass.constructor.apply(this, arguments);
	this.addEvents("beforeload", "load")
};
Ext.extend(Ext.tree.AsyncTreeNode, Ext.tree.TreeNode, {
			expand : function(b, e, h, c) {
				if (this.loading) {
					var g;
					var d = function() {
						if (!this.loading) {
							clearInterval(g);
							this.expand(b, e, h, c)
						}
					}.createDelegate(this);
					g = setInterval(d, 200);
					return
				}
				if (!this.loaded) {
					if (this.fireEvent("beforeload", this) === false) {
						return
					}
					this.loading = true;
					this.ui.beforeLoad(this);
					var a = this.loader || this.attributes.loader
							|| this.getOwnerTree().getLoader();
					if (a) {
						a.load(this, this.loadComplete.createDelegate(this, [b,
												e, h, c]), this);
						return
					}
				}
				Ext.tree.AsyncTreeNode.superclass.expand.call(this, b, e, h, c)
			},
			isLoading : function() {
				return this.loading
			},
			loadComplete : function(a, c, d, b) {
				this.loading = false;
				this.loaded = true;
				this.ui.afterLoad(this);
				this.fireEvent("load", this);
				this.expand(a, c, d, b)
			},
			isLoaded : function() {
				return this.loaded
			},
			hasChildNodes : function() {
				if (!this.isLeaf() && !this.loaded) {
					return true
				} else {
					return Ext.tree.AsyncTreeNode.superclass.hasChildNodes
							.call(this)
				}
			},
			reload : function(b, a) {
				this.collapse(false, false);
				while (this.firstChild) {
					this.removeChild(this.firstChild).destroy()
				}
				this.childrenRendered = false;
				this.loaded = false;
				if (this.isHiddenRoot()) {
					this.expanded = false
				}
				this.expand(false, false, b, a)
			}
		});
Ext.tree.TreePanel.nodeTypes.async = Ext.tree.AsyncTreeNode;
Ext.tree.TreeNodeUI = function(a) {
	this.node = a;
	this.rendered = false;
	this.animating = false;
	this.wasLeaf = true;
	this.ecc = "x-tree-ec-icon x-tree-elbow";
	this.emptyIcon = Ext.BLANK_IMAGE_URL
};
Ext.tree.TreeNodeUI.prototype = {
	removeChild : function(a) {
		if (this.rendered) {
			this.ctNode.removeChild(a.ui.getEl())
		}
	},
	beforeLoad : function() {
		this.addClass("x-tree-node-loading")
	},
	afterLoad : function() {
		this.removeClass("x-tree-node-loading")
	},
	onTextChange : function(b, c, a) {
		if (this.rendered) {
			this.textNode.innerHTML = c
		}
	},
	onDisableChange : function(a, b) {
		this.disabled = b;
		if (this.checkbox) {
			this.checkbox.disabled = b
		}
		if (b) {
			this.addClass("x-tree-node-disabled")
		} else {
			this.removeClass("x-tree-node-disabled")
		}
	},
	onSelectedChange : function(a) {
		if (a) {
			this.focus();
			this.addClass("x-tree-selected")
		} else {
			this.removeClass("x-tree-selected")
		}
	},
	onMove : function(a, h, e, g, d, b) {
		this.childIndent = null;
		if (this.rendered) {
			var j = g.ui.getContainer();
			if (!j) {
				this.holder = document.createElement("div");
				this.holder.appendChild(this.wrap);
				return
			}
			var c = b ? b.ui.getEl() : null;
			if (c) {
				j.insertBefore(this.wrap, c)
			} else {
				j.appendChild(this.wrap)
			}
			this.node.renderIndent(true, e != g)
		}
	},
	addClass : function(a) {
		if (this.elNode) {
			Ext.fly(this.elNode).addClass(a)
		}
	},
	removeClass : function(a) {
		if (this.elNode) {
			Ext.fly(this.elNode).removeClass(a)
		}
	},
	remove : function() {
		if (this.rendered) {
			this.holder = document.createElement("div");
			this.holder.appendChild(this.wrap)
		}
	},
	fireEvent : function() {
		return this.node.fireEvent.apply(this.node, arguments)
	},
	initEvents : function() {
		this.node.on("move", this.onMove, this);
		if (this.node.disabled) {
			this.onDisableChange(this.node, true)
		}
		if (this.node.hidden) {
			this.hide()
		}
		var b = this.node.getOwnerTree();
		var a = b.enableDD || b.enableDrag || b.enableDrop;
		if (a && (!this.node.isRoot || b.rootVisible)) {
			Ext.dd.Registry.register(this.elNode, {
						node : this.node,
						handles : this.getDDHandles(),
						isHandle : false
					})
		}
	},
	getDDHandles : function() {
		return [this.iconNode, this.textNode, this.elNode]
	},
	hide : function() {
		this.node.hidden = true;
		if (this.wrap) {
			this.wrap.style.display = "none"
		}
	},
	show : function() {
		this.node.hidden = false;
		if (this.wrap) {
			this.wrap.style.display = ""
		}
	},
	onContextMenu : function(a) {
		if (this.node.hasListener("contextmenu")
				|| this.node.getOwnerTree().hasListener("contextmenu")) {
			a.preventDefault();
			this.focus();
			this.fireEvent("contextmenu", this.node, a)
		}
	},
	onClick : function(c) {
		if (this.dropping) {
			c.stopEvent();
			return
		}
		if (this.fireEvent("beforeclick", this.node, c) !== false) {
			var b = c.getTarget("a");
			if (!this.disabled && this.node.attributes.href && b) {
				this.fireEvent("click", this.node, c);
				return
			} else {
				if (b && c.ctrlKey) {
					c.stopEvent()
				}
			}
			c.preventDefault();
			if (this.disabled) {
				return
			}
			if (this.node.attributes.singleClickExpand && !this.animating
					&& this.node.isExpandable()) {
				this.node.toggle()
			}
			this.fireEvent("click", this.node, c)
		} else {
			c.stopEvent()
		}
	},
	onDblClick : function(a) {
		a.preventDefault();
		if (this.disabled) {
			return
		}
		if (this.fireEvent("beforedblclick", this.node, a) !== false) {
			if (this.checkbox) {
				this.toggleCheck()
			}
			if (!this.animating && this.node.isExpandable()) {
				this.node.toggle()
			}
			this.fireEvent("dblclick", this.node, a)
		}
	},
	onOver : function(a) {
		this.addClass("x-tree-node-over")
	},
	onOut : function(a) {
		this.removeClass("x-tree-node-over")
	},
	onCheckChange : function() {
		var a = this.checkbox.checked;
		this.checkbox.defaultChecked = a;
		this.node.attributes.checked = a;
		this.fireEvent("checkchange", this.node, a)
	},
	ecClick : function(a) {
		if (!this.animating && this.node.isExpandable()) {
			this.node.toggle()
		}
	},
	startDrop : function() {
		this.dropping = true
	},
	endDrop : function() {
		setTimeout(function() {
					this.dropping = false
				}.createDelegate(this), 50)
	},
	expand : function() {
		this.updateExpandIcon();
		this.ctNode.style.display = ""
	},
	focus : function() {
		if (!this.node.preventHScroll) {
			try {
				this.anchor.focus()
			} catch (c) {
			}
		} else {
			try {
				var b = this.node.getOwnerTree().getTreeEl().dom;
				var a = b.scrollLeft;
				this.anchor.focus();
				b.scrollLeft = a
			} catch (c) {
			}
		}
	},
	toggleCheck : function(b) {
		var a = this.checkbox;
		if (a) {
			a.checked = (b === undefined ? !a.checked : b);
			this.onCheckChange()
		}
	},
	blur : function() {
		try {
			this.anchor.blur()
		} catch (a) {
		}
	},
	animExpand : function(b) {
		var a = Ext.get(this.ctNode);
		a.stopFx();
		if (!this.node.isExpandable()) {
			this.updateExpandIcon();
			this.ctNode.style.display = "";
			Ext.callback(b);
			return
		}
		this.animating = true;
		this.updateExpandIcon();
		a.slideIn("t", {
					callback : function() {
						this.animating = false;
						Ext.callback(b)
					},
					scope : this,
					duration : this.node.ownerTree.duration || 0.25
				})
	},
	highlight : function() {
		var a = this.node.getOwnerTree();
		Ext.fly(this.wrap).highlight(a.hlColor || "C3DAF9", {
					endColor : a.hlBaseColor
				})
	},
	collapse : function() {
		this.updateExpandIcon();
		this.ctNode.style.display = "none"
	},
	animCollapse : function(b) {
		var a = Ext.get(this.ctNode);
		a.enableDisplayMode("block");
		a.stopFx();
		this.animating = true;
		this.updateExpandIcon();
		a.slideOut("t", {
					callback : function() {
						this.animating = false;
						Ext.callback(b)
					},
					scope : this,
					duration : this.node.ownerTree.duration || 0.25
				})
	},
	getContainer : function() {
		return this.ctNode
	},
	getEl : function() {
		return this.wrap
	},
	appendDDGhost : function(a) {
		a.appendChild(this.elNode.cloneNode(true))
	},
	getDDRepairXY : function() {
		return Ext.lib.Dom.getXY(this.iconNode)
	},
	onRender : function() {
		this.render()
	},
	render : function(c) {
		var e = this.node, b = e.attributes;
		var d = e.parentNode
				? e.parentNode.ui.getContainer()
				: e.ownerTree.innerCt.dom;
		if (!this.rendered) {
			this.rendered = true;
			this.renderElements(e, b, d, c);
			if (b.qtip) {
				if (this.textNode.setAttributeNS) {
					this.textNode.setAttributeNS("ext", "qtip", b.qtip);
					if (b.qtipTitle) {
						this.textNode.setAttributeNS("ext", "qtitle",
								b.qtipTitle)
					}
				} else {
					this.textNode.setAttribute("ext:qtip", b.qtip);
					if (b.qtipTitle) {
						this.textNode.setAttribute("ext:qtitle", b.qtipTitle)
					}
				}
			} else {
				if (b.qtipCfg) {
					b.qtipCfg.target = Ext.id(this.textNode);
					Ext.QuickTips.register(b.qtipCfg)
				}
			}
			this.initEvents();
			if (!this.node.expanded) {
				this.updateExpandIcon(true)
			}
		} else {
			if (c === true) {
				d.appendChild(this.wrap)
			}
		}
	},
	renderElements : function(e, l, k, m) {
		this.indentMarkup = e.parentNode
				? e.parentNode.ui.getChildIndent()
				: "";
		var g = Ext.isBoolean(l.checked), b, c = l.href ? l.href : Ext.isGecko
				? ""
				: "#", d = [
				'<li class="x-tree-node"><div ext:tree-node-id="',
				e.id,
				'" class="x-tree-node-el x-tree-node-leaf x-unselectable ',
				l.cls,
				'" unselectable="on">',
				'<span class="x-tree-node-indent">',
				this.indentMarkup,
				"</span>",
				'<img src="',
				this.emptyIcon,
				'" class="x-tree-ec-icon x-tree-elbow" />',
				'<img src="',
				l.icon || this.emptyIcon,
				'" class="x-tree-node-icon',
				(l.icon ? " x-tree-node-inline-icon" : ""),
				(l.iconCls ? " " + l.iconCls : ""),
				'" unselectable="on" />',
				g
						? ('<input class="x-tree-node-cb" type="checkbox" ' + (l.checked
								? 'checked="checked" />'
								: "/>"))
						: "",
				'<a hidefocus="on" class="x-tree-node-anchor" href="', c,
				'" tabIndex="1" ',
				l.hrefTarget ? ' target="' + l.hrefTarget + '"' : "",
				'><span unselectable="on">', e.text, "</span></a></div>",
				'<ul class="x-tree-node-ct" style="display:none;"></ul>',
				"</li>"].join("");
		if (m !== true && e.nextSibling && (b = e.nextSibling.ui.getEl())) {
			this.wrap = Ext.DomHelper.insertHtml("beforeBegin", b, d)
		} else {
			this.wrap = Ext.DomHelper.insertHtml("beforeEnd", k, d)
		}
		this.elNode = this.wrap.childNodes[0];
		this.ctNode = this.wrap.childNodes[1];
		var j = this.elNode.childNodes;
		this.indentNode = j[0];
		this.ecNode = j[1];
		this.iconNode = j[2];
		var h = 3;
		if (g) {
			this.checkbox = j[3];
			this.checkbox.defaultChecked = this.checkbox.checked;
			h++
		}
		this.anchor = j[h];
		this.textNode = j[h].firstChild
	},
	getAnchor : function() {
		return this.anchor
	},
	getTextEl : function() {
		return this.textNode
	},
	getIconEl : function() {
		return this.iconNode
	},
	isChecked : function() {
		return this.checkbox ? this.checkbox.checked : false
	},
	updateExpandIcon : function() {
		if (this.rendered) {
			var g = this.node, d, c, a = g.isLast()
					? "x-tree-elbow-end"
					: "x-tree-elbow", e = g.hasChildNodes();
			if (e || g.attributes.expandable) {
				if (g.expanded) {
					a += "-minus";
					d = "x-tree-node-collapsed";
					c = "x-tree-node-expanded"
				} else {
					a += "-plus";
					d = "x-tree-node-expanded";
					c = "x-tree-node-collapsed"
				}
				if (this.wasLeaf) {
					this.removeClass("x-tree-node-leaf");
					this.wasLeaf = false
				}
				if (this.c1 != d || this.c2 != c) {
					Ext.fly(this.elNode).replaceClass(d, c);
					this.c1 = d;
					this.c2 = c
				}
			} else {
				if (!this.wasLeaf) {
					Ext.fly(this.elNode).replaceClass("x-tree-node-expanded",
							"x-tree-node-leaf");
					delete this.c1;
					delete this.c2;
					this.wasLeaf = true
				}
			}
			var b = "x-tree-ec-icon " + a;
			if (this.ecc != b) {
				this.ecNode.className = b;
				this.ecc = b
			}
		}
	},
	onIdChange : function(a) {
		if (this.rendered) {
			this.elNode.setAttribute("ext:tree-node-id", a)
		}
	},
	getChildIndent : function() {
		if (!this.childIndent) {
			var a = [], b = this.node;
			while (b) {
				if (!b.isRoot || (b.isRoot && b.ownerTree.rootVisible)) {
					if (!b.isLast()) {
						a.unshift('<img src="' + this.emptyIcon
								+ '" class="x-tree-elbow-line" />')
					} else {
						a.unshift('<img src="' + this.emptyIcon
								+ '" class="x-tree-icon" />')
					}
				}
				b = b.parentNode
			}
			this.childIndent = a.join("")
		}
		return this.childIndent
	},
	renderIndent : function() {
		if (this.rendered) {
			var a = "", b = this.node.parentNode;
			if (b) {
				a = b.ui.getChildIndent()
			}
			if (this.indentMarkup != a) {
				this.indentNode.innerHTML = a;
				this.indentMarkup = a
			}
			this.updateExpandIcon()
		}
	},
	destroy : function() {
		if (this.elNode) {
			Ext.dd.Registry.unregister(this.elNode.id)
		}
		Ext.each(["textnode", "anchor", "checkbox", "indentNode", "ecNode",
						"iconNode", "elNode", "ctNode", "wrap", "holder"],
				function(a) {
					if (this[a]) {
						Ext.fly(this[a]).remove();
						delete this[a]
					}
				}, this);
		delete this.node
	}
};
Ext.tree.RootTreeNodeUI = Ext.extend(Ext.tree.TreeNodeUI, {
			render : function() {
				if (!this.rendered) {
					var a = this.node.ownerTree.innerCt.dom;
					this.node.expanded = true;
					a.innerHTML = '<div class="x-tree-root-node"></div>';
					this.wrap = this.ctNode = a.firstChild
				}
			},
			collapse : Ext.emptyFn,
			expand : Ext.emptyFn
		});
Ext.tree.TreeLoader = function(a) {
	this.baseParams = {};
	Ext.apply(this, a);
	this.addEvents("beforeload", "load", "loadexception");
	Ext.tree.TreeLoader.superclass.constructor.call(this);
	if (Ext.isString(this.paramOrder)) {
		this.paramOrder = this.paramOrder.split(/[\s,|]/)
	}
};
Ext.extend(Ext.tree.TreeLoader, Ext.util.Observable, {
			uiProviders : {},
			clearOnLoad : true,
			paramOrder : undefined,
			paramsAsHash : false,
			nodeParameter : "node",
			directFn : undefined,
			load : function(b, c, a) {
				if (this.clearOnLoad) {
					while (b.firstChild) {
						b.removeChild(b.firstChild)
					}
				}
				if (this.doPreload(b)) {
					this.runCallback(c, a || b, [b])
				} else {
					if (this.directFn || this.dataUrl || this.url) {
						this.requestData(b, c, a || b)
					}
				}
			},
			doPreload : function(d) {
				if (d.attributes.children) {
					if (d.childNodes.length < 1) {
						var c = d.attributes.children;
						d.beginUpdate();
						for (var b = 0, a = c.length; b < a; b++) {
							var e = d.appendChild(this.createNode(c[b]));
							if (this.preloadChildren) {
								this.doPreload(e)
							}
						}
						d.endUpdate()
					}
					return true
				}
				return false
			},
			getParams : function(e) {
				var b = [], d = this.baseParams;
				if (this.directFn) {
					b.push(e.id);
					if (d) {
						if (this.paramOrder) {
							for (var c = 0, a = this.paramOrder.length; c < a; c++) {
								b.push(d[this.paramOrder[c]])
							}
						} else {
							if (this.paramsAsHash) {
								b.push(d)
							}
						}
					}
					return b
				} else {
					var g = Ext.apply({}, d);
					g[this.nodeParameter] = e.id;
					return g
				}
			},
			requestData : function(c, d, b) {
				if (this.fireEvent("beforeload", this, c, d) !== false) {
					if (this.directFn) {
						var a = this.getParams(c);
						a.push(this.processDirectResponse.createDelegate(this,
								[{
											callback : d,
											node : c,
											scope : b
										}], true));
						this.directFn.apply(window, a)
					} else {
						this.transId = Ext.Ajax.request({
									method : this.requestMethod,
									url : this.dataUrl || this.url,
									success : this.handleResponse,
									failure : this.handleFailure,
									scope : this,
									argument : {
										callback : d,
										node : c,
										scope : b
									},
									params : this.getParams(c)
								})
					}
				} else {
					this.runCallback(d, b || c, [])
				}
			},
			processDirectResponse : function(a, b, c) {
				if (b.status) {
					this.handleResponse({
								responseData : Ext.isArray(a) ? a : null,
								responseText : a,
								argument : c
							})
				} else {
					this.handleFailure({
								argument : c
							})
				}
			},
			runCallback : function(a, c, b) {
				if (Ext.isFunction(a)) {
					a.apply(c, b)
				}
			},
			isLoading : function() {
				return !!this.transId
			},
			abort : function() {
				if (this.isLoading()) {
					Ext.Ajax.abort(this.transId)
				}
			},
			createNode : function(attr) {
				if (this.baseAttrs) {
					Ext.applyIf(attr, this.baseAttrs)
				}
				if (this.applyLoader !== false && !attr.loader) {
					attr.loader = this
				}
				if (Ext.isString(attr.uiProvider)) {
					attr.uiProvider = this.uiProviders[attr.uiProvider]
							|| eval(attr.uiProvider)
				}
				if (attr.nodeType) {
					return new Ext.tree.TreePanel.nodeTypes[attr.nodeType](attr)
				} else {
					return attr.leaf
							? new Ext.tree.TreeNode(attr)
							: new Ext.tree.AsyncTreeNode(attr)
				}
			},
			processResponse : function(d, c, k, l) {
				var m = d.responseText;
				try {
					var a = d.responseData || Ext.decode(m);
					c.beginUpdate();
					for (var g = 0, h = a.length; g < h; g++) {
						var b = this.createNode(a[g]);
						if (b) {
							c.appendChild(b)
						}
					}
					c.endUpdate();
					this.runCallback(k, l || c, [c])
				} catch (j) {
					this.handleFailure(d)
				}
			},
			handleResponse : function(c) {
				this.transId = false;
				var b = c.argument;
				this.processResponse(c, b.node, b.callback, b.scope);
				this.fireEvent("load", this, b.node, c)
			},
			handleFailure : function(c) {
				this.transId = false;
				var b = c.argument;
				this.fireEvent("loadexception", this, b.node, c);
				this.runCallback(b.callback, b.scope || b.node, [b.node])
			},
			destroy : function() {
				this.purgeListeners()
			}
		});
Ext.tree.TreeFilter = function(a, b) {
	this.tree = a;
	this.filtered = {};
	Ext.apply(this, b)
};
Ext.tree.TreeFilter.prototype = {
	clearBlank : false,
	reverse : false,
	autoClear : false,
	remove : false,
	filter : function(d, a, b) {
		a = a || "text";
		var c;
		if (typeof d == "string") {
			var e = d.length;
			if (e == 0 && this.clearBlank) {
				this.clear();
				return
			}
			d = d.toLowerCase();
			c = function(g) {
				return g.attributes[a].substr(0, e).toLowerCase() == d
			}
		} else {
			if (d.exec) {
				c = function(g) {
					return d.test(g.attributes[a])
				}
			} else {
				throw "Illegal filter type, must be string or regex"
			}
		}
		this.filterBy(c, null, b)
	},
	filterBy : function(d, c, b) {
		b = b || this.tree.root;
		if (this.autoClear) {
			this.clear()
		}
		var a = this.filtered, j = this.reverse;
		var e = function(l) {
			if (l == b) {
				return true
			}
			if (a[l.id]) {
				return false
			}
			var k = d.call(c || l, l);
			if (!k || j) {
				a[l.id] = l;
				l.ui.hide();
				return false
			}
			return true
		};
		b.cascade(e);
		if (this.remove) {
			for (var h in a) {
				if (typeof h != "function") {
					var g = a[h];
					if (g && g.parentNode) {
						g.parentNode.removeChild(g)
					}
				}
			}
		}
	},
	clear : function() {
		var b = this.tree;
		var a = this.filtered;
		for (var d in a) {
			if (typeof d != "function") {
				var c = a[d];
				if (c) {
					c.ui.show()
				}
			}
		}
		this.filtered = {}
	}
};
Ext.tree.TreeSorter = function(b, c) {
	Ext.apply(this, c);
	b.on("beforechildrenrendered", this.doSort, this);
	b.on("append", this.updateSort, this);
	b.on("insert", this.updateSort, this);
	b.on("textchange", this.updateSortParent, this);
	var e = this.dir && this.dir.toLowerCase() == "desc";
	var g = this.property || "text";
	var h = this.sortType;
	var a = this.folderSort;
	var d = this.caseSensitive === true;
	var j = this.leafAttr || "leaf";
	this.sortFn = function(l, k) {
		if (a) {
			if (l.attributes[j] && !k.attributes[j]) {
				return 1
			}
			if (!l.attributes[j] && k.attributes[j]) {
				return -1
			}
		}
		var n = h ? h(l.attributes[g]) : (d ? l.attributes[g] : l.attributes[g]
				.toUpperCase());
		var m = h ? h(k.attributes[g]) : (d ? k.attributes[g] : k.attributes[g]
				.toUpperCase());
		if (n < m) {
			return e ? +1 : -1
		} else {
			if (n > m) {
				return e ? -1 : +1
			} else {
				return 0
			}
		}
	}
};
Ext.tree.TreeSorter.prototype = {
	doSort : function(a) {
		a.sort(this.sortFn)
	},
	compareNodes : function(b, a) {
		return (b.text.toUpperCase() > a.text.toUpperCase() ? 1 : -1)
	},
	updateSort : function(a, b) {
		if (b.childrenRendered) {
			this.doSort.defer(1, this, [b])
		}
	},
	updateSortParent : function(a) {
		var b = a.parentNode;
		if (b && b.childrenRendered) {
			this.doSort.defer(1, this, [b])
		}
	}
};
if (Ext.dd.DropZone) {
	Ext.tree.TreeDropZone = function(a, b) {
		this.allowParentInsert = b.allowParentInsert || false;
		this.allowContainerDrop = b.allowContainerDrop || false;
		this.appendOnly = b.appendOnly || false;
		Ext.tree.TreeDropZone.superclass.constructor.call(this, a.getTreeEl(),
				b);
		this.tree = a;
		this.dragOverData = {};
		this.lastInsertClass = "x-tree-no-status"
	};
	Ext.extend(Ext.tree.TreeDropZone, Ext.dd.DropZone, {
				ddGroup : "TreeDD",
				expandDelay : 1000,
				expandNode : function(a) {
					if (a.hasChildNodes() && !a.isExpanded()) {
						a.expand(false, null, this.triggerCacheRefresh
										.createDelegate(this))
					}
				},
				queueExpand : function(a) {
					this.expandProcId = this.expandNode.defer(this.expandDelay,
							this, [a])
				},
				cancelExpand : function() {
					if (this.expandProcId) {
						clearTimeout(this.expandProcId);
						this.expandProcId = false
					}
				},
				isValidDropPoint : function(a, l, j, d, c) {
					if (!a || !c) {
						return false
					}
					var g = a.node;
					var h = c.node;
					if (!(g && g.isTarget && l)) {
						return false
					}
					if (l == "append" && g.allowChildren === false) {
						return false
					}
					if ((l == "above" || l == "below")
							&& (g.parentNode && g.parentNode.allowChildren === false)) {
						return false
					}
					if (h && (g == h || h.contains(g))) {
						return false
					}
					var b = this.dragOverData;
					b.tree = this.tree;
					b.target = g;
					b.data = c;
					b.point = l;
					b.source = j;
					b.rawEvent = d;
					b.dropNode = h;
					b.cancel = false;
					var k = this.tree.fireEvent("nodedragover", b);
					return b.cancel === false && k !== false
				},
				getDropPoint : function(h, g, m) {
					var o = g.node;
					if (o.isRoot) {
						return o.allowChildren !== false ? "append" : false
					}
					var c = g.ddel;
					var p = Ext.lib.Dom.getY(c), k = p + c.offsetHeight;
					var j = Ext.lib.Event.getPageY(h);
					var l = o.allowChildren === false || o.isLeaf();
					if (this.appendOnly || o.parentNode.allowChildren === false) {
						return l ? false : "append"
					}
					var d = false;
					if (!this.allowParentInsert) {
						d = o.hasChildNodes() && o.isExpanded()
					}
					var a = (k - p) / (l ? 2 : 3);
					if (j >= p && j < (p + a)) {
						return "above"
					} else {
						if (!d && (l || j >= k - a && j <= k)) {
							return "below"
						} else {
							return "append"
						}
					}
				},
				onNodeEnter : function(d, a, c, b) {
					this.cancelExpand()
				},
				onContainerOver : function(a, c, b) {
					if (this.allowContainerDrop && this.isValidDropPoint({
								ddel : this.tree.getRootNode().ui.elNode,
								node : this.tree.getRootNode()
							}, "append", a, c, b)) {
						return this.dropAllowed
					}
					return this.dropNotAllowed
				},
				onNodeOver : function(b, j, h, g) {
					var l = this.getDropPoint(h, b, j);
					var c = b.node;
					if (!this.expandProcId && l == "append"
							&& c.hasChildNodes() && !b.node.isExpanded()) {
						this.queueExpand(c)
					} else {
						if (l != "append") {
							this.cancelExpand()
						}
					}
					var d = this.dropNotAllowed;
					if (this.isValidDropPoint(b, l, j, h, g)) {
						if (l) {
							var a = b.ddel;
							var k;
							if (l == "above") {
								d = b.node.isFirst()
										? "x-tree-drop-ok-above"
										: "x-tree-drop-ok-between";
								k = "x-tree-drag-insert-above"
							} else {
								if (l == "below") {
									d = b.node.isLast()
											? "x-tree-drop-ok-below"
											: "x-tree-drop-ok-between";
									k = "x-tree-drag-insert-below"
								} else {
									d = "x-tree-drop-ok-append";
									k = "x-tree-drag-append"
								}
							}
							if (this.lastInsertClass != k) {
								Ext.fly(a)
										.replaceClass(this.lastInsertClass, k);
								this.lastInsertClass = k
							}
						}
					}
					return d
				},
				onNodeOut : function(d, a, c, b) {
					this.cancelExpand();
					this.removeDropIndicators(d)
				},
				onNodeDrop : function(j, b, h, d) {
					var a = this.getDropPoint(h, j, b);
					var g = j.node;
					g.ui.startDrop();
					if (!this.isValidDropPoint(j, a, b, h, d)) {
						g.ui.endDrop();
						return false
					}
					var c = d.node
							|| (b.getTreeNode
									? b.getTreeNode(d, g, a, h)
									: null);
					return this.processDrop(g, d, a, b, h, c)
				},
				onContainerDrop : function(a, g, c) {
					if (this.allowContainerDrop && this.isValidDropPoint({
								ddel : this.tree.getRootNode().ui.elNode,
								node : this.tree.getRootNode()
							}, "append", a, g, c)) {
						var d = this.tree.getRootNode();
						d.ui.startDrop();
						var b = c.node
								|| (a.getTreeNode ? a.getTreeNode(c, d,
										"append", g) : null);
						return this.processDrop(d, c, "append", a, g, b)
					}
					return false
				},
				processDrop : function(k, h, b, a, j, d) {
					var g = {
						tree : this.tree,
						target : k,
						data : h,
						point : b,
						source : a,
						rawEvent : j,
						dropNode : d,
						cancel : !d,
						dropStatus : false
					};
					var c = this.tree.fireEvent("beforenodedrop", g);
					if (c === false || g.cancel === true || !g.dropNode) {
						k.ui.endDrop();
						return g.dropStatus
					}
					k = g.target;
					if (b == "append" && !k.isExpanded()) {
						k.expand(false, null, function() {
									this.completeDrop(g)
								}.createDelegate(this))
					} else {
						this.completeDrop(g)
					}
					return true
				},
				completeDrop : function(h) {
					var d = h.dropNode, e = h.point, c = h.target;
					if (!Ext.isArray(d)) {
						d = [d]
					}
					var g;
					for (var b = 0, a = d.length; b < a; b++) {
						g = d[b];
						if (e == "above") {
							c.parentNode.insertBefore(g, c)
						} else {
							if (e == "below") {
								c.parentNode.insertBefore(g, c.nextSibling)
							} else {
								c.appendChild(g)
							}
						}
					}
					g.ui.focus();
					if (Ext.enableFx && this.tree.hlDrop) {
						g.ui.highlight()
					}
					c.ui.endDrop();
					this.tree.fireEvent("nodedrop", h)
				},
				afterNodeMoved : function(a, c, g, d, b) {
					if (Ext.enableFx && this.tree.hlDrop) {
						b.ui.focus();
						b.ui.highlight()
					}
					this.tree.fireEvent("nodedrop", this.tree, d, c, a, g)
				},
				getTree : function() {
					return this.tree
				},
				removeDropIndicators : function(b) {
					if (b && b.ddel) {
						var a = b.ddel;
						Ext.fly(a).removeClass(["x-tree-drag-insert-above",
								"x-tree-drag-insert-below",
								"x-tree-drag-append"]);
						this.lastInsertClass = "_noclass"
					}
				},
				beforeDragDrop : function(b, a, c) {
					this.cancelExpand();
					return true
				},
				afterRepair : function(a) {
					if (a && Ext.enableFx) {
						a.node.ui.highlight()
					}
					this.hideProxy()
				}
			})
}
if (Ext.dd.DragZone) {
	Ext.tree.TreeDragZone = function(a, b) {
		Ext.tree.TreeDragZone.superclass.constructor.call(this, a.innerCt, b);
		this.tree = a
	};
	Ext.extend(Ext.tree.TreeDragZone, Ext.dd.DragZone, {
		ddGroup : "TreeDD",
		onBeforeDrag : function(a, b) {
			var c = a.node;
			return c && c.draggable && !c.disabled
		},
		onInitDrag : function(b) {
			var a = this.dragData;
			this.tree.getSelectionModel().select(a.node);
			this.tree.eventModel.disable();
			this.proxy.update("");
			a.node.ui.appendDDGhost(this.proxy.ghost.dom);
			this.tree.fireEvent("startdrag", this.tree, a.node, b)
		},
		getRepairXY : function(b, a) {
			return a.node.ui.getDDRepairXY()
		},
		onEndDrag : function(a, b) {
			this.tree.eventModel.enable.defer(100, this.tree.eventModel);
			this.tree.fireEvent("enddrag", this.tree, a.node, b)
		},
		onValidDrop : function(a, b, c) {
			this.tree
					.fireEvent("dragdrop", this.tree, this.dragData.node, a, b);
			this.hideProxy()
		},
		beforeInvalidDrop : function(a, c) {
			var b = this.tree.getSelectionModel();
			b.clearSelections();
			b.select(this.dragData.node)
		},
		afterRepair : function() {
			if (Ext.enableFx && this.tree.hlDrop) {
				Ext.Element.fly(this.dragData.ddel).highlight(this.hlColor
						|| "c3daf9")
			}
			this.dragging = false
		}
	})
}
Ext.tree.TreeEditor = function(a, c, b) {
	c = c || {};
	var d = c.events ? c : new Ext.form.TextField(c);
	Ext.tree.TreeEditor.superclass.constructor.call(this, d, b);
	this.tree = a;
	if (!a.rendered) {
		a.on("render", this.initEditor, this)
	} else {
		this.initEditor(a)
	}
};
Ext.extend(Ext.tree.TreeEditor, Ext.Editor, {
			alignment : "l-l",
			autoSize : false,
			hideEl : false,
			cls : "x-small-editor x-tree-editor",
			shim : false,
			shadow : "frame",
			maxWidth : 250,
			editDelay : 350,
			initEditor : function(a) {
				a.on({
							scope : this,
							beforeclick : this.beforeNodeClick,
							dblclick : this.onNodeDblClick
						});
				this.on({
							scope : this,
							complete : this.updateNode,
							beforestartedit : this.fitToTree,
							specialkey : this.onSpecialKey
						});
				this.on("startedit", this.bindScroll, this, {
							delay : 10
						})
			},
			fitToTree : function(b, c) {
				var e = this.tree.getTreeEl().dom, d = c.dom;
				if (e.scrollLeft > d.offsetLeft) {
					e.scrollLeft = d.offsetLeft
				}
				var a = Math.min(this.maxWidth, (e.clientWidth > 20
								? e.clientWidth
								: e.offsetWidth)
								- Math.max(0, d.offsetLeft - e.scrollLeft) - 5);
				this.setSize(a, "")
			},
			triggerEdit : function(a, c) {
				this.completeEdit();
				if (a.attributes.editable !== false) {
					this.editNode = a;
					if (this.tree.autoScroll) {
						Ext.fly(a.ui.getEl()).scrollIntoView(this.tree.body)
					}
					var b = a.text || "";
					if (!Ext.isGecko && Ext.isEmpty(a.text)) {
						a.setText("&#160;")
					}
					this.autoEditTimer = this.startEdit.defer(this.editDelay,
							this, [a.ui.textNode, b]);
					return false
				}
			},
			bindScroll : function() {
				this.tree.getTreeEl().on("scroll", this.cancelEdit, this)
			},
			beforeNodeClick : function(a, b) {
				clearTimeout(this.autoEditTimer);
				if (this.tree.getSelectionModel().isSelected(a)) {
					b.stopEvent();
					return this.triggerEdit(a)
				}
			},
			onNodeDblClick : function(a, b) {
				clearTimeout(this.autoEditTimer)
			},
			updateNode : function(a, b) {
				this.tree.getTreeEl().un("scroll", this.cancelEdit, this);
				this.editNode.setText(b)
			},
			onHide : function() {
				Ext.tree.TreeEditor.superclass.onHide.call(this);
				if (this.editNode) {
					this.editNode.ui.focus.defer(50, this.editNode.ui)
				}
			},
			onSpecialKey : function(c, b) {
				var a = b.getKey();
				if (a == b.ESC) {
					b.stopEvent();
					this.cancelEdit()
				} else {
					if (a == b.ENTER && !b.hasModifier()) {
						b.stopEvent();
						this.completeEdit()
					}
				}
			},
			onDestroy : function() {
				clearTimeout(this.autoEditTimer);
				Ext.tree.TreeEditor.superclass.onDestroy.call(this);
				var a = this.tree;
				a.un("beforeclick", this.beforeNodeClick, this);
				a.un("dblclick", this.onNodeDblClick, this)
			}
		});
/*
 * SWFObject v2.2 <http://code.google.com/p/swfobject/> is released under the
 * MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfobject = function() {
	var F = "undefined", t = "object", U = "Shockwave Flash", Y = "ShockwaveFlash.ShockwaveFlash", s = "application/x-shockwave-flash", T = "SWFObjectExprInst", z = "onreadystatechange", Q = window, l = document, v = navigator, V = false, W = [j], q = [], P = [], K = [], n, S, G, D, L = false, a = false, p, I, o = true, O = function() {
		var ac = typeof l.getElementById != F
				&& typeof l.getElementsByTagName != F
				&& typeof l.createElement != F, aj = v.userAgent.toLowerCase(), aa = v.platform
				.toLowerCase(), ag = aa ? /win/.test(aa) : /win/.test(aj), ae = aa
				? /mac/.test(aa)
				: /mac/.test(aj), ah = /webkit/.test(aj) ? parseFloat(aj
				.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, Z = !+"\v1", ai = [
				0, 0, 0], ad = null;
		if (typeof v.plugins != F && typeof v.plugins[U] == t) {
			ad = v.plugins[U].description;
			if (ad
					&& !(typeof v.mimeTypes != F && v.mimeTypes[s] && !v.mimeTypes[s].enabledPlugin)) {
				V = true;
				Z = false;
				ad = ad.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				ai[0] = parseInt(ad.replace(/^(.*)\..*$/, "$1"), 10);
				ai[1] = parseInt(ad.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				ai[2] = /[a-zA-Z]/.test(ad) ? parseInt(ad.replace(
								/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
			}
		} else {
			if (typeof Q.ActiveXObject != F) {
				try {
					var af = new ActiveXObject(Y);
					if (af) {
						ad = af.GetVariable("$version");
						if (ad) {
							Z = true;
							ad = ad.split(" ")[1].split(",");
							ai = [parseInt(ad[0], 10), parseInt(ad[1], 10),
									parseInt(ad[2], 10)]
						}
					}
				} catch (ab) {
				}
			}
		}
		return {
			w3 : ac,
			pv : ai,
			wk : ah,
			ie : Z,
			win : ag,
			mac : ae
		}
	}(), m = function() {
		if (!O.w3) {
			return
		}
		if ((typeof l.readyState != F && l.readyState == "complete")
				|| (typeof l.readyState == F && (l.getElementsByTagName("body")[0] || l.body))) {
			g()
		}
		if (!L) {
			if (typeof l.addEventListener != F) {
				l.addEventListener("DOMContentLoaded", g, false)
			}
			if (O.ie && O.win) {
				l.attachEvent(z, function() {
							if (l.readyState == "complete") {
								l.detachEvent(z, arguments.callee);
								g()
							}
						});
				if (Q == top) {
					(function() {
						if (L) {
							return
						}
						try {
							l.documentElement.doScroll("left")
						} catch (Z) {
							setTimeout(arguments.callee, 0);
							return
						}
						g()
					})()
				}
			}
			if (O.wk) {
				(function() {
					if (L) {
						return
					}
					if (!/loaded|complete/.test(l.readyState)) {
						setTimeout(arguments.callee, 0);
						return
					}
					g()
				})()
			}
			u(g)
		}
	}();
	function g() {
		if (L) {
			return
		}
		try {
			var ab = l.getElementsByTagName("body")[0].appendChild(E("span"));
			ab.parentNode.removeChild(ab)
		} catch (ac) {
			return
		}
		L = true;
		var Z = W.length;
		for (var aa = 0; aa < Z; aa++) {
			W[aa]()
		}
	}
	function M(Z) {
		if (L) {
			Z()
		} else {
			W[W.length] = Z
		}
	}
	function u(aa) {
		if (typeof Q.addEventListener != F) {
			Q.addEventListener("load", aa, false)
		} else {
			if (typeof l.addEventListener != F) {
				l.addEventListener("load", aa, false)
			} else {
				if (typeof Q.attachEvent != F) {
					k(Q, "onload", aa)
				} else {
					if (typeof Q.onload == "function") {
						var Z = Q.onload;
						Q.onload = function() {
							Z();
							aa()
						}
					} else {
						Q.onload = aa
					}
				}
			}
		}
	}
	function j() {
		if (V) {
			X()
		} else {
			J()
		}
	}
	function X() {
		var Z = l.getElementsByTagName("body")[0];
		var ac = E(t);
		ac.setAttribute("type", s);
		var ab = Z.appendChild(ac);
		if (ab) {
			var aa = 0;
			(function() {
				if (typeof ab.GetVariable != F) {
					var ad = ab.GetVariable("$version");
					if (ad) {
						ad = ad.split(" ")[1].split(",");
						O.pv = [parseInt(ad[0], 10), parseInt(ad[1], 10),
								parseInt(ad[2], 10)]
					}
				} else {
					if (aa < 10) {
						aa++;
						setTimeout(arguments.callee, 10);
						return
					}
				}
				Z.removeChild(ac);
				ab = null;
				J()
			})()
		} else {
			J()
		}
	}
	function J() {
		var ai = q.length;
		if (ai > 0) {
			for (var ah = 0; ah < ai; ah++) {
				var aa = q[ah].id;
				var ad = q[ah].callbackFn;
				var ac = {
					success : false,
					id : aa
				};
				if (O.pv[0] > 0) {
					var ag = c(aa);
					if (ag) {
						if (H(q[ah].swfVersion) && !(O.wk && O.wk < 312)) {
							y(aa, true);
							if (ad) {
								ac.success = true;
								ac.ref = B(aa);
								ad(ac)
							}
						} else {
							if (q[ah].expressInstall && C()) {
								var ak = {};
								ak.data = q[ah].expressInstall;
								ak.width = ag.getAttribute("width") || "0";
								ak.height = ag.getAttribute("height") || "0";
								if (ag.getAttribute("class")) {
									ak.styleclass = ag.getAttribute("class")
								}
								if (ag.getAttribute("align")) {
									ak.align = ag.getAttribute("align")
								}
								var aj = {};
								var Z = ag.getElementsByTagName("param");
								var ae = Z.length;
								for (var af = 0; af < ae; af++) {
									if (Z[af].getAttribute("name")
											.toLowerCase() != "movie") {
										aj[Z[af].getAttribute("name")] = Z[af]
												.getAttribute("value")
									}
								}
								R(ak, aj, aa, ad)
							} else {
								r(ag);
								if (ad) {
									ad(ac)
								}
							}
						}
					}
				} else {
					y(aa, true);
					if (ad) {
						var ab = B(aa);
						if (ab && typeof ab.SetVariable != F) {
							ac.success = true;
							ac.ref = ab
						}
						ad(ac)
					}
				}
			}
		}
	}
	function B(ac) {
		var Z = null;
		var aa = c(ac);
		if (aa && aa.nodeName == "OBJECT") {
			if (typeof aa.SetVariable != F) {
				Z = aa
			} else {
				var ab = aa.getElementsByTagName(t)[0];
				if (ab) {
					Z = ab
				}
			}
		}
		return Z
	}
	function C() {
		return !a && H("6.0.65") && (O.win || O.mac) && !(O.wk && O.wk < 312)
	}
	function R(ac, ad, Z, ab) {
		a = true;
		G = ab || null;
		D = {
			success : false,
			id : Z
		};
		var ag = c(Z);
		if (ag) {
			if (ag.nodeName == "OBJECT") {
				n = h(ag);
				S = null
			} else {
				n = ag;
				S = Z
			}
			ac.id = T;
			if (typeof ac.width == F
					|| (!/%$/.test(ac.width) && parseInt(ac.width, 10) < 310)) {
				ac.width = "310"
			}
			if (typeof ac.height == F
					|| (!/%$/.test(ac.height) && parseInt(ac.height, 10) < 137)) {
				ac.height = "137"
			}
			l.title = l.title.slice(0, 47) + " - Flash Player Installation";
			var af = O.ie && O.win ? "ActiveX" : "PlugIn", ae = "MMredirectURL="
					+ Q.location.toString().replace(/&/g, "%26")
					+ "&MMplayerType=" + af + "&MMdoctitle=" + l.title;
			if (typeof ad.flashvars != F) {
				ad.flashvars += "&" + ae
			} else {
				ad.flashvars = ae
			}
			if (O.ie && O.win && ag.readyState != 4) {
				var aa = E("div");
				Z += "SWFObjectNew";
				aa.setAttribute("id", Z);
				ag.parentNode.insertBefore(aa, ag);
				ag.style.display = "none";
				(function() {
					if (ag.readyState == 4) {
						ag.parentNode.removeChild(ag)
					} else {
						setTimeout(arguments.callee, 10)
					}
				})()
			}
			w(ac, ad, Z)
		}
	}
	function r(aa) {
		if (O.ie && O.win && aa.readyState != 4) {
			var Z = E("div");
			aa.parentNode.insertBefore(Z, aa);
			Z.parentNode.replaceChild(h(aa), Z);
			aa.style.display = "none";
			(function() {
				if (aa.readyState == 4) {
					aa.parentNode.removeChild(aa)
				} else {
					setTimeout(arguments.callee, 10)
				}
			})()
		} else {
			aa.parentNode.replaceChild(h(aa), aa)
		}
	}
	function h(ae) {
		var ad = E("div");
		if (O.win && O.ie) {
			ad.innerHTML = ae.innerHTML
		} else {
			var aa = ae.getElementsByTagName(t)[0];
			if (aa) {
				var af = aa.childNodes;
				if (af) {
					var Z = af.length;
					for (var ab = 0; ab < Z; ab++) {
						if (!(af[ab].nodeType == 1 && af[ab].nodeName == "PARAM")
								&& !(af[ab].nodeType == 8)) {
							ad.appendChild(af[ab].cloneNode(true))
						}
					}
				}
			}
		}
		return ad
	}
	function w(ak, ai, aa) {
		var Z, ac = c(aa);
		if (O.wk && O.wk < 312) {
			return Z
		}
		if (ac) {
			if (typeof ak.id == F) {
				ak.id = aa
			}
			if (O.ie && O.win) {
				var aj = "";
				for (var ag in ak) {
					if (ak[ag] != Object.prototype[ag]) {
						if (ag.toLowerCase() == "data") {
							ai.movie = ak[ag]
						} else {
							if (ag.toLowerCase() == "styleclass") {
								aj += ' class="' + ak[ag] + '"'
							} else {
								if (ag.toLowerCase() != "classid") {
									aj += " " + ag + '="' + ak[ag] + '"'
								}
							}
						}
					}
				}
				var ah = "";
				for (var af in ai) {
					if (ai[af] != Object.prototype[af]) {
						ah += '<param name="' + af + '" value="' + ai[af]
								+ '" />'
					}
				}
				ac.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
						+ aj + ">" + ah + "</object>";
				P[P.length] = ak.id;
				Z = c(ak.id)
			} else {
				var ab = E(t);
				ab.setAttribute("type", s);
				for (var ae in ak) {
					if (ak[ae] != Object.prototype[ae]) {
						if (ae.toLowerCase() == "styleclass") {
							ab.setAttribute("class", ak[ae])
						} else {
							if (ae.toLowerCase() != "classid") {
								ab.setAttribute(ae, ak[ae])
							}
						}
					}
				}
				for (var ad in ai) {
					if (ai[ad] != Object.prototype[ad]
							&& ad.toLowerCase() != "movie") {
						e(ab, ad, ai[ad])
					}
				}
				ac.parentNode.replaceChild(ab, ac);
				Z = ab
			}
		}
		return Z
	}
	function e(ab, Z, aa) {
		var ac = E("param");
		ac.setAttribute("name", Z);
		ac.setAttribute("value", aa);
		ab.appendChild(ac)
	}
	function A(aa) {
		var Z = c(aa);
		if (Z && Z.nodeName == "OBJECT") {
			if (O.ie && O.win) {
				Z.style.display = "none";
				(function() {
					if (Z.readyState == 4) {
						b(aa)
					} else {
						setTimeout(arguments.callee, 10)
					}
				})()
			} else {
				Z.parentNode.removeChild(Z)
			}
		}
	}
	function b(ab) {
		var aa = c(ab);
		if (aa) {
			for (var Z in aa) {
				if (typeof aa[Z] == "function") {
					aa[Z] = null
				}
			}
			aa.parentNode.removeChild(aa)
		}
	}
	function c(ab) {
		var Z = null;
		try {
			Z = l.getElementById(ab)
		} catch (aa) {
		}
		return Z
	}
	function E(Z) {
		return l.createElement(Z)
	}
	function k(ab, Z, aa) {
		ab.attachEvent(Z, aa);
		K[K.length] = [ab, Z, aa]
	}
	function H(ab) {
		var aa = O.pv, Z = ab.split(".");
		Z[0] = parseInt(Z[0], 10);
		Z[1] = parseInt(Z[1], 10) || 0;
		Z[2] = parseInt(Z[2], 10) || 0;
		return (aa[0] > Z[0] || (aa[0] == Z[0] && aa[1] > Z[1]) || (aa[0] == Z[0]
				&& aa[1] == Z[1] && aa[2] >= Z[2])) ? true : false
	}
	function x(ae, aa, af, ad) {
		if (O.ie && O.mac) {
			return
		}
		var ac = l.getElementsByTagName("head")[0];
		if (!ac) {
			return
		}
		var Z = (af && typeof af == "string") ? af : "screen";
		if (ad) {
			p = null;
			I = null
		}
		if (!p || I != Z) {
			var ab = E("style");
			ab.setAttribute("type", "text/css");
			ab.setAttribute("media", Z);
			p = ac.appendChild(ab);
			if (O.ie && O.win && typeof l.styleSheets != F
					&& l.styleSheets.length > 0) {
				p = l.styleSheets[l.styleSheets.length - 1]
			}
			I = Z
		}
		if (O.ie && O.win) {
			if (p && typeof p.addRule == t) {
				p.addRule(ae, aa)
			}
		} else {
			if (p && typeof l.createTextNode != F) {
				p.appendChild(l.createTextNode(ae + " {" + aa + "}"))
			}
		}
	}
	function y(ab, Z) {
		if (!o) {
			return
		}
		var aa = Z ? "visible" : "hidden";
		if (L && c(ab)) {
			c(ab).style.visibility = aa
		} else {
			x("#" + ab, "visibility:" + aa)
		}
	}
	function N(aa) {
		var ab = /[\\\"<>\.;]/;
		var Z = ab.exec(aa) != null;
		return Z && typeof encodeURIComponent != F
				? encodeURIComponent(aa)
				: aa
	}
	var d = function() {
		if (O.ie && O.win) {
			window.attachEvent("onunload", function() {
						var ae = K.length;
						for (var ad = 0; ad < ae; ad++) {
							K[ad][0].detachEvent(K[ad][1], K[ad][2])
						}
						var ab = P.length;
						for (var ac = 0; ac < ab; ac++) {
							A(P[ac])
						}
						for (var aa in O) {
							O[aa] = null
						}
						O = null;
						for (var Z in swfobject) {
							swfobject[Z] = null
						}
						swfobject = null
					})
		}
	}();
	return {
		registerObject : function(ad, Z, ac, ab) {
			if (O.w3 && ad && Z) {
				var aa = {};
				aa.id = ad;
				aa.swfVersion = Z;
				aa.expressInstall = ac;
				aa.callbackFn = ab;
				q[q.length] = aa;
				y(ad, false)
			} else {
				if (ab) {
					ab({
								success : false,
								id : ad
							})
				}
			}
		},
		getObjectById : function(Z) {
			if (O.w3) {
				return B(Z)
			}
		},
		embedSWF : function(ad, aj, ag, ai, aa, ac, ab, af, ah, ae) {
			var Z = {
				success : false,
				id : aj
			};
			if (O.w3 && !(O.wk && O.wk < 312) && ad && aj && ag && ai && aa) {
				y(aj, false);
				M(function() {
							ag += "";
							ai += "";
							var al = {};
							if (ah && typeof ah === t) {
								for (var an in ah) {
									al[an] = ah[an]
								}
							}
							al.data = ad;
							al.width = ag;
							al.height = ai;
							var ao = {};
							if (af && typeof af === t) {
								for (var am in af) {
									ao[am] = af[am]
								}
							}
							if (ab && typeof ab === t) {
								for (var ak in ab) {
									if (typeof ao.flashvars != F) {
										ao.flashvars += "&" + ak + "=" + ab[ak]
									} else {
										ao.flashvars = ak + "=" + ab[ak]
									}
								}
							}
							if (H(aa)) {
								var ap = w(al, ao, aj);
								if (al.id == aj) {
									y(aj, true)
								}
								Z.success = true;
								Z.ref = ap
							} else {
								if (ac && C()) {
									al.data = ac;
									R(al, ao, aj, ae);
									return
								} else {
									y(aj, true)
								}
							}
							if (ae) {
								ae(Z)
							}
						})
			} else {
				if (ae) {
					ae(Z)
				}
			}
		},
		switchOffAutoHideShow : function() {
			o = false
		},
		ua : O,
		getFlashPlayerVersion : function() {
			return {
				major : O.pv[0],
				minor : O.pv[1],
				release : O.pv[2]
			}
		},
		hasFlashPlayerVersion : H,
		createSWF : function(ab, aa, Z) {
			if (O.w3) {
				return w(ab, aa, Z)
			} else {
				return undefined
			}
		},
		showExpressInstall : function(ab, ac, Z, aa) {
			if (O.w3 && C()) {
				R(ab, ac, Z, aa)
			}
		},
		removeSWF : function(Z) {
			if (O.w3) {
				A(Z)
			}
		},
		createCSS : function(ac, ab, aa, Z) {
			if (O.w3) {
				x(ac, ab, aa, Z)
			}
		},
		addDomLoadEvent : M,
		addLoadEvent : u,
		getQueryParamValue : function(ac) {
			var ab = l.location.search || l.location.hash;
			if (ab) {
				if (/\?/.test(ab)) {
					ab = ab.split("?")[1]
				}
				if (ac == null) {
					return N(ab)
				}
				var aa = ab.split("&");
				for (var Z = 0; Z < aa.length; Z++) {
					if (aa[Z].substring(0, aa[Z].indexOf("=")) == ac) {
						return N(aa[Z].substring((aa[Z].indexOf("=") + 1)))
					}
				}
			}
			return ""
		},
		expressInstallCallback : function() {
			if (a) {
				var Z = c(T);
				if (Z && n) {
					Z.parentNode.replaceChild(n, Z);
					if (S) {
						y(S, true);
						if (O.ie && O.win) {
							n.style.display = "block"
						}
					}
					if (G) {
						G(D)
					}
				}
				a = false
			}
		}
	}
}();
Ext.FlashComponent = Ext.extend(Ext.BoxComponent, {
			flashVersion : "9.0.115",
			backgroundColor : "#ffffff",
			wmode : "opaque",
			flashVars : undefined,
			flashParams : undefined,
			url : undefined,
			swfId : undefined,
			swfWidth : "100%",
			swfHeight : "100%",
			expressInstall : false,
			initComponent : function() {
				Ext.FlashComponent.superclass.initComponent.call(this);
				this.addEvents("initialize")
			},
			onRender : function() {
				Ext.FlashComponent.superclass.onRender.apply(this, arguments);
				var b = Ext.apply({
							allowScriptAccess : "always",
							bgcolor : this.backgroundColor,
							wmode : this.wmode
						}, this.flashParams), a = Ext.apply({
							allowedDomain : document.location.hostname,
							elementID : this.getId(),
							eventHandler : "Ext.FlashEventProxy.onEvent"
						}, this.flashVars);
				new swfobject.embedSWF(this.url, this.id, this.swfWidth,
						this.swfHeight, this.flashVersion, this.expressInstall
								? Ext.FlashComponent.EXPRESS_INSTALL_URL
								: undefined, a, b);
				this.swf = Ext.getDom(this.id);
				this.el = Ext.get(this.swf)
			},
			getSwfId : function() {
				return this.swfId
						|| (this.swfId = "extswf" + (++Ext.Component.AUTO_ID))
			},
			getId : function() {
				return this.id
						|| (this.id = "extflashcmp" + (++Ext.Component.AUTO_ID))
			},
			onFlashEvent : function(a) {
				switch (a.type) {
					case "swfReady" :
						this.initSwf();
						return;
					case "log" :
						return
				}
				a.component = this;
				this.fireEvent(a.type.toLowerCase().replace(/event$/, ""), a)
			},
			initSwf : function() {
				this.onSwfReady(!!this.isInitialized);
				this.isInitialized = true;
				this.fireEvent("initialize", this)
			},
			beforeDestroy : function() {
				if (this.rendered) {
					swfobject.removeSWF(this.swf.id)
				}
				Ext.FlashComponent.superclass.beforeDestroy.call(this)
			},
			onSwfReady : Ext.emptyFn
		});
Ext.FlashComponent.EXPRESS_INSTALL_URL = "http://swfobject.googlecode.com/svn/trunk/swfobject/expressInstall.swf";
Ext.reg("flash", Ext.FlashComponent);
Ext.FlashEventProxy = {
	onEvent : function(c, b) {
		var a = Ext.getCmp(c);
		if (a) {
			a.onFlashEvent(b)
		} else {
			arguments.callee.defer(10, this, [c, b])
		}
	}
};
Ext.chart.Chart = Ext.extend(Ext.FlashComponent, {
			refreshBuffer : 100,
			chartStyle : {
				padding : 10,
				animationEnabled : true,
				font : {
					name : "Tahoma",
					color : 4473924,
					size : 11
				},
				dataTip : {
					padding : 5,
					border : {
						color : 10075112,
						size : 1
					},
					background : {
						color : 14346230,
						alpha : 0.9
					},
					font : {
						name : "Tahoma",
						color : 1393291,
						size : 10,
						bold : true
					}
				}
			},
			extraStyle : null,
			seriesStyles : null,
			disableCaching : Ext.isIE || Ext.isOpera,
			disableCacheParam : "_dc",
			initComponent : function() {
				Ext.chart.Chart.superclass.initComponent.call(this);
				if (!this.url) {
					this.url = Ext.chart.Chart.CHART_URL
				}
				if (this.disableCaching) {
					this.url = Ext.urlAppend(this.url, String.format("{0}={1}",
									this.disableCacheParam, new Date()
											.getTime()))
				}
				this.addEvents("itemmouseover", "itemmouseout", "itemclick",
						"itemdoubleclick", "itemdragstart", "itemdrag",
						"itemdragend", "beforerefresh", "refresh");
				this.store = Ext.StoreMgr.lookup(this.store)
			},
			setStyle : function(a, b) {
				this.swf.setStyle(a, Ext.encode(b))
			},
			setStyles : function(a) {
				this.swf.setStyles(Ext.encode(a))
			},
			setSeriesStyles : function(b) {
				this.seriesStyles = b;
				var a = [];
				Ext.each(b, function(c) {
							a.push(Ext.encode(c))
						});
				this.swf.setSeriesStyles(a)
			},
			setCategoryNames : function(a) {
				this.swf.setCategoryNames(a)
			},
			setTipRenderer : function(b) {
				var a = this;
				this.tipFnName = this.createFnProxy(function(g, d, e) {
							var c = a.store.getAt(d);
							return b(a, c, d, e)
						}, this.tipFnName);
				this.swf.setDataTipFunction(this.tipFnName)
			},
			setSeries : function(a) {
				this.series = a;
				this.refresh()
			},
			bindStore : function(a, b) {
				if (!b && this.store) {
					if (a !== this.store && this.store.autoDestroy) {
						this.store.destroy()
					} else {
						this.store.un("datachanged", this.refresh, this);
						this.store.un("add", this.delayRefresh, this);
						this.store.un("remove", this.delayRefresh, this);
						this.store.un("update", this.delayRefresh, this);
						this.store.un("clear", this.refresh, this)
					}
				}
				if (a) {
					a = Ext.StoreMgr.lookup(a);
					a.on({
								scope : this,
								datachanged : this.refresh,
								add : this.delayRefresh,
								remove : this.delayRefresh,
								update : this.delayRefresh,
								clear : this.refresh
							})
				}
				this.store = a;
				if (a && !b) {
					this.refresh()
				}
			},
			onSwfReady : function(a) {
				Ext.chart.Chart.superclass.onSwfReady.call(this, a);
				this.swf.setType(this.type);
				if (this.chartStyle) {
					this.setStyles(Ext.apply({}, this.extraStyle,
							this.chartStyle))
				}
				if (this.categoryNames) {
					this.setCategoryNames(this.categoryNames)
				}
				if (this.tipRenderer) {
					this.setTipRenderer(this.tipRenderer)
				}
				if (!a) {
					this.bindStore(this.store, true)
				}
				this.refresh.defer(10, this)
			},
			delayRefresh : function() {
				if (!this.refreshTask) {
					this.refreshTask = new Ext.util.DelayedTask(this.refresh,
							this)
				}
				this.refreshTask.delay(this.refreshBuffer)
			},
			refresh : function() {
				if (this.fireEvent("beforerefresh", this) !== false) {
					var m = false;
					var k = [], c = this.store.data.items;
					for (var g = 0, l = c.length; g < l; g++) {
						k[g] = c[g].data
					}
					var e = [];
					var d = 0;
					var n = null;
					var h = 0;
					if (this.series) {
						d = this.series.length;
						for (h = 0; h < d; h++) {
							n = this.series[h];
							var b = {};
							for (var a in n) {
								if (a == "style" && n.style !== null) {
									b.style = Ext.encode(n.style);
									m = true
								} else {
									b[a] = n[a]
								}
							}
							e.push(b)
						}
					}
					if (d > 0) {
						for (h = 0; h < d; h++) {
							n = e[h];
							if (!n.type) {
								n.type = this.type
							}
							n.dataProvider = k
						}
					} else {
						e.push({
									type : this.type,
									dataProvider : k
								})
					}
					this.swf.setDataProvider(e);
					if (this.seriesStyles) {
						this.setSeriesStyles(this.seriesStyles)
					}
					this.fireEvent("refresh", this)
				}
			},
			createFnProxy : function(b, a) {
				if (a) {
					delete window[a]
				}
				var c = "extFnProxy" + (++Ext.chart.Chart.PROXY_FN_ID);
				window[c] = b;
				return c
			},
			onDestroy : function() {
				Ext.chart.Chart.superclass.onDestroy.call(this);
				this.bindStore(null);
				var a = this.tipFnName;
				if (!Ext.isEmpty(a)) {
					delete window[a]
				}
			}
		});
Ext.reg("chart", Ext.chart.Chart);
Ext.chart.Chart.PROXY_FN_ID = 0;
Ext.chart.Chart.CHART_URL = "http://yui.yahooapis.com/2.7.0/build/charts/assets/charts.swf";
Ext.chart.PieChart = Ext.extend(Ext.chart.Chart, {
			type : "pie",
			onSwfReady : function(a) {
				Ext.chart.PieChart.superclass.onSwfReady.call(this, a);
				this.setDataField(this.dataField);
				this.setCategoryField(this.categoryField)
			},
			setDataField : function(a) {
				this.dataField = a;
				this.swf.setDataField(a)
			},
			setCategoryField : function(a) {
				this.categoryField = a;
				this.swf.setCategoryField(a)
			}
		});
Ext.reg("piechart", Ext.chart.PieChart);
Ext.chart.CartesianChart = Ext.extend(Ext.chart.Chart, {
			onSwfReady : function(a) {
				Ext.chart.CartesianChart.superclass.onSwfReady.call(this, a);
				if (this.xField) {
					this.setXField(this.xField)
				}
				if (this.yField) {
					this.setYField(this.yField)
				}
				if (this.xAxis) {
					this.setXAxis(this.xAxis)
				}
				if (this.yAxis) {
					this.setYAxis(this.yAxis)
				}
			},
			setXField : function(a) {
				this.xField = a;
				this.swf.setHorizontalField(a)
			},
			setYField : function(a) {
				this.yField = a;
				this.swf.setVerticalField(a)
			},
			setXAxis : function(a) {
				this.xAxis = this.createAxis("xAxis", a);
				this.swf.setHorizontalAxis(this.xAxis)
			},
			setYAxis : function(a) {
				this.yAxis = this.createAxis("yAxis", a);
				this.swf.setVerticalAxis(this.yAxis)
			},
			createAxis : function(c, d) {
				var e = Ext.apply({}, d), a = null;
				if (this[c]) {
					a = this[c].labelFunction
				}
				if (e.labelRenderer) {
					var b = e.labelRenderer;
					e.labelFunction = this.createFnProxy(function(g) {
								return b(g)
							}, a);
					delete e.labelRenderer
				}
				return e
			}
		});
Ext.reg("cartesianchart", Ext.chart.CartesianChart);
Ext.chart.LineChart = Ext.extend(Ext.chart.CartesianChart, {
			type : "line"
		});
Ext.reg("linechart", Ext.chart.LineChart);
Ext.chart.ColumnChart = Ext.extend(Ext.chart.CartesianChart, {
			type : "column"
		});
Ext.reg("columnchart", Ext.chart.ColumnChart);
Ext.chart.StackedColumnChart = Ext.extend(Ext.chart.CartesianChart, {
			type : "stackcolumn"
		});
Ext.reg("stackedcolumnchart", Ext.chart.StackedColumnChart);
Ext.chart.BarChart = Ext.extend(Ext.chart.CartesianChart, {
			type : "bar"
		});
Ext.reg("barchart", Ext.chart.BarChart);
Ext.chart.StackedBarChart = Ext.extend(Ext.chart.CartesianChart, {
			type : "stackbar"
		});
Ext.reg("stackedbarchart", Ext.chart.StackedBarChart);
Ext.chart.Axis = function(a) {
	Ext.apply(this, a)
};
Ext.chart.Axis.prototype = {
	type : null,
	orientation : "horizontal",
	reverse : false,
	labelFunction : null,
	hideOverlappingLabels : true
};
Ext.chart.NumericAxis = Ext.extend(Ext.chart.Axis, {
			type : "numeric",
			minimum : NaN,
			maximum : NaN,
			majorUnit : NaN,
			minorUnit : NaN,
			snapToUnits : true,
			alwaysShowZero : true,
			scale : "linear"
		});
Ext.chart.TimeAxis = Ext.extend(Ext.chart.Axis, {
			type : "time",
			minimum : null,
			maximum : null,
			majorUnit : NaN,
			majorTimeUnit : null,
			minorUnit : NaN,
			minorTimeUnit : null,
			snapToUnits : true
		});
Ext.chart.CategoryAxis = Ext.extend(Ext.chart.Axis, {
			type : "category",
			categoryNames : null
		});
Ext.chart.Series = function(a) {
	Ext.apply(this, a)
};
Ext.chart.Series.prototype = {
	type : null,
	displayName : null
};
Ext.chart.CartesianSeries = Ext.extend(Ext.chart.Series, {
			xField : null,
			yField : null
		});
Ext.chart.ColumnSeries = Ext.extend(Ext.chart.CartesianSeries, {
			type : "column"
		});
Ext.chart.LineSeries = Ext.extend(Ext.chart.CartesianSeries, {
			type : "line"
		});
Ext.chart.BarSeries = Ext.extend(Ext.chart.CartesianSeries, {
			type : "bar"
		});
Ext.chart.PieSeries = Ext.extend(Ext.chart.Series, {
			type : "pie",
			dataField : null,
			categoryField : null
		});
Ext.layout.MenuLayout = Ext.extend(Ext.layout.ContainerLayout, {
	monitorResize : true,
	setContainer : function(a) {
		this.monitorResize = !a.floating;
		a.on("autosize", this.doAutoSize, this);
		Ext.layout.MenuLayout.superclass.setContainer.call(this, a)
	},
	renderItem : function(g, b, e) {
		if (!this.itemTpl) {
			this.itemTpl = Ext.layout.MenuLayout.prototype.itemTpl = new Ext.XTemplate(
					'<li id="{itemId}" class="{itemCls}">',
					'<tpl if="needsIcon">',
					'<img src="{icon}" class="{iconCls}"/>', "</tpl>", "</li>")
		}
		if (g && !g.rendered) {
			if (Ext.isNumber(b)) {
				b = e.dom.childNodes[b]
			}
			var d = this.getItemArgs(g);
			g.render(g.positionEl = b
					? this.itemTpl.insertBefore(b, d, true)
					: this.itemTpl.append(e, d, true));
			g.positionEl.menuItemId = g.getItemId();
			if (!d.isMenuItem && d.needsIcon) {
				g.positionEl.addClass("x-menu-list-item-indent")
			}
			this.configureItem(g, b)
		} else {
			if (g && !this.isValidParent(g, e)) {
				if (Ext.isNumber(b)) {
					b = e.dom.childNodes[b]
				}
				e.dom.insertBefore(g.getActionEl().dom, b || null)
			}
		}
	},
	getItemArgs : function(b) {
		var a = b instanceof Ext.menu.Item;
		return {
			isMenuItem : a,
			needsIcon : !a && (b.icon || b.iconCls),
			icon : b.icon || Ext.BLANK_IMAGE_URL,
			iconCls : "x-menu-item-icon " + (b.iconCls || ""),
			itemId : "x-menu-el-" + b.id,
			itemCls : "x-menu-list-item "
		}
	},
	isValidParent : function(b, a) {
		return b.el.up("li.x-menu-list-item", 5).dom.parentNode === (a.dom || a)
	},
	onLayout : function(a, b) {
		this.renderAll(a, b);
		this.doAutoSize()
	},
	doAutoSize : function() {
		var c = this.container, a = c.width;
		if (c.floating) {
			if (a) {
				c.setWidth(a)
			} else {
				if (Ext.isIE) {
					c.setWidth(Ext.isStrict && (Ext.isIE7 || Ext.isIE8)
							? "auto"
							: c.minWidth);
					var d = c.getEl(), b = d.dom.offsetWidth;
					c.setWidth(c.getLayoutTarget().getWidth()
							+ d.getFrameWidth("lr"))
				}
			}
		}
	}
});
Ext.Container.LAYOUTS.menu = Ext.layout.MenuLayout;
Ext.menu.Menu = Ext.extend(Ext.Container, {
	minWidth : 120,
	shadow : "sides",
	subMenuAlign : "tl-tr?",
	defaultAlign : "tl-bl?",
	allowOtherMenus : false,
	ignoreParentClicks : false,
	enableScrolling : true,
	maxHeight : null,
	scrollIncrement : 24,
	showSeparator : true,
	defaultOffsets : [0, 0],
	plain : false,
	floating : true,
	hidden : true,
	layout : "menu",
	hideMode : "offsets",
	scrollerHeight : 8,
	autoLayout : true,
	defaultType : "menuitem",
	bufferResize : false,
	initComponent : function() {
		if (Ext.isArray(this.initialConfig)) {
			Ext.apply(this, {
						items : this.initialConfig
					})
		}
		this.addEvents("click", "mouseover", "mouseout", "itemclick");
		Ext.menu.MenuMgr.register(this);
		if (this.floating) {
			Ext.EventManager.onWindowResize(this.hide, this)
		} else {
			if (this.initialConfig.hidden !== false) {
				this.hidden = false
			}
			this.internalDefaults = {
				hideOnClick : false
			}
		}
		Ext.menu.Menu.superclass.initComponent.call(this);
		if (this.autoLayout) {
			this.on({
						add : this.doLayout,
						remove : this.doLayout,
						scope : this
					})
		}
	},
	getLayoutTarget : function() {
		return this.ul
	},
	onRender : function(b, a) {
		if (!b) {
			b = Ext.getBody()
		}
		var c = {
			id : this.getId(),
			cls : "x-menu "
					+ ((this.floating) ? "x-menu-floating x-layer " : "")
					+ (this.cls || "") + (this.plain ? " x-menu-plain" : "")
					+ (this.showSeparator ? "" : " x-menu-nosep"),
			style : this.style,
			cn : [{
						tag : "a",
						cls : "x-menu-focus",
						href : "#",
						onclick : "return false;",
						tabIndex : "-1"
					}, {
						tag : "ul",
						cls : "x-menu-list"
					}]
		};
		if (this.floating) {
			this.el = new Ext.Layer({
						shadow : this.shadow,
						dh : c,
						constrain : false,
						parentEl : b,
						zindex : 15000
					})
		} else {
			this.el = b.createChild(c)
		}
		Ext.menu.Menu.superclass.onRender.call(this, b, a);
		if (!this.keyNav) {
			this.keyNav = new Ext.menu.MenuNav(this)
		}
		this.focusEl = this.el.child("a.x-menu-focus");
		this.ul = this.el.child("ul.x-menu-list");
		this.mon(this.ul, {
					scope : this,
					click : this.onClick,
					mouseover : this.onMouseOver,
					mouseout : this.onMouseOut
				});
		if (this.enableScrolling) {
			this.mon(this.el, {
						scope : this,
						delegate : ".x-menu-scroller",
						click : this.onScroll,
						mouseover : this.deactivateActive
					})
		}
	},
	findTargetItem : function(b) {
		var a = b.getTarget(".x-menu-list-item", this.ul, true);
		if (a && a.menuItemId) {
			return this.items.get(a.menuItemId)
		}
	},
	onClick : function(b) {
		var a = this.findTargetItem(b);
		if (a) {
			if (a.isFormField) {
				this.setActiveItem(a)
			} else {
				if (a instanceof Ext.menu.BaseItem) {
					if (a.menu && this.ignoreParentClicks) {
						a.expandMenu();
						b.preventDefault()
					} else {
						if (a.onClick) {
							a.onClick(b);
							this.fireEvent("click", this, a, b)
						}
					}
				}
			}
		}
	},
	setActiveItem : function(a, b) {
		if (a != this.activeItem) {
			this.deactivateActive();
			if ((this.activeItem = a).isFormField) {
				a.focus()
			} else {
				a.activate(b)
			}
		} else {
			if (b) {
				a.expandMenu()
			}
		}
	},
	deactivateActive : function() {
		var b = this.activeItem;
		if (b) {
			if (b.isFormField) {
				if (b.collapse) {
					b.collapse()
				}
			} else {
				b.deactivate()
			}
			delete this.activeItem
		}
	},
	tryActivate : function(g, e) {
		var b = this.items;
		for (var c = g, a = b.length; c >= 0 && c < a; c += e) {
			var d = b.get(c);
			if (!d.disabled && (d.canActivate || d.isFormField)) {
				this.setActiveItem(d, false);
				return d
			}
		}
		return false
	},
	onMouseOver : function(b) {
		var a = this.findTargetItem(b);
		if (a) {
			if (a.canActivate && !a.disabled) {
				this.setActiveItem(a, true)
			}
		}
		this.over = true;
		this.fireEvent("mouseover", this, b, a)
	},
	onMouseOut : function(b) {
		var a = this.findTargetItem(b);
		if (a) {
			if (a == this.activeItem && a.shouldDeactivate
					&& a.shouldDeactivate(b)) {
				this.activeItem.deactivate();
				delete this.activeItem
			}
		}
		this.over = false;
		this.fireEvent("mouseout", this, b, a)
	},
	onScroll : function(d, b) {
		if (d) {
			d.stopEvent()
		}
		var a = this.ul.dom, c = Ext.fly(b).is(".x-menu-scroller-top");
		a.scrollTop += this.scrollIncrement * (c ? -1 : 1);
		if (c
				? a.scrollTop <= 0
				: a.scrollTop + this.activeMax >= a.scrollHeight) {
			this.onScrollerOut(null, b)
		}
	},
	onScrollerIn : function(d, b) {
		var a = this.ul.dom, c = Ext.fly(b).is(".x-menu-scroller-top");
		if (c ? a.scrollTop > 0 : a.scrollTop + this.activeMax < a.scrollHeight) {
			Ext.fly(b)
					.addClass(["x-menu-item-active", "x-menu-scroller-active"])
		}
	},
	onScrollerOut : function(b, a) {
		Ext.fly(a)
				.removeClass(["x-menu-item-active", "x-menu-scroller-active"])
	},
	show : function(b, c, a) {
		if (this.floating) {
			this.parentMenu = a;
			if (!this.el) {
				this.render();
				this.doLayout(false, true)
			}
			this.showAt(this.el.getAlignToXY(b, c || this.defaultAlign,
							this.defaultOffsets), a)
		} else {
			Ext.menu.Menu.superclass.show.call(this)
		}
	},
	showAt : function(b, a) {
		if (this.fireEvent("beforeshow", this) !== false) {
			this.parentMenu = a;
			if (!this.el) {
				this.render()
			}
			if (this.enableScrolling) {
				this.el.setXY(b);
				this.constrainScroll(b[1]);
				b = [this.el.adjustForConstraints(b)[0], b[1]]
			} else {
				b = this.el.adjustForConstraints(b)
			}
			this.el.setXY(b);
			this.el.show();
			Ext.menu.Menu.superclass.onShow.call(this);
			if (Ext.isIE) {
				this.fireEvent("autosize", this);
				if (!Ext.isIE8) {
					this.el.repaint()
				}
			}
			this.hidden = false;
			this.focus();
			this.fireEvent("show", this)
		}
	},
	constrainScroll : function(c) {
		var a, b = this.ul.setHeight("auto").getHeight();
		if (this.floating) {
			a = this.maxHeight ? this.maxHeight : Ext
					.fly(this.el.dom.parentNode).getViewSize(false).height
					- c
		} else {
			a = this.getHeight()
		}
		if (b > a && a > 0) {
			this.activeMax = a - this.scrollerHeight * 2
					- this.el.getFrameWidth("tb")
					- Ext.num(this.el.shadowOffset, 0);
			this.ul.setHeight(this.activeMax);
			this.createScrollers();
			this.el.select(".x-menu-scroller").setDisplayed("")
		} else {
			this.ul.setHeight(b);
			this.el.select(".x-menu-scroller").setDisplayed("none")
		}
		this.ul.dom.scrollTop = 0
	},
	createScrollers : function() {
		if (!this.scroller) {
			this.scroller = {
				pos : 0,
				top : this.el.insertFirst({
							tag : "div",
							cls : "x-menu-scroller x-menu-scroller-top",
							html : "&#160;"
						}),
				bottom : this.el.createChild({
							tag : "div",
							cls : "x-menu-scroller x-menu-scroller-bottom",
							html : "&#160;"
						})
			};
			this.scroller.top
					.hover(this.onScrollerIn, this.onScrollerOut, this);
			this.scroller.topRepeater = new Ext.util.ClickRepeater(
					this.scroller.top, {
						listeners : {
							click : this.onScroll.createDelegate(this, [null,
											this.scroller.top], false)
						}
					});
			this.scroller.bottom.hover(this.onScrollerIn, this.onScrollerOut,
					this);
			this.scroller.bottomRepeater = new Ext.util.ClickRepeater(
					this.scroller.bottom, {
						listeners : {
							click : this.onScroll.createDelegate(this, [null,
											this.scroller.bottom], false)
						}
					})
		}
	},
	onLayout : function() {
		if (this.isVisible()) {
			if (this.enableScrolling) {
				this.constrainScroll(this.el.getTop())
			}
			if (this.floating) {
				this.el.sync()
			}
		}
	},
	focus : function() {
		if (!this.hidden) {
			this.doFocus.defer(50, this)
		}
	},
	doFocus : function() {
		if (!this.hidden) {
			this.focusEl.focus()
		}
	},
	hide : function(a) {
		this.deepHide = a;
		Ext.menu.Menu.superclass.hide.call(this);
		delete this.deepHide
	},
	onHide : function() {
		Ext.menu.Menu.superclass.onHide.call(this);
		this.deactivateActive();
		if (this.el && this.floating) {
			this.el.hide()
		}
		var a = this.parentMenu;
		if (this.deepHide === true && a) {
			if (a.floating) {
				a.hide(true)
			} else {
				a.deactivateActive()
			}
		}
	},
	lookupComponent : function(a) {
		if (Ext.isString(a)) {
			a = (a == "separator" || a == "-")
					? new Ext.menu.Separator()
					: new Ext.menu.TextItem(a);
			this.applyDefaults(a)
		} else {
			if (Ext.isObject(a)) {
				a = this.getMenuItem(a)
			} else {
				if (a.tagName || a.el) {
					a = new Ext.BoxComponent({
								el : a
							})
				}
			}
		}
		return a
	},
	applyDefaults : function(b) {
		if (!Ext.isString(b)) {
			b = Ext.menu.Menu.superclass.applyDefaults.call(this, b);
			var a = this.internalDefaults;
			if (a) {
				if (b.events) {
					Ext.applyIf(b.initialConfig, a);
					Ext.apply(b, a)
				} else {
					Ext.applyIf(b, a)
				}
			}
		}
		return b
	},
	getMenuItem : function(a) {
		if (!a.isXType) {
			if (!a.xtype && Ext.isBoolean(a.checked)) {
				return new Ext.menu.CheckItem(a)
			}
			return Ext.create(a, this.defaultType)
		}
		return a
	},
	addSeparator : function() {
		return this.add(new Ext.menu.Separator())
	},
	addElement : function(a) {
		return this.add(new Ext.menu.BaseItem(a))
	},
	addItem : function(a) {
		return this.add(a)
	},
	addMenuItem : function(a) {
		return this.add(this.getMenuItem(a))
	},
	addText : function(a) {
		return this.add(new Ext.menu.TextItem(a))
	},
	onDestroy : function() {
		var a = this.parentMenu;
		if (a && a.activeChild == this) {
			delete a.activeChild
		}
		delete this.parentMenu;
		Ext.menu.Menu.superclass.onDestroy.call(this);
		Ext.menu.MenuMgr.unregister(this);
		Ext.EventManager.removeResizeListener(this.hide, this);
		if (this.keyNav) {
			this.keyNav.disable()
		}
		var b = this.scroller;
		if (b) {
			Ext.destroy(b.topRepeater, b.bottomRepeater, b.top, b.bottom)
		}
		Ext.destroy(this.el, this.focusEl, this.ul)
	}
});
Ext.reg("menu", Ext.menu.Menu);
Ext.menu.MenuNav = Ext.extend(Ext.KeyNav, function() {
			function a(d, c) {
				if (!c.tryActivate(c.items.indexOf(c.activeItem) - 1, -1)) {
					c.tryActivate(c.items.length - 1, -1)
				}
			}
			function b(d, c) {
				if (!c.tryActivate(c.items.indexOf(c.activeItem) + 1, 1)) {
					c.tryActivate(0, 1)
				}
			}
			return {
				constructor : function(c) {
					Ext.menu.MenuNav.superclass.constructor.call(this, c.el);
					this.scope = this.menu = c
				},
				doRelay : function(g, d) {
					var c = g.getKey();
					if (this.menu.activeItem
							&& this.menu.activeItem.isFormField && c != g.TAB) {
						return false
					}
					if (!this.menu.activeItem && g.isNavKeyPress()
							&& c != g.SPACE && c != g.RETURN) {
						this.menu.tryActivate(0, 1);
						return false
					}
					return d.call(this.scope || this, g, this.menu)
				},
				tab : function(d, c) {
					d.stopEvent();
					if (d.shiftKey) {
						a(d, c)
					} else {
						b(d, c)
					}
				},
				up : a,
				down : b,
				right : function(d, c) {
					if (c.activeItem) {
						c.activeItem.expandMenu(true)
					}
				},
				left : function(d, c) {
					c.hide();
					if (c.parentMenu && c.parentMenu.activeItem) {
						c.parentMenu.activeItem.activate()
					}
				},
				enter : function(d, c) {
					if (c.activeItem) {
						d.stopPropagation();
						c.activeItem.onClick(d);
						c.fireEvent("click", this, c.activeItem);
						return true
					}
				}
			}
		}());
Ext.menu.MenuMgr = function() {
	var g, d, c = {}, a = false, m = new Date();
	function o() {
		g = {};
		d = new Ext.util.MixedCollection();
		Ext.getDoc().addKeyListener(27, function() {
					if (d.length > 0) {
						j()
					}
				})
	}
	function j() {
		if (d && d.length > 0) {
			var p = d.clone();
			p.each(function(q) {
						q.hide()
					});
			return true
		}
		return false
	}
	function e(p) {
		d.remove(p);
		if (d.length < 1) {
			Ext.getDoc().un("mousedown", n);
			a = false
		}
	}
	function l(p) {
		var q = d.last();
		m = new Date();
		d.add(p);
		if (!a) {
			Ext.getDoc().on("mousedown", n);
			a = true
		}
		if (p.parentMenu) {
			p.getEl().setZIndex(parseInt(p.parentMenu.getEl()
							.getStyle("z-index"), 10)
					+ 3);
			p.parentMenu.activeChild = p
		} else {
			if (q && q.isVisible()) {
				p.getEl().setZIndex(parseInt(q.getEl().getStyle("z-index"), 10)
						+ 3)
			}
		}
	}
	function b(p) {
		if (p.activeChild) {
			p.activeChild.hide()
		}
		if (p.autoHideTimer) {
			clearTimeout(p.autoHideTimer);
			delete p.autoHideTimer
		}
	}
	function h(p) {
		var q = p.parentMenu;
		if (!q && !p.allowOtherMenus) {
			j()
		} else {
			if (q && q.activeChild) {
				q.activeChild.hide()
			}
		}
	}
	function n(p) {
		if (m.getElapsed() > 50 && d.length > 0 && !p.getTarget(".x-menu")) {
			j()
		}
	}
	function k(q, t) {
		if (t) {
			var s = c[q.group];
			for (var r = 0, p = s.length; r < p; r++) {
				if (s[r] != q) {
					s[r].setChecked(false)
				}
			}
		}
	}
	return {
		hideAll : function() {
			return j()
		},
		register : function(p) {
			if (!g) {
				o()
			}
			g[p.id] = p;
			p.on({
						beforehide : b,
						hide : e,
						beforeshow : h,
						show : l
					})
		},
		get : function(p) {
			if (typeof p == "string") {
				if (!g) {
					return null
				}
				return g[p]
			} else {
				if (p.events) {
					return p
				} else {
					if (typeof p.length == "number") {
						return new Ext.menu.Menu({
									items : p
								})
					} else {
						return Ext.create(p, "menu")
					}
				}
			}
		},
		unregister : function(p) {
			delete g[p.id];
			p.un("beforehide", b);
			p.un("hide", e);
			p.un("beforeshow", h);
			p.un("show", l)
		},
		registerCheckable : function(p) {
			var q = p.group;
			if (q) {
				if (!c[q]) {
					c[q] = []
				}
				c[q].push(p);
				p.on("beforecheckchange", k)
			}
		},
		unregisterCheckable : function(p) {
			var q = p.group;
			if (q) {
				c[q].remove(p);
				p.un("beforecheckchange", k)
			}
		},
		getCheckedItem : function(r) {
			var s = c[r];
			if (s) {
				for (var q = 0, p = s.length; q < p; q++) {
					if (s[q].checked) {
						return s[q]
					}
				}
			}
			return null
		},
		setCheckedItem : function(r, t) {
			var s = c[r];
			if (s) {
				for (var q = 0, p = s.length; q < p; q++) {
					if (s[q].id == t) {
						s[q].setChecked(true)
					}
				}
			}
			return null
		}
	}
}();
Ext.menu.BaseItem = Ext.extend(Ext.Component, {
			canActivate : false,
			activeClass : "x-menu-item-active",
			hideOnClick : true,
			clickHideDelay : 1,
			ctype : "Ext.menu.BaseItem",
			actionMode : "container",
			initComponent : function() {
				Ext.menu.BaseItem.superclass.initComponent.call(this);
				this.addEvents("click", "activate", "deactivate");
				if (this.handler) {
					this.on("click", this.handler, this.scope)
				}
			},
			onRender : function(b, a) {
				Ext.menu.BaseItem.superclass.onRender.apply(this, arguments);
				if (this.ownerCt && this.ownerCt instanceof Ext.menu.Menu) {
					this.parentMenu = this.ownerCt
				} else {
					this.container.addClass("x-menu-list-item");
					this.mon(this.el, {
								scope : this,
								click : this.onClick,
								mouseenter : this.activate,
								mouseleave : this.deactivate
							})
				}
			},
			setHandler : function(b, a) {
				if (this.handler) {
					this.un("click", this.handler, this.scope)
				}
				this.on("click", this.handler = b, this.scope = a)
			},
			onClick : function(a) {
				if (!this.disabled
						&& this.fireEvent("click", this, a) !== false
						&& (this.parentMenu && this.parentMenu.fireEvent(
								"itemclick", this, a) !== false)) {
					this.handleClick(a)
				} else {
					a.stopEvent()
				}
			},
			activate : function() {
				if (this.disabled) {
					return false
				}
				var a = this.container;
				a.addClass(this.activeClass);
				this.region = a.getRegion().adjust(2, 2, -2, -2);
				this.fireEvent("activate", this);
				return true
			},
			deactivate : function() {
				this.container.removeClass(this.activeClass);
				this.fireEvent("deactivate", this)
			},
			shouldDeactivate : function(a) {
				return !this.region || !this.region.contains(a.getPoint())
			},
			handleClick : function(b) {
				var a = this.parentMenu;
				if (this.hideOnClick) {
					if (a.floating) {
						a.hide.defer(this.clickHideDelay, a, [true])
					} else {
						a.deactivateActive()
					}
				}
			},
			expandMenu : Ext.emptyFn,
			hideMenu : Ext.emptyFn
		});
Ext.reg("menubaseitem", Ext.menu.BaseItem);
Ext.menu.TextItem = Ext.extend(Ext.menu.BaseItem, {
			hideOnClick : false,
			itemCls : "x-menu-text",
			constructor : function(a) {
				if (typeof a == "string") {
					a = {
						text : a
					}
				}
				Ext.menu.TextItem.superclass.constructor.call(this, a)
			},
			onRender : function() {
				var a = document.createElement("span");
				a.className = this.itemCls;
				a.innerHTML = this.text;
				this.el = a;
				Ext.menu.TextItem.superclass.onRender.apply(this, arguments)
			}
		});
Ext.reg("menutextitem", Ext.menu.TextItem);
Ext.menu.Separator = Ext.extend(Ext.menu.BaseItem, {
			itemCls : "x-menu-sep",
			hideOnClick : false,
			activeClass : "",
			onRender : function(a) {
				var b = document.createElement("span");
				b.className = this.itemCls;
				b.innerHTML = "&#160;";
				this.el = b;
				a.addClass("x-menu-sep-li");
				Ext.menu.Separator.superclass.onRender.apply(this, arguments)
			}
		});
Ext.reg("menuseparator", Ext.menu.Separator);
Ext.menu.Item = Ext.extend(Ext.menu.BaseItem, {
	itemCls : "x-menu-item",
	canActivate : true,
	showDelay : 200,
	hideDelay : 200,
	ctype : "Ext.menu.Item",
	initComponent : function() {
		Ext.menu.Item.superclass.initComponent.call(this);
		if (this.menu) {
			this.menu = Ext.menu.MenuMgr.get(this.menu);
			this.menu.ownerCt = this
		}
	},
	onRender : function(d, b) {
		if (!this.itemTpl) {
			this.itemTpl = Ext.menu.Item.prototype.itemTpl = new Ext.XTemplate(
					'<a id="{id}" class="{cls}" hidefocus="true" unselectable="on" href="{href}"',
					'<tpl if="hrefTarget">', ' target="{hrefTarget}"',
					"</tpl>", ">",
					'<img src="{icon}" class="x-menu-item-icon {iconCls}"/>',
					'<span class="x-menu-item-text">{text}</span>', "</a>")
		}
		var c = this.getTemplateArgs();
		this.el = b ? this.itemTpl.insertBefore(b, c, true) : this.itemTpl
				.append(d, c, true);
		this.iconEl = this.el.child("img.x-menu-item-icon");
		this.textEl = this.el.child(".x-menu-item-text");
		if (!this.href) {
			this.mon(this.el, "click", Ext.emptyFn, null, {
						preventDefault : true
					})
		}
		Ext.menu.Item.superclass.onRender.call(this, d, b)
	},
	getTemplateArgs : function() {
		return {
			id : this.id,
			cls : this.itemCls + (this.menu ? " x-menu-item-arrow" : "")
					+ (this.cls ? " " + this.cls : ""),
			href : this.href || "#",
			hrefTarget : this.hrefTarget,
			icon : this.icon || Ext.BLANK_IMAGE_URL,
			iconCls : this.iconCls || "",
			text : this.itemText || this.text || "&#160;"
		}
	},
	setText : function(a) {
		this.text = a || "&#160;";
		if (this.rendered) {
			this.textEl.update(this.text);
			this.parentMenu.layout.doAutoSize()
		}
	},
	setIconClass : function(a) {
		var b = this.iconCls;
		this.iconCls = a;
		if (this.rendered) {
			this.iconEl.replaceClass(b, this.iconCls)
		}
	},
	beforeDestroy : function() {
		if (this.menu) {
			delete this.menu.ownerCt;
			this.menu.destroy()
		}
		Ext.menu.Item.superclass.beforeDestroy.call(this)
	},
	handleClick : function(a) {
		if (!this.href) {
			a.stopEvent()
		}
		Ext.menu.Item.superclass.handleClick.apply(this, arguments)
	},
	activate : function(a) {
		if (Ext.menu.Item.superclass.activate.apply(this, arguments)) {
			this.focus();
			if (a) {
				this.expandMenu()
			}
		}
		return true
	},
	shouldDeactivate : function(a) {
		if (Ext.menu.Item.superclass.shouldDeactivate.call(this, a)) {
			if (this.menu && this.menu.isVisible()) {
				return !this.menu.getEl().getRegion().contains(a.getPoint())
			}
			return true
		}
		return false
	},
	deactivate : function() {
		Ext.menu.Item.superclass.deactivate.apply(this, arguments);
		this.hideMenu()
	},
	expandMenu : function(a) {
		if (!this.disabled && this.menu) {
			clearTimeout(this.hideTimer);
			delete this.hideTimer;
			if (!this.menu.isVisible() && !this.showTimer) {
				this.showTimer = this.deferExpand.defer(this.showDelay, this,
						[a])
			} else {
				if (this.menu.isVisible() && a) {
					this.menu.tryActivate(0, 1)
				}
			}
		}
	},
	deferExpand : function(a) {
		delete this.showTimer;
		this.menu.show(this.container,
				this.parentMenu.subMenuAlign || "tl-tr?", this.parentMenu);
		if (a) {
			this.menu.tryActivate(0, 1)
		}
	},
	hideMenu : function() {
		clearTimeout(this.showTimer);
		delete this.showTimer;
		if (!this.hideTimer && this.menu && this.menu.isVisible()) {
			this.hideTimer = this.deferHide.defer(this.hideDelay, this)
		}
	},
	deferHide : function() {
		delete this.hideTimer;
		if (this.menu.over) {
			this.parentMenu.setActiveItem(this, false)
		} else {
			this.menu.hide()
		}
	}
});
Ext.reg("menuitem", Ext.menu.Item);
Ext.menu.CheckItem = Ext.extend(Ext.menu.Item, {
	itemCls : "x-menu-item x-menu-check-item",
	groupClass : "x-menu-group-item",
	checked : false,
	ctype : "Ext.menu.CheckItem",
	initComponent : function() {
		Ext.menu.CheckItem.superclass.initComponent.call(this);
		this.addEvents("beforecheckchange", "checkchange");
		if (this.checkHandler) {
			this.on("checkchange", this.checkHandler, this.scope)
		}
		Ext.menu.MenuMgr.registerCheckable(this)
	},
	onRender : function(a) {
		Ext.menu.CheckItem.superclass.onRender.apply(this, arguments);
		if (this.group) {
			this.el.addClass(this.groupClass)
		}
		if (this.checked) {
			this.checked = false;
			this.setChecked(true, true)
		}
	},
	destroy : function() {
		Ext.menu.MenuMgr.unregisterCheckable(this);
		Ext.menu.CheckItem.superclass.destroy.apply(this, arguments)
	},
	setChecked : function(b, a) {
		if (this.checked != b
				&& this.fireEvent("beforecheckchange", this, b) !== false) {
			if (this.container) {
				this.container[b ? "addClass" : "removeClass"]("x-menu-item-checked")
			}
			this.checked = b;
			if (a !== true) {
				this.fireEvent("checkchange", this, b)
			}
		}
	},
	handleClick : function(a) {
		if (!this.disabled && !(this.checked && this.group)) {
			this.setChecked(!this.checked)
		}
		Ext.menu.CheckItem.superclass.handleClick.apply(this, arguments)
	}
});
Ext.reg("menucheckitem", Ext.menu.CheckItem);
Ext.menu.DateMenu = Ext.extend(Ext.menu.Menu, {
			enableScrolling : false,
			hideOnClick : true,
			pickerId : null,
			cls : "x-date-menu",
			initComponent : function() {
				this.on("beforeshow", this.onBeforeShow, this);
				if (this.strict = (Ext.isIE7 && Ext.isStrict)) {
					this.on("show", this.onShow, this, {
								single : true,
								delay : 20
							})
				}
				Ext.apply(this, {
							plain : true,
							showSeparator : false,
							items : this.picker = new Ext.DatePicker(Ext
									.applyIf({
												internalRender : this.strict
														|| !Ext.isIE,
												ctCls : "x-menu-date-item",
												id : this.pickerId
											}, this.initialConfig))
						});
				this.picker.purgeListeners();
				Ext.menu.DateMenu.superclass.initComponent.call(this);
				this.relayEvents(this.picker, ["select"]);
				this.on("show", this.picker.focus, this.picker);
				this.on("select", this.menuHide, this);
				if (this.handler) {
					this.on("select", this.handler, this.scope || this)
				}
			},
			menuHide : function() {
				if (this.hideOnClick) {
					this.hide(true)
				}
			},
			onBeforeShow : function() {
				if (this.picker) {
					this.picker.hideMonthPicker(true)
				}
			},
			onShow : function() {
				var a = this.picker.getEl();
				a.setWidth(a.getWidth())
			}
		});
Ext.reg("datemenu", Ext.menu.DateMenu);
Ext.menu.ColorMenu = Ext.extend(Ext.menu.Menu, {
			enableScrolling : false,
			hideOnClick : true,
			cls : "x-color-menu",
			paletteId : null,
			initComponent : function() {
				Ext.apply(this, {
							plain : true,
							showSeparator : false,
							items : this.palette = new Ext.ColorPalette(Ext
									.applyIf({
												id : this.paletteId
											}, this.initialConfig))
						});
				this.palette.purgeListeners();
				Ext.menu.ColorMenu.superclass.initComponent.call(this);
				this.relayEvents(this.palette, ["select"]);
				this.on("select", this.menuHide, this);
				if (this.handler) {
					this.on("select", this.handler, this.scope || this)
				}
			},
			menuHide : function() {
				if (this.hideOnClick) {
					this.hide(true)
				}
			}
		});
Ext.reg("colormenu", Ext.menu.ColorMenu);
Ext.form.Field = Ext.extend(Ext.BoxComponent, {
			invalidClass : "x-form-invalid",
			invalidText : "The value in this field is invalid",
			focusClass : "x-form-focus",
			validationEvent : "keyup",
			validateOnBlur : true,
			validationDelay : 250,
			defaultAutoCreate : {
				tag : "input",
				type : "text",
				size : "20",
				autocomplete : "off"
			},
			fieldClass : "x-form-field",
			msgTarget : "qtip",
			msgFx : "normal",
			readOnly : false,
			disabled : false,
			submitValue : true,
			isFormField : true,
			msgDisplay : "",
			hasFocus : false,
			initComponent : function() {
				Ext.form.Field.superclass.initComponent.call(this);
				this.addEvents("focus", "blur", "specialkey", "change",
						"invalid", "valid")
			},
			getName : function() {
				return this.rendered && this.el.dom.name
						? this.el.dom.name
						: this.name || this.id || ""
			},
			onRender : function(c, a) {
				if (!this.el) {
					var b = this.getAutoCreate();
					if (!b.name) {
						b.name = this.name || this.id
					}
					if (this.inputType) {
						b.type = this.inputType
					}
					this.autoEl = b
				}
				Ext.form.Field.superclass.onRender.call(this, c, a);
				if (this.submitValue === false) {
					this.el.dom.removeAttribute("name")
				}
				var d = this.el.dom.type;
				if (d) {
					if (d == "password") {
						d = "text"
					}
					this.el.addClass("x-form-" + d)
				}
				if (this.readOnly) {
					this.setReadOnly(true)
				}
				if (this.tabIndex !== undefined) {
					this.el.dom.setAttribute("tabIndex", this.tabIndex)
				}
				this.el.addClass([this.fieldClass, this.cls])
			},
			getItemCt : function() {
				return this.itemCt
			},
			initValue : function() {
				if (this.value !== undefined) {
					this.setValue(this.value)
				} else {
					if (!Ext.isEmpty(this.el.dom.value)
							&& this.el.dom.value != this.emptyText) {
						this.setValue(this.el.dom.value)
					}
				}
				this.originalValue = this.getValue()
			},
			isDirty : function() {
				if (this.disabled || !this.rendered) {
					return false
				}
				return String(this.getValue()) !== String(this.originalValue)
			},
			setReadOnly : function(a) {
				if (this.rendered) {
					this.el.dom.readOnly = a
				}
				this.readOnly = a
			},
			afterRender : function() {
				Ext.form.Field.superclass.afterRender.call(this);
				this.initEvents();
				this.initValue()
			},
			fireKey : function(a) {
				if (a.isSpecialKey()) {
					this.fireEvent("specialkey", this, a)
				}
			},
			reset : function() {
				this.setValue(this.originalValue);
				this.clearInvalid()
			},
			initEvents : function() {
				this.mon(this.el, Ext.EventManager.useKeydown
								? "keydown"
								: "keypress", this.fireKey, this);
				this.mon(this.el, "focus", this.onFocus, this);
				this.mon(this.el, "blur", this.onBlur, this, this.inEditor ? {
							buffer : 10
						} : null)
			},
			preFocus : Ext.emptyFn,
			onFocus : function() {
				this.preFocus();
				if (this.focusClass) {
					this.el.addClass(this.focusClass)
				}
				if (!this.hasFocus) {
					this.hasFocus = true;
					this.startValue = this.getValue();
					this.fireEvent("focus", this)
				}
			},
			beforeBlur : Ext.emptyFn,
			onBlur : function() {
				this.beforeBlur();
				if (this.focusClass) {
					this.el.removeClass(this.focusClass)
				}
				this.hasFocus = false;
				if (this.validationEvent !== false
						&& (this.validateOnBlur || this.validationEvent == "blur")) {
					this.validate()
				}
				var a = this.getValue();
				if (String(a) !== String(this.startValue)) {
					this.fireEvent("change", this, a, this.startValue)
				}
				this.fireEvent("blur", this);
				this.postBlur()
			},
			postBlur : Ext.emptyFn,
			isValid : function(a) {
				if (this.disabled) {
					return true
				}
				var c = this.preventMark;
				this.preventMark = a === true;
				var b = this.validateValue(this
						.processValue(this.getRawValue()));
				this.preventMark = c;
				return b
			},
			validate : function() {
				if (this.disabled
						|| this.validateValue(this.processValue(this
								.getRawValue()))) {
					this.clearInvalid();
					return true
				}
				return false
			},
			processValue : function(a) {
				return a
			},
			validateValue : function(a) {
				return true
			},
			getActiveError : function() {
				return this.activeError || ""
			},
			markInvalid : function(c) {
				if (!this.rendered || this.preventMark) {
					return
				}
				c = c || this.invalidText;
				var a = this.getMessageHandler();
				if (a) {
					a.mark(this, c)
				} else {
					if (this.msgTarget) {
						this.el.addClass(this.invalidClass);
						var b = Ext.getDom(this.msgTarget);
						if (b) {
							b.innerHTML = c;
							b.style.display = this.msgDisplay
						}
					}
				}
				this.activeError = c;
				this.fireEvent("invalid", this, c)
			},
			clearInvalid : function() {
				if (!this.rendered || this.preventMark) {
					return
				}
				this.el.removeClass(this.invalidClass);
				var a = this.getMessageHandler();
				if (a) {
					a.clear(this)
				} else {
					if (this.msgTarget) {
						this.el.removeClass(this.invalidClass);
						var b = Ext.getDom(this.msgTarget);
						if (b) {
							b.innerHTML = "";
							b.style.display = "none"
						}
					}
				}
				delete this.activeError;
				this.fireEvent("valid", this)
			},
			getMessageHandler : function() {
				return Ext.form.MessageTargets[this.msgTarget]
			},
			getErrorCt : function() {
				return this.el.findParent(".x-form-element", 5, true)
						|| this.el.findParent(".x-form-field-wrap", 5, true)
			},
			alignErrorIcon : function() {
				this.errorIcon.alignTo(this.el, "tl-tr", [2, 0])
			},
			getRawValue : function() {
				var a = this.rendered ? this.el.getValue() : Ext.value(
						this.value, "");
				if (a === this.emptyText) {
					a = ""
				}
				return a
			},
			getValue : function() {
				if (!this.rendered) {
					return this.value
				}
				var a = this.el.getValue();
				if (a === this.emptyText || a === undefined) {
					a = ""
				}
				return a
			},
			setRawValue : function(a) {
				return this.rendered ? (this.el.dom.value = (Ext.isEmpty(a)
						? ""
						: a)) : ""
			},
			setValue : function(a) {
				this.value = a;
				if (this.rendered) {
					this.el.dom.value = (Ext.isEmpty(a) ? "" : a);
					this.validate()
				}
				return this
			},
			append : function(a) {
				this.setValue([this.getValue(), a].join(""))
			}
		});
Ext.form.MessageTargets = {
	qtip : {
		mark : function(a, b) {
			a.el.addClass(a.invalidClass);
			a.el.dom.qtip = b;
			a.el.dom.qclass = "x-form-invalid-tip";
			if (Ext.QuickTips) {
				Ext.QuickTips.enable()
			}
		},
		clear : function(a) {
			a.el.removeClass(a.invalidClass);
			a.el.dom.qtip = ""
		}
	},
	title : {
		mark : function(a, b) {
			a.el.addClass(a.invalidClass);
			a.el.dom.title = b
		},
		clear : function(a) {
			a.el.dom.title = ""
		}
	},
	under : {
		mark : function(b, c) {
			b.el.addClass(b.invalidClass);
			if (!b.errorEl) {
				var a = b.getErrorCt();
				if (!a) {
					b.el.dom.title = c;
					return
				}
				b.errorEl = a.createChild({
							cls : "x-form-invalid-msg"
						});
				b.errorEl.setWidth(a.getWidth(true) - 20)
			}
			b.errorEl.update(c);
			Ext.form.Field.msgFx[b.msgFx].show(b.errorEl, b)
		},
		clear : function(a) {
			a.el.removeClass(a.invalidClass);
			if (a.errorEl) {
				Ext.form.Field.msgFx[a.msgFx].hide(a.errorEl, a)
			} else {
				a.el.dom.title = ""
			}
		}
	},
	side : {
		mark : function(b, c) {
			b.el.addClass(b.invalidClass);
			if (!b.errorIcon) {
				var a = b.getErrorCt();
				if (!a) {
					b.el.dom.title = c;
					return
				}
				b.errorIcon = a.createChild({
							cls : "x-form-invalid-icon"
						})
			}
			b.alignErrorIcon();
			b.errorIcon.dom.qtip = c;
			b.errorIcon.dom.qclass = "x-form-invalid-tip";
			b.errorIcon.show();
			b.on("resize", b.alignErrorIcon, b)
		},
		clear : function(a) {
			a.el.removeClass(a.invalidClass);
			if (a.errorIcon) {
				a.errorIcon.dom.qtip = "";
				a.errorIcon.hide();
				a.un("resize", a.alignErrorIcon, a)
			} else {
				a.el.dom.title = ""
			}
		}
	}
};
Ext.form.Field.msgFx = {
	normal : {
		show : function(a, b) {
			a.setDisplayed("block")
		},
		hide : function(a, b) {
			a.setDisplayed(false).update("")
		}
	},
	slide : {
		show : function(a, b) {
			a.slideIn("t", {
						stopFx : true
					})
		},
		hide : function(a, b) {
			a.slideOut("t", {
						stopFx : true,
						useDisplay : true
					})
		}
	},
	slideRight : {
		show : function(a, b) {
			a.fixDisplay();
			a.alignTo(b.el, "tl-tr");
			a.slideIn("l", {
						stopFx : true
					})
		},
		hide : function(a, b) {
			a.slideOut("l", {
						stopFx : true,
						useDisplay : true
					})
		}
	}
};
Ext.reg("field", Ext.form.Field);
Ext.form.TextField = Ext.extend(Ext.form.Field, {
	grow : false,
	growMin : 30,
	growMax : 800,
	vtype : null,
	maskRe : null,
	disableKeyFilter : false,
	allowBlank : true,
	minLength : 0,
	maxLength : Number.MAX_VALUE,
	minLengthText : "The minimum length for this field is {0}",
	maxLengthText : "The maximum length for this field is {0}",
	selectOnFocus : false,
	blankText : "This field is required",
	validator : null,
	regex : null,
	regexText : "",
	emptyText : null,
	emptyClass : "x-form-empty-field",
	initComponent : function() {
		Ext.form.TextField.superclass.initComponent.call(this);
		this.addEvents("autosize", "keydown", "keyup", "keypress")
	},
	initEvents : function() {
		Ext.form.TextField.superclass.initEvents.call(this);
		if (this.validationEvent == "keyup") {
			this.validationTask = new Ext.util.DelayedTask(this.validate, this);
			this.mon(this.el, "keyup", this.filterValidation, this)
		} else {
			if (this.validationEvent !== false
					&& this.validationEvent != "blur") {
				this.mon(this.el, this.validationEvent, this.validate, this, {
							buffer : this.validationDelay
						})
			}
		}
		if (this.selectOnFocus || this.emptyText) {
			this.mon(this.el, "mousedown", this.onMouseDown, this);
			if (this.emptyText) {
				this.applyEmptyText()
			}
		}
		if (this.maskRe
				|| (this.vtype && this.disableKeyFilter !== true && (this.maskRe = Ext.form.VTypes[this.vtype
						+ "Mask"]))) {
			this.mon(this.el, "keypress", this.filterKeys, this)
		}
		if (this.grow) {
			this.mon(this.el, "keyup", this.onKeyUpBuffered, this, {
						buffer : 50
					});
			this.mon(this.el, "click", this.autoSize, this)
		}
		if (this.enableKeyEvents) {
			this.mon(this.el, {
						scope : this,
						keyup : this.onKeyUp,
						keydown : this.onKeyDown,
						keypress : this.onKeyPress
					})
		}
	},
	onMouseDown : function(a) {
		if (!this.hasFocus) {
			this.mon(this.el, "mouseup", Ext.emptyFn, this, {
						single : true,
						preventDefault : true
					})
		}
	},
	processValue : function(a) {
		if (this.stripCharsRe) {
			var b = a.replace(this.stripCharsRe, "");
			if (b !== a) {
				this.setRawValue(b);
				return b
			}
		}
		return a
	},
	filterValidation : function(a) {
		if (!a.isNavKeyPress()) {
			this.validationTask.delay(this.validationDelay)
		}
	},
	onDisable : function() {
		Ext.form.TextField.superclass.onDisable.call(this);
		if (Ext.isIE) {
			this.el.dom.unselectable = "on"
		}
	},
	onEnable : function() {
		Ext.form.TextField.superclass.onEnable.call(this);
		if (Ext.isIE) {
			this.el.dom.unselectable = ""
		}
	},
	onKeyUpBuffered : function(a) {
		if (this.doAutoSize(a)) {
			this.autoSize()
		}
	},
	doAutoSize : function(a) {
		return !a.isNavKeyPress()
	},
	onKeyUp : function(a) {
		this.fireEvent("keyup", this, a)
	},
	onKeyDown : function(a) {
		this.fireEvent("keydown", this, a)
	},
	onKeyPress : function(a) {
		this.fireEvent("keypress", this, a)
	},
	reset : function() {
		Ext.form.TextField.superclass.reset.call(this);
		this.applyEmptyText()
	},
	applyEmptyText : function() {
		if (this.rendered && this.emptyText && this.getRawValue().length < 1
				&& !this.hasFocus) {
			this.setRawValue(this.emptyText);
			this.el.addClass(this.emptyClass)
		}
	},
	preFocus : function() {
		var a = this.el;
		if (this.emptyText) {
			if (a.dom.value == this.emptyText) {
				this.setRawValue("")
			}
			a.removeClass(this.emptyClass)
		}
		if (this.selectOnFocus) {
			a.dom.select()
		}
	},
	postBlur : function() {
		this.applyEmptyText()
	},
	filterKeys : function(b) {
		if (b.ctrlKey) {
			return
		}
		var a = b.getKey();
		if (Ext.isGecko
				&& (b.isNavKeyPress() || a == b.BACKSPACE || (a == b.DELETE && b.button == -1))) {
			return
		}
		var c = String.fromCharCode(b.getCharCode());
		if (!Ext.isGecko && b.isSpecialKey() && !c) {
			return
		}
		if (!this.maskRe.test(c)) {
			b.stopEvent()
		}
	},
	setValue : function(a) {
		if (this.emptyText && this.el && !Ext.isEmpty(a)) {
			this.el.removeClass(this.emptyClass)
		}
		Ext.form.TextField.superclass.setValue.apply(this, arguments);
		this.applyEmptyText();
		this.autoSize();
		return this
	},
	validateValue : function(a) {
		if (Ext.isFunction(this.validator)) {
			var c = this.validator(a);
			if (c !== true) {
				this.markInvalid(c);
				return false
			}
		}
		if (a.length < 1 || a === this.emptyText) {
			if (this.allowBlank) {
				this.clearInvalid();
				return true
			} else {
				this.markInvalid(this.blankText);
				return false
			}
		}
		if (a.length < this.minLength) {
			this.markInvalid(String.format(this.minLengthText, this.minLength));
			return false
		}
		if (a.length > this.maxLength) {
			this.markInvalid(String.format(this.maxLengthText, this.maxLength));
			return false
		}
		if (this.vtype) {
			var b = Ext.form.VTypes;
			if (!b[this.vtype](a, this)) {
				this.markInvalid(this.vtypeText || b[this.vtype + "Text"]);
				return false
			}
		}
		if (this.regex && !this.regex.test(a)) {
			this.markInvalid(this.regexText);
			return false
		}
		return true
	},
	selectText : function(h, a) {
		var c = this.getRawValue();
		var e = false;
		if (c.length > 0) {
			h = h === undefined ? 0 : h;
			a = a === undefined ? c.length : a;
			var g = this.el.dom;
			if (g.setSelectionRange) {
				g.setSelectionRange(h, a)
			} else {
				if (g.createTextRange) {
					var b = g.createTextRange();
					b.moveStart("character", h);
					b.moveEnd("character", a - c.length);
					b.select()
				}
			}
			e = Ext.isGecko || Ext.isOpera
		} else {
			e = true
		}
		if (e) {
			this.focus()
		}
	},
	autoSize : function() {
		if (!this.grow || !this.rendered) {
			return
		}
		if (!this.metrics) {
			this.metrics = Ext.util.TextMetrics.createInstance(this.el)
		}
		var c = this.el;
		var b = c.dom.value;
		var e = document.createElement("div");
		e.appendChild(document.createTextNode(b));
		b = e.innerHTML;
		Ext.removeNode(e);
		e = null;
		b += "&#160;";
		var a = Math.min(this.growMax, Math.max(this.metrics.getWidth(b) + 10,
						this.growMin));
		this.el.setWidth(a);
		this.fireEvent("autosize", this, a)
	},
	onDestroy : function() {
		if (this.validationTask) {
			this.validationTask.cancel();
			this.validationTask = null
		}
		Ext.form.TextField.superclass.onDestroy.call(this)
	}
});
Ext.reg("textfield", Ext.form.TextField);
Ext.form.TriggerField = Ext.extend(Ext.form.TextField, {
			defaultAutoCreate : {
				tag : "input",
				type : "text",
				size : "16",
				autocomplete : "off"
			},
			hideTrigger : false,
			editable : true,
			readOnly : false,
			wrapFocusClass : "x-trigger-wrap-focus",
			autoSize : Ext.emptyFn,
			monitorTab : true,
			deferHeight : true,
			mimicing : false,
			actionMode : "wrap",
			removeMode : "container",
			defaultTriggerWidth : 17,
			onResize : function(a, c) {
				Ext.form.TriggerField.superclass.onResize.call(this, a, c);
				var b = this.getTriggerWidth();
				if (Ext.isNumber(a)) {
					this.el.setWidth(a - b)
				}
				this.wrap.setWidth(this.el.getWidth() + b)
			},
			getTriggerWidth : function() {
				var a = this.trigger.getWidth();
				if (!this.hideTrigger && a === 0) {
					a = this.defaultTriggerWidth
				}
				return a
			},
			alignErrorIcon : function() {
				if (this.wrap) {
					this.errorIcon.alignTo(this.wrap, "tl-tr", [2, 0])
				}
			},
			onRender : function(b, a) {
				this.doc = Ext.isIE ? Ext.getBody() : Ext.getDoc();
				Ext.form.TriggerField.superclass.onRender.call(this, b, a);
				this.wrap = this.el.wrap({
							cls : "x-form-field-wrap x-form-field-trigger-wrap"
						});
				this.trigger = this.wrap.createChild(this.triggerConfig || {
					tag : "img",
					src : Ext.BLANK_IMAGE_URL,
					cls : "x-form-trigger " + this.triggerClass
				});
				this.initTrigger();
				if (!this.width) {
					this.wrap.setWidth(this.el.getWidth()
							+ this.trigger.getWidth())
				}
				this.resizeEl = this.positionEl = this.wrap;
				this.updateEditState()
			},
			updateEditState : function() {
				if (this.rendered) {
					if (this.readOnly) {
						this.el.dom.readOnly = true;
						this.el.addClass("x-trigger-noedit");
						this.mun(this.el, "click", this.onTriggerClick, this);
						this.trigger.setDisplayed(false)
					} else {
						if (!this.editable) {
							this.el.dom.readOnly = true;
							this.el.addClass("x-trigger-noedit");
							this.mon(this.el, "click", this.onTriggerClick,
									this)
						} else {
							this.el.dom.readOnly = false;
							this.el.removeClass("x-trigger-noedit");
							this.mun(this.el, "click", this.onTriggerClick,
									this)
						}
						this.trigger.setDisplayed(!this.hideTrigger)
					}
					this.onResize(this.width || this.wrap.getWidth())
				}
			},
			setHideTrigger : function(a) {
				if (a != this.hideTrigger) {
					this.hideTrigger = a;
					this.updateEditState()
				}
			},
			setEditable : function(a) {
				if (a != this.editable) {
					this.editable = a;
					this.updateEditState()
				}
			},
			setReadOnly : function(a) {
				if (a != this.readOnly) {
					this.readOnly = a;
					this.updateEditState()
				}
			},
			afterRender : function() {
				Ext.form.TriggerField.superclass.afterRender.call(this)
			},
			initTrigger : function() {
				this.mon(this.trigger, "click", this.onTriggerClick, this, {
							preventDefault : true
						});
				this.trigger.addClassOnOver("x-form-trigger-over");
				this.trigger.addClassOnClick("x-form-trigger-click")
			},
			onDestroy : function() {
				Ext.destroy(this.trigger, this.wrap);
				if (this.mimicing) {
					this.doc.un("mousedown", this.mimicBlur, this)
				}
				delete this.doc;
				Ext.form.TriggerField.superclass.onDestroy.call(this)
			},
			onFocus : function() {
				Ext.form.TriggerField.superclass.onFocus.call(this);
				if (!this.mimicing) {
					this.wrap.addClass(this.wrapFocusClass);
					this.mimicing = true;
					this.doc.on("mousedown", this.mimicBlur, this, {
								delay : 10
							});
					if (this.monitorTab) {
						this.on("specialkey", this.checkTab, this)
					}
				}
			},
			checkTab : function(a, b) {
				if (b.getKey() == b.TAB) {
					this.triggerBlur()
				}
			},
			onBlur : Ext.emptyFn,
			mimicBlur : function(a) {
				if (!this.isDestroyed && !this.wrap.contains(a.target)
						&& this.validateBlur(a)) {
					this.triggerBlur()
				}
			},
			triggerBlur : function() {
				this.mimicing = false;
				this.doc.un("mousedown", this.mimicBlur, this);
				if (this.monitorTab && this.el) {
					this.un("specialkey", this.checkTab, this)
				}
				Ext.form.TriggerField.superclass.onBlur.call(this);
				if (this.wrap) {
					this.wrap.removeClass(this.wrapFocusClass)
				}
			},
			beforeBlur : Ext.emptyFn,
			validateBlur : function(a) {
				return true
			},
			onTriggerClick : Ext.emptyFn
		});
Ext.form.TwinTriggerField = Ext.extend(Ext.form.TriggerField, {
			initComponent : function() {
				Ext.form.TwinTriggerField.superclass.initComponent.call(this);
				this.triggerConfig = {
					tag : "span",
					cls : "x-form-twin-triggers",
					cn : [{
								tag : "img",
								src : Ext.BLANK_IMAGE_URL,
								cls : "x-form-trigger " + this.trigger1Class
							}, {
								tag : "img",
								src : Ext.BLANK_IMAGE_URL,
								cls : "x-form-trigger " + this.trigger2Class
							}]
				}
			},
			getTrigger : function(a) {
				return this.triggers[a]
			},
			initTrigger : function() {
				var a = this.trigger.select(".x-form-trigger", true);
				var b = this;
				a.each(function(d, g, c) {
							var e = "Trigger" + (c + 1);
							d.hide = function() {
								var h = b.wrap.getWidth();
								this.dom.style.display = "none";
								b.el.setWidth(h - b.trigger.getWidth());
								this["hidden" + e] = true
							};
							d.show = function() {
								var h = b.wrap.getWidth();
								this.dom.style.display = "";
								b.el.setWidth(h - b.trigger.getWidth());
								this["hidden" + e] = false
							};
							if (this["hide" + e]) {
								d.dom.style.display = "none";
								this["hidden" + e] = true
							}
							this.mon(d, "click", this["on" + e + "Click"],
									this, {
										preventDefault : true
									});
							d.addClassOnOver("x-form-trigger-over");
							d.addClassOnClick("x-form-trigger-click")
						}, this);
				this.triggers = a.elements
			},
			getTriggerWidth : function() {
				var a = 0;
				Ext.each(this.triggers, function(d, c) {
							var e = "Trigger" + (c + 1), b = d.getWidth();
							if (b === 0 && !this["hidden" + e]) {
								a += this.defaultTriggerWidth
							} else {
								a += b
							}
						}, this);
				return a
			},
			onDestroy : function() {
				Ext.destroy(this.triggers);
				Ext.form.TwinTriggerField.superclass.onDestroy.call(this)
			},
			onTrigger1Click : Ext.emptyFn,
			onTrigger2Click : Ext.emptyFn
		});
Ext.reg("trigger", Ext.form.TriggerField);
Ext.form.TextArea = Ext.extend(Ext.form.TextField, {
	growMin : 60,
	growMax : 1000,
	growAppend : "&#160;\n&#160;",
	enterIsSpecial : false,
	preventScrollbars : false,
	onRender : function(b, a) {
		if (!this.el) {
			this.defaultAutoCreate = {
				tag : "textarea",
				style : "width:100px;height:60px;",
				autocomplete : "off"
			}
		}
		Ext.form.TextArea.superclass.onRender.call(this, b, a);
		if (this.grow) {
			this.textSizeEl = Ext.DomHelper.append(document.body, {
						tag : "pre",
						cls : "x-form-grow-sizer"
					});
			if (this.preventScrollbars) {
				this.el.setStyle("overflow", "hidden")
			}
			this.el.setHeight(this.growMin)
		}
	},
	onDestroy : function() {
		Ext.removeNode(this.textSizeEl);
		Ext.form.TextArea.superclass.onDestroy.call(this)
	},
	fireKey : function(a) {
		if (a.isSpecialKey()
				&& (this.enterIsSpecial || (a.getKey() != a.ENTER || a
						.hasModifier()))) {
			this.fireEvent("specialkey", this, a)
		}
	},
	doAutoSize : function(a) {
		return !a.isNavKeyPress() || a.getKey() == a.ENTER
	},
	autoSize : function() {
		if (!this.grow || !this.textSizeEl) {
			return
		}
		var c = this.el, a = Ext.util.Format.htmlEncode(c.dom.value), d = this.textSizeEl, b;
		Ext.fly(d).setWidth(this.el.getWidth());
		if (a.length < 1) {
			a = "&#160;&#160;"
		} else {
			a += this.growAppend;
			if (Ext.isIE) {
				a = a.replace(/\n/g, "&#160;<br />")
			}
		}
		d.innerHTML = a;
		b = Math.min(this.growMax, Math.max(d.offsetHeight, this.growMin));
		if (b != this.lastHeight) {
			this.lastHeight = b;
			this.el.setHeight(b);
			this.fireEvent("autosize", this, b)
		}
	}
});
Ext.reg("textarea", Ext.form.TextArea);
Ext.form.NumberField = Ext.extend(Ext.form.TextField, {
			fieldClass : "x-form-field x-form-num-field",
			allowDecimals : true,
			decimalSeparator : ".",
			decimalPrecision : 2,
			allowNegative : true,
			minValue : Number.NEGATIVE_INFINITY,
			maxValue : Number.MAX_VALUE,
			minText : "The minimum value for this field is {0}",
			maxText : "The maximum value for this field is {0}",
			nanText : "{0} is not a valid number",
			baseChars : "0123456789",
			initEvents : function() {
				var a = this.baseChars + "";
				if (this.allowDecimals) {
					a += this.decimalSeparator
				}
				if (this.allowNegative) {
					a += "-"
				}
				this.maskRe = new RegExp("[" + Ext.escapeRe(a) + "]");
				Ext.form.NumberField.superclass.initEvents.call(this)
			},
			validateValue : function(b) {
				if (!Ext.form.NumberField.superclass.validateValue
						.call(this, b)) {
					return false
				}
				if (b.length < 1) {
					return true
				}
				b = String(b).replace(this.decimalSeparator, ".");
				if (isNaN(b)) {
					this.markInvalid(String.format(this.nanText, b));
					return false
				}
				var a = this.parseValue(b);
				if (a < this.minValue) {
					this
							.markInvalid(String.format(this.minText,
									this.minValue));
					return false
				}
				if (a > this.maxValue) {
					this
							.markInvalid(String.format(this.maxText,
									this.maxValue));
					return false
				}
				return true
			},
			getValue : function() {
				return this.fixPrecision(this
						.parseValue(Ext.form.NumberField.superclass.getValue
								.call(this)))
			},
			setValue : function(a) {
				a = Ext.isNumber(a) ? a : parseFloat(String(a).replace(
						this.decimalSeparator, "."));
				a = isNaN(a) ? "" : String(a).replace(".",
						this.decimalSeparator);
				return Ext.form.NumberField.superclass.setValue.call(this, a)
			},
			setMinValue : function(a) {
				this.minValue = Ext.num(a, Number.NEGATIVE_INFINITY)
			},
			setMaxValue : function(a) {
				this.maxValue = Ext.num(a, Number.MAX_VALUE)
			},
			parseValue : function(a) {
				a = parseFloat(String(a).replace(this.decimalSeparator, "."));
				return isNaN(a) ? "" : a
			},
			fixPrecision : function(b) {
				var a = isNaN(b);
				if (!this.allowDecimals || this.decimalPrecision == -1 || a
						|| !b) {
					return a ? "" : b
				}
				return parseFloat(parseFloat(b).toFixed(this.decimalPrecision))
			},
			beforeBlur : function() {
				var a = this.parseValue(this.getRawValue());
				if (!Ext.isEmpty(a)) {
					this.setValue(this.fixPrecision(a))
				}
			}
		});
Ext.reg("numberfield", Ext.form.NumberField);
Ext.form.DateField = Ext.extend(Ext.form.TriggerField, {
	format : "m/d/Y",
	altFormats : "m/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d",
	disabledDaysText : "Disabled",
	disabledDatesText : "Disabled",
	minText : "The date in this field must be equal to or after {0}",
	maxText : "The date in this field must be equal to or before {0}",
	invalidText : "{0} is not a valid date - it must be in the format {1}",
	triggerClass : "x-form-date-trigger",
	showToday : true,
	defaultAutoCreate : {
		tag : "input",
		type : "text",
		size : "10",
		autocomplete : "off"
	},
	initComponent : function() {
		Ext.form.DateField.superclass.initComponent.call(this);
		this.addEvents("select");
		if (Ext.isString(this.minValue)) {
			this.minValue = this.parseDate(this.minValue)
		}
		if (Ext.isString(this.maxValue)) {
			this.maxValue = this.parseDate(this.maxValue)
		}
		this.disabledDatesRE = null;
		this.initDisabledDays()
	},
	initEvents : function() {
		Ext.form.DateField.superclass.initEvents.call(this);
		this.keyNav = new Ext.KeyNav(this.el, {
					down : function(a) {
						this.onTriggerClick()
					},
					scope : this,
					forceKeyDown : true
				})
	},
	initDisabledDays : function() {
		if (this.disabledDates) {
			var b = this.disabledDates, a = b.length - 1, c = "(?:";
			Ext.each(b, function(g, e) {
						c += Ext.isDate(g)
								? "^" + Ext.escapeRe(g.dateFormat(this.format))
										+ "$"
								: b[e];
						if (e != a) {
							c += "|"
						}
					}, this);
			this.disabledDatesRE = new RegExp(c + ")")
		}
	},
	setDisabledDates : function(a) {
		this.disabledDates = a;
		this.initDisabledDays();
		if (this.menu) {
			this.menu.picker.setDisabledDates(this.disabledDatesRE)
		}
	},
	setDisabledDays : function(a) {
		this.disabledDays = a;
		if (this.menu) {
			this.menu.picker.setDisabledDays(a)
		}
	},
	setMinValue : function(a) {
		this.minValue = (Ext.isString(a) ? this.parseDate(a) : a);
		if (this.menu) {
			this.menu.picker.setMinDate(this.minValue)
		}
	},
	setMaxValue : function(a) {
		this.maxValue = (Ext.isString(a) ? this.parseDate(a) : a);
		if (this.menu) {
			this.menu.picker.setMaxDate(this.maxValue)
		}
	},
	validateValue : function(e) {
		e = this.formatDate(e);
		if (!Ext.form.DateField.superclass.validateValue.call(this, e)) {
			return false
		}
		if (e.length < 1) {
			return true
		}
		var c = e;
		e = this.parseDate(e);
		if (!e) {
			this.markInvalid(String.format(this.invalidText, c, this.format));
			return false
		}
		var g = e.getTime();
		if (this.minValue && g < this.minValue.getTime()) {
			this.markInvalid(String.format(this.minText, this
							.formatDate(this.minValue)));
			return false
		}
		if (this.maxValue && g > this.maxValue.getTime()) {
			this.markInvalid(String.format(this.maxText, this
							.formatDate(this.maxValue)));
			return false
		}
		if (this.disabledDays) {
			var a = e.getDay();
			for (var b = 0; b < this.disabledDays.length; b++) {
				if (a === this.disabledDays[b]) {
					this.markInvalid(this.disabledDaysText);
					return false
				}
			}
		}
		var d = this.formatDate(e);
		if (this.disabledDatesRE && this.disabledDatesRE.test(d)) {
			this.markInvalid(String.format(this.disabledDatesText, d));
			return false
		}
		return true
	},
	validateBlur : function() {
		return !this.menu || !this.menu.isVisible()
	},
	getValue : function() {
		return this
				.parseDate(Ext.form.DateField.superclass.getValue.call(this))
				|| ""
	},
	setValue : function(a) {
		return Ext.form.DateField.superclass.setValue.call(this, this
						.formatDate(this.parseDate(a)))
	},
	parseDate : function(d) {
		if (!d || Ext.isDate(d)) {
			return d
		}
		var b = Date.parseDate(d, this.format);
		if (!b && this.altFormats) {
			if (!this.altFormatsArray) {
				this.altFormatsArray = this.altFormats.split("|")
			}
			for (var c = 0, a = this.altFormatsArray.length; c < a && !b; c++) {
				b = Date.parseDate(d, this.altFormatsArray[c])
			}
		}
		return b
	},
	onDestroy : function() {
		Ext.destroy(this.menu, this.keyNav);
		Ext.form.DateField.superclass.onDestroy.call(this)
	},
	formatDate : function(a) {
		return Ext.isDate(a) ? a.dateFormat(this.format) : a
	},
	onTriggerClick : function() {
		if (this.disabled) {
			return
		}
		if (this.menu == null) {
			this.menu = new Ext.menu.DateMenu({
						hideOnClick : false,
						focusOnSelect : false
					})
		}
		this.onFocus();
		Ext.apply(this.menu.picker, {
					minDate : this.minValue,
					maxDate : this.maxValue,
					disabledDatesRE : this.disabledDatesRE,
					disabledDatesText : this.disabledDatesText,
					disabledDays : this.disabledDays,
					disabledDaysText : this.disabledDaysText,
					format : this.format,
					showToday : this.showToday,
					minText : String.format(this.minText, this
									.formatDate(this.minValue)),
					maxText : String.format(this.maxText, this
									.formatDate(this.maxValue))
				});
		this.menu.picker.setValue(this.getValue() || new Date());
		this.menu.show(this.el, "tl-bl?");
		this.menuEvents("on")
	},
	menuEvents : function(a) {
		this.menu[a]("select", this.onSelect, this);
		this.menu[a]("hide", this.onMenuHide, this);
		this.menu[a]("show", this.onFocus, this)
	},
	onSelect : function(a, b) {
		this.setValue(b);
		this.fireEvent("select", this, b);
		this.menu.hide()
	},
	onMenuHide : function() {
		this.focus(false, 60);
		this.menuEvents("un")
	},
	beforeBlur : function() {
		var a = this.parseDate(this.getRawValue());
		if (a) {
			this.setValue(a)
		}
	}
});
Ext.reg("datefield", Ext.form.DateField);
Ext.form.DisplayField = Ext.extend(Ext.form.Field, {
			validationEvent : false,
			validateOnBlur : false,
			defaultAutoCreate : {
				tag : "div"
			},
			fieldClass : "x-form-display-field",
			htmlEncode : false,
			initEvents : Ext.emptyFn,
			isValid : function() {
				return true
			},
			validate : function() {
				return true
			},
			getRawValue : function() {
				var a = this.rendered ? this.el.dom.innerHTML : Ext.value(
						this.value, "");
				if (a === this.emptyText) {
					a = ""
				}
				if (this.htmlEncode) {
					a = Ext.util.Format.htmlDecode(a)
				}
				return a
			},
			getValue : function() {
				return this.getRawValue()
			},
			getName : function() {
				return this.name
			},
			setRawValue : function(a) {
				if (this.htmlEncode) {
					a = Ext.util.Format.htmlEncode(a)
				}
				return this.rendered ? (this.el.dom.innerHTML = (Ext.isEmpty(a)
						? ""
						: a)) : (this.value = a)
			},
			setValue : function(a) {
				this.setRawValue(a);
				return this
			}
		});
Ext.reg("displayfield", Ext.form.DisplayField);
Ext.form.ComboBox = Ext.extend(Ext.form.TriggerField, {
	defaultAutoCreate : {
		tag : "input",
		type : "text",
		size : "24",
		autocomplete : "off"
	},
	listClass : "",
	selectedClass : "x-combo-selected",
	listEmptyText : "",
	triggerClass : "x-form-arrow-trigger",
	shadow : "sides",
	listAlign : "tl-bl?",
	maxHeight : 300,
	minHeight : 90,
	triggerAction : "query",
	minChars : 4,
	typeAhead : false,
	queryDelay : 500,
	pageSize : 0,
	selectOnFocus : false,
	queryParam : "query",
	loadingText : "Loading...",
	resizable : false,
	handleHeight : 8,
	allQuery : "",
	mode : "remote",
	minListWidth : 70,
	forceSelection : false,
	typeAheadDelay : 250,
	lazyInit : true,
	clearFilterOnReset : true,
	submitValue : undefined,
	initComponent : function() {
		Ext.form.ComboBox.superclass.initComponent.call(this);
		this.addEvents("expand", "collapse", "beforeselect", "select",
				"beforequery");
		if (this.transform) {
			var c = Ext.getDom(this.transform);
			if (!this.hiddenName) {
				this.hiddenName = c.name
			}
			if (!this.store) {
				this.mode = "local";
				var j = [], e = c.options;
				for (var b = 0, a = e.length; b < a; b++) {
					var h = e[b], g = (h.hasAttribute
							? h.hasAttribute("value")
							: h.getAttributeNode("value").specified)
							? h.value
							: h.text;
					if (h.selected && Ext.isEmpty(this.value, true)) {
						this.value = g
					}
					j.push([g, h.text])
				}
				this.store = new Ext.data.ArrayStore({
							id : 0,
							fields : ["value", "text"],
							data : j,
							autoDestroy : true
						});
				this.valueField = "value";
				this.displayField = "text"
			}
			c.name = Ext.id();
			if (!this.lazyRender) {
				this.target = true;
				this.el = Ext.DomHelper.insertBefore(c, this.autoCreate
								|| this.defaultAutoCreate);
				this.render(this.el.parentNode, c)
			}
			Ext.removeNode(c)
		} else {
			if (this.store) {
				this.store = Ext.StoreMgr.lookup(this.store);
				if (this.store.autoCreated) {
					this.displayField = this.valueField = "field1";
					if (!this.store.expandData) {
						this.displayField = "field2"
					}
					this.mode = "local"
				}
			}
		}
		this.selectedIndex = -1;
		if (this.mode == "local") {
			if (!Ext.isDefined(this.initialConfig.queryDelay)) {
				this.queryDelay = 10
			}
			if (!Ext.isDefined(this.initialConfig.minChars)) {
				this.minChars = 0
			}
		}
	},
	onRender : function(b, a) {
		if (this.hiddenName && !Ext.isDefined(this.submitValue)) {
			this.submitValue = false
		}
		Ext.form.ComboBox.superclass.onRender.call(this, b, a);
		if (this.hiddenName) {
			this.hiddenField = this.el.insertSibling({
						tag : "input",
						type : "hidden",
						name : this.hiddenName,
						id : (this.hiddenId || this.hiddenName)
					}, "before", true)
		}
		if (Ext.isGecko) {
			this.el.dom.setAttribute("autocomplete", "off")
		}
		if (!this.lazyInit) {
			this.initList()
		} else {
			this.on("focus", this.initList, this, {
						single : true
					})
		}
	},
	initValue : function() {
		Ext.form.ComboBox.superclass.initValue.call(this);
		if (this.hiddenField) {
			this.hiddenField.value = Ext.isDefined(this.hiddenValue)
					? this.hiddenValue
					: Ext.isDefined(this.value) ? this.value : ""
		}
	},
	initList : function() {
		if (!this.list) {
			var a = "x-combo-list";
			this.list = new Ext.Layer({
						parentEl : this.getListParent(),
						shadow : this.shadow,
						cls : [a, this.listClass].join(" "),
						constrain : false,
						zindex : 12000
					});
			var b = this.listWidth
					|| Math.max(this.wrap.getWidth(), this.minListWidth);
			this.list.setSize(b, 0);
			this.list.swallowEvent("mousewheel");
			this.assetHeight = 0;
			if (this.syncFont !== false) {
				this.list.setStyle("font-size", this.el.getStyle("font-size"))
			}
			if (this.title) {
				this.header = this.list.createChild({
							cls : a + "-hd",
							html : this.title
						});
				this.assetHeight += this.header.getHeight()
			}
			this.innerList = this.list.createChild({
						cls : a + "-inner"
					});
			this.mon(this.innerList, "mouseover", this.onViewOver, this);
			this.mon(this.innerList, "mousemove", this.onViewMove, this);
			this.innerList.setWidth(b - this.list.getFrameWidth("lr"));
			if (this.pageSize) {
				this.footer = this.list.createChild({
							cls : a + "-ft"
						});
				this.pageTb = new Ext.PagingToolbar({
							store : this.store,
							pageSize : this.pageSize,
							renderTo : this.footer
						});
				this.assetHeight += this.footer.getHeight()
			}
			if (!this.tpl) {
				this.tpl = '<tpl for="."><div class="' + a + '-item">{'
						+ this.displayField + "}</div></tpl>"
			}
			this.view = new Ext.DataView({
						applyTo : this.innerList,
						tpl : this.tpl,
						singleSelect : true,
						selectedClass : this.selectedClass,
						itemSelector : this.itemSelector || "." + a + "-item",
						emptyText : this.listEmptyText
					});
			this.mon(this.view, "click", this.onViewClick, this);
			this.bindStore(this.store, true);
			if (this.resizable) {
				this.resizer = new Ext.Resizable(this.list, {
							pinned : true,
							handles : "se"
						});
				this.mon(this.resizer, "resize", function(e, c, d) {
							this.maxHeight = d - this.handleHeight
									- this.list.getFrameWidth("tb")
									- this.assetHeight;
							this.listWidth = c;
							this.innerList.setWidth(c
									- this.list.getFrameWidth("lr"));
							this.restrictHeight()
						}, this);
				this[this.pageSize ? "footer" : "innerList"].setStyle(
						"margin-bottom", this.handleHeight + "px")
			}
		}
	},
	getListParent : function() {
		return document.body
	},
	getStore : function() {
		return this.store
	},
	bindStore : function(a, b) {
		if (this.store && !b) {
			if (this.store !== a && this.store.autoDestroy) {
				this.store.destroy()
			} else {
				this.store.un("beforeload", this.onBeforeLoad, this);
				this.store.un("load", this.onLoad, this);
				this.store.un("exception", this.collapse, this)
			}
			if (!a) {
				this.store = null;
				if (this.view) {
					this.view.bindStore(null)
				}
				if (this.pageTb) {
					this.pageTb.bindStore(null)
				}
			}
		}
		if (a) {
			if (!b) {
				this.lastQuery = null;
				if (this.pageTb) {
					this.pageTb.bindStore(a)
				}
			}
			this.store = Ext.StoreMgr.lookup(a);
			this.store.on({
						scope : this,
						beforeload : this.onBeforeLoad,
						load : this.onLoad,
						exception : this.collapse
					});
			if (this.view) {
				this.view.bindStore(a)
			}
		}
	},
	reset : function() {
		Ext.form.ComboBox.superclass.reset.call(this);
		if (this.clearFilterOnReset && this.mode == "local") {
			this.store.clearFilter()
		}
	},
	initEvents : function() {
		Ext.form.ComboBox.superclass.initEvents.call(this);
		this.keyNav = new Ext.KeyNav(this.el, {
			up : function(a) {
				this.inKeyMode = true;
				this.selectPrev()
			},
			down : function(a) {
				if (!this.isExpanded()) {
					this.onTriggerClick()
				} else {
					this.inKeyMode = true;
					this.selectNext()
				}
			},
			enter : function(a) {
				this.onViewClick()
			},
			esc : function(a) {
				this.collapse()
			},
			tab : function(a) {
				this.onViewClick(false);
				return true
			},
			scope : this,
			doRelay : function(c, b, a) {
				if (a == "down" || this.scope.isExpanded()) {
					var d = Ext.KeyNav.prototype.doRelay.apply(this, arguments);
					if (!Ext.isIE && Ext.EventManager.useKeydown) {
						this.scope.fireKey(c)
					}
					return d
				}
				return true
			},
			forceKeyDown : true,
			defaultEventAction : "stopEvent"
		});
		this.queryDelay = Math.max(this.queryDelay || 10, this.mode == "local"
						? 10
						: 250);
		this.dqTask = new Ext.util.DelayedTask(this.initQuery, this);
		if (this.typeAhead) {
			this.taTask = new Ext.util.DelayedTask(this.onTypeAhead, this)
		}
		if (!this.enableKeyEvents) {
			this.mon(this.el, "keyup", this.onKeyUp, this)
		}
	},
	onDestroy : function() {
		if (this.dqTask) {
			this.dqTask.cancel();
			this.dqTask = null
		}
		this.bindStore(null);
		Ext.destroy(this.resizer, this.view, this.pageTb, this.list);
		Ext.destroyMembers(this, "hiddenField");
		Ext.form.ComboBox.superclass.onDestroy.call(this)
	},
	fireKey : function(a) {
		if (!this.isExpanded()) {
			Ext.form.ComboBox.superclass.fireKey.call(this, a)
		}
	},
	onResize : function(a, b) {
		Ext.form.ComboBox.superclass.onResize.apply(this, arguments);
		if (this.isVisible() && this.list) {
			this.doResize(a)
		} else {
			this.bufferSize = a
		}
	},
	doResize : function(a) {
		if (!Ext.isDefined(this.listWidth)) {
			var b = Math.max(a, this.minListWidth);
			this.list.setWidth(b);
			this.innerList.setWidth(b - this.list.getFrameWidth("lr"))
		}
	},
	onEnable : function() {
		Ext.form.ComboBox.superclass.onEnable.apply(this, arguments);
		if (this.hiddenField) {
			this.hiddenField.disabled = false
		}
	},
	onDisable : function() {
		Ext.form.ComboBox.superclass.onDisable.apply(this, arguments);
		if (this.hiddenField) {
			this.hiddenField.disabled = true
		}
	},
	onBeforeLoad : function() {
		if (!this.hasFocus) {
			return
		}
		this.innerList.update(this.loadingText
				? '<div class="loading-indicator">' + this.loadingText
						+ "</div>"
				: "");
		this.restrictHeight();
		this.selectedIndex = -1
	},
	onLoad : function() {
		if (!this.hasFocus) {
			return
		}
		if (this.store.getCount() > 0 || this.listEmptyText) {
			this.expand();
			this.restrictHeight();
			if (this.lastQuery == this.allQuery) {
				if (this.editable) {
					this.el.dom.select()
				}
				if (!this.selectByValue(this.value, true)) {
					this.select(0, true)
				}
			} else {
				this.selectNext();
				if (this.typeAhead && this.lastKey != Ext.EventObject.BACKSPACE
						&& this.lastKey != Ext.EventObject.DELETE) {
					this.taTask.delay(this.typeAheadDelay)
				}
			}
		} else {
			this.onEmptyResults()
		}
	},
	onTypeAhead : function() {
		if (this.store.getCount() > 0) {
			var b = this.store.getAt(0);
			var c = b.data[this.displayField];
			var a = c.length;
			var d = this.getRawValue().length;
			if (d != a) {
				this.setRawValue(c);
				this.selectText(d, c.length)
			}
		}
	},
	onSelect : function(a, b) {
		if (this.fireEvent("beforeselect", this, a, b) !== false) {
			this.setValue(a.data[this.valueField || this.displayField]);
			this.collapse();
			this.fireEvent("select", this, a, b)
		}
	},
	getName : function() {
		var a = this.hiddenField;
		return a && a.name ? a.name : this.hiddenName
				|| Ext.form.ComboBox.superclass.getName.call(this)
	},
	getValue : function() {
		if (this.valueField) {
			return Ext.isDefined(this.value) ? this.value : ""
		} else {
			return Ext.form.ComboBox.superclass.getValue.call(this)
		}
	},
	clearValue : function() {
		if (this.hiddenField) {
			this.hiddenField.value = ""
		}
		this.setRawValue("");
		this.lastSelectionText = "";
		this.applyEmptyText();
		this.value = ""
	},
	setValue : function(a) {
		var c = a;
		if (this.valueField) {
			var b = this.findRecord(this.valueField, a);
			if (b) {
				c = b.data[this.displayField]
			} else {
				if (Ext.isDefined(this.valueNotFoundText)) {
					c = this.valueNotFoundText
				}
			}
		}
		this.lastSelectionText = c;
		if (this.hiddenField) {
			this.hiddenField.value = a
		}
		Ext.form.ComboBox.superclass.setValue.call(this, c);
		this.value = a;
		return this
	},
	findRecord : function(c, b) {
		var a;
		if (this.store.getCount() > 0) {
			this.store.each(function(d) {
						if (d.data[c] == b) {
							a = d;
							return false
						}
					})
		}
		return a
	},
	onViewMove : function(b, a) {
		this.inKeyMode = false
	},
	onViewOver : function(d, b) {
		if (this.inKeyMode) {
			return
		}
		var c = this.view.findItemFromChild(b);
		if (c) {
			var a = this.view.indexOf(c);
			this.select(a, false)
		}
	},
	onViewClick : function(b) {
		var a = this.view.getSelectedIndexes()[0], c = this.store, d = c
				.getAt(a);
		if (d) {
			this.onSelect(d, a)
		} else {
			if (c.getCount() === 0) {
				this.onEmptyResults()
			}
		}
		if (b !== false) {
			this.el.focus()
		}
	},
	restrictHeight : function() {
		this.innerList.dom.style.height = "";
		var b = this.innerList.dom, e = this.list.getFrameWidth("tb")
				+ (this.resizable ? this.handleHeight : 0) + this.assetHeight, c = Math
				.max(b.clientHeight, b.offsetHeight, b.scrollHeight), a = this
				.getPosition()[1]
				- Ext.getBody().getScroll().top, g = Ext.lib.Dom
				.getViewHeight()
				- a - this.getSize().height, d = Math.max(a, g, this.minHeight
						|| 0)
				- this.list.shadowOffset - e - 5;
		c = Math.min(c, d, this.maxHeight);
		this.innerList.setHeight(c);
		this.list.beginUpdate();
		this.list.setHeight(c + e);
		this.list.alignTo(this.wrap, this.listAlign);
		this.list.endUpdate()
	},
	onEmptyResults : function() {
		this.collapse()
	},
	isExpanded : function() {
		return this.list && this.list.isVisible()
	},
	selectByValue : function(a, c) {
		if (!Ext.isEmpty(a, true)) {
			var b = this.findRecord(this.valueField || this.displayField, a);
			if (b) {
				this.select(this.store.indexOf(b), c);
				return true
			}
		}
		return false
	},
	select : function(a, c) {
		this.selectedIndex = a;
		this.view.select(a);
		if (c !== false) {
			var b = this.view.getNode(a);
			if (b) {
				this.innerList.scrollChildIntoView(b, false)
			}
		}
	},
	selectNext : function() {
		var a = this.store.getCount();
		if (a > 0) {
			if (this.selectedIndex == -1) {
				this.select(0)
			} else {
				if (this.selectedIndex < a - 1) {
					this.select(this.selectedIndex + 1)
				}
			}
		}
	},
	selectPrev : function() {
		var a = this.store.getCount();
		if (a > 0) {
			if (this.selectedIndex == -1) {
				this.select(0)
			} else {
				if (this.selectedIndex !== 0) {
					this.select(this.selectedIndex - 1)
				}
			}
		}
	},
	onKeyUp : function(b) {
		var a = b.getKey();
		if (this.editable !== false && this.readOnly !== true
				&& (a == b.BACKSPACE || !b.isSpecialKey())) {
			this.lastKey = a;
			this.dqTask.delay(this.queryDelay)
		}
		Ext.form.ComboBox.superclass.onKeyUp.call(this, b)
	},
	validateBlur : function() {
		return !this.list || !this.list.isVisible()
	},
	initQuery : function() {
		this.doQuery(this.getRawValue())
	},
	beforeBlur : function() {
		var b = this.getRawValue(), a = this.findRecord(this.displayField, b);
		if (!a && this.forceSelection) {
			if (b.length > 0 && b != this.emptyText) {
				this.el.dom.value = Ext.isEmpty(this.lastSelectionText)
						? ""
						: this.lastSelectionText;
				this.applyEmptyText()
			} else {
				this.clearValue()
			}
		} else {
			if (a) {
				b = a.get(this.valueField || this.displayField)
			}
			this.setValue(b)
		}
	},
	doQuery : function(c, b) {
		c = Ext.isEmpty(c) ? "" : c;
		var a = {
			query : c,
			forceAll : b,
			combo : this,
			cancel : false
		};
		if (this.fireEvent("beforequery", a) === false || a.cancel) {
			return false
		}
		c = a.query;
		b = a.forceAll;
		if (b === true || (c.length >= this.minChars)) {
			if (this.lastQuery !== c) {
				this.lastQuery = c;
				if (this.mode == "local") {
					this.selectedIndex = -1;
					if (b) {
						this.store.clearFilter()
					} else {
						this.store.filter(this.displayField, c)
					}
					this.onLoad()
				} else {
					this.store.baseParams[this.queryParam] = c;
					this.store.load({
								params : this.getParams(c)
							});
					this.expand()
				}
			} else {
				this.selectedIndex = -1;
				this.onLoad()
			}
		}
	},
	getParams : function(a) {
		var b = {};
		if (this.pageSize) {
			b.start = 0;
			b.limit = this.pageSize
		}
		return b
	},
	collapse : function() {
		if (!this.isExpanded()) {
			return
		}
		this.list.hide();
		Ext.getDoc().un("mousewheel", this.collapseIf, this);
		Ext.getDoc().un("mousedown", this.collapseIf, this);
		this.fireEvent("collapse", this)
	},
	collapseIf : function(a) {
		if (!a.within(this.wrap) && !a.within(this.list)) {
			this.collapse()
		}
	},
	expand : function() {
		if (this.isExpanded() || !this.hasFocus) {
			return
		}
		if (this.bufferSize) {
			this.doResize(this.bufferSize);
			delete this.bufferSize
		}
		this.list.alignTo(this.wrap, this.listAlign);
		this.list.show();
		if (Ext.isGecko2) {
			this.innerList.setOverflow("auto")
		}
		this.mon(Ext.getDoc(), {
					scope : this,
					mousewheel : this.collapseIf,
					mousedown : this.collapseIf
				});
		this.fireEvent("expand", this)
	},
	onTriggerClick : function() {
		if (this.readOnly || this.disabled) {
			return
		}
		if (this.isExpanded()) {
			this.collapse();
			this.el.focus()
		} else {
			this.onFocus({});
			if (this.triggerAction == "all") {
				this.doQuery(this.allQuery, true)
			} else {
				this.doQuery(this.getRawValue())
			}
			this.el.focus()
		}
	}
});
Ext.reg("combo", Ext.form.ComboBox);
Ext.form.Checkbox = Ext.extend(Ext.form.Field, {
			focusClass : undefined,
			fieldClass : "x-form-field",
			checked : false,
			defaultAutoCreate : {
				tag : "input",
				type : "checkbox",
				autocomplete : "off"
			},
			actionMode : "wrap",
			initComponent : function() {
				Ext.form.Checkbox.superclass.initComponent.call(this);
				this.addEvents("check")
			},
			onResize : function() {
				Ext.form.Checkbox.superclass.onResize.apply(this, arguments);
				if (!this.boxLabel && !this.fieldLabel) {
					this.el.alignTo(this.wrap, "c-c")
				}
			},
			initEvents : function() {
				Ext.form.Checkbox.superclass.initEvents.call(this);
				this.mon(this.el, {
							scope : this,
							click : this.onClick,
							change : this.onClick
						})
			},
			markInvalid : Ext.emptyFn,
			clearInvalid : Ext.emptyFn,
			onRender : function(b, a) {
				Ext.form.Checkbox.superclass.onRender.call(this, b, a);
				if (this.inputValue !== undefined) {
					this.el.dom.value = this.inputValue
				}
				this.wrap = this.el.wrap({
							cls : "x-form-check-wrap"
						});
				if (this.boxLabel) {
					this.wrap.createChild({
								tag : "label",
								htmlFor : this.el.id,
								cls : "x-form-cb-label",
								html : this.boxLabel
							})
				}
				if (this.checked) {
					this.setValue(true)
				} else {
					this.checked = this.el.dom.checked
				}
				if (Ext.isIE) {
					this.wrap.repaint()
				}
				this.resizeEl = this.positionEl = this.wrap
			},
			onDestroy : function() {
				Ext.destroy(this.wrap);
				Ext.form.Checkbox.superclass.onDestroy.call(this)
			},
			initValue : function() {
				this.originalValue = this.getValue()
			},
			getValue : function() {
				if (this.rendered) {
					return this.el.dom.checked
				}
				return this.checked
			},
			onClick : function() {
				if (this.el.dom.checked != this.checked) {
					this.setValue(this.el.dom.checked)
				}
			},
			setValue : function(a) {
				var b = this.checked;
				this.checked = (a === true || a === "true" || a == "1" || String(a)
						.toLowerCase() == "on");
				if (this.rendered) {
					this.el.dom.checked = this.checked;
					this.el.dom.defaultChecked = this.checked
				}
				if (b != this.checked) {
					this.fireEvent("check", this, this.checked);
					if (this.handler) {
						this.handler.call(this.scope || this, this,
								this.checked)
					}
				}
				return this
			}
		});
Ext.reg("checkbox", Ext.form.Checkbox);
Ext.form.CheckboxGroup = Ext.extend(Ext.form.Field, {
	columns : "auto",
	vertical : false,
	allowBlank : true,
	blankText : "You must select at least one item in this group",
	defaultType : "checkbox",
	groupCls : "x-form-check-group",
	initComponent : function() {
		this.addEvents("change");
		this.on("change", this.validate, this);
		Ext.form.CheckboxGroup.superclass.initComponent.call(this)
	},
	onRender : function(j, g) {
		if (!this.el) {
			var p = {
				autoEl : {
					id : this.id
				},
				cls : this.groupCls,
				layout : "column",
				renderTo : j,
				bufferResize : false
			};
			var a = {
				xtype : "container",
				defaultType : this.defaultType,
				layout : "form",
				defaults : {
					hideLabel : true,
					anchor : "100%"
				}
			};
			if (this.items[0].items) {
				Ext.apply(p, {
							layoutConfig : {
								columns : this.items.length
							},
							defaults : this.defaults,
							items : this.items
						});
				for (var e = 0, m = this.items.length; e < m; e++) {
					Ext.applyIf(this.items[e], a)
				}
			} else {
				var d, n = [];
				if (typeof this.columns == "string") {
					this.columns = this.items.length
				}
				if (!Ext.isArray(this.columns)) {
					var k = [];
					for (var e = 0; e < this.columns; e++) {
						k.push((100 / this.columns) * 0.01)
					}
					this.columns = k
				}
				d = this.columns.length;
				for (var e = 0; e < d; e++) {
					var b = Ext.apply({
								items : []
							}, a);
					b[this.columns[e] <= 1 ? "columnWidth" : "width"] = this.columns[e];
					if (this.defaults) {
						b.defaults = Ext.apply(b.defaults || {}, this.defaults)
					}
					n.push(b)
				}
				if (this.vertical) {
					var r = Math.ceil(this.items.length / d), o = 0;
					for (var e = 0, m = this.items.length; e < m; e++) {
						if (e > 0 && e % r == 0) {
							o++
						}
						if (this.items[e].fieldLabel) {
							this.items[e].hideLabel = false
						}
						n[o].items.push(this.items[e])
					}
				} else {
					for (var e = 0, m = this.items.length; e < m; e++) {
						var q = e % d;
						if (this.items[e].fieldLabel) {
							this.items[e].hideLabel = false
						}
						n[q].items.push(this.items[e])
					}
				}
				Ext.apply(p, {
							layoutConfig : {
								columns : d
							},
							items : n
						})
			}
			this.panel = new Ext.Container(p);
			this.panel.ownerCt = this;
			this.el = this.panel.getEl();
			if (this.forId && this.itemCls) {
				var c = this.el.up(this.itemCls).child("label", true);
				if (c) {
					c.setAttribute("htmlFor", this.forId)
				}
			}
			var h = this.panel.findBy(function(l) {
						return l.isFormField
					}, this);
			this.items = new Ext.util.MixedCollection();
			this.items.addAll(h)
		}
		Ext.form.CheckboxGroup.superclass.onRender.call(this, j, g)
	},
	initValue : function() {
		if (this.value) {
			this.setValue
					.apply(this, this.buffered ? this.value : [this.value]);
			delete this.buffered;
			delete this.value
		}
	},
	afterRender : function() {
		Ext.form.CheckboxGroup.superclass.afterRender.call(this);
		this.eachItem(function(a) {
					a.on("check", this.fireChecked, this);
					a.inGroup = true
				})
	},
	doLayout : function() {
		if (this.rendered) {
			this.panel.forceLayout = this.ownerCt.forceLayout;
			this.panel.doLayout()
		}
	},
	fireChecked : function() {
		var a = [];
		this.eachItem(function(b) {
					if (b.checked) {
						a.push(b)
					}
				});
		this.fireEvent("change", this, a)
	},
	validateValue : function(a) {
		if (!this.allowBlank) {
			var b = true;
			this.eachItem(function(c) {
						if (c.checked) {
							return (b = false)
						}
					});
			if (b) {
				this.markInvalid(this.blankText);
				return false
			}
		}
		return true
	},
	isDirty : function() {
		if (this.disabled || !this.rendered) {
			return false
		}
		var a = false;
		this.eachItem(function(b) {
					if (b.isDirty()) {
						a = true;
						return false
					}
				});
		return a
	},
	onDisable : function() {
		this.eachItem(function(a) {
					a.disable()
				})
	},
	onEnable : function() {
		this.eachItem(function(a) {
					a.enable()
				})
	},
	doLayout : function() {
		if (this.rendered) {
			this.panel.forceLayout = this.ownerCt.forceLayout;
			this.panel.doLayout()
		}
	},
	onResize : function(a, b) {
		this.panel.setSize(a, b);
		this.panel.doLayout()
	},
	reset : function() {
		this.eachItem(function(a) {
					if (a.reset) {
						a.reset()
					}
				});
(function() {
			this.clearInvalid()
		}).defer(50, this)
	},
	setValue : function() {
		if (this.rendered) {
			this.onSetValue.apply(this, arguments)
		} else {
			this.buffered = true;
			this.value = arguments
		}
		return this
	},
	onSetValue : function(d, c) {
		if (arguments.length == 1) {
			if (Ext.isArray(d)) {
				Ext.each(d, function(h, e) {
							var g = this.items.itemAt(e);
							if (g) {
								g.setValue(h)
							}
						}, this)
			} else {
				if (Ext.isObject(d)) {
					for (var a in d) {
						var b = this.getBox(a);
						if (b) {
							b.setValue(d[a])
						}
					}
				} else {
					this.setValueForItem(d)
				}
			}
		} else {
			var b = this.getBox(d);
			if (b) {
				b.setValue(c)
			}
		}
	},
	beforeDestroy : function() {
		Ext.destroy(this.panel);
		Ext.form.CheckboxGroup.superclass.beforeDestroy.call(this)
	},
	setValueForItem : function(a) {
		a = String(a).split(",");
		this.eachItem(function(b) {
					if (a.indexOf(b.inputValue) > -1) {
						b.setValue(true)
					}
				})
	},
	getBox : function(b) {
		var a = null;
		this.eachItem(function(c) {
					if (b == c || c.dataIndex == b || c.id == b
							|| c.getName() == b) {
						a = c;
						return false
					}
				});
		return a
	},
	getValue : function() {
		var a = [];
		this.eachItem(function(b) {
					if (b.checked) {
						a.push(b)
					}
				});
		return a
	},
	eachItem : function(a) {
		if (this.items && this.items.each) {
			this.items.each(a, this)
		}
	},
	getRawValue : Ext.emptyFn,
	setRawValue : Ext.emptyFn
});
Ext.reg("checkboxgroup", Ext.form.CheckboxGroup);
Ext.form.Radio = Ext.extend(Ext.form.Checkbox, {
			inputType : "radio",
			markInvalid : Ext.emptyFn,
			clearInvalid : Ext.emptyFn,
			getGroupValue : function() {
				var a = this.el.up("form") || Ext.getBody();
				var b = a.child("input[name=" + this.el.dom.name + "]:checked",
						true);
				return b ? b.value : null
			},
			onClick : function() {
				if (this.el.dom.checked != this.checked) {
					var a = this.getCheckEl().select("input[name="
							+ this.el.dom.name + "]");
					a.each(function(b) {
								if (b.dom.id == this.id) {
									this.setValue(true)
								} else {
									Ext.getCmp(b.dom.id).setValue(false)
								}
							}, this)
				}
			},
			setValue : function(a) {
				if (typeof a == "boolean") {
					Ext.form.Radio.superclass.setValue.call(this, a)
				} else {
					var b = this.getCheckEl().child(
							"input[name=" + this.el.dom.name + "][value=" + a
									+ "]", true);
					if (b) {
						Ext.getCmp(b.id).setValue(true)
					}
				}
				return this
			},
			getCheckEl : function() {
				if (this.inGroup) {
					return this.el.up(".x-form-radio-group")
				}
				return this.el.up("form") || Ext.getBody()
			}
		});
Ext.reg("radio", Ext.form.Radio);
Ext.form.RadioGroup = Ext.extend(Ext.form.CheckboxGroup, {
			allowBlank : true,
			blankText : "You must select one item in this group",
			defaultType : "radio",
			groupCls : "x-form-radio-group",
			getValue : function() {
				var a = null;
				this.eachItem(function(b) {
							if (b.checked) {
								a = b;
								return false
							}
						});
				return a
			},
			onSetValue : function(c, b) {
				if (arguments.length > 1) {
					var a = this.getBox(c);
					if (a) {
						a.setValue(b);
						if (a.checked) {
							this.eachItem(function(d) {
										if (d !== a) {
											d.setValue(false)
										}
									})
						}
					}
				} else {
					this.setValueForItem(c)
				}
			},
			setValueForItem : function(a) {
				a = String(a).split(",")[0];
				this.eachItem(function(b) {
							b.setValue(a == b.inputValue)
						})
			},
			fireChecked : function() {
				if (!this.checkTask) {
					this.checkTask = new Ext.util.DelayedTask(
							this.bufferChecked, this)
				}
				this.checkTask.delay(10)
			},
			bufferChecked : function() {
				var a = null;
				this.eachItem(function(b) {
							if (b.checked) {
								a = b;
								return false
							}
						});
				this.fireEvent("change", this, a)
			},
			onDestroy : function() {
				if (this.checkTask) {
					this.checkTask.cancel();
					this.checkTask = null
				}
				Ext.form.RadioGroup.superclass.onDestroy.call(this)
			}
		});
Ext.reg("radiogroup", Ext.form.RadioGroup);
Ext.form.Hidden = Ext.extend(Ext.form.Field, {
			inputType : "hidden",
			onRender : function() {
				Ext.form.Hidden.superclass.onRender.apply(this, arguments)
			},
			initEvents : function() {
				this.originalValue = this.getValue()
			},
			setSize : Ext.emptyFn,
			setWidth : Ext.emptyFn,
			setHeight : Ext.emptyFn,
			setPosition : Ext.emptyFn,
			setPagePosition : Ext.emptyFn,
			markInvalid : Ext.emptyFn,
			clearInvalid : Ext.emptyFn
		});
Ext.reg("hidden", Ext.form.Hidden);
Ext.form.BasicForm = function(b, a) {
	Ext.apply(this, a);
	if (Ext.isString(this.paramOrder)) {
		this.paramOrder = this.paramOrder.split(/[\s,|]/)
	}
	this.items = new Ext.util.MixedCollection(false, function(c) {
				return c.getItemId()
			});
	this.addEvents("beforeaction", "actionfailed", "actioncomplete");
	if (b) {
		this.initEl(b)
	}
	Ext.form.BasicForm.superclass.constructor.call(this)
};
Ext.extend(Ext.form.BasicForm, Ext.util.Observable, {
	timeout : 30,
	paramOrder : undefined,
	paramsAsHash : false,
	waitTitle : "Please Wait...",
	activeAction : null,
	trackResetOnLoad : false,
	initEl : function(a) {
		this.el = Ext.get(a);
		this.id = this.el.id || Ext.id();
		if (!this.standardSubmit) {
			this.el.on("submit", this.onSubmit, this)
		}
		this.el.addClass("x-form")
	},
	getEl : function() {
		return this.el
	},
	onSubmit : function(a) {
		a.stopEvent()
	},
	destroy : function() {
		this.items.each(function(a) {
					Ext.destroy(a)
				});
		if (this.el) {
			this.el.removeAllListeners();
			this.el.remove()
		}
		this.purgeListeners()
	},
	isValid : function() {
		var a = true;
		this.items.each(function(b) {
					if (!b.validate()) {
						a = false
					}
				});
		return a
	},
	isDirty : function() {
		var a = false;
		this.items.each(function(b) {
					if (b.isDirty()) {
						a = true;
						return false
					}
				});
		return a
	},
	doAction : function(b, a) {
		if (Ext.isString(b)) {
			b = new Ext.form.Action.ACTION_TYPES[b](this, a)
		}
		if (this.fireEvent("beforeaction", this, b) !== false) {
			this.beforeAction(b);
			b.run.defer(100, b)
		}
		return this
	},
	submit : function(b) {
		if (this.standardSubmit) {
			var a = this.isValid();
			if (a) {
				var c = this.el.dom;
				if (this.url && Ext.isEmpty(c.action)) {
					c.action = this.url
				}
				c.submit()
			}
			return a
		}
		var d = String.format("{0}submit", this.api ? "direct" : "");
		this.doAction(d, b);
		return this
	},
	load : function(a) {
		var b = String.format("{0}load", this.api ? "direct" : "");
		this.doAction(b, a);
		return this
	},
	updateRecord : function(b) {
		b.beginEdit();
		var a = b.fields;
		a.each(function(c) {
					var d = this.findField(c.name);
					if (d) {
						b.set(c.name, d.getValue())
					}
				}, this);
		b.endEdit();
		return this
	},
	loadRecord : function(a) {
		this.setValues(a.data);
		return this
	},
	beforeAction : function(a) {
		var b = a.options;
		if (b.waitMsg) {
			if (this.waitMsgTarget === true) {
				this.el.mask(b.waitMsg, "x-mask-loading")
			} else {
				if (this.waitMsgTarget) {
					this.waitMsgTarget = Ext.get(this.waitMsgTarget);
					this.waitMsgTarget.mask(b.waitMsg, "x-mask-loading")
				} else {
					Ext.MessageBox.wait(b.waitMsg, b.waitTitle
									|| this.waitTitle)
				}
			}
		}
	},
	afterAction : function(a, c) {
		this.activeAction = null;
		var b = a.options;
		if (b.waitMsg) {
			if (this.waitMsgTarget === true) {
				this.el.unmask()
			} else {
				if (this.waitMsgTarget) {
					this.waitMsgTarget.unmask()
				} else {
					Ext.MessageBox.updateProgress(1);
					Ext.MessageBox.hide()
				}
			}
		}
		if (c) {
			if (b.reset) {
				this.reset()
			}
			Ext.callback(b.success, b.scope, [this, a]);
			this.fireEvent("actioncomplete", this, a)
		} else {
			Ext.callback(b.failure, b.scope, [this, a]);
			this.fireEvent("actionfailed", this, a)
		}
	},
	findField : function(b) {
		var a = this.items.get(b);
		if (!Ext.isObject(a)) {
			this.items.each(function(c) {
				if (c.isFormField
						&& (c.dataIndex == b || c.id == b || c.getName() == b)) {
					a = c;
					return false
				}
			})
		}
		return a || null
	},
	markInvalid : function(h) {
		if (Ext.isArray(h)) {
			for (var c = 0, a = h.length; c < a; c++) {
				var b = h[c];
				var d = this.findField(b.id);
				if (d) {
					d.markInvalid(b.msg)
				}
			}
		} else {
			var e, g;
			for (g in h) {
				if (!Ext.isFunction(h[g]) && (e = this.findField(g))) {
					e.markInvalid(h[g])
				}
			}
		}
		return this
	},
	setValues : function(c) {
		if (Ext.isArray(c)) {
			for (var d = 0, a = c.length; d < a; d++) {
				var b = c[d];
				var e = this.findField(b.id);
				if (e) {
					e.setValue(b.value);
					if (this.trackResetOnLoad) {
						e.originalValue = e.getValue()
					}
				}
			}
		} else {
			var g, h;
			for (h in c) {
				if (!Ext.isFunction(c[h]) && (g = this.findField(h))) {
					g.setValue(c[h]);
					if (this.trackResetOnLoad) {
						g.originalValue = g.getValue()
					}
				}
			}
		}
		return this
	},
	getValues : function(b) {
		var a = Ext.lib.Ajax.serializeForm(this.el.dom);
		if (b === true) {
			return a
		}
		return Ext.urlDecode(a)
	},
	getFieldValues : function(a) {
		var d = {}, e, b, c;
		this.items.each(function(g) {
					if (a !== true || g.isDirty()) {
						e = g.getName();
						b = d[e];
						c = g.getValue();
						if (Ext.isDefined(b)) {
							if (Ext.isArray(b)) {
								d[e].push(c)
							} else {
								d[e] = [b, c]
							}
						} else {
							d[e] = c
						}
					}
				});
		return d
	},
	clearInvalid : function() {
		this.items.each(function(a) {
					a.clearInvalid()
				});
		return this
	},
	reset : function() {
		this.items.each(function(a) {
					a.reset()
				});
		return this
	},
	add : function() {
		this.items.addAll(Array.prototype.slice.call(arguments, 0));
		return this
	},
	remove : function(a) {
		this.items.remove(a);
		return this
	},
	render : function() {
		this.items.each(function(a) {
					if (a.isFormField && !a.rendered
							&& document.getElementById(a.id)) {
						a.applyToMarkup(a.id)
					}
				});
		return this
	},
	applyToFields : function(a) {
		this.items.each(function(b) {
					Ext.apply(b, a)
				});
		return this
	},
	applyIfToFields : function(a) {
		this.items.each(function(b) {
					Ext.applyIf(b, a)
				});
		return this
	},
	callFieldMethod : function(b, a) {
		a = a || [];
		this.items.each(function(c) {
					if (Ext.isFunction(c[b])) {
						c[b].apply(c, a)
					}
				});
		return this
	}
});
Ext.BasicForm = Ext.form.BasicForm;
Ext.FormPanel = Ext.extend(Ext.Panel, {
			minButtonWidth : 75,
			labelAlign : "left",
			monitorValid : false,
			monitorPoll : 200,
			layout : "form",
			initComponent : function() {
				this.form = this.createForm();
				Ext.FormPanel.superclass.initComponent.call(this);
				this.bodyCfg = {
					tag : "form",
					cls : this.baseCls + "-body",
					method : this.method || "POST",
					id : this.formId || Ext.id()
				};
				if (this.fileUpload) {
					this.bodyCfg.enctype = "multipart/form-data"
				}
				this.initItems();
				this.addEvents("clientvalidation");
				this.relayEvents(this.form, ["beforeaction", "actionfailed",
								"actioncomplete"])
			},
			createForm : function() {
				var a = Ext.applyIf({
							listeners : {}
						}, this.initialConfig);
				return new Ext.form.BasicForm(null, a)
			},
			initFields : function() {
				var c = this.form;
				var a = this;
				var b = function(d) {
					if (a.isField(d)) {
						c.add(d)
					} else {
						if (d.findBy && d != a) {
							a.applySettings(d);
							if (d.items && d.items.each) {
								d.items.each(b, this)
							}
						}
					}
				};
				this.items.each(b, this)
			},
			applySettings : function(b) {
				var a = b.ownerCt;
				Ext.applyIf(b, {
							labelAlign : a.labelAlign,
							labelWidth : a.labelWidth,
							itemCls : a.itemCls
						})
			},
			getLayoutTarget : function() {
				return this.form.el
			},
			getForm : function() {
				return this.form
			},
			onRender : function(b, a) {
				this.initFields();
				Ext.FormPanel.superclass.onRender.call(this, b, a);
				this.form.initEl(this.body)
			},
			beforeDestroy : function() {
				this.stopMonitoring();
				Ext.destroy(this.form);
				this.form.items.clear();
				Ext.FormPanel.superclass.beforeDestroy.call(this)
			},
			isField : function(a) {
				return !!a.setValue && !!a.getValue && !!a.markInvalid
						&& !!a.clearInvalid
			},
			initEvents : function() {
				Ext.FormPanel.superclass.initEvents.call(this);
				this.on({
							scope : this,
							add : this.onAddEvent,
							remove : this.onRemoveEvent
						});
				if (this.monitorValid) {
					this.startMonitoring()
				}
			},
			onAdd : function(a) {
				Ext.FormPanel.superclass.onAdd.call(this, a);
				this.processAdd(a)
			},
			onAddEvent : function(a, b) {
				if (a !== this) {
					this.processAdd(b)
				}
			},
			processAdd : function(a) {
				if (this.isField(a)) {
					this.form.add(a)
				} else {
					if (a.findBy) {
						this.applySettings(a);
						this.form.add.apply(this.form, a.findBy(this.isField))
					}
				}
			},
			onRemove : function(a) {
				Ext.FormPanel.superclass.onRemove.call(this, a);
				this.processRemove(a)
			},
			onRemoveEvent : function(a, b) {
				if (a !== this) {
					this.processRemove(b)
				}
			},
			processRemove : function(b) {
				if (this.isField(b)) {
					this.form.remove(b)
				} else {
					if (b.findBy) {
						var a = function(c) {
							return !!c.isDestroyed
						};
						this.form.items.filterBy(a, this.form).each(
								this.form.remove, this.form)
					}
				}
			},
			startMonitoring : function() {
				if (!this.validTask) {
					this.validTask = new Ext.util.TaskRunner();
					this.validTask.start({
								run : this.bindHandler,
								interval : this.monitorPoll || 200,
								scope : this
							})
				}
			},
			stopMonitoring : function() {
				if (this.validTask) {
					this.validTask.stopAll();
					this.validTask = null
				}
			},
			load : function() {
				this.form.load.apply(this.form, arguments)
			},
			onDisable : function() {
				Ext.FormPanel.superclass.onDisable.call(this);
				if (this.form) {
					this.form.items.each(function() {
								this.disable()
							})
				}
			},
			onEnable : function() {
				Ext.FormPanel.superclass.onEnable.call(this);
				if (this.form) {
					this.form.items.each(function() {
								this.enable()
							})
				}
			},
			bindHandler : function() {
				var e = true;
				this.form.items.each(function(g) {
							if (!g.isValid(true)) {
								e = false;
								return false
							}
						});
				if (this.fbar) {
					var b = this.fbar.items.items;
					for (var d = 0, a = b.length; d < a; d++) {
						var c = b[d];
						if (c.formBind === true && c.disabled === e) {
							c.setDisabled(!e)
						}
					}
				}
				this.fireEvent("clientvalidation", this, e)
			}
		});
Ext.reg("form", Ext.FormPanel);
Ext.form.FormPanel = Ext.FormPanel;
Ext.form.FieldSet = Ext.extend(Ext.Panel, {
	baseCls : "x-fieldset",
	layout : "form",
	animCollapse : false,
	onRender : function(b, a) {
		if (!this.el) {
			this.el = document.createElement("fieldset");
			this.el.id = this.id;
			if (this.title || this.header || this.checkboxToggle) {
				this.el.appendChild(document.createElement("legend")).className = "x-fieldset-header"
			}
		}
		Ext.form.FieldSet.superclass.onRender.call(this, b, a);
		if (this.checkboxToggle) {
			var c = typeof this.checkboxToggle == "object"
					? this.checkboxToggle
					: {
						tag : "input",
						type : "checkbox",
						name : this.checkboxName || this.id + "-checkbox"
					};
			this.checkbox = this.header.insertFirst(c);
			this.checkbox.dom.checked = !this.collapsed;
			this.mon(this.checkbox, "click", this.onCheckClick, this)
		}
	},
	onCollapse : function(a, b) {
		if (this.checkbox) {
			this.checkbox.dom.checked = false
		}
		Ext.form.FieldSet.superclass.onCollapse.call(this, a, b)
	},
	onExpand : function(a, b) {
		if (this.checkbox) {
			this.checkbox.dom.checked = true
		}
		Ext.form.FieldSet.superclass.onExpand.call(this, a, b)
	},
	onCheckClick : function() {
		this[this.checkbox.dom.checked ? "expand" : "collapse"]()
	}
});
Ext.reg("fieldset", Ext.form.FieldSet);
Ext.form.HtmlEditor = Ext.extend(Ext.form.Field, {
	enableFormat : true,
	enableFontSize : true,
	enableColors : true,
	enableAlignments : true,
	enableLists : true,
	enableSourceEdit : true,
	enableLinks : true,
	enableFont : true,
	createLinkText : "Please enter the URL for the link:",
	defaultLinkValue : "http://",
	fontFamilies : ["Arial", "Courier New", "Tahoma", "Times New Roman",
			"Verdana"],
	defaultFont : "tahoma",
	defaultValue : (Ext.isOpera || Ext.isIE6) ? "&#160;" : "&#8203;",
	actionMode : "wrap",
	validationEvent : false,
	deferHeight : true,
	initialized : false,
	activated : false,
	sourceEditMode : false,
	onFocus : Ext.emptyFn,
	iframePad : 3,
	hideMode : "offsets",
	defaultAutoCreate : {
		tag : "textarea",
		style : "width:500px;height:300px;",
		autocomplete : "off"
	},
	initComponent : function() {
		this.addEvents("initialize", "activate", "beforesync", "beforepush",
				"sync", "push", "editmodechange")
	},
	createFontOptions : function() {
		var d = [], b = this.fontFamilies, c, g;
		for (var e = 0, a = b.length; e < a; e++) {
			c = b[e];
			g = c.toLowerCase();
			d.push('<option value="', g, '" style="font-family:', c, ';"',
					(this.defaultFont == g ? ' selected="true">' : ">"), c,
					"</option>")
		}
		return d.join("")
	},
	createToolbar : function(e) {
		var c = [];
		var a = Ext.QuickTips && Ext.QuickTips.isEnabled();
		function d(k, h, j) {
			return {
				itemId : k,
				cls : "x-btn-icon",
				iconCls : "x-edit-" + k,
				enableToggle : h !== false,
				scope : e,
				handler : j || e.relayBtnCmd,
				clickEvent : "mousedown",
				tooltip : a ? e.buttonTips[k] || undefined : undefined,
				overflowText : e.buttonTips[k].title || undefined,
				tabIndex : -1
			}
		}
		if (this.enableFont && !Ext.isSafari2) {
			var g = new Ext.Toolbar.Item({
						autoEl : {
							tag : "select",
							cls : "x-font-select",
							html : this.createFontOptions()
						}
					});
			c.push(g, "-")
		}
		if (this.enableFormat) {
			c.push(d("bold"), d("italic"), d("underline"))
		}
		if (this.enableFontSize) {
			c.push("-", d("increasefontsize", false, this.adjustFont), d(
							"decreasefontsize", false, this.adjustFont))
		}
		if (this.enableColors) {
			c.push("-", {
						itemId : "forecolor",
						cls : "x-btn-icon",
						iconCls : "x-edit-forecolor",
						clickEvent : "mousedown",
						tooltip : a
								? e.buttonTips.forecolor || undefined
								: undefined,
						tabIndex : -1,
						menu : new Ext.menu.ColorMenu({
									allowReselect : true,
									focus : Ext.emptyFn,
									value : "000000",
									plain : true,
									listeners : {
										scope : this,
										select : function(j, h) {
											this.execCmd("forecolor",
													Ext.isWebKit || Ext.isIE
															? "#" + h
															: h);
											this.deferFocus()
										}
									},
									clickEvent : "mousedown"
								})
					}, {
						itemId : "backcolor",
						cls : "x-btn-icon",
						iconCls : "x-edit-backcolor",
						clickEvent : "mousedown",
						tooltip : a
								? e.buttonTips.backcolor || undefined
								: undefined,
						tabIndex : -1,
						menu : new Ext.menu.ColorMenu({
									focus : Ext.emptyFn,
									value : "FFFFFF",
									plain : true,
									allowReselect : true,
									listeners : {
										scope : this,
										select : function(j, h) {
											if (Ext.isGecko) {
												this.execCmd("useCSS", false);
												this.execCmd("hilitecolor", h);
												this.execCmd("useCSS", true);
												this.deferFocus()
											} else {
												this.execCmd(Ext.isOpera
																? "hilitecolor"
																: "backcolor",
														Ext.isWebKit
																|| Ext.isIE
																? "#" + h
																: h);
												this.deferFocus()
											}
										}
									},
									clickEvent : "mousedown"
								})
					})
		}
		if (this.enableAlignments) {
			c
					.push("-", d("justifyleft"), d("justifycenter"),
							d("justifyright"))
		}
		if (!Ext.isSafari2) {
			if (this.enableLinks) {
				c.push("-", d("createlink", false, this.createLink))
			}
			if (this.enableLists) {
				c.push("-", d("insertorderedlist"), d("insertunorderedlist"))
			}
			if (this.enableSourceEdit) {
				c.push("-", d("sourceedit", true, function(h) {
									this.toggleSourceEdit(!this.sourceEditMode)
								}))
			}
		}
		var b = new Ext.Toolbar({
					renderTo : this.wrap.dom.firstChild,
					items : c
				});
		if (g) {
			this.fontSelect = g.el;
			this.mon(this.fontSelect, "change", function() {
						var h = this.fontSelect.dom.value;
						this.relayCmd("fontname", h);
						this.deferFocus()
					}, this)
		}
		this.mon(b.el, "click", function(h) {
					h.preventDefault()
				});
		this.tb = b
	},
	onDisable : function() {
		this.wrap.mask();
		Ext.form.HtmlEditor.superclass.onDisable.call(this)
	},
	onEnable : function() {
		this.wrap.unmask();
		Ext.form.HtmlEditor.superclass.onEnable.call(this)
	},
	setReadOnly : function(c) {
		if (this.initialized) {
			var a = c ? "off" : "on", b = this.getDoc();
			if (String(b.designMode).toLowerCase() != a) {
				b.designMode = a
			}
			this.disableItems(!c)
		}
		Ext.form.HtmlEditor.superclass.setReadOnly.call(this, c)
	},
	getDocMarkup : function() {
		return '<html><head><style type="text/css">body{border:0;margin:0;padding:3px;height:98%;cursor:text;}</style></head><body></body></html>'
	},
	getEditorBody : function() {
		var a = this.getDoc();
		return a.body || a.documentElement
	},
	getDoc : function() {
		return Ext.isIE
				? this.getWin().document
				: (this.iframe.contentDocument || this.getWin().document)
	},
	getWin : function() {
		return Ext.isIE
				? this.iframe.contentWindow
				: window.frames[this.iframe.name]
	},
	onRender : function(b, a) {
		Ext.form.HtmlEditor.superclass.onRender.call(this, b, a);
		this.el.dom.style.border = "0 none";
		this.el.dom.setAttribute("tabIndex", -1);
		this.el.addClass("x-hidden");
		if (Ext.isIE) {
			this.el.applyStyles("margin-top:-1px;margin-bottom:-1px;")
		}
		this.wrap = this.el.wrap({
					cls : "x-html-editor-wrap",
					cn : {
						cls : "x-html-editor-tb"
					}
				});
		this.createToolbar(this);
		this.disableItems(true);
		this.createIFrame();
		if (!this.width) {
			var c = this.el.getSize();
			this.setSize(c.width, this.height || c.height)
		}
		this.resizeEl = this.positionEl = this.wrap
	},
	createIFrame : function() {
		var a = document.createElement("iframe");
		a.name = Ext.id();
		a.frameBorder = "0";
		a.src = Ext.SSL_SECURE_URL;
		this.wrap.dom.appendChild(a);
		this.iframe = a;
		this.monitorTask = Ext.TaskMgr.start({
					run : this.checkDesignMode,
					scope : this,
					interval : 100
				})
	},
	initFrame : function() {
		Ext.TaskMgr.stop(this.monitorTask);
		var b = this.getDoc();
		this.win = this.getWin();
		b.open();
		b.write(this.getDocMarkup());
		b.close();
		var a = {
			run : function() {
				var c = this.getDoc();
				if (c.body || c.readyState == "complete") {
					Ext.TaskMgr.stop(a);
					c.designMode = "on";
					this.initEditor.defer(10, this)
				}
			},
			interval : 10,
			duration : 10000,
			scope : this
		};
		Ext.TaskMgr.start(a)
	},
	checkDesignMode : function() {
		if (this.wrap && this.wrap.dom.offsetWidth) {
			var a = this.getDoc();
			if (!a) {
				return
			}
			if (!a.editorInitialized
					|| String(a.designMode).toLowerCase() != "on") {
				this.initFrame()
			}
		}
	},
	disableItems : function(a) {
		if (this.fontSelect) {
			this.fontSelect.dom.disabled = a
		}
		this.tb.items.each(function(b) {
					if (b.getItemId() != "sourceedit") {
						b.setDisabled(a)
					}
				})
	},
	onResize : function(b, c) {
		Ext.form.HtmlEditor.superclass.onResize.apply(this, arguments);
		if (this.el && this.iframe) {
			if (Ext.isNumber(b)) {
				var e = b - this.wrap.getFrameWidth("lr");
				this.el.setWidth(e);
				this.tb.setWidth(e);
				this.iframe.style.width = Math.max(e, 0) + "px"
			}
			if (Ext.isNumber(c)) {
				var a = c - this.wrap.getFrameWidth("tb")
						- this.tb.el.getHeight();
				this.el.setHeight(a);
				this.iframe.style.height = Math.max(a, 0) + "px";
				var d = this.getEditorBody();
				if (d) {
					d.style.height = Math.max((a - (this.iframePad * 2)), 0)
							+ "px"
				}
			}
		}
	},
	toggleSourceEdit : function(a) {
		if (a === undefined) {
			a = !this.sourceEditMode
		}
		this.sourceEditMode = a === true;
		var c = this.tb.getComponent("sourceedit");
		if (c.pressed !== this.sourceEditMode) {
			c.toggle(this.sourceEditMode);
			if (!c.xtbHidden) {
				return
			}
		}
		if (this.sourceEditMode) {
			this.disableItems(true);
			this.syncValue();
			this.iframe.className = "x-hidden";
			this.el.removeClass("x-hidden");
			this.el.dom.removeAttribute("tabIndex");
			this.el.focus()
		} else {
			if (this.initialized && !this.readOnly) {
				this.disableItems(false)
			}
			this.pushValue();
			this.iframe.className = "";
			this.el.addClass("x-hidden");
			this.el.dom.setAttribute("tabIndex", -1);
			this.deferFocus()
		}
		var b = this.lastSize;
		if (b) {
			delete this.lastSize;
			this.setSize(b)
		}
		this.fireEvent("editmodechange", this, this.sourceEditMode)
	},
	createLink : function() {
		var a = prompt(this.createLinkText, this.defaultLinkValue);
		if (a && a != "http://") {
			this.relayCmd("createlink", a)
		}
	},
	initEvents : function() {
		this.originalValue = this.getValue()
	},
	markInvalid : Ext.emptyFn,
	clearInvalid : Ext.emptyFn,
	setValue : function(a) {
		Ext.form.HtmlEditor.superclass.setValue.call(this, a);
		this.pushValue();
		return this
	},
	cleanHtml : function(a) {
		a = String(a);
		if (Ext.isWebKit) {
			a = a.replace(
					/\sclass="(?:Apple-style-span|khtml-block-placeholder)"/gi,
					"")
		}
		if (a.charCodeAt(0) == this.defaultValue.replace(/\D/g, "")) {
			a = a.substring(1)
		}
		return a
	},
	syncValue : function() {
		if (this.initialized) {
			var d = this.getEditorBody();
			var c = d.innerHTML;
			if (Ext.isWebKit) {
				var b = d.getAttribute("style");
				var a = b.match(/text-align:(.*?);/i);
				if (a && a[1]) {
					c = '<div style="' + a[0] + '">' + c + "</div>"
				}
			}
			c = this.cleanHtml(c);
			if (this.fireEvent("beforesync", this, c) !== false) {
				this.el.dom.value = c;
				this.fireEvent("sync", this, c)
			}
		}
	},
	getValue : function() {
		this[this.sourceEditMode ? "pushValue" : "syncValue"]();
		return Ext.form.HtmlEditor.superclass.getValue.call(this)
	},
	pushValue : function() {
		if (this.initialized) {
			var a = this.el.dom.value;
			if (!this.activated && a.length < 1) {
				a = this.defaultValue
			}
			if (this.fireEvent("beforepush", this, a) !== false) {
				this.getEditorBody().innerHTML = a;
				if (Ext.isGecko) {
					var c = this.getDoc(), b = c.designMode.toLowerCase();
					c.designMode = b.toggle("on", "off");
					c.designMode = b
				}
				this.fireEvent("push", this, a)
			}
		}
	},
	deferFocus : function() {
		this.focus.defer(10, this)
	},
	focus : function() {
		if (this.win && !this.sourceEditMode) {
			this.win.focus()
		} else {
			this.el.focus()
		}
	},
	initEditor : function() {
		try {
			var c = this.getEditorBody(), a = this.el.getStyles("font-size",
					"font-family", "background-image", "background-repeat"), g, b;
			a["background-attachment"] = "fixed";
			c.bgProperties = "fixed";
			Ext.DomHelper.applyStyles(c, a);
			g = this.getDoc();
			if (g) {
				try {
					Ext.EventManager.removeAll(g)
				} catch (d) {
				}
			}
			b = this.onEditorEvent.createDelegate(this);
			Ext.EventManager.on(g, {
						mousedown : b,
						dblclick : b,
						click : b,
						keyup : b,
						buffer : 100
					});
			if (Ext.isGecko) {
				Ext.EventManager.on(g, "keypress", this.applyCommand, this)
			}
			if (Ext.isIE || Ext.isWebKit || Ext.isOpera) {
				Ext.EventManager.on(g, "keydown", this.fixKeys, this)
			}
			g.editorInitialized = true;
			this.initialized = true;
			this.pushValue();
			this.setReadOnly(this.readOnly);
			this.fireEvent("initialize", this)
		} catch (d) {
		}
	},
	onDestroy : function() {
		if (this.monitorTask) {
			Ext.TaskMgr.stop(this.monitorTask)
		}
		if (this.rendered) {
			Ext.destroy(this.tb);
			var b = this.getDoc();
			if (b) {
				try {
					Ext.EventManager.removeAll(b);
					for (var c in b) {
						delete b[c]
					}
				} catch (a) {
				}
			}
			if (this.wrap) {
				this.wrap.dom.innerHTML = "";
				this.wrap.remove()
			}
		}
		if (this.el) {
			this.el.removeAllListeners();
			this.el.remove()
		}
		this.purgeListeners()
	},
	onFirstFocus : function() {
		this.activated = true;
		this.disableItems(false);
		if (Ext.isGecko) {
			this.win.focus();
			var a = this.win.getSelection();
			if (!a.focusNode || a.focusNode.nodeType != 3) {
				var b = a.getRangeAt(0);
				b.selectNodeContents(this.getEditorBody());
				b.collapse(true);
				this.deferFocus()
			}
			try {
				this.execCmd("useCSS", true);
				this.execCmd("styleWithCSS", false)
			} catch (c) {
			}
		}
		this.fireEvent("activate", this)
	},
	adjustFont : function(b) {
		var d = b.getItemId() == "increasefontsize" ? 1 : -1, c = this.getDoc(), a = parseInt(
				c.queryCommandValue("FontSize") || 2, 10);
		if ((Ext.isSafari && !Ext.isSafari2) || Ext.isChrome || Ext.isAir) {
			if (a <= 10) {
				a = 1 + d
			} else {
				if (a <= 13) {
					a = 2 + d
				} else {
					if (a <= 16) {
						a = 3 + d
					} else {
						if (a <= 18) {
							a = 4 + d
						} else {
							if (a <= 24) {
								a = 5 + d
							} else {
								a = 6 + d
							}
						}
					}
				}
			}
			a = a.constrain(1, 6)
		} else {
			if (Ext.isSafari) {
				d *= 2
			}
			a = Math.max(1, a + d) + (Ext.isSafari ? "px" : 0)
		}
		this.execCmd("FontSize", a)
	},
	onEditorEvent : function(a) {
		this.updateToolbar()
	},
	updateToolbar : function() {
		if (this.readOnly) {
			return
		}
		if (!this.activated) {
			this.onFirstFocus();
			return
		}
		var b = this.tb.items.map, c = this.getDoc();
		if (this.enableFont && !Ext.isSafari2) {
			var a = (c.queryCommandValue("FontName") || this.defaultFont)
					.toLowerCase();
			if (a != this.fontSelect.dom.value) {
				this.fontSelect.dom.value = a
			}
		}
		if (this.enableFormat) {
			b.bold.toggle(c.queryCommandState("bold"));
			b.italic.toggle(c.queryCommandState("italic"));
			b.underline.toggle(c.queryCommandState("underline"))
		}
		if (this.enableAlignments) {
			b.justifyleft.toggle(c.queryCommandState("justifyleft"));
			b.justifycenter.toggle(c.queryCommandState("justifycenter"));
			b.justifyright.toggle(c.queryCommandState("justifyright"))
		}
		if (!Ext.isSafari2 && this.enableLists) {
			b.insertorderedlist
					.toggle(c.queryCommandState("insertorderedlist"));
			b.insertunorderedlist.toggle(c
					.queryCommandState("insertunorderedlist"))
		}
		Ext.menu.MenuMgr.hideAll();
		this.syncValue()
	},
	relayBtnCmd : function(a) {
		this.relayCmd(a.getItemId())
	},
	relayCmd : function(b, a) {
(function() {
			this.focus();
			this.execCmd(b, a);
			this.updateToolbar()
		}).defer(10, this)
	},
	execCmd : function(b, a) {
		var c = this.getDoc();
		c.execCommand(b, false, a === undefined ? null : a);
		this.syncValue()
	},
	applyCommand : function(b) {
		if (b.ctrlKey) {
			var d = b.getCharCode(), a;
			if (d > 0) {
				d = String.fromCharCode(d);
				switch (d) {
					case "b" :
						a = "bold";
						break;
					case "i" :
						a = "italic";
						break;
					case "u" :
						a = "underline";
						break
				}
				if (a) {
					this.win.focus();
					this.execCmd(a);
					this.deferFocus();
					b.preventDefault()
				}
			}
		}
	},
	insertAtCursor : function(c) {
		if (!this.activated) {
			return
		}
		if (Ext.isIE) {
			this.win.focus();
			var b = this.getDoc(), a = b.selection.createRange();
			if (a) {
				a.pasteHTML(c);
				this.syncValue();
				this.deferFocus()
			}
		} else {
			this.win.focus();
			this.execCmd("InsertHTML", c);
			this.deferFocus()
		}
	},
	fixKeys : function() {
		if (Ext.isIE) {
			return function(g) {
				var a = g.getKey(), d = this.getDoc(), b;
				if (a == g.TAB) {
					g.stopEvent();
					b = d.selection.createRange();
					if (b) {
						b.collapse(true);
						b.pasteHTML("&nbsp;&nbsp;&nbsp;&nbsp;");
						this.deferFocus()
					}
				} else {
					if (a == g.ENTER) {
						b = d.selection.createRange();
						if (b) {
							var c = b.parentElement();
							if (!c || c.tagName.toLowerCase() != "li") {
								g.stopEvent();
								b.pasteHTML("<br />");
								b.collapse(false);
								b.select()
							}
						}
					}
				}
			}
		} else {
			if (Ext.isOpera) {
				return function(b) {
					var a = b.getKey();
					if (a == b.TAB) {
						b.stopEvent();
						this.win.focus();
						this.execCmd("InsertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
						this.deferFocus()
					}
				}
			} else {
				if (Ext.isWebKit) {
					return function(b) {
						var a = b.getKey();
						if (a == b.TAB) {
							b.stopEvent();
							this.execCmd("InsertText", "\t");
							this.deferFocus()
						} else {
							if (a == b.ENTER) {
								b.stopEvent();
								this.execCmd("InsertHtml", "<br /><br />");
								this.deferFocus()
							}
						}
					}
				}
			}
		}
	}(),
	getToolbar : function() {
		return this.tb
	},
	buttonTips : {
		bold : {
			title : "Bold (Ctrl+B)",
			text : "Make the selected text bold.",
			cls : "x-html-editor-tip"
		},
		italic : {
			title : "Italic (Ctrl+I)",
			text : "Make the selected text italic.",
			cls : "x-html-editor-tip"
		},
		underline : {
			title : "Underline (Ctrl+U)",
			text : "Underline the selected text.",
			cls : "x-html-editor-tip"
		},
		increasefontsize : {
			title : "Grow Text",
			text : "Increase the font size.",
			cls : "x-html-editor-tip"
		},
		decreasefontsize : {
			title : "Shrink Text",
			text : "Decrease the font size.",
			cls : "x-html-editor-tip"
		},
		backcolor : {
			title : "Text Highlight Color",
			text : "Change the background color of the selected text.",
			cls : "x-html-editor-tip"
		},
		forecolor : {
			title : "Font Color",
			text : "Change the color of the selected text.",
			cls : "x-html-editor-tip"
		},
		justifyleft : {
			title : "Align Text Left",
			text : "Align text to the left.",
			cls : "x-html-editor-tip"
		},
		justifycenter : {
			title : "Center Text",
			text : "Center text in the editor.",
			cls : "x-html-editor-tip"
		},
		justifyright : {
			title : "Align Text Right",
			text : "Align text to the right.",
			cls : "x-html-editor-tip"
		},
		insertunorderedlist : {
			title : "Bullet List",
			text : "Start a bulleted list.",
			cls : "x-html-editor-tip"
		},
		insertorderedlist : {
			title : "Numbered List",
			text : "Start a numbered list.",
			cls : "x-html-editor-tip"
		},
		createlink : {
			title : "Hyperlink",
			text : "Make the selected text a hyperlink.",
			cls : "x-html-editor-tip"
		},
		sourceedit : {
			title : "Source Edit",
			text : "Switch to source editing mode.",
			cls : "x-html-editor-tip"
		}
	}
});
Ext.reg("htmleditor", Ext.form.HtmlEditor);
Ext.form.TimeField = Ext.extend(Ext.form.ComboBox, {
	minValue : undefined,
	maxValue : undefined,
	minText : "The time in this field must be equal to or after {0}",
	maxText : "The time in this field must be equal to or before {0}",
	invalidText : "{0} is not a valid time",
	format : "g:i A",
	altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H",
	increment : 15,
	mode : "local",
	triggerAction : "all",
	typeAhead : false,
	initDate : "1/1/2008",
	initComponent : function() {
		if (Ext.isDefined(this.minValue)) {
			this.setMinValue(this.minValue, true)
		}
		if (Ext.isDefined(this.maxValue)) {
			this.setMaxValue(this.maxValue, true)
		}
		if (!this.store) {
			this.generateStore(true)
		}
		Ext.form.TimeField.superclass.initComponent.call(this)
	},
	setMinValue : function(b, a) {
		this.setLimit(b, true, a);
		return this
	},
	setMaxValue : function(b, a) {
		this.setLimit(b, false, a);
		return this
	},
	generateStore : function(b) {
		var c = this.minValue || new Date(this.initDate).clearTime(), a = this.maxValue
				|| new Date(this.initDate).clearTime().add("mi", (24 * 60) - 1), d = [];
		while (c <= a) {
			d.push(c.dateFormat(this.format));
			c = c.add("mi", this.increment)
		}
		this.bindStore(d, b)
	},
	setLimit : function(b, g, a) {
		var e;
		if (Ext.isString(b)) {
			e = this.parseDate(b)
		} else {
			if (Ext.isDate(b)) {
				e = b
			}
		}
		if (e) {
			var c = new Date(this.initDate).clearTime();
			c.setHours(e.getHours(), e.getMinutes(), g ? 0 : 59, 0);
			this[g ? "minValue" : "maxValue"] = c;
			if (!a) {
				this.generateStore()
			}
		}
	},
	getValue : function() {
		var a = Ext.form.TimeField.superclass.getValue.call(this);
		return this.formatDate(this.parseDate(a)) || ""
	},
	setValue : function(a) {
		return Ext.form.TimeField.superclass.setValue.call(this, this
						.formatDate(this.parseDate(a)))
	},
	validateValue : Ext.form.DateField.prototype.validateValue,
	parseDate : Ext.form.DateField.prototype.parseDate,
	formatDate : Ext.form.DateField.prototype.formatDate,
	beforeBlur : function() {
		var a = this.parseDate(this.getRawValue());
		if (a) {
			this.setValue(a.dateFormat(this.format))
		}
		Ext.form.TimeField.superclass.beforeBlur.call(this)
	}
});
Ext.reg("timefield", Ext.form.TimeField);
Ext.form.Label = Ext.extend(Ext.BoxComponent, {
			onRender : function(b, a) {
				if (!this.el) {
					this.el = document.createElement("label");
					this.el.id = this.getId();
					this.el.innerHTML = this.text ? Ext.util.Format
							.htmlEncode(this.text) : (this.html || "");
					if (this.forId) {
						this.el.setAttribute("for", this.forId)
					}
				}
				Ext.form.Label.superclass.onRender.call(this, b, a)
			},
			setText : function(a, b) {
				var c = b === false;
				this[!c ? "text" : "html"] = a;
				delete this[c ? "text" : "html"];
				if (this.rendered) {
					this.el.dom.innerHTML = b !== false ? Ext.util.Format
							.htmlEncode(a) : a
				}
				return this
			}
		});
Ext.reg("label", Ext.form.Label);
Ext.form.Action = function(b, a) {
	this.form = b;
	this.options = a || {}
};
Ext.form.Action.CLIENT_INVALID = "client";
Ext.form.Action.SERVER_INVALID = "server";
Ext.form.Action.CONNECT_FAILURE = "connect";
Ext.form.Action.LOAD_FAILURE = "load";
Ext.form.Action.prototype = {
	type : "default",
	run : function(a) {
	},
	success : function(a) {
	},
	handleResponse : function(a) {
	},
	failure : function(a) {
		this.response = a;
		this.failureType = Ext.form.Action.CONNECT_FAILURE;
		this.form.afterAction(this, false)
	},
	processResponse : function(a) {
		this.response = a;
		if (!a.responseText && !a.responseXML) {
			return true
		}
		this.result = this.handleResponse(a);
		return this.result
	},
	getUrl : function(c) {
		var a = this.options.url || this.form.url || this.form.el.dom.action;
		if (c) {
			var b = this.getParams();
			if (b) {
				a = Ext.urlAppend(a, b)
			}
		}
		return a
	},
	getMethod : function() {
		return (this.options.method || this.form.method
				|| this.form.el.dom.method || "POST").toUpperCase()
	},
	getParams : function() {
		var a = this.form.baseParams;
		var b = this.options.params;
		if (b) {
			if (typeof b == "object") {
				b = Ext.urlEncode(Ext.applyIf(b, a))
			} else {
				if (typeof b == "string" && a) {
					b += "&" + Ext.urlEncode(a)
				}
			}
		} else {
			if (a) {
				b = Ext.urlEncode(a)
			}
		}
		return b
	},
	createCallback : function(a) {
		var a = a || {};
		return {
			success : this.success,
			failure : this.failure,
			scope : this,
			timeout : (a.timeout * 1000) || (this.form.timeout * 1000),
			upload : this.form.fileUpload ? this.success : undefined
		}
	}
};
Ext.form.Action.Submit = function(b, a) {
	Ext.form.Action.Submit.superclass.constructor.call(this, b, a)
};
Ext.extend(Ext.form.Action.Submit, Ext.form.Action, {
			type : "submit",
			run : function() {
				var b = this.options;
				var c = this.getMethod();
				var a = c == "GET";
				if (b.clientValidation === false || this.form.isValid()) {
					Ext.Ajax.request(Ext.apply(this.createCallback(b), {
								form : this.form.el.dom,
								url : this.getUrl(a),
								method : c,
								headers : b.headers,
								params : !a ? this.getParams() : null,
								isUpload : this.form.fileUpload
							}))
				} else {
					if (b.clientValidation !== false) {
						this.failureType = Ext.form.Action.CLIENT_INVALID;
						this.form.afterAction(this, false)
					}
				}
			},
			success : function(b) {
				var a = this.processResponse(b);
				if (a === true || a.success) {
					this.form.afterAction(this, true);
					return
				}
				if (a.errors) {
					this.form.markInvalid(a.errors)
				}
				this.failureType = Ext.form.Action.SERVER_INVALID;
				this.form.afterAction(this, false)
			},
			handleResponse : function(c) {
				if (this.form.errorReader) {
					var b = this.form.errorReader.read(c);
					var g = [];
					if (b.records) {
						for (var d = 0, a = b.records.length; d < a; d++) {
							var e = b.records[d];
							g[d] = e.data
						}
					}
					if (g.length < 1) {
						g = null
					}
					return {
						success : b.success,
						errors : g
					}
				}
				return Ext.decode(c.responseText)
			}
		});
Ext.form.Action.Load = function(b, a) {
	Ext.form.Action.Load.superclass.constructor.call(this, b, a);
	this.reader = this.form.reader
};
Ext.extend(Ext.form.Action.Load, Ext.form.Action, {
			type : "load",
			run : function() {
				Ext.Ajax.request(Ext.apply(this.createCallback(this.options), {
							method : this.getMethod(),
							url : this.getUrl(false),
							headers : this.options.headers,
							params : this.getParams()
						}))
			},
			success : function(b) {
				var a = this.processResponse(b);
				if (a === true || !a.success || !a.data) {
					this.failureType = Ext.form.Action.LOAD_FAILURE;
					this.form.afterAction(this, false);
					return
				}
				this.form.clearInvalid();
				this.form.setValues(a.data);
				this.form.afterAction(this, true)
			},
			handleResponse : function(b) {
				if (this.form.reader) {
					var a = this.form.reader.read(b);
					var c = a.records && a.records[0]
							? a.records[0].data
							: null;
					return {
						success : a.success,
						data : c
					}
				}
				return Ext.decode(b.responseText)
			}
		});
Ext.form.Action.DirectLoad = Ext.extend(Ext.form.Action.Load, {
			constructor : function(b, a) {
				Ext.form.Action.DirectLoad.superclass.constructor.call(this, b,
						a)
			},
			type : "directload",
			run : function() {
				var a = this.getParams();
				a.push(this.success, this);
				this.form.api.load.apply(window, a)
			},
			getParams : function() {
				var c = [], h = {};
				var e = this.form.baseParams;
				var g = this.options.params;
				Ext.apply(h, g, e);
				var b = this.form.paramOrder;
				if (b) {
					for (var d = 0, a = b.length; d < a; d++) {
						c.push(h[b[d]])
					}
				} else {
					if (this.form.paramsAsHash) {
						c.push(h)
					}
				}
				return c
			},
			processResponse : function(a) {
				this.result = a;
				return a
			},
			success : function(a, b) {
				if (b.type == Ext.Direct.exceptions.SERVER) {
					a = {}
				}
				Ext.form.Action.DirectLoad.superclass.success.call(this, a)
			}
		});
Ext.form.Action.DirectSubmit = Ext.extend(Ext.form.Action.Submit, {
			constructor : function(b, a) {
				Ext.form.Action.DirectSubmit.superclass.constructor.call(this,
						b, a)
			},
			type : "directsubmit",
			run : function() {
				var a = this.options;
				if (a.clientValidation === false || this.form.isValid()) {
					this.success.params = this.getParams();
					this.form.api.submit(this.form.el.dom, this.success, this)
				} else {
					if (a.clientValidation !== false) {
						this.failureType = Ext.form.Action.CLIENT_INVALID;
						this.form.afterAction(this, false)
					}
				}
			},
			getParams : function() {
				var c = {};
				var a = this.form.baseParams;
				var b = this.options.params;
				Ext.apply(c, b, a);
				return c
			},
			processResponse : function(a) {
				this.result = a;
				return a
			},
			success : function(a, b) {
				if (b.type == Ext.Direct.exceptions.SERVER) {
					a = {}
				}
				Ext.form.Action.DirectSubmit.superclass.success.call(this, a)
			}
		});
Ext.form.Action.ACTION_TYPES = {
	load : Ext.form.Action.Load,
	submit : Ext.form.Action.Submit,
	directload : Ext.form.Action.DirectLoad,
	directsubmit : Ext.form.Action.DirectSubmit
};
Ext.form.VTypes = function() {
	var c = /^[a-zA-Z_]+$/, d = /^[a-zA-Z0-9_]+$/, b = /^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/, a = /(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i;
	return {
		email : function(e) {
			return b.test(e)
		},
		emailText : 'This field should be an e-mail address in the format "user@example.com"',
		emailMask : /[a-z0-9_\.\-@]/i,
		url : function(e) {
			return a.test(e)
		},
		urlText : 'This field should be a URL in the format "http://www.example.com"',
		alpha : function(e) {
			return c.test(e)
		},
		alphaText : "This field should only contain letters and _",
		alphaMask : /[a-z_]/i,
		alphanum : function(e) {
			return d.test(e)
		},
		alphanumText : "This field should only contain letters, numbers and _",
		alphanumMask : /[a-z0-9_]/i
	}
}();
Ext.grid.GridPanel = Ext.extend(Ext.Panel, {
	autoExpandColumn : false,
	autoExpandMax : 1000,
	autoExpandMin : 50,
	columnLines : false,
	ddText : "{0} selected row{1}",
	deferRowRender : true,
	enableColumnHide : true,
	enableColumnMove : true,
	enableDragDrop : false,
	enableHdMenu : true,
	loadMask : false,
	minColumnWidth : 25,
	stripeRows : false,
	trackMouseOver : true,
	stateEvents : ["columnmove", "columnresize", "sortchange"],
	view : null,
	bubbleEvents : [],
	rendered : false,
	viewReady : false,
	initComponent : function() {
		Ext.grid.GridPanel.superclass.initComponent.call(this);
		if (this.columnLines) {
			this.cls = (this.cls || "") + " x-grid-with-col-lines"
		}
		this.autoScroll = false;
		this.autoWidth = false;
		if (Ext.isArray(this.columns)) {
			this.colModel = new Ext.grid.ColumnModel(this.columns);
			delete this.columns
		}
		if (this.ds) {
			this.store = this.ds;
			delete this.ds
		}
		if (this.cm) {
			this.colModel = this.cm;
			delete this.cm
		}
		if (this.sm) {
			this.selModel = this.sm;
			delete this.sm
		}
		this.store = Ext.StoreMgr.lookup(this.store);
		this.addEvents("click", "dblclick", "contextmenu", "mousedown",
				"mouseup", "mouseover", "mouseout", "keypress", "keydown",
				"cellmousedown", "rowmousedown", "headermousedown",
				"groupmousedown", "rowbodymousedown", "containermousedown",
				"cellclick", "celldblclick", "rowclick", "rowdblclick",
				"headerclick", "headerdblclick", "groupclick", "groupdblclick",
				"containerclick", "containerdblclick", "rowbodyclick",
				"rowbodydblclick", "rowcontextmenu", "cellcontextmenu",
				"headercontextmenu", "groupcontextmenu",
				"containercontextmenu", "rowbodycontextmenu", "bodyscroll",
				"columnresize", "columnmove", "sortchange", "reconfigure",
				"viewready")
	},
	onRender : function(d, a) {
		Ext.grid.GridPanel.superclass.onRender.apply(this, arguments);
		var e = this.getGridEl();
		this.el.addClass("x-grid-panel");
		this.mon(e, {
					scope : this,
					mousedown : this.onMouseDown,
					click : this.onClick,
					dblclick : this.onDblClick,
					contextmenu : this.onContextMenu
				});
		this.relayEvents(e, ["mousedown", "mouseup", "mouseover", "mouseout",
						"keypress", "keydown"]);
		var b = this.getView();
		b.init(this);
		b.render();
		this.getSelectionModel().init(this)
	},
	initEvents : function() {
		Ext.grid.GridPanel.superclass.initEvents.call(this);
		if (this.loadMask) {
			this.loadMask = new Ext.LoadMask(this.bwrap, Ext.apply({
								store : this.store
							}, this.loadMask))
		}
	},
	initStateEvents : function() {
		Ext.grid.GridPanel.superclass.initStateEvents.call(this);
		this.mon(this.colModel, "hiddenchange", this.saveState, this, {
					delay : 100
				})
	},
	applyState : function(a) {
		var k = this.colModel, e = a.columns;
		if (e) {
			for (var d = 0, g = e.length; d < g; d++) {
				var l = e[d], h = k.getColumnById(l.id);
				if (h) {
					h.hidden = l.hidden;
					h.width = l.width;
					var j = k.getIndexById(l.id);
					if (j != d) {
						k.moveColumn(j, d)
					}
				}
			}
		}
		if (a.sort && this.store) {
			this.store[this.store.remoteSort ? "setDefaultSort" : "sort"](
					a.sort.field, a.sort.direction)
		}
		var b = Ext.apply({}, a);
		delete b.columns;
		delete b.sort;
		Ext.grid.GridPanel.superclass.applyState.call(this, b)
	},
	getState : function() {
		var d = {
			columns : []
		};
		for (var b = 0, e; (e = this.colModel.config[b]); b++) {
			d.columns[b] = {
				id : e.id,
				width : e.width
			};
			if (e.hidden) {
				d.columns[b].hidden = true
			}
		}
		if (this.store) {
			var a = this.store.getSortState();
			if (a) {
				d.sort = a
			}
		}
		return d
	},
	afterRender : function() {
		Ext.grid.GridPanel.superclass.afterRender.call(this);
		var a = this.view;
		this.on("bodyresize", a.layout, a);
		a.layout();
		if (this.deferRowRender) {
			a.afterRender.defer(10, this.view)
		} else {
			a.afterRender()
		}
		this.viewReady = true
	},
	reconfigure : function(a, b) {
		var c = this.rendered;
		if (c) {
			if (this.loadMask) {
				this.loadMask.destroy();
				this.loadMask = new Ext.LoadMask(this.bwrap, Ext.apply({}, {
									store : a
								}, this.initialConfig.loadMask))
			}
		}
		if (this.view) {
			this.view.initData(a, b)
		}
		this.store = a;
		this.colModel = b;
		if (c) {
			this.view.refresh(true)
		}
		this.fireEvent("reconfigure", this, a, b)
	},
	onDestroy : function() {
		if (this.rendered) {
			Ext.destroy(this.view, this.loadMask)
		} else {
			if (this.store && this.store.autoDestroy) {
				this.store.destroy()
			}
		}
		Ext.destroy(this.colModel, this.selModel);
		this.store = this.selModel = this.colModel = this.view = this.loadMask = null;
		Ext.grid.GridPanel.superclass.onDestroy.call(this)
	},
	processEvent : function(d, h) {
		this.fireEvent(d, h);
		var g = h.getTarget(), c = this.view, k = c.findHeaderIndex(g);
		if (k !== false) {
			this.fireEvent("header" + d, this, k, h)
		} else {
			var j = c.findRowIndex(g), b, a;
			if (j !== false) {
				this.fireEvent("row" + d, this, j, h);
				b = c.findCellIndex(g);
				a = c.findRowBody(g);
				if (b !== false) {
					this.fireEvent("cell" + d, this, j, b, h)
				}
				if (a) {
					this.fireEvent("rowbody" + d, this, j, h)
				}
			} else {
				this.fireEvent("container" + d, this, h)
			}
		}
		this.view.processEvent(d, h)
	},
	onClick : function(a) {
		this.processEvent("click", a)
	},
	onMouseDown : function(a) {
		this.processEvent("mousedown", a)
	},
	onContextMenu : function(b, a) {
		this.processEvent("contextmenu", b)
	},
	onDblClick : function(a) {
		this.processEvent("dblclick", a)
	},
	walkCells : function(l, c, b, e, k) {
		var j = this.colModel, g = j.getColumnCount(), a = this.store, h = a
				.getCount(), d = true;
		if (b < 0) {
			if (c < 0) {
				l--;
				d = false
			}
			while (l >= 0) {
				if (!d) {
					c = g - 1
				}
				d = false;
				while (c >= 0) {
					if (e.call(k || this, l, c, j) === true) {
						return [l, c]
					}
					c--
				}
				l--
			}
		} else {
			if (c >= g) {
				l++;
				d = false
			}
			while (l < h) {
				if (!d) {
					c = 0
				}
				d = false;
				while (c < g) {
					if (e.call(k || this, l, c, j) === true) {
						return [l, c]
					}
					c++
				}
				l++
			}
		}
		return null
	},
	onResize : function() {
		Ext.grid.GridPanel.superclass.onResize.apply(this, arguments);
		if (this.viewReady) {
			this.view.layout()
		}
	},
	getGridEl : function() {
		return this.body
	},
	stopEditing : Ext.emptyFn,
	getSelectionModel : function() {
		if (!this.selModel) {
			this.selModel = new Ext.grid.RowSelectionModel(this.disableSelection
					? {
						selectRow : Ext.emptyFn
					}
					: null)
		}
		return this.selModel
	},
	getStore : function() {
		return this.store
	},
	getColumnModel : function() {
		return this.colModel
	},
	getView : function() {
		if (!this.view) {
			this.view = new Ext.grid.GridView(this.viewConfig)
		}
		return this.view
	},
	getDragDropText : function() {
		var a = this.selModel.getCount();
		return String.format(this.ddText, a, a == 1 ? "" : "s")
	}
});
Ext.reg("grid", Ext.grid.GridPanel);
Ext.grid.GridView = Ext.extend(Ext.util.Observable, {
	deferEmptyText : true,
	scrollOffset : undefined,
	autoFill : false,
	forceFit : false,
	sortClasses : ["sort-asc", "sort-desc"],
	sortAscText : "Sort Ascending",
	sortDescText : "Sort Descending",
	columnsText : "Columns",
	selectedRowClass : "x-grid3-row-selected",
	borderWidth : 2,
	tdClass : "x-grid3-cell",
	hdCls : "x-grid3-hd",
	markDirty : true,
	cellSelectorDepth : 4,
	rowSelectorDepth : 10,
	rowBodySelectorDepth : 10,
	cellSelector : "td.x-grid3-cell",
	rowSelector : "div.x-grid3-row",
	rowBodySelector : "div.x-grid3-row-body",
	firstRowCls : "x-grid3-row-first",
	lastRowCls : "x-grid3-row-last",
	rowClsRe : /(?:^|\s+)x-grid3-row-(first|last|alt)(?:\s+|$)/g,
	constructor : function(a) {
		Ext.apply(this, a);
		this.addEvents("beforerowremoved", "beforerowsinserted",
				"beforerefresh", "rowremoved", "rowsinserted", "rowupdated",
				"refresh");
		Ext.grid.GridView.superclass.constructor.call(this)
	},
	initTemplates : function() {
		var c = this.templates || {};
		if (!c.master) {
			c.master = new Ext.Template(
					'<div class="x-grid3" hidefocus="true">',
					'<div class="x-grid3-viewport">',
					'<div class="x-grid3-header"><div class="x-grid3-header-inner"><div class="x-grid3-header-offset" style="{ostyle}">{header}</div></div><div class="x-clear"></div></div>',
					'<div class="x-grid3-scroller"><div class="x-grid3-body" style="{bstyle}">{body}</div><a href="#" class="x-grid3-focus" tabIndex="-1"></a></div>',
					"</div>",
					'<div class="x-grid3-resize-marker">&#160;</div>',
					'<div class="x-grid3-resize-proxy">&#160;</div>', "</div>")
		}
		if (!c.header) {
			c.header = new Ext.Template(
					'<table border="0" cellspacing="0" cellpadding="0" style="{tstyle}">',
					'<thead><tr class="x-grid3-hd-row">{cells}</tr></thead>',
					"</table>")
		}
		if (!c.hcell) {
			c.hcell = new Ext.Template(
					'<td class="x-grid3-hd x-grid3-cell x-grid3-td-{id} {css}" style="{style}"><div {tooltip} {attr} class="x-grid3-hd-inner x-grid3-hd-{id}" unselectable="on" style="{istyle}">',
					this.grid.enableHdMenu
							? '<a class="x-grid3-hd-btn" href="#"></a>'
							: "",
					'{value}<img class="x-grid3-sort-icon" src="',
					Ext.BLANK_IMAGE_URL, '" />', "</div></td>")
		}
		if (!c.body) {
			c.body = new Ext.Template("{rows}")
		}
		if (!c.row) {
			c.row = new Ext.Template(
					'<div class="x-grid3-row {alt}" style="{tstyle}"><table class="x-grid3-row-table" border="0" cellspacing="0" cellpadding="0" style="{tstyle}">',
					"<tbody><tr>{cells}</tr>",
					(this.enableRowBody
							? '<tr class="x-grid3-row-body-tr" style="{bodyStyle}"><td colspan="{cols}" class="x-grid3-body-cell" tabIndex="0" hidefocus="on"><div class="x-grid3-row-body">{body}</div></td></tr>'
							: ""), "</tbody></table></div>")
		}
		if (!c.cell) {
			c.cell = new Ext.Template(
					'<td class="x-grid3-col x-grid3-cell x-grid3-td-{id} {css}" style="{style}" tabIndex="0" {cellAttr}>',
					'<div class="x-grid3-cell-inner x-grid3-col-{id}" unselectable="on" {attr}>{value}</div>',
					"</td>")
		}
		for (var a in c) {
			var b = c[a];
			if (b && Ext.isFunction(b.compile) && !b.compiled) {
				b.disableFormats = true;
				b.compile()
			}
		}
		this.templates = c;
		this.colRe = new RegExp("x-grid3-td-([^\\s]+)", "")
	},
	fly : function(a) {
		if (!this._flyweight) {
			this._flyweight = new Ext.Element.Flyweight(document.body)
		}
		this._flyweight.dom = a;
		return this._flyweight
	},
	getEditorParent : function() {
		return this.scroller.dom
	},
	initElements : function() {
		var c = Ext.Element;
		var b = this.grid.getGridEl().dom.firstChild;
		var a = b.childNodes;
		this.el = new c(b);
		this.mainWrap = new c(a[0]);
		this.mainHd = new c(this.mainWrap.dom.firstChild);
		if (this.grid.hideHeaders) {
			this.mainHd.setDisplayed(false)
		}
		this.innerHd = this.mainHd.dom.firstChild;
		this.scroller = new c(this.mainWrap.dom.childNodes[1]);
		if (this.forceFit) {
			this.scroller.setStyle("overflow-x", "hidden")
		}
		this.mainBody = new c(this.scroller.dom.firstChild);
		this.focusEl = new c(this.scroller.dom.childNodes[1]);
		this.focusEl.swallowEvent("click", true);
		this.resizeMarker = new c(a[1]);
		this.resizeProxy = new c(a[2])
	},
	getRows : function() {
		return this.hasRows() ? this.mainBody.dom.childNodes : []
	},
	findCell : function(a) {
		if (!a) {
			return false
		}
		return this.fly(a)
				.findParent(this.cellSelector, this.cellSelectorDepth)
	},
	findCellIndex : function(c, b) {
		var a = this.findCell(c);
		if (a && (!b || this.fly(a).hasClass(b))) {
			return this.getCellIndex(a)
		}
		return false
	},
	getCellIndex : function(b) {
		if (b) {
			var a = b.className.match(this.colRe);
			if (a && a[1]) {
				return this.cm.getIndexById(a[1])
			}
		}
		return false
	},
	findHeaderCell : function(b) {
		var a = this.findCell(b);
		return a && this.fly(a).hasClass(this.hdCls) ? a : null
	},
	findHeaderIndex : function(a) {
		return this.findCellIndex(a, this.hdCls)
	},
	findRow : function(a) {
		if (!a) {
			return false
		}
		return this.fly(a).findParent(this.rowSelector, this.rowSelectorDepth)
	},
	findRowIndex : function(a) {
		var b = this.findRow(a);
		return b ? b.rowIndex : false
	},
	findRowBody : function(a) {
		if (!a) {
			return false
		}
		return this.fly(a).findParent(this.rowBodySelector,
				this.rowBodySelectorDepth)
	},
	getRow : function(a) {
		return this.getRows()[a]
	},
	getCell : function(b, a) {
		return this.getRow(b).getElementsByTagName("td")[a]
	},
	getHeaderCell : function(a) {
		return this.mainHd.dom.getElementsByTagName("td")[a]
	},
	addRowClass : function(c, a) {
		var b = this.getRow(c);
		if (b) {
			this.fly(b).addClass(a)
		}
	},
	removeRowClass : function(c, a) {
		var b = this.getRow(c);
		if (b) {
			this.fly(b).removeClass(a)
		}
	},
	removeRow : function(a) {
		Ext.removeNode(this.getRow(a));
		this.syncFocusEl(a)
	},
	removeRows : function(c, a) {
		var b = this.mainBody.dom;
		for (var d = c; d <= a; d++) {
			Ext.removeNode(b.childNodes[c])
		}
		this.syncFocusEl(c)
	},
	getScrollState : function() {
		var a = this.scroller.dom;
		return {
			left : a.scrollLeft,
			top : a.scrollTop
		}
	},
	restoreScroll : function(a) {
		var b = this.scroller.dom;
		b.scrollLeft = a.left;
		b.scrollTop = a.top
	},
	scrollToTop : function() {
		this.scroller.dom.scrollTop = 0;
		this.scroller.dom.scrollLeft = 0
	},
	syncScroll : function() {
		this.syncHeaderScroll();
		var a = this.scroller.dom;
		this.grid.fireEvent("bodyscroll", a.scrollLeft, a.scrollTop)
	},
	syncHeaderScroll : function() {
		var a = this.scroller.dom;
		this.innerHd.scrollLeft = a.scrollLeft;
		this.innerHd.scrollLeft = a.scrollLeft
	},
	updateSortIcon : function(b, a) {
		var d = this.sortClasses;
		var c = this.mainHd.select("td").removeClass(d);
		c.item(b).addClass(d[a == "DESC" ? 1 : 0])
	},
	updateAllColumnWidths : function() {
		var d = this.getTotalWidth(), l = this.cm.getColumnCount(), g = [], e, b;
		for (b = 0; b < l; b++) {
			g[b] = this.getColumnWidth(b)
		}
		this.innerHd.firstChild.style.width = this.getOffsetWidth();
		this.innerHd.firstChild.firstChild.style.width = d;
		this.mainBody.dom.style.width = d;
		for (b = 0; b < l; b++) {
			var c = this.getHeaderCell(b);
			c.style.width = g[b]
		}
		var k = this.getRows(), m, h;
		for (b = 0, e = k.length; b < e; b++) {
			m = k[b];
			m.style.width = d;
			if (m.firstChild) {
				m.firstChild.style.width = d;
				h = m.firstChild.rows[0];
				for (var a = 0; a < l; a++) {
					h.childNodes[a].style.width = g[a]
				}
			}
		}
		this.onAllColumnWidthsUpdated(g, d)
	},
	updateColumnWidth : function(b, a) {
		var j = this.getColumnWidth(b);
		var e = this.getTotalWidth();
		this.innerHd.firstChild.style.width = this.getOffsetWidth();
		this.innerHd.firstChild.firstChild.style.width = e;
		this.mainBody.dom.style.width = e;
		var d = this.getHeaderCell(b);
		d.style.width = j;
		var h = this.getRows(), k;
		for (var c = 0, g = h.length; c < g; c++) {
			k = h[c];
			k.style.width = e;
			if (k.firstChild) {
				k.firstChild.style.width = e;
				k.firstChild.rows[0].childNodes[b].style.width = j
			}
		}
		this.onColumnWidthUpdated(b, j, e)
	},
	updateColumnHidden : function(a, e) {
		var d = this.getTotalWidth();
		this.innerHd.firstChild.style.width = this.getOffsetWidth();
		this.innerHd.firstChild.firstChild.style.width = d;
		this.mainBody.dom.style.width = d;
		var h = e ? "none" : "";
		var c = this.getHeaderCell(a);
		c.style.display = h;
		var j = this.getRows(), k;
		for (var b = 0, g = j.length; b < g; b++) {
			k = j[b];
			k.style.width = d;
			if (k.firstChild) {
				k.firstChild.style.width = d;
				k.firstChild.rows[0].childNodes[a].style.display = h
			}
		}
		this.onColumnHiddenUpdated(a, e, d);
		delete this.lastViewWidth;
		this.layout()
	},
	doRender : function(g, k, s, a, q, w) {
		var b = this.templates, e = b.cell, h = b.row, l = q - 1;
		var d = "width:" + this.getTotalWidth() + ";";
		var z = [], t, A, u = {}, m = {
			tstyle : d
		}, o;
		for (var v = 0, y = k.length; v < y; v++) {
			o = k[v];
			t = [];
			var n = (v + a);
			for (var x = 0; x < q; x++) {
				A = g[x];
				u.id = A.id;
				u.css = x === 0 ? "x-grid3-cell-first " : (x == l
						? "x-grid3-cell-last "
						: "");
				u.attr = u.cellAttr = "";
				u.value = A.renderer.call(A.scope, o.data[A.name], u, o, n, x,
						s);
				u.style = A.style;
				if (Ext.isEmpty(u.value)) {
					u.value = "&#160;"
				}
				if (this.markDirty && o.dirty
						&& Ext.isDefined(o.modified[A.name])) {
					u.css += " x-grid3-dirty-cell"
				}
				t[t.length] = e.apply(u)
			}
			var B = [];
			if (w && ((n + 1) % 2 === 0)) {
				B[0] = "x-grid3-row-alt"
			}
			if (o.dirty) {
				B[1] = " x-grid3-dirty-row"
			}
			m.cols = q;
			if (this.getRowClass) {
				B[2] = this.getRowClass(o, n, m, s)
			}
			m.alt = B.join(" ");
			m.cells = t.join("");
			z[z.length] = h.apply(m)
		}
		return z.join("")
	},
	processRows : function(b, g) {
		if (!this.ds || this.ds.getCount() < 1) {
			return
		}
		var e = this.getRows(), a = e.length, c, d;
		g = g || !this.grid.stripeRows;
		b = b || 0;
		for (c = 0; c < a; c++) {
			d = e[c];
			if (d) {
				d.rowIndex = c;
				if (!g) {
					d.className = d.className.replace(this.rowClsRe, " ");
					if ((c + 1) % 2 === 0) {
						d.className += " x-grid3-row-alt"
					}
				}
			}
		}
		if (b === 0) {
			Ext.fly(e[0]).addClass(this.firstRowCls)
		}
		Ext.fly(e[e.length - 1]).addClass(this.lastRowCls)
	},
	afterRender : function() {
		if (!this.ds || !this.cm) {
			return
		}
		this.mainBody.dom.innerHTML = this.renderRows() || "&#160;";
		this.processRows(0, true);
		if (this.deferEmptyText !== true) {
			this.applyEmptyText()
		}
		this.grid.fireEvent("viewready", this.grid)
	},
	renderUI : function() {
		var d = this.renderHeaders();
		var a = this.templates.body.apply({
					rows : "&#160;"
				});
		var b = this.templates.master.apply({
					body : a,
					header : d,
					ostyle : "width:" + this.getOffsetWidth() + ";",
					bstyle : "width:" + this.getTotalWidth() + ";"
				});
		var c = this.grid;
		c.getGridEl().dom.innerHTML = b;
		this.initElements();
		Ext.fly(this.innerHd).on("click", this.handleHdDown, this);
		this.mainHd.on({
					scope : this,
					mouseover : this.handleHdOver,
					mouseout : this.handleHdOut,
					mousemove : this.handleHdMove
				});
		this.scroller.on("scroll", this.syncScroll, this);
		if (c.enableColumnResize !== false) {
			this.splitZone = new Ext.grid.GridView.SplitDragZone(c,
					this.mainHd.dom)
		}
		if (c.enableColumnMove) {
			this.columnDrag = new Ext.grid.GridView.ColumnDragZone(c,
					this.innerHd);
			this.columnDrop = new Ext.grid.HeaderDropZone(c, this.mainHd.dom)
		}
		if (c.enableHdMenu !== false) {
			this.hmenu = new Ext.menu.Menu({
						id : c.id + "-hctx"
					});
			this.hmenu.add({
						itemId : "asc",
						text : this.sortAscText,
						cls : "xg-hmenu-sort-asc"
					}, {
						itemId : "desc",
						text : this.sortDescText,
						cls : "xg-hmenu-sort-desc"
					});
			if (c.enableColumnHide !== false) {
				this.colMenu = new Ext.menu.Menu({
							id : c.id + "-hcols-menu"
						});
				this.colMenu.on({
							scope : this,
							beforeshow : this.beforeColMenuShow,
							itemclick : this.handleHdMenuClick
						});
				this.hmenu.add("-", {
							itemId : "columns",
							hideOnClick : false,
							text : this.columnsText,
							menu : this.colMenu,
							iconCls : "x-cols-icon"
						})
			}
			this.hmenu.on("itemclick", this.handleHdMenuClick, this)
		}
		if (c.trackMouseOver) {
			this.mainBody.on({
						scope : this,
						mouseover : this.onRowOver,
						mouseout : this.onRowOut
					})
		}
		if (c.enableDragDrop || c.enableDrag) {
			this.dragZone = new Ext.grid.GridDragZone(c, {
						ddGroup : c.ddGroup || "GridDD"
					})
		}
		this.updateHeaderSortState()
	},
	processEvent : Ext.emptyFn,
	layout : function() {
		if (!this.mainBody) {
			return
		}
		var d = this.grid;
		var j = d.getGridEl();
		var a = j.getSize(true);
		var b = a.width;
		if (!d.hideHeaders && (b < 20 || a.height < 20)) {
			return
		}
		if (d.autoHeight) {
			this.scroller.dom.style.overflow = "visible";
			if (Ext.isWebKit) {
				this.scroller.dom.style.position = "static"
			}
		} else {
			this.el.setSize(a.width, a.height);
			var h = this.mainHd.getHeight();
			var e = a.height - (h);
			this.scroller.setSize(b, e);
			if (this.innerHd) {
				this.innerHd.style.width = (b) + "px"
			}
		}
		if (this.forceFit) {
			if (this.lastViewWidth != b) {
				this.fitColumns(false, false);
				this.lastViewWidth = b
			}
		} else {
			this.autoExpand();
			this.syncHeaderScroll()
		}
		this.onLayout(b, e)
	},
	onLayout : function(a, b) {
	},
	onColumnWidthUpdated : function(c, a, b) {
	},
	onAllColumnWidthsUpdated : function(a, b) {
	},
	onColumnHiddenUpdated : function(b, c, a) {
	},
	updateColumnText : function(a, b) {
	},
	afterMove : function(a) {
	},
	init : function(a) {
		this.grid = a;
		this.initTemplates();
		this.initData(a.store, a.colModel);
		this.initUI(a)
	},
	getColumnId : function(a) {
		return this.cm.getColumnId(a)
	},
	getOffsetWidth : function() {
		return (this.cm.getTotalWidth() + this.getScrollOffset()) + "px"
	},
	getScrollOffset : function() {
		return Ext.num(this.scrollOffset, Ext.getScrollBarWidth())
	},
	renderHeaders : function() {
		var c = this.cm, h = this.templates, e = h.hcell, b = [], j = {}, a = c
				.getColumnCount(), g = a - 1;
		for (var d = 0; d < a; d++) {
			j.id = c.getColumnId(d);
			j.value = c.getColumnHeader(d) || "";
			j.style = this.getColumnStyle(d, true);
			j.tooltip = this.getColumnTooltip(d);
			j.css = d === 0 ? "x-grid3-cell-first " : (d == g
					? "x-grid3-cell-last "
					: "");
			if (c.config[d].align == "right") {
				j.istyle = "padding-right:16px"
			} else {
				delete j.istyle
			}
			b[b.length] = e.apply(j)
		}
		return h.header.apply({
					cells : b.join(""),
					tstyle : "width:" + this.getTotalWidth() + ";"
				})
	},
	getColumnTooltip : function(a) {
		var b = this.cm.getColumnTooltip(a);
		if (b) {
			if (Ext.QuickTips.isEnabled()) {
				return 'ext:qtip="' + b + '"'
			} else {
				return 'title="' + b + '"'
			}
		}
		return ""
	},
	beforeUpdate : function() {
		this.grid.stopEditing(true)
	},
	updateHeaders : function() {
		this.innerHd.firstChild.innerHTML = this.renderHeaders();
		this.innerHd.firstChild.style.width = this.getOffsetWidth();
		this.innerHd.firstChild.firstChild.style.width = this.getTotalWidth()
	},
	focusRow : function(a) {
		this.focusCell(a, 0, false)
	},
	focusCell : function(c, a, b) {
		this.syncFocusEl(this.ensureVisible(c, a, b));
		if (Ext.isGecko) {
			this.focusEl.focus()
		} else {
			this.focusEl.focus.defer(1, this.focusEl)
		}
	},
	resolveCell : function(h, d, g) {
		if (!Ext.isNumber(h)) {
			h = h.rowIndex
		}
		if (!this.ds) {
			return null
		}
		if (h < 0 || h >= this.ds.getCount()) {
			return null
		}
		d = (d !== undefined ? d : 0);
		var c = this.getRow(h), a = this.cm, e = a.getColumnCount(), b;
		if (!(g === false && d === 0)) {
			while (d < e && a.isHidden(d)) {
				d++
			}
			b = this.getCell(h, d)
		}
		return {
			row : c,
			cell : b
		}
	},
	getResolvedXY : function(a) {
		if (!a) {
			return null
		}
		var b = this.scroller.dom, e = a.cell, d = a.row;
		return e ? Ext.fly(e).getXY() : [this.el.getX(), Ext.fly(d).getY()]
	},
	syncFocusEl : function(d, a, c) {
		var b = d;
		if (!Ext.isArray(b)) {
			d = Math.min(d, Math.max(0, this.getRows().length - 1));
			b = this.getResolvedXY(this.resolveCell(d, a, c))
		}
		this.focusEl.setXY(b || this.scroller.getXY())
	},
	ensureVisible : function(u, g, e) {
		var s = this.resolveCell(u, g, e);
		if (!s || !s.row) {
			return
		}
		var l = s.row, h = s.cell, o = this.scroller.dom, t = 0, d = l, q = this.el.dom;
		while (d && d != q) {
			t += d.offsetTop;
			d = d.offsetParent
		}
		t -= this.mainHd.dom.offsetHeight;
		q = parseInt(o.scrollTop, 10);
		var r = t + l.offsetHeight, a = o.clientHeight, n = q + a;
		if (t < q) {
			o.scrollTop = t
		} else {
			if (r > n) {
				o.scrollTop = r - a
			}
		}
		if (e !== false) {
			var m = parseInt(h.offsetLeft, 10);
			var k = m + h.offsetWidth;
			var j = parseInt(o.scrollLeft, 10);
			var b = j + o.clientWidth;
			if (m < j) {
				o.scrollLeft = m
			} else {
				if (k > b) {
					o.scrollLeft = k - o.clientWidth
				}
			}
		}
		return this.getResolvedXY(s)
	},
	insertRows : function(a, j, e, h) {
		var d = a.getCount() - 1;
		if (!h && j === 0 && e >= d) {
			this.fireEvent("beforerowsinserted", this, j, e);
			this.refresh();
			this.fireEvent("rowsinserted", this, j, e)
		} else {
			if (!h) {
				this.fireEvent("beforerowsinserted", this, j, e)
			}
			var b = this.renderRows(j, e), g = this.getRow(j);
			if (g) {
				if (j === 0) {
					Ext.fly(this.getRow(0)).removeClass(this.firstRowCls)
				}
				Ext.DomHelper.insertHtml("beforeBegin", g, b)
			} else {
				var c = this.getRow(d - 1);
				if (c) {
					Ext.fly(c).removeClass(this.lastRowCls)
				}
				Ext.DomHelper.insertHtml("beforeEnd", this.mainBody.dom, b)
			}
			if (!h) {
				this.fireEvent("rowsinserted", this, j, e);
				this.processRows(j)
			} else {
				if (j === 0 || j >= d) {
					Ext.fly(this.getRow(j)).addClass(j === 0
							? this.firstRowCls
							: this.lastRowCls)
				}
			}
		}
		this.syncFocusEl(j)
	},
	deleteRows : function(a, c, b) {
		if (a.getRowCount() < 1) {
			this.refresh()
		} else {
			this.fireEvent("beforerowsdeleted", this, c, b);
			this.removeRows(c, b);
			this.processRows(c);
			this.fireEvent("rowsdeleted", this, c, b)
		}
	},
	getColumnStyle : function(a, c) {
		var b = !c ? (this.cm.config[a].css || "") : "";
		b += "width:" + this.getColumnWidth(a) + ";";
		if (this.cm.isHidden(a)) {
			b += "display:none;"
		}
		var d = this.cm.config[a].align;
		if (d) {
			b += "text-align:" + d + ";"
		}
		return b
	},
	getColumnWidth : function(b) {
		var a = this.cm.getColumnWidth(b);
		if (Ext.isNumber(a)) {
			return (Ext.isBorderBox || (Ext.isWebKit && !Ext.isSafari2)
					? a
					: (a - this.borderWidth > 0 ? a - this.borderWidth : 0))
					+ "px"
		}
		return a
	},
	getTotalWidth : function() {
		return this.cm.getTotalWidth() + "px"
	},
	fitColumns : function(d, h, j) {
		var q = this.cm, k;
		var l = q.getTotalWidth(false);
		var a = this.grid.getGridEl().getWidth(true) - this.getScrollOffset();
		if (a < 20) {
			return
		}
		var e = a - l;
		if (e === 0) {
			return false
		}
		var m = q.getColumnCount(true);
		var s = m - (Ext.isNumber(j) ? 1 : 0);
		if (s === 0) {
			s = 1;
			j = undefined
		}
		var r = q.getColumnCount();
		var o = [];
		var n = 0;
		var c = 0;
		var p;
		for (k = 0; k < r; k++) {
			if (!q.isHidden(k) && !q.isFixed(k) && k !== j) {
				p = q.getColumnWidth(k);
				o.push(k);
				n = k;
				o.push(p);
				c += p
			}
		}
		var b = (a - q.getTotalWidth()) / c;
		while (o.length) {
			p = o.pop();
			k = o.pop();
			q.setColumnWidth(k, Math.max(this.grid.minColumnWidth, Math.floor(p
									+ p * b)), true)
		}
		if ((l = q.getTotalWidth(false)) > a) {
			var g = s != m ? j : n;
			q.setColumnWidth(g, Math.max(1, q.getColumnWidth(g) - (l - a)),
					true)
		}
		if (d !== true) {
			this.updateAllColumnWidths()
		}
		return true
	},
	autoExpand : function(b) {
		var j = this.grid, a = this.cm;
		if (!this.userResized && j.autoExpandColumn) {
			var d = a.getTotalWidth(false);
			var k = this.grid.getGridEl().getWidth(true)
					- this.getScrollOffset();
			if (d != k) {
				var h = a.getIndexById(j.autoExpandColumn);
				var e = a.getColumnWidth(h);
				var c = Math.min(Math.max(((k - d) + e), j.autoExpandMin),
						j.autoExpandMax);
				if (c != e) {
					a.setColumnWidth(h, c, true);
					if (b !== true) {
						this.updateColumnWidth(h, c)
					}
				}
			}
		}
	},
	getColumnData : function() {
		var d = [], a = this.cm, e = a.getColumnCount();
		for (var c = 0; c < e; c++) {
			var b = a.getDataIndex(c);
			d[c] = {
				name : (!Ext.isDefined(b) ? this.ds.fields.get(c).name : b),
				renderer : a.getRenderer(c),
				scope : a.getRendererScope(c),
				id : a.getColumnId(c),
				style : this.getColumnStyle(c)
			}
		}
		return d
	},
	renderRows : function(k, c) {
		var d = this.grid, h = d.colModel, a = d.store, l = d.stripeRows;
		var j = h.getColumnCount();
		if (a.getCount() < 1) {
			return ""
		}
		var e = this.getColumnData();
		k = k || 0;
		c = !Ext.isDefined(c) ? a.getCount() - 1 : c;
		var b = a.getRange(k, c);
		return this.doRender(e, b, a, k, j, l)
	},
	renderBody : function() {
		var a = this.renderRows() || "&#160;";
		return this.templates.body.apply({
					rows : a
				})
	},
	refreshRow : function(a) {
		var c = this.ds, b;
		if (Ext.isNumber(a)) {
			b = a;
			a = c.getAt(b);
			if (!a) {
				return
			}
		} else {
			b = c.indexOf(a);
			if (b < 0) {
				return
			}
		}
		this.insertRows(c, b, b, true);
		this.getRow(b).rowIndex = b;
		this.onRemove(c, a, b + 1, true);
		this.fireEvent("rowupdated", this, b, a)
	},
	refresh : function(b) {
		this.fireEvent("beforerefresh", this);
		this.grid.stopEditing(true);
		var a = this.renderBody();
		this.mainBody.update(a).setWidth(this.getTotalWidth());
		if (b === true) {
			this.updateHeaders();
			this.updateHeaderSortState()
		}
		this.processRows(0, true);
		this.layout();
		this.applyEmptyText();
		this.fireEvent("refresh", this)
	},
	applyEmptyText : function() {
		if (this.emptyText && !this.hasRows()) {
			this.mainBody.update('<div class="x-grid-empty">' + this.emptyText
					+ "</div>")
		}
	},
	updateHeaderSortState : function() {
		var b = this.ds.getSortState();
		if (!b) {
			return
		}
		if (!this.sortState
				|| (this.sortState.field != b.field || this.sortState.direction != b.direction)) {
			this.grid.fireEvent("sortchange", this.grid, b)
		}
		this.sortState = b;
		var c = this.cm.findColumnIndex(b.field);
		if (c != -1) {
			var a = b.direction;
			this.updateSortIcon(c, a)
		}
	},
	clearHeaderSortState : function() {
		if (!this.sortState) {
			return
		}
		this.grid.fireEvent("sortchange", this.grid, null);
		this.mainHd.select("td").removeClass(this.sortClasses);
		delete this.sortState
	},
	destroy : function() {
		if (this.colMenu) {
			Ext.menu.MenuMgr.unregister(this.colMenu);
			this.colMenu.destroy();
			delete this.colMenu
		}
		if (this.hmenu) {
			Ext.menu.MenuMgr.unregister(this.hmenu);
			this.hmenu.destroy();
			delete this.hmenu
		}
		this.initData(null, null);
		this.purgeListeners();
		Ext.fly(this.innerHd).un("click", this.handleHdDown, this);
		if (this.grid.enableColumnMove) {
			Ext.destroy(this.columnDrag.el, this.columnDrag.proxy.ghost,
					this.columnDrag.proxy.el, this.columnDrop.el,
					this.columnDrop.proxyTop, this.columnDrop.proxyBottom,
					this.columnDrag.dragData.ddel,
					this.columnDrag.dragData.header);
			if (this.columnDrag.proxy.anim) {
				Ext.destroy(this.columnDrag.proxy.anim)
			}
			delete this.columnDrag.proxy.ghost;
			delete this.columnDrag.dragData.ddel;
			delete this.columnDrag.dragData.header;
			this.columnDrag.destroy();
			delete Ext.dd.DDM.locationCache[this.columnDrag.id];
			delete this.columnDrag._domRef;
			delete this.columnDrop.proxyTop;
			delete this.columnDrop.proxyBottom;
			this.columnDrop.destroy();
			delete Ext.dd.DDM.locationCache["gridHeader"
					+ this.grid.getGridEl().id];
			delete this.columnDrop._domRef;
			delete Ext.dd.DDM.ids[this.columnDrop.ddGroup]
		}
		if (this.splitZone) {
			this.splitZone.destroy();
			delete this.splitZone._domRef;
			delete Ext.dd.DDM.ids["gridSplitters" + this.grid.getGridEl().id]
		}
		Ext.fly(this.innerHd).removeAllListeners();
		Ext.removeNode(this.innerHd);
		delete this.innerHd;
		Ext.destroy(this.el, this.mainWrap, this.mainHd, this.scroller,
				this.mainBody, this.focusEl, this.resizeMarker,
				this.resizeProxy, this.activeHdBtn, this.dragZone,
				this.splitZone, this._flyweight);
		delete this.grid.container;
		if (this.dragZone) {
			this.dragZone.destroy()
		}
		Ext.dd.DDM.currentTarget = null;
		delete Ext.dd.DDM.locationCache[this.grid.getGridEl().id];
		Ext.EventManager.removeResizeListener(this.onWindowResize, this)
	},
	onDenyColumnHide : function() {
	},
	render : function() {
		if (this.autoFill) {
			var a = this.grid.ownerCt;
			if (a && a.getLayout()) {
				a.on("afterlayout", function() {
							this.fitColumns(true, true);
							this.updateHeaders()
						}, this, {
							single : true
						})
			} else {
				this.fitColumns(true, true)
			}
		} else {
			if (this.forceFit) {
				this.fitColumns(true, false)
			} else {
				if (this.grid.autoExpandColumn) {
					this.autoExpand(true)
				}
			}
		}
		this.renderUI()
	},
	initData : function(b, a) {
		if (this.ds) {
			this.ds.un("load", this.onLoad, this);
			this.ds.un("datachanged", this.onDataChange, this);
			this.ds.un("add", this.onAdd, this);
			this.ds.un("remove", this.onRemove, this);
			this.ds.un("update", this.onUpdate, this);
			this.ds.un("clear", this.onClear, this);
			if (this.ds !== b && this.ds.autoDestroy) {
				this.ds.destroy()
			}
		}
		if (b) {
			b.on({
						scope : this,
						load : this.onLoad,
						datachanged : this.onDataChange,
						add : this.onAdd,
						remove : this.onRemove,
						update : this.onUpdate,
						clear : this.onClear
					})
		}
		this.ds = b;
		if (this.cm) {
			this.cm.un("configchange", this.onColConfigChange, this);
			this.cm.un("widthchange", this.onColWidthChange, this);
			this.cm.un("headerchange", this.onHeaderChange, this);
			this.cm.un("hiddenchange", this.onHiddenChange, this);
			this.cm.un("columnmoved", this.onColumnMove, this)
		}
		if (a) {
			delete this.lastViewWidth;
			a.on({
						scope : this,
						configchange : this.onColConfigChange,
						widthchange : this.onColWidthChange,
						headerchange : this.onHeaderChange,
						hiddenchange : this.onHiddenChange,
						columnmoved : this.onColumnMove
					})
		}
		this.cm = a
	},
	onDataChange : function() {
		this.refresh();
		this.updateHeaderSortState();
		this.syncFocusEl(0)
	},
	onClear : function() {
		this.refresh();
		this.syncFocusEl(0)
	},
	onUpdate : function(b, a) {
		this.refreshRow(a)
	},
	onAdd : function(c, a, b) {
		this.insertRows(c, b, b + (a.length - 1))
	},
	onRemove : function(d, a, b, c) {
		if (c !== true) {
			this.fireEvent("beforerowremoved", this, b, a)
		}
		this.removeRow(b);
		if (c !== true) {
			this.processRows(b);
			this.applyEmptyText();
			this.fireEvent("rowremoved", this, b, a)
		}
	},
	onLoad : function() {
		this.scrollToTop.defer(Ext.isGecko ? 1 : 0, this)
	},
	onColWidthChange : function(a, b, c) {
		this.updateColumnWidth(b, c)
	},
	onHeaderChange : function(a, b, c) {
		this.updateHeaders()
	},
	onHiddenChange : function(a, b, c) {
		this.updateColumnHidden(b, c)
	},
	onColumnMove : function(a, d, b) {
		this.indexMap = null;
		var c = this.getScrollState();
		this.refresh(true);
		this.restoreScroll(c);
		this.afterMove(b);
		this.grid.fireEvent("columnmove", d, b)
	},
	onColConfigChange : function() {
		delete this.lastViewWidth;
		this.indexMap = null;
		this.refresh(true)
	},
	initUI : function(a) {
		a.on("headerclick", this.onHeaderClick, this)
	},
	initEvents : function() {
	},
	onHeaderClick : function(b, a) {
		if (this.headersDisabled || !this.cm.isSortable(a)) {
			return
		}
		b.stopEditing(true);
		b.store.sort(this.cm.getDataIndex(a))
	},
	onRowOver : function(b, a) {
		var c;
		if ((c = this.findRowIndex(a)) !== false) {
			this.addRowClass(c, "x-grid3-row-over")
		}
	},
	onRowOut : function(b, a) {
		var c;
		if ((c = this.findRowIndex(a)) !== false
				&& !b.within(this.getRow(c), true)) {
			this.removeRowClass(c, "x-grid3-row-over")
		}
	},
	handleWheel : function(a) {
		a.stopPropagation()
	},
	onRowSelect : function(a) {
		this.addRowClass(a, this.selectedRowClass)
	},
	onRowDeselect : function(a) {
		this.removeRowClass(a, this.selectedRowClass)
	},
	onCellSelect : function(c, b) {
		var a = this.getCell(c, b);
		if (a) {
			this.fly(a).addClass("x-grid3-cell-selected")
		}
	},
	onCellDeselect : function(c, b) {
		var a = this.getCell(c, b);
		if (a) {
			this.fly(a).removeClass("x-grid3-cell-selected")
		}
	},
	onColumnSplitterMoved : function(c, b) {
		this.userResized = true;
		var a = this.grid.colModel;
		a.setColumnWidth(c, b, true);
		if (this.forceFit) {
			this.fitColumns(true, false, c);
			this.updateAllColumnWidths()
		} else {
			this.updateColumnWidth(c, b);
			this.syncHeaderScroll()
		}
		this.grid.fireEvent("columnresize", c, b)
	},
	handleHdMenuClick : function(c) {
		var b = this.hdCtxIndex, a = this.cm, d = this.ds, e = c.getItemId();
		switch (e) {
			case "asc" :
				d.sort(a.getDataIndex(b), "ASC");
				break;
			case "desc" :
				d.sort(a.getDataIndex(b), "DESC");
				break;
			default :
				b = a.getIndexById(e.substr(4));
				if (b != -1) {
					if (c.checked
							&& a.getColumnsBy(this.isHideableColumn, this).length <= 1) {
						this.onDenyColumnHide();
						return false
					}
					a.setHidden(b, c.checked)
				}
		}
		return true
	},
	isHideableColumn : function(a) {
		return !a.hidden && !a.fixed
	},
	beforeColMenuShow : function() {
		var a = this.cm, c = a.getColumnCount();
		this.colMenu.removeAll();
		for (var b = 0; b < c; b++) {
			if (a.config[b].fixed !== true && a.config[b].hideable !== false) {
				this.colMenu.add(new Ext.menu.CheckItem({
							itemId : "col-" + a.getColumnId(b),
							text : a.getColumnHeader(b),
							checked : !a.isHidden(b),
							hideOnClick : false,
							disabled : a.config[b].hideable === false
						}))
			}
		}
	},
	handleHdDown : function(h, d) {
		if (Ext.fly(d).hasClass("x-grid3-hd-btn")) {
			h.stopEvent();
			var g = this.findHeaderCell(d);
			Ext.fly(g).addClass("x-grid3-hd-menu-open");
			var c = this.getCellIndex(g);
			this.hdCtxIndex = c;
			var b = this.hmenu.items, a = this.cm;
			b.get("asc").setDisabled(!a.isSortable(c));
			b.get("desc").setDisabled(!a.isSortable(c));
			this.hmenu.on("hide", function() {
						Ext.fly(g).removeClass("x-grid3-hd-menu-open")
					}, this, {
						single : true
					});
			this.hmenu.show(d, "tl-bl?")
		}
	},
	handleHdOver : function(d, a) {
		var c = this.findHeaderCell(a);
		if (c && !this.headersDisabled) {
			this.activeHdRef = a;
			this.activeHdIndex = this.getCellIndex(c);
			var b = this.fly(c);
			this.activeHdRegion = b.getRegion();
			if (!this.cm.isMenuDisabled(this.activeHdIndex)) {
				b.addClass("x-grid3-hd-over");
				this.activeHdBtn = b.child(".x-grid3-hd-btn");
				if (this.activeHdBtn) {
					this.activeHdBtn.dom.style.height = (c.firstChild.offsetHeight - 1)
							+ "px"
				}
			}
		}
	},
	handleHdMove : function(j, d) {
		var h = this.findHeaderCell(this.activeHdRef);
		if (h && !this.headersDisabled) {
			var b = this.splitHandleWidth || 5, g = this.activeHdRegion, a = j
					.getPageX(), c = h.style, k = "";
			if (this.grid.enableColumnResize !== false) {
				if (a - g.left <= b
						&& this.cm.isResizable(this.activeHdIndex - 1)) {
					k = Ext.isAir ? "move" : Ext.isWebKit
							? "e-resize"
							: "col-resize"
				} else {
					if (g.right - a <= (!this.activeHdBtn ? b : 2)
							&& this.cm.isResizable(this.activeHdIndex)) {
						k = Ext.isAir ? "move" : Ext.isWebKit
								? "w-resize"
								: "col-resize"
					}
				}
			}
			c.cursor = k
		}
	},
	handleHdOut : function(c, a) {
		var b = this.findHeaderCell(a);
		if (b && (!Ext.isIE || !c.within(b, true))) {
			this.activeHdRef = null;
			this.fly(b).removeClass("x-grid3-hd-over");
			b.style.cursor = ""
		}
	},
	hasRows : function() {
		var a = this.mainBody.dom.firstChild;
		return a && a.nodeType == 1 && a.className != "x-grid-empty"
	},
	bind : function(a, b) {
		this.initData(a, b)
	}
});
Ext.grid.GridView.SplitDragZone = function(a, b) {
	this.grid = a;
	this.view = a.getView();
	this.marker = this.view.resizeMarker;
	this.proxy = this.view.resizeProxy;
	Ext.grid.GridView.SplitDragZone.superclass.constructor.call(this, b,
			"gridSplitters" + this.grid.getGridEl().id, {
				dragElId : Ext.id(this.proxy.dom),
				resizeFrame : false
			});
	this.scroll = false;
	this.hw = this.view.splitHandleWidth || 5
};
Ext.extend(Ext.grid.GridView.SplitDragZone, Ext.dd.DDProxy, {
			b4StartDrag : function(a, e) {
				this.view.headersDisabled = true;
				var d = this.view.mainWrap.getHeight();
				this.marker.setHeight(d);
				this.marker.show();
				this.marker.alignTo(this.view.getHeaderCell(this.cellIndex),
						"tl-tl", [-2, 0]);
				this.proxy.setHeight(d);
				var b = this.cm.getColumnWidth(this.cellIndex);
				var c = Math.max(b - this.grid.minColumnWidth, 0);
				this.resetConstraints();
				this.setXConstraint(c, 1000);
				this.setYConstraint(0, 0);
				this.minX = a - c;
				this.maxX = a + 1000;
				this.startPos = a;
				Ext.dd.DDProxy.prototype.b4StartDrag.call(this, a, e)
			},
			allowHeaderDrag : function(a) {
				return true
			},
			handleMouseDown : function(a) {
				var j = this.view.findHeaderCell(a.getTarget());
				if (j && this.allowHeaderDrag(a)) {
					var m = this.view.fly(j).getXY(), d = m[0], c = m[1];
					var k = a.getXY(), b = k[0];
					var h = j.offsetWidth, g = false;
					if ((b - d) <= this.hw) {
						g = -1
					} else {
						if ((d + h) - b <= this.hw) {
							g = 0
						}
					}
					if (g !== false) {
						this.cm = this.grid.colModel;
						var l = this.view.getCellIndex(j);
						if (g == -1) {
							if (l + g < 0) {
								return
							}
							while (this.cm.isHidden(l + g)) {
								--g;
								if (l + g < 0) {
									return
								}
							}
						}
						this.cellIndex = l + g;
						this.split = j.dom;
						if (this.cm.isResizable(this.cellIndex)
								&& !this.cm.isFixed(this.cellIndex)) {
							Ext.grid.GridView.SplitDragZone.superclass.handleMouseDown
									.apply(this, arguments)
						}
					} else {
						if (this.view.columnDrag) {
							this.view.columnDrag.callHandleMouseDown(a)
						}
					}
				}
			},
			endDrag : function(d) {
				this.marker.hide();
				var a = this.view;
				var b = Math.max(this.minX, d.getPageX());
				var c = b - this.startPos;
				a.onColumnSplitterMoved(this.cellIndex, this.cm
								.getColumnWidth(this.cellIndex)
								+ c);
				setTimeout(function() {
							a.headersDisabled = false
						}, 50)
			},
			autoOffset : function() {
				this.setDelta(0, 0)
			}
		});
Ext.grid.HeaderDragZone = Ext.extend(Ext.dd.DragZone, {
			maxDragWidth : 120,
			constructor : function(a, c, b) {
				this.grid = a;
				this.view = a.getView();
				this.ddGroup = "gridHeader" + this.grid.getGridEl().id;
				Ext.grid.HeaderDragZone.superclass.constructor.call(this, c);
				if (b) {
					this.setHandleElId(Ext.id(c));
					this.setOuterHandleElId(Ext.id(b))
				}
				this.scroll = false
			},
			getDragData : function(c) {
				var a = Ext.lib.Event.getTarget(c);
				var b = this.view.findHeaderCell(a);
				if (b) {
					return {
						ddel : b.firstChild,
						header : b
					}
				}
				return false
			},
			onInitDrag : function(a) {
				this.view.headersDisabled = true;
				var b = this.dragData.ddel.cloneNode(true);
				b.id = Ext.id();
				b.style.width = Math.min(this.dragData.header.offsetWidth,
						this.maxDragWidth)
						+ "px";
				this.proxy.update(b);
				return true
			},
			afterValidDrop : function() {
				var a = this.view;
				setTimeout(function() {
							a.headersDisabled = false
						}, 50)
			},
			afterInvalidDrop : function() {
				var a = this.view;
				setTimeout(function() {
							a.headersDisabled = false
						}, 50)
			}
		});
Ext.grid.HeaderDropZone = Ext.extend(Ext.dd.DropZone, {
			proxyOffsets : [-4, -9],
			fly : Ext.Element.fly,
			constructor : function(a, c, b) {
				this.grid = a;
				this.view = a.getView();
				this.proxyTop = Ext.DomHelper.append(document.body, {
							cls : "col-move-top",
							html : "&#160;"
						}, true);
				this.proxyBottom = Ext.DomHelper.append(document.body, {
							cls : "col-move-bottom",
							html : "&#160;"
						}, true);
				this.proxyTop.hide = this.proxyBottom.hide = function() {
					this.setLeftTop(-100, -100);
					this.setStyle("visibility", "hidden")
				};
				this.ddGroup = "gridHeader" + this.grid.getGridEl().id;
				Ext.grid.HeaderDropZone.superclass.constructor.call(this, a
								.getGridEl().dom)
			},
			getTargetFromEvent : function(c) {
				var a = Ext.lib.Event.getTarget(c);
				var b = this.view.findCellIndex(a);
				if (b !== false) {
					return this.view.getHeaderCell(b)
				}
			},
			nextVisible : function(c) {
				var b = this.view, a = this.grid.colModel;
				c = c.nextSibling;
				while (c) {
					if (!a.isHidden(b.getCellIndex(c))) {
						return c
					}
					c = c.nextSibling
				}
				return null
			},
			prevVisible : function(c) {
				var b = this.view, a = this.grid.colModel;
				c = c.prevSibling;
				while (c) {
					if (!a.isHidden(b.getCellIndex(c))) {
						return c
					}
					c = c.prevSibling
				}
				return null
			},
			positionIndicator : function(d, l, k) {
				var a = Ext.lib.Event.getPageX(k);
				var g = Ext.lib.Dom.getRegion(l.firstChild);
				var c, j, b = g.top + this.proxyOffsets[1];
				if ((g.right - a) <= (g.right - g.left) / 2) {
					c = g.right + this.view.borderWidth;
					j = "after"
				} else {
					c = g.left;
					j = "before"
				}
				if (this.grid.colModel.isFixed(this.view.getCellIndex(l))) {
					return false
				}
				c += this.proxyOffsets[0];
				this.proxyTop.setLeftTop(c, b);
				this.proxyTop.show();
				if (!this.bottomOffset) {
					this.bottomOffset = this.view.mainHd.getHeight()
				}
				this.proxyBottom.setLeftTop(c, b
								+ this.proxyTop.dom.offsetHeight
								+ this.bottomOffset);
				this.proxyBottom.show();
				return j
			},
			onNodeEnter : function(d, a, c, b) {
				if (b.header != d) {
					this.positionIndicator(b.header, d, c)
				}
			},
			onNodeOver : function(g, b, d, c) {
				var a = false;
				if (c.header != g) {
					a = this.positionIndicator(c.header, g, d)
				}
				if (!a) {
					this.proxyTop.hide();
					this.proxyBottom.hide()
				}
				return a ? this.dropAllowed : this.dropNotAllowed
			},
			onNodeOut : function(d, a, c, b) {
				this.proxyTop.hide();
				this.proxyBottom.hide()
			},
			onNodeDrop : function(b, o, g, c) {
				var d = c.header;
				if (d != b) {
					var l = this.grid.colModel;
					var k = Ext.lib.Event.getPageX(g);
					var a = Ext.lib.Dom.getRegion(b.firstChild);
					var p = (a.right - k) <= ((a.right - a.left) / 2)
							? "after"
							: "before";
					var j = this.view.getCellIndex(d);
					var m = this.view.getCellIndex(b);
					if (p == "after") {
						m++
					}
					if (j < m) {
						m--
					}
					l.moveColumn(j, m);
					return true
				}
				return false
			}
		});
Ext.grid.GridView.ColumnDragZone = Ext.extend(Ext.grid.HeaderDragZone, {
			constructor : function(a, b) {
				Ext.grid.GridView.ColumnDragZone.superclass.constructor.call(
						this, a, b, null);
				this.proxy.el.addClass("x-grid3-col-dd")
			},
			handleMouseDown : function(a) {
			},
			callHandleMouseDown : function(a) {
				Ext.grid.GridView.ColumnDragZone.superclass.handleMouseDown
						.call(this, a)
			}
		});
Ext.grid.SplitDragZone = Ext.extend(Ext.dd.DDProxy, {
			fly : Ext.Element.fly,
			constructor : function(a, c, b) {
				this.grid = a;
				this.view = a.getView();
				this.proxy = this.view.resizeProxy;
				Ext.grid.SplitDragZone.superclass.constructor.call(this, c,
						"gridSplitters" + this.grid.getGridEl().id, {
							dragElId : Ext.id(this.proxy.dom),
							resizeFrame : false
						});
				this.setHandleElId(Ext.id(c));
				this.setOuterHandleElId(Ext.id(b));
				this.scroll = false
			},
			b4StartDrag : function(a, d) {
				this.view.headersDisabled = true;
				this.proxy.setHeight(this.view.mainWrap.getHeight());
				var b = this.cm.getColumnWidth(this.cellIndex);
				var c = Math.max(b - this.grid.minColumnWidth, 0);
				this.resetConstraints();
				this.setXConstraint(c, 1000);
				this.setYConstraint(0, 0);
				this.minX = a - c;
				this.maxX = a + 1000;
				this.startPos = a;
				Ext.dd.DDProxy.prototype.b4StartDrag.call(this, a, d)
			},
			handleMouseDown : function(c) {
				var b = Ext.EventObject.setEvent(c);
				var a = this.fly(b.getTarget());
				if (a.hasClass("x-grid-split")) {
					this.cellIndex = this.view.getCellIndex(a.dom);
					this.split = a.dom;
					this.cm = this.grid.colModel;
					if (this.cm.isResizable(this.cellIndex)
							&& !this.cm.isFixed(this.cellIndex)) {
						Ext.grid.SplitDragZone.superclass.handleMouseDown
								.apply(this, arguments)
					}
				}
			},
			endDrag : function(c) {
				this.view.headersDisabled = false;
				var a = Math.max(this.minX, Ext.lib.Event.getPageX(c));
				var b = a - this.startPos;
				this.view.onColumnSplitterMoved(this.cellIndex, this.cm
								.getColumnWidth(this.cellIndex)
								+ b)
			},
			autoOffset : function() {
				this.setDelta(0, 0)
			}
		});
Ext.grid.GridDragZone = function(b, a) {
	this.view = b.getView();
	Ext.grid.GridDragZone.superclass.constructor.call(this,
			this.view.mainBody.dom, a);
	this.scroll = false;
	this.grid = b;
	this.ddel = document.createElement("div");
	this.ddel.className = "x-grid-dd-wrap"
};
Ext.extend(Ext.grid.GridDragZone, Ext.dd.DragZone, {
			ddGroup : "GridDD",
			getDragData : function(b) {
				var a = Ext.lib.Event.getTarget(b);
				var d = this.view.findRowIndex(a);
				if (d !== false) {
					var c = this.grid.selModel;
					if (!c.isSelected(d) || b.hasModifier()) {
						c.handleMouseDown(this.grid, d, b)
					}
					return {
						grid : this.grid,
						ddel : this.ddel,
						rowIndex : d,
						selections : c.getSelections()
					}
				}
				return false
			},
			onInitDrag : function(b) {
				var a = this.dragData;
				this.ddel.innerHTML = this.grid.getDragDropText();
				this.proxy.update(this.ddel)
			},
			afterRepair : function() {
				this.dragging = false
			},
			getRepairXY : function(b, a) {
				return false
			},
			onEndDrag : function(a, b) {
			},
			onValidDrop : function(a, b, c) {
				this.hideProxy()
			},
			beforeInvalidDrop : function(a, b) {
			}
		});
Ext.grid.ColumnModel = Ext.extend(Ext.util.Observable, {
	defaultWidth : 100,
	defaultSortable : false,
	constructor : function(a) {
		if (a.columns) {
			Ext.apply(this, a);
			this.setConfig(a.columns, true)
		} else {
			this.setConfig(a, true)
		}
		this.addEvents("widthchange", "headerchange", "hiddenchange",
				"columnmoved", "configchange");
		Ext.grid.ColumnModel.superclass.constructor.call(this)
	},
	getColumnId : function(a) {
		return this.config[a].id
	},
	getColumnAt : function(a) {
		return this.config[a]
	},
	setConfig : function(d, b) {
		var e, h, a;
		if (!b) {
			delete this.totalWidth;
			for (e = 0, a = this.config.length; e < a; e++) {
				h = this.config[e];
				if (h.editor) {
					h.editor.destroy()
				}
			}
		}
		this.defaults = Ext.apply({
					width : this.defaultWidth,
					sortable : this.defaultSortable
				}, this.defaults);
		this.config = d;
		this.lookup = {};
		for (e = 0, a = d.length; e < a; e++) {
			h = Ext.applyIf(d[e], this.defaults);
			if (typeof h.id == "undefined") {
				h.id = e
			}
			if (!h.isColumn) {
				var g = Ext.grid.Column.types[h.xtype || "gridcolumn"];
				h = new g(h);
				d[e] = h
			}
			this.lookup[h.id] = h
		}
		if (!b) {
			this.fireEvent("configchange", this)
		}
	},
	getColumnById : function(a) {
		return this.lookup[a]
	},
	getIndexById : function(c) {
		for (var b = 0, a = this.config.length; b < a; b++) {
			if (this.config[b].id == c) {
				return b
			}
		}
		return -1
	},
	moveColumn : function(d, a) {
		var b = this.config[d];
		this.config.splice(d, 1);
		this.config.splice(a, 0, b);
		this.dataMap = null;
		this.fireEvent("columnmoved", this, d, a)
	},
	getColumnCount : function(d) {
		if (d === true) {
			var e = 0;
			for (var b = 0, a = this.config.length; b < a; b++) {
				if (!this.isHidden(b)) {
					e++
				}
			}
			return e
		}
		return this.config.length
	},
	getColumnsBy : function(e, d) {
		var g = [];
		for (var b = 0, a = this.config.length; b < a; b++) {
			var h = this.config[b];
			if (e.call(d || this, h, b) === true) {
				g[g.length] = h
			}
		}
		return g
	},
	isSortable : function(a) {
		return !!this.config[a].sortable
	},
	isMenuDisabled : function(a) {
		return !!this.config[a].menuDisabled
	},
	getRenderer : function(a) {
		if (!this.config[a].renderer) {
			return Ext.grid.ColumnModel.defaultRenderer
		}
		return this.config[a].renderer
	},
	getRendererScope : function(a) {
		return this.config[a].scope
	},
	setRenderer : function(a, b) {
		this.config[a].renderer = b
	},
	getColumnWidth : function(a) {
		return this.config[a].width
	},
	setColumnWidth : function(b, c, a) {
		this.config[b].width = c;
		this.totalWidth = null;
		if (!a) {
			this.fireEvent("widthchange", this, b, c)
		}
	},
	getTotalWidth : function(b) {
		if (!this.totalWidth) {
			this.totalWidth = 0;
			for (var c = 0, a = this.config.length; c < a; c++) {
				if (b || !this.isHidden(c)) {
					this.totalWidth += this.getColumnWidth(c)
				}
			}
		}
		return this.totalWidth
	},
	getColumnHeader : function(a) {
		return this.config[a].header
	},
	setColumnHeader : function(a, b) {
		this.config[a].header = b;
		this.fireEvent("headerchange", this, a, b)
	},
	getColumnTooltip : function(a) {
		return this.config[a].tooltip
	},
	setColumnTooltip : function(a, b) {
		this.config[a].tooltip = b
	},
	getDataIndex : function(a) {
		return this.config[a].dataIndex
	},
	setDataIndex : function(a, b) {
		this.config[a].dataIndex = b
	},
	findColumnIndex : function(d) {
		var e = this.config;
		for (var b = 0, a = e.length; b < a; b++) {
			if (e[b].dataIndex == d) {
				return b
			}
		}
		return -1
	},
	isCellEditable : function(a, b) {
		return (this.config[a].editable || (typeof this.config[a].editable == "undefined" && this.config[a].editor))
				? true
				: false
	},
	getCellEditor : function(a, b) {
		return this.config[a].getCellEditor(b)
	},
	setEditable : function(a, b) {
		this.config[a].editable = b
	},
	isHidden : function(a) {
		return !!this.config[a].hidden
	},
	isFixed : function(a) {
		return !!this.config[a].fixed
	},
	isResizable : function(a) {
		return a >= 0 && this.config[a].resizable !== false
				&& this.config[a].fixed !== true
	},
	setHidden : function(a, b) {
		var d = this.config[a];
		if (d.hidden !== b) {
			d.hidden = b;
			this.totalWidth = null;
			this.fireEvent("hiddenchange", this, a, b)
		}
	},
	setEditor : function(a, b) {
		Ext.destroy(this.config[a].editor);
		this.config[a].editor = b
	},
	destroy : function() {
		for (var b = 0, d = this.config, a = d.length; b < a; b++) {
			Ext.destroy(d[b].editor)
		}
		this.purgeListeners()
	}
});
Ext.grid.ColumnModel.defaultRenderer = function(a) {
	if (typeof a == "string" && a.length < 1) {
		return "&#160;"
	}
	return a
};
Ext.grid.AbstractSelectionModel = Ext.extend(Ext.util.Observable, {
			constructor : function() {
				this.locked = false;
				Ext.grid.AbstractSelectionModel.superclass.constructor
						.call(this)
			},
			init : function(a) {
				this.grid = a;
				this.initEvents()
			},
			lock : function() {
				this.locked = true
			},
			unlock : function() {
				this.locked = false
			},
			isLocked : function() {
				return this.locked
			},
			destroy : function() {
				this.purgeListeners()
			}
		});
Ext.grid.RowSelectionModel = Ext.extend(Ext.grid.AbstractSelectionModel, {
	singleSelect : false,
	constructor : function(a) {
		Ext.apply(this, a);
		this.selections = new Ext.util.MixedCollection(false, function(b) {
					return b.id
				});
		this.last = false;
		this.lastActive = false;
		this.addEvents("selectionchange", "beforerowselect", "rowselect",
				"rowdeselect");
		Ext.grid.RowSelectionModel.superclass.constructor.call(this)
	},
	initEvents : function() {
		if (!this.grid.enableDragDrop && !this.grid.enableDrag) {
			this.grid.on("rowmousedown", this.handleMouseDown, this)
		}
		this.rowNav = new Ext.KeyNav(this.grid.getGridEl(), {
					up : function(b) {
						if (!b.shiftKey || this.singleSelect) {
							this.selectPrevious(false)
						} else {
							if (this.last !== false
									&& this.lastActive !== false) {
								var a = this.last;
								this
										.selectRange(this.last, this.lastActive
														- 1);
								this.grid.getView().focusRow(this.lastActive);
								if (a !== false) {
									this.last = a
								}
							} else {
								this.selectFirstRow()
							}
						}
					},
					down : function(b) {
						if (!b.shiftKey || this.singleSelect) {
							this.selectNext(false)
						} else {
							if (this.last !== false
									&& this.lastActive !== false) {
								var a = this.last;
								this
										.selectRange(this.last, this.lastActive
														+ 1);
								this.grid.getView().focusRow(this.lastActive);
								if (a !== false) {
									this.last = a
								}
							} else {
								this.selectFirstRow()
							}
						}
					},
					scope : this
				});
		this.grid.getView().on({
					scope : this,
					refresh : this.onRefresh,
					rowupdated : this.onRowUpdated,
					rowremoved : this.onRemove
				})
	},
	onRefresh : function() {
		var g = this.grid.store, b;
		var d = this.getSelections();
		this.clearSelections(true);
		for (var c = 0, a = d.length; c < a; c++) {
			var e = d[c];
			if ((b = g.indexOfId(e.id)) != -1) {
				this.selectRow(b, true)
			}
		}
		if (d.length != this.selections.getCount()) {
			this.fireEvent("selectionchange", this)
		}
	},
	onRemove : function(a, b, c) {
		if (this.selections.remove(c) !== false) {
			this.fireEvent("selectionchange", this)
		}
	},
	onRowUpdated : function(a, b, c) {
		if (this.isSelected(c)) {
			a.onRowSelect(b)
		}
	},
	selectRecords : function(b, e) {
		if (!e) {
			this.clearSelections()
		}
		var d = this.grid.store;
		for (var c = 0, a = b.length; c < a; c++) {
			this.selectRow(d.indexOf(b[c]), true)
		}
	},
	getCount : function() {
		return this.selections.length
	},
	selectFirstRow : function() {
		this.selectRow(0)
	},
	selectLastRow : function(a) {
		this.selectRow(this.grid.store.getCount() - 1, a)
	},
	selectNext : function(a) {
		if (this.hasNext()) {
			this.selectRow(this.last + 1, a);
			this.grid.getView().focusRow(this.last);
			return true
		}
		return false
	},
	selectPrevious : function(a) {
		if (this.hasPrevious()) {
			this.selectRow(this.last - 1, a);
			this.grid.getView().focusRow(this.last);
			return true
		}
		return false
	},
	hasNext : function() {
		return this.last !== false
				&& (this.last + 1) < this.grid.store.getCount()
	},
	hasPrevious : function() {
		return !!this.last
	},
	getSelections : function() {
		return [].concat(this.selections.items)
	},
	getSelected : function() {
		return this.selections.itemAt(0)
	},
	each : function(e, d) {
		var c = this.getSelections();
		for (var b = 0, a = c.length; b < a; b++) {
			if (e.call(d || this, c[b], b) === false) {
				return false
			}
		}
		return true
	},
	clearSelections : function(a) {
		if (this.isLocked()) {
			return
		}
		if (a !== true) {
			var c = this.grid.store;
			var b = this.selections;
			b.each(function(d) {
						this.deselectRow(c.indexOfId(d.id))
					}, this);
			b.clear()
		} else {
			this.selections.clear()
		}
		this.last = false
	},
	selectAll : function() {
		if (this.isLocked()) {
			return
		}
		this.selections.clear();
		for (var b = 0, a = this.grid.store.getCount(); b < a; b++) {
			this.selectRow(b, true)
		}
	},
	hasSelection : function() {
		return this.selections.length > 0
	},
	isSelected : function(a) {
		var b = Ext.isNumber(a) ? this.grid.store.getAt(a) : a;
		return (b && this.selections.key(b.id) ? true : false)
	},
	isIdSelected : function(a) {
		return (this.selections.key(a) ? true : false)
	},
	handleMouseDown : function(d, j, h) {
		if (h.button !== 0 || this.isLocked()) {
			return
		}
		var a = this.grid.getView();
		if (h.shiftKey && !this.singleSelect && this.last !== false) {
			var c = this.last;
			this.selectRange(c, j, h.ctrlKey);
			this.last = c;
			a.focusRow(j)
		} else {
			var b = this.isSelected(j);
			if (h.ctrlKey && b) {
				this.deselectRow(j)
			} else {
				if (!b || this.getCount() > 1) {
					this.selectRow(j, h.ctrlKey || h.shiftKey);
					a.focusRow(j)
				}
			}
		}
	},
	selectRows : function(c, d) {
		if (!d) {
			this.clearSelections()
		}
		for (var b = 0, a = c.length; b < a; b++) {
			this.selectRow(c[b], true)
		}
	},
	selectRange : function(b, a, d) {
		var c;
		if (this.isLocked()) {
			return
		}
		if (!d) {
			this.clearSelections()
		}
		if (b <= a) {
			for (c = b; c <= a; c++) {
				this.selectRow(c, true)
			}
		} else {
			for (c = b; c >= a; c--) {
				this.selectRow(c, true)
			}
		}
	},
	deselectRange : function(c, b, a) {
		if (this.isLocked()) {
			return
		}
		for (var d = c; d <= b; d++) {
			this.deselectRow(d, a)
		}
	},
	selectRow : function(b, d, a) {
		if (this.isLocked() || (b < 0 || b >= this.grid.store.getCount())
				|| (d && this.isSelected(b))) {
			return
		}
		var c = this.grid.store.getAt(b);
		if (c && this.fireEvent("beforerowselect", this, b, d, c) !== false) {
			if (!d || this.singleSelect) {
				this.clearSelections()
			}
			this.selections.add(c);
			this.last = this.lastActive = b;
			if (!a) {
				this.grid.getView().onRowSelect(b)
			}
			this.fireEvent("rowselect", this, b, c);
			this.fireEvent("selectionchange", this)
		}
	},
	deselectRow : function(b, a) {
		if (this.isLocked()) {
			return
		}
		if (this.last == b) {
			this.last = false
		}
		if (this.lastActive == b) {
			this.lastActive = false
		}
		var c = this.grid.store.getAt(b);
		if (c) {
			this.selections.remove(c);
			if (!a) {
				this.grid.getView().onRowDeselect(b)
			}
			this.fireEvent("rowdeselect", this, b, c);
			this.fireEvent("selectionchange", this)
		}
	},
	restoreLast : function() {
		if (this._last) {
			this.last = this._last
		}
	},
	acceptsNav : function(c, b, a) {
		return !a.isHidden(b) && a.isCellEditable(b, c)
	},
	onEditorKey : function(o, m) {
		var d = m.getKey(), h, j = this.grid, p = j.lastEdit, l = j.activeEditor, q, p, a, n;
		var b = m.shiftKey;
		if (d == m.TAB) {
			m.stopEvent();
			l.completeEdit();
			if (b) {
				h = j.walkCells(l.row, l.col - 1, -1, this.acceptsNav, this)
			} else {
				h = j.walkCells(l.row, l.col + 1, 1, this.acceptsNav, this)
			}
		} else {
			if (d == m.ENTER) {
				if (this.moveEditorOnEnter !== false) {
					if (b) {
						h = j.walkCells(p.row - 1, p.col, -1, this.acceptsNav,
								this)
					} else {
						h = j.walkCells(p.row + 1, p.col, 1, this.acceptsNav,
								this)
					}
				}
			}
		}
		if (h) {
			a = h[0];
			n = h[1];
			if (p.row != a) {
				this.selectRow(a)
			}
			if (j.isEditor && j.editing) {
				q = j.activeEditor;
				if (q && q.field.triggerBlur) {
					q.field.triggerBlur()
				}
			}
			j.startEditing(a, n)
		}
	},
	destroy : function() {
		if (this.rowNav) {
			this.rowNav.disable();
			this.rowNav = null
		}
		Ext.grid.RowSelectionModel.superclass.destroy.call(this)
	}
});
Ext.grid.Column = Ext.extend(Object, {
			isColumn : true,
			constructor : function(a) {
				Ext.apply(this, a);
				if (Ext.isString(this.renderer)) {
					this.renderer = Ext.util.Format[this.renderer]
				} else {
					if (Ext.isObject(this.renderer)) {
						this.scope = this.renderer.scope;
						this.renderer = this.renderer.fn
					}
				}
				if (!this.scope) {
					this.scope = this
				}
				if (this.editor) {
					this.editor = Ext.create(this.editor, "textfield")
				}
			},
			renderer : function(a) {
				if (Ext.isString(a) && a.length < 1) {
					return "&#160;"
				}
				return a
			},
			getEditor : function(a) {
				return this.editable !== false ? this.editor : null
			},
			getCellEditor : function(b) {
				var a = this.getEditor(b);
				if (a) {
					if (!a.startEdit) {
						if (!a.gridEditor) {
							a.gridEditor = new Ext.grid.GridEditor(a)
						}
						return a.gridEditor
					} else {
						if (a.startEdit) {
							return a
						}
					}
				}
				return null
			}
		});
Ext.grid.BooleanColumn = Ext.extend(Ext.grid.Column, {
			trueText : "true",
			falseText : "false",
			undefinedText : "&#160;",
			constructor : function(a) {
				Ext.grid.BooleanColumn.superclass.constructor.call(this, a);
				var c = this.trueText, d = this.falseText, b = this.undefinedText;
				this.renderer = function(e) {
					if (e === undefined) {
						return b
					}
					if (!e || e === "false") {
						return d
					}
					return c
				}
			}
		});
Ext.grid.NumberColumn = Ext.extend(Ext.grid.Column, {
			format : "0,000.00",
			constructor : function(a) {
				Ext.grid.NumberColumn.superclass.constructor.call(this, a);
				this.renderer = Ext.util.Format.numberRenderer(this.format)
			}
		});
Ext.grid.DateColumn = Ext.extend(Ext.grid.Column, {
			format : "m/d/Y",
			constructor : function(a) {
				Ext.grid.DateColumn.superclass.constructor.call(this, a);
				this.renderer = Ext.util.Format.dateRenderer(this.format)
			}
		});
Ext.grid.TemplateColumn = Ext.extend(Ext.grid.Column, {
			constructor : function(a) {
				Ext.grid.TemplateColumn.superclass.constructor.call(this, a);
				var b = (!Ext.isPrimitive(this.tpl) && this.tpl.compile)
						? this.tpl
						: new Ext.XTemplate(this.tpl);
				this.renderer = function(d, e, c) {
					return b.apply(c.data)
				};
				this.tpl = b
			}
		});
Ext.grid.Column.types = {
	gridcolumn : Ext.grid.Column,
	booleancolumn : Ext.grid.BooleanColumn,
	numbercolumn : Ext.grid.NumberColumn,
	datecolumn : Ext.grid.DateColumn,
	templatecolumn : Ext.grid.TemplateColumn
};
Ext.grid.RowNumberer = Ext.extend(Object, {
			header : "",
			width : 23,
			sortable : false,
			constructor : function(a) {
				Ext.apply(this, a);
				if (this.rowspan) {
					this.renderer = this.renderer.createDelegate(this)
				}
			},
			fixed : true,
			menuDisabled : true,
			dataIndex : "",
			id : "numberer",
			rowspan : undefined,
			renderer : function(b, c, a, d) {
				if (this.rowspan) {
					c.cellAttr = 'rowspan="' + this.rowspan + '"'
				}
				return d + 1
			}
		});
Ext.grid.CheckboxSelectionModel = Ext.extend(Ext.grid.RowSelectionModel, {
			header : '<div class="x-grid3-hd-checker">&#160;</div>',
			width : 20,
			sortable : false,
			menuDisabled : true,
			fixed : true,
			dataIndex : "",
			id : "checker",
			constructor : function() {
				Ext.grid.CheckboxSelectionModel.superclass.constructor.apply(
						this, arguments);
				if (this.checkOnly) {
					this.handleMouseDown = Ext.emptyFn
				}
			},
			initEvents : function() {
				Ext.grid.CheckboxSelectionModel.superclass.initEvents
						.call(this);
				this.grid.on("render", function() {
							var a = this.grid.getView();
							a.mainBody.on("mousedown", this.onMouseDown, this);
							Ext.fly(a.innerHd).on("mousedown",
									this.onHdMouseDown, this)
						}, this)
			},
			onMouseDown : function(c, b) {
				if (c.button === 0 && b.className == "x-grid3-row-checker") {
					c.stopEvent();
					var d = c.getTarget(".x-grid3-row");
					if (d) {
						var a = d.rowIndex;
						if (this.isSelected(a)) {
							this.deselectRow(a)
						} else {
							this.selectRow(a, true)
						}
					}
				}
			},
			onHdMouseDown : function(c, a) {
				if (a.className == "x-grid3-hd-checker") {
					c.stopEvent();
					var b = Ext.fly(a.parentNode);
					var d = b.hasClass("x-grid3-hd-checker-on");
					if (d) {
						b.removeClass("x-grid3-hd-checker-on");
						this.clearSelections()
					} else {
						b.addClass("x-grid3-hd-checker-on");
						this.selectAll()
					}
				}
			},
			renderer : function(b, c, a) {
				return '<div class="x-grid3-row-checker">&#160;</div>'
			}
		});
Ext.grid.CellSelectionModel = Ext.extend(Ext.grid.AbstractSelectionModel, {
	constructor : function(a) {
		Ext.apply(this, a);
		this.selection = null;
		this.addEvents("beforecellselect", "cellselect", "selectionchange");
		Ext.grid.CellSelectionModel.superclass.constructor.call(this)
	},
	initEvents : function() {
		this.grid.on("cellmousedown", this.handleMouseDown, this);
		this.grid.on(Ext.EventManager.useKeydown ? "keydown" : "keypress",
				this.handleKeyDown, this);
		this.grid.getView().on({
					scope : this,
					refresh : this.onViewChange,
					rowupdated : this.onRowUpdated,
					beforerowremoved : this.clearSelections,
					beforerowsinserted : this.clearSelections
				});
		if (this.grid.isEditor) {
			this.grid.on("beforeedit", this.beforeEdit, this)
		}
	},
	beforeEdit : function(a) {
		this.select(a.row, a.column, false, true, a.record)
	},
	onRowUpdated : function(a, b, c) {
		if (this.selection && this.selection.record == c) {
			a.onCellSelect(b, this.selection.cell[1])
		}
	},
	onViewChange : function() {
		this.clearSelections(true)
	},
	getSelectedCell : function() {
		return this.selection ? this.selection.cell : null
	},
	clearSelections : function(b) {
		var a = this.selection;
		if (a) {
			if (b !== true) {
				this.grid.view.onCellDeselect(a.cell[0], a.cell[1])
			}
			this.selection = null;
			this.fireEvent("selectionchange", this, null)
		}
	},
	hasSelection : function() {
		return this.selection ? true : false
	},
	handleMouseDown : function(b, d, a, c) {
		if (c.button !== 0 || this.isLocked()) {
			return
		}
		this.select(d, a)
	},
	select : function(g, c, b, e, d) {
		if (this.fireEvent("beforecellselect", this, g, c) !== false) {
			this.clearSelections();
			d = d || this.grid.store.getAt(g);
			this.selection = {
				record : d,
				cell : [g, c]
			};
			if (!b) {
				var a = this.grid.getView();
				a.onCellSelect(g, c);
				if (e !== true) {
					a.focusCell(g, c)
				}
			}
			this.fireEvent("cellselect", this, g, c);
			this.fireEvent("selectionchange", this, this.selection)
		}
	},
	isSelectable : function(c, b, a) {
		return !a.isHidden(b)
	},
	onEditorKey : function(b, a) {
		if (a.getKey() == a.TAB) {
			this.handleKeyDown(a)
		}
	},
	handleKeyDown : function(l) {
		if (!l.isNavKeyPress()) {
			return
		}
		var d = l.getKey(), j = this.grid, q = this.selection, b = this, n = function(
				g, c, e) {
			return j.walkCells(g, c, e, j.isEditor && j.editing
							? b.acceptsNav
							: b.isSelectable, b)
		}, p, h, a, m, o;
		switch (d) {
			case l.ESC :
			case l.PAGE_UP :
			case l.PAGE_DOWN :
				break;
			default :
				l.stopEvent();
				break
		}
		if (!q) {
			p = n(0, 0, 1);
			if (p) {
				this.select(p[0], p[1])
			}
			return
		}
		p = q.cell;
		a = p[0];
		m = p[1];
		switch (d) {
			case l.TAB :
				if (l.shiftKey) {
					h = n(a, m - 1, -1)
				} else {
					h = n(a, m + 1, 1)
				}
				break;
			case l.DOWN :
				h = n(a + 1, m, 1);
				break;
			case l.UP :
				h = n(a - 1, m, -1);
				break;
			case l.RIGHT :
				h = n(a, m + 1, 1);
				break;
			case l.LEFT :
				h = n(a, m - 1, -1);
				break;
			case l.ENTER :
				if (j.isEditor && !j.editing) {
					j.startEditing(a, m);
					return
				}
				break
		}
		if (h) {
			a = h[0];
			m = h[1];
			this.select(a, m);
			if (j.isEditor && j.editing) {
				o = j.activeEditor;
				if (o && o.field.triggerBlur) {
					o.field.triggerBlur()
				}
				j.startEditing(a, m)
			}
		}
	},
	acceptsNav : function(c, b, a) {
		return !a.isHidden(b) && a.isCellEditable(b, c)
	}
});
Ext.grid.EditorGridPanel = Ext.extend(Ext.grid.GridPanel, {
	clicksToEdit : 2,
	forceValidation : false,
	isEditor : true,
	detectEdit : false,
	autoEncode : false,
	trackMouseOver : false,
	initComponent : function() {
		Ext.grid.EditorGridPanel.superclass.initComponent.call(this);
		if (!this.selModel) {
			this.selModel = new Ext.grid.CellSelectionModel()
		}
		this.activeEditor = null;
		this.addEvents("beforeedit", "afteredit", "validateedit")
	},
	initEvents : function() {
		Ext.grid.EditorGridPanel.superclass.initEvents.call(this);
		this.getGridEl().on("mousewheel",
				this.stopEditing.createDelegate(this, [true]), this);
		this.on("columnresize", this.stopEditing, this, [true]);
		if (this.clicksToEdit == 1) {
			this.on("cellclick", this.onCellDblClick, this)
		} else {
			var a = this.getView();
			if (this.clicksToEdit == "auto" && a.mainBody) {
				a.mainBody.on("mousedown", this.onAutoEditClick, this)
			}
			this.on("celldblclick", this.onCellDblClick, this)
		}
	},
	onResize : function() {
		Ext.grid.EditorGridPanel.superclass.onResize.apply(this, arguments);
		var a = this.activeEditor;
		if (this.editing && a) {
			a.realign(true)
		}
	},
	onCellDblClick : function(b, c, a) {
		this.startEditing(c, a)
	},
	onAutoEditClick : function(c, b) {
		if (c.button !== 0) {
			return
		}
		var g = this.view.findRowIndex(b), a = this.view.findCellIndex(b);
		if (g !== false && a !== false) {
			this.stopEditing();
			if (this.selModel.getSelectedCell) {
				var d = this.selModel.getSelectedCell();
				if (d && d[0] === g && d[1] === a) {
					this.startEditing(g, a)
				}
			} else {
				if (this.selModel.isSelected(g)) {
					this.startEditing(g, a)
				}
			}
		}
	},
	onEditComplete : function(b, d, a) {
		this.editing = false;
		this.activeEditor = null;
		var c = b.record, h = this.colModel.getDataIndex(b.col);
		d = this.postEditValue(d, a, c, h);
		if (this.forceValidation === true || String(d) !== String(a)) {
			var g = {
				grid : this,
				record : c,
				field : h,
				originalValue : a,
				value : d,
				row : b.row,
				column : b.col,
				cancel : false
			};
			if (this.fireEvent("validateedit", g) !== false && !g.cancel
					&& String(d) !== String(a)) {
				c.set(h, g.value);
				delete g.cancel;
				this.fireEvent("afteredit", g)
			}
		}
		this.view.focusCell(b.row, b.col)
	},
	startEditing : function(j, c) {
		this.stopEditing();
		if (this.colModel.isCellEditable(c, j)) {
			this.view.ensureVisible(j, c, true);
			var d = this.store.getAt(j), h = this.colModel.getDataIndex(c), g = {
				grid : this,
				record : d,
				field : h,
				value : d.data[h],
				row : j,
				column : c,
				cancel : false
			};
			if (this.fireEvent("beforeedit", g) !== false && !g.cancel) {
				this.editing = true;
				var b = this.colModel.getCellEditor(c, j);
				if (!b) {
					return
				}
				if (!b.rendered) {
					b.parentEl = this.view.getEditorParent(b);
					b.on({
								scope : this,
								render : {
									fn : function(e) {
										e.field.focus(false, true)
									},
									single : true,
									scope : this
								},
								specialkey : function(l, k) {
									this.getSelectionModel().onEditorKey(l, k)
								},
								complete : this.onEditComplete,
								canceledit : this.stopEditing.createDelegate(
										this, [true])
							})
				}
				Ext.apply(b, {
							row : j,
							col : c,
							record : d
						});
				this.lastEdit = {
					row : j,
					col : c
				};
				this.activeEditor = b;
				var a = this.preEditValue(d, h);
				b.startEdit(this.view.getCell(j, c).firstChild, Ext
								.isDefined(a) ? a : "")
			}
		}
	},
	preEditValue : function(a, c) {
		var b = a.data[c];
		return this.autoEncode && Ext.isString(b) ? Ext.util.Format
				.htmlDecode(b) : b
	},
	postEditValue : function(c, a, b, d) {
		return this.autoEncode && Ext.isString(c) ? Ext.util.Format
				.htmlEncode(c) : c
	},
	stopEditing : function(b) {
		if (this.editing) {
			var a = this.activeEditor;
			if (a) {
				a[b === true ? "cancelEdit" : "completeEdit"]();
				this.view.focusCell(a.row, a.col)
			}
			this.activeEditor = null
		}
		this.editing = false
	}
});
Ext.reg("editorgrid", Ext.grid.EditorGridPanel);
Ext.grid.GridEditor = function(b, a) {
	Ext.grid.GridEditor.superclass.constructor.call(this, b, a);
	b.monitorTab = false
};
Ext.extend(Ext.grid.GridEditor, Ext.Editor, {
			alignment : "tl-tl",
			autoSize : "width",
			hideEl : false,
			cls : "x-small-editor x-grid-editor",
			shim : false,
			shadow : false
		});
Ext.grid.PropertyRecord = Ext.data.Record.create([{
			name : "name",
			type : "string"
		}, "value"]);
Ext.grid.PropertyStore = Ext.extend(Ext.util.Observable, {
			constructor : function(a, b) {
				this.grid = a;
				this.store = new Ext.data.Store({
							recordType : Ext.grid.PropertyRecord
						});
				this.store.on("update", this.onUpdate, this);
				if (b) {
					this.setSource(b)
				}
				Ext.grid.PropertyStore.superclass.constructor.call(this)
			},
			setSource : function(c) {
				this.source = c;
				this.store.removeAll();
				var b = [];
				for (var a in c) {
					if (this.isEditableValue(c[a])) {
						b.push(new Ext.grid.PropertyRecord({
									name : a,
									value : c[a]
								}, a))
					}
				}
				this.store.loadRecords({
							records : b
						}, {}, true)
			},
			onUpdate : function(e, a, d) {
				if (d == Ext.data.Record.EDIT) {
					var b = a.data.value;
					var c = a.modified.value;
					if (this.grid.fireEvent("beforepropertychange",
							this.source, a.id, b, c) !== false) {
						this.source[a.id] = b;
						a.commit();
						this.grid.fireEvent("propertychange", this.source,
								a.id, b, c)
					} else {
						a.reject()
					}
				}
			},
			getProperty : function(a) {
				return this.store.getAt(a)
			},
			isEditableValue : function(a) {
				return Ext.isPrimitive(a) || Ext.isDate(a)
			},
			setValue : function(b, a) {
				this.source[b] = a;
				this.store.getById(b).set("value", a)
			},
			getSource : function() {
				return this.source
			}
		});
Ext.grid.PropertyColumnModel = Ext.extend(Ext.grid.ColumnModel, {
			nameText : "Name",
			valueText : "Value",
			dateFormat : "m/j/Y",
			constructor : function(c, b) {
				var d = Ext.grid, e = Ext.form;
				this.grid = c;
				d.PropertyColumnModel.superclass.constructor.call(this, [{
									header : this.nameText,
									width : 50,
									sortable : true,
									dataIndex : "name",
									id : "name",
									menuDisabled : true
								}, {
									header : this.valueText,
									width : 50,
									resizable : false,
									dataIndex : "value",
									id : "value",
									menuDisabled : true
								}]);
				this.store = b;
				var a = new e.Field({
							autoCreate : {
								tag : "select",
								children : [{
											tag : "option",
											value : "true",
											html : "true"
										}, {
											tag : "option",
											value : "false",
											html : "false"
										}]
							},
							getValue : function() {
								return this.el.dom.value == "true"
							}
						});
				this.editors = {
					date : new d.GridEditor(new e.DateField({
								selectOnFocus : true
							})),
					string : new d.GridEditor(new e.TextField({
								selectOnFocus : true
							})),
					number : new d.GridEditor(new e.NumberField({
								selectOnFocus : true,
								style : "text-align:left;"
							})),
					"boolean" : new d.GridEditor(a, {
								autoSize : "both"
							})
				};
				this.renderCellDelegate = this.renderCell.createDelegate(this);
				this.renderPropDelegate = this.renderProp.createDelegate(this)
			},
			renderDate : function(a) {
				return a.dateFormat(this.dateFormat)
			},
			renderBool : function(a) {
				return a ? "true" : "false"
			},
			isCellEditable : function(a, b) {
				return a == 1
			},
			getRenderer : function(a) {
				return a == 1
						? this.renderCellDelegate
						: this.renderPropDelegate
			},
			renderProp : function(a) {
				return this.getPropertyName(a)
			},
			renderCell : function(a) {
				var b = a;
				if (Ext.isDate(a)) {
					b = this.renderDate(a)
				} else {
					if (typeof a == "boolean") {
						b = this.renderBool(a)
					}
				}
				return Ext.util.Format.htmlEncode(b)
			},
			getPropertyName : function(b) {
				var a = this.grid.propertyNames;
				return a && a[b] ? a[b] : b
			},
			getCellEditor : function(a, e) {
				var b = this.store.getProperty(e), d = b.data.name, c = b.data.value;
				if (this.grid.customEditors[d]) {
					return this.grid.customEditors[d]
				}
				if (Ext.isDate(c)) {
					return this.editors.date
				} else {
					if (typeof c == "number") {
						return this.editors.number
					} else {
						if (typeof c == "boolean") {
							return this.editors["boolean"]
						} else {
							return this.editors.string
						}
					}
				}
			},
			destroy : function() {
				Ext.grid.PropertyColumnModel.superclass.destroy.call(this);
				for (var a in this.editors) {
					Ext.destroy(this.editors[a])
				}
			}
		});
Ext.grid.PropertyGrid = Ext.extend(Ext.grid.EditorGridPanel, {
			enableColumnMove : false,
			stripeRows : false,
			trackMouseOver : false,
			clicksToEdit : 1,
			enableHdMenu : false,
			viewConfig : {
				forceFit : true
			},
			initComponent : function() {
				this.customEditors = this.customEditors || {};
				this.lastEditRow = null;
				var b = new Ext.grid.PropertyStore(this);
				this.propStore = b;
				var a = new Ext.grid.PropertyColumnModel(this, b);
				b.store.sort("name", "ASC");
				this.addEvents("beforepropertychange", "propertychange");
				this.cm = a;
				this.ds = b.store;
				Ext.grid.PropertyGrid.superclass.initComponent.call(this);
				this.mon(this.selModel, "beforecellselect", function(e, d, c) {
							if (c === 0) {
								this.startEditing.defer(200, this, [d, 1]);
								return false
							}
						}, this)
			},
			onRender : function() {
				Ext.grid.PropertyGrid.superclass.onRender
						.apply(this, arguments);
				this.getGridEl().addClass("x-props-grid")
			},
			afterRender : function() {
				Ext.grid.PropertyGrid.superclass.afterRender.apply(this,
						arguments);
				if (this.source) {
					this.setSource(this.source)
				}
			},
			setSource : function(a) {
				this.propStore.setSource(a)
			},
			getSource : function() {
				return this.propStore.getSource()
			}
		});
Ext.reg("propertygrid", Ext.grid.PropertyGrid);
Ext.grid.GroupingView = Ext.extend(Ext.grid.GridView, {
	groupByText : "Group By This Field",
	showGroupsText : "Show in Groups",
	hideGroupedColumn : false,
	showGroupName : true,
	startCollapsed : false,
	enableGrouping : true,
	enableGroupingMenu : true,
	enableNoGroups : true,
	emptyGroupText : "(None)",
	ignoreAdd : false,
	groupTextTpl : "{text}",
	groupMode : "value",
	gidSeed : 1000,
	initTemplates : function() {
		Ext.grid.GroupingView.superclass.initTemplates.call(this);
		this.state = {};
		var a = this.grid.getSelectionModel();
		a.on(a.selectRow ? "beforerowselect" : "beforecellselect",
				this.onBeforeRowSelect, this);
		if (!this.startGroup) {
			this.startGroup = new Ext.XTemplate(
					'<div id="{groupId}" class="x-grid-group {cls}">',
					'<div id="{groupId}-hd" class="x-grid-group-hd" style="{style}"><div class="x-grid-group-title">',
					this.groupTextTpl, "</div></div>",
					'<div id="{groupId}-bd" class="x-grid-group-body">')
		}
		this.startGroup.compile();
		if (!this.endGroup) {
			this.endGroup = "</div></div>"
		}
		this.endGroup = "</div></div>"
	},
	findGroup : function(a) {
		return Ext.fly(a).up(".x-grid-group", this.mainBody.dom)
	},
	getGroups : function() {
		return this.hasRows() ? this.mainBody.dom.childNodes : []
	},
	onAdd : function() {
		if (this.enableGrouping && !this.ignoreAdd) {
			var a = this.getScrollState();
			this.refresh();
			this.restoreScroll(a)
		} else {
			if (!this.enableGrouping) {
				Ext.grid.GroupingView.superclass.onAdd.apply(this, arguments)
			}
		}
	},
	onRemove : function(e, a, b, d) {
		Ext.grid.GroupingView.superclass.onRemove.apply(this, arguments);
		var c = document.getElementById(a._groupId);
		if (c && c.childNodes[1].childNodes.length < 1) {
			Ext.removeNode(c)
		}
		this.applyEmptyText()
	},
	refreshRow : function(a) {
		if (this.ds.getCount() == 1) {
			this.refresh()
		} else {
			this.isUpdating = true;
			Ext.grid.GroupingView.superclass.refreshRow.apply(this, arguments);
			this.isUpdating = false
		}
	},
	beforeMenuShow : function() {
		var c, a = this.hmenu.items, b = this.cm.config[this.hdCtxIndex].groupable === false;
		if ((c = a.get("groupBy"))) {
			c.setDisabled(b)
		}
		if ((c = a.get("showGroups"))) {
			c.setDisabled(b);
			c.setChecked(this.enableGrouping, true)
		}
	},
	renderUI : function() {
		Ext.grid.GroupingView.superclass.renderUI.call(this);
		this.mainBody.on("mousedown", this.interceptMouse, this);
		if (this.enableGroupingMenu && this.hmenu) {
			this.hmenu.add("-", {
						itemId : "groupBy",
						text : this.groupByText,
						handler : this.onGroupByClick,
						scope : this,
						iconCls : "x-group-by-icon"
					});
			if (this.enableNoGroups) {
				this.hmenu.add({
							itemId : "showGroups",
							text : this.showGroupsText,
							checked : true,
							checkHandler : this.onShowGroupsClick,
							scope : this
						})
			}
			this.hmenu.on("beforeshow", this.beforeMenuShow, this)
		}
	},
	processEvent : function(b, h) {
		var g = h.getTarget(".x-grid-group-hd", this.mainBody);
		if (g) {
			var d = this.getGroupField(), c = this.getPrefix(d), a = g.id
					.substring(c.length);
			a = a.substr(0, a.length - 3);
			if (a) {
				this.grid.fireEvent("group" + b, this.grid, d, a, h)
			}
		}
	},
	onGroupByClick : function() {
		this.enableGrouping = true;
		this.grid.store.groupBy(this.cm.getDataIndex(this.hdCtxIndex));
		this.beforeMenuShow();
		this.refresh()
	},
	onShowGroupsClick : function(a, b) {
		this.enableGrouping = b;
		if (b) {
			this.onGroupByClick()
		} else {
			this.grid.store.clearGrouping()
		}
	},
	toggleRowIndex : function(c, a) {
		if (!this.enableGrouping) {
			return
		}
		var b = this.getRow(c);
		if (b) {
			this.toggleGroup(this.findGroup(b), a)
		}
	},
	toggleGroup : function(c, b) {
		var a = Ext.get(c);
		b = Ext.isDefined(b) ? b : a.hasClass("x-grid-group-collapsed");
		if (this.state[a.id] !== b) {
			this.grid.stopEditing(true);
			this.state[a.id] = b;
			a[b ? "removeClass" : "addClass"]("x-grid-group-collapsed")
		}
	},
	toggleAllGroups : function(c) {
		var b = this.getGroups();
		for (var d = 0, a = b.length; d < a; d++) {
			this.toggleGroup(b[d], c)
		}
	},
	expandAllGroups : function() {
		this.toggleAllGroups(true)
	},
	collapseAllGroups : function() {
		this.toggleAllGroups(false)
	},
	interceptMouse : function(b) {
		var a = b.getTarget(".x-grid-group-hd", this.mainBody);
		if (a) {
			b.stopEvent();
			this.toggleGroup(a.parentNode)
		}
	},
	getGroup : function(a, d, h, j, b, e) {
		var c = h ? h(a, {}, d, j, b, e) : String(a);
		if (c === "" || c === "&#160;") {
			c = this.cm.config[b].emptyGroupText || this.emptyGroupText
		}
		return c
	},
	getGroupField : function() {
		return this.grid.store.getGroupState()
	},
	afterRender : function() {
		Ext.grid.GroupingView.superclass.afterRender.call(this);
		if (this.grid.deferRowRender) {
			this.updateGroupWidths()
		}
	},
	renderRows : function() {
		var a = this.getGroupField();
		var e = !!a;
		if (this.hideGroupedColumn) {
			var b = this.cm.findColumnIndex(a), d = Ext
					.isDefined(this.lastGroupField);
			if (!e && d) {
				this.mainBody.update("");
				this.cm.setHidden(this.cm.findColumnIndex(this.lastGroupField),
						false);
				delete this.lastGroupField
			} else {
				if (e && !d) {
					this.lastGroupField = a;
					this.cm.setHidden(b, true)
				} else {
					if (e && d && a !== this.lastGroupField) {
						this.mainBody.update("");
						var c = this.cm.findColumnIndex(this.lastGroupField);
						this.cm.setHidden(c, false);
						this.lastGroupField = a;
						this.cm.setHidden(b, true)
					}
				}
			}
		}
		return Ext.grid.GroupingView.superclass.renderRows.apply(this,
				arguments)
	},
	doRender : function(c, h, q, a, p, s) {
		if (h.length < 1) {
			return ""
		}
		var z = this.getGroupField(), o = this.cm.findColumnIndex(z), w;
		this.enableGrouping = (this.enableGrouping === false) ? false : !!z;
		if (!this.enableGrouping || this.isUpdating) {
			return Ext.grid.GroupingView.superclass.doRender.apply(this,
					arguments)
		}
		var j = "width:" + this.getTotalWidth() + ";", e = this.cm.config[o], b = e.groupRenderer
				|| e.renderer, t = this.showGroupName
				? (e.groupName || e.header) + ": "
				: "", y = [], l, u, v, n;
		for (u = 0, v = h.length; u < v; u++) {
			var k = a + u, m = h[u], d = m.data[z];
			w = this.getGroup(d, m, b, k, o, q);
			if (!l || l.group != w) {
				n = this.constructId(d, z, o);
				this.state[n] = !(Ext.isDefined(this.state[n])
						? !this.state[n]
						: this.startCollapsed);
				l = {
					group : w,
					gvalue : d,
					text : t + w,
					groupId : n,
					startRow : k,
					rs : [m],
					cls : this.state[n] ? "" : "x-grid-group-collapsed",
					style : j
				};
				y.push(l)
			} else {
				l.rs.push(m)
			}
			m._groupId = n
		}
		var x = [];
		for (u = 0, v = y.length; u < v; u++) {
			w = y[u];
			this.doGroupStart(x, w, c, q, p);
			x[x.length] = Ext.grid.GroupingView.superclass.doRender.call(this,
					c, w.rs, q, w.startRow, p, s);
			this.doGroupEnd(x, w, c, q, p)
		}
		return x.join("")
	},
	getGroupId : function(a) {
		var b = this.getGroupField();
		return this.constructId(a, b, this.cm.findColumnIndex(b))
	},
	constructId : function(c, e, a) {
		var b = this.cm.config[a], d = b.groupRenderer || b.renderer, g = (this.groupMode == "value")
				? c
				: this.getGroup(c, {
							data : {}
						}, d, 0, a, this.ds);
		return this.getPrefix(e) + Ext.util.Format.htmlEncode(g)
	},
	getPrefix : function(a) {
		return this.grid.getGridEl().id + "-gp-" + a + "-"
	},
	doGroupStart : function(a, d, b, e, c) {
		a[a.length] = this.startGroup.apply(d)
	},
	doGroupEnd : function(a, d, b, e, c) {
		a[a.length] = this.endGroup
	},
	getRows : function() {
		if (!this.enableGrouping) {
			return Ext.grid.GroupingView.superclass.getRows.call(this)
		}
		var k = [];
		var h, c = this.getGroups();
		for (var e = 0, a = c.length; e < a; e++) {
			h = c[e].childNodes[1].childNodes;
			for (var d = 0, b = h.length; d < b; d++) {
				k[k.length] = h[d]
			}
		}
		return k
	},
	updateGroupWidths : function() {
		if (!this.enableGrouping || !this.hasRows()) {
			return
		}
		var c = Math.max(this.cm.getTotalWidth(), this.el.dom.offsetWidth
						- this.getScrollOffset())
				+ "px";
		var b = this.getGroups();
		for (var d = 0, a = b.length; d < a; d++) {
			b[d].firstChild.style.width = c
		}
	},
	onColumnWidthUpdated : function(c, a, b) {
		Ext.grid.GroupingView.superclass.onColumnWidthUpdated.call(this, c, a,
				b);
		this.updateGroupWidths()
	},
	onAllColumnWidthsUpdated : function(a, b) {
		Ext.grid.GroupingView.superclass.onAllColumnWidthsUpdated.call(this, a,
				b);
		this.updateGroupWidths()
	},
	onColumnHiddenUpdated : function(b, c, a) {
		Ext.grid.GroupingView.superclass.onColumnHiddenUpdated.call(this, b, c,
				a);
		this.updateGroupWidths()
	},
	onLayout : function() {
		this.updateGroupWidths()
	},
	onBeforeRowSelect : function(b, a) {
		this.toggleRowIndex(a, true)
	}
});
Ext.grid.GroupingView.GROUP_ID = 1000;