<template>
  <div class="home-page">
    <div class="header">
      <div class="member-info">
        <div class="member-name">Huỳnh Thanh Sang</div>
        <div class="member-rank">
          <div :style="{backgroundColor: progressColor(3)}">
            Hạng thành viên
          </div>
          <span>
            Chi tiết tiến độ
            <i class="fas fa-chevron-right"></i>
          </span>
        </div>
        <div class="custom-progress">
          <el-progress :percentage="percentage" :show-text="false" :color="progressColor(3)">
          </el-progress>
          <i class="far fa-check-circle" :style="{color: percentage===100 ? progressColor(3):''}"></i>
        </div>
        <marquee class="member-slider">
          Đã giữ hạng thành công! Sử dụng thêm <span>789.000đ</span> trước ngày <span>01/08</span> để thăng hạng.
        </marquee>
        <!-- <button>
          <img src="../assets/img/coin.png" alt="">
          +30 xu - Điểm danh
        </button> -->
      </div>
      <div class="member-card" :style="{backgroundColor: progressColor(3)}">
        <span>Từ 30/03</span>
      </div>
    </div>
    <div class="body">
      <div class="scroll-container" :class="{'scrolled-up': scrolledUp}" ref="scrollContainer" @touchstart="handleTouchStart"
      @touchend="handleTouchEnd">
        <div class="crossbar"></div>
        <div class="content" ref="scrollContent">
          <div class="wallet">
            <div class="wallet-coins"  @click="goToWalletPage">
              <div class="amount">
                <img src="../assets/img/coin.png" alt="">
                <span>10000</span>
                <div>Xu</div>
              </div>
              <div class="detail">
                <span>Dữ liệu tích xu</span>
                <i class="fas fa-caret-right"></i>
              </div>
            </div>
            <div class="wallet-benefits" @click="goToBenefitPage">
              <div class="amount">
                <span>10</span>
                <div>đặc quyền</div>
                <img src="../assets/img/benefits.png" alt="">
              </div>
              <div class="detail">
                <span>Xem danh sách</span>
                <i class="fas fa-caret-right"></i>
              </div>
            </div>
          </div>
          <div class="invite-promo">
            <div class="title">Mời bạn bè Nhận quà khủng</div>
            <span>Xem chi tiết <i class="fas fa-caret-right"></i></span>
            <img src="../assets/img/many-coins.png" alt="">
          </div>
          <div class="container">
            <div class="label">Dành cho nhân viên</div>
            <div class="btn-group">
              <div class="btn">
                <img src="../assets/img/fingerprint.png" alt="">
                <span>Chấm công</span>
              </div>
              <div class="btn">
                <img src="../assets/img/fingerprint.png" alt="">
                <span>Chấm công</span>
              </div>
              <div class="btn">
                <img src="../assets/img/fingerprint.png" alt="">
                <span>Chấm công</span>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="label">Đặc quyền ưu tiên</div>
            <div class="btn-group">
              <div class="btn">
                <img src="../assets/img/gift-icon.png" alt="">
                <span>Ưu đãi hiện có</span>
              </div>
              <div class="btn">
                <img src="../assets/img/gift-icon.png" alt="">
                <span>Ưu đãi hiện có</span>
              </div>
              <div class="btn">
                <img src="../assets/img/gift-icon.png" alt="">
                <span>Ưu đãi hiện có</span>
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
  props: {
  },
  data() {
    return {
      scrolledUp: false,
      startY: 0,
      endY: 0,
      spendingMoney: 1900,
      totalMoneyNextLevel: 2000
    }
  },
  computed: {
    percentage() {
      return this.spendingMoney*100/this.totalMoneyNextLevel
    }
  },
  methods: {
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

    goToWalletPage() {
      this.$router.push({path: '/wallet'})
    },

    goToBenefitPage() {
      this.$router.push({path: '/member-benefits'})
    },

    progressColor(rank) {
      switch (rank) {
        case 2:
          return '#c0c0c0'
        case 3:
          return '#ffcc4f'
        case 4:
          return '#00CDCD'
        case 1:
          return '#1eac12'
        default:
          return '#1eac12'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.home-page {
  max-width: 470px;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, #0057cf 0%, #003e93 65%);
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 30%;
    max-height: 220px;
    padding: 20px;                                                 
    box-sizing: border-box;
    display: flex;
    .member-info {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: start;
      color: #ffffff;
      padding: 12px;
      padding-bottom: 0;
      .member-name {
        font-weight: bold;
        margin-top: 12px;
      }
      .member-rank {
        margin-top: 12px;
        width: 100%;
        display: flex;
        font-size: 12px;
        align-items: center;
        div {
          font-weight: 600;
          padding: 4px 8px;
          background-color: #ffcc4f;
          border-radius: 8px;
        }
        span {
          font-size: 10px;
          margin-left: 6px;
          .fa-chevron-right {
            margin-left: 4px;
          }
        }
      }
      .custom-progress {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 12px;
        .el-progress {
          width: 100%;
        }
        .fa-check-circle {
          margin-left: 4px;
        }
      }
      .member-slider {
        margin-top: 12px;
        font-size: 12px;
        span {
          color: yellow;
          font-weight: 600;
        }
      }
      button {
        margin-top: 12px;
        border: none;
        border-radius: 14px;
        padding: 4px 6px;
        font-size: 12px;
        display: flex;
        align-items: center;
        color: #0d2540;
        background-color: #fff;
        img {
          width: 14px;
          margin-right: 6px;
        }
      }
    }
    .member-card {
      flex: 1;
      background-color: #ffcc4f;
      border-radius: 14px;
      padding: 10px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        top: -110%;
        left: -210%;
        width: 200%;
        height: 200%;
        opacity: 0;
        transform: rotate(30deg);
        
        background: rgba(255, 255, 255, 0.13);
        background: linear-gradient(
          to right, 
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 77%,
          rgba(255, 255, 255, 0.5) 92%,
          rgba(255, 255, 255, 0.0) 100%
        );
        animation: shine 10s ease-in-out infinite;
      }
      span {
        font-size: 12px;
        font-weight: 600;
        margin-top: auto;
      }
    }
  }
  .body {
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
        .wallet {
          width: 100%;
          height: 70px;
          background: radial-gradient(circle, #0057cf 0%, #003e93 65%);
          border-radius: 14px;
          padding: 12px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          color: #fff;
          .wallet-coins,.wallet-benefits {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 10px;
            font-weight: 600;
            cursor: pointer;
          }
          .wallet-benefits {
            border-left: 1px solid rgb(25, 25, 25);
          }
          .amount {
            font-size: 14px;
            display: flex;
            align-items: center;
            span {
              font-size: 18px;
              padding-right: 6px;
            }
            img {
              height: 22px;
              padding-right: 4px;
            }
            div {
              padding-right: 4px;
            }
          }
          .detail {
            font-size: 10px;
            display: flex;
            align-items: center;
            .fa-caret-right {
              margin-left: 8px;
            }
          }
        }
        .invite-promo {
          width: 100%;
          height: 100px;
          background-color: #fff;
          margin-top: 14px;
          border-radius: 14px;
          padding: 10px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-weight: 600;
          box-shadow: 0 2px 10px #e1eaff;
          position: relative;
          z-index: 0;
          .title {
            font-size: 18px;
            color: #053e94;
            z-index: 2;
            width: 70%;
          }
          span {
            background-color: #ffcc4f;
            padding: 4px 8px;
            width: fit-content;
            font-size: 12px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            z-index: 2;
            .fa-caret-right {
              margin-left: 6px;
            }
          }
          img {
            width: 110px;
            height: 90px;
            position: absolute;
            top: 5px;
            right: 10px;
            z-index: 1;
          }
        }
        .container {
          margin-top: 14px;
          .label {
            font-weight: bold;
            margin-bottom: 14px
          }
          .btn-group {
            display: flex;
            flex-wrap: wrap;
            .btn {
              display: flex;
              flex-direction: column;
              align-items: center;
              flex-basis: calc(33.333% - 20px);
              margin: 10px; 
              width: 80px;
              img {
                width: 30px;
              }
              span {
                font-size: 12px;
                font-weight: 600;
                color: #053e94;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .scrolled-up {
      height: 109%;
    }
  }
}
@keyframes shine {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0.6;
    top: -40%;
    left: -40%;
  }
  30% {
    opacity: 0;
    top: -110%;
    left: -210%;
  }
  100% {
    opacity: 0;
  }
}
</style>
