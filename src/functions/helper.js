export const compareUserWithName = (userKV_A, userKV_B) => {
    return userKV_A.value.displayName.localeCompare(userKV_B.value.displayName);
}

export const checkUserStar = (stars, user) => {
    const uid = user.key;

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
        text: formatOnlineTime(appInfos.lastOnline)
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
export const formatOnlineTime = (time) => {

    var lastOnline = new Date(time);

    let { seconds,
        minutes,
        hours,
        days } = getTimeObject(time);

    if (days > 7) {
        return lastOnline.toLocaleDateString();
    } else if (days > 0) {
        return days + " ngày trước";
    }

    if (hours > 0) {
        return hours + " giờ trước";
    }

    if (minutes > 0) {
        return minutes + " phút trước";
    }

    if (seconds > 0) {
        return seconds + " giây trước";
    }

    return "1 giây trước";
}

export const formatChatTime = (time) => {
    var lastOnline = new Date(time);

    let { seconds,
        minutes,
        hours,
        days } = getTimeObject(time);

    if (days > 7) {
        return lastOnline.toLocaleDateString();
    } else if (days > 0) {
        return days + " ngày trước";
    }

    if (hours > 0) {
        return hours + " giờ trước";
    }

    if (minutes > 0) {
        return minutes + " phút trước";
    }

    if (seconds > 0) {
        return seconds + " giây trước";
    }
    
    return 'Vừa gửi';
}