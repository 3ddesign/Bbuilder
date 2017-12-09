import React from 'react';
import classes from './NavigationItems.css';
import NavigatonItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigatonItem link="/" active>Burger Builder</NavigatonItem>
        <NavigatonItem link="/">Checkout</NavigatonItem>
    </ul>
);

export default navigationItems;
