import mystyles from './Title.module.css';

const Title = () => {
    return (
        <div className={mystyles.title}>
            <h1>React Menu</h1>
            <div className={mystyles['title-underline']}></div>
        </div>
    );
};

export default Title;