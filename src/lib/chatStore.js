import { create } from 'zustand';
import useUserStore from './userStore';

const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlock: false,
    isReceiverUserBlock: false,
    changeChat: (chatId, user) => {
        const currentUser = useUserStore.getState().currentUser;

        // IF USER IS BLOCKED
        if (user.blocked.includes(currentUser.id)) {
            return set({
                chatId: chatId,
                user: null,
                isCurrentUserBlock: true,
                isReceiverUserBlock: false,
            });
        }
        // IF RECEIVER IS BLOCKED
        else if (currentUser.blocked.includes(user.id)) {
            return set({
                chatId: chatId,
                user: user,
                isCurrentUserBlock: false,
                isReceiverUserBlock: true,
            });
        }
        //IF NO ONE IS BLOCK
        else{
            return set({
                chatId: chatId,
                user: user,
                isCurrentUserBlock: false,
                isReceiverUserBlock: false,
            });
        }
    },
    changeBlock: () => {
        set((state) => ({
            ...state,
            isReceiverUserBlock: !state.isReceiverUserBlock
        }));
    },
}));

export default useChatStore;
