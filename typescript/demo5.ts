//定义操作mysql mongdb的库 
//约束统一的规范、以及代码重用

interface DBI<T> {
  add(info:T): boolean;
  update(info:T): boolean;
  delete(id:number): boolean;
  get(id:number): any[];
}

//定义一个操作mysql数据库的类,要实现泛型接口，这个类也应该是一个泛型类
class MysqlDbCopy<T> implements DBI<T>{
  list:T[] = [];
  add(info: T): boolean {
    this.list.push(info)
    return true
  }
  update(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

//操作用户表，定义一个user类和数据表做映射
class UserCopy{
  username:string | undefined;
  password:string | undefined;
  constructor(username:string,password:string){
    this.username = username;
    this.password =password;
  }
}

let user = new UserCopy("里斯",'123987')
let mysqldb = new MysqlDbCopy<User>();
mysqldb.add(user);
console.log(mysqldb.list)










