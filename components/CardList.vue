<template>
  <div class="space-y-8 pb-[120px]">
    <div class="w-full grid grid-cols-3 gap-x-4 gap-y-[104px]">
      <div v-for="(item, index) in list" :key="index" @click="goDetail(item.menuType, item.type, item.itemNo)">
          <div class="w-full h-[472] flex justify-center">
              <div class="w-full h-[472] cursor-pointer">
                  <div
                  class="
                      w-full
                      bg-white
                      overflow-hidden
                      card-border
                  "
                  >
                      <img :src="item.imgSource"
                          class="w-full"
                          alt=""
                      />
                      <div class="px-4 py-[20px]">
                          <div class="w-full mb-1">
                              <p class="noto-sans-bold text-[18px] text-[#212121] tracking-[-0.9px]">
                                  {{item.title}}
                              </p>
                          </div>
                          <div class="w-full">
                              <p class="text-[#757575] text-[14px] tracking-[-0.7px]">
                                  {{item.content}}
                              </p>
                          </div>
                          <div class="w-full mt-[22px] flex items-center">
                              <div v-show="item.menuType === 'travelcourse'" class="flex items-center mr-2">
                                <a-icon type="car" />
                              </div>
                              <p class="text-[12px] tracking-[-0.6px]" style="color: #bdbdbd;">
                                  {{item.col}}
                              </p>
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

export default {
    props: [ 'data' ],
    components: {
        
    },
    data() {
        return {
            list: [],
        }
    },
    created() {
        this.list  = this.data;
    },
    watch: {
      data() {
        this.list  = this.data;
      }
    },
    methods: {
        goDetail(menuType, type, itemNo) {
          if(menuType === 'travelcourse') {
            this.$router.push({path: '/customersupport/travelcourse/detail'});
          } else if(menuType === 'specialoper') {
            if(type === 'event') {
                this.$store.commit('specialoperTypeChange', 'event');
                this.$router.push({path: '/specialoper/event?itemNo=' + itemNo });
            } else {
                this.$store.commit('specialoperTypeChange', 'package');
                this.$router.push({path: '/specialoper/package?itemNo=' + itemNo });
            }
          }
        }
    }
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