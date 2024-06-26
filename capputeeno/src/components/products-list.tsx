"use client"

import { useProducts } from "@/hooks/useProduts"

interface ProductsListProps {

}

export function ProductsList(props: ProductsListProps) {
    const { data } = useProducts();
    console.log(data)
    return (
        <div></div>
    )
}