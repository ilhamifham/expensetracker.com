function Filter({onSelect, categories}) {
    return (
        <div className="mb-3">
            <select className="form-select text-capitalize" onChange={event => onSelect(event.target.value)}>
                <option value="">All Categories</option>
                {categories.map((category, index) => 
                    <option key={index} value={category}>{category}</option>
                )}
            </select>
        </div>
    )
}

export default Filter