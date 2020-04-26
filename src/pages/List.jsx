import React, {Component} from 'react'
import './style.css'

class List extends Component{
  constructor(props){
    super(props)
    this.state={
      index: null
    }
  }
  toggleComplated = (index)=>{
    console.log(index)
    this.props.toggleComplated(index)
  }
  delItem = (index)=>{
    this.props.delItem(index)
  }
  showDel = (index)=>{
    this.setState({
      index
    })
  }
  hideDel = ()=>{
    this.setState({
      index: null
    })
  }
  componentWillReceiveProps(){
    
  }
  render(){
    return (
      <ul className="list">
        {
          this.props.list.map((el,index)=>{
            return(
              <li key={index} onMouseEnter={this.showDel.bind(this,index)} onMouseLeave={this.hideDel}>
                <i className={el.status === 0?'quan':'complated'} onClick={this.toggleComplated.bind(this,index)}></i>
                <p>{el.context}</p>
                <em className={index === this.state.index?'del':'noDel'} onClick={this.delItem.bind(this,index)}>X</em>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default List