/* eslint-disable @next/next/no-img-element */
import api from "@/api"

export default async function ItemPage({ params: { id } }: { params: { id: string } }) {
    console.log(id);
    const item = await api.fetch(id)
    
    return (
        <section className="grid gap-2" style={{ padding: '1% 0' }}>
            <img src={item.thumbnail} alt={item.title} />
            {item.currency_id && (
                <p className="font-bold text-lg">
                    {Number(item.price).toLocaleString('es-AR', {
                        style: "currency", 
                        currency: item.currency_id })}
                </p>
            )}
            <p>{item.title}</p>
            <hr />
            <p>{item.description}</p>
        </section>
    );
};