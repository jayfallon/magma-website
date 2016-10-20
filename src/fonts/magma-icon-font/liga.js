/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'alert': '&#xe600;',
			'home3': '&#xe629;',
			'house3': '&#xe629;',
			'image': '&#xe633;',
			'picture': '&#xe633;',
			'images': '&#xe634;',
			'pictures': '&#xe634;',
			'connection': '&#xe641;',
			'wifi': '&#xe641;',
			'copy': '&#xe652;',
			'duplicate': '&#xe652;',
			'stack': '&#xe654;',
			'layers': '&#xe654;',
			'cart': '&#xe660;',
			'purchase': '&#xe660;',
			'lifebuoy': '&#xe667;',
			'support': '&#xe667;',
			'phone': '&#xe668;',
			'telephone': '&#xe668;',
			'phone-hang-up': '&#xe669;',
			'telephone2': '&#xe669;',
			'undo': '&#xe68b;',
			'ccw': '&#xe68b;',
			'redo': '&#xe68c;',
			'cw': '&#xe68c;',
			'undo2': '&#xe68d;',
			'left': '&#xe68d;',
			'redo2': '&#xe68e;',
			'right': '&#xe68e;',
			'forward': '&#xe68f;',
			'right2': '&#xe68f;',
			'reply': '&#xe690;',
			'left2': '&#xe690;',
			'spinner2': '&#xe6a1;',
			'loading3': '&#xe6a1;',
			'enlarge': '&#xe6af;',
			'expand': '&#xe6af;',
			'shrink': '&#xe6b0;',
			'collapse': '&#xe6b0;',
			'enlarge2': '&#xe6b1;',
			'expand2': '&#xe6b1;',
			'shrink2': '&#xe6b2;',
			'collapse2': '&#xe6b2;',
			'lock': '&#xe6b5;',
			'secure': '&#xe6b5;',
			'unlocked': '&#xe6b6;',
			'lock-open': '&#xe6b6;',
			'pie-chart': '&#xe6c0;',
			'stats': '&#xe6c0;',
			'stats-dots': '&#xe6c1;',
			'stats2': '&#xe6c1;',
			'stats-bars': '&#xe6c2;',
			'stats3': '&#xe6c2;',
			'stats-bars2': '&#xe6c3;',
			'stats4': '&#xe6c3;',
			'truck': '&#xe6d6;',
			'transit': '&#xe6d6;',
			'list-numbered': '&#xe6df;',
			'options': '&#xe6df;',
			'list': '&#xe6e0;',
			'todo': '&#xe6e0;',
			'list2': '&#xe6e1;',
			'todo2': '&#xe6e1;',
			'menu': '&#xe6e3;',
			'list3': '&#xe6e3;',
			'menu2': '&#xe6e4;',
			'options2': '&#xe6e4;',
			'menu3': '&#xe6e5;',
			'options3': '&#xe6e5;',
			'menu4': '&#xe6e6;',
			'options4': '&#xe6e6;',
			'download2': '&#xe6eb;',
			'save4': '&#xe6eb;',
			'upload2': '&#xe6ec;',
			'load2': '&#xe6ec;',
			'link': '&#xe6f1;',
			'chain': '&#xe6f1;',
			'attachment': '&#xe6f3;',
			'paperclip': '&#xe6f3;',
			'bookmark': '&#xe6f8;',
			'ribbon': '&#xe6f8;',
			'star-half': '&#xe6fe;',
			'rate2': '&#xe6fe;',
			'star-full': '&#xe6ff;',
			'rate3': '&#xe6ff;',
			'warning': '&#xe72d;',
			'sign': '&#xe72d;',
			'notification': '&#xe72e;',
			'warning2': '&#xe72e;',
			'question': '&#xe72f;',
			'help': '&#xe72f;',
			'plus': '&#xe730;',
			'add': '&#xe730;',
			'minus': '&#xe731;',
			'subtract': '&#xe731;',
			'info': '&#xe732;',
			'information': '&#xe732;',
			'cancel-circle': '&#xe733;',
			'close': '&#xe733;',
			'blocked': '&#xe734;',
			'forbidden': '&#xe734;',
			'cross': '&#xe735;',
			'cancel': '&#xe735;',
			'checkmark': '&#xe736;',
			'tick': '&#xe736;',
			'play2': '&#xe73b;',
			'player': '&#xe73b;',
			'pause': '&#xe73c;',
			'player2': '&#xe73c;',
			'stop': '&#xe73d;',
			'player3': '&#xe73d;',
			'previous': '&#xe73e;',
			'player4': '&#xe73e;',
			'next': '&#xe73f;',
			'player5': '&#xe73f;',
			'backward': '&#xe740;',
			'player6': '&#xe740;',
			'forward2': '&#xe741;',
			'player7': '&#xe741;',
			'play3': '&#xe742;',
			'player8': '&#xe742;',
			'pause2': '&#xe743;',
			'player9': '&#xe743;',
			'stop2': '&#xe744;',
			'player10': '&#xe744;',
			'backward2': '&#xe745;',
			'player11': '&#xe745;',
			'forward3': '&#xe746;',
			'player12': '&#xe746;',
			'first': '&#xe747;',
			'player13': '&#xe747;',
			'last': '&#xe748;',
			'player14': '&#xe748;',
			'previous2': '&#xe749;',
			'player15': '&#xe749;',
			'next2': '&#xe74a;',
			'player16': '&#xe74a;',
			'circle-up': '&#xe767;',
			'up3': '&#xe767;',
			'circle-right': '&#xe768;',
			'right5': '&#xe768;',
			'circle-down': '&#xe769;',
			'down3': '&#xe769;',
			'circle-left': '&#xe76a;',
			'left5': '&#xe76a;',
			'paragraph-left': '&#xe79d;',
			'wysiwyg25': '&#xe79d;',
			'paragraph-center': '&#xe79e;',
			'wysiwyg26': '&#xe79e;',
			'paragraph-right': '&#xe79f;',
			'wysiwyg27': '&#xe79f;',
			'paragraph-justify': '&#xe7a0;',
			'wysiwyg28': '&#xe7a0;',
			'indent-increase': '&#xe7a1;',
			'wysiwyg29': '&#xe7a1;',
			'indent-decrease': '&#xe7a2;',
			'wysiwyg30': '&#xe7a2;',
			'apple': '&#xe7e5;',
			'brand54': '&#xe7e5;',
			'android': '&#xe7e7;',
			'brand56': '&#xe7e7;',
			'windows8': '&#xe7e9;',
			'brand58': '&#xe7e9;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());