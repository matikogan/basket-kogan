import 'bootstrap/dist/css/bootstrap.min.css';
import Jersey from '../Product-card/productCard';

const ListProducts = () => {
    return (
        <div className="container">
            <div className='row'>
            <Jersey title='Nuggets' subtitle='Alernative Jersey' price={210} img='./denver-oscura.jpg' />
            <Jersey title='Golden State' subtitle='Original Jersey' price={190} img='./goldenState-titu.jpg' />
            <Jersey title='Philadelphia' subtitle='Original Jersey' price={185} img='./76ers-titu.jpg' />
            </div>
        </div>
    )
}

export default ListProducts