import React, {useState, useEffect, useCallback} from "react";
import "../../css/FruitsPage.css";
import Axios from "axios";
import CustomTable from "./CustomTable";
import {Toast} from 'react-bootstrap';
import {fetchFruits} from "../fetch/fruits";

function FruitsPage() {
    const [fruits, setFruits] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastData, setToastData] = useState([]);
    const [errors, setErrors] = useState([]);

    const getFruits = useCallback(async () => {
        setLoading(true)
        const response = await fetchFruits();
        if (response?.msg) {
            setErrors(response);
        } else {
            setFruits(response);
        }
        setLoading(false)
    }, []);

    // изменение количества фруктов
    const calculateStockBalance = async (fruitId, newStockBalance) => {
        if (0 <= newStockBalance && newStockBalance <= 10) {
            // запрос на действие на сервер
            await Axios.patch(`/api/v1/fruits/${fruitId}`, {
                    stock_balance: newStockBalance,
                }
            ).then(res => {
                const newFruits = fruits.map((fruit) => (fruitId === fruit.id ? res.data : fruit
                ))
                setFruits(newFruits);
            })
                .catch(err => {
                    if (err.response) { // Сервер прислал ошибку (5xx, 4xx)
                        setToastData([]); // Обнуляем ошибки если были
                        setErrors([{// Уведомляем о проблемах
                            msg: err.response.data.message,
                        }]);
                    } else if (err.request) {// Клиент не получит ответ сервера или запрос не ушел
                        setToastData([]);// Обнуляем ошибки если были
                        setErrors([{// Уведомляем о проблемах
                            msg: 'Запрос не отправлен по причине отсутствия сети либо сервер недоступен'
                        }]);
                    }
                })
        } else {
            setToastData([]);// Обнуляем ошибки если были
            setErrors([{// Уведомляем о проблемах
                msg: 'Допустимые значения остатка: от 0 до 10.'
            }]);
        }
    }

    useEffect(() => {
        setShowToast(true);// При обновлении errors, показываем тосты
        // Создаем массив тостов
        errors.map((err, index) => {
            setToastData([...toastData, {
                title: 'Ошибка',
                text: `${err.msg}`,
            }]);
        });
        () => setErrors([]);
    }, [errors, setErrors]);

    // Получаем фрукты при загрузке
    useEffect(() => {
        getFruits();
    }, []);

    return (
        <div>
            <CustomTable
                items={fruits}
                isLoading={isLoading}
                calculateStockBalance={calculateStockBalance}
            />

            <div className={`Toast ${toastData.length > 0 ? 'visible' : ''}`} aria-live="polite" aria-atomic="true">
                {toastData.map((toast, index) =>
                    <Toast className="bg-warning"
                           key={index}
                           autohide
                           show={showToast}
                           delay={3000}
                           onClose={() => setShowToast(false)}>
                        <Toast.Header>
                            <strong className="mr-auto">{toast.title}</strong>
                        </Toast.Header>
                        <Toast.Body>{toast.text}</Toast.Body>
                    </Toast>
                )}
            </div>
        </div>
    )
}

export default FruitsPage
