import test from 'ava';
import Observable from "zen-observable"
import {user} from "../libs/app"
test('foo', t => {
	t.plan(3)
	let name = "dalong"
	t.log(`input name ${name}`)
	return Observable.of(1, 2, 3, 4, 5, 6)
		.filter(n => {
			return n % 2 === 0;
		})
		.map(() => t.pass());
});
test.todo('will think about writing this later');

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});

test('username', t => {
	t.log("test for username is equal",test.meta.file)
	t.is(user.name,"dalong")
});