import { useState } from "react";
import { Container} from 'reactstrap'

const CreateEmail = () => {
    const [title, setTitle] = useState('')
    const [subject,  setSubject] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(null)
    
    return (  
        <section>
            
        </section>
    );
}
 
export default CreateEmail;