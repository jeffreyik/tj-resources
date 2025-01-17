import React from 'react'
import TableCol from './TableCol'
// import { equipments } from '../constants'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Table = () => {
  const { equipments } = useContext(AppContext)

  return (
    <div className="table">
        <div className="tr table-head">
            <div className="table-data item">
                Items
            </div>
            <div className="table-data quantity">
                Quantity
            </div>
            <div className="table-data date">
                Date
            </div>
            <div className="table-data time">
                Time
            </div>
            <div className="table-data action">
                Action
            </div>
        </div>
        <div className="table-row">
            {/* <TableCol item="Single Face Plate" quantity={20} date="Apr 25th, 2023" time="10:50am" /> */}
            {
                equipments.map(equipment => (
                    <TableCol key={equipment.id} item={equipment.name} quantity={equipment.quantity} date="Apr 11th, 2023" time="10:00am" />
                ))
            }
        </div>
    </div>
  )
}

export default Table