import React, { useRef, useEffect } from "react";
import style from "./MenuInput.css";

import Modal from "../Modal/Modal";

export default function MenuInput(props) {
	const nameRef 				= useRef(null);
	const priceRef 				= useRef(null);
	const ingrRef 				= useRef(null);
	const quantityRef 		= useRef(null);
	const descriptionRef 	= useRef(null);

	let name;
	let price;
	let ingredients;
	let quantity;
	let description;

	useEffect(() => {

		name 					= props.menuInfo && props.menuInfo.name
		price 				= props.menuInfo && props.menuInfo.price
		ingredients 	= props.menuInfo && props.menuInfo.ingredients
		quantity 			= props.menuInfo && props.menuInfo.quantity
		description		= props.menuInfo && props.menuInfo.description

	});

	const changeData = () => {

		name = nameRef.current.value;
		price = priceRef.current.value;
		ingredients = splitIngredientsStr(ingrRef.current.value);
		quantity = quantityRef.current.value;	
		description = descriptionRef.current.value;

		const data = {
			id: !!props.menuInfo ? props.menuInfo.id : Math.ceil(Math.random() * 100000),
			name: name,
			price: price,
			ingredients,
			quantity,
			description
		}

		props.changeData(data);

		nameRef.current.value = null;
		priceRef.current.value = null;
	};

	const splitIngredientsStr = (ingredients) => ingredients.split(/ | ,/);

	const inputMaker = (type) => {
		const inputType = type;

		if(type === 'textarea')
			return (ref, placeHolder, defValue=null) => (
				<textarea placeholder={placeHolder} onClick={handlePropagation} ref={ref} defaultValue={!!defValue ? defValue:''}></textarea>
			)

		return (ref, placeHolder, defValue=null) => {
			return <input type={inputType} placeholder={placeHolder} onClick={handlePropagation} ref={ref} defaultValue={!!defValue ? defValue:''}/>
		}
	}

	const textInputMaker = inputMaker('text');
	const textFiledMaker = inputMaker('textarea');

	const handlePropagation = e => e.stopPropagation();

	return (
		<Modal closeModal={props.closeModal}>
			<div data-testid="add-menu-modal">
				<div className={style.menuInputs}>

					{!!props.menuInfo ? textInputMaker(nameRef, 'Name', props.menuInfo.name) : textInputMaker(nameRef, 'Name')}
					{!!props.menuInfo ? textInputMaker(priceRef, 'Price', props.menuInfo.price) : textInputMaker(priceRef, 'Price')}
					{!!props.menuInfo ? textInputMaker(ingrRef, 'Ingredients', props.menuInfo.ingredients) : textInputMaker(ingrRef, 'Ingredients')}
					{!!props.menuInfo ? textInputMaker(quantityRef, 'Quantity', props.menuInfo.quantity) : textInputMaker(quantityRef, 'Quantity')}

					{!!props.menuInfo ? textFiledMaker(descriptionRef, 'Description', props.menuInfo.description) : textFiledMaker(descriptionRef, 'Description')}

					<button role="addBtn" onClick={changeData}>Add</button>
				</div>
			</div>
		</Modal>
	)
}
