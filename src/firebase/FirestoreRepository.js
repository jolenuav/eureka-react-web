import firebase from './firebase';

export default class FirestoreRepository {
  // Connection
  collectionConnected;

  constructor(collection) {
    this.collectionConnected = firebase.firestore().collection(collection);
  }

  // Methods
  /**
   * @method getConnection() - Devuelve la conección a la collection de firestore, normalmente se usará para acceder al snapshot
   */
  getConnection() {
    return this.collectionConnected;
  }

  /**
   * @method onCreate(obj): Crear un documento en la collection
   * @param obj: Objeto con los datos a guardar
   */
  create(obj) {
    this.collectionConnected.add(obj);
  }

  /**
   * @method findAll(): Obtiene todos los documentos
   * @async
   */
  async findAll() {
    const a = await this.collectionConnected.get();
    const b = await a.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return b;
  }

  async findById(id) {
    const docRef = this.collectionConnected.doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      return {
        id: doc.id,
        data: doc.data(),
      };
    } else {
      return null;
    }
  }

  /**
   * @method onDelete(): Borrar un documento en la collection
   * @param id: ID del documento a elimindar
   */
  delete(id) {
    this.collectionConnected.doc(id).delete();
  }

  /**
   * @onUpdate (): Actualizar un documento en la collection
   * @param id: ID del Documento
   * @param task: Objeto con los datos a guardar
   */
  update(id, obj) {
    this.collectionConnected.doc(id).update(obj);
  }
}
