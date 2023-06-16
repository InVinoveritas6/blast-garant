
//Style
import './CustomPageBlockStyle.scss'

const CustomPageBlock = ({children, id, title}) => {
    return (
        <div id={id}className='customPageBlock'>
            {title && <div className='title-block'>{title}<span></span></div>}
            {children}
        </div>
        )
    };
       
export default CustomPageBlock;