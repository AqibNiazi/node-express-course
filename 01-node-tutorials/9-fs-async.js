const { readFile, writeFile, read } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("Start the next task.");

// Note: The asynchronous version uses callbacks to handle file operations,
// allowing other code to run while waiting for the file operations to complete.

// This non-blocking behavior improves performance, especially in I/O-heavy applications.
// This is in contrast to the synchronous version, which blocks execution until each file operation is complete.

// This program is written with call backs, which can lead to "callback hell" if not managed properly.

// Other approaches to handle asynchronous operations in Node.js include Promises and async/await syntax,
// which can help improve code readability and maintainability.
