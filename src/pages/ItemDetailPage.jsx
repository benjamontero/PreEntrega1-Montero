import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { products } from '../products';
import { Layout } from "../components/Layout/Layout";
import { ItemDetail } from "../components/ItemDetail/ItemDetail";
import {Loading} from '../components/Loading'

export const ItemDetailPage = () => {
    const { id } = useParams();
    const[isLoading, setIsLoading] = useState(true)
    const [producto, setProducto] = useState({})


    const searchProduct = products.find(
      (prod) => prod.id === parseInt(id)
    );
  
    useEffect(()=>{
      setTimeout(()=>{
        console.log(searchProduct);
        setProducto (searchProduct);
        setIsLoading(false)
      },2000)
    },[]);

  return (
     <div>
      <Layout>
        <ItemDetailContainer>
          {

            isLoading 
            ? <Loading/>
            :
            <ItemDetail
            name={producto.name}
            price={producto.price}
            category={producto.category}
            image={producto.image}
            description={producto.description}
            stock={producto.stock}
          ></ItemDetail>
            }
        </ItemDetailContainer>
      </Layout>
        
    </div>
  )
}
