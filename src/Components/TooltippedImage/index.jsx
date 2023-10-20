import React from 'react'
import './styles.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function TooltippedImage(props) {
    const skill = props.skill;
    return (
        <>
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-${skill.name}`}>
                        <strong>{skill.name}</strong>.
                    </Tooltip>
                }>
                <img key={skill.name} src={skill.image} data-rh={skill.name} alt={skill.name} className="skill-icon" />
            </OverlayTrigger>
        </>
    )
}
