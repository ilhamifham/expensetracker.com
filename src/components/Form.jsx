import { useForm } from "react-hook-form"

function Form({handleFormSubmit}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    return (
        <form onSubmit={handleSubmit((formData) => {handleFormSubmit(formData), reset()})}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" {...register("description", { required: "A description is required." })} />
                {errors.description && <p className="text-danger mt-1">{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="text" className="form-control" id="amount" {...register("amount", { required: "A amount is required.", validate: (value) => !isNaN(value) || "Amount should be a number." })} />
                {errors.amount && <p className="text-danger mt-1">{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input type="text" className="form-control" id="category" {...register("category", { required: "A category is required." })} />
                {errors.category && <p className="text-danger mt-1">{errors.category.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary mb-3">Add expense</button>
        </form>
    )
}

export default Form