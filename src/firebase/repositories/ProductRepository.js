import FsCollections from '../collections';
import FirestoreRepository from '../FirestoreRepository';

export default class ProductRepository extends FirestoreRepository {
  constructor() {
    super(FsCollections.PRODUCTS);
  }

  async findByCommerce(commerce) {
    const collection = this.getConnection();
    const query = await collection.where('commerce', '==', commerce).get();
    const products = query.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return products;
  }

  async findByCommerceAndSection(commerce, section) {
    const collection = this.getConnection();
    const query = await collection
      .where('commerce', '==', commerce)
      .where('section', '==', section)
      .get();
    const products = query.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return products;
  }
}
