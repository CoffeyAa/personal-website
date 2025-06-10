import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState(
        {
            name:'',
            phone:'',
            email:'',
            message:'',
        }
    )

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        
    }

    return (
        <div className="contact page">
            <div className="bio card">
            {['name', 'phone', 'email', 'message'].map((field) => (
                <div className="contact field container">
                    <label className="contact label">
                        {field.toUpperCase()}
                    </label>
                    {field == 'message' ? (
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px', backgroundColor: 'white', minHeight: '150px', border: '1px solid #ccc', borderRadius: '4px',}}
                        />
                    ) : (
                        <input
                            type="text"
                            name={{field}}
                            value={formData.field}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px', }}
                        />
                    )}
                </div>
            ))}
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button type="submit" onClick={handleSubmit} style={{padding: '10px 20px', justifyContent: 'center'}}>Send</button>
            </div>
        </div>
    )
}

export default Contact