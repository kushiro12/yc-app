import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const usersRef = db.collection('users')

export const strict = false

export const state = () => ({
    users: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('users', usersRef)
    }),


    add: firestoreAction((context, { name, address, address2, email, tell, precent, sports, kodomo, japannews, papertype1, papertype2, year, month, school, payment }) => {
        if (name.trim())
            usersRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    precent: precent,
                    sports: sports,
                    school: school,
                    kodomo: kodomo,
                    japannews: japannews,
                    papertype1: papertype1,
                    papertype2: papertype2,
                    payment: payment,
                    year: year,
                    month: month,
                    done: false,
                    created: firebase.firestore.FieldValue.serverTimestamp()

                })

    }),

    updateuser: firestoreAction((context, user) => {
        usersRef.doc(user.id).update(user
        )
    }),

    remove: firestoreAction((context, user) => {
        usersRef.doc(user.id).delete()
    }),

    deleteduser: firestoreAction((context, user) => {
        usersRef.doc(user.id).update(
            {

                deleted: !user.deleted
            }
        )


    }),

    toggle: firestoreAction((context, user) => {
        usersRef.doc(user.id).update(
            {

                done: !user.done
            }
        )


    })


}

export const getters = {


    doneDeleted: state => {
        return state.users.filter(deleted => deleted.deleted == false)
    }
}

