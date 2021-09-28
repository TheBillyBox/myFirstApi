//*  req => request | res => response
module.exports.helloWorld = (req, res) => {
        const responseObj = {msg: 'Hello wold!'};
        const responseStatus = 200;
        res.status(responseStatus).send(responseObj);
}