import {NextResponse} from "next/server";
import {collection, deleteDoc, doc, getDocs, query, where} from "firebase/firestore";
import {database} from "@/config/Firebase";

export async function GET(_: Request, context: any) {
    try {
        const {params} = context;
        const phoneNumber = params.contactId;

        let phone;
        if (phoneNumber[0] === '0') {
            phone = '62' + phoneNumber.substring(1)
        } else {
            phone = phoneNumber.substring(1)
        }

        const q = query(collection(database, "contacts"), where("phone", "==", phone));
        const querySnapshot = await getDocs(q);

        // const contacts = querySnapshot.docs.map((doc) => doc.data());
        const contact = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        if (contact.length > 0) {
            return NextResponse.json({
                status: 200,
                message: "Get contact by phone",
                data: contact[0]
            });
        } else {
            return NextResponse.json({
                status: 404,
                message: "Contact not found"
            }, {status: 404});
        }
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
            error: error
        }, {status: 500})
    }
}

export async function DELETE(_: Request, context: any) {
    try {
        const {params} = context;
        const phoneNumber = params.contactId;

        let phone;
        if (phoneNumber[0] === '0') {
            phone = '62' + phoneNumber.substring(1)
        } else {
            phone = phoneNumber.substring(1)
        }

        const q = query(collection(database, "contacts"), where("phone", "==", phone));
        const querySnapshot = await getDocs(q);

        const contacts = querySnapshot.docs.map((doc) => doc.data());

        if (contacts.length > 0) {
            const docRef = doc(database, 'contacts', querySnapshot.docs[0].id);
            await deleteDoc(docRef);

            return NextResponse.json({
                status: 200,
                message: "Delete contact by phone"
            });
        } else {
            return NextResponse.json({
                status: 404,
                message: "Contact not found"
            }, {status: 404});
        }
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
            error: error
        }, {status: 500})
    }
}