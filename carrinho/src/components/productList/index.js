import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import { Container, List} from "./styles"

const ProductList = ({ type }) => {

    const { catalogue } = useContext( CatalogueContext );
    const { cart } = useContext( CartContext );

    return (
        <Container>
            {type === "catalogue" && <h2>Produtos:</h2>}
            <ul>
            {type === "catalogue" && 
                catalogue.map((item,index)=> (
                    <List key={index}>
                        <p>{item.name}</p> <Button type={type} item={item}/>
                    </List>
            ))}
            </ul>
            {type === "cart"&& <h2>Carrinho:</h2>}
            <ul>
            {type === "cart" && 
                cart.map((item,index)=> (
                    <List key={index}>
                        <p>{item.name}</p> <Button type={type} item={item}/>
                    </List>
                ))}
            </ul>
        </Container>
    );
};


export default ProductList;