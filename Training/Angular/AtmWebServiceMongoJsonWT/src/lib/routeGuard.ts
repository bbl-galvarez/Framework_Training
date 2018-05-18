import * as jwt from 'jsonwebtoken';
import { environment } from '../environment/environment';

interface tokenModel {
      acct : string,
      iat : number,
      exp: number
}

export class RouteGuard {

     private _secret   = 'thisistheseed002018';

     constructor() { }

     createToken(payLoad : object) :string  {
          return jwt.sign(payLoad,this._secret, {
                 expiresIn : environment.tokenExpirationTime
            });    
      }
 
      verifyToken(token :string) : boolean  {

        let retVal = false;
            jwt.verify(token,this._secret,(err,decoded)=> {

                  if (!err) { 
                        retVal = true;
                  }
            })
            return retVal;
      }

      getDecoded(token :string) : tokenModel  {

        var retVal : tokenModel = <tokenModel>{};
            jwt.verify(token,this._secret,(err,decoded)=> {

                  if (!err) { 
                        retVal = <tokenModel>decoded;
                  }
            })
            return retVal;
      }
}