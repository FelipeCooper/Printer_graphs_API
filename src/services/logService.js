
const logRepository = require('../repository/logRepository')
const logService = {
    async dailyLog() {
        let result = await logRepository.dailyLog();
        return result;
    }
}
module.exports = logService;