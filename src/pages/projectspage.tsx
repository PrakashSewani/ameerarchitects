import NavigationBarComponent from "../components/navigationbarcomponent";
import ProductsPageComponent from "../components/productspagecomponent";

export default function ProductsPage(){
    return(
        <><NavigationBarComponent /><div style={{backgroundColor:"white"}}><ProductsPageComponent /></div></>
    )
}