<template>
<div>
    <!-- 고객지원 - 공지사항 - 상세 -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                <div class="">
                    <span class="howard-main-title">
                        공지사항
                    </span>
                </div>
                <div class="mt-[24px]">
                    <p class="howard-sub-title">
                        하워드존슨 인천 에어포트의 최신 소식을 확인해주세요.
                    </p>
                </div>
                </div>  
                <div class="w-full">

                    <div class="w-full h-[56px] border-y border-[#EEEEEE] px-[87px]">
                        <div class="w-full h-full flex">
                            <div class="basis-[15%] flex justify-start items-center">
                                <span v-if="divType == 2" class="noto-sans-bold text-[#EE792F] text-[14px] tracking-[-0.7px]" style="color:#EE792F;">
                                    {{div}}
                                </span>
                                <span v-else class="noto-sans-bold text-[14px] tracking-[-0.7px]">
                                    {{div}}
                                </span>
                            </div>
                            <div class="basis-[70%] flex justify-start items-center">
                                <span class="noto-sans-bold text-[16px] tracking-[-0.8px]">
                                    {{title}}
                                </span>
                            </div>
                            <div class="basis-[15%] flex justify-end items-center">
                                <span class="text-[#BDBDBD] text-[14px] tracking-[-0.7px]" style="color:#BDBDBD;">
                                    {{regDate}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-center items-center py-20 px-[87px]">
                        <div class="w-full h-full flex">
                            <div class="basis-[15%]">

                            </div>
                            <div class="basis-[70%] flex justify-center items-center">
                                <p class="text-[14px] tracking-[-0.7px]" v-html="getContentText(content)"></p>
                            </div>
                            <div class="basis-[15%]">

                            </div>
                        </div>
                    </div>
                    <div class="w-full border-b border-[#EEEEEE]">

                    </div>
                    <div class="w-full flex justify-center items-center pt-[48px] pb-[120px]">
                        <button class="howard-btn" @click="goNoticeList">
                            목록
                        </button>
                    </div>
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
                        공지사항
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        하워드존슨 인천 에어포트의 최신 소식을 확인해주세요.
                    </p>
                </div>
            </div>
            <div class="w-full py-2 flex flex-col border-y border-[#EEEEEE] space-y-[4px] mb-6">
                <div class="flex items-center">
                    <span class="text-[8px] text-white howard-bg-color rounded px-[10px] py-[2px] tracking-[-0.4px]">
                        {{div}}
                    </span>
                </div>
                <div class="flex justify-start items-center">
                    <span class="text-[12px] tracking-[-0.6px]">
                        {{title}}
                    </span>
                </div>
                <div class="flex items-center">
                    <span class="text-[10px] text-[#BDBDBD] tracking-[-0.5px]" style="color:#BDBDBD;">
                        {{regDate}}
                    </span>
                </div>
            </div>
            <div class="w-full mb-4">
                <p class="noto-sans-light w-full text-[12px] tracking-[-0.6px]" v-html="getContentText(content)">
                    
                </p>
            </div>
            <div class="w-full h-[320px] bg-[#EFEFEF] mb-4">

            </div>
            <div class="w-full flex justify-center border-t border-[#EEEEEE] pt-6 pb-8">
                <button class="howard-btn-mobile" @click="goNoticeList">
                    목록
                </button>
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

        targetIdx: 0,
        targetPage: 0,
        targetNoticeType: 0,

        div: "",
        divType: 0,
        title: "",
        content: "",
        regDate: "",
    }
  },
  created() {
    this.targetIdx = this.$route.query.id;
    this.targetPage = this.$route.query.page;
    this.targetNoticeType = this.$route.query.noticeType;
    
    this.list = [
      { 
        page: 0, idx: 5, divType:2, div: "공지", title: "프론트 데스크 통합 운영 안내", regDate: "2022.07.18",
        content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객님들께 안내 말씀 드립니다.\n현재 하워드 존슨과 데이즈 호텔&스위트의 프론트 데스크가 통합 운영되고 있습니다.\n데이즈 호텔 & 스위트 인천공항 고객님들께서는 체크인 시에 하워드 존슨 인천공항\n프론트 데스크(3층)로 방문해 주시길 부탁드립니다.\n감사합니다."
      },
      { 
        page: 0, idx: 4, divType:2, div: "공지", title: "일회용품 제공 제한 안내", regDate: "2022.07.18",
        content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객님들께 안내 말씀 드립니다.\n정부의 자원 재활용법에 의해 2021년 1월 1일부터 일회용품 제공이 제한되었습니다. 이용에 참고 바랍니다.\n 일회용품 구매를 원하시는 고객님께서는 프론트 데스크에서 현장구매 가능합니다.\n감사합니다."
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
    //     page: 0, idx: 1, divType:2, div: "공지", title: "프론트 데스크 통합 운영 안내", regDate: "2022.07.18",
    //     content: "하워드 존슨 인천공항, 데이즈 호텔 & 스위트 인천공항 프론트 데스크는 통합 운영되어 하워드 존슨 인천공항의 프론트 데스크에서 운영되고 있습니다.\n\n데이즈 호텔 & 스위트 인천공항 고객님들께서는 체크인 시에 하워드 존슨 인천 공항 프론트 데스크로 방문해 주시길 부탁드립니다.\n\n감사합니다."
    //   },
    //   { 
    //     page: 0, idx: 2, divType:2, div: "공지", title: "1회용품 제공 제한 안내", regDate: "2022.07.18",
    //     content: "정부의 자원 재활용법에 의해 2021년 1월1일부터 1회 용품 제공이 제한됩니다. 구매를 원하실 경우, 프론트 데스크에서 구매 가능합니다."
    //   },
    //   { 
    //     page: 0, idx: 3, divType:2, div: "공지", title: "공항 무료 셔틀 서비스 운행 잠정 중단 안내", regDate: "2022.07.18",
    //     content: "Covid-19로 인해 저희 호텔에서 제공하는 공항 무료 셔틀 서비스 운행을 잠정 중단하였습니다. 이용에 불편을 드려 죄송합니다."
    //   },
    //   { 
    //     page: 0, idx: 4, divType:2, div: "공지", title: "'아일랜드 세븐' 운영 잠정 중단 안내", regDate: "2022.07.18",
    //     content: "하워드 존슨 & 데이즈 호텔을 이용해 주시는 고객 여러분께 감사의 말씀을 전해 드립니다.\n\nCovid-19로 인하여 2020년 2월25일부로 레저센터, '디 아일랜드 세븐(수영장, 사우나, 헬스클럽 등)의 운영을 잠정 중단합니다.\n\n감사합니다."
    //   },
    //   { 
    //     page: 0, idx: 5, divType:2, div: "공지", title: "반려동물 출입 불가 안내", regDate: "2022.07.18",
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

    //list page 데이터 설정
      var insertPage = 1;
      var insertCount = 0;
      for(var i = 0; i < this.list.length; i++) {
        this.list[i].page = insertPage;
        insertCount = insertCount + 1;

        if(insertCount > 9){
          insertCount = 0;
          insertPage = insertPage + 1;
        }
      }

      for(var i = 0; i < this.list.length; i++) {
        if(this.list[i].idx == this.targetIdx) {
            this.div = this.list[i].div;
            this.divType = this.list[i].divType;
            this.title = this.list[i].title;
            this.content = this.list[i].content;
            this.regDate = this.list[i].regDate;
        
            break;
        }
      }
  },
  methods: {
    getContentText(content) {
        return content.split('\n').join('<br>');
    },
    goNoticeList() {
        //alert("this.targetNoticeType : " + this.targetNoticeType + ", this.targetPage : " + this.targetPage);

        // this.$router.push({path: '/customersupport/notice'});
        this.$router.push({path: '/customersupport/notice?noticeType=' + this.targetNoticeType + '&page=' + this.targetPage });

        
    }
  },
};
</script>
<style>

</style>