import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const aquasRef = db.collection('aquas')

export const strict = false

export const state = () => ({
    aquas: [],

})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('aquas', aquasRef)
    }),


    aquaadd: firestoreAction((context, { name, address, address2, tell, email, aquasdate, aquawater, aquantity, aquatime, }) => {
        if (name.trim())
            aquasRef.add
                ({
                    name: name,
                    address: address,
                    address2: address2,
                    email: email,
                    tell: tell,
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    done: false,
                    deleted: false,
                    aquasdate: aquasdate,
                    aquawater: aquawater,
                    aquantity: aquantity,
                    aquatime: aquatime,





                })

    }),

    updateaqua: firestoreAction((context, aqua) => {
        aquasRef.doc(aqua.id).update(aqua
        )
    }),

    remove: firestoreAction((context, aqua) => {
        aquasRef.doc(aqua.id).delete()
    }),

    deletedaqua: firestoreAction((context, aqua) => {
        aquasRef.doc(aqua.id).update(
            {

                deleted: !aqua.deleted
            }
        )


    }),

    toggle: firestoreAction((context, aqua) => {
        aquasRef.doc(aqua.id).update(
            {

                done: !aqua.done
            }
        )


    })

}

export const getters = {


    doneDeleted: state => {
        return state.aquas.filter(deleted => deleted.deleted == false)
    }
}

