'use strict';
var test = require('ava');
var mergeArray = require('./');

test(function (t) {
	var arr = ['foo'];

	mergeArray(arr, ['bar']);
	t.same(arr, ['foo', 'bar']);

	mergeArray(arr, ['foo']);
	t.same(arr, ['foo', 'bar', 'foo']);

	mergeArray(arr, ['foo'], ['foo'], ['foo']);
	t.same(arr, ['foo', 'bar', 'foo', 'foo', 'foo', 'foo']);

	t.end();
});
