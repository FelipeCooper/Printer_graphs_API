const csvjson = require('csvjson');
const fs = require('fs');
var filePath = process.cwd() + '/paper.csv'; // path to file
var path = "\\\\10.1.10.11\\Results\\filename.rtf";


const logService = {
    async dailyLog() {
        let file = fs.readFileSync(filePath, "utf8");
        data = file.toString(); // stringify buffer
        var position = data.toString().indexOf('\n'); // find position of new line element
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
module.exports = logService;