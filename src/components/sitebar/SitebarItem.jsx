
const SitebarItem = (props) => {
    const active = props.sitebarActive === props.title ? 'active' : ''

    return (
        <div className='sitebar__item' onClick={() => props.setSibarActive(props.title)}>
            <div className={`sitebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

export default SitebarItem
