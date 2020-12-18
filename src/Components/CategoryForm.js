import React, {useState} from 'react'

const CategoryForm = (props) => {
    const [state, setState] = useState({
        name: "",
        transaction_type_id: 1,
    })
    const changeHandler = (e) => {
        setState( {[e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.createCategory(e.target[0].value, e.target[1].value)
    }
    const changeType = (e) => {
        return setState({transaction_type_id: e.target.value})
    }
    const renderForm = () => {
        return (<form onSubmit={submitHandler}>
            <input name="name" placeholder="name" value={state.name} onChange={changeHandler}/>
            <select value={state.transaction_type_id} onChange={changeType}>
                <option value="1">Credit</option>
                <option value="2">Debit</option>
            </select>
            <input type="submit"/>
        </form>)
    }

    return (
        renderForm()
    )

}

export default CategoryForm