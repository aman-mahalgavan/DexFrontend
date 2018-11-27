import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeContainer from './homeContainer';
import { Paper, Card, CardContent, List, ListItem, ListItemText, Typography, Button, Grid } from '@material-ui/core';
import { getOwners, getAccounts, addOwner } from '../actions/actions';
import SimpleDialogWrapped from '../components/dialog';
import AddOwner from '../components/addOwner';
import AddProduct from '../components/addProduct';
import Etherium from '../components/etherium';

let sampleData = ['Owner 1', 'Owner 2', 'Owner 3', 'Owner 4', 'Owner 5'];
const emails = ['username@gmail.com', 'user02@gmail.com'];
class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            addOwnerPopup: false,
            addProductPopup: false,
            depositETHPopup: false,
            withdrawETHPopup: false,
            depositERC20Popup: false,
            withdrawERC20Popup: false,
        };
    }

    handlePopup = (type) => {
        switch (type) {
            case 'addOwner':
                this.state.addOwnerPopup === true ? this.setState({ addOwnerPopup: false }) : this.setState({ addOwnerPopup: true });
                break;
            case 'addProduct':
                this.state.addProductPopup === true ? this.setState({ addProductPopup: false }) : this.setState({ addProductPopup: true });
                break;
            case 'addETH':
                this.state.depositETHPopup === true ? this.setState({ depositETHPopup: false }) : this.setState({ depositETHPopup: true });
                break;
            case 'withdrawETH':
                this.state.withdrawETHPopup === true ? this.setState({ withdrawETHPopup: false }) : this.setState({ withdrawETHPopup: true });
                break;
            case 'addERC20':
                this.state.depositERC20Popup === true ? this.setState({ depositERC20Popup: false }) : this.setState({ depositERC20Popup: true });
                break;
            case 'withdrawERC20':
                this.state.withdrawERC20Popup === true ? this.setState({ withdrawERC20Popup: false }) : this.setState({ withdrawERC20Popup: true });
                break;
            default:
                break;
        }
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
                <Grid item xs={6} style={{ maxWidth: '48%' }}>
                    <Typography>All Owners</Typography>
                    <pre>
                        {this.props.allOwners ? JSON.stringify(this.props.allOwners) : null}
                    </pre>
                </Grid>
                <Grid item xs={6} style={{ maxWidth: '48%' }}>
                    <Typography>All Accounts</Typography>
                    <pre>
                        {this.props.allAccounts ? JSON.stringify(this.props.allAccounts) : null}
                    </pre>
                </Grid>
                <Grid item xs={6}>
                    <Card style={styles.card}>
                        <HomeContainer />
                    </Card>

                </Grid>
                <Grid item xs={6}>
                    <Card style={styles.card}>
                        <h3>More FunaddOwnerctionalities</h3>
                        <Button style={styles.defaultButton} onClick={() => this.handlePopup('addOwner')}> Add Owner </Button>
                        <Button style={styles.defaultButton} onClick={() => this.handlePopup('addProduct')}> Add Product </Button>
                        <Button style={styles.defaultButton} onClick={this.handleGetOwners}> Get Owners </Button>
                        <Button style={styles.defaultButton} onClick={this.handleGetAccounts}> Get Account </Button>
                        <Button style={styles.defaultButton} onClick={() => this.handlePopup('addETH')}> Add ETH </Button>
                        <Button style={styles.defaultButton} onClick={() => this.handlePopup('withdrawETH')}> Withdraw ETH  </Button>
                        <Button style={styles.defaultButton} onClick={() => this.handlePopup('addERC20')}> Add ERC20 </Button>
                        <Button style={styles.defaultButton} onClick={() => this.handlePopup('withdrawERC20')}> Withdraw ERC20 </Button>

                        {/* <Typography>Selected: {this.state.selectedValue}</Typography> */}
                        {/* <br /> */}
                        {/* <Button onClick={this.handleAddOwnerPopup}>Open simple dialog</Button> */}
                    </Card>
                </Grid>

                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.addOwnerPopup}
                    onClose={() => this.handlePopup('addOwner')}
                    component={
                        <AddOwner style={{ padding: '5%', minWidth: '400px', minHeight: '300px' }}
                            heading={"Add Owner"}
                            placeholder={"Name of the new Owner"}
                            action={(owner, amount) => {
                                alert(`New Owner Added -> ${JSON.stringify(owner)} ${JSON.stringify(amount)}`);
                                // return this.props.addOwner(owner, amount);
                            }}
                            textFieldLabel={"Name"}
                        />
                    }
                />
                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.addProductPopup}
                    onClose={() => this.handlePopup('addProduct')}
                    component={
                        <AddProduct style={{ padding: '5%', minWidth: '400px', minHeight: '300px' }}
                            heading={"Add PRODUCT"}
                            placeholder={"Name of the new PRODUCT"}
                            action={(val) => { alert("New PRODUCT Added -> " + JSON.stringify(val)) }}
                            textFieldLabel={"Name"}
                        />
                    }
                />
                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.depositETHPopup}
                    onClose={() => this.handlePopup('addETH')}
                    component={
                        <Etherium style={{ padding: '5%', minWidth: '400px', minHeight: '300px' }}
                            heading={"DEPOSIT ETH"}
                            action={(val) => { alert("Deposit ETH -> " + JSON.stringify(val)) }}
                            submitButtonText={"Deposit ETH"}
                        />
                    }
                />
                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.withdrawETHPopup}
                    onClose={() => this.handlePopup('withdrawETH')}
                    component={
                        <Etherium style={{ padding: '5%', minWidth: '400px', minHeight: '300px' }}
                            heading={"WITHDRAW ETH"}
                            action={(val) => { alert("Withdraw ETH -> " + JSON.stringify(val)) }}
                            submitButtonText={"Withdraw ETH"}
                        />
                    }
                />
                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.depositERC20Popup}
                    onClose={() => this.handlePopup('addERC20')}
                    component={
                        <Etherium style={{ padding: '5%', minWidth: '400px', minHeight: '300px' }}
                        heading={"ADD ERC20"}
                        action={(val) => { alert("Deposit ERC20 -> " + JSON.stringify(val)) }}
                        submitButtonText={"Deposit ERC20"}
                        />
                    }
                />
                <SimpleDialogWrapped
                    // selectedValue={this.state.selectedValue}
                    open={this.state.withdrawERC20Popup}
                    onClose={() => this.handlePopup('withdrawERC20')}
                    component={
                        <Etherium style={{ padding: '5%', minWidth: '400px', minHeight: '300px' }}
                            heading={"WITHDRAW ERC20"}
                            action={(val) => { alert("Withdraw ERC20 -> " + JSON.stringify(val)) }}
                            submitButtonText={"Withdraw ERC20"}
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
    defaultButton: {
        display: "block", backgroundColor: 'navy', color: 'white', minWidth: '150px', margin: '10px'
    },
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
        getAccounts: () => dispatch(getAccounts()),
        addOwner: (owner, amount) => dispatch(addOwner(owner, amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);