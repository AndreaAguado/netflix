import '../styles/layout/MediaDetails.scss';
const MediaDetails = (props) => {
    return (
        <section style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/1P3QtW1IkivqDrKbbwuR0zCYIf8.jpg")`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
            className="media_details_section" >
            < img className="media_details_img" src="https://image.tmdb.org/t/p/original/1P3QtW1IkivqDrKbbwuR0zCYIf8.jpg" alt="img" />
            <div className="media_details_info">
                <h3 className="media_details_title">Titulo</h3>
                <p className="media_details_overview">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam possimus molestiae asperiores, ut ipsum, odit laborum voluptatem voluptates sunt officiis quasi perferendis illo, facilis minima nesciunt. Accusantium, amet repudiandae?
                </p>
            </div>
        </section >
    )
}
export default MediaDetails;