import * as schema from "./schema"
import  {userInterface}  from "./interface";

class data {
    constructor(){
    };

    public createUser(data:Partial<userInterface>,callback : (error:Error,result:any)=> void){
        let user = new schema(data);

        user.save(function(error, user) {
            if (error) {
                callback(error,user);
            } else {
                callback(error,user);
            }
        });

    };

    public getUser(userName:string,callback : (error:Error,result:any)=> void){
        schema.findOne({"username" : userName }, function (err, user) {
            callback(err,user)
        })
    };

    public get_AllUser(callback : (error:Error,result:any)=> void){
        schema.find({}, function (error, user) {
            callback(error,user);
        })
    };
}

let User =  new data()

// User.createUser({username:'aaaa'},function (e,a) {
//     console.log(e,a)
//
// })
export {User}