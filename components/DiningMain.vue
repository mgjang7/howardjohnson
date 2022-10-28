<template>
<!-- 다이닝 -->
<div>
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full bg-[#FFF6F2]">
      <div class="container py-[120px]">
        <div class="flex flex-col justify-items-center items-center">
            <div>
                <span class="howard-main-title">다이닝</span>
            </div>
            <div class="mt-[24px]">
                <p class="howard-sub-title">
                    넓은 통유리창과 스타일리쉬한 분위기, 색다른 미식의 세계로 초대합니다.
                </p>
            </div>
        </div>
        <!-- 그리드 -->
        <div class="flex justify-center items-center mt-[80px]">
          <div class="w-full grid grid-cols-2 gap-3">
            <!-- 사진 -->
            <div
              v-for="(item, index) in diningDatas"
              :key="index"
              class="overflow-hidden"
              @mouseover="setDiningImgShow(index, true)"
              @mouseleave="setDiningImgShow(index, false)"
            >
              <div class="relative w-full h-full">
                <img
                  v-if="index == 0"
                  :src="item.imgsrc"
                  class="w-full h-full duration-75"
                  :class="{ 'scale-110': isDiningImg0Show }"
                />
                <img
                  v-else-if="index == 1"
                  :src="item.imgsrc"
                  class="w-full h-full duration-75"
                  :class="{ 'scale-110': isDiningImg1Show }"
                />
                <div
                  class="
                    absolute
                    w-full
                    h-[30%]
                    bottom-0
                    left-0
                    bg-black
                    opacity-50
                    z-0
                  "
                ></div>
                <div
                  class="
                    absolute
                    flex flex-row
                    justify-between
                    items-center
                    px-4
                    w-full
                    h-[30%]
                    bottom-0
                    left-0
                    z-10
                  "
                >
                  <div
                    class=""
                  >
                    <div class="text-white">
                      <div class="underline underline-offset-[12px]">
                          <span class="noto-sans-bold text-[18px] text-white tracking-[-0.9px]">{{ item.title }}</span>
                      </div>
                      <div class="mt-[16px]">
                          <span class="text-[14px] text-white tracking-[-0.7px]">{{ item.content }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <span
                      class="cursor-pointer"
                      @click="goDiningDetail(item.idx)"
                    >
                      <img
                        src="~/assets/images/go-info.svg"
                        class="w-[24px] h-[24px]"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="howard-contents lg:hidden w-full bg-[#FFF6F2]">
        <div class="w-full pt-8 pb-[50px] px-[12px]">
            <div class="w-full flex flex-col">
                <div class="w-full flex justify-center items-center mb-2">
                    <span class="howard-main-title-mobile">다이닝</span>
                </div>
                <div class="w-full flex justify-center items-center">
                    <div class="flex flex-col items-center space-y-[4px]">
                        <p class="howard-sub-title-mobile">넓은 통유리창과 스타일리쉬한 분위기,</p>
                        <p class="howard-sub-title-mobile">색다른 미식의 세계로 초대합니다.</p>
                    </div>
                </div>

                <!-- 캐러셀 슬라이드 -->
              <div class="w-full pt-6">
                <VueSlickCarousel v-bind="carouselSettings">
                  <div v-for="(item, index) in diningDatas" :key="index" class="w-full px-[4px]">
                    <div class="relative w-full">
                          <div class="w-full top-0 left-0">
                              <img :src="item.imgsrc" />
                          </div>
                          
                          <div class="absolute w-full h-[40%] bottom-0 left-0 bg-black opacity-50 py-[18px] px-4 z-0">
                              
                          </div>
                          <div class="absolute w-full h-[40%] bottom-0 left-0 py-[18px] px-4 z-10">
                              <div class="w-full h-full flex justify-between items-center">
                                  <div class="">
                                      <div class="w-full text-white underline underline-offset-[6px]">
                                          <span class="text-[12px] text-white tracking-[-0.7px]">{{item.title}}</span>
                                      </div>
                                      <div class="w-full mt-[6px]">
                                          <span class="noto-sans-thin text-[7px] text-white tracking-[-0.5px]">
                                            {{item.content}}
                                          </span>
                                      </div>
                                  </div>
                                  <div class="">
                                      <img
                                          src="~/assets/images/go-info.svg"
                                          class="w-[16px] h-[16px]"
                                          alt=""
                                      />
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
                </VueSlickCarousel>
              </div>

                <!-- 캐러셀 슬라이드 (ant-carousel) old -->
               <!-- <div class="w-full pt-6"> 
                  <div class="w-full top-0 left-0">
                      <a-carousel arrows dots-class="slick-dots slick-thumb">
                          <a slot="customPaging" slot-scope="props">
                              <div class="h-2 w-2 rounded-full slick-normal"></div>
                          </a>
                          <div v-for="(item, index) in diningDatas" :key="index" class="">
                              <div class="relative w-full">
                                  <div class="w-full top-0 left-0">
                                      <img :src="item.imgsrc" />
                                  </div>
                                  
                                  <div class="absolute w-full h-[30%] bottom-0 left-0 bg-black opacity-50 py-[18px] px-4 z-0">
                                      
                                  </div>
                                  <div class="absolute w-full h-[30%] bottom-0 left-0 py-[18px] px-4 z-10">
                                      <div class="w-full h-full flex justify-between items-center">
                                          <div class="">
                                              <div class="w-full text-[14px] text-white font-bold underline underline-offset-[6px]">
                                                  {{item.title}}
                                              </div>
                                              <div class="w-full text-[10px] text-white mt-[6px]">
                                                  {{item.content}}
                                              </div>
                                          </div>
                                          <div class="">
                                              <img
                                                  src="~/assets/images/go-info.svg"
                                                  class="w-[16px] h-[16px]"
                                                  alt=""
                                              />
                                          </div>
                                          
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </a-carousel>
                  </div>
               </div> -->
            </div>
        </div>
    </div>
</div>        
</template>

<script>
import Vue from "vue";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
    data() {
        return {
            //다이닝
            diningDatas: [],
            isDiningImg0Show: false,
            isDiningImg1Show: false,
             //캐러셀 셋팅
            carouselSettings: {
              "dots": true,
              "dotsClass": "slick-dots custom-dot-class",
              //"edgeFriction": 0.35,
              "infinite": true,
              "speed": 500,
              "slidesToScroll": 1,
              "arrows": false,
              "centerMode": true,
              "centerPadding": '14px',
              "slidesToShow": 1,

              //반응형 너비에 따른 배치 설정
              responsive: [
                {
                  breakpoint: 1018,
                  settings: {
                    "dots": true,
                    "dotsClass": "slick-dots custom-dot-class",
                    "infinite": true,
                    "speed": 500,
                    "slidesToScroll": 1,
                    "arrows": false,
                    // "centerMode": true,
                    // "centerPadding": '14px',
                    "slidesToShow": 2,
                  }
                },
                {
                  breakpoint: 540,
                  settings: {
                    "dots": true,
                    "dotsClass": "slick-dots custom-dot-class",
                    "infinite": true,
                    "speed": 500,
                    "slidesToScroll": 1,
                    "arrows": false,
                    "centerMode": true,
                    "centerPadding": '14px',
                    "slidesToShow": 1,
                  }
                },
              ],
          }
        }
    },
    components: { VueSlickCarousel },
    created() {
        //다이닝
        this.diningDatas = [
            {idx: 1, title: "라이즈 앤 다인", content: "세계 각국의 다양한 퓨전요리를 선보이는 올데이 다이닝 뷔페", imgsrc: require("~/assets/images/dining/risedine/09.jpg")},
            {idx: 2, title: "데이 브레이크", content: "다양한 이색커피, 수제 생맥주, 세계 각국의 와인, 위스키", imgsrc: require("~/assets/images/dining/daybreak/05.jpg")},
        ];
    },
    methods: {
        setDiningImgShow(idx, isShow) {
            if (idx == 0) {
                this.isDiningImg0Show = isShow;
            } else if (idx == 1) {
                this.isDiningImg1Show = isShow;
            }
        },
        //다이닝 상세 이동
        goDiningDetail(idx) {
            if (idx == 1) {
                this.$router.push({ path: "/dining/detail?diningType=risedine" });
            } else if (idx == 2) {
                this.$router.push({ path: "/dining/detail?diningType=daybreak" });
            }
        },
    }
})
</script>

<style>
@font-face {
    font-family: "NotoSansBold";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansRegular";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansLight";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Light.otf) format("truetype");
}
.noto-sans-bold {
    font-family: "NotoSansBold";
}
.noto-sans-regular {
    font-family: "NotoSansRegular";
}
.noto-sans-light {
    font-family: "NotoSansLight";
}
.custom-dot-class > li {
  width: 5px;
}

.slick-dots li.slick-active button:before{
  color: #EE792F;
  opacity:1;
}

.slick-dots li button:before {
  /* color: orange; */
  color: #EE792F;
  opacity:0.5;
  width: 0px;
  height: 0px;
}
.slick-dots{
  padding-right: 0.6%;
}
/* .ant-carousel >>> .slick-dots {
  height: 12px;
}
.ant-carousel >>> .slick-slide img {
  display: block;
  width: 100%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -17px;
}
.ant-carousel >>> .slick-thumb li {
  width: 12px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

.slick-normal {
     background-color: orange; 
}
.slick-active > a > div {
    background-color: #EE792F;
} */
</style>
