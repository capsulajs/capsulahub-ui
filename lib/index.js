parcelRequire = (function(e, r, n, t) {
  var i = 'function' == typeof parcelRequire && parcelRequire,
    o = 'function' == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = 'function' == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && 'string' == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function(r) {
        return e[n][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {},
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = c)
      : 'function' == typeof define && define.amd
      ? define(function() {
          return c;
        })
      : t && (this[t] = c);
  }
  return u;
})(
  {
    GkBF: [
      function(require, module, exports) {
        'use strict';
        module.exports = '/settings.7b9f3490.png';
      },
      {},
    ],
    iJA9: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaultBackgroundColor = exports.defaultColor = exports.defaultFontFamily = exports.defaultFomtSize = exports.defaultFontWeight = exports.defaultFontStyle = void 0);
        var t = 'normal';
        exports.defaultFontStyle = t;
        var e = 'regular';
        exports.defaultFontWeight = e;
        var o = '13px';
        exports.defaultFomtSize = o;
        var r = 'Montserrat';
        exports.defaultFontFamily = r;
        var a = 'rgb(222, 222, 222)';
        exports.defaultColor = a;
        var l = '#3F3F3F';
        exports.defaultBackgroundColor = l;
      },
      {},
    ],
    'FO+Z': [
      function(require, module, exports) {
        'use strict';
        function r(r, o) {
          return n(r) || t(r, o) || e();
        }
        function e() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }
        function t(r, e) {
          var t = [],
            n = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var u, c = r[Symbol.iterator]();
              !(n = (u = c.next()).done) && (t.push(u.value), !e || t.length !== e);
              n = !0
            );
          } catch (r) {
            (o = !0), (a = r);
          } finally {
            try {
              n || null == c.return || c.return();
            } finally {
              if (o) throw a;
            }
          }
          return t;
        }
        function n(r) {
          if (Array.isArray(r)) return r;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.guid = exports.parceInteger = exports.reorder = exports.decorate = void 0);
        var o = function(r) {
          var e = new Date(r),
            t = e.getHours(),
            n = e.getMinutes(),
            o = e.getSeconds();
          return [t > 9 ? t : ''.concat(t, '0'), n > 9 ? n : ''.concat(n, '0'), o > 9 ? o : ''.concat(o, '0')].join(
            ':'
          );
        };
        exports.decorate = o;
        var a = function(e, t, n) {
          var o = Array.from(e),
            a = r(o.splice(t, 1), 1)[0];
          return o.splice(n, 0, a), o;
        };
        exports.reorder = a;
        var u = function(r) {
          return (r.match(/\d+/g) || []).map(Number)[0];
        };
        exports.parceInteger = u;
        var c = function() {
          for (
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6,
              e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              t = '',
              n = 0;
            n < r;
            n++
          )
            t += e.charAt(Math.floor(Math.random() * e.length));
          return t;
        };
        exports.guid = c;
      },
      {},
    ],
    vbVt: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.Logs = exports.theme = void 0),
          require('typeface-montserrat');
        var e = l(require('react')),
          n = l(require('react-json-view')),
          t = l(require('styled-components')),
          r = l(require('../../assets/settings.png')),
          u = require('../constants'),
          a = require('../utils');
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i() {
          var e = w(['color: #2CFF28']);
          return (
            (i = function() {
              return e;
            }),
            e
          );
        }
        function o() {
          var e = w(['cursor: pointer']);
          return (
            (o = function() {
              return e;
            }),
            e
          );
        }
        function c() {
          var e = w([
            '\n  width: calc(100% - 45px);\n  height: calc(100% - 65px);\n  margin-left: 35px;\n  margin-right: 10px;\n  overflow: scroll;\n  ::-webkit-scrollbar {\n    background: #3F3F3F;\n    width: 2px;\n  }\n  ::-webkit-scrollbar-corner {\n    background: #3F3F3F;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #797979;\n  }\n',
          ]);
          return (
            (c = function() {
              return e;
            }),
            e
          );
        }
        function d() {
          var e = w(['\n  color: #2CFF28;\n  text-decoration: underline;\n  cursor: pointer;\n']);
          return (
            (d = function() {
              return e;
            }),
            e
          );
        }
        function f() {
          var e = w(['color: #DEDEDE']);
          return (
            (f = function() {
              return e;
            }),
            e
          );
        }
        function s() {
          var e = w(['\n  background: #FF505A;\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n']);
          return (
            (s = function() {
              return e;
            }),
            e
          );
        }
        function E() {
          var e = w(['\n  width: calc(100% - 120px);\n  padding-left: 12px;\n']);
          return (
            (E = function() {
              return e;
            }),
            e
          );
        }
        function p() {
          var e = w(['width: 50px;']);
          return (
            (p = function() {
              return e;
            }),
            e
          );
        }
        function m() {
          var e = w(['width: 30px;']);
          return (
            (m = function() {
              return e;
            }),
            e
          );
        }
        function D() {
          var e = w(['\n  width: 20px;\n  display: flex;\n  align-items: center;\n']);
          return (
            (D = function() {
              return e;
            }),
            e
          );
        }
        function b() {
          var e = w(['\n  display: flex;\n  flex-direction: row;\n']);
          return (
            (b = function() {
              return e;
            }),
            e
          );
        }
        function v() {
          var e = w(['\n  background: #373737;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n']);
          return (
            (v = function() {
              return e;
            }),
            e
          );
        }
        function x() {
          var e = w(['\n  font-size: 13px;\n  text-transform: uppercase;\n']);
          return (
            (x = function() {
              return e;
            }),
            e
          );
        }
        function h() {
          var e = w(['\n  padding-right: 5px;\n  width: 16px;\n  height: 16px;\n']);
          return (
            (h = function() {
              return e;
            }),
            e
          );
        }
        function g() {
          var e = w([
            '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 13px;\n  padding: 10px;\n',
          ]);
          return (
            (g = function() {
              return e;
            }),
            e
          );
        }
        function F() {
          var e = w([
            '\n  font-family: ',
            ';\n  font-style: regular;\n  font-size: 13px;\n  background: #3F3F3F;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  min-width: 300px;\n  color: #767676;\n  position: relative;\n',
          ]);
          return (
            (F = function() {
              return e;
            }),
            e
          );
        }
        function w(e, n) {
          return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
        }
        var y = {
          scheme: 'custom-theme',
          base00: '#3F3F3F',
          base01: '#DEDEDE',
          base02: '#57D7FF',
          base03: '#DEDEDE',
          base04: '#DEDEDE',
          base05: '#DEDEDE',
          base06: '#DEDEDE',
          base07: '#57D7FF',
          base08: '#DEDEDE',
          base09: '#DEDEDE',
          base0A: '#000',
          base0B: '#DEDEDE',
          base0C: '#57D7FF',
          base0D: '#DEDEDE',
          base0E: '#DEDEDE',
          base0F: '#DEDEDE',
        };
        exports.theme = y;
        var k = t.default.div(F(), u.defaultFontFamily),
          j = t.default.div(g()),
          C = t.default.img(h()),
          q = t.default.div(x()),
          O = t.default.div(v()),
          z = t.default.div(b()),
          R = t.default.div(D()),
          _ = t.default.div(m()),
          L = t.default.div(p()),
          A = t.default.div(E()),
          M = t.default.div(s()),
          P = t.default.div(f()),
          S = t.default.div(d()),
          B = t.default.div(c()),
          G = t.default.div(o()),
          N = t.default.div(i()),
          T = function(t) {
            var r = t.number,
              u = t.item,
              l = t.onResend,
              i = e.default.createElement(n.default, {
                src: u.data,
                name: !1,
                iconStyle: 'circle',
                theme: y,
                displayDataTypes: !1,
                displayObjectSize: !1,
                enableClipboard: !0,
                shouldCollapse: function(e) {
                  return Object.keys(e.src).length > 3;
                },
              });
            return (
              'fail' === u.status &&
                (i = e.default.createElement(
                  z,
                  null,
                  e.default.createElement(P, null, (0, a.decorate)(u.timestamp) + ' | '),
                  e.default.createElement(S, { onClick: l }, ' Resend')
                )),
              'info' === u.status && (i = e.default.createElement(N, null, u.data)),
              e.default.createElement(
                z,
                null,
                e.default.createElement(R, null, 'fail' === u.status && e.default.createElement(M, null)),
                e.default.createElement(_, null, r),
                e.default.createElement(L, null, (0, a.decorate)(u.timestamp)),
                e.default.createElement(A, null, i)
              )
            );
          },
          H = function(n) {
            var t = n.data,
              u = n.onDelete,
              a = n.onEdit,
              l = n.onClear,
              i = n.onResend,
              o = n.path;
            return e.default.createElement(
              k,
              null,
              e.default.createElement(
                j,
                null,
                e.default.createElement(
                  z,
                  null,
                  e.default.createElement(C, { src: r.default }),
                  e.default.createElement(q, null, 'LOG')
                ),
                l && e.default.createElement(G, { onClick: l }, '✕')
              ),
              e.default.createElement(
                B,
                null,
                t
                  ? t.map(function(n, t) {
                      return e.default.createElement(T, {
                        key: t,
                        number: t + 1,
                        item: n,
                        onDelete: u || !1,
                        onEdit: a || !1,
                        onResend: function() {
                          return i && i(n);
                        },
                      });
                    })
                  : e.default.createElement('div', null, 'No Data..')
              ),
              e.default.createElement(O, null, o)
            );
          };
        exports.Logs = H;
      },
      { '../../assets/settings.png': 'GkBF', '../constants': 'iJA9', '../utils': 'FO+Z' },
    ],
    OJTH: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Modal = void 0);
        var e = o(require('react')),
          t = o(require('styled-components')),
          n = o(require('react-click-outside')),
          r = require('../constants');
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function u(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function c(e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        }
        function f(e, t) {
          return !t || ('object' !== i(t) && 'function' != typeof t) ? a(e) : t;
        }
        function a(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function s(e) {
          return (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function p(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        }
        function d(e, t) {
          return (d =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function y() {
          var e = v([
            '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 10px;\n',
          ]);
          return (
            (y = function() {
              return e;
            }),
            e
          );
        }
        function b() {
          var e = v(['cursor: pointer']);
          return (
            (b = function() {
              return e;
            }),
            e
          );
        }
        function h() {
          var e = v([
            '\n  font-family: ',
            ';\n  font-style: regular;\n  font-size: 13px;\n  position: fixed;\n  top: 15%;\n  left: calc(50% - 274px);\n  background: #525252;\n  color: #A9A9A9;\n  padding: 19px;\n  width: 548px;\n  height: 361px;\n  z-index: 9999;\n',
          ]);
          return (
            (h = function() {
              return e;
            }),
            e
          );
        }
        function v(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        var O = t.default.div(h(), r.defaultFontFamily),
          m = t.default.div(b()),
          g = t.default.div(y()),
          x = (function(t) {
            function n(e) {
              var t;
              return u(this, n), ((t = f(this, s(n).call(this, e))).state = { isOpened: !1 }), t;
            }
            return (
              p(n, e.default.Component),
              c(n, [
                {
                  key: 'handleClickOutside',
                  value: function(e) {
                    e.target.id === this.props.id ? this.toggle() : this.setState({ isOpened: !1 });
                  },
                },
                {
                  key: 'toggle',
                  value: function() {
                    this.setState({ isOpened: !this.state.isOpened });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this;
                    return this.state.isOpened
                      ? e.default.createElement(
                          O,
                          null,
                          e.default.createElement(
                            g,
                            null,
                            e.default.createElement('div', null, this.props.title),
                            e.default.createElement(
                              m,
                              {
                                onClick: function() {
                                  return t.toggle();
                                },
                              },
                              '✕'
                            )
                          ),
                          this.props.children
                        )
                      : null;
                  },
                },
              ]),
              n
            );
          })(),
          j = (0, n.default)(x);
        exports.Modal = j;
      },
      { '../constants': 'iJA9' },
    ],
    lFj0: [
      function(require, module, exports) {
        'use strict';
        module.exports = '/loader.4698f01f.png';
      },
      {},
    ],
    TytF: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Loader = void 0);
        var e = n(require('react')),
          r = n(require('styled-components')),
          t = n(require('../../assets/loader.png'));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u() {
          var e = o(['\n  width: 100px;\n  height: 20px;\n']);
          return (
            (u = function() {
              return e;
            }),
            e
          );
        }
        function o(e, r) {
          return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
        }
        var i = r.default.img(u()),
          a = function() {
            return e.default.createElement(i, { src: t.default });
          };
        exports.Loader = a;
      },
      { '../../assets/loader.png': 'lFj0' },
    ],
    YqFH: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Paragraph = void 0);
        var e = n(require('styled-components'));
        require('typeface-montserrat');
        var t = require('../constants');
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r() {
          var e = o([
            '\n  font-style: ',
            ';\n  font-weight: ',
            ';\n  font-size: ',
            ';\n  font-family: ',
            ';\n  color: ',
            ';\n  background-color: ',
            '\n  margin: 0;\n',
          ]);
          return (
            (r = function() {
              return e;
            }),
            e
          );
        }
        function o(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        var u = e.default.p(
          r(),
          function(e) {
            return e.fontStyle || t.defaultFontStyle;
          },
          function(e) {
            return e.fontWeight || t.defaultFontWeight;
          },
          function(e) {
            return e.fontSize || t.defaultFomtSize;
          },
          function(e) {
            return e.fontFamily || t.defaultFontFamily;
          },
          function(e) {
            return e.color || t.defaultColor;
          },
          function(e) {
            return e.backgroundColor || t.defaultBackgroundColor;
          }
        );
        exports.Paragraph = u;
      },
      { '../constants': 'iJA9' },
    ],
    BNTD: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Span = void 0);
        var e = r(require('styled-components'));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t() {
          var e = n(['\n  font-family: Montserrat;\n  font-size: 1rem;\n']);
          return (
            (t = function() {
              return e;
            }),
            e
          );
        }
        function n(e, r) {
          return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
        }
        require('typeface-montserrat');
        var o = e.default.span(t());
        exports.Span = o;
      },
      {},
    ],
    k3vF: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'Paragraph', {
            enumerable: !0,
            get: function() {
              return e.Paragraph;
            },
          }),
          Object.defineProperty(exports, 'Span', {
            enumerable: !0,
            get: function() {
              return r.Span;
            },
          });
        var e = require('./Paragraph'),
          r = require('./Span');
      },
      { './Paragraph': 'YqFH', './Span': 'BNTD' },
    ],
    NbUj: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Button = void 0);
        var e = t(require('react')),
          n = t(require('styled-components')),
          r = require('../constants');
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o() {
          var e = c([
            '\n  font-family: ',
            ';\n  font-size: ',
            ';\n  text-align: center;\n  background-color: ',
            ';\n  color: ',
            ';\n  border: 1px solid ',
            ';\n  padding: 2px 8px;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  \n  &:hover {\n    background-color: ',
            ';\n  }\n  \n  ',
            ';\n',
          ]);
          return (
            (o = function() {
              return e;
            }),
            e
          );
        }
        function c(e, n) {
          return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
        }
        var u = n.default.button(
            o(),
            r.defaultFontFamily,
            r.defaultFomtSize,
            function(e) {
              return e.theme.bg;
            },
            function(e) {
              return e.theme.color;
            },
            function(e) {
              return e.theme.border;
            },
            function(e) {
              return e.theme.hoverBg;
            },
            function(e) {
              return e.css;
            }
          ),
          i = {
            active: { bg: '#57D7FF', hoverBg: '#57D7FF', color: '#666666', border: '#57D7FF' },
            disabled: { bg: '#737373', hoverBg: '#737373', color: '#999999', border: '#737373' },
            clicked: { bg: '#fff', hoverBg: '#fff', color: '#57D7FF', border: '#57D7FF' },
          },
          f = function(n) {
            var r = n.id,
              t = n.text,
              o = n.theme,
              c = n.onClick,
              f = n.css;
            return e.default.createElement(u, { id: r, theme: i[o] || i.active, onClick: c, css: f }, t);
          };
        exports.Button = f;
      },
      { '../constants': 'iJA9' },
    ],
    PelD: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Input = void 0);
        var e = r(require('react')),
          n = r(require('styled-components')),
          t = require('../constants');
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o() {
          var e = u([
            '\n  font-family: ',
            ';\n  font-style: regular;\n  font-size: 12px;\n  width: calc(100% - 20px);\n  height: 30px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #737373;\n  color: #B1B1B1;\n  border: none;\n  \n  &:focus {\n    outline: none;\n  }\n  \n  ::placeholder {\n    color: #B1B1B1;\n  }\n',
          ]);
          return (
            (o = function() {
              return e;
            }),
            e
          );
        }
        function u(e, n) {
          return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
        }
        var a = n.default.input(o(), t.defaultFontFamily),
          l = function(n) {
            var t = n.onChange,
              r = n.placeholder;
            return e.default.createElement(a, {
              placeholder: r,
              onChange: function(e) {
                return t(e.target.value);
              },
            });
          };
        exports.Input = l;
      },
      { '../constants': 'iJA9' },
    ],
    aEMm: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.CheckBox = void 0);
        var e = r(require('react')),
          n = r(require('styled-components')),
          t = require('../constants');
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o() {
          var e = a([
            '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 15px;\n  border: 1px solid #737373;\n  \n  &:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n',
          ]);
          return (
            (o = function() {
              return e;
            }),
            e
          );
        }
        function u() {
          var e = a([
            '\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n \n  &:checked ~ span {\n    background-color: #57D7FF;\n    border: 1px solid #57D7FF;\n  }\n  \n  &:checked ~ span:after {\n    display: block;\n  }\n',
          ]);
          return (
            (u = function() {
              return e;
            }),
            e
          );
        }
        function l() {
          var e = a([
            '\n  font-family: ',
            ';\n  font-style: regular;\n  font-size: 12px;\n  color: #898989;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  width: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n',
          ]);
          return (
            (l = function() {
              return e;
            }),
            e
          );
        }
        function a(e, n) {
          return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
        }
        var c = n.default.label(l(), t.defaultFontFamily),
          i = n.default.input(u()),
          s = n.default.span(o()),
          f = function(n) {
            var t = n.label,
              r = n.onChange;
            return e.default.createElement(
              c,
              null,
              t,
              e.default.createElement(i, {
                type: 'checkbox',
                onChange: function(e) {
                  return r(e.target.checked);
                },
              }),
              e.default.createElement(s, null)
            );
          };
        exports.CheckBox = f;
      },
      { '../constants': 'iJA9' },
    ],
    m3VC: [
      function(require, module, exports) {
        'use strict';
        ace.define('ace/theme/capsula-js', ['require', 'exports', 'module', 'ace/lib/dom'], function(a, c, e) {
          (c.isDark = !0),
            (c.cssClass = 'ace-capsula-js'),
            (c.cssText =
              '  .ace-capsula-js .ace_gutter {  background: #3F3F3F;  color: #767676}.ace-capsula-js .ace_print-margin {  width: 1px;  background: #3F3F3F}.ace-capsula-js {  background-color: #3F3F3F;  color: #DEDEDE}.ace-capsula-js .ace_constant,.ace-capsula-js .ace_constant.ace_character,.ace-capsula-js .ace_constant.ace_character.ace_escape,.ace-capsula-jss .ace_constant.ace_other {  color: #DEDEDE}.ace-capsula-js .ace_constant.ace_language {  color: #DEDEDE}.ace-capsula-js .ace_string {  color: #DEDEDE}.ace-capsula-js .ace_variable {  color: #57D7FF}.ace-capsula-js .ace_variable.ace_language {  color: #DEDEDE}'),
            a('../lib/dom').importCssString(c.cssText, c.cssClass);
        });
      },
      {},
    ],
    eTJV: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.JsonInput = void 0);
        var e = i(require('react')),
          t = i(require('styled-components')),
          n = require('../constants'),
          r = i(require('../../assets/settings.png')),
          u = i(require('react-ace'));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a() {
          var e = d(['text-transform: uppercase']);
          return (
            (a = function() {
              return e;
            }),
            e
          );
        }
        function o() {
          var e = d(['\n  padding-right: 5px;\n  width: 16px;\n  height: 16px;\n']);
          return (
            (o = function() {
              return e;
            }),
            e
          );
        }
        function l() {
          var e = d(['\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n']);
          return (
            (l = function() {
              return e;
            }),
            e
          );
        }
        function c() {
          var e = d([
            '\n  font-family: ',
            ';\n  font-style: ',
            ';\n  font-size: ',
            ';\n  background: #3F3F3F;\n  color: #767676;\n  min-width: 150px;\n',
          ]);
          return (
            (c = function() {
              return e;
            }),
            e
          );
        }
        function d(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        require('brace/mode/json'), require('../theme');
        var f = t.default.div(c(), n.defaultFontFamily, n.defaultFontWeight, n.defaultFomtSize),
          s = t.default.div(l()),
          p = t.default.img(o()),
          h = t.default.div(a()),
          m = function(t) {
            var n = t.id,
              i = t.value,
              a = t.width,
              o = t.height,
              l = t.onChange;
            return e.default.createElement(
              f,
              { style: { width: a, height: o } },
              e.default.createElement(
                s,
                null,
                e.default.createElement(p, { src: r.default }),
                e.default.createElement(h, null, 'JSON Input')
              ),
              e.default.createElement(u.default, {
                mode: 'json',
                theme: 'capsula-js',
                value: i,
                onChange: l,
                name: n,
                editorProps: { $blockScrolling: !0 },
                fontSize: 11,
                setOptions: { tabSize: 2 },
                width: a,
                height: 'calc('.concat(o, ' - 39px)'),
              })
            );
          };
        exports.JsonInput = m;
      },
      { '../constants': 'iJA9', '../../assets/settings.png': 'GkBF', '../theme': 'm3VC' },
    ],
    '3DGm': [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Dropdown = exports.D = void 0);
        var e = o(require('react')),
          t = o(require('styled-components')),
          n = o(require('react-click-outside')),
          r = require('../constants');
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function u(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function a(e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        }
        function c(e, t) {
          return !t || ('object' !== i(t) && 'function' != typeof t) ? f(e) : t;
        }
        function f(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function s(e) {
          return (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function p(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        }
        function d(e, t) {
          return (d =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function b() {
          var e = w([
            '\n  text-decoration: none;\n  padding: 10px;\n  border-bottom: solid #D9D9D9 1px;\n  :first-child { border-top: solid #D9D9D9 1px; }\n  :last-child { border-bottom: none; }\n  cursor: pointer;\n  \n  &:hover {\n    background: #D9D9D9;\n  }\n',
          ]);
          return (
            (b = function() {
              return e;
            }),
            e
          );
        }
        function y() {
          var e = w([
            '\n  position: absolute;\n  z-index: 99;\n  list-style-type: none;\n  background: #E1E1E1;\n  color: #373737;\n  margin: 0;\n  padding: 0;\n  width: 300px;\n',
          ]);
          return (
            (y = function() {
              return e;
            }),
            e
          );
        }
        function h() {
          var e = w([
            '\n  width: 5px;\n  height: 5px;\n  margin-top: 12px;\n  border: solid #B1B1B1 1px;\n  border-width: 0 2px 2px 0;\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n',
          ]);
          return (
            (h = function() {
              return e;
            }),
            e
          );
        }
        function m() {
          var e = w([
            '\n  width: 5px;\n  height: 5px;\n  margin-top: 10px;\n  border: solid #B1B1B1 1px;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n',
          ]);
          return (
            (m = function() {
              return e;
            }),
            e
          );
        }
        function x() {
          var e = w(['']);
          return (
            (x = function() {
              return e;
            }),
            e
          );
        }
        function g() {
          var e = w([
            '\n  font-family: ',
            ';\n  font-style: regular;\n  font-size: 12px;\n  width: calc(100% - 20px);\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  cursor: pointer;\n',
          ]);
          return (
            (g = function() {
              return e;
            }),
            e
          );
        }
        function v() {
          var e = w([
            '\n  font-family: ',
            ';\n  font-size: 12px;\n  font-style: regular;\n  background: #737373;\n  color: #F8F7F7;\n  width: 100%;\n  max-width: 300px;\n',
          ]);
          return (
            (v = function() {
              return e;
            }),
            e
          );
        }
        function w(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        var O = t.default.div(v(), r.defaultFontFamily),
          k = t.default.div(g(), r.defaultFontFamily),
          D = t.default.div(x()),
          E = t.default.div(m()),
          j = t.default.div(h()),
          _ = t.default.ul(y()),
          S = t.default.li(b()),
          F = (function(t) {
            function n(e) {
              var t;
              return (
                u(this, n),
                ((t = c(this, s(n).call(this, e))).state = {
                  isOpen: !1,
                  title: t.props.title,
                  items: t.props.items || [],
                  selected: null,
                }),
                t
              );
            }
            return (
              p(n, e.default.Component),
              a(n, [
                {
                  key: 'handleClickOutside',
                  value: function() {
                    this.setState({ isOpen: !1 });
                  },
                },
                {
                  key: 'toggle',
                  value: function() {
                    this.setState(function(e) {
                      return { isOpen: !e.isOpen };
                    });
                  },
                },
                {
                  key: 'select',
                  value: function(e) {
                    this.setState({ selected: e }), this.toggle(), this.props.onChange(this.state.items[e]);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this,
                      n = this.state,
                      r = n.title,
                      o = n.items,
                      i = n.selected,
                      u = n.isOpen;
                    return e.default.createElement(
                      O,
                      null,
                      e.default.createElement(
                        k,
                        {
                          onClick: function() {
                            return t.toggle();
                          },
                        },
                        e.default.createElement(D, null, Number.isInteger(i) ? o[i].label : r),
                        u ? e.default.createElement(j, null) : e.default.createElement(E, null)
                      ),
                      u &&
                        e.default.createElement(
                          _,
                          null,
                          o.map(function(n, r) {
                            return e.default.createElement(
                              S,
                              {
                                key: r,
                                onClick: function() {
                                  return t.select(r);
                                },
                              },
                              n.label
                            );
                          })
                        )
                    );
                  },
                },
              ]),
              n
            );
          })();
        exports.D = F;
        var P = (0, n.default)(F);
        exports.Dropdown = P;
      },
      { '../constants': 'iJA9' },
    ],
    '0NdJ': [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.STYLES = exports.MIN_TAB_NAME_LENGTH = exports.ENTER_KEY = exports.ESCAPE_KEY = exports.SECTORS_HIGHLIGHT_COLOR = exports.SECTORS_CENTER_RATIO = exports.SECTORS_MIN_SIZE = exports.SECTORS_ORIENTATION = exports.SECTORS_REVERSE = exports.SECTORS_NEIGHBORS = exports.SECTORS = void 0);
        var r = [1, 2, 3, 4];
        exports.SECTORS = r;
        var e = { 1: [2, 3], 2: [1, 4], 3: [1, 4], 4: [2, 3] };
        exports.SECTORS_NEIGHBORS = e;
        var E = { '1,2': !1, '3,4': !0, '1,3': !1, '2,4': !0, '1,2,3,4': !1 };
        exports.SECTORS_REVERSE = E;
        var o = { '1,2': 'horizontal', '3,4': 'horizontal', '1,3': 'vertical', '2,4': 'vertical', '1,2,3,4': 'center' };
        exports.SECTORS_ORIENTATION = o;
        var t = 250;
        exports.SECTORS_MIN_SIZE = t;
        var S = 0.2;
        exports.SECTORS_CENTER_RATIO = S;
        var T = '#C9DADF';
        exports.SECTORS_HIGHLIGHT_COLOR = T;
        var R = 27;
        exports.ESCAPE_KEY = R;
        var _ = 13;
        exports.ENTER_KEY = _;
        var s = 2;
        exports.MIN_TAB_NAME_LENGTH = s;
        var p = {
          container: { background: '#414141', overflow: 'hidden' },
          element: { horizontal: {}, vertical: { overflow: 'visible' } },
          splitter: {
            horizontal: { background: '#515151', border: 'none', width: '100%', height: '8px' },
            vertical: { background: '#515151', border: 'none', width: '8px', height: '100%' },
          },
        };
        exports.STYLES = p;
      },
      {},
    ],
    '4Oxt': [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.couple = exports.isSmall = void 0);
        var t = e(require('lodash')),
          r = require('../constants');
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(t) {
          return a(t) || i(t) || o();
        }
        function o() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        }
        function i(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
            return Array.from(t);
        }
        function a(t) {
          if (Array.isArray(t)) {
            for (var r = 0, e = new Array(t.length); r < t.length; r++) e[r] = t[r];
            return e;
          }
        }
        var u = function(t) {
          var e = [t.offsetWidth, t.offsetHeight],
            n = e[1];
          return e[0] < r.SECTORS_MIN_SIZE || n < r.SECTORS_MIN_SIZE;
        };
        exports.isSmall = u;
        var s = function(e, o) {
          return 2 === e.length
            ? [o].concat(n(t.default.intersection(r.SECTORS_NEIGHBORS[o], e))).sort()
            : [o, r.SECTORS_NEIGHBORS[o][o % 2]].sort();
        };
        exports.couple = s;
      },
      { '../constants': '0NdJ' },
    ],
    laLL: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var t = c(require('react')),
          e = c(require('prop-types')),
          n = c(require('react-dom')),
          r = c(require('styled-components')),
          o = require('rxjs/operators'),
          i = require('rxjs'),
          u = require('./constants'),
          a = require('./utils/dropzone');
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function s(t) {
          return (s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function f(t) {
          return d(t) || p(t) || l();
        }
        function l() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        }
        function p(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
            return Array.from(t);
        }
        function d(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        }
        function b(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function y(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function m(t, e, n) {
          return e && y(t.prototype, e), n && y(t, n), t;
        }
        function h(t, e) {
          return !e || ('object' !== s(e) && 'function' != typeof e) ? v(t) : e;
        }
        function v(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function g(t) {
          return (g = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function S(t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && O(t, e);
        }
        function O(t, e) {
          return (O =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function E() {
          var t = D([
            '\n  position: absolute;\n  height: ',
            '%;\n  width: ',
            '%;\n  top: ',
            '%;\n  left: ',
            '%;\n  background: transparent;\n',
          ]);
          return (
            (E = function() {
              return t;
            }),
            t
          );
        }
        function j() {
          var t = D(['\n  width: 50%;\n  height: 50%;\n  float: left;\n']);
          return (
            (j = function() {
              return t;
            }),
            t
          );
        }
        function _() {
          var t = D(['\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  position:relative;\n']);
          return (
            (_ = function() {
              return t;
            }),
            t
          );
        }
        function D(t, e) {
          return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
        }
        var w = r.default.div(_()),
          T = r.default.div(j()),
          C = r.default.div(
            E(),
            function(t) {
              return 100 * t.ratio;
            },
            function(t) {
              return 100 * t.ratio;
            },
            function(t) {
              return 50 * (1 - t.ratio);
            },
            function(t) {
              return 50 * (1 - t.ratio);
            }
          ),
          R = (function(e) {
            function r(t) {
              var e;
              return (
                b(this, r),
                ((e = h(this, g(r).call(this, t))).state = { sectors: [], ratio: u.SECTORS_CENTER_RATIO }),
                e
              );
            }
            return (
              S(r, t.default.Component),
              m(r, [
                {
                  key: 'getStyle',
                  value: function(t) {
                    return this.state.sectors.includes(t) ? { background: u.SECTORS_HIGHLIGHT_COLOR } : {};
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function() {
                    var t,
                      e,
                      r = this,
                      c = n.default.findDOMNode(this);
                    (0, a.isSmall)(c) && this.setState({ ratio: 1 }),
                      (this.onDrag$ = (0, i.fromEvent)(c, 'dragover')
                        .pipe(
                          (0, o.map)(function(t) {
                            return t.preventDefault() || [t.clientX, t.clientY];
                          }),
                          (0, o.distinctUntilChanged)(function(t, e) {
                            return t.toString() === e.toString();
                          }),
                          (0, o.throttleTime)(50),
                          (0, o.map)(function(t) {
                            var e,
                              n = (e = document).elementFromPoint.apply(e, f(t)).classList.value,
                              o = n.includes('sector') ? n.match(/\d+/g).map(Number) : [];
                            return 1 === o.length ? (0, a.couple)(r.state.sectors, o[0]) : o;
                          }),
                          (0, o.distinctUntilChanged)(function(t, e) {
                            return t.toString() === e.toString();
                          })
                        )
                        .subscribe(function(t) {
                          return r.setState({ sectors: t });
                        }));
                    var s = [
                      (0, o.map)(function(t) {
                        return t.preventDefault() || t.fromElement;
                      }),
                      (0, o.filter)(Boolean),
                      (0, o.map)(function(t) {
                        return !t.classList.value.includes('sector');
                      }),
                      (0, o.filter)(Boolean),
                    ];
                    (this.onDragEnter$ = (t = (0, i.fromEvent)(c, 'dragenter')).pipe.apply(t, s).subscribe(function(t) {
                      return 1 === r.state.ratio && r.setState({ sectors: u.SECTORS });
                    })),
                      (this.onDragLeave$ = (e = (0, i.fromEvent)(c, 'dragleave')).pipe
                        .apply(e, s)
                        .subscribe(function(t) {
                          return r.setState({ sectors: [] });
                        })),
                      (this.onDrop$ = (0, i.fromEvent)(c, 'drop')
                        .pipe(
                          (0, o.map)(function(t) {
                            return t.dataTransfer.getData('builderId');
                          })
                        )
                        .subscribe(function(t) {
                          return t
                            ? r.props.onDrop({ builderId: t, sectors: r.state.sectors })
                            : r.setState({ sectors: [] });
                        }));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.onDrag$.unsubscribe(),
                      this.onDragEnter$.unsubscribe(),
                      this.onDragLeave$.unsubscribe(),
                      this.onDrop$.unsubscribe();
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this;
                    return t.default.createElement(
                      w,
                      null,
                      t.default.createElement(C, { className: 'sector-'.concat(u.SECTORS), ratio: this.state.ratio }),
                      u.SECTORS.map(function(n) {
                        return t.default.createElement(T, {
                          key: n,
                          className: 'sector-'.concat(n),
                          style: e.getStyle(n),
                        });
                      })
                    );
                  },
                },
              ]),
              r
            );
          })();
        R.propTypes = { onDrop: e.default.func.isRequired };
        var q = R;
        exports.default = q;
      },
      { './constants': '0NdJ', './utils/dropzone': '4Oxt' },
    ],
    E7gb: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = o(require('react')),
          t = o(require('prop-types')),
          n = o(require('styled-components')),
          r = require('./constants');
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function u(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function c(e, t, n) {
          return t && a(e.prototype, t), n && a(e, n), e;
        }
        function s(e, t) {
          return !t || ('object' !== i(t) && 'function' != typeof t) ? l(e) : t;
        }
        function f(e) {
          return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function l(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function p(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        }
        function d(e, t) {
          return (d =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function y() {
          var e = b([
            '\n  font-style: regular;\n  font-size: 12px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #737373;\n  color: #B1B1B1;\n  border: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  ::placeholder {\n    color: #B1B1B1;\n  }\n',
          ]);
          return (
            (y = function() {
              return e;
            }),
            e
          );
        }
        function h() {
          var e = b(['\n  white-space: nowrap;\n  cursor: pointer;\n']);
          return (
            (h = function() {
              return e;
            }),
            e
          );
        }
        function b(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        var v = n.default.div(h()),
          E = n.default.input(y()),
          m = function(e) {
            return { borderBottom: e ? 'solid 1px #FEFEFE' : 'none' };
          },
          g = (function(t) {
            function n(e) {
              var t;
              return (
                u(this, n),
                ((t = s(this, f(n).call(this, e))).change = t.change.bind(l(t))),
                (t.save = t.save.bind(l(t))),
                (t.keyDown = t.keyDown.bind(l(t))),
                (t.state = { value: t.props.name }),
                t
              );
            }
            return (
              p(n, e.default.Component),
              c(n, [
                {
                  key: 'change',
                  value: function(e) {
                    this.setState({ value: e.target.value.trim() });
                  },
                },
                {
                  key: 'save',
                  value: function() {
                    var e = this.state.value;
                    e &&
                      e.length > r.MIN_TAB_NAME_LENGTH &&
                      (this.props.onUpdate({ id: this.props.id, name: e }), this.props.onEditEnd());
                  },
                },
                {
                  key: 'keyDown',
                  value: function(e) {
                    (e.which === r.ESCAPE_KEY || e.which === r.ENTER_KEY) && this.save();
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this.props,
                      n = t.isEditing,
                      r = t.isActive,
                      o = t.name;
                    return n
                      ? e.default.createElement(E, {
                          value: this.state.value,
                          onChange: this.change,
                          onBlur: this.save,
                          onKeyDown: this.keyDown,
                        })
                      : e.default.createElement(
                          v,
                          { style: m(r), onClick: this.props.onSelect, onDoubleClick: this.props.onEditStart },
                          o
                        );
                  },
                },
              ]),
              n
            );
          })();
        g.propTypes = {
          name: t.default.string.isRequired,
          onSelect: t.default.func.isRequired,
          onEditStart: t.default.func.isRequired,
          onEditEnd: t.default.func.isRequired,
          onUpdate: t.default.func.isRequired,
        };
        var w = g;
        exports.default = w;
      },
      { './constants': '0NdJ' },
    ],
    '8MVk': [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = u(require('react')),
          t = u(require('prop-types')),
          n = require('react-beautiful-dnd'),
          r = u(require('styled-components')),
          o = u(require('./tab'));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function a() {
          return (a =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function c(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function f(e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        }
        function d(e, t) {
          return !t || ('object' !== i(t) && 'function' != typeof t) ? s(e) : t;
        }
        function s(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function p(e) {
          return (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function b(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && y(e, t);
        }
        function y(e, t) {
          return (y =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function v(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function(t) {
                g(e, t, n[t]);
              });
          }
          return e;
        }
        function g(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          );
        }
        function h() {
          var e = x(['\n  cursor: pointer;\n  margin: auto;\n  padding-left: 5px;\n']);
          return (
            (h = function() {
              return e;
            }),
            e
          );
        }
        function m() {
          var e = x([
            '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: #515151;\n  color: #A9A9A9;\n  width: 100%;\n  overflow: hidden;\n\n  overflow-x: scroll;\n  ::-webkit-scrollbar {\n    background: #515151;\n    height: 2px;\n  }\n  ::-webkit-scrollbar-corner {\n    background: #3F3F3F;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #797979;\n  }\n  overflow-y: hidden;\n',
          ]);
          return (
            (m = function() {
              return e;
            }),
            e
          );
        }
        function x(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        var O = r.default.div(m()),
          w = r.default.span(h()),
          j = function() {
            return { background: '#515151', display: 'flex' };
          },
          E = function(e, t) {
            return v(
              {
                userSelect: 'none',
                textTransform: 'uppercase',
                padding: '2px',
                margin: '0 8px 0 0',
                background: '#515151',
                color: t ? '#FEFEFE' : '#A9A9A9',
                display: 'flex',
                flexDirection: 'row',
                paddingBottom: '2px',
              },
              e
            );
          },
          k = function(e) {
            return e ? {} : { color: '#515151' };
          },
          P = (function(t) {
            function r(e) {
              var t;
              return c(this, r), ((t = d(this, p(r).call(this, e))).state = { hoverIndex: -1, editIndex: -1 }), t;
            }
            return (
              b(r, e.default.Component),
              f(r, [
                {
                  key: 'hover',
                  value: function(e) {
                    this.setState({ hoverIndex: e });
                  },
                },
                {
                  key: 'edit',
                  value: function(e) {
                    this.setState({ editIndex: e });
                  },
                },
                {
                  key: 'renderDraggable',
                  value: function(t, r) {
                    var u = this,
                      i = this.props,
                      c = i.tabs,
                      l = i.activeIndex,
                      f = i.onRemove,
                      d = i.onSelect,
                      s = i.onUpdate,
                      p = this.state,
                      b = p.hoverIndex,
                      y = p.editIndex,
                      v = l === r,
                      g = b === r,
                      h = y === r,
                      m = !h && c.length;
                    return e.default.createElement(n.Draggable, { key: r, draggableId: t.id, index: r }, function(n) {
                      return e.default.createElement(
                        'div',
                        a({ ref: n.innerRef }, n.draggableProps, n.dragHandleProps, {
                          style: E(n.draggableProps.style, v),
                          onMouseEnter: function() {
                            return u.hover(r);
                          },
                          onMouseLeave: function() {
                            return u.hover(-1);
                          },
                        }),
                        e.default.createElement(o.default, {
                          id: t.id,
                          name: t.name,
                          isEditing: h,
                          isActive: v,
                          onSelect: function() {
                            return d(r);
                          },
                          onEditStart: function() {
                            return u.edit(r);
                          },
                          onEditEnd: function() {
                            return u.edit(-1);
                          },
                          onUpdate: s,
                        }),
                        m &&
                          e.default.createElement(
                            w,
                            {
                              onClick: function(e) {
                                return e.preventDefault() || f(t.id);
                              },
                              style: k(g),
                            },
                            '✕'
                          )
                      );
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this;
                    return e.default.createElement(
                      O,
                      null,
                      e.default.createElement(
                        n.Droppable,
                        { droppableId: this.props.id, direction: 'horizontal' },
                        function(n) {
                          return e.default.createElement(
                            'div',
                            a({ ref: n.innerRef, style: j() }, n.droppableProps),
                            t.props.tabs.map(function(e, n) {
                              return t.renderDraggable(e, n);
                            }),
                            n.placeholder
                          );
                        }
                      )
                    );
                  },
                },
              ]),
              r
            );
          })();
        P.propTypes = {
          id: t.default.string.isRequired,
          tabs: t.default.array.isRequired,
          activeIndex: t.default.number.isRequired,
          onRemove: t.default.func.isRequired,
          onSelect: t.default.func.isRequired,
          onUpdate: t.default.func.isRequired,
        };
        var S = P;
        exports.default = S;
      },
      { './tab': 'E7gb' },
    ],
    '6MpJ': [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = o(require('react')),
          t = o(require('prop-types')),
          n = o(require('styled-components')),
          r = o(require('./tabs'));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e) {
          return (u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function i(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function l(e, t, n) {
          return t && a(e.prototype, t), n && a(e, n), e;
        }
        function c(e, t) {
          return !t || ('object' !== u(t) && 'function' != typeof t) ? d(e) : t;
        }
        function f(e) {
          return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function d(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function s(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        }
        function p(e, t) {
          return (p =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function b() {
          var e = h(['\n  height: 100%;\n']);
          return (
            (b = function() {
              return e;
            }),
            e
          );
        }
        function y() {
          var e = h(['\n  width: 100%;\n  height: calc(100% - 23px);\n']);
          return (
            (y = function() {
              return e;
            }),
            e
          );
        }
        function h(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        var v = n.default.div(y()),
          m = n.default.div(b()),
          O = (function(t) {
            function n(e) {
              var t;
              return (
                i(this, n),
                ((t = c(this, f(n).call(this, e))).state = { index: 0 }),
                (t.handleOnRemove = t.handleOnRemove.bind(d(t))),
                (t.handleOnSelect = t.handleOnSelect.bind(d(t))),
                t
              );
            }
            return (
              s(n, e.default.Component),
              l(n, [
                {
                  key: 'handleOnSelect',
                  value: function(e) {
                    this.setState({ index: e });
                  },
                },
                {
                  key: 'handleOnRemove',
                  value: function(e) {
                    this.setState({ index: 0 }), this.props.onRemove(e);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this.state.index,
                      n = this.props,
                      o = n.id,
                      u = n.tabs,
                      i = n.builders,
                      a = (n.onRemove, n.onUpdate);
                    if (u && u[t]) {
                      var l = u[t],
                        c = l.builderId,
                        f = l.metadata,
                        d = i[c];
                      return d
                        ? e.default.createElement(
                            v,
                            null,
                            e.default.createElement(r.default, {
                              id: o,
                              tabs: u,
                              activeIndex: t,
                              onRemove: this.handleOnRemove,
                              onSelect: this.handleOnSelect,
                              onUpdate: a,
                            }),
                            e.default.createElement(m, null, d(f))
                          )
                        : 'No builder...';
                    }
                    return 'No tabs..';
                  },
                },
              ]),
              n
            );
          })();
        O.propTypes = {
          id: t.default.string.isRequired,
          tabs: t.default.array.isRequired,
          builders: t.default.object.isRequired,
          onRemove: t.default.func.isRequired,
          onUpdate: t.default.func.isRequired,
        };
        var R = O;
        exports.default = R;
      },
      { './tabs': '8MVk' },
    ],
    vHkk: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.updateNodeTab = exports.updateNodeTabs = exports.getNodeTabs = exports.isAllNodesWithTabs = exports.isAnyNodeWithTabs = exports.decamelize = exports.emptyNode = exports.guid = void 0);
        var e = require('lodash');
        function t(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              o = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
              (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              o.forEach(function(t) {
                r(e, t, n[t]);
              });
          }
          return e;
        }
        function r(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          );
        }
        var n = function() {
          return (
            Math.random()
              .toString(36)
              .substring(2, 5) +
            Math.random()
              .toString(36)
              .substring(2, 5)
          );
        };
        exports.guid = n;
        var o = function() {
          return { id: n(), type: 'element', tabs: [] };
        };
        exports.emptyNode = o;
        var a = function(e, t) {
          return (
            (t = void 0 === t ? '_' : t),
            e
              .replace(/([a-z\d])([A-Z])/g, '$1' + t + '$2')
              .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + t + '$2')
              .toLowerCase()
          );
        };
        exports.decamelize = a;
        var s = function(e) {
          return 'element' === e.type ? e.tabs.length > 0 : e.nodes.length > 0;
        };
        exports.isAnyNodeWithTabs = s;
        var i = function(e) {
          var t = !0;
          return (
            (function e(r) {
              'element' === r.type ? 0 === r.tabs.length && (t = !1) : r.nodes.forEach(e);
            })(e),
            t
          );
        };
        exports.isAllNodesWithTabs = i;
        var u = function t(r, n) {
          return r.id === n
            ? r.tabs
            : r.nodes
            ? (0, e.flatten)(
                r.nodes.map(function(e) {
                  return t(e, n);
                })
              )
            : [];
        };
        exports.getNodeTabs = u;
        var d = function(t, r, n) {
          var o = (0, e.cloneDeep)(t);
          return (
            (function e(t) {
              t.id === r ? (t.tabs = n) : t.nodes && t.nodes.forEach(e);
            })(o),
            o
          );
        };
        exports.updateNodeTabs = d;
        var c = function(r, n, o, a) {
          var s = (0, e.cloneDeep)(r);
          return (
            (function e(r) {
              r.id === n
                ? (r.tabs = r.tabs.map(function(e) {
                    return e.id === o ? t({}, e, a) : e;
                  }))
                : r.nodes && r.nodes.forEach(e);
            })(s),
            s
          );
        };
        exports.updateNodeTab = c;
      },
      {},
    ],
    P0zI: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = require('..'),
          t = require('../../constants');
        function n(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              o = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
              (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              o.forEach(function(t) {
                r(e, t, n[t]);
              });
          }
          return e;
        }
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          );
        }
        var o = function(t) {
            return [{ builderId: t, id: (0, e.guid)(), name: (0, e.decamelize)(t, ' '), metadata: {} }];
          },
          i = function(r, i, u) {
            return t.SECTORS_REVERSE[u.toString()]
              ? [(0, e.emptyNode)(), n({}, r, { tabs: o(i) })]
              : [n({}, r, { tabs: o(i) }), (0, e.emptyNode)()];
          },
          u = function n(r) {
            var u = r.layout,
              a = r.node,
              d = r.orientation,
              c = r.builderId,
              s = r.sectors;
            switch (!0) {
              case u.id === a.id:
                return s.toString() === t.SECTORS.toString()
                  ? { id: (0, e.guid)(), type: 'element', tabs: o(c) }
                  : { id: (0, e.guid)(), type: 'container', nodes: i(a, c, s), orientation: d };
              case 'element' === u.type:
                return u;
              default:
                return {
                  id: (0, e.guid)(),
                  type: 'container',
                  nodes: u.nodes.map(function(e) {
                    return n({ layout: e, node: a, orientation: d, builderId: c, sectors: s });
                  }),
                  orientation: u.orientation,
                };
            }
          },
          a = u;
        exports.default = a;
      },
      { '..': 'vHkk', '../../constants': '0NdJ' },
    ],
    A2Rj: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = require('lodash'),
          t = require('..');
        function r(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              o = Object.keys(r);
            'function' == typeof Object.getOwnPropertySymbols &&
              (o = o.concat(
                Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              o.forEach(function(t) {
                n(e, t, r[t]);
              });
          }
          return e;
        }
        function n(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          );
        }
        function o(e, t) {
          return d(e) || a(e, t) || u();
        }
        function u() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }
        function a(e, t) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var a, d = e[Symbol.iterator]();
              !(n = (a = d.next()).done) && (r.push(a.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (o = !0), (u = e);
          } finally {
            try {
              n || null == d.return || d.return();
            } finally {
              if (o) throw u;
            }
          }
          return r;
        }
        function d(e) {
          if (Array.isArray(e)) return e;
        }
        var i = function e(t) {
            if (t.tabs) return t.tabs.length > 0;
            switch (t.nodes.length) {
              case 1:
                return e(t.nodes[0]);
              case 2:
                return e(t.nodes[0]) || e(t.nodes[1]);
              default:
                return !1;
            }
          },
          s = function e(n) {
            if (n.tabs) return n;
            switch (n.nodes.filter(i).length) {
              case 0:
                return (0, t.emptyNode)();
              case 1:
                var u = o(n.nodes, 2),
                  a = u[0],
                  d = u[1];
                if (a.nodes)
                  switch (a.nodes.filter(i).length) {
                    case 0:
                      return r({}, n, { nodes: [(0, t.emptyNode)(), d] });
                    case 1:
                      var s = o(a.nodes, 2),
                        c = s[0],
                        l = s[1];
                      if (i(c) && !i(l)) return r({}, n, { nodes: [c, d] });
                    default:
                      return n;
                  }
                if (d.nodes)
                  switch (d.nodes.filter(i).length) {
                    case 0:
                      return r({}, n, { nodes: [a, (0, t.emptyNode)()] });
                    case 1:
                      var f = o(d.nodes, 2),
                        y = f[0],
                        b = f[1];
                      if (!i(y) && i(b)) return r({}, n, { nodes: [a, b] });
                    default:
                      return n;
                  }
              case 2:
                return r({}, n, { nodes: n.nodes.map(e) });
              default:
                return n;
            }
          },
          c = function(e) {
            var r = e.layout,
              n = e.nodeId,
              o = e.tabId,
              u = (0, t.getNodeTabs)(r, n).filter(function(e) {
                return e.id !== o;
              }),
              a = (0, t.updateNodeTabs)(r, n, u);
            return s(a);
          },
          l = function(e) {
            var r = e.layout,
              n = e.nodeId,
              o = e.tabId;
            return r.id === n ? (0, t.emptyNode)() : c({ layout: r, nodeId: n, tabId: o });
          },
          f = l;
        exports.default = f;
      },
      { '..': 'vHkk' },
    ],
    '3OxI': [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var r = require('..');
        function e(r, e) {
          return o(r) || n(r, e) || t();
        }
        function t() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }
        function n(r, e) {
          var t = [],
            n = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var u, i = r[Symbol.iterator]();
              !(n = (u = i.next()).done) && (t.push(u.value), !e || t.length !== e);
              n = !0
            );
          } catch (r) {
            (o = !0), (a = r);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (o) throw a;
            }
          }
          return t;
        }
        function o(r) {
          if (Array.isArray(r)) return r;
        }
        var a = function(r, t, n) {
            var o = Array.from(r),
              a = e(o.splice(t, 1), 1)[0];
            return o.splice(n, 0, a), o;
          },
          u = function(e, t, n) {
            var o = a((0, r.getNodeTabs)(e, n.droppableId), t.index, n.index);
            return (0, r.updateNodeTabs)(e, n.droppableId, o);
          };
        exports.default = u;
      },
      { '..': 'vHkk' },
    ],
    U2ja: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = require('lodash'),
          r = o(require('./remove')),
          t = o(require('./reorder')),
          n = require('..');
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e, r) {
          return i(e) || d(e, r) || u();
        }
        function u() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }
        function d(e, r) {
          var t = [],
            n = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var u, d = e[Symbol.iterator]();
              !(n = (u = d.next()).done) && (t.push(u.value), !r || t.length !== r);
              n = !0
            );
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              n || null == d.return || d.return();
            } finally {
              if (o) throw a;
            }
          }
          return t;
        }
        function i(e) {
          if (Array.isArray(e)) return e;
        }
        var l = function(e, r, t, n) {
            var o = Array.from(e),
              u = Array.from(r),
              d = a(o.splice(t.index, 1), 1)[0];
            return u.splice(n.index, 0, d), u;
          },
          f = function(o, a, u) {
            var d = (0, n.getNodeTabs)(o, a.droppableId),
              i = (0, n.getNodeTabs)(o, u.droppableId),
              f = l(d, i, a, u),
              p = (0, e.cloneDeep)(o);
            return (
              (p = (0, n.updateNodeTabs)(p, u.droppableId, f)),
              (p = (0, r.default)({ layout: p, nodeId: a.droppableId, tabId: d[a.index].id })),
              (0, t.default)((0, e.cloneDeep)(p), a, u)
            );
          };
        exports.default = f;
      },
      { './remove': 'A2Rj', './reorder': '3OxI', '..': 'vHkk' },
    ],
    k73u: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0),
          require('react-reflex/styles.css');
        var e = f(require('react')),
          t = f(require('prop-types')),
          r = require('react-reflex'),
          n = require('react-beautiful-dnd'),
          o = f(require('./dropzone')),
          a = f(require('./content')),
          i = require('./constants'),
          u = f(require('./utils/node/create')),
          l = f(require('./utils/tab/remove')),
          d = f(require('./utils/tab/move')),
          s = f(require('./utils/tab/reorder')),
          p = require('./utils');
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c(e) {
          return (c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function y(e) {
          return v(e) || h(e) || b();
        }
        function b() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        }
        function h(e) {
          if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
            return Array.from(e);
        }
        function v(e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
          }
        }
        function m(e, t) {
          if (null == e) return {};
          var r,
            n,
            o = O(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
          }
          return o;
        }
        function O(e, t) {
          if (null == e) return {};
          var r,
            n,
            o = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o;
        }
        function E(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function g(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function S(e, t, r) {
          return t && g(e.prototype, t), r && g(e, r), e;
        }
        function D(e, t) {
          return !t || ('object' !== c(t) && 'function' != typeof t) ? T(e) : t;
        }
        function j(e) {
          return (j = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function T(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function R(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && q(e, t);
        }
        function q(e, t) {
          return (q =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var x = (function(t) {
          function f(e) {
            var t;
            return (
              E(this, f),
              ((t = D(this, j(f).call(this, e))).handleOnDrop = t.handleOnDrop.bind(T(t))),
              (t.handleOnRemove = t.handleOnRemove.bind(T(t))),
              (t.handleOnUpdate = t.handleOnUpdate.bind(T(t))),
              (t.handleTabDragEnd = t.handleTabDragEnd.bind(T(t))),
              t
            );
          }
          return (
            R(f, e.default.Component),
            S(f, [
              {
                key: 'handleOnDrop',
                value: function(e) {
                  var t = this;
                  return function(r) {
                    var n = r.builderId,
                      o = r.sectors,
                      a = i.SECTORS_ORIENTATION[o.toString()];
                    'container' !== e.type &&
                      t.props.onUpdate(
                        (0, u.default)({ layout: t.props.layout, node: e, orientation: a, builderId: n, sectors: o })
                      );
                  };
                },
              },
              {
                key: 'handleOnRemove',
                value: function(e) {
                  var t = this;
                  return function(r) {
                    return t.props.onUpdate((0, l.default)({ layout: t.props.layout, nodeId: e.id, tabId: r }));
                  };
                },
              },
              {
                key: 'handleOnUpdate',
                value: function(e) {
                  var t = this;
                  return function(r) {
                    var n = r.id,
                      o = m(r, ['id']);
                    t.props.onUpdate((0, p.updateNodeTab)(t.props.layout, e.id, n, o));
                  };
                },
              },
              {
                key: 'handleTabDragEnd',
                value: function(e) {
                  var t = e.source,
                    r = e.destination;
                  r &&
                    (t.droppableId === r.droppableId
                      ? this.props.onUpdate((0, s.default)(this.props.layout, t, r))
                      : this.props.onUpdate((0, d.default)(this.props.layout, t, r)));
                },
              },
              {
                key: 'renderNode',
                value: function(t, n) {
                  var u = this.props.builders,
                    l = t.type,
                    d = t.tabs,
                    s = t.orientation,
                    p = t.nodes;
                  return 'container' === l
                    ? e.default.createElement(
                        r.ReflexElement,
                        { key: n, styles: i.STYLES.container },
                        this.renderNodes(p, s)
                      )
                    : e.default.createElement(
                        r.ReflexElement,
                        { key: n, style: i.STYLES.element[s || 'horizontal'] },
                        d.length
                          ? e.default.createElement(a.default, {
                              id: t.id,
                              tabs: d,
                              builders: u,
                              onRemove: this.handleOnRemove(t),
                              onUpdate: this.handleOnUpdate(t),
                            })
                          : e.default.createElement(o.default, { onDrop: this.handleOnDrop(t) })
                      );
                },
              },
              {
                key: 'renderNodes',
                value: function(t, n) {
                  var o = this;
                  return e.default.createElement(
                    r.ReflexContainer,
                    { orientation: n || 'horizontal', style: i.STYLES.container },
                    t.reduce(function(t, a, u) {
                      var l = e.default.createElement(r.ReflexSplitter, {
                          key: 'S' + u,
                          style: i.STYLES.splitter[n || 'horizontal'],
                        }),
                        d = o.renderNode(a, 'N' + u);
                      return [].concat(y(t), u > 0 ? [l, d] : [d]);
                    }, [])
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this.props,
                    r = t.layout,
                    i = t.builders,
                    u = r.id,
                    l = r.tabs,
                    d = r.orientation,
                    s = r.nodes;
                  return s && s.length
                    ? e.default.createElement(
                        n.DragDropContext,
                        { onDragEnd: this.handleTabDragEnd },
                        this.renderNodes(s, d)
                      )
                    : l && l.length
                    ? e.default.createElement(
                        n.DragDropContext,
                        { onDragEnd: this.handleTabDragEnd },
                        e.default.createElement(a.default, {
                          id: u,
                          tabs: l,
                          builders: i,
                          onRemove: this.handleOnRemove(r),
                          onUpdate: this.handleOnUpdate(r),
                        })
                      )
                    : e.default.createElement(o.default, { onDrop: this.handleOnDrop(r) });
                },
              },
            ]),
            f
          );
        })();
        x.propTypes = { layout: t.default.object.isRequired, builders: t.default.object.isRequired };
        var w = x;
        exports.default = w;
      },
      {
        './dropzone': 'laLL',
        './content': '6MpJ',
        './constants': '0NdJ',
        './utils/node/create': 'P0zI',
        './utils/tab/remove': 'A2Rj',
        './utils/tab/move': 'U2ja',
        './utils/tab/reorder': '3OxI',
        './utils': 'vHkk',
      },
    ],
    mLYi: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.onDragstartEventHandler = void 0);
        var e = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'add',
            t = arguments.length > 1 ? arguments[1] : void 0,
            r = arguments.length > 2 ? arguments[2] : void 0,
            n = document.getElementById(t);
          if (n) {
            var a = !0,
              d = !1,
              o = void 0;
            try {
              for (var l, v = n.children[Symbol.iterator](); !(a = (l = v.next()).done); a = !0) {
                var i = l.value;
                'add' === e ? i.addEventListener('dragstart', r) : i.removeEventListener('dragstart', r);
              }
            } catch (e) {
              (d = !0), (o = e);
            } finally {
              try {
                a || null == v.return || v.return();
              } finally {
                if (d) throw o;
              }
            }
          }
        };
        exports.onDragstartEventHandler = e;
      },
      {},
    ],
    Mzaz: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0),
          require('typeface-montserrat');
        var e = u(require('react')),
          t = u(require('prop-types')),
          r = u(require('styled-components')),
          n = u(require('./grid')),
          o = require('../constants'),
          i = require('./utils/canvas');
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e) {
          return (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function l(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function f(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function c(e, t, r) {
          return t && f(e.prototype, t), r && f(e, r), e;
        }
        function s(e, t) {
          return !t || ('object' !== a(t) && 'function' != typeof t) ? d(e) : t;
        }
        function d(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function p(e) {
          return (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function y(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && b(e, t);
        }
        function b(e, t) {
          return (b =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function h() {
          var e = m([
            '\n  font-family: ',
            ';\n  width: ',
            'px;\n  height: ',
            'px;\n  font-style: regular;\n  font-size: 13px;\n  background: #515151;\n  color: #A9A9A9;\n  min-width: 500px;\n  min-height: 100px;\n  padding 8px;\n',
          ]);
          return (
            (h = function() {
              return e;
            }),
            e
          );
        }
        function m(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
        }
        var g = r.default.div(
            h(),
            o.defaultFontFamily,
            function(e) {
              return e.width;
            },
            function(e) {
              return e.height;
            }
          ),
          v = (function(t) {
            function r() {
              return l(this, r), s(this, p(r).apply(this, arguments));
            }
            return (
              y(r, e.default.Component),
              c(r, [
                {
                  key: 'handleDragStart',
                  value: function(e) {
                    e.dataTransfer.setData('builderId', e.target.getAttribute('builder-id'));
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function() {
                    (0, i.onDragstartEventHandler)('add', this.props.buildersListId, this.handleDragStart);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    (0, i.onDragstartEventHandler)('remove', this.props.buildersListId, this.handleDragStart);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this.props,
                      r = t.width,
                      o = t.height,
                      i = t.builders,
                      u = t.layout,
                      a = t.onUpdate;
                    return e.default.createElement(
                      g,
                      { width: r, height: o },
                      e.default.createElement(n.default, { layout: u, builders: i, onUpdate: a })
                    );
                  },
                },
              ]),
              r
            );
          })();
        v.propTypes = {
          buildersListId: t.default.string.isRequired,
          builders: t.default.object.isRequired,
          layout: t.default.object.isRequired,
          onUpdate: t.default.func.isRequired,
          width: t.default.number.isRequired,
          height: t.default.number.isRequired,
        };
        var w = v;
        exports.default = w;
      },
      { './grid': 'k73u', '../constants': 'iJA9', './utils/canvas': 'mLYi' },
    ],
    Focm: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'Logs', {
            enumerable: !0,
            get: function() {
              return e.Logs;
            },
          }),
          Object.defineProperty(exports, 'Modal', {
            enumerable: !0,
            get: function() {
              return r.Modal;
            },
          }),
          Object.defineProperty(exports, 'Loader', {
            enumerable: !0,
            get: function() {
              return t.Loader;
            },
          }),
          Object.defineProperty(exports, 'Paragraph', {
            enumerable: !0,
            get: function() {
              return n.Paragraph;
            },
          }),
          Object.defineProperty(exports, 'Button', {
            enumerable: !0,
            get: function() {
              return o.Button;
            },
          }),
          Object.defineProperty(exports, 'Input', {
            enumerable: !0,
            get: function() {
              return u.Input;
            },
          }),
          Object.defineProperty(exports, 'CheckBox', {
            enumerable: !0,
            get: function() {
              return i.CheckBox;
            },
          }),
          Object.defineProperty(exports, 'JsonInput', {
            enumerable: !0,
            get: function() {
              return a.JsonInput;
            },
          }),
          Object.defineProperty(exports, 'Dropdown', {
            enumerable: !0,
            get: function() {
              return p.Dropdown;
            },
          }),
          Object.defineProperty(exports, 'Canvas', {
            enumerable: !0,
            get: function() {
              return c.default;
            },
          });
        var e = require('./logs/logs'),
          r = require('./modal/modal'),
          t = require('./loader/loader'),
          n = require('./text'),
          o = require('./form/button'),
          u = require('./form/input'),
          i = require('./form/checkbox'),
          a = require('./form/json-input'),
          p = require('./form/dropdown'),
          c = f(require('./canvas/canvas'));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      {
        './logs/logs': 'vbVt',
        './modal/modal': 'OJTH',
        './loader/loader': 'TytF',
        './text': 'k3vF',
        './form/button': 'NbUj',
        './form/input': 'PelD',
        './form/checkbox': 'aEMm',
        './form/json-input': 'eTJV',
        './form/dropdown': '3DGm',
        './canvas/canvas': 'Mzaz',
      },
    ],
  },
  {},
  ['Focm'],
  null
);
//# sourceMappingURL=/index.map
