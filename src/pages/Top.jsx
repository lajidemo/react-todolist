import React, {Component} from 'react'
import './style.css'

class Top extends Component{
  constructor(props){
    super(props)
    this.state={
      inputVal: ''
    }
  }
  getStatus = ()=>{
    let flag = false;
    let statusArr= []
    this.props.list.forEach((el)=>{
      statusArr.push(el.status)
    })
    flag = !statusArr.includes(0)
    return flag? 'complated': 'quan'
  }
  changeInput = (e)=>{
    this.setState({
      inputVal: e.target.value
    })
  }
  keyUp = (e)=>{
    if(e.keyCode === 13){
      this.props.addItem(this.state.inputVal)
      this.setState({
        inputVal: ''
      })
    }
  }
  render(){
    return (
      <div className="top">
        <i className={this.getStatus()} onClick={this.props.toggleAll}></i>
        <div className="input">
          <input type="text" value={this.state.inputVal} onKeyUp={this.keyUp} onChange={this.changeInput} placeholder='todo something'/>
        </div>
      </div>
    )
  }
}

export default Top