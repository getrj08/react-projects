import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';

const LoanGraphContents = (props) => {

    var months = []
    var principals = []
    var interests = []
    var totalValues = []
    var displayValues = {}
    const [next,setNext] = useState(0)

    const data = props.data
    const totalYears = []
    var graphData = {}
    console.log(data)
    
    
    const buildData = (data) => {
        
        data.forEach(element => {
            let dateValue = element.date.toString()
            let total = element.borrowerPaymentAmount + element.interest;
            let year = dateValue.substring(0,3)
            months.push(dateValue.substring(0,10))
            principals.push(element.borrowerPaymentAmount)
            interests.push(element.interest)
            totalValues.push(total)
            
        });
        
    }

    buildData(data)
    //console.log(months)
    months.forEach(month => {
        let year = month.substring(0,4)
        if(!totalYears.includes(year)) {
            totalYears.push(year)
        }
    })
    console.log(totalYears)
    

    /*const buildYearlyData = (data) => {
        console.log('graph year values inside builfing yearly data')
        console.log(graphYearValues)

        for(let i = 0;i<data.length;i++) {
            let element = data[i]
            let dateValue = element.date.toString()
            let total = element.borrowerPaymentAmount + element.interest;
            let year = dateValue.substring(0,3);
            graphYearValues[year].months.push(dateValue.substring(0,10))
            graphYearValues[year].principals.push(element.borrowerPaymentAmount)
            graphYearValues[year].interests.push(element.interest)
            graphYearValues[year].totalValues.push(total)
            
            }
        }
        /*data.forEach(element => {
            let dateValue = element.date.toString()
            let total = element.borrowerPaymentAmount + element.interest;
            let year = dateValue.substring(0,3);
            console.log(graphYearValues[year])

            //graphYearValues[year].months.push(dateValue.substring(0,10))
            //graphYearValues[year].principals.push(element.borrowerPaymentAmount)
            //graphYearValues[year].interests.push(element.interest)
            //graphYearValues[year].totalValues.push(total)
            
        });
    }*/

    

    console.log('graph year values')
    const getGraphYearValues = (totalYears) => {
        return new Promise((resolve,reject) => {
            let i=0
            for(;i<totalYears.length;i++) {
                displayValues[totalYears[i]] = {
                    months : [] , 
                    principals : [] , 
                    interests : [],
                    totalValues : [],
                    totalAmount : 0
                }
            }
            resolve(displayValues)
        })
    }


    getGraphYearValues(totalYears).then(displayValues => {
        for(let i=0;i<data.length;i++) {
            let element = data[i];
            let dateValue = element.date.toString()
            let total = element.borrowerPaymentAmount + element.interest;
            let year = dateValue.substring(0,4);
            //console.log(year)
            displayValues[year].months.push(dateValue.substring(0,10))
            displayValues[year].principals.push(element.borrowerPaymentAmount)
            displayValues[year].interests.push(element.interest)
            displayValues[year].totalValues.push(total)
            displayValues[year].totalAmount = parseInt(displayValues[year].totalAmount + total)
        }

    })
    
    //buildYearlyData(data)
    console.log('final display values')
    console.log(displayValues)

    const buildSeriesData = (displayValues) => {
        return new Promise((resolve) => {
            setTimeout(console.log(displayValues) , 1000)
            resolve()
        })
    }

    buildSeriesData(displayValues).then(
        () => {
            console.log('done finishing')
            console.log(displayValues)
            console.log('finisehd displaying')
        }

    )
    console.log('loading optins nw')

    var options = {
        chart : {
            type: 'column'
        },
        title: {
            text: 'Loan Chart'
        },
        xAxis : {
            categories : totalYears,//months,
            title : {
                text : "year"
            }
        },
        yAxis : {
            min : 0,
            title : {
                text : "Principal + Interest + Total"
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} Rs</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series : [
            {
                name : "Years",
                data : [
                    {
                        name : "2021",

                        y : 111036,
                    },
                    {
                        name : '2022',
                        y : 213916
                    },
                    {
                        name : '2023',
                        y : 203025
                    },
                    {
                        name : '2024',
                        y : 191091
                    },
                    {
                        name : '2025',
                        y : 177974
                    },
                    {
                        name : '2026',
                        y : 83528
                    }
                ]    
            }
                    /*{name : 'principals',data : principals},
                    {name : 'interest' , data : interests},
                    {name : 'total' , data : totalValues} */
                    
                    
                ]
        
    }


    return(
        <>
            {console.log('loading hicharts')}
            {console.log(displayValues)}
            {console.log(options)}
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}

export default LoanGraphContents