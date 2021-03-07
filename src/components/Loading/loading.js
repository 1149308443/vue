import Loading from '@comp/Loading';

let $vm = null;
let $orderVm = null;
export default {
    install(Vue, options){
        if(!$vm){
            const LoadingPlugin = Vue.extend(Loading);

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });
            
            // console.log($vm);

            document.body.appendChild($vm.$el);
        }
        const loading = {
            show: function(options){
                $vm.show = true;
                $vm.fullscreen = true;
                if(options) $vm.text = options.text;
            },
            hide: function(){
                $vm.show = false;
            }
        };
        Vue.directive('loading', {
            // bind: function (el, binding, vnode, oldVnode){
            //     console.log('loading bind',el, binding, vnode, oldVnode);
            // },
            inserted: function(el, binding, vnode, oldVnode){
                const LoadingPlugin = Vue.extend(Loading);
                $orderVm = new LoadingPlugin({
                    el: document.createElement('div')
                });
                el.appendChild($orderVm.$el);
                // $orderVm.show = true;
                // console.log(el, binding, vnode, oldVnode);
            },
            update: function(el, binding, vnode, oldVnode) {
                const { value, expression, modifiers } = binding;
                const modifiersAttr =  Object.keys(modifiers);
                const attr = modifiersAttr.length > 0 ? modifiersAttr[0] : 'show';
                $orderVm[attr] = value;
                // console.log('loading update',el, binding);
            },
            // componentUpdated: function() {
            //     console.log('loading componentUpdated');
            // },
            // unbind: function() {
            //     console.log('loading unbind');
            // }
        });
        Vue.mixin({// 3. 通过全局 mixin方法添加一些组件选项，如: vuex
            mounted() {
                this.$loading = loading;
            },
        });
    }
};