import { ProductCatalog } from "@/components/ProductCatalog";
import { Suspense } from "react";

export default function Productos() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <ProductCatalog />
        </Suspense>
    );
}