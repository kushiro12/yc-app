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

    /*get: firestoreAction((context, id) => {
        usersRef.doc(id).get(id)
    }),*/
    updateUser: firestoreAction((context, user) => {
        usersRef.doc(user.id).update(
        )
    }),
    remove: firestoreAction((context, user) => {
        usersRef.doc(user.id).delete()
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
    orderdUsers: state => {
        return _.sortBy(state.users, 'created')
            .reverse()
    }

}
export const mutations = {
    addUser(state, paylaod) {
        state.users.push(paylaod.user)
    },
    // updateUser(state, paylaod) {
    //     state.users.forEach((user, index) => {
    //         if (user.id === paylaod.user.id) {
    //             state.users.splice(index, 1, paylaod.user)
    //         }
    //     })
    // },
    removeUser(state, paylaod) {
        state.users.forEach((user, index) => {
            if (user.id === paylaod.user.id) {
                state.users.splice(index, 1)
            }
        })
    }
}