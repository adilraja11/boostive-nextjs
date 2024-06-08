import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const Dashboard = ({kontribusiMasuk, dataProduktif}) => {
  return (
    <div className='flex flex-wrap gap-4'>
        <div className="stat shadow-sm shadow-primary rounded-lg max-w-md">
            <div className="stat-figure text-primary">
                <FontAwesomeIcon className='w-8' icon={faPaperPlane}/>
            </div>
            <div className="stat-title font-medium">Kontribusi Masuk</div>
            <div className="stat-value text-primary">{kontribusiMasuk.length.toString().padStart(2, '0')}</div>
        </div>
        <div className="stat shadow-sm shadow-accent rounded-lg max-w-md">
            <div className="stat-figure text-accent">
                <FontAwesomeIcon className='w-8' icon={faUpRightFromSquare}/>
            </div>
            <div className="stat-title font-medium">Data Produktif</div>
            <div className="stat-value text-accent">{dataProduktif.length.toString().padStart(2, '0')}</div>
        </div>
    </div>
  )
}
