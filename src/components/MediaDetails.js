import '../styles/layout/MediaDetails.scss';
import { Link } from 'react-router-dom';
const MediaDetails = (props) => {
    return (
        <section
            className="media_details_section" >
            <div className="return_link_container">
                <Link className="return_link" to="/">
                    <i className="return_link_icon fas fa-chevron-circle-left"></i>
                    <p className="return_link_title">Return</p>
                </Link>
            </div>
            < img className="media_details_img" src={props.imagePath + props.media.banner} alt="img" />
            <div className="media_details_info">
                <h3 className="media_details_title">{props.media.titleMovie ? props.media.titleMovie : props.media.titleShow}</h3>
                <p className="media_details_overview">
                    {props.media.overview}
                </p>
            </div>
        </section >
    )
}
export default MediaDetails;