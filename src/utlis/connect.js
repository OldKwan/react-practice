import React, { Component } from 'react'
import { StoreContext } from './context'


/* 
    connect 高阶函数实现
    我们常用的 react-redux 的 connect 为例 connect(需要映射的数据, 需要映射的方法)(需用到公共状态的组件)   --- 柯里化
    这里做的动作其实是
        一, 将公共状态/方法映射到子组件的 props, 使之可以获取/调用
        二, 监听 store的变化, 并通知子组件更新
 */

 /* 
    connect封装好后, 此时还没有完成真正的 "封装", 此时 此文件还依赖着 store, 而 store是业务代码
    那如何断开依赖? (注意: 这里说的是断开 store依赖, 而不是不使用 store)
     * 把 store 放在顶层对象里面 (即: React.createContext 创建的可祖先--后裔 传值顶层)
  */
export default function(mapStateToProps, mapDispatchToProps) {
    return function(WrapperComponent) {
        class EnhanceComponent extends Component {
            constructor(props, context){
                super(props, context);
                this.state = {
                    storeState: mapStateToProps(context.getState()),
                }
            }

            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState()),
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe && this.unsubscribe()
            }

            render() {
                const { storeState } = this.state
                return <WrapperComponent
                    {...storeState}
                    {...mapDispatchToProps(this.context.dispatch)}
                />
            }
        }
        EnhanceComponent.contextType = StoreContext
        return EnhanceComponent
    }
}