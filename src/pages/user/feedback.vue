<template>
  <Layout_imp :title="$t('user.feedback.title')">
    <p :class="['page-box','title']">{{$t('user.feedback.content')}}</p>
    <div :class="['page-box', 'box-bc', 'feedback-content']">
      <van-field
          v-model="content"
          rows="11"
          autosize
          type="textarea"
          maxlength="1000"
          :placeholder="$t('user.feedback.areaPrompt')"
          show-word-limit
      />
    </div>
    <div :class="['page-box','img-prompt']">
      <span>{{$t('user.feedback.updateImg')}}</span>
      <span class="small-prompt">{{$t('user.feedback.uploadLimit')}}</span>
    </div>
    <div :class="['page-box', 'box-bc', 'img-box']" >
      <van-uploader v-model="fileList" multiple />
    </div>
    <van-cell-group inset :style="{margin:'25px 21px 0'}">
      <van-button class="van-button-confirm" :style="{width:'100%', fontSize:'16px', backgroundColor:'rgb(102, 224, 255)'}" @click="uploadFeedback">
        {{$t('user.feedback.submitEcho')}}
      </van-button>
    </van-cell-group>
  </Layout_imp>
</template>

<script setup>
import {ref,reactive} from 'vue'
import Layout_imp from "@/common/layouts/common/layout_imp.vue";

let fileList = ref([])
let content = ref('')

const uploadFeedback = () => {}
</script>

<style lang="scss" scoped>
.page-box {
  margin: 0 16px;
}
.box-bc {
  background-color: #1C1C1C;
}
.title {
  margin: 10px 16px;
  font-size: 15px;
  color: #D1D0CF;
}
.img-prompt {
  margin: 20px 16px 10px;
  font-size: 15px;
  color: #D1D0CF;
  .small-prompt {
    font-size: 14px;
    color: #616161;
  }
}
.img-box {
  padding: 16px 16px 14px;
  border-radius: 6px;
}
:deep(.van-button-confirm) {
  height: 46px;
  font-size: 16px;
  color: rgb(18, 17, 15);
  border: none;
}
.feedback-content {
  height: 300px;
  border-radius: 6px;
  :deep(.van-cell) {
    background-color: #1c1c1c;
    padding: 10px 14px;
    //color: #616161;
  }
}

</style>