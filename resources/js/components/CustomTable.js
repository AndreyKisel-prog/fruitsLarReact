import {Button, Col, Row, Table} from "react-bootstrap";

function CustomTable({items, isLoading, calculateStockBalance}) {
    return (
        <Table striped bordered hover className="mt-5 text-center justify-center">
            <thead>
            <tr>
                <th>#</th>
                <th>Наименование</th>
                <th>Количество</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
            {!isLoading ? (
                    items.length > 0 ? (
                            items.map(({id, product_name, stock_balance}, index) =>
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{product_name}</td>
                                    <td>{stock_balance}</td>
                                    <td>
                                        <Row className="mx-0">
                                            <Button
                                                as={Col}
                                                variant="primary"
                                                size="sm"
                                                className="mx-2"
                                                    onClick={() => calculateStockBalance(id, ++stock_balance)}
                                            >+</Button>
                                            <Button
                                                as={Col}
                                                variant="secondary"
                                                size="sm"
                                                className="mx-2"
                                                onClick={() => calculateStockBalance(id, --stock_balance)}
                                            >-</Button>
                                        </Row>
                                    </td>
                                </tr>
                            ))
                        : <tr>
                            <td colSpan="6"><p className="text-center m-5">На складе нет фруктов.</p></td>
                        </tr>
                )
                : (<tr>
                    <td colSpan="6">
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border m-5" style={{width: '3rem', height: '3rem'}}
                                 role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </td>
                </tr>)}
            </tbody>
        </Table>
    )
}

export default CustomTable;


