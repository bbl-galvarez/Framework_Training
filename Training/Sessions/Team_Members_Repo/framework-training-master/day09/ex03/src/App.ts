import * as express from 'express';
import * as got from 'got';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {

    const router = express.Router();
     
    router.get('/', (req, res) => {
      got.get("https://mobdev001.belizebank.com/helloworld.php").then (
        resp => {
            res.json({
              resp : resp.body
            });
    });

    router.get('/hello', (req, res) => {
       
            res.json({
              resp : "Hello Mario"
            })
    });

      
    })

    this.express.use('/', router)
  }
}

export default new App().express
