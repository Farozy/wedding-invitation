import toast from "react-hot-toast";

export const Toast = async (type: string, msg: string, position: any, icon: string) => {
    return new Promise((resolve, reject) => {
        if(type === 'success') {
            toast.error(msg, {
                duration: 4000,
                position: position,
                style: {
                    background: '#212529',
                    color: '#f8f9fa'
                },
                icon: icon,
            })
        } else {
            toast.error(msg, {
                duration: 4000,
                position: position,
                style: {
                    background: '#212529',
                    color: '#f8f9fa'
                },
                icon: icon,
            })
        }
    })
}