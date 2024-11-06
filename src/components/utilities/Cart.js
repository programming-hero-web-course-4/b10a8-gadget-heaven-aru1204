import toast from "react-hot-toast";

const grtCartArray = () => {
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        const cartArray = JSON.parse(getCart);
        return cartArray;
    }
    else {
        return [];
    }
}

const setCartArray = (id) => {
    const getArray = grtCartArray();
    if (getArray.includes(id)) {
        return toast.error('Gadget Already Exist In Cart');
    }
    else {
        getArray.push(id);
    }
    const finalCart = JSON.stringify(getArray);
    localStorage.setItem('cart', finalCart);
    toast.success('Gadget Successfully Added To Cart');
}

const removeCartArray = (id) => {
    const getArrayList = grtCartArray();
    const remaining = getArrayList.filter(gedgetId => gedgetId != id);
    const finalCart = JSON.stringify(remaining);
    localStorage.setItem('cart', finalCart);
    toast.success('Gadget Successfully Removed From Cart');
}

export { grtCartArray, setCartArray, removeCartArray };