import './style.css'

const MedtouchBlock = (props) => {

    const {title, subtitle, value, color} = props

    return (
        <div className="medtouch-block">
            <div className="medtouch-block__text">
                <div className="medtouch-block__title">
                    {title}
                </div>
                <div className="medtouch-block__subtitle">
                    {subtitle}
                </div>
            </div>
            <div
                className="medtouch-block__value"
                style={{backgroundColor: color}}>
                {value}
            </div>
        </div>
    )
}

export default MedtouchBlock