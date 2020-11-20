<template>
  <div class="mavonEditor">
    <mavonEditor
      v-model="context"
      :toolbars="toolbars"
      :toolbars-flag="toolbarsFlag"
      :subfield="subfield"
      :default-open="defaultOpen"
      :editable="editable"
      :navigation="navigation"
      @save="saveAs"
    />
    <div
      v-if="showPublish"
      class="publish"
    >
      发布
    </div>
  </div>
</template>

<script>
// 编辑器配置https://github.com/hinesboy/mavonEditor
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import "github-markdown-css/github-markdown.css";

export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      showPublish: true,
      context: "#### how to use mavonEditor in nuxt.js ", //输入的数据
      toolbarsFlag: true, //是否展示tool栏
      subfield: true, // 双栏模式
      defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
      editable: true, //是否可编辑
      navigation: false, //展示目录
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
      },
    };
  },
  mounted() {
    const el = document.querySelector(".fa-mavon-arrows-alt");
    el.click(); //默认设置编辑器全屏操作
  },
  methods: {
    saveAs: (value, html) => {
      console.log(1, value, html);
    },
  },
};
</script>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
  position: relative;
}
.publish {
  position: absolute;
  right: 180px;
  top: 7px;
  z-index: 1599;
  width: 60px;
  text-align: center;
  line-height: 30px;
  background: rgb(40, 120, 255);
  color: rgb(239, 239, 239);
  border-radius: 3px;
  cursor: pointer;
}
</style>
