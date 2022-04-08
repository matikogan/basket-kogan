import Title from "../Title/Title";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


const ContactPage = () => {

    const [value, setValue]  = useState ({
        name: '',
        surname: '',
        email: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault()
           console.log('Envio de formulario: ', value)
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const resetForm = (e) => {
        setValue('')
    };



    return (
        <div>
            <Title title='Contact Us' />
        
            <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <div className="row">
                        <div className="col">
                            <label class="form-label" for="formBasicPassword">Name</label>
                            <input onChange={handleChange} value={value.name} placeholder="Name" type="text" id="name" class="form-control"></input>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col">
                            <label class="form-label" for="formBasicEmail">Surname</label>
                            <input value={value.surname} placeholder="Surname" type="text" id="surname" class="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label class="form-label" for="formBasicEmail">Email address</label>
                            <input value={value.email} placeholder="Enter email" type="text" id="formBasicEmail" class="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row formBtn-container">
                    <div className="col">
                       <button className="formBtn" onClick={resetForm}>Clean Form</button>
                    </div>  
                </div>
                <div className="row formBtn-container">
                    <div className="col">
                       <button className="formBtn" type="submit">Send</button>
                    </div>  
                </div>
                
            </form>
        </div>
    )
}

export default ContactPage;