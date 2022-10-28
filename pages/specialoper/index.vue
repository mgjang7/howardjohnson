<template>
<div>
    <!-- 스페셜 오퍼 -->
    <!-- web -->
    <!-- howard-contents -->
    <div class="hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box mb-[120px]">                
                <div class="pt-[120px] pb-[80px]">
                    <div class="flex flex-col justify-items-center items-center">
                        <div class="">
                            <span class="howard-main-title">스페셜오퍼</span> 
                        </div>
                        <div class="mt-[24px]">
                            <p class="howard-sub-title">
                                합리적이고 다양한 패키지 상품과 이벤트로 보다 특별하게 하워드 존슨을 누리세요.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center space-x-[16px]">
                    <div class="">
                        <span v-if="isEvents" class="howard-big-white-btn" @click="getPackages">
                            패키지
                        </span>
                        <span v-else class="howard-big-btn" @click="getPackages">
                            패키지
                        </span>
                    </div>
                    <div class="">
                        <span v-if="isPackages" class="howard-big-white-btn" @click="getEvents">
                            이벤트
                        </span>
                        <span v-else class="howard-big-btn" @click="getEvents">
                            이벤트
                        </span>
                    </div>
                </div>
                <!-- 카드 -->
                <div class="w-full mt-[57px]">
                    <CardList :data="cardDatas">
                        
                    </CardList>
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
                        스페셜오퍼
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        합리적이고 다양한 패키지 상품과 이벤트로 보다 특별하게 하워드 존슨을 누리세요.
                    </p>
                </div>
            </div>
            <!-- 패키지, 이벤트 버튼 -->
            <div class="w-full flex justify-center pb-4">
                <div class="w-full flex justify-center space-x-[8px]">
                    <div class="">
                        <span v-if="isEvents" class="howard-big-white-btn-mobile" @click="getPackages">
                            패키지
                        </span>
                        <span v-else class="howard-big-btn-mobile" @click="getPackages">
                            패키지
                        </span>
                    </div>
                    <div class="">
                        <span v-if="isPackages" class="howard-big-white-btn-mobile" @click="getEvents">
                            이벤트
                        </span>
                        <span v-else class="howard-big-btn-mobile" @click="getEvents">
                            이벤트
                        </span>
                    </div>
                </div>
            </div>
            <!-- 카드 -->
            <div class="w-full">
                <MobileCardList :data="cardDatas">
                        
                </MobileCardList>
            </div>
        </div>
    </div>
</div>    
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import TopMenuComp from "@/components/TopMenu.vue";
import FooterComp from "@/components/Footer.vue";
import CardList from "@/components/CardList.vue";
import MobileCardList from "@/components/MobileCardList.vue";

export default {    
    data() {
        return {
            datas: [],
            cards: [],
            isPackages: true,
            isEvents: false
        }
    },
    components: {
        TopMenuComp,
        FooterComp,
        CardList,
        MobileCardList,
    },
    created() {
        this.datas = [
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-01.jpg"), menuType: 'specialoper', type: 'package',  itemNo: "package1"},
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-02.jpg"), menuType: 'specialoper', type: 'package', itemNo: "package2"},
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-03.jpg"), menuType: 'specialoper', type: 'package', itemNo: "package3"},
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-04.jpg"), menuType: 'specialoper', type: 'package', itemNo: "package4"},
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-05.jpg"), menuType: 'specialoper', type: 'package', itemNo: "package5"},

            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-01.jpg"), menuType: 'specialoper', type: 'event', itemNo: "event1"},
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-02.jpg"), menuType: 'specialoper', type: 'event', itemNo: "event2"},
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-03.jpg"), menuType: 'specialoper', type: 'event', itemNo: "event3"},
            {title: "오렌지 듄스GC PKG", content: "생에 최고의 라운드를 즐겨보세요!", col: "요금: 100,000", imgSource: require("~/assets/images/specialoper/package-card-04.jpg"), menuType: 'specialoper', type: 'event', itemNo: "event4"},
        ];

        if(this.$store.state.specialoperType === undefined || this.$store.state.specialoperType === '') {
            this.cards = this.datas.filter(p => p.type === 'package');
        } else {
            if(this.$store.state.specialoperType === 'package') {
                this.isPackages = true;
                this.isEvents = false;
                this.cards = this.datas.filter(p => p.type === 'package');
            } else if(this.$store.state.specialoperType === 'event') {
                this.isPackages = false;
                this.isEvents = true;
                this.cards = this.datas.filter(p => p.type === 'event');
            }
        }
    },
    mounted() {
        
    },
    computed: {
        cardDatas() {
            return this.cards;
        }
    },
    methods: {
        getPackages() {
            this.isPackages = true;
            this.isEvents = false;

            this.$store.commit('specialoperTypeChange', 'package');

            this.cards = this.datas.filter(p => p.type === 'package');
        },
        getEvents() {
            this.isPackages = false;
            this.isEvents = true;

            this.$store.commit('specialoperTypeChange', 'event');

            this.cards = this.datas.filter(p => p.type === 'event');
        },
    }
}
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

.card-border {
    border-color: #EEEEEE;
    border-width: 1px;
}
.card-border:hover {
    border-color: #EE792F;
    border-width: 1px;
}
</style>
    

