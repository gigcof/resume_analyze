const readData = async ({bufferData, filePath, stream, streamOutput = false}) => {
    try {
        const buffer = Buffer.from(bufferData);
        return buffer.toString('utf-8');
        
    } catch (err) {
        err.scope = err.scope || 'readData';
        throw err;
    }
}

module.exports = {
    readData
}