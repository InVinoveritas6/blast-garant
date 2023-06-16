
//Components
import CustomPageBlock from '../../components/CustomPageBlock/CustomPageBlock';

//Style
import './MainPageStyle.scss';

const MainPage = () => {
    return (
        <CustomPageBlock id="mainPage">
            <div  className='main-page'>
                <div className='main-page-block'>
                    <div className='main-page-content'>
                        <img className='main-page-logo' src='/images/Logo.png' alt='logo'/>
                        <div className='main-page-title'>BLAST GARANT</div>
                        <div className='main-page-subtitle'>Действуем быстро, на результат</div>
                    </div>
                </div>
            </div>
        </CustomPageBlock>
        )
    };
       
export default MainPage;