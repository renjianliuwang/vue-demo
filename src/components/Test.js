export default {
  name: 'Test',
  props: {
    pTest:{
      type: String,
      default: '',
    }
  },
  data() {
    return {
      list: [{a: 'a1', b: 'b1'}, {a: 'a2', b: 'b2'}]
    };
  },
  computed:{},
  watch:{},
  methods:{},
  render() {
    return <div>
      <div>{this.pTest}</div>
      {this.list.map((item, index)=>(<div key={index}>
        {item.a}-{item.b}
      </div>))}
    </div>
  }
}
