<template>
  <div class="space-y-8 pb-[120px]">
    <div v-for="(item,index) in list" :key="index" class="flex w-full h-[387px]">
        <div class="basis-[50%]">
            <img :src="item.imgsrc" alt="" class="w-full h-full">
        </div>
        <div class="basis-[50%] w-full h-full flex flex-col border-2 howard-board-card-border-color">
            <div class="px-12 pt-[27px] w-full h-full">
                <div class="flex flex-col w-full h-full">
                    <div class="basis-[70%] w-full h-full flex flex-col">
                        <span class="noto-sans-bold text-[18px] tracking-[-0.9px]">
                            {{item.title}}
                        </span>
                        <div class="mt-4">
                            <span class="space-y-[2px] text-[14px] text-[#757575] tracking-[-0.7px]">
                                {{item.content}}
                            </span>
                        </div>
                        <div class="w-full border-b-2 howard-board-card-border-color my-3">

                        </div>
                        <div class="flex flex-row">
                            <div class="flex flex-col">
                                <div class="p-[5px]">
                                    <slot name="col1Title"></slot>
                                </div>
                                <div class="p-[5px]">
                                    <slot name="col2Title"></slot>
                                </div>
                                <div v-if="item.col3 !== ''" class="p-[5px]">
                                    <slot name="col3Title"></slot>
                                </div>
                            </div>
                            <div class="flex flex-col ml-4">
                                <div class="p-[5px]">
                                    <span class="text-[14px] tracking-[-0.7px]">{{item.col1}}</span>
                                </div>
                                <div class="p-[5px]">
                                    <span class="text-[14px] tracking-[-0.7px]">{{item.col2}}</span>
                                </div>
                                <div v-if="item.col3 !== ''" class="p-[5px]">
                                    <span class="text-[14px] tracking-[-0.7px]">{{item.col3}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="basis-[30%] flex justify-end items-start  w-full h-full">
                        <!-- 객실 -->
                        <button v-if="menuType === 'guestroom'" class="bg-[#EE792F] border-[1px] rounded-full border-[#EE792F] text-[16px] text-white py-[10px] px-6 hover:bg-[#FF9552] hover:border-[#FF9552]" @click="goGuestroomDetail(item.roomType)">
                            자세히보기
                        </button>
                        <!-- 부대시설 -->
                        <button v-if="menuType === 'additionalfacilities'" class="bg-[#EE792F] border-[1px] rounded-full border-[#EE792F] text-[16px] text-white py-[10px] px-6 hover:bg-[#FF9552] hover:border-[#FF9552]" @click="goAdditionalfacilitiesDetail(item.facilityType)">
                            자세히보기
                        </button>
                        <!-- 다이닝 -->
                        <button v-if="menuType === 'dining'" class="bg-[#EE792F] border-[1px] rounded-full border-[#EE792F] text-[16px] text-white py-[10px] px-6 hover:bg-[#FF9552] hover:border-[#FF9552]" @click="goDiningDetail(item.diningType)">
                            자세히보기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    // props: {
    //   data: [],
    //   menuTypeData: '',
    // },
    props: [ 'data' ],
    components: {
        
    },
    data() {
        return {
            list: [],
            menuType: '',
        }
    },
    created() {
        this.list  = this.data;
        this.menuType = this.list[0].menuType;
    },
    methods: {
        // 객실 상세
        goGuestroomDetail(roomType) {
            this.$router.push({path: '/guestroom/detail?roomType=' + roomType});
        },
        // 부대시설 상세
        goAdditionalfacilitiesDetail(facilityType) {
            this.$router.push({path: '/additionalfacilities/detail?facilityType=' + facilityType});
        },
        // 다이닝 상세
        goDiningDetail(diningType) {
            this.$router.push({path: '/dining/detail?diningType=' + diningType});
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
    font-family: "NotoSansLight";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Light.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansMedium";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Medium.otf) format("truetype");
}

.noto-sans-bold {
    font-family: "NotoSansBold";
}
.noto-sans-light {
    font-family: "NotoSansLight";
}
.noto-sans-medium {
    font-family: "NotoSansMedium";
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