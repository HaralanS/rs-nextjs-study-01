'use client'
import { useParams } from "next/navigation";

const products = [
    {
        id: 1,
        name: "Produto 1",
        preco: 99.9
    },
    {
        id: 2,
        name: "Produto 2",
        preco: 58.4
    },
    {
        id: 3,
        name: "Produto 3",
        preco: 67.2
    },
    {
        id: 4,
        name: "Produto 4",
        preco: 52.5
    }
];

export default function Product() {
    const params = useParams();

    const prodFind = products.find(prod => prod.id.toString() === params.id);

    return (
        <div>
            <h1>PAGINA DO PRODUTO ;D</h1>
            {prodFind ? (
                <div>
                    <p>{JSON.stringify(params)}</p>
                    <p>{params.id}</p>
                    <p>{prodFind.name}</p>
                    <p>{prodFind.preco}</p>
                </div>
            ) : (
                <p>Produto não encontrado</p>
            )}
        </div>
    );
}
