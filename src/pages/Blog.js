import React from 'react';
import Logo from '../components/log';
import Navigation from '../components/navigation';

const blog = () => {
    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>

            <form>
                <input type="text"  placeholder="Nom" />
                <textarea   placeholder='Message'></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
            <ul></ul>
        </div>
    );
};

export default blog;
