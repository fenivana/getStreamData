module.exports = function(stream) {
  return new Promise(function(resolve, reject) {
    var chunks = [];

    stream.on('data', function(chunk) {
      chunks.push(chunk);
    });

    stream.on('end', function() {
      resolve(Buffer.concat(chunks));
    });

    stream.on('error', function(err) {
      reject(err);
    });
  });
};
