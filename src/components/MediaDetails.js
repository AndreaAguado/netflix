import '../styles/layout/MediaDetails.scss';
const MediaDetails = (props) => {
    return (
        <section
            // style={{
            //     backgroundImage: `url("https://image.tmdb.org/t/p/original/1P3QtW1IkivqDrKbbwuR0zCYIf8.jpg")`, backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     backgroundRepeat: 'no-repeat'
            // }}
            className="media_details_section" >
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