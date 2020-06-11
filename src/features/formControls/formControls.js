import React from 'react'

export let Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div  className="field-wrapper">
        <label className="title">{props.title}: </label>
        <input type={props.type} disabled={props.disabled} {...input} className="new-data" />

        {hasError && <div >
            <span > {meta.error}</span>
        </div>}
    </div>
};

export let Select = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className="field-wrapper">
        <label className="title">{props.title}: </label>
        <select disabled={props.disabled} className="new-data" {...input} >
            <option/>
            <option  value='netWork1'>Network 1</option>
            <option value='netWork2'>Network 2</option>
            <option value='netWork3'>Network 3</option>
        </select>

        {hasError && <span > {meta.error}</span>}

    </div>
};
