/**
 * Currently not in use
 */
import React, { Component } from 'react'

const NON_NUMERIC_CLASS = 'mdl-data-table__cell--non-numeric'

class Table extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoveredIndex: null
    }
  }

  render () {
    return (
      <table className={`mdl-data-table mdl-js-data-table  mdl-shadow--2dp ${this.props.className}`}>
        <thead>
          <tr>
            {this.props.indexColumnName && <th key='id' className={NON_NUMERIC_CLASS}>{this.props.indexColumnName}</th>}
            {this.props.headers.map((header) => (
              <th key={header.name} className={NON_NUMERIC_CLASS}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.renderRow()}
        </tbody>
      </table>
    )
  }

  renderRow () {
    return this.props.rows.map((row, index) => {
      const _row = this.props.renderRow(row, this.state.hoveredIndex === index, index)
      return React.cloneElement(_row, {
        onMouseEnter: () => { this.setState({ hoveredIndex: index }) },
        onMouseLeave: () => { this.setState({ hoveredIndex: null }) }
      })
    })
  }
}

export default Table
