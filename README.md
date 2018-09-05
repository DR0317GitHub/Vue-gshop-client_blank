CartControl组件
      添加或者减少食物的数量
  判断CartControl组件中需要什么数据,通过props传入
  在ShopGoods中直接使用,并定义数据,通过标签属性将数据传输给CartControl组件
  给加号和减号绑定监听事件
  如果有count的时候才显示数值和减号
  分发同步action
  根据同步action判断增加还是减少
  在mutation中写入增加或者减少的函数
   Vue.set( food, 'count', 1)
    Vue中的set方法,可以实现数据绑定,当数据更新的时候,页面也会更新(Vue文档中详细介绍)
      注:引入Vue
Food组件
    点击食物弹出的食物详情图片
  创建Food静态组件
  在FoodGoods中引入应用
  当点击某一个食物的时候,Food组件显示
   在Food组建中控制组件显示或者隐藏v-show="isShow"
   在父组件中 <Food ref="food" :food="food" />通过标签属性调用子组件中的函数
    代码解析(子组件中调用的隐藏与显示的函数),点击遮罩层或者点击箭头,Food组件消失
       toggleShow () {
              this.isShow = !this.isShow
            }
ShopCart购物车
  分析:
    count大于0的food的数组,就是购物车列表中显示的数据
    计算属性,当相关的数据任何一个发生了变化,都会重新进行计算,效率较低
    定义为一个状态,手动添加数据或者删除数据
      motation中,当count===0时,删除这个cartFood,
      将cartFood,传进组件中,
      getters中,设计两个计算属性,总数量和总价格
      总数量:reduce统计(第一个数值,第二个数值),当第二轮的时候(先前两个数值的总和,当前的数)
       totalCount (state) {
          return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
        },

