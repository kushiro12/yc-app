import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const usersRef = db.collection('users')


export const state = ( ) => ({
    users:[]
})

export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users',usersRef)
}),

 add: firestoreAction((context,name,) =>{
    {
        usersRef.add({
            name: xxx,
            done:false,
            email: xxx,
            address: name,
            tell: name,
            type: name,
            period: name,
 

        })
    }
    
}),
remove: firestoreAction((context, id) => {
usersRef.doc(id).delete()
}),

toggle: firestoreAction((context,user) =>{
    usersRef.doc(users.id).update(
        {
            done:!user.don
        }
    )

})
}
