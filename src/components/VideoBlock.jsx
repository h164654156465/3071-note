import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Player, BigPlayButton } from 'video-react'
import '../../node_modules/video-react/dist/video-react.css'
import BlockTitle from "../components/BlockTitle"
import BlockDescription from "../components/BlockDescription"
import UploadFile from "../components/UploadFile"

export default function VideoBlock(props) {

    const [scaling, setScaling] = useState(true);

    const handleScaling = () => {
        setScaling(!scaling)
        // console.log(scaling)
    }

    return (
        <div className="videoBlock blockContent" >
            <div className="borderLine"></div>
            <BlockTitle className="blockTitle" time={props.block.timestamp} onChangeTitle={props.handleTitle} title={props.block.title} />
              
            <Button className="iconBtn removeBtn" onClick={props.delBlock.bind(this, props.block.timestamp)}><i className="far fa-trash-alt"></i></Button>

            <div className="timeINFO date">{props.addDate}</div>
            <div className="timeINFO time">{props.addTime}</div>
            <div className="blockIcon"><i className="fab fa-youtube"></i></div>
            <button className="iconBtn scaleBtn" onClick={handleScaling}><i className="fas fa-angle-up"></i></button>
            {scaling &&
                <div className="blockMain">
                    <Player>
                        <BigPlayButton position="center" />
                        <source src={props.block.paths[0]} />
                    </Player>
                    <BlockDescription
                        description={props.block.description}
                        addDescription={props.addDescription}
                        time={props.block.timestamp}
                        handleLinker={props.handleLinker}
                    />
                    <UploadFile
                        paths={props.block.paths.length}
                        time={props.block.timestamp}
                        addFile={props.addFile}
                        delFile={props.delFile} />
                </div>
            }
        </div>
    )
}
