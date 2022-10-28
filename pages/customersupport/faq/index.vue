<template>
<div>
    <!-- 고객지원 - FAQ -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[32px]">
                    <div class="text-[36px] text-[#000000] font-black">
                        
                        <span class="howard-main-title">FAQ</span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            자주 하는 질문과 답변을 확인할 수 있습니다.
                        </p>
                    </div>
                </div>      
                <!-- drop down -->
              <div v-if="isNoticeSelect" class="w-full flex justify-end items-center pb-4">
                <div id="faq" class="flex justify-center">
                  <!-- py-1.5 -->
                  <!-- aria-label="Default select example" -->
                  <!-- focus:border-[1px] -->
                  <!-- focus:bg-white focus:border-[#EE792F] focus:outline-none -->
                  <!-- bg-clip-padding bg-no-repeat -->
                  <!-- border border-solid -->
                  <!-- transition -->
                    <!-- ease-in-out -->
                    <!-- form-select -->
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
                              <option value="2">One</option>
                              <option value="3">Two</option>
                              <option value="4">Three</option> -->
                              <option value="0">선택</option>
                              <option value="1">전체</option>
                              <option value="2">객실/예약</option>
                              <option value="3">다이닝</option>
                              <option value="4">부대시설</option>
                              <option value="5">기타</option>
                          </select>
                      </div>
                    </div>
              </div>
              <div v-else class="w-full flex justify-end items-center pb-4">
                    <div id="faq" class="flex justify-center">
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
                              <option value="1">전체</option>
                              <option value="2">객실/예약</option>
                              <option value="3">다이닝</option>
                              <option value="4">부대시설</option>
                              <option value="5">기타</option>
                          </select>
                      </div>
                    </div>
              </div>
                <!-- FAQ -->
                <!-- <div id="web" class="w-full border-t border-[#d9d9d9] mb-[80px]"> -->
                <div id="web" class="w-full border-t howard-board-card-border-color mb-[80px]">
                    <a-collapse :bordered="false" expand-icon-position="right" class="w-full">
                        <a-collapse-panel v-for="(item, index) in pageList"  :key="index" header="" class="w-full" :show-arrow="false">
                            <div slot="extra" class="w-full flex">
                                <div class="basis-[20%] catogory-div flex justify-center">
                                    <span class="text-[14px]">
                                        {{item.div}}
                                    </span>
                                </div>
                                 <span class="basis-[70%] text-[14px]">
                                    {{item.title}}
                                 </span>
                                 <div class="basis-[10%] arrow-div flex justify-end items-center pr-4">
                                    <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="" />
                                 </div>
                            </div>
                            <p class="text-[14px]" v-html="getContentText(item.content)">
                                <!-- {{item.content}} -->
                            </p>
                        </a-collapse-panel>   
                    </a-collapse>
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
                                <span v-else @click="previousPageClick" class="block py-2 px-[10px] ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer">
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
                                <span v-if="!isLastPage" @click="nextPageClick" class="block py-2 px-[10px] ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer">
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
    <div class="howard-contents lg:hidden w-full">
        <div class="w-full px-4">
            <!-- 메인 타이틀 -->
            <div class="w-full pt-8 pb-6">
                <div class="w-full flex justify-center mb-2">
                    <span class="howard-main-title-mobile">
                        FAQ
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        자주 하는 질문과 답변을 확인할 수 있습니다.
                    </p>
                </div>
            </div>
            <!-- drop down -->
            <div v-if="isNoticeSelect" class="w-full flex justify-end items-center pb-4">
                <div id="faqMobile" class="flex justify-center w-full">
                  <!-- py-1.5 -->
                  <div class="w-full">
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
                              <option value="2">One</option>
                              <option value="3">Two</option>
                              <option value="4">Three</option> -->
                              <option value="0">선택</option>
                              <option value="1">전체</option>
                              <option value="2">객실/예약</option>
                              <option value="3">다이닝</option>
                              <option value="4">부대시설</option>
                              <option value="5">기타</option>
                          </select>
                      </div>
                    </div>
              </div>
              <div v-else class="w-full flex justify-end items-center pb-4">
                    <div id="faqMobile" class="flex justify-center w-full">
                      <div class="w-full">
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
                              <option value="1">전체</option>
                              <option value="2">객실/예약</option>
                              <option value="3">다이닝</option>
                              <option value="4">부대시설</option>
                              <option value="5">기타</option>
                          </select>
                      </div>
                    </div>
              </div>
            <!-- FAQ -->
            <div id="mobile" class="w-full mb-6 border-t border-[#eeeeee]">
                <a-collapse :bordered="false" expand-icon-position="right">
                    <a-collapse-panel v-for="(item, index) in pageList" :key="index" header="" class="" :show-arrow="false">
                        <div slot="extra" class="w-full">
                            <div class="w-full flex">
                                <div class="basis-[90%] w-full flex flex-col">
                                    <!-- 내용 -->
                                    <div class="w-full">
                                        <span class="text-[8px] tracking-[-0.4px] py-[2px] px-2 border-[1px] rounded border-[#EE792F] bg-[#EE792F] text-white">
                                            {{item.div}}
                                        </span>
                                    </div>
                                    <div class="w-full">
                                        <span id="mobileQuestion" class="text-[12px] tracking-[-0.6px]">
                                            {{item.title}}
                                        </span>
                                    </div>
                                </div>
                                <div class="basis-[10%] w-full flex justify-end items-center">
                                    <!-- arrow -->
                                    <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="" />
                                </div>
                            </div>
                        </div>
                        <p class="text-[12px] noto-sans-light" v-html="getContentText(item.content)">
                          <!-- {{item.content}} -->
                        </p>
                    </a-collapse-panel> 
                </a-collapse>
            </div>
            <!-- <div id="mobile" class="w-full mb-6 border-t border-[#eeeeee]">
                <a-collapse :bordered="false" expand-icon-position="right">
                    <a-collapse-panel v-for="(item, index) in list" :key="index" :header="item.questions" class="" :show-arrow="false">
                            <div slot="extra">
                                <div class="w-full flex justify-between items-center">
                                    <span class="border-2 border-[#EE792F] rounded bg-[#EE792F] text-white text-[12px] px-1 py-[0px]">
                                        {{item.category}}
                                    </span>
                                    <div class="relative w-[24px]">
                                        <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="absolute top-0 left-0" />
                                    </div>
                                </div>
                            </div>
                        <p>{{item.answer}}</p>
                    </a-collapse-panel> 
                </a-collapse>
            </div> -->
            
            <!-- 페이지네이션 -->
            <div class="w-full flex justify-center mb-8">
                <div class="w-[216px] flex justify-between items-center">
                  <div v-if="this.isFirstPage">
                      <!-- 첫번째 페이지입니다. -->
                      <img @click="previousPageClick" src="~/assets/images/arrow_left_white_48.svg" alt="" class="w-[36px] h-[36px] invisible">
                  </div>
                  <div v-else>
                      <img @click="previousPageClick" src="~/assets/images/arrow_left_white_48.svg" alt="" class="w-[36px] h-[36px] hover:cursor-pointer">
                  </div>

                  <span class="text-[16px] font-bold">
                     {{currentPage}} / {{totalPageCnt}}
                  </span>
                  
                  <div v-if="isLastPage">
                      <!-- 마지막 페이지입니다. -->
                      <img @click="nextPageClick" src="~/assets/images/arrow_right_white_48.svg" alt="" class="w-[36px] h-[36px] invisible">
                  </div>
                  <div v-else>
                      <img @click="nextPageClick" src="~/assets/images/arrow_right_white_48.svg" alt="" class="w-[36px] h-[36px] hover:cursor-pointer">
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        list: [],
        pageList: [],
        selectList: [],
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
        pages: null, //현재 화면에 보여질 페이지 목록
        isNoticeSelect: false,

        selectNoticeType: 0,
      }
  },
  created() {
    this.list = [
      {
        page: 0, idx: 1, divType: 2, div: "객실/예약", title: "[예약] 체크인 및 체크아웃 시간이 궁금합니다.", regDate: "2022.07.18",
        content: "- 체크인 시간: 15:00\n- 체크아웃 시간:  11:00"
      },
      {
        page: 0, idx: 2, divType: 2, div: "객실/예약", title: "[예약] 체크인 및 체크아웃 시간 조정이 가능한가요?", regDate: "2022.07.18",
        content: "네, 공식 체크인 시각보다 먼저 체크인하시거나 체크아웃 시간을 연장하는 것은 가능하지만 시간당 10,000원의 추가요금이 부과됩니다.\n\n얼리 체크인 가능시간: 09:00 ~ 15:00 / 시간당 10,000원 부과되며, 단 09:00 이전 체크인 시 1박 요금이 부과됩니다.\n\n레이트 체크아웃 가능시간: 11:00 ~ 16:00 / 시간당 10,000원 부과되며, 단 16:00 이후 체크아웃 시 1박 요금이 부과됩니다."
      },
      {
        page: 0, idx: 3, divType: 2, div: "객실/예약", title: "[예약] 성수기 시즌은 언제인가요?", regDate: "2022.07.18",
        content: "- 여름 성수기: 7월28일~8월4일\n- 겨울 성수기:  12월 24일, 12월 31일 "
      },

      {
        page: 0, idx: 4, divType: 3, div: "다이닝", title: "[라이즈 앤 다인] 뷔페 이용 금액은 얼마입니까?", regDate: "2022.07.18",
        content: "[text-bold]조식뷔페[/text-bold]\n성인 32,000원, 소인(만4세~12세) 16,000원\n이용시간:  07:00~10:00 / Last Order 09:30\n* 48개월 미만, 최대 2인까지 무료\n\n[text-bold]중식 (단품 메뉴 이용가능)[/text-bold]\n이용시간 : 12:00~15:00 (라스트 오더 14:30)\n\n[text-bold]디너 (단품 메뉴 이용가능)[/text-bold]\n이용시간 : 18:00~21:00  (라스트 오더 20:30)\n\n[text-bold]룸서비스[/text-bold]\n이용시간:  12:00~22:00  (라스트 오더 21:30)"
      },
      {
        page: 0, idx: 5, divType: 3, div: "다이닝", title: "[라이즈 앤 다인] 단체 예약이 가능한가요?", regDate: "2022.07.18",
        content: "최대 250명까지 수용이 가능하며, 단체예약 및 가족행사 (돌 찬지, 회갑연 등) 예약도 가능 합니다.\n\n예약 문의: 032 722 0055"
      },
      {
        page: 0, idx: 6, divType: 3, div: "다이닝", title: "[라이즈 앤 다인] 별실이 있습니까?", regDate: "2022.07.18",
        content: "별도의 공간에서 여유롭게 식사를 즐기고 싶은 분들을 위해 프라이빗 다이닝 룸이 마련되어 있으며 12명부터 15명까지 수용 가능합니다."
      },
      {
        page: 0, idx: 7, divType: 3, div: "다이닝", title: "[데이브레이크] 운영 시간이 어떻게 되나요?", regDate: "2022.07.18",
        content: "[text-bold]데이브레이크 커피숍[/text-bold]\n이용시간: 07:00~22:00\n\n[text-bold]데이브레이크 펍[/text-bold]\n이용시간: 18:00~22:00  (라스트 오더 21:30)"
      },

      {
        page: 0, idx: 8, divType: 4, div: "부대시설", title: "[더 아일랜드 7] 사우나 및 수영장 이용금액과 운영시간이 궁금합니다.", regDate: "2022.07.18",
        content: "입장료를 지불하면 사우나와 수영장을 모두 이용하실 수 있으며, 자세한 비용과 운영시간은 호텔로 문의부탁드립니다."
      },
      {
        page: 0, idx: 9, divType: 4, div: "부대시설", title: "[더 아일랜드 7] 이용할 수 있는 시설은 어떤 것들이 있나요?", regDate: "2022.07.18",
        content: "사우나와 수영장 외에 피트니스 센터, 어메니티 숍, 키즈존, 뮤직존, 당구장 등이 있으며, 피트니스 센터는 호텔 투숙객의 경우 무료로 이용 가능합니다. 그 외 키즈존, 뮤직존, 당구장은 별도의 비용이 부과될 수 있습니다."
      },

      // {
      //   page: 0, idx: 10, divType: 5, div: "기타", title: "[기타] 기타1 제목 입니다.", regDate: "2022.07.18",
      //   content: "기타 내용입니다."
      // },
    ];

    // let obj;
    // for(var i = 0; i < 20; i++) {
    //   obj = new Object();

    //   obj.page = 0;
    //   obj.idx = i + 10;
    //   obj.divType = 5;
    //   obj.div = "기타";
    //   obj.title = "[기타] 기타" + (i+1) + " 제목 입니다.";
    //   obj.regDate = "2022.07.18";
    //   obj.content = "기타" + (i+1) + " 내용 입니다.";

    //   this.list.push(obj);
    // }

    this.selectList = this.list;

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
      } else if(this.selectList.length > 10) { //10개 이상이면
        this.isFirstPage = true;
        this.isLastPage = false;
      }
  },
  mounted() {
    
  },
  methods: {
    getContentText(content) {
      //"<span class='noto-sans-bold'>조식뷔페</span>
        content =  content.split('\n').join("<br>");
        content =  content.split('[text-bold]').join("<span class='noto-sans-bold'>");
        content =  content.split('[/text-bold]').join("</span>");
        return content;
        //return content.split('\n').join('<br>');
    },
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

        // <option value="0">선택</option>
        // <option value="1">전체</option>
        // <option value="2">객실/예약</option>
        // <option value="3">다이닝</option>
        // <option value="4">부대시설</option>

        if(event.target.value == 1 || event.target.value == "1") { //전체
            this.selectNoticeType = 1;
            for(var j = 0; j < this.list.length; j++) {
              this.selectList.push(this.list[j]);
            }
        } else if(event.target.value == 2 || event.target.value == "2") { //객실/예약
            this.selectNoticeType = 2;
            for(var j = 0; j < this.list.length; j++) {
              if(this.list[j].divType == 2) {
                this.selectList.push(this.list[j]);
              }
            }
        } else if(event.target.value == 3 || event.target.value == "3") { //다이닝
            this.selectNoticeType = 3;
            for(var j = 0; j < this.list.length; j++) {
              if(this.list[j].divType == 3) {
                this.selectList.push(this.list[j]);
              }
            }
        } else if(event.target.value == 4 || event.target.value == "4") { //부대시설
            this.selectNoticeType = 4;
            for(var j = 0; j < this.list.length; j++) {
              if(this.list[j].divType == 4) {
                this.selectList.push(this.list[j]);
              }
            }
        } else if(event.target.value == 5 || event.target.value == "5") { //기타
            this.selectNoticeType = 5;
            for(var j = 0; j < this.list.length; j++) {
              if(this.list[j].divType == 5) {
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
    // getList() {
    //   this.pageList = [];

    //   for(var i = 0; i < this.list.length; i++) {
    //     if(this.list[i].page == this.currentPage) {
    //       this.pageList.push(this.list[i]);
    //     }
    //   }
    // },
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
    // noticeSelect(event) {
    //   //console.log(event.target.value); 
    //   if(event.target.value != null && event.target.value != undefined && event.target.value != "0" && event.target.value != 0) {
    //       this.isNoticeSelect = true;
    //   } else {
    //       this.isNoticeSelect = false;
    //   }
    // }
  },
};
</script>
<style>
/* web */
#web .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {
    float: left;
    width: 100%;
}

#web .ant-collapse-borderless {
    background-color: white;
}

