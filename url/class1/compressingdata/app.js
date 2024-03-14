const zlib = require('zlib');

const input = "Hello, World!";

zlib.gzip(input, (err, compressedData) => {
    if (err){
        console.error('Error compressing data: ', err);
        return;
    }
    zlib.gunzip(compressedData, (err, decompressedData) => {
        if (err){
            console.error('Error decomposing data: ', err);
            return;
        }
        console.log('Decomposed data: ',decompressedData.toString());
    });
});