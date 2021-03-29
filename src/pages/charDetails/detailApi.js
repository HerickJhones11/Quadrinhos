


const APIMARVEL = 'https://localhost:5001/livro'


export const comprarQuadrinho = (title, thumbnail, price) => {
    //console.log(name, email, password);
    
    const data = {
        "Titulo": title,
        "Capa": thumbnail,
        "Sinopse": title,
        "GeneroId" : 3,
        "Preco": price
    }
    return fetch(`${APIMARVEL}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    }) 
    .catch(err => {
        console.log(err);
    });
}



export const getProducts = (sortBy) => {
    return fetch(`${APIMARVEL}`,{
        method:'GET'
    })
    .then(response => {
        console.log(response.json());
        return response.json()
    })
    .catch(err => console.log(err));
};