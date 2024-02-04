export default function TimeAgo(timestamp: any) {
    const currentDate = new Date();
    const notificationDate = new Date(timestamp);
    const timeDifference = currentDate.getTime() - notificationDate.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days === 1 ? '' : 's'} yang lalu`;
    } else if (hours > 0) {
        return `${hours} hour${hours === 1 ? '' : 's'} yang lalu`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes === 1 ? '' : 's'} yang lalu`;
    } else {
        return 'Baru saja';
    }
}