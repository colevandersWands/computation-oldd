console.log('--- original expression ---')

  let a = true
  let result = (a) ? '1' : '2'

console.log('--- test cases ---')

  const test_cases = [
    {name: 'true', args: [true], expected: '1'},
    {name: 'false', args: [false], expected: '2'},
    {name: 'false', args: [false], expected: '1'},
  ]
  for (let t_case of test_cases) {
    let expected = t_case.expected;
    let cond = t_case.args[0]

    let actual = (cond) ? '1' : '2';

    if (actual !== expected) console.log(`FAIL: ${t_case.name} \n` +
        `\t actual: {${typeof actual}, ${actual}} \n` + 
        `\t expected: {${typeof expected}, ${expected}}`);
  };

console.log('--- refactor to statement ---')


  for (let t_case of test_cases) {
    let expected = t_case.expected;
    let cond = t_case.args[0]

    let actual; 
    if (cond) {
      actual = '1'
    } else {
      actual = '2'
    }

    if (actual !== expected) console.log(`FAIL: ${t_case.name} \n` +
        `\t actual: {${typeof actual}, ${actual}} \n` + 
        `\t expected: {${typeof expected}, ${expected}}`);
  };

console.log('--- encapsulate ---')

  function if_else(cond) {
    let result;

    if (cond) {
      result = '1'
    } else {
      result = '2'
    }

    return result
  }
  run_tests(if_else, test_cases);


console.log('--- logged ---')

  function if_else(cond, _log) {
    let log;
    if (_log) log = {'0 args': cond}

    let result;
    if (cond) {
      result = '1'
      if (_log )  log.path = 'if'
    } else {
      result = '2'
      if (_log )  log.path = 'else'
    }

    if (_log) {
      log.result = result;
      return log
    } else {
      return result
    }
  }
  run_tests(if_else, test_cases, true);












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