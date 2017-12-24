import React from 'react';
import classes from './NavigationItems.css';
import NavigatonItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigatonItem link="/" exact>Burger Builder</NavigatonItem>
        { props.isAuthenticated ? <NavigatonItem link="/orders">Orders</NavigatonItem> : null }
        {!props.isAuthenticated
            ? <NavigatonItem link="/auth">Authenticate</NavigatonItem>
            : <NavigatonItem link="/logout">Logout</NavigatonItem>
        }
    </ul>
);

export default navigationItems;
