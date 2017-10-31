import React from 'react';
import ComplaintItem from './ComplaintItem';

// takes the the complaints objs as props and maps props in to the components

const ComplaintsList = (props) => {
    const complaintItems = props.complaints.map(complaint => {
        return <ComplaintItem   key={complaint.id}
                                quarter={complaint.Quarter}
                                month={complaint.Month}
                                complaints={complaint.Complaint}
                                units={complaint.UnitsSold} />
    })

    // displays the variable that is created by the list container
    return (
        <div className='complaint-list'>{complaintItems}</div>
    )
}

// as this is a single function file I could have exported the function but it doesn't match what I've done elsewhere
export default ComplaintsList;

// this is a functional stateless component and is only responsible for taking the data
// from app and making that infomation in to props