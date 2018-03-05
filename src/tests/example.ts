import test from 'ava';

test('foo', (t) => {
  t.pass();
});

test('bar', async (t) => {
  const bar = Promise.resolve('barLow');

  t.is(await bar, 'barLow');
});