#web .ant-collapse-borderless > .ant-collapse-item {
    border-bottom: 1px solid #eeeeee;;
}

#web .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
    background-color: #FAFAFA;
    border-radius: 0px;
    border-top: 1px solid #eeeeee;
    /* border-top: 1px solid #d9d9d9; */
}
#web .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20.5%;
}

#web .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
    display: flex;
    padding-right: 0px;
}

#web .ant-collapse-item > .ant-collapse-header .anticon {
  transform: rotate(90deg);
}

#web .ant-collapse-item-active > div > div > div > .arrow-div > img {
  transform: rotate(180deg);
}

@font-face {
    font-family: "NotoSansBold";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}
#web .ant-collapse-item-active > div > div > div > .catogory-div > span {
  /* font-weight: bold; */
  font-family: "NotoSansBold";
}
#web .ant-collapse-item-active > div > div > div > span {
  /* font-weight: bold; */
  font-family: "NotoSansBold";
}


/* mobile */
#mobile .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {
    float: left;
    margin-right: 0px;
    /* margin-right: 30px; */
    /* margin-bottom: 5px; */
}

#mobile .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
    display: flex;
    flex-direction: column-reverse;
}

#mobile .ant-collapse-borderless {
    background-color: white;
}

#mobile .ant-collapse-borderless > .ant-collapse-item {
    border-bottom: 1px solid #eeeeee;
}

