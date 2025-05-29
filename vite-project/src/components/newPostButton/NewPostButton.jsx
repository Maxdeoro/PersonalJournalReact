import './NewPostButton.css';
import CardButton from '../cardButton/CardButton';

function NewPostButton() {
    return (
        <div className='new-post-block'>
            <CardButton className='new-post-button'>
                <img src='/plus.svg' className='plus' alt='+'/>New Post
            </CardButton>
        </div>
    );
};

export default NewPostButton;