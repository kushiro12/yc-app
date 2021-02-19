import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const newcontructsRef = db.collection('newcontructs')

export const strict = false

export const state = () => ({
    newcontructs: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('newcontructs', newcontructsRef)
    }),


    add: firestoreAction((context, { name, address, address2, email, tell, precent, precent2, sports, kodomo, japannews, papertype1, papertype2, year, month, school, payment }) => {
        if (name.trim())
            newcontructsRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    precent: precent,
                    precent2: precent2,
                    sports: sports,
                    school: school,
                    kodomo: kodomo,
                    japannews: japannews,
                    papertype1: papertype1,
                    papertype2: papertype2,
                    payment: payment,
                    year: year,
                    month: month,
                    done: false,
                    deleted: false,

                    created: firebase.firestore.FieldValue.serverTimestamp()

                })

    }),

    updatenewcontruct: firestoreAction((context, newcontruct) => {
        newcontructsRef.doc(newcontruct.id).update(newcontruct
        )
    }),

    // remove: firestoreAction((context, newcontruct) => {
    //     newcontructsRef.doc(newcontruct.id).delete()
    // }),

    deletednewcontruct: firestoreAction((context, newcontruct) => {
        newcontructsRef.doc(newcontruct.id).update(
            {

                deleted: !newcontruct.deleted
            }
        )


    }),

    toggle: firestoreAction((context, newcontruct) => {
        newcontructsRef.doc(newcontruct.id).update(
            {

                done: !newcontruct.done
            }
        )


    })


}

export const getters = {


    doneDeleted: state => {
        return state.newcontructs.filter(deleted => deleted.deleted == false)
    }
}

