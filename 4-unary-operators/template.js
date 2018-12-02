// needs some help

// change 'args' based on unary or binary operator
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
  let actual = a operator b;

  // communicate results to the developer
  if (actual !== expected) {
    console.log(
      `${t_case.name} \n` ,
      `\t actual: {${typeof actual}, ${actual}} \n` , 
      `\t expected: {${typeof expected}, ${expected}}` );
  };
};

// use your test cases to validate your replication
//  if cases pass, failing here means fix replication
console.log('\n\n --- replication --- \n');
let log;
for (let t_case of test_cases) {

  let inputs = {
      a: t_case.args[0], 
      b: t_case.args[1]
    };

  let trace;
  {
    // figure out how to trace your replication
    // not always so easy
    trace = [step_1, step_2, step_3, step_4];
  }

  let output = {
      actual: trace[trace.length - 1], 
      expected: t_case.expected
    };
  
  log = {
      name: t_case.name,
      inputs,
      trace,
      output
    };

  if (output.actual !== output.expected) console.log(log);

};
