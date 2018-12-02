console.log("    String(Boolean(a) == Number(b)) \n");

// create test cases to describe your expression's behavior
//  use your groupings and first principles to justify
// add to this as you work your way through the steps
// the final step will be to run all test cases
let test_cases = [
  {name: 'numbers only', args: [1234, '1234'], expected: true},
  {name: 'bogus', args: [false, '124'], expected: null}
];

console.log("\n--- operator precedence ---");
{ // play around with this manually 
  // ast
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

console.log("\n--- trace-blocked ---");
{ // for in pythontutor
  // study the behavior of your entire expression
  // trace it by hand or in your mind to find where you were wrong
  // change the values to explore how it responds 
  // use 
  for (let t_case of test_cases) {
    let expected = t_case.expected;

    let actual;
    { // = String(Boolean(a) === Number(b));
      const step_1 = Boolean(a);
      const step_2 = Number(b);
      const step_3 = step_1 == step_2;
      const step_4 = String(step_3);
      actual = step_4;
    }; 


    if (actual !== expected) console.log(`FAIL: ${t_case.name} \n` +
        `\t actual: ${typeof actual}, ${actual}} \n` + 
        `\t expected: {${typeof expected}, ${expected}}` +);
  };
}


console.log("\n--- trace-logged ---");
{ // for in pythontutor
  // study the behavior of your entire expression
  // trace it by hand or in your mind to find where you were wrong
  // change the values to explore how it responds 
  // use 
  for (let t_case of test_cases) {
    let expected = t_case.expected;

    let actual;
    let trace = {};
    { // = String(Boolean(a) === Number(b));
      trace.step_1 = Boolean(a);
      trace.step_2 = Number(b);
      trace.step_3 = step_1 == step_2;
      trace.step_4 = String(step_3);
      actual = trace.step_4;
    }; 


    if (actual !== expected) console.log(`FAIL: ${t_case.name} \n` +
        `\t actual: ${trace} \n` + 
        `\t expected: {${typeof expected}, ${expected}}` +);
  };
}














