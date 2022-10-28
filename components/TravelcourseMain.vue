<template>
  <!-- 주변 여행코스 -->
  <div>
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
      <div class="container pt-[120px] pb-[80px]">
        <div class="flex flex-col justify-items-center items-center">
          <div>
            <span class="howard-main-title">주변 여행코스</span>
          </div>
          <div class="mt-[24px]">
            <p class="howard-sub-title">
              아름다운 인천의 다양한 명소와 즐길거리 가득한 여행코스를
              소개합니다.
            </p>
          </div>
        </div>
      </div>
      <div class="min-w-[1372px] w-full pb-[120px]">
        <div class="flex flex-col items-center">
          <div class="flex flex-row justify-center items-center">
            <div class="flex flex-row justify-center items-center space-x-3">
              <span class="" @click="prevTcCards(currentTcPage)">
                <img
                  src="../assets/images/arrow_left_white_48_orange.svg"
                  alt=""
                  class="cursor-pointer"
                />
              </span>
              <div
                v-for="(item, index) in currentTcDatas"
                :key="index"
                class="grow"
              >
                <div
                  @click="goDetail"
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
                      <span
                        class="noto-sans-bold text-[18px] tracking-[-0.9px]"
                      >
                        {{ item.title }}
                      </span>
                    </div>
                    <p class="text-[#757575] text-[14px] tracking-[-0.7px]">
                      {{ item.content }}
                    </p>
                    <p
                      class="
                        text-[#BDBDBD] text-[12px]
                        mt-[22px]
                        tracking-[-0.6px]
                      "
                    >
                      기간: 2022.03.04 ~ 2022.08.27
                    </p>
                  </div>
                </div>
              </div>
              <span class="" @click="nextTcCards(currentTcPage)">
                <img
                  src="../assets/images/arrow_right_white_48_orange.svg"
                  alt=""
                  class="cursor-pointer"
                />
              </span>
            </div>
          </div>
          <div class="mt-[80px]">
            <button @click="goTravelcourse" class="howard-btn">더보기</button>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="howard-contents lg:hidden w-full">
      <div class="w-full pt-8 pb-6">
        <div class="w-full flex justify-center items-center mb-2">
          <span class="howard-main-title-mobile">주변 여행코스</span>
        </div>
        <div class="w-full flex justify-center items-center">
          <div class="flex flex-col items-center space-y-[4px]">
            <p class="howard-sub-title-mobile">
              아름다운 인천의 다양한 명소와 즐길거리 가득한 여행코스를
              소개합니다.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full pb-6 px-[12px]">
        <!-- 캐러셀 슬라이드 -->
        <VueSlickCarousel v-bind="carouselSettings">
          <div
            v-for="(item, index) in travelcourseDatas"
            :key="index"
            class="w-full px-[4px]"
          >
            <div class="w-full flex justify-center items-center">
              <div
                @click="goDetail"
                class="w-full bg-white overflow-hidden border border-[#EEEEEE]"
              >
                <!-- <img class="w-full h-[180px]" :src="item.imgsrc" alt="" /> -->
                <img class="w-full h-full" :src="item.imgsrc" alt="" />
                <div class="px-2 py-3">
                  <div class="mb-1">
                    <span
                      class="noto-sans-bold text-[14px] tracking-[-0.7px]"
                      >{{ item.title }}</span
                    >
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
        <!-- <div class="w-full flex justify-center items-center">
                <a-carousel arrows dots-class="slick-dots slick-thumb" class="w-full">
                    <a slot="customPaging" slot-scope="props">
                        <div class="h-2 w-2 rounded-full slick-normal"></div>
                    </a>
                    <div v-for="(item, index) in travelcourseDatas" :key="index" class="w-full">
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
                </a-carousel>
            </div> -->
      </div>

      <div class="w-full pt-[30px] pb-[38px]">
        <div class="w-full flex justify-center items-center">
          <button @click="goTravelcourse" class="howard-btn-mobile">
            더보기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

type TravelCourse = {
  page: number;
  idx: number;
  title: string;
  content: string;
  imgsrc: string;
};

export default Vue.extend({
  data() {
    return {
      //주변 여행코스
      travelcourseDatas: [] as TravelCourse[],
      currentTcPage: 1,
      currentTcDatas: [] as TravelCourse[],

      //캐러셀 셋팅
      carouselSettings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        //"edgeFriction": 0.35,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "10%",
        slidesToShow: 5,
        //반응형 너비에 따른 배치 설정
        responsive: [
          {
            breakpoint: 1018,
            settings: {
              dots: true,
              dotsClass: "slick-dots custom-dot-class",
              infinite: true,
              speed: 500,
              slidesToScroll: 1,
              arrows: false,
              centerMode: true,
              centerPadding: "10%",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 779,
            settings: {
              dots: true,
              dotsClass: "slick-dots custom-dot-class",
              infinite: true,
              speed: 500,
              slidesToScroll: 1,
              arrows: false,
              centerMode: true,
              centerPadding: "4%",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 540,
            settings: {
              dots: true,
              dotsClass: "slick-dots custom-dot-class",
              infinite: true,
              speed: 500,
              slidesToScroll: 1,
              arrows: false,
              centerMode: true,
              centerPadding: "16%",
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  components: { VueSlickCarousel },
  created() {
    //주변 여행코스
    this.travelcourseDatas = [
      {
        page: 1,
        idx: 1,
        title: "인생샷 명소",
        content: "연인 또는 친구와 산책하며 인생샷 남길 수 있는 다리",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 1,
        idx: 2,
        title: "인생샷 명소",
        content: "연인 또는 친구와 산책하며 인생샷 남길 수 있는 다리",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 1,
        idx: 3,
        title: "인생샷 명소",
        content: "연인 또는 친구와 산책하며 인생샷 남길 수 있는 다리",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 2,
        idx: 4,
        title: "해넘이가 아름다운 노을 명소",
        content: "해넘이를 보며 힐링 여행",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 2,
        idx: 5,
        title: "해넘이가 아름다운 노을 명소",
        content: "해넘이를 보며 힐링 여행",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 2,
        idx: 6,
        title: "해넘이가 아름다운 노을 명소",
        content: "해넘이를 보며 힐링 여행",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 3,
        idx: 7,
        title: "나랑 별보러 가지 않을래",
        content: "은하수를 볼 수 있는 인천의 섬",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 3,
        idx: 8,
        title: "나랑 별보러 가지 않을래?",
        content: "은하수를 볼 수 있는 인천의 섬",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
      {
        page: 3,
        idx: 9,
        title: "나랑 별보러 가지 않을래?",
        content: "은하수를 볼 수 있는 인천의 섬",
        imgsrc: require("../assets/images/customersupport/travelcourse/01.jpg"),
      },
    ];
    //주변 여행코스 현재 페이지 데이터 설정
    this.travelcourseDatas.forEach((element:TravelCourse) => {
      if (element.page == this.currentTcPage) {
        this.currentTcDatas.push(element);
      }
    });
  },
  methods: {
    //주변 여행코스 이전 카드목록 조회
    prevTcCards(cTcPage: number) {
      var targetPage = cTcPage - 1;
      if (targetPage > 0) {
        this.currentTcPage = targetPage;
        this.currentTcDatas = [];
        this.travelcourseDatas.forEach((element) => {
          if (element.page == targetPage) {
            this.currentTcDatas.push(element);
          }
        });
      }
    },

    //주변 여행코스 다음 카드목록 조회
    nextTcCards(cTcPage: number) {
      var targetPage = cTcPage + 1;
      if (targetPage < 4 && targetPage > 0) {
        this.currentTcPage = targetPage;
        this.currentTcDatas = [];
        this.travelcourseDatas.forEach((element) => {
          if (element.page == targetPage) {
            this.currentTcDatas.push(element);
          }
        });
      }
    },

    //주변 여행코스 페이지 이동
    goTravelcourse() {
      this.$router.push({ path: "/customersupport/travelcourse" });
    },
    //주변 여행코스 상세 페이지 이동
    goDetail() {
      this.$router.push({ path: "/customersupport/travelcourse/detail" });
    },
  },
});
</script>

<style>
@font-face {
  font-family: "NotoSansBold";
  src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf)
    format("truetype");
}
@font-face {
  font-family: "NotoSansRegular";
  src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf)
    format("truetype");
}
@font-face {
  font-family: "NotoSansLight";
  src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Light.otf)
    format("truetype");
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

.card-border {
  border-color: #eeeeee;
  border-width: 1px;
}
.card-border:hover {
  border-color: #ee792f;
  border-width: 1px;
}

.custom-dot-class > li {
  width: 5px;
}

.slick-dots li.slick-active button:before {
  color: #ee792f;
  opacity: 1;
}

.slick-dots li button:before {
  /* color: orange; */
  color: #ee792f;
  opacity: 0.5;
  width: 0px;
  height: 0px;
}
.slick-dots {
  padding-right: 1.3%;
}

/* .slick-normal {
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
