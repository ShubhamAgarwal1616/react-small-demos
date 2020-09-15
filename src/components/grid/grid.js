import React, {Suspense} from 'react'
import Block from './block'
import '../../css/grid.css';
// import Labels from './labels'
const Labels = React.lazy(() => import('./labels'));

export default class Grid extends React.Component {
  state = {
    room: [],
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let room = [
      ["0","0","0","0","0","0","0","0","x","e"],
      ["0","0","0","0","0","0","0","x","0","0"],
      ["0","0","0","0","0","0","x","0","0","x"],
      ["0","0","0","0","0","x","0","0","x","0"],
      ["0","0","0","0","x","0","0","x","0","0"],
      ["0","0","0","x","0","0","0","x","0","0"],
      ["0","0","x","0","0","0","0","x","0","0"],
      ["0","x","0","0","0","0","0","x","0","0"],
      ["x","0","0","0","0","0","0","x","0","0"],
      ["b","0","x","0","0","0","0","0","0","0"]
    ]
    this.setState({room})
  }

  getEntity = (entity) => {
    return entity !== "0" ? entity : "_"
  }

  render() {
    let gridBlocks = [...Array(this.state.room.length).keys()].map((row, rowIndex) => {
      let gridColumn = [...Array(this.state.room.length).keys()].map((col, colIndex) => {
        return(
          <Block entity={this.getEntity(this.state.room[col][row])} key={colIndex}/>
        )
      })
      return(
        <div className={"grid-row"} key={rowIndex}>
          {gridColumn}
        </div>
      )
    })

    return (
      <div ref={this.props.refer} id={'divToPrint'}>
        <h1>Legacy Of Brynjolf</h1>
        <div className={"grid"}>
          {gridBlocks}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Labels/>
        </Suspense>
      </div>
    )
  }
}