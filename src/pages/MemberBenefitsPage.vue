<template>
    <div class="member-benefits">
      <el-steps :active="2">
      <el-step>
        <template #icon>
          <img src="../assets/img/diamond.png" alt="Custom Icon 3" class="custom-icon" />
        </template>
      </el-step>
      <el-step>
        <template #icon>
          <img src="../assets/img/diamond.png" alt="Custom Icon 3" class="custom-icon" />
        </template>
      </el-step>
      <el-step>
        <template #icon>
          <img src="../assets/img/diamond.png" alt="Custom Icon 3" class="custom-icon" />
        </template>
      </el-step>
      <el-step>
        <template #icon>
          <img src="../assets/img/diamond.png" alt="Custom Icon 3" class="custom-icon" />
        </template>
      </el-step>
      </el-steps>
      <div class="flicking-container">
        <Flicking :options="sliderOption" :plugins="plugins">
          <div class="panel" v-for="(panel, index) in panels" :key="index" >{{ index }}</div>
        </Flicking>
      </div>
      <div class="body">
      <div class="scroll-container" :class="{'scrolled-up': scrolledUp}" ref="scrollContainer" @touchstart="handleTouchStart"
      @touchend="handleTouchEnd">
        <div class="crossbar"></div>
        <div class="content" ref="scrollContent">
          <div class="a"></div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import { Fade } from "@egjs/flicking-plugins";
  import { Perspective } from "@egjs/flicking-plugins";
  export default {
    data() {
      return {
        panels: [{}, {}, {}],
        activePanel: 1,
        sliderOption:{ 
          bound: false, 
          nested: true,
          circular: true
        },
        plugins: [
          new Fade(),
          new Perspective({ 
            rotate: -0.5,
            scale: 0.5
          })
        ],
        scrolledUp: false,
        startY: 0,
        endY: 0,
      }
    },
    components: {
    },
    mounted() {
    this.setFade()
    },
    methods: {
      setFade() {
        this.plugins[0]._scale = 0.4
      },
      handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
    },

    handleTouchEnd(event) {
      this.endY = event.changedTouches[0].clientY;
      const scrollContent = this.$refs.scrollContent;
      const isAtTop = scrollContent.scrollTop === 0;
      if (this.startY - this.endY > 10) { 
        this.scrolledUp = true;
        this.$refs.scrollContent.style.overflowY = 'scroll'
      } else if (this.endY - this.startY > 10 && isAtTop) {
        this.scrolledUp = false;
        this.$refs.scrollContent.style.overflowY = 'hidden'
      }
    },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .member-benefits {
    max-width: 470px;
    width: 100%;
    height: 100vh;
    background: radial-gradient(circle, #0057cf 0%, #003e93 60%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-steps {
      width: 90%;
      padding: 20px;
      box-sizing: border-box;
      ::v-deep .el-step__icon {
        background: transparent;
        border: none;
        width: 10px;
      }
      ::v-deep .is-finish {
        border-color:#ffcc4f;
      }
      img {
        width: 30px;
        filter: drop-shadow(0 0 1px #ffcc4f);
      }
    }
    .flicking-container {
      margin-top: 10px;
      width: 100%;
      height: 260px;
      .flicking-viewport {
        height: 100%;
      }
      .panel {
        height: 100%;
        width: 50%;
        background-color: #ffcc4f;
        // margin: 0 14px;
        border-radius: 14px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
    .body {
      margin-top: 10px;
    width: 100%;
    flex: 1;
    position: relative;
    .scroll-container {
      background-color: #f5f8ff;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      height: 100%;
      width: 100%;
      padding-top: 20px;
      padding-bottom: 0;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      z-index: 1;
      transition: height .3s;
      overflow-y: hidden;
      .crossbar {
        width: 30%;
        height: 3px;
        background-color: #d3d3d3;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
      }
      .content {
        height: 100%;
        padding: 0px 20px;
        transition: transform 0.3s ease;
        &::-webkit-scrollbar {
          display: none;
        }
        .a {
          height: 900px
        }
      }
    }
    .scrolled-up {
      height: 120%;
    }
  }
  }
  </style>
  