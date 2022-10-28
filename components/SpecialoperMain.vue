<template>
<!-- 스페셜오퍼 -->
<div>
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
      <div class="container pt-[120px] pb-[240px]">
        <div class="flex flex-col justify-items-center items-center">
            <div>
                <span class="howard-main-title">스페셜오퍼</span>
            </div>
            <div class="mt-[24px]">
                <p class="howard-sub-title">
                    다양한 패키지 상품과 이벤트로 보다 특별하게 하워드 존슨을 누리세요.
                </p>
            </div>
        </div>
      </div>

      <div class="min-w-[1372px] w-full h-[580px] bg-[#FFF6F2] relative">
        <!-- <div class="absolute w-full left-0 -top-[120px]"> -->
        <div class="absolute w-full left-0 -top-[150px]">
            <div class="flex flex-col items-center">
                <div class="flex flex-row justify-center items-center">
                    <div class="flex flex-row justify-center items-center space-x-3">
                    <span class="" @click="prevSoCards(currentSoPage)">
                        <img src="~/assets/images/arrow_left_white_48_orange.svg" alt="" class="cursor-pointer" />
                    </span>
                    <div
                        v-for="(item, index) in currentSoDatas"
                        :key="index"
                        class="grow"
                    >
                        <div
                            @click="goDetail(item.itemNo)" 
                            class="
                                w-[416px]
                                h-[472px]
                                bg-white
                                overflow-hidden
                                cursor-pointer
                                card-border
                            "
                        >
                            <img class="w-[416px] h-[312px]" :src="item.imgsrc" alt="" />
                            <div class="px-6 py-4">
                                <div class="mb-2">
                                    <span class="noto-sans-bold text-[18px] tracking-[-0.9px]">{{ item.title }}</span>
                                </div>
                                <p class="text-[#757575] text-[14px] tracking-[-0.7px]">
                                    {{ item.content }}
                                </p>
                                <p class="text-[#BDBDBD] text-[12px] mt-[22px] tracking-[-0.6px]">
                                    기간: 2022.03.04 ~ 2022.08.27
                                </p>
                            </div>
                        </div>
                    </div>
                    <span class="" @click="nextSoCards(currentSoPage)">
                        <img src="~/assets/images/arrow_right_white_48_orange.svg" alt="" class="cursor-pointer" />
                    </span>
                    </div>
                </div>
                <div class="mt-[80px]">
                    <button @click="goSpecialOper" class="howard-btn">
                        더보기
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- mobile -->
    <div class="howard-contents lg:hidden w-full">
        <div class="w-full pt-8 pb-6">
            <div class="w-full flex justify-center items-center mb-2">
                <span class="howard-main-title-mobile">스페셜오퍼</span>
            </div>
            <div class="w-full flex justify-center items-center">
                <div class="flex flex-col items-center space-y-[4px]">
                    <p class="howard-sub-title-mobile">다양한 패키지 상품과 이벤트로 보다 특별하게 하워드 존슨을 누리세요.</p>
                </div>
            </div>
        </div>

        <div class="relative w-full">
            <div class="absolute w-full h-full flex flex-col">
                <div class="w-full basis-[30%]">

                </div>
                <div class="w-full basis-[70%] bg-[#FFF6F2]">

                </div>
            </div>

            <div class="w-full px-[12px]">
                <!-- 캐러셀 슬라이드 -->
                <VueSlickCarousel v-bind="carouselSettings">
                  <div v-for="(item, index) in specialoperDatas" :key="index" class="w-full px-[4px]">
                        <div class="w-full flex justify-center items-center">
                            <div
                                @click="goDetail(item.itemNo)" 
                                class="
                                    w-full
                                    bg-white
                                    overflow-hidden
                                    border
                                    border-[#EEEEEE]
                                "
                            >
                                <!-- <img class="w-full h-[160px]" :src="item.imgsrc" alt="" /> -->
                                <img class="w-full h-full" :src="item.imgsrc" alt="" />
                                <div class="px-2 py-3">
                                    <div class="mb-1">
                                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]">{{ item.title }}</span>
                                    </div>
                                    <p class="text-[#757575] text-[10px] mb-2 tracking-[-0.5px]">
                                        {{ item.content }}
                                    </p>
                                    <p class="text-[#BDBDBD] text-[8px] tracking-[-0.4px]">
                                        기간: 2022.03.04 ~ 2022.08.27
                                    </p>
                                </div>
                            </div>
                        </div>
                  </div>
                </VueSlickCarousel>

                <!-- 캐러셀 슬라이드(ant-carousel) old -->
                <!-- <a-carousel arrows dots-class="slick-dots slick-thumb" class="w-full">
                    <a slot="customPaging" slot-scope="props">
                        <div class="h-2 w-2 rounded-full slick-normal"></div>
                    </a>
                    <div v-for="(item, index) in specialoperDatas" :key="index" class="w-full">
                        <div class="w-full flex justify-center items-center">
                            <div
                                class="
                                    w-[220px]
                                    bg-white
                                    overflow-hidden
                                    border
                                    border-[#EEEEEE]
                                "
                            >
                                <img class="w-[216px] h-[160px]" :src="item.imgsrc" alt="" />
                                <div class="px-2 py-3">
                                    <div class="font-black text-[14px] text-black mb-1">
                                        {{ item.title }}
                                    </div>
                                    <p class="text-[#606060] text-[10px] mb-2">
                                        {{ item.content }}
                                    </p>
                                    <p class="text-[#A8A8A8] text-[8px]">
                                        기간: 2022.03.04 ~ 2022.08.27
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-carousel> -->
            </div>
        </div>
        <div class="w-full pb-8 pt-6 px-4 bg-[#FFF6F2]">
            <div class="w-full h-full flex justify-center items-center pt-[30px]">
                <button @click="goSpecialOper" class="howard-btn-mobile">
                    더보기
                </button>
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
            //스페셜오퍼
            specialoperDatas: [],
            currentSoPage: 1,
            currentSoDatas: [],

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
              "centerPadding": '10%',
              "slidesToShow": 5,
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
                    "centerMode": true,
                    "centerPadding": '10%',
                    "slidesToShow": 3,
                  }
                },
                {
                  breakpoint: 779,
                  settings: {
                    "dots": true,
                    "dotsClass": "slick-dots custom-dot-class",
                    "infinite": true,
                    "speed": 500,
                    "slidesToScroll": 1,
                    "arrows": false,
                    "centerMode": true,
                    "centerPadding": '4%',
                    "slidesToShow": 3,
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
                    "centerPadding": '16%',
                    "slidesToShow": 1,
                  }
                },
              ],
          }
        }
    },
    components: { VueSlickCarousel },
    created() {
        //스페셜오퍼
        this.specialoperDatas = [
            // {page: 1, idx:1, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-01.jpg")},
            // {page: 1, idx:2, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-02.jpg")},
            // {page: 1, idx:3, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-03.jpg")},
            // {page: 2, idx:4, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-04.jpg")},
            // {page: 2, idx:5, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-05.jpg")},
            // {page: 2, idx:6, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-01.jpg")},
            // {page: 3, idx:7, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-02.jpg")},
            // {page: 3, idx:8, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-03.jpg")},
            // {page: 3, idx:9, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", imgsrc: require("../assets/images/specialoper/package-card-04.jpg")},
            {page: 1, idx:1, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-01.jpg"), itemNo: "package1"},
            {page: 1, idx:2, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-02.jpg"), itemNo: "package2"},
            {page: 1, idx:3, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-03.jpg"), itemNo: "package3"},
            {page: 2, idx:4, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-04.jpg"), itemNo: "package4"},
            {page: 2, idx:5, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-05.jpg"), itemNo: "package5"}, 
            
            {page: 2, idx:6, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-01.jpg"), itemNo: "package1"},
            {page: 3, idx:7, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-02.jpg"), itemNo: "package2"},
            {page: 3, idx:8, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-03.jpg"), itemNo: "package3"},
            {page: 3, idx:9, title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", price: "요금: 100,000", imgsrc: require("../assets/images/specialoper/package-card-04.jpg"), itemNo: "package4"},
            
        ];

        //스페셜오퍼 현재 페이지 데이터 설정
        this.specialoperDatas.forEach(element => {
            if(element.page == this.currentSoPage) {
                this.currentSoDatas.push(element);
            }
        });
    },
    methods: {
       //스페셜오퍼 이전 카드목록 조회
        prevSoCards(cSoPage) {
        var targetPage = cSoPage - 1;
        if(targetPage > 0) {
            this.currentSoPage = targetPage;
            this.currentSoDatas = [];
            this.specialoperDatas.forEach(element => {
            if(element.page == targetPage) {
                this.currentSoDatas.push(element);
            }
            });
        }
        },

        //스페셜오퍼 다음 카드목록 조회
        nextSoCards(cSoPage) {
        var targetPage = cSoPage + 1;
        if(targetPage < 4 && targetPage > 0) {
            this.currentSoPage = targetPage;
            this.currentSoDatas = [];
            this.specialoperDatas.forEach(element => {
            if(element.page == targetPage) {
                this.currentSoDatas.push(element);
            }
            });
        }
        },

        //스페셜 오퍼 페이지 이동
        goSpecialOper() {
            this.$router.push({ path: "/specialoper" });    
        },
        //스페셜 오퍼 상세 페이지 이동
        goDetail(itemNo) {
            this.$router.push({path: '/specialoper/package?itemNo=' + itemNo });
        }
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
  padding-right: 1.3%;
}

.card-border {
    border-color: #EEEEEE;
    border-width: 1px;
}
.card-border:hover {
    border-color: #EE792F;
    border-width: 1px;
}

/* ant-carousel */


/*.slick-normal {
    background-color: orange;
}

.slick-active > a > div {
    background-color: #EE792F;
}

.ant-carousel >>> .slick-thumb {
  bottom: -17px;
}

.ant-carousel >>> .slick-thumb li {
  width: 12px;
} */
</style>
