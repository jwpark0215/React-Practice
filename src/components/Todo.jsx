import './Todo.css'
function Todo({ title }){
    console.log(title)
    return(
        <div className = "todo">
            <h2>{title}</h2>
            <span>Description</span>
            <button>Delete</button>
        </div>
    )
}

export default Todo