#mobile .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
    background-color: #FAFAFA;
    border-radius: 0px;
    border-top: 1px solid #eeeeee;
    /* border-top: 1px solid #d9d9d9; */
}
#mobile .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding-top: 20px;
    padding-bottom: 20px;
}


#mobile .ant-collapse > .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {
    padding-left: 0px;
    padding-right: 0px;
}

#mobile .ant-collapse-item-active > div > div > div > div > div > img {
  transform: rotate(180deg);
}

#mobile .ant-collapse-item-active > div {
    /* font-weight: bold; */
}

.ant-collapse-item-active #mobileQuestion {
    font-family: "NotoSansBold";
}

#faq select {
  appearance:none;
	-webkit-appearance:none;
	-moz-appearance:none;
	-ms-appearance:none;
    background-position: calc(100% - 12px) center !important;
    background: url("~/assets/images/arrow_down_line_grey_24.svg") no-repeat;
    padding: 8px 32px 8px 16px;
}

#faq select option:first-child{
  color: #BDBDBD;
}

#faq select option { 
  color: #212121;
}

#faqMobile select {
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

#faqMobile select option:first-child{
  color: #BDBDBD;
  font-size: 12px;
}

#faqMobile select option { 
  color: #212121;
  font-size: 12px;
}
</style>