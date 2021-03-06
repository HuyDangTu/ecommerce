import React from 'react';
import Card from './card';
import './card_block.scss';

const CardBlock = (props) => {
    
    const renderCards = () =>(
        props.list ? props.list.map((card,i)=>
            (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <Card
                key={i}
                grid="card_grid"
                {...card}
            />
            </div>
        ))
        :null
    )
    
    return (
        <div className='card_block'>
            <div className='card_container'>
                {
                    props.title ?
                    <div className='card_title'>
                        {props.title}
                    </div>
                    :null
                }
                <div className='cards_wrapper'>
                <div className="row no-gutters">
                    {renderCards()}
                </div>
                </div>
            </div>
        </div>
    );
};

export default CardBlock;