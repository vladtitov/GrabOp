/**
 * Created by Vlad on 5/14/2016.
 */
/// <reference path="dao.ts" />
///<reference path="typings/lodash/lodash.d.ts"/>
///<reference path="typings/node/node.d.ts"/>



import * as _ from 'lodash';
var fs = require('fs');
export class UserDAO implements DAO.DAO<Model.User> {
    private id:number;
    private url:string='data/users.json';
    private users:{ [id:number]:Model.User; };
    private fs=fs;
    private _=_;
    constructor() {
        this.id = 1;
        this.fs.readFile(this.url, 'utf8',(err, data)=>{
            if (err) throw err;
            var obj:Model.User[] = JSON.parse(data);
            this.users = this._.keyBy(obj,'id');
        });
    }

    save(callBack:Function):void{
        this.fs.writeFile(this.url, JSON.stringify(this.users), (err)=> {
            if(err) {
                console.log(err);
                callBack(false)
            }
            callBack(true);
        });
    }
    create(user:Model.User) {
        user.id = this.id;
        this.id++;
        this.users[user.id] = user;
        return user;
    }
    read(id:number) {
        return this.users[id];
    }
    update(user:Model.User) {
        if (this.users[user.id] === null) {
            return false;
        }
        this.users[user.id] = user;
        return true;
    }
    delete(id:number) {
        if (this.users[id] === null) {
            return false;
        }
        this.users[id] = null;
        return true;
    }
    getAll():any{
        return this.users;
    }
}