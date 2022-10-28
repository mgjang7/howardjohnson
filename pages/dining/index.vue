<template>
<div>
    <!-- 다이닝 -->
     <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                    <div class="">
                        <span class="howard-main-title">다이닝</span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            넓은 통유리창과 스타일리쉬한 분위기, 색다른 미식의 세계로 초대합니다.
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <VerticalCardList :data="list">
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col1Title">위치</span>    
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col2Title">이용시간</span>
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col3Title"></span>
                    </VerticalCardList>
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
                        다이닝
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        넓은 통유리창과 스타일리쉬한 분위기,<br>색다른 미식의 세계로 초대합니다.
                    </p>
                </div>
            </div>
            <!-- 카드 -->
            <div class="w-full space-y-[8px] mb-8">
                <div v-for="(item, index) in list" :key="index" class="w-full flex flex-col card-border" @click="goDetail(item.diningType)">
                    <div class="w-full">
                        <img :src="item.imgsrc" alt="" class="w-full h-full">
                    </div>
                    <div class="w-ful py-6 px-4">
                        <div class="w-full flex flex-col">
                            <div class="w-full mb-4">
                                <span class="noto-sans-bold text-[14px]">
                                    {{item.title}}
                                </span>
                            </div>

                            <div class="w-full space-y-[8px] text-[12px] tracking-[-0.6px]">
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium">
                                            위치
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light">
                                            <!-- {{item.location}} -->
                                            {{item.col1}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium">
                                            이용시간
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light">
                                            <!-- {{item.usehours}} -->
                                            {{item.col2}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%] invisible">
                                        -
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light">
                                            <!-- (이용시간 확인 필수) -->
                                            {{item.col3}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import VerticalCardList from "@/components/VerticalCardList.vue";

export default {
    components: {
        TopMenuComp,
        FooterComp,
        VerticalCardList
    },
    data() {
        return {
            list: null
        }
    },
    created() {
        this.list = [
            { title: "라이즈 앤 다인", col1: "3층" , col2: "07:00~22:00", col3: '※ 이용시간 확인 필수', imgsrc: require("~/assets/images/dining/risedine/09.jpg"), diningType: "risedine", menuType: 'dining',
                content: "올데이 다이닝 뷔페 레스토랑인 라이즈 앤 다인(Rise & Dine)은 글로벌 브랜드인 하워드존슨 호텔을 대표하는 레스토랑 브랜드입니다. 넓은 통 유리창과 스타일리쉬한 분위기로 전 세계의 다양한 요리를 오픈 키친에서 선보이는 아침, 점심, 저녁 뷔페를 비롯해 한식, 아시안 푸드, 이탈리안 요리 등 다양한 일품 요리를 제공합니다. 또한 소규모의 가족연을 진행 할 수 있는 단체석과 프라이빗 룸을 보유하고 있습니다."
            },
            { title: "데이브레이크", col1: "3층" , col2: "07:00~22:00", col3: '※ 브레이크 타임 16:50~17:40', imgsrc: require("~/assets/images/dining/daybreak/05.jpg"), diningType: "daybreak", menuType: 'dining',
                content: "커피숍 & 바 데이브레이크(Daybreak)는 단순한 커피숍 또는 바를 넘어 편안한 여유로움과 상쾌한 휴식을 선사합니다. 독특한 맛의 스페셜 커피와 수제 생맥주, 세계 각국의 내추럴 스타일의 와인, 저 도수의 위스키, 다채로운 칵테일 등 여러 종류의 음료가 준비되어 있습니다. 더불어 푸드 트럭 컨셉의 위트 있는 다양한 테이크 아웃 메뉴를 준비하였습니다. 데이브레이크는 언제 누구와 함께 있어도 멋진 순간을 즐기기에 최고의 장소입니다."
            },
        ];
    },
    methods: {
        goDetail(diningType) {
            this.$router.push({path: '/dining/detail?diningType=' + diningType});
        }
    },
}
</script>
<style>
.card-border {
    border-color: #EEEEEE;
    border-width: 1px;
}
.card-border:hover {
    border-color: #EE792F;
    border-width: 1px;
}
</style>
