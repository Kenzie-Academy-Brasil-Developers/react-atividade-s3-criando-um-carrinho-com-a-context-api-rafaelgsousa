import { createContext,useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
    const [catalogue,setCatalogue] = useState([
        {name:"Book", price: 20} ,
        {name:"T-shirt",price: 50},
        {name:"Banana",price:3},
        {name:"Laranja",price:12},
        {name:"Celular", price:2500},
        {name:"Notebook",price:5000}
    ]);

    const addToCatalogue = (item) => {
        setCatalogue([...catalogue, item]);
    }

    const removeFromCatalogue = (item)=> {
        const newCatalogue = catalogue.filter(
            (itemOnCatalogue) => itemOnCatalogue.name !== item.name
        )
        setCatalogue(newCatalogue)
    }

    return(
        <CatalogueContext.Provider
        value = {{catalogue,addToCatalogue,removeFromCatalogue}} >
            {children}
        </CatalogueContext.Provider>
    )
}