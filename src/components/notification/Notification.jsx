const Notification = ({item}) => {
    return (
        <div className='notification-item'>
            <i className={item.icon}></i>
            <span className='notification-item--text'>{item.content}</span>
        </div>
    );
};

export default Notification;
