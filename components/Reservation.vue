<template>
<div>
    <!-- web -->
    <div id="reservationDesktop" class="howard-contents hidden lg:block w-full">
    <!-- 하워드 존슨 -->
    <div class="relative w-full flex justify-center">
        <div class="absolute top-0 left-0 w-full h-full">
            <!-- 메인 이미지 -->
            <img src="~/assets/images/main-img.jpg" class="w-full h-full" />
        </div>
        <div class="relative container-box py-[120px]">
            <div class="w-full">
                <div class="leading-none">
                    <div class="text-[100px] text-white merienda-bold">Howard</div>
                    <div class="text-[100px] text-[#FFFFFF] merienda-bold">Johnson</div>
                </div>
                <div class="border border-white w-[60px] mt-[15px] mb-[15px]"></div>
                <div class="text-white text-[36px] merienda">
                    Incheon Airport
                </div>
                <div class="merienda mt-[64px]">
                    <!-- <a
                        href="#"
                        class="
                        hover:bg-[#FF9552] hover:no-underline
                        text-white text-[20px]
                        py-2
                        px-4
                        border border-white
                        "
                        >About us</a> -->
                        <NuxtLink to="/abouthotel" 
                            class="hover:bg-[#FF9552] hover:no-underline
                                  text-white text-[20px]
                                    py-2
                                    px-4
                                    border border-white">About us</NuxtLink>
                </div>
            </div>
            <!-- 지금예약하기 -->
            <div
                class="absolute w-full -bottom-[60px] left-0 shadow-lg shadow-black"
                >
            <div
                class="
                h-[120px]
                w-full
                left-[150px]
                bg-white
                flex
                justify-center justify-items-center
                items-stretch
                flex-wrap
                "
            >
                <div class="grow flex flex-col justify-center items-stretch">
                    <div class="p-8">
                        <div class="mb-[5px]">
                            <span class="text-[16px] text-[#7E7E7E]" style="color:#7E7E7E;">체크인</span>
                        </div>
                        <div class="flex justify-between">
                            <div class="">
                                 <a-date-picker :default-value="checkInDate" :value="checkInDate" @change="checkinDateChange">
                                    <template #suffixIcon>
                                        <img src="~/assets/images/datepicker.svg" class="w-6 h-6 cursor-pointer" />
                                    </template>
                                </a-date-picker>
                            </div>
                            <div class="mt-[6px]">
                                <!-- <img src="~/assets/images/datepicker.svg" /> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grow flex flex-col justify-center items-stretch">
                    <div class="p-8">
                        <div class="mb-[5px]">
                            <span class="text-[16px] text-[#7E7E7E]" style="color:#7E7E7E;">체크아웃</span>
                        </div>
                        <div class="flex justify-between">
                            <div class="">
                                <a-date-picker :default-value="checkOutDate" :value="checkOutDate" @change="checkoutDateChange">
                                    <template #suffixIcon>
                                        <img src="~/assets/images/datepicker.svg" class="w-6 h-6 cursor-pointer" />
                                    </template>
                                </a-date-picker>
                                <!-- <a-date-picker :default-value="checkOutDate" :value="checkOutDate" @change="checkoutDateChange" /> -->
                            </div>
                            <div class="mt-[6px]">
                                <!-- <img src="~/assets/images/datepicker.svg" /> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 성인/아동 -->
                <div
                    class="
                        grow
                        flex
                        justify-center
                        items-stretch
                        h-[120px]
                        md:bg-white
                        sm:bg-white
                    "
                >
                <!-- 성인 -->
                <div class="grow flex flex-col">
                    <div class="p-8">
                        <div class="grow flex flex-row justify-start items-center">
                            <div class="text-[16px] text-[#7E7E7E]">성인</div>
                        </div>
                        <div class="grow flex flex-row justify-between items-center">
                            <div class="">
                                <span class="text-[24px] noto-sans-bold">{{ adultCount }}명</span>
                            </div>
                            <!-- <div class="mt-[6px]">
                                <img src="~/assets/images/select.svg" />
                            </div> -->
                            <div class="mt-[6px] flex flex-col">
                                <img src="~/assets/icons/arrow-up-orange.svg" class="cursor-pointer" @click="adultUp" />
                                <img src="~/assets/icons/arrow-down-orange.svg" class="cursor-pointer" @click="adultDown" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 아동 -->
                <div class="grow flex flex-col">
                    <div class="p-8">
                    <div class="grow flex flex-row justify-start items-center">
                        <div class="text-[16px] text-[#7E7E7E]">아동</div>
                    </div>
                    <div class="grow flex flex-row justify-between items-center">
                        <div class="">
                            <span class="text-[24px] noto-sans-bold">{{ childCount }}명</span>
                        </div>
                        <!-- <div class="mt-[6px]">
                            <img src="~/assets/images/select.svg" />
                        </div> -->
                        <div class="mt-[6px] flex flex-col">
                            <img src="~/assets/icons/arrow-up-orange.svg" class="cursor-pointer" @click="childUp" />
                            <img src="~/assets/icons/arrow-down-orange.svg" class="cursor-pointer" @click="childDown" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div
                    @click="reservation"
                    class="
                        grow
                        howard-bg-color
                        flex
                        justify-center
                        items-center
                        h-[120px]
                        hover:bg-[#FF9552] hover:cursor-pointer
                    "
                >
                <span class="text-[24px] text-white">지금 예약하기</span>
                </div>
            </div>
        </div>
        <!-- 지금예약하기 end -->
        </div>
        </div>
        <!-- 하워드 존슨 end -->
        <!-- go happy -->
        <div class="w-full bg-[#FFF6F2]">
        <div class="container py-[120px]">
            <div class="flex flex-col justify-items-center items-center">
            <div class="merienda-bold howard-color text-[48px]">
                GO HAPPY. GO HOJO.
            </div>
            <div class="mt-[40px]">
                <p
                class="
                    text-center text-[16px]
                    flex flex-col
                    space-y-[5px]
                "
                >
                    <span class="tracking-[-0.8px]"
                        >행복한 순간을 함께할 하워드존슨 바이 윈덤 인천공항에 오신 것을
                        환영합니다.</span
                    >
                    <span class="tracking-[-0.8px]"
                        >여행의 설렘과 즐거움, 함께 기뻐하고 축하하고 싶은 특별한 날,
                        몸과 마음의 웰빙을 위한 휴식,</span
                    >
                    <span class="tracking-[-0.8px]"
                        >업무를 위한 출장, 이 모든 순간 행복 함을 전해드리고 잊지 못할
                        순간으로 기억될 수 있도록</span
                    >
                    <span class="tracking-[-0.8px]">하워드 존슨 인천 에어포트 호텔이 함께 합니다.</span>
                </p>
            </div>
            </div>
        </div>
    </div>
    <!-- go happy end -->
    </div>
    <!-- mobilie -->
    <div id="reservationMobile" class="howard-contents lg:hidden w-full">
        <div class="relative flex flex-col bg-fuchsia-300">

            <div class="absolute top-0 left-0 w-full h-full z-0">
                <img src="~/assets/images/main-img-mobile.png" alt="" class="w-full h-full">
            </div>


            <div class="w-full px-[12px] py-8 z-10">
                <div class="w-full mb-1">
                    <div class="text-[28px] text-white merienda-bold">
                        Howard Johnson
                    </div>
                </div>
                <div class="w-full mb-4">
                    <div class="text-[14px] merienda text-white">
                        Incheon Airport
                    </div>
                </div>
                <div class="w-full mb-8">
                    <!-- <NuxtLink to="/" class="
                        hover:bg-[#FF9552] hover:no-underline
                        text-white text-[10px]
                        py-2
                        px-4
                        border border-white
                        ">
                        About us
                    </NuxtLink> -->
                    <NuxtLink to="/abouthotel" 
                            class="hover:bg-[#FF9552] hover:no-underline
                        text-white text-[10px]
                        py-2
                        px-4
                        border border-white">About us</NuxtLink>
                </div>
                <!-- 예약하기 -->
                <div class="w-full">
                    <div class="relative w-full h-[332px]">
                        <div class="absolute top-0 left-0 w-full h-[332px] bg-[#FFFFFF] opacity-50">

                        </div>
                        <div class="absolute w-full p-2">
                            <div class="w-full h-full flex flex-col">
                                <div class="w-full flex mb-2">
                                    <div class="basis-[50%] h-[132px] mr-1 px-3 pt-4 pb-9 bg-white">
                                        <div class="w-full flex-col mt-3">
                                            <div class="w-full flex justify-center items-center mb-[10px]">
                                                <span class="text-[12px] text-[#757575]">체크인</span>
                                            </div>
                                            <div class="w-full flex justify-center">
                                                <span class="text-[16px] font-semibold">
                                                    <!-- <a-date-picker :default-value="checkInDate" :value="checkInDate" @change="checkinDateChange" /> -->
                                                    <a-date-picker :default-value="checkInDate" :value="checkInDate" @change="checkinDateChange">
                                                        <template #suffixIcon>
                                                            <img src="~/assets/images/datepicker.svg" class="cursor-pointer" />
                                                        </template>
                                                    </a-date-picker>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="basis-[50%] h-[132px] ml-1 px-3 pt-4 pb-9 bg-white">
                                        <div class="w-full flex-col mt-3">
                                            <div class="w-full flex justify-center items-center mb-[10px]">
                                                <span class="text-[12px] text-[#757575]">체크아웃</span>
                                            </div>
                                            <div class="w-full flex justify-center">
                                                <span class="text-[16px] font-semibold">
                                                    <!-- <a-date-picker :default-value="checkOutDate" :value="checkOutDate" @change="checkoutDateChange" /> -->
                                                    <a-date-picker :default-value="checkOutDate" :value="checkOutDate" @change="checkoutDateChange">
                                                        <template #suffixIcon>
                                                            <img src="~/assets/images/datepicker.svg" class="cursor-pointer" />
                                                        </template>
                                                    </a-date-picker>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full h-[56px] mb-2 flex justify-between items-center px-3 bg-white">
                                    <div class="">
                                        <span class="text-[12px] text-[#757575]">성인</span>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[16px] font-semibold">{{ adultCount }} 명</span>
                                        <!-- <div class="flex flex-col ml-3">
                                            <img src="~/assets/images/select.svg" alt="" class="cursor-pointer">
                                        </div> -->
                                        <div class="flex flex-col ml-3">
                                            <img src="~/assets/icons/arrow-up-orange.svg" alt="" class="cursor-pointer" @click="adultUp" />
                                            <img src="~/assets/icons/arrow-down-orange.svg" alt="" class="cursor-pointer" @click="adultDown" />
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full h-[56px] mb-2 flex justify-between items-center px-3 bg-white">
                                    <div class="">
                                        <span class="text-[12px] text-[#757575]">아동</span>
                                    </div>
                                    <div class="flex">
                                        <span class="text-[16px] font-semibold">{{ childCount }} 명</span>
                                        <!-- <div class="flex flex-col ml-3">
                                            <img src="~/assets/images/select.svg" alt="" class="cursor-pointer">
                                        </div> -->
                                        <div class="flex flex-col ml-3">
                                            <img src="~/assets/icons/arrow-up-orange.svg" alt="" class="cursor-pointer" @click="childUp" />
                                            <img src="~/assets/icons/arrow-down-orange.svg" alt="" class="cursor-pointer" @click="childDown" />
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full h-[48px] howard-bg-color flex justify-center items-center cursor-pointer hover:bg-[#FF9552]" @click="reservation">
                                    <span class="text-[14px] text-white tracking-[-0.7px]">지금 예약하기</span> 
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        <div class="w-full py-10 px-[12px] bg-[#FFF6F2]">
            <div class="w-full flex justify-center items-center mb-4">
                <div class="">
                    <span class="merienda-bold text-[24px]" style="color:#EE792F;">
                        GO HAPPY. GO HOJO.
                    </span>
                </div>
            </div>
            <div class="w-full flex justify-center items-center">
                <!-- <div class="flex flex-col text-[12px] space-y-[4px] items-center">
                    <p class="notoSansCJKkr-light">행복한 순간을 함께할 하워드존슨 바이 윈덤 인천공항에 오신 것을</p>
                    <p class="notoSansCJKkr-light">환영합니다. 여행의 설렘과 즐거움, 함께 기뻐하고 축하하고 싶은</p>
                    <p class="notoSansCJKkr-light"> 특별한 날, 몸과 마음의 웰빙을 위한 휴식, 업무를 위한 출장, 이 모든</p>
                    <p class="notoSansCJKkr-light"> 순간 행복함을 전해드리고 잊지 못할 순간으로 기억될 수 있도록</p>
                    <p class="notoSansCJKkr-light"> 하워드 존슨 인천 에어포트 호텔이 함께 합니다.</p>
                </div> -->
                <div class="flex flex-col space-y-[4px] text-[12px] tracking-[-0.6px] items-center">
                    <p class="noto-sans-light">행복한 순간을 함께할 하워드존슨 바이 윈덤 인천공항에 오신 것을</p>
                    <p class="noto-sans-light">환영합니다. 여행의 설렘과 즐거움, 함께 기뻐하고 축하하고 싶은</p>
                    <p class="noto-sans-light"> 특별한 날, 몸과 마음의 웰빙을 위한 휴식, 업무를 위한 출장, 이 모든</p>
                    <p class="noto-sans-light"> 순간 행복함을 전해드리고 잊지 못할 순간으로 기억될 수 있도록</p>
                    <p class="noto-sans-light"> 하워드 존슨 인천 에어포트 호텔이 함께 합니다.</p>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
import moment from 'moment';
moment.locale('ko_KR')

const date = new Date();

export default {
    data() {
        return {
            checkInDate: '',
            checkOutDate: '',

            adultCount: 0,
            childCount: 0,
        }
    },
    created() {
        this.checkInDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        this.checkOutDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);

        this.adultCount = 1;
        this.childCount = 0;
    },
    computed: {
        
    },
    methods: {
        reservation() {
            if(this.childCount > 0) {
                if(this.adultCount <= 0) {
                    alert('아동은 최소 1명 이상의 성인 보호자가 동반 되어야 합니다.');
                    return;
                }
            }

            if(this.adultCount === 0) {
                alert('최소 성인 1명 이상 선택 바랍니다.');
                return;
            }
            
            let url = 'https://www.book-secure.com/index.php?s=results&property=krinc31193&arrival='
                + this.checkInDate + 
                '&departure=' 
                + this.checkOutDate +
                '&adults1=' 
                + this.adultCount + 
                '&children1=' + 
                this.childCount + 
                '';

            window.open(url, "_blank");
        },
        // 체크인 날짜 변경
        checkinDateChange(date, dateString) {
            this.checkInDate = dateString;
            this.$store.commit('checkinDateChange', this.checkInDate);
        },
        // 체크아웃 날짜 변경
        checkoutDateChange(date, dateString) {
            this.checkOutDate = dateString;
            this.$store.commit('checkoutDateChange', this.checkOutDate);
        },
        // 성인 인원 증가
        adultUp() {
            this.adultCount++;

            if(this.adultCount > 3) {
                this.adultCount = 3;
            }

            this.$store.commit('adultChange', this.adultCount);
        },
        // 성인 인원 감소
        adultDown() {
            this.adultCount--;

            if(this.adultCount < 0) {
                this.adultCount = 0;
            }

            if(this.adultCount === 0) {
                if(this.childCount > 0) {
                    //this.childCount = 0;
                    this.adultCount = 1;
                    alert('아동은 최소 1명 이상의 성인 보호자가 동반 되어야 합니다.');
                }
            }

            this.$store.commit('adultChange', this.adultCount);
        },
        // 아동 인원 증가
        childUp() {
            this.childCount++;  

            if(this.childCount > 3) {
                this.childCount = 3;
            }

            if(this.adultCount === 0) {
                alert('아동은 최소 1명 이상의 성인 보호자가 동반 되어야 합니다.');
                this.childCount = 0;
            }

            this.$store.commit('childChange', this.childCount);
        },
        // 아동 인원 감소
        childDown() {
            this.childCount--;
            if(this.childCount < 0) {
                this.childCount = 0;
            }

            this.$store.commit('childChange', this.childCount);
        },
    },
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

.ant-calendar-picker-input.ant-input {
    border: 0px;
    /* padding: 0px; */
    padding-left: 0px;
}

#reservationDesktop .ant-calendar-picker-clear, .ant-calendar-picker-icon {
    position: relative;
    margin-top: 0px;
}

#reservationDesktop .ant-calendar-picker div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#reservationDesktop .ant-calendar-picker-clear {
    display: none;
}

#reservationDesktop .ant-calendar-picker-input.ant-input {
    font-size: 21px;
    font-family: 'NotoSansBold';
    font-weight: 700;
    color: black;
    width: 200px;
    cursor: pointer;
} 

#reservationMobile .ant-calendar-picker-clear, .ant-calendar-picker-icon {
    position: relative;
    margin-top: 0px;
}

#reservationMobile .ant-calendar-picker div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#reservationMobile .ant-calendar-picker-clear {
    display: none;
}

#reservationMobile .ant-calendar-picker-input.ant-input {
    font-weight: 700;
    font-family: 'NotoSansBold';
    color: black;
    cursor: pointer;
    padding-left: 8px;
} 
</style>