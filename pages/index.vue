<template>
  <div>
    <!-- 메인상단, 예약하기 -->
    <ReservationComp />

    <!-- 객실안내 -->
    <GuestroomMainComp />

    <!-- 다이닝 -->
    <DiningMainComp />
    
    <!-- 부대시설 -->
    <AdditionalfacilitiesMainComp />
  
    <!-- 스페셜오퍼 -->
    <SpecialoperMainComp />

    <!-- 주변여행코스 -->
    <TravelcourseMainComp />

    <!-- 플러팅 버튼 -->
    <div class="hidden lg:block fixed right-[8%] bottom-[420px] z-50">
      <div class="w-[100px] h-[100px] border border-gray-100 rounded-xl bg-white flex flex-col justify-center items-center">
        <span @click="onClickRedirect()" class="cursor-pointer mb-2">
          <img src="~/assets/images/go-dayshotel.svg" alt="" />
        </span>
        <div class="w-full flex justify-center items-center">
          <p class="text-[#005298] text-xs cursor-pointer" @click="onClickRedirect()">
            바로가기
          </p>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        id="pagetop"
        class="hidden lg:block fixed right-[8%] bottom-[372px] z-50"
        v-show="scY > 900"
      >
        <div class="w-[100px] h-10 border border-[#0E589B] rounded-xl bg-[#0E589B] flex justify-center items-center gap-x-2 cursor-pointer" @click="toTop">
          <div>
            <img src="~/assets/icons/arrow_up_line_grey_16.svg" />
          </div>
          <div>
            <p class="text-white font-bold tracking-[-0.3px] text-xs">
              TOP
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from "vue";
import TopMenuComp from "@/components/TopMenu.vue";
import FooterComp from "@/components/Footer.vue";
import $cookies from 'cookie-universal-nuxt';

//상단, 예약하기
import ReservationComp from "@/components/Reservation.vue";
//객실 안내
import GuestroomMainComp from "@/components/GuestroomMain.vue";
//다이닝
import DiningMainComp from "@/components/DiningMain.vue";
//부대시설
import AdditionalfacilitiesMainComp from "@/components/AdditionalfacilitiesMain.vue";
//스페셜오퍼
import SpecialoperMainComp from "@/components/SpecialoperMain.vue";
//주변여행코스
import TravelcourseMainComp from "@/components/TravelcourseMain.vue";

//import { Button as AButton } from "ant-design-vue";
export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      show: true,
      scTimer: 0,
      scY: 0,

      popUpData: [],
      popUpOptions: [],
    };
  },
  components: {
    //AButton,
    TopMenuComp,
    FooterComp,
    ReservationComp,
    GuestroomMainComp,
    DiningMainComp,
    AdditionalfacilitiesMainComp,
    SpecialoperMainComp,
    TravelcourseMainComp
  },
  created() {
    this.popUpData = [
      { no: '1', content: '팝업1' },
      { no: '2', content: '팝업2' },
      { no: '3', content: '팝업3' },
      // { no: '4', content: '팝업4' },
      // { no: '5', content: '팝업5' },
    ];
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    this.setPopup();
  },

  methods: {
    setPopup() {
      let curX = window.screenLeft;
      let curY = window.screenTop;
      
      let top = curY;  
      let left = curX;
      
      for(let i = 0; i < this.popUpData.length; i++) {
         let targetCookieName1 = 'pop' + this.popUpData[i].no + 'OneDayHide'
         let targetCookieName2 = 'pop' + this.popUpData[i].no + 'OneWeekHide'

         let targetCookie1 = this.$cookies.get(targetCookieName1);
         let targetCookie2 = this.$cookies.get(targetCookieName2);

         if(targetCookie1 === undefined && targetCookie2 === undefined) {
            let url = '/popup/' + this.popUpData[i].no + '';
            let popName = this.popUpData[i].no;
            let options = '';
            this.popUpOptions.push({url: url, popName: popName, options: options});
         }
      }
      
      let openCount = 0;

      for(let i = 0; i < this.popUpOptions.length; i++) {
        setTimeout(() => {
          let options = '';

          options = 'width=400,height=500,top=' + top + ',left=' + left + '';

          this.popUpOptions[i].options = options;

          window.open(this.popUpOptions[i].url, this.popUpOptions[i].popName, this.popUpOptions[i].options);    

          openCount++;

          if(openCount === 4) {
            top += 540;
            left = curX;
          } else {
            left += 402;
          }
        }, 2000);
      }
    },
    setShow(show) {
      //console.log(show);
      this.show = show;
    },

    //Top 버튼 scroll
    handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },

    //Top 버튼 클릭
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    //데이즈호텔 앤 스위트 홈페이지 팝업
    onClickRedirect() {
      window.open("https://www.naver.com", "_blank");
    },
  },
  computed: {},
});
</script>

<style>
.container {
  width: 1280px;
}

.carousel-caption {
  bottom: -7%;
  left: 0%;
  right: 0%;
}

.img-fluid {
  height: 420px;
}

@font-face {
  font-family: "Merienda";
  src: url(./assets/font/Montserrat/Montserrat-Light.ttf) format("truetype");
}

@font-face {
  font-family: "MeriendaBold";
  src: url(./assets/font/Montserrat/Montserrat-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "NotoSansCJKkrLight";
  src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Light.otf) format("truetype");
}
@font-face {
  font-family: "NotoSansCJKkrBold";
  src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}

.merienda {
  font-family: "Merienda";
}

.merienda-bold {
  font-family: "MeriendaBold";
}

.notoSansCJKkr-light {
  font-family: "NotoSansCJKkrLight";
}
.notoSansCJKkr-bold {
  font-family: "NotoSansCJKkrBold";
}

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity .5s; */
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>




