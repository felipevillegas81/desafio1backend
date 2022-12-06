class ProductManager{
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        // Verifica si todos los valores existan

        if(!title && !description && !price && !thumbnail && !code){
            return;
        }

        // Crea un objeto con las propiedades y sus valores
        let product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        // Verifica si la lista de productos está vacía
        if (this.products.length === 0) {
            product['id'] = 1;
            this.products.push(product);
        }else{
            let codeValues = this.products.find(product => product['code'] === code);

            // Verifica si el producto ya está en la lista

            if(!codeValues){
                product['id'] = this.products[this.products.length - 1]['id'] + 1;
                this.products.push(product);
            }
            else{
                console.log("producto repetido");
            }
        }
    };   

    getProducts(){
        return this.products;
    };

    getProductById(id){
        let product = this.products.find(product => product['id'] === id);
        if (product != null){
            return product;
        }else{
            console.log("Product not found");
            return null;
        }
    };

};