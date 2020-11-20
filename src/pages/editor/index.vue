<template>
  <MavonEditor />
</template>

<script>
import MavonEditor from '@comp/MavonEditor/';
import Button from '@comp/Button/';

export default {
    components:{
      MavonEditor,
      Button
    },
    data(){
        return {
            context:''
        };
    }
};
</script>

<style scoped>

</style>