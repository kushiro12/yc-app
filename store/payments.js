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


    paymentadd: firestoreAction((context, { name, address, address2, tell, payment, email }) => {
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
                    created: firebase.firestore.FieldValue.serverTimestamp(),


                    // done: false,
                    // created: firebase.firestore.FieldValue.serverTimestamp()

                })

    }),

    /*get: firestoreAction((context, id) => {
        paymentsRef.doc(id).get(id)
    }),*/

    remove: firestoreAction((context, payment) => {
        paymentsRef.doc(payment.id).delete()
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
    orderdPayment: state => {
        return _.sortBy(state.payments, 'created')
            .reverse()
    }

}
export const mutations = {
    addpayment(state, paylaod) {
        state.payments.push(paylaod.payment)
    },
    updatepayment(state, paylaod) {
        state.payments.forEach((payment, index) => {
            if (payment.id === paylaod.payment.id) {
                state.payments.splice(index, 1, paylaod.payment)
            }
        })
    },
    removepayment(state, paylaod) {
        state.payments.forEach((payment, index) => {
            if (payment.id === paylaod.payment.id) {
                state.payments.splice(index, 1)
            }
        })
    }
}