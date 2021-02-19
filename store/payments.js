import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const paymentsRef = db.collection('payments')

export const strict = false

export const state = () => ({
    payments: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('payments', paymentsRef)
    }),


    paymentadd: firestoreAction((context, { name, address, address2, tell, payment, email, deleted }) => {
        if (name.trim())
            paymentsRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    tell: tell,
                    email: email,
                    payment: payment,
                    done: false,
                    deleted: false,
                    created: firebase.firestore.FieldValue.serverTimestamp(),


                    // done: false,
                    // created: firebase.firestore.FieldValue.serverTimestamp()

                })

    }),

    updatepayment: firestoreAction((context, payment) => {
        paymentsRef.doc(payment.id).update(payment
        )
    }),

    remove: firestoreAction((context, payment) => {
        paymentsRef.doc(payment.id).delete()
    }),

    deletedpayment: firestoreAction((context, payment) => {
        paymentsRef.doc(payment.id).update(
            {

                deleted: !payment.deleted
            }
        )


    }),

    toggle: firestoreAction((context, payment) => {
        paymentsRef.doc(payment.id).update(
            {

                done: !payment.done
            }
        )


    })


}

export const getters = {


    doneDeleted: state => {
        return state.payments.filter(deleted => deleted.deleted == false)
    }
}

