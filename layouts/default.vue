<template>
  <div class="w-full">
    <!-- <TopMenuComp /> -->
    <div id="topMenuArea" class="relative w-full z-50">
        <!-- web -->
        <div id="topMenuDesktop" class="hidden lg:block w-full h-[120px] fixed top-0 left-0">
          <!-- <div class="absolute top-0 left-0 flex justify-center w-full h-full howard-bg-color z-20" @mouseover="mouseover()"> -->
          <div class="absolute top-0 left-0 flex justify-center w-full h-full howard-bg-color z-20">
            <div class="container-box h-full flex" @mouseover="mouseover()">
              <div class="basis-[18%] flex justify-start items-center">
                <NuxtLink to="/" class="">
                  <img src="~/assets/images/home_logo.svg" class="" alt="" />  
                </NuxtLink>
              </div>
              <div class="basis-[60%]">
                  <div class="w-full h-full flex justify-center items-center text-[20px] text-white">
                      <div class="basis-[16.6%] flex justify-center items-center">
                          <span>
                              <NuxtLink to="/abouthotel" class="hover:text-white hover:font-bold">호텔 소개</NuxtLink>
                          </span>
                      </div>
                      <div class="basis-[16.6%] flex justify-center items-center">
                          <span>
                              <NuxtLink to="/specialoper" class="hover:text-white hover:font-bold">스페셜 오퍼</NuxtLink>
                          </span>
                      </div>
                      <div class="basis-[16.6%] flex justify-center items-center">
                          <span>
                              <NuxtLink to="/guestroom" class="hover:text-white hover:font-bold">객실</NuxtLink>
                          </span>
                      </div>
                      <div class="basis-[16.6%] flex justify-center items-center">
                          <span>
                              <NuxtLink to="/dining" class="hover:text-white hover:font-bold">다이닝</NuxtLink>
                          </span>
                      </div>
                      <div class="basis-[16.6%] flex justify-center items-center">
                          <span>
                              <NuxtLink to="/additionalfacilities" class="hover:text-white hover:font-bold">부대시설</NuxtLink>
                          </span>
                      </div>  
                      <div class="basis-[16.6%] flex justify-center items-center">
                          <span>
                              <NuxtLink to="/customersupport/notice" class="hover:text-white hover:font-bold">고객지원</NuxtLink>
                          </span>
                      </div>
                  </div>
              </div>
              <div class="basis-[22%] flex justify-end items-center">
                <div class="flex flex-nowrap">
                  <a-select default-value="1" style="margin-right: 12px;" @change="handleChange">
                    <a-select-option value="1">
                      한국어
                    </a-select-option>
                    <a-select-option value="2">
                      영어
                    </a-select-option>
                  </a-select>
                  <button @click="reservation" class="bg-[#FFFFFF] rounded-full text-[16px] text-[#EE792F] h-[37px] px-[20px] hover:bg-[#FF9552] hover:text-white">
                    예약하기
                  </button>  
                </div>
              </div>
            </div>
          </div>
          <!-- sub menu -->
          <div v-bind:class="webSebMenuClass" @mouseleave="mouseleave()">
              <div class="w-full h-full container-box flex">
                  <div class="basis-[18%] h-full">

                  </div>
                  <div class="basis-[60%] h-full">
                      <div class="w-full h-full flex justify-center items-center text-[18px] text-[#EE792F]">
                          <div class="basis-[16.6%] h-full flex justify-center items-center">
                              <div class="w-full h-full flex flex-col space-y-[24px]">
                                  
                              </div>
                          </div>
                          <div class="basis-[16.6%] h-full flex justify-center items-center">
                              <div class="w-full h-full flex flex-col space-y-[24px] items-center">
                                  <span>
                                      <NuxtLink to="/specialoper" class="hover:text-[#EE792F] hover:font-bold">패키지</NuxtLink>
                                  </span>
                                  <span>
                                      <NuxtLink to="/specialoper" class="hover:text-[#EE792F] hover:font-bold">이벤트</NuxtLink>
                                  </span>
                              </div>
                          </div>
                          <div class="basis-[16.6%] h-full flex justify-center items-center">
                              <div class="w-full h-full flex flex-col space-y-[24px] items-center">
                                  <span class="">
                                      <NuxtLink to="/guestroom/detail?roomType=superior" class="hover:text-[#EE792F] hover:font-bold">슈페리어</NuxtLink>
                                  </span>
                                  <span class="">
                                      <NuxtLink to="/guestroom/detail?roomType=deluxe" class="hover:text-[#EE792F] hover:font-bold">디럭스</NuxtLink>
                                  </span>
                                  <span class="">
                                      <NuxtLink to="/guestroom/detail?roomType=premier" class="hover:text-[#EE792F] hover:font-bold">프리미어</NuxtLink>
                                  </span>
                                  <span class="">
                                      <NuxtLink to="/guestroom/detail?roomType=sweet" class="hover:text-[#EE792F] hover:font-bold">스위트</NuxtLink>
                                  </span>
                              </div>
                          </div>
                          <div class="basis-[16.6%] h-full flex justify-center items-center">
                              <div class="w-full h-full flex flex-col space-y-[24px] items-center">
                                  <span>
                                      <NuxtLink to="/dining/detail?diningType=risedine" class="hover:text-[#EE792F] hover:font-bold">라이즈앤다인</NuxtLink>
                                  </span>
                                  <span>
                                      <NuxtLink to="/dining/detail?diningType=daybreak" class="hover:text-[#EE792F] hover:font-bold">데이브레이크</NuxtLink>
                                  </span>
                              </div>
                          </div>
                          <div class="basis-[16.6%] h-full flex justify-center items-center">
                              <div class="w-full h-full flex flex-col space-y-[24px] items-center">
                                  <span>
                                      <NuxtLink to="/additionalfacilities/detail?facilityType=megastar" class="hover:text-[#EE792F] hover:font-bold">메가스타</NuxtLink>
                                  </span>
                                  <span>
                                      <NuxtLink to="/additionalfacilities/detail?facilityType=theisland7" class="hover:text-[#EE792F] hover:font-bold">더 아일랜드7</NuxtLink>
                                  </span>
                                  <!-- <span>
                                      <NuxtLink to="/additionalfacilities/detail" class="hover:text-[#EE792F] hover:font-bold">비즈니스센터</NuxtLink>
                                  </span> -->
                              </div>
                          </div>  
                          <div class="basis-[16.6%] h-full flex justify-center items-center">
                              <div class="w-full h-full flex flex-col space-y-[24px] items-center">
                                  <span>
                                      <NuxtLink to="/customersupport/notice" class="hover:text-[#EE792F] hover:font-bold">공지사항</NuxtLink>
                                  </span>
                                  <span>
                                      <NuxtLink to="/customersupport/faq" class="hover:text-[#EE792F] hover:font-bold">FAQ</NuxtLink>
                                  </span>
                                  <span>
                                      <NuxtLink to="/customersupport/trafficinformation" class="hover:text-[#EE792F] hover:font-bold">교통/주차안내</NuxtLink>
                                  </span>
                                  <span>
                                      <NuxtLink to="/customersupport/customersuggestion" class="hover:text-[#EE792F] hover:font-bold">고객의 소리</NuxtLink>
                                  </span>
                                  <span>
                                      <NuxtLink to="/customersupport/travelcourse" class="hover:text-[#EE792F] hover:font-bold">추천 여행지</NuxtLink>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="basis-[22%] h-full">

                  </div>
              </div>
          </div>
        </div>  
        <!-- mobilie -->
        <div id="topMenuMobilie" class="lg:hidden w-full fixed top-0 left-0">
            <div class="w-full howard-bg-color px-[12px] py-[20px]">
              <div class="w-full h-[42px] flex justify-between items-center">
                  <div class="w-[100px] h-[52px] flex justify-start items-center">
                    <a-icon id="top-menu-toggle-icon" v-if="!isMenuExtends" type="menu" class="" @click="menuExtend"  style="color:white; width:24px; height:20px;" />
                    <a-icon id="top-menu-toggle-icon2" v-else type="close" class="" @click="menuExtend" style="color:white; width:24px; height:20px;" />
                  </div>
                  <div class="w-[75px] h-[42px]">
                    <span @click="goHome" class="hover:cursor-pointer">
                        <img src="~/assets/images/home_logo.svg" class="w-full h-full" alt="" />  
                    </span>
                  </div>
                  <div class="w-[100px] h-[52px] flex justify-end items-center">
                    <div v-if="isMenuExtends">
                      <a-select default-value="1" @change="handleChange">
                        <a-select-option value="1">
                          한국어
                        </a-select-option>
                        <a-select-option value="2">
                          영어
                        </a-select-option>
                      </a-select>
                    </div>
                    <div v-else>
                      <button @click="reservation" class="howard-bg-color rounded-full border border-white text-[12px] text-white py-[5px] px-[15px] hover:bg-[#FF9552]">
                        예약하기
                      </button>
                    </div>
                  </div>
              </div>
            </div>  
            <div class="relative w-full z-50">        
                <div v-bind:class="menuClass" class="overflow-scroll">
                  <div class="w-full h-[56px] flex items-center howard-info-border-b howard-info-border-r pl-6 cursor-pointer abouthotel-text-area" @click="goSubMenu(1, 1)">
                    <span @click="goSubMenu(1, 1)" class="text-[16px]">호텔 소개</span>
                  </div>
                  <a-menu
                    class="w-full"
                    mode="inline"
                    theme="light"
                    :open-keys="openKeys"
                    @openChange="onOpenChange"
                  >
                      <a-sub-menu key="sub1" class="howard-info-border-b">
                        <span slot="title" class="w-full">
                          <div class="w-full flex justify-between items-center">
                              <span class="top-title text-[16px]" @click="goMenu(2)">스페셜오퍼</span>
                              <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="menu-toggle-arrow mr-4">
                          </div>
                        </span>
                        <a-menu-item key="1" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(2, 1)">
                            <span class="noto-sans-light text-[14px]">
                              패키지
                            </span>
                        </a-menu-item>
                        <a-menu-item key="2" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(2, 2)">
                            <span class="noto-sans-light text-[14px]">
                              이벤트
                            </span>
                        </a-menu-item>
                      </a-sub-menu>
                      <a-sub-menu key="sub2" class="howard-info-border-b">
                        <span slot="title" class="w-full">
                          <div class="w-full flex justify-between items-center">
                              <span class="top-title text-[16px]" @click="goMenu(3)">객실</span>
                              <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="menu-toggle-arrow mr-4">
                          </div>
                        </span>
                        <a-menu-item key="3" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(3, 1)">
                            <span class="noto-sans-light text-[14px]">
                              슈페리어
                            </span>
                        </a-menu-item>
                        <a-menu-item key="4" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(3, 2)">
                            <span class="noto-sans-light text-[14px]">
                              디럭스
                            </span>
                        </a-menu-item>
                        <a-menu-item key="5" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(3, 3)">
                            <span class="noto-sans-light text-[14px]">
                              프리미어
                            </span>
                        </a-menu-item>
                        <a-menu-item key="6" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(3, 4)">
                            <span class="noto-sans-light text-[14px]">
                              스위트
                            </span>
                        </a-menu-item>
                      </a-sub-menu>
                      <a-sub-menu key="sub3" class="howard-info-border-b">
                        <span slot="title" class="w-full">
                          <div class="w-full flex justify-between items-center">
                              <span class="top-title text-[16px]" @click="goMenu(4)">다이닝</span>
                              <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="menu-toggle-arrow mr-4">
                          </div>
                        </span>
                        <a-menu-item key="7" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(4, 1)">
                            <span class="noto-sans-light text-[14px]">
                              라이즈 앤 다인
                            </span>
                        </a-menu-item>
                        <a-menu-item key="8" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(4, 2)">
                            <span class="noto-sans-light text-[14px]">
                              데이브레이크
                            </span>
                        </a-menu-item>
                      </a-sub-menu>
                      <a-sub-menu key="sub4" class="howard-info-border-b">
                        <span slot="title" class="w-full">
                          <div class="w-full flex justify-between items-center">
                              <span class="top-title text-[16px]" @click="goMenu(5)">부대시설</span>
                              <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="menu-toggle-arrow mr-4">
                          </div>
                        </span>
                        <a-menu-item key="9" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(5, 1)">
                            <span class="noto-sans-light text-[14px]">
                                메가스타
                            </span>
                        </a-menu-item>
                        <a-menu-item key="10" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(5, 2)">
                            <span class="noto-sans-light text-[14px]">
                                더 아일랜드 7
                            </span>
                        </a-menu-item>
                        <!-- <a-menu-item key="11" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(5, 3)">
                            <span class="noto-sans-light text-[14px]">
                              데이즈 PDR
                            </span>
                        </a-menu-item> -->
                        <!-- <a-menu-item key="12" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(5, 4)">
                            <span class="noto-sans-light text-[14px]">
                              비즈니스 센터
                            </span>
                        </a-menu-item> -->
                      </a-sub-menu>
                      <a-sub-menu key="sub5" class="howard-info-border-b">
                        <span slot="title" class="w-full">
                          <div class="w-full flex justify-between items-center">
                              <span class="top-title text-[16px]" @click="goMenu(6)">고객지원</span>
                              <img src="~/assets/images/arrow_down_line_grey_24.svg" alt="" class="menu-toggle-arrow mr-4">
                          </div>
                        </span>
                        <a-menu-item key="13" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(6, 1)">
                            <span class="noto-sans-light text-[14px]">
                              공지사항
                            </span>
                        </a-menu-item>
                        <a-menu-item key="14" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(6, 2)">
                            <span class="noto-sans-light text-[14px]">
                              FAQ
                            </span>
                        </a-menu-item>
                        <a-menu-item key="15" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(6, 3)">
                            <span class="noto-sans-light text-[14px]">
                              교통/주차안내
                            </span>
                        </a-menu-item>
                        <a-menu-item key="16" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(6, 4)">
                            <span class="noto-sans-light text-[14px]">
                              고객의 소리
                            </span>
                        </a-menu-item>
                        <a-menu-item key="17" class="howard-info-border-t m-0 text-[14px]" @click="goSubMenu(6, 5)">
                            <span class="noto-sans-light text-[14px]">
                              추천 여행지
                            </span>
                        </a-menu-item>
                      </a-sub-menu>
                </a-menu>
                <div class="py-2 w-full bg-[#F5F5F5]">
                  <div class="w-full h-[56px] flex justify-center items-center bg-white mb-2">
                      <div class="w-[30px] h-[27px] mr-4">
                        <img src="~/assets/images/go-dayshotel.svg" alt="" class="w-[30px] h-[27px] cursor-pointer">
                      </div>
                      <div class="text-[16px]">
                        데이즈호텔앤스위트 바로가기
                      </div>
                  </div>
                  <div class="w-full py-2 bg-white flex justify-center items-start">
                    <div class="flex justify-center items-center">
                      <img src="~/assets/images/go-facebook-color.png" alt="" class="w-[32px] h-[32px] mr-2 cursor-pointer" @click="popupOpen('facebook')">
                      <img src="~/assets/images/go-instagram-color.png" alt="" class="w-[32px] h-[32px] mx-2 cursor-pointer" @click="popupOpen('instagram')">
                      <img src="~/assets/images/go-owl-color.png" alt="" class="w-[32px] h-[32px] mx-2 cursor-pointer" @click="popupOpen('tripadvisor')">
                      <img src="~/assets/images/go-p-color.png" alt="" class="w-[32px] h-[32px] mx-2 cursor-pointer" @click="popupOpen('kakao')">
                      <img src="~/assets/images/go-blog-color.png" alt="" class="w-[32px] h-[32px] ml-2 cursor-pointer" @click="popupOpen('naverblog')">
                    </div>
                  </div>
                </div>
              </div>
            </div>      
        </div>
    </div>
    <div v-if="!isMenuExtends2" class="pt-[120px] mobile-view-content-padding-top"> 
        <Nuxt />
        <FooterComp />
    </div>
    <!-- 모바일에서 메뉴 확장됐을때 컨텐츠, Footer 영역 숨김 -->
    <div v-else> 
        <Nuxt v-bind:class="contentsClass" />
        <FooterComp v-bind:class="footerClass" />
    </div>
  </div>
