/* eslint-disable @next/next/no-img-element */
import { log } from "console";
import { title } from "process";
import Link from "next/link";
import api from "@/api"

export default async function ItemsPage({ searchParams }: { searchParams: { search: string } }) {
  const { results } = await api.item.search(searchParams.search)

  // console.log(results);
  return (
    <section>
      <article className="grid gap-4 " style={{ padding: '1% 0' }}>
        {results.map((item) => (
          <Link href={`${item.id}`} key={item.id} className="flex gap-3">  
            <img src={item.thumbnail} alt={item.title} />
            <div>
            {item.currency_id && (
                <p className="font-bold text-lg">
                    {Number(item.price).toLocaleString('es-AR', { style: "currency", currency: item.currency_id })}
                </p>
            )}
              <p>{item.title}</p>
            </div>
            <span className="ml-auto text-sm opacity-40 capitalize"> {item.seller.nickname.toLocaleLowerCase()} </span>
          </Link>
        ))}
      </article>
    </section>
  );
}
