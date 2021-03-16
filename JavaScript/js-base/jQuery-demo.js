class JQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i = 0; i < length; i++){
            this[i] = result[i];
        }
        this.length = length;
        this.selector = selector;
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0;i < this.length; i++){
            const element = this[i];
            fn(element)
        }
    }
    on(type,fn){
        return this.each(element => {
            element.addEventListener(type,fn,false);
        })
    }
}

// 插件,直接向原型上赋值
JQuery.prototype.dialog = function(info){
    alert(info)
}

// 造轮子
class myJQuery extends JQuery{
    constructor(selector){
        // 继承父类
        super(selector)
    }
    // 扩展自己的方法
    addClass(className){
        
    }
}