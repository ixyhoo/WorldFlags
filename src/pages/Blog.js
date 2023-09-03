import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const blog = () => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 140) {
            alert('Votre message est trop court');
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
                placeholder='Message'
                onChangeCapture={(e) => setContent(e.target.value)}></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
            <ul></ul>
        </div>
    );
};

export default blog;
