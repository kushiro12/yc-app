import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const newcontructsRef = db.collection('newcontructs')

export const strict = false

export const state = () => ({
    newcontructs: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('newcontructs', newcontructsRef)
    }),


    add: firestoreAction((context, { name, address, address2, email, tell, precent, sports, kodomo, japannews, papertype1, papertype2, year, month, school, payment }) => {
        if (name.trim())
            newcontructsRef.add
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
        newcontructsRef.doc(id).get(id)
    }),*/
    updatenewcontruct: firestoreAction((context, newcontruct) => {
        newcontructsRef.doc(newcontruct.id).update(
        )
    }),
    remove: firestoreAction((context, newcontruct) => {
        newcontructsRef.doc(newcontruct.id).delete()
    }),

    toggle: firestoreAction((context, newcontruct) => {
        newcontructsRef.doc(newcontruct.id).update(
            {

                done: !newcontruct.done
            }
        )


    })


}





export const mutations = {
    addnewcontruct(state, paylaod) {
        state.newcontructs.push(paylaod.newcontruct)
    },

    removenewcontruct(state, paylaod) {
        state.newcontructs.forEach((newcontruct, index) => {
            if (newcontruct.id === paylaod.newcontruct.id) {
                state.newcontructs.splice(index, 1)
            }
        })
    }
}