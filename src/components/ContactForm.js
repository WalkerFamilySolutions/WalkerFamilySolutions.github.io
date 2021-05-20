import { useState } from 'react'


const ContactForm = () => {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");

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
        <button onClick={() => console.log(name, subject, text)}></button>
        </>
    )
}

export default ContactForm
