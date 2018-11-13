import moment from 'moment';

export const addTimeFileName = (fullName) => {
    var regexAll = /([^\\]*)\.(\w+)$/;

    let total = fullName.match(regexAll);
    let time = new Date().getTime();
    console.log(total);

    if (total === undefined || total === null) {
        return `${fullName}_${time}`;
    }

    let fileName = total[1];
    let extension = total[2];

    if ( fileName !== null && extension === null) {
        return `${fileName}_${time}`;
    }

    if (extension !== null && fileName === null) {
        return `${extension}_${time}`;
    }

    return `${fileName}_${time}.${extension}`;
}

export const compareUserWithName = (userKV_A, userKV_B) => {
    console.log(userKV_A);
    console.log(userKV_B);

    return userKV_A.value.displayName.localeCompare(userKV_B.value.displayName);
}

export const checkUserStar = (stars, user) => {
    const uid = user.appInfos.uid;

    if (stars === null) return false;

    return stars[uid] !== undefined;
}

export const getStatus = (appInfos) => {
    //handle tin nhắn...
    if (appInfos.isOnline === true)
        return {
            icon: "online",
            text: "Đang hoạt động"
        };

    return {
        icon: "offline",
        text: formatTime('Truy cập ', appInfos.lastOnline)
    }
    // return "offline";
    // return "busy"
}

export const getChannel = (from, to) => {
    let cmp = from.localeCompare(to);

    if (cmp < 0) {
        return from + to;
    }

    return to + from;
}

export const getTimeObject = (time) => {
    let seconds = parseInt((new Date().getTime() - time) / 1000);
    let minutes = parseInt(seconds / 60);
    seconds = seconds % 60;
    let hours = parseInt(minutes / 60);
    let days = parseInt(hours / 24);

    return {
        seconds,
        minutes,
        hours,
        days
    }
}

export const formatTime = (extra, time) => {

    var lastOnline = new Date(time);

    let {
        minutes,
        hours,
        days } = getTimeObject(time);

    if (days > 7) {
        return lastOnline.toLocaleDateString();
    } else if (days > 0) {
        return `${extra}${days} ngày trước`;
    }

    if (hours > 0) {
        return `${extra}${hours} giờ trước`;
    }

    if (minutes > 0) {
        return `${extra}${minutes} phút trước`;
    }

    return `${extra}vài giây trước`;
}

export const formatChatTime = (time) => {
    return moment(time).format('MM/DD/YY, HH:mm')
}