const UserToggle = ({user}) => {
    return (
        <div className='topbar__right-user'>
            <div className='topbar__right-user__image'>
                <img src={user.image} alt='' />
            </div>
            <div className='topbar__right-user__name'>{user.display_name}</div>
        </div>
    );
};

export default UserToggle;
