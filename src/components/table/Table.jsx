import './table.css';
import {useState} from 'react';

const Table = (props) => {
    const initDataShow = props.limit
        ? props.bodyData.slice(0, props.limit)
        : props.bodyData;
    const [dataShow, setDataShow] = useState(initDataShow);
    const [currPage, setCurrPage] = useState(0);
    let pages = 1;
    let range = [];

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages =
            props.bodyData.length & (Number(props.limit) === 0)
                ? page
                : page;
        range = [...Array(pages).keys()];
    }

    const selectPage = page => {
        const start = Number(props.limit) * page;
        const end = start + Number(props.limit);

        setDataShow(props.bodyData.slice(start, end));
        setCurrPage(page)
    }

    return (
        <div className='table-wrapper'>
            <table>
                {props.headData && props.renderHead ? (
                    <thead>
                        <tr>
                            {props.headData.map((item, index) =>
                                props.renderHead(item, index)
                            )}
                        </tr>
                    </thead>
                ) : null}
                {props.bodyData && props.renderBody ? (
                    <tbody>
                        {dataShow.map((item, index) =>
                            props.renderBody(item, index)
                        )}
                    </tbody>
                ) : null}
            </table>
            <div>
                {pages > 1 ? (
                    <div className='table__pagination'>
                        {range.map((item, index) => (
                            <div
                                className={`table__pagination-item ${
                                    currPage === index ? 'active' : ''
                                }`}
                                onClick={()  => selectPage(index)}
                                key={index}
                            >
                                {item + 1}
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Table;
