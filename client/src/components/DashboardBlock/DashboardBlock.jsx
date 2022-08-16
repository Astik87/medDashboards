import './style.css'

const DashboardBlock = (props) => {
    const {title, icon, children, className} = props

    return (
        <div className={"dashboard-block "+className}>
            <div className="dashboard-block-title"><span>{title}</span> {icon && <img src={icon} alt="icon"/>}</div>
            <div className="dashboard-block-content">
                {children}
            </div>
        </div>
    )
}

export default DashboardBlock
