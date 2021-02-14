import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const ricesRef = db.collection('rices')

export const strict = false

export const state = () => ({
    rices: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('rices', ricesRef)
    }),


    riceadd: firestoreAction((context, { name, address, address2, tell, email, rice_bran, rice_quantity, rice_order }) => {
        if (name.trim())
            ricesRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    done: false,
                    deleted: false,
                    ricebran: rice_bran,
                    ricequantity: rice_quantity,
                    riceorder: rice_order,

                })

    }),

    updaterice: firestoreAction((context, rice) => {
        ricesRef.doc(rice.id).update(rice
        )
    }),

    remove: firestoreAction((context, rice) => {
        ricesRef.doc(rice.id).delete()
    }),

    deletedrice: firestoreAction((context, rice) => {
        ricesRef.doc(rice.id).update(
            {

                deleted: !rice.deleted
            }
        )


    }),

    toggle: firestoreAction((context, rice) => {
        ricesRef.doc(rice.id).update(
            {

                done: !rice.done
            }
        )


    })


}

export const getters = {


    doneDeleted: state => {
        return state.rices.filter(deleted => deleted.deleted == false)
    }
}

