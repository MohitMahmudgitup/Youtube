export const API_KEY = "AIzaSyDoBpLB2JYtsr83-kzpnCjxB9sI_VLa5Oc"
export const viewNumber =(number)=>{
    if (number >= 1_000_000) {
        return (number / 1_000_000).toFixed(1) + 'M';
    } else if (number >= 1_000) {
        return (number / 1_000).toFixed(1) + 'K';
    } else {
        return number;
    }
}