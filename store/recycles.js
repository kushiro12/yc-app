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
                    recyclesdate: recyclesdate





                })

    }),

    /*get: firestoreAction((context, id) => {
        recyclesRef.doc(id).get(id)
    }),*/

    remove: firestoreAction((context, recycle) => {
        recyclesRef.doc(recycle.id).delete()
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
    orderdRecycles: state => {
        return _.sortBy(state.recycles, 'created')
            .reverse()
    }

}
export const mutations = {
    addrecycle(state, paylaod) {
        state.recycles.push(paylaod.recycle)
    },
    updaterecycle(state, paylaod) {
        state.recycles.forEach((recycle, index) => {
            if (recycle.id === paylaod.recycle.id) {
                state.recycles.splice(index, 1, paylaod.recycle)
            }
        })
    },
    removerecycle(state, paylaod) {
        state.recycles.forEach((recycle, index) => {
            if (recycle.id === paylaod.recycle.id) {
                state.recycles.splice(index, 1)
            }
        })
    }
}