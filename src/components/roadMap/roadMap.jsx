import { SlideRoadMap } from '../slide-roadMap/slideRoadMap'
import './roadMap.css'

export function RoadMap(){
    return(
        <div className="container_road_map">
            <h4 className="title-h4">ROAD MAP</h4>
            <div className="swiper">
                <SlideRoadMap/>
            </div>
        </div>
    )
}