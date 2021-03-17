import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from "@aws-amplify/ui-react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Drawer, List, ListItem, ListItemIcon, ListItemText, createStyles, Theme, withStyles } from "@material-ui/core";
import { EmojiPeople } from "@material-ui/icons";
import React from "react";

const drawerWidth = 240;
const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: _.transitions.create('width', {
          easing: _.transitions.easing.sharp,
          duration: _.transitions.duration.enteringScreen,
        }),
      }
  })
)

type Props = {
}
  
export const Dashboard = function (props: Props) {
    const classes = useStyles(props)
    return (
    <Container className={classes.root}>
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "Email",
            placeholder: "email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "password",
            required: true,
          }
        ]} 
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      <Container maxWidth="sm">
        <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={true}>
          <List>
            <ListItem >
              <ListItemIcon>
                <EmojiPeople/>
              </ListItemIcon>
              <ListItemText>Client Management</ListItemText>
            </ListItem>
          </List>  
        </Drawer>
      </Container>
    </AmplifyAuthenticator>
    <AmplifySignOut />
  </Container>
    )
}