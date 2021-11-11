new Vue({
  el: '#app',
  data(){
    return {
      // 条件の判断に使う変数
      isActive: false
    };
  },
  methods:{
    // toggleButtonが実行されたら(押した時に)trueを入れる
    toggleButton(){
      this.isActive=!this.isActive;
    }
  }
});