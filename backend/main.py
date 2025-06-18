import uvicorn
import smtplib
import os

from dotenv import load_dotenv
from datetime import date
from jinja2 import Template
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from email.message import EmailMessage

from templates import CONTACT_FORM_TEMPLATE

load_dotenv()
app = FastAPI(debug=True)

origins = [
    "http://localhost:5173",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    phone: str
    email: EmailStr
    message: str

@app.post("/send-email")
def send_email(data: ContactForm):
    template = Template(CONTACT_FORM_TEMPLATE)
    rendered_email = template.render(form=data)
    my_email = os.getenv('EMAIL_USER')
    msg = EmailMessage()
    msg.set_content(rendered_email)
    msg['Subject'] = f'New Contact Form Submission - {date.today()}'
    msg['From'] = my_email
    msg['To'] = my_email

    try: 
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as s:
            s.login(user=f"{os.getenv('EMAIL_USER')}", password=f"{os.getenv('EMAIL_PASSWORD')}")
            s.send_message(msg)
        return {"status": "success"}
    except Exception as e:
        print("Email failed to send with error: ", e)
        return {"status": "error", "detail":str(e)}, 500
    

if __name__== "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)