<template>
  <div class="notice">
    <h3>{{ $t('notice_board') }}</h3>
    <div class="notice_list">
      <div
        class="notice_list_item"
        v-for="notice in noticeList"
        :key="notice.id"
      >
        {{ notice.text }}
        <div class="list_item_bts">
          <button class="delete" @click="deleteNotice(notice.id)">
            {{ $t('delete') }}
          </button>
        </div>
      </div>

      <div class="notice_list_item" v-show="showCreateNotice">
        <textarea
          name="notice"
          id="notice"
          v-model="noticeText"
          ref="newNoticeText"
        ></textarea>
        <div class="list_item_bts">
          <button class="save" @click="addNotice">{{ $t('save') }}</button>
          <button class="delete" @click="deleteNewNotice">
            {{ $t('delete') }}
          </button>
        </div>
      </div>

      <div class="create_notice" @click="createNotice">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreateNotice: false,
      noticeText: '',
      noticeList: JSON.parse(localStorage.getItem('noticeList')) || [],
    };
  },
  methods: {
    createNotice() {
      this.showCreateNotice = true;
      this.$nextTick(() => {
        this.$refs.newNoticeText.focus();
      });
    },
    addNotice() {
      const notice = {
        id: Date.now(),
        text: this.noticeText,
      };
      this.noticeList.push(notice);
      localStorage.setItem('noticeList', JSON.stringify(this.noticeList));
      this.deleteNewNotice();
    },
    deleteNotice(noticeId) {
      const deleteNoticeId = this.noticeList.findIndex((notice) => {
        return notice.id === noticeId;
      });
      this.noticeList.splice(deleteNoticeId, 1);
      localStorage.setItem('noticeList', JSON.stringify(this.noticeList));
    },
    deleteNewNotice() {
      this.showCreateNotice = false;
      this.noticeText = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.notice {
  color: #fff;
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    margin: 0 0 8px 0;
    color: #f5f0f1;
  }
  .notice_list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
    .notice_list_item {
      background: #1f1c1ccc;
      border-radius: 10px;
      padding: 24px;
      min-height: 100px;
      width: 300px;
      color: #fff;
      margin-right: 20px;
      margin-bottom: 20px;
      position: relative;
      textarea {
        resize: none;
        min-height: 70px;
        width: 100%;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 16px;
        outline: none;
      }
      .list_item_bts {
        position: absolute;
        bottom: 10px;
        right: 10px;
        .delete {
          background: transparent;
          border: none;
          color: #e50d29;
          cursor: pointer;
        }
        .save {
          color: green;
          cursor: pointer;
          background: transparent;
          border: none;
        }
      }
    }
    .create_notice {
      padding: 24px;
      min-height: 100px;
      width: 300px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        fill: #fff;
        width: 50px;
      }
    }
  }
}
</style>
