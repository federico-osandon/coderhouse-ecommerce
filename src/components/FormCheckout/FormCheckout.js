import React, {useState} from 'react'


export const FormCheckout = ({ onChange }) => {
    
    const [formUser, setFormUser] = useState({
        name: '',
        email: '',
        email2: '',
        phone: '',
    })

    const handleSubmit = (fieldId,evt) => {        
        const value = evt.target.value
        const formData = { ...formUser, [fieldId]: value }
        const {name, email, phone} = formData
        onChange((Object.keys(formData).every(k => formData[k] !== '') && formData.email === formData.email2) ? ({ name, email, phone }) :null)
        setFormUser(formData)        
    }
    return (<>
        <div  className="col-6 text-success" >
            <div className="form-group row  ">
                <label className="col-sm-4 col-form-label">Nombre y Apellido</label>
                <div className="col-sm-8">
                    <input type="text" value={formUser.name} onChange={(evt) => handleSubmit('name', evt)} className="form-control-plaintext text-success" id="inputText" placeholder="text" />
                </div>
            </div>
            <div className="form-group row  ">
                <label className="col-sm-4 col-form-label">Phone</label>
                <div className="col-sm-8">
                    <input type="tel" value={formUser.phone} onChange={(evt) => handleSubmit('phone', evt)} className="form-control-plaintext text-success" id="inputTel" placeholder="Tel" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email</label>
                <div className="col-sm-8">
                    <input type="email" value={formUser.email} onChange={(evt) => handleSubmit('email', evt)} className="form-control-plaintext text-success" id="staticEmail" placeholder="email@example.com" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email Confirm</label>
                <div className="col-sm-8">
                    <input type="email" value={formUser.email2} onChange={(evt) => handleSubmit('email2', evt)} className="form-control-plaintext text-success" id="staticEmailConfirm" placeholder="email@example.com" />
                </div>
            </div>
            
        </div>
    </>)
}