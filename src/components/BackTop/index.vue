<template>
  <div
    :class="{'backTopContainer':true,'show':!isTop}"
    @click="clickBackTop"
  >
    <slot>
      <Button class="btn"><Icon class="fa-arrow-up" /></Button>
    </slot>
  </div>
</template>

<script>
import Button from '@comp/Button/';
import Icon from '@comp/Icon/';
import { debounce } from '@util';
export default {
    name:'BackTop',
    components:{
        Button,
        Icon
    },
    props:{
        offset:{ //滚动距离顶部多少出现按钮
            type: Number,
            default: 200
        }
    },
    data(){
        return{
            isTop:true
        };
    },
    mounted(){
        this.setScrollTop();
        document.addEventListener('scroll',debounce(this.setScrollTop));
    },
    methods:{
        clickBackTop:function(){
            this.isTop = true;
            let timer = null;
            timer= setInterval(function(){
                const scrollTop = document.documentElement.scrollTop;
                 document.documentElement.scrollTop = scrollTop - scrollTop / 10;
                 if(scrollTop <= 0){
                     clearInterval(timer);
                 }
            },10);
        },
        setScrollTop:function(){
            const scrollTop = document.documentElement.scrollTop;
            this.isTop = scrollTop < this.offset;
        }
    }
};
</script>

<style lang="less" scoped>
    .backTopContainer{
        position: fixed;
        bottom: 50px;
        right: 50px;
        opacity: 0;
        z-index: -1;
        transition: all 0.8s ease-in;
        &.show{
            opacity: 1;
            z-index: 100;
        }
        .btn{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 16px;
        }
    }
</style>