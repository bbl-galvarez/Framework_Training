import Atm from './webservices/Atm'

const port = process.env.PORT || 3000

Atm.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})