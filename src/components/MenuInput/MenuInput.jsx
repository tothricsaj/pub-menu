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

		console.log('menuInfo -> ', props.menuInfo);

		console.log('name -> ', name)
	});

	const changeData = () => {
		// let name = nameRef.current.value;
		// let price = priceRef.current.value;

		name = nameRef.current.value;
		price = priceRef.current.value;
		ingredients = ingrRef.current.value;
		quantity = quantityRef.current.value;	
		description = descriptionRef.current.value;

		const data = {
			id: !!props.menuId ? props.menuId : Math.ceil(Math.random() * 100000),
			name: name,
			price: price
		}

		console.log(data);

		props.changeData(data);

		nameRef.current.value = null;
		priceRef.current.value = null;
	};

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
					{/* <input type="text" placeholder="Name" onClick={handlePropagation} ref={nameRef} defaultValue={props.name && props.name}/>
					<input type="text" placeholder="Price" onClick={handlePropagation} ref={priceRef} defaultValue={props.price && props.price} />
					<input type="text" placeholder="Ingredients" onClick={handlePropagation} ref={ingrRef} defaultValue={props.ingredients && props.ingredients} />
					<input type="text" placeholder="Quantity" onClick={handlePropagation} ref={quantityRef} defaultValue={props.quantity && props.quantity} /> */}

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
