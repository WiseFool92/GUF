import React, {Component} from 'react';
import GrantEntry from './grantentry';

// const testGrants = [
//     {id: '0', title: 'Gov Grant', agency: 'Pineapple Firm', postDate: '1/20/2021', closeDate: '12/12/2021', awardMin: '1000', awardMax: '50,000'},
//     {id: '1', title: 'Gov Grant', agency: 'Pineapple Firm', postDate: '1/20/2021', closeDate: '12/12/2021', awardMin: '1000', awardMax: '50,000'},
//     {id: '2', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '3', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '4', title: 'Gov Grant', agency: 'Pineapple Firm', postDate: '1/20/2021', closeDate: '12/12/2021', awardMin: '1000', awardMax: '50,000'},
//     {id: '5', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '6', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '7', title: 'Gov Grant', agency: 'Pineapple Firm', postDate: '1/20/2021', closeDate: '12/12/2021', awardMin: '1000', awardMax: '50,000'},
//     {id: '8', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '9', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '10', title: 'Gov Grant', agency: 'Pineapple Firm', postDate: '1/20/2021', closeDate: '12/12/2021', awardMin: '1000', awardMax: '50,000'},
//     {id: '11', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '12', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '13', title: 'Gov Grant', agency: 'Pineapple Firm', postDate: '1/20/2021', closeDate: '12/12/2021', awardMin: '1000', awardMax: '50,000'},
//     {id: '14', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '15', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '16', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '17', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '18', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '19', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '20', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '21', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '22', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '23', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '24', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '25', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '26', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '27', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '28', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '29', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '30', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '31', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '32', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '33', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '34', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '35', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '36', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
//     {id: '37', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'},
// ]

const tableHeaders = {
    fontSize: '20px',
    fontFamily: 'Roboto',
    border: '.2rem solid black'
}

const background = {
    background: '#E5E5E5',
    textAlign: 'center',
    position: 'relative',
    marginLeft: '10rem',
    marginBottom: '0rem',
    padding: '1rem',
    minHeight: '100vh'
    // marginTop: '-100vh'
}

const search = {
    textAlign: 'right',
    padding: '1rem'
}

const searchbar = {
    fontSize: '24px',
    borderRadius: '.3rem',
    height: '100%',
    boxShadow: '0rem .3rem .3rem rgba(0, 0, 0, 0.25)',
}

const searchbtn = {
    backgroundColor: '#7598CC',
    border: '.06rem solid #000000',
    color: '#FFFFFF',
    padding: '.06rem 2rem',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    boxShadow: '0rem .3rem .3rem rgba(0, 0, 0, 0.25)',
    borderRadius: '.3rem',
}

const paginationBox = {
    marginTop: '2rem',
    marginBottom: '2rem'
}

const pagination = {
    paddingLeft: '1vw',
    paddingRight: '1vw',
    color: 'blue',
    cursor: 'pointer',
    border: '.1rem solid ivory',
    marginBottom: '0rem',
    fontFamily: 'Roboto'
    
}

const paginationTitle = {
    padding: '1rem',
    marginBottom: '2rem',
    fontFamily: 'Roboto',
    fontSize: '20px'
}

class GrantSearch extends Component{
    constructor(){
        super()
        this.state={
            grantData: [],
            pageNumber: 0,
        }
    }

    postRequest(requestOptions){
        return fetch('/search_grants', requestOptions).then(token => {return token})
      }

    submitQuery = e => {   
        e.preventDefault();   
        const searchKey = e.target.searchkey.value;     

        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({searchKey})
        };
        
        const userToken = this.postRequest(requestOptions)

        // RESPONSE FROM SERVER GOES HERE
        userToken.then(function(response) {
            return response.json()
        }).then((data) => {
            this.setState({grantData: data})
        });
    }

    render(){
        // const grantData = testGrants;
        const grantData = this.state.grantData; 
        var pagedGrants;
        if (grantData.length > 0){
            pagedGrants = grantData.slice(this.state.pageNumber*10, (this.state.pageNumber+1)*10);
        }
        else {
            pagedGrants = [];
        }

        let paginationResults = [];

     
        for (let i=0; i<Math.ceil((grantData.length/10)); i++){
            paginationResults.push(i+1);
        }

        return(
            <>

            <div style={background}>
                <form style={search} onSubmit={this.submitQuery}>
                    <input style={searchbar} placeholder="Keyword Search" name="searchkey" />
                    <button style={searchbtn} type='submit'>Search</button>
                </form>
            
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={tableHeaders}>Grant Id</th>
                            <th style={tableHeaders}>Title</th>
                            <th style={tableHeaders}>Agency</th>
                            <th style={tableHeaders}>Post Date</th>
                            <th style={tableHeaders}>Close Date</th>
                            <th style={tableHeaders}>Min Award</th>
                            <th style={tableHeaders}>Max Award</th>
                            <th style={tableHeaders}>Watch Grant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagedGrants.map((grant) =>
                            <GrantEntry
                                key={grant.index}
                                id={grant.OpportunityID}
                                title={grant.OpportunityTitle}
                                agency={grant.AgencyName}
                                postDate={grant.PostDate}
                                closeDate={grant.CloseDate}
                                awardMin={grant.AwardFloor}
                                awardMax={grant.AwardCeiling}
                                color='#27ad1d'
                                content="Track"
                            />
                        )}
                    </tbody>            
                </table>
                <div style = {paginationBox}>
                    <span style={paginationTitle}>Page:</span>
                    {paginationResults.map((page) => 
                        <span style={pagination} onClick={() => this.setState({pageNumber: page-1})}>{page}</span>
                    )}
                </div>
            </div>
            </>
        )
    }
}

export default GrantSearch;