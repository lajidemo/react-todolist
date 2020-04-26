import React, {Component} from 'react'
import './style.css'
import Top from './Top'
import List from './List'
import Bom from './Bom'

class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: 'All',
      list: [
        {
          status: 0,
          context: '啊时间的话噶几红烧冬瓜',
        },
        {
          status: 1,
          context: '啊时间的话噶几红烧冬瓜',
        },
      ],
      showList: []
    }
  }
  getList = (val = 'All')=>{
    let list = []
    if(val === 'All'){
      list = this.state.list
    }else if(val === 'Active'){
      list = this.state.list.filter(el=>{
        return el.status === 0
      })
    }else if(val === 'Complated'){
      list = this.state.list.filter(el=>{
        return el.status === 1
      })
    }
    console.log(list,'===')
    this.setState({
      showList: list
    })
  }
  toggleAll = ()=>{
    const list = JSON.parse(JSON.stringify(this.state.list))
    let statusArr = []
    list.forEach(el=>{
      statusArr.push(el.status)
    })
    let flag = statusArr.includes(0)
    if(flag){
      list.forEach(el=>{
        el.status = 1
      })
    }else{
      list.forEach(el=>{
        el.status = 0
      })
    }
    this.setState({
      list
    })
  }
  toggleComplated = (index)=>{
    const list = JSON.parse(JSON.stringify(this.state.list))
    list[index].status = list[index].status===0? 1:0
    this.setState({
      list
    })
  }
  addItem = (val)=>{
    this.setState({
      list: [...this.state.list,{
        status: 0,
        context: val,
      }]
    })
  }
  delItem = (index)=>{
    const list = JSON.parse(JSON.stringify(this.state.list))
    list.splice(index,1)
    this.setState({
      list
    })
  }
  delAll = ()=>{
    const list = JSON.parse(JSON.stringify(this.state.list))
    let activeList = []
    list.forEach(el=>{
      if(el.status === 0){
        activeList.push(el)
      }
    })
    this.setState({
      list: JSON.parse(JSON.stringify(activeList))
    })
  }
  render(){
    return (
      <div className='todo'>
        <h1>TODO-REACT</h1>
        <div className="con">
          <Top list={this.state.list} addItem={this.addItem} toggleAll={this.toggleAll}></Top>
          <List list={this.state.showList.length? this.state.showList:this.state.list} delItem={this.delItem} toggleComplated={this.toggleComplated}></List>
          <Bom list={this.state.list} getList={this.getList} delAll={this.delAll}></Bom>
        </div>
      </div>
    )
  }
}

export default Todo