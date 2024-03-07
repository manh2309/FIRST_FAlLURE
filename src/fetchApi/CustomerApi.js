// const URL = "http://localhost:3001/customers";
const URL = "http://localhost:9000/customers/";
export function getCustomersApi() {
    return new Promise((resolve, reject) => {
        fetch(URL + "get", { method: "GET" })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export function addCustomersApi(customer) {
    return new Promise((resolve, reject) => {
        fetch(URL + "add", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export function deleteCustomersApi(id) {
    return new Promise((resolve, reject) => {
        fetch(URL + "delete/" + id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export function updateCustomersApi(id, customer) {
    return new Promise((resolve, reject) => {
        fetch(URL + "update/" + id, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}