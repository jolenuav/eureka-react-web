import FsCollections from '../collections';
import FirestoreRepository from '../FirestoreRepository';

export default class UserRepository extends FirestoreRepository {
  constructor() {
    super(FsCollections.USERS);
  }

  async getUserByLogin(mail, password) {
    const collection = this.getConnection();
    const query = await collection
      .where('mail', '==', mail)
      .where('password', '==', password)
      .get();
    const data = query.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const user = data[0];
    return user;
  }

  async findByMail(mail) {
    const collection = this.getConnection();
    const query = await collection.where('mail', '==', mail).get();
    const data = query.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  }
}
