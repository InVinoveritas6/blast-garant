
//Style
import './CustomPageBlockStyle.scss'

const CustomPageBlock = ({children, id, title, style}) => {
    return (
        <div id={id} className='custom-page-block' style={style && style}>
            {title && <div className='title-block'>{title}<span></span></div>}
            {children}
        </div>
        )
    };
       
export default CustomPageBlock;