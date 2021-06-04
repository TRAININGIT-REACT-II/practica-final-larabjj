import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

	const [{ description }, handleInputChange, reset] = useForm({
		description: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}
		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		};
		handleAddTodo(newTodo);
		reset();
	}

	return (
		<>
			<h5>Add TODO</h5>
			<hr />

			<form className="d-flex form-addtodo" onSubmit={handleSubmit}>
				<input
					className="form-control"
					type="text"
					name="description"
					placeholder="Write here..."
					autoComplete="off"
					value={description}
					onChange={handleInputChange}
				/>
				<button
					className="btn btn-outline-primary btn-block"
					type="submit"
				>
					Add
				</button>
			</form>

		</>
	)
}
