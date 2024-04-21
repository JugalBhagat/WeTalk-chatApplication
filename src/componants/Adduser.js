import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { toast } from 'react-toastify';
import useUserStore from '../lib/userStore';

function Adduser() {
    const [searched_user, setSearched_user] = useState(null);
    const {currentUser} = useUserStore();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById("search_user").value;
        try {
            const citiesRef = collection(db, "users");

            const q = query(citiesRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                setSearched_user(querySnapshot.docs[0].data());
            }
            else {
                console.log("not found");
                toast.error("Result not found");
                setSearched_user(null);
            }

        } catch (err) {
            toast.success("Something went wrong" + err);
        }
    }
    useEffect(() => {
        if (searched_user) {
            console.log(searched_user);
        }
    }, [searched_user]);

    const handleAddUser = async () => {
        const chatRef=collection(db,"chats");
        const userChatRef=collection(db,"user-chats");
        
        try{
            const newChatRef=doc(chatRef);
            await setDoc(newChatRef,{                                 // this will create chats collection and 
                createdAt : serverTimestamp(),
                msg:[],
            });
            await updateDoc(doc(userChatRef,searched_user.id),{        // this will add record in to chat[] in user-chats (other user -> you)
                chats:arrayUnion({
                    chatId:newChatRef.id,
                    lastMessage:"",
                    receiverId:currentUser.id,
                    updatedAt:Date.now(),
                }),
            });
            await updateDoc(doc(userChatRef,currentUser.id),{         // this will add record in to chat[] in user-chats (you -> other user)
                chats:arrayUnion({
                    chatId:newChatRef.id,
                    lastMessage:"",
                    receiverId:searched_user.id,
                    updatedAt:Date.now(),
                }),
            });
            console.log(newChatRef.id);
            toast.success(searched_user.username+ " Added to Chat List");

        }catch(err)
        {
            toast.error(err);
        }
    }

    return (
        <div className='add-user'>
            <form className="d-flex justify-content-center adduser-form" onSubmit={handleOnSubmit}>
                <div className="my-signup-input-box me-2">
                    <input type="text" className="form-control form-control-add" id="search_user" name="search_user" placeholder="Search User" />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className="search-results">
                {
                    searched_user && <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <img srcSet={searched_user.avatar} alt='' className='chat-avatar' />
                            <h6 className='mx-2'>{searched_user.username}</h6>
                        </div>
                        <button type="submit" onClick={handleAddUser} className="btn btn-sm btn-outline-primary">Add</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Adduser
