import React from 'react'
import { Card } from 'react-bootstrap';

const Task = (el) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                      {el}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Task
