/*

You're given a procedure / method that executes a passed action n times, but it does so in a purely sequential manner. If you inspect the sample tests, you'll find that the action takes about 1 second to complete, and this action is repeated 20 times which results in a timeout.

Find a way to execute the action n times in parallel, such that the sample tests complete under the 12 second time limit imposed by Codewars. The submission tests will also test for similar scenarios.

Hint: If you're not sure where to start, read up on async/await.

*/

// solution

async function execute(action, nTimes) {
  let res = [];
  for (let i = 0; i < nTimes; i++) {
    res.push(action(i));
  }
  await Promise.all(res);
}
