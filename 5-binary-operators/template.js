// change 'args' based on unary or binary operator
let test_cases = [
  {name: 'numbers only', args: [1234, '1234'], expected: true}
];

// build test cases by hand using this to check your work
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


console.log("\n--- traced ---");

  function operator(a, b) {
    let result;
    { // a _ b
      // steps to replicate it
      actual; // = last step
    }; 
    return result
  }
  run_tests(operator, test_cases)

console.log("\n--- logged ---");

  function operator(a, b, _log) {
    let log;
    if (_log) log = {'0 args': {a,b}}

    let result;
    { // a _ b
      // steps to replicate it
      // log each step
      actual; // = last step
    }; 

    if (_log) {
      log.result = result;
      return log
    } else {
      return result
    }
  }
  run_tests(operator, test_cases)









  // testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` + 
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` + 
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };







