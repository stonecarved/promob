<script>
export default  {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      img: String = require("../assets/img/tp.png"),
    };
  },
  methods:{
    Sub(e){
        e.preventDefault();
        
    },
    OK(){
      alert('ok');
    }
  }
};
</script>