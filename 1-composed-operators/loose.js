let test_cases = [
  {name: 'numbers only', args: [1234, '1234'], expected: true}
];

// test your test cases
//  failing here means to fix test cases
console.log('--- native --- \n');
for (let t_case in test_cases) {
  // process & validate input
  let a = t_case.args[0];
  let b = t_case.args[1];
  let expected = t_case.expected;

  // execute the logic
  let actual = a comparison b;

  // communicate results to the developer
  if (actual !== expected) {
    console.log(
      `${t_case.name} \n` ,
      `\t actual: {${typeof actual}, ${actual}} \n` , 
      `\t expected: {${typeof expected}, ${expected}}` );
  };
};


// replicate using ===, the mappers, and typeof
// use your test cases to validate your replication
//  if cases pass, failing here means fix replication
console.log('\n\n --- replication --- \n');
for (let t_case in test_cases) {
  // process & validate input
  let a = t_case.args[0];
  let b = t_case.args[1];
  let expected = t_case.expected;

  // execute the logic
  let actual;
  { // = a == b
    let result;
    // logic
    actual = result;
  };

  // communicate results to the developer
  if (actual !== expected) {
    console.log(
      `${t_case.name} \n` ,
      `\t actual: {${typeof actual}, ${actual}} \n` , 
      `\t expected: {${typeof expected}, ${expected}}` );
  };
};