import React, {useState, useEffect} from 'react';

// getServerSideProps to fetch available reagents to choose from 
// passed as props to UpdateForm as a list of reagents users can choose from


const UpdateForm = () => {

    //State to keep track of the form
    const [reagent, setReagent] = useState({
        reagentName: "",
        expirationDate: "",
        receivedDate: "",
        quantity: "",
        addOrRemove: ""
    })

}

export default UpdateForm;