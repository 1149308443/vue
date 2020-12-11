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

        let message =  {
            timer:null,
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
            },
            show(vnode){
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
            }
            
        };

        if (!Vue.$message) {
            Vue.$message = message;
        }
        Vue.mixin({// 3. 通过全局 mixin方法添加一些组件选项，如: vuex
            mounted() {
                this.$message = message;
            },
        });

    }
};

// 该组件未实现的功能
// 1同时 展现多个message提示,,
// 2 支持this.$message()和this.message.info()写法


// 目前支持 this.$message.show()
// 类型方法不需要传type this.$message.info(), this.$message.success(),this.$message.error(),this.$message.warning()
// 参数为字符串或者对象
// 如果是字符串 默认展示 info类型
// 对象支持message, type, duration属性