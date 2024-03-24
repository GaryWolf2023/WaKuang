<template>
  <Layout_imp :title="$t('user.feedback.title')">
    <p :class="['page-box','title','title-common']">{{$t('user.feedback.content')}}</p>
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
      <span :class="['title-common']">{{$t('user.feedback.updateImg')}}</span>
      <span class="small-prompt">{{$t('user.feedback.uploadLimit')}}</span>
    </div>
    <div :class="['page-box', 'box-bc', 'img-box']" >
      <van-uploader v-model="fileList" multiple :max-count="6" :before-read="beforeRead" :after-read="afterRead" @delete="deleteFile"/>
    </div>
    <van-cell-group inset :style="{margin:'25px 21px 0'}">
      <van-button class="van-button-confirm" :style="{width:'100%', fontSize:'16px', backgroundColor:'rgb(102, 224, 255)'}" @click="uploadFeedback">
        {{$t('user.feedback.submitEcho')}}
      </van-button>
    </van-cell-group>
  </Layout_imp>
</template>

<script setup>
import {ref,reactive, watch} from 'vue'
import Layout_imp from "@/common/layouts/common/layout_imp.vue";
import {updateFile, deleteFileFormOrigin} from "@/api/file.js";

let fileList = ref([])
let content = ref('')
let fileTypeList = ['image/png', 'image/jpg','image/jpeg', 'image/webp', 'image/gif']

const uploadFeedback = () => {}

watch(fileList, (val) => {
  console.log(fileList.value)
  if (fileList.value.length > 0) {
  }
},{immediate:true})

// 删除图片时使用
const deleteFile = (file, index) => {
  console.log(file)
  console.log(index)
}
// 上传前置处理，可做类型限制
const beforeRead = (file) => {
  return true;
  // if (!fileTypeList.includes(file.type)) {
  //   return false;
  // }
}

// 选择图片式触发，在这里写上传函数
const afterRead = (file) => {
  file.status = 'uploading';
  file.message = '上传中...';
  // 这里直接上传到指定服务器，后续对完接口来进行更改
  setTimeout(() => {
    file.status = 'success';
    file.message = '上传成功';
  }, 1000);
};
</script>

<style lang="scss" scoped>
.page-box {
  margin: 0 16px;
}
.box-bc {
  background-color: #1C1C1C;
}
.title-common {
  font-size: 15px;
  color: #D1D0CF;
}
.title {
  margin: 10px 16px;
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
  :deep(.van-uploader) {
    .van-uploader__upload {
      border-radius: 4px;
      background-color: #2B2B2B;
      .van-icon {
        color: #616161;
        font-size: 22px;
      }
    }
    .van-uploader__preview-image {
      border-radius: 4px;
    }
  }
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
    .van-field__control::placeholder {
      color: #616161;
    }
  }
}

</style>