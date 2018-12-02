
console.log('=== Number() ===\n');
// base these of groupings created before
// add or modify groupings as you see fit
let test_cases = [
	// use to mark type-tests as null can't happen, will log change
	{type: '--- numbers ---'},
	{name: 'numbers only', arg: '1234', expected: 1234},
	{name: 'empty', arg: '', expected: 0},
	{name: 'only letters', arg: 'abc', expected: NaN},
	{type: '-- strings --'},
	{name: 'only digits', arg: '3454', expected: 3454},
	{type: '-- boolean --'},
	{name: 'true', arg: true, expected: 1},
	{name: 'false', arg: false, expected: 0},
	{type: '-- undefined --'},
	{name: 'undefined', arg: undefined, expected: NaN},
	{type: '-- null --'},
	{name: 'null', arg: null, expected: 0},
];

for (let i = 0; i < test_cases.length; i++) {
	// process & validate input
	if (test_cases[i].type) {
		console.log(test_cases[i].type);
		continue;
	};
	let arg = test_cases[i].arg;
	let expected = test_cases[i].expected;

	// execute the logic
	let actual = Number(arg);

	// communicate results to the developer
	if (actual !== expected) {
		console.log(
			`${test_cases[i].name} \n` ,
			`\t actual: {${typeof actual}, ${actual}} \n` , 
			`\t expected: {${typeof expected}, ${expected}}` );
	};
};

