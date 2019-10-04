class person {
    name: string;
    world: string;
    constructor(name: string, world: string){
       this.name = name;
       this.world = world;
    }
    createWorld(){
        return this.name + this.world
    }
}

// 构造函数
var test1 = new person("hello", "world");
alert(test1.createWorld());