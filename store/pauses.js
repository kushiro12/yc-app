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


    pauseadd: firestoreAction((context, { name, address, address2, tell, email, pausesdate, pausewater, pausentity, pausetime }) => {
        if (name.trim())
            pausesRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    done: false,
                    deleted: false,
                    pausesdate: pausesdate,
                    pausewater: pausewater,
                    pausentity: pausentity,
                    pausetime: pausetime,





                })

    }),

    updatepause: firestoreAction((context, pause) => {
        pausesRef.doc(pause.id).update(pause
        )
    }),

    remove: firestoreAction((context, pause) => {
        pausesRef.doc(pause.id).delete()
    }),

    deletedpause: firestoreAction((context, pause) => {
        pausesRef.doc(pause.id).update(
            {

                deleted: !pause.deleted
            }
        )


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


    doneDeleted: state => {
        return state.pauses.filter(deleted => deleted.deleted == false)
    }
}

