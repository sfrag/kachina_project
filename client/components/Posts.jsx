import React from 'react'
import MenuComponent from './Menu.jsx'
import { Link } from 'react-router-dom'
//import { Grid, Image, Container } from 'semantic-ui-react'
import { Row, Col } from 'antd';

var objects ={'tokyo':[
    {'title':'Lorem ipsum dolor sit amet ','link':'https://www.nomadicmatt.com/travel-guides/japan-travel-tips/tokyo/', 'text':'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? '},
    {'title':'Consectetur adipiscing elit','link':'https://asiatravelbug.com/blog/tokyo-itinerary-7-days-japan-travel/', 'text':'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
    {'title':'Sed do eiusmod tempor incididunt ut labore','link':'https://japonismo.com/blog/que-ver-y-hacer-en-tokio-guia-basica-de-viaje', 'text':'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
    {'title':'Dolore magna aliqua','link':'http://www.itchban.com/blog/2017/9/11/japan-travel-blog-tokyo-part-01', 'text':'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? '}]
};



const Posts = (props) => (
    <div className="root-wrapper">
        <div className="content-wrapper">
            <MenuComponent>{props}</MenuComponent>{console.log(objects[props.match.params.search])}
            <div className="gutter-example">
                { (objects[props.match.params.search])?
                    objects[props.match.params.search].map(function(object, i){
                        return <Col xs={24} sm={24} md={8} lg={8} xl={8} key={i}>
                            <a target="_blank" href={object.link}><div className="photo-text"><h2>{object.title}</h2></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" />
                            <div>{object.text}</div></a>
                        </Col>
                    }):''
                }
            </div>
        </div>
    </div>
);


export default Posts