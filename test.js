import assert from 'node:assert';
import test from 'node:test';

import fortyTwo, { fortyThree } from './index.js';

test('returns 42', t => {
	assert.strictEqual(fortyTwo(), 42);
});

test('returns 43', t => {
	assert.strictEqual(fortyThree(), 43);
});
