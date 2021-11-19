import { useRef } from "react";

const FormNoControlado = () => {
	const formulario = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const datos = new FormData(formulario.current);

		const objetoDatos = Object.fromEntries([...datos.entries()]);

		const { todoDescripcion, todoName } = objetoDatos;
		if (!todoDescripcion.trim() || !todoName.trim()) {
			return;
		}
	};

	return (
		<>
			<h2>No Controlado</h2>
			<form ref={formulario} onSubmit={handleSubmit}>
				<input
					type="text"
					name="todoName"
					id=""
					placeholder="Ingrese Todo"
					className="form-control mb-2"
					defaultValue="Tarea #01"
				/>
				<textarea
					name="todoDescripcion"
					placeholder="Ingrese descripcion del todo"
					cols="30"
					rows="10"
					className="form-control mb-2"
					defaultValue="Descripción Tarea #01"
				/>
				<select
					name="todoEstado"
					className="form-select mb-2"
					id=""
					defaultValue="Pendiente"
				>
					<option value="pendiente">Pendiente</option>
					<option value="completada">Completada</option>
				</select>
				<button type="submit" className="btn-primary">
					Agregar
				</button>
			</form>
		</>
	);
};

export default FormNoControlado;
