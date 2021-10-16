import { useState } from "react";

import image1 from '../assets/image-product-1.jpg';
import image2 from '../assets/image-product-2.jpg';
import image3 from '../assets/image-product-3.jpg';
import image4 from '../assets/image-product-4.jpg';

const initialState = {
	products:[
		{
			'key':'p-123455', 
			'name':'Fall Limited Edition Sneakers',
			'description':"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
			'price':125.00,
			'discount':'50%',
			'last_price':'$250.00',
			'images':[
				{
					'key':'p-123455-img-1',
					'img':image1
				},
				{
					'key':'p-123455-img-2',
					'img':image2
				},
				{
					'key':'p-123455-img-3',
					'img':image3
				},
				{
					'key':'p-123455-img-4',
					'img':image4
				},
			]
		}
	],
	cart: [],
}
const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload, amount) => {
		if(amount === 0){
			return;
		}
		if(state.cart.find((i)=>{return payload.key === i.key}) === undefined){
			payload.amount = amount;
			setState({
				...state,
				cart: [...state.cart, payload]
			});
		}
		else{
			var prev_order = state.cart.find(i => i.key === payload.key);
			prev_order.amount = prev_order.amount + amount;
		}
		
	};
	const removeFromCart = (payload) => {
		setState({
			...state,
			cart:state.cart.filter(item => item.key !== payload.key)
		});

	}

	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;