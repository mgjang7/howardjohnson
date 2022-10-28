<template>
  <div class="relative w-full h-[120px]" @mouseover="onOver" @mouseleave="onLeave">
    <div class="absolute w-full h-[120px] bg-[#FF874E] z-0">
      <div class="container w-full h-[120px] flex">
        <div class="basis-[20%] flex items-center">
          <NuxtLink to="/" class="">
            <!-- <img src="~/assets/images/home_logo.png" class="" alt="" />   -->
            홈으,로
          </NuxtLink>
        </div>
        <div class="basis-[60%] flex flex-row justify-center items-center text-[16px] text-white">
          <div class="basis-[16.6%] flex justify-center items-center hover:font-black">
            <NuxtLink to="/abouthotel" class="cursor-pointer hover:no-underline hover:text-white">호텔소개</NuxtLink>
          </div>
          <div class="basis-[16.6%] flex justify-center items-center hover:font-black cursor-pointer">
            <NuxtLink to="/specialoper" class="hover:font-black cursor-pointer hover:no-underline hover:text-white">스페셜오퍼</NuxtLink>
          </div>
          <div class="basis-[16.6%] flex justify-center items-center hover:font-black cursor-pointer">
            <NuxtLink to="/guestroom" class="hover:font-black cursor-pointer hover:no-underline hover:text-white">객실</NuxtLink>
          </div>
          <div class="basis-[16.6%] flex justify-center items-center hover:font-black cursor-pointer">
            <NuxtLink to="/dining" class="hover:font-black cursor-pointer hover:no-underline hover:text-white">다이닝</NuxtLink>
          </div>
          <div class="basis-[16.6%] flex justify-center items-center hover:font-black cursor-pointer">
            <NuxtLink to="/additionalfacilities" class="hover:font-black cursor-pointer hover:no-underline hover:text-white">부대시설</NuxtLink>
          </div>
          <div class="basis-[16.6%] flex justify-center items-center hover:font-black cursor-pointer">
            <NuxtLink to="/customersupport/notice" class="hover:font-black cursor-pointer hover:no-underline hover:text-white">고객지원</NuxtLink>
          </div>
        </div>
        <div class="basis-[20%] flex justify-end items-center">
          <div class="">
            <a href="#" class="bg-[#FFFFFF] text-[#FF874E] text-[16px] py-2 px-4 rounded-full hover:no-underline hover:text-white hover:bg-blue-400">예약하기</a>
          </div>
          <div class="ml-[20px]">
            <a href="#" class="bg-[#FF874E] text-white text-[16px] py-2 px-4 rounded-full border border-white hover:no-underline hover:text-white hover:bg-blue-400">한국어</a>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
        <div v-if="isOver" class="absolute w-full h-[160px] mt-[120px] flex z-10 bg-white border-b border-gray-400">
          <div class="container w-full h-[160px] flex">
            <div class="basis-[20%]">

            </div>
            <div class="basis-[60%] flex flex-row justify-center items-center text-gray-500 text-[14px] space-y-[2px]">
              <div class="basis-[16.6%] h-full flex flex-col items-center">
                
              </div>
                <div class="basis-[16.6%] h-full flex flex-col items-center space-y-[8px]">
                    <NuxtLink to="/specialoper/package" class="hover:no-underline hover:text-[#FF874E] pt-[10px]">패키지</NuxtLink>
                    <NuxtLink to="/specialoper/event" class="hover:no-underline hover:text-[#FF874E]">이벤트</NuxtLink>
                </div>
                <div class="basis-[16.6%] h-full flex flex-col items-center space-y-[8px]">
                  <NuxtLink to="/guestroom/superior" class="hover:no-underline hover:text-[#FF874E] pt-[10px]">슈페리어</NuxtLink>
                  <NuxtLink to="/guestroom/deluxe" class="hover:no-underline hover:text-[#FF874E]">디럭스</NuxtLink>
                  <NuxtLink to="/guestroom/premier" class="hover:no-underline hover:text-[#FF874E]">프리미어</NuxtLink>
                  <NuxtLink to="/guestroom/sweet" class="hover:no-underline hover:text-[#FF874E]">스위트</NuxtLink>
                </div>
                <div class="basis-[16.6%] h-full flex flex-col items-center space-y-[8px]">
                  <NuxtLink to="/dining/risedine" class="hover:no-underline hover:text-[#FF874E] pt-[10px]">라이즈 앤 다인</NuxtLink>
                  <NuxtLink to="/dining/daybreak" class="hover:no-underline hover:text-[#FF874E]">데이브레이크</NuxtLink>
                </div>
                <div class="basis-[16.6%] h-full flex flex-col items-center space-y-[8px]">
                  <NuxtLink to="/additionalfacilities/theisland7" class="hover:no-underline hover:text-[#FF874E] pt-[10px]">더 아일랜드 7</NuxtLink>
                  <NuxtLink to="/additionalfacilities/megastar" class="hover:no-underline hover:text-[#FF874E]">메가스타</NuxtLink>
                  <NuxtLink to="/additionalfacilities/dayspdr" class="hover:no-underline hover:text-[#FF874E]">데이즈 PDR</NuxtLink>
                  <NuxtLink to="/additionalfacilities/businesscenter" class="hover:no-underline hover:text-[#FF874E]">비즈니스 센터</NuxtLink>
                </div>
                <div class="basis-[16.6%] h-full flex flex-col items-center space-y-[8px]">
                  <NuxtLink to="/customersupport/notice" class="hover:no-underline hover:text-[#FF874E] pt-[10px]">공지사항</NuxtLink>
                  <NuxtLink to="/customersupport/faq" class="hover:no-underline hover:text-[#FF874E]">FAQ</NuxtLink>
                  <NuxtLink to="/customersupport/trafficinformation" class="hover:no-underline hover:text-[#FF874E]">교통/주차안내</NuxtLink>
                  <NuxtLink to="/customersupport/customersuggestion" class="hover:no-underline hover:text-[#FF874E]">고객의 소리</NuxtLink>
                  <NuxtLink to="/customersupport/travelcourse" class="hover:no-underline hover:text-[#FF874E]">여행코스</NuxtLink>
                </div>
            </div>
            <div class="basis-[20%]">

            </div>
          </div>
        </div>
    </transition>
  </div>
</template>

<script>
//import tailwind from '@nuxtjs/tailwindcss';
export default {
  name: "topMenu",
  data() {
    return {
      isOver: false,
      isLeave: false,

      
    }
  },

  created() {
    
  },
  methods: {
    onOver() {
      this.isOver = true;
      this.isLeave = false;
    },
    onLeave() {
      this.isOver = false;
      this.isLeave = true;
    },

    activateMenu(num) {
      switch(num) {
        case 1 : this.isActivateMenu1 = true;
                 this.isActivateMenu2 = false;
                 this.isActivateMenu3 = false;
                 this.isActivateMenu4 = false;
                 this.isActivateMenu5 = false;
                 this.isActivateMenu6 = false;
                 this.$router.push({path: '/abouthotel'});
        break;
        case 2 : this.isActivateMenu1 = false;
                 this.isActivateMenu2 = true;
                 this.isActivateMenu3 = false;
                 this.isActivateMenu4 = false;
                 this.isActivateMenu5 = false;
                 this.isActivateMenu6 = false;
                 this.$router.push({path: '/specialoper'});
        break;
        case 3 : this.isActivateMenu1 = false;
                 this.isActivateMenu2 = false;
                 this.isActivateMenu3 = true;
                 this.isActivateMenu4 = false;
                 this.isActivateMenu5 = false;
                 this.isActivateMenu6 = false;
                this.$router.push({path: '/guestroom'});
        break;
        case 4 : this.isActivateMenu1 = false;
                 this.isActivateMenu2 = false;
                 this.isActivateMenu3 = false;
                 this.isActivateMenu4 = true;
                 this.isActivateMenu5 = false;
                 this.isActivateMenu6 = false;
                 this.$router.push({path: '/dining'});
        break;
        case 5 : this.isActivateMenu1 = false;
                 this.isActivateMenu2 = false;
                 this.isActivateMenu3 = false;
                 this.isActivateMenu4 = false;
                 this.isActivateMenu5 = true;
                 this.isActivateMenu6 = false;
                 this.$router.push({path: '/additionalfacilities'});
        break;
        case 6 : this.isActivateMenu1 = false;
                 this.isActivateMenu2 = false;
                 this.isActivateMenu3 = false;
                 this.isActivateMenu4 = false;
                 this.isActivateMenu5 = false;
                 this.isActivateMenu6 = true;
                this.$router.replace({path: '/customersupport/faq'});
        break;
      }
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  /* transition: opacity 2s; */
  /* transition: opacity .2s; */
  transition: all 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

