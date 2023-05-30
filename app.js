class productManager {

    constructor(){
        this.products=[];
    }

    static id = 0;

    addproduct(title,description,price,thumbnail,code,stock){
            for (let i = 0;i < this.products.length; i++){
                if(this.products[i].code === code){
                    console.log(`el codigo ${code} se repite`)
                    return
                }
            }

        const newProduct ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        if(!Object.values(newProduct).includes(undefined)){
            productManager.id++;
            id: productManager.id,
            this.products.push(newProduct)
        }else{
            console.log("debe llenar todos los campos")
        }

    }

    getProduct(){
        return this.products
    }   

    ifExist(id){
        return this.products.find((product) => product.id === id);
    }

    getProductById(id){
        !this.ifExist(id)
            ? console.log("not found")
            : console.log(this.ifExist(id))
    }
}

const productos = new productManager();
console.log(productos.getProduct())

productos.addproduct(
    "vaso pintas azules",
    "pintado a mano",
    45000,
    "imagenvasoazul.jpg",
    "4168",
    8
);

productos.addproduct(
    "tetera verde",
    "pintado a mano",
    105000,
    "imagenteteraverde.jpg",
    "4269",
    5
);

productos.addproduct(
    "tetera azul",
    "pintado a mano",
    105000,
    "imagenteteraazul.jpg",
    "4270",
    2
);

console.log(productos.getProduct())