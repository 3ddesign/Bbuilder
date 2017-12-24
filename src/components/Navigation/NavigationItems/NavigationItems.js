import React from 'react';
import classes from './NavigationItems.css';
import NavigatonItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigatonItem link="/" exact>Burger Builder</NavigatonItem>
        <NavigatonItem link="/orders">Orders</NavigatonItem>
        <NavigatonItem link="/auth">Authenticate</NavigatonItem>
    </ul>
);

export default navigationItems;
