//This is a simple HTTP client similar to CURL implemented in NodeJS.
//Usage: fetcher.js <URL> <file>

//Print usage instructions and exit if either of the arguments are missing.
if (!process.argv[2] || !process.argv[3]) {
  console.log("Usage: fetcher.js <URL> <file>");
  process.exit(1);
}

//Set up constants to represent our input arguments
const URL = process.argv[2];
const outFile = process.argv[3];

//Import dependencies
const fs = require('fs');
const request = require('request');

request.get(URL, function (error, response, data) {
  //Print error ID and exit if error encountered
  if (error) {
    console.error("Error: " + error);
    process.exit(2);
  }

  //Write the data we recieved to a file
  fs.writeFile(outFile, data, err => {
  if (err) {
    console.error("Cannot write file: " + err);
    process.exit(3);
  }
  // file written successfully
  });

  //Print statistics after writing the file.
  console.log("Wrote " + data.length + " bytes to " + outFile + " .");
});

