new Vue({
  el: '#app',
  data(){
    return {
      // 条件の判断に使う変数
      Changejs: false,
      range:1,
      red:0,
      hartvalue:0
    };
  },
  methods:{
    // changeButtonが実行されたら(押した時に)trueを入れる
    changeButton(){
      this.Changejs=!this.Changejs;
      
    },
    rangeButton(){
      this.hartvalue=this.range;
    }
    
  },
  computed:{
    bindStyle(){
      return `font-size: ${this.range}px;
      color: rgb(${this.red}, 210, 255)`;
    }
  }
});