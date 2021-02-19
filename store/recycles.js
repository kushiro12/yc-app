import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const recyclesRef = db.collection('recycles')

export const strict = false

export const state = () => ({
    recycles: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('recycles', recyclesRef)
    }),


    recycleadd: firestoreAction((context, { name, address, address2, tell, email, recyclesdate, }) => {
        if (name.trim())
            recyclesRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    done: false,
                    deleted: false,
                    recyclesdate: recyclesdate





                })

    }),

    updaterecycle: firestoreAction((context, recycle) => {
        recyclesRef.doc(recycle.id).update(recycle
        )
    }),

    remove: firestoreAction((context, recycle) => {
        recyclesRef.doc(recycle.id).delete()
    }),

    deletedrecycle: firestoreAction((context, recycle) => {
        recyclesRef.doc(recycle.id).update(
            {

                deleted: !recycle.deleted
            }
        )


    }),

    toggle: firestoreAction((context, recycle) => {
        recyclesRef.doc(recycle.id).update(
            {

                done: !recycle.done
            }
        )


    })


}

export const getters = {


    doneDeleted: state => {
        return state.recycles.filter(deleted => deleted.deleted == false)
    }
}

