import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const desiredsRef = db.collection('desireds')

export const strict = false

export const state = () => ({
    desireds: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('desireds', desiredsRef)
    }),


    desiredadd: firestoreAction((context, { name, address, address2, tell, desiredsdate, desiredstime }) => {
        if (name.trim())
            desiredsRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    tell: tell,
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    done: false,
                    desiredsdate: desiredsdate,
                    desiredstime: desiredstime





                })

    }),

    updatedesired: firestoreAction((context, desired) => {
        desiredsRef.doc(desired.id).update(desired
        )
    }),

    remove: firestoreAction((context, desired) => {
        desiredsRef.doc(desired.id).delete()
    }),

    deleteddesired: firestoreAction((context, desired) => {
        desiredsRef.doc(desired.id).update(
            {

                deleted: !desired.deleted
            }
        )


    }),

    toggle: firestoreAction((context, desired) => {
        desiredsRef.doc(desired.id).update(
            {

                done: !desired.done
            }
        )


    })


}

export const getters = {


    doneDeleted: state => {
        return state.desireds.filter(deleted => deleted.deleted == false)
    }
}

