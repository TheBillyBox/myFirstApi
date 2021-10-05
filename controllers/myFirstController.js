//*  req => request | res => response
module.exports.helloWorld = (req, res) => {
        const responseObj = {msg: 'Hello wold!'};
        const responseStatus = 200;
        res.status(responseStatus).send(responseObj);
}
module.exports.alumnes = (req, res) => {
        const responseObj = {
                "Alumnes": [
                  "Gerard",
                  "Khadija",
                  "Alex",
                  "Roger",
                  "Xavier",
                  "Eric",
                  "Miquel",
                  "Alba",
                  "Raul",
                  "Marc",
                  "Jordi",
                  "Marc",
                  "Pol",
                  "Biel"
                ],
                "AlumnesCount": 14
              }
        const responseStatus = 200;
        res.status(responseStatus).send(responseObj);
}