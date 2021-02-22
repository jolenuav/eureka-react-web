import FsCollections from '../collections';
import FirestoreRepository from '../FirestoreRepository';

export default class ClientRepository extends FirestoreRepository {
  constructor() {
    super(FsCollections.CLIENTS);
  }
}
