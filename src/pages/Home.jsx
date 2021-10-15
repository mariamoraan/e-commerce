import React, {useContext} from 'react'

import Header from '../components/Header';
import ProductInfo from '../components/ProductInfo';
import AppContext from '../context/AppContext';

const Home = () => {
    const {state} = useContext(AppContext);

    return(
        <div>
            <Header />
            <ProductInfo props={state.products[0]} />
        </div>
    );
}

export default Home;