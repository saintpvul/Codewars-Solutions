/*

Convert text to brainfuck
You are tasked to writting a function to_brainfuck/toBrainfuck that converts a given string to brainfuck that would print the given string. For example if we were to call to_brainfuck("Hello World!") it might give us a result that is something like: "-[------->+<]>-.-[->+++++<]>++.+++++++..+++.[--->+<]>-----.---[->+++<]>.-[--->+<]>---.+++.------.--------.-[--->+<]>.", if we execute that code we would get "Hello World!" at the output.



*/

// solution

function toBrainfuck(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    result += "+".repeat(code) + ".>";
  }
  return result.slice(0, -1);
}
