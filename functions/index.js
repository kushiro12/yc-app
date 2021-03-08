const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);


// ------継続契約-----

exports.sendPushMessage = functions.firestore
    .document("users/{userId}")
    .onCreate(async (snapshot, context) => {
        const userId = snapshot.id;
        const db = admin.firestore()
        db.collection('users').doc(userId)
            .get()
            .then(doc => {
                const user = doc.data()



                const msg = {
                    to: user.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-d78d07a69a74463284332fbd5cc17167',

                    dynamic_template_data: {
                        name: user.name,
                        address: user.address,
                        addresstwo: user.address2,
                        tell: user.tell,
                        range: user.papertype2,
                        month: user.month,
                        payment: user.payment,
                        precent: user.precent,
                        precenttwo: user.precent2,
                        paper: user.papertype1,
                        papertwo: user.kodomo,
                        paperthree: user.school,
                        paperfor: user.sports,
                        paperfive: user.japannews,




                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-078faafcfa464b8ba4490c86796c1d6a',

                    dynamic_template_data: {
                        name: user.name,
                        address: user.address,
                        addresstwo: user.address2,
                        tell: user.tell,
                        range: user.papertype2,
                        month: user.month,
                        payment: user.payment,
                        precent: user.precent,
                        precenttwo: user.precent2,
                        paper: user.papertype1,
                        papertwo: user.kodomo,
                        paperthree: user.school,
                        paperfor: user.sports,
                        paperfive: user.japannews,
                        email: user.email




                    }


                }





                sgMail.send(msg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            })
    });





// -----新規契約-----

exports.sendnewcontruct = functions.firestore
    .document("newcontructs/{newcontructId}")
    .onCreate(async (snapshot, context) => {
        const newcontructId = snapshot.id;
        const db = admin.firestore()
        db.collection('newcontructs').doc(newcontructId)
            .get()
            .then(doc => {
                const newcontruct = doc.data()



                const msg = {
                    to: newcontruct.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-a2587fe68c844b6abb3a5937c2f810dd',

                    dynamic_template_data: {
                        name: newcontruct.name,
                        address: newcontruct.address,
                        addresstwo: newcontruct.address2,
                        tell: newcontruct.tell,
                        range: newcontruct.papertype2,
                        month: newcontruct.month,
                        payment: newcontruct.payment,
                        precent: newcontruct.precent,
                        precenttwo: newcontruct.precent2,
                        paper: newcontruct.papertype1,
                        papertwo: newcontruct.kodomo,
                        paperthree: newcontruct.school,
                        paperfor: newcontruct.sports,
                        paperfive: newcontruct.japannews,




                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-dc754e94ca524deb9e5bf5a4edda144d',

                    dynamic_template_data: {
                        name: newcontruct.name,
                        address: newcontruct.address,
                        addresstwo: newcontruct.address2,
                        tell: newcontruct.tell,
                        range: newcontruct.papertype2,
                        month: newcontruct.month,
                        payment: newcontruct.payment,
                        precent: newcontruct.precent,
                        precenttwo: newcontruct.precent2,
                        paper: newcontruct.papertype1,
                        papertwo: newcontruct.kodomo,
                        paperthree: newcontruct.school,
                        paperfor: newcontruct.sports,
                        paperfive: newcontruct.japannews,
                        email: newcontruct.email




                    }


                }





                sgMail.send(msg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            });



    });


// -----配達一時停止-----

exports.pauses = functions.firestore
    .document("pauses/{pauseId}")
    .onCreate(async (snapshot, context) => {
        const pauseId = snapshot.id;
        const db = admin.firestore()
        db.collection('pauses').doc(pauseId)
            .get()
            .then(doc => {
                const pause = doc.data()



                const pausemsg = {
                    to: pause.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-75614f8a15724a9799a190a8209e3351',

                    dynamic_template_data: {
                        name: pause.name,
                        address: pause.address,
                        addresstwo: pause.address2,
                        tell: pause.tell,
                        dateRangeText: pause.dateRangeText,
                        leave: pause.leave,




                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-80f334fea4ec45d5b87744148a039f56',

                    dynamic_template_data: {
                        name: pause.name,
                        address: pause.address,
                        addresstwo: pause.address2,
                        tell: pause.tell,
                        dateRangeText: pause.dateRangeText,
                        leave: pause.leave,
                        email: pause.email




                    }


                }





                sgMail.send(pausemsg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            });



    });




// -----アクアクララ------


exports.aquas = functions.firestore
    .document("aquas/{aquaId}")
    .onCreate(async (snapshot, context) => {
        const aquaId = snapshot.id;
        const db = admin.firestore()
        db.collection('aquas').doc(aquaId)
            .get()
            .then(doc => {
                const aqua = doc.data()



                const aquamsg = {
                    to: aqua.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-91b715c24b6d4a599fc402d2b50703fa',

                    dynamic_template_data: {
                        name: aqua.name,
                        address: aqua.address,
                        addresstwo: aqua.address2,
                        tell: aqua.tell,
                        aquasdate: aqua.aquasdate,
                        aquawater: aqua.aqua.aquawater,
                        aquantity: aqua.aquantity,
                        aquatime: aqua.time,





                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-d0c2fee9b8474d00b95b038b0fa8678f',

                    dynamic_template_data: {
                        name: aqua.name,
                        address: aqua.address,
                        addresstwo: aqua.address2,
                        tell: aqua.tell,
                        email: aqua.email,
                        aquasdate: aqua.aquasdate,
                        aquawater: aqua.aqua.aquawater,
                        aquantity: aqua.aquantity,
                        aquatime: aqua.time,




                    }


                }





                sgMail.send(aquamsg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            });



    });





// -----資源回収-----

exports.recycles = functions.firestore
    .document("recycles/{recycleId}")
    .onCreate(async (snapshot, context) => {
        const recycleId = snapshot.id;
        const db = admin.firestore()
        db.collection('recycles').doc(recycleId)
            .get()
            .then(doc => {
                const recycle = doc.data()



                const recyclemsg = {
                    to: recycle.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-93f4e192f92243b1a1565e4bdc5210df',

                    dynamic_template_data: {
                        name: recycle.name,
                        address: recycle.address,
                        addresstwo: recycle.address2,
                        tell: recycle.tell,
                        recyclesdate: recycle.recyclesdate,




                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-83b2b362bade49699a48a90cb28cbae3',

                    dynamic_template_data: {
                        name: recycle.name,
                        address: recycle.address,
                        addresstwo: recycle.address2,
                        email: recycle.email,
                        tell: recycle.tell,
                        recyclesdate: recycle.recyclesdate,





                    }


                }





                sgMail.send(recyclemsg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            });



    });


// -----お支払い方法の変更-----
exports.payments = functions.firestore
    .document("payments/{paymentId}")
    .onCreate(async (snapshot, context) => {
        const paymentId = snapshot.id;
        const db = admin.firestore()
        db.collection('payments').doc(paymentId)
            .get()
            .then(doc => {
                const payment = doc.data()



                const paymentmsg = {
                    to: payment.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-60529ecf23514e70ae74b56851251794',

                    dynamic_template_data: {
                        name: payment.name,
                        address: payment.address,
                        addresstwo: payment.address2,
                        tell: payment.tell,
                        payment: payment.payment,




                    }


                }
                const paymentcontact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-47bb72f014fc4b8aa517731bfe490ed9',

                    dynamic_template_data: {
                        name: payment.name,
                        address: payment.address,
                        addresstwo: payment.address2,
                        email: payment.email,
                        tell: payment.tell,
                        payment: payment.payment,





                    }


                }





                sgMail.send(paymentmsg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(paymentcontact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            });



    });


// -----訪問集金日時-----


exports.desireds = functions.firestore
    .document("desireds/{desiredId}")
    .onCreate(async (snapshot, context) => {
        const desiredId = snapshot.id;
        const db = admin.firestore()
        db.collection('desireds').doc(desiredId)
            .get()
            .then(doc => {
                const desired = doc.data()



                const desiredmsg = {
                    to: desired.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-c626d029431b4c7eac76892d1f501c65',

                    dynamic_template_data: {
                        name: desired.name,
                        address: desired.address,
                        addresstwo: desired.address2,
                        tell: desired.tell,
                        desiredsdate: desired.desiredsdate,
                        desiredstime: desired.desiredstime,







                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-8a5a97f23aef494b816d930da39a7144',

                    dynamic_template_data: {
                        name: desired.name,
                        address: desired.address,
                        addresstwo: desired.address2,
                        tell: desired.tell,
                        email: desired.email,
                        desiredsdate: desired.desiredsdate,
                        desiredstime: desired.desiredstime,




                    }


                }





                sgMail.send(desiredmsg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            });



    });




// -----お米通販-----



exports.rices = functions.firestore
    .document("rices/{riceId}")
    .onCreate(async (snapshot, context) => {
        const riceId = snapshot.id;
        const db = admin.firestore()
        db.collection('rices').doc(riceId)
            .get()
            .then(doc => {
                const rice = doc.data()



                const ricemsg = {
                    to: rice.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-9ecea7d82a5a4d4b879ae1436266f66c',

                    dynamic_template_data: {
                        name: rice.name,
                        address: rice.address,
                        addresstwo: rice.address2,
                        tell: rice.tell,
                        ricequantity: rice.ricequantity,
                        ricebran: rice.ricebran,
                        riceorder: rice.riceorder







                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-4339ae5ed6e147a88c62642494ca50fd',

                    dynamic_template_data: {
                        name: rice.name,
                        address: rice.address,
                        addresstwo: rice.address2,
                        tell: rice.tell,
                        email: rice.email,
                        ricequantity: rice.ricequantity,
                        ricebran: rice.ricebran,
                        riceorder: rice.riceorder




                    }


                }





                sgMail.send(ricemsg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            });



    });


// -----お試し新聞-----

exports.tryals = functions.firestore
    .document("trialss/{trialsId}")
    .onCreate(async (snapshot, context) => {
        const trialsId = snapshot.id;
        const db = admin.firestore()
        db.collection('trialss').doc(trialsId)
            .get()
            .then(doc => {
                const trials = doc.data()



                const msg = {
                    to: trials.email,
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '読売センター砂町確認用メール1',
                    templateId: 'd-61b0e91fe92c43328fdfe2fd0b871c13',

                    dynamic_template_data: {
                        name: trials.name,
                        address: trials.address,
                        addresstwo: trials.address2,
                        tell: trials.tell,
                        paper: trials.papertype1,
                        papertwo: trials.kodomo,
                        paperthree: trials.school,
                        paperfor: trials.sports,
                        paperfive: trials.japannews,
                        trialdate: trials.trialdate,




                    }


                }
                const contact = {
                    to: 'zzzbubuzzz@gmail.com',
                    from: 'no-reply@yconline.jp', // Use the email address or domain you verified above
                    subject: '新規お申し込みがありました',

                    templateId: 'd-d8eebfd7c0784db9b841d5a47662ead0',

                    dynamic_template_data: {
                        name: trials.name,
                        address: trials.address,
                        addresstwo: trials.address2,
                        tell: trials.tell,

                        paper: trials.papertype1,
                        papertwo: trials.kodomo,
                        paperthree: trials.school,
                        paperfor: trials.sports,
                        paperfive: trials.japannews,
                        email: trials.email,
                        trialdate: trials.trialdate,




                    }


                }





                sgMail.send(msg)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
                return sgMail.send(contact)

                    .then(() => console.log('send mail success'))
                    .catch(err => console.log(err))
            })
    });
