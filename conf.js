var amazon = require('awssum').load('amazon/amazon');
exports.conf = {
    http_port     : 3000,
    cookie_secret : '6adfb183a4a2c94a2f92dab5ade762a47889a5a1',
    static_dir    : '/public',
    less_dir      : '/public',
    db_url        : 'mongodb://mikeshi:' + process.env.DB_PASSWORD + '@alex.mongohq.com:10088/xinning',
    s3_opts       : {
        accessKeyId     : process.env.ACCESS_KEY_ID,
        secretAccessKey : process.env.SECRET_ACCESS_KEY,
        awsAccountId    : process.env.AWS_ACCOUNT_ID,
        region          : amazon.AP_SOUTHEAST_1,
        bucketName      : 'xinning'
        //concurrency     : 2, // number of concurrent uploads to S3 (default: 3)
    }

};
