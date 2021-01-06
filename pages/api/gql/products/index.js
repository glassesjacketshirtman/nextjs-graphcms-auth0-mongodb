import client from 'lib/graphcms';

const query = `
  query Products {
    products () {
      id
      title
    }
  }
`;

export default async function Products(_, res) {
  try {
    const { products } = await client.request(query);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
