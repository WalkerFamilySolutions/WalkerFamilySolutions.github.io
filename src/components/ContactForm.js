import { useState } from 'react'


const ContactForm = () => {
    
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    
    const emailSubmit = () =>{

    }
    return (
        <>
        <form>
            <label ></label>
            <input type="text" onChange={(e) => {setName(e.target.value)} } />
        </form>
        <form>
            <label ></label>
            <input type="text" onChange={(e) => {setSubject(e.target.value)} } />
        </form>
        <form>
            <label ></label>
            <input type="text" onChange={(e) => {setText(e.target.value)} } />
        </form>
        <Mailto email="walkerfamilysolutions@gmail.com" contact={name} subject={subject} body={text}>
            Mail me!
        </Mailto>
        </>
    )
}

export default ContactForm

// The goal here was to create a document that prepopulated an email form that our users could send. 
// Simple in its desgin it utelizes the mailto aspect of HTML and compliles the data via hooks-- ideally
// currently the "subject" and the "name" are passed intothe body of the email. Less than whats expected
// looking to set up a firebase account with an SMTP server 
// https://stackoverflow.com/questions/51008278/how-do-i-connect-a-smtp-with-firebase
const Mailto = ({ email, subject = '', body = '', contact = "", children }) => {
    let params = subject || body || contact? '?' : '';
    if (contact) params += `contact=${encodeURIComponent(contact)}`;
    if (body) params += `${contact ? '&' : ''}body=${encodeURIComponent(body)}`;
    if (subject) params += `${contact ? '&' : ''}body=${encodeURIComponent(subject)}`;
  
    return <a href={`mailto:${email}${params}${contact}`}>{children}</a>;
  };

