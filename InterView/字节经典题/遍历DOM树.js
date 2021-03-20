function demo2json(node){
    // 如果不是我们想要的节点，就不进行该层子节点遍历
    if(!validator(node)){
        return null;
    }
    let topLeveJson = new NodeJson(),
        curChildNodeList = null;
    topLeveJson.name = node.nodeName;
    curChildNodeList = node.childNodes;
    // 为了避免多次去 node.childNodes中读取变量
    for(const curNode of curChildNodeList) {
        topLeveJson.pushChildren(demo2json(curNode));
    }
    // 避免内存泄漏，指针引用
    curChildNodeList = null;
    return topLeveJson;
}

// 内聚，抽象，封装
class NodeJson {
    constructor() {
        this.childrenNodes = [];
        this.tag = "";
    }
    pushChildren(childrenJson){
        this.childrenNodes.pusha(childrenJson);
    }
    set name(nodeName){
        this.tag = nodeName.toLoverCase();
    }
}