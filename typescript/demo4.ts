//泛型： 解决 类、接口、防范的复用性、以及对不特定数据类型的支持


//只能返回string类型的数据
//泛型：可以支持不特定的数据类型，要求传入的参数和返回的参数一致


//泛型函数
function getData<T>(value: T): T {
  console.log(value)
  return value
}

getData("456789");
getData<number>(456789);


//泛型类
class MinClass<T> {
  public list: T[] = [];
  add(num: T): void {
    this.list.push(num)
  }
  min(): T {
    var minNum = this.list[0];
    this.list.forEach((item, index) => {
      if (item < minNum) {
        minNum = item
      }
    })
    return minNum;
  }
}


var m = new MinClass<number>();
var m1 = new MinClass();
m.add(8)
m.add(234)
m.add(276)
m.add(243)
m.add(298)
m.add(24);
console.log(m.min());
m1.add(8)
m1.add(6)
console.log(m1.min());

//泛型类接口
interface ConfigFn {
  <T>(arg: T): T;
}
let getDataD: ConfigFn = function <T>(value: T): T {
  return value;
}
getData<string>('张三');

///////
interface ConfigFnCopy<T> {
  (arg: T): T;
}
function getDataCopy<T>(value: T): T {
  return value;
}
var myGetData: ConfigFnCopy<string> = getDataCopy;
myGetData('20')



// 泛型避免重复代码，对不特定数据类型的支持（类型校验）
// 1、定义个类
// 2、把类作为参数来约束数据传入的类型

//类封装
class User {
  username: string | undefined;
  password: string | undefined;
}

class MysqlDb {
  add(user: User): boolean {
    console.log(user)
    return true;
  }
}

let u = new User();
u.username = '张三'
u.password = '123456'

new MysqlDb().add(u)


//接口封装
class MysqlDbc<T>{
  add(info: T): boolean {
    console.log(info)
    return false;
  }
}

class Userc {
  username: string | undefined;
  password: string | undefined;
}

let uc = new Userc();
uc.username = '里斯'
uc.password = '123456'
new MysqlDbc<User>().add(uc)




