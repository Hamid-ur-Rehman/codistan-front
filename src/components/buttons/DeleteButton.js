'use client'
const DeleteButton = ({ id }) => {
    const deleteUser = async (id) => {
        if (confirm(`Are you sure you wnat to delete this user`)) {
            console.log('testes', id)
            const res = await fetch('http://localhost:3001/api/user/' + id, {
                method: 'DELETE',
            })
            return res.json()
        }
    }
    return (
        <button
            onClick={() => deleteUser(id)}
            className=" btn-primary rounded-md outline  bg-red-600 text-white py-1 px-5 self-end">Delete</button>
    );
};

export default DeleteButton;
