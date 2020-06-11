import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input, Select} from "../../features/formControls/formControls";

const NewCar = React.memo((props) => {

    return (
        <div className="new-car-form">
            <form onSubmit={props.handleSubmit} >

                <Field component={Input} type='text'
                       name='number' title="№"/>


                <Field component={Select} type='text'
                       name='tenant' title="Tenant"/>


                <Field component={Select} type='text'
                       name='brand' title="Brand"/>


                <Field component={Select} type='text'
                       name='model' title="Model"/>

                <button className="btn btn-primary" type="submit">Save</button>

            </form>

        </div>
    );
});

export default reduxForm({
    form: 'addNewCar',

})(NewCar);
