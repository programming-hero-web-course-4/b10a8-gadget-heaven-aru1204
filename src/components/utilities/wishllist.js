import toast from "react-hot-toast";

const grtWishlistArray = () => {
    const getWishlist = localStorage.getItem('wishlist');
    if (getWishlist) {
        const wishlistArray = JSON.parse(getWishlist);
        return wishlistArray;
    }
    else {
        return [];
    }
}

const setWishlistArray = (id) => {
    const getArray = grtWishlistArray();
    if (getArray.includes(id)) {
        return toast.error('Gadget Already Exist In Wishlist');
    }
    else {
        getArray.push(id);
    }
    const finalWishlist = JSON.stringify(getArray);
    localStorage.setItem('wishlist', finalWishlist);
    toast.success('Gadget Successfully Added To Wishlist');

}

const removeWishlistArray = (id) => {
    const getList = grtWishlistArray();
    const remaining = getList.filter(gedgetId => gedgetId != id);
    const finalWishlist = JSON.stringify(remaining);
    localStorage.setItem('wishlist', finalWishlist);
    toast.success('Gadget Successfully Removed From Wishlist');
}

export { grtWishlistArray, setWishlistArray, removeWishlistArray };