import React from 'react'

const NON_NUMERIC_CLASS = 'mdl-data-table__cell--non-numeric'

const Table = ({ headers, rows, className, indexed, indexColumnName }) => {
  return (
    <table className={`mdl-data-table mdl-js-data-table  mdl-shadow--2dp ${className}`}>
      <thead>
        <tr>
          {indexed && <th key='id' className={NON_NUMERIC_CLASS}>{indexColumnName}</th>}
          {headers.map((header) => (
            <th key={header.name} className={NON_NUMERIC_CLASS}>{header.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id || index}>
            {indexed && <td key='id' className={NON_NUMERIC_CLASS}>{index + 1}</td>}
            {Object.keys(row).map((columnName, id) => {
              if (columnName === 'id') return
              return <td key={id} className={NON_NUMERIC_CLASS}>{row[columnName]}</td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
