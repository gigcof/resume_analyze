const OpenAI = require('openai');
const openAi = new OpenAI();
const { readData } = require("./utils/helpers/functions");

const uploadDataAndGenerateResponse = async (req, res) => {
    try {
        const { jobTitle, jobDescription } = req.body || {};
        const resumeData = await readData({ bufferData: req.file?.buffer });

        // send this data to AI and await response
        await openAi.chat.completions.create();
    } catch (err) {
        err.scope = err.scope || 'uploadDataAndGenerateResponse'
    }
}

module.exports = {
    uploadDataAndGenerateResponse
}