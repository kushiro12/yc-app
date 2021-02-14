import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const settingsRef = db.collection('settings')


export const strict = false

export const state = () => ({
    settings: [],


})


export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('settings', settingsRef)
    }),


    settingsadd: firestoreAction((context, { shopname, address }) => {
        if (name.trim())
            settingsRef.add
                ({
                    shopname: shopname,
                    address: address,

                })

    }),

}

export const getters = {
    getShopname: state => {
        return state.settings.find(settings => settings.id === id)
    }


}

