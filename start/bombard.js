#!/usr/bin/env node
const { program } = require("commander");
const http = require("http");

program
    .description("Server benchmarking tool")
    .option(
        "-c, --concurrency <number>",
        "Number of parallel requests to perform at a time",
        parseInt
    )
    .option(
        "-n, --requests <number>",
        "Number of requests to perform for the benchmarking session",
        parseInt
    )
    .option(
        "-b, --body",
        "If specified, send a random generated body with request"
    )
    .arguments("<url>")
    .action((url) => {
        const concurrency = program.concurrency || 1;
        const requests = program.requests || 1;
        const body = program.body ? Buffer.alloc(1024 * 1024, "x") : null;
        const results = [];
        let completed = 0;
        let successful = 0;
        let startTime = Date.now();

        function makeRequest() {
            const req = http.request(url, { method: "POST" }, (res) => {
                let data = "";
                res.on("data", (chunk) => {
                    data += chunk;
                });
                res.on("end", () => {
                    results.push({ number: completed + 1, time: Date.now() - startTime });
                    completed++;
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        successful++;
                    }
                    if (completed < requests) {
                        makeRequest();
                    } else {
                        let totalTime = Date.now() - startTime;
                        let avgTime =
                            results.reduce((acc, result) => acc + result.time, 0) / requests;
                        console.log(`Bombarded ${requests} times`);
                        console.log(
                            `${successful} successful, ${requests - successful} failing`
                        );
                        console.log(`average response time ${avgTime}ms`);
                        console.log("Number Time");
                        for (let result of results) {
                            console.log(`${result.number} ${result.time}`);
                        }
                    }
                });
            });
            req.on("error", (err) => {
                console.error(err);
            });
            if (body) {
                req.write(body);
            }
            req.end();
        }

        for (let i = 0; i < concurrency; i++) {
            makeRequest();
        }
    });

program.parse(process.argv);
