<template>
<div>
    <!-- 고객지원 - 공지사항 -->
    <!-- web -->
    <!-- howard-contents -->
    <div class="hidden lg:block w-full">
        <div class="w-full flex justify-center">
          <div class="container-box">
              <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                  <div class="">
                      <span class="howard-main-title">공지사항</span>
                  </div>
                  <div class="mt-[24px]">
                      <p class="howard-sub-title">
                          하워드존슨 인천 에어포트의 최신 소식을 확인해주세요.
                      </p>
                  </div>
              </div>

              <!-- drop down -->
              <div v-if="isNoticeSelect" class="w-full flex justify-end items-center pb-4">
                <div class="flex justify-center">
                  <!-- py-1.5 -->
                  <div class="w-[328px] h-[32px]">
                          <select @change="noticeSelect($event)" class="appearance-none
                            block
                            w-full
                            px-3
                            text-base
                            border-[1px]
                            howard-board-card-border-color
                            rounded
                            m-0
                          text-[#212121]">
                              <!-- <option value="0">선택</option>
                              <option value="1">전체</option>
                              <option value="2">공지</option>
                              <option value="3">테스트</option> -->
                              <option value="0">선택</option>
                              <option value="1" :selected="isNoticeType1Select">전체</option>
                              <option value="2" :selected="isNoticeType2Select">공지</option>
                              <option value="3" :selected="isNoticeType3Select">일반</option>
                          </select>
                      </div>
                    </div>
              </div>
              <div v-else class="w-full flex justify-end items-center pb-4">
                    <div class="flex justify-center">
                      <div class="w-[328px] h-[32px]">
                          <select @change="noticeSelect($event)" class="appearance-none
                            block
                            w-full
                            px-3
                            text-base
                            border-[1px]
                            howard-board-card-border-color
                            rounded
                            m-0
                          text-[#BDBDBD]">
                              <option value="0">선택</option>
                              <option value="1" :selected="isNoticeType1Select">전체</option>
                              <option value="2" :selected="isNoticeType2Select">공지</option>
                              <option value="3" :selected="isNoticeType3Select">일반</option>
                          </select>
                      </div>
                    </div>
              </div>
              <div class="w-full pb-[80px]">
                  <!-- 테이블 헤더 -->
                  <div class="flex justify-center items-center text-[#212121]">
                    <div
                      class="
                        basis-[7%]
                        h-[56px]
                        bg-[#FFF6F2]
                        flex
                        justify-center
                        items-center
                        border-y
                        border-r
                        howard-board-card-border-color
                      "
                    >
                      <span class="noto-sans-bold text-[14px]">No</span>
                    </div>
                    <div
                      class="
                        basis-[13%]
                        h-[56px]
                        bg-[#FFF6F2]
                        flex
                        justify-center
                        items-center
                        border-y
                        border-r
                        howard-board-card-border-color
                      "
                    >
                      <span class="noto-sans-bold text-[14px]">구분</span>
                    </div>
                    <div
                      class="
                        basis-[55%]
                        h-[56px]
                        bg-[#FFF6F2]
                        flex
                        justify-center
                        items-center
                        border-y
                        border-r
                        howard-board-card-border-color
                      "
                    >
                      <span class="noto-sans-bold text-[14px]">제목</span>
                    </div>
                    <div
                      class="
                        basis-[25%]
                        h-[56px]
                        bg-[#FFF6F2]
                        flex
                        justify-center
                        items-center
                        border-y
                        howard-board-card-border-color
                      "
                    >
                      <span class="noto-sans-bold text-[14px]">등록일</span>
                    </div>
                  </div>
                  <!-- body -->
                  <div
                    v-for="(item, index) in pageList"
                    :key="index"
                    class="flex justify-center items-center text-[14px]"
                  >
                    <div
                      class="
                        basis-[7%]
                        h-[56px]
                        flex
                        justify-center
                        items-center
                        border-b
                        border-r
                        howard-board-card-border-color
                      "
                    >
                      <span class="">
                        {{ item.idx }}
                      </span>
                    </div>
                    <div
                      class="
                        basis-[13%]
                        h-[56px]
                        flex
                        justify-center
                        items-center
                        border-b
                        border-r
                        howard-board-card-border-color
                      "
                    >
                      <span v-if="item.divType == 2" class="text-[#EE792F]">
                        {{ item.div }}
                      </span>
                      <span v-else>
                        {{ item.div }}
                      </span>
                      <!-- <span class="text-[#EE792F]">
                        {{ item.div }}
                      </span> -->
                    </div>
                    <div
                      class="
                        basis-[55%]
                        h-[56px]
                        flex
                        justify-start
                        items-center
                        border-b  
                        border-r
                        howard-board-card-border-color
                        pl-4
                      "
                    >
                      <span class="tracking-[-0.7px] text-[#212121] hover:cursor-pointer" @click="goDetail(selectNoticeType, currentPage, item.idx)">
                        <!-- <NuxtLink to="/customersupport/notice/detail" class="hover:cursor-pointer hover:text-[#212121]">{{ item.title }}</NuxtLink> -->
                          {{ item.title }}
                      </span>
                    </div>
                    <div
                      class="
                        basis-[25%]
                        h-[56px]
                        flex
                        justify-center
                        items-center
                        border-b
                        howard-board-card-border-color
                      "
                    >
                      <span class="text-[#212121]">
                        {{ item.regDate }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- 페이지 네이션 -->
                <div class="w-full flex justify-center items-center pb-[120px]">
                    <nav aria-label="Page navigation example">
                        <ul class="inline-flex items-center -space-x-px">
                            <!-- 이전 버튼 -->
                            <li>
                                <span v-if="this.isFirstPage" class="bg-gray-500 block py-2 px-[10px] leading-tight text-white border-[1px] border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 hover:cursor-default">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <span v-else ref="prevMoveBtn" @click="previousPageClick" class="block py-2 px-[10px] ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                            </li>
                            <!-- 페이지 -->
                            <li v-for="(item, index) in pages" :key="index">
                                <span v-if="currentPage == item" @click="pageClick(item)" aria-current="page" class="z-10 py-2 px-3 leading-tight text-white bg-[#FF874E] border-[1px] border-[#FF874E] hover:bg-[#FF9552] dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{item}}</span>
                                <span v-else @click="pageClick(item)" aria-current="page" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-800 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer">{{item}}</span>
                            </li>
                            <!-- 다음 버튼 -->
                            <li>
                                <span v-if="!isLastPage" ref="nextMoveBtn" @click="nextPageClick" class="block py-2 px-[10px] ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <span v-else class="bg-gray-500 block py-2 px-[10px] leading-tight text-white border-[1px] border-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 hover:cursor-default">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
          </div>
      </div>
    </div>
    <!-- mobilie -->
    <div class="lg:hidden w-full">
        <div class="w-full px-4">
            <!-- 메인 타이틀 -->
            <div class="w-full pt-8 pb-6">
                <div class="w-full flex justify-center mb-2">
                    <span class="howard-main-title-mobile">
                        공지사항
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        하워드존슨 인천 에어포트의 최신 소식을 확인해주세요.
                    </p>
                </div>
            </div>
            <!-- drop down -->
            <div v-if="isNoticeSelect" class="w-full flex justify-end items-center mb-4">
                  <div class="w-full flex justify-center">
                    <div id="noticeMobile" class="w-full">
                        <select @change="noticeSelect($event)" class="appearance-none
                            block
                            w-full
                            px-3
                            text-base
                            border-[1px]
                            howard-board-card-border-color
                            rounded
                            m-0
                          text-[#212121]
                            text-[12px]">
                              <!-- <option value="0">선택</option>
                              <option value="1">전체</option>
                              <option value="2">공지</option>
                              <option value="3">테스트</option> -->
                              <option value="0">선택</option>
                              <option value="1" :selected="isNoticeType1Select">전체</option>
                              <option value="2" :selected="isNoticeType2Select">공지</option>
                              <option value="3" :selected="isNoticeType3Select">일반</option>
                        </select>
                    </div>
                  </div>
            </div>
            <div v-else class="w-full flex justify-end items-center mb-4">
                  <div class="w-full flex justify-center">
                    <div id="noticeMobile" class="w-full">
                        <select @change="noticeSelect($event)" class="appearance-none
                            block
                            w-full
                            px-3
                            text-base
                            border-[1px]
                            howard-board-card-border-color
                            rounded
                            m-0
                          text-[#BDBDBD]
                            text-[12px]">
                              <option value="0">선택</option>
                              <option value="1" :selected="isNoticeType1Select">전체</option>
                              <option value="2" :selected="isNoticeType2Select">공지</option>
                              <option value="3" :selected="isNoticeType3Select">일반</option>
                        </select>
                    </div>
                  </div>
            </div>
            <!-- 공지사항 리스트 -->
            <div class="w-full border-t howard-board-card-border-color mb-6">
                <div v-for="(item, index) in pageList" :key="index" class="w-full py-2 flex flex-col border-b howard-board-card-border-color space-y-[4px] hover:cursor-pointer" 
                  @click="goDetail(selectNoticeType, currentPage, item.idx)">
                    <div class="flex items-center">
                      <span class="text-[8px] text-white howard-bg-color rounded py-[2px] px-[10px]">
                        <!-- 공지 -->
                        {{item.div}}
                      </span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-[12px] text-[#212121]">
                        {{item.title}}
                      </span>
                      <img src="~/assets/images/customersupport/notice/arrow_right_line_grey_24.svg" alt="">
                    </div>
                    <div class="flex items-center">
                      <span class="text-[10px] text-[#BDBDBD]">
                        {{item.regDate}}
                      </span>
                    </div>
              </div>
            </div>
            <!-- 페이지네이션 -->
            <div class="w-full flex justify-center mb-8">
                <div class="w-[216px] flex justify-between items-center">

                  <div v-if="this.isFirstPage">
                      <!-- 첫번째 페이지입니다. -->
                      <img src="~/assets/images/arrow_left_white_48.svg" alt="" class="w-[36px] h-[36px] opacity-50 invisible">
                  </div>
                  <div v-else>
                      <img ref="prevMoveMobileBtn" @click="previousPageClick" src="~/assets/images/arrow_left_white_48.svg" alt="" class="w-[36px] h-[36px] hover:cursor-pointer">
                  </div>

                  <span class="text-[16px] font-bold">
                     {{currentPage}} / {{totalPageCnt}}
                  </span>
                  
                  <div v-if="isLastPage">
                      <!-- 마지막 페이지입니다. -->
                      <img src="~/assets/images/arrow_right_white_48.svg" alt="" class="w-[36px] h-[36px] opacity-50 invisible">
                  </div>
                  <div v-else>
                      <img ref="nextMoveMobileBtn" @click="nextPageClick" src="~/assets/images/arrow_right_white_48.svg" alt="" class="w-[36px] h-[36px] hover:cursor-pointer">
                  </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import TopMenuComp from "@/components/TopMenu.vue";
import FooterComp from "@/components/Footer.vue";

export default {
  components: {
    TopMenuComp,
    FooterComp,
  },
  data() {
    return {
      list: [],
      selectList: [],
      pageList: [],
      isNoticeSelect: false,
      //총 게시물 수
      totalContentsCnt: 0,
      //한 페이지 개수
      onePageCnt: 0,
      //총 페이지
      totalPageCnt: 0 ,
      //현재 페이지
      currentPage: 0,

      isFirstPage: true, //첫번째 페이지인지 체크
      isLastPage: false, //마지막 페이지인지 체크

      pages: null, //현재 화면에 보여질 페이지 목록,

      selectNoticeType: 0,

      targetPage: 0,
      targetNoticeType: -1,

      isNoticeType1Select: false,
      isNoticeType2Select: false,
      isNoticeType3Select: false,
    }
  },
  created() {
    if(this.$route.query.page != null && this.$route.query.page != undefined) {
        this.targetPage = parseInt(this.$route.query.page);

        if(this.targetPage > 5) { //상세에서 목록 눌렀을때, page 시작 대상 번호가 6이상일때 (첫번째 페이지에 없을때)
          this.isLastPage = false;
        }
    } else {
        this.targetPage = 1;
    }

    if(this.$route.query.noticeType != null && this.$route.query.noticeType != undefined) {
        this.targetNoticeType = this.$route.query.noticeType;

        if(this.targetNoticeType == 1) {
            this.isNoticeType1Select = true;
            this.isNoticeType2Select = false;
            this.isNoticeType3Select = false;

            this.selectNoticeType = 1;
        } else if(this.targetNoticeType == 2) {
            this.isNoticeType1Select = false;
            this.isNoticeType2Select = true;
            this.isNoticeType3Select = false;

            this.selectNoticeType = 2;
        } else if(this.targetNoticeType == 3) {
            this.isNoticeType1Select = false;
            this.isNoticeType2Select = false;
            this.isNoticeType3Select = true;

            this.selectNoticeType = 3;
        }
    } else {
        this.targetNoticeType = 0;
        this.selectNoticeType = 0;
    }

    this.list = [
      { 
        page: 0, idx: 5, divType:2, div: "공지", title: "프론트 데스크 통합 운영 안내", regDate: "2022.07.18",
        content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객님들께 안내 말씀 드립니다.\n현재 하워드 존슨과 데이즈 호텔&스위트의 프론트 데스크가 통합 운영되고 있습니다.\n데이즈 호텔 & 스위트 인천공항 고객님들께서는 체크인 시에 하워드 존슨 인천공항\n프론트 데스크(3층)로 방문해 주시길 부탁드립니다.\n감사합니다."
      },
      { 
        page: 0, idx: 4, divType:2, div: "공지", title: "일회용품 제공 제한 안내", regDate: "2022.07.18",
        content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객님들께 안내 말씀 드립니다. 정부의 자원 재활용법에 의해 2021년 1월 1일부터 일회용품 제공이 제한되었습니다. 이용에 참고 바랍니다.\n 일회용품 구매를 원하시는 고객님께서는 프론트 데스크에서 현장구매 가능합니다.\n감사합니다."
      },
      { 
        page: 0, idx: 3, divType:2, div: "공지", title: "공항 무료 셔틀 서비스 운행 잠정 중단 안내", regDate: "2022.07.18",
        content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객님들께 안내 말씀 드립니다.\nCovid-19로 인해 호텔에서 제공하는 공항 무료 셔틀 서비스 운행을 잠정 중단 하였습니다.\n고객님의 건강과 안전을 최우선으로 생각하며, 코로나19의 확산을 방지하고 예방하기 위하여 항상 노력하겠습니다.\n정부 지침에 따라 운영 정책이 지속적으로 변동 되오니, 보다 자세한 사항은 호텔에 문의 주시기 바랍니다.\n이용에 불편을 드려 죄송합니다."
      },
      { 
        page: 0, idx: 2, divType:2, div: "공지", title: "'디 아일랜드 세븐' 운영 잠정 중단 안내", regDate: "2022.07.18",
        content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객님들께 안내 말씀 드립니다.\n최근 Covid-19로 인하여 레저센터 '디 아일랜드 세븐(수영장, 사우나, 헬스클럽 등)'의 운영을 잠정 중단합니다.\n고객님의 건강과 안전을 최우선으로 생각하며, 코로나19의 확산을 방지하고 예방하기 위하여 항상 노력하겠습니다.\n정부 지침에 따라 운영 정책이 지속적으로 변동 되오니, 보다 자세한 사항은 호텔에 문의 주시기 바랍니다.\n감사합니다."
      },
      { 
        page: 0, idx: 1, divType:2, div: "공지", title: "반려동물 출입 불가 안내", regDate: "2022.07.18",
        content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객님들께 안내 말씀 드립니다.\n하워드 존슨과 데이즈 호텔 & 스위트 인천 에어포트 호텔은 애완동물의 출입 및 동반 투숙이 불가하오니 이용에 참고 부탁드립니다.\n감사합니다."
      },      
    ];

    // this.list = [
    //   { 
    //     page: 0, idx: 5, divType:2, div: "공지", title: "프론트 데스크 통합 운영 안내", regDate: "2022.07.18",
    //     content: "하워드 존슨 인천공항, 데이즈 호텔 & 스위트 인천공항 프론트 데스크는 통합 운영되어 하워드 존슨 인천공항의 프론트 데스크에서 운영되고 있습니다.\n\n데이즈 호텔 & 스위트 인천공항 고객님들께서는 체크인 시에 하워드 존슨 인천 공항 프론트 데스크로 방문해 주시길 부탁드립니다.\n\n감사합니다."
    //   },
    //   { 
    //     page: 0, idx: 4, divType:2, div: "공지", title: "1회용품 제공 제한 안내", regDate: "2022.07.18",
    //     content: "정부의 자원 재활용법에 의해 2021년 1월1일부터 1회 용품 제공이 제한됩니다. 구매를 원하실 경우, 프론트 데스크에서 구매 가능합니다."
    //   },
    //   { 
    //     page: 0, idx: 3, divType:2, div: "공지", title: "공항 무료 셔틀 서비스 운행 잠정 중단 안내", regDate: "2022.07.18",
    //     content: "Covid-19로 인해 저희 호텔에서 제공하는 공항 무료 셔틀 서비스 운행을 잠정 중단하였습니다. 이용에 불편을 드려 죄송합니다."
    //   },
    //   { 
    //     page: 0, idx: 2, divType:2, div: "공지", title: "'아일랜드 세븐' 운영 잠정 중단 안내", regDate: "2022.07.18",
    //     content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객 여러분께 감사의 말씀을 전해 드립니다.\n\nCovid-19로 인하여 2020년 2월25일부로 레저센터, '디 아일랜드 세븐(수영장, 사우나, 헬스클럽 등)의 운영을 잠정 중단합니다.\n\n감사합니다."
    //   },
    //   { 
    //     page: 0, idx: 1, divType:2, div: "공지", title: "반려동물 출입 불가 안내", regDate: "2022.07.18",
    //     content: "하워드존슨 / 데이즈호텔&스위트 인천에어포트 호텔 내 반려동물 출입이 불가하오니 참고하시기 바랍니다.\n\n감사합니다."
    //   },      
    // ];

    // let obj;
    // for(var i = 0; i < 75; i++) {
    //   obj = new Object();

    //   obj.page = 0;
    //   obj.idx = (i+6);
    //   obj.divType = 3;
    //   obj.div = "일반";
    //   obj.title = "제목" + (i+1) + " 입니다.";
    //   obj.content = "내용" + (i+1) + " 입니다.";
    //   obj.regDate = "2022.07.18";

    //   this.list.push(obj);
    // }

      if(this.targetNoticeType == 2) { //공지
        for(var i = 0; i < this.list.length; i++) {
          if(this.list[i].divType == 2) {
            this.selectList.push(this.list[i]);    
          }
        }

      } else if(this.targetNoticeType == 3) { //일반
        for(var i = 0; i < this.list.length; i++) {
          if(this.list[i].divType == 3) {
            this.selectList.push(this.list[i]);    
          }
        }
      } else {
          this.selectList = this.list;
      }

      //총 게시물 수
      this.totalContentsCnt = this.selectList.length;
      //한 페이지에 표시할 게시물 수 = 5
      this.onePageCnt = 10;
      //총 페이지 = 31 / 5 == 7
      this.totalPageCnt = this.totalContentsCnt / this.onePageCnt;
      //현재 페이지
      this.currentPage = 1;

      //총 페이지 설정
      if(!Number.isInteger(this.totalPageCnt)) {
        var arr = this.totalPageCnt.toString().split('.');
        this.totalPageCnt = parseInt(arr[0]) + 1;
      }

      if(this.totalPageCnt >= 5) { //게시물 5개 이상
        this.pages = [1,2,3,4,5];
      } else if(this.totalPageCnt == 0) { //게시물 없음
        this.pages = [1];
        this.isLastPage = true;
        if(this.targetPage > 5) { //상세에서 목록 눌렀을때, page 시작 대상 번호가 6이상일때 (첫번째 페이지에 없을때)
          this.isLastPage = false;
        }
      } else if(this.totalPageCnt < 5) { //게시물 5개 이하
        this.pages = [];
        //this.isLastPage = true;
        for(var i = 1; i <= this.totalPageCnt; i++) {
          this.pages.push(i);
        }
      }

      //list page 데이터 설정
      var insertPage = 1;
      var insertCount = 0;
      for(var i = 0; i < this.selectList.length; i++) {
        this.selectList[i].page = insertPage;
        insertCount = insertCount + 1;

        if(insertCount > 9){
          insertCount = 0;
          insertPage = insertPage + 1;
        }
      }

      //1페이지 pageList 데이터
      for(var i = 0; i < this.selectList.length; i++) {
        if(this.selectList[i].page == 1) {
          this.pageList.push(this.selectList[i]);
        }
      }
      //총 개시물수가 10개 이하이면
      if(this.selectList.length <= 10) {
        this.isFirstPage = true;
        this.isLastPage = true;
        if(this.targetPage > 5) { //상세에서 목록 눌렀을때, page 시작 대상 번호가 6이상일때 (첫번째 페이지에 없을때)
          this.isLastPage = false;
        }
      } else if(this.selectList.length > 10) { //10개 이상이면
        this.isFirstPage = true;
        this.isLastPage = false;
      }

      if(this.targetNoticeType == 1 || this.targetNoticeType == 2 || this.targetNoticeType == 3) { //(전체 or 공지 or 일반) 상세 페이지에서 목록으로 다시 왔을때
          this.isNoticeSelect = true;
          this.pageClick(this.targetPage);
      } else if(this.targetNoticeType == 0) { //(선택) 상세 페이지에서 목록으로 다시 왔을때
          this.pageClick(this.targetPage);
      }
      
  },
  mounted() {
      if(this.targetPage > 5) { //상세에서 목록 눌렀을때, page 시작 대상 번호가 6이상일때 (첫번째 페이지에 없을때)
          let clickCount = 0;
          //페이지 이동할 횟수
          clickCount = this.targetPage - 5;

          for(var i = 0; i < clickCount; i++) {
            this.$refs.prevMoveBtn.click();
          }
          
          for(var i = 0; i < clickCount; i++) {
            this.$refs.nextMoveBtn.click();
          }
      }

      this.targetPage = 1;
  },
  methods: {
    noticeSelect(event) {
      //console.log(event.target.value); 
      if(event.target.value != null && event.target.value != undefined && event.target.value != "0" && event.target.value != 0) {
          this.isNoticeSelect = true;
      } else {
          this.isNoticeSelect = false;
          this.selectNoticeType = 0;
      }

      if(this.isNoticeSelect) {
        //페이지 데이터 초기화
        for(var i = 0; i < this.list.length; i++) {
          this.list[i].page = 0;
        }

        //페이지 리스트 초기화
        this.pageList = [];

        //시작 페이지 초기화
        this.currentPage = 1;

        this.selectList = [];

        if(event.target.value == 1 || event.target.value == "1") { //전체
            this.selectNoticeType = 1;
            for(var j = 0; j < this.list.length; j++) {
              this.selectList.push(this.list[j]);
            }
        } else if(event.target.value == 2 || event.target.value == "2") { //공지
            this.selectNoticeType = 2;
            for(var j = 0; j < this.list.length; j++) {
              if(this.list[j].divType == 2) {
                this.selectList.push(this.list[j]);
              }
            }
        } else if(event.target.value == 3 || event.target.value == "3") { //일반
            this.selectNoticeType = 3;
            for(var j = 0; j < this.list.length; j++) {
              if(this.list[j].divType == 3) {
                this.selectList.push(this.list[j]);
              }
            }
        }

        //총 게시물 수
        this.totalContentsCnt = this.selectList.length;
        //한 페이지에 표시할 게시물 수 = 5
        this.onePageCnt = 10;
        //총 페이지 = 31 / 5 == 7
        this.totalPageCnt = this.totalContentsCnt / this.onePageCnt;

        //총 페이지 설정
        if(!Number.isInteger(this.totalPageCnt)) {
          var arr = this.totalPageCnt.toString().split('.');
          this.totalPageCnt = parseInt(arr[0]) + 1;
        }

        if(this.totalPageCnt >= 5) { //게시물 5개 이상
          this.pages = [1,2,3,4,5];
        } else if(this.totalPageCnt == 0) { //게시물 없음
          this.pages = [1];
          this.isLastPage = true;
        } else if(this.totalPageCnt < 5) { //게시물 5개 이하
          this.pages = [];

          for(var i = 1; i <= this.totalPageCnt; i++) {
            this.pages.push(i);
          }
        }

        //list page 데이터 설정
        var insertPage = 1;
        var insertCount = 0;
        for(var i = 0; i < this.selectList.length; i++) {
          this.selectList[i].page = insertPage;
          insertCount = insertCount + 1;

          if(insertCount > 9){
            insertCount = 0;
            insertPage = insertPage + 1;
          }
        }

        //총 개시물수가 10개 이하이면
        if(this.selectList.length <= 10) {
          this.isFirstPage = true;
          this.isLastPage = true;
          if(this.targetPage > 5) { //상세에서 목록 눌렀을때, page 시작 대상 번호가 6이상일때 (첫번째 페이지에 없을때)
          this.isLastPage = false;
        }
        } else if(this.selectList.length > 10) { //10개 이상이면
          this.isFirstPage = true;
          this.isLastPage = false;
        }

        this.getList();
      }
    },
    //페이지 리스트 조회
    getList() {
      this.pageList = [];

      for(var i = 0; i < this.selectList.length; i++) {
        if(this.selectList[i].page == this.currentPage) {
          this.pageList.push(this.selectList[i]);
        }
      }
    }, 

    //이전 페이지 클릭
    previousPageClick() {
      if(this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
      }

      //화살표 눌렀을때
      //현재 페이지의 첫번째 쪽수일때(5, 10, 15, 20... 5의배수)
      if((this.currentPage) % 5 == 0) {
        var endIdx = this.currentPage;
        var startIdx = endIdx - 4;
        this.pages = [];
        for(var i = startIdx; i <= endIdx; i++) {
          if(i <= this.totalPageCnt) {
            this.pages.push(i);
          }
        }
      }

      if(this.currentPage > 1) {
        this.isFirstPage = false;
      } else if(this.currentPage == 1) {
        this.isFirstPage = true;
      }

      if(this.currentPage == this.totalPageCnt) {
        this.isLastPage = true;
      } else if(this.currentPage < this.totalPageCnt && this.currentPage > 1) {
        this.isLastPage = false;
      }

      if(this.totalPageCnt > 1) {
        if(this.currentPage == 1) {
          this.isLastPage = false;
        }
      }

      //조회
      //this.getArticles();
      this.getList();
    },

    //다음 페이지 클릭
    nextPageClick() {
      if(this.currentPage < this.totalPageCnt) {
        this.currentPage = this.currentPage + 1; //현재 페이지가 마지막 페이지가 아니라면 현재 페이지 + 1
        this.isFirstPage = false;
      }
      //화살표 눌렀을때
      //현재 페이지의 마지막 쪽수일때(5, 10, 15, 20... 5의배수)
      if((this.currentPage - 1) % 5 == 0) {
        var startIdx = this.currentPage;
        var endIdx = startIdx + 4;
        this.pages = [];
        for(var i = startIdx; i <= endIdx; i++) {
          if(i <= this.totalPageCnt) {
            this.pages.push(i);
          }
        }
      }

      if(this.currentPage == this.totalPageCnt) {
        this.isFirstPage = false;
        this.isLastPage = true;
      }
      
      //조회
      this.getList();
    },

    //페이지 클릭
    pageClick(pageNo) {
      this.currentPage = pageNo

      if(this.currentPage > 1) {
        this.isFirstPage = false;
      } else if(this.currentPage == 1) {
        this.isFirstPage = true;
      }

      if(this.currentPage == this.totalPageCnt) {
        this.isLastPage = true;
        if(this.targetPage > 5) { //상세에서 목록 눌렀을때, page 시작 대상 번호가 6이상일때 (첫번째 페이지에 없을때)
          this.isLastPage = false;
        }
      } else if(this.currentPage < this.totalPageCnt && this.currentPage > 1) {
        this.isLastPage = false;
      }

      if(this.totalPageCnt > 1) {
        if(this.currentPage == 1) {
          this.isLastPage = false;
        }
      }

      //조회
      this.getList();
    },

    goDetail(selectNoticeType, currentPage, idx) {
        //this.$router.push({path: '/customersupport/notice/detail', query: { id: idx }}); //공지사항 상세
        this.$router.push({path: '/customersupport/notice/detail?id=' + idx + '&noticeType=' + selectNoticeType + '&page=' + currentPage }); //공지사항 상세
    },
  },
};
</script>
<style scoped>
/* @font-face {
    font-family: "NotoSansBold";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}
.noto-sans-bold {
    font-family: "NotoSansBold";
} */
select {
  appearance:none;
	-webkit-appearance:none;
	-moz-appearance:none;
	-ms-appearance:none;
    background-position: calc(100% - 12px) center !important;
    background: url("~/assets/images/arrow_down_line_grey_24.svg") no-repeat;
    padding: 8px 32px 8px 16px;

  /* appearance: none; */
  /* background: url("~/assets/images/arrow_down_line_grey_24.svg") no-repeat right 9px center; */
}

select option:first-child{
  color: #BDBDBD;
  /* color: red; */
  /* background-color: red; */
}

select option { 
  color: #212121;
}


#noticeMobile select {
  appearance:none;
	-webkit-appearance:none;
	-moz-appearance:none;
	-ms-appearance:none;
    background-position: calc(100% - 12px) center !important;
    background: url("~/assets/images/arrow_down_line_grey_24.svg") no-repeat;
    padding: 8px 32px 8px 16px;
    font-size: 12px;
    padding: 6px 32px 6px 16px;
}

#noticeMobile select option:first-child{
  color: #BDBDBD;
  font-size: 12px;
}

#noticeMobile select option { 
  color: #212121;
  font-size: 12px;
}
</style>
