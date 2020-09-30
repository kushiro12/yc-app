import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const pausesRef = db.collection('pauses')

export const strict = false

export const state = () => ({
    pauses: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('pauses', pausesRef)
    }),


    pauseadd: firestoreAction((context, { name, address, address2, tell, leave, dateRangeText, email }) => {
        if (name.trim())
            pausesRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    dateRangeText: dateRangeText,
                    done: false,
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    leave: leave,



                    // done: false,
                    // created: firebase.firestore.FieldValue.serverTimestamp()

                })

    }),

    /*get: firestoreAction((context, id) => {
        pausesRef.doc(id).get(id)
    }),*/

    remove: firestoreAction((context, pause) => {
        pausesRef.doc(pause.id).delete()
    }),

    toggle: firestoreAction((context, pause) => {
        pausesRef.doc(pause.id).update(
            {

                done: !pause.done
            }
        )


    })


}



export const getters = {
    orderdPauses: state => {
        return _.sortBy(state.pauses, 'created')
            .reverse()
    }

}

