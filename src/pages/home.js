import Banner from "../components/banner";
import Row from "../components/row";
import requests from "../request";

const Home = () => {
    return (
        <>
            <Banner />

            <Row rowID="1" title='Upcoming' fetchURL={ requests.requestUpcoming } />
            <Row rowID="2" title='popular' fetchURL={ requests.requestPopular } />
            <Row rowID="3" title='trending' fetchURL={ requests.requestTrending } />
            <Row rowID="4" title='top rated' fetchURL={ requests.requestTopRated } />
            <Row rowID="5" title='horror' fetchURL={ requests.requestHorror } />

        </>
    )
}

export default Home;