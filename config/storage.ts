import { getStorage } from "firebase-admin/storage";
import firebaseAdmin from "./firebase";

const storage = getStorage(firebaseAdmin);

export default storage