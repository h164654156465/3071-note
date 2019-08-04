import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import UploadFile from "../components/UploadFile"
import BlockTitle from "../components/BlockTitle"

export default function TextBlock(props) {

    const [scaling, setScaling] = useState(true);

    const handleScaling = () => {
        setScaling(!scaling)
        console.log(scaling)
    }

    return (
        <div className="textBlock blockContent">
            <div className="borderLine"></div>
            <BlockTitle className="blockTitle" time={props.block.timestamp} onChangeTitle={props.handleTitle} title={props.block.title} />
            <Button className="iconBtn removeBtn" onClick={props.delBlock.bind(this, props.block.timestamp)}><i className="far fa-trash-alt"></i></Button>
            <form className="checkContainer">
                <input className="check" type="checkbox" />
            </form>
            <div className="mark"><i className="far fa-bookmark"></i></div>
            <div className="timeINFO date">{props.addDate}</div>
            <div className="timeINFO time">{props.addTime}</div>
            <div className="blockIcon"><i className="fas fa-quote-right"></i></div>
            <button className="iconBtn scaleBtn" onClick={handleScaling}><i className="fas fa-angle-up"></i></button>
            {scaling &&
                <div className="blockMain">
                    <div>{props.handleLinker(props.text)}</div>
                    <UploadFile
                        time={props.block.timestamp}
                        addFile={props.addFile}
                        delFile={props.delFile} />
                </div>
            }
        </div>
    )
}