</template>

<script>
//import TopMenuComp from "@/components/TopMenu.vue";
import FooterComp from "@/components/Footer.vue";
//import { Translator } from 'vue-google-translate';
//import { Vue, Component } from 'vue-property-decorator';

// @Component({
//   head: {
//     script: [
//       {
//         src: '/googleTranslate.js',
//       },
//       {
//         src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
//       }
//     ],
//   },
// })

export default {
//export default class Default extends Vue {
  data() {
    return {
        isMenuExtends: false,
        isMenuExtends2: false,
        menuClass: "",
        webSebMenuClass: "",
        rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'],
        openKeys: ['sub1'],

        contentsClass: "",
        footerClass: "",

        people: [],
        selectedPerson: {},
    };
  },
  components: {
    //TopMenuComp,
    FooterComp,
    //Translator
  },
  created() {
    if(this.isMenuExtends) {
      this.menuClass = "menu-slide-show";
    } else {
      this.menuClass = "menu-slide-hidden";
    }
    this.webSebMenuClass = "absolute top-[-322px] left-0 w-full h-[322px] z-30 pt-[48px] flex justify-center bg-white";

    this.people = [
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ];

    this.selectedPerson = this.people[0];
  },
  computed: {},
  methods: {
    menuExtend() {
      this.isMenuExtends = !this.isMenuExtends;

      if(this.isMenuExtends) {
        this.menuClass = "menu-slide-show";
        setTimeout(() => {
          this.isMenuExtends2 = true;
        }, 700);

        this.contentsClass = "contents-hide";
        this.footerClass = "footer-hide";

      } else {
        this.menuClass = "menu-slide-hidden";
        this.isMenuExtends2 = false;

        this.contentsClass = "";
        this.footerClass = "";
      }
    },
    goHome() {
      if(this.isMenuExtends) {
          this.menuExtend();
      }
      this.$router.push({path: '/'});
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    mouseover() {
        this.webSebMenuClass = "web-sub-menu-slide-show";
    },
    mouseleave() {
        this.webSebMenuClass = "web-sub-menu-slide-hide";
    },
    // goDetail(menuNo, param) {
    //     switch(menuNo) {
    //     //객실 상세
    //     case 3: this.$router.push({path: '/guestroom/detail?roomType=' + param}); break; 
    //   }
    // },
    goMenu(menuNum) {
      switch(menuNum) {
        //스페셜오퍼
        case 2: this.$router.push({path: '/specialoper'}); break; 
        //객실
        case 3: this.$router.push({path: '/guestroom'}); break;
        //다이닝
        case 4: this.$router.push({path: '/dining'}); break;
        //부대시설
        case 5: this.$router.push({path: '/additionalfacilities'}); break;
        //고객지원
        case 6: this.$router.push({path: '/customersupport/notice'}); break;
      }
    },
    
    goSubMenu(mainNum, subNum) {
      if(mainNum == 1) { //호텔 소개
        this.$router.push({path: '/abouthotel'});
      } else if(mainNum == 2) { //스페셜 오퍼
        if(subNum == 1) { //패키지
          // this.$router.push({path: '/specialoper/package'});
          this.$router.push({path: '/specialoper'});
        } else if(subNum == 2) { // 이벤트
          //this.$router.push({path: '/specialoper/event'});
          this.$router.push({path: '/specialoper'});
        }
      } else if(mainNum == 3) { //객실
        if(subNum == 1) { //슈페리어
            this.$router.push({path: '/guestroom/detail?roomType=superior'});
        } else if(subNum == 2) { //디럭스
            this.$router.push({path: '/guestroom/detail?roomType=deluxe'});
        } else if(subNum == 3) { //프리미어
            this.$router.push({path: '/guestroom/detail?roomType=premier'});
        } else if(subNum == 4) { //스위트
            this.$router.push({path: '/guestroom/detail?roomType=sweet'});
        }
      } else if(mainNum == 4) { //다이닝
        if(subNum == 1) { //라이즈 앤 다인
            this.$router.push({path: '/dining/detail?diningType=risedine'});
        } else if(subNum == 2) { //데이브레이크
            this.$router.push({path: '/dining/detail?diningType=daybreak'});
        }
      } else if(mainNum == 5) { //부대시설
        //this.$router.push({path: '/additionalfacilities/detail'}); //상세
        if(subNum == 1) { //메가스타
            this.$router.push({path: '/additionalfacilities/detail?facilityType=megastar'});
        } else if(subNum == 2) { //더 아일랜드 7
            this.$router.push({path: '/additionalfacilities/detail?facilityType=theisland7'});
        }
      } else if(mainNum == 6) { //고객지원
        if(subNum == 1) {
            this.$router.push({path: '/customersupport/notice'}); //공지사항
        } else if(subNum == 2) {
            this.$router.push({path: '/customersupport/faq'}); // FAQ
        } else if(subNum == 3) {
            this.$router.push({path: '/customersupport/trafficinformation'}); //교통/주차안내
        } else if(subNum == 4) {
            this.$router.push({path: '/customersupport/customersuggestion'}); //고객의 소리
        } else if(subNum == 5) {
            this.$router.push({path: '/customersupport/travelcourse'}); //여행코스
        }
      }  
      
      this.menuExtend();
    },
    popupOpen(targetPage) {
        switch(targetPage) {
          case "facebook" : window.open("https://www.facebook.com/HojoDaysIncheon/?business_id=147242079372203", "_blank"); break;
          case "instagram" : window.open("https://www.instagram.com/hojoincheon_dayshotel", "_blank"); break;
          case "naverblog" : window.open("https://post.naver.com/hojoincheon", "_blank"); break;
          case "tripadvisor" : window.open("https://www.tripadvisor.co.kr/Hotel_Review-g297889-d13345455-Reviews-Howard_Johnson_Incheon_Airport-Incheon.html", "_blank"); break;
          case "kakao" : window.open("https://pf.kakao.com/_xfwjzC", "_blank"); break;
        }  
    },
    reservation() {
        const checkInDate = this.$store.state.reservationCheckInDate;
        const checkOutDate = this.$store.state.reservationCheckOutDate;

        const adultCount = this.$store.state.reservationAdultCount;
        const childCount = this.$store.state.reservationChildCount;

        if(childCount > 0) {
            if(adultCount <= 0) {
                alert('아동은 최소 1명 이상의 성인 보호자가 동반 되어야 합니다.');
                return;
            }
        }

        if(adultCount === 0) {
            alert('최소 성인 1명 이상 선택 바랍니다.');
            return;
        }
            
        let url = 'https://www.book-secure.com/index.php?s=results&property=krinc31193&arrival='
            + checkInDate + 
            '&departure=' 
            + checkOutDate +
            '&adults1=' 
            + adultCount + 
            '&children1=' + 
            childCount + 
            '';

        window.open(url, "_blank");
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
  
};
</script>

<style>
/* 모바일 메뉴 확장 했을때 */
.menu-slide-show { 
   transition:all .6s; 
   left:0%; 
   position: absolute;
   width: 100%;
   z-index: 10;
   background-color: white;
   height: calc(100vh - 82px);  
}
/* 모바일 메뉴 닫았을때 */
.menu-slide-hidden {
   transition:all .6s; 
   left:-100%; 
   position: absolute;
   width: 100%;
   z-index: 10;
   background-color: white;
   height: calc(100vh - 82px);  
}
/* 모바일 화면에서만 메뉴 확장시 컨텐츠 숨김 */
@media (max-width: 1024px) {
  .contents-hide {
    display: none;
  }
}
/* 모바일 화면에서만 메뉴 확장시 Footer 숨김 */
@media (max-width: 1024px) {
  .footer-hide {
    display: none;
  }
}
/* 모바일 화면에서만 컨텐츠 영역 padding-top : 82px */
@media (max-width: 1024px) {
  .mobile-view-content-padding-top {
    padding-top: 82px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(100%, 0px);
}

.web-sub-menu-slide-show {
  transition:all .6s; 
  position: absolute;
  top:120px;
  left: 0px;
  width: 100%;
  height: 322px;
  z-index: 10;
  padding-top: 48px;
  display: flex;
  justify-content: center;
  /* background-color: #FFF6F2;  */
  background-color: white; 
}
.web-sub-menu-slide-hide {
  transition:all .6s; 
  position: absolute;
  top:-322px;
  left: 0px;
  width: 100%;
  height: 322px;
  z-index: 10;
  padding-top: 48px;
  display: flex;
  justify-content: center;
  background-color: white; 
}



#top-menu-toggle-icon > svg {
    width: 24px;
    height: 20px;
}

#top-menu-toggle-icon2 > svg {
    width: 24px;
    height: 20px;
}

.ant-menu-vertical > .ant-menu-item, .ant-menu-vertical-left > .ant-menu-item, .ant-menu-vertical-right > .ant-menu-item, .ant-menu-inline > .ant-menu-item, .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  margin: 0px;
  height: 56px;
  display: flex;
  align-items: center;
}

.ant-menu-sub.ant-menu-inline > .ant-menu-item, .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 56px;
} 


