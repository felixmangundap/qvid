import { auth, firestore } from "./config";

export const userSignup = (email, password, fullName) => {
  return auth().createUserWithEmailAndPassword(email, password)
  .then(registeredUser => {
    firestore().collection("users")
    .doc(registeredUser.user.uid)
    .set({
      uid: registeredUser.user.uid,
      type: 'user',
      fullName,
      queues: [''],
    })
  })
}

export const businessSignup = (data) => {
  return auth().createUserWithEmailAndPassword(data.email, data.password)
  .then(registeredShop => {
    firestore().collection("stores")
    .add({
      address: data.address,
      distance: data.distance,
      image: data.image,
      interval: data.interval,
      limit: data.limit,
      timeClose: data.timeClose,
      timeOpen: data.timeOpen,
      store: data.store,
      requirements: data.requirements
    })
    .then(docRef => {
      const userId = registeredShop.user.uid;
      firestore().collection("users")
        .doc(userId)
        .set({
          uid: userId,
          type: 'business',
          businessId: docRef.id,
        })
    })
  })
}

export const signin = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
}

export const signout = () => {
  return auth().signOut();
}

export const signInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

export const signUpWithGoogle = (type) => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider)
  // .then(registeredUser => {
  //   firestore.collection("users")
  //   .doc(registeredUser.user.uid)
  //   .set({
  //     uid: registeredUser.user.uid,
  //     infoSetup: false,
  //     type,
  //   })
  // });
}
