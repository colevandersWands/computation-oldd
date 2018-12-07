// copy these over one at a time as you are ready to move on
console.log("    String(Boolean(a) == Number(b)) \n");

// create test cases to describe your expression's behavior
//  use your groupings and first principles to justify
// add to this as you work your way through the steps
// the final step will be to run all test cases
let test_cases = [
  {name: 'numbers only', args: [1234, '1234'], expected: {
        step_1: 
      }},
  {name: 'bogus', args: [false, '124'], expected: null}
];

console.log("\n--- operator precedence ---");
{ // play around with this manually 
  let a = '';
  let b = false;

  let  expected   = String( Boolean(a) == Number(b) );
  let operation_1 = String( false == Number(b));
  let operation_2 = String( false == 0 );
  let operation_3 = String( true );
  let operation_4 = 'true';

  if (operation_1 !== expected) console.log('FAIL: precedence 1');
  if (operation_2 !== expected) console.log('FAIL: precedence 2');
  if (operation_3 !== expected) console.log('FAIL: precedence 3');
  if (operation_4 !== expected) console.log('FAIL: precedence 4');
};

console.log("\n--- step-through ---");
{ // study the behavior of each step in your expression manually
  // test yourself by predicting each step with different inputs
  // try filling out all steps before hitting 'run'
  let a = true;
  let b = 5;

  let expected_1 = true;
  let actual_1 = Boolean(a);

  let expected_2 = 5;
  let actual_2 = Number(b);

  let expected_3 = false;
  let actual_3 = actual_1 == actual_2;

  let expected_4 = 'false';
  let actual_4 = String(actual_3)

  if (expected_1 !== actual_1) console.log('FAIL: step-through 1');
  if (expected_2 !== actual_2) console.log('FAIL: step-through 2');
  if (expected_3 !== actual_3) console.log('FAIL: step-through 3');
  if (expected_4 !== actual_4) console.log('FAIL: step-through 4');
};


console.log('--- trace-blocked ---')

  function expression(a, b) {
    let result; 
    { // = String(Boolean(a) == Number(b));
      const step_1 = Boolean(a);
      const step_2 = Number(b);
      const step_3 = actual_1 == actual_2;
      const step_4 = String(actual_3);
      result = step_4;
    }
    return result
  }
  run_tests(expression, test_cases);


console.log('--- substituted ---');
  // copy over replications & their tests

  // ((a + b) == (c < d)) && e

  function substituted(a, b, c, d, e) {
    let result;
    {
      const step_1 = plus(a, b)
      const step_2 = less_than(c, d)
      const step_3 = loosely(step_1, step_2)
      const step_4 = and(step_3, e)
      result = step_4
    }
    return result;
  }
  run_tests(substituted, test_cases)




console.log("\n--- loggified ---");

  // create an array with some bad test cases
  // concate good tests in with bad tests -> mixed_test_cases

  function expression_logged(a, b, _log) {
    let log;
    if (_log) log = {args: {a, b}}
      
    let result; 
    let trace = {};
    { // = ((a + b) == (c < d)) && e
      trace.step_1 = plus(a, b)
      trace.step_2 = less_than(c, d)
      trace.step_3 = loosely(step_1, step_2)
      trace.step_4 = and(step_3, e)
      result = trace.step_4;
    }
    if (_log) log.trace = trace

    if (_log) {
      log.result = result
      return log
    } else {
      return result
    }
  }
  run_tests(expression_logged, mixed_test_cases, true);


console.log('--- recompressed ---')

  function recompressed(a, b, c, d, e) {
    return and(loosely(plus(a, b), less_than(c, d)), e)
  }
  run_tests(recompressed, test_cases)

console.log('--- call-stack logged ---')

  function recompressed(a, b, c, d, e) {
    return and(loosely(plus(a, b), less_than(c, d)), e)
  }
  run_tests(recompressed, test_cases)



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