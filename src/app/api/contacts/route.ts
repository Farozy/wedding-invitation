import {NextResponse} from "next/server";
import {addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {database} from "@/config/Firebase";
import {z} from "zod";

export async function GET() {
    try {
        const result: any[] = [];

        const querySnapshot = await getDocs(collection(database, "contacts"));

        querySnapshot.forEach((doc: any) => {
            result.push({id: doc.id, ...doc.data()});
        })

        return NextResponse.json({
            status: 200,
            message: "Get all contact",
            data: result
        }, {status: 200});
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
            error: error
        }, {status: 500})
    }
}
export async function POST(req: Request, _: Response) {
    try {
        const schema = z.object({
            name: z
                .string()
                .min(1, {message: "Name field is required"}),
            phone: z
                .string()
                .min(5, {message: "Name field is required"})
        })

        const dataContact = await req.json();
        const response = schema.safeParse(dataContact);

        if (!response.success) {
            const {errors} = response.error;

            return NextResponse.json({
                error: {message: "Invalid request", errors},
            });
        }

        const phoneNumber = dataContact.phone;
        const querySnapshot = collection(database, "contacts");

        let phone;
        if (phoneNumber[0] === '0') {
            phone = '62' + phoneNumber.substring(1)
        } else {
            phone = phoneNumber.substring(1)
        }

        const q = query(collection(database, "contacts"), where("phone", "==", phone));
        const snapshot = await getDocs(q);

        const contacts = snapshot.docs.map((doc) => doc.data());

        if (contacts.length > 0) {
            return NextResponse.json({
                status: 409,
                message: "Contact is already exists"
            })
        } else {
            const contact = {
                name: dataContact.name,
                phone: phone
            };

            await addDoc(querySnapshot, contact);

            return NextResponse.json({
                status: 201,
                message: "Save contact is successfully",
                data: dataContact
            }, {status: 201});
        }
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
            error: error
        }, {status: 500})
    }
}
export async function PUT(req: Request, _: Response) {
    try {
        const schema = z.object({
            name: z
                .string()
                .min(1, {message: "Name field is required"}),
            phone: z
                .string()
                .min(5, {message: "Name field is required"})
        })

        const dataContact = await req.json();
        const response = schema.safeParse(dataContact);

        if (!response.success) {
            const {errors} = response.error;

            return NextResponse.json({
                error: {message: "Invalid request", errors},
            });
        }

        let phone;
        if (dataContact.phone[0] === '0') {
            phone = '62' + dataContact.phone.substring(1)
        } else {
            phone = dataContact.phone.substring(1)
        }

        const q = query(collection(database, "contacts"), where("phone", "==", phone));
        const querySnapshot = await getDocs(q);

        const contacts = querySnapshot.docs.map((doc) => doc.data());

        if (contacts.length > 0) {
            const contact = {
                name: dataContact.name,
                phone: phone
            };

            const docRef = doc(database, 'contacts', querySnapshot.docs[0].id);
            await updateDoc(docRef, contact);

            return NextResponse.json({
                status: 200,
                message: "Update contact by phone",
                data: dataContact
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
export async function PATCH(req: Request, _: Response) {
    try {
        const schema = z.object({
            name: z
                .string()
                .min(1, {message: "Name field is required"}),
            phone: z
                .string()
                .min(5, {message: "Name field is required"})
        })

        const dataContact = await req.json();
        const response = schema.safeParse(dataContact);

        if (!response.success) {
            const {errors} = response.error;

            return NextResponse.json({
                error: {message: "Invalid request", errors},
            });
        }

        let phone;
        if (dataContact.phone[0] === '0') {
            phone = '62' + dataContact.phone.substring(1)
        } else {
            phone = dataContact.phone.substring(1)
        }

        const q = query(collection(database, "contacts"), where("phone", "==", phone));
        const querySnapshot = await getDocs(q);

        const contacts = querySnapshot.docs.map((doc) => doc.data());

        if (contacts.length > 0) {
            const contact = {
                name: dataContact.name,
                phone: phone
            };

            const docRef = doc(database, 'contacts', querySnapshot.docs[0].id);
            await updateDoc(docRef, contact);

            return NextResponse.json({
                status: 200,
                message: "Update contact by phone",
                data: dataContact
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

export async function DELETE() {
    try {
        // const contactSnapshot = await getDocs(collection(database, "contacts"));
        const commentSnapshot = await getDocs(collection(database, "comments"));

        // contactSnapshot.forEach((doc) => {
        //     deleteDoc(doc.ref);
        // });

        commentSnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
        });

        return NextResponse.json({
            status: 200,
            message: "Delete all contact or comment is successfully",
        }, {status: 200});
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
            error: error
        }, {status: 500})
    }
}
