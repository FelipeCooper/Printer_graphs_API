const csvjson = require('csvjson');
const fs = require('fs');
const filePath = process.cwd() + '/paper.csv'; // path to file
const logRepository = {
    async dailyLog() {
        let file = fs.readFileSync(filePath, "utf8");
        data = file.toString(); // stringify buffer
        let position = data.toString().indexOf('\n'); // find position of new line element
        if (position != -1) { // if new line element found
            data = data.substr(position + 1); // subtract string based on first line length
        }
        let options = {
            delimiter: ',', // optional
            noheader: true
        };
        return csvjson.toObject(data, options);
    }
}

module.exports = logRepository;