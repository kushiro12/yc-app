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

    /*get: firestoreAction((context, id) => {
        desiredsRef.doc(id).get(id)
    }),*/

    remove: firestoreAction((context, desired) => {
        desiredsRef.doc(desired.id).delete()
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
    orderdDesireds: state => {
        return _.sortBy(state.desireds, 'created')
            .reverse()
    }

}
export const mutations = {
    adddesired(state, paylaod) {
        state.desireds.push(paylaod.desired)
    },
    updatedesired(state, paylaod) {
        state.desireds.forEach((desired, index) => {
            if (desired.id === paylaod.desired.id) {
                state.desireds.splice(index, 1, paylaod.desired)
            }
        })
    },
    removedesired(state, paylaod) {
        state.desireds.forEach((desired, index) => {
            if (desired.id === paylaod.desired.id) {
                state.desireds.splice(index, 1)
            }
        })
    }
}