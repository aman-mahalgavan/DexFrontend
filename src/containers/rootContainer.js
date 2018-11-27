import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeContainer from './homeContainer';
import { Paper, Card, CardContent, List, ListItem, ListItemText, Typography, Button, Grid } from '@material-ui/core';
import { getOwners, getAccounts } from '../actions/actions';
import SimpleDialogWrapped from '../components/dialog';
import AddOwner from '../components/addOwner';
import AddProduct from '../components/addProduct';

let sampleData = ['Owner 1', 'Owner 2', 'Owner 3', 'Owner 4', 'Owner 5'];
const emails = ['username@gmail.com', 'user02@gmail.com'];
class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            addOwnerPopup: false,
            addProductPopup: false,
        };
    }

    handleAddOwnerPopup = () => {
        this.state.addOwnerPopup === true ? 
        this.setState({
            addOwnerPopup: false,
        }) :
        this.setState({
            addOwnerPopup: true,
        }) 
    };

    handleAddProductPopup = () => {
        this.state.addProductPopup === true ? 
        this.setState({
            addProductPopup: false,
        }) :
        this.setState({
            addProductPopup: true,
        }) 
    };

    handleGetOwners = () => {
        this.props.getOwners();
    };
    handleGetAccounts = () => {
        this.props.getAccounts();
    };

    render() {
        let list = sampleData.map(obj => {
            return (
                <ListItem key={obj}>
                    <ListItemText primary={obj} style={styles.listItemText} />
                </ListItem>
            )
        });
        return (

            <Grid container spacing={24}>
                <Grid item xs={12} >
                    <h3>Welcome to the Dex Application</h3>
                    {/* <Button onClick={this.props.getOwners}>
                        Click to fetch all the Owners
                    </Button> */}
                </Grid>
                <Grid item xs={6} style={{maxWidth: '48%'}}>
                    <Typography>All Owners</Typography>
                    <pre>
                        {this.props.allOwners ? JSON.stringify(this.props.allOwners) : null}
                    </pre>
                </Grid>
                <Grid item xs={6} style={{maxWidth: '48%'}}>
                    <Typography>All Accounts</Typography>
                    <pre>
                        {this.props.allAccounts ? JSON.stringify(this.props.allAccounts): null}
                    </pre>
                </Grid>
                <Grid item xs={6}>
                    <Card style={styles.card}>
                        <HomeContainer />
                    </Card>

                </Grid>
                <Grid item xs={6}>
                    <Card style={styles.card}>
                        <h3>More Functionalities</h3>
                        <Button style={{ display: "block" }} onClick={this.handleAddOwnerPopup}> Add Owner </Button>
                        <Button style={{ display: "block" }} onClick={this.handleAddProductPopup}> Add Product </Button>
                        <Button style={{ display: "block" }} onClick={this.handleGetOwners}> Get Owners </Button>
                        <Button style={{ display: "block" }} onClick={this.handleGetAccounts}> Get Account </Button>
                        <Button style={{ display: "block" }}> Add ETH </Button>
                        <Button style={{ display: "block" }}> ADD ERC20 </Button>
                        <Button style={{ display: "block" }}> Withdraw ETH  </Button>

                        {/* <Typography>Selected: {this.state.selectedValue}</Typography> */}
                        {/* <br /> */}
                        {/* <Button onClick={this.handleAddOwnerPopup}>Open simple dialog</Button> */}
                    </Card>
                </Grid>

                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.addOwnerPopup}
                    onClose={this.handleAddOwnerPopup}
                    component={
                        <AddOwner style={{padding: '5%', minWidth:'400px', minHeight: '300px'}}
                                  heading={"Add Owner"} 
                                  placeholder={"Name of the new Owner"} 
                                  action={(val) => {alert("New Owner Added -> " + JSON.stringify(val))}}
                                  textFieldLabel={"Name"}        
                        />
                    }
                />
                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.addProductPopup}
                    onClose={this.handleAddProductPopup}
                    component={
                        <AddProduct style={{padding: '5%', minWidth:'400px', minHeight: '300px'}}
                                  heading={"Add PRODUCT"} 
                                  placeholder={"Name of the new PRODUCT"} 
                                  action={(val) => {alert("New PRODUCT Added -> " + JSON.stringify(val))}}
                                  textFieldLabel={"Name"}        
                        />
                    }
                />
            </Grid>

        )
    }
}

// RootContainer.propTypes = {
// }


const styles = {
    rootContainer: {
        padding: '2%',
        backgroundColor: '#FEFEFE'
    },
    card: {
        minWidth: 275,
        padding: '2%'
        // maxWidth: '45%'
    },
    cardContent: {
        fontSize: 30
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    title: {
        fontSize: 25,
    },
    listItemText: {
        fontSize: '20px !important'
    }
};

const mapStateToProps = (state) => ({
    allOwners: state.ownersList,
    allAccounts: state.accountsList
})

const mapDispatchToProps = (dispatch) => {
    return {
        getOwners: () => dispatch(getOwners()),
        getAccounts: () => dispatch(getAccounts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);