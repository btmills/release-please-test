import assert from 'node:assert';
import test from 'node:test';

import fortyTwo from './index.js';

test('returns 42', t => {
	assert.strictEqual(fortyTwo(), 42);
});
