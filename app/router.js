const restify = require('restify');
const server = restify.createServer();
const verify = require('./verify');

server.get('/verify/:process', async (req, res) => {
    try {
        await verify.process(req.params.process);
    } catch (error) {
        console.log(error);
        res.send(500, e.message);
    }
});


server.listen(process.env.PORT, function() {
  console.log('listening at %s', process.env.PORT,);
});