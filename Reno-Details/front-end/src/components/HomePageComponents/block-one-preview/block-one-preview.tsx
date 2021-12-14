import React from 'react';
import previewImg from './../../../components/images/HomePage/renault-vector-logo.svg';
import './block-one-preview.css'


function BlockOnePreview() {

    return  (
        <div className="wrapper_home_block_one">
            <div className="home_block_one">
                <h1 className='title_preview'>Автозапчастини для Renault</h1>
                <img className="previewImg" src={previewImg} alt={"previewImg"} />
                <p className='text_arrow'>Виберіть модель<br /><p className='icon_arrow'>&#9660;</p></p>
            </div>
        </div>
    )
}


export default BlockOnePreview;