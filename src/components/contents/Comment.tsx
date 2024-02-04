'use client';
import React, {useEffect, useState} from 'react';
import {FaHeart, FaPaperPlane} from "react-icons/fa";
import {useFormik} from "formik";
import * as Yup from "yup";
import {database} from "@/config/Firebase";
import TimeAgo from "@/config/TimeAgo";
import {TiTimes} from "react-icons/ti";
import 'react-toastify/dist/ReactToastify.css';
import {API_CONTACT} from "@/config/API";
import {AxiosGet} from "@/config/Axios";
import {addDoc, collection, getDocs} from 'firebase/firestore';
import {Toaster} from "react-hot-toast";
import {useGlobalContext} from "@/app/context/store";
import {Toast} from "@/config/Toast";
import {DateTime} from "@/config/Profiles";

interface FormValues {
    presence: string;
    message: string;
    time: string | number;
}

interface CommentProps {
    id: string;
    contact_id: string;
    message: string;
    presence: string;
    time: string;
}

export default function Comment() {
    const [comments, setComments] = useState<CommentProps[]>([]);
    const {id, phone, name} = useGlobalContext();
    const now: Date = new Date();
    const targetDate: Date = new Date(DateTime);

    const values = {
        contact_id: '',
        presence: '',
        message: '',
        time: ''
    };

    const schema = Yup.object().shape({
        presence: Yup.string().required("Status kehadiran belum dipilih"),
        message: Yup.string().required("Ucapan & do'a belum diisi")
    });

    const doFormSubmit = async (values: any) => {
        const numberPhone = phone !== '' ? phone : '';
        const response = await AxiosGet("get", API_CONTACT, numberPhone.replace(/^62/, "0"));

        if (response.code === undefined) {
            const dataComment: any = {
                contact_id: id,
                presence: values.presence,
                message: values.message,
                time: Date.now()
            };

            const querySnapshot = collection(database, "comments");

            await addDoc(querySnapshot, dataComment);
            setComments((prevComments) => [...prevComments, dataComment]);

            formik.resetForm();

            await Toast("success", `${name}, Terima kasih banyak atas ucapan dan doa yang Anda berikan`, 'top-center', '🙏');
        } else {
            await Toast('error', "Nomer WA tidak dikenali", 'top-center', '❌');
        }

        setTimeout(() => {
            formik.setSubmitting(false);
        }, 2000);
    }

    const formik = useFormik<FormValues>({
        initialValues: values,
        validationSchema: schema,
        onSubmit: doFormSubmit
    });

    const fetchDataComments = async () => {
        try {
            // Join collection / document
            const commentSnapshot = await getDocs(collection(database, "comments"));
            const comments: CommentProps[] = commentSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as CommentProps));

            const contactSnapshot = await getDocs(collection(database, "contacts"));
            const contacts = contactSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

            const combinedData = comments.map(comment => ({
                ...comment,
                contact: contacts.find(contact => contact.id === comment.contact_id),
            }));

            setComments(combinedData);
        } catch (error) {
            console.error("Firestore Error:", error);
        }
    }

    useEffect(() => {
        fetchDataComments().then();
    }, []);

    useEffect(() => {
    }, [comments]);

    return (
        <section className="m-0 p-0" id="ucapan">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="border border-[#495057] rounded-3xl shadow p-3">
                    <h1 className="font-esthetic text-center mb-3 text-[3rem]">Ucapan & Doa</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-5">
                            <label form="name" className="block mb-2 text-sm font-medium text-white">Nama</label>
                            <input
                                type="text" placeholder="Masukkan No WA" autoComplete="off" disabled value={name !== '' ? name : ''}
                                className="bg-transparent border border-[#495057] text-white text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="kehadiran"
                                   className="block mb-2 text-sm font-medium text-white">Kehadiran</label>
                            <select
                                id="kehadiran" name="presence"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.presence}
                                className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                disabled={now < targetDate}
                            >
                                <option value="" disabled>Pilih Kehadiran</option>
                                <option value="hadir">Hadir</option>
                                <option value="berhalangan">Berhalangan</option>
                            </select>
                            {formik.touched.presence && formik.errors.presence ? (
                                <div
                                    className="text-red-500 ml-1 text-xs md:text-sm lg:text-sm">{formik.errors.presence}</div>
                            ) : null}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Ucapan
                                & {`Do'a`}</label>
                            <textarea
                                id="message" rows={4} placeholder="Tulis ucapan & do'a..." name="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-[#495057] focus:ring-blue-500 focus:border-blue-500"
                                disabled={now < targetDate}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div
                                    className="text-red-500 ml-1 text-xs md:text-sm lg:text-sm">{formik.errors.message}</div>
                            ) : null}
                        </div>
                        {now < targetDate ? (
                            <div id="alert-border-1"
                                 className="flex items-center justify-center p-4 mb-4 border-t-4 text-blue-400 bg-gray-800 border-blue-800"
                                 role="alert">
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <div className="ms-3 text-sm font-medium">
                                    Acara pernikahan belum dimulai 👍
                                </div>
                                <div></div>
                            </div>
                        ) : (
                            <button
                                type="submit" disabled={formik.isSubmitting}
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 pt-2 pb-1.5 me-2 mb-2"
                            >
                            <span className="flex justify-center">
                                <FaPaperPlane className="mr-2"/> Kirim
                            </span>
                            </button>
                        )}
                    </form>
                </div>
                <div className="mt-4 overflow-y-visible overflow-hidden h-[29.8rem] scroolComment">
                    {comments.length > 0 ? (
                        comments.map((item: any, index: number) => (
                            <div
                                className="max-w-full px-3 pt-1.5 bg-gray-800 border-gray-700 mb-2 border rounded-lg shadow"
                                key={index}>
                                <div
                                    className="flex justify-between items-center border-b-[1px] border-b-[#70695D] mb-2">
                                    <div
                                        className="text-sm md:text-lg lg:text-lg">{item.contact ? item.contact.name : name}</div>
                                    <div className="text-[10px] md:text-xs lg:text-xs">{TimeAgo(item.time)}</div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-white pb-3 pr-2 text-justify"
                                       style={{whiteSpace: "pre-line"}}>
                                        {item.message}
                                    </p>
                                    {/*<p*/}
                                    {/*    className={`text-xs font-bold text-white px-1.5 pt-1 pb-0.5 rounded-lg ${item.presence === 'hadir' ? 'bg-green-700' : 'bg-red-700'}`}>*/}
                                    {/*    {item.presence.replace(/\b\w/g, (match: string) => match.toUpperCase())}*/}
                                    {/*</p>*/}
                                </div>
                                <div className="flex justify-between items-center py-1 text-xs">
                                    <p
                                        className={`text-[0.60rem] font-bold text-white px-1.5 pt-1 pb-0.5 rounded-md ${item.presence === 'hadir' ? 'bg-green-700' : 'bg-red-700'}`}>
                                        {item.presence.replace(/\b\w/g, (match: string) => match.toUpperCase())}
                                    </p>
                                    {/*<button type="button" onClick={() => replyComment(item.id)}*/}
                                    {/*        className="border focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-1.5 py-1 text-center inline-flex items-center dark:focus:ring-gray-600 bg-gray-800 border-[#70695D] text-white hover:bg-gray-700 me-2 mb-2">*/}
                                    {/*    <FaReply className="mr-2" size={10}/>*/}
                                    {/*    <span className="text-xs">Balas</span>*/}
                                    {/*</button>*/}
                                    <button>
                                        <FaHeart className="mr-2 text-red-700"/>
                                    </button>
                                    {/*<button onClick={() => handleLikeDislike(item.id)}>*/}
                                    {/*    {item.like !== undefined ?*/}
                                    {/*        item.like ? <FaHeart className="mr-2 text-red-700"/> :*/}
                                    {/*            <FaRegHeart className="mr-2"/>*/}
                                    {/*        :*/}
                                    {/*        <FaRegHeart className="mr-2"/>*/}
                                    {/*    }*/}
                                    {/*</button>*/}
                                    {/*<button>*/}
                                    {/*    <FaHeart className="mr-2 text-red-700"/>*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div
                            className="relative block w-full px-3 pb-2 pt-3 mb-4 text-base leading-5 text-white bg-red-500 rounded-lg opacity-100 font-regular text-center mx-auto">
                                <span className="flex justify-center">
                                    <TiTimes/>
                                    <span className="px-1">Belum ada pesan ucapan & {`do'a`}</span>
                                    <TiTimes className="my-auto"/>
                                </span>
                        </div>
                    )}
                </div>
            </div>
            <Toaster/>
        </section>
    );
}