import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  const transactions = [
    { id: 1, type: "Income", categoty: 'Salary', amount: 50, date: "Mon Jul 11" },
    { id: 2, type: "Expense", categoty: 'pet', amount: 50, date: "Mon Jul 10" },
    { id: 3, type: "Income", categoty: 'Business', amount: 150, date: "Mon Jul 9" }
  ];

  return (
    <MUIList dense={false} className={classes.list}>
    {transactions.map((transaction) => (
      <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
              <MoneyOff />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={transaction.categoty} secondary={`$${transaction.amount} - ${transaction.date}`}/>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick="">
              <Delete/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Slide>
    ))}
    </MUIList>
  )
}

export default List
