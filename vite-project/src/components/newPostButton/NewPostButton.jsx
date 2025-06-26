import './NewPostButton.css';
import CardButton from '../cardButton/CardButton';

function NewPostButton({clearForm}) {
    return (
            <CardButton className='new-post-button' onClick={clearForm}>
                <img src='/plus.svg' className='plus' alt='+'/>New Post
            </CardButton>
    );
};

export default NewPostButton;