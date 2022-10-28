<template>
  <div class="w-full h-[500px]">
    <div class="w-full flex justify-center items-start">
      <div class="w-full flex justify-start items-center gap-x-6 bg-blue-300">
        <div class="flex gap-x-1">
          <p>
            오늘 하루 보지않기
          </p> 
          <a-checkbox @change="oneDayCheckboxChange" />
        </div>
        <div class="flex gap-x-1">
          <p>
            일주일간 보지않기
          </p> 
          <a-checkbox @change="oneWeekCheckboxChange" />
        </div>
      </div>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <h1>
        <!-- 내용 -->
        {{ popUpContent }}
      </h1>
    </div>
  </div>
</template>
<script>
import $cookies from 'cookie-universal-nuxt';

export default {
  layout: 'popup',
  data() {
    return {
      popUpData: [],
      popUpNo: '',
      popUpContent: '',
    }
  },
  created() {
    this.popUpData = [
      { no: '1', content: '팝업1' },
      { no: '2', content: '팝업2' },
      { no: '3', content: '팝업3' },
      { no: '4', content: '팝업4' },
      { no: '5', content: '팝업5' },
    ];
  },
  mounted() {
    const id = this.$route.params.id
    this.popUpNo = id;

    for(let i = 0; i < this.popUpData.length; i++) {
      if(this.popUpNo === this.popUpData[i].no) {
        this.popUpContent = this.popUpData[i].content;
        break;
      }
    }
  },
  methods: {
    // 하루동안 쿠키값 유지
    oneDayCheckboxChange(e) {
      if(e.target.checked) {
        const cookieName = 'pop' + this.popUpNo + 'OneDayHide'; 

        this.$cookies.set(cookieName, cookieName, {
          path: '/',
          maxAge: 60 * 60 * 24
        });

        window.self.close();
      }
    },
    // 일주일간 쿠키값 유지
    oneWeekCheckboxChange(e) {
      if(e.target.checked) {
        const cookieName = 'pop' + this.popUpNo + 'OneWeekHide'; 

        this.$cookies.set(cookieName, cookieName, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        });

        window.self.close();
      }
    }
  },
}
</script>
