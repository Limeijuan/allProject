/**
 * 负责解析模板与内容
 */
class Compile{
    constructor(el, vm) {
        // 模板，兼容vue传递的选择器
        this.el = typeof el === 'string' ? document.querySelector(el) : el;
        // vue实例对象
        this.vm = vm;

        if(this.el) {
            // 1.把el所有子节点都放到内存中，fragment
            let fragment = this.node2faragment(this.el);
            // 2.在内存中编译fragment
            this.compile(fragment);
            // 3.最后把 fragment 一次性添加到页面
            this.el.appendChild(fragment);
        }
    }
    /**
     * 核心方法
     */
    node2faragment(node) {
        let fragment = document.createDocumentFragment()
        let childNodes = node.childNodes;
        this.toArray(childNodes).forEach(n => {
            fragment.appendChild(n)
        })
        return fragment;
    }
    /**
     * 编译文档碎片（内存中）
     * @param {*} fragment 
     */
    compile(fragment) {
        let childNodes = fragment.childNodes;
        this.toArray(childNodes).forEach(n => {
            // 文本节点解析
            if(this.isTextNode(n)) {
                this.compileText(n)
            }
            // 元素节点解析 解析vue指令
            if(this.isElementNode(n)) {
                this.compileElement(n);
            }
            // 递归遍历子节点
            if(n.childNodes && n.childNodes.length > 0) {
                this.compile(n);
            }
        })
    }
    // 解析文本节点
    compileText(node) {
        CompileUtil.mustache(node, this.vm)
    }
    // 解析元素节点
    compileElement(node) {
        // 获取元素所有属性
        let attributes = node.attributes;
        this.toArray(attributes).forEach(attrObj => {
            let attrName = attrObj.name;
            // 判断属性是以v- 开头
            if(this.isDirective(attrName)) {
                let expr = attrObj.value;
                let type = attrName.slice(2);
                // 处理指令
                if(this.isEventDirective(type)) {
                    CompileUtil.eventHandler(node, this.vm, type, expr)
                }else {
                    CompileUtil[type] && CompileUtil[type](node, this.vm, expr)
                }
            }
        })
    }

    /**
     * 工具方法
     */
    toArray(arrayLike) { //数组转换
        return [].slice.call(arrayLike);
    }
    // 节点类型：1.元素节点，3.文本节点
    isTextNode(node) { //文本节点
        return node.nodeType === 3
    }
    isElementNode(node) {
        return node.nodeType === 1;
    }
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }
    isEventDirective(type) {
        return type.split(':')[0] === 'on';
    }
}

let CompileUtil = {
    mustache(node, vm) {
        let text = node.textContent;
        let reg = /\{\{(.+)\}\}/
        if(reg.test(text)) {
            let expr = RegExp.$1;
            node.textContent = text.replace(reg, CompileUtil.getVMValue(vm, expr))
        }
    },
    // 处理v-text指令
    text(node, vm, expr) {
        node.textContent = this.getVMValue(vm, expr);
    },
    
    // 处理v-html指令
    html(node, vm, expr) {
        node.innerHTML = this.getVMValue(vm, expr);;
    },
    
    // 处理v-model指令
    model(node, vm, expr) {
        node.value = this.getVMValue(vm, expr);;
    },

    // 处理事件方法 v-on
    eventHandler(node, vm, type, expr) {
        // 给元素节点注册事件
        // 先要取到事件类型，如点击click,change等事件
        let eventType = type.split(":")[1];
        let fn = vm.$methods && vm.$methods[expr];
        if(eventType && fn) {
            node.addEventListener(eventType, fn.bind(vm))
        }
        
    },

    // 获取vm中的数据
    getVMValue(vm, expr) {
        let data = vm.$data;
        expr.split(".").forEach(item => {
            data = data[item];
        });
        return data
    }
    

    
}