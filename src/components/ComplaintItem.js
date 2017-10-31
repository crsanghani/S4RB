import React from 'react';

// the complaints obj is passed in to ComplaintItem from ComplaintList

const ComplaintItem = ({quarter, month, complaints, units}) => {
    return (
        <div className='complaint-item'>
            <span> {quarter} {month} {complaints} {units} </span>
        </div>
    )
}

export default ComplaintItem;