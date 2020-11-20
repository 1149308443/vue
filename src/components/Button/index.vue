<template>
  <button
    :class="classNames"
    :disabled="disable"
    @click="click"
  >
    <Icon
      v-if="isloading"
      class="fa-circle-o-notch fa-spin"
    />
    <slot />
  </button>
</template>

<script>
import Icon from '@comp/Icon/';
export default {
    name:'Button',
    components:{
        Icon
    },
    props:{
        disable:{ //是否可以点击
            type: Boolean,
            default: false
        },
         isloading:{ //loading状态
            type: Boolean,
            default: false
        },
        click:{
            type: Function,
            // eslint-disable-next-line no-empty-function
            default: ()=>{}
        },
    },
    computed:{
        classNames :function(){
            const { disable, isloading } = this;
            const className = {
                'button': true,
                'loading': isloading,
                'disable': disable
            };
            return className;
        }
    }
};
</script>

<style lang="less" scoped>
    .button{
        margin-right: 8px;
        margin-bottom: 12px;
        color: #ffffff;
        background-color:#3273dc;
        line-height: 32px;
        font-weight: 400;
        padding: 0 15px;
        border-radius: 2px;
        box-shadow: 0 2px 0 rgba(0,0,0,.045);
        text-shadow: 0 -1px 0 rgba(0,0,0,.12);
        outline: 0;
        border: 1px solid #d9d9d9;
        border-color: #3273dc;
        font-size: 14px;
        cursor: pointer;
        &:hover, &.loading{
            background: #1276c7;
            border-color: #1276c7;
            opacity: 0.8;
        }
        &.disable{
            cursor: not-allowed;
        }
        &.loading{
             cursor: wait;
        }
    }
</style>