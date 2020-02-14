import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    const CardsArray = robots.map((user, i) => {
        return (
            <Card
                key={user.id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email} />
        );
    })
    return (
        <div>
            {CardsArray}
        </div>
    )
}

export default Cardlist;
