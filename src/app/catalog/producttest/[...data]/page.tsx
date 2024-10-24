'use client'
import { Params } from "next/dist/server/request/params";
import { useParams } from "next/navigation";

const products = [
    {
        id: 1,
        name: "Produto 1",
        preco: 99.9,
        cor: "blue",
        tamanho: "p"
    },
    {
        id: 2,
        name: "Produto 2",
        preco: 58.4,
        cor: "red",
        tamanho: "m"
    },
    {
        id: 3,
        name: "Produto 3",
        preco: 67.2,
        cor: "yellow",
        tamanho: "g"
    },
    {
        id: 4,
        name: "Produto 4",
        preco: 52.5,
        cor: "blue",
        tamanho: "p"
    }
];

interface ProductProps extends Params {
    data: string[]
}

export default function ProductTest() {
    const params : ProductProps = useParams();
    const [id, cor] = params.data

    // const prodFind = products.find(prod => prod.id.toString() === params.data[0] && prod.cor == params.data[1])

    const prodFind = products.find(prod => prod.id.toString() === id && prod.cor == cor)

    return (
        <div>
            <h1>PAGINA DO PRODUTO ;D</h1>
            {prodFind ? (
                <div>
                    <p>{JSON.stringify(params)}</p>
                    <p>{prodFind.name}</p>
                    <p>{prodFind.preco}</p>
                </div>
            ) : (
                <p>Produto não encontrado</p>
            )}
        </div>
    );
}
