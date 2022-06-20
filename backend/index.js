const connectToMongo=require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();


const app = express()
const port = 3001
app.use(cors())
//Middle Ware
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/enrolnment', require('./routes/enrolnment'))
app.use('/api/department', require('./routes/department'))
app.use('/api/semester', require('./routes/semester'))
app.use('/api/course', require('./routes/course'))
app.use('/api/assessment', require('./routes/assessment'))
app.use('/api/plo', require('./routes/plo'))
app.use('/api/clo', require('./routes/clo'))
app.use('/api/question', require('./routes/question'))
app.use('/api/questionmap', require('./routes/questionmap'))

app.listen(port, () => {
  console.log(`OBE listening on port ${port}`)
})