/**
 * 定义一个类，用于创建vue实例
 */
class Vue {
    constructor(options = {}) {
        // vue实例属性
        this.$el = options.el;
        this.$data = options.data;
        this.$methods = options.methods;

        //模板解析： compile 解析el
        if(this.$el) {
            let a = new Compile(this.$el, this);
        }
    }
}