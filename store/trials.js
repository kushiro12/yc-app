import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const trialsRef = db.collection('trials')

export const strict = false

export const state = () => ({
    trials: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('trials', trialsRef)
    }),


    trialadd: firestoreAction((context, { name, address, address2, email, tell, sports, kodomo, japannews, papertype1, school, }) => {
        if (name.trim())
            trialsRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    sports: sports,
                    school: school,
                    kodomo: kodomo,
                    japannews: japannews,
                    papertype1: papertype1,
                    done: false,
                    created: firebase.firestore.FieldValue.serverTimestamp()

                })

    }),

    /*get: firestoreAction((context, id) => {
        trialsRef.doc(id).get(id)
    }),*/
    updatetrial: firestoreAction((context, trial) => {
        trialsRef.doc(trial.id).update(
        )
    }),
    remove: firestoreAction((context, trial) => {
        trialsRef.doc(trial.id).delete()
    }),

    toggle: firestoreAction((context, trial) => {
        trialsRef.doc(trial.id).update(
            {

                done: !trial.done
            }
        )


    })


}


export const mutations = {
    addtrial(state, paylaod) {
        state.trials.push(paylaod.trial)
    },

    removetrial(state, paylaod) {
        state.trials.forEach((trial, index) => {
            if (trial.id === paylaod.trial.id) {
                state.trials.splice(index, 1)
            }
        })
    }
}