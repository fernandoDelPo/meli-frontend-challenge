const api = {
  fetch: async (id: string) => {
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(
            (res) =>
                res.json() as Promise<{
                    id: string;
                    title: string;
                    thumbnail: string;
                    price: number;
                    official_store_name: string;
                    currency_id: string;
                    seller: {
                        nickname: string;
                    };
                }>
        );
    const { plain_text } = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(
            (res) =>
                res.json() as Promise<{
                    plain_text: string;
                }>
        );
    return {
      ...item,
      description: plain_text
    }
  },
  item: {      
    search: (query: string) =>
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`).then(
        (res) =>
          res.json() as Promise<{
            results: {
              id: string;
              title: string;
              thumbnail: string;
              price: number;
              official_store_name: string;
              currency_id: string;
              seller: {
                nickname: string;
              };
            }[]
          }>
      )
  }
};

export default api;