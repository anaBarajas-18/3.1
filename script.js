document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const userTableBody = document.getElementById("userTableBody");
    let users = [];

    userForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Evitar el recargo de la página

        // Capturar valores del formulario
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value.trim();

        // Validación básica
        if (name === "" || email === "" || age === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Agregar a la lista
        let user = { name, email, age };
        users.push(user);

        // Limpiar formulario
        userForm.reset();

        // Actualizar la tabla
        updateTable();
    });

    function updateTable() {
        userTableBody.innerHTML = ""; // Limpiar la tabla antes de actualizar

        users.forEach((user, index) => {
            let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.age}</td>
                        <td>
                            <button onclick="deleteUser(${index})">❌ Eliminar</button>
                        </td>
                      </tr>`;
            userTableBody.innerHTML += row;
        });
    }

    window.deleteUser = function(index) {
        users.splice(index, 1);
        updateTable();
    };
});
