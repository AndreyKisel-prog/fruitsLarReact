import Axios from "axios";

export const fetchFruits = async () => {
    try {
        const res = await Axios.get('/api/v1/fruits');
        if (res) {
            return res.data
        }
    } catch (error) {
        return [{
            field: 'fruits',
            msg: 'Допустимые значения остатка: от 0 до 10.'
        }];
    }
}

export const fetchUpdateFruits = () => {

}
