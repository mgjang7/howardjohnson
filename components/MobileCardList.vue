<template>
    <div class="w-full space-y-[8px] mb-8">
        <div v-for="(item, index) in this.list" :key="index" @click="goDetail(item.menuType, item.type, item.itemNo)">
            <div class="w-full flex justify-center">
                <div class="w-[326px] cursor-pointer">
                    <div
                    class="
                        w-[326px]
                        h-[320px]
                        bg-white
                        overflow-hidden
                        card-border
                    "
                    >
                    <img :src="item.imgSource"
                        class="w-[326px] h-[210px]"
                        alt=""
                    />
                    <div class="px-4 py-[20px]">
                        <div class="mb-1">
                            <span class="noto-sans-bold text-[14px] text-[#212121] tracking-[-0.7px]">
                                {{item.title}}
                            </span>
                        </div>
                        <p class="text-[#757575] text-[10px] tracking-[-0.5px] mb-[20px]">
                            {{item.content}}
                        </p>
                        <div class="w-full flex items-center">
                            <div v-show="item.menuType === 'travelcourse'" class="flex items-center mr-2">
                                <a-icon type="car" />
                            </div>
                            <p class="text-[#BDBDBD] text-[8px] tracking-[-0.4px]">
                                {{item.col}}
                            </p>
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