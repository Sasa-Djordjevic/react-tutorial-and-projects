import mystyle from './SingleColor.module.css';
import { toast } from 'react-toastify';

const SingleColor = (props) => {
    const {hex, weight} = props.color;

    const colorClass = props.index > 10 ? `${mystyle.color} ${mystyle['color-light']}` : mystyle.color;

    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success(`The color (#${hex}) copied to the clipboard`);

            } catch(error) {
                toast.error('Failed to copy the color');
            }
        } else {
            toast.error('Clipboard access not available');
        }
    };

    return (
        <div 
            className={colorClass} 
            style={{backgroundColor: `#${hex}`}}
            onClick={saveToClipboard}
        >
            <p className={mystyle['percent-value']}>{weight}%</p>
            <p className={mystyle['color-value']}>#{hex}</p>
        </div>
    )
};

export default SingleColor;