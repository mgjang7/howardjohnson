<template>
<div>
    <!-- web -->
    <div class="hidden lg:block w-full">
        <div class="w-full relative">
          <div class="absolute w-full h-[343px] top-0 left-0 z-0">
              <div class="relative w-full h-full">
                  <div class="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-20">

                  </div>
                  <div class="absolute top-0 left-0 w-full h-full z-10">
                      <!-- 배경 이미지 -->
                      <img src="~/assets/images/footers/footer-background.png" alt="" class="w-full h-full" />
                  </div>
              </div>
          </div>
          <div class="absolute w-full h-[343px] top-0 left-0 z-30 flex items-center">
              <div class="w-full flex justify-center items-center">
                  <div class="container-box">
                      <div class="w-full flex justify-between items-start">
                        <div class="flex items-center text-[20px] noto-sans-bold">
                          <span class="text-white mr-4">
                            고객센터
                          </span>
                          <span class="text-white mr-2">
                            Tel.
                          </span>
                          <span class="howard-color mr-6">
                            (+82) 032 722 0000
                          </span>
                          <span class="text-white mr-2">
                            E-mail
                          </span>
                          <span class="howard-color">
                            hellohojo@hojoincheon.com
                          </span>
                        </div>
                        <div class="space-x-[24px] flex justify-end items-center">
                          <img src="~/assets/images/footers/facebook.svg" alt="" class="cursor-pointer" @click="popupOpen('facebook')" />
                          <img src="~/assets/images/footers/instagram.svg" alt="" class="cursor-pointer" @click="popupOpen('instagram')" />
                          <img src="~/assets/images/footers/bird.png" alt="" class="cursor-pointer" @click="popupOpen('tripadvisor')" />
                          <img src="~/assets/images/footers/p.png" alt="" class="cursor-pointer" @click="popupOpen('kakao')" />
                          <img src="~/assets/images/footers/blog.svg" alt="" class="cursor-pointer" @click="popupOpen('naverblog')" />
                        </div>
                      </div>
                      <div class="w-full border-b-2 border-[#FFFFFF] my-8">

                      </div>
                      <div class="w-full flex flex-row">
                        <div class="basis-[80%]">
                          <div class="w-full flex items-center text-[16px] space-x-[8px] mb-[44px] noto-sans-bold">
                            <span class="howard-color">
                              <NuxtLink to="/customersupport/privacypolicy" class="hover:text-[#EE792F]">개인정보처리방침</NuxtLink>
                            </span>
                            <span class="howard-color">|</span>
                            <span class="howard-color">
                              <NuxtLink to="/customersupport/serviceterms" class="hover:text-[#EE792F]">이용약관</NuxtLink>
                            </span>
                            <span class="howard-color">|</span>
                            <span class="howard-color">
                              <a href="/file/howardJohnson_eBrochure.pdf" class="hover:text-[#EE792F]" target="_blank">
                                E-브로셔
                              </a>
                            </span>
                          </div>
                          <div class="w-full mb-2">
                            <span class="text-[14px] text-white">
                                주식회사 미래인베스트먼트 | 인천광역시 중구 신도시남로 142번길 6 | 사업자등록번호 377-81-00627 | 개인정보보호책임자 김진호
                            </span>
                          </div>
                          <div class="w-full">
                            <span class="text-[14px] text-white">
                                Copyright ⓒ 2018 Howard Johnson Incheon Airport All Rights Reserved.
                            </span>
                          </div>
                        </div>
                        <div class="basis-[20%] flex justify-end items-center">
                            <img src="~/assets/images/footers/korea-quality-mark.png" alt="" class="" />
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    <!-- mobilie -->
    <div class="lg:hidden w-full">
        <div class="w-full relative">
            <div class="absolute w-full h-[388px] top-0 left-0 z-0">
                <div class="relative w-full h-full">
                    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-20">

                    </div>
                    <div class="absolute top-0 left-0 w-full h-full z-10">
                        <!-- 배경 이미지 -->
                        <img src="~/assets/images/footers/footer-background-mobile.png" alt="" class="w-full h-full" />
                    </div>
                </div>
            </div>
            <div class="absolute w-full h-[388px] top-0 left-0 z-30 flex items-center px-4">
              <div class="w-full flex flex-col">
                  <div class="w-full flex">
                    <div class="basis-[80%] text-[12px] noto-sans-bold">
                        <div class="w-full flex mb-2">
                            <span class="text-white mr-1">
                              고객센터
                            </span>
                            <span class="text-white mr-2">
                              Tel.
                            </span>
                            <span class="howard-color">
                              (+82) 032 722 0000
                            </span>
                        </div>
                        <div class="w-full flex">
                            <span class="text-white mr-2">
                              E-mail
                            </span>
                            <span class="howard-color">
                              hellohojo@hojoincheon.com
                            </span>
                        </div>
                    </div>
                    <div class="basis-[20%] flex justify-end items-center">
                        <img src="~/assets/images/footers/korea-quality-mark.png" alt="" class="w-[56px] h-[52px]" />
                    </div>
                  </div>
                  <div class="w-full border-b-2 border-[#FFFFFF] my-4">

                  </div>
                  <div class="w-full flex items-center text-[12px] space-x-[4px] mb-6 noto-sans-bold">
                      <span class="howard-color">
                        <NuxtLink to="/customersupport/privacypolicy" class="hover:text-[#EE792F]">개인정보처리방침</NuxtLink>
                      </span>
                      <span class="howard-color">|</span>
                      <span class="howard-color">
                        <NuxtLink to="/customersupport/serviceterms" class="hover:text-[#EE792F]">이용약관</NuxtLink>
                      </span>
                      <span class="howard-color">|</span>
                      <span class="howard-color">
                        <a href="/file/howardJohnson_eBrochure.pdf" class="hover:text-[#EE792F]" target="_blank">
                          E-브로셔
                        </a>
                      </span>
                  </div>
                  <div class="w-full mb-2">
                    <span class="text-[10px] text-white tracking-[-0.5px]">
                        주식회사 미래인베스트먼트 | 인천광역시 중구 신도시남로 142번길 6<br>사업자등록번호 377-81-00627 | 개인정보보호책임자 김진호
                    </span>
                  </div>
                  <div class="w-full">
                      <span class="text-[10px] text-white tracking-[-0.5px]">
                          Copyright ⓒ 2018 Howard Johnson Incheon Airport All Rights Reserved.
                      </span>
                  </div>
                  <div class="w-full border-b-2 border-[#FFFFFF] my-4">

                  </div>
                  <div class="w-full flex justify-center space-x-[16px]">
                    <img src="~/assets/images/footers/facebook.svg" alt="" class="cursor-pointer" @click="popupOpen('facebook')" />
                    <img src="~/assets/images/footers/instagram.svg" alt="" class="cursor-pointer" @click="popupOpen('instagram')" />
                    <img src="~/assets/images/footers/bird.png" alt="" class="cursor-pointer" @click="popupOpen('tripadvisor')" />
                    <img src="~/assets/images/footers/p.png" alt="" class="cursor-pointer" @click="popupOpen('kakao')" />
                    <img src="~/assets/images/footers/blog.svg" alt="" class="cursor-pointer" @click="popupOpen('naverblog')" />
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
        return {}
    },
    methods: {
      popupOpen(targetPage) {
        switch(targetPage) {
          case "facebook" : window.open("https://www.facebook.com/HojoDaysIncheon/?business_id=147242079372203", "_blank"); break;
          case "instagram" : window.open("https://www.instagram.com/hojoincheon_dayshotel", "_blank"); break;
          case "naverblog" : window.open("https://post.naver.com/hojoincheon", "_blank"); break;
          case "tripadvisor" : window.open("https://www.tripadvisor.co.kr/Hotel_Review-g297889-d13345455-Reviews-Howard_Johnson_Incheon_Airport-Incheon.html", "_blank"); break;
          case "kakao" : window.open("https://pf.kakao.com/_xfwjzC", "_blank"); break;
        }  
      }
      
        // naverMapPopupOpen() {
        //     window.open("https://map.naver.com/v5/entry/place/1440469613?c=14080529.2124107,4508120.8013719,15,0,0,0,dh", "_blank");
        // },
    },
}
</script>

<style>

</style>
