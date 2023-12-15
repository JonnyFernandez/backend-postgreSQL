const server = require('./src/app')
const { database } = require('./src/db')
const PORT = 3001;

database.sync({ alter: true }).then(() => {
    console.log('db conected');

    server.listen(PORT,
        () => { console.log(`server in port:${PORT}`) })

}).catch(
    (error) => {console.log(error.message)}
)



