import Table from '../components/table/Table';
import customersList from '../assets/JsonData/customers-list.json';

const customerTableHead = [
    'STT',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location',
]

const renderTableHead = (item,index) => (
    <th key={index}>{item}</th>
)

const renderTableBody = (item,index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const Customers = () => {
    return (
        <div className='page'>
            <h2 className='page-header'>Customers</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table 
                                limit='10'
                                headData={customerTableHead}
                                bodyData={customersList}
                                renderHead={(item,index) => renderTableHead(item,index)}
                                renderBody={(item, index) =>renderTableBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
