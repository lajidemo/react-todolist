import React, {Component} from 'react'
import './style.css'

class Bom extends Component{
  constructor(props){
    super(props)
    this.state={
      active: 'All'
    }
  }
  getLeft = ()=>{
    let count = 0
    this.props.list.forEach(el=>{
      if(el.status === 0){
        count++
      }
    })
    return count === 1? '1 item left': `${count} items left`
  }
  filter = (val)=>{
    this.setState({
      active: val
    })
    this.props.getList(val)
  }
  render(){
    return (
      <div className="bom">
        <div className="left">{this.getLeft()}</div>
        <div className="center">
          <span className={this.state.active === 'All'? 'active': ''} onClick={this.filter.bind(this,'All')}>All</span>
          <span className={this.state.active === 'Active'? 'active': ''} onClick={this.filter.bind(this,'Active')}>Active</span>
          <span className={this.state.active === 'Complated'? 'active': ''} onClick={this.filter.bind(this,'Complated')}>Complated</span>
        </div>
        <div className="right" onClick={this.props.delAll}>Clear Complated</div>
      </div>
    )
  }
}

export default Bom