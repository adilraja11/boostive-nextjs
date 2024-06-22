import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const Dashboard = ({kontribusiMasuk, dataProduktif}) => {
  return (
    <div className='flex flex-wrap gap-4'>
        <div className="bg-white stat shadow-sm shadow-primary rounded-lg max-w-md">
            <div className="stat-figure text-primary">
                <FontAwesomeIcon className='w-9' icon={faPaperPlane}/>
            </div>
            <div className="stat-title text-slate-500 font-medium">Kontribusi Masuk</div>
            <div className="stat-value text-primary">{kontribusiMasuk.length.toString().padStart(2, '0')}</div>
        </div>
        <div className="bg-white stat shadow-sm shadow-green-600 rounded-lg max-w-md">
            <div className="stat-figure text-green-600">
                <FontAwesomeIcon className='w-9' icon={faUpRightFromSquare}/>
            </div>
            <div className="stat-title text-slate-500 font-medium">Data Produktif</div>
            <div className="stat-value text-green-600">{dataProduktif.length.toString().padStart(2, '0')}</div>
        </div>
    </div>
  )
}
