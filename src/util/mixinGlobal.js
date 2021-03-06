import Message from '@comp/Message';

let $vm;
export default {
    install(Vue, options) {

        if(!$vm){
            const MessagePlugin = Vue.extend(Message);

            $vm = new MessagePlugin({
                el: document.createElement('div')
            });
            // console.log($vm);

            document.body.appendChild($vm.$el);
        }
        $vm.show = false;

        let message = {
            timer:null,
            show(vnode) {
                // document.body.appendChild($vm.$el);
                this.checkParams(vnode);
            },
            info(vnode){
                this.checkParams(vnode);
            },
            error(vnode){
                this.checkParams(vnode,'error');
            },
            success(vnode){
                this.checkParams(vnode,'success');
            },
            warning(vnode){
                this.checkParams(vnode,'warning');
            },
            hide(duration = 3000) {
                clearTimeout(this.timer);
                this.timer = setTimeout(function(){
                    $vm.show = false;
                },duration);
            },
            checkParams(vnode, typeFn){
                $vm.show = true;
                if(typeof vnode === 'string'){
                    $vm.message = vnode;
                    $vm.type = typeFn || 'info';
                    this.hide();
                } else{
                    const { message, type = 'info', duration = '3000' } = vnode;
                    $vm.message = message;
                    $vm.type = typeFn || type;
                    this.hide(duration);
                }
            }
        };

        if (!Vue.$message) {
            Vue.$message = message;
        }
        // Vue.myGlobalMethod = function () {  // 1. 添加全局方法或属性，如:  vue-custom-element
        //     // 逻辑...
        // };
        Vue.directive('focus', {// 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch 本例添加了v-focus元素插入后会直接聚焦
            // bind: function() {},

            // 当绑定元素插入到 DOM 中。
            inserted: function(el, binding, vnode, oldVnode) {
                // 聚焦元素
                el.focus();
            },

            // update: function() {},
            // componentUpdated: function() {},
            // unbind: function() {}
        });

        Vue.mixin({// 3. 通过全局 mixin方法添加一些组件选项，如: vuex
            mounted() {
                this.$message = message;
            },
        });

        // Vue.prototype.$myMethod = function (options) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
        //     // 逻辑...
        // };
    }
};