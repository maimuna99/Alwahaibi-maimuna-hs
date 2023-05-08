#! /usr/bin/env node
const fs = require("fs");
const { Readable, Writable } = require("stream");

const inputFilePath = "input.txt";
const outputFilePath = "output.txt";

// Create a readable stream from the input file
const readStream = fs.createReadStream(inputFilePath);

// Create a writable stream to the output file
const writeStream = fs.createWriteStream(outputFilePath);

// Split the data into an array of words
const splitWords = (data) => {
  return data.toString().split(/[ \n]/);
};

// Remove commas from the words
const filterSymbols = (word) => {
  return word.replace(/,/g, "");
};

// Create an index of the number of occurrences of each word
const indexText = (words) => {
  const wordCount = {};
  words.forEach((word) => {
    if (word in wordCount) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  });

  const sortedWords = Object.keys(wordCount).sort();
  const resultVector = sortedWords.map((word) => wordCount[word]);

  return resultVector;
};

// Create a readable stream that emits each word
const wordStream = new Readable({
  read() {},
});

// Push each word to the wordStream
readStream.on("data", (chunk) => {
  const words = splitWords(chunk);
  const filteredWords = words.map(filterSymbols);
  const resultVector = indexText(filteredWords);
  wordStream.push(JSON.stringify(resultVector));
});

// Log a message when the wordStream ends
wordStream.on("end", () => {
  console.log("Text indexing completed! Check output.txt");
});

// Pipe the wordStream to the writeStream
wordStream.pipe(writeStream);
