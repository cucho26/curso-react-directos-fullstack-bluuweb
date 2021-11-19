import { useState } from "react";

const Formulario = () => {
	const [todo, setTodo] = useState({
		todoName: "",
		todoDescripcion: "",
		todoEstado: "pendiente",
		todoCheck: false,
	});

	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const { todoName, todoDescripcion } = todo;

		if (!todoName.trim() || !todoDescripcion.trim()) {
			setError(true);
			return;
		}

		setError(false);
	};

	const handleChange = (e) => {
		const { name, value, checked, type } = e.target;

		setTodo({
			...todo,
			[name]: type === "checkbox" ? checked : value,
		});

		/* setTodo((old) => ({
			...old,
			[e.target.name]: e.target.value,
		})); */
	};

	const PintarError = () => {
		return <div className="alert alert-danger">Campos obligatorios</div>;
	};

	return (
		<>
			<h2>Controlado</h2>
			{error && <PintarError />}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="todoName"
					id=""
					placeholder="Ingrese Todo"
					className="form-control mb-2"
					/* onChange={(e) => setTodo({ ...todo, todoName: e.target.value })} */
					onChange={handleChange}
					value={todo.todoName}
				/>
				<textarea
					name="todoDescripcion"
					placeholder="Ingrese descripcion del todo"
					cols="30"
					rows="10"
					className="form-control mb-2"
					/* onChange={(e) =>
						setTodo({ ...todo, todoDescripcion: e.target.value })
					} */
					onChange={handleChange}
					value={todo.todoDescripcion}
				/>
				<select
					name="todoEstado"
					className="form-select mb-2"
					id=""
					/* onChange={(e) => setTodo({ ...todo, todoEstado: e.target.value })} */
					onChange={handleChange}
					value={todo.todoEstado}
				>
					<option value="pendiente">Pendiente</option>
					<option value="completada">Completada</option>
				</select>

				<div className="form-check mb-2">
					<input
						type="checkbox"
						name="todoCheck"
						className="form-check-input"
						onChange={handleChange}
						checked={todo.todoCheck}
					/>
					<label htmlFor="" className="form-check-label">
						Dar prioridad
					</label>
				</div>
				<button type="submit" className="btn-primary">
					Agregar
				</button>
			</form>
		</>
	);
};

export default Formulario;