@font-face {
    font-family: "NotoSansBold";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}
.ant-menu-submenu-open {
  background-color: #FFF6F2
}
.ant-menu-submenu-open .top-title {
  color: #EE792F;
  font-family: "NotoSansBold";
}

.abouthotel-text-area:hover {
    transition-delay: .3s;
    color: #3B82F6;
}

.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    display: none;
}

.ant-menu-inline .ant-menu-submenu-title {
  padding-right: 0px;
}

.ant-menu-submenu-open .menu-toggle-arrow {
  transform: rotate(180deg);
}

.ant-menu-sub.ant-menu-inline > .ant-menu-item, .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  background-color: white;
}
.ant-menu-item-selected span {
  color: #EE792F;
}

.no-scroll::-webkit-scrollbar  {
  display: none; 
}

#topMenuDesktop .ant-select-selection--single {
  border-radius: 9999px;
  padding-left: 4px;
  padding-right: 20px;
  height: 37px;
}

#topMenuDesktop .ant-select-selection-selected-value {
  height: 37px;
  color: white;
  font-size: 16px;
}

 #topMenuDesktop .ant-select-selection__rendered {
  line-height: 35px;
 }

 #topMenuDesktop .ant-select-selection {
  border: 1px solid white;
  background-color: #EE792F;
 }

 #topMenuDesktop .ant-select-selection:hover {
  border: 1px solid white;
  background-color: #FF9552;
 }

 #topMenuDesktop svg {
  color: white;
 }

 /* #topMenuMobilie */
 #topMenuMobilie .ant-select-selection--single {
  border-radius: 9999px;
  padding-left: 2px;
  padding-right: 15px;
  height: 30px;
}

#topMenuMobilie .ant-select-selection-selected-value {
  height: 30px;
  color: white;
  font-size: 12px;
}

 #topMenuMobilie .ant-select-selection__rendered {
  line-height: 28px;
 }

 #topMenuMobilie .ant-select-selection {
  border: 1px solid white;
  background-color: #EE792F;
 }

 #topMenuMobilie .ant-select-selection:hover {
  border: 1px solid white;
  background-color: #FF9552;
 }

 #topMenuMobilie svg {
  color: white;
 }
</style>
