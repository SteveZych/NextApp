import React, {useState, useEffect} from 'react';


const AddReagentForm = () => {

    //State to keep track of the form
    const [reagent, setReagent] = useState({
        reagentName: "",
        qualityControlInterval: ""
    })

    //UseEffect to grab the user id

    function handleSubmit(){
        //push the reagent to the database with the users id
    }

    return(
        <div>
            <form className="" onsSubmit={handleSubmit}>
                <div className="reagentName-form">
                    <p><label htmlFor="reagentName">Reagent Name</label></p>
                    <p><input
                        name="reagentName"
                        type="text"
                        value={reagent.reagentName}
                        placeholder="Reagent Name"
                        onChange={(e) => setReagent({ ...reagent, reagentName: e.target.value })}
                        required
                    /></p>
                </div>
                <div className="qualityControlInterval-form">
                    <p><label htmlFor="qualityControlInterval">Quality Control Interval</label></p>
                    <p><input
                        name="qualityControlInterval"
                        type="text"
                        value={reagent.qualityControlInterval}
                        placeholder="Quality Control Interval"
                        onChange={(e) => setReagent({ ...reagent, qualityControlInterval: e.target.value })}
                        required
                    /></p>
                </div>
            </form>
        </div>
    )

}

export default AddReagentForm;