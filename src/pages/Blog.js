import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';

const Blog = () => {
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:3004/articles").then((res) => console.log(res));
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 140) {
            setError(true);
        } else {
            setError(false);
            
        }
    };

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text"  placeholder="Nom" />
                <textarea  
                style={{border: error ? "1px solid red" : "1px solid #61dafb"}} 
                placeholder='Message'
                onChangeCapture={(e) => setContent(e.target.value)}></textarea>
              {error && <p>Veuillez saisir un minimum de 140 caractères</p>}  
                <input type="submit" value="Envoyer"/>
            </form>
            <ul></ul>
        </div>
    );
};

export default Blog;